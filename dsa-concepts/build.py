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
ANIM_TYPES = {'array-scan','race','tree-walk','graph-walk','vector','reveal','curve','grid'}

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
                continue
            t = spec.get('type')
            if t not in types:
                sys.exit("BUILD FAILED: unknown %s type %r (allowed: %s)" % (kind, t, ", ".join(sorted(types))))
            if kind == 'anim' and not spec.get('steps'):
                sys.exit("BUILD FAILED: animation %r has no steps" % spec.get('title', t))
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
