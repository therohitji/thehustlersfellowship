"""Chapter 13 draws walks, and a walk is the one thing in this course that can be drawn
PLAUSIBLY AND WRONG. A board can show circles lighting in a sensible looking order, a container
filling and emptying, distances climbing, and none of it be what breadth first, depth first or
Dijkstra actually does on that graph. Every fixture passes it. Every legend matches. It renders
clean. It is simply not the algorithm.

So this runs the algorithm. For every graph board that declares a container, it rebuilds the
walk from the board's own nodes, edges and weights and checks the board against it:

  the container    after each pop, does step.frontier hold what the real container holds,
                   in the real order
  the end served   a queue must serve its left end and a stack its right, which is the only
                   difference between the two algorithms and therefore the only thing worth
                   checking twice
  the distances    a tag that states a distance must state the real one

Boards without a frontier are skipped: they are photographs, and chapter 12 owns those.
A board can opt out with "walkCheck": false, which is for a board deliberately showing a WRONG
walk, and the reason must be written in the caption where a reader can see it.

Usage: python3 verify/check_walk.py chapters/ch13.js
"""
import json, re, sys, os
from collections import deque

def boards(path):
    src = open(path).read()
    for m in re.finditer(r"data-(?:anim|reel)='(\{.*?\})'\s*>", src, re.S):
        try: spec = json.loads(m.group(1))
        except Exception: continue
        for act in (spec.get('acts') or [spec]):
            if act.get('type') == 'graph-walk' and act.get('frontier'):
                yield act

def adjacency(act):
    adj = {n['id']: [] for n in act.get('nodes', [])}
    directed = bool(act.get('directed'))
    for e in act.get('edges', []):
        adj.setdefault(e['from'], []).append(e['to'])
        if not (directed or e.get('directed')):
            adj.setdefault(e['to'], []).append(e['from'])
    return adj

def simulate(act, adj, start):
    """Replay the walk the board's own kind implies, recording the container after every pop.
    Neighbour order is the order the edges are declared in, which is the only order a reader
    can infer from the picture."""
    kind = act['frontier']
    box, seen, order, snapshots = deque([start]), {start}, [], []
    dist = {start: 0}
    while box:
        cur = box.popleft() if kind == 'queue' else box.pop()
        order.append(cur)
        for nb in adj.get(cur, []):
            if nb not in seen:
                seen.add(nb); dist[nb] = dist[cur] + 1; box.append(nb)
        snapshots.append(list(box))
    return order, snapshots, dist

def check(path):
    problems = []
    for act in boards(path):
        if act.get('walkCheck') is False: continue
        title = act.get('title') or '(untitled)'
        steps = [s for s in act.get('steps', []) if s.get('frontier') is not None]
        if not steps: continue
        adj = adjacency(act)
        # the start is whatever the first frame has in its container
        first = steps[0]['frontier']
        if len(first) != 1:
            problems.append("%s: the first frame with a container holds %d things; a walk "
                            "starts with one" % (title, len(first)))
            continue
        order, snaps, dist = simulate(act, adj, first[0])
        drawn = [s['frontier'] for s in steps][1:]
        for i, (want, got) in enumerate(zip(snaps, drawn), start=2):
            if want != got:
                problems.append("%s: frame %d draws the box as %s, but a real %s walk holds %s"
                                % (title, i, got, act['frontier'], want))
                break
        # distances, where the board states them and the walk is unweighted
        if not any(e.get('w') is not None for e in act.get('edges', [])):
            for si, s in enumerate(act.get('steps', []), start=1):
                for nid, tag in (s.get('tags') or {}).items():
                    if re.fullmatch(r'\d+', str(tag)) and nid in dist and int(tag) != dist[nid]:
                        problems.append("%s: frame %d tags %s with %s, and it is %d hops away"
                                        % (title, si, nid, tag, dist[nid]))
    return problems

targets = sys.argv[1:] or ['chapters/ch13.js']
bad = []
for t in targets:
    if os.path.exists(t): bad += check(t)
if bad:
    for b in bad: print("  " + b)
    sys.exit("the drawn walk is not the walk, in %d place(s)" % len(bad))
print("  every drawn walk is the walk its container implies")
