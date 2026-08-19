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
</div>`
