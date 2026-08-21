#!/usr/bin/env python3
"""
build.py - stitches DSA Concepts into one self-contained master HTML file.

  1. course_map.json   -> curriculum (chapter + lesson titles, in order)
  2. chapters/chNN.js  -> lesson content (one JS object entry per lesson)
  3. derives each lesson state: "live" if its id exists in a chapter file, else "soon"
  4. validates every data-viz / data-anim payload before it can reach the master
  5. injects into shell.html and writes dsa-concepts-master.html

RULES
  - Never hand-edit dsa-concepts-master.html. It is generated.
  - Lesson ids must match between course_map.json and the chapter file keys.
  - Every lesson ends with the literal token __NAV__.
  - Diagrams and animations are JSON on data-viz / data-anim. No script in chapter files.
"""
import json, re, glob, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
os.chdir(HERE)

VIZ_TYPES = {'flow','dtree','state','uflow','ia','arch','component','seq','swim','journey',
             'net','kgraph','erd','wire','card','curve','scene'}
ANIM_TYPES = {'array-scan','race','tree-walk','graph-walk','vector','reveal','curve','grid','heap'}

cfg = json.load(open('course_map.json', encoding='utf-8'))
chapters = cfg['chapters']

# ---------- lesson content ----------
lesson_blocks, live_ids = [], set()
for f in sorted(glob.glob('chapters/ch*.js')):
    txt = open(f, encoding='utf-8').read().strip()
    if txt.endswith(','):
        txt = txt[:-1]
    if not txt:
        continue
    lesson_blocks.append(txt)
    for k in re.findall(r'"(\d+\.\d+)"\s*:\s*`', txt):
        live_ids.add(k)
LESSONS_BODY = ",\n\n".join(lesson_blocks)

# ---------- validate every visual payload ----------
KINDS = {'box', 'accent', 'dark', 'gold', 'warn', 'bad', 'muted'}
STATES = {'look', 'found', 'seen', 'bad', 'dead', 'range'}

def walk_kinds(o):
    """every 'kind' value anywhere in a payload, at any depth"""
    if isinstance(o, dict):
        for k, v in o.items():
            if k == 'kind' and isinstance(v, str): yield v
            else: yield from walk_kinds(v)
    elif isinstance(o, list):
        for v in o: yield from walk_kinds(v)

def check_payloads(blob):
    n_viz = n_anim = 0
    for attr, types, kind in (('data-viz', VIZ_TYPES, 'viz'), ('data-anim', ANIM_TYPES, 'anim'), ('data-reel', {'reel'}, 'reel')):
        for m in re.finditer(attr + r"='(\{.*?\})'", blob, re.S):
            raw = m.group(1)
            try:
                spec = json.loads(raw)
            except Exception as e:
                sys.exit("BUILD FAILED: %s payload is not valid JSON near offset %d\n  %s" % (kind, m.start(), e))
            if kind == 'reel':
                acts = spec.get('acts') or []
                if not acts:
                    sys.exit("BUILD FAILED: reel %r has no acts" % spec.get('title', '?'))
                for a in acts:
                    if a.get('type') not in ANIM_TYPES:
                        sys.exit("BUILD FAILED: reel act uses unknown animation type %r" % a.get('type'))
                    if not a.get('steps'):
                        sys.exit("BUILD FAILED: reel act %r has no steps" % a.get('title', '?'))
                n_anim += len(acts)
                t = 'reel'
            else:
                t = spec.get('type')
                acts = []
            if kind != 'reel' and t not in types:
                sys.exit("BUILD FAILED: unknown %s type %r (allowed: %s)" % (kind, t, ", ".join(sorted(types))))
            if kind == 'anim' and not spec.get('steps'):
                sys.exit("BUILD FAILED: animation %r has no steps" % spec.get('title', t))
            # A kind outside the palette is not a styling nit: KIND[k] comes back undefined and
            # the renderer throws on it, which surfaces far downstream as "cannot read fill".
            # A race step carries one lanes entry per track. Too few silently drops a track's
            # state for that frame; too many is a typo that renders as nothing. Neither errors.
            # A legend row promises the reader a colour they will see. When no step ever
            # paints that state the row is a lie the harness could not previously see: it
            # cost 8.4 an "already seen" colour that never appeared and cost 8.6 Act 5 the
            # one state the act is named after.
            for a in ([spec] if kind != 'reel' else acts):
                leg = a.get('legend')
                if not leg: continue
                steps = a.get('steps') or []
                # a race hides its states one level down, inside per-track lanes
                frames = [fr for st in steps for fr in ([st] + list(st.get('lanes') or []))]
                painted = {k for fr in frames for k, v in fr.items() if k in STATES and v}
                promised = {row[1] for row in leg if isinstance(row, (list, tuple)) and len(row) > 1}
                authored = set(painted)                     # states some step actually lists
                # a range board renders everything outside the window dead without listing an
                # index, so that dead is implied. It satisfies a legend row promising dead,
                # but it must never oblige the author to add one.
                if 'range' in painted: painted = painted | {'dead'}
                # ...and the reverse: a colour on the board with no row explaining it. The
                # guard only ran one way, so a step could paint red in an act whose legend
                # never mentions red and nothing complained.
                undeclared = sorted(authored - promised - {'range'})
                if undeclared:
                    sys.exit("BUILD FAILED: %s %r paints %s but the legend explains neither"
                             % (kind, a.get('title', t), ", ".join(repr(u) for u in undeclared))
                             if len(undeclared) > 1 else
                             "BUILD FAILED: %s %r paints %r and the legend does not explain it"
                             % (kind, a.get('title', t), undeclared[0]))
                unpainted = sorted(promised - painted - {'idle'})
                if unpainted:
                    sys.exit("BUILD FAILED: %s %r legend promises %s but no step paints %s"
                             % (kind, a.get('title', t), ", ".join(repr(u) for u in unpainted),
                                "it" if len(unpainted) == 1 else "them"))
            # order is the complete arrangement of what is on the table. A stale index, a
            # duplicate, or an entry past the end of the data all render as a silently
            # missing or doubled cell rather than an error.
            for a in ([spec] if kind != 'reel' else acts):
                if a.get('type') != 'array-scan': continue
                n = len(a.get('data') or spec.get('data') or [])
                for si, st in enumerate(a.get('steps') or []):
                    o = st.get('order')
                    if o is None: continue
                    real = [x for x in o if x is not None]
                    if any(not isinstance(x, int) or x < 0 or x >= n for x in real):
                        sys.exit("BUILD FAILED: %s %r step %d order has an index outside 0..%d"
                                 % (kind, a.get('title', t), si + 1, n - 1))
                    if len(set(real)) != len(real):
                        sys.exit("BUILD FAILED: %s %r step %d order lists a cell twice"
                                 % (kind, a.get('title', t), si + 1))
                # The board draws max(len(data), spec.capacity) slots ONCE, at build time. A
                # step asking for more than that renders its overflow outside the frame, which
                # is how Act 7 drew a name into a sixteenth box on a board eight boxes wide.
                cap = max(n, a.get('capacity') or n)
                for si, st in enumerate(a.get('steps') or []):
                    want = max(st.get('capacity') or 0, len(st.get('order') or []))
                    if want > cap:
                        sys.exit("BUILD FAILED: %s %r step %d needs %d slots, board draws %d"
                                 % (kind, a.get('title', t), si + 1, want, cap))
            # A heap board is the one place where a WRONG PICTURE is also a wrong claim.
            # step.at is the complete arrangement (at[slot] = the original index of the value
            # now there), so a duplicate or a missing entry silently vanishes a value from
            # both the tree and the row. And because a heap board asserts heap order by
            # DRAWING it, the arrangement is simulated against the rule the board declares:
            # spec.order 'min' or 'max'. A board that ends claiming a heap it does not hold
            # is the same class of defect as a caption stating an arithmetic it does not do.
            for a in ([spec] if kind != 'reel' else acts):
                if a.get('type') != 'heap': continue
                vals = a.get('data') or []
                n = len(vals)
                for si, st in enumerate(a.get('steps') or []):
                    at = st.get('at')
                    if at is None: continue
                    if any(not isinstance(x, int) or x < 0 or x >= n for x in at):
                        sys.exit("BUILD FAILED: heap %r step %d at has an index outside 0..%d"
                                 % (a.get('title', t), si + 1, n - 1))
                    if len(set(at)) != len(at):
                        sys.exit("BUILD FAILED: heap %r step %d at lists a value twice"
                                 % (a.get('title', t), si + 1))
                    live = st.get('n', len(at))
                    if live > len(at):
                        sys.exit("BUILD FAILED: heap %r step %d shows %d slots but arranges %d"
                                 % (a.get('title', t), si + 1, live, len(at)))
                rule = a.get('order')
                if rule in ('min', 'max'):
                    def num(v):
                        try: return float(str(v).strip())
                        except ValueError: return None
                    for si, st in enumerate(a.get('steps') or []):
                        if not st.get('settled'): continue
                        at = st.get('at') or list(range(n))
                        live = st.get('n', len(at))
                        seq = [num(vals[at[s]]) for s in range(min(live, len(at)))]
                        if any(x is None for x in seq): continue
                        for c in range(1, len(seq)):
                            par = seq[(c - 1) // 2]
                            bad = par > seq[c] if rule == 'min' else par < seq[c]
                            if bad:
                                sys.exit("BUILD FAILED: heap %r step %d is marked settled but slot "
                                         "%d holds %g against its parent %g, which breaks the %s rule"
                                         % (a.get('title', t), si + 1, c, seq[c], par, rule))
            if spec.get('type') == 'race':
                n_tracks = len(spec.get('tracks') or [])
                for si, st in enumerate(spec.get('steps') or []):
                    lanes = st.get('lanes')
                    if lanes is not None and len(lanes) != n_tracks:
                        sys.exit("BUILD FAILED: race %r step %d has %d lanes for %d tracks"
                                 % (spec.get('title', t), si, len(lanes), n_tracks))
            bad_kinds = sorted({k for k in walk_kinds(spec) if k not in KINDS})
            if bad_kinds:
                sys.exit("BUILD FAILED: %s %r uses unknown kind(s) %s (allowed: %s)"
                         % (kind, spec.get('title', t), ", ".join(repr(b) for b in bad_kinds), ", ".join(sorted(KINDS))))
            if kind == 'viz': n_viz += 1
            else: n_anim += 1
    return n_viz, n_anim

n_viz, n_anim = check_payloads(LESSONS_BODY)
print("  viz blocks ok: %d diagrams, %d animations" % (n_viz, n_anim))

# ---------- derive states ----------
live_chapter_nums = sorted({int(i.split('.')[0]) for i in live_ids})
open_ch = live_chapter_nums[0] if live_chapter_nums else 0

def js_str(s):
    return json.dumps(s, ensure_ascii=False)

items = []
for ch in chapters:
    cn = int(ch['n'])
    has_live = any(l['id'] in live_ids for l in ch['lessons'])
    flags = ''
    if cn == open_ch:
        flags += ' open:true,'
    if not has_live:
        flags += ' locked:true,'
    les = ['{id:"%s", t:%s, state:"%s"}' % (l['id'], js_str(l['t']), 'live' if l['id'] in live_ids else 'soon')
           for l in ch['lessons']]
    items.append('  { n:"%s", title:%s,%s lessons:[\n      %s\n  ]}' %
                 (ch['n'], js_str(ch['title']), flags, ',\n      '.join(les)))
COURSE_JS = 'const COURSE = [\n' + ',\n'.join(items) + '\n];'

open_lessons = sorted([i for i in live_ids if int(i.split('.')[0]) == open_ch],
                      key=lambda x: tuple(int(p) for p in x.split('.')))
active = open_lessons[0] if open_lessons else chapters[0]['lessons'][0]['id']
total = sum(len(c['lessons']) for c in chapters)
progress = round(len(live_ids) / total * 100) if total else 0

# ---------- inject ----------
shell = open('shell.html', encoding='utf-8').read()
for token, value in (('__COURSE__', COURSE_JS), ('__LESSONS__', LESSONS_BODY),
                     ('__ACTIVE__', active), ('__PROGRESS__', str(progress))):
    if token not in shell:
        sys.exit("BUILD FAILED: shell.html is missing the %s placeholder" % token)
    shell = shell.replace(token, value)

out = 'dsa-concepts-master.html'
open(out, 'w', encoding='utf-8').write(shell)

print("Built %s" % out)
print("  live lessons: %d / %d  (%d%%)" % (len(live_ids), total, progress))
print("  live chapters: %s" % (", ".join("%02d" % n for n in live_chapter_nums) or "none"))
print("  open chapter: %02d   first lesson: %s" % (open_ch, active))
print("  size: %.1f KB" % (len(shell)/1024))
