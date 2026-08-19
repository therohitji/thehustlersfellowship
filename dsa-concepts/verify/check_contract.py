"""The block and reel contract from CONSISTENCY.md sections 5 and 6, enforced.

Every rule here was already written down and every one of them had drifted somewhere:
sixteen lessons had no block 5 decision tree, three had the wrong block 4 visual, two reel
acts had fallen under the three step floor, and eight reels were under the step budget.
A rule nothing checks is a rule that decays one chapter at a time.

Usage: check_contract.py [--report]   --report lists failures without exiting non-zero.
"""
import re, json, glob, sys
from collections import defaultdict

REPORT = '--report' in sys.argv
fails = []

# block -> (regex of allowed viz types, human name)
BLOCK_VISUAL = {
    4: (r'"type":"(seq|state)"',            'seq or state'),
    5: (r'"type":"dtree"',                  'dtree'),
    6: (r'"type":"(curve|card)"',           'curve or card'),
    7: (r'"type":"(kgraph|net|arch)"',      'kgraph, net or arch'),
    9: (r'"type":"swim"',                   'swim'),
}

def lesson_segments(blob):
    keys = [(m.start(), m.group(1)) for m in re.finditer(r'"(\d+\.\d+)"\s*:', blob)]
    for i, (pos, lid) in enumerate(keys):
        end = keys[i + 1][0] if i + 1 < len(keys) else len(blob)
        yield lid, blob[pos:end]

def block_slice(seg, n):
    a = seg.find('<span class="ix">%d</span>' % n)
    if a < 0: return None
    z = min([p for p in (seg.find('<span class="ix">%d</span>' % k) for k in range(n + 1, 11)) if p > a] or [len(seg)])
    return seg[a:z]

for f in sorted(glob.glob('chapters/*.js')):
    blob = open(f).read()
    for lid, seg in lesson_segments(blob):
        if 'data-reel' in seg:
            spec = json.loads(re.search(r"data-reel='(\{.*?\})'", seg, re.S).group(1))
            acts = spec['acts']
            parts = defaultdict(list)
            for a in acts: parts[a.get('part', '?')[:6]].append(a)
            for key, lo, hi in (('Part 1', 1, 1), ('Part 2', 5, 7), ('Part 3', 4, 5), ('Part 4', 1, 1)):
                n = len(parts[key])
                if not lo <= n <= hi:
                    fails.append('%s reel: %s has %d act(s), rule is %d to %d' % (lid, key, n, lo, hi))
            if not 10 <= len(acts) <= 16:
                fails.append('%s reel: %d acts, rule is 10 to 16' % (lid, len(acts)))
            total = 0
            for a in acts:
                n = len(a.get('steps') or []); total += n
                if not 3 <= n <= 10:
                    fails.append('%s reel: act %r has %d step(s), rule is 3 to 10' % (lid, a['title'][:44], n))
            if not 70 <= total <= 100:
                fails.append('%s reel: %d steps, rule is 70 to 100' % (lid, total))
            # every Part 3 act names the Part 2 act it repeats
            for a in parts['Part 3']:
                text = (a.get('tab', '') + ' ' + a['title'] + ' ' +
                        ' '.join(s.get('say', '') for s in a.get('steps') or []))
                if not re.search(r'\bAct \d', text):
                    fails.append('%s reel: Part 3 act %r names no Part 2 act' % (lid, a['title'][:44]))
            continue
        if lid.startswith('0.'):
            # Chapter 00 is front matter: free form, still visual. The ten block contract
            # does not bind it, but its own budget does.
            words = len(re.findall(r'[A-Za-z][A-Za-z-]+', re.sub(r'<[^>]+>', ' ',
                        re.sub(r"data-(?:viz|anim|reel)='.*?'", ' ', seg, flags=re.S))))
            vis = len(re.findall(r"data-(?:viz|anim)='", seg)) + len(re.findall(r'<table>', seg))
            anims = len(re.findall(r"data-anim='", seg))
            if words > 1200: fails.append('%s front matter: %d words, ceiling is 1,200' % (lid, words))
            if vis < 4:      fails.append('%s front matter: %d visuals, floor is 4' % (lid, vis))
            if anims < 1:    fails.append('%s front matter: no animation, floor is 1' % lid)
            continue
        for n, (pat, name) in BLOCK_VISUAL.items():
            blk = block_slice(seg, n)
            if blk is None: continue
            if not re.search(pat, blk):
                got = sorted(set(re.findall(r'"type":"([a-z-]+)"', blk))) or ['nothing']
                fails.append('%s block %d has %s, rule is %s' % (lid, n, ','.join(got), name))
        # "No more than three consecutive paragraphs without a visual. If you have written
        # four, you are lecturing." Section 4, and nothing enforced it.
        body = re.sub(r"data-(?:viz|anim|reel)='.*?'", "PAYLOAD", seg, flags=re.S)
        run = worst = 0
        # A block heading and its sub break the page as effectively as a diagram does, so
        # the run resets there: the rule is about lecturing inside one block.
        for tag in re.findall(r'<p>|<div class="viz"|<div class="board"|<table>|<div class="callout|<h2>', body):
            if tag == '<p>':
                run += 1; worst = max(worst, run)
            else:
                run = 0
        if worst > 3:
            fails.append('%s has %d consecutive paragraphs with no visual, ceiling is 3' % (lid, worst))
        # A quiz whose data-correct points at nothing, or whose options are not 0..n-1,
        # silently marks every answer wrong. Nothing checked this.
        for q in re.finditer(r'<div class="quiz" data-correct="(\d+)">(.*?)</div>\s*</div>', seg, re.S):
            corr = int(q.group(1)); body = q.group(2)
            opts = [int(i) for i, _ in re.findall(r'<div class="opt" data-i="(\d+)">(.*?)</div>', body, re.S)]
            if opts != list(range(len(opts))):
                fails.append('%s quiz option indices are %s, expected 0..n-1' % (lid, opts))
            if corr not in opts:
                fails.append('%s quiz data-correct=%d but the options are %s' % (lid, corr, opts))
            if len(opts) < 3:
                fails.append('%s quiz offers only %d option(s)' % (lid, len(opts)))
            if '<div class="qexp">' not in body:
                fails.append('%s quiz has no explanation' % lid)
        blk8 = block_slice(seg, 8)
        if blk8 is not None:
            rows = len(re.findall(r'<tr><td>', blk8))
            if not 6 <= rows <= 8:
                fails.append('%s block 8 signal table has %d rows, rule is 6 to 8' % (lid, rows))

if fails:
    print('\n'.join('  ' + x for x in fails))
    print('  %d contract violation(s)' % len(fails))
    if not REPORT: sys.exit(1)
else:
    print('  block and reel contract ok')
