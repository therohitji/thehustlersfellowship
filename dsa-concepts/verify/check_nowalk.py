"""Chapter 12 promises the reader, in Lesson 12.1, that everything in it is "a photograph of a
graph, never a film of somebody crossing one". That promise is the chapter's boundary against
Chapter 13, which owns traversal, and until now it was only prose.

This is the promise as a test. For every graph board, take the set of nodes painted in each
step and ask whether the next step's set is what you would get by FOLLOWING EDGES from it:
the same nodes plus some of their neighbours, and nothing that is not a neighbour. Three
consecutive steps growing that way is a walk being animated, whatever the captions say.

Deliberately narrow. A board may light any nodes it likes in any order; what it may not do is
expand along the wires, frame after frame, because that is the ripple, and the ripple belongs
to Lesson 13.1."""
import json, re, sys, glob, os

STATES = ('look', 'found', 'seen', 'bad', 'dead', 'range')
RUN = 3   # how many consecutive expansions before it is a walk rather than a coincidence

def painted(step):
    out = set()
    for k in STATES:
        v = step.get(k)
        if isinstance(v, list): out |= {x for x in v if isinstance(x, str)}
    return out

def check(path):
    src = open(path).read()
    problems = []
    for m in re.finditer(r"data-(?:anim|reel)='(\{.*?\})'", src, re.S):
        try: spec = json.loads(m.group(1))
        except Exception: continue
        for act in (spec.get('acts') or [spec]):
            if act.get('type') != 'graph-walk': continue
            adj = {}
            for e in (act.get('edges') or []):
                adj.setdefault(e['from'], set()).add(e['to'])
                adj.setdefault(e['to'], set()).add(e['from'])
            steps = act.get('steps') or []
            title = act.get('title') or spec.get('title') or '(untitled)'
            run = 0
            for i in range(1, len(steps)):
                a, b = painted(steps[i-1]), painted(steps[i])
                if not a or not (b - a):
                    run = 0; continue
                frontier = set().union(*(adj.get(n, set()) for n in a)) if a else set()
                # a step is an EXPANSION when it keeps what it had and adds only neighbours
                if a <= b and (b - a) <= frontier:
                    run += 1
                    if run >= RUN:
                        problems.append("%s: %r steps %d to %d expand along the wires, %d frames "
                                        "running. That is a walk, and a walk is Chapter 13."
                                        % (os.path.basename(path), title, i - run + 1, i + 1, run + 1))
                        break
                else:
                    run = 0
    return problems

targets = sys.argv[1:] or sorted(glob.glob('chapters/ch12.js'))
bad = []
for t in targets: bad += check(t)
if bad:
    for b in bad: print("  " + b)
    sys.exit("no-walk rule broken in %d board(s)" % len(bad))
print("  no-walk rule holds: no graph board expands along its own edges")
