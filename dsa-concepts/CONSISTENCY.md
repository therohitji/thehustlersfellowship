# DSA Concepts (2026) - CONSISTENCY

**Read this before writing a single character of any lesson.** This is the contract for the
whole course: what it is, who it is for, how a lesson is built, how a diagram is built, how it
sounds, and what has to be true before anything ships. If a decision is not in here, it is not
a decision yet. Add it here first, then build.

The one sentence the whole course serves:

> A person who has never written a line of code finishes this course able to look at a problem
> they have never seen, describe its shape in plain language, and name the structure and
> approach it wants.

---

## 1. The promise, and what follows from it

**The reader.** Assume a smart adult who is not technical. A product manager, a founder, a
designer, a student, a career switcher. They are not stupid and they are not patient. They have
tried a DSA course before and quit, because it opened with arrays and syntax and never told
them why they should care.

**The promise.** No code is required to finish this course. Not one line. Code may appear as an
illustration in a caption; it is never the explanation and never the exercise.

**What follows from that promise, non-negotiably:**

1. **Show before you tell.** The animation comes before the definition, not after it. A reader
   who has watched something happen does not need to memorise it.
2. **Real life first, abstraction second.** Every idea enters through a situation the reader has
   personally lived. Drawers, queues, dictionaries, family trees, airport security.
3. **Notation last, and only once earned.** Big O appears only after the reader has already
   counted the steps and felt the cost. `O(log n)` is a name for something they already saw.
4. **Every method is a trade, never a winner.** There is no "best" algorithm in this course.
   There is what you paid, and what that purchase bought you.
5. **Nothing is cluttered.** No overlapping labels, no cramped diagrams, no wall of boxes.
   This is enforced by a build check, not by taste.

---

## 2. Hard rules (breaking these breaks the build)

| # | Rule | Enforced by |
|---|---|---|
| 1 | Never hand-edit `dsa-concepts-master.html`. It is generated. | convention |
| 2 | Lesson ids must match between `course_map.json` and the chapter file keys. | `build.py` |
| 3 | Every lesson ends with the literal token `__NAV__`. | `check_style.py` |
| 4 | No em-dashes anywhere, ever. Use a comma or a full stop. | `check_style.py` |
| 5 | Content is raw HTML inside a JS template literal. No Markdown, no stray backtick, no `${...}`. | `check_style.py` |
| 6 | **No apostrophes inside any `data-viz`, `data-anim` or `data-reel` payload.** The payload lives in a single-quoted attribute; an apostrophe closes it early and silently breaks the page. Write "does not" instead of "doesn't", and rename a label rather than smuggling one in. | `check_style.py` |
| 7 | No `<script>` in a chapter file. Diagrams and animations are declarative JSON only. | convention |
| 8 | No new CSS classes and no new colour values in a lesson. Use the system in section 7. | review |
| 9 | Every real-world claim must be true. No invented numbers, no invented quotes, no fake company decisions. If unsure, describe the mechanism generically instead of naming a company. | review |
| 10 | Every concept lesson has exactly ten numbered blocks, at least one whiteboard animation, at least six visuals, at least two quizzes, and at most 2,600 words. | `check_lesson.py` |
| 11 | Every chapter ends with exactly one whiteboard lesson, with at least six acts. | `check_lesson.py` |
| 12 | Zero diagram overlaps, zero `NaN` in any rendered SVG. | `check_layout.mjs` |

`bash verify/qa.sh` is the only green signal. A skip is not a pass.

---

## 3. Course shape

**20 chapters, 125 lessons.** Chapters 00 to 19. Titles and order live in `course_map.json`,
which is the single source of truth. Never invent a lesson title in a chapter file; change the
map first.

Each chapter has one **through line**: the single argument every lesson in that chapter
reinforces. It lives in `course_map.json` and must be quoted or paraphrased in at least two
places per lesson: the lead paragraph, and the closing takeaway.

### Three lesson kinds

| Kind | Where | Structure | Prose budget |
|---|---|---|---|
| **Front matter** | Chapter 00 only | free form, still visual | under 1,200 words, 4+ visuals, 1+ animation |
| **Concept lesson** | the default, everywhere | the ten blocks, section 5 | under 2,600 words, 6+ visuals |
| **Whiteboard lesson** | last lesson of every chapter | the reel, section 6 | under 900 words, 6+ acts |

### Chapter ordering logic (do not resequence casually)

Chapters are ordered so that each one creates the question the next one answers. Searching
comes before sorting because searching is what makes sorting worth paying for. Cost comes
before every structure because every structure is judged in that currency. Recursion comes
after trees because a tree is where recursion stops feeling like a trick.

---

## 4. The visual budget, and what "seventy percent visual" actually means

It is a measured floor, not a mood.

- **A concept lesson carries at least six visuals**, counting diagrams, whiteboard animations
  and tables. Target is eight to twelve.
- **Prose stays under 2,600 words**, and should usually land between 1,200 and 1,800.
- **No more than three consecutive paragraphs without a visual.** If you have written four,
  you are lecturing. Cut, or draw.
- Every visual must **carry an idea the prose does not repeat**. A diagram that restates the
  paragraph above it is decoration, and decoration is worse than nothing because it teaches the
  reader to skip visuals.
- Every diagram takes a **caption that states the takeaway**, not a description of the picture.
  Bad: "The flow of a search request." Good: "The two inputs are fixed. The only thing you get
  to choose is the box in the middle."

---

## 5. The concept lesson: ten blocks, in this order, every time

Header first: kicker, title, meta pills, one **motto**, one **lead** paragraph. The motto is a
short, slightly contrarian line that makes the reader stop. The lead states what they will be
able to do by the end.

| # | Block | Purpose | Required visual |
|---|---|---|---|
| 1 | **The Everyday Situation** | The idea arrives as a lived scene. Zero jargon. Not one technical word. | a `scene` |
| 2 | **What It Actually Is** | The plain definition, one sentence, then the shape of it. | `arch` or `flow` |
| 3 | **Watch It Work** | The heart of the lesson. The mechanism, animated, steppable. | a `board` animation |
| 4 | **Under The Hood** | What actually passes between the parts. The mechanism at one level lower. | `seq` or `state` |
| 5 | **The Types** | The variants, and the one condition each demands. | table + `dtree` |
| 6 | **What It Costs, In Plain English** | Count steps first. Notation only in the last sentence. | `curve` or `card` |
| 7 | **Where It Lives In Real Life** | Real systems, named, honestly. | `kgraph`, `net` or `arch` |
| 8 | **How Problems Show Up** | The disguised phrasings, and the tell in each. **This is the connect-the-dots block.** | the signal table |
| 9 | **Solve It Live** | One real complaint taken from words to a decision. | `swim` |
| 10 | **Your Turn** | A rep the reader can do without code, then two quizzes. | callouts + `quiz` |

Then `__NAV__`.

### Block 3 is the lesson

If you have thirty minutes for a lesson, spend fifteen on block 3. Its animation must show the
mechanism failing to be magic: the reader should be able to predict the next frame before it
happens. Captions narrate cause, not action. Bad: "Now we check index 4." Good: "34 is smaller
than 41, so everything to the left is impossible. Six boxes gone in one look."

### Block 8 is the payoff

Format is always a three column table:

| What somebody actually says | The tell | What it is really asking |
|---|---|---|

The middle column is the skill being taught. Six to eight rows. Every row must be a phrasing a
real person would actually use, including at least one that sounds like a performance complaint
rather than a data-structure question.

### Block 9 discipline

Start with the problem **as it arrives**, in quotation marks, in a plain callout. Then a
swimlane of the reasoning. Then the answer in bold. Then a `.callout.good` titled "Why this
reasoning wins" that names the one question that eliminated everything else. Never show the
reader a clever answer; show them the question that made the answer obvious.

---

## 6. The whiteboard lesson: the reel

One per chapter, always the last lesson, always titled `The Whiteboard: <something concrete>`.
It is the chapter with the prose removed. A reader who watched only the whiteboard lessons
should still understand the course.

**Four parts, in this order:**

| Part | Contains | Acts |
|---|---|---|
| Part 1 · The idea | the one question the chapter turns on | 1 |
| Part 2 · The methods | each mechanism, animated, one act each | 5 to 7 |
| Part 3 · The same ideas, in things you used today | each mechanism inside a real product | 4 to 5 |
| Part 4 · The map | the whole chapter as a decision diagram, drawn node by node | 1 |

**Part 3 is the point.** It is the difference between a reader who followed along and a reader
who can now see the structure inside their own tools. Rules for it:

- Every Part 3 act must **explicitly name the Part 2 act it repeats**. "This is Act 3 wearing
  different clothes."
- At least one Part 3 act must show **the wrong choice** and its consequence. A fast wrong
  answer does not look like a bug, it looks like a working feature, and that lesson only lands
  when the reader watches it happen.
- Products named must be ones the reader plausibly touched: git, a database, autocomplete, an
  AI assistant, a maps app, a chat app.

**Act rules.** Three to ten steps each. Every step needs a `say` that advances the argument.
Never write a step whose caption is only a restatement of the picture. The last act closes by
tying every destination back to the act that taught it.

Reel length target: **10 to 16 acts, 70 to 100 steps, two to four minutes at 1x.** State the
real number in the caption; compute it, do not guess.

---

## 7. The design system

### Palette (CSS variables in `shell.html`, hardcode the hex inside SVG)

| Token | Hex | Use |
|---|---|---|
| paper | `#ffffff` | the content page, always white |
| board | `#fbfdfc` | the whiteboard surface |
| green-950 / 900 | `#04211a` / `#062e24` | the rail, deep royal green |
| green-700 | `#0d5a45` | primary accent, block chips, links |
| green-600 / 500 | `#12785d` / `#19a077` | success, found, positive edges |
| green-050 | `#eaf5f0` | soft accent fill |
| gold-500 | `#f0b429` | the second accent: attention, "checking now", the active thing |
| gold-600 / 050 | `#c98a06` / `#fdf5e0` | gold text and fill |
| ink / soft / mute | `#0f1a16` / `#43524c` / `#7e8b86` | text |
| warn | `#b45309` | traps |
| bad | `#b3261e` | wrong answers, the expensive path |
| grey / grey-050 | `#9aa5a1` / `#f1f3f2` | ruled out, inert |

**Semantic rule for animations, never violate it:** gold = being looked at right now.
green = found, or the cheap path. faded grey = ruled out. plain grey = still possible.
red = the expensive or wrong path.

### Type

Hanken Grotesk for UI and headings. Newsreader italic for the motto only. JetBrains Mono for
numbers inside animated cells and for the step counter. Nothing else.

### Components (use these class names, invent nothing)

`.wrap` `.les-kicker` `.les-title` `.les-meta` `.pill` `.pill.gold` `.motto` `.lead`
`h2 > span.ix` (`.ix.gold` for the two closing blocks) `.sub` `h3`
`.callout` `.callout.warn` `.callout.good` `.callout.accent` `.callout.bad`, each opening with a `.ch` label
`table` inside `.tbl-wrap`, with `.tbl-cap` underneath
`.flow` for a dark mono pipeline strip
`.quiz` (`data-correct`, zero based) with `.opt` (`data-i`) and `.qexp`
`em.k` for a key term, `em.g` for a gold key term
`.viz` for a diagram, `.board` for an animation, `.reel` for a whiteboard lesson

---

## 8. The visual engine

Diagrams and animations are **JSON on an attribute**, never script. Layout is deterministic and
grid based, which is why nothing overlaps. Two things you must respect:

- **Grid nodes carry `col` and `row`.** Two nodes may never share a cell; the engine throws if
  they do. This is the guarantee, so do not fight it by inventing coordinates.
- **Gutters widen automatically** to fit the widest edge label, and edge labels paint above
  nodes. You do not need to leave room by hand.

### Diagram types (`data-viz`, 17 of them)

| Type | Use it for |
|---|---|
| `scene` | block 1, the real-life illustration. Icons: person, doc, server, phone, glass, shelf, pile. Captions place themselves and the canvas grows to fit. |
| `arch` | the shape of a system, boxes and flow |
| `component` | the same, when the parts are modules rather than steps |
| `flow` | a process with branches, `shape:"diamond"` for a decision |
| `dtree` | a decision tree, the "which one am I allowed to use" picture |
| `seq` | messages between actors over time, block 4 |
| `state` | states and transitions, block 4 alternative |
| `swim` | who does what, in order, block 9 |
| `journey` | stages with doing, thinking and a feeling line |
| `uflow` | a user's path through a product |
| `ia` | a hierarchy of screens or concepts |
| `net` | a network of things, positions authored on a unit grid |
| `kgraph` | the same, for "this concept touches all of these", block 7 |
| `erd` | entities and their relationships, with typed fields |
| `wire` | a screen wireframe on a twelve column grid |
| `card` | an intelligence card: a metric readout with bars |
| `curve` | a static growth chart. Nine growth functions: `1` `logn` `sqrtn` `n` `nlogn` `n2` `n3` `2n` `nfact`. Pass `logScale: true` when the family spans orders of magnitude, or five of the seven shapes lie flat on the floor. The axis label announces the log scale itself |

### Animation types (`data-anim`, and inside reel acts)

| Type | Use it for |
|---|---|
| `array-scan` | any linear or halving walk over a row. States: `look` `dead` `found` `seen` `range` `bad`. Pointers `lo` `mid` `hi` `i` fan out automatically when they coincide, and `pointerLabels` renames them per board, so a queue can show `front` and `back` rather than teaching the reader the renderer. `big:true` for reel acts, `countLabel`, and a per step `badge`. Set `capacity` to draw spare dashed slots beyond the data, and `step.shift = {from, by}` to slide everything from an index rightwards, which is how an insert or delete is shown. `step.order` lists the ORIGINAL cell indices in their new left-to-right arrangement, which is the only way to show a sort: a cell's text is baked in at build time and can never change, so values move by moving their boxes. The position labels underneath stay put on purpose, so the reader watches values travel between fixed positions. States still address a cell by its original index, which is what lets you follow one value across a whole sort |
| `grid` | a 2D array. Cells are addressed as `[row, col]` in every state list, plus `step.row` and `step.col` to light a whole row or column. Set `flatRow: true` and the same cells are drawn again in memory order underneath, so the reader watches row times width plus column being computed rather than being told it |
| `race` | two or more methods on the same data, with live counters |
| `tree-walk` | trees, tries, BSTs. Nodes carry `x` and `d` (depth). |
| `graph-walk` | graph traversal, and the chain renderer. Nodes carry `x` and `y` on a unit grid; `step.edges` lists which edges are live, which is how a **rewire** is animated: declare every edge that will ever exist and change the live list. `step.tags` puts a named marker under a node, so two travelling pointers can be told apart by name. Set `directed: true` for arrowheads, per spec or per edge, because the same renderer also draws handshakes where an arrow would be a lie |
| `vector` | semantic space, a query point and an expanding neighbourhood. Labels place themselves. |
| `curve` | cost lines drawing themselves, with a data-size badge |
| `reveal` | **any grid diagram, drawn into existence one node at a time.** Wrap a `viz` spec and give each step a `show` list. Use this whenever a diagram is the argument. |

**Node `kind` is a closed vocabulary**: `box`, `accent`, `dark`, `gold`, `warn`, `bad`,
`muted`. Anything else is not a styling nit, it is a crash: the renderer looks the kind up,
gets nothing back and throws. `build.py` now refuses the build and names the diagram, the
offending kind and the allowed set.

**Every cell-painting renderer honours the same five states**, in the same precedence:
`bad`, then `found`, then `look`, then `seen`, then `dead`. Row renderers add the `range`
window underneath, which paints anything outside it as `dead`; `found` and `seen` survive a
range, which is what lets one queue frame show served, waiting and not-yet-arrived at once.
Renderers reach this through `stateOf` (indexed) or `stateOfId` (named), never by hand, and
`check_renderers.mjs` fails any renderer that assigns states without covering all five.

**Rule of thumb:** if a picture explains a *result*, use `data-viz`. If it explains a
*process*, use `reveal` and let it build.

---

## 9. Voice

Rohit Swerashi, writing for someone he respects who does not know this yet.

- **Opinionated and specific.** "Do X because Y", never "you could consider X".
- **Never hype, never sugarcoat, never give ten options when one clear answer exists.**
- **Concrete over abstract.** Real numbers, real trade-offs, real failure modes.
- **Second person.** "You", not "the user" and not "one".
- **Short sentences carry the weight.** A long sentence is fine; two in a row is not.
- **Name the cost.** Every time you praise a method, say what it charged.
- **No cheerleading.** Never "amazing", "powerful", "revolutionary", "game changer".
- **No apology.** Never "this might seem complicated" or "do not worry if". If you have to
  reassure the reader, the explanation is wrong; fix the explanation.
- Indian English spelling, and plain words over clever ones.

### Lines that are load bearing

Two or three times per chapter, write a sentence the reader could repeat at dinner. They are
the thing that survives. Examples that already exist and set the bar:

> Search is the price you pay for order you did not keep.

> You never choose a search algorithm. You choose how much order you are willing to maintain,
> and the algorithm is whatever that choice leaves standing.

> A fast wrong answer does not look like a bug, it looks like a working feature.

---

## 10. Real-world honesty

Block 7 and reel Part 3 exist to connect ideas to the reader's actual life. That only works if
every claim is true.

**Allowed:** publicly known mechanisms. Git bisect performs a binary search over commits.
Databases use B-tree indexes. Autocomplete uses prefix trees. RAG systems embed documents and
retrieve approximate nearest neighbours. Browsers scan page text for Ctrl and F.

**Not allowed:** invented internal decisions, invented latency or cost figures attributed to a
named company, invented quotes, or "Company X switched from A to B" without knowing it.

**When unsure, describe the mechanism without the brand.** "A support tool with 400,000 tickets"
teaches the same lesson as naming a real company, and cannot be wrong.

Illustrative numbers used to show scale (twelve items, a million rows, twenty looks) are fine
and encouraged, because they are arithmetic, not claims about anybody.

---

## 11. Naming and numbering

- Lesson ids are `<chapter>.<n>`, no leading zeros: `6.1`, `6.9`.
- The whiteboard lesson is always the highest number in its chapter.
- Chapter titles are a noun phrase plus a plain-language gloss: `Searching: Finding One Thing`.
- Lesson titles say what the reader gets, not what the topic is called. `Binary Search: Halve
  the Haystack`, not `Binary Search`.
- Whiteboard titles are always `The Whiteboard: <concrete promise>`.
- Act tabs are two to four words. Act titles are a full sentence fragment.

---

## 12. Build pipeline

```
course_map.json  (titles, order, through lines)
chapters/chNN.js (content, raw HTML in template literals, JSON payloads on attributes)
        |  build.py
shell.html       (all CSS, the reader, the diagram engine, the animation engine, 4 placeholders)
        v
dsa-concepts-master.html      <- generated, single file, opens anywhere
```

`build.py` derives lesson state on its own: a lesson is `live` if its id exists as a key in a
chapter file, otherwise `soon`. You never set state by hand. It also parses and validates every
diagram and animation payload, and refuses to build on bad JSON or an unknown type.

### Adding a chapter, the entire workflow

1. Confirm the chapter and lesson titles in `course_map.json`. Read its `through_line`.
2. Create `chapters/chNN.js`. Copy the block skeleton from an existing green chapter.
3. Write the concept lessons in order. Each one: ten blocks, section 5.
4. Write the whiteboard lesson last, section 6, because it recaps what you actually wrote.
5. `bash verify/qa.sh` until green with zero skips.
6. Screenshot every diagram and look at it. The checks catch collisions; they do not catch ugly.

---

## 13. The QA harness

| Check | What it refuses to let through |
|---|---|
| `build.py` | bad JSON payload, unknown diagram or animation type, animation with no steps, missing shell placeholder |
| `check_style.py` | em-dash, `${...}`, unbalanced backticks, apostrophe inside a payload, a lesson without `__NAV__` |
| `check_js.sh` | a master whose script does not parse, unbalanced template literals |
| `check_renderers.mjs` | any registered renderer that breaks, **including ones no lesson uses yet**. It also prints which registered types are still unproven in a real lesson |
| `check_layout.mjs` | any diagram rendering `NaN`, `undefined` or `Infinity`; any two grid nodes overlapping; any animation step that throws |
| `check_lesson.py` | wrong block count, missing animation, too few visuals, too few quizzes, over the word ceiling, a whiteboard lesson with under six acts |
| `qa.sh` | runs all of the above in order and stops at the first failure |

`check_layout.mjs` renders every diagram in Node against a fake DOM. That is how "nothing
overlaps" is a build failure instead of an opinion.

---

## 14. Failure modes seen so far, and the fix

| Symptom | Cause | Fix |
|---|---|---|
| Page renders blank | stray backtick or apostrophe in a payload | `check_style.py` catches it, rewrite the label |
| A lesson shows as `soon` although you wrote it | id mismatch between map and chapter key | make them identical |
| A label sits on top of a line | you authored a `scene` or `vector` by hand | the renderers self-heal now, but respace the coordinates if it still looks tight |
| Two pointers print on top of each other | `lo` and `mid` landed on the same box | already handled, they fan out |
| A diagram is clipped at an edge | a node authored at coordinate zero | `net` and `scene` auto-fit, `layered` never clips |
| Everything passes but the lesson is boring | block 3 was written last and rushed | write block 3 first, then the prose around it |
| A state you set never appears on the board | the renderer dropped a state it never implemented | `check_renderers.mjs` fails it now; every renderer must cover all five |
| A diagram throws `cannot read fill` | a `kind` outside the seven | `build.py` fails it now and names the diagram |
| You need a value to change inside a box | it cannot; the text is baked in at build time | move the box instead with `step.order`, or use a second board |

---

## 15. The pre-ship checklist for a chapter

Copy this into the commit message and tick it honestly.

- [ ] Every lesson id in the map exists as a key in the chapter file
- [ ] Every concept lesson has all ten blocks in order
- [ ] Every concept lesson opens with a `scene` and a motto
- [ ] Block 3 animation lets the reader predict the next frame
- [ ] Block 8 signal table has six or more rows, including a performance-sounding one
- [ ] The chapter through line appears in every lesson lead and every closing takeaway
- [ ] The whiteboard lesson has four parts and ten or more acts
- [ ] Every Part 3 act names the Part 2 act it repeats
- [ ] At least one Part 3 act shows the wrong choice and its cost
- [ ] Every real-world claim is a publicly known mechanism, section 10
- [ ] Every diagram caption states a takeaway, not a description
- [ ] `bash verify/qa.sh` is green with zero skips
- [ ] Every diagram in the chapter has been looked at as a screenshot
