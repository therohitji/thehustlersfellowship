/* ===== Chapter 05 - Stacks and Queues: Who Gets Served First - DSA Concepts (2026) =====
   Through line: most systems are not about storing things, they are about deciding who gets
   served next, and that rule is the structure.
   Ten blocks per concept lesson, then the whiteboard. See CONSISTENCY.md.
   RULES: no em-dashes; no backticks in content; no dollar-brace; no apostrophes inside
   a data-viz, data-anim or data-reel payload. */

"5.1": `<div class="wrap">
  <div class="les-kicker">Chapter 5 · Lesson 5.1</div>
  <h1 class="les-title">Stack: Last In, First Out, Like a Pile of Plates</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">11 visuals</span>
  </div>

  <p class="motto">Nobody picked last in first out. Work that contains work leaves no other order standing, and the oldest thing in the pile pays for that.</p>

  <p class="lead">Chapter 4 ended with handles: a head you get free, a tail you buy. This chapter adds no structure at all, only a rule about which handle you are allowed to touch, and the rule turns out to be the structure. By the end you can price a stack in two numbers and say why its failure is a stop rather than a slowdown.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">The blue plate is at the bottom, and dinner cannot start.</div>
  <p>There is a pile of plates by the sink. Somebody wants the blue one, and the blue one is at the bottom under six others, because it went in first and everything since landed on top of it. Nobody planned that. It is simply what a pile does.</p>

  <div class="viz" data-viz='{"type":"scene","title":"The pile by the sink, and the pile in your hand","width":820,"height":280,"items":[{"icon":"pile","x":104,"y":130,"kind":"muted","label":"plates, blue one at the bottom"},{"icon":"doc","x":300,"y":124,"kind":"accent","label":"dinner: make the paste first"},{"icon":"doc","x":470,"y":124,"kind":"gold","label":"paste: toast the spices first"},{"icon":"doc","x":640,"y":124,"kind":"gold","label":"spices: grind them"},{"icon":"person","x":770,"y":126,"kind":"box","label":"you, holding all three"}],"arrows":[{"x1":340,"y1":124,"x2":424,"y2":124,"style":"gold","label":"cannot start until"},{"x1":510,"y1":124,"x2":594,"y2":124,"style":"gold","label":"cannot start until"}],"caption":"Two piles, and only one of them is negotiable. You can dig a plate out of the middle if you are willing to make a mess. You cannot finish dinner before the paste is made, at any price, because dinner is holding a half finished answer it cannot produce by itself."}'></div>

  <p>In your other hand are three cards. Dinner said make the paste first. Paste said toast the spices first. Spices said grind them. You are holding all three, and <strong>only one of them is a job you can actually start.</strong> Nobody chose that order either. Both piles chose it for you, and the plates are the easy half.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One rule bolted on, and the three questions it deletes.</div>
  <p>A stack is a chain with one rule bolted on. You may add at the end you are holding, you may take from the same end, and <strong>there is no third move.</strong> The two moves are called push and pop, and that is the whole vocabulary.</p>

  <div class="viz" data-viz='{"type":"arch","title":"One rule bolted on, and the three questions it deletes","maxChars":18,"nodes":[{"id":"c","label":"The one rule: add and take at the end you are holding","col":0,"row":1,"kind":"dark"},{"id":"p","label":"Give me position 400: not offered","col":1,"row":0,"kind":"gold"},{"id":"m","label":"Insert in the middle: not offered","col":1,"row":1,"kind":"gold"},{"id":"o","label":"Serve the oldest first: not offered","col":1,"row":2,"kind":"gold"},{"id":"b","label":"What is left: two moves, both landing on the head","col":2,"row":1,"kind":"accent"}],"edges":[{"from":"c","to":"p","label":"refused"},{"from":"c","to":"m","label":"refused"},{"from":"c","to":"o","label":"refused"},{"from":"c","to":"b","label":"what remains","style":"green"}],"caption":"Read the refused column, because a structure is defined by what it will not answer. Each of those three is a bill Chapter 4 taught you to expect, and a stack can never be sent one, because it can never be asked."}'></div>

  <p>A structure is defined by what it refuses. No position. No middle. No serving the oldest first. Each of those is a bill Chapter 4 taught you to expect, and <strong>a stack never pays any of them, because it can never be asked.</strong></p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Four jobs on, four jobs off, and nothing decides the order.</div>
  <p>The unit is one move: a job going on the pile, or a finished one coming off. Watch which box is gold and say the next frame out loud before you press. The three dashed slots on the right are not decoration. They are the only room this pile will ever have.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Four jobs, and only ever one you may touch","speed":1600,"big":true,"capacity":7,"data":["dinner","paste","spices","grind"],"pointerLabels":{"i":"top"},"countLabel":" deep","legend":[["the one you may work on","look"],["parked, unfinished","range"],["finished and gone","found"],["not started yet","dead"]],"steps":[{"capacity":7,"range":[0,0],"look":[0],"ptr":{"i":0},"count":1,"badge":"push: dinner","say":"Dinner is the only job on the pile and the only one you may touch. The three faded boxes are not waiting their turn, they have not been started."},{"capacity":7,"range":[0,1],"look":[1],"ptr":{"i":1},"count":2,"badge":"push: paste","say":"Dinner asked for the paste, so dinner stops mid sentence and paste lands on top. <b>Dinner did not step aside out of politeness.</b> It is holding a half finished answer it cannot complete without the box above it."},{"capacity":7,"range":[0,2],"look":[2],"ptr":{"i":2},"count":3,"badge":"push: spices","say":"The same cause one level deeper. Paste greys out for exactly the reason dinner did, and the only gold box on the board is still the newest one. Nothing in the picture chose that."},{"capacity":7,"range":[0,3],"look":[3],"ptr":{"i":3},"count":4,"badge":"4 deep, 3 slots left","say":"Grinding needs nothing from anybody, so the pile stops growing here. <b>Count the dashed slots.</b> That is the entire remaining room, and it was fixed before the first frame ran."},{"capacity":7,"range":[0,2],"found":[3],"look":[2],"ptr":{"i":2},"count":3,"badge":"pop: grind is done","say":"Grinding finishes and leaves. Nothing preferred it. It was the only box on the pile holding no unfinished business, and the box that goes back to gold is the one directly underneath it."},{"capacity":7,"range":[0,1],"found":[2,3],"look":[1],"ptr":{"i":1},"count":2,"badge":"pop: spices done","say":"Toasting can only finish now, because the answer it was waiting for arrived from above. <b>The order coming off is not a policy.</b> It is the shape of the waiting, read backwards."},{"capacity":7,"range":[0,0],"found":[1,2,3],"look":[0],"ptr":{"i":0},"count":1,"badge":"pop: paste done","say":"Dinner is gold again for the first time since frame two. It has been sitting at the bottom the whole run, unable to move, waiting on three answers it could not produce itself."},{"capacity":7,"found":[0,1,2,3],"count":0,"badge":"4 pushes, 4 pops","say":"The pile emptied in the exact reverse of the order it filled, and <b>nobody wrote that rule down anywhere.</b> It is what nesting does."}],"caption":"Watch which box is gold. It is always the newest, and never once because somebody preferred it. The gold box is simply the only one on the pile that is not waiting for something above it."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What gets written down when a job stops halfway.</div>

  <div class="viz" data-viz='{"type":"seq","title":"What actually gets parked, and which end reads it","actors":[{"label":"The job you are doing","kind":"gold"},{"label":"The pile of unfinished work","kind":"accent"},{"label":"The job it went to do","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"park where to come back to, plus my half finished values","style":"gold"},{"from":0,"to":2,"label":"go, I cannot continue without you"},{"from":2,"to":1,"label":"park mine too, on top of yours"},{"from":2,"to":0,"label":"finished, here is the answer","style":"green"},{"from":1,"to":0,"label":"take the top entry back, and only the top","style":"green"}],"caption":"Two things get written down and only two: where to come back to, and the values that were half finished. The pile is read from the top and from nowhere else, which is why a crash report prints the newest line first."}'></div>

  <p>Two things get written down when a job stops halfway, and only two: <strong>where to come back to, and the values it had half finished.</strong> That entry goes on the pile, the new job starts, and the old one is unreachable until the new one leaves. This pile has a name you have read in bad circumstances. It is the call stack, and a crash report is that pile printed newest line first.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">One structure, and four places the ceiling comes from.</div>
  <p>There is only one stack. What varies is where it lives and where the ceiling comes from, and that is the only question worth asking about a variant.</p>

  <div class="tbl-wrap"><table>
    <tr><th>The pile you keep</th><th>What it is made of</th><th>The one condition it demands</th></tr>
    <tr><td>A stack on a chain</td><td>nodes, pushed and popped at the head</td><td>Nothing at all. The one arrangement that never asks a chain for anything it charges for</td></tr>
    <tr><td>A stack on a row</td><td>a row, plus one number saying where the top is</td><td>A ceiling you declare, or Lesson 3.3 doubling with its occasional expensive push</td></tr>
    <tr><td>The call stack</td><td>a run of memory reserved before the program started</td><td>The cap is fixed before you run, and it is not a count of items</td></tr>
    <tr><td>Two stacks side by side</td><td>one pile for undo, one for redo</td><td>Lesson 4.5 already priced this: typing after an undo empties the redo pile</td></tr>
  </table>
  <div class="tbl-cap">Read this as four ceilings rather than four structures. The moves are identical in every row, and the only thing that moves is the wall.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which pile did somebody actually build","maxChars":17,"nodes":[{"id":"q","label":"Does anything ever need a position, or the oldest first?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"s","label":"No. A stack, and the rule costs you nothing","col":0,"row":1,"kind":"accent"},{"id":"n","label":"Yes. Not a stack. Somebody needs the middle","col":2,"row":1,"kind":"bad"},{"id":"c","label":"Where does the ceiling come from: declared, doubled, or reserved before the run?","col":0,"row":2,"kind":"box"}],"edges":[{"from":"q","to":"s","label":"neither","style":"green"},{"from":"q","to":"n","label":"either one"},{"from":"s","to":"c","label":"then ask once","style":"green"}],"caption":"There is only one branch here that is a stack. The second question is the only one worth asking afterwards, because it is the only thing that differs between every pile in the table above."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Two writes, one write, zero hops, and a wall.</div>
  <p>Count the moves first. A push is <strong>two writes</strong>: the new entry takes the address the head was holding, and the head takes the new entry. A pop is <strong>one write</strong>. Zero hops both times, at four deep and at forty thousand, and neither sentence mentions depth, which is why the clock does not either.</p>

  <div class="viz" data-viz='{"type":"card","title":"The receipt, and the bill that is not on it","eyebrow":"MOVES AT THE HEAD","badge":"any depth","width":540,"rows":[{"k":"Push, at four deep or forty thousand","v":"2 writes","tone":"good","bar":0.02},{"k":"Pop, at any depth","v":"1 write","tone":"good","bar":0.01},{"k":"Hops to reach the place you write","v":"0","tone":"good","bar":0},{"k":"The same arrival into a row of 100, Lesson 3.2","v":"about 50 moves","tone":"bad","bar":0.5},{"k":"Depth before a reserved run of 8 MB is spent","v":"about 33,000 levels","tone":"bad","bar":1}],"caption":"Every bar on this card is drawn against a maximum of 100 moves, except the last, which is drawn full because it is not a count of moves at all. The first three rows are the whole time bill. The last row is the bill that actually arrives."}'></div>

  <p>So the bill is not time. The pile a running program parks unfinished work on is <strong>a run of memory reserved before your program started</strong>, a few megabytes of it, spent by depth and never by amount. In the Chapter 2 currency, push and pop are <em class="g">O(1)</em>, and the meter that moves is the second one: space is <em class="g">O(d)</em>, a slope and then a wall, exactly the shape Lesson 2.4 drew.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"A ceiling measured in levels, not in bytes","speed":1500,"capacity":12,"data":["1","2","3","4","5","6","7","8","9","10","11","12"],"pointerLabels":{"i":"depth"},"countLabel":" levels deep","legend":[["room still reserved","dead"],["levels spent","range"],["the last slot","look"],["nowhere left to put it","bad"]],"steps":[{"capacity":12,"dead":[0,1,2,3,4,5,6,7,8,9,10,11],"count":0,"badge":"the ceiling is fixed","say":"This is the reserved run, before anything runs. <b>It was measured when the thread started</b> and nothing your program does will widen it."},{"capacity":12,"range":[0,2],"ptr":{"i":2},"count":3,"badge":"3 levels","say":"A flat file opens three levels deep and parks three entries. It could weigh six megabytes and this picture would not change, because nothing about weight reaches the pile."},{"capacity":12,"range":[0,7],"ptr":{"i":7},"count":8,"badge":"8 levels","say":"A file with sections inside sections. Every level down parks one more entry, and the run is being spent by shape rather than by size."},{"capacity":12,"range":[0,10],"look":[11],"ptr":{"i":11},"count":12,"badge":"the last slot","say":"The last reserved slot. Everything still looks perfectly healthy here, and there is no warning anywhere, because <b>nothing is wrong yet.</b>"},{"capacity":12,"bad":[0,1,2,3,4,5,6,7,8,9,10,11],"count":12,"badge":"nowhere to put it","say":"One more level asks for one more entry and there is nowhere to put it. <b>Not slower. Stopped.</b> Every other cost in this course degrades, and this one ends."}],"caption":"Twelve slots standing in for a few megabytes. The lesson is the unit on the counter: this ceiling is spent in levels, and a small file that nests deeply spends it faster than a large flat one ever will."}'></div>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places, and the one thing this lesson does not prove.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Add at one end, take from the same end, and where it is already running","unit":174,"nodes":[{"id":"c","label":"Add at one end, take from the same end","x":2,"y":1,"kind":"dark"},{"id":"s","label":"The call stack in any crash report you have read, newest line first","x":0,"y":0,"kind":"accent"},{"id":"u","label":"Undo and redo, which Lesson 4.5 priced as two piles and never one","x":0,"y":2,"kind":"box"},{"id":"b","label":"Bracket matching in an editor, where the leftover is the error","x":4,"y":0,"kind":"box"},{"id":"f","label":"Walking folders inside folders, one entry parked per level","x":4,"y":2,"kind":"box"},{"id":"h","label":"Browser history: an ordered list with an index, not a pile","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"s","label":"the pile a program keeps","style":"green"},{"from":"c","to":"u","label":"a chain, with this rule on top"},{"from":"c","to":"b","label":"leftover is the error"},{"from":"c","to":"f","label":"depth spends the run"},{"from":"c","to":"h","label":"looks like a pile, is not one"}],"caption":"The gold node is the honest one. Lesson 4.5 already shipped the counterexample: session history is specified as an ordered list with a current index and a signed step count, so it can jump several entries at once, and a pile cannot do that."}'></div>

  <p>Lesson 1.2 and Lesson 4.5 already showed you undo and browser back as chains. This is the half that was missing: <strong>the chain is where the steps live, and the stack rule decides which step you get.</strong> The bracket matcher in your editor is the cleaner example, because it has nowhere to hide. Every opening bracket goes on, every closing one takes a bracket off, and whatever is left at the end of the file is the error it underlines.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Seven sentences, and not one of them says stack.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"It passes every test file and dies on one customer file smaller than the rest"</td><td>A failure that tracks shape, not size</td><td>Depth, not amount. A small file can nest deeper than a large flat one, and depth is what spends the pile</td></tr>
    <tr><td>"It does not slow down, it just disappears, and nothing is in the log"</td><td>A stop where you expected a slowdown</td><td>The reserved run was spent. Every other cost in this course degrades. This one ends</td></tr>
    <tr><td>"Can we let people undo the third thing without undoing the first two?"</td><td>A position asked of something that has only a top</td><td>Not a stack any more. Somebody needs the middle, and the rule is broken</td></tr>
    <tr><td>"Adding to this list got slower once it went past a few thousand"</td><td>A push priced by what is already there</td><td>A push never mentions length, so something is copying or searching on the way in</td></tr>
    <tr><td>"It got much slower after we started keeping the whole history"</td><td>A slowdown tracking what is kept, not how deep you went</td><td>Something is walking the pile, and reading from the bottom is what the rule refuses</td></tr>
    <tr><td>"The oldest job in our queue never gets handled at all"</td><td>An oldest that is served last</td><td>Somebody built a pile and called it a queue. The newest is promised what the oldest pays</td></tr>
    <tr><td>"Why does the crash report list the newest thing first?"</td><td>An order nobody chose</td><td>It is printing the pile, and the top is the only end it may read</td></tr>
  </table>
  <div class="tbl-cap">Rows one, two, four and five ask one question in four costumes: is this priced by depth, or by amount? Rows three, six and seven ask the other one: what did the rule refuse, and who pays for it?</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Eighty kilobytes killed it. Six megabytes did not.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our importer has run every night for two years. Last night it died on an 80 KB file from one customer, and a 6 MB file from the same customer went through fine an hour later. No error in the log, no slow patch, the process was simply not there. We doubled the machine memory twice and it happened again."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Eighty kilobytes killed it, six megabytes did not","lanes":[{"label":"The team"},{"label":"You"},{"label":"The importer"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"80 KB file died, 6 MB file fine, nothing in the log"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: priced by how much, or by how deep?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"The 80 KB file nests 40,000 levels"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Each level parks about 250 bytes"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"40,000 levels asks for about 10 MB"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"The reserved run is 8 MB, fixed at thread start"},{"id":"c3","lane":2,"col":3,"kind":"bad","label":"Spent at about 33,000 levels. It ended there"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Declare a maximum depth and refuse the file"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"c3"},{"from":"c3","to":"b4"}],"caption":"The complaint answers the question in its own second sentence. The file that failed is about seventy five times smaller than the one that passed, which eliminates volume, load and memory pressure at once."}'></div>

  <p><strong>The file was not too big. It was too deep.</strong> Every level of nesting parks one entry on the pile, roughly 250 bytes of where to come back to plus half finished values, so 40,000 levels asks for about 10 MB against a run of 8 MB that was fixed when the thread started. It is spent at about 33,000 levels and the process ends there. The 6 MB file is three levels deep and parks 750 bytes.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked one question: <strong>is this priced by how much is in the file, or by how deeply the file nests?</strong> That also explains the doubled machine, because a run reserved at thread start never asks what the box has. The fix is not a bigger machine. Declare a maximum depth and refuse the file, which turns a disappearance into a message.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one pile and one interruption</div>
    <p>Write down a job you did today that stopped halfway because it needed another job first. Booking a flight that needed a passport number, which needed finding the passport. One card per interruption, each one placed on the last. Now look only at the top card and answer two questions. <strong>Which card can you finish right now, and why is it the only one?</strong> Then: <strong>which card has waited longest, and when does it get served?</strong> The second answer is the rule.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A nightly job swallows a 6 MB file without noticing and stops dead on an 80 KB file from the same customer. What is the honest first guess?</div>
    <div class="opt" data-i="0">The small file is corrupt, because size cannot possibly be the cause</div>
    <div class="opt" data-i="1">The small file nests far deeper, and the pile of unfinished work is spent by depth rather than by amount</div>
    <div class="opt" data-i="2">The machine is short of memory, so a bigger machine will fix it</div>
    <div class="qexp">The pile a program parks unfinished work on is a run reserved before the program started. Every level of nesting parks one entry, and nothing on it is priced by how much data the file holds. Three levels deep parks three entries whatever the file weighs, and a bigger machine does not widen a run that was fixed at thread start.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">Push and pop both land at the head of a chain. Compared with everything else Chapter 4 priced, what did that buy?</div>
    <div class="opt" data-i="0">Nothing, since a chain is slower to read than a row either way</div>
    <div class="opt" data-i="1">Every move a stack may make is the one move a chain hands you free, so no walk is ever paid for, and the price arrives as a ceiling instead</div>
    <div class="opt" data-i="2">It makes reaching position 400 cheap, because the top marker can be moved back by 400</div>
    <div class="qexp">Lesson 4.6 Act 8 priced the head as the one position a chain gives you at zero hops, and the only place a chain wins outright. A stack never asks for anything else. The position 400 answer is the rule breaking: a stack has no position 400, and anybody who needs one does not have a stack.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Nothing here showed a piece of work calling itself, and that was deliberate: Lesson 14.2 is where recursion meets this ceiling on purpose. Before that, the same chain and the same two handles, with one word changed. <strong>Add at one end and take from the other, and a promise to the newest becomes a promise to the oldest.</strong></p>
  </div>
__NAV__
</div>`,

"5.2": `<div class="wrap">
  <div class="les-kicker">Chapter 5 · Lesson 5.2</div>
  <h1 class="les-title">Queue: First In, First Out, Like a Ticket Line</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">11 visuals</span>
  </div>

  <p class="motto">First in first out does not promise you a short wait. It promises only that nobody who arrives after you goes first.</p>

  <p class="lead">Lesson 5.1 handed you a rule nobody chose. This one hands you a rule somebody chose and could un-choose tomorrow, because most systems are not about storing things, they are about deciding who gets served next. By the end you can read any line and say what it promises, what it does not, and which end of it costs money.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Four people, one desk, and nothing on the floor.</div>
  <p>You are third of three at a registration desk. One clerk, one desk. A fourth person walks in and stops behind you. Nobody spoke to them and nobody drew a line on the floor. They looked at three backs and stood behind the last one.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Four people, one desk, and nothing on the floor","width":800,"height":280,"items":[{"icon":"person","x":106,"y":128,"kind":"gold","label":"first, being served"},{"icon":"person","x":250,"y":128,"kind":"accent","label":"second"},{"icon":"person","x":394,"y":128,"kind":"accent","label":"third, which is you"},{"icon":"person","x":538,"y":128,"kind":"muted","label":"fourth, just walked in"},{"icon":"shelf","x":700,"y":124,"kind":"dark","label":"one desk, one clerk"}],"arrows":[{"x1":150,"y1":126,"x2":210,"y2":126,"style":"gold","label":"served"},{"x1":582,"y1":150,"x2":582,"y2":150,"style":"green","label":"joined at the back, unprompted"}],"caption":"Nothing physical holds this line together. The desk does not know who arrived when, the chairs do not know, and the floor is unmarked. It holds because the clerk said they would take people in turn, and every person in it is measuring the clerk against that."}'></div>

  <p>Now watch the clerk. <strong>Nothing in that room stops them waving the fourth person forward.</strong> The line is not held together by geometry. It is held together by a promise, and every person standing in it is measuring the clerk against it.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">Same chain, one rule, and one extra handle.</div>
  <p>A queue is a line with one rule: you join at the back and you are served from the front. That is the whole definition. Lesson 5.1 had the same chain with one handle instead of two: a stack lets you touch one end, a queue makes you touch both. <strong>That single extra handle is the entire difference.</strong></p>

  <div class="viz" data-viz='{"type":"arch","title":"Same chain, one rule, and one extra handle","maxChars":17,"nodes":[{"id":"c","label":"The same chain from Chapter 4. Nothing added","col":0,"row":1,"kind":"dark"},{"id":"r","label":"The rule: join at the back, leave from the front","col":1,"row":1,"kind":"gold"},{"id":"h","label":"The head, free since Lesson 4.1","col":2,"row":0,"kind":"accent"},{"id":"t","label":"A tail handle, bought and repaired","col":2,"row":1,"kind":"accent"},{"id":"m","label":"Reach into the middle: refused","col":2,"row":2,"kind":"bad"}],"edges":[{"from":"c","to":"r","label":"one rule bolted on","style":"green"},{"from":"r","to":"h","label":"serve from here","style":"green"},{"from":"r","to":"t","label":"join here","style":"green"},{"from":"r","to":"m","label":"never"}],"caption":"A stack touched one end and needed one handle. A queue touches two ends and needs two, and the second one is the tail Lesson 4.1 said you have to buy and repair on every change. That is the entire price of the rule."}'></div>

  <p>Now the part people get wrong. First in first out does not promise a short wait. It promises exactly one thing: <strong>nobody who arrives after you goes before you.</strong> Which is why the person with a two minute question sits behind the person with a forty minute one, and the promise is being kept perfectly the whole time.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Twelve tickets, two markers, and nobody moving up.</div>
  <p>Twelve tickets, 41 to 52. Two markers: front, where people leave, and back, where they join. Watch only the markers, because <strong>the boxes never move.</strong></p>

  <div class="board" data-anim='{"type":"array-scan","title":"Twelve tickets, two markers, and nobody moving up","speed":1600,"big":true,"data":[41,42,43,44,45,46,47,48,49,50,51,52],"countLabel":" waiting","pointerLabels":{"lo":"front","hi":"back"},"legend":[["waiting","range"],["served and gone","seen"],["not arrived yet","dead"]],"steps":[{"range":[0,2],"ptr":{"lo":0,"hi":2},"count":3,"badge":"three waiting","say":"Three people, tickets 41 to 43. <b>Two markers: front, where you leave, and back, where you join.</b> Lesson 5.1 had one marker, and one extra handle is the whole difference."},{"seen":[0],"range":[1,2],"ptr":{"lo":1,"hi":2},"count":2,"badge":"41 served","say":"41 is served and the front marker moves. Now look at 42 and 43. <b>They did not move.</b> Lesson 3.2 drew a queue that shuffles everybody forward on every service. One write to a marker is the fix."},{"seen":[0],"range":[1,4],"ptr":{"lo":1,"hi":4},"count":4,"badge":"two joined","say":"Two people join at the back, one write each, and not one waiting person was read or moved. Four waiting, and <b>the cost of joining did not depend on that four.</b>"},{"seen":[0,1,2,3],"range":[4,4],"ptr":{"lo":4,"hi":4},"count":1,"badge":"one left","say":"They landed on the same box and stepped apart so you can read both, which is exactly right: <b>the last person in a line is the front of it and the back of it at once.</b>"},{"seen":[0,1,2,3,4,5,6],"range":[7,9],"ptr":{"lo":7,"hi":9},"count":3,"badge":"still three waiting","say":"Three waiting again, the same count as the first frame, but look where the line is standing now. <b>Nothing ever moved left</b>, because moving left is the shuffle this board refuses to pay for."},{"seen":[0,1,2,3,4,5,6,7,8,9],"range":[10,11],"ptr":{"lo":10,"hi":11},"count":2,"badge":"2 left, 10 wasted","say":"Two people in the line and the row is full. Ten boxes on the left are empty and <b>can never be reached again</b>, because both markers only ever move right. The rule is perfect and the row underneath it just ran out."}],"caption":"Nobody moved up. That is the sentence to keep. Serving somebody is one write to the front marker, and not one waiting person is touched, which is the bill Lesson 3.2 promised this chapter would pay."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">One address read, one written, and the whole line is served.</div>

  <div class="viz" data-viz='{"type":"seq","title":"What calling the next person actually asks for","actors":[{"label":"The front handle","kind":"gold"},{"label":"The node it names","kind":"accent"},{"label":"The one who arrived next","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"who came after you","style":"gold"},{"from":1,"to":0,"label":"one address, and nothing else","style":"green"},{"from":0,"to":2,"label":"you are the front now","style":"green"},{"from":0,"to":1,"label":"anything else to do"},{"from":1,"to":0,"label":"no. Nobody was told, nobody moved"}],"caption":"One address read, one address written, and the whole line is served. The person who left is still sitting in memory, perfectly readable, and nothing in the world names them any more. That is Act 5 of the Chapter 4 whiteboard, arriving with a job."}'></div>

  <p>Then the direction, which is not taste. Take from the front and add at the back and every move lands on a handle you already hold. <strong>Reverse it and every removal must reach the node before the last one</strong>, which the Lesson 4.1 handles table already said a tail handle does not fix.</p>

  <div class="board" data-anim='{"type":"graph-walk","title":"Two writes in, one write out, and the direction that is not free","speed":1600,"directed":true,"unit":132,"legend":[["where you are standing","look"],["already walked","seen"],["the write that lands","found"]],"nodes":[{"id":"a","label":"41","x":0,"y":0},{"id":"b","label":"42","x":1,"y":0},{"id":"c","label":"43","x":2,"y":0},{"id":"d","label":"44","x":3,"y":0},{"id":"e","label":"45","x":4,"y":0}],"edges":[{"from":"a","to":"b"},{"from":"b","to":"c"},{"from":"c","to":"d"},{"from":"d","to":"e"}],"steps":[{"edges":["a-b","b-c","c-d"],"tags":{"a":"front","d":"back"},"say":"Four waiting, and every arrow points from an older person to a newer one. <b>You hold two handles and nothing else.</b> 45 is standing there with nothing pointing at it yet."},{"edges":["a-b","b-c","c-d","d-e"],"found":["e"],"tags":{"d":"one write","e":"two"},"say":"45 joins. You are already holding the back handle, so this is the Lesson 4.2 splice with no walk at all: <b>one address written into 44, one written into the handle. Two writes, and nobody waiting was touched.</b>"},{"edges":["b-c","c-d","d-e"],"seen":["a"],"look":["b"],"tags":{"b":"front"},"say":"Serve the front. <b>One write: the handle now names 42.</b> 41 is still in memory and perfectly readable, and nothing in the world names it. Nobody shuffled and nobody was told."},{"edges":["b-c","c-d","d-e"],"look":["b"],"tags":{"e":"from here"},"say":"Now try it the other way round and serve from the back instead. To unhook 45 <b>you need the node before it, and 44 does not know it is before anybody.</b>"},{"edges":["b-c","c-d","d-e"],"seen":["b","c"],"look":["d"],"tags":{"d":"2 hops"},"say":"So you walk from the front. Two hops here to earn one write. <b>On ten thousand waiting it is 9,998 hops, on every single service.</b> Lesson 4.1 table already said a tail handle does not fix this."}],"caption":"The direction is the whole point. Taking from the front and adding at the back is the one arrangement that never asks the chain for anything the chain charges for, and the last two frames are what the reverse costs."}'></div>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">One promise, and four arrangements that keep it.</div>
  <p>There is no single thing called a queue. There is a promise, and four arrangements that keep it, each demanding something different.</p>

  <div class="tbl-wrap"><table>
    <tr><th>The arrangement</th><th>What it promises</th><th>The one condition it demands</th></tr>
    <tr><td>A chain with a tail handle</td><td>Two writes in, one out, at any length</td><td>You hold both handles and repair the tail on every change</td></tr>
    <tr><td>A row with a front and a back marker</td><td>The same, with no addresses to keep</td><td>Both markers only move right, so the row ends while nearly empty</td></tr>
    <tr><td>A row where everybody shuffles forward</td><td>The front is always the first box</td><td>One move per waiting person, on every single service</td></tr>
    <tr><td>A line where somebody can be called early</td><td>Nothing. This is urgency, not arrival</td><td>The next to serve is no longer at an end, so no handle finds it</td></tr>
  </table>
  <div class="tbl-cap">Row two is the cheapest and the one that fails, which is exactly where Lesson 5.3 opens. Row three is Lesson 3.2 bill charged again on every service. Row four is a different rule wearing this one as a costume.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which queue did somebody actually build","maxChars":17,"nodes":[{"id":"q1","label":"Is the next to serve always the oldest?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"n","label":"No. Not a queue. The next one is not at an end, so no handle can find it. Lesson 5.3","col":0,"row":1,"kind":"bad"},{"id":"q2","label":"Yes. May the line grow without a ceiling?","col":2,"row":1,"kind":"gold","shape":"diamond"},{"id":"c","label":"Yes: a chain with a tail handle. Two writes in, one out, at any length","col":2,"row":2,"kind":"accent"},{"id":"r","label":"No: a fixed row with two markers, and both of them drift right. Lesson 5.3","col":4,"row":2,"kind":"gold"}],"edges":[{"from":"q1","to":"n","label":"no"},{"from":"q1","to":"q2","label":"yes","style":"green"},{"from":"q2","to":"c","label":"no ceiling","style":"green"},{"from":"q2","to":"r","label":"a ceiling"}],"caption":"There is no branch here where somebody jumps the line for free. The left branch abandons the promise and buys a whole new shape to replace it. The right branch keeps the promise and buys a ceiling, and the last frame of the block 3 board is what that ceiling looks like when it arrives."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The same 201 jobs, the same machine, two orders.</div>
  <p>Count the writes first. Joining at the back is two writes, leaving from the front is one, and <strong>neither depends on how long the line is.</strong></p>
  <p>Now count the waiting. Two hundred one second jobs queued behind one three hundred second job. The long one finishes at 300 seconds and the short ones land a second apart after it, so the average finish across all 201 is exactly 400 seconds. Put the long job last and the average is about 102.5 seconds.</p>

  <div class="viz" data-viz='{"type":"card","title":"The same 201 jobs, the same machine, two orders","eyebrow":"AVERAGE FINISH","badge":"500 seconds of work","width":560,"rows":[{"k":"Total work, in either order","v":"500 s","bar":1},{"k":"The last job finishes, in either order","v":"500 s","bar":1},{"k":"Long job first: it finishes at","v":"300 s","bar":0.6},{"k":"Long job first: average finish, all 201","v":"400 s","tone":"bad","bar":0.8},{"k":"Long job last: average finish, all 201","v":"about 102.5 s","tone":"good","bar":0.205}],"caption":"Every bar is drawn against a maximum of 500 seconds. Rows one and two are what did not change, and they are the reason nobody notices. Rows four and five are the same work, the same machine and the same clock, reordered, and the gap between them is nearly four times."}'></div>

  <p><strong>Nothing was made faster.</strong> The rule changed. In the Chapter 2 currency, joining and leaving are both <em class="g">O(1)</em>, and the number that moved is not a cost at all, it is an average wait, which no machine you buy will improve.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places, and the one that pays for this chapter.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Served in the order they arrived, in five places","unit":176,"nodes":[{"id":"c","label":"Served in the order they arrived","x":2,"y":1,"kind":"dark"},{"id":"i","label":"Your taps waiting while the screen is busy, then all landing at once","x":0,"y":0,"kind":"gold"},{"id":"p","label":"A print spooler holding jobs until the printer is free","x":0,"y":2,"kind":"box"},{"id":"m","label":"A message queue between two services, written at one end and read at the other","x":4,"y":0,"kind":"accent"},{"id":"t","label":"Support tickets answered oldest first","x":4,"y":2,"kind":"box"},{"id":"b","label":"Breadth first search, where the frontier is a queue","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"i","label":"nothing lost, everything late","style":"gold"},{"from":"c","to":"p","label":"one printer, many jobs"},{"from":"c","to":"m","label":"arrives faster than served","style":"green"},{"from":"c","to":"t","label":"a promise to customers"},{"from":"c","to":"b","label":"Chapter 13","style":"gold"}],"caption":"The message queue is the one that pays for this whole chapter. It exists because one side produces faster than the other consumes, and the queue does not fix that. It decides who waits, and Lesson 5.4 is what happens when nobody set a limit on the waiting."}'></div>

  <p>You have personally shouted at one of these. An app stops responding, you tap four more times, and then everything happens at once the moment it wakes up. Nothing was lost. Your taps were held in the order they arrived and delivered as soon as the thread was free. <strong>The queue kept its promise exactly, and you did not want it to.</strong></p>

  <div class="callout warn">
    <div class="ch">The claim to refuse</div>
    <p>Nobody has ever sped anything up by adding a queue. A queue holds work that has arrived and cannot be served yet, so <strong>the only thing it changes is who waits and for how long.</strong> If somebody says a queue made the system faster, what actually happened is that it stopped work being thrown away, or it let the slow part run at a steady rate instead of being flooded. Both are real wins, and neither is speed.</p>
  </div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and only two of them are about a structure.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"One big export blocks the whole thing for everybody"</td><td>Many small waits from one large item</td><td>The promise being kept. Nothing behind a long job can start</td></tr>
    <tr><td>"Can we bump this customer to the front?"</td><td>A polite request to break the only rule</td><td>That is urgency, not arrival, and Lesson 5.3 prices it</td></tr>
    <tr><td>"The screen froze and then all my taps happened at once"</td><td>Nothing lost, everything late, all in order</td><td>An input queue keeping its promise while nobody wanted it to</td></tr>
    <tr><td>"Serving one person got slower as the line got longer"</td><td>A per-service cost that grows with the number waiting</td><td>Somebody shuffles the row on every service. Lesson 3.2, charged per customer</td></tr>
    <tr><td>"It runs out of room while the queue is nearly empty"</td><td>A refusal that does not match the amount held</td><td>Two markers walking rightwards along a fixed row. Lesson 5.3</td></tr>
    <tr><td>"Removing the newest costs as much as the whole list"</td><td>One end free, the other priced by length</td><td>Reaching the node before the last one, which a tail handle never fixes</td></tr>
  </table>
  <div class="tbl-cap">Only rows four, five and six are about a structure. The other three are about a rule, and no machine you buy will move them.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Same finish time, same total work, two hundred angry people.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our nightly batch still finishes at 9:05, exactly like it always has. Nothing was deployed. But since Tuesday, support has been full of people saying their reports are late, and when we check, every report did run and the batch did finish on time. We cannot find anything that got slower, because nothing did."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Same finish time, same total work, two hundred angry people","lanes":[{"label":"The team"},{"label":"You"},{"label":"The batch"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Still finishes at 9:05, and support is full"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: did anything finish later, or in a different order?"},{"id":"c1","lane":2,"col":1,"kind":"accent","label":"Nothing finishes later. The run ends at the same second"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"So the only thing that moved is the 300 second export"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"Export first: average report finishes at 400 s"},{"id":"c3","lane":2,"col":3,"kind":"box","label":"Export last: average report finishes at about 102.5 s"},{"id":"b3","lane":1,"col":4,"kind":"accent","label":"Give the export its own line, or stop promising arrival order"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"c3"},{"from":"c3","to":"b3"}],"caption":"Nearly four times the average wait, and the clock on the wall says the batch is identical. That is what an ordering fault looks like from the outside, and it is why no dashboard in the room went red."}'></div>

  <p><strong>Nothing got slower. The export moved to the front, and two hundred people are standing behind it.</strong> Export first, a report comes back at 400 seconds on average. Export last, about 102.5 seconds. Either way the final job lands at 500 seconds, which is why the batch ends at the same time and every dashboard is unchanged.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked one question: <strong>did anything finish later, or did something finish in a different order?</strong> The complaint rules out the first in its own second sentence. Once the clock is eliminated, the only thing left that can generate two hundred complaints is position in a line, and that is a decision rather than a fault. Give the export its own line, or serve short work first and be honest that you have stopped promising first in first out.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, four friends and one desk</div>
    <p>Four people, one of you serving, one job written on each card: three of one minute and one of ten. <strong>Round one:</strong> serve in arrival order with the ten minute card first, and write down what each person waited. <strong>Round two:</strong> same cards, ten minute one last, and then name the two things that did not change: the total work, and the moment the last person leaves. <strong>Round three:</strong> tell each person only who arrived after them, nothing else, then try to remove the person at the back without touching anybody ahead of them. That last round is the direction, and it is why the rule points the way it does.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A support desk answers tickets strictly oldest first. Somebody with a two minute question waits three hours. Has the queue broken its promise?</div>
    <div class="opt" data-i="0">Yes. Three hours for a two minute question breaks the rule</div>
    <div class="opt" data-i="1">No. The promise was only that nobody arriving later goes first, and it says nothing about how long anyone waits</div>
    <div class="opt" data-i="2">No, because a queue reduces the total work for everybody</div>
    <div class="qexp">Option two is the belief this lesson exists to kill: a queue never makes anything faster, it decides an order and the total work is untouched. Option zero names a real problem, and it is a problem with the rule rather than a breach of it, which is why the fix is a second line rather than a faster machine.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">Somebody proposes running the queue the other way on a one way chain: join at the front, serve from the back. Ten thousand are waiting. What does one service cost?</div>
    <div class="opt" data-i="0">The same as before, since both of them are ends</div>
    <div class="opt" data-i="1">One write, because a tail handle reaches the last node without walking</div>
    <div class="opt" data-i="2">About 9,998 hops and then one write, because reaching the end was never the problem. Reaching the node before it is</div>
    <div class="qexp">The Lesson 4.1 handles table said it: a tail handle does not make deleting at the end cheap, because you still have to reach the node before it. Take from the front and add at the back, and the queue never asks the chain for anything it charges for.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>The last frame of the block 3 board is a line two people long sitting on a full row, with ten boxes on the left that can never be reached again. <strong>There are exactly three edits you can make to the one rule</strong>, and the first one fixes that wasted row by joining its ends. The third one throws the rule away entirely, because who gets served next is the whole structure, and Lesson 5.3 is where that rule starts bending.</p>
  </div>
__NAV__
</div>`,

"5.3": `<div class="wrap">
  <div class="les-kicker">Chapter 5 · Lesson 5.3</div>
  <h1 class="les-title">Deque, Circular Queue and the Priority Twist</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~14 min</span>
    <span class="pill gold">no code needed</span><span class="pill">11 visuals</span>
  </div>

  <p class="motto">A ring cannot grow, and that is not the limitation you work around. That is the thing you bought.</p>

  <p class="lead">This chapter has added no structure, only a rule about which end you may touch, because deciding who gets served next is the structure. Here that rule gets edited three times. By the end you can look at any serving policy, say whether it can be enforced at an end, and name what it costs when it cannot.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">The button exists because of what the card does when nobody is looking.</div>
  <p>Your dashcam has recorded every day for two years on one small card. It has never filled up, never asked you to delete anything, never shown a warning. You have never thought about it, and that is exactly the point. It keeps <strong>the last hour</strong>, and it does that by writing every new minute over the oldest minute it still holds.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Two years of recording on a card that never filled","width":800,"height":280,"items":[{"icon":"phone","x":112,"y":126,"kind":"dark","label":"the camera, recording all day"},{"icon":"shelf","x":330,"y":124,"kind":"accent","label":"one hour of slots, reused forever"},{"icon":"person","x":548,"y":126,"kind":"gold","label":"you, reaching for the lock button"},{"icon":"doc","x":716,"y":124,"kind":"bad","label":"the minute that proves it"}],"arrows":[{"x1":168,"y1":126,"x2":268,"y2":126,"style":"green","label":"newest minute in"},{"x1":600,"y1":126,"x2":668,"y2":126,"style":"gold","label":"before it is written over"}],"caption":"Nothing here is a warning and nothing here is a bug. The card never fills because the oldest minute is destroyed on a schedule, and the lock button exists because that schedule does not know which minute mattered."}'></div>

  <p>Then somebody clips your wing mirror and drives off. You reach for the lock button, and the reason it exists is the thing you never thought about. The hour is a loop, so <strong>the minute that proves what happened has about fifty nine minutes to live</strong> before the camera writes over it. The rule that protects the newest is the rule that will destroy your evidence, and it is only ever correct while the newest thing is the only thing you will want.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">Three edits to one rule, and only one of them is expensive.</div>
  <p>Chapter 5 has run on one rule: touch one end, or add at one end and take from the other. There are exactly three edits you can make to it. <strong>Open both ends</strong> and you get a deque. <strong>Join the two ends of a fixed row</strong> and you get a ring. <strong>Replace arrival with urgency</strong> and you get something that is not about ends at all.</p>

  <div class="viz" data-viz='{"type":"arch","title":"Three edits to one rule, and where each one is paid","maxChars":18,"nodes":[{"id":"c","label":"The one rule: you may only touch an end","col":0,"row":1,"kind":"dark"},{"id":"d","label":"Open both ends: a deque","col":1,"row":0,"kind":"accent"},{"id":"r","label":"Join the ends of a fixed row: a ring","col":1,"row":1,"kind":"gold"},{"id":"p","label":"Replace arrival with urgency","col":1,"row":2,"kind":"bad"},{"id":"d2","label":"Free. Both ends are still ends","col":2,"row":0,"kind":"accent"},{"id":"r2","label":"Free to run, and you buy a fixed row up front","col":2,"row":1,"kind":"gold"},{"id":"p2","label":"The next to serve is not at an end. No handle finds it","col":2,"row":2,"kind":"bad"}],"edges":[{"from":"c","to":"d","label":"edit one"},{"from":"c","to":"r","label":"edit two"},{"from":"c","to":"p","label":"edit three"},{"from":"d","to":"d2","label":"costs","style":"green"},{"from":"r","to":"r2","label":"costs","style":"green"},{"from":"p","to":"p2","label":"costs"}],"caption":"Every rule you can enforce at an end is free to run. The first rule that needs the middle is the one that costs you a whole new shape, and that is the third edit."}'></div>

  <p>Read the third row carefully, because it is the spine of the lesson. <strong>Every rule you can enforce at an end is free to run.</strong> A deque costs nothing, because both ends are still ends. A ring costs nothing to run either, but you buy a fixed row up front and sign all four of Chapter 3 clauses again. Urgency is the one that breaks: the next thing to serve is no longer at either end, so <strong>no handle can find it</strong>, and every trick in this chapter dies at once.</p>

  <div class="callout warn">
    <div class="ch">Not the same as a circular chain</div>
    <p>Lesson 4.3 shipped circular linked lists, and these are different animals. A circular chain joins the last node to the first and <strong>can still grow</strong>, because every node still holds an address and you can always make another. A ring joins the last slot of a fixed row to the first and <strong>can never grow</strong>. That inability is not a limitation to work around. It is the entire purchase.</p>
  </div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Eight slots, and the drift that ended Lesson 5.2 undone with arithmetic.</div>
  <p>Lesson 5.2 ended badly. The line was two people long, the row was full, and ten slots behind the front stood empty and could never be reached again. Every serve pushed the front further right and nothing ever came back. <strong>That drift is what this board fixes, with arithmetic rather than a new kind of box.</strong></p>
  <p>Each box prints a slot number, because a slot number is the one thing about a slot that never changes. What a slot is holding lives entirely in its colour.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Eight slots, two markers, and a row that never ends","speed":1700,"data":["0","1","2","3","4","5","6","7"],"pointerLabels":{"lo":"read","hi":"write"},"countLabel":" held","legend":[["holding work","found"],["being written now","look"],["free","dead"],["overwritten before anybody read it","bad"]],"steps":[{"look":[0],"dead":[1,2,3,4,5,6,7],"ptr":{"lo":0,"hi":0},"count":0,"badge":"empty: read meets write","say":"Eight slots, nothing in any of them. <b>Read names the oldest thing nobody has taken</b>, and there is nothing, so it names slot 0. Write names the slot the next arrival lands in, which is also slot 0. Both markers sit on one box and step apart so you can read them. Remember this picture."},{"found":[0,1,2],"look":[3],"dead":[4,5,6,7],"ptr":{"lo":0,"hi":3},"count":3,"badge":"3 held","say":"Three arrivals landed in slots 0, 1 and 2. Write advanced three times and now names slot 3. <b>Read never moved, because nothing was taken.</b> One marker moved. Nothing else on the board did."},{"found":[2,3,4],"look":[5],"dead":[0,1,6,7],"ptr":{"lo":2,"hi":5},"count":3,"badge":"2 read, 2 free again","say":"Two things were taken out of slots 0 and 1, so read advanced to slot 2 and those two slots went pale: <b>free again.</b> Two more arrivals landed in 3 and 4. Still three held, and this is the frame Lesson 5.2 could not draw."},{"found":[2,3,4,5,6],"look":[7],"dead":[0,1],"ptr":{"lo":2,"hi":7},"count":5,"badge":"the last slot","say":"Two more arrivals filled 5 and 6, so write now names slot 7, the last box in the row. <b>In Lesson 5.2 this was the end of the world.</b> Nothing has ended here. Watch where write goes next."},{"found":[2,3,4,5,6,7],"look":[0],"dead":[1],"ptr":{"lo":2,"hi":0},"count":6,"badge":"8 means slot 0","say":"The arrival landed in slot 7, so write should now name slot 8. There is no slot 8. <b>Divide by eight and keep the remainder, and 8 leaves 0</b>, so write jumps to the far left. That jump is the entire invention, and it is the Lesson 3.1 sum with a wrap on the end."},{"found":[3,4,5,6,7,0,1],"look":[2],"ptr":{"lo":2,"hi":2},"count":8,"badge":"full: write meets read","say":"Two more arrivals filled 0 and 1, and write has come all the way round to slot 2, which still holds the oldest thing nobody has read. Read names slot 2 as well. <b>Compare this with frame one: the same two markers on the same box, and the opposite meaning.</b>"},{"bad":[2],"found":[3,4,5,6,7,0,1],"ptr":{"lo":3,"hi":3},"count":8,"badge":"or refuse the newest","say":"The arrival landed anyway. Slot 2 held something nobody had read and <b>it is gone, and nobody was told.</b> The other door was to refuse the arrival and keep slot 2. Which door you take is not a performance decision. It is a decision about what the data is for, and that is Lesson 5.4."}],"caption":"The ambiguity in frame six lives in the markers and not in the cells, which is why a real ring keeps a count of what it holds, or leaves one slot permanently empty so that full and empty can never look the same. You pick one on purpose."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">One sum, with a remainder on the end.</div>

  <div class="viz" data-viz='{"type":"seq","title":"What a ring asks for, and what it never asks for","actors":[{"label":"The ring","kind":"gold"},{"label":"The one sum","kind":"accent"},{"label":"The memory manager","kind":"muted"}],"messages":[{"from":0,"to":2,"label":"room for eight slots, once, before anything runs","style":"gold"},{"from":2,"to":0,"label":"one run of boxes, and never asked again","style":"green"},{"from":0,"to":1,"label":"the arrival after slot 7 goes where","style":"gold"},{"from":1,"to":0,"label":"8 divided by 8 leaves 0","style":"green"},{"from":0,"to":1,"label":"and the one after that"},{"from":1,"to":0,"label":"9 divided by 8 leaves 1","style":"green"}],"caption":"Lesson 3.1 gave a row its personality with one sum: start, plus position, times width. A row of eight will happily answer that sum for position eight, and the answer is a box belonging to somebody else. A ring divides by eight first and keeps the remainder, so the only positions it can ever name are the eight it owns."}'></div>

  <p>That is why the row is claimed once and then never grown, never copied and never moved. <strong>A ring never asks the memory manager for anything after the first claim</strong>, which is the whole reason it turns up wherever something is not allowed to stop and wait.</p>

  <div class="callout warn">
    <div class="ch">What the circle in your head is not</div>
    <p>If you are picturing eight boxes joined in a ring, be careful. <strong>Nothing is joined to anything.</strong> The row is a straight run of boxes exactly like Chapter 3, no slot holds an address, and no slot knows what follows it. The only thing that comes back around is a remainder. The circle is the arithmetic, not the memory.</p>
  </div>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Four arrangements, and the one condition each demands.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The edit</th><th>What you get</th><th>The one condition it demands</th></tr>
    <tr><td>Open both ends</td><td>A deque. Join or leave at either end</td><td>Nothing extra. Both ends are still ends, so every move is still one write</td></tr>
    <tr><td>Open both ends, and cap it</td><td>A bounded recent list</td><td>You are willing to abandon the newest at one end while adding at the other</td></tr>
    <tr><td>Join the ends of a fixed row</td><td>A ring. The drift is gone</td><td>The size is decided before anything arrives and can never change</td></tr>
    <tr><td>Replace arrival with urgency</td><td>A priority queue</td><td>The next to serve is not at an end, so no handle finds it. That is a shape, not a rule</td></tr>
  </table>
  <div class="tbl-cap">Rows one, two and three are edits to a rule and cost nothing to run. Row four is not an edit at all, it is a replacement, and it is the only one that has to buy a new structure to keep its promise.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Can the next thing to serve be named by pointing at an end","maxChars":17,"nodes":[{"id":"q1","label":"Can you name the next to serve by pointing at an end?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"q2","label":"Yes. Must the space be decided before anything arrives?","col":0,"row":1,"kind":"gold","shape":"diamond"},{"id":"p","label":"No. Urgency. A shape, and Chapter 11 builds it","col":3,"row":1,"kind":"bad"},{"id":"r","label":"Yes: a ring. Claimed once, never grown, oldest dropped","col":0,"row":2,"kind":"accent"},{"id":"c","label":"No: a chain with two handles, growing as it likes","col":2,"row":2,"kind":"accent"}],"edges":[{"from":"q1","to":"q2","label":"yes","style":"green"},{"from":"q1","to":"p","label":"no"},{"from":"q2","to":"r","label":"fixed","style":"green"},{"from":"q2","to":"c","label":"unbounded","style":"green"}],"caption":"Only one branch here leaves the chapter. Everything on the left is still one rule about ends and still costs one write, and the moment the answer to the first question is no, none of the handles you have been carrying since Lesson 5.1 are any use."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">A million waiting, and the most urgent one has to be found.</div>
  <p>A million are waiting and you must serve the most urgent. Scan the row: a million looks, and a million again for the next one, because nothing you learned was written down. Keep the row sorted instead and the looking is free, but <strong>every arrival now shuffles about five hundred thousand things into place</strong>, which is Lesson 3.2 arriving as a service policy.</p>

  <div class="viz" data-viz='{"type":"card","title":"One question at a million waiting, three answers","eyebrow":"FIND THE MOST URGENT","badge":"1,000,000 waiting","width":560,"rows":[{"k":"Scan the row every time","v":"1,000,000 looks","tone":"bad","bar":1},{"k":"Keep the row sorted: moves per arrival","v":"about 500,000","tone":"bad","bar":0.5},{"k":"The shape Chapter 11 builds","v":"about 20 steps","tone":"good","bar":0.00002}],"caption":"Every bar is drawn against a maximum of one million. The first two rows are everything the ends can do, and both of them are already in this course: one is a plain scan, and the other is the Lesson 3.2 shuffle charged on every single arrival."}'></div>

  <p>Now the other half of the bill, which is not a count at all. Urgency does not just cost you a shape. <strong>It costs somebody their turn</strong>, and the board below is what that looks like when nobody has said out loud that waiting should count for anything.</p>

  <div class="board" data-anim='{"type":"race","title":"The same eight tickets, two serving rules","speed":1600,"legend":[["served","found"],["waiting","look"],["never reached","bad"]],"tracks":[{"label":"Served in arrival order","data":["A","B","C","D","E","F","G","H"],"countLabel":" served"},{"label":"Served most urgent first","data":["A","B","C","D","E","F","G","H"],"countLabel":" min A has waited"}],"steps":[{"badge":"eight arrive","lanes":[{"count":0},{"count":0}],"say":"The same eight tickets arrive at the same moments in both lanes. <b>Ticket A is first, and it is an ordinary question.</b> Nothing about either lane is faster than the other."},{"badge":"the first serve","lanes":[{"found":[0],"look":[1],"count":1},{"found":[1],"look":[0],"count":0}],"say":"Arrival order serves A, because A arrived first. Urgency serves B, because B is on fire. <b>Both rules are working exactly as written.</b>"},{"badge":"more urgent arrive","lanes":[{"found":[0,1],"look":[2],"count":2},{"found":[1,2,3],"look":[0],"count":45}],"say":"Two more urgent tickets arrive. Arrival order has reached C. Urgency has served three, and none of them is A. <b>Watch the second counter, because it is the only thing on the board that is moving for A.</b>"},{"badge":"A is still there","lanes":[{"found":[0,1,2,3],"look":[4],"count":4},{"found":[1,2,3,4,5],"bad":[0],"count":180}],"say":"The urgent ones have not stopped arriving, and they never will. <b>A is not late. A is unreachable</b>, and it will stay unreachable for as long as anything more urgent keeps turning up."}],"caption":"Nothing in the right hand lane is broken, which is what makes this hard to see. Urgency with no memory of waiting cannot move a ticket that never becomes urgent, and the fix is not more people. It is letting time spent waiting count as urgency."}'></div>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places, and all of them for the same reason.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"A fixed set of slots, reused forever, in five places","unit":176,"nodes":[{"id":"c","label":"A fixed set of slots, reused forever","x":2,"y":1,"kind":"dark"},{"id":"a","label":"A sound card, which is never allowed to pause and ask for memory","x":0,"y":0,"kind":"accent"},{"id":"k","label":"The keyboard buffer holding what you typed while something was busy","x":0,"y":2,"kind":"gold"},{"id":"l","label":"A crash log keeping only the last few thousand lines","x":4,"y":0,"kind":"box"},{"id":"d","label":"A dashcam keeping the last hour and nothing before it","x":4,"y":2,"kind":"box"},{"id":"u","label":"A capped undo history, which Lesson 3.5 already called a fixed ring","x":2,"y":3,"kind":"accent"}],"edges":[{"from":"c","to":"a","label":"cannot stop to ask","style":"green"},{"from":"c","to":"k","label":"you have felt this one","style":"gold"},{"from":"c","to":"l","label":"the start is always missing"},{"from":"c","to":"d","label":"the oldest minute goes"},{"from":"c","to":"u","label":"Lesson 3.5 shipped it","style":"green"}],"caption":"Every one of these has the same reason. The thing filling the ring is not allowed to stop and wait for memory, so refusing to grow is cheaper than asking. The keyboard buffer is the one you have felt: type ahead while something is busy and your characters appear when it catches up."}'></div>

  <p>The crash log is the one worth staring at. It keeps the last few thousand lines in a fixed set of slots, which is why <strong>the log is always missing the beginning of the incident</strong>. Nothing is broken. The crash simply outran the ring, and the minutes that would have explained it were written over by the minutes that came after.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Seven sentences, and one question underneath all of them.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"The camera never fills up and never warns"</td><td>Storage with no ceiling and no warning</td><td>Fixed slots reused forever, and the oldest is dropped without asking</td></tr>
    <tr><td>"Crash logs are always missing the start"</td><td>Evidence thinning from the beginning</td><td>A ring of the last few thousand lines, and the crash outran it</td></tr>
    <tr><td>"Memory climbs all afternoon and never comes down"</td><td>Cost tracking uptime, not requests</td><td>An unbounded line assumed to be fixed. The line is the leak</td></tr>
    <tr><td>"Audio stutters when busy, never when idle"</td><td>A fault that arrives with load</td><td>A ring refilled slower than it drains, and its size is the hiccup you survive</td></tr>
    <tr><td>"Open since March, and the average looks fine"</td><td>An average blind to its own victims</td><td>Urgency with no aging, averaged over the served only</td></tr>
    <tr><td>"Can we let people jump the line?"</td><td>Serving from the middle</td><td>Not a rule about ends any more. That is a shape, and Chapter 11 builds it</td></tr>
    <tr><td>"We need both ends, and we drop from either"</td><td>Two ends, both live</td><td>A deque, and free, because both ends are still ends</td></tr>
  </table>
  <div class="tbl-cap">One question sits under all seven: can the thing being asked for be named by pointing at an end? Five of these can. Rows five and six cannot, and both are urgency wearing a different coat.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">A flat average, and 1,200 tickets it cannot see.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our queue is ordered by urgency and it works. We close five hundred tickets a day, about five hundred and twenty come in, and the average wait has been nine minutes and flat for months. But 1,200 tickets have not been touched since March."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"A flat average, and the tickets it cannot see","lanes":[{"label":"The team"},{"label":"You"},{"label":"The queue"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"500 closed a day, average nine minutes, flat for months"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: does waiting move a ticket up the line?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"No. Urgency is set on arrival and never moves again"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Then the average can only cover the ones served"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"20 a day never reached, 60 working days, 1,200 untouched"},{"id":"c3","lane":2,"col":3,"kind":"bad","label":"Under arrival order those 20 would bend the average"},{"id":"b3","lane":1,"col":4,"kind":"accent","label":"Let waiting raise urgency, and hand the deficit to 5.4"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"c3"},{"from":"c3","to":"b3"}],"caption":"The flatness is the fingerprint. Under arrival order a growing backlog drags the average up, because the oldest waits are inside the number. Under urgency with no aging the oldest waits are outside it, so the number can sit still while the backlog grows all year."}'></div>

  <p><strong>The queue is not slow. It is correct, and it has no memory of waiting.</strong> Twenty a day are never reached, and sixty working days of that is 1,200 tickets. The average covers tickets that were served, and the five hundred served each day are the most urgent five hundred, answered within the hour, so a ticket that is never served never enters the number at all.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked one question: <strong>does waiting move a ticket up the line?</strong> No. That single no eliminates staffing, tooling and volume at once, because all three would move the victims around week to week and would bend the average as the backlog grew. The same tickets are stuck and the number has not moved. Add waiting to urgency, so a ticket open a week outranks a fresh ordinary one, and the starvation stops without hiring anybody. The twenty a day is a separate bill, and Lesson 5.4 is where it is paid.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, eight containers and two fingers</div>
    <p>Find eight identical containers: an egg box, a pill box, a row of glasses. Number the slots nought to seven and write nothing else on them, ever. <strong>Round one:</strong> drop a coin in slot after slot, keeping one finger on the slot the next coin goes in. <strong>Round two:</strong> take coins out from behind with your other hand, and watch two slots come free while the front keeps moving. <strong>Round three:</strong> keep dropping and stop taking. When your two fingers meet, stop and answer the only question that matters: is this box full, or is it empty? You cannot tell from the fingers, and that is why a real ring keeps a count.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A team swaps a growing queue for a fixed ring of 4,096 slots and says it saved memory. What did they buy, and what did they sell?</div>
    <div class="opt" data-i="0">A smaller footprint, and nothing sold, since the queue was mostly empty anyway</div>
    <div class="opt" data-i="1">A space that never grows and never asks for memory again, and they sold the right to keep everything past 4,096 waiting</div>
    <div class="opt" data-i="2">Faster reads, because a ring sits together in memory and a queue does not</div>
    <div class="qexp">A ring makes nothing faster. Taking the oldest and adding the newest were already one write each. What changes is that the space is decided before anything arrives and never changes again, so nothing is asked of the memory manager after the first claim. The bill is frame six of the board: lose the oldest, or refuse the newest, and not choosing is choosing the first.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">A priority queue has held a flat nine minute average for months while a set of old tickets has never been touched. What is the honest reading?</div>
    <div class="opt" data-i="0">The queue is too slow and needs more people on it</div>
    <div class="opt" data-i="1">The average is wrong and somebody should recompute it</div>
    <div class="opt" data-i="2">The ordering is doing what it was told, and the average covers only tickets that were served</div>
    <div class="qexp">Nothing is broken, which is what makes it hard to see. Urgency with no aging cannot move a ticket that never becomes urgent, so a ticket at the bottom is not late, it is unreachable. More people raises the number served and leaves exactly the same tickets stuck.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Two of the three edits were free, and the third one bought a shape. Every one of them still assumed somebody decided how big the line may get. <strong>Lesson 5.4 is what happens when nobody did</strong>, and it starts with two outages on one morning that were both called an overload and have nothing whatsoever in common.</p>
  </div>
__NAV__
</div>`
