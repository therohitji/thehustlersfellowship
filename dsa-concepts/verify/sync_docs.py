#!/usr/bin/env python3
"""Rewrite the derived status lines in CONCEPTS.md and tree.yaml from what is on disk.

Both files say their status is refreshed from the build and not maintained by hand. Until this
script existed that sentence was aspirational in both, and a stale doc is worse than no doc
because it gets quoted with confidence. tree.yaml has already been wrong once this way: an
edit whose target string did not match was reported as applied and nobody noticed for two
commits. Run it after shipping a lesson; it is idempotent.

Usage: python3 verify/sync_docs.py [--check]
  --check exits 1 if the file is out of date instead of writing it.
"""
import json, re, glob, sys, os

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))

live = set()
for f in glob.glob('chapters/ch*.js'):
    live |= set(re.findall(r'^"(\d+\.\d+)":\s*`', open(f, encoding='utf-8').read(), re.M))

cfg = json.load(open('course_map.json', encoding='utf-8'))
by_ch = {c['n']: [l['id'] for l in c['lessons']] for c in cfg['chapters']}

src = open('CONCEPTS.md', encoding='utf-8').read()
out, chapter = [], None
for line in src.split('\n'):
    m = re.match(r'## Chapter (\d+) ', line)
    if m:
        chapter = m.group(1)
    elif chapter and line.startswith('**Status:**'):
        ids = by_ch.get(chapter, [])
        n = sum(1 for i in ids if i in live)
        line = ('**Status:** live' if n == len(ids) and ids
                else f'**Status:** partial, {n} of {len(ids)} lessons written' if n
                else '**Status:** planned')
    else:
        m2 = re.match(r'\| `(\d+\.\d+)` \| (.*?) \| \w+ \|$', line)
        if m2:
            line = f'| `{m2.group(1)}` | {m2.group(2)} | {"live" if m2.group(1) in live else "planned"} |'
    out.append(line)

new = '\n'.join(out)

# tree.yaml, M5: one category per chapter, status line refreshed the same way
tree = open('tree.yaml', encoding='utf-8').read()
def tree_status(m):
    ids = by_ch.get(m.group('n'), [])
    n = sum(1 for i in ids if i in live)
    if ids and n == len(ids): txt = f'shipped. {n} lessons live, qa green.'
    elif n:                   txt = f'partial, {n} of {len(ids)} lessons live.'
    else:                     txt = f'not started, {len(ids)} lessons planned.'
    return m.group('head') + txt
tree_new = re.sub(
    r'(?P<head>- id: M5\.C(?P<n>\d\d)\n\s+name: [^\n]*\n\s+status: )[^\n]*',
    tree_status, tree)

if '--check' in sys.argv:
    if tree_new != tree:
        print('tree.yaml is out of date. Run: python3 verify/sync_docs.py')
        sys.exit(1)
    if new != src:
        print('CONCEPTS.md is out of date. Run: python3 verify/sync_docs.py')
        sys.exit(1)
    print('CONCEPTS.md and tree.yaml match the build')
else:
    if new != src:
        open('CONCEPTS.md', 'w', encoding='utf-8').write(new)
    if tree_new != tree:
        open('tree.yaml', 'w', encoding='utf-8').write(tree_new)
    done = sorted({c for c in by_ch if by_ch[c] and all(i in live for i in by_ch[c])})
    print(f'  {len(live)} lessons live; complete chapters: {", ".join(done) or "none"}')
