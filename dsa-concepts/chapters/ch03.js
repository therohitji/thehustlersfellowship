/* ===== Chapter 03 - Arrays: The Row of Boxes - DSA Concepts (2026) =====
   Through line: an array is fast because it is rigid. Every array problem is that
   rigidity showing its bill.
   Ten blocks per concept lesson, then the whiteboard. See CONSISTENCY.md.
   RULES: no em-dashes; no backticks in content; no dollar-brace; no apostrophes inside
   a data-viz, data-anim or data-reel payload. */

"3.1": `<div class="wrap">
  <div class="les-kicker">Chapter 3 · Lesson 3.1</div>
  <h1 class="les-title">The Row of Boxes: Why Position Is Instant</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~12 min</span>
    <span class="pill gold">no code needed</span><span class="pill">11 visuals</span>
  </div>

  <p class="motto">An array is not fast. It is rigid, and instant position is the change it hands back.</p>

  <p class="lead">Chapter 2 gave you two meters. This is the first structure priced with them, and the price is strange. By the end you can look at any row of anything and name the four promises it made before you handed it a single item, then predict which one is about to be billed. An array is fast because it is rigid, and every array problem in this chapter is that rigidity showing its bill.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Three hundred free seats, and the answer is still no.</div>
  <p>You are booking a wedding. Twenty people from one side of the family want to sit together, so you ring the hall and ask for twenty seats in row J. The person at the desk says no. You look at the plan. There are three hundred free seats in that hall.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Three hundred free seats, and the answer is still no","width":770,"height":270,"items":[{"icon":"person","x":98,"y":130,"kind":"gold","label":"you, booking for twenty"},{"icon":"pile","x":340,"y":126,"kind":"muted","label":"three hundred free seats, all over the hall"},{"icon":"shelf","x":668,"y":126,"kind":"accent","label":"one unbroken run of twenty"}],"arrows":[{"x1":150,"y1":130,"x2":268,"y2":128,"style":"gold","label":"what the hall has"},{"x1":420,"y1":128,"x2":588,"y2":128,"style":"green","label":"what you actually asked for"}],"caption":"You did not ask for twenty seats. You asked for twenty in a row, with nobody sitting in between, and those are completely different orders. The hall is not full. It is fragmented."}'></div>

  <p>Read what you actually ordered. Not twenty seats. <strong>Twenty seats side by side, in one row, with nobody sitting in between.</strong> The hall has plenty of seats and almost none of them are next to each other, because every couple and every family of three who booked before you took a bite out of the middle of a row. The hall is not full. It is fragmented, and those are different words for a reason.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">A contract with four clauses, signed whole.</div>
  <p>An array is a run of identical boxes, side by side, claimed all at once, that stays where it is while you hold it. That is not a description, it is a contract, and you sign all four clauses or you get none of them.</p>

  <div class="viz" data-viz='{"type":"arch","title":"Four clauses in, one number out","maxChars":17,"nodes":[{"id":"c","label":"The contract, signed before you hand it anything","col":0,"row":1,"kind":"dark"},{"id":"w","label":"Same width: every box identical","col":1,"row":0,"kind":"gold"},{"id":"s","label":"Side by side: no holes between them","col":1,"row":1,"kind":"gold"},{"id":"a","label":"Claimed in advance: the whole run at once","col":1,"row":2,"kind":"gold"},{"id":"f","label":"Fixed: a run never moves while you hold it","col":1,"row":3,"kind":"gold"},{"id":"o","label":"One number: where the run starts","col":2,"row":1,"kind":"accent"},{"id":"p","label":"And from that one number, any position by arithmetic","col":3,"row":1,"kind":"accent"}],"edges":[{"from":"c","to":"w"},{"from":"c","to":"s"},{"from":"c","to":"a"},{"from":"c","to":"f"},{"from":"s","to":"o","style":"green"},{"from":"o","to":"p","style":"green"}],"caption":"You sign all four or you get none of them. The thing handed back is a single number, and one number is only enough because the four clauses guarantee everything else can be worked out from it."}'></div>

  <p><strong>Same width</strong>, so every box is exactly as wide as every other. <strong>Side by side</strong>, so no holes and nothing belonging to anybody else in between. <strong>Claimed in advance</strong>, so the whole run is granted before the first item arrives. <strong>Fixed</strong>, meaning a run never moves while you hold it. That last one is not a promise that your row never moves: a row that outgrows its run does not stretch, it gets replaced by a longer run somewhere else, which is Lesson 3.3 in one sentence.</p>

  <div class="callout warn">
    <div class="ch">What breaking a clause actually does</div>
    <p>The obvious guess is that the arithmetic stops working. It does not. <strong>Break a clause and the sum runs perfectly and hands you the wrong thing</strong>, which is far worse than a failure, because a failure announces itself. The board below is that happening.</p>
  </div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">One sum, run twice, and only one variable changes.</div>
  <p>Predict each frame before you press. You will get every one right up to frame five, and frame five is the one worth the entrance fee.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"One sum, run twice: once inside the run and once outside it","speed":1700,"big":true,"data":[19,74,31,60,8,45,27,93,52,11,66,38],"labels":["4000","4004","4008","4012","4016","4020","4024","4028","4032","4036","4040","4044"],"countLabel":" look","legend":[["yours, claimed","range"],["being read now","look"],["the answer","found"],["not yours","dead"],["read anyway","bad"]],"steps":[{"range":[0,9],"badge":"the contract covers ten boxes","say":"Twelve real boxes with their real numbers underneath. <b>Ten of them are yours and two are not.</b> The faded pair on the right are not empty, they belong to somebody else."},{"range":[0,9],"look":[6],"ptr":{"i":6},"count":1,"badge":"4000 plus 6 times 4","say":"You built this sum in Lesson 1.1 and nothing here is new. <b>That is the point.</b> The next frames ask what the sum was promised before it was allowed to be this simple."},{"range":[0,9],"found":[6],"ptr":{"i":6},"count":1,"badge":"1 look, 10 boxes","say":"One look. The size of the row was never a term in the sum, so it could not have changed the answer."},{"range":[0,9],"found":[6],"ptr":{"i":6},"count":1,"badge":"1 look, 10 million boxes","say":"The picture is unchanged on purpose. <b>A count can only move if the thing that moved was inside the sum</b>, and the number of boxes never was."},{"range":[0,9],"look":[10],"ptr":{"i":10},"count":1,"badge":"4000 plus 10 times 4 is 4040","say":"Now ask for position ten of a ten box row. <b>The sum does not object.</b> Four thousand plus ten times four is 4040, and there really is a box at 4040."},{"bad":[10],"dead":[0,1,2,3,4,5,6,7,8,9,11],"ptr":{"i":10},"count":1,"badge":"it returned 66","say":"<b>Nothing failed.</b> It returned 66, a completely ordinary looking number belonging to somebody else. Lesson 1.1 showed you this read crashing. That crash was not the row protecting itself."},{"bad":[10],"dead":[0,1,2,3,4,5,6,7,8,9,11],"ptr":{"i":10},"count":1,"badge":"so who pays the guard?","say":"The row is four clauses and a sum, and <b>not one of them mentions an end</b>. So safe languages bolt on a comparison and charge it on every read, including the millions that were never wrong."}],"caption":"Both halves are the same sum, run twice. The only thing that changed is whether the landing box was inside the contract, and the sum has no way to tell the difference."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What is actually said when you ask for a run.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Asking for a run, and being told no while the space is free","actors":[{"label":"Your program","kind":"gold"},{"label":"The memory manager","kind":"accent"},{"label":"The free space","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"room for 10 boxes, in one run","style":"gold"},{"from":1,"to":2,"label":"is there an unbroken run 40 wide"},{"from":2,"to":1,"label":"yes, one starts at 4000","style":"green"},{"from":1,"to":0,"label":"4000","style":"green"},{"from":0,"to":1,"label":"room for 5,000 boxes, in one run","style":"gold"},{"from":1,"to":2,"label":"is there an unbroken run 20,000 wide"},{"from":2,"to":1,"label":"no. The longest left is 12,000 wide"},{"from":1,"to":0,"label":"refused","style":"gold"}],"caption":"The surprising line is the fourth one. Ten boxes were asked for and one number came back, and that single number is the whole array as far as the machine is concerned. The refusal at the end is not about how much is free, it is about how much is free in one piece."}'></div>

  <p>You ask for room for ten boxes and what comes back is not ten of anything. It is <strong>one number: where the run starts.</strong> One number is enough only because clauses one and two guarantee that everything else can be worked out from it. Then watch the second half. The bigger request is refused, and not because memory is full. There is far more than enough free space; there is no longer a single unbroken stretch of the width being asked for.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Not every row is claimed the same way.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The row you get</th><th>What it claims</th><th>The condition it demands</th></tr>
    <tr><td>Size known before it runs</td><td>exactly as many boxes as items</td><td>You must know the count before anything arrives</td></tr>
    <tr><td>Claimed while running</td><td>as many as you asked for at that moment</td><td>The run must exist unbroken right then, or you are refused</td></tr>
    <tr><td>With spare capacity</td><td>more boxes than it holds things</td><td>You hold and pay for the spare from the moment you claim it</td></tr>
    <tr><td>A row of addresses</td><td>one fixed width box per item, items kept elsewhere</td><td>The escape hatch when clause one is impossible. Chapter 4 is built on it</td></tr>
  </table>
  <div class="tbl-cap">Row four is how anything variable-sized gets stored in a row at all, and it is the seam between this chapter and the next one.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which claim are you making","maxChars":18,"nodes":[{"id":"q1","label":"Do you know the count before anything arrives?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"f","label":"Claim exactly that many. Nothing spare, nothing wasted","col":0,"row":1,"kind":"accent"},{"id":"q2","label":"Will it keep growing after the first claim?","col":2,"row":1,"kind":"gold","shape":"diamond"},{"id":"o","label":"Claim once, at the size you need right now","col":1,"row":2,"kind":"accent"},{"id":"g","label":"Claim more than you need and hold the spare","col":3,"row":2,"kind":"gold"}],"edges":[{"from":"q1","to":"f","label":"yes","style":"green"},{"from":"q1","to":"q2","label":"no"},{"from":"q2","to":"o","label":"no"},{"from":"q2","to":"g","label":"yes","style":"gold"}],"caption":"Notice what this tree does not contain. There is no branch that avoids claiming in advance. The only choice on offer is how much and when, which is clause three refusing to be negotiated with."}'></div>

  <div class="board" data-anim='{"type":"array-scan","title":"The four boxes you paid for and never used","speed":1600,"big":true,"data":[19,74,31,60,8,45,27,93,52,11],"capacity":14,"countLabel":" boxes held","legend":[["holding something","found"],["yours, and empty","dead"]],"steps":[{"capacity":14,"found":[0,1,2,3,4,5,6,7,8,9],"count":14,"badge":"10 things, 14 boxes","say":"Ten things in the row, and the counter says fourteen. <b>Look at the empty stretch on the right and ask who is paying for it.</b>"},{"capacity":14,"found":[0,1,2,3,4,5,6,7,8,9],"count":14,"badge":"nothing else may go in there","say":"You are. Those four are dashed because nothing has been put in them, and <b>nothing else in the machine may put anything in them either</b>, because they are inside your run."}],"caption":"Spare capacity is not free room you might use later. It is room you have already claimed, already hold, and are already keeping from everything else."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The time meter is already settled. This block is about the other one.</div>
  <p>The time meter reads <em class="g">O(1)</em>, which you named in Lesson 1.1 and which nothing in this chapter changes. Reaching box 500,000 in a row of a million takes one look, and so does reaching it in a row of a hundred million, because the number of boxes is never a term in the sum.</p>

  <div class="viz" data-viz='{"type":"card","title":"What the contract actually charges","eyebrow":"BOTH METERS","badge":"a million slot row","width":500,"rows":[{"k":"Reach box 500,000 in a row of a million","v":"1 look","tone":"good","bar":0},{"k":"Reach the same box in a row of a hundred million","v":"1 look","tone":"good","bar":0},{"k":"Boxes claimed up front, filled or not","v":"1,000,000","tone":"bad","bar":1},{"k":"Boxes with something in them today","v":"600,000","bar":0.6},{"k":"Boxes held, empty, unavailable to anything else","v":"400,000","tone":"bad","bar":0.4}],"caption":"Every bar is drawn against the same scale of one million boxes. The top two rows are the flat shape from Lesson 2.2 and they never move. The bottom row is a bill that neither of your meters prints, because held-and-empty is not a step and it is not a slowdown."}'></div>

  <p>Now the second meter, and it is where the bill lands. You claimed a million boxes in one unbroken run before anything arrived. Six hundred thousand hold something today. <strong>Four hundred thousand are held, empty, and unavailable to anything else in the machine.</strong> Lesson 2.4 warned you that space has a slope and then a wall. This is a third thing: a cost that neither meter prints, because held-and-empty is not a step and it is not a slowdown.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places the unbroken run is already load bearing.</div>
  <p>The screen you are reading this on is one claimed run of numbers, redrawn in place rather than rebuilt, which is why a frame can be handed over in a single pass. Live audio goes further: buffers are claimed before the sound starts, because being refused halfway through a note is not something you can recover from politely.</p>

  <div class="viz" data-viz='{"type":"kgraph","title":"One unbroken run, and where you already meet it","unit":170,"nodes":[{"id":"c","label":"One unbroken run, claimed in advance","x":2,"y":1,"kind":"dark"},{"id":"s","label":"A screen: one run of pixels, redrawn in place","x":0,"y":0,"kind":"box"},{"id":"a","label":"Live audio: buffers claimed before the sound starts","x":0,"y":2,"kind":"box"},{"id":"r","label":"Reserve capacity: telling a list its length first","x":4,"y":0,"kind":"accent"},{"id":"d","label":"A database page: a fixed run, read whole","x":4,"y":2,"kind":"box"},{"id":"b","label":"Binary search, which needs to land on the middle","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"s","label":"one pass"},{"from":"c","to":"a","label":"never refused mid note"},{"from":"c","to":"r","label":"clause three, offered to you","style":"green"},{"from":"c","to":"d","label":"read in one go"},{"from":"c","to":"b","label":"the loan Chapter 6 cashes","style":"gold"}],"caption":"The gold node is the one to remember. Binary search can throw away half a haystack only because it can land on the middle without walking to it, and that landing is exactly what these four clauses bought."}'></div>

  <p>Most languages let you say up front how long a row is going to be, and document it as avoiding repeated regrowth. <strong>That is clause three offered to you as a feature</strong>, and Lesson 3.3 is what it costs when you decline.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the clause each one is enforcing.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"Out of memory, and the chart says we are at 40 percent"</td><td>Refused while the total free space is enormous</td><td>Clause two. The ask was for one unbroken run, and scattered free space cannot fill it</td></tr>
    <tr><td>"It only falls over after the service has been up a few days"</td><td>A failure that tracks uptime rather than load</td><td>Clause two again. Every claim and release since the last restart chopped the free space into smaller pieces</td></tr>
    <tr><td>"The number it printed is wrong but nothing crashed"</td><td>A plausible answer where an error should have been</td><td>The sum ran normally on a position the run never covered, and it has no way to know</td></tr>
    <tr><td>"We reserve ten thousand slots for accounts that hold about twenty"</td><td>A length decided once, in advance, by a guess</td><td>Clause three. The run is claimed before anything arrives, so its length is somebody old estimate</td></tr>
    <tr><td>"The exact same loop is slower in the new language"</td><td>Identical steps, more work inside each one</td><td>The new language checks the position on every read. The count did not change, the price of one step did</td></tr>
    <tr><td>"Can we just extend this list by a few hundred at runtime?"</td><td>A request to lengthen a claim already granted</td><td>Clause two. The boxes immediately after your run belong to somebody else, so nothing can be added on the end</td></tr>
  </table>
  <div class="tbl-cap">Four clauses, six sentences. Once you can put a clause name in the middle column, every one of these stops being a mystery and becomes a bill with a due date on it.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">A crash that no total can explain.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our image service dies with out of memory about once every three days. It comes back clean after a restart and then runs fine. The memory chart is flat at about 1.4 GB the whole time, right up to the crash, and the ceiling is 4 GB. Raising the ceiling just moved the crash a day later."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Out of memory at 1.4 GB of a 4 GB ceiling, every three days","lanes":[{"label":"The team"},{"label":"You"},{"label":"The service"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Out of memory at 1.4 GB, ceiling is 4 GB"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: refused a total, or refused one run?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"2.6 GB free at the moment it died"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"A total cannot fail with 2.6 GB free"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"One photo needs 144 MB side by side"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"Three days of claim and release chopped the free space up"},{"id":"c3","lane":2,"col":4,"kind":"accent","label":"Claim the big runs once at start and reuse them"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"b1","to":"b2","style":"green"},{"from":"b2","to":"b3","style":"green"},{"from":"b3","to":"c3","style":"green","label":"stop asking for a fresh run"}],"caption":"Every explanation on the table was a total: a leak, a spike, a small ceiling, a heavy photo. Not one of them can fail with 2.6 GB free, and not one of them is cured by a restart that changes no code and no traffic."}'></div>

  <p><strong>The service was never out of memory. It was out of unbroken stretches.</strong> A 36 megapixel photo held for editing is 36 million pixels at four numbers each, which is 144 million values that must sit side by side, roughly 144 MB in one piece. On day one a run that long existed. After three days of claiming and releasing photos of every size, the largest single free stretch is smaller than that, while 2.6 GB sits free in fragments. The fix is to stop asking for a fresh run each time: claim the big buffers once at startup and reuse them.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked one question: <strong>were we refused a total, or refused one run?</strong> Every other explanation on the table is a total explanation, and a total explanation cannot fail with 2.6 GB free. The detail that it tracks uptime rather than traffic is the second clue, because fragmentation is the only thing in the building that gets worse purely by the clock.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, no code</div>
    <p>Find a weekly pill box, an egg carton, or a drawer of identical compartments, and cover every label. <strong>Round one:</strong> have somebody call out a slot number and reach for it without reading anything and without counting from the start. Your hand goes straight there, and the reason is boring: the compartments are identical and they touch. <strong>Round two:</strong> try the same on a bookshelf where the books are different thicknesses. Ask for the fourth book without reading spines. You cannot, and nothing is wrong with the shelf. Clause one is simply missing. <strong>Round three:</strong> count the empty compartments and say out loud who is allowed to use them.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A long running service is refused room for a new row while the machine reports plenty of free memory. What is the most likely reading?</div>
    <div class="opt" data-i="0">The memory report is wrong and should not be trusted</div>
    <div class="opt" data-i="1">The ask was for one unbroken run, and the free space is scattered rather than short</div>
    <div class="opt" data-i="2">There is a leak somewhere that the chart is not showing</div>
    <div class="qexp">This is the wedding hall. Plenty free and almost none of it adjacent. A leak is a total explanation and a total explanation cannot fail while the total is comfortable. The tell that separates them is time: fragmentation gets worse purely by the clock, which is why the crash tracks uptime rather than traffic.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">A read at position 10 of a ten item row returns 66 and nothing crashes. What actually happened?</div>
    <div class="opt" data-i="0">The row silently grew to eleven boxes</div>
    <div class="opt" data-i="1">The language returned a default value because the position was invalid</div>
    <div class="opt" data-i="2">The sum landed on a real box that the contract never covered, and read whatever was in it</div>
    <div class="qexp">Start plus ten times width is a perfectly ordinary address, and there is a box there. Nothing in the four clauses mentions where the run ends, so the arithmetic has no way to object. When a language does catch this, that is a guard somebody added on top, and it is paid for on every read including the millions that were never wrong.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>An array is fast because it is rigid, and you have met the first bill: a claim that can be refused while space is free. Next, the bill nobody warns you about, which arrives every time you put something in the middle.</p>
  </div>
__NAV__
</div>`,

"3.4": `<div class="wrap">
  <div class="les-kicker">Chapter 3 · Lesson 3.4</div>
  <h1 class="les-title">Grids and 2D Arrays: Maps, Screens and Spreadsheets</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~12 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">There is no grid anywhere in your computer. There is one row, and an agreement about where to fold it.</p>

  <p class="lead">By the end of this lesson you can look at any table, screen or map, name the fold somebody agreed to, and predict which direction of travel is about to be expensive. The count will not tell you. Two walks over exactly the same number of cells can differ by a large multiple, and the whole difference is which way the fold runs.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">The plan on the wall, and the usher on the floor.</div>
  <p>The seating plan for the wedding is pinned to the wall. Twenty rows, twenty seats in each, and it looks exactly like the room. It is not the room. It is a sheet of paper, and the usher is the one who walks.</p>

  <div class="viz" data-viz='{"type":"scene","title":"The plan on the wall is not the room","width":740,"height":270,"items":[{"icon":"doc","x":110,"y":118,"kind":"muted","label":"the seating plan on the wall"},{"icon":"person","x":322,"y":118,"kind":"gold","label":"one stroll down row M"},{"icon":"shelf","x":500,"y":124,"kind":"accent","label":"twenty rows on the floor"},{"icon":"person","x":666,"y":118,"kind":"bad","label":"twenty walks in and out"}],"arrows":[{"x1":170,"y1":118,"x2":264,"y2":118,"style":"green","label":"looks like the room"},{"x1":560,"y1":122,"x2":614,"y2":120,"style":"gold","label":"is not the room"}],"caption":"Twenty rows of twenty seats. Handing a programme to everybody in row M is twenty seats. Collecting a ticket from seat 14 of every row is also twenty seats. Same count, and the usher will tell you they are not the same job."}'></div>

  <p>Watch him do two jobs. Hand a programme to everybody in row M: he goes in at one end, moves along, comes out the other. One stroll, twenty seats. Now collect the coat ticket from seat 14 of every row: also twenty seats, and twenty separate walks in and out. <strong>Same count, and he will tell you they are not the same job.</strong></p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">A grid is one row plus one number.</div>
  <p>Memory has been a single line of numbered boxes since Lesson 1.1 and it has never been anything else. A second dimension therefore cannot be a shape. It has to be an agreement, and the agreement is one number: <strong>how wide a row is.</strong></p>

  <div class="viz" data-viz='{"type":"arch","title":"One row, plus one number","maxChars":16,"nodes":[{"id":"q","label":"What you asked for: row 2, column 3","col":0,"row":1,"kind":"gold"},{"id":"w","label":"The only thing a grid knows: it is 6 wide","col":1,"row":0,"kind":"accent"},{"id":"m","label":"Multiply the row by the width: 12","col":1,"row":1,"kind":"box"},{"id":"a","label":"Add the column: 15","col":2,"row":1,"kind":"box"},{"id":"b","label":"Box 15 of one long row","col":3,"row":1,"kind":"dark"}],"edges":[{"from":"q","to":"m"},{"from":"w","to":"m","label":"the agreement"},{"from":"m","to":"a"},{"from":"a","to":"b","style":"green"}],"caption":"Memory has been one line of numbered boxes since Lesson 1.1 and it has never been anything else. A second dimension cannot be a shape, so it has to be an agreement, and the agreement is one number: how wide a row is."}'></div>

  <p>From that one sentence the address falls straight out. Multiply the row by the width, add the column, and you have a position in the one long row. Lesson 1.1 already spent a multiply and an add turning a position into an address; a grid spends one more of each turning two numbers into that position first. <strong>That is the entire cost of a second dimension.</strong></p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The same boxes, drawn as a grid and as the row they actually are.</div>

  <div class="board" data-anim='{"type":"grid","title":"Twenty four boxes, drawn twice","speed":1700,"rows":4,"cols":6,"cellW":84,"cellH":44,"flatRow":true,"rowLabels":["row 0","row 1","row 2","row 3"],"colLabels":["col 0","col 1","col 2","col 3","col 4","col 5"],"flatLabel":"the same 24 boxes, in the order memory actually holds them","steps":[{"badge":"one picture, one row","say":"Above, folded into four rows of six, which is the picture in everybody head. Below, the same twenty four in the only arrangement that exists. <b>You are never told they are the same thing. You watch it.</b>"},{"look":[[2,3]],"badge":"row 2, column 3","say":"Ask for row 2, column 3. Two things lit and nothing walked to either of them. Now read the number printed inside the gold box."},{"look":[[2,3]],"badge":"2 times 6 plus 3 is 15","say":"Two rows down, at six boxes a row, is twelve boxes travelled. Three more along is fifteen. <b>That is why the box says 15</b>, and it is the whole of the second dimension."},{"seen":[[1,0],[1,1],[1,2],[1,3],[1,4],[1,5]],"badge":"a whole row","say":"Take a whole row. In the strip below, those six sit shoulder to shoulder, <b>because the fold was placed at the end of a row and a row is what the fold keeps whole.</b>"},{"look":[[0,4],[1,4],[2,4],[3,4]],"badge":"a whole column, same count","say":"Now take a column. Same four cells. In the grid they are touching. In the strip they are boxes 4, 10, 16 and 22, with five untouched boxes between every pair."},{"look":[[1,5]],"badge":"the last box of row 1","say":"Box 11 is the end of row 1, and the fold happens immediately after it. Do not press yet. <b>Say out loud what is in the very next box along the strip.</b>"},{"look":[[1,5]],"bad":[[2,0]],"badge":"one row down, not off the end","say":"One times six plus six is twelve, and box twelve exists, so you were handed it. <b>In one dimension you fall off the end. In two you land somewhere plausible, one row down</b>, and nothing complains."},{"bad":[[0,4],[1,4],[2,4],[3,4]],"badge":"at 1,920 wide the gap is 1,920","say":"The picture has not changed and the picture is not what is being priced. At a real screen width the box below is <b>1,920 boxes further along the strip</b>, and that distance is the entire subject of the next block."}],"caption":"Every frame lights a cell in the grid and its twin in the strip at the same instant. The grid is a way of talking. The strip is the thing that exists."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Why the count is settled and the walk is not.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Why a column feels different when the count is identical","actors":[{"label":"The screen redraw","kind":"gold"},{"label":"Memory delivery","kind":"accent"},{"label":"The one long row","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"give me pixel 0","style":"gold"},{"from":1,"to":2,"label":"fetch a run of neighbours"},{"from":1,"to":0,"label":"pixel 0, and the next 15 free","style":"green"},{"from":0,"to":1,"label":"pixels 1 to 15","style":"gold"},{"from":1,"to":0,"label":"already in hand","style":"green"},{"from":0,"to":1,"label":"now the pixel one row below","style":"gold"},{"from":1,"to":2,"label":"that is 1,920 further along. Fetch again"}],"caption":"Memory does not deliver one box, it delivers a run of neighbours in one go, whether you asked for them or not. Walking a row spends one delivery on sixteen pixels. Walking a column spends one delivery on each."}'></div>

  <p>Memory does not hand you one box. It hands you a run of neighbours in one delivery, whether you asked for them or not, because fetching a run costs almost exactly what fetching one value costs. Walking along a row spends one delivery on a whole handful of cells. <strong>Walking down a column spends one delivery on each.</strong> This is Lesson 2.4 arriving in a new disguise: identical steps, and the step counter cannot see where any of them travelled.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Where you agreed to fold, and whether you agreed at all.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The arrangement</th><th>What you buy</th><th>The condition it demands</th></tr>
    <tr><td>Fold at the end of each row</td><td>Walking along a row is one unbroken run</td><td>Every row exactly as long as every other</td></tr>
    <tr><td>Fold at the end of each column</td><td>Walking down a column is one unbroken run</td><td>The same, and now rows are the expensive direction</td></tr>
    <tr><td>Keep the width yourself, in a plain row</td><td>Full control, and it is still a grid</td><td>You do the multiply and the add by hand, every time</td></tr>
    <tr><td>A separate address per row</td><td>Rows may differ in length</td><td>Not a grid. You gave up the arithmetic, and drawing it as a rectangle does not bring it back</td></tr>
    <tr><td>Store one column as its own row</td><td>Reading that column is one unbroken run</td><td>Reading a whole record now costs a delivery per field</td></tr>
  </table>
  <div class="tbl-cap">Rows three and four are the two people confuse. Keeping the width yourself is still a grid. Keeping an address per row is not, and the picture on the whiteboard looks identical either way.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Where did you agree to fold","maxChars":17,"nodes":[{"id":"q","label":"Which direction do you walk most often?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"r","label":"Fold at the end of each row","col":0,"row":1,"kind":"accent"},{"id":"c","label":"Fold at the end of each column","col":2,"row":1,"kind":"accent"},{"id":"n","label":"Rows of different lengths: not a grid at all","col":1,"row":2,"kind":"muted"}],"edges":[{"from":"q","to":"r","label":"along rows","style":"green"},{"from":"q","to":"c","label":"down columns","style":"green"},{"from":"q","to":"n","label":"neither, they vary"}],"caption":"There is no wrong fold, only a fold that disagrees with how you walk. The bottom leaf is not a grid: rows of different lengths is a row of addresses, and it gives up the arithmetic entirely."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Two walks, one count, one large multiple.</div>
  <p>Reach any cell in a four by six grid: one sum. Reach any cell in a grid four thousand by six thousand: one sum. The size never entered it, which is the flat shape you produced yourself at the dinner table in Lesson 2.2.</p>

  <div class="viz" data-viz='{"type":"card","title":"The same 1,080 pixels, walked two ways","eyebrow":"TWO WALKS, ONE COUNT","badge":"1,920 pixel wide screen","width":510,"rows":[{"k":"Reach any cell, 4 by 6","v":"one sum","tone":"good","bar":0},{"k":"Reach any cell, 4,000 by 6,000","v":"one sum","tone":"good","bar":0},{"k":"Read 1,080 pixels along a row","v":"1,080 reads, 68 deliveries","tone":"good","bar":0.063},{"k":"Read 1,080 pixels down a column","v":"1,080 reads, 1,080 deliveries","tone":"bad","bar":1}],"caption":"Both bars are drawn against the same scale of 1,080 deliveries. The read count is identical in the last two rows and every step counter you built in Chapter 2 would report them as the same job."}'></div>

  <p>Now walk instead of reach, on a screen 1,920 pixels wide. Read 1,080 pixels along a row and it costs 1,080 reads and about 68 deliveries, because each delivery brings a run of neighbours. Read 1,080 pixels down a column and it costs 1,080 reads and 1,080 deliveries, because the next pixel down is 1,920 boxes away and never arrives free. <strong>Same reads, same shape, same O(n), and one of them is far more expensive.</strong></p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Six things that are one row and a width.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"One row plus a width, and where you meet it","unit":162,"nodes":[{"id":"c","label":"One row, plus a width","x":2,"y":1,"kind":"dark"},{"id":"s","label":"A screen being repainted in one pass","x":0,"y":0,"kind":"accent"},{"id":"p","label":"A photo file, which records its width first","x":0,"y":2,"kind":"box"},{"id":"t","label":"A tile map in a game","x":4,"y":0,"kind":"box"},{"id":"g","label":"A spreadsheet, and why a column feels heavier","x":4,"y":2,"kind":"gold"},{"id":"m","label":"The numbers inside an AI model","x":2,"y":3,"kind":"box"}],"edges":[{"from":"c","to":"s","label":"one pass"},{"from":"c","to":"p","label":"width first"},{"from":"c","to":"t","label":"row times width"},{"from":"c","to":"g","label":"the fold you inherited","style":"gold"},{"from":"c","to":"m","label":"rows of numbers"}],"caption":"Every image format on earth records its width before it records a single pixel, and it has to, because without the width the file is a heap of numbers with no agreement attached."}'></div>

  <p>A screen is one row of pixel values with a declared width, repainted end to end. That single pass exists only because the fold is arithmetic: nothing has to be searched for, so nothing has to be found. <strong>It is the same loan Lesson 3.1 took out and the same one Chapter 6 will spend.</strong></p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences about which way somebody folded.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"Reading across the table is fine, reading down one column is slow"</td><td>Identical step count, one direction expensive</td><td>The walk runs across the fold, so no delivery ever brings two of the values you wanted</td></tr>
    <tr><td>"Rotating an image takes longer than saving the whole thing"</td><td>A job that reads one way and writes the other</td><td>A rotate reads down columns and writes along rows, so one of the two is paying a delivery per pixel</td></tr>
    <tr><td>"The value is right, but it belongs to the row below"</td><td>A plausible wrong answer, not an error</td><td>The walk ran past the end of a row and the arithmetic handed over the first cell of the next one</td></tr>
    <tr><td>"Our rows are not all the same length, can we still use a grid?"</td><td>A request to break the width agreement</td><td>No. What is being described is a row of addresses, and the arithmetic does not survive it</td></tr>
    <tr><td>"The heatmap is instant at 100 by 100 and freezes at 2,000 by 2,000"</td><td>A side that grew twenty times</td><td>Cells are rows times columns, so twenty times the side is four hundred times the cells. This one really is about how much data there is</td></tr>
    <tr><td>"Can we just add one more column?"</td><td>A one line change that is not one</td><td>The width is the entire agreement. Change it and every cell after the first row is at a different address, so it is a rebuild</td></tr>
  </table>
  <div class="tbl-cap">Rows one, two and three arrive sounding like speed problems and all three are direction problems. Row five sounds like the same thing and is genuinely about size, which is exactly why the middle column is worth learning.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Every meter in the building is telling the truth.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our sensor dashboard holds a hundred thousand readings, twenty numbers in each. Opening a single reading is instant. But the chart that plots one of those twenty against time takes about ten seconds, and that chart is touching a twentieth of the data."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"The chart that reads a twentieth of the data and pays for half of it","lanes":[{"label":"The team"},{"label":"You"},{"label":"The data"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"One chart is slow and it touches the least data"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: which way does it walk?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"Down one column of a table folded by row"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Same reads, one delivery each"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"100,000 values, 100,000 deliveries"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"Store that one column as its own row"},{"id":"c3","lane":2,"col":4,"kind":"accent","label":"100,000 values, about 12,500 deliveries"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"b1","to":"b2","style":"green"},{"from":"b2","to":"b3","style":"green"},{"from":"b3","to":"c3","style":"green","label":"change the fold"}],"caption":"Every meter in the building was telling the truth. The chart really does touch a twentieth of the data, and it really does pay for a large share of the deliveries, because the count and the journey are two different numbers."}'></div>

  <p><strong>The chart is walking down a column of a table that was folded by row.</strong> Each of its 100,000 values sits twenty numbers away from the next, so no delivery ever brings two of them, and 100,000 values costs about 100,000 deliveries. Reading the entire table, all twenty columns, would cost far fewer. The fix is not a faster chart: store that one column as its own row, and the same 100,000 values arrive in roughly 12,500 deliveries.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It never asked how much data. It asked <strong>which way does it walk, and which way was this folded?</strong> The detail that made everybody else stare at the wrong meter, that the slow chart touches the least data, is the exact detail that proves the count is not the problem.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, no code and no maths</div>
    <p>Find a calendar showing a month on one page. Cover everything below the 15th and say what sits directly under it. <strong>You will answer 22 without counting a single cell</strong>, because you added seven, and seven is the width. Now open a spreadsheet with a few hundred rows and time two things by feel: dragging to select an entire row, and dragging to select an entire column. Then say which way that sheet is folded, and what would have to change for the other direction to be the cheap one.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">Reading 1,000 cells along a row and 1,000 cells down a column touch the same number of cells. Why is one of them slower?</div>
    <div class="opt" data-i="0">Columns are stored in a different kind of memory</div>
    <div class="opt" data-i="1">Reading down requires an extra calculation per cell</div>
    <div class="opt" data-i="2">Memory delivers a run of neighbours per request. Along a row those neighbours are the cells you wanted; down a column they are not</div>
    <div class="qexp">The sums are the same and the read counts are identical, which is why every step counter in Chapter 2 reports the two walks as the same job. The difference is delivery: one direction gets the next fifteen cells free and the other pays for every one, because the next cell down is a whole row width away.</div>
  </div>

  <div class="quiz" data-correct="0">
    <div class="q">Somebody asks to add one column to a grid that is already full of data. Why is that not a small change?</div>
    <div class="opt" data-i="0">The width is the agreement the addresses are built on, so changing it moves every cell after the first row</div>
    <div class="opt" data-i="1">Grids cannot be changed once they are created</div>
    <div class="opt" data-i="2">Adding a column always doubles the memory used</div>
    <div class="qexp">Row times width plus column is the only thing making a grid a grid. Change the width and every one of those sums returns a different answer, so the data has to be laid out again from scratch. Adding a row at the end is cheap for exactly the opposite reason: it does not touch the width.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>You have the four clauses, the shuffle, the doubling and the fold. The last lesson of this chapter is the audit: how to look at a row you inherited and name which bill it is about to send.</p>
  </div>
__NAV__
</div>`,

"3.5": `<div class="wrap">
  <div class="les-kicker">Chapter 3 · Lesson 3.5</div>
  <h1 class="les-title">Where Arrays Show Up, and the Problems They Create</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~12 min</span>
    <span class="pill gold">the audit</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">Every limit that has ever annoyed you is somebody refusing a bill you could not see.</p>

  <p class="lead">This is the lesson where the chapter becomes a method. By the end you can look at a list you did not build, ask three questions, and name which of the four bills it is about to send. You will also be able to read the limits in the products you use as decisions rather than as laziness, which is a genuinely different way to look at software.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Three screens said no to you this week.</div>
  <p>A results page gave you fifty and put a button at the bottom. An undo history let you go back a long way and then stopped, and the step you wanted was one past where it stopped. A pin list let you pin five conversations and greyed out the sixth, with no explanation and no setting.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Three screens that said no to you this week","width":740,"height":260,"items":[{"icon":"phone","x":124,"y":122,"kind":"accent","label":"fifty results, then a button"},{"icon":"phone","x":370,"y":122,"kind":"gold","label":"undo goes back this far and no further"},{"icon":"phone","x":616,"y":122,"kind":"bad","label":"you can pin five, and the sixth is grey"}],"caption":"None of these is a missing feature and none of them is laziness. Each one is somebody who priced a row of boxes and decided which bill they were not willing to pay, and then never told you which."}'></div>

  <p>None of those is a missing feature. <strong>Every one is somebody who priced a row of boxes and decided which bill they were not willing to pay</strong>, and then shipped the decision without telling you which one it was. By the end of this lesson you will be able to tell.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">An audit, not a choice.</div>
  <p>Nobody chooses a row of boxes. You inherit one, on your second day, inside a feature somebody shipped four years ago, and then the usage changes and the contract does not. So the skill here is not choosing. It is auditing, and the audit is three questions.</p>

  <div class="viz" data-viz='{"type":"flow","title":"The audit, three questions, one clause each","maxChars":17,"nodes":[{"id":"r","label":"Any list you inherited","col":0,"row":1,"kind":"dark"},{"id":"q1","label":"Is the count stable, or does it follow your customers?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"q2","label":"Do things arrive at the end, or in the middle?","col":1,"row":1,"kind":"gold","shape":"diamond"},{"id":"q3","label":"Is one box a value, or an address to somewhere else?","col":1,"row":2,"kind":"gold","shape":"diamond"},{"id":"a","label":"The copy bill: claimed in advance","col":2,"row":0,"kind":"accent"},{"id":"b","label":"The shuffle bill: side by side","col":2,"row":1,"kind":"accent"},{"id":"c","label":"The trips bill: same width","col":2,"row":2,"kind":"accent"}],"edges":[{"from":"r","to":"q1"},{"from":"r","to":"q2"},{"from":"r","to":"q3"},{"from":"q1","to":"a","style":"green"},{"from":"q2","to":"b","style":"green"},{"from":"q3","to":"c","style":"green"}],"caption":"Nobody chooses a row of boxes. You inherit one on your second day, inside a feature shipped four years ago, and then the usage changes and the contract does not. So the skill is not choosing, it is auditing."}'></div>

  <p><strong>Is the count stable, or does it follow your customers?</strong> That tests claimed in advance. <strong>Do things arrive at the end, or in the middle?</strong> That tests side by side. <strong>Is one box a value, or an address to somewhere else?</strong> That tests same width, and it is the one nobody asks.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The third question, and the mechanism behind it.</div>
  <p>Both lanes hold the same sixteen numbers and both will look at every one. The counter is not counting looks. When you ask memory for one number it does not hand you one number, it hands you a block of neighbours, because fetching a block costs almost exactly what fetching a single value costs.</p>

  <div class="board" data-anim='{"type":"race","title":"Sixteen numbers, twice, and only one of them is a journey","speed":1600,"countLabel":" trips","legend":[["being read now","look"],["already in hand","found"]],"tracks":[{"label":"Packed in one row","data":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]},{"label":"One address each, scattered","data":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]}],"steps":[{"badge":"16 numbers, twice","lanes":[{"count":0},{"count":0}],"say":"Same sixteen numbers in both lanes, and both lanes will look at every one. <b>The counter is not counting looks.</b>"},{"badge":"one trip each","lanes":[{"look":[0],"count":1},{"look":[0],"count":1}],"say":"You asked for the first number. Neither lane had it yet, so both sent somebody. One trip each, and so far the two rows are indistinguishable."},{"badge":"the trip brought neighbours","lanes":[{"found":[0,1,2,3,4,5,6,7],"count":1},{"found":[0],"look":[1],"count":2}],"say":"The trip did not bring back one number, it brought back the whole block it was sitting in. <b>The packed lane got eight for the price of one.</b> The scattered lane got one, because its neighbours belong to somebody else."},{"badge":"the block ran out","lanes":[{"found":[0,1,2,3,4,5,6,7],"look":[8],"count":2},{"found":[0,1,2,3,4,5],"look":[6],"count":7}],"say":"The packed lane has finally read past its block, so it sends a second trip and gets the next eight. The scattered lane is on its seventh journey."},{"badge":"16 looks each","lanes":[{"found":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"count":2},{"found":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"count":16}],"say":"Both lanes have read all sixteen numbers. <b>Sixteen looks each. Two trips against sixteen.</b> Every step counter you built in Chapter 2 reports these two as identical work."},{"badge":"a million each","lanes":[{"found":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"count":"125,000"},{"found":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"count":"1,000,000"}],"say":"Nothing on the board moved, only the size. Eight numbers a trip, so a million packed is a million divided by eight. Scattered it is one journey each."},{"badge":"both of these are O(n)","lanes":[{"found":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"count":"125,000"},{"found":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"count":"1,000,000"}],"say":"Double either row and both counters double, so both are the same shape and the name is honest. <b>One of them is still eight times the journeys</b>, and no shape you learned in Chapter 2 has a way to say so."}],"caption":"This is the mechanism from Lesson 2.4 pointing the other way. There, an unchanged count hid a slowdown. Here, an unchanged count hides a saving you were already collecting."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">How a row holds things that are not the same size.</div>

  <div class="viz" data-viz='{"type":"seq","title":"How a row holds twelve things that are not the same size","actors":[{"label":"You","kind":"gold"},{"label":"The row of addresses","kind":"accent"},{"label":"The thing itself","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"give me item 6","style":"gold"},{"from":1,"to":0,"label":"one sum, here is an address","style":"green"},{"from":0,"to":2,"label":"now go to that address"},{"from":2,"to":0,"label":"the actual thing, somewhere else entirely","style":"green"}],"caption":"It does not hold them, and that is the whole answer. Same width is not a preference, so when the things differ in size the row holds fixed width addresses instead. Position is still one sum. The sum now returns a place rather than a value, and the second journey is the bill."}'></div>

  <p>It does not, and that is the whole answer. Same width is not a preference. When the things themselves differ in size, a name, a photo, a whole customer record, <strong>the row stops holding the things and starts holding fixed width addresses</strong>, and the things get scattered wherever there was room. Position is still one sum. The sum now returns a place rather than a value, and that second journey is the bill you just watched.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Six rows you will actually inherit.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The row you inherited</th><th>What is really inside one box</th><th>The condition it demands</th></tr>
    <tr><td>A packed row of numbers</td><td>the value itself, fixed width</td><td>Every value the same width, decided before anything is stored</td></tr>
    <tr><td>Records laid out inline</td><td>a whole record, fixed width</td><td>Every record the same width, and widening one widens every read</td></tr>
    <tr><td>A row of addresses</td><td>an address, and the thing lives elsewhere</td><td>Nothing, which is why it is everywhere, and one journey per item forever</td></tr>
    <tr><td>A row with spare capacity</td><td>the value, plus room you already hold</td><td>You pay for the spare from the moment you claim it</td></tr>
    <tr><td>A fixed ring reused forever</td><td>the value, oldest overwritten</td><td>You must be willing to lose the oldest entry without asking</td></tr>
    <tr><td>A row somebody saved positions into</td><td>the value, and a promise you made elsewhere</td><td>Nothing may shuffle or replace the row, or every saved position is now wrong</td></tr>
  </table>
  <div class="tbl-cap">Read rows one and three together. They look identical from every angle a step counter can see, they report the same shape, and they differ by the multiple you watched on the board.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which bill is this row about to send","maxChars":17,"nodes":[{"id":"q","label":"What is really inside one box?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"v","label":"The value itself, fixed width","col":0,"row":1,"kind":"accent"},{"id":"a","label":"An address to somewhere else","col":2,"row":1,"kind":"gold"},{"id":"g","label":"Neighbours arrive free. Trips stay low","col":0,"row":2,"kind":"accent"},{"id":"b","label":"One journey per item, forever","col":2,"row":2,"kind":"bad"}],"edges":[{"from":"q","to":"v","label":"a value","style":"green"},{"from":"q","to":"a","label":"an address"},{"from":"v","to":"g","style":"green"},{"from":"a","to":"b","style":"gold"}],"caption":"This is the one question nobody asks about a list they inherited, and it is the difference between reading a million numbers in 125,000 journeys and reading them in a million."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Counted in trips rather than looks.</div>
  <p>Sixteen numbers packed: two trips. Sixteen scattered: sixteen. The same sixteen looks in both. A million packed: 125,000 trips. A million scattered: a million, and that is the generous version, because reading the row of addresses costs trips of its own.</p>

  <div class="viz" data-viz='{"type":"card","title":"Two rows, one count, one large multiple","eyebrow":"COUNTED IN TRIPS","badge":"same O(n)","width":510,"rows":[{"k":"16 numbers packed, 16 looks","v":"2 trips","tone":"good","bar":0.125},{"k":"16 numbers scattered, 16 looks","v":"16 trips","tone":"bad","bar":1},{"k":"A million packed, a million looks","v":"125,000 trips","tone":"good","bar":0.125},{"k":"A million scattered, a million looks","v":"1,000,000 trips","tone":"bad","bar":1}],"caption":"Every bar is drawn against the same scale, and two trips out of sixteen is exactly one eighth of it. Same count, same data, same machine, same shape, decided entirely by what one box was holding."}'></div>

  <p>That is eight times, on the same count, on the same data, on the same machine, decided entirely by a layout choice somebody made years ago. <strong>Both rows are honestly <em class="g">O(n)</em></strong>, and that is not the notation failing. It is the notation doing exactly its job, which is to describe how work grows rather than what one unit of work costs.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Back to the three screens, with the clause named.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Every limit you met this week, and the bill behind it","unit":162,"nodes":[{"id":"c","label":"A limit you met this week","x":2,"y":1,"kind":"dark"},{"id":"p","label":"Fifty results, then a button","x":0,"y":0,"kind":"box"},{"id":"u","label":"Undo goes back a fixed number of steps","x":0,"y":2,"kind":"box"},{"id":"n","label":"Two hundred rows a page in the admin tool","x":4,"y":0,"kind":"box"},{"id":"s","label":"A saved position that stopped pointing at the right thing","x":4,"y":2,"kind":"gold"},{"id":"e","label":"An export that has to be requested and emailed","x":2,"y":3,"kind":"box"}],"edges":[{"from":"c","to":"p","label":"refusing the copy"},{"from":"c","to":"u","label":"refusing the copy"},{"from":"c","to":"n","label":"refusing the trips"},{"from":"c","to":"s","label":"the row moved","style":"gold"},{"from":"c","to":"e","label":"refusing the claim"}],"caption":"Four clauses, four bills: the copy, the shuffle, the trips, and the one nobody names, which is a position you wrote down while the row was still where you left it."}'></div>

  <p>A results page that hands you fifty and then a button is <strong>refusing the copy</strong>: fifty is a count known in advance, so the row is claimed once and never grown. An undo history that forgets its oldest step is the same refusal in different clothes, a fixed set of boxes reused forever. And the gold node is the fourth bill, the one nobody names: <strong>you wrote down a position, and then the row was replaced by a longer one somewhere else.</strong> The position is still a number. It just points at nothing you meant.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the clause being billed in each.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"Can we make this list unlimited?"</td><td>A cap somebody chose</td><td>Claimed in advance. Can we pay the copy bill forever, at a size our customers choose</td></tr>
    <tr><td>"The nightly report went from twenty minutes to over an hour"</td><td>Same rows, same fields, no deployment</td><td>Same width. The row got wider, not longer, so every reader of it pays more trips</td></tr>
    <tr><td>"Every query is fast but the export still takes an hour"</td><td>Counted in looks, charged in journeys</td><td>Same width again. Something is a row of addresses where it could have been packed</td></tr>
    <tr><td>"It is fine at nine hundred rows and falls over at eleven hundred"</td><td>A threshold, not a slope</td><td>Claimed in advance. The spare capacity ran out and the whole row was copied</td></tr>
    <tr><td>"We saved the position of each row and now half of them point at nothing"</td><td>Positions that were right once</td><td>It does not move. The row shuffled or was replaced, and a saved position survives neither</td></tr>
    <tr><td>"Adding one field cannot possibly matter, it is eight bytes"</td><td>A small number multiplied by a large one</td><td>Same width. It is eight bytes a million times, and it widens every read of that row forever</td></tr>
  </table>
  <div class="tbl-cap">Middle column, top to bottom, is four clause names repeating. Learn those four and every complaint in this table has most of its possible causes eliminated before you open anything.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Every number in the system says nothing is wrong, and every one is telling the truth.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our nightly customer report has gone from about twenty minutes to about eighty. It reads the same million rows it has always read, it reads the same two fields out of them, and we have not deployed anything to that report in six months."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Four times slower, and not one number in the system moved","lanes":[{"label":"The team"},{"label":"You"},{"label":"The rows"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Twenty minutes became eighty, nothing deployed"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: did the count change at all?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"Same million rows, same two fields"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"So it is not longer. Is it wider?"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"A record went from 16 bytes to 64"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"One trip used to bring four records. Now it brings one"},{"id":"c3","lane":2,"col":4,"kind":"accent","label":"250,000 trips became 1,000,000"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"b1","to":"b2","style":"green"},{"from":"b2","to":"b3","style":"green"},{"from":"b3","to":"c3","style":"green","label":"narrow the row"}],"caption":"The report reads the same rows and the same two fields it always read. Its step count, its plan and its shape are all unchanged, so every explanation built on counting was off the table before anybody opened anything."}'></div>

  <p><strong>The row did not get longer, it got wider.</strong> Six months ago a record was 16 bytes, so one trip to memory brought back four records and scanning a million of them cost about 250,000 trips. Then two fields were added for a different feature and the record became 64 bytes, so one trip now brings back one record and the same scan costs a million trips. Four times the journeys, on a report that does not read either new field. The fix is a narrower row, or keeping the two fields it actually reads as their own packed row.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked <strong>did the count change at all?</strong> and, once the answer was no, refused every explanation built on counting. Same instrument as the cache in Lesson 2.4 and the same direction: an unchanged count hiding a real cost. Block 3 is the only place in this course where that blindness pays out in your favour.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, no code and no algebra</div>
    <p>Twelve jars on one shelf: carry them to the table. You will do it in two journeys, because your arms hold about six, and you will not think about it. Now put the same twelve jars in twelve different rooms and fetch them one at a time. Same twelve jars, same twelve fetches, ten minutes of walking. <strong>Count journeys rather than jars and you have just run block 3 with your legs.</strong> Then find three limits in products you use today, and for each one write which of the four clauses it is refusing to pay for.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">Two rows hold a million numbers each and both are read end to end. Both are honestly described as O(n). Why can one still be eight times slower?</div>
    <div class="opt" data-i="0">Because O(n) is only an approximation and should not be trusted</div>
    <div class="opt" data-i="1">Because a shape describes how work grows, not what one unit of work costs, and a packed row gets its neighbours delivered free</div>
    <div class="opt" data-i="2">Because one of them must be doing extra comparisons</div>
    <div class="qexp">The notation is not failing here, it is doing its job. Both counts double when the data doubles, so both are the same shape and both descriptions are honest. What differs is the price of one step, which is exactly the coupon distinction from Lesson 2.1 arriving from the other side: here somebody has already bought you the coupon and no counter will ever tell you.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">A nightly report slows down four times. Same rows, same fields read, nothing deployed. What is the first thing to check?</div>
    <div class="opt" data-i="0">Whether the server is under more load at night</div>
    <div class="opt" data-i="1">Whether an index was dropped</div>
    <div class="opt" data-i="2">Whether the row got wider, since a wider record means fewer of them arrive per trip</div>
    <div class="qexp">The count is unchanged, so every counting explanation is already off the table. A row has two dimensions and only one of them is usually monitored: everybody watches how many rows there are and almost nobody watches how wide one is. Adding a field for one feature quietly taxes every other reader of that row, forever.</div>
  </div>

  <div class="callout good">
    <div class="ch">Chapter 3 complete</div>
    <p>An array is fast because it is rigid, and every problem in this chapter was that rigidity showing its bill: a claim that can be refused, a shuffle nobody warns you about, a doubling you pay for in advance, a fold that decides which direction is cheap, and a position that stops meaning anything when the row moves. Next: the structure that takes the opposite deal on every single one of them.</p>
  </div>
__NAV__
</div>`
