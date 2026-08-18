# DSA Concepts (2026)

**Data structures and algorithms, made visible.** A visual-first course by
[Rohit Swerashi](https://github.com/therohitji), part of the
[Hustlers Fellowship](https://hustlersfellowship.com).

> A person who has never written a line of code finishes this course able to look at a problem
> they have never seen, describe its shape in plain language, and name the structure and
> approach it wants.

Roughly seventy percent of this course is pictures. Every idea arrives first as a situation the
reader has lived, then as an animation they can play, pause and step through, then as a diagram
of how it actually works, then as the real systems that run on it, and only then as a name.
No code is required to finish it.

**Status: in progress.** Not deployed, not linked from the landing page yet.

| | |
|---|---|
| Chapters | 20 (00 to 19) |
| Lessons | 125 |
| Written so far | Chapters 00 to 04 complete, Chapter 06 partial (6.1 and 6.9) |
| Concepts covered | 184, listed in [CONCEPTS.md](CONCEPTS.md) |
| Output | one self-contained HTML file, no runtime dependencies |

---

## Quick start

```bash
python3 build.py                 # writes dsa-concepts-master.html
open dsa-concepts-master.html    # opens in any browser, no server needed
bash verify/qa.sh                # the only green signal
```

Python 3 is the only requirement to build. Node is needed for two of the five checks.

---

## What makes this course different from the other two

The [AI PM](../ai-pm-2026) and [Build Live Products](../build-live-products-2026) courses are
text-first: you read, and figures support the reading. This one inverts that. The largest
element in a lesson is a **whiteboard animation** the reader drives, and the prose exists to
explain what they just watched.

Three things exist here that do not exist in the other two courses:

1. **A diagram engine.** Seventeen diagram types, laid out on a deterministic grid, so
   collisions are impossible by construction rather than avoided by hand. Not Mermaid: Mermaid
   auto-layout is what produces the cramped, overlapping output this course refuses to ship.
2. **A whiteboard animation engine.** Seven animation renderers with a transport player: play,
   pause, step forward, step back, reset, speed, and a live caption per frame.
3. **The reel.** Every chapter closes with a whiteboard lesson: the entire chapter replayed as
   one continuous run of animated acts, in four parts, with almost no prose.

---

## Repository layout

```
dsa-concepts/
├── README.md                  # this file
├── CONSISTENCY.md             # the authoring bible. Read before writing anything
├── CONCEPTS.md                # all 184 concepts, mapped to chapter and lesson
├── tree.yaml                  # the build tree: milestones, units, verify commands
├── course_map.json            # single source of truth for titles and order
├── build.py                   # stitches everything into the master
├── shell.html                 # all CSS, the reader, the diagram engine, the animation engine
├── chapters/
│   ├── ch00.js                # Start Here (front matter)
│   ├── ch01.js                # What a Data Structure Actually Is
│   ├── ch02.js                # The Cost of Doing Things
│   ├── ch03.js                # Arrays: The Row of Boxes
│   ├── ch04.js                # Linked Lists: The Chain
│   └── ch06.js                # Searching (the reference chapter)
├── verify/                    # the QA harness, exit codes only
│   ├── qa.sh                  # runs everything in order, stops at the first failure
│   ├── check_style.py
│   ├── check_js.sh
│   ├── check_renderers.mjs
│   ├── check_layout.mjs
│   ├── check_lesson.py
│   └── screenshots.mjs        # optional visual check, needs Playwright
└── dsa-concepts-master.html   # GENERATED. Never hand-edit
```

### How the build works

```
course_map.json  (titles, order, through lines)
chapters/chNN.js (content: raw HTML in template literals, JSON payloads on attributes)
        │  build.py
shell.html       (CSS + reader + engines + 4 placeholders)
        ▼
dsa-concepts-master.html
```

`build.py` derives lesson state on its own: a lesson is `live` if its id exists as a key in a
chapter file, otherwise it renders an honest "ships next" screen. You never set state by hand.
It also parses and validates every diagram, animation and reel payload, and refuses to build on
bad JSON or an unknown type.

**Adding a chapter is an append, never a rewrite.** A broken new chapter cannot damage a
working old one.

---

## The three lesson kinds

| Kind | Where | Structure | Prose budget |
|---|---|---|---|
| **Front matter** | Chapter 00 only | free form, still visual | under 1,200 words, 4+ visuals |
| **Concept lesson** | the default | ten fixed blocks | under 2,600 words, 6+ visuals |
| **Whiteboard lesson** | last lesson of every chapter | the reel, 4 parts | under 900 words, 6+ acts |

The ten blocks of a concept lesson, always in this order: the everyday situation, what it
actually is, watch it work, under the hood, the types, what it costs in plain English, where it
lives in real life, how problems show up, solve it live, your turn. Full detail in
[CONSISTENCY.md](CONSISTENCY.md).

---

## The visual engine

Chapter files contain **no script**. Every diagram and animation is declarative JSON on an
attribute, which keeps content files safe and lets one engine serve all 125 lessons.

```html
<div class="viz"   data-viz='{"type":"arch", ...}'></div>       <!-- a static diagram -->
<div class="board" data-anim='{"type":"array-scan", ...}'></div><!-- one animation -->
<div class="reel"  data-reel='{"acts":[ ... ]}'></div>          <!-- a whiteboard lesson -->
```

**17 diagram types:** `scene` `arch` `component` `flow` `dtree` `seq` `state` `swim` `journey`
`uflow` `ia` `net` `kgraph` `erd` `wire` `card` `curve`

**8 animation types:** `array-scan` `race` `grid` `tree-walk` `graph-walk` `vector` `curve` `reveal`

`reveal` is the interesting one: it takes any grid diagram and draws it into existence one node
at a time. Rule of thumb: if a picture explains a *result*, use `data-viz`. If it explains a
*process*, use `reveal` and let it build.

Two engine properties worth knowing before you author anything:

- **Grid nodes carry `col` and `row`, and two nodes may never share a cell.** The engine throws
  if they do. That is the no-overlap guarantee, so do not fight it with hand coordinates.
- **Hand-placed renderers heal themselves.** `scene` and `vector` labels try below, above, right
  and left, take the first slot that collides with nothing, and grow the canvas to fit.

---

## Quality gates

`bash verify/qa.sh` runs six checks in dependency order and stops at the first failure. A skip
is not a pass.

| Check | Refuses to let through |
|---|---|
| `build.py` | bad JSON payload, unknown diagram or animation type, animation with no steps |
| `check_style.py` | em-dash, `${...}`, unbalanced backticks, an apostrophe inside a payload, a lesson without `__NAV__` |
| `check_js.sh` | a master whose script does not parse |
| `check_renderers.mjs` | any registered renderer that breaks, including ones no lesson uses yet |
| `check_layout.mjs` | any diagram rendering `NaN`; any two grid nodes overlapping; any animation step that throws |
| `check_lesson.py` | wrong block count, missing animation, too few visuals or quizzes, over the word ceiling, a whiteboard lesson with fewer than six acts |

`check_layout.mjs` renders every diagram in Node against a fake DOM and walks every animation
frame. That is how **"nothing overlaps" is a build failure rather than an opinion**.

### The one check that is not automated

`verify/screenshots.mjs` captures every diagram in the built master so they can be looked at.
It needs Playwright, so it is deliberately **not** part of `qa.sh`: the harness catches
collisions and crashes, it does not catch ugly. Run it before shipping a chapter.

```bash
PLAYWRIGHT=/path/to/playwright node verify/screenshots.mjs 6.1 /tmp/shots
```

---

## Authoring a chapter

1. Read [CONSISTENCY.md](CONSISTENCY.md). All of it, once, properly.
2. Confirm the chapter and lesson titles in `course_map.json`, and read its `through_line`.
3. Create `chapters/chNN.js`. Write the concept lessons in order, ten blocks each.
4. Write the whiteboard lesson last, because it recaps what you actually wrote.
5. `bash verify/qa.sh` until green with zero skips.
6. `node verify/screenshots.mjs` and look at every diagram.
7. Tick the pre-ship checklist at the bottom of CONSISTENCY.md, honestly.

### The rule that bites hardest

Diagram payloads live inside a single-quoted HTML attribute, so **no apostrophes anywhere in a
payload**. Write "does not" instead of "doesn't", and rename a label rather than smuggling one
in. `check_style.py` catches it, but it is easier to never write it.

---

## Credits

Built by **Rohit Swerashi**, founder of GeniOS, for the Hustlers Fellowship.
Free to read and learn from. Please do not repackage or resell the content.
