#!/usr/bin/env python3
"""Structural contract for a lesson: ten blocks, the visual budget, and __NAV__.
Usage: check_lesson.py [lesson-id]   (no id = every live lesson)"""
import glob, re, sys, os, json
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))

MIN_VISUALS = 6           # seventy percent visual is a measured floor, not a vibe
MAX_WORDS   = 2600

STOP = {'that','this','with','from','into','they','them','their','what','when','which','while','every','been','were','have','your','you','the','and','for','not','but','are','is','it','of','to','a','in','on','as','so','one','more','than','only','just','also','its','it', 'thing','things','make','makes','made'}
CHAPTER_LINE = {}
for _c in json.load(open('course_map.json', encoding='utf-8'))['chapters']:
    _w = {w for w in re.findall(r"[a-z]{5,}", _c['through_line'].lower()) if w not in STOP}
    CHAPTER_LINE[_c['n'].lstrip('0') or '0'] = _w

want = sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith('-') else None
lessons = {}
for f in sorted(glob.glob('chapters/ch*.js')):
    src = open(f, encoding='utf-8').read()
    for m in re.finditer(r'"(\d+\.\d+)":\s*`(.*?)`(?=\s*,?\s*"\d+\.\d+"\s*:|\s*$)', src, re.S):
        lessons[m.group(1)] = (f, m.group(2))

if want and want not in lessons:
    print(f"FAIL: lesson {want} not found in any chapter file"); sys.exit(1)

def check_through_line(lid, body):
    """CONSISTENCY pre-ship checklist: the chapter through line appears in every lesson lead
    and every closing takeaway. It appeared once in a whole shipped chapter before this check
    existed. A paraphrase will not match literally, so this asks for a real overlap of the
    distinctive words rather than the sentence."""
    words = CHAPTER_LINE.get(lid.split('.')[0])
    if not words: return
    # One distinctive word is a real paraphrase: 3.2's lead says "presenting its bill"
    # against a through line that says "showing its bill". Two is the honest floor for a
    # short line and one for a long one, because a long line has rarer words in it.
    need = 2 if len(words) < 8 else 1
    txt = lambda seg: set(re.findall(r"[a-z]{5,}", re.sub(r'<[^>]+>', ' ', seg).lower()))
    lead = re.search(r'<p class="lead">(.*?)</p>', body, re.S)
    if lead and len(words & txt(lead.group(1))) < need:
        bad.append(f"{lid}: the chapter through line is not paraphrased in the lead")
    tail = body[-4000:]
    if len(words & txt(tail)) < need:
        bad.append(f"{lid}: the chapter through line is not paraphrased in the closing takeaway")

bad, checked = [], 0
for lid, (f, body) in sorted(lessons.items(), key=lambda kv: tuple(int(p) for p in kv[0].split('.'))):
    if want and lid != want: continue
    checked += 1
    is_board = 'class="reel"' in body
    blocks  = len(re.findall(r'<span class="ix"', body))
    vizs    = len(re.findall(r'class="viz"', body))
    anims   = len(re.findall(r'class="board"', body))
    tables  = len(re.findall(r'<table', body))
    quizzes = len(re.findall(r'class="quiz"', body))
    words   = len(re.sub(r'<[^>]+>', ' ', re.sub(r"data-(viz|anim|reel)='.*?'", ' ', body, flags=re.S)).split())
    visuals = vizs + anims + tables
    if is_board:
        # whiteboard lesson: one reel, at least six acts, almost no prose
        acts = 0
        for m in re.finditer(r"data-reel='(\{.*?\})'", body, re.S):
            try: acts = len(json.loads(m.group(1)).get('acts', []))
            except Exception as e: bad.append(f"{lid}: reel payload unreadable ({e})")
        if acts < 6:          bad.append(f"{lid}: {acts} acts, a whiteboard lesson needs at least 6")
        if words > 900:       bad.append(f"{lid}: {words} words, a whiteboard lesson must stay under 900")
        if quizzes < 2:       bad.append(f"{lid}: {quizzes} quizzes, minimum is 2")
        if '__NAV__' not in body: bad.append(f"{lid}: missing __NAV__")
        check_through_line(lid, body)
        print(f"  {lid}  WHITEBOARD  acts={acts}  visuals={visuals}  quiz={quizzes}  words={words}")
        continue
    # The meta pill states the visual count and nothing verified it, so it has been wrong
    # three times in shipped lessons. It is the number a reader trusts before they scroll.
    m_pill = re.search(r'<span class="pill">(\d+) visuals</span>', body)
    if m_pill and int(m_pill.group(1)) != visuals:
        bad.append(f"{lid}: meta pill says {m_pill.group(1)} visuals, actual count is {visuals}")

    if lid.startswith('0.'):
        # chapter 00 is front matter: free form, but still visual and still short
        if visuals < 4:       bad.append(f"{lid}: {visuals} visuals, front matter needs at least 4")
        if anims < 1:         bad.append(f"{lid}: front matter still needs one animation")
        if words > 1200:      bad.append(f"{lid}: {words} words, front matter must stay under 1200")
        if '__NAV__' not in body: bad.append(f"{lid}: missing __NAV__")
        print(f"  {lid}  FRONT MATTER  visuals={visuals} (viz {vizs}, anim {anims}, table {tables})  words={words}")
        continue
    if blocks != 10:        bad.append(f"{lid}: {blocks} numbered blocks, expected 10")
    if anims < 1:           bad.append(f"{lid}: no whiteboard animation")
    if visuals < MIN_VISUALS: bad.append(f"{lid}: {visuals} visuals, minimum is {MIN_VISUALS}")
    if quizzes < 2:         bad.append(f"{lid}: {quizzes} quizzes, minimum is 2")
    if '__NAV__' not in body: bad.append(f"{lid}: missing __NAV__")
    if words > MAX_WORDS:   bad.append(f"{lid}: {words} words, over the {MAX_WORDS} ceiling")
    check_through_line(lid, body)
    print(f"  {lid}  blocks={blocks}  visuals={visuals} (viz {vizs}, anim {anims}, table {tables})  quiz={quizzes}  words={words}")

if bad:
    print("FAIL: lesson contract"); [print("  - " + b) for b in bad]; sys.exit(1)
print(f"  lesson contract ok: {checked} lesson(s)")
