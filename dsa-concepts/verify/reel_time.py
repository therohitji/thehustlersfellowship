"""The reel caption and the lesson pill both state how long the whiteboard runs. Nothing
computed it, so three reels claimed 1.5 minutes for 54 seconds and five pills had drifted
to a default ~2 min. Duration is sum(steps x speed) per act, rounded to the nearest half
minute. --check exits 1 if a claim is stale; with no flag it rewrites them."""
import re, json, glob, sys

def duration_min(spec):
    ms = 0
    for a in spec['acts']:
        ms += len(a.get('steps') or []) * (a.get('speed') or spec.get('speed') or 1500)
    return ms / 60000.0

def rounded(m):
    r = round(m * 2) / 2
    return max(r, 0.5)

def words(r):
    if r == 1: return 'about one minute'
    return 'about %s minutes' % (int(r) if r == int(r) else r)

def pill(r):
    return '~%s min' % (int(r) if r == int(r) else r)

check = '--check' in sys.argv
stale = []
for f in sorted(glob.glob('chapters/*.js')):
    src = open(f).read(); out = src
    for m in re.finditer(r"data-reel='(\{.*?\})'", src, re.S):
        spec = json.loads(m.group(1))
        r = rounded(duration_min(spec))
        cap = spec.get('caption') or ''
        want = words(r)
        got = re.search(r'about (?:[\w.]+) minutes?', cap)
        if got and got.group(0) != want:
            stale.append('%s reel caption says "%s", runs %s' % (f, got.group(0), want))
            out = out.replace(cap, cap.replace(got.group(0), want))
        # the pill belongs to the lesson the reel sits in
        lid = [x for x in re.finditer(r'"(\d+\.\d+)"\s*:', src) if x.start() < m.start()][-1]
        seg = out[lid.start():]
        pm = re.search(r'<span class="pill">(~[\d.]+ min)</span>', seg)
        if pm and pm.group(1) != pill(r):
            stale.append('%s %s pill says %s, reel runs %s' % (f, lid.group(1), pm.group(1), pill(r)))
            out = out[:lid.start()] + seg.replace(pm.group(0), '<span class="pill">%s</span>' % pill(r), 1)
    if out != src and not check: open(f, 'w').write(out)

if stale:
    print('\n'.join('  ' + s for s in stale))
    if check: sys.exit('reel durations are stale: run python3 verify/reel_time.py')
    print('  rewritten: %d claim(s)' % len(stale))
else:
    print('  reel durations match their captions and pills')
