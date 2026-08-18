#!/usr/bin/env python3
"""House rules for chapter files. Exit code only."""
import glob, re, sys, os
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
bad = []
for f in sorted(glob.glob('chapters/ch*.js')):
    src = open(f, encoding='utf-8').read()
    body = "".join(re.findall(r'`(.*?)`', src, re.S)) or src
    for ln, line in enumerate(src.splitlines(), 1):
        if '—' in line: bad.append(f"{f}:{ln} em-dash")
        if '${' in line:     bad.append(f"{f}:{ln} dollar-brace interpolation")
    if src.count('`') % 2: bad.append(f"{f} unbalanced backticks")
    # a payload is wrapped in single quotes, so it may not contain one
    for attr in ('data-viz', 'data-anim', 'data-reel'):
        for m in re.finditer(attr + r"='(\{.*?\})'", src, re.S):
            if "'" in m.group(1):
                bad.append(f"{f} {attr} payload contains an apostrophe, which closes the attribute early")
    for lid in re.findall(r'"(\d+\.\d+)"\s*:\s*`', src):
        seg = src.split(f'"{lid}":', 1)[1]
        seg = seg.split('__NAV__', 1)
        if len(seg) < 2: bad.append(f"{f} lesson {lid} does not contain __NAV__")
if bad:
    print("FAIL: style"); [print("  - " + b) for b in bad]; sys.exit(1)
print("  style clean: no em-dash, no interpolation, balanced backticks, every lesson closes with __NAV__")
