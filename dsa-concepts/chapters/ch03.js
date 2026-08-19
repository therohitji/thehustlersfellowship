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

  <div class="viz" data-viz='{"type":"arch","title":"Four clauses, and the bill each one sends","maxChars":16,"nodes":[{"id":"c","label":"The contract, signed before you hand it anything","col":0,"row":1,"kind":"dark"},{"id":"w","label":"Same width: every box identical","col":1,"row":0,"kind":"gold"},{"id":"s","label":"Side by side: no holes between them","col":1,"row":1,"kind":"gold"},{"id":"a","label":"Claimed in advance: the whole run at once","col":1,"row":2,"kind":"gold"},{"id":"f","label":"Fixed: a run never moves while you hold it","col":1,"row":3,"kind":"gold"},{"id":"b1","label":"The trips bill, Lesson 3.5","col":2,"row":0,"kind":"accent"},{"id":"b2","label":"The shuffle bill, Lesson 3.2","col":2,"row":1,"kind":"accent"},{"id":"b3","label":"The copy bill, Lesson 3.3","col":2,"row":2,"kind":"accent"},{"id":"b4","label":"The stale position bill, Lesson 3.5","col":2,"row":3,"kind":"accent"}],"edges":[{"from":"c","to":"w"},{"from":"c","to":"s"},{"from":"c","to":"a"},{"from":"c","to":"f"},{"from":"w","to":"b1","style":"green"},{"from":"s","to":"b2","style":"green"},{"from":"a","to":"b3","style":"green"},{"from":"f","to":"b4","style":"green"}],"caption":"You sign all four or you get none of them, and each one sends a bill with a lesson number on it. The rest of this chapter is those four bills arriving one at a time."}'></div>

  <p><strong>Same width</strong>, so every box is exactly as wide as every other. <strong>Side by side</strong>, so no holes and nothing belonging to anybody else in between. <strong>Claimed in advance</strong>, so the whole run is granted before the first item arrives. <strong>Fixed</strong>, meaning a run never moves while you hold it. That last one is not a promise that your row never moves: a row that outgrows its run does not stretch, it gets replaced by a longer run somewhere else, which is Lesson 3.3 in one sentence.</p>

  <p>Each clause sends its own bill, and the rest of this chapter is those four bills arriving one at a time. Keep the diagram above in mind, because from here every lesson is <strong>cashing a debt that has already been named</strong> rather than discovering a new one.</p>

  <div class="callout warn">
    <div class="ch">What breaking a clause actually does</div>
    <p>The obvious guess is that the arithmetic stops working. It does not. <strong>Break a clause and the sum runs perfectly and hands you the wrong thing</strong>, which is far worse than a failure, because a failure announces itself. The board below is that happening.</p>
  </div>

  <div class="callout">
    <div class="ch">Why the first box is numbered zero</div>
    <p>The sum is start plus position times width, so the position is not a place in a queue, it is <strong>a distance from the start</strong>. The first box is zero widths in, which is why it is called box zero, and why a row of ten ends at box nine. That is not a convention somebody picked to be awkward. It is the only numbering the arithmetic will accept, and almost every off by one in software is somebody reading a distance as an ordinal.</p>
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
    <tr><td>A row of addresses</td><td>one fixed width box per item, items kept elsewhere</td><td>The escape hatch when clause one is impossible. Still a row, still contiguous, and Lesson 3.5 prices what it costs</td></tr>
  </table>
  <div class="tbl-cap">Row four is how anything variable-sized gets stored in a row at all. Note what it is not: the addresses still sit side by side, so all four clauses still apply to them. Chapter 4 is the structure that gives up the row entirely.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which claim are you making","maxChars":18,"nodes":[{"id":"q1","label":"Do you know the count before anything arrives?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"f","label":"Claim exactly that many. Nothing spare, nothing wasted","col":0,"row":1,"kind":"accent"},{"id":"q2","label":"Will it keep growing after the first claim?","col":2,"row":1,"kind":"gold","shape":"diamond"},{"id":"o","label":"Claim once, at the size you need right now","col":1,"row":2,"kind":"accent"},{"id":"g","label":"Claim more than you need and hold the spare","col":3,"row":2,"kind":"gold"}],"edges":[{"from":"q1","to":"f","label":"yes","style":"green"},{"from":"q1","to":"q2","label":"no"},{"from":"q2","to":"o","label":"no"},{"from":"q2","to":"g","label":"yes","style":"gold"}],"caption":"Notice what this tree does not contain. There is no branch that avoids claiming in advance. The only choice on offer is how much and when, which is clause three refusing to be negotiated with."}'></div>

  <div class="board" data-anim='{"type":"array-scan","title":"The four boxes you paid for and never used","speed":1600,"big":true,"data":[19,74,31,60,8,45,27,93,52,11],"capacity":14,"countLabel":" boxes held","legend":[["holding something","found"]],"steps":[{"capacity":14,"found":[0,1,2,3,4,5,6,7,8,9],"count":14,"badge":"10 things, 14 boxes","say":"Ten things in the row, and the counter says fourteen. <b>Look at the empty stretch on the right and ask who is paying for it.</b>"},{"capacity":14,"found":[0,1,2,3,4,5,6,7,8,9],"count":14,"badge":"nothing else may go in there","say":"You are. Those four are dashed because nothing has been put in them, and <b>nothing else in the machine may put anything in them either</b>, because they are inside your run."}],"caption":"Spare capacity is not free room you might use later. It is room you have already claimed, already hold, and are already keeping from everything else."}'></div>

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

"3.2": `<div class="wrap">
  <div class="les-kicker">Chapter 3 · Lesson 3.2</div>
  <h1 class="les-title">Insert and Delete: The Shuffle Nobody Warns You About</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">12 visuals</span>
  </div>

  <p class="motto">An array has never once had anything inserted into it. Boxes get overwritten until one falls empty, and only then does your thing arrive.</p>

  <p class="lead">This is the second clause presenting its bill. Lesson 3.1 said side by side, no holes, and this lesson is what that costs the moment something has to go in the middle. By the end you can price any insert or delete before it runs, using one number: how many boxes sit behind the address you touched. An array is fast because it is rigid, and this is that rigidity showing its bill for the first time.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Same hall as Lesson 3.1, and the row is full.</div>
  <p>Twenty of you are seated in row J, seats 1 to 20, shoulder to shoulder. A late guest arrives and she has to be in seat 3, because her partner is in seat 2. <strong>Nobody builds a seat.</strong> The man in seat 20 stands and moves to 21. Then 19 moves into 20, then 18 into 19, and it rolls backwards down the row until seat 3 is finally empty.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Nobody builds a seat","width":730,"height":260,"items":[{"icon":"person","x":112,"y":120,"kind":"gold","label":"the late guest, seat 3"},{"icon":"person","x":396,"y":120,"kind":"accent","label":"eighteen people stand up"},{"icon":"person","x":656,"y":120,"kind":"bad","label":"the row now ends at 21"}],"arrows":[{"x1":166,"y1":120,"x2":330,"y2":120,"style":"gold","label":"one person arriving"},{"x1":460,"y1":120,"x2":592,"y2":120,"style":"green","label":"eighteen people moving"}],"caption":"Same hall as Lesson 3.1, and the row is full. One person arrived and eighteen people did work, which is the entire economics of an insert compressed into a wedding."}'></div>

  <p>Eighteen people stood up and sat down again, seats 3 to 20 inclusive, so that one person could sit. <strong>One person arrived and eighteen people did work</strong>, and not one of the eighteen movements had anything to do with her.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">A run of copies, and then one write.</div>
  <p>An insert is not one operation. It is a run of copies made from the back forwards, followed by a single write, and there is no other option available.</p>

  <div class="viz" data-viz='{"type":"flow","title":"An insert is a run of copies and then one write","maxChars":16,"nodes":[{"id":"a","label":"Add one thing at box 3","col":0,"row":1,"kind":"gold"},{"id":"q","label":"Is there a spare box at the end?","col":1,"row":1,"kind":"gold","shape":"diamond"},{"id":"g","label":"Lesson 3.3: claim a longer row first","col":1,"row":0,"kind":"bad"},{"id":"c","label":"Copy from the back forwards, one box at a time","col":2,"row":1,"kind":"accent"},{"id":"w","label":"Then one write into the box that fell empty","col":3,"row":1,"kind":"accent"}],"edges":[{"from":"a","to":"q"},{"from":"q","to":"g","label":"no"},{"from":"q","to":"c","label":"yes","style":"green"},{"from":"c","to":"w","style":"green"}],"caption":"A hole in the middle would break the position sum for every box behind it, so the row will not give you one. The only way to get an empty box at position 3 is to push everything behind it along until one falls empty there."}'></div>

  <p>Lesson 3.1 gave you the reason. The things sit side by side with no holes, so box 3 is always exactly three widths from the start. <strong>A hole in the middle would break that sum for every box behind it</strong>, so the row will not give you one. The only way to get an empty box at position 3 is to push everything behind it along until one falls empty there.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Ten names, one arrival, and a number you should guess first.</div>
  <p>One box write is the unit for this lesson. Not a second, not a step, one box being rewritten. Watch the counter and ignore how fast the frames move, exactly as you did at the till in Lesson 2.1.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Adding one name to box 3 of a ten box row","speed":1700,"big":true,"data":["Ada","Ben","Cara","Dev","Eli","Fay","Gus","Hana","Ivo","Jai"],"capacity":12,"countLabel":" box writes","legend":[["the box being read next","look"],["already rewritten","seen"]],"steps":[{"capacity":12,"count":0,"badge":"10 things, 12 boxes","say":"Ten names in ten boxes, and two more at the end you claimed and never filled. Mira has to end up in box 3. <b>Say a number out loud before you press: how many boxes get rewritten?</b>"},{"capacity":12,"look":[3],"ptr":{"i":3},"count":0,"badge":"the new one goes here","say":"Look at box 3. It is not empty, and it cannot be emptied by asking, because <b>the no holes clause is the reason position is a sum at all.</b>"},{"capacity":12,"look":[9],"ptr":{"i":9},"count":0,"badge":"start at the back","say":"So the work starts at the far end. Copy box 3 into box 4 first and box 4 is destroyed before anything reads it, which is why this runs backwards."},{"capacity":12,"shift":{"from":9,"by":1},"seen":[9],"look":[8],"ptr":{"i":8},"count":1,"badge":"the first spare box now holds Jai","say":"One write. Box 9 was read and its value written one place along. <b>The gap you can see is the picture being kind</b>: box 9 still holds its old copy until something lands on it."},{"capacity":12,"shift":{"from":7,"by":1},"seen":[7,8,9],"look":[6],"ptr":{"i":6},"count":3,"badge":"3 writes","say":"Box 8 along, box 7 along. <b>The empty box is walking backwards down the row towards box 3</b>, one write at a time."},{"capacity":12,"shift":{"from":5,"by":1},"seen":[5,6,7,8,9],"look":[4],"ptr":{"i":4},"count":5,"badge":"5 writes","say":"Five writes, and here is the thing to notice. <b>Not one of these five has anything to do with Mira.</b> They are the price of the address you chose, not of the thing you are adding."},{"capacity":12,"shift":{"from":3,"by":1},"seen":[3,4,5,6,7,8,9],"ptr":{"i":3},"count":7,"badge":"7 writes, and box 3 is free","say":"Seven writes and box 3 is finally free. Now look underneath. <b>The box numbers did not move</b>, and neither did the addresses. Only the contents travelled."},{"capacity":12,"shift":{"from":3,"by":1},"seen":[3,4,5,6,7,8,9],"ptr":{"i":3},"count":8,"badge":"8 writes to add one name","say":"The eighth write drops Mira into the empty box. <b>Seven eighths of that work was not about her at all.</b>"}],"caption":"Eight box writes to add one name to a row of ten. The seven you did not ask for are priced entirely by how many boxes sat behind the address you picked."}'></div>

  <p>Deleting is the same mechanism with the gap travelling the other way, and it is priced identically.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Deleting is the same shuffle, travelling the other way","speed":1700,"big":true,"data":["Ada","Ben","Cara","Dev","Eli","Fay","Gus","Hana","Ivo","Jai"],"capacity":12,"countLabel":" box writes","legend":[["the one being removed","bad"],["rewritten to close the gap","seen"]],"steps":[{"capacity":10,"bad":[3],"count":0,"badge":"remove box 3","say":"Now take Dev out of box 3. The row still forbids holes, so the hole cannot simply be left there."},{"capacity":10,"shift":{"from":4,"by":-1},"seen":[4,5],"count":2,"badge":"2 writes","say":"Everything behind box 3 walks one place forward. <b>Same mechanism as the insert, running in the opposite direction</b>, and priced identically."},{"capacity":10,"shift":{"from":4,"by":-1},"seen":[4,5,6,7,8,9],"count":6,"badge":"6 writes, and the count drops","say":"Six writes to remove one name, plus lowering the count by one. <b>The last box still holds its old copy</b>, and nothing erased it. It is simply no longer counted."}],"caption":"Insert opens a gap and pushes backwards. Delete closes one and pulls forwards. Same clause, same bill, opposite direction, and neither of them is about the thing you touched."}'></div>

  <p>Now the same insert at three different addresses, so the three prices sit on one frame instead of in your memory.</p>

  <div class="board" data-anim='{"type":"race","title":"The same insert, priced at three addresses","speed":1500,"countLabel":" writes","legend":[["the writes you did not ask for","bad"],["the one write you asked for","found"],["untouched","idle"]],"tracks":[{"label":"At the front","data":["Ada","Ben","Cara","Dev","Eli","Fay","Gus","Hana","Ivo","Jai"]},{"label":"At box 3","data":["Ada","Ben","Cara","Dev","Eli","Fay","Gus","Hana","Ivo","Jai"]},{"label":"At the end","data":["Ada","Ben","Cara","Dev","Eli","Fay","Gus","Hana","Ivo","Jai"]}],"steps":[{"badge":"same row, same new name","lanes":[{"look":[0],"count":0},{"look":[3],"count":0},{"look":[9],"count":0}],"say":"One row of ten, one name to add, three different addresses. <b>Nothing about the name changes between the lanes.</b>"},{"badge":"count the writes you did not ask for","lanes":[{"bad":[0,1,2,3,4,5,6,7,8,9],"count":11},{"bad":[3,4,5,6,7,8,9],"count":8},{"found":[9],"count":1}],"say":"<b>Eleven, eight, one.</b> Best case is one write at any size. Worst is every box in the row. Average is about half of it, which is Lesson 2.3 handing you three readings of one operation."}],"caption":"Best, average and worst, produced by moving one thing: where you inserted. This is the only lesson in the chapter where all three readings come from one board."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What a move actually is.</div>

  <div class="viz" data-viz='{"type":"seq","title":"What a move actually is","actors":[{"label":"The row","kind":"gold"},{"label":"Box 9","kind":"accent"},{"label":"Box 10","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"read what is in you","style":"gold"},{"from":1,"to":0,"label":"Jai","style":"green"},{"from":0,"to":2,"label":"write Jai into yourself"},{"from":2,"to":0,"label":"done","style":"green"}],"caption":"A move is a read and then a write, and the box you copied out of still holds its old copy. Nothing erased it. That is the mechanism behind a deleted file you can sometimes still recover, and behind the last box of a shortened row still holding its old name."}'></div>

  <p>A move is a read and then a write, and once you know that, two things stop being surprising. <strong>The box you copied out of still holds its old copy.</strong> Nothing erased it; it sits there holding a value nobody reads any more until some later write happens to land on it. That is the mechanism behind a deleted file you can sometimes still recover, and behind the last box of a shortened row still holding a name that is no longer in the list.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Four ways to delete, and three of them are cheap.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The way</th><th>What it costs</th><th>The condition it demands</th></tr>
    <tr><td>Close the gap</td><td>one write per box behind the hole</td><td>The order has to stay exactly as it is</td></tr>
    <tr><td>Swap the last one into the hole</td><td>one write, at any size</td><td>Nothing may depend on the order</td></tr>
    <tr><td>Mark it dead and skip it when reading</td><td>nothing now, and every read pays a little forever</td><td>You must be willing to hold boxes that are no longer live</td></tr>
    <tr><td>Rebuild the row filtered</td><td>one pass over everything</td><td>You are deleting many at once, so every other delete of the day rides along free</td></tr>
  </table>
  <div class="tbl-cap">Only the swap gives up the order. Rows one, three and four all preserve it, and row four is the one that turns many expensive deletes into one cheap pass. That is Lesson 2.3 fourth reading, amortised cost, and Lesson 3.3 is where it gets a whole lesson of its own.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which delete are you allowed to use","maxChars":17,"nodes":[{"id":"q","label":"Does anything depend on the order?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"c","label":"Close the gap. One write per box behind it","col":0,"row":1,"kind":"accent"},{"id":"s","label":"Swap the last one into the hole. One write, any size","col":2,"row":1,"kind":"gold"},{"id":"m","label":"Or mark it dead and skip it when reading","col":2,"row":2,"kind":"muted"}],"edges":[{"from":"q","to":"c","label":"yes"},{"from":"q","to":"s","label":"no","style":"green"},{"from":"s","to":"m","label":"or"}],"caption":"The contract forbids holes. It never said the things had to be in any particular order, and the swap is what you get for noticing that. It is the cheapest delete there is and almost nobody is taught it."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Count them, then read them as three readings.</div>
  <p>At the end, with a spare box waiting: one write, at ten names and at five hundred and at a million. At box 3 of a row of ten: eight. At the front of that same row: eleven. Now the same three questions on a row of five hundred: one, 498, and 501.</p>

  <div class="viz" data-viz='{"type":"card","title":"Adding one name, priced by where","eyebrow":"BOX WRITES","width":500,"rows":[{"k":"At the end, with a spare box ready","v":"1 write","tone":"good","bar":0.002},{"k":"At box 3 of a row of 10","v":"8 writes","bar":0.016},{"k":"At the front of a row of 10","v":"11 writes","bar":0.022},{"k":"At the front of a row of 500","v":"501 writes","tone":"bad","bar":1},{"k":"At the end of a row of 500","v":"1 write","tone":"good","bar":0.002}],"caption":"Every bar is drawn against a scale of 501 writes. The first and last rows are the same operation on rows fifty times apart in size, and they cost the same, because nothing sits behind the end."}'></div>

  <p>Read those the way Lesson 2.3 taught you. <strong>Best is one. Worst is every box in the row. Average is about half of it</strong>, and all three come from one operation with one thing varying: where. The name for the worst and the average, now that you have counted them, is <em class="g">O(n)</em>, and the name for appending to the end is <em class="g">O(1)</em>.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five gaps you have opened or closed this week.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Opening and closing gaps, in five places you use","unit":162,"nodes":[{"id":"c","label":"Opening or closing a gap","x":2,"y":1,"kind":"dark"},{"id":"s","label":"A spreadsheet renumbering every row below","x":0,"y":0,"kind":"gold"},{"id":"e","label":"An editor keeping a deliberate hole at your cursor","x":0,"y":2,"kind":"accent"},{"id":"f","label":"A deleted file whose bytes are still there","x":4,"y":0,"kind":"box"},{"id":"d","label":"Dragging to reorder, which is a delete and an insert","x":4,"y":2,"kind":"box"},{"id":"q","label":"A queue that shuffles every time it is served","x":2,"y":3,"kind":"box"}],"edges":[{"from":"c","to":"s","label":"paid in public","style":"gold"},{"from":"c","to":"e","label":"refused on purpose"},{"from":"c","to":"f","label":"never actually erased"},{"from":"c","to":"d","label":"two shuffles"},{"from":"c","to":"q","label":"Chapter 5 fixes this"}],"caption":"The editor is the interesting one. Typing a character in the middle of a document would rewrite everything after it, so editors keep a deliberate hole where your cursor is and move the hole rather than the text."}'></div>

  <p>Insert a row in a spreadsheet and every row below it renumbers in front of your eyes: that is the shuffle paid in public, and it is fine at the sizes people usually work at even though a modern sheet will hold over a million rows. <strong>Text editors refuse to pay it entirely.</strong> Typing one character in the middle of a document would rewrite everything after it, so an editor keeps a deliberate hole where your cursor is and moves the hole instead of the text.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences priced by what sits behind an address.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"Adding a task at the top lags, adding at the bottom is instant"</td><td>The same operation, two prices</td><td>Everything behind the chosen address is being rewritten, and behind the bottom there is nothing</td></tr>
    <tr><td>"The import gets slower the further into it we get"</td><td>Cost climbing during one run</td><td>Each record is placed into a sorted row, so the row it has to move grows as the import proceeds</td></tr>
    <tr><td>"Can we keep the list sorted as things come in?"</td><td>A request to insert in the middle, forever</td><td>Every arrival lands mid row, so about half the row is rewritten on each one</td></tr>
    <tr><td>"Deleting a row is just as slow as adding one"</td><td>Two opposite operations, one price</td><td>Opening a gap and closing one are the same shuffle in opposite directions</td></tr>
    <tr><td>"We deleted thousands of records and the storage never went down"</td><td>A delete that freed nothing</td><td>The boxes were marked dead rather than removed, which is row three of the table above working exactly as designed</td></tr>
    <tr><td>"It got slower after we let people drag items to reorder"</td><td>One gesture, two shuffles</td><td>A drag is a delete and an insert, so it is priced twice, and both prices depend on where</td></tr>
  </table>
  <div class="tbl-cap">Every row here is priced by the same number: how many boxes sit behind the address that was touched. Nothing on this list is priced by the thing being added or removed.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Four times the data, sixteen times the work.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our contacts sync imports the same one percent of new contacts it always has. Last year it took about two minutes. This week it took over half an hour. We have not deployed anything to it in a year."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"The same one percent, and now it runs until nine in the morning","lanes":[{"label":"The team"},{"label":"You"},{"label":"The sync"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Same one percent, nothing deployed, minutes became half an hour"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: priced per arrival, or per row already there?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"Each arrival is placed in sorted position"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"So each one moves about half the rows"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"5,000 rows: 50 arrivals, 125,000 moves"},{"id":"c3","lane":2,"col":3,"kind":"bad","label":"20,000 rows: 200 arrivals, 2,000,000 moves"},{"id":"b3","lane":1,"col":4,"kind":"accent","label":"Append unsorted, sort once at the end"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"b1","to":"b2","style":"green"},{"from":"c2","to":"c3"},{"from":"b2","to":"b3","style":"green","label":"stop paying per arrival"}],"caption":"Four times the contacts and sixteen times the work, which is the four times line from Lesson 2.2 arriving in a sync job. Nobody deployed anything and nothing regressed."}'></div>

  <p><strong>The sync was always priced per contact already in the list, not per contact arriving.</strong> Each new contact is placed in sorted position, so every arrival lands somewhere in the middle and moves about half the rows. Last year: 5,000 contacts, fifty arrivals, about 2,500 moves each, roughly 125,000 row moves. Now: 20,000 contacts, two hundred arrivals, about 10,000 moves each, roughly 2,000,000. Four times the contacts and sixteen times the work. The fix is to append unsorted and sort once at the end, which turns two million moves into one pass.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked one question: <strong>is this priced per thing arriving, or per thing already there?</strong> The complaint says the arriving share never changed, which rules out every explanation about volume immediately. Only a cost that tracks the existing list can grow sixteen times while the input grows four.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, no code and no counting tricks</div>
    <p>Line up twelve books on a table, spines touching, no gaps. <strong>Round one:</strong> add a thirteenth at the third position and leave them all touching, counting every single lift. <strong>Round two:</strong> put a book on the end instead, and count. <strong>Round three:</strong> take the third book out and close the row up, counting lifts. <strong>Round four:</strong> take the third book out and move the last book into its place instead. Round four is the swap, and the moment your hands do it once you will never forget that it exists.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">Adding to the end of a list is instant and adding to the front lags. Both add one item. Why?</div>
    <div class="opt" data-i="0">The front of a row is stored in slower memory</div>
    <div class="opt" data-i="1">Adding at the front has to recalculate every address</div>
    <div class="opt" data-i="2">Everything behind the chosen position has to be rewritten, and behind the end there is nothing</div>
    <div class="qexp">The addresses never change: box 3 stays box 3 and the numbers underneath the boxes never moved in the animation. What travels is the contents. An insert costs one write per box sitting behind the address you picked, which is why the end is free and the front is the whole row.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">A team needs to delete one item from a large row and nothing depends on the order. What is the cheapest correct delete?</div>
    <div class="opt" data-i="0">Close the gap by shifting everything forward</div>
    <div class="opt" data-i="1">Move the last item into the hole and lower the count</div>
    <div class="opt" data-i="2">Mark it dead and skip it on every future read</div>
    <div class="qexp">The contract forbids holes. It never said the items had to be in any particular order, so filling the hole with the last item satisfies the clause in one write at any size. Option two is real and useful, and it charges a little on every read forever, which is a worse deal when order genuinely does not matter.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Both boards in this lesson quietly assumed a spare box was waiting at the end. Next: what happens when there is not one, which is the third clause and the most expensive of the four. An array is fast because it is rigid, and this is the bill.</p>
  </div>
__NAV__
</div>`,

"3.3": `<div class="wrap">
  <div class="les-kicker">Chapter 3 · Lesson 3.3</div>
  <h1 class="les-title">Growing an Array: The Doubling Trick</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~12 min</span>
    <span class="pill gold">no code needed</span><span class="pill">11 visuals</span>
  </div>

  <p class="motto">A row does not grow. It is quietly replaced by a longer one wearing its name, and you pay for the move in boxes.</p>

  <p class="lead">Lesson 3.1 said a run never moves while you hold it, and then added, quietly, that a row which outgrows its run gets replaced by a longer one somewhere else. <strong>This lesson is that second half itemised.</strong> By the end you can price any growing list, name the one number that decides whether it is cheap or ruinous, and spot the two bills that no counter in this course prints. The same rigidity, and an array is still fast because of it, presenting a different bill.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Two seats were needed and twenty people stood up.</div>
  <p>The wedding party booked row J, twenty seats in one unbroken run, all taken. Two more guests confirm on the morning of. <strong>Nobody adds two seats to row J.</strong> Row I is sold, row K is sold, and the seats either side are bolted to the floor and belong to other people.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Two seats were needed and twenty people stood up","width":740,"height":260,"items":[{"icon":"person","x":118,"y":118,"kind":"gold","label":"row J: twenty seats, all taken"},{"icon":"shelf","x":404,"y":120,"kind":"accent","label":"row M: forty seats, empty"},{"icon":"person","x":662,"y":118,"kind":"bad","label":"twenty walk across, two more join"}],"arrows":[{"x1":176,"y1":118,"x2":336,"y2":118,"style":"gold","label":"two more guests confirm"},{"x1":470,"y1":118,"x2":598,"y2":118,"style":"green","label":"the whole party moves"}],"caption":"Nobody adds two seats to row J. Row I is sold, row K is sold, and the seats either side are bolted down and belong to other people. So twenty guests stand up and walk, and the two new ones sit down beside them."}'></div>

  <p>So the venue does the only thing it can. It moves the party to row M, which has forty seats. Twenty guests stand up and walk across, and the two new ones sit down beside them. <strong>Two seats were needed and twenty two people ended up in a different row</strong>, and anybody who wrote down "the Sharmas are in row J" is now holding a wrong note that nobody will correct.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">The clause, itemised.</div>
  <p>There is no operation anywhere that makes a claimed stretch longer where it stands. The request is not slow. <strong>It is refused</strong>, and it is refused every time, forever, because the boxes immediately after your run belong to somebody else.</p>

  <div class="viz" data-viz='{"type":"arch","title":"One request refused, and the three bills that follow","maxChars":15,"nodes":[{"id":"a","label":"A full row, claimed and in use","col":0,"row":1,"kind":"dark"},{"id":"b","label":"Make this stretch longer where it stands","col":1,"row":0,"kind":"bad"},{"id":"c","label":"Refused. The boxes after it belong to somebody else","col":2,"row":0,"kind":"bad"},{"id":"d","label":"Claim a longer stretch somewhere else","col":1,"row":1,"kind":"accent"},{"id":"e","label":"The copy bill: every item carried across","col":2,"row":1,"kind":"accent"},{"id":"f","label":"The peak bill: both rows alive at once","col":2,"row":2,"kind":"accent"},{"id":"g","label":"The address bill: anybody holding the old place is now wrong","col":3,"row":2,"kind":"gold"}],"edges":[{"from":"a","to":"b"},{"from":"b","to":"c","label":"always"},{"from":"a","to":"d","style":"green"},{"from":"d","to":"e"},{"from":"d","to":"f"},{"from":"f","to":"g"}],"caption":"Lesson 3.1 said a run never moves while you hold it, and then quietly added that a row which outgrows its run gets replaced by a longer one somewhere else. This lesson is that second half itemised."}'></div>

  <p>So what happens is a replacement, and it sends three bills. <strong>The copy bill</strong>: every item is carried across. <strong>The peak bill</strong>: for the length of the copy, both rows are alive and you hold all of it. <strong>The address bill</strong>: anybody who wrote down where the row lived is now holding the location of nothing, and no message is sent when it happens.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Two lanes, and they are not two methods.</div>
  <p>The top lane is the row you already have, holding six guests with no spare. The bottom lane is the row that will replace it. One unit on this board: boxes written.</p>

  <div class="board" data-anim='{"type":"race","title":"A row cannot grow, so watch it get replaced","speed":1600,"countLabel":" boxes written","legend":[["being read or written now","look"],["written into the new row","seen"],["claimed and empty","range"],["the same data, twice","bad"],["not yours","dead"]],"tracks":[{"label":"The row you have, 6 boxes","data":["Ada","Ben","Cara","Dev","Eli","Fay","","","","","",""]},{"label":"The row that will replace it","data":["Ada","Ben","Cara","Dev","Eli","Fay","","","","","",""]}],"steps":[{"badge":"6 guests, 6 boxes, full","lanes":[{"seen":[0,1,2,3,4,5],"dead":[6,7,8,9,10,11]},{"dead":[0,1,2,3,4,5,6,7,8,9,10,11]}],"say":"Six guests, six boxes, and the row is full. <b>The faded boxes on the top lane are not spare room.</b> They are memory belonging to somebody else, and that single fact is the whole lesson."},{"badge":"the request is refused, not slow","lanes":[{"seen":[0,1,2,3,4,5],"dead":[6,7,8,9,10,11]},{"range":[0,11],"dead":[0,1,2,3,4,5,6,7,8,9,10,11]}],"say":"A seventh guest arrives. Making the stretch longer where it stands is <b>refused rather than slow</b>, so twelve boxes are claimed somewhere else entirely."},{"badge":"1 box written","lanes":[{"look":[0],"seen":[1,2,3,4,5],"dead":[6,7,8,9,10,11],"count":1},{"range":[0,11],"seen":[0],"dead":[1,2,3,4,5,6,7,8,9,10,11],"count":1}],"say":"Ada is read from the old row and written into the new one. <b>The counter moved because a box was written</b>, not because a name was read."},{"badge":"4 boxes written","lanes":[{"look":[3],"seen":[0,1,2,4,5],"dead":[6,7,8,9,10,11],"count":4},{"range":[0,11],"seen":[0,1,2,3],"dead":[4,5,6,7,8,9,10,11],"count":4}],"say":"There is no shortcut past this and there never will be, because the new stretch is somewhere else and every item has to travel."},{"badge":"7 boxes written to add 1 guest","lanes":[{"seen":[0,1,2,3,4,5],"dead":[6,7,8,9,10,11],"count":6},{"range":[0,11],"seen":[0,1,2,3,4,5],"look":[6],"dead":[7,8,9,10,11],"count":7}],"say":"The sixth copy lands, and only now does the seventh guest get written. <b>Seven boxes written to add one guest</b>, and the six appends before this one cost one each."},{"badge":"18 boxes held for 7 guests","lanes":[{"bad":[0,1,2,3,4,5],"dead":[6,7,8,9,10,11]},{"range":[0,11],"seen":[0,1,2,3,4,5,6],"dead":[7,8,9,10,11]}],"say":"Count what belongs to you at this instant: six boxes on top and twelve underneath. <b>Eighteen boxes holding seven guests</b>, and the old stretch cannot be released until the last copy has landed. That is the peak."},{"badge":"anybody holding the old address is now wrong","lanes":[{"dead":[0,1,2,3,4,5,6,7,8,9,10,11]},{"range":[0,11],"seen":[0,1,2,3,4,5,6],"dead":[7,8,9,10,11]}],"say":"Now the old stretch is released. <b>Anything that wrote down where the guest list lived is holding the location of nothing</b>, and no message is sent when this happens."},{"badge":"five boxes claimed, empty, paid for","lanes":[{"dead":[0,1,2,3,4,5,6,7,8,9,10,11]},{"range":[0,11],"found":[0,1,2,3,4,5,6],"dead":[7,8,9,10,11]}],"say":"Five empty boxes at the end, claimed and paid for. <b>Immediately after a double a row is close to half empty by design</b>, and that emptiness is what buys the next five appends at one write each. Nobody has ever been paged about memory they claimed and did not use."}],"caption":"Seven boxes written to add one guest, and the six appends before it cost one each. The whole argument of this lesson is that those two facts are the same fact seen at two moments."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Eight messages, and the last two are the ones that bite.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Eight messages, and the last two are the ones that bite","actors":[{"label":"The program","kind":"gold"},{"label":"Memory","kind":"accent"},{"label":"A note kept elsewhere","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"make the stretch at 4000 longer","style":"gold"},{"from":1,"to":0,"label":"refused. The boxes after it are taken"},{"from":0,"to":1,"label":"then claim me twelve boxes anywhere","style":"gold"},{"from":1,"to":0,"label":"granted, starting at 9000","style":"green"},{"from":0,"to":0,"label":"copy all six across"},{"from":0,"to":1,"label":"release the old stretch at 4000"},{"from":0,"to":2,"label":"the list now lives at 9000","style":"gold"},{"from":2,"to":0,"label":"nobody else was told","style":"gold"}],"caption":"Four of these eight are the claim and the copy, which is the part everybody pictures. The first two are the refusal nobody sees, and it is not a failure and nothing is logged. The last two are the bill that arrives as wrong answers rather than as slowness."}'></div>

  <p>The first two are the request nobody thinks to make and the refusal nobody sees. <strong>That refusal is not a failure and nothing is logged anywhere.</strong> It is the only possible answer, every time. The last two are the interesting ones: the list moved, and the only thing that knows is the thing holding the list. Every other note about where it lived is now wrong, silently.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Five growth rules, priced on a thousand items.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The growth rule</th><th>Boxes written for 1,000 items</th><th>The condition it demands</th></tr>
    <tr><td>Claim it once, exact size</td><td>1,000</td><td>You must know the final count before the first item arrives</td></tr>
    <tr><td>Add one box each time</td><td>500,500</td><td>Nothing at all, which is exactly why it gets written</td></tr>
    <tr><td>Add a hundred boxes each time</td><td>about 5,500</td><td>Nothing, and it is still on the same line as the row above</td></tr>
    <tr><td>Double when full</td><td>2,023</td><td>You accept holding up to twice the boxes your data needs</td></tr>
    <tr><td>Grow by half when full</td><td>about 2,500</td><td>The same deal, with less waste and slightly more copying</td></tr>
  </table>
  <div class="tbl-cap">Rows two and three are the same shape at two sizes. A bigger chunk divides the bill by the chunk and leaves the line exactly where it stood, which is why raising it looks like a fix for about a month.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which growth rule are you allowed to use","maxChars":20,"gx":50,"nodes":[{"id":"q1","label":"Do you know the final count before the first item arrives?","col":0,"row":3,"kind":"gold","shape":"diamond"},{"id":"exact","label":"Claim it once at the exact size. 1,000 writes and no copy at all","col":1,"row":1,"kind":"accent"},{"id":"skip","label":"Then none of the three bills is ever sent to you","col":2,"row":0,"kind":"muted"},{"id":"q2","label":"Can you hold up to twice the boxes your data needs?","col":1,"row":4,"kind":"gold","shape":"diamond"},{"id":"dbl","label":"Double when full. 2,023 writes, and a flat cost per append","col":2,"row":2,"kind":"accent"},{"id":"q3","label":"Can you spare half again the boxes your data needs?","col":2,"row":5,"kind":"gold","shape":"diamond"},{"id":"half","label":"Grow by half when full. About 2,500 writes, less waste held","col":3,"row":4,"kind":"accent"},{"id":"fixed","label":"A fixed chunk. The bill divided, the line untouched","col":3,"row":6,"kind":"bad"}],"edges":[{"from":"q1","to":"exact","label":"yes","style":"green"},{"from":"q1","to":"q2","label":"no"},{"from":"exact","to":"skip","label":"and stop here"},{"from":"q2","to":"dbl","label":"yes","style":"green"},{"from":"q2","to":"q3","label":"no"},{"from":"q3","to":"half","label":"yes","style":"green"},{"from":"q3","to":"fixed","label":"no"}],"caption":"Every count is boxes written for a thousand items. The first question is the only one that removes the bill instead of shrinking it, so ask it before you argue about any growth rule at all. Doubling and growing by half are the same trade at two prices: one holds more spare boxes and copies less, the other holds less and copies more. The red node is where a fixed chunk lands whatever chunk you pick, because dividing a bill by a hundred leaves it on the line it was already on."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Count it before you name it.</div>
  <p>Sixteen items appended into a row that starts with one box. Adding one box each time: 120 copies plus 16 writes, so 136 boxes written. Doubling when full: 15 copies plus 16 writes, so 31. Now a thousand items. One at a time: 499,500 copies plus 1,000 writes. Doubling: <strong>1,023 copies plus 1,000 writes, which is the 1,023 Lesson 2.3 already handed you</strong>, and it works out at about two boxes written per item and never drifts.</p>

  <div class="board" data-anim='{"type":"curve","title":"Two growth rules, one job, one unit","width":650,"height":300,"n":40,"logScale":true,"speed":1700,"xlabel":"items appended","ylabel":"boxes written","series":[{"fn":"n2","color":"bad","label":"add one box each time","label2":"O(n squared) writes"},{"fn":"n","color":"green","label":"double when full","label2":"O(n) writes, so O(1) each"}],"steps":[{"show":[0],"pct":100,"badge":"add one box each time","say":"Grow by one box whenever the row fills, and every single append copies everything stored so far."},{"show":[0,1],"pct":100,"badge":"double when full","say":"Double when full instead, and <b>each copy is paid for by twice as many cheap appends as the last one</b>, which is Lesson 2.3 fourth reading doing its job."},{"show":[0,1],"pct":100,"badge":"1,000 items","say":"A thousand items: 500,500 boxes written one at a time, against 2,023 by doubling. <b>Same job, same unit, two hundred and forty times the bill.</b>"},{"show":[0,1],"pct":100,"notation":true,"badge":"the names, last","say":"Both names now, on lines you already read. And notice the green one: <b>total writes grow in step with the items</b>, so the cost per append is flat no matter how large the row gets."}],"caption":"A fixed chunk instead of one box divides the red bill by the chunk size and leaves the shape exactly where it stood. Only a growth rule that scales with the row itself changes the line."}'></div>

  <div class="viz" data-viz='{"type":"card","title":"Appending a thousand items, two rules","eyebrow":"BOXES WRITTEN","badge":"1,000 items","width":510,"rows":[{"k":"Claim it once at the exact size","v":"1,000","tone":"good","bar":0.002},{"k":"Double when full","v":"2,023","tone":"good","bar":0.004},{"k":"Add 100 boxes each time","v":"about 5,500","bar":0.011},{"k":"Add one box each time","v":"500,500","tone":"bad","bar":1},{"k":"Boxes held, empty, right after a double","v":"up to half the row","tone":"bad","bar":0.5}],"caption":"Every bar is drawn against a scale of 500,500 boxes. Row three is the trap: a bigger chunk divides the bill by a hundred and leaves it on exactly the same line, so it looks fixed until the data grows again."}'></div>

  <p>The last row of that card is the bill with no counter. <strong>Immediately after a double, a row is close to half empty by design</strong>, and that emptiness is not waste, it is what buys the next run of appends at one write each. Lesson 2.4 taught you space is a second meter. This is that meter charging you, in advance, for a time saving you have already banked.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places this is running right now.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"One mechanism, five places you depend on it","unit":164,"nodes":[{"id":"c","label":"A row that outgrew its stretch","x":2,"y":1,"kind":"dark"},{"id":"a","label":"A growable list in almost any language","x":0,"y":0,"kind":"accent"},{"id":"h","label":"A hash table rebuilding when it gets too full","x":0,"y":2,"kind":"box"},{"id":"t","label":"Text built up piece by piece","x":4,"y":0,"kind":"box"},{"id":"b","label":"A buffer that doubles as a file streams in","x":4,"y":2,"kind":"box"},{"id":"r","label":"Reserving the size in advance, and skipping all of it","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"a","label":"grows by a factor"},{"from":"c","to":"h","label":"Chapter 8"},{"from":"c","to":"t","label":"copy on every join"},{"from":"c","to":"b","label":"doubles as it reads"},{"from":"c","to":"r","label":"the whole bill, refused","style":"gold"}],"caption":"Most mainstream languages grow a list by a factor rather than by a fixed amount, and they promise you a flat cost per append rather than a specific rule. The gold node is the one you control: say the size up front and none of this happens to you."}'></div>

  <p>Most mainstream languages grow a list by a factor rather than by a fixed amount, and what they promise you in the documentation is a flat cost per append rather than any particular rule. A hash table is the same mechanism with a different trigger, rebuilding itself once it gets too full, which is Chapter 8 with this lesson underneath it. <strong>And the gold node is the one you control.</strong> Say the size up front and none of this happens to you at all.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the bill inside each.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"Saving is instant, except every so often one save takes ages"</td><td>Mostly cheap, occasionally enormous</td><td>The copy bill. Something filled up and copied itself, and one caller paid for everybody</td></tr>
    <tr><td>"Memory doubles for a moment and then settles, and we cannot find a leak"</td><td>A spike that resolves itself</td><td>The peak bill. Both rows were alive at the same instant during a copy, and nothing leaked</td></tr>
    <tr><td>"Importing 100,000 rows takes far longer than ten imports of 10,000"</td><td>One long run beaten by ten short ones</td><td>The copy bill again. One long run regrows a large row many times, and each regrow copies more</td></tr>
    <tr><td>"It saved fine, but something else is still showing the old data"</td><td>Two readers disagreeing after a write</td><td>The address bill. Nobody sends a message when a row is replaced, so an old note still points at the old place</td></tr>
    <tr><td>"It gets slower the further into the job we get"</td><td>Cost climbing within one run</td><td>Each regrow copies everything stored so far, so the bill climbs as the row does</td></tr>
    <tr><td>"We raised the chunk size to 10,000 and it is still slow"</td><td>A constant tuned, a shape unchanged</td><td>A fixed chunk divides the bill and keeps the line exactly where it was. The fix is a rule that scales with the row</td></tr>
  </table>
  <div class="tbl-cap">Rows one, two and four are the three bills of block 2 in the words people actually use. Row six is the one worth memorising, because tuning a constant is the most common way a team convinces itself it has fixed a shape.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Three times the file, nine times the job.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our bulk importer used to take about four minutes. A customer onboarded with a bigger file this week and it now takes over half an hour. The file is only about three times bigger. We have not touched the importer in two years."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Three times the file, nine times the job","lanes":[{"label":"Support"},{"label":"You"},{"label":"The importer"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Three times the rows, nine times the time"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: what is the growth rule?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"Regrows by a fixed 1,000 boxes"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"A fixed chunk keeps it on the four times line"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"200,000 rows: 199 regrows, 19.9 million copies"},{"id":"c3","lane":2,"col":3,"kind":"bad","label":"600,000 rows: 599 regrows, 179.7 million copies"},{"id":"b3","lane":1,"col":4,"kind":"accent","label":"Double instead, or claim the size up front"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"b1","to":"b2","style":"green"},{"from":"c2","to":"c3"},{"from":"b2","to":"b3","style":"green","label":"change the rule, not the chunk"}],"caption":"Three times the rows and nine times the copies, which is the four times line from Lesson 2.2 with the ratios worked through. The importer has been on this line since the day it was written and nobody noticed while the files were small."}'></div>

  <p><strong>The growth rule is the bug, and it has been the bug since the day it was written.</strong> The importer builds the whole file into one row in memory and regrows that row by a fixed 1,000 boxes each time it fills. At 200,000 rows that is 199 regrows and about 19.9 million boxes copied. At 600,000 rows it is 599 regrows and about 179.7 million. Three times the file and nine times the copying, exactly what the four times line promises. The fix is not a bigger chunk. It is a growth rule that scales with the row, or better, claiming the size up front from the file.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It never asked what changed, because nothing did. It asked <strong>what is the growth rule</strong>, which is a question about a line of code written two years ago rather than about anything that happened this week. Three times the input producing nine times the work names its own shape before you open a single file.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, no code</div>
    <p>Find a shelf that is exactly full, twenty books, with the shelves above and below full too. Now add a twenty first. You cannot widen the shelf, so find one that takes forty, carry all twenty across, and put the new one down. <strong>Count the lifts: twenty one, not one.</strong> Then look at the empty half of the new shelf and say out loud what it just bought you, which is the next nineteen books at one lift each. Finally, work out both totals for filling a forty book shelf from empty: once by carrying everything to a bigger shelf every single time, and once by doubling.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A team raises their list growth from a fixed 1,000 boxes to a fixed 10,000 and the import is still slow at large sizes. Why?</div>
    <div class="opt" data-i="0">Ten thousand is still too small and should be raised again</div>
    <div class="opt" data-i="1">A fixed chunk divides the bill by the chunk and leaves the growth shape exactly where it was</div>
    <div class="opt" data-i="2">The slowness is not caused by growth at all</div>
    <div class="qexp">This is Lesson 2.1 coupon argument arriving in a growth rule. A bigger chunk changes what one regrow costs and never how the total climbs, so it looks fixed until the data grows again and then behaves exactly as before. Only a rule that scales with the row itself moves the line, which is why doubling exists.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">Right after a doubling, a row holds close to twice the boxes its data needs. Is that a bug?</div>
    <div class="opt" data-i="0">Yes, memory that is claimed and unused should always be released</div>
    <div class="opt" data-i="1">Yes, unless the language documents it</div>
    <div class="opt" data-i="2">No. That empty half is what buys the next run of appends at one write each, and it is the second meter charging in advance for a time saving already banked</div>
    <div class="qexp">Releasing it would mean claiming and copying again on the very next append, which is the expensive line this lesson exists to avoid. It is a real cost and it is deliberate, which is exactly the distinction Lesson 2.4 was teaching: a bill you chose is not the same thing as a bill you did not notice.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Three clauses have now sent their bills. The fourth is the quietest of the four, and it is the one that decides whether reading a table is cheap in one direction and expensive in the other. The same rigidity, still presenting bills.</p>
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

  <p class="lead">By the end of this lesson you can look at any table, screen or map, name the fold somebody agreed to, and predict which direction of travel is about to be expensive. The count will not tell you. Two walks over exactly the same number of cells can differ by a large multiple, and the whole difference is which way the fold runs. An array is fast because it is rigid, and a fold is where somebody chose which direction that rigidity would favour.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">The plan on the wall, and the usher on the floor.</div>
  <p>Same hall as Lesson 3.1, different argument. The seating plan is pinned to the wall: twenty rows, twenty seats in each, and it looks exactly like the room. <strong>It is not the room.</strong> It is a sheet of paper, and the usher is the one who walks.</p>

  <div class="viz" data-viz='{"type":"scene","title":"The plan on the wall is not the room","width":740,"height":270,"items":[{"icon":"doc","x":110,"y":118,"kind":"muted","label":"the seating plan on the wall"},{"icon":"person","x":322,"y":118,"kind":"gold","label":"one stroll down row M"},{"icon":"shelf","x":500,"y":124,"kind":"accent","label":"twenty rows on the floor"},{"icon":"person","x":666,"y":118,"kind":"bad","label":"twenty walks in and out"}],"arrows":[{"x1":170,"y1":118,"x2":264,"y2":118,"style":"green","label":"looks like the room"},{"x1":560,"y1":122,"x2":614,"y2":120,"style":"gold","label":"is not the room"}],"caption":"Twenty rows of twenty seats. Handing a programme to everybody in row M is twenty seats. Collecting a ticket from seat 14 of every row is also twenty seats. Same count, and the usher will tell you they are not the same job."}'></div>

  <p>Watch him do two jobs. Hand a programme to everybody in row M: he goes in at one end, moves along, comes out the other. One stroll, twenty seats. Now collect the coat ticket from seat 14 of every row: also twenty seats, and twenty separate walks in and out. <strong>Same count, and he will tell you they are not the same job.</strong></p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">A grid is one row plus one number.</div>
  <p>Memory has been a single line of numbered boxes since Lesson 1.1 and it has never been anything else. A second dimension therefore cannot be a shape. It has to be an agreement, and the agreement is one number: <strong>how wide a row is.</strong></p>

  <div class="viz" data-viz='{"type":"arch","title":"One row, plus one number","maxChars":16,"nodes":[{"id":"q","label":"What you asked for: row 2, column 3","col":0,"row":1,"kind":"gold"},{"id":"w","label":"The only thing a grid knows: it is 6 wide","col":1,"row":0,"kind":"accent"},{"id":"m","label":"Multiply the row by the width: 12","col":1,"row":1,"kind":"box"},{"id":"a","label":"Add the column: 15","col":2,"row":1,"kind":"box"},{"id":"b","label":"Box 15 of one long row","col":3,"row":1,"kind":"dark"}],"edges":[{"from":"q","to":"m"},{"from":"w","to":"m","label":"the agreement"},{"from":"m","to":"a"},{"from":"a","to":"b","style":"green"}],"caption":"Memory has been one line of numbered boxes since Lesson 1.1 and it has never been anything else. A second dimension cannot be a shape, so it has to be an agreement, and the agreement is one number: how wide a row is."}'></div>

  <p>One word of care first, because it is about to mean two things. Lesson 3.1 used <em class="k">width</em> for the size of one box. Here it means <strong>how many boxes are in a row</strong>, which is properly called the row length or the stride, and that is the sense used for the rest of this lesson. From that one number the address falls straight out. Multiply the row by the row length, add the column, and you have a position in the one long row. Lesson 1.1 already spent a multiply and an add turning a position into an address; a grid spends one more of each turning two numbers into that position first. <strong>That is the entire cost of a second dimension.</strong></p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The same boxes, drawn as a grid and as the row they actually are.</div>

  <div class="board" data-anim='{"type":"grid","title":"Twenty four boxes, drawn twice","speed":1700,"rows":4,"cols":6,"cellW":84,"cellH":44,"flatRow":true,"rowLabels":["row 0","row 1","row 2","row 3"],"colLabels":["col 0","col 1","col 2","col 3","col 4","col 5"],"flatLabel":"the same 24 boxes, in the order memory actually holds them","steps":[{"badge":"one picture, one row","say":"Above, folded into four rows of six, which is the picture in everybody head. Below, the same twenty four in the only arrangement that exists. <b>You are never told they are the same thing. You watch it.</b>"},{"look":[[2,3]],"badge":"row 2, column 3","say":"Ask for row 2, column 3. Two things lit and nothing walked to either of them. Now read the number printed inside the gold box."},{"look":[[2,3]],"badge":"2 times 6 plus 3 is 15","say":"Two rows down, at six boxes a row, is twelve boxes travelled. Three more along is fifteen. <b>That is why the box says 15</b>, and it is the whole of the second dimension."},{"seen":[[1,0],[1,1],[1,2],[1,3],[1,4],[1,5]],"badge":"a whole row","say":"Take a whole row. In the strip below, those six sit shoulder to shoulder, <b>because the fold was placed at the end of a row and a row is what the fold keeps whole.</b>"},{"look":[[0,4],[1,4],[2,4],[3,4]],"badge":"a whole column, same count","say":"Now take a column. Same four cells. In the grid they are touching. In the strip they are boxes 4, 10, 16 and 22, with five untouched boxes between every pair."},{"look":[[1,5]],"badge":"the last box of row 1","say":"Box 11 is the end of row 1, and the fold happens immediately after it. Do not press yet. <b>Say out loud what is in the very next box along the strip.</b>"},{"look":[[1,5]],"bad":[[2,0]],"badge":"one row down, not off the end","say":"One times six plus six is twelve, and box twelve exists, so you were handed it. Lesson 3.1 showed the same silence in one dimension. <b>Two dimensions sharpen it: box 12 is inside the run</b>, so even a language that checks bounds cannot fire here. The only thing out of bounds was the column, and nothing was watching the column."},{"bad":[[0,4],[1,4],[2,4],[3,4]],"badge":"at 1,920 wide the gap is 1,920","say":"The picture has not changed and the picture is not what is being priced. At a real screen width the box below is <b>1,920 boxes further along the strip</b>, and that distance is the entire subject of the next block."}],"caption":"Every frame lights a cell in the grid and its twin in the strip at the same instant. The grid is a way of talking. The strip is the thing that exists."}'></div>

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
    <tr><td>"The value is right, but it belongs to the row below"</td><td>A plausible wrong answer, not an error</td><td>The walk ran past the end of a row. Nothing is out of bounds, so no guard fires, and the first cell of the next row arrives looking perfectly normal</td></tr>
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

  <p class="lead">This is the lesson where the chapter becomes a method. By the end you can look at a list you did not build, ask three questions, and name which of the four bills it is about to send. You will also be able to read the limits in the products you use as decisions rather than as laziness, which is a genuinely different way to look at software. Another bill from the same rigidity, and this array pays it without anybody asking.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Three screens said no to you this week.</div>
  <p>A results page gave you fifty and put a button at the bottom. An undo history let you go back a long way and then stopped, and the step you wanted was one past where it stopped. A pin list let you pin five conversations and greyed out the sixth, with no explanation and no setting.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Three screens that said no to you this week","width":740,"height":260,"items":[{"icon":"phone","x":124,"y":122,"kind":"accent","label":"fifty results, then a button"},{"icon":"phone","x":370,"y":122,"kind":"gold","label":"undo goes back this far and no further"},{"icon":"phone","x":616,"y":122,"kind":"bad","label":"you can pin five, and the sixth is grey"}],"caption":"None of these is a missing feature and none of them is laziness. Each one is somebody who priced a row of boxes and decided which bill they were not willing to pay, and then never told you which."}'></div>

  <p>None of those is a missing feature. <strong>Every one is somebody who priced a row of boxes and decided which bill they were not willing to pay</strong>, and then shipped the decision without telling you which one it was. By the end of this lesson you will be able to tell.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">An audit, not a choice.</div>
  <p>Nobody chooses a row of boxes. You inherit one, on your second day, inside a feature somebody shipped four years ago, and then the usage changes and the contract does not. So the skill here is not choosing. It is auditing, and the audit is four questions, one per clause.</p>

  <div class="viz" data-viz='{"type":"flow","title":"The audit, four questions, one clause each","maxChars":17,"nodes":[{"id":"r","label":"Any list you inherited","col":0,"row":1,"kind":"dark"},{"id":"q1","label":"Is the count stable, or does it follow your customers?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"q2","label":"Do things arrive at the end, or in the middle?","col":1,"row":1,"kind":"gold","shape":"diamond"},{"id":"q3","label":"Is one box a value, or an address to somewhere else?","col":1,"row":2,"kind":"gold","shape":"diamond"},{"id":"q4","label":"Who else wrote down where this row lives?","col":1,"row":3,"kind":"gold","shape":"diamond"},{"id":"a","label":"The copy bill: claimed in advance","col":2,"row":0,"kind":"accent"},{"id":"b","label":"The shuffle bill: side by side","col":2,"row":1,"kind":"accent"},{"id":"c","label":"The trips bill: same width","col":2,"row":2,"kind":"accent"},{"id":"d","label":"The stale position bill: it does not move","col":2,"row":3,"kind":"accent"}],"edges":[{"from":"r","to":"q1"},{"from":"r","to":"q2"},{"from":"r","to":"q3"},{"from":"r","to":"q4"},{"from":"q1","to":"a","style":"green"},{"from":"q2","to":"b","style":"green"},{"from":"q3","to":"c","style":"green"},{"from":"q4","to":"d","style":"green"}],"caption":"Four clauses from Lesson 3.1, four questions, four bills. Nobody chooses a row of boxes: you inherit one on your second day, inside a feature shipped four years ago, and then the usage changes and the contract does not."}'></div>

  <p><strong>Is the count stable, or does it follow your customers?</strong> That tests claimed in advance. <strong>Do things arrive at the end, or in the middle?</strong> That tests side by side. <strong>Is one box a value, or an address to somewhere else?</strong> That tests same width, and it is the one nobody asks. <strong>And who else wrote down where this row lives?</strong> That tests the fourth clause, and it is the only one of the four whose bill arrives as wrong answers rather than as slowness.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The third question, and the mechanism behind it.</div>
  <p>You met this mechanism in Lesson 3.4, walking across a grid: memory hands back a run of neighbours rather than one box. <strong>There it decided direction. Here it decides layout.</strong> Both lanes hold the same sixteen numbers and both will look at every one, and the counter is not counting looks.</p>

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

  <p>That is eight times, on the same count, on the same data, on the same machine, decided entirely by a layout choice somebody made years ago. <strong>Both rows are honestly <em class="g">O(n)</em></strong>, and the notation is doing its job rather than failing at it.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Back to the three screens, with the clause named.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Every limit you met this week, and the bill behind it","unit":162,"nodes":[{"id":"c","label":"A limit you met this week","x":2,"y":1,"kind":"dark"},{"id":"p","label":"Fifty results, then a button","x":0,"y":0,"kind":"box"},{"id":"u","label":"Undo goes back a fixed number of steps","x":0,"y":2,"kind":"box"},{"id":"n","label":"Two hundred rows a page in the admin tool","x":4,"y":0,"kind":"box"},{"id":"s","label":"A saved position that stopped pointing at the right thing","x":4,"y":2,"kind":"gold"},{"id":"e","label":"An export that has to be requested and emailed","x":2,"y":3,"kind":"box"}],"edges":[{"from":"c","to":"p","label":"refusing the copy"},{"from":"c","to":"u","label":"refusing the copy"},{"from":"c","to":"n","label":"refusing the trips"},{"from":"c","to":"s","label":"the row moved","style":"gold"},{"from":"c","to":"e","label":"refusing the claim"}],"caption":"Four clauses, four bills: the copy, the shuffle, the trips, and the one nobody names, which is a position you wrote down while the row was still where you left it."}'></div>

  <p>A results page that hands you fifty and then a button is <strong>refusing the copy</strong>: fifty is a count known in advance, so the row is claimed once and never grown. An undo history that forgets its oldest step after a fixed number is the same refusal in different clothes, a fixed set of boxes reused forever. <em class="k">An undo history with no cap at all is a different structure entirely</em>, and Chapter 4 shows you which one and how to tell from the outside. And the gold node is the fourth bill, the one nobody names: <strong>you wrote down a position, and then the row was replaced by a longer one somewhere else.</strong> The position is still a number. It just points at nothing you meant.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the clause being billed in each.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"Can we make this list unlimited?"</td><td>A cap somebody chose</td><td>Claimed in advance. Can we pay the copy bill forever, at a size our customers choose</td></tr>
    <tr><td>"The nightly report went from twenty minutes to about eighty"</td><td>Same rows, same fields, no deployment</td><td>Same width. The row got wider, not longer, so every reader of it pays more trips</td></tr>
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
</div>`,

"3.6": `<div class="wrap">
  <div class="les-kicker">Chapter 3 · Lesson 3.6</div>
  <h1 class="les-title">The Whiteboard: Arrays, Every Operation Animated</h1>
  <div class="les-meta">
    <span class="pill">whiteboard</span><span class="pill">~1.5 min</span>
    <span class="pill gold">watch, do not read</span><span class="pill">14 acts</span>
  </div>

  <p class="motto">An array is not fast. It is rigid, and rigid is the thing you paid for.</p>

  <p class="lead">The whole chapter with the prose taken out. Fourteen acts in four parts. Part 2 animates every operation an array has, one act each. <strong>Part 3 runs those same operations inside your photo app, a playlist drag, an infinite scroll, a nightly sync that ships broken, and a spreadsheet column.</strong> One of those acts is the wrong choice being made, passing review, and waiting. One rigidity, and every bill it presented, in one run.</p>
</div>

<div class="reel" data-reel='{"title":"Arrays, every operation animated","speed":1600,"caption":"Fourteen acts, about 1.5 minutes end to end. Part 2 animates every operation an array has. Part 3 runs those same operations inside your photo app, a playlist drag, an infinite scroll, a nightly sync that ships broken, and a spreadsheet column.","acts":[{"part":"Part 1 · The idea","tab":"Four clauses","title":"Act 1 · An array is not fast. It is rigid, and rigid is the thing you paid for","type":"reveal","speed":1650,"viz":{"maxChars":15,"gy":44,"nodes":[{"id":"c","label":"The contract, signed before you hand it anything","col":0,"row":1,"kind":"dark"},{"id":"w","label":"Same width","col":1,"row":0,"kind":"gold"},{"id":"s","label":"Side by side","col":1,"row":1,"kind":"gold"},{"id":"a","label":"Claimed in advance","col":1,"row":2,"kind":"gold"},{"id":"f","label":"It does not move","col":1,"row":3,"kind":"gold"},{"id":"o","label":"Any position, by one sum","col":2,"row":1,"kind":"accent"},{"id":"b1","label":"The trips bill","col":3,"row":0,"kind":"bad"},{"id":"b2","label":"The shuffle bill","col":3,"row":1,"kind":"bad"},{"id":"b3","label":"The copy bill","col":3,"row":2,"kind":"bad"},{"id":"b4","label":"The stale position bill","col":3,"row":3,"kind":"bad"}],"edges":[{"from":"c","to":"w"},{"from":"c","to":"s"},{"from":"c","to":"a"},{"from":"c","to":"f"},{"from":"s","to":"o","style":"green"},{"from":"w","to":"b1"},{"from":"s","to":"b2"},{"from":"a","to":"b3"},{"from":"f","to":"b4"}]},"steps":[{"show":["c","w"],"look":["w"],"say":"An array signs a contract before you hand it anything. <b>Same width:</b> every box exactly as wide as every other."},{"show":["c","w","s"],"look":["s"],"say":"<b>Side by side:</b> no holes, and nothing belonging to anybody else in between."},{"show":["c","w","s","a"],"look":["a"],"say":"<b>Claimed in advance:</b> the whole run granted before the first item arrives."},{"show":["c","w","s","a","f"],"look":["f"],"say":"<b>It does not move:</b> a run never shifts while you hold it. Four clauses, signed whole or not at all."},{"show":["c","w","s","a","f","o"],"found":["o"],"say":"And this is what all four bought you: <b>any position, by one sum.</b> That is the fastest thing in this entire course."},{"show":["c","w","s","a","f","o","b1","b2","b3","b4"],"bad":["b1","b2","b3","b4"],"say":"<b>And these are the four bills.</b> The next seven acts are those four arriving, one at a time, and every one of them is rigidity presenting its invoice."}]},{"part":"Part 2 · The operations","tab":"Reach a box","title":"Act 2 · Position is a sum, and zero is a distance","type":"array-scan","speed":1600,"big":true,"data":[19,74,31,60,8,45,27,93,52,11,66,38],"labels":["4000","4004","4008","4012","4016","4020","4024","4028","4032","4036","4040","4044"],"countLabel":" look","legend":[["being reached","look"],["landed on it","found"]],"steps":[{"look":[0],"ptr":{"i":0},"count":1,"badge":"4000 plus 0 times 4","say":"Box zero sits at the start address itself. <b>Zero is how far in it is, not what it is called</b>, and almost every off by one in software is somebody reading a distance as an ordinal."},{"look":[6],"ptr":{"i":6},"count":1,"badge":"4000 plus 6 times 4 is 4024","say":"Ask for box six. The marker jumps. <b>Boxes one to five were never touched</b>, because nothing walked anywhere."},{"found":[6],"ptr":{"i":6},"count":1,"badge":"1 look, any size","say":"One look, and the number of boxes was never a term in the sum. <b>Ten boxes or ten million, the same one look.</b>"}]},{"part":"Part 2 · The operations","tab":"Past the end","title":"Act 3 · The sum answers for boxes you never owned","type":"array-scan","speed":1600,"big":true,"data":[19,74,31,60,8,45,27,93,52,11,66,38],"labels":["4000","4004","4008","4012","4016","4020","4024","4028","4032","4036","4040","4044"],"countLabel":" look","legend":[["yours, claimed","range"],["being read","look"],["not yours, read anyway","bad"]],"steps":[{"range":[0,9],"badge":"ten boxes are yours","say":"The contract covers ten boxes. The pair on the right are not empty, they belong to somebody else."},{"range":[0,9],"look":[10],"ptr":{"i":10},"count":1,"badge":"4000 plus 10 times 4 is 4040","say":"Ask for position ten of a ten box row. <b>The sum does not object</b>, and there really is a box at 4040."},{"bad":[10],"dead":[0,1,2,3,4,5,6,7,8,9,11],"ptr":{"i":10},"count":1,"badge":"it returned 66","say":"<b>Nothing failed.</b> It returned an ordinary looking number belonging to somebody else, which is far worse than a crash, because a crash announces itself."},{"bad":[10],"dead":[0,1,2,3,4,5,6,7,8,9,11],"ptr":{"i":10},"count":1,"badge":"so who pays the guard?","say":"Four clauses and a sum, and <b>not one of them mentions an end.</b> Safe languages bolt a comparison on top and charge it on every read, including the millions that were never wrong."}]},{"part":"Part 2 · The operations","tab":"Make room","title":"Act 4 · Eight writes to add one thing","type":"array-scan","speed":1600,"big":true,"data":["Ada","Ben","Cara","Dev","Eli","Fay","Gus","Hana","Ivo","Jai"],"capacity":12,"countLabel":" box writes","legend":[["the box being read next","look"],["already rewritten","seen"]],"steps":[{"capacity":12,"look":[3],"ptr":{"i":3},"count":0,"badge":"the new one goes at box 3","say":"Box 3 is not empty and it cannot be emptied by asking, because <b>the no holes clause is the reason position is a sum at all.</b>"},{"capacity":12,"shift":{"from":9,"by":1},"seen":[9],"look":[8],"ptr":{"i":8},"count":1,"badge":"1 write","say":"So the work starts at the far end and rolls backwards. One write."},{"capacity":12,"shift":{"from":5,"by":1},"seen":[5,6,7,8,9],"look":[4],"ptr":{"i":4},"count":5,"badge":"5 writes","say":"<b>The empty box is walking backwards towards box 3</b>, and not one of these five writes has anything to do with the thing you are adding."},{"capacity":12,"shift":{"from":3,"by":1},"seen":[3,4,5,6,7,8,9],"ptr":{"i":3},"count":7,"badge":"7 writes, box 3 is free","say":"Seven writes. Look underneath: <b>the box numbers did not move.</b> Only the contents travelled."},{"capacity":12,"shift":{"from":3,"by":1},"seen":[3,4,5,6,7,8,9],"ptr":{"i":3},"count":8,"badge":"8 writes to add one name","say":"The eighth is the only one you asked for. <b>Seven eighths of that work was the price of the address you chose.</b>"}]},{"part":"Part 2 · The operations","tab":"Close the gap","title":"Act 5 · Delete is the same shuffle, the other way","type":"array-scan","speed":1600,"big":true,"data":["Ada","Ben","Cara","Dev","Eli","Fay","Gus","Hana","Ivo","Jai"],"countLabel":" writes","legend":[["the one being removed","bad"],["rewritten to close the gap","seen"],["moved into the hole","found"]],"steps":[{"bad":[3],"count":0,"badge":"remove box 3","say":"Take Dev out. The row still forbids holes, so the hole cannot be left there."},{"shift":{"from":4,"by":-1},"seen":[4,5,6],"count":3,"badge":"3 writes","say":"Everything behind box 3 walks one place forward. <b>Same mechanism as Act 4, running in the opposite direction.</b>"},{"shift":{"from":4,"by":-1},"seen":[4,5,6,7,8,9],"count":6,"badge":"6 writes to remove one name","say":"Six writes, priced by what sat behind the address, exactly as the insert was."},{"bad":[3],"found":[9],"count":2,"badge":"or: 2 writes","say":"<b>Unless nothing depends on the order.</b> Then move the last one into the hole and lower the count. Two writes, at any size. The contract forbids holes, it never said anything about order."}]},{"part":"Part 2 · The operations","tab":"Grow the row","title":"Act 6 · A row never grows, it gets replaced","type":"race","speed":1600,"countLabel":" boxes written","legend":[["being copied now","look"],["written into the new row","seen"],["claimed and empty","range"],["the same data, twice","bad"],["not yours","dead"]],"tracks":[{"label":"The row you have","data":["Ada","Ben","Cara","Dev","Eli","Fay","","","","","",""]},{"label":"The row that replaces it","data":["Ada","Ben","Cara","Dev","Eli","Fay","","","","","",""]}],"steps":[{"badge":"6 guests, 6 boxes, full","lanes":[{"seen":[0,1,2,3,4,5],"dead":[6,7,8,9,10,11]},{"dead":[0,1,2,3,4,5,6,7,8,9,10,11]}],"say":"The row is full. <b>The faded boxes are not spare room</b>, they are memory belonging to somebody else."},{"badge":"refused, not slow","lanes":[{"seen":[0,1,2,3,4,5],"dead":[6,7,8,9,10,11]},{"range":[0,11],"dead":[0,1,2,3,4,5,6,7,8,9,10,11]}],"say":"A seventh arrives. Making the stretch longer where it stands is <b>refused rather than slow</b>, so twelve boxes are claimed somewhere else."},{"badge":"4 boxes written","lanes":[{"look":[3],"seen":[0,1,2,4,5],"dead":[6,7,8,9,10,11],"count":4},{"range":[0,11],"seen":[0,1,2,3],"dead":[4,5,6,7,8,9,10,11],"count":4}],"say":"Every item has to travel, and there is no shortcut past it."},{"badge":"18 boxes held for 7 guests","lanes":[{"bad":[0,1,2,3,4,5],"dead":[6,7,8,9,10,11],"count":7},{"range":[0,11],"seen":[0,1,2,3,4,5,6],"dead":[7,8,9,10,11],"count":7}],"say":"Seven boxes written to add one guest. And count what you hold right now: <b>eighteen boxes for seven guests</b>, because both rows are alive until the last copy lands."},{"badge":"and nobody was told","lanes":[{"dead":[0,1,2,3,4,5,6,7,8,9,10,11]},{"range":[0,11],"found":[0,1,2,3,4,5,6],"dead":[7,8,9,10,11]}],"say":"The old stretch is released. <b>Anything that wrote down where the list lived is now holding the location of nothing</b>, and no message is sent when this happens."}]},{"part":"Part 2 · The operations","tab":"Fold the row","title":"Act 7 · There is no grid, only an agreement about where to fold","type":"grid","speed":1600,"rows":4,"cols":6,"cellW":84,"cellH":42,"flatRow":true,"rowLabels":["row 0","row 1","row 2","row 3"],"colLabels":["0","1","2","3","4","5"],"flatLabel":"the same 24 boxes, in the order memory actually holds them","steps":[{"badge":"six wide","say":"A grid is one row plus one number: how many boxes are in a row. <b>The fold is an agreement, not a shape.</b>"},{"look":[[2,3]],"badge":"2 times 6 plus 3 is 15","say":"Row 2, column 3. Two rows down at six a row is twelve, three more along is fifteen, and the box says 15."},{"seen":[[1,0],[1,1],[1,2],[1,3],[1,4],[1,5]],"badge":"a row is one unbroken run","say":"Take a whole row. In the strip below, those six sit shoulder to shoulder."},{"look":[[0,4],[1,4],[2,4],[3,4]],"badge":"a column is scattered","say":"Take a column, same four cells. In the strip they are boxes 4, 10, 16 and 22, <b>with five untouched boxes between every pair.</b>"}]},{"part":"Part 2 · The operations","tab":"Walk it twice","title":"Act 8 · Same count, same shape, eight times the journeys","type":"race","speed":1600,"countLabel":" trips","legend":[["being read now","look"],["already in hand","found"]],"tracks":[{"label":"Packed in one row","data":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]},{"label":"An address each, scattered","data":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]}],"steps":[{"badge":"one trip each","lanes":[{"look":[0],"count":1},{"look":[0],"count":1}],"say":"Sixteen numbers in both lanes, and both will look at all sixteen. <b>The counter is not counting looks.</b>"},{"badge":"the trip brought neighbours","lanes":[{"found":[0,1,2,3,4,5,6,7],"count":1},{"found":[0],"look":[1],"count":2}],"say":"A trip brings back the whole block it landed in. <b>The packed lane got eight for the price of one.</b> The scattered lane got one, because its neighbours belong to somebody else."},{"badge":"16 looks each","lanes":[{"found":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"count":2},{"found":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"count":16}],"say":"<b>Two trips against sixteen, on identical counts.</b> Every step counter in Chapter 2 reports these two as the same work."},{"badge":"both of these are O(n)","lanes":[{"found":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"count":"125,000"},{"found":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"count":"1,000,000"}],"say":"A million each. Double either and both counters double, so both are honestly the same shape, and <b>one of them is still eight times the journeys.</b>"}]},{"part":"Part 3 · The same operations, in things you used today","tab":"Recently Deleted","title":"Act 9 · This is Act 5 in your photo app","type":"array-scan","speed":1600,"big":true,"data":["p1","p2","p3","p4","p5","p6","p7","p8","p9","p10"],"countLabel":" writes","legend":[["deleted, still there","bad"],["still live","seen"]],"steps":[{"seen":[0,1,2,3,4,5,6,7,8,9],"count":0,"badge":"this is Act 5","say":"Ten photos. You delete one. <b>Act 5 said there are cheaper deletes than closing the gap</b>, and your phone picked the cheapest one there is."},{"bad":[3],"seen":[0,1,2,4,5,6,7,8,9],"count":1,"badge":"1 write, nothing reclaimed","say":"One write: it is marked deleted. <b>Nothing shuffled and the storage figure did not move</b>, because the boxes are still exactly where they were."},{"bad":[3,6,8],"seen":[0,1,2,4,5,7,9],"count":3,"badge":"three gone, still nothing reclaimed","say":"Three more deletes, three more marks. Your free space has not changed by a single byte."},{"bad":[3,6,8],"seen":[0,1,2,4,5,7,9],"count":3,"badge":"thirty days later","say":"<b>That is what Recently Deleted is.</b> The expensive part, actually reclaiming the boxes, is deferred and batched, so every other delete of that month rides along free."}]},{"part":"Part 3 · The same operations, in things you used today","tab":"Drag to reorder","title":"Act 10 · This is Act 4, and dragging to the top is the worst case","type":"array-scan","speed":1600,"big":true,"data":["t1","t2","t3","t4","t5","t6","t7","t8","t9","t10","t11","t12"],"countLabel":" writes","legend":[["being moved","look"],["rewritten","seen"]],"steps":[{"look":[11],"ptr":{"i":11},"count":0,"badge":"this is Act 4","say":"Drag the last track in a playlist to the very top. One gesture, and you already know what it costs."},{"shift":{"from":0,"by":1},"seen":[0,1,2,3,4,5],"look":[6],"count":6,"badge":"6 writes so far","say":"Everything behind the address you chose gets rewritten, and you chose the front, so <b>everything is behind it.</b>"},{"shift":{"from":0,"by":1},"seen":[0,1,2,3,4,5,6,7,8,9,10,11],"count":12,"badge":"12 writes","say":"Twelve writes to move one track. And a drag is a delete <b>and</b> an insert, so it is two shuffles rather than one."},{"look":[10],"ptr":{"i":10},"count":2,"badge":"the same drag, one from the end","say":"<b>The same gesture, dropped one place from the end: two writes.</b> Identical operation, identical track, and the only thing that changed is where you let go."}]},{"part":"Part 3 · The same operations, in things you used today","tab":"Infinite scroll","title":"Act 11 · This is Act 6 in a feed, and the stutter you feel is the copy","type":"array-scan","speed":1600,"big":true,"data":["a","b","c","d","e","f","g","h"],"capacity":12,"countLabel":" writes","legend":[["appended","found"],["already there","seen"]],"steps":[{"capacity":8,"seen":[0,1,2,3,4,5],"found":[6],"count":1,"badge":"1 write, nobody notices","say":"You scroll and a post is appended into a spare box. <b>This is Act 6</b>, and right now it is one write."},{"capacity":8,"seen":[0,1,2,3,4,5,6],"found":[7],"count":1,"badge":"the row is full now","say":"Another. One write. And now the row is full, and the next scroll cannot be one write."},{"capacity":12,"seen":[0,1,2,3,4,5,6,7],"count":9,"badge":"9 writes: the stutter","say":"<b>A longer row is claimed and all eight are carried across</b>, then the ninth post is written. That single scroll cost nine writes, and that is the stutter you have felt in every feed."},{"capacity":12,"seen":[0,1,2,3,4,5,6,7],"count":1,"badge":"and the next three are free again","say":"Then the empty half buys the next three appends at one write each. <b>Mostly instant, occasionally not, and the occasional one is guaranteed rather than rare.</b>"}]},{"part":"Part 3 · The same operations, in things you used today","tab":"The wrong rule","title":"Act 12 · The wrong choice: Acts 4 and 6 chosen badly, and it ships","type":"curve","speed":1800,"width":650,"height":300,"n":40,"logScale":true,"xlabel":"contacts already in the list","ylabel":"box writes","series":[{"fn":"n2","color":"bad","label":"sorted on arrival, fixed chunk","label2":"O(n squared)"},{"fn":"n","color":"green","label":"appended, sorted once at the end","label2":"O(n)"}],"steps":[{"show":[0],"pct":40,"badge":"5,000 contacts","say":"A nightly sync that places each arrival in sorted position. <b>This is Act 4 and Act 6 chosen badly.</b> At five thousand contacts it takes two minutes and nobody looks at it again."},{"show":[0],"pct":100,"badge":"20,000 contacts","say":"Four times the contacts. <b>Sixteen times the work</b>, and it now runs until nine in the morning. Nobody deployed anything."},{"show":[0,1],"pct":100,"badge":"the same job, batched","say":"Append unsorted and sort once at the end, and the same job sits on the green line. <b>Two million box moves become one pass.</b>"},{"show":[0,1],"pct":100,"notation":true,"badge":"why it shipped","say":"<b>And this is why it passed review.</b> At five thousand contacts the two lines are indistinguishable, every individual insert is genuinely fast, and the only number that grows is the one nobody was watching."}]},{"part":"Part 3 · The same operations, in things you used today","tab":"A whole column","title":"Act 13 · This is Acts 7 and 8 in a spreadsheet","type":"race","speed":1600,"countLabel":" trips","legend":[["being read now","look"],["arrived free with a neighbour","found"]],"tracks":[{"label":"Along the fold, one row","data":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]},{"label":"Across the fold, one column","data":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"]}],"steps":[{"badge":"this is Acts 7 and 8","lanes":[{"look":[0],"count":1},{"look":[0],"count":1}],"say":"Select a whole row in a sheet, and a whole column. <b>Identical number of cells.</b>"},{"badge":"the row rides along","lanes":[{"found":[0,1,2,3,4,5,6,7],"count":1},{"found":[0],"look":[1],"count":2}],"say":"Along the fold the neighbours arrive free. Across it, the next cell is a whole row length away and never arrives free."},{"badge":"16 cells each","lanes":[{"found":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"count":2},{"found":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"count":16}],"say":"<b>Same sixteen cells, two trips against sixteen.</b> This is why a column feels heavier than a row in every sheet you have ever used, and no cell count will ever show it."}]},{"part":"Part 4 · The map","tab":"The map","title":"Act 14 · Four clauses, four bills, and the act that taught each","type":"reveal","speed":1700,"viz":{"maxChars":15,"gy":44,"nodes":[{"id":"r","label":"A row of boxes you inherited","col":2,"row":0,"kind":"dark"},{"id":"c1","label":"Claimed in advance","col":0,"row":1,"kind":"gold"},{"id":"c2","label":"Side by side","col":1,"row":1,"kind":"gold"},{"id":"c3","label":"Same width","col":3,"row":1,"kind":"gold"},{"id":"c4","label":"It does not move","col":4,"row":1,"kind":"gold"},{"id":"b1","label":"The copy bill. Acts 6 and 11","col":0,"row":2,"kind":"bad"},{"id":"b2","label":"The shuffle bill. Acts 4, 5, 9 and 10","col":1,"row":2,"kind":"bad"},{"id":"b3","label":"The trips bill. Acts 7, 8 and 13","col":3,"row":2,"kind":"bad"},{"id":"b4","label":"The stale position bill. Acts 3 and 6","col":4,"row":2,"kind":"bad"},{"id":"q","label":"Four questions, one per clause, and you can ask them from the outside","col":2,"row":3,"kind":"accent"}],"edges":[{"from":"r","to":"c1"},{"from":"r","to":"c2"},{"from":"r","to":"c3"},{"from":"r","to":"c4"},{"from":"c1","to":"b1"},{"from":"c2","to":"b2"},{"from":"c3","to":"b3"},{"from":"c4","to":"b4"},{"from":"b2","to":"q","style":"green"},{"from":"b3","to":"q","style":"green"}]},"steps":[{"show":["r"],"look":["r"],"say":"Thirteen acts collapse into four clauses and the bill each one sends."},{"show":["r","c1","b1"],"found":["c1"],"bad":["b1"],"say":"<b>Claimed in advance</b> sends the copy bill. A row never grows, it gets replaced, and you carry every item across. Acts 6 and 11."},{"show":["r","c1","b1","c2","b2"],"found":["c2"],"bad":["b1","b2"],"say":"<b>Side by side</b> sends the shuffle bill. No holes means making room costs a write for every box behind the address you chose. Acts 4, 5, 9 and 10."},{"show":["r","c1","b1","c2","b2","c3","b3"],"found":["c3"],"bad":["b1","b2","b3"],"say":"<b>Same width</b> sends the trips bill. Identical counts, and one layout gets its neighbours delivered free while the other pays for every one. Acts 7, 8 and 13."},{"show":["r","c1","b1","c2","b2","c3","b3","c4","b4"],"found":["c4"],"bad":["b1","b2","b3","b4"],"say":"<b>It does not move</b> sends the quietest bill of the four, and the only one that arrives as wrong answers rather than as slowness. Acts 3 and 6."},{"show":["r","c1","b1","c2","b2","c3","b3","c4","b4","q"],"found":["q"],"say":"And every one of the four is detectable <b>from the outside, without reading a line of anything.</b> Is the count stable? Do things arrive in the middle? Is one box a value or an address? Who else wrote down where this lives?"},{"show":["r","c1","b1","c2","b2","c3","b3","c4","b4","q"],"say":"<b>An array is fast because it is rigid, and every problem in this chapter was that rigidity showing its bill.</b> Next chapter takes the opposite deal on all four."}]}]}'></div>

<div class="wrap" style="padding-top:34px;">
  <h2><span class="ix gold">✓</span> What You Just Watched</h2>

  <div class="tbl-wrap"><table>
    <tr><th>The clause</th><th>The bill it sends</th><th>Acts that animate it</th><th>Where it came back in Part 3</th></tr>
    <tr><td>Claimed in advance</td><td>The copy bill</td><td>6</td><td>Act 11, the stutter in an infinite scroll</td></tr>
    <tr><td>Side by side</td><td>The shuffle bill</td><td>4, 5</td><td>Acts 9 and 10, Recently Deleted and dragging a track to the top</td></tr>
    <tr><td>Same width</td><td>The trips bill</td><td>7, 8</td><td>Act 13, selecting a whole column in a sheet</td></tr>
    <tr><td>It does not move</td><td>The stale position bill</td><td>3, 6</td><td>Nowhere, and that is the point. It arrives as wrong answers, not as slowness</td></tr>
  </table>
  <div class="tbl-cap">Read the right hand column down the page. Not one idea in Part 3 was new. They were the same four bills, arriving inside things you touched this week.</div></div>

  <div class="callout accent">
    <div class="ch">The line to carry into Chapter 4</div>
    <p>Every one of those four bills came from the same purchase: <strong>any position, by one sum.</strong> The next chapter is the structure that refuses that purchase entirely. Do not expect it to refuse all four bills. It cancels three of them, and it makes the fourth one considerably worse, which is exactly the sort of trade this course keeps promising you and is about to show you in full.</p>
  </div>

  <div class="callout warn">
    <div class="ch">And the line from Act 12</div>
    <p>At five thousand contacts the right way and the wrong way are indistinguishable, every individual insert is genuinely fast, and every measurement anybody takes is honest. <strong>The only number that grows is the one nobody was watching</strong>, which is why that sync shipped and then waited a year to become a support queue.</p>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">Act 10 showed the same drag costing twelve writes at the top of a playlist and two writes near the end. What actually decides the price?</div>
    <div class="opt" data-i="0">How far the track travelled</div>
    <div class="opt" data-i="1">How many boxes sit behind the address you let go at</div>
    <div class="opt" data-i="2">Whether the playlist was sorted</div>
    <div class="qexp">Distance travelled is the intuitive answer and it is wrong: dropping at the top moves a track the furthest and dropping near the end moves it barely at all, yet the cheap one is the long journey. What is paid for is everything sitting behind the destination, because the no holes clause means room can only be made by pushing.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">In Act 9, deleting three photos wrote three boxes and reclaimed no storage at all. Why is that the right design rather than a bug?</div>
    <div class="opt" data-i="0">Because deleted photos might be needed for legal reasons</div>
    <div class="opt" data-i="1">Because the boxes cannot be reclaimed until the row is rebuilt</div>
    <div class="opt" data-i="2">Because marking is one write while closing the gap is a write per box behind it, so the expensive part is deferred and every delete of the month rides along in one pass</div>
    <div class="qexp">This is amortised cost from Lesson 2.3 wearing a product feature. One expensive rebuild, shared across every cheap delete that happened before it. The thirty day window is not a legal policy dressed as engineering, it is engineering that a legal policy happens to fit neatly around.</div>
  </div>

  <div class="callout good">
    <div class="ch">Chapter 3 complete</div>
    <p>An array is fast because it is rigid, and every problem in this chapter was that rigidity showing its bill: a claim that can be refused while space is free, a shuffle nobody warns you about, a doubling paid for in advance, a fold that decides which direction is cheap, and a position that stops meaning anything when the row moves. Next: the structure that takes the opposite deal on every one of them.</p>
  </div>
__NAV__
</div>`
