/* ===== Chapter 06 - Searching: Finding One Thing - DSA Concepts (2026) =====
   Visual-first lessons. Ten blocks each. Every diagram and animation is declarative JSON
   on data-viz / data-anim, never script. Ends with __NAV__.
   RULES: no em-dashes; no backticks in content; no dollar-brace; no apostrophes inside
   a data-viz or data-anim payload, because the payload is wrapped in single quotes. */

"6.1": `<div class="wrap">
  <div class="les-kicker">Chapter 6 · Lesson 6.1</div>
  <h1 class="les-title">What Searching Really Is, and the One Question That Decides Everything</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~11 min</span>
    <span class="pill gold">no code needed</span><span class="pill">11 visuals</span>
  </div>

  <p class="motto">Searching is not a skill you learn. It is a bill you pay for the order you did not keep.</p>

  <p class="lead">Every search you have ever done, in a drawer or in a database, is the same three things: a pile of stuff, one question, and a rule for where to look next. This lesson gives you the one question that decides which rule you are allowed to use. Get that question right and the rest of the chapter is just detail.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Two drawers, one missing charger.</div>
  <p>You need your phone charger. In one room there is a drawer where everything was thrown in as it arrived. In the next room there is a cupboard where somebody labelled every shelf. Same charger, same house. In the first room you will lift every object. In the second you walk to the shelf marked <em class="k">cables</em> and stop.</p>

  <div class="viz" data-viz='{
    "type":"scene","title":"Two drawers, one question","width":640,"height":210,
    "items":[
      {"icon":"person","x":320,"y":46,"kind":"gold","label":"you, looking for one thing"},
      {"icon":"pile","x":110,"y":146,"kind":"muted","label":"the messy drawer"},
      {"icon":"shelf","x":528,"y":142,"kind":"accent","label":"the labelled cupboard"}
    ],
    "arrows":[
      {"x1":268,"y1":74,"x2":158,"y2":128,"style":"gold","label":"lift everything"},
      {"x1":372,"y1":74,"x2":474,"y2":126,"style":"green","label":"walk to one shelf"}
    ],
    "caption":"Nothing about the charger changed. The only difference is whether somebody kept the room in order, and that difference is the entire chapter."
  }'></div>

  <p>Notice what actually made the second room fast. It was not a cleverer person. It was <strong>work done earlier</strong>, by whoever labelled the shelves. Searching is always this trade: order you paid for once, against effort you spend every single time you look.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">A definition you can hold in one hand.</div>
  <p>A search takes a collection of things and one question, and returns either a position or an honest <em class="k">not here</em>. That is the whole contract. Everything else is the method you choose in the middle.</p>

  <p>And one of those methods is already paid for. <strong>Chapter 3 sold you a landing you have not spent yet:</strong> a row lets you reach box 500,000 out of a million in one look, without walking to it, and Lesson 3.1 labelled that clause <em class="k">the loan Chapter 6 cashes</em>. This is where it gets cashed. Halving a haystack is only possible because somebody can land in the middle of it.</p>

  <div class="viz" data-viz='{
    "type":"arch","title":"The shape of every search, without exception","maxChars":17,
    "nodes":[
      {"id":"c","label":"A collection of things","col":0,"row":0,"kind":"muted"},
      {"id":"q","label":"One question: where is 41","col":0,"row":1,"kind":"gold"},
      {"id":"m","label":"A search method","col":1,"row":0,"kind":"dark"},
      {"id":"a","label":"A position, or an honest not found","col":2,"row":0,"kind":"accent"}
    ],
    "edges":[
      {"from":"c","to":"m","label":"what you have"},
      {"from":"q","to":"m","label":"what you want"},
      {"from":"m","to":"a","style":"green","label":"the answer"}
    ],
    "caption":"The two inputs are fixed. The only thing you get to choose is the box in the middle, and the shape of your collection decides which boxes are even legal."
  }'></div>

  <div class="callout accent">
    <div class="ch">The one question, and the two that follow it</div>
    <p><strong>Are you matching an exact value, or matching meaning?</strong> That is the question, and it is first because it is the only one that can rule out every other branch at once. If the answer is meaning, nothing else in this chapter applies and Lesson 6.6 is where you go. If it is an exact value, two more questions finish the job: <strong>is it kept in order</strong>, and <strong>can you jump straight to any position?</strong> Three questions, five destinations, and Lesson 6.8 is the whole map.</p>
  </div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The same target, hunted two ways, side by side.</div>
  <p>Below, both rows hold the same twelve numbers. The top row is the messy drawer, so it must be checked one box at a time. The bottom row was sorted first, so it can throw away half the shelf with every look. Press play and watch the counters, not the boxes.</p>

  <div class="board" data-anim='{"type":"race","title":"Messy drawer versus labelled shelf: find 41","speed":1250,"legend":[["checking now","look"],["ruled out","dead"],["found it","found"],["still possible","range"]],"tracks":[{"label":"Messy drawer","data":[58,13,72,29,6,90,34,17,41,25,80,49]},{"label":"Labelled shelf","data":[6,13,17,25,29,34,41,49,58,72,80,90]}],"steps":[{"lanes":[{"look":[0],"count":1},{"look":[5],"range":[0,11],"count":1}],"say":"Both start now. The drawer opens at the far left. The shelf opens in the <b>middle</b>, because the middle is the only place worth looking when things are in order."},{"lanes":[{"dead":[0],"look":[1],"count":2},{"look":[8],"range":[6,11],"count":2}],"say":"Drawer: 13 is not 41, move along. Shelf: the middle held 34, and <b>34 is smaller than 41, so the entire left half is gone. Six boxes gone in one look.</b>"},{"lanes":[{"dead":[0,1],"look":[2],"count":3},{"look":[6],"range":[6,7],"count":3}],"say":"Drawer: 72, no. Shelf: the middle of what is left held 58, and 41 is smaller, so the right end goes too. Two boxes left, and the middle of two is the first one."},{"lanes":[{"dead":[0,1,2],"look":[3],"count":4},{"found":[6],"range":[6,7],"count":3}],"say":"Drawer: 29, no. Shelf: <b>found 41 in three looks.</b> It is already finished while the drawer is still on its fourth box."},{"lanes":[{"dead":[0,1,2,3],"look":[4],"count":5},{"found":[6],"count":3}],"say":"Drawer: 6, no. Still no shortcut available, because nothing about the drawer tells it where 41 might be."},{"lanes":[{"dead":[0,1,2,3,4],"look":[5],"count":6},{"found":[6],"count":3}],"say":"Drawer: 90, no. Still no shortcut available, because nothing about the drawer tells it where 41 might be."},{"lanes":[{"dead":[0,1,2,3,4,5],"look":[6],"count":7},{"found":[6],"count":3}],"say":"Drawer: 34, no. Still no shortcut available, because nothing about the drawer tells it where 41 might be."},{"lanes":[{"dead":[0,1,2,3,4,5,6],"look":[7],"count":8},{"found":[6],"count":3}],"say":"Drawer: 17, no. Still no shortcut available, because nothing about the drawer tells it where 41 might be."},{"lanes":[{"dead":[0,1,2,3,4,5,6,7],"found":[8],"count":9},{"found":[6],"count":3}],"say":"Drawer: <b>found 41 on the ninth look. Nine against three on twelve items.</b> Now imagine twelve million, and the gap stops being cute."}],"caption":"Twelve items is a small enough sample that the drawer still looks fine, and that is exactly the trap. These are the same twelve numbers you watched race in Lesson 0.3, which promised this chapter would explain why the sorted row was allowed to skip. The gap between the two rows does not add up as data grows, it multiplies."}'></div>

  <div class="callout">
    <div class="ch">What actually happened</div>
    <p>The bottom row never got cleverer. It got <strong>permission</strong>. Because the shelf was in order, a single comparison was allowed to rule out everything on one side of it. The top row could never rule out anything, so every look bought it exactly one box.</p>
  </div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What passes between you and the collection when you press Ctrl and F.</div>
  <p>When you hit Ctrl and F on a web page, you are not doing something different from the drawer. You are handing the question to somebody faster than you, who still has to look.</p>

  <div class="viz" data-viz='{
    "type":"seq","title":"Ctrl and F, message by message",
    "actors":[
      {"label":"You","kind":"gold"},
      {"label":"The browser","kind":"accent"},
      {"label":"The page text","kind":"muted"}
    ],
    "messages":[
      {"from":0,"to":1,"label":"find the word refund","style":"gold"},
      {"from":1,"to":2,"label":"walk the text from the top"},
      {"from":2,"to":1,"label":"match at character 4,182","style":"green"},
      {"from":1,"to":0,"label":"scroll there, highlight it","style":"green"},
      {"from":0,"to":1,"label":"next one","style":"gold"},
      {"from":1,"to":2,"label":"keep walking from 4,182"},
      {"from":2,"to":1,"label":"no more matches"},
      {"from":1,"to":0,"label":"1 of 1","style":"green"}
    ],
    "caption":"Step 2 is a plain linear scan. The browser feels instant only because a page is small and the machine is fast, not because it found a shortcut."
  }'></div>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">The five families, and the one condition each of them demands. Lessons 6.4 and 6.5 add the variants that sit inside them.</div>

  <div class="tbl-wrap"><table>
    <tr><th>Method</th><th>What it needs from you first</th><th>Looks needed for a million items</th></tr>
    <tr><td><strong>Linear scan</strong></td><td>Nothing at all</td><td>up to 1,000,000</td></tr>
    <tr><td><strong>Binary search</strong></td><td>Sorted, and instant jump to any position</td><td>20</td></tr>
    <tr><td><strong>Tree search</strong></td><td>Order kept as a shape, maintained on every write. Chapter 9 builds it, and Lesson 10.5 the index version</td><td>about 20</td></tr>
    <tr><td><strong>Hash lookup</strong></td><td>Spare memory, and exact keys only. Chapter 8 builds it</td><td>1</td></tr>
    <tr><td><strong>Vector search</strong></td><td>Meaning turned into coordinates, and a tolerance for approximate answers. Lesson 6.6 explains it, Lesson 17.6 builds the index</td><td>a few hundred, not a million</td></tr>
  </table>
  <div class="tbl-cap">Read the middle column, not the right one. The right column is the reward; the middle column is the price, and you always pay it before you collect.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which methods are you even allowed to use","maxChars":19,"gx":50,"nodes":[{"id":"q1","label":"Matching an exact value, or matching meaning?","col":0,"row":2,"kind":"gold","shape":"diamond"},{"id":"hash","label":"Hash lookup. One step. Chapter 8 builds it","col":1,"row":0,"kind":"accent"},{"id":"q2","label":"Is it kept in order?","col":1,"row":2,"kind":"gold","shape":"diamond"},{"id":"vec","label":"Vector search over meaning. Lesson 6.6","col":1,"row":4,"kind":"gold"},{"id":"lin","label":"Linear scan. Nothing was kept, so nothing can be skipped","col":2,"row":1,"kind":"muted"},{"id":"q3","label":"Can you jump straight to any position?","col":2,"row":3,"kind":"gold","shape":"diamond"},{"id":"walk","label":"Walk a tree. Chapter 9, and Lesson 10.5 for an index","col":3,"row":2,"kind":"accent"},{"id":"bin","label":"Binary search, or an index built on it","col":3,"row":4,"kind":"accent"}],"edges":[{"from":"q1","to":"hash","label":"exact, spare memory","style":"green"},{"from":"q1","to":"q2","label":"exact"},{"from":"q1","to":"vec","label":"meaning"},{"from":"q2","to":"lin","label":"no"},{"from":"q2","to":"q3","label":"yes","style":"green"},{"from":"q3","to":"walk","label":"no"},{"from":"q3","to":"bin","label":"yes","style":"green"}],"caption":"Three questions, five destinations, and Lesson 6.8 builds this map again once you have met every branch. You are not picking a favourite algorithm here, you are finding out which ones your data has already ruled out for you. Note where a chain is not: order does not help a chain, because Lesson 4.1 priced reaching a position on one at a walk from the head."}'></div>

  <p>Run a real question down it and watch how little choosing there is. Each answer deletes a branch, and by the bottom there is one destination left standing.</p>

  <div class="board" data-anim='{"type":"reveal","title":"One real question, walked down the ladder","speed":1700,"legend":[["the question you are on","look"],["ruled out by an answer","dead"],["where you land","found"]],"viz":{"maxChars":18,"gy":44,"nodes":[{"id":"q1","label":"Exact value, or meaning?","col":0,"row":2,"kind":"gold"},{"id":"vec","label":"Vector search over meaning","col":1,"row":4,"kind":"box"},{"id":"hash","label":"Hash lookup. One step","col":1,"row":0,"kind":"box"},{"id":"q2","label":"Is it kept in order?","col":1,"row":2,"kind":"gold"},{"id":"lin","label":"Linear scan. Open every row","col":2,"row":1,"kind":"box"},{"id":"q3","label":"Can you jump to any position?","col":2,"row":3,"kind":"gold"},{"id":"walk","label":"Walk a tree","col":3,"row":2,"kind":"box"},{"id":"bin","label":"Binary search, twice","col":3,"row":4,"kind":"box"}],"edges":[{"from":"q1","to":"hash"},{"from":"q1","to":"q2"},{"from":"q1","to":"vec"},{"from":"q2","to":"lin"},{"from":"q2","to":"q3"},{"from":"q3","to":"walk"},{"from":"q3","to":"bin"}]},"steps":[{"show":["q1"],"look":["q1"],"say":"A real question, and a common one: <b>show me every order placed between two dates</b>, out of four million rows. Nothing has been ruled out yet."},{"show":["q1","vec"],"look":["q1"],"dead":["vec"],"say":"A date is an exact value, not a shade of meaning. <b>One answer kills the entire right branch</b>, and with it every idea in Lesson 6.6."},{"show":["q1","vec","hash"],"dead":["vec","hash"],"say":"Spare memory and exact keys would buy you one step. But a hash answers only <b>is this exact value present</b>, and you asked for a range. It cannot put two dates in order, so it cannot tell you what sits between them."},{"show":["q1","vec","hash","q2","lin"],"dead":["vec","hash"],"look":["q2"],"say":"So: is it kept in order? If nobody built an index on that date column, the answer is no, and the row below is the only honest option left."},{"show":["q1","vec","hash","q2","lin","q3"],"dead":["vec","hash","lin"],"look":["q3"],"say":"But somebody did build one. Order exists, so <b>the scan dies too</b>, and one question remains: can you land anywhere you like, or must you walk?"},{"show":["q1","vec","hash","q2","lin","q3","walk","bin"],"dead":["vec","hash","lin","walk"],"found":["bin"],"say":"<b>Binary search, run twice: once to find where the range starts and once to find where it ends.</b> Those two are called the lower and upper bound, and everything between them is your answer without a single row being read outside it."}],"caption":"Three questions, and each answer deleted a branch before any algorithm was named. Notice what never happened: nobody picked a favourite. The data answered, and one destination was left standing."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">You already have the two meters from Chapter 2. This is the first time the reading depends on somebody else having done work earlier.</div>
  <p>Put a hundred items in front of a linear scan and it may look a hundred times. Double the data to two hundred and it looks two hundred times. The work grows exactly as fast as the pile does. Now do the same to binary search: a hundred items costs about seven looks, two hundred costs eight. <strong>Doubling the data adds one single look.</strong> That is not a small improvement, it is a different category of thing. You have just felt the two shapes Lesson 2.2 named: the scan is <em class="g">O(n)</em> and the halving is <em class="g">O(log n)</em>, and every method in this chapter is one of those two wearing a different coat.</p>

  <div class="viz" data-viz='{
    "type":"curve","title":"How the work grows as the pile grows","width":540,"height":250,
    "xlabel":"how many things you are searching","ylabel":"how many looks it takes",
    "series":[
      {"label":"linear scan","fn":"n","color":"bad"},
      {"label":"binary search","fn":"logn","color":"green"},
      {"label":"hash lookup","fn":"1","color":"gold"}
    ],
    "caption":"The red line is what happens when nobody kept order. The green line is what one sorted collection buys you. The gold line is what spare memory buys you, and it is almost flat."
  }'></div>

  <div class="viz" data-viz='{
    "type":"card","title":"Looks needed to find one item","eyebrow":"THE NUMBERS","badge":"1 million rows","width":400,
    "rows":[
      {"k":"Linear scan, worst case","v":"1,000,000","tone":"bad","bar":1},
      {"k":"Linear scan, average","v":"500,000","tone":"bad","bar":0.5},
      {"k":"Binary search","v":"20","tone":"good","bar":0.02},
      {"k":"Hash lookup","v":"1","tone":"good","bar":0.01}
    ],
    "footer":"Same million rows. The only variable is how much order was kept beforehand."
  }'></div>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five systems you touched this week, and the search sitting inside each one.</div>

  <div class="viz" data-viz='{
    "type":"kgraph","title":"Search is not one feature, it is a layer under everything","unit":132,
    "nodes":[
      {"id":"s","label":"Searching","x":2,"y":1,"kind":"dark"},
      {"id":"ctrl","label":"Ctrl and F","x":0,"y":0,"kind":"box"},
      {"id":"db","label":"Database index","x":0,"y":2,"kind":"box"},
      {"id":"map","label":"Maps routing","x":4,"y":0,"kind":"box"},
      {"id":"rag","label":"AI chatbot memory","x":4,"y":2,"kind":"gold"},
      {"id":"auto","label":"Autocomplete","x":2,"y":3,"kind":"box"}
    ],
    "edges":[
      {"from":"s","to":"ctrl","label":"linear"},
      {"from":"s","to":"db","label":"tree"},
      {"from":"s","to":"map","label":"graph"},
      {"from":"s","to":"rag","label":"vector","style":"gold"},
      {"from":"s","to":"auto","label":"prefix"}
    ],
    "caption":"Five products, five different search methods, one identical question underneath. When you meet a new product, the useful instinct is to ask which of these five edges it is standing on."
  }'></div>

  <p>The one worth sitting with is the last one. When you ask an AI assistant a question about your own documents, it cannot read all of them for every question, that would be a linear scan across gigabytes. So it does what the labelled cupboard did: it pays a cost <em class="k">once</em>, turning every document into coordinates, so that later it can jump near the answer instead of walking to it. Lesson 6.6 is entirely about that move.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">The phrasings that are secretly search problems, and the tell in each one.</div>
  <p>Real problems never say the word <em class="k">searching</em>. They describe a symptom. Here is how to hear it.</p>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"The report page takes eleven seconds to load"</td><td>Time grows with data size</td><td>A linear scan where an index belonged</td></tr>
    <tr><td>"Find whether this email already exists"</td><td>Yes or no, exact key</td><td>A hash lookup, not a scan</td></tr>
    <tr><td>"Show me everything between two dates"</td><td>A range, not one item</td><td>A sorted structure, then two boundary searches</td></tr>
    <tr><td>"Suggest as the user types"</td><td>Prefix, and it must feel instant</td><td>A trie or prefix index</td></tr>
    <tr><td>"Find the answer in our documents"</td><td>Meaning, not exact words</td><td>Vector search over embeddings</td></tr>
    <tr><td>"It was fast in testing and slow in production"</td><td>Cost scaled with real data</td><td>The method never changed, the pile did</td></tr>
  </table>
  <div class="tbl-cap">Middle column is the skill. Once you can name the tell, the right structure is usually only one step away.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">A real complaint, taken from words to a decision.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our support tool has 400,000 saved tickets. Agents type a ticket number and wait about four seconds every time. It was instant last year. Nothing in the code changed."</p>
  </div>

  <div class="viz" data-viz='{
    "type":"swim","title":"From complaint to decision, without guessing",
    "lanes":[{"label":"The agent"},{"label":"You"},{"label":"The system"}],
    "steps":[
      {"id":"a1","lane":0,"col":0,"label":"Types a ticket number","kind":"gold"},
      {"id":"b1","lane":1,"col":1,"label":"Ask: exact key or fuzzy?","kind":"box"},
      {"id":"b2","lane":1,"col":2,"label":"Exact. So a scan is never needed","kind":"accent"},
      {"id":"c1","lane":2,"col":1,"label":"Walks all 400,000 rows","kind":"bad"},
      {"id":"c2","lane":2,"col":3,"label":"Jumps to the row directly","kind":"accent"}
    ],
    "edges":[
      {"from":"a1","to":"b1"},
      {"from":"b1","to":"b2","style":"green"},
      {"from":"b2","to":"c2","style":"green","label":"add an index"}
    ],
    "caption":"Nothing in the code changed, and that was the clue. The code was always a linear scan. Last year the pile was small enough to hide it."
  }'></div>

  <p><strong>The answer.</strong> The lookup is by an exact, unique key, and it was a search problem the whole time, run with no order kept at all. The fix is not a cleverer algorithm, it is an index. Add one on the ticket number and each lookup becomes a handful of jumps instead of up to 400,000 comparisons. The four seconds becomes a few milliseconds, and it stays that way at four million tickets.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It never guessed at an algorithm. It asked the first question of the ladder, <em class="k">exact value or meaning</em>, and that single answer threw away the one method that never applied and made the cheapest of the rest obvious. Speed came from removing options, not from adding cleverness.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, no code</div>
    <p>Open your phone and pick three things you searched this week: a contact, a message inside a chat, and a place on a map. For each one write two lines. First, <strong>what order already existed</strong> before you searched. Second, <strong>who paid for that order, and when</strong>. If you cannot name who paid, you have found the linear scan.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A list of 1,000 names is unsorted. You will search it exactly once, for one name. What should you do?</div>
    <div class="opt" data-i="0">Sort it first, then binary search it</div>
    <div class="opt" data-i="1">Just scan it once, straight through</div>
    <div class="opt" data-i="2">Build a hash table, then look it up</div>
    <div class="qexp">Sorting costs far more than the single scan you were going to do anyway, and building a hash table also costs a full pass, so it buys nothing for one lookup and charges you the memory as well. Order only pays off when you will search many times. One search, no order, means scan and move on.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">A page loads in 0.2 seconds with 1,000 rows and 20 seconds with 100,000 rows. What does that shape tell you?</div>
    <div class="opt" data-i="0">The server is under-powered</div>
    <div class="opt" data-i="1">The network got slower</div>
    <div class="opt" data-i="2">The work grows in step with the data, so something is scanning everything</div>
    <div class="qexp">100 times the data produced roughly 100 times the wait. That straight-line relationship is the fingerprint of a linear scan. Hardware and network problems do not scale so neatly with row count.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Search is the price you pay for order you did not keep, and you now have the question that prices it. Next we go inside the honest, patient method that keeps no order at all, and find out exactly where it stops being acceptable.</p>
  </div>
__NAV__
</div>`,

"6.2": `<div class="wrap">
  <div class="les-kicker">Chapter 6 · Lesson 6.2</div>
  <h1 class="les-title">Linear Search: Check Every Box</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~12 min</span>
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
  </div>

  <p class="motto">The patient method is not the beginner method. It is the only one that is always legal.</p>

  <p class="lead">Search is the price you pay for order you did not keep, and this is the lesson where nobody kept any. Linear search maintains nothing, so it guarantees nothing fast. By the end you can say exactly what that buys you, and why the answer <em class="k">no</em> is the expensive one nobody counts.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Two hundred business cards, and nobody alphabetises them on the train home.</div>
  <p>You come back from a two-day conference with a bag of business cards. Every one of them cost you exactly one movement to store: somebody handed it to you and you dropped it in. Now you want the woman who ran the pricing session, and you have no idea what her card looks like.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Two hundred cards, and the order nobody paid for","width":800,"height":280,"items":[{"icon":"person","x":110,"y":126,"kind":"gold","label":"you, back from the conference"},{"icon":"pile","x":330,"y":128,"kind":"muted","label":"two hundred cards, in arrival order"},{"icon":"shelf","x":600,"y":124,"kind":"box","label":"the sorted version that does not exist"}],"arrows":[{"x1":168,"y1":126,"x2":268,"y2":126,"style":"gold","label":"lift every card"},{"x1":404,"y1":126,"x2":540,"y2":126,"style":"green","label":"nobody does this on a train"}],"caption":"Storing a card cost one movement and finding one will cost two hundred. That is not a mistake anybody made. It is the correct trade for a pile you will search twice and then throw away."}'></div>

  <p>You will lift every card. And you are right to: <strong>nobody in the history of conferences has alphabetised two hundred cards on the train home.</strong> Storing was free, and you have not yet decided whether finding will happen often enough to be worth paying for.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">The method that demands nothing, and therefore promises nothing.</div>
  <p>Linear search opens the first box, then the next, and stops when it finds what it wants or runs out of boxes. That is the whole method. What matters is not how simple it is. It is <strong>what it refuses to require.</strong></p>

  <div class="viz" data-viz='{"type":"arch","title":"The four demands it does not make","maxChars":18,"nodes":[{"id":"c","label":"Open the next box, until there is not one","col":0,"row":1,"kind":"dark"},{"id":"o","label":"Sorted first: not required","col":1,"row":0,"kind":"accent"},{"id":"j","label":"Instant jumps: not required","col":1,"row":1,"kind":"accent"},{"id":"s","label":"A second copy kept in order: not required","col":1,"row":2,"kind":"accent"},{"id":"m","label":"Anything maintained on every write: not required","col":1,"row":3,"kind":"accent"},{"id":"r","label":"So it is legal on data that is still changing underneath you","col":2,"row":2,"kind":"gold"}],"edges":[{"from":"c","to":"o","label":"no"},{"from":"c","to":"j","label":"no"},{"from":"c","to":"s","label":"no"},{"from":"c","to":"m","label":"no"},{"from":"o","to":"r","label":"which means","style":"green"},{"from":"m","to":"r","label":"which means","style":"green"}],"caption":"Every other method in this chapter appears later because it demands one of these four. This one demands none of them, which is why it is the only method that is always available and the only one that cannot be made wrong by a write you did not know about."}'></div>

  <p>Chapter 3 gave a row the ability to land on any position in one look. Linear search <strong>does not use it.</strong> It would work exactly as well on a chain, which is the only method in this chapter you can say that about.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The same row, two questions, and only one of them is cheap.</div>
  <p>These are the same twelve numbers from the Lesson 0.3 race and from the chapter whiteboard. Watch the first run find something. Then watch the second run answer a question nobody counts the cost of.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Nine looks to find it, twelve to prove it is not there","speed":1500,"big":true,"data":[58,13,72,29,6,90,34,17,41,25,80,49],"countLabel":" looks","pointerLabels":{"i":"here"},"legend":[["checking now","look"],["ruled out","dead"],["found it","found"],["opened, and the answer is still no","bad"]],"steps":[{"look":[0],"ptr":{"i":0},"count":1,"badge":"looking for 41","say":"58 is not 41. And <b>58 tells you nothing about where 41 might be</b>, so this look bought exactly one box and nothing else."},{"look":[1],"dead":[0],"ptr":{"i":1},"count":2,"say":"13, no. The box behind you is now ruled out, and that is the entire return on the look you just spent."},{"look":[2],"dead":[0,1],"ptr":{"i":2},"count":3,"say":"72, no. There is no rule to apply here, only the next box, and you can now call every remaining frame out loud before it happens."},{"look":[4],"dead":[0,1,2,3],"ptr":{"i":4},"count":5,"say":"29 and 6, both no. Nothing is speeding up and nothing is going to."},{"look":[6],"dead":[0,1,2,3,4,5],"ptr":{"i":6},"count":7,"say":"Halfway. <b>Every faded box on the left cost a full look and returned nothing.</b>"},{"look":[7],"dead":[0,1,2,3,4,5,6],"ptr":{"i":7},"count":8,"say":"17, no. Eight looks spent on a row of twelve."},{"found":[8],"dead":[0,1,2,3,4,5,6,7],"ptr":{"i":8},"count":9,"badge":"9 looks","say":"Found on the ninth. <b>Had 41 been the last card it would have been twelve</b>, and nothing about the method would have changed."},{"look":[0],"ptr":{"i":0},"count":1,"badge":"now: is 77 in here","say":"Now the question the whiteboard never asks, and the one your software asks constantly: <b>is this thing here at all?</b>"},{"look":[11],"dead":[0,1,2,3,4,5,6,7,8,9,10],"ptr":{"i":11},"count":12,"say":"Eleven boxes opened and every one said no. One box left, and it is the only thing standing between you and an answer."},{"bad":[0,1,2,3,4,5,6,7,8,9,10,11],"count":12,"badge":"12 looks, answer: no","say":"The whole row goes red at once, because <b>the only way to answer no is to open every box</b>, and you only know it after the twelfth. There was never a point at which it could have stopped early."}],"caption":"Two runs, one method. Finding took nine looks and got lucky. Proving absence took twelve and always will, because absence is the one answer that cannot be reached early."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What one failed look actually returns.</div>

  <div class="viz" data-viz='{"type":"seq","title":"What a box can tell you, and what it cannot","actors":[{"label":"The search","kind":"gold"},{"label":"Box 3","kind":"accent"},{"label":"Every other box","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"are you 41","style":"gold"},{"from":1,"to":0,"label":"no, I am 29","style":"green"},{"from":0,"to":1,"label":"then where is 41"},{"from":1,"to":0,"label":"I have no idea. I only know myself"},{"from":0,"to":2,"label":"did that tell you anything about you"},{"from":2,"to":0,"label":"nothing at all"}],"caption":"This is the whole reason the method cannot be improved. A box in an unordered row knows its own value and nothing about its neighbours, so one look eliminates one box. Order is what makes a box able to speak for the boxes behind it, and nobody bought any here."}'></div>

  <p><strong>One look eliminates one box.</strong> That sentence is the method, the cost and the limit all at once. Everything else in this chapter is somebody paying, in advance, to make a single look speak for more than one box.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Four scans, and the one thing each of them changes.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The variant</th><th>What it changes</th><th>What it does not change</th></tr>
    <tr><td>Stop at the first match</td><td>Finding is early on average, about half the row</td><td>Absence still costs the whole row</td></tr>
    <tr><td>Collect every match</td><td>Nothing. It must reach the end either way</td><td>Full price on every single call</td></tr>
    <tr><td>Move the found item to the front</td><td>Repeat requests get cheap, and it costs one move</td><td>The first request, and any request for something rare</td></tr>
    <tr><td>Scan a chain instead of a row</td><td>Nothing at all about the number of looks</td><td>Still one look per box, which is why Lesson 4.1 called the head the only free position</td></tr>
  </table>
  <div class="tbl-cap">Not one of these makes the method faster in the way people mean. Three of them move cost around and one of them changes nothing. The only real fix is to stop maintaining nothing, and that is the next four lessons.</div></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The read and the write are not the same size, and the gap is the whole argument.</div>
  <p>Count the two directions separately, because this is the one method where they are wildly different. On the twelve above: nine looks to find, twelve to prove absence, and <strong>one single move to add a card to the pile.</strong> Now scale it.</p>

  <div class="viz" data-viz='{"type":"card","title":"A million rows, both directions","eyebrow":"WITH NO ORDER KEPT","badge":"1,000,000 rows","width":560,"rows":[{"k":"Add one row","v":"1 move","tone":"good","bar":0.000001},{"k":"Find something that is there, on average","v":"about 500,000 looks","tone":"bad","bar":0.5},{"k":"Prove something is not there","v":"1,000,000 looks","tone":"bad","bar":1},{"k":"One read, priced in writes","v":"about 500,000 writes","tone":"bad","bar":0.5}],"caption":"Every bar is drawn against a maximum of one million. The last row is the whole argument of the next four lessons: at a million rows a single read costs about half a million times what a single write costs, and that ratio is the reason anybody ever pays to keep order."}'></div>

  <p>Now the half nobody counts. A signup form checks whether an email address is already registered, against a list of 100,000. <strong>Nine times in ten the address is new</strong>, which is a no, which reads all 100,000. One time in ten it exists, and that averages 50,000. So the real cost per check is 0.1 times 50,000 plus 0.9 times 100,000, which is <strong>95,000 looks</strong>. Not the 50,000 everybody assumes. <em class="g">Ninety five percent of the worst case</em>, because the common answer is the expensive one. In the Chapter 2 currency, all of this is <em class="g">O(n)</em>, which Lesson 2.2 named as the shape that grows exactly as fast as the pile.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places, and not one of them is a mistake.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Where opening every box is the right answer","unit":178,"nodes":[{"id":"c","label":"Open every box, in order, until you stop","x":2,"y":1,"kind":"dark"},{"id":"f","label":"Ctrl and F on a page you are already looking at","x":0,"y":0,"kind":"accent"},{"id":"s","label":"A shortlist of fifty, after something else narrowed it","x":0,"y":2,"kind":"gold"},{"id":"l","label":"A log file being read once and never again","x":4,"y":0,"kind":"box"},{"id":"n","label":"Data still being written while you read it","x":4,"y":2,"kind":"box"},{"id":"t","label":"Anything under about a hundred items","x":2,"y":3,"kind":"box"}],"edges":[{"from":"c","to":"f","label":"the pile is one screen","style":"green"},{"from":"c","to":"s","label":"Lesson 6.6 ends here","style":"gold"},{"from":"c","to":"l","label":"read once, order never pays"},{"from":"c","to":"n","label":"an index would be stale"},{"from":"c","to":"t","label":"the order costs more than the scans"}],"caption":"The gold node is the one to remember. The most modern search system in this chapter finishes by doing exactly this, over a shortlist of about fifty, because once something else has done the eliminating a scan is the cheapest and most exact thing left."}'></div>

  <p>The last node is the honest one. <strong>Order only pays off when you will search many times before the data changes.</strong> A log file read once, or a table being written to constantly, is a place where an index is either wasted or permanently out of date, and a scan is the correct engineering decision rather than the lazy one.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Seven sentences, and one test that separates them.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"It was fine last year and it is slow now"</td><td>Ask what the row count was then, and now</td><td>Nothing changed except the pile. Something reads all of it</td></tr>
    <tr><td>"It is fast when the thing exists and slow when it does not"</td><td>Time a hit and a miss side by side</td><td>A scan. Only absence has to reach the end</td></tr>
    <tr><td>"Ten times the data made it ten times slower"</td><td>Say the next wait out loud before measuring it</td><td>The wait tracks the pile exactly, which is a scan and nothing else</td></tr>
    <tr><td>"Ten times the data changed nothing"</td><td>The same test, and the answer is the tell</td><td>Order is already being kept. This was never the problem</td></tr>
    <tr><td>"Checking a duplicate on signup got slow"</td><td>Ask how often the answer is no</td><td>The common answer is the expensive one, and it reads everything</td></tr>
    <tr><td>"It is only slow for the customers with lots of records"</td><td>Compare a small account with a large one</td><td>The cost tracks one customer pile, so the scan is inside their data</td></tr>
    <tr><td>"We added an index and nothing improved"</td><td>Ask which column the question actually filters on</td><td>An index is an order built for one question. This is a different question</td></tr>
  </table>
  <div class="tbl-cap">The middle column is a test you can run without reading any code. Imagine ten times the data and say the new wait out loud. If it grows in step with the pile, something is opening every box.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Two hundred milliseconds, and nobody can find the slow part.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our signup form takes about two seconds to tell somebody their email is already taken, and about two seconds to tell them it is fine. We profiled it. No single query is slow. The database is not busy. We have 100,000 users and it was instant when we had 5,000, but nothing in that code has been touched in two years."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Nothing is slow, and it takes two seconds","lanes":[{"label":"The team"},{"label":"You"},{"label":"The form"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Two seconds either way, no single slow query"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: is it slower when the answer is no?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"No. Both answers cost the same"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Then it reads everything either way"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"5,000 users was 0.1s. 100,000 is 2s"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"Twenty times the users, twenty times the wait"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"So keep an order on the address. Chapter 8"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"The clue is the one everybody skips past: both answers cost the same. A scan that stops early would be visibly faster on a hit, so equal timings mean nothing is stopping early and the whole list is being read whatever the answer is."}'></div>

  <p><strong>Nothing is slow. Everything is being read.</strong> Twenty times the users gave twenty times the wait, which is the signature of a scan and of nothing else. And the tell that nobody looked at is that a hit and a miss cost the same: a scan that stops early should be visibly quicker when the address exists.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked one question before touching anything: <strong>does a yes cost less than a no?</strong> That single comparison separates a scan that stops early from something reading the whole list regardless, and it needs no profiler and no code. The fix is to stop maintaining nothing on that column, and Chapter 8 is where the cheapest version of that order gets built.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one deck of cards</div>
    <p>Shuffle a deck and deal twenty cards face down in a row. <strong>Round one:</strong> find the seven of hearts, turning one card at a time, and write down how many you turned. <strong>Round two:</strong> put them all back face down and find the seven of hearts again, and notice that the second search costs the same as the first, because you kept nothing from it. <strong>Round three:</strong> find a card that is not in the twenty. Count the turns. That number is the one your software pays most often, and it is the reason the next lesson exists.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">A duplicate check runs against 100,000 records. Nine times in ten the record is new. What does one check cost on average?</div>
    <div class="opt" data-i="0">About 50,000 looks, since on average you find it halfway</div>
    <div class="opt" data-i="1">About 10,000 looks, since only one in ten actually searches</div>
    <div class="opt" data-i="2">About 95,000 looks, because the common answer is the one that reads everything</div>
    <div class="qexp">A miss has to open every box before it can say no, so nine calls in ten cost the full 100,000. Only the one call in ten that hits averages 50,000. That is 0.9 times 100,000 plus 0.1 times 50,000, which is 95,000, or ninety five percent of the worst case. The halfway intuition is right about hits and completely wrong about the workload, because the workload is mostly misses.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">Why does linear search work identically on a linked chain and on a row, when nothing else in this chapter does?</div>
    <div class="opt" data-i="0">Because a chain is stored in order, and order is what search needs</div>
    <div class="opt" data-i="1">Because it only ever asks for the next thing, and next is the one move a chain gives away free</div>
    <div class="opt" data-i="2">Because rows and chains cost the same to read, which Chapter 4 established</div>
    <div class="qexp">Every other method here needs to land on an arbitrary position, and Lesson 4.1 priced that on a chain as a walk from the head. A scan never lands anywhere. It only ever moves to the next thing, which is exactly what a chain hands you for free, so it is the one method whose cost is unchanged by the structure underneath it.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Search is the price you pay for order you did not keep, and this lesson is the full invoice with nothing prepaid. <strong>Next, somebody pays.</strong> The same twelve numbers, put in order first, and a single look that eliminates six boxes instead of one.</p>
  </div>
__NAV__
</div>`,

"6.3": `<div class="wrap">
  <div class="les-kicker">Chapter 6 · Lesson 6.3</div>
  <h1 class="les-title">Binary Search: Halve the Haystack</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">Binary search is not fast. It is prepaid, and somebody else paid.</p>

  <p class="lead">Lesson 6.2 was the full invoice with nothing prepaid. This is what changes when somebody has already paid. By the end you can name the promise that makes halving legal, price what it costs to keep, and say why a broken promise produces a confident wrong answer instead of an error.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">You have done this since you were seven.</div>
  <p>A printed dictionary, nine hundred pages, and you want the word <em class="k">lantern</em>. You do not start at page one, and you do not even consider it. You open somewhere near the middle, land on something starting with <em class="k">m</em>, and shut the entire second half of the book without reading a word of it.</p>

  <div class="viz" data-viz='{"type":"scene","title":"The book you can skip, and the room that made it skippable","width":800,"height":280,"items":[{"icon":"person","x":112,"y":126,"kind":"gold","label":"you, opening near the middle"},{"icon":"doc","x":316,"y":124,"kind":"accent","label":"nine hundred pages, in order"},{"icon":"server","x":560,"y":124,"kind":"muted","label":"the print house that put them in order"},{"icon":"shelf","x":730,"y":124,"kind":"box","label":"and does it again every edition"}],"arrows":[{"x1":170,"y1":126,"x2":250,"y2":126,"style":"gold","label":"one look, half the book gone"},{"x1":620,"y1":124,"x2":676,"y2":124,"style":"green","label":"pays on every change"}],"caption":"The skill in your hands is not the interesting half. Somebody put nine hundred pages in order once, and pays again for every new edition, and that invoice is what your one look is spending."}'></div>

  <p>Notice who is not in the room when you do it. <strong>Somebody put nine hundred pages in order</strong>, once, and does it again for every edition. Your clever move is spending their invoice.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">A promise, and the halving is only what the promise permits.</div>
  <p>Binary search is not a trick for splitting things. It is <strong>a promise you inherit</strong>, and the promise is this: <em class="k">if the thing is here at all, it is inside the window.</em> That sentence is called the invariant, and it is true before the first look, after every look, and at the very end.</p>

  <div class="viz" data-viz='{"type":"arch","title":"One promise, and the two things it demands","maxChars":18,"nodes":[{"id":"c","label":"If it is here at all, it is inside the window","col":1,"row":1,"kind":"dark"},{"id":"o","label":"Demand one: the row is kept in order","col":0,"row":0,"kind":"gold"},{"id":"j","label":"Demand two: you can land on any box in one look","col":0,"row":2,"kind":"gold"},{"id":"w","label":"Who pays for order: every insert, forever","col":2,"row":0,"kind":"bad"},{"id":"r","label":"Who paid for landing: Chapter 3, already","col":2,"row":2,"kind":"accent"}],"edges":[{"from":"o","to":"c","label":"needs"},{"from":"j","to":"c","label":"needs"},{"from":"o","to":"w","label":"billed to"},{"from":"j","to":"r","label":"billed to","style":"green"}],"caption":"Two demands, not one. Almost everybody remembers the sorted half and forgets the landing half, and Lesson 6.4 is unusable until you hold both, because each of its methods is what you do when one of these two stops being true."}'></div>

  <p>Two demands, and people only ever remember the first. It needs the row <strong>in order</strong>, and it needs to <strong>land on any box in one look</strong>. Lesson 3.1 sold you that landing and labelled it the loan this chapter collects. Here is where it is collected.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The same twelve, in order, and then the question nobody asks.</div>
  <p>Watch the grey window, not the gold box. The window is the promise. Everything outside it has been proved impossible, and no box in there was ever opened.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Three looks to find it, four to prove it is not there","speed":1600,"big":true,"data":[6,13,17,25,29,34,41,49,58,72,80,90],"countLabel":" looks","pointerLabels":{"lo":"start","mid":"middle","hi":"end"},"legend":[["checking now","look"],["still possible","range"],["ruled out","dead"],["found it","found"]],"steps":[{"range":[0,11],"look":[5],"ptr":{"lo":0,"mid":5,"hi":11},"count":1,"badge":"12 still possible","say":"Twelve in order, and the order was paid for before you arrived. <b>The promise you inherit: if 41 is here at all, it is inside the grey window.</b>"},{"range":[6,11],"look":[8],"dead":[0,1,2,3,4,5],"ptr":{"lo":6,"mid":8,"hi":11},"count":2,"badge":"6 still possible","say":"The middle held 34, and 41 is bigger. Because the row is in order, <b>everything left of 34 is smaller than 34</b>, so six boxes are deleted by one comparison and the promise still holds."},{"range":[6,7],"look":[6],"dead":[0,1,2,3,4,5,8,9,10,11],"ptr":{"lo":6,"mid":6,"hi":7},"count":3,"badge":"2 still possible","say":"58 is bigger than 41, so the right end goes too. Two boxes left, and the promise is still the same sentence it was at the start."},{"found":[6],"range":[6,7],"dead":[0,1,2,3,4,5,8,9,10,11],"count":3,"badge":"3 looks","say":"Found, in three. <b>Nine boxes were never opened</b>, and not one of them was skipped by luck. Each was proved impossible by a comparison somebody else had already paid for."},{"range":[0,11],"look":[5],"ptr":{"lo":0,"mid":5,"hi":11},"count":1,"badge":"now looking for 42","say":"Now the question the whiteboard never asks, and the one your software asks constantly. <b>Is 42 in here?</b>"},{"range":[6,11],"look":[8],"dead":[0,1,2,3,4,5],"ptr":{"lo":6,"mid":8,"hi":11},"count":2,"say":"34 is smaller than 42, so the left half goes, exactly as before. The method does not know yet that this search is different."},{"range":[6,7],"look":[6],"dead":[0,1,2,3,4,5,8,9,10,11],"ptr":{"lo":6,"mid":6,"hi":7},"count":3,"say":"58 is bigger. Two boxes left. Then: 41 is smaller than 42, so 42 must be to its right."},{"range":[7,7],"look":[7],"dead":[0,1,2,3,4,5,6,8,9,10,11],"ptr":{"lo":7,"mid":7,"hi":7},"count":4,"say":"One box left, and it holds 49. <b>49 is bigger than 42, so 42 must be to its left</b>, and there is nothing to the left inside the window."},{"range":[7,6],"ptr":{"lo":7,"hi":6},"count":4,"badge":"not here, in 4 looks","say":"The two ends have crossed and the window has closed with nothing in it. <b>That is not a failure to find 42. It is a proof that 42 was never here</b>, and it took four looks. Lesson 6.2 needed all twelve to say the same thing."},{"range":[7,6],"ptr":{"lo":7,"hi":6},"count":4,"badge":"42 belongs at box 7","say":"And the window did not just close, <b>it closed on a seam.</b> That seam is exactly where 42 would have to go. Nobody computed it and nobody paid extra for it, and it is the answer behind show me everything between two dates."}],"caption":"Two runs on one row. The first found something in three looks. The second proved something absent in four, and handed back the position it would belong at, for free. That free seam is the reason real systems ask this question far more often than they ask whether a value is present."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What one comparison is actually allowed to buy.</div>

  <div class="viz" data-viz='{"type":"seq","title":"The same question, asked of two rows","actors":[{"label":"The search","kind":"gold"},{"label":"A box in a sorted row","kind":"accent"},{"label":"A box in an unsorted row","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"are you 41","style":"gold"},{"from":1,"to":0,"label":"no, I am 34, and everything behind me is smaller than me","style":"green"},{"from":0,"to":2,"label":"are you 41","style":"gold"},{"from":2,"to":0,"label":"no, I am 34, and that is all I can tell you"}],"caption":"The two answers are the same length and cost the same to produce. The difference is the second clause, and the second clause is not a property of the box. It is a property of the work somebody did to the row before anybody searched it."}'></div>

  <p>The box did not get cleverer. <strong>It got permission to speak for its neighbours</strong>, and that permission is what order is. In Lesson 6.2 one look bought one box. Here one look bought six, and the difference was paid for in advance.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">One method, four places to stop.</div>
  <p>Almost every real use of this is not <em class="k">is it present</em>. It is one of the other three, and all four are the same walk with a different stopping rule.</p>

  <div class="tbl-wrap"><table>
    <tr><th>What you actually want</th><th>Where the walk stops</th><th>What it is called</th></tr>
    <tr><td>Is this value here at all</td><td>The moment a box matches</td><td>Plain binary search</td></tr>
    <tr><td>The first position this value could occupy</td><td>The seam, keeping the left edge</td><td>Lower bound</td></tr>
    <tr><td>The first position past the last copy</td><td>The seam, keeping the right edge</td><td>Upper bound</td></tr>
    <tr><td>Everything between two values</td><td>Two walks, one for each end</td><td>A range query, which is most of what a database is asked</td></tr>
  </table>
  <div class="tbl-cap">Rows two and three are the free seam from the board, given names. The last row is why an ordered column answers show me every order between two dates without reading a single row outside the answer.</div></div>

  <p>And now the failure that makes all of this dangerous. Give the same method a row that is <strong>not</strong> in order, and it does not complain, because nothing in it ever checks.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"The promise broken, and nothing warns you","speed":1600,"big":true,"data":[58,13,72,29,6,90,34,17,41,25,80,49],"countLabel":" looks","pointerLabels":{"lo":"start","mid":"middle","hi":"end"},"legend":[["checking now","look"],["still possible","range"],["ruled out","dead"],["it was here the whole time","bad"]],"steps":[{"range":[0,11],"look":[5],"ptr":{"lo":0,"mid":5,"hi":11},"count":1,"badge":"looking for 25","say":"The same twelve numbers, <b>not</b> in order. The method cannot tell, because it never looks at more than one box at a time. Middle box holds 90."},{"range":[0,4],"look":[2],"dead":[5,6,7,8,9,10,11],"ptr":{"lo":0,"mid":2,"hi":4},"count":2,"say":"90 is bigger than 25, so it throws away the entire right half. <b>25 was sitting in that half</b>, and it has just been deleted from the search by a rule that was never true here."},{"range":[0,0],"look":[0],"dead":[1,2,3,4,5,6,7,8,9,10,11],"ptr":{"lo":0,"mid":0,"hi":0},"count":3,"say":"72 is bigger. Throw away more. One box left, holding 58, which is also bigger."},{"bad":[9],"dead":[0,1,2,3,4,5,6,7,8,10,11],"count":3,"badge":"not found, in 3 looks","say":"It reports <b>not found</b>, confidently, in three looks. And 25 is at box 9, in red, untouched. <b>A fast wrong answer does not look like a bug. It looks like a working feature.</b>"}],"caption":"Nothing here errored and nothing here was slow. That is the danger: the method is only correct while the promise holds, it never checks whether the promise holds, and a broken promise produces an answer with exactly the same shape as a right one."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Count on your fingers, then count the bill.</div>
  <p>Doubling first, and you can derive it yourself. Two multiplied by itself ten times is 1,024, so <strong>a thousand items costs about ten looks</strong>. Twenty times is 1,048,576, so a million costs twenty. Thirty times is just over a billion, so a billion costs thirty. Doubling the pile adds exactly one look, and a thousand times more data costs about twice the work.</p>

  <div class="viz" data-viz='{"type":"card","title":"What order costs, and when it starts paying","eyebrow":"A THOUSAND ITEMS","badge":"break even at 21","width":560,"rows":[{"k":"One scan, on average","v":"about 500 looks","tone":"bad","bar":0.5},{"k":"One binary search","v":"about 10 looks","tone":"good","bar":0.01},{"k":"Saved, per search","v":"about 490 looks","tone":"good","bar":0.49},{"k":"Putting a thousand items in order, once","v":"about 10,000 comparisons","tone":"bad","bar":1},{"k":"Searches before the order has paid for itself","v":"about 21","tone":"good","bar":0.021}],"caption":"Every bar is drawn against a maximum of 10,000. Divide the one-off 10,000 by the 490 you save each time and you get about 21. Search the list twenty one times and the order was free. Search it once and you wasted the afternoon, which is exactly the case Lesson 6.2 defended."}'></div>

  <p>And the bill does not stop after the first payment. <strong>Every later insert has to keep the row in order</strong>, which Lesson 3.2 priced as the shuffle: about half the row moved, every time something arrives. In the Chapter 2 currency the search is <em class="g">O(log n)</em>, the shape Lesson 2.2 named as the one where doubling adds a step, and the insert that funds it is <em class="g">O(n)</em>. Lesson 6.5 is where somebody refuses to keep paying that.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places, and one of them is not a collection at all.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Halving, in things you have already used","unit":178,"nodes":[{"id":"c","label":"Cut the possibilities in half, then again","x":2,"y":1,"kind":"dark"},{"id":"g","label":"git bisect, finding the commit that broke the build","x":0,"y":0,"kind":"accent"},{"id":"d","label":"A dictionary, a phone book, an index at the back","x":0,"y":2,"kind":"box"},{"id":"b","label":"A database answering between two dates from an ordered column","x":4,"y":0,"kind":"accent"},{"id":"v","label":"Twenty questions, and every guessing game you have played","x":4,"y":2,"kind":"box"},{"id":"a","label":"Finding the highest setting that still works, where no list exists","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"g","label":"commits are already in order","style":"green"},{"from":"c","to":"d","label":"somebody paid the print house"},{"from":"c","to":"b","label":"two walks, one per end","style":"green"},{"from":"c","to":"v","label":"each answer halves the field"},{"from":"c","to":"a","label":"Lesson 6.7 opens here","style":"gold"}],"caption":"The gold node is the one that breaks the pattern, and it is where this chapter is going. There is no collection anywhere in it, nothing is stored, and nothing is sorted, and yet the same halving works. Lesson 6.7 is built on that."}'></div>

  <p>Look at git bisect for a moment. Commits are already in order, by time, and <strong>nobody built that order for searching</strong>. It was a side effect of history happening. That is the cheapest kind of order there is: the sort somebody else already paid for, for another reason entirely.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Seven sentences, and the tell is almost never the word sorted.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"It finds the wrong record, but only sometimes"</td><td>Ask whether the list is ever appended to after being sorted</td><td>The promise is broken. It cannot detect that, so it answers confidently</td></tr>
    <tr><td>"Ten times the data barely changed the wait"</td><td>Say the next wait out loud before measuring</td><td>Order is already kept. This is the halving shape, and it is healthy</td></tr>
    <tr><td>"Reads are instant and saving got slow"</td><td>Ask what has to stay sorted on every write</td><td>The read is prepaid and the write is paying. That is the trade working</td></tr>
    <tr><td>"It is fast on our list and slow on the linked one"</td><td>Ask whether it can land on the middle without walking</td><td>Demand two is missing. Lesson 4.1 priced that walk</td></tr>
    <tr><td>"Between two dates is fast, but contains this word is not"</td><td>Ask which column the order was built on</td><td>Order answers the question it was built for and no other</td></tr>
    <tr><td>"It says not found and I can see the row right there"</td><td>Check whether the sort and the search agree on the rule</td><td>Two different orderings. Text sorted one way, searched another</td></tr>
    <tr><td>"We sort it every time before searching"</td><td>Ask how many searches happen per sort</td><td>The order is being bought fresh for each search. Below about 21, the scan was cheaper</td></tr>
  </table>
  <div class="tbl-cap">Rows one and six are the dangerous pair, because in both the software is confident and wrong. Nothing errors, nothing is slow, and the only symptom is an answer that happens to be false.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">The search that is right ninety nine times out of a hundred.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our price lookup uses binary search over a sorted list of products and it has been perfect for two years. Last month we started letting the catalogue team add products during the day instead of overnight. Since then, roughly once or twice a day, a lookup returns the wrong product. Never the same product, never reproducible, and every test passes."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Perfect for two years, wrong twice a day","lanes":[{"label":"The team"},{"label":"You"},{"label":"The catalogue"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Wrong product twice a day, never reproducible"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: what changed, and when did it start?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"Products are now added during the day"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Are they appended, or inserted in order?"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"Appended to the end. The list is no longer sorted"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"So the promise is broken, and nothing checks it"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Keep it sorted on insert, or use a shape. Lesson 6.5"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"Nothing here is a bug in the search. The search is doing exactly what it was told, on data that stopped satisfying the one condition it silently depends on, and it has no way to notice."}'></div>

  <p><strong>The search did not break. The promise did.</strong> A product appended to the end sits out of order, so every look that lands to the left of it throws away the half it was in. It is wrong only when the search happens to walk past the unsorted tail, which is why it is rare, unreproducible, and invisible to tests that run on a freshly sorted list.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It did not look at the search at all. It asked <strong>what changed, and does the method still have what it silently requires?</strong> Binary search never verifies its own precondition, so any change to how data arrives is a change to whether the method is legal. The fix is to keep the order on insert and pay the shuffle, or to stop using a row and keep the order as a shape instead, which is Lesson 6.5.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, twenty cards in order</div>
    <p>Deal twenty cards face down, but sorted low to high, and remember that you sorted them. <strong>Round one:</strong> find the card worth 13 by turning only the middle of whatever range is left, and count the turns. <strong>Round two:</strong> look for a value that is not in the deck, and stop when your two hands cross. Look at where they crossed: that gap is where the missing card would go, and you got it without asking for it. <strong>Round three:</strong> have somebody swap two cards while your eyes are shut, then search again. Notice that nothing tells you anything is wrong, and that is the whole warning of this lesson.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">A binary search over a product list starts returning the wrong product occasionally, after the team began appending new products during the day. What broke?</div>
    <div class="opt" data-i="0">The search has a bug that only appears under concurrent access</div>
    <div class="opt" data-i="1">The list got too large for binary search to remain accurate</div>
    <div class="opt" data-i="2">The list is no longer in order, and the method never checks whether it is</div>
    <div class="qexp">Binary search is correct only while the promise holds, and it has no step in which it verifies the promise. Appending puts values out of order, so a comparison that says everything left of here is smaller is simply false, and the half it discards may contain the answer. Nothing errors, because from the inside a broken promise looks exactly like a satisfied one.</div>
  </div>

  <div class="quiz" data-correct="0">
    <div class="q">A list of a thousand items will be searched three times and then thrown away. Sorting it costs about 10,000 comparisons. What should you do?</div>
    <div class="opt" data-i="0">Scan it. Three scans is about 1,500 looks, and the order costs 10,000 before you save anything</div>
    <div class="opt" data-i="1">Sort it, because binary search is always faster than scanning</div>
    <div class="opt" data-i="2">Sort it, because the sort will pay for itself after the first search</div>
    <div class="qexp">Each binary search saves about 490 looks against a scan, so the 10,000 spent on order does not come back until about the twenty first search. At three searches you would pay 10,000 to save roughly 1,470. This is the trade in one number, and it is why Lesson 6.2 is not a straw man: the patient method wins whenever the data is read few times or changes often.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Search is the price you pay for order you did not keep, and this lesson bought the order outright. But the halving rested on two demands, not one, and each of them can fail on its own. <strong>Next: what you do when a long jump costs more than a short step, when nobody can tell you where the collection ends, and when you already know roughly where the answer lives.</strong></p>
  </div>
__NAV__
</div>`,

"6.4": `<div class="wrap">
  <div class="les-kicker">Chapter 6 · Lesson 6.4</div>
  <h1 class="les-title">The Search Family: Jump, Exponential, Interpolation, Ternary</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">There is no search family. There is binary search and four assumptions you can break.</p>

  <p class="lead">Lesson 6.3 rested on two demands and a set of quiet assumptions underneath them. This lesson breaks those assumptions one at a time, and each named method is simply the repair. By the end you will not remember four algorithms. You will remember four questions to ask about a room.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Your hands already know which move is expensive.</div>
  <p>A fat ring binder with plastic tabs down the edge, one every twenty-five pages. You want page 187, and <strong>you do not open the middle.</strong> Your thumb flicks to the nearest tab, you overshoot, and then you leaf forward one page at a time.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Two different physical acts, and your hands know the difference","width":800,"height":280,"items":[{"icon":"person","x":110,"y":126,"kind":"gold","label":"you, wanting page 187"},{"icon":"shelf","x":330,"y":124,"kind":"accent","label":"tabs, one every twenty five pages"},{"icon":"doc","x":600,"y":124,"kind":"muted","label":"then one page at a time"}],"arrows":[{"x1":168,"y1":126,"x2":268,"y2":126,"style":"gold","label":"flick to the nearest tab"},{"x1":404,"y1":126,"x2":540,"y2":126,"style":"green","label":"then leaf forward"}],"caption":"Nobody taught you this. You do it because flicking to a tab and turning one page are different physical acts with different costs, and binary search assumes they are the same act. That single assumption is what this lesson takes apart."}'></div>

  <p>Binary search would tell you to open the exact middle of the binder, then the middle of that, and it would be right about the number of looks and wrong about your hands. <strong>It assumes a long jump costs the same as a short step.</strong> In a ring binder it does not.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">Four assumptions, four repairs, and no new data.</div>
  <p>Binary search makes four quiet assumptions beyond its two demands. Each of the methods in this lesson exists because one of them failed somewhere real.</p>

  <div class="viz" data-viz='{"type":"arch","title":"Break one assumption, get one method","maxChars":18,"nodes":[{"id":"c","label":"Binary search, and what it quietly assumes","col":0,"row":2,"kind":"dark"},{"id":"a1","label":"A long jump costs the same as a short step","col":1,"row":0,"kind":"gold"},{"id":"a2","label":"Somebody can tell you where the collection ends","col":1,"row":1,"kind":"gold"},{"id":"a3","label":"You know nothing about how the values are spread","col":1,"row":2,"kind":"gold"},{"id":"a4","label":"More splits must mean fewer comparisons","col":1,"row":3,"kind":"gold"},{"id":"m1","label":"Jump search","col":2,"row":0,"kind":"accent"},{"id":"m2","label":"Exponential search","col":2,"row":1,"kind":"accent"},{"id":"m3","label":"Interpolation search","col":2,"row":2,"kind":"accent"},{"id":"m4","label":"Ternary search, which loses","col":2,"row":3,"kind":"bad"}],"edges":[{"from":"c","to":"a1"},{"from":"c","to":"a2"},{"from":"c","to":"a3"},{"from":"c","to":"a4"},{"from":"a1","to":"m1","label":"repair","style":"green"},{"from":"a2","to":"m2","label":"repair","style":"green"},{"from":"a3","to":"m3","label":"repair","style":"green"},{"from":"a4","to":"m4","label":"repair"}],"caption":"Read the middle column and the right column disappears. Nobody needs to memorise four names, because each name is only the answer to one broken assumption, and three of the four repairs pay off in a specific room while the fourth loses on paper."}'></div>

  <p>Not one of these changes the data, and not one of them changes the order. <strong>Every one changes only what a single look is allowed to buy.</strong></p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Same twelve numbers, same order, same target, four different opening moves.</div>
  <p>Watch where each one <em class="k">chooses</em> to start. That choice is the assumption, made visible, before a single comparison has happened.</p>

  <div class="board" data-anim='{"type":"race","title":"Four methods, one row, target 72","speed":1600,"countLabel":" looks","legend":[["checking now","look"],["still possible","range"],["ruled out","dead"],["found it","found"]],"tracks":[{"label":"Check every box","data":[6,13,17,25,29,34,41,49,58,72,80,90]},{"label":"Jump in fours","data":[6,13,17,25,29,34,41,49,58,72,80,90]},{"label":"Halve it","data":[6,13,17,25,29,34,41,49,58,72,80,90]},{"label":"Guess the spot","data":[6,13,17,25,29,34,41,49,58,72,80,90]}],"steps":[{"badge":"where each one starts","lanes":[{"look":[0],"count":1},{"look":[3],"count":1},{"look":[5],"range":[0,11],"count":1},{"look":[8],"count":1}],"say":"Same twelve, same order, same target. <b>Look where each one chooses to start.</b> Linear starts at the edge because it has no reason not to. Jump lands at the end of the first block of four. Binary goes to the middle because it assumes nothing about the values. Guessing goes straight to box 8, because 72 sits about three quarters of the way between 6 and 90."},{"lanes":[{"look":[3],"dead":[0,1,2],"count":4},{"look":[7],"dead":[0,1,2,3],"count":2},{"look":[8],"dead":[0,1,2,3,4,5],"range":[6,11],"count":2},{"found":[9],"seen":[8],"count":2}],"say":"<b>Guessing is already finished, in two looks</b>, because it was allowed to use the values themselves and the values happened to be evenly spread. Remember that word happened."},{"lanes":[{"look":[6],"dead":[0,1,2,3,4,5],"count":7},{"look":[11],"dead":[0,1,2,3,4,5,6,7],"count":3},{"look":[10],"dead":[0,1,2,3,4,5,6,7,8],"range":[9,11],"count":3},{"found":[9],"count":2}],"say":"Jump has landed on 90 and overshot. <b>That is the useful signal, not a failure</b>, because 72 must be inside the block it just flew over."},{"lanes":[{"look":[8],"dead":[0,1,2,3,4,5,6,7],"count":9},{"look":[8],"range":[8,11],"dead":[0,1,2,3,4,5,6,7],"count":4},{"found":[9],"range":[9,9],"dead":[0,1,2,3,4,5,6,7,8,10,11],"count":4},{"found":[9],"count":2}],"say":"So jump walks back into that block, one step at a time, which is the leafing you did in the binder. Binary lands on 72 on its fourth look."},{"badge":"10, 5, 4, 2","lanes":[{"found":[9],"dead":[0,1,2,3,4,5,6,7,8],"count":10},{"found":[9],"dead":[0,1,2,3,4,5,6,7],"count":5},{"found":[9],"count":4},{"found":[9],"count":2}],"say":"Ten, five, four, two. <b>Not one of the four touched the data or changed the order.</b> The only thing that differed was what each was willing to assume before it looked."},{"badge":"change the room","lanes":[{"found":[9],"dead":[0,1,2,3,4,5,6,7,8],"count":10},{"found":[9],"dead":[0,1,2,3,4,5,6,7],"count":5},{"found":[9],"count":4},{"found":[9],"count":2}],"say":"Now change the room and the ranking inverts. Give guessing twelve numbers where eleven sit between 1 and 15 and one sits at 1,000, and <b>its guess lands on box 0 every time and it walks the row.</b> And jump lost here only because in memory a long jump is free. Put this row on a chain, or on pages fetched one at a time over a network, and jump is suddenly the cheap one."}],"caption":"The winner on this board is the method with the best assumption about this particular room. Change the room and the order of finish changes with it, which is why the four names are worth less than the four questions."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">The overshoot is the information.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Why flying past the answer is the point","actors":[{"label":"Jump search","kind":"gold"},{"label":"Box 11, holding 90","kind":"accent"},{"label":"The block it flew over","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"are you smaller than 72","style":"gold"},{"from":1,"to":0,"label":"no, I am 90"},{"from":0,"to":0,"label":"so I have gone too far, and I know exactly when I was last too small"},{"from":0,"to":2,"label":"then 72 is inside you, or nowhere","style":"green"},{"from":2,"to":0,"label":"four boxes. Walk me","style":"green"}],"caption":"A single overshoot converts a whole row into one small block. That is the same move binary search makes, with one difference: the block boundary was decided in advance rather than by halving, which is what lets the method control how far apart its jumps are."}'></div>

  <p>Every method here is doing the same thing binary search does: <strong>turning one comparison into a statement about many boxes.</strong> They differ only in how they choose where to stand when they make it.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Four repairs, and the one condition each demands.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The method</th><th>The assumption it repairs</th><th>The one condition it demands</th></tr>
    <tr><td>Jump search</td><td>That a long jump is as cheap as a short step</td><td>You know the length, and hops really are more expensive than steps</td></tr>
    <tr><td>Exponential search</td><td>That somebody can tell you where it ends</td><td>The answer is usually near the front, or the length is unknowable</td></tr>
    <tr><td>Interpolation search</td><td>That you know nothing about how values are spread</td><td>The values really are evenly spread, and it collapses to a scan when they are not</td></tr>
    <tr><td>Ternary search</td><td>That more splits must mean fewer comparisons</td><td>Nothing, for finding a value. It simply loses, and block 6 does the arithmetic</td></tr>
  </table>
  <div class="tbl-cap">Rows one to three are trades with a room attached. Row four is the only place in this chapter where the arithmetic says a method is just worse, and it is worth keeping because it teaches you to check rather than assume.</div></div>

  <p>Now the second assumption, on its own board. Sometimes nobody can tell you how long the collection is: a stream still arriving, a paged result nobody has counted, a file being written while you read it. <strong>You cannot go to the middle of something with no end.</strong></p>

  <div class="board" data-anim='{"type":"array-scan","title":"Doubling your reach when nobody will tell you where it ends","speed":1600,"capacity":18,"data":[4,9,13,18,25,31,38,44,52,57,63,70,77,82,88,95],"countLabel":" looks","pointerLabels":{"lo":"start","mid":"probing","hi":"end"},"legend":[["probing now","look"],["bracket that must hold it","range"],["ruled out","dead"],["found it","found"]],"steps":[{"capacity":18,"look":[1],"ptr":{"mid":1},"count":1,"badge":"looking for 70","say":"The dashed slots are the point: <b>the row continues past anything anybody will tell you.</b> There is no middle to go to, so start one step in."},{"capacity":18,"look":[2],"dead":[1],"ptr":{"mid":2},"count":2,"say":"Still too small. Double the reach rather than step. One, two, and next will be four."},{"capacity":18,"look":[4],"dead":[1,2],"ptr":{"mid":4},"count":3,"say":"25 is still smaller than 70. Double again."},{"capacity":18,"look":[8],"dead":[1,2,4],"ptr":{"mid":8},"count":4,"say":"52, still smaller. Double again. <b>Four looks and you have already covered eight boxes without knowing the length.</b>"},{"capacity":18,"look":[15],"dead":[1,2,4,8],"ptr":{"mid":15},"count":5,"say":"95 is bigger than 70 at last. <b>So the answer is between the last probe that was too small and this one</b>, and you have just invented an end for a row that never gave you one."},{"capacity":18,"range":[9,15],"look":[12],"dead":[0,1,2,3,4,5,6,7,8],"ptr":{"lo":9,"mid":12,"hi":15},"count":6,"say":"And now it is Lesson 6.3, unchanged, inside a bracket you built yourself. 77 is bigger than 70."},{"capacity":18,"range":[9,11],"look":[10],"dead":[0,1,2,3,4,5,6,7,8,12,13,14,15],"ptr":{"lo":9,"mid":10,"hi":11},"count":7,"say":"63 is smaller. One box left."},{"capacity":18,"found":[11],"range":[11,11],"dead":[0,1,2,3,4,5,6,7,8,9,10,12,13,14,15],"count":8,"badge":"8 looks, no length known","say":"Found in eight, and <b>nobody ever said how long the row was.</b> Five looks to build a bracket, three to halve it."}],"caption":"The doubling is not the clever part. Building a finite bracket out of something with no stated end is the clever part, and once the bracket exists the rest is binary search doing exactly what Lesson 6.3 described."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Derive the block size instead of being told it.</div>
  <p>Jump search has one dial: how big is a block. Try three settings on 10,000 sorted items, hopping between blocks and then walking back inside one.</p>
  <p><strong>Blocks of 10:</strong> up to 1,000 hops, then up to 10 steps. 1,010. <strong>Blocks of 1,000:</strong> up to 10 hops, then up to 1,000 steps. 1,010 again. <strong>Blocks of 100:</strong> up to 100 hops, then up to 100 steps. <em class="g">200.</em> The cheapest block is the square root of the pile, and the reason is worth more than the algorithm: <strong>two halves of one bill are cheapest when they are equal.</strong></p>

  <div class="viz" data-viz='{"type":"card","title":"One million sorted items, five ways","eyebrow":"LOOKS TO FIND ONE","badge":"1,000,000 items","width":560,"rows":[{"k":"Check every box","v":"1,000,000","tone":"bad","bar":1},{"k":"Jump, in blocks of a thousand","v":"about 2,000","tone":"bad","bar":0.002},{"k":"Halve it","v":"20","tone":"good","bar":0.00002},{"k":"Guess the spot, values evenly spread","v":"about 4","tone":"good","bar":0.000004},{"k":"Guess the spot, values clumped","v":"up to 1,000,000","tone":"bad","bar":1}],"caption":"Every bar is drawn against a maximum of one million. The last two rows are the same method on the same amount of data, and the only difference is how the values are spread. That is the widest gap on any card in this course, and it is why a method with an assumption is a bet."}'></div>

  <p>And ternary search, which is the honest failure. Two binary looks leave you a quarter of the pile. Two ternary looks leave you <strong>a third</strong>, and a third is more than a quarter, so splitting into three deletes less per comparison than splitting into two. Properly: a million needs about 12.6 rounds of thirds, but each round costs two comparisons, so about <strong>25 against binary search 20</strong>. It is not close, and it is not a matter of taste.</p>

  <div class="callout warn">
    <div class="ch">Where ternary is not wrong</div>
    <p>Splitting into three is the right move when there is <strong>no target to compare against</strong>: finding the highest point of something that rises and then falls, like the price that maximises profit before it starts hurting demand. There you cannot ask is this the answer, only is this side going up. That is a different problem, Lesson 6.7 opens on it, and chapter 15 owns it properly.</p>
  </div>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five rooms, and the assumption each one rewards.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"The room decides the method","unit":178,"nodes":[{"id":"c","label":"What does one look cost here","x":2,"y":1,"kind":"dark"},{"id":"p","label":"Pages fetched one at a time over a network, where a hop is a round trip","x":0,"y":0,"kind":"accent"},{"id":"s","label":"A result set still arriving, with no length to ask for","x":0,"y":2,"kind":"accent"},{"id":"t","label":"Timestamps in a log, which really are evenly spread","x":4,"y":0,"kind":"gold"},{"id":"i","label":"Customer ids with huge gaps, where guessing is worse than halving","x":4,"y":2,"kind":"bad"},{"id":"m","label":"A plain row in memory, where every look costs the same","x":2,"y":3,"kind":"box"}],"edges":[{"from":"c","to":"p","label":"jump, fewer round trips","style":"green"},{"from":"c","to":"s","label":"exponential, invent an end","style":"green"},{"from":"c","to":"t","label":"guessing wins","style":"gold"},{"from":"c","to":"i","label":"guessing collapses"},{"from":"c","to":"m","label":"just halve it","style":"green"}],"caption":"The bottom node is the ordinary case and the correct default. Every other node is a room where something about the cost of a look, or the shape of the values, is unusual enough to be worth naming."}'></div>

  <p>The two on the right are the same method with opposite outcomes. Timestamps in a log are genuinely evenly spread, so guessing lands close. Customer ids with big gaps are not, and <strong>the same guess lands at the edge every time and walks the row.</strong></p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the question is always about the room.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"Each lookup is only twenty steps and it still takes a second"</td><td>Ask what one step physically costs</td><td>Twenty round trips, not twenty looks. Fewer, larger hops win here</td></tr>
    <tr><td>"We cannot use binary search, we do not know how many there are"</td><td>Ask whether the answer is usually near the front</td><td>Double your reach until you overshoot, then halve inside that bracket</td></tr>
    <tr><td>"It is lightning fast in testing and ordinary in production"</td><td>Compare how the values are spread in each</td><td>Test data is evenly spread and real data is clumped. A guess is a bet on spread</td></tr>
    <tr><td>"Somebody replaced it with a three-way split and it got slower"</td><td>Count comparisons per round, not rounds</td><td>Three splits cost two comparisons, and leave a third rather than a quarter</td></tr>
    <tr><td>"It is fast for most customers and terrible for one"</td><td>Look at that customer distribution of ids or dates</td><td>One clumped range, and a method that assumed even spread</td></tr>
    <tr><td>"Reading forward is fine, jumping around is slow"</td><td>Ask whether it is a chain, a stream or a disk</td><td>The two acts have different costs, which is the assumption jump search repairs</td></tr>
  </table>
  <div class="tbl-cap">Not one row here is about the size of the data. Every one is about the cost of a look or the shape of the values, and both are properties of the room rather than of the algorithm.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Twenty looks, and a second and a half.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"We store a million sorted records in a remote store and look them up with binary search. It is twenty looks, which should be nothing, and it takes about a second and a half per lookup. The store is not slow, we measured it: a single fetch comes back in about 70 milliseconds. Nobody can find the slow part."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Twenty looks that are twenty round trips","lanes":[{"label":"The team"},{"label":"You"},{"label":"The store"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Twenty looks, a second and a half, nothing is slow"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: what does one look physically cost here?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"One fetch is a round trip, about 70 ms"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"20 x 70 ms is 1.4 s. Nothing is slow, there are just twenty"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"And each look lands somewhere unrelated to the last"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"So make the looks fewer and fatter, not faster"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Fetch a block per trip, then scan it in memory"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"Twenty is a wonderful number of comparisons and a terrible number of round trips. The count was never the problem, and no faster algorithm helps, because every method in Lesson 6.3 is optimising the thing that was already cheap."}'></div>

  <p><strong>Twenty looks at seventy milliseconds each is a second and a half.</strong> Nothing is slow. There are simply twenty of them, and binary search made them as few as possible only under the assumption that all looks cost the same. Here they do not: a look is a round trip, and the method that minimises round trips is the one that fetches a fat block and then scans it locally, which is jump search wearing production clothes.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked the only question this lesson teaches: <strong>what does one look physically cost in this room?</strong> The team measured the store and found it healthy, which is exactly what pointed at the count rather than the speed. Twenty comparisons in memory is free. Twenty round trips is a second and a half, and the fix is fewer, fatter looks rather than a cleverer algorithm.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one thick book</div>
    <p>Take a book of at least three hundred pages and find page 187 three ways, counting your physical movements each time. <strong>Round one:</strong> from page one, one page at a time, and stop after thirty and estimate the rest. <strong>Round two:</strong> open the exact middle, then the middle of the half, and so on. <strong>Round three:</strong> use your thumb to flick in chunks of about twenty five, then leaf. Now the question that matters: <strong>which round felt fastest, and was it the one with the fewest movements?</strong> If those two answers differ, you have just measured the assumption this whole lesson is about.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A lookup over a remote store takes twenty binary search looks and about 1.4 seconds. A single fetch measures 70 milliseconds and the store is healthy. What is the fix?</div>
    <div class="opt" data-i="0">A faster search algorithm, since twenty looks is clearly too many</div>
    <div class="opt" data-i="1">Fewer and fatter looks: fetch a block per round trip and scan it in memory</div>
    <div class="opt" data-i="2">Add more machines to the store, since 70 milliseconds per fetch is the bottleneck</div>
    <div class="qexp">Twenty times seventy milliseconds is 1.4 seconds, so nothing is slow and there are simply twenty round trips. Binary search minimises comparisons, which were already free, while leaving the expensive thing untouched. Any method that trades more local comparisons for fewer trips wins here, and that is jump search in production clothes.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">Why does splitting the search space into three parts lose to splitting it into two?</div>
    <div class="opt" data-i="0">Because three-way splits are harder to implement correctly</div>
    <div class="opt" data-i="1">Because the pile does not divide evenly into three</div>
    <div class="opt" data-i="2">Because one three-way round costs two comparisons and leaves a third, while two two-way rounds cost two comparisons and leave a quarter</div>
    <div class="qexp">Count comparisons, not rounds. Spend two comparisons on halving and a quarter remains. Spend two on a three-way split and a third remains, and a third is more than a quarter. On a million that is about 25 comparisons against 20. The method is not badly built, it is simply a worse trade, and the only way to see that is to price the round rather than count it.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Everything so far has assumed a row that somebody keeps in order, and Lesson 6.3 priced that: the shuffle, on every single insert, forever. <strong>Next, somebody refuses to keep paying it</strong>, and keeps the order as a shape instead of a row, which is what a database index actually is and why it survives the writes that would destroy a sorted list.</p>
  </div>
__NAV__
</div>`,

"6.5": `<div class="wrap">
  <div class="les-kicker">Chapter 6 · Lesson 6.5</div>
  <h1 class="les-title">Searching Structured Data: Trees, Tries and Database Indexes</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~14 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">A sorted row dies on the first insert. A shape survives the writes that killed it.</p>

  <p class="lead">Lesson 6.3 bought order outright and Lesson 6.3 also priced the bill that never stops: the shuffle, on every insert, forever. This lesson is somebody refusing to keep paying it. By the end you can say what a database index actually is, why it answers in three hops rather than twenty, and why nobody indexes every column.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">The library that never closes for re-shelving.</div>
  <p>Imagine a library where the books sit in one long row in alphabetical order. A new book arrives. To keep the row correct, <strong>every book after it shifts one place right</strong>, all the way down the building. Now imagine it arrives twice an hour.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Two libraries, one new book","width":820,"height":280,"items":[{"icon":"shelf","x":140,"y":124,"kind":"bad","label":"one long row, everything after shifts"},{"icon":"doc","x":404,"y":124,"kind":"gold","label":"one new book"},{"icon":"server","x":660,"y":124,"kind":"accent","label":"signs at each junction, nothing moves"}],"arrows":[{"x1":360,"y1":124,"x2":232,"y2":124,"style":"gold","label":"half the building slides"},{"x1":450,"y1":124,"x2":600,"y2":124,"style":"green","label":"one sign updated"}],"caption":"The second library has no order in its positions at all. The order lives in the signs: everything left of this junction is earlier in the alphabet. A new book changes one junction, and the reader still walks straight to it."}'></div>

  <p>Real libraries do not work the first way, and neither does anything that gets written to. <strong>The order is not in the positions. It is in the arrangement</strong>, and that is the entire idea of this lesson.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">The same promise, held by a different thing.</div>
  <p>Lesson 6.3 held the promise with a row: if the thing is here, it is inside the window, because the row is in order. A shape holds the same promise with a rule at every junction: <strong>everything on the left is smaller than me, everything on the right is bigger.</strong> Walk it and you are halving, exactly as before.</p>

  <div class="viz" data-viz='{"type":"arch","title":"Same halving, two ways to hold the promise","maxChars":18,"nodes":[{"id":"p","label":"If it is here at all, it is inside the window","col":1,"row":1,"kind":"dark"},{"id":"r","label":"Held by a row: the positions are the order","col":0,"row":0,"kind":"gold"},{"id":"s","label":"Held by a shape: the junctions are the order","col":0,"row":2,"kind":"accent"},{"id":"rb","label":"A write moves about half the row","col":2,"row":0,"kind":"bad"},{"id":"sb","label":"A write changes a handful of links","col":2,"row":2,"kind":"accent"}],"edges":[{"from":"r","to":"p","label":"holds"},{"from":"s","to":"p","label":"holds","style":"green"},{"from":"r","to":"rb","label":"bills you"},{"from":"s","to":"sb","label":"bills you","style":"green"}],"caption":"The read is identical on both sides: about twenty looks for a million. Everything that differs is on the right, and it is all about what happens when something arrives. This is the same trade Chapter 4 made between a row and a chain, arriving now as a question about order rather than about storage."}'></div>

  <p>The read price does not move. <strong>The write price is the entire lesson.</strong></p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Find something, then add something, and watch nothing move.</div>
  <p>Fifteen numbers would fit in this shape and not one of them is in a row. Watch the search first, then watch what an arrival costs.</p>

  <div class="board" data-anim='{"type":"tree-walk","title":"Three looks to find it, three to add one, and nothing slides","speed":1600,"unit":78,"legend":[["looking here now","look"],["the path you walked","seen"],["ruled out without being touched","dead"],["found, or newly attached","found"]],"nodes":[{"id":"50","label":"50","x":3,"d":0},{"id":"25","label":"25","x":1,"d":1},{"id":"75","label":"75","x":5,"d":1},{"id":"12","label":"12","x":0,"d":2},{"id":"37","label":"37","x":2,"d":2},{"id":"62","label":"62","x":4,"d":2},{"id":"88","label":"88","x":6,"d":2},{"id":"33","label":"33","x":1.5,"d":3}],"edges":[{"from":"50","to":"25"},{"from":"50","to":"75"},{"from":"25","to":"12"},{"from":"25","to":"37"},{"from":"75","to":"62"},{"from":"75","to":"88"},{"from":"37","to":"33"}],"steps":[{"look":["50"],"dead":["33"],"say":"Seven numbers, and not one of them is in a row. <b>The order is not in the positions, it is in the arrangement:</b> everything left of a junction is smaller than it. Looking for 37, start at the top."},{"look":["25"],"dead":["75","62","88","33"],"say":"37 is smaller than 50, so go left, and <b>the entire right side is now impossible.</b> Three numbers gone and you never touched one of them."},{"found":["37"],"seen":["50","25"],"dead":["75","62","88","12","33"],"say":"Found in three looks. <b>The same halving as Lesson 6.3</b>, and nothing needed to be in a row for it to work."},{"look":["50"],"dead":["33"],"say":"Now a new number arrives: 33. In a sorted row that was the shuffle from Lesson 3.2, about half the row sliding right. <b>Here it is one more walk.</b>"},{"look":["25"],"dead":["75","62","88","33"],"say":"33 is smaller than 50, so left. Exactly the walk the search just did, because finding where a thing goes is the same act as finding it."},{"look":["37"],"seen":["50","25"],"dead":["75","62","88","12","33"],"say":"33 is bigger than 25 so right, and smaller than 37 so left. <b>And to the left of 37 there is nothing at all.</b>"},{"found":["33"],"seen":["50","25","37"],"dead":["75","62","88","12"],"say":"Attached. <b>Three comparisons, one link written, and not one existing number moved.</b> Compare that with half a row sliding."},{"found":["37","33"],"seen":["50","25"],"dead":["75","62","88","12"],"say":"And the promise survived the write, so the next search for 37 still costs three looks on a shape that just changed. <b>Who paid, and when: whoever inserted, at the moment of inserting.</b>"}],"caption":"Two movements on one shape. The first is Lesson 6.3 with the row taken away. The second is the reason this structure exists, and it is the movement a sorted row cannot perform without moving everything."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What an arrival actually touches.</div>

  <div class="viz" data-viz='{"type":"seq","title":"The same arrival, sent to a row and to a shape","actors":[{"label":"A new value","kind":"gold"},{"label":"A sorted row","kind":"bad"},{"label":"A shape","kind":"accent"}],"messages":[{"from":0,"to":1,"label":"where do I go","style":"gold"},{"from":1,"to":0,"label":"box 500,000. Everything after it now slides right"},{"from":0,"to":2,"label":"where do I go","style":"gold"},{"from":2,"to":0,"label":"walk twenty junctions and hang yourself off one","style":"green"},{"from":2,"to":0,"label":"nothing else is touched, and nothing else knows","style":"green"}],"caption":"Both answers are correct and both preserve the order. The difference is the second sentence in each reply: one of them rearranges half a million things that had nothing to do with the arrival, and the other writes a single link."}'></div>

  <p><strong>A row keeps its order in the positions, so changing the order means changing positions.</strong> A shape keeps its order in the links, so changing the order means changing links, and there are only ever a handful.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Three shapes, three questions they were built for.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The shape</th><th>The question it makes instant</th><th>The one condition it demands</th></tr>
    <tr><td>A search tree</td><td>Is this value here, and what is nearest to it</td><td>It must stay roughly balanced, or it quietly turns into a list</td></tr>
    <tr><td>A database index</td><td>The same, on one column, surviving constant writes</td><td>A second ordered copy that every write to that column must update</td></tr>
    <tr><td>A prefix tree</td><td>What starts with the letters I have typed</td><td>Beginnings only. It knows nothing about endings or middles</td></tr>
  </table>
  <div class="tbl-cap">Row one hands the structure to Chapter 9 and Lesson 10.2, and what happens when balance is lost to Lesson 10.3, When a Search Tree Quietly Becomes a List. Row two hands the real index to Lesson 10.5, B-Trees: How a Database Index Actually Works. Row three hands construction to Lesson 16.4, Tries: The Structure Behind Autocomplete.</div></div>

  <p>Now the third one, because it is the shape you have used most and noticed least. Twelve words are stored here: <em class="k">bat, bell, bird, cab, cake, car, card, care, cell, chat, dog, duck</em>. <strong>Each junction is labelled with how many words are still hanging below it.</strong> Watch that number as you type.</p>

  <div class="board" data-anim='{"type":"tree-walk","title":"Twelve words, and what each keystroke deletes","speed":1600,"unit":74,"legend":[["where your typing has reached","look"],["the letters you typed","seen"],["deleted, and never compared","dead"],["still standing, and therefore the answer","found"],["opened, and it still cannot help","bad"]],"nodes":[{"id":"root","label":"12","x":4,"d":0},{"id":"b","label":"3","x":1,"d":1},{"id":"c","label":"7","x":4,"d":1},{"id":"d","label":"2","x":7,"d":1},{"id":"ca","label":"5","x":2,"d":2},{"id":"ce","label":"1","x":4,"d":2},{"id":"ch","label":"1","x":6,"d":2},{"id":"cab","label":"1","x":0,"d":3},{"id":"cak","label":"1","x":2,"d":3},{"id":"car","label":"3","x":4,"d":3},{"id":"card","label":"1","x":3,"d":4},{"id":"care","label":"1","x":5,"d":4}],"edges":[{"from":"root","to":"b","w":"b"},{"from":"root","to":"c","w":"c"},{"from":"root","to":"d","w":"d"},{"from":"c","to":"ca","w":"a"},{"from":"c","to":"ce","w":"e"},{"from":"c","to":"ch","w":"h"},{"from":"ca","to":"cab","w":"b"},{"from":"ca","to":"cak","w":"k"},{"from":"ca","to":"car","w":"r"},{"from":"car","to":"card","w":"d"},{"from":"car","to":"care","w":"e"}],"steps":[{"look":["root"],"say":"Twelve words, nothing typed yet, and the top junction says so. <b>The letters live on the branches, not in the boxes.</b>"},{"look":["c"],"seen":["root"],"dead":["b","d"],"say":"You type <b>c</b>. Five words are deleted by one keystroke, and not one of them was compared to anything. The junction you are standing on now reads seven."},{"look":["ca"],"seen":["root","c"],"dead":["b","d","ce","ch"],"say":"You type <b>a</b>. Five standing. Cell and chat are gone, and again nothing was examined, they simply are not down this branch."},{"look":["car"],"seen":["root","c","ca"],"dead":["b","d","ce","ch","cab","cak"],"say":"You type <b>r</b>. Three standing, and you have walked three junctions to get here. <b>The cost was the length of what you typed</b>, not the size of the dictionary."},{"found":["car","card","care"],"seen":["root","c","ca"],"dead":["b","d","ce","ch","cab","cak"],"say":"<b>car, card, care.</b> Nobody searched a list. Whatever is left standing IS the answer, which is exactly why autocomplete feels instant rather than fast."},{"look":["root","b","c","d","ca","ce","ch","cab","cak","car","card","care"],"say":"Now ask this shape a different question: <b>which of these words end in the letters ar?</b>"},{"bad":["root","b","c","d","ca","ce","ch","cab","cak","car","card","care"],"say":"The whole shape turns red together. <b>It is built entirely out of beginnings, so it has nothing to say about endings.</b> Every junction has to be opened, and that is slower than reading a plain list would have been."}],"caption":"The last two frames are the most important in this lesson. A shape answers exactly the question its arrangement was built for, and turns into something worse than nothing for the question next to it."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The read stands still and the write falls off a cliff.</div>
  <p>A million items. Finding one costs <strong>about twenty looks</strong>, which is exactly what Lesson 6.3 charged, so nothing was gained on the read. Now the arrival. Into a sorted row: <strong>about 500,000 boxes slide.</strong> Into a shape: about twenty junctions walked and <strong>one link written.</strong> Divide 500,000 by 20 and the write got roughly <em class="g">twenty five thousand times</em> cheaper while the read did not move at all.</p>

  <div class="viz" data-viz='{"type":"card","title":"Why an index answers in three hops and not twenty","eyebrow":"A MILLION ROWS","badge":"same data, same order","width":560,"rows":[{"k":"Junctions with two branches each","v":"20 levels","tone":"bad","bar":1},{"k":"Junctions holding about a hundred keys each","v":"3 levels","tone":"good","bar":0.15},{"k":"Because two multiplied by itself twenty times","v":"1,048,576","tone":"bad","bar":1},{"k":"Because a hundred, three times over","v":"1,000,000","tone":"good","bar":0.15}],"caption":"Every bar is drawn against a maximum of 20 levels. The data is identical and the order is identical. The only difference is how much work one junction was made to do, and a real index sizes a junction to exactly one read from storage, which is why it holds hundreds of keys rather than two. That is the same exchange rate Lesson 6.4 just taught: fewer, fatter looks."}'></div>

  <p>And the trie counts differently again. Ten million words stored, five letters typed: <strong>five steps.</strong> The size of the dictionary never enters the arithmetic, because the cost is the length of what you typed. In the Chapter 2 currency the tree read is <em class="g">O(log n)</em> and the trie read is <em class="g">O(k)</em>, where k is your typing, which is the only cost in this chapter that does not mention the pile at all.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places, and the bill each one is quietly paying.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Order kept as a shape, and who pays for it","unit":178,"nodes":[{"id":"c","label":"Order kept as a shape, so writes stay cheap","x":2,"y":1,"kind":"dark"},{"id":"d","label":"A database index on one column, updated on every write to it","x":0,"y":0,"kind":"accent"},{"id":"a","label":"Autocomplete, where the shape itself is the answer","x":0,"y":2,"kind":"gold"},{"id":"f","label":"Folders inside folders, which is the same walk with names","x":4,"y":0,"kind":"box"},{"id":"s","label":"A phone contact list that stays sorted while you add people","x":4,"y":2,"kind":"box"},{"id":"w","label":"And the bill: every index makes writes slower and takes space","x":2,"y":3,"kind":"bad"}],"edges":[{"from":"c","to":"d","label":"one question, made instant","style":"green"},{"from":"c","to":"a","label":"beginnings only","style":"gold"},{"from":"c","to":"f","label":"a junction is a folder"},{"from":"c","to":"s","label":"insert without re-sorting"},{"from":"c","to":"w","label":"paid on every write"}],"caption":"The red node is the one nobody puts on a slide. An index is a second ordered copy of one column, so every write to that column now writes twice, and the space is real. That is why nobody indexes every column, and why adding one can make the rest of a system slower."}'></div>

  <div class="callout warn">
    <div class="ch">Two indexes are not one index</div>
    <p>If you have an index on <em class="k">city</em> and another on <em class="k">signup date</em>, and you ask for people in one city who signed up last week, <strong>each index is a separate order.</strong> A database can use one to narrow the field, and then it must check the other condition on every survivor, one at a time. It can sometimes combine them, and it is still not the same as an order built for the two together. That is why a query with two conditions can be fast and a query with three can fall off a cliff.</p>
  </div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Seven sentences, and most of them are about the write.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"Reads got faster and everything else got slower"</td><td>Count how many indexes that table now carries</td><td>Every index is a second copy paid for on every write to it</td></tr>
    <tr><td>"Searching by email is instant, by phone number it crawls"</td><td>Ask which column the order was built on</td><td>An index answers its own question and no other</td></tr>
    <tr><td>"It was fast last quarter and nothing changed"</td><td>Ask whether values arrive in increasing order</td><td>A shape fed in order can stop being a shape. Lesson 10.3 owns it</td></tr>
    <tr><td>"Suggestions are instant, but searching inside words is not"</td><td>Ask whether it is a beginning or a middle</td><td>Beginnings are the shape. Middles are a different structure entirely</td></tr>
    <tr><td>"One condition is fast, two is fine, three falls apart"</td><td>Ask what order exists for those columns together</td><td>Separate indexes narrow separately, then check the rest one by one</td></tr>
    <tr><td>"We added an index and the query did not change"</td><td>Compare the column indexed with the column filtered</td><td>The order built does not match the question asked</td></tr>
    <tr><td>"Bulk imports take hours and single inserts are instant"</td><td>Count the indexes and multiply by the rows</td><td>Every row pays every index. That cost is invisible one row at a time</td></tr>
  </table>
  <div class="tbl-cap">Only rows two, four and six are about reading. The rest are the write bill arriving, which is the half of this trade nobody budgets for and the reason an index is a decision rather than a default.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Twelve indexes, and a nightly import that stopped finishing.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our reporting table has picked up about a dozen indexes over two years, one at a time, each one added to make some slow page fast. Every one of them worked. Last month the nightly import stopped finishing inside its window. It loads the same two million rows it always has, the machine is not busy, and no single query is slow."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Every index worked, and together they stopped the night","lanes":[{"label":"The team"},{"label":"You"},{"label":"The table"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Import misses its window, no query is slow"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: is the problem a read or a write?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"An import is writes. Two million of them"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Each row writes the row, then updates every index"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"12 indexes: 2m rows becomes 26m ordered writes"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"Nobody added twelve. Somebody added one, twelve times"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Drop what no query uses, or index after loading"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"Nothing here is a bug and no decision along the way was wrong. Each index was added to fix a real slow page and each one worked. The cost is invisible one row at a time and only becomes a wall when two million rows arrive together."}'></div>

  <p><strong>The reads were never the problem. The import is writes.</strong> Every row now writes itself and then updates a dozen separate ordered copies, so two million rows became roughly twenty six million ordered writes. And nobody made that decision: somebody made one reasonable decision twelve times, each time on a page that really was slow, and nobody was ever looking at the total.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked one question before opening anything: <strong>is this a read problem or a write problem?</strong> An import is writes, and the entire cost of an index lands on writes. Once that is said out loud the arithmetic is trivial and the fix is a choice rather than a mystery: remove the orders no query actually uses, or build the orders after the rows have landed instead of during.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, sticky notes on a wall</div>
    <p>Write fifteen names on sticky notes. <strong>Round one:</strong> put them in one alphabetical row on the wall, then add a new name that belongs in the middle, and count how many notes you had to move. <strong>Round two:</strong> start again with one note in the centre, and hang each new name to the left if it is earlier and the right if it is later, one junction at a time. Add the same middle name and count the moves. <strong>Round three:</strong> now ask both walls which names end in the letters <em class="k">an</em>, and notice that neither arrangement helps at all, because neither was built out of endings.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A nightly import of two million rows stops finishing after a table has picked up a dozen indexes. No query is slow. What is happening?</div>
    <div class="opt" data-i="0">The table has grown too large and needs to be split across machines</div>
    <div class="opt" data-i="1">An import is writes, and every row must now update a dozen separate ordered copies as well as itself</div>
    <div class="opt" data-i="2">The indexes have become fragmented and need rebuilding</div>
    <div class="qexp">Every index is a second ordered copy of a column, and the whole of its cost lands on writes. Twelve indexes turn two million row insertions into roughly twenty six million ordered writes. Nothing is broken and no individual decision was wrong: somebody made one reasonable decision twelve times, and nobody was watching the total, because the cost is invisible one row at a time.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">Autocomplete on ten million words returns suggestions instantly after five letters. Why does the size of the dictionary barely matter?</div>
    <div class="opt" data-i="0">Because the words are sorted, so it can halve the list five times</div>
    <div class="opt" data-i="1">Because ten million is small enough to hold in memory and scan quickly</div>
    <div class="opt" data-i="2">Because it walks one junction per letter typed, so the cost is the length of what you typed rather than the size of the pile</div>
    <div class="qexp">A prefix tree never compares your text against a list. It follows one branch per character, so five letters is five steps whether the dictionary holds ten thousand words or ten million. Whatever is still hanging below where you stopped is the answer, which is why it feels instant rather than fast. It is also why the same shape is useless for finding words that end in something.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Search is the price you pay for order you did not keep, and every method so far has deleted candidates it could <strong>prove</strong> could not match. Next, a method that deletes what it merely <strong>believes</strong> cannot match, in exchange for finding things that share not one word with what you asked. That trade is what makes searching by meaning possible at all.</p>
  </div>
__NAV__
</div>`,

"6.6": `<div class="wrap">
  <div class="les-kicker">Chapter 6 · Lesson 6.6</div>
  <h1 class="les-title">Searching by Meaning: Vector Search, ANN and RAG</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~15 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">Everything else deletes what it has proved cannot match. This one deletes what it believes.</p>

  <p class="lead">Search is the price you pay for order you did not keep, and this is the lesson where the order is made of meaning. Retrieval is not one search, it is three in a row with three different exactness requirements. By the end you can say which kind belongs at which stage, and why almost every failure is one stage using the wrong one.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">A confident, well written answer about somebody else.</div>
  <p>You ask an assistant when your contract renews. It answers in a clear paragraph, cites a document, and gives a date. <strong>The date belongs to a different client.</strong> Nothing errored. Nothing was slow. The sentence is well written and the citation is real, and it is the wrong contract.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Nothing failed, and the answer is about the wrong company","width":820,"height":280,"items":[{"icon":"person","x":110,"y":126,"kind":"gold","label":"when does my contract renew"},{"icon":"doc","x":330,"y":124,"kind":"bad","label":"three paragraphs, two from another client"},{"icon":"server","x":560,"y":124,"kind":"muted","label":"the model, reading only those three"},{"icon":"phone","x":740,"y":126,"kind":"bad","label":"a fluent, cited, wrong answer"}],"arrows":[{"x1":168,"y1":126,"x2":252,"y2":126,"style":"gold","label":"turned into a point"},{"x1":410,"y1":124,"x2":492,"y2":124,"style":"green","label":"nearest three"}],"caption":"The model did nothing wrong. It answered beautifully from exactly what it was handed, and it was handed the wrong three paragraphs by a search that ran before a single word was generated. That search is this lesson."}'></div>

  <p>The model is not the interesting part of that story. <strong>A search ran before a single word was generated</strong>, chose three paragraphs, and everything downstream was faithful to them.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">The downgrade from proof to belief.</div>
  <p>Every method so far in this chapter deleted candidates it could <strong>prove</strong> could not match. Binary search proved it with order. A trie proved it with spelling. This one is different, and the difference is the whole subject: <strong>it deletes candidates it has good reason to believe cannot match.</strong></p>

  <div class="viz" data-viz='{"type":"arch","title":"Two ways to delete a haystack","maxChars":18,"nodes":[{"id":"c","label":"Delete most of the pile without opening it","col":1,"row":1,"kind":"dark"},{"id":"p","label":"By proof: the order guarantees it cannot be there","col":0,"row":0,"kind":"accent"},{"id":"b","label":"By belief: it is far away, so it is probably not the answer","col":0,"row":2,"kind":"gold"},{"id":"pr","label":"Always correct, and needs an exact thing to compare","col":2,"row":0,"kind":"accent"},{"id":"br","label":"Usually correct, and can match things sharing no words at all","col":2,"row":2,"kind":"gold"}],"edges":[{"from":"p","to":"c","label":"6.2 to 6.5"},{"from":"b","to":"c","label":"this lesson","style":"green"},{"from":"p","to":"pr","label":"buys"},{"from":"b","to":"br","label":"buys","style":"green"}],"caption":"Nobody gives up certainty for fun. You give it up because meaning has no exact form to compare against: two sentences can mean the same thing with no word in common, and no amount of order over spelling will ever put them next to each other."}'></div>

  <p>Each piece of text becomes a point in a space with many directions, placed so that <strong>position is meaning and distance is similarity.</strong> That placement is paid for once, when the document arrives, exactly like every other order in this chapter.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">One experiment, run twice, and only the order of operations changes.</div>
  <p>Ten paragraphs out of a contracts folder. Same index, same question, both times. Watch what happens when meaning is asked to decide something that had a right answer.</p>

  <div class="board" data-anim='{"type":"vector","title":"The same search, wrong then right","speed":1700,"width":640,"height":360,"unit":1,"legend":[["being measured","seen"],["sent to the model","found"],["never opened","dead"],["the expensive mistake","bad"]],"query":{"x":320,"y":180,"label":"when does my contract renew"},"points":[{"x":250,"y":120,"label":"renewal date, your file"},{"x":392,"y":238,"label":"auto-renew, other client"},{"x":210,"y":252,"label":"notice period, your file"},{"x":398,"y":118,"label":"renewal date, other client"},{"x":470,"y":296,"label":"termination, your file"},{"x":140,"y":318,"label":"payment terms, your file"},{"x":556,"y":196,"label":"invoice download"},{"x":84,"y":64,"label":"reset your password"},{"x":580,"y":84,"label":"office address"},{"x":596,"y":300,"label":"holiday schedule"}],"steps":[{"radius":0,"say":"Ten paragraphs out of your contracts folder, each turned into a point and placed <b>by meaning rather than spelling</b>. Your question becomes a point by exactly the same rule."},{"radius":0,"seen":[0,1,2,3,4,5,6,7,8,9],"say":"The exact way to answer is to measure the distance from your question to every single point. Ten is nothing. <b>A real folder is a million paragraphs, and this frame is Lesson 6.2 wearing a lab coat.</b>"},{"radius":0,"say":"So do not measure everything. Start at the question and grow outwards, <b>opening only what you touch.</b>"},{"radius":100,"seen":[0,1,3],"dead":[4,5,6,7,8,9],"say":"Three neighbours, and <b>not one of them contains the word renew twice over</b>. One says auto-renew, one says renewal date. That is the entire case for doing this at all: spelling would never have put these together."},{"radius":100,"found":[0],"bad":[1,3],"dead":[4,5,6,7,8,9],"say":"And two of those three <b>belong to a different client.</b> They go to the model beside yours, and what comes back is fluent, well written, correctly cited and about the wrong company. Nothing errored."},{"radius":0,"dead":[1,3],"say":"Run it again, with one thing added <b>before the circle exists</b>: an exact filter on whose file this is. Not a score. Not a preference. A filter, so everything belonging to anybody else leaves the board before meaning is ever consulted."},{"radius":140,"dead":[1,3],"seen":[0,2],"say":"Now grow the circle through what is left. Two of your own paragraphs: the renewal date and the notice period. <b>Same index, same question, same embedding.</b>"},{"radius":140,"dead":[1,3,5,6,7,8,9],"found":[0,2],"bad":[4],"say":"Stop at two, and here is the bill, in red. <b>Termination clause was the next thing out there</b> and the search stopped one widening short of it. Nothing failed. You bought that loss the moment you set a budget."},{"radius":200,"dead":[1,3,5,6,7,8,9],"found":[0,2,4],"say":"Pay for more hops and it comes back. <b>That is the dial, and you set it.</b> Turn it all the way to certain and you are back at frame two, measuring every point in the folder."}],"caption":"Two runs, one index, one question. The first was wrong and nothing about it errored. The only thing that changed in the second was the order of operations: filter exactly first, then let meaning decide among what is left."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Where the search sits, and when it runs.</div>

  <div class="viz" data-viz='{"type":"seq","title":"One question, and the numbers shrinking down the page","actors":[{"label":"You","kind":"gold"},{"label":"The app","kind":"accent"},{"label":"The index","kind":"muted"},{"label":"The model","kind":"box"}],"messages":[{"from":0,"to":1,"label":"when does my contract renew","style":"gold"},{"from":1,"to":2,"label":"turn this into a point, then filter to this workspace"},{"from":2,"to":1,"label":"about 2,000 visited, nearest 50 back","style":"green"},{"from":1,"to":1,"label":"score those 50 properly, keep 5"},{"from":1,"to":3,"label":"here are 5 paragraphs, answer only from these","style":"green"},{"from":3,"to":0,"label":"an answer, and a source","style":"green"}],"caption":"Read the numbers down the middle: a million stored, about two thousand visited, fifty returned, five read. Every stage exists to make the next one affordable, and the model never sees the pile at all. It sees five paragraphs somebody else chose."}'></div>

  <p>That is retrieval augmented generation, with nothing mysterious in it. <strong>The model is handed a shortlist and told to answer only from it</strong>, which is why a retrieval mistake and a model mistake look identical from outside and are fixed in completely different places.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Three stages, three different exactness requirements.</div>
  <p>This is the answer to the question this chapter exists for: <em class="k">which search, where, and when.</em> Not one of these three is optional and not one of them can do another one job.</p>

  <div class="tbl-wrap"><table>
    <tr><th>Stage</th><th>What kind of search</th><th>What goes wrong if you use the other kind</th></tr>
    <tr><td>Filter</td><td>Exact. Whose file, which version, which permission</td><td>Meaning decides a question that had a right answer, and leaks another client</td></tr>
    <tr><td>Retrieve</td><td>Approximate, over meaning, with a budget you choose</td><td>Exact would mean measuring every point in the folder, on every question</td></tr>
    <tr><td>Rerank</td><td>Exact and expensive, over the shortlist only</td><td>Doing it to the whole folder is unaffordable, and skipping it ships rough ordering</td></tr>
  </table>
  <div class="tbl-cap">A hard constraint is a filter and never a preference. The moment you let meaning decide something with a right answer, you have chosen to be confidently wrong sometimes, and the rerank at the end is a plain linear scan over fifty, which Lesson 6.2 defended and which is affordable only because everything before it deleted the haystack.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which kind of search does this condition need","maxChars":18,"nodes":[{"id":"q","label":"Does this condition have a right answer?","col":0,"row":1,"kind":"gold","shape":"diamond"},{"id":"f","label":"Yes: an invoice number, an owner, a date, a permission","col":1,"row":0,"kind":"accent"},{"id":"m","label":"No: relevance, similarity, about the same topic","col":1,"row":2,"kind":"gold"},{"id":"fe","label":"Exact filter, applied BEFORE meaning is consulted","col":2,"row":0,"kind":"accent"},{"id":"me","label":"Approximate retrieval, then rerank what comes back","col":2,"row":2,"kind":"gold"}],"edges":[{"from":"q","to":"f","label":"yes","style":"green"},{"from":"q","to":"m","label":"no"},{"from":"f","to":"fe","label":"so","style":"green"},{"from":"m","to":"me","label":"so"}],"caption":"One question decides every condition in a retrieval system, and it is not about difficulty or importance. It is whether being wrong is a matter of taste or a matter of fact. Ownership and permission are facts, so they never go near the meaning stage."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">One library, and every division you can check.</div>
  <p>A million paragraphs, each stored as a list of numbers. Take <strong>768 numbers</strong> as the illustration, because the arithmetic is clean; real systems run from a few hundred to a few thousand. Measuring one distance means touching all 768.</p>

  <div class="viz" data-viz='{"type":"card","title":"The funnel, on one question","eyebrow":"A MILLION PARAGRAPHS","badge":"768 numbers each","width":560,"rows":[{"k":"Exact: measure every point","v":"768,000,000 multiplications","tone":"bad","bar":1},{"k":"Approximate: visit about 2,000","v":"1,536,000","tone":"good","bar":0.002},{"k":"So the work fell by","v":"500 times","tone":"good","bar":0.002},{"k":"Returned to the app","v":"50","tone":"good","bar":0.00005},{"k":"Read by the model","v":"5","tone":"good","bar":0.000005}],"caption":"Every bar is drawn against a maximum of 768,000,000, and every figure here is illustrative. One million times 768 is 768,000,000. Two thousand times 768 is 1,536,000. Divide and you get exactly 500, which is the halving from Lesson 6.3 bought back in a space where nothing can be sorted."}'></div>

  <p>And the thing you paid with. That 500 times is not free: <strong>the two thousand it visited are not guaranteed to contain the nearest paragraph.</strong> Usually they do. Sometimes they do not, and when they do not nothing tells you, because a slightly worse neighbour looks exactly like a correct one. In the Chapter 2 currency the exact version is <em class="g">O(n)</em>, and the approximate version buys back something close to <em class="g">O(log n)</em> by giving up the guarantee that every method before this one held.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places, and the same three stages inside each.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Filter exactly, retrieve approximately, rerank the shortlist","unit":178,"nodes":[{"id":"c","label":"Three searches in a row, with three different requirements","x":2,"y":1,"kind":"dark"},{"id":"a","label":"An assistant answering from your own documents","x":0,"y":0,"kind":"gold"},{"id":"s","label":"Shop search, where jumper finds sweater","x":0,"y":2,"kind":"accent"},{"id":"p","label":"Photos found by describing what is in them","x":4,"y":0,"kind":"box"},{"id":"d","label":"Duplicate support tickets that share no wording","x":4,"y":2,"kind":"box"},{"id":"h","label":"And the hybrid case: exact words plus meaning, then one reranker","x":2,"y":3,"kind":"accent"}],"edges":[{"from":"c","to":"a","label":"the filter is who you are","style":"gold"},{"from":"c","to":"s","label":"the filter is in stock","style":"green"},{"from":"c","to":"p","label":"the filter is your library"},{"from":"c","to":"d","label":"the filter is this product"},{"from":"c","to":"h","label":"when exact words still matter","style":"green"}],"caption":"Every node has an exact filter in it, and in every one of them the filter is the thing a user would be furious about if meaning got it wrong. The bottom node is the honest case: when a corpus contains part numbers, error codes or names, meaning alone will miss them, so you run both and let one reranker decide."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Seven sentences, and none of them says vector.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"It answered about a different customer"</td><td>Ask whether ownership is a filter or a score</td><td>A hard constraint was left to meaning. It has no right answer to protect</td></tr>
    <tr><td>"It is confidently wrong, and the citation is real"</td><td>Read the paragraphs it was given, not the answer</td><td>Retrieval chose badly. The model was faithful to the wrong input</td></tr>
    <tr><td>"It cannot find things by part number any more"</td><td>Ask whether exact words are still searched at all</td><td>Meaning alone. Codes and names need the exact half back</td></tr>
    <tr><td>"It misses the obvious document about one in twenty times"</td><td>Ask what the search budget is set to</td><td>The dial. More hops costs more and misses less. It is a choice</td></tr>
    <tr><td>"Answers got worse after we added more documents"</td><td>Compare the shortlist before and after</td><td>The same budget over a larger space visits a smaller fraction</td></tr>
    <tr><td>"It is fast for everybody except our biggest client"</td><td>Ask when the filter is applied, before or after</td><td>Filtering after retrieval means most of what was retrieved gets thrown away</td></tr>
    <tr><td>"The top result is right but the order looks random"</td><td>Ask whether anything reranks the shortlist</td><td>Nothing scored the fifty properly. That stage is missing</td></tr>
  </table>
  <div class="tbl-cap">Six of these seven are a stage problem rather than a model problem, and every one of them is fixed somewhere the model cannot see. That is why blaming the model is the most expensive wrong turn in this whole chapter.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">The assistant that leaked another client, once.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our assistant answers questions from customer contracts. Last week it told one client their renewal date, and the date came from a different client contract, correctly cited. It has never done it again and we cannot reproduce it. Ownership is definitely in the system: every chunk is stored with a client id, and the id is part of the text that gets embedded."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"The id was in the text, which is not the same as being a filter","lanes":[{"label":"The team"},{"label":"You"},{"label":"The system"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Leaked once, cited correctly, cannot reproduce"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: is ownership a filter, or part of the meaning?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"It is in the embedded text. So it is a score"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Then it can be outweighed by a closer paragraph"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"Another client renewal clause was nearer"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"That is why it is rare and unreproducible"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Make the id a filter applied before the search"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"Putting the client id into the embedded text feels like enforcing ownership and is the opposite of it. It turns a fact into one ingredient of a similarity score, so it holds for most questions and quietly loses whenever some other paragraph happens to be nearer."}'></div>

  <p><strong>The id was in the text, and text is meaning, and meaning is a preference.</strong> A paragraph belonging to another client can be nearer to the question than anything in yours, and when it is, the id contributes a little distance and loses. That is why it is rare, why it is unreproducible, and why every test passed.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked the one question this lesson teaches: <strong>is this condition a filter or a preference?</strong> Ownership has a right answer, so it can never be allowed to compete on distance. Moving it out of the embedded text and into a filter applied before the circle ever grows does not make the system better at meaning. It makes an entire category of failure impossible instead of rare, which is the only acceptable outcome for a fact.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, twenty sentences on paper</div>
    <p>Write twenty short sentences on separate slips, from two different topics, and include four that mean the same thing in completely different words. <strong>Round one:</strong> ask somebody to find everything about one topic using only exact word matching, and note what they miss. <strong>Round two:</strong> let them group by meaning instead, and note what they wrongly include. <strong>Round three:</strong> now add a rule that half the slips belong to somebody else and must never be returned, and ask them to apply it <em class="k">after</em> grouping by meaning. Watch how often something slips through, and then apply it first and watch that failure become impossible rather than rare.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="0">
    <div class="q">An assistant occasionally answers using another client's document. The client id is stored inside the text that gets embedded. What is wrong?</div>
    <div class="opt" data-i="0">Ownership is being treated as a preference, so a nearer paragraph can outweigh it</div>
    <div class="opt" data-i="1">The embedding model is not accurate enough and should be replaced</div>
    <div class="opt" data-i="2">The search budget is too low, so it is missing the correct document</div>
    <div class="qexp">Anything inside the embedded text becomes one ingredient of a distance, and a distance can be outweighed. Ownership has a right answer, so it is a filter and never a score. Applied before the search it makes the failure impossible; applied as part of meaning it makes the failure rare, unreproducible and certain to happen eventually, which is exactly the symptom described.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">An approximate index visits about 2,000 of a million paragraphs and does 500 times less work than measuring everything. What did that buy, and what did it cost?</div>
    <div class="opt" data-i="0">It bought speed and cost nothing, since the nearest paragraph is always inside the 2,000</div>
    <div class="opt" data-i="1">It bought the right never to open most of the pile, and cost the guarantee that the true nearest is among what it visited</div>
    <div class="opt" data-i="2">It bought accuracy, because visiting fewer points reduces noise in the results</div>
    <div class="qexp">Every method before this one deleted candidates it had proved could not match. This one deletes what it has good reason to believe cannot match, and belief is occasionally wrong. Nothing reports it when that happens, because a slightly worse neighbour looks exactly like a correct one. The budget is a dial you set, and turning it all the way to certain means measuring everything again.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Every lesson so far has had a collection in it: a row, a shape, a folder of paragraphs. <strong>The hardest search problems have no collection at all</strong>, and nobody who brings you one will use the word search. Next: reading the disguise.</p>
  </div>
__NAV__
</div>`,

"6.7": `<div class="wrap">
  <div class="les-kicker">Chapter 6 · Lesson 6.7</div>
  <h1 class="les-title">How Search Problems Show Up: Reading the Disguise</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
  </div>

  <p class="motto">The hardest search problems have no collection in them at all.</p>

  <p class="lead">Nobody has ever walked up to you and said they have a search problem. They say the page is slow, the report times out, the suggestions feel laggy, or they ask how many vans to buy. This lesson is the instrument for hearing what is underneath. By the end you can name the structure behind a complaint you have never heard before, and say when it was never a search problem at all.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Nobody says the word.</div>
  <p>Four sentences, from four different people, in one week. <em class="k">The customer page got slow.</em> <em class="k">Can we suggest as they type?</em> <em class="k">The month end report times out.</em> <em class="k">How many vans do we need so everything arrives by six?</em></p>

  <div class="viz" data-viz='{"type":"scene","title":"Four complaints, and not one of them says search","width":820,"height":280,"items":[{"icon":"person","x":112,"y":126,"kind":"gold","label":"the customer page got slow"},{"icon":"phone","x":300,"y":126,"kind":"accent","label":"can we suggest as they type"},{"icon":"doc","x":500,"y":124,"kind":"muted","label":"the month end report times out"},{"icon":"server","x":716,"y":124,"kind":"bad","label":"how many vans do we need"}],"arrows":[{"x1":600,"y1":124,"x2":660,"y2":124,"style":"gold","label":"and this one has no data at all"}],"caption":"Three of these are searches wearing a performance complaint. The fourth has no collection anywhere in it, nothing stored, nothing sorted, and it is the one this chapter has been building towards."}'></div>

  <p>Three of those are searches in costume. <strong>The fourth has no collection anywhere in it</strong>, and it is still a binary search.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One question, asked of the sentence rather than the code.</div>
  <p>The instrument is a single question: <strong>what order does this question need, and is anybody maintaining it?</strong> If somebody is, you have a search. If nobody is, you have an ordering problem wearing a search costume, and no cleverer algorithm will touch it.</p>

  <div class="viz" data-viz='{"type":"flow","title":"The instrument, and its off switch","maxChars":18,"nodes":[{"id":"s","label":"Somebody says something is slow","col":0,"row":1,"kind":"gold"},{"id":"t","label":"Imagine ten times the data. Say the new wait out loud","col":1,"row":1,"kind":"dark","shape":"diamond"},{"id":"n","label":"The wait does not move: it was never a search problem","col":2,"row":0,"kind":"bad"},{"id":"g","label":"The wait grows with the pile: something opens every box","col":2,"row":2,"kind":"accent"},{"id":"q","label":"Then ask: what order does this need, and who maintains it?","col":3,"row":2,"kind":"gold"}],"edges":[{"from":"s","to":"t"},{"from":"t","to":"n","label":"unchanged"},{"from":"t","to":"g","label":"grows in step","style":"green"},{"from":"g","to":"q","label":"then","style":"green"}],"caption":"The off switch is the half of this skill nobody teaches. If the wait does not move when you imagine ten times the data, the rows are not involved, and hunting for an index will waste a week. Knowing when to stop looking is part of the instrument."}'></div>

  <p>And the test needs no code and no profiler. <strong>Imagine ten times the data and say the new wait out loud.</strong> 0.04 to 0.4 to 4 to 40 means something reads everything. 0.008 to 0.009 to 0.010 means the order is already kept. 0.20 to 0.20 to 0.20 means the rows were never involved.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Twelve answers, no list, and thirty seconds a guess.</div>
  <p>A depot asks how many vans it needs so every parcel arrives by six. The only way to know whether a number works is to run a full simulation, which takes thirty seconds. <strong>There is no collection here.</strong> Nothing is stored and nothing is sorted.</p>
  <p>But one fact is true about every candidate: <strong>if six vans finish by six, then seven certainly do.</strong> More vans never makes it later. That single fact is an order, and an order is all binary search has ever needed.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Binary search over answers, where no data exists","speed":1700,"big":true,"data":[1,2,3,4,5,6,7,8,9,10,11,12],"labels":["","","","","","","","","","","",""],"countLabel":" simulations","pointerLabels":{"lo":"too few","mid":"simulating","hi":"known to work"},"legend":[["simulating now","look"],["tested, and it misses six o clock","bad"],["works, but maybe not the smallest","seen"],["deleted without simulating","dead"],["the smallest that works","found"]],"steps":[{"count":0,"badge":"12 answers, no list","say":"Twelve candidate fleet sizes. <b>There is no data anywhere in this problem</b>, and the boxes are answers rather than things. Testing one costs thirty seconds of simulation."},{"range":[0,11],"look":[5],"ptr":{"lo":0,"mid":5,"hi":11},"count":1,"badge":"6 vans: 7:40pm","say":"Test the middle answer rather than the first one. <b>Six vans finishes at twenty to eight.</b> Too late."},{"bad":[5],"dead":[0,1,2,3,4],"range":[6,11],"look":[8],"ptr":{"lo":6,"mid":8,"hi":11},"count":2,"badge":"9 vans: 5:20pm","say":"If six is too late then five, four, three, two and one are all worse. <b>Five answers deleted and nobody simulated any of them.</b> Nine vans works."},{"bad":[5],"seen":[8],"dead":[0,1,2,3,4,9,10,11],"range":[6,8],"look":[7],"ptr":{"lo":6,"mid":7,"hi":8},"count":3,"badge":"8 vans: 5:55pm","say":"Nine works, so ten, eleven and twelve certainly work, and none of them can be the smallest. Eight works too, with five minutes to spare."},{"bad":[5],"seen":[7,8],"dead":[0,1,2,3,4,9,10,11],"range":[6,6],"look":[6],"ptr":{"lo":6,"mid":6,"hi":6},"count":4,"badge":"7 vans: 6:10pm","say":"One candidate left between the too-few and the known-good. <b>Seven vans finishes at ten past six.</b> Too late."},{"bad":[5,6],"found":[7],"seen":[8],"dead":[0,1,2,3,4,9,10,11],"count":4,"badge":"8 vans, 4 simulations","say":"<b>Eight vans, found in four simulations instead of twelve.</b> Two minutes instead of six, and the only thing that made it possible is that somebody noticed the answers were in an order even though nothing on disk was."}],"caption":"Red means a test you actually paid thirty seconds for and lost. Faded means an answer deleted by reasoning alone, for free. The whole method is the second colour: five answers ruled out by one sentence about vans, with no simulation run."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What binary search actually required, all along.</div>

  <div class="viz" data-viz='{"type":"seq","title":"The requirement, stated properly for the first time","actors":[{"label":"Binary search","kind":"gold"},{"label":"A sorted row","kind":"accent"},{"label":"A fleet size","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"if this box is too small, is everything before it too small","style":"gold"},{"from":1,"to":0,"label":"yes, because I am in order","style":"green"},{"from":0,"to":2,"label":"if this many vans is too few, is every smaller number too few","style":"gold"},{"from":2,"to":0,"label":"yes, because more vans never arrive later","style":"green"},{"from":0,"to":0,"label":"then you are the same problem, and I do not care that one of you is stored"}],"caption":"Sorted data was never the requirement. It was one way of satisfying the requirement. What halving actually needs is a fact that stays true once it becomes true, so that testing one candidate settles everything on one side of it."}'></div>

  <p>Sorted data was never the real requirement. <strong>It was one way of meeting it.</strong> What halving needs is a property that, once true, stays true, so that one test settles an entire side. A row in order has that. So does a fleet of vans, a compression setting, a rate limit, and a commit history.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Four disguises, and what each one is really asking for.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The disguise</th><th>What it sounds like</th><th>What it is really asking for</th></tr>
    <tr><td>A performance complaint</td><td>"It got slow and nothing changed"</td><td>An order nobody is maintaining. Lessons 6.3 and 6.5</td></tr>
    <tr><td>A feature request</td><td>"Can we suggest as they type"</td><td>A shape built out of beginnings. Lesson 6.5</td></tr>
    <tr><td>A quality complaint</td><td>"It answers confidently about the wrong thing"</td><td>A stage using the wrong kind of exactness. Lesson 6.6</td></tr>
    <tr><td>A planning question</td><td>"How many do we need"</td><td>Halving over answers, where no collection exists at all</td></tr>
  </table>
  <div class="tbl-cap">The last row is the one worth practising, because nothing in the sentence looks like this chapter. The tell is never the word search. It is a claim that something stays true once it becomes true.</div></div>

  <div class="callout warn">
    <div class="ch">When it is not a search problem</div>
    <p>The instrument has an off switch and it matters more than the rest of it. If the wait does not move when you imagine ten times the data, <strong>the rows are not involved</strong>. A fixed 200 milliseconds is a network call, a lock, a cold start, or an external service, and it will sit there unchanged while you spend a week adding indexes. Half of this skill is knowing when to stop looking.</p>
  </div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The same simulator, and eight hours against five minutes.</div>
  <p>Twelve candidates tested one at a time is twelve simulations: <strong>six minutes.</strong> Halving over the answers is four: <strong>two minutes.</strong> Now make it realistic. A depot choosing between one and a thousand delivery slots, at thirty seconds a simulation.</p>

  <div class="viz" data-viz='{"type":"card","title":"One thousand candidate answers, thirty seconds each","eyebrow":"NO COLLECTION ANYWHERE","badge":"same simulator","width":560,"rows":[{"k":"Test every candidate","v":"1,000 simulations","tone":"bad","bar":1},{"k":"Which is","v":"about 8 hours","tone":"bad","bar":1},{"k":"Halve the answers instead","v":"10 simulations","tone":"good","bar":0.01},{"k":"Which is","v":"5 minutes","tone":"good","bar":0.01},{"k":"Because two multiplied by itself ten times","v":"1,024","tone":"good","bar":0.01}],"caption":"Every bar is drawn against a maximum of 1,000. Same simulator, same deadline, same data, and nothing was optimised. The only thing that changed is that somebody noticed the answers were in an order even though nothing on disk was."}'></div>

  <p>This is the highest-value move in the chapter, and it is the one that looks least like searching. <strong>Nothing was made faster.</strong> A thousand candidates became ten, because ten answers is all you ever needed to test.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five questions nobody would call a search.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Halving over answers, where nothing is stored","unit":178,"nodes":[{"id":"c","label":"A fact that stays true once it becomes true","x":2,"y":1,"kind":"dark"},{"id":"v","label":"How many vans, machines or people do we need","x":0,"y":0,"kind":"gold"},{"id":"g","label":"Which commit broke the build, which is git bisect","x":0,"y":2,"kind":"accent"},{"id":"r","label":"The highest quality setting that still fits the size limit","x":4,"y":0,"kind":"box"},{"id":"l","label":"The largest batch that still finishes inside the window","x":4,"y":2,"kind":"box"},{"id":"p","label":"And the exception: the peak of something that rises then falls","x":2,"y":3,"kind":"bad"}],"edges":[{"from":"c","to":"v","label":"more never makes it later","style":"green"},{"from":"c","to":"g","label":"broken stays broken","style":"green"},{"from":"c","to":"r","label":"smaller always fits"},{"from":"c","to":"l","label":"smaller always finishes"},{"from":"c","to":"p","label":"no such fact exists here"}],"caption":"The red node is the honest exception and the one Lesson 6.4 promised. A peak has no fact that stays true, because the answer is better on one side and worse on the other with no ordering across the whole range, so halving on a comparison does not work and a different split is needed. Chapter 15 owns it."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Seven sentences, and one test for all of them.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>Imagine ten times the data</th><th>What it is really telling you</th></tr>
    <tr><td>"The customer page got slow this year"</td><td>0.4 becomes 4 becomes 40</td><td>Something opens every row. An order is missing</td></tr>
    <tr><td>"It has always taken about 200 milliseconds"</td><td>0.20 stays 0.20</td><td>Not a search problem. A call, a lock or a cold start</td></tr>
    <tr><td>"Can we suggest as they type"</td><td>Barely moves, if built right</td><td>A shape made of beginnings, and the cost is what you typed</td></tr>
    <tr><td>"The month end report times out and the daily one is fine"</td><td>Thirty times the rows, thirty times the wait</td><td>The same scan, given thirty times the work at once</td></tr>
    <tr><td>"How many workers do we need to clear the queue by nine"</td><td>There is no data to multiply</td><td>Halving over answers. Chapter 5 priced the queue itself</td></tr>
    <tr><td>"It answered confidently about the wrong customer"</td><td>Unchanged, and still wrong</td><td>Not speed at all. A filter left to meaning. Lesson 6.6</td></tr>
    <tr><td>"Adding an index did nothing"</td><td>Still grows with the pile</td><td>The order built does not match the question asked</td></tr>
  </table>
  <div class="tbl-cap">The middle column is the whole instrument, and you can run it in a meeting. Rows two and six are the ones worth memorising, because both are cases where the entire chapter does not apply and the honest answer is to look somewhere else.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Four hours of simulations, every single morning.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Every morning we work out the smallest number of delivery slots that still gets everything out by six. We run the simulator once per candidate, starting at one and going up until it passes. It takes about four hours and it is the reason the schedule is published late. We have asked for a faster simulator twice and been told it is already optimised."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Nobody needed a faster simulator","lanes":[{"label":"The team"},{"label":"You"},{"label":"The depot"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Four hours every morning, simulator already optimised"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: does more capacity ever make it finish later?"},{"id":"c1","lane":2,"col":1,"kind":"accent","label":"No. More slots never arrives later"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Then the answers are in an order, and you can halve them"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"They test 1, 2, 3, 4 upwards until one passes"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"About 480 runs becomes about 10"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Four hours becomes five minutes, same simulator"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"The request that kept being made was for a faster simulator, and the simulator was never the problem. Walking the candidates one at a time is Lesson 6.2 applied to answers, and it was being done to a list that was in order the whole time."}'></div>

  <p><strong>Nobody needed a faster simulator.</strong> They were walking candidate answers one at a time, which is Lesson 6.2 applied to a list nobody realised was in order. More slots never makes delivery later, so a single test settles every candidate below it. Around 480 runs becomes about ten, and four hours becomes five minutes on exactly the same machine.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It never asked how the simulator worked. It asked one question about the world instead: <strong>does more capacity ever make it finish later?</strong> No. That single no establishes an order over the answers, and everything in Lesson 6.3 becomes legal on a problem with no collection in it. The two requests for a faster simulator were both aimed at the one thing that was already fine.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one week of complaints</div>
    <p>For one week, write down every sentence you hear about something being slow, awkward or wrong, without judging any of them. At the end, take each one and do exactly two things. <strong>First:</strong> imagine ten times the data and say the new wait out loud. <strong>Second:</strong> if the wait grows, ask what order that question needs and whether anybody is maintaining it. Then count how many of your sentences turned out to have nothing to do with the amount of data at all. That count is the part of this skill that saves the most time, and it is the part nobody teaches.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A depot runs a thirty second simulation for each candidate fleet size, one at a time from the smallest, taking four hours. What is the fix?</div>
    <div class="opt" data-i="0">Make the simulator faster, since it is run hundreds of times</div>
    <div class="opt" data-i="1">Halve the candidate answers, because more vans never makes delivery later, so one test settles everything below it</div>
    <div class="opt" data-i="2">Cache the results of previous mornings and reuse them</div>
    <div class="qexp">There is no collection in this problem, and that is what hides it. The order is over the answers rather than over data: once a fleet size works, every larger one works too. That single fact is everything binary search ever required, so about 480 runs becomes about ten and four hours becomes five minutes on the same simulator, which was never the problem.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">A page has taken about 200 milliseconds for two years, through a tenfold increase in rows. Somebody suggests adding an index. What do you say?</div>
    <div class="opt" data-i="0">Agree, since 200 milliseconds is slow and an index will reduce it</div>
    <div class="opt" data-i="1">Ask which column to index before deciding</div>
    <div class="opt" data-i="2">The wait did not move when the data grew tenfold, so the rows are not involved and no index will help</div>
    <div class="qexp">This is the off switch, and it is half the skill. A cost that ignores the size of the pile is not a search cost. A flat 200 milliseconds through a tenfold growth points at a network call, a lock, a cold start or an external service, and every one of those sits somewhere no index can reach. Knowing when the chapter does not apply is what stops a week being spent in the wrong place.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>You now have every method in the chapter and the instrument for hearing which one a complaint is asking for. <strong>The last lesson puts them on one page</strong>, as an invoice rather than a menu, and tears down six real systems to show which bill each of them chose to pay.</p>
  </div>
__NAV__
</div>`,

"6.9": `<div class="wrap">
  <div class="les-kicker">Chapter 6 · Lesson 6.9</div>
  <h1 class="les-title">The Whiteboard: All of Searching in One Run</h1>
  <div class="les-meta">
    <span class="pill">whiteboard</span><span class="pill">~2 min</span>
    <span class="pill gold">watch, do not read</span><span class="pill">14 acts</span>
  </div>

  <p class="motto">If you can watch it happen once, you never have to memorise it.</p>

  <p class="lead">Search is the price you pay for order you did not keep, and this is that whole argument with the prose taken out. Fourteen acts on one board, in four parts. Part 2 runs five of the seven methods and charts the other two. <strong>Part 3 puts three of them inside things you used this week, and shows one of them being chosen wrongly</strong>, which is where the ideas stop being school and start being useful. Press play and leave it alone, or step through at your own pace.</p>
</div>

<div class="reel" data-reel='{"title":"All of searching, in one continuous run","speed":1500,"caption":"Fourteen acts, about 2 minutes end to end. Press play once and let it run, or click any act to jump straight there. Part 3 is the point: it is the same methods you just watched, running inside things you used this week.","acts":[{"part":"Part 1 · The idea","tab":"The one question","title":"Act 1 · Before any algorithm, one question","type":"reveal","speed":1600,"viz":{"maxChars":16,"gy":52,"nodes":[{"id":"thing","label":"You need to find one thing","col":1,"row":0,"kind":"dark"},{"id":"q","label":"Is the collection kept in order?","col":1,"row":1,"kind":"gold","shape":"diamond"},{"id":"slow","label":"Check every box","col":0,"row":2,"kind":"muted"},{"id":"fast","label":"Throw half away, every look","col":2,"row":2,"kind":"accent"}],"edges":[{"from":"thing","to":"q"},{"from":"q","to":"slow","label":"no"},{"from":"q","to":"fast","label":"yes","style":"green"}]},"steps":[{"show":["thing"],"look":["thing"],"say":"Every search in this chapter starts here. A pile of things, and one thing you want out of it."},{"show":["thing","q"],"look":["q"],"say":"Before you name a single algorithm, answer this. <b>Is the collection kept in order?</b>"},{"show":["thing","q","slow"],"look":["slow"],"say":"No order means no shortcut exists. You are allowed to check every box, and nothing else."},{"show":["thing","q","slow","fast"],"found":["fast"],"say":"Order means one look can rule out half the pile. That single permission is the whole difference. Watch it happen."}]},{"part":"Part 2 · The methods","tab":"Check every box","title":"Act 2 · Linear search, the honest method","type":"array-scan","speed":850,"big":true,"data":[58,13,72,29,6,90,34,17,41,25,80,49],"target":41,"countLabel":" looks","legend":[["checking now","look"],["ruled out","dead"],["found it","found"]],"steps":[{"look":[0],"dead":[],"count":1,"ptr":{"i":0},"say":"Start at the left. Is 58 our 41? No. And nothing about 58 hints where 41 might be, so there is nowhere clever to go."},{"look":[1],"dead":[0],"count":2,"ptr":{"i":1},"say":"13. No. Move one box right. That is the entire algorithm, and that honesty is its only feature."},{"look":[2],"dead":[0,1],"count":3,"ptr":{"i":2},"say":"72. No. Next box."},{"look":[3],"dead":[0,1,2],"count":4,"ptr":{"i":3},"say":"29. No. Next box."},{"look":[4],"dead":[0,1,2,3],"count":5,"ptr":{"i":4},"say":"Halfway, still nothing. Look at the faded boxes on the left: each one cost a full look and bought nothing."},{"look":[5],"dead":[0,1,2,3,4],"count":6,"ptr":{"i":5},"say":"90. No. Next box."},{"look":[6],"dead":[0,1,2,3,4,5],"count":7,"ptr":{"i":6},"say":"34. No. Next box."},{"look":[7],"dead":[0,1,2,3,4,5,6],"count":8,"ptr":{"i":7},"say":"17. No. Next box."},{"found":[8],"dead":[0,1,2,3,4,5,6,7],"count":9,"ptr":{"i":8},"say":"<b>Found it, on the ninth look.</b> Nine boxes opened to find one. Had 41 been last, it would have been twelve."}]},{"part":"Part 2 · The methods","tab":"Halve the haystack","title":"Act 3 · Binary search, the same numbers, sorted first","type":"array-scan","speed":1700,"big":true,"data":[6,13,17,25,29,34,41,49,58,72,80,90],"target":41,"countLabel":" looks","legend":[["checking now","look"],["still possible","range"],["ruled out","dead"],["found it","found"]],"steps":[{"range":[0,11],"look":[5],"ptr":{"lo":0,"mid":5,"hi":11},"count":1,"say":"Same twelve numbers, now in order. Never start at the edge. Go straight to the <b>middle</b>."},{"range":[6,11],"look":[8],"dead":[0,1,2,3,4,5],"ptr":{"lo":6,"mid":8,"hi":11},"count":2,"say":"The middle held 34. Our 41 is bigger, so everything left of it is impossible. <b>Six boxes gone in one look.</b>"},{"range":[6,7],"look":[6],"dead":[0,1,2,3,4,5,8,9,10,11],"ptr":{"lo":6,"mid":6,"hi":7},"count":3,"say":"58 was too big, so the right end goes too. Two boxes left, and the middle of two is the first one."},{"range":[6,7],"found":[6],"dead":[0,1,2,3,4,5,8,9,10,11],"ptr":{"lo":6,"mid":6,"hi":7},"count":3,"say":"<b>Found, in three looks instead of nine.</b> Not because it was faster. Because being sorted let it discard, and discarding is what speed actually is."}]},{"part":"Part 2 · The methods","tab":"The race","title":"Act 4 · Both methods, same numbers, same moment","type":"race","speed":1050,"legend":[["checking now","look"],["ruled out","dead"],["still possible","range"],["found it","found"]],"tracks":[{"label":"Unsorted","data":[58,13,72,29,6,90,34,17,41,25,80,49]},{"label":"Sorted","data":[6,13,17,25,29,34,41,49,58,72,80,90]}],"steps":[{"say":"<b>You have watched this exact race before.</b> Lesson 0.3 ran these twelve numbers on your first day and promised Chapter 6 would explain why the sorted row was allowed to skip. This is that explanation, arriving on time.","lanes":[{"look":[0],"dead":[],"count":1},{"look":[5],"range":[0,11],"count":1}]},{"say":"One look in, and the sorted row has already deleted six boxes. The unsorted row has deleted one.","lanes":[{"look":[1],"dead":[0],"count":2},{"look":[8],"range":[6,11],"dead":[0,1,2,3,4,5],"count":2}]},{"say":"Two boxes left below. Nine still open above.","lanes":[{"look":[2],"dead":[0,1],"count":3},{"look":[6],"range":[6,7],"dead":[0,1,2,3,4,5,8,9,10,11],"count":3}]},{"say":"<b>The sorted row is finished.</b> Three looks. The unsorted row is on its fourth box out of twelve.","lanes":[{"look":[3],"dead":[0,1,2],"count":4},{"found":[6],"range":[6,7],"dead":[0,1,2,3,4,5,8,9,10,11],"count":3}]},{"say":"It keeps going, because it has no reason to stop.","lanes":[{"look":[4],"dead":[0,1,2,3],"count":5},{"found":[6],"range":[6,7],"dead":[0,1,2,3,4,5,8,9,10,11],"count":3}]},{"say":"Still going.","lanes":[{"look":[5],"dead":[0,1,2,3,4],"count":6},{"found":[6],"range":[6,7],"dead":[0,1,2,3,4,5,8,9,10,11],"count":3}]},{"say":"Still going. Every box costs the same and buys the same: one box.","lanes":[{"look":[6],"dead":[0,1,2,3,4,5],"count":7},{"found":[6],"range":[6,7],"dead":[0,1,2,3,4,5,8,9,10,11],"count":3}]},{"say":"Almost.","lanes":[{"look":[7],"dead":[0,1,2,3,4,5,6],"count":8},{"found":[6],"range":[6,7],"dead":[0,1,2,3,4,5,8,9,10,11],"count":3}]},{"say":"<b>Nine against three</b>, the same numbers Lesson 0.3 showed you and could not yet justify. On twelve items that is a shrug. Act 8 shows what the same gap does on a million.","lanes":[{"found":[8],"dead":[0,1,2,3,4,5,6,7],"count":9},{"found":[6],"range":[6,7],"dead":[0,1,2,3,4,5,8,9,10,11],"count":3}]}]},{"part":"Part 2 · The methods","tab":"Jump search","title":"Act 5 · Jump search, when jumping is expensive","type":"array-scan","speed":1500,"big":true,"data":[4,9,13,18,25,31,38,44,52,57,63,70,77,82,88,95],"target":57,"countLabel":" looks","legend":[["checking now","look"],["ruled out","dead"],["the block that must hold it","range"],["found it","found"]],"steps":[{"look":[3],"ptr":{"i":3},"count":1,"say":"Binary search jumps anywhere it likes. Some collections make a long jump costly, so instead you hop in fixed blocks of four. Land on 18."},{"look":[7],"dead":[0,1,2,3],"ptr":{"i":7},"count":2,"say":"18 is below 57, so the whole first block is gone. Hop another four. 44, still below."},{"look":[11],"dead":[0,1,2,3,4,5,6,7],"ptr":{"i":11},"count":3,"say":"70. <b>Overshot.</b> That is the useful signal: 57 has to be inside the block we just flew over."},{"range":[8,11],"look":[8],"dead":[0,1,2,3,4,5,6,7],"ptr":{"i":8},"count":4,"say":"So walk back into that block, one box at a time. 52, no."},{"range":[8,11],"found":[9],"dead":[0,1,2,3,4,5,6,7],"ptr":{"i":9},"count":5,"say":"<b>57, in five looks.</b> Worse than binary, far better than linear. It exists because on some structures a big jump costs more than a small step."}]},{"part":"Part 2 · The methods","tab":"Search a shape","title":"Act 6 · The same halving, kept as a permanent shape","type":"tree-walk","speed":1600,"unit":78,"legend":[["checking now","look"],["ruled out branch","dead"],["found it","found"]],"nodes":[{"id":"50","label":"50","x":3,"d":0},{"id":"25","label":"25","x":1,"d":1},{"id":"75","label":"75","x":5,"d":1},{"id":"12","label":"12","x":0,"d":2},{"id":"37","label":"37","x":2,"d":2},{"id":"62","label":"62","x":4,"d":2},{"id":"88","label":"88","x":6,"d":2}],"edges":[{"from":"50","to":"25"},{"from":"50","to":"75"},{"from":"25","to":"12"},{"from":"25","to":"37"},{"from":"75","to":"62"},{"from":"75","to":"88"}],"steps":[{"look":["50"],"say":"Sorting once is fine. Re-sorting after every single change is not. So keep the order as a <b>shape</b> instead. Looking for 37. Start at the top."},{"look":["25"],"dead":["75","62","88"],"say":"37 is smaller than 50, so go left. The entire right branch is now impossible, and you never touched it."},{"found":["37"],"dead":["75","62","88","12"],"say":"37 is bigger than 25, go right. <b>Found, in three looks.</b> Same halving as Act 3, except this one survives inserts and deletes."}]},{"part":"Part 2 · The methods","tab":"Search by meaning","title":"Act 7 · When the words do not match but the meaning does","type":"vector","speed":1800,"width":620,"height":340,"unit":1,"query":{"x":300,"y":168,"label":"how do I stop being charged"},"legend":[["close in meaning","seen"],["sent to the model","found"],["too far","idle"]],"points":[{"x":238,"y":92,"label":"cancel my subscription"},{"x":392,"y":214,"label":"end my membership"},{"x":186,"y":232,"label":"refund policy"},{"x":78,"y":52,"label":"reset password"},{"x":104,"y":300,"label":"change my email"},{"x":516,"y":62,"label":"shipping times"},{"x":548,"y":292,"label":"gift cards"},{"x":492,"y":168,"label":"download invoice"}],"steps":[{"radius":0,"say":"Every method so far needed an <b>exact</b> match. This one does not. Each sentence becomes a point, placed by meaning rather than spelling."},{"radius":100,"seen":[0],"say":"Your question becomes a point too. Grow a circle around it. <b>cancel my subscription</b> shares not one word with your question, and it is the nearest thing on the board."},{"radius":135,"seen":[0,1,2],"say":"Widen slightly. Three neighbours. Reset password and shipping times are ordinary English too, and they stay far away, because distance here is meaning."},{"radius":135,"found":[0,1,2],"say":"<b>Those three get read. The other five are never opened.</b> That is retrieval: not reading everything, just standing in the right neighbourhood."},{"radius":135,"found":[0,1,2],"say":"And it is <b>approximate on purpose.</b> Checking every point exactly would be Act 2 over millions of points. It buys the same right Act 3 bought, the right to never open most of the pile, and it pays for that right with a sliver of accuracy, which binary search never had to give up."}]},{"part":"Part 2 · The methods","tab":"What 12 items hid","title":"Act 8 · Why twelve items lied to you","type":"curve","speed":1900,"width":640,"height":300,"n":40,"xlabel":"how many things you are searching","ylabel":"looks it takes","series":[{"label":"linear scan","fn":"n","color":"bad"},{"label":"binary search","fn":"logn","color":"green"},{"label":"hash lookup","fn":"1","color":"gold"}],"steps":[{"pct":8,"show":[0,1],"badge":"12 items","say":"Here is why every act so far was slightly dishonest. At twelve items the two lines almost touch. <b>This is exactly what testing looks like.</b>"},{"pct":34,"show":[0,1],"badge":"1,000 items","say":"A thousand rows. Linear is at a thousand looks. Binary is at ten. The page still feels fine, so nobody investigates."},{"pct":100,"show":[0,1],"badge":"1,000,000 items","say":"A million rows. Linear: a million looks. Binary: twenty. <b>The red line left the chart, the green line barely moved.</b>"},{"pct":100,"show":[0,1,2],"badge":"1,000,000 items","say":"And the hash lookup never lifted off the floor. One look, at twelve items and at twelve million. Act 14 shows what it costs you to have that."}]},{"part":"Part 3 · The same rules, in things you used today","tab":"git bisect","title":"Act 9 · Binary search you have already used: finding the commit that broke it","type":"array-scan","speed":1500,"big":true,"data":["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12"],"labels":["ok","","","","","","","","","","","broken"],"countLabel":" builds tested","legend":[["testing this build","look"],["ruled out","dead"],["still suspect","range"],["the first broken one","found"]],"steps":[{"range":[0,11],"look":[5],"ptr":{"lo":0,"mid":5,"hi":11},"count":1,"say":"Twelve commits. The oldest works, the newest is broken, and somewhere between them somebody broke it. Testing all twelve is Act 2. Instead, test the <b>middle</b> one."},{"range":[6,11],"look":[8],"dead":[0,1,2,3,4,5],"ptr":{"lo":6,"mid":8,"hi":11},"count":2,"say":"Commit 6 builds fine. So the break is not before it, and <b>six commits are eliminated by one test.</b>"},{"range":[6,8],"look":[7],"dead":[0,1,2,3,4,5,9,10,11],"ptr":{"lo":6,"mid":7,"hi":8},"count":3,"say":"Commit 9 is broken, so the culprit is at or before it. <b>Three suspects left</b>, and the middle of three is commit 8."},{"range":[6,7],"look":[6],"dead":[0,1,2,3,4,5,8,9,10,11],"ptr":{"lo":6,"mid":6,"hi":7},"count":4,"say":"Commit 8 is broken too, so it is commit 7 or commit 8. One test left to separate them."},{"found":[7],"dead":[0,1,2,3,4,5,6,8,9,10,11],"count":4,"say":"Commit 7 builds fine, so <b>commit 8 is the one that broke it. Four builds tested instead of ten.</b> This is literally what git bisect does, and it is Act 3 wearing different clothes."}],"pointerLabels":{"lo":"last good","mid":"testing","hi":"first bad"}},{"part":"Part 3 · The same rules, in things you used today","tab":"The database index","title":"Act 10 · The support tool that got slow without anybody changing the code","type":"reveal","speed":1700,"viz":{"maxChars":17,"gy":48,"nodes":[{"id":"ag","label":"Agent types ticket 88214","col":0,"row":0,"kind":"gold"},{"id":"scan","label":"Open all 400,000 rows, one by one","col":2,"row":0,"kind":"bad"},{"id":"slow","label":"4 seconds, and rising every month","col":4,"row":0,"kind":"bad"},{"id":"idx","label":"Index: 3 jumps to the right page","col":2,"row":1,"kind":"accent"},{"id":"fast","label":"9 milliseconds, and it stays there","col":4,"row":1,"kind":"accent"}],"edges":[{"from":"ag","to":"scan"},{"from":"scan","to":"slow"},{"from":"ag","to":"idx","label":"same request","style":"green"},{"from":"idx","to":"fast","style":"green"}]},"steps":[{"show":["ag"],"look":["ag"],"say":"A real complaint. Same request every time, and it used to be instant. Nothing in the code changed, which is the clue, not the mystery."},{"show":["ag","scan"],"look":["scan"],"say":"The database was doing Act 2 the whole time. It opens every row until it finds the ticket."},{"show":["ag","scan","slow"],"look":["slow"],"say":"Last year that was 40,000 rows and nobody noticed. Now it is 400,000, and Act 8 just told you what that curve does next."},{"show":["ag","scan","slow","idx"],"found":["idx"],"say":"An index is Act 6 with much fatter nodes, kept on disk. Each page holds hundreds of keys instead of two, so the depth is three or four instead of twenty. <b>Lesson 10.5 builds it.</b>"},{"show":["ag","scan","slow","idx","fast"],"found":["idx","fast"],"say":"<b>Four seconds becomes a few milliseconds, and stays there at four million tickets.</b> Nobody wrote a faster algorithm. Somebody finally paid for order."}]},{"part":"Part 3 · The same rules, in things you used today","tab":"Autocomplete","title":"Act 11 · The suggestions that appear before you finish typing","type":"tree-walk","speed":1500,"unit":78,"legend":[["you just typed this","look"],["no longer possible","dead"],["a suggestion","found"]],"nodes":[{"id":"root","label":"·","x":3,"d":0},{"id":"c","label":"c","x":2,"d":1},{"id":"b","label":"b","x":5,"d":1},{"id":"a","label":"a","x":1,"d":2},{"id":"o","label":"o","x":3,"d":2},{"id":"u","label":"u","x":5,"d":2},{"id":"r","label":"r","x":0,"d":3},{"id":"t","label":"t","x":2,"d":3},{"id":"d","label":"d","x":4,"d":3},{"id":"card","label":"d","x":0,"d":4},{"id":"care","label":"e","x":1,"d":4}],"edges":[{"from":"root","to":"c"},{"from":"root","to":"b"},{"from":"c","to":"a"},{"from":"c","to":"o"},{"from":"b","to":"u"},{"from":"a","to":"r"},{"from":"a","to":"t"},{"from":"o","to":"d"},{"from":"r","to":"card"},{"from":"r","to":"care"}],"steps":[{"look":["root"],"say":"Autocomplete does not search a list of words. Every word hangs off one tree, <b>one letter per level</b>. Act 6 kept order as a shape; this keeps spelling as a shape. You never compare, you just follow the letter."},{"look":["c"],"dead":["b","u"],"say":"You type c. One branch survives. Every word starting with any other letter is gone, and none of them were ever compared."},{"look":["a"],"dead":["b","u","o","d"],"say":"You type a. Gone again. Two keystrokes have already deleted most of the dictionary."},{"look":["r"],"dead":["b","u","o","d","t"],"say":"You type r. Everything still hanging below this point is now, by definition, a valid suggestion."},{"found":["r","card","care"],"dead":["b","u","o","d","t"],"say":"<b>car, card, care.</b> The list did not need searching, because the shape of the tree already was the answer, and the cost was how much you typed, not how big the dictionary is."}]},{"part":"Part 3 · The same rules, in things you used today","tab":"A RAG chatbot","title":"Act 12 · What actually happens when you ask an AI about your own documents","type":"reveal","speed":1800,"viz":{"maxChars":15,"gy":46,"nodes":[{"id":"q","label":"Your question","col":0,"row":1,"kind":"gold"},{"id":"emb","label":"Turn it into a point","col":1,"row":1,"kind":"accent"},{"id":"docs","label":"Your documents, already turned into points","col":2,"row":0,"kind":"muted","shape":"cyl"},{"id":"idx","label":"Vector index: find the nearest neighbourhood","col":2,"row":1,"kind":"dark"},{"id":"top","label":"The 3 closest chunks","col":3,"row":1,"kind":"accent"},{"id":"llm","label":"The model reads only those 3","col":4,"row":1,"kind":"accent"},{"id":"ans","label":"An answer, with its source","col":5,"row":1,"kind":"gold"}],"edges":[{"from":"q","to":"emb"},{"from":"emb","to":"idx"},{"from":"docs","to":"idx","label":"paid for once","style":"green"},{"from":"idx","to":"top","style":"green"},{"from":"top","to":"llm","style":"green"},{"from":"llm","to":"ans","style":"gold"}]},"steps":[{"show":["q"],"look":["q"],"say":"You ask an assistant something about your own files. It cannot read all of them for every question, that would be Act 2 across gigabytes."},{"show":["q","emb"],"look":["emb"],"say":"So your question becomes a point, exactly like Act 7."},{"show":["q","emb","docs"],"look":["docs"],"say":"Your documents were turned into points earlier, once, in advance. <b>This is the labelled cupboard, and somebody paid for it before you asked.</b>"},{"show":["q","emb","docs","idx"],"look":["idx"],"say":"The vector index is the halving from Act 3, done in many dimensions. It does not compare against every chunk, it walks toward the right neighbourhood."},{"show":["q","emb","docs","idx","top"],"found":["top"],"say":"Three chunks come back. Not because they contain your words, but because they sit near your meaning."},{"show":["q","emb","docs","idx","top","llm"],"found":["top","llm"],"say":"The model reads those three and nothing else. This is why the answer is fast, and why it can cite a source."},{"show":["q","emb","docs","idx","top","llm","ans"],"found":["ans"],"say":"<b>Every box in this row is one of the acts you already watched.</b> Nothing in a RAG system is new. It is search, with the cupboard labelled by meaning."}]},{"part":"Part 3 · The same rules, in things you used today","tab":"When you pick wrong","title":"Act 13 · The same clever method, on the wrong data","type":"array-scan","speed":1600,"big":true,"data":[58,13,72,29,6,90,34,17,41,25,80,49],"target":41,"countLabel":" looks","legend":[["checking now","look"],["ruled out","dead"],["still possible","range"],["it was here all along","found"]],"steps":[{"range":[0,11],"look":[5],"ptr":{"lo":0,"mid":5,"hi":11},"count":1,"say":"<b>Act 3 again, run on the unsorted row.</b> Binary search has no way to know. Middle box holds 90."},{"range":[0,4],"look":[2],"dead":[5,6,7,8,9,10,11],"ptr":{"lo":0,"mid":2,"hi":4},"count":2,"say":"90 is bigger than 41, so it throws away the entire right half. <b>It just deleted the answer</b>, and it feels perfectly confident."},{"range":[0,1],"look":[0],"dead":[2,3,4,5,6,7,8,9,10,11],"ptr":{"lo":0,"mid":0,"hi":1},"count":3,"say":"72 is bigger too. Throw away more. Two boxes left."},{"range":[0,0],"dead":[1,2,3,4,5,6,7,8,9,10,11],"look":[0],"ptr":{"lo":0,"mid":0,"hi":0},"count":3,"say":"58 is bigger. Nothing remains. It reports <b>not found</b>, in three confident looks."},{"found":[8],"dead":[0,1,2,3,4,5,6,7,9,10,11],"count":3,"say":"<b>And 41 was sitting at box 8 the whole time.</b> This is the real danger. A fast wrong answer does not look like a bug, it looks like a working feature. That is why the question in Act 1 comes before the algorithm."}]},{"part":"Part 4 · The map","tab":"The whole map","title":"Act 14 · The entire chapter, on one page","type":"reveal","speed":1700,"viz":{"maxChars":15,"gy":50,"nodes":[{"id":"start","label":"Find one thing","col":2,"row":0,"kind":"dark"},{"id":"q1","label":"Matching exact values, or meaning?","col":2,"row":1,"kind":"gold","shape":"diamond"},{"id":"hash","label":"Hash lookup. One step","col":0,"row":2,"kind":"accent"},{"id":"q2","label":"Is it kept in order?","col":2,"row":2,"kind":"gold","shape":"diamond"},{"id":"vec","label":"Vector search over meaning","col":5,"row":2,"kind":"gold"},{"id":"lin","label":"Linear scan, and a chain lands here too","col":1,"row":3,"kind":"muted"},{"id":"q3","label":"Can you jump to any position?","col":3,"row":3,"kind":"gold","shape":"diamond"},{"id":"walk","label":"Walk a tree","col":2,"row":4,"kind":"accent"},{"id":"bin","label":"Binary search or an index","col":4,"row":4,"kind":"accent"}],"edges":[{"from":"start","to":"q1"},{"from":"q1","to":"hash","label":"exact, spare memory","style":"green"},{"from":"q1","to":"q2","label":"exact"},{"from":"q1","to":"vec","label":"meaning","style":"gold"},{"from":"q2","to":"lin","label":"no"},{"from":"q2","to":"q3","label":"yes","style":"green"},{"from":"q3","to":"walk","label":"no"},{"from":"q3","to":"bin","label":"yes","style":"green"}]},"steps":[{"show":["start"],"look":["start"],"say":"Fourteen acts collapse into three questions. Here they are."},{"show":["start","q1"],"look":["q1"],"say":"<b>Question one.</b> Are you matching exact values, or meaning?"},{"show":["start","q1","vec"],"found":["vec"],"say":"Meaning goes right and leaves this whole family behind. Vector search, Acts 7 and 12."},{"show":["start","q1","vec","hash"],"found":["hash"],"say":"Exact, you can spend memory, and you only ever ask <b>where is this precise key</b>? Then skip ordering entirely. Hash lookup, one step, forever, as Act 8 showed."},{"show":["start","q1","vec","hash","q2"],"look":["q2"],"say":"<b>Question two.</b> Everything else lands here. Is the collection kept in order?"},{"show":["start","q1","vec","hash","q2","lin"],"found":["lin"],"say":"No. Then linear scan, Act 2. Not a failure, the only legal move. Act 13 is what happens when you ignore this answer."},{"show":["start","q1","vec","hash","q2","lin","q3"],"look":["q3"],"say":"<b>Question three.</b> Order exists. Can you jump straight to any position, or must you travel?"},{"show":["start","q1","vec","hash","q2","lin","q3","walk"],"found":["walk"],"say":"Must travel. Keep the order as a shape and walk it. Acts 6 and 11, and every database index in Act 10."},{"show":["start","q1","vec","hash","q2","lin","q3","walk","bin"],"found":["bin"],"say":"Can jump. Binary search, Acts 3 and 9. Every git bisect you have ever run is this box."},{"show":["start","q1","vec","hash","q2","lin","q3","walk","bin"],"say":"<b>Three questions. Five destinations.</b> You did not memorise five algorithms. You learned which two facts about your data pick one for you."}]}]}'></div>

<div class="wrap" style="padding-top:34px;">
  <h2><span class="ix gold">✓</span> What You Just Watched</h2>

  <div class="tbl-wrap"><table>
    <tr><th>The method</th><th>What it needed first</th><th>Looks, as the acts ran them</th><th>Where you have already used it</th></tr>
    <tr><td><strong>Linear scan</strong></td><td>Nothing at all</td><td>9, on 12</td><td>Ctrl and F, and every table without an index</td></tr>
    <tr><td><strong>Binary search</strong></td><td>Sorted, and instant jumps</td><td>3, on 12</td><td>git bisect, and a dictionary</td></tr>
    <tr><td><strong>Jump search</strong></td><td>Sorted, but jumps are costly</td><td>5, on the 16 in Act 5</td><td>Reading a shelf by its section labels</td></tr>
    <tr><td><strong>Tree search</strong></td><td>Order kept as a shape, maintained on every write</td><td>3, on the 7 in Act 6</td><td>Database indexes, folder trees</td></tr>
    <tr><td><strong>Trie or prefix search</strong></td><td>Words stored one letter per level</td><td>as many letters as you type</td><td>Autocomplete, search suggestions</td></tr>
    <tr><td><strong>Vector search</strong></td><td>Meaning turned into coordinates, paid for in advance</td><td>a neighbourhood, not a row</td><td>Any AI assistant answering from your documents</td></tr>
    <tr><td><strong>Hash lookup</strong></td><td>Spare memory, exact keys only</td><td>1</td><td>Checking whether an email is already registered</td></tr>
  </table>
  <div class="tbl-cap">Read the second column down the page. Every number in the third column was bought by something in the second one. Nothing here is free, and the last column is where you have been paying without noticing.</div></div>

  <div class="callout accent">
    <div class="ch">The line to carry out of this chapter</div>
    <p>You never choose a search algorithm. You choose <strong>how much order you are willing to maintain</strong>, and the algorithm is whatever that choice leaves standing.</p>
  </div>

  <div class="callout warn">
    <div class="ch">And the line from Act 13</div>
    <p>A fast wrong answer does not look like a bug, it looks like a working feature. Binary search on unsorted data returns <em class="k">not found</em> in three confident looks while the answer sits untouched. This is why the question comes before the algorithm, every single time.</p>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">In Act 4, the sorted row finished in three looks and the unsorted row took nine. What actually caused the gap?</div>
    <div class="opt" data-i="0">The sorted row compared numbers faster</div>
    <div class="opt" data-i="1">Each look in the sorted row could delete many boxes at once</div>
    <div class="opt" data-i="2">The sorted row started closer to the answer by luck</div>
    <div class="qexp">Both rows did identical work per comparison. The difference is what a comparison bought: one box for the unsorted row, half the remaining pile for the sorted one. Speed here is the right to discard.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">In Act 10, the support tool got slow although nobody changed the code. Why is that detail the clue rather than the mystery?</div>
    <div class="opt" data-i="0">It proves the servers were downgraded</div>
    <div class="opt" data-i="1">It means a new feature must have introduced a bug</div>
    <div class="opt" data-i="2">The code was always scanning every row, and only the number of rows changed</div>
    <div class="qexp">Unchanged code with growing data is the signature of the red line in Act 8. The scan was there on day one; it just was not expensive yet. Nobody wrote a faster algorithm to fix it, they finally paid for order.</div>
  </div>

  <div class="quiz" data-correct="0">
    <div class="q">In Act 12, why does a RAG system turn your documents into points before you ever ask a question?</div>
    <div class="opt" data-i="0">Because that is the order being paid for in advance, so the question only has to visit a neighbourhood</div>
    <div class="opt" data-i="1">Because models cannot read plain text directly</div>
    <div class="opt" data-i="2">Because it compresses the documents to save storage</div>
    <div class="qexp">It is the labelled cupboard from Lesson 6.1. Embedding every document up front is the cost paid once, so that every later question skips the linear scan across gigabytes and lands near the answer instead.</div>
  </div>

  <div class="callout good">
    <div class="ch">Chapter 6 complete</div>
    <p>Search is the price you pay for order you did not keep. You have the three questions that pick the method for you, you have watched all seven methods run, and you have seen each of them inside a product you use. Next chapter: the thing that buys the order in the first place.</p>
  </div>
__NAV__
</div>`
