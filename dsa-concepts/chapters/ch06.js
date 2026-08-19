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
