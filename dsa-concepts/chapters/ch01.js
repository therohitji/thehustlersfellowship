/* ===== Chapter 01 - What a Data Structure Actually Is - DSA Concepts (2026) =====
   Through line: a data structure is just a decision about how you lay things down.
   Every later cost follows from that one decision.
   Ten blocks per concept lesson, then the whiteboard. See CONSISTENCY.md.
   RULES: no em-dashes; no backticks in content; no dollar-brace; no apostrophes inside
   a data-viz, data-anim or data-reel payload. */

"1.1": `<div class="wrap">
  <div class="les-kicker">Chapter 1 · Lesson 1.1</div>
  <h1 class="les-title">Everything Is Boxes and Labels: How a Computer Holds a Thing</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~11 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">A computer does not know what anything is. It only knows where things are.</p>

  <p class="lead">Before any structure, any algorithm, any of it, there is one mechanism underneath everything: numbered boxes, all the same size, sitting next to each other. Once you can see that picture, half the strange behaviour of software stops being strange. A data structure is just a decision about how you lay things down in those boxes, and every later cost follows from that one decision.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">A wall of post boxes, and a number in your hand.</div>
  <p>Picture a wall of post boxes in an apartment building. Hundreds of them, identical, each with a number painted on it. You are holding a slip with <em class="k">1048</em> written on it. You do not read every box. You do not start at box one and count. You walk to 1048 and open it.</p>

  <div class="viz" data-viz='{"type":"scene","title":"A wall of numbered boxes","width":640,"height":230,"items":[{"icon":"person","x":110,"y":118,"kind":"gold","label":"you, holding one number: 1048"},{"icon":"shelf","x":460,"y":118,"kind":"accent","label":"every box numbered, every box the same size"}],"arrows":[{"x1":180,"y1":118,"x2":388,"y2":118,"style":"green","label":"walk straight to 1048"}],"caption":"You do not read the labels on every box. You do not start at one and count. You know the number, so you go there. A computer holds everything this way, and it never learned any other way."}'></div>

  <p>Two things made that fast, and neither of them was cleverness. <strong>The boxes are all the same size, and they are in order.</strong> Because of that, box 1048 is exactly 1,048 box-widths from the start, which you can work out rather than search for. A computer holds everything in exactly this arrangement, and it never learned any other way.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">The definition, in one sentence.</div>
  <p>Memory is a very long row of numbered, identically sized boxes, and every single thing a program holds lives in one or more of them. The number of a box is called its <em class="k">address</em>. That is the whole model.</p>

  <div class="viz" data-viz='{"type":"arch","title":"What a name actually is","maxChars":16,"nodes":[{"id":"n","label":"The name you wrote: score","col":0,"row":0,"kind":"gold"},{"id":"a","label":"A box number: 1048","col":1,"row":0,"kind":"dark"},{"id":"v","label":"A value sitting in it: 42","col":2,"row":0,"kind":"accent"}],"edges":[{"from":"n","to":"a","label":"is only a label for"},{"from":"a","to":"v","label":"which holds","style":"green"}],"caption":"The name is for you. The computer threw it away before the program ever ran. All it kept was the number of the box."}'></div>

  <div class="callout accent">
    <div class="ch">The thing worth internalising</div>
    <p>Names like <em class="k">score</em> or <em class="k">userList</em> are for humans. They are gone by the time the program runs. What survives is a <strong>number</strong>, and everything the machine does afterwards is arithmetic on numbers like that one.</p>
  </div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Reaching the third thing, without counting to three.</div>
  <p>Below are eight numbers, laid down back to back, with their real box numbers underneath. Watch what happens when something asks for the third one. Predict the frame before you press forward.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Reaching the third thing, without counting","speed":1600,"data":[42,17,88,5,63,91,30,74],"labels":["1040","1044","1048","1052","1056","1060","1064","1068"],"countLabel":" calculation","legend":[["being reached","look"],["already placed","seen"],["landed on it","found"]],"steps":[{"look":[0],"ptr":{"i":0},"count":1,"say":"Eight numbers, laid down back to back. The first one lives in the box numbered 1040."},{"look":[1],"seen":[0],"ptr":{"i":1},"count":1,"say":"Every box is exactly the same size, four wide. So the next one is at 1044, and the one after that at 1048. <b>The numbers are predictable, and that is the entire trick.</b>"},{"look":[2],"seen":[0,1],"ptr":{"i":2},"count":1,"say":"Now: give me the third thing. A person would count along. A computer does not count."},{"found":[2],"seen":[0,1],"ptr":{"i":2},"count":1,"say":"1040, plus 2 boxes, times 4 wide, equals 1048. <b>One calculation. No counting, no walking, no searching.</b>"},{"found":[6],"ptr":{"i":6},"count":1,"say":"And the seventh thing? 1040 plus 6 times 4. Still one calculation. Still instant."},{"found":[6],"ptr":{"i":6},"count":1,"say":"The seven millionth thing would also be one calculation. <b>This is the only operation in the whole course that does not care how much data you have.</b>"}],"caption":"Nothing here is clever. It is fast because the boxes are the same size and sit next to each other, so where anything lives is arithmetic rather than a question."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">The actual conversation, message by message.</div>

  <div class="viz" data-viz='{"type":"seq","title":"What is actually said when you ask for one item","actors":[{"label":"Your program","kind":"gold"},{"label":"The runtime","kind":"accent"},{"label":"Memory","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"give me scores at position 2","style":"gold"},{"from":1,"to":1,"label":"1040 plus 2 times 4"},{"from":1,"to":2,"label":"read box 1048","style":"green"},{"from":2,"to":1,"label":"42","style":"green"},{"from":1,"to":0,"label":"42","style":"green"}],"caption":"Look at step 2. There is no searching anywhere in this exchange, only multiplication. That is why the answer costs the same whether the row holds ten things or ten million."}'></div>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">What is allowed to sit in a box, and what that changes.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What is in the box</th><th>How much space</th><th>What follows from it</th></tr>
    <tr><td>A <strong>whole number</strong></td><td>fixed, usually 4 or 8 wide</td><td>Rows of them are perfectly regular, so position is arithmetic</td></tr>
    <tr><td>A <strong>single character</strong></td><td>fixed, 1 to 4 wide</td><td>Text is a row of boxes, which is why cutting a sentence in half is cheap</td></tr>
    <tr><td>A <strong>true or false</strong></td><td>fixed, tiny</td><td>Millions of flags fit in almost nothing</td></tr>
    <tr><td>An <strong>address of another box</strong></td><td>fixed, always</td><td>The escape hatch. This is how anything variable-sized gets stored</td></tr>
    <tr><td>A <strong>sentence, a photo, a record</strong></td><td>not fixed</td><td>Cannot go in a regular row directly. Its address goes in instead</td></tr>
  </table>
  <div class="tbl-cap">The fourth row is the most important idea in this lesson. A box can hold the number of another box, and that single move is what makes every complicated structure in this course possible.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"When can position be arithmetic","maxChars":18,"nodes":[{"id":"q","label":"Does every item take the same amount of space?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"y","label":"Lay them side by side. Position becomes a calculation","col":2,"row":1,"kind":"accent"},{"id":"n","label":"Store the addresses side by side instead","col":0,"row":1,"kind":"muted"},{"id":"n2","label":"and keep the real things scattered elsewhere","col":0,"row":2,"kind":"muted"}],"edges":[{"from":"q","to":"y","label":"yes","style":"green"},{"from":"q","to":"n","label":"no"},{"from":"n","to":"n2"}],"caption":"This is why a list of numbers behaves differently from a list of sentences. Numbers are all the same width. Sentences are not, so what actually sits in the row is their addresses."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Count it, before you name it.</div>
  <p>Ask for the item at a known position, and the work is: one multiplication, one addition, one read. Three operations. Now put a million items in the row and ask again: one multiplication, one addition, one read. <strong>The amount of data did not enter the calculation at all.</strong></p>

  <div class="viz" data-viz='{"type":"card","title":"Reaching one item, when you know its position","eyebrow":"THE NUMBERS","badge":"any size","width":430,"rows":[{"k":"8 items","v":"1 step","tone":"good","bar":0.02},{"k":"8 million items","v":"1 step","tone":"good","bar":0.02},{"k":"8 billion items","v":"1 step","tone":"good","bar":0.02},{"k":"Finding a value whose position you do not know","v":"up to 8 billion","tone":"bad","bar":1}],"caption":"The first three rows are the superpower. The last row is the catch, and it is what Chapter 6 spends a whole chapter dealing with. Knowing where is free. Knowing whether is not."}'></div>

  <p>That property has a name, and you have now earned it. Work that does not change as the data grows is called <em class="k">constant time</em>, written <em class="g">O(1)</em>. Chapter 2 gives you the rest of the shapes. For now the only thing to keep is that this one is the floor, and almost nothing else in computing gets to stand on it.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five things you would not have called a row of boxes.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Things that are secretly just a row of boxes","unit":140,"nodes":[{"id":"c","label":"A row of boxes","x":2,"y":1,"kind":"dark"},{"id":"t","label":"Text","x":0,"y":0,"kind":"box"},{"id":"i","label":"A photo","x":0,"y":2,"kind":"box"},{"id":"a","label":"Audio","x":4,"y":0,"kind":"box"},{"id":"g","label":"A spreadsheet","x":4,"y":2,"kind":"box"},{"id":"e","label":"An AI embedding","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"t","label":"characters"},{"from":"c","to":"i","label":"pixels"},{"from":"c","to":"a","label":"samples"},{"from":"c","to":"g","label":"rows of rows"},{"from":"c","to":"e","label":"numbers","style":"gold"}],"caption":"The last one is worth sitting with. When Chapter 6 turns your question into a point in space, the point is a row of numbers. Nothing exotic is happening, the row just got long."}'></div>

  <p>Your phone does not store a photo as a photo. It stores a very long row of numbers, three per pixel, and something else agrees to interpret that row as an image. Text is a row of character codes. A song is a row of amplitude samples. <strong>The row is not a detail of the implementation. It is the only thing that exists.</strong></p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences you have heard, and what each one is really about.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really about</th></tr>
    <tr><td>"It crashed with index out of range"</td><td>A position past the end</td><td>The row has a fixed length and something walked off the edge of it</td></tr>
    <tr><td>"Off by one, again"</td><td>The first box is zero</td><td>An index is an offset from the start, not a position in a queue</td></tr>
    <tr><td>"Reading is instant but inserting is slow"</td><td>Two very different costs on one structure</td><td>Position is arithmetic, but making a gap is not</td></tr>
    <tr><td>"Can we just add one more field to every record?"</td><td>Changing the width of every box</td><td>The row is regular only because the boxes match. Changing the width rebuilds it</td></tr>
    <tr><td>"It was fine locally and died with real data"</td><td>Cost that scaled with length</td><td>Something was walking the row, and a short row hid it</td></tr>
    <tr><td>"Why do we need to know the size up front?"</td><td>Reserving a continuous stretch</td><td>Boxes side by side must be claimed together, before anything is put in them</td></tr>
  </table>
  <div class="tbl-cap">The middle column is the skill. None of these sentences mention memory, and all six of them are about memory.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">One real bug, taken from a complaint to a cause.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"The photo grid works perfectly for everybody, but three users report it crashing. All three of them have exactly 100 photos. Users with 99 are fine. Users with 101 are fine."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"The photo grid that crashes at exactly 100 photos","lanes":[{"label":"The user"},{"label":"You"},{"label":"The program"}],"steps":[{"id":"a1","lane":0,"col":0,"label":"Uploads their 100th photo","kind":"gold"},{"id":"b1","lane":1,"col":1,"label":"Ask: which box did it reach for?","kind":"box"},{"id":"b2","lane":1,"col":2,"label":"Box 100, in a row of 100","kind":"accent"},{"id":"c1","lane":2,"col":1,"label":"Reads boxes 0 through 100","kind":"bad"},{"id":"c2","lane":2,"col":3,"label":"Reads boxes 0 through 99","kind":"accent"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"b2","style":"green"},{"from":"b2","to":"c2","style":"green","label":"count from zero"}],"caption":"It worked at 99 photos and every number before it. The bug was never about photos. It was about the difference between how many there are and what the last one is called."}'></div>

  <p><strong>The answer.</strong> A row of 100 photos has boxes numbered 0 to 99. The code asked for boxes 0 to 100, one too many, because somebody read <em class="k">length</em> as the name of the last box rather than the count of boxes. Users with 101 photos never hit it, because their box 100 exists.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It never guessed at photos, uploads or file sizes. It asked one question: <strong>which box number did it reach for, and does that box exist?</strong> The strange detail, that only exactly 100 broke, is what points straight at counting rather than at photos.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, no code</div>
    <p>Open the contacts app on your phone and scroll to a name in the middle. Now answer two things in writing. First, <strong>did the app jump there or travel there</strong>, and how can you tell from how it felt? Second, if you added a new contact whose name sorts to the very top, <strong>what would have to move</strong>? You are not guessing at their code. You are reading the trade from the outside, which is the actual skill.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">Reading the item at position 5,000,000 in a row of ten million takes about the same time as reading position 3. Why?</div>
    <div class="opt" data-i="0">Because modern processors are fast enough that the difference does not matter</div>
    <div class="opt" data-i="1">Because the address is calculated from the position, so the data size never enters the calculation</div>
    <div class="opt" data-i="2">Because the row is kept sorted, so it can jump to roughly the right place</div>
    <div class="qexp">Start plus position times width. Three operations, and none of them mention how long the row is. This is the only operation in the entire course that is genuinely free at any scale, and it is free for a boring reason: the boxes are the same size and they are in order.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">Why can a row of sentences not be laid out the same way as a row of numbers?</div>
    <div class="opt" data-i="0">Because text uses a different kind of memory</div>
    <div class="opt" data-i="1">Because sentences have to be searched rather than read</div>
    <div class="opt" data-i="2">Because sentences are different lengths, so the boxes stop being the same width and position stops being arithmetic</div>
    <div class="qexp">The arithmetic only works while every box matches. So what actually sits in the row is the addresses of the sentences, all of which are the same width, and the sentences themselves live scattered elsewhere. That single workaround is the subject of the next lesson.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>You have seen the one arrangement a computer is naturally good at. Next: the only other arrangement there is, why it exists, and why it is worse at exactly the thing this one is best at. One decision about how you lay things down, and every later cost following from it.</p>
  </div>
__NAV__
</div>`,

"1.2": `<div class="wrap">
  <div class="les-kicker">Chapter 1 · Lesson 1.2</div>
  <h1 class="les-title">The Two Real Choices: Keep It Together, or Keep It Linked</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~12 min</span>
    <span class="pill gold">no code needed</span><span class="pill">11 visuals</span>
  </div>

  <p class="motto">There are exactly two ways to store many things. Everything else in this course is a variation on one of them.</p>

  <p class="lead">Lesson 1.1 gave you the arrangement a computer is naturally good at: identical boxes, side by side, position by arithmetic. This lesson gives you the only other one, and shows you that it is not a worse version of the first. It is the mirror image, good at precisely what the first one is bad at. Every structure from here to Chapter 19 is one of these two, or both stacked together. Both are the same kind of thing: a decision about how you lay things down, and every later cost follows from it.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">A bookshelf, and a treasure hunt.</div>
  <p>On one side of the room is a shelf. The books are in a line, and you can pull the fourth one out without touching the other three. On the other side is a treasure hunt: a note on the table tells you to look in the drawer, the note in the drawer sends you under the mat, and so on. Both of them store the same set of things.</p>

  <div class="viz" data-viz='{"type":"scene","title":"One shelf, or a trail of notes","width":720,"height":250,"items":[{"icon":"shelf","x":150,"y":118,"kind":"accent","label":"a shelf: everything side by side"},{"icon":"doc","x":430,"y":118,"kind":"gold","label":"a note"},{"icon":"doc","x":560,"y":118,"kind":"gold","label":"another note"},{"icon":"doc","x":688,"y":118,"kind":"muted","label":"the thing"}],"arrows":[{"x1":462,"y1":118,"x2":528,"y2":118,"style":"gold","label":"and then?"},{"x1":592,"y1":118,"x2":656,"y2":118,"style":"gold","label":"and then?"}],"caption":"On the left you can reach for the fourth book without touching the other three. On the right you cannot know where anything is until you have followed everything before it. Both are legitimate ways to store things, and they are opposites."}'></div>

  <p>Now ask each of them two different questions. <strong>Where is the fourth thing?</strong> The shelf answers instantly; the treasure hunt has to be walked. <strong>Add something between the second and third thing.</strong> The shelf has to slide books along to make a gap; the treasure hunt just rewrites two notes. Neither one is better. They are opposites.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">The two arrangements, side by side.</div>
  <p><em class="k">Together</em>, usually called contiguous storage, means one continuous stretch of boxes claimed in advance. <em class="k">Linked</em> means each item sits wherever there was room, and carries the box number of the next item along with it.</p>

  <div class="viz" data-viz='{"type":"arch","title":"The only two arrangements there are","maxChars":16,"nodes":[{"id":"q","label":"You have many things to store","col":0,"row":0,"kind":"dark"},{"id":"a","label":"Together: one continuous block","col":1,"row":0,"kind":"accent"},{"id":"b","label":"Linked: scattered, joined by addresses","col":1,"row":1,"kind":"gold"},{"id":"a2","label":"Reaching is a calculation. Rearranging is a move of everything","col":2,"row":0,"kind":"accent"},{"id":"b2","label":"Reaching is a walk. Rearranging is two edits","col":2,"row":1,"kind":"gold"}],"edges":[{"from":"q","to":"a"},{"from":"q","to":"b"},{"from":"a","to":"a2","style":"green"},{"from":"b","to":"b2","style":"gold"}],"caption":"Read the right hand column carefully. The two rows are not better and worse. They are exact mirror images, and every structure in the next fifteen chapters is built out of one of them or both."}'></div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Two jobs, two winners, same data.</div>
  <p>Both rows below hold the same eight things. The first animation asks for the sixth one. Watch the counters, and predict which finishes first.</p>

  <div class="board" data-anim='{"type":"race","title":"Reach the sixth thing","speed":1250,"legend":[["working on it now","look"],["already walked","seen"],["arrived","found"]],"tracks":[{"label":"Together","data":["A","B","C","D","E","F","G","H"]},{"label":"Linked","data":["A","B","C","D","E","F","G","H"]}],"steps":[{"say":"Reach the sixth thing. The block calculates its address and lands. The chain has no address to calculate, so it starts at the beginning.","lanes":[{"look":[5],"count":1},{"look":[0],"count":1}]},{"say":"<b>The block is already finished.</b> One calculation, and it never touched the five things before it. The chain is on its second node.","lanes":[{"found":[5],"count":1},{"look":[1],"seen":[0],"count":2}]},{"say":"The chain cannot skip. Each node holds exactly one piece of information about location: where the next one is.","lanes":[{"found":[5],"count":1},{"look":[2],"seen":[0,1],"count":3}]},{"say":"Step. Step.","lanes":[{"found":[5],"count":1},{"look":[4],"seen":[0,1,2,3],"count":5}]},{"say":"<b>Six steps against one.</b> At a million items it would be a million steps against one, and that gap is not going to close.","lanes":[{"found":[5],"count":1},{"found":[5],"seen":[0,1,2,3,4],"count":6}]}]}'></div>

  <p>That result is not surprising. Now change one thing: instead of reading, insert something at the front. Same collections, same eight items, and watch the result flip completely.</p>

  <div class="board" data-anim='{"type":"race","title":"Now insert something at the front","speed":1700,"legend":[["must move","seen"],["being edited","look"],["done","found"]],"tracks":[{"label":"Together","data":["A","B","C","D","E","F","G","H"]},{"label":"Linked","data":["A","B","C","D","E","F","G","H"]}],"steps":[{"say":"Same two collections, one different job. Put a new thing at the very front.","lanes":[{"look":[0],"count":0},{"look":[0],"count":0}]},{"say":"The block has no gap at the front, and it cannot make one out of nothing. <b>Every single item has to shift right.</b>","lanes":[{"seen":[0,1,2,3,4,5,6,7],"count":8},{"look":[0],"count":1}]},{"say":"The chain does not move anything. It writes one new node, points it at the old first node, and updates the handle. <b>Two edits.</b>","lanes":[{"seen":[0,1,2,3,4,5,6,7],"count":8},{"found":[0],"count":2}]},{"say":"<b>Eight moves against two edits, and the winner flipped.</b> Nothing about the data changed. Only the question did.","lanes":[{"found":[0],"seen":[1,2,3,4,5,6,7],"count":8},{"found":[0],"count":2}]}]}'></div>

  <div class="callout accent">
    <div class="ch">The sentence to carry out of this lesson</div>
    <p>Neither collection changed between those two animations. <strong>The only thing that changed was the question, and that was enough to reverse who wins.</strong> When somebody asks you which structure is faster, the honest answer is always another question: faster at what?</p>
  </div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What a link actually is, and why it is not magic.</div>

  <div class="viz" data-viz='{"type":"arch","title":"What one link in the chain actually contains","maxChars":16,"nodes":[{"id":"n","label":"One node","col":0,"row":0,"kind":"dark"},{"id":"v","label":"The value: 42","col":1,"row":0,"kind":"accent"},{"id":"p","label":"A box number: 2096","col":1,"row":1,"kind":"gold"},{"id":"x","label":"another node, sitting somewhere completely unrelated","col":2,"row":1,"kind":"muted"}],"edges":[{"from":"n","to":"v","label":"holds"},{"from":"n","to":"p","label":"and holds"},{"from":"p","to":"x","label":"follow it","style":"gold"}],"caption":"That second box is the entire idea. A pointer is not magic and it is not a connection. It is a number, stored in a box, that happens to be the number of another box. Everything in Chapters 9 to 13 is built from this one move."}'></div>

  <p>A pointer is not a connection, a relationship or a reference in any human sense. It is <strong>a number sitting in a box, which happens to be the number of another box.</strong> That is the entire mechanism. Once a box is allowed to hold the address of another box, you can build chains, trees, graphs and every complicated structure in this course, and none of them need anything the machine did not already have.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Which real structures sit on which side.</div>

  <div class="tbl-wrap"><table>
    <tr><th>Arrangement</th><th>Structures built on it</th><th>Great at</th><th>Bad at</th></tr>
    <tr><td><strong>Together</strong></td><td>Arrays, strings, buffers, images, matrices, vectors</td><td>Reaching by position, scanning in order, packing memory tightly</td><td>Inserting or removing anywhere but the end</td></tr>
    <tr><td><strong>Linked</strong></td><td>Linked lists, trees, graphs, file systems, page structure</td><td>Inserting and removing anywhere, growing without a plan</td><td>Reaching by position, and it costs extra memory per item</td></tr>
    <tr><td><strong>Both together</strong></td><td>Hash tables, heaps, B-trees, dynamic arrays</td><td>Getting most of both, by paying attention to which operation is frequent</td><td>Complexity, and rules that must be maintained on every write</td></tr>
  </table>
  <div class="tbl-cap">The third row is where most real systems actually live. A heap, for example, is a tree that is stored as a row, precisely so it can have branching logic and arithmetic position at the same time.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which arrangement does your problem want","maxChars":18,"nodes":[{"id":"q1","label":"What will you do most often?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"r","label":"Reach things by position, or scan the whole set","col":0,"row":1,"kind":"accent"},{"id":"w","label":"Insert and remove in the middle, constantly","col":2,"row":1,"kind":"gold"},{"id":"a","label":"Keep it together. An array","col":0,"row":2,"kind":"accent"},{"id":"b","label":"Link it. A chain, a tree, a graph","col":2,"row":2,"kind":"gold"}],"edges":[{"from":"q1","to":"r","label":"read"},{"from":"q1","to":"w","label":"rearrange"},{"from":"r","to":"a","style":"green"},{"from":"w","to":"b","style":"gold"}],"caption":"There is no third branch and there never will be. The question is not which structure is better, it is which of these two verbs your product actually spends its day doing."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Count the moves, then read the bill.</div>
  <p>Reaching item N in a block: one calculation, regardless of N. Reaching item N in a chain: N steps, every time. Inserting at the front of a block: every item after it moves, so N moves. Inserting at the front of a chain: write one node, change one address, done.</p>

  <div class="viz" data-viz='{"type":"card","title":"One million items, two arrangements","eyebrow":"THE BILL","badge":"1,000,000 items","width":460,"rows":[{"k":"Together: reach item 500,000","v":"1 step","tone":"good","bar":0.01},{"k":"Linked: reach item 500,000","v":"500,000 steps","tone":"bad","bar":1},{"k":"Together: insert at the front","v":"1,000,000 moves","tone":"bad","bar":1},{"k":"Linked: insert at the front","v":"2 edits","tone":"good","bar":0.01},{"k":"Linked: extra memory for the addresses","v":"about 8 MB","tone":"bad","bar":0.4}],"caption":"Four of these rows are the mirror image of each other and the fifth is the quiet one. A chain also costs you memory, because every item now carries a box number it did not need before."}'></div>

  <p>The names, now that you have counted them: reaching in a block is <em class="g">O(1)</em>, reaching in a chain is <em class="g">O(n)</em>, inserting at the front of a block is <em class="g">O(n)</em>, and inserting at the front of a chain is <em class="g">O(1)</em>. Notice that the four names are just the four numbers you already worked out.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">You are looking at one of them right now.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Where each arrangement actually shows up","unit":146,"nodes":[{"id":"t","label":"Together","x":1,"y":1,"kind":"accent"},{"id":"l","label":"Linked","x":3,"y":1,"kind":"gold"},{"id":"p","label":"A photo","x":0,"y":0,"kind":"box"},{"id":"s","label":"A document","x":0,"y":2,"kind":"box"},{"id":"u","label":"Undo history","x":4,"y":0,"kind":"box"},{"id":"f","label":"File folders","x":4,"y":2,"kind":"box"},{"id":"w","label":"This web page","x":2,"y":3,"kind":"box"}],"edges":[{"from":"t","to":"p","label":"pixels"},{"from":"t","to":"s","label":"characters"},{"from":"l","to":"u","label":"each step knows the one before"},{"from":"l","to":"f","label":"parents and children"},{"from":"l","to":"w","label":"the page tree","style":"gold"}],"caption":"The page you are reading is a linked structure. Every element holds the addresses of its children, which is exactly why a browser can insert a new paragraph in the middle without redrawing everything above it."}'></div>

  <p>The web page you are reading is a linked structure. Every element on it holds the addresses of its children, which is exactly why a browser can drop a new paragraph into the middle of an article without redrawing everything above it. Meanwhile the photo in that article is stored together, in one continuous run of pixel values, which is why cropping it is cheap and inserting a row of pixels into the middle of it is not.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six complaints that are secretly about arrangement.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"Adding to the top of the feed freezes it"</td><td>Frequent insert at the front</td><td>A block is being used where a chain belongs</td></tr>
    <tr><td>"Jumping to item 40,000 takes a second"</td><td>Cost grows with position</td><td>A chain is being used where a block belongs</td></tr>
    <tr><td>"It uses way more memory than the data"</td><td>Overhead per item</td><td>Every link is carrying an address, and there are millions of them</td></tr>
    <tr><td>"Reordering the list is instant, reading it is not"</td><td>Winners look reversed</td><td>Correct arrangement for writing, wrong one for reading</td></tr>
    <tr><td>"We have to declare the size up front"</td><td>Claiming a continuous stretch</td><td>Together means asking for all the room at once</td></tr>
    <tr><td>"Scrolling is smooth but random jumps stutter"</td><td>Sequential is fine, direct is not</td><td>Something linked is being asked to behave like something contiguous</td></tr>
  </table>
  <div class="tbl-cap">Every row here is the same diagnosis wearing a different coat: the operation the product performs most often is the one the chosen arrangement is worst at.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">A real complaint, taken to a decision.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"When a new message arrives, the chat freezes for about half a second. It only happens in the busiest group, which has around 40,000 messages. Smaller groups are fine. The message itself is tiny."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"The chat that freezes when a message arrives","lanes":[{"label":"The user"},{"label":"You"},{"label":"The app"}],"steps":[{"id":"a1","lane":0,"col":0,"label":"A new message arrives","kind":"gold"},{"id":"b1","lane":1,"col":1,"label":"Ask: where does it get inserted?","kind":"box"},{"id":"b2","lane":1,"col":2,"label":"At the front, every single time","kind":"accent"},{"id":"c1","lane":2,"col":1,"label":"Shifts all 40,000 messages right","kind":"bad"},{"id":"c2","lane":2,"col":3,"label":"Writes one node, updates one address","kind":"accent"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"b2","style":"green"},{"from":"b2","to":"c2","style":"green","label":"link it instead"}],"caption":"The freeze had nothing to do with rendering, or the network, or the message. It was the arrangement: the most frequent operation in the product was the one the chosen structure is worst at."}'></div>

  <p><strong>The answer.</strong> New messages go to the front, and the messages are stored together in one block. Every arrival therefore shifts 40,000 items right by one. The fix is not faster rendering or a smaller message; it is either linking the messages so a new one costs two edits, or keeping the block but appending to the end and displaying it reversed.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It never asked what was slow. It asked <strong>what operation happens most often, and is the arrangement good at that operation.</strong> The clue that it only broke in the busiest group is what told you the cost scales with count, which rules out rendering and the network immediately.</p>
  </div>

  <div class="callout warn">
    <div class="ch">The trap in this lesson</div>
    <p>Do not read this as "linked is more flexible, so prefer it". A chain is slower to read, uses more memory per item, and is much worse for the processor to scan, because scattered boxes defeat the caching that makes contiguous data genuinely fast. <strong>Together is the default. Linked is what you reach for when the shape of your writes forces it.</strong></p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, no code</div>
    <p>Pick any three apps on your phone. For each one, write down <strong>the single operation the user performs most often</strong>: scrolling a long list, adding to the top, reordering, jumping to a position. Then say which arrangement that operation wants, and why. You will be right more often than you expect, and where you are unsure, you have found a place where the app is probably using both.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">A chain can insert at the front in two edits. Why does that not make it the better choice in general?</div>
    <div class="opt" data-i="0">Because chains are harder to write correctly</div>
    <div class="opt" data-i="1">Because chains cannot store as much data</div>
    <div class="opt" data-i="2">Because it pays for that with a walk on every read by position, plus an address stored per item</div>
    <div class="qexp">The two animations are the whole argument. Cheap insert was bought with expensive reach, and the memory row in the cost card is the quiet third cost. Whether that is a good deal depends entirely on the ratio of reads to inserts in your actual product.</div>
  </div>

  <div class="quiz" data-correct="0">
    <div class="q">A team reports that their list is instant to reorder and slow to display. What is the most likely diagnosis?</div>
    <div class="opt" data-i="0">The data is linked, and the display is asking for items by position</div>
    <div class="opt" data-i="1">The data is contiguous, and reordering is shifting everything</div>
    <div class="opt" data-i="2">The rendering layer needs optimising</div>
    <div class="qexp">Fast rearranging and slow reaching is the exact signature of a chain. Contiguous storage produces the opposite complaint. This is why the diagnosis starts with which operation is fast, not with which one is slow: the fast one tells you the arrangement.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>You now have both arrangements. Next: what an algorithm actually is, and the three promises a set of steps has to make before it is allowed to be called one. Two arrangements, one decision, and every later cost already determined by it.</p>
  </div>
__NAV__
</div>`,

"1.3": `<div class="wrap">
  <div class="les-kicker">Chapter 1 · Lesson 1.3</div>
  <h1 class="les-title">What an Algorithm Actually Is: A Recipe With a Guarantee</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~11 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">A recipe that sometimes works is not an algorithm. It is a hope.</p>

  <p class="lead">The word gets used as if it means something mysterious, or something that decides what you see online. It means neither. An algorithm is a finite list of unambiguous steps that makes three specific promises, and if it breaks any one of them it does not deserve the name. This lesson gives you the three promises, and shows you what each broken one looks like in a real product. A recipe with a guarantee is still a decision about how you lay things down, and it still bills you later.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Two recipes for tea.</div>
  <p>One says: boil water, add leaves, wait three minutes, strain. The other says: make it taste nice, adjust until good. Both describe making tea. Only one of them can be handed to a person who has never done it.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Two sets of instructions, only one of them usable","width":700,"height":250,"items":[{"icon":"doc","x":140,"y":118,"kind":"accent","label":"Boil water. Add leaves. Wait 3 minutes. Strain."},{"icon":"person","x":390,"y":112,"kind":"gold","label":"somebody who has never made tea"},{"icon":"doc","x":625,"y":118,"kind":"bad","label":"Make it taste nice. Adjust until good."}],"arrows":[{"x1":330,"y1":118,"x2":210,"y2":118,"style":"green","label":"can follow this"},{"x1":452,"y1":118,"x2":560,"y2":118,"style":"gold","label":"cannot follow this"}],"caption":"Both are instructions for making tea. Only the left one can be handed to somebody who does not already know the answer. That difference is the whole difference between an algorithm and a wish."}'></div>

  <p>The second recipe is not badly written. It is not a recipe at all. It assumes the reader already has the answer, which is exactly the thing they came to you for. <strong>Unambiguous means a step cannot be interpreted two ways by two honest readers.</strong> That bar is much higher than it sounds, and most instructions people write fail it.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">A definition, and the three promises attached to it.</div>
  <p>An algorithm takes an input, applies a finite list of unambiguous steps, and produces an output. Attached to that are three promises: <strong>it finishes, it is correct, and it does the same thing every time.</strong></p>

  <div class="viz" data-viz='{"type":"arch","title":"An algorithm, and the three promises it makes","maxChars":15,"nodes":[{"id":"i","label":"Input: what you start with","col":0,"row":1,"kind":"gold"},{"id":"s","label":"A finite list of unambiguous steps","col":1,"row":1,"kind":"dark"},{"id":"o","label":"Output: what you end with","col":2,"row":1,"kind":"accent"},{"id":"p1","label":"It finishes","col":1,"row":0,"kind":"accent"},{"id":"p2","label":"It is correct","col":2,"row":0,"kind":"accent"},{"id":"p3","label":"It does the same thing every time","col":3,"row":1,"kind":"accent"}],"edges":[{"from":"i","to":"s"},{"from":"s","to":"o","style":"green"},{"from":"p1","to":"s","label":"promise one"},{"from":"p2","to":"o","label":"promise two"},{"from":"o","to":"p3","label":"promise three","style":"green"}],"caption":"Drop any one of the three promises and you no longer have an algorithm. You have a procedure that works often enough that nobody has caught it yet."}'></div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Three questions, asked in order, on a list of steps.</div>

  <div class="board" data-anim='{"type":"reveal","title":"Checking a set of steps against the three promises","speed":1600,"viz":{"maxChars":16,"gy":48,"nodes":[{"id":"r","label":"A list of steps","col":1,"row":0,"kind":"dark"},{"id":"f","label":"Does it always finish?","col":0,"row":1,"kind":"gold","shape":"diamond"},{"id":"c","label":"Is the answer right, every time?","col":1,"row":1,"kind":"gold","shape":"diamond"},{"id":"d","label":"Same input, same answer?","col":2,"row":1,"kind":"gold","shape":"diamond"},{"id":"ok","label":"An algorithm","col":1,"row":2,"kind":"accent"},{"id":"no","label":"A procedure that works until it does not","col":3,"row":2,"kind":"bad"}],"edges":[{"from":"r","to":"f"},{"from":"r","to":"c"},{"from":"r","to":"d"},{"from":"f","to":"ok","label":"yes","style":"green"},{"from":"c","to":"ok","label":"yes","style":"green"},{"from":"d","to":"ok","label":"yes","style":"green"},{"from":"d","to":"no","label":"no"}]},"steps":[{"show":["r"],"look":["r"],"say":"Here is a list of steps. Before it earns the word algorithm, it has to survive three questions."},{"show":["r","f"],"look":["f"],"say":"<b>Does it always finish?</b> Not usually. Always. A loop that waits for a condition that may never arrive fails here."},{"show":["r","f","c"],"look":["c"],"say":"<b>Is the answer right every time?</b> Not right on the cases you tried. Right on every input it claims to handle, including the empty one and the enormous one."},{"show":["r","f","c","d"],"look":["d"],"say":"<b>Same input, same answer?</b> If it depends on timing, on the weather, or on what happened to be in memory, you cannot reason about it and you cannot test it."},{"show":["r","f","c","d","ok"],"found":["ok"],"say":"Three yeses, and only then. Now you can hand it to somebody, or to a machine, and walk away."},{"show":["r","f","c","d","ok","no"],"found":["ok"],"look":["no"],"say":"<b>One no, and this is what you actually shipped.</b> It will look identical in a demo. The difference only appears later, on somebody else."}],"caption":"Almost every production incident you have ever heard about is one of these three promises quietly not being kept."}'></div>

  <div class="callout accent">
    <div class="ch">Say this out loud once</div>
    <p><strong>Finishes, correct, repeatable.</strong> When somebody shows you a working demo, those are the three things a demo cannot prove. A demo proves it worked once, on one input, in one moment. That is not one of the three.</p>
  </div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What a broken first promise looks like from the outside.</div>

  <div class="viz" data-viz='{"type":"seq","title":"What happens when promise one is broken","actors":[{"label":"Your app","kind":"gold"},{"label":"The retry loop","kind":"bad"},{"label":"The payment service","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"charge this card","style":"gold"},{"from":1,"to":2,"label":"attempt 1"},{"from":2,"to":1,"label":"temporarily unavailable"},{"from":1,"to":2,"label":"attempt 2"},{"from":2,"to":1,"label":"temporarily unavailable"},{"from":1,"to":1,"label":"try again until it works"},{"from":0,"to":0,"label":"still waiting","style":"gold"}],"caption":"There is no step in this exchange that is wrong. Each one is reasonable. What is missing is a rule that guarantees the loop ends, which is why the app is still sitting there."}'></div>

  <p>Nothing in that exchange is wrong. Retrying a failed payment is sensible, and each individual step is correct. What is missing is any rule that guarantees the loop ends: no maximum attempts, no growing wait, no giving up. <strong>A missing guarantee does not look like a bug in review. It looks like reasonable code.</strong></p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">The families, and which promise each one relaxes.</div>

  <div class="tbl-wrap"><table>
    <tr><th>Kind</th><th>What it does</th><th>What it gives up</th></tr>
    <tr><td><strong>Exact</strong></td><td>Always produces the right answer</td><td>Nothing, but it may be too slow to be usable</td></tr>
    <tr><td><strong>Approximate</strong></td><td>Produces an answer close to the right one, fast</td><td>Exactness, on purpose, in exchange for time</td></tr>
    <tr><td><strong>Heuristic</strong></td><td>Uses a rule of thumb that usually works well</td><td>The guarantee itself. It may be badly wrong on some inputs</td></tr>
    <tr><td><strong>Randomised</strong></td><td>Makes a random choice to avoid worst cases</td><td>Promise three, unless the randomness is seeded and recorded</td></tr>
    <tr><td><strong>Iterative</strong></td><td>Repeats a step until a condition is met</td><td>Nothing, provided the condition is guaranteed to arrive</td></tr>
    <tr><td><strong>Recursive</strong></td><td>Solves a smaller copy of the same problem</td><td>Nothing, provided it always shrinks toward a stopping case</td></tr>
  </table>
  <div class="tbl-cap">Rows two and three are not lesser things. They are deliberate trades, and Chapter 6 shows an entire industry, retrieval for AI systems, built on choosing approximate answers on purpose.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which kind of algorithm are you allowed to write","maxChars":18,"nodes":[{"id":"q1","label":"Is an exactly correct answer required?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"q2","label":"Can you afford the time it takes?","col":0,"row":1,"kind":"gold","shape":"diamond"},{"id":"ap","label":"An approximate answer, fast. Most AI systems live here","col":3,"row":1,"kind":"gold"},{"id":"ex","label":"An exact algorithm","col":0,"row":2,"kind":"accent"},{"id":"he","label":"A heuristic: a good guess with no guarantee","col":2,"row":2,"kind":"muted"}],"edges":[{"from":"q1","to":"q2","label":"yes"},{"from":"q1","to":"ap","label":"no","style":"gold"},{"from":"q2","to":"ex","label":"yes","style":"green"},{"from":"q2","to":"he","label":"no"}],"caption":"The right hand branch is not a lesser thing. Route planning, recommendations and every retrieval system in Chapter 6 deliberately choose an answer that is nearly right and arrives in time."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Correctness is the entry ticket, not the achievement.</div>
  <p>Here is the part people miss. Once two recipes are both correct, correctness stops being interesting and cost becomes the entire conversation. Three different correct ways to sort a million things:</p>

  <div class="viz" data-viz='{"type":"card","title":"Same result, three different recipes","eyebrow":"THE POINT","badge":"sort 1,000,000 items","width":450,"rows":[{"k":"Compare every pair","v":"about 1,000,000,000,000 steps","tone":"bad","bar":1},{"k":"Split, sort halves, merge","v":"about 20,000,000 steps","tone":"good","bar":0.05},{"k":"Already sorted, just check","v":"1,000,000 steps","tone":"good","bar":0.02},{"k":"Correctness of all three","v":"identical","tone":"good","bar":1}],"caption":"Every row produces exactly the same sorted list. The last row is why the first three matter: correctness is the entry ticket, not the achievement. Once several recipes are correct, cost is the only thing left to argue about."}'></div>

  <p>All three produce an identical sorted list. One of them would still be running next week. <strong>That is why this course spends so much time counting steps: it is the only remaining way to tell two correct answers apart.</strong> Chapter 2 turns that counting into something you can do at a glance.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five you triggered today, and which promise each one keeps.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Algorithms you personally trigger every day","unit":142,"nodes":[{"id":"a","label":"An algorithm","x":2,"y":1,"kind":"dark"},{"id":"s","label":"Spell check","x":0,"y":0,"kind":"box"},{"id":"m","label":"Route planning","x":0,"y":2,"kind":"box"},{"id":"r","label":"Feed ranking","x":4,"y":0,"kind":"box"},{"id":"c","label":"Photo search","x":4,"y":2,"kind":"box"},{"id":"p","label":"Card payment checks","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"a","to":"s","label":"exact"},{"from":"a","to":"m","label":"approximate"},{"from":"a","to":"r","label":"approximate"},{"from":"a","to":"c","label":"approximate"},{"from":"a","to":"p","label":"exact, and must finish","style":"gold"}],"caption":"Read the edge labels. Two of these must be exactly right. Three of them are allowed to be nearly right in exchange for arriving quickly, and everybody involved agreed to that trade on purpose."}'></div>

  <p>The payment check is the interesting one. It must be exactly correct and it must finish, because a card charge that is nearly right is fraud and one that never completes is a support ticket. The route to your friend, on the other hand, is allowed to be slightly suboptimal, and you would never notice. <strong>Every product quietly decides which of its algorithms are allowed to be approximate, and getting that wrong is a real category of failure.</strong></p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the promise each one is quietly reporting.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>Which promise broke</th></tr>
    <tr><td>"It hangs sometimes, but we cannot reproduce it"</td><td>No guaranteed ending</td><td>One: it does not always finish</td></tr>
    <tr><td>"It works for everybody except this one account"</td><td>An input nobody planned for</td><td>Two: correct on the cases tried, not on all of them</td></tr>
    <tr><td>"The report gives a different total each run"</td><td>Same input, different output</td><td>Three: it is not repeatable</td></tr>
    <tr><td>"It broke on an empty list"</td><td>The boundary case</td><td>Two, and it is almost always the empty case or the single item case</td></tr>
    <tr><td>"Just retry it and it usually goes through"</td><td>A workaround treated as a fix</td><td>One or two, and nobody has looked yet</td></tr>
    <tr><td>"It is fine, the AI is just non-deterministic"</td><td>Promise three waived without a decision</td><td>Three, which may be acceptable, but only if it was chosen rather than inherited</td></tr>
  </table>
  <div class="tbl-cap">The last row matters more every year. Giving up repeatability is a legitimate trade for a language model feature. Giving it up by accident, in a billing calculation, is not.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">A complaint that sounds like a maths bug and is not.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our revenue report gives a slightly different total every time we run it on the same date range. The difference is tiny, a few paise, but finance will not sign off on a number that moves."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"The report that is right on Monday and wrong on Friday","lanes":[{"label":"Finance"},{"label":"You"},{"label":"The report job"}],"steps":[{"id":"a1","lane":0,"col":0,"label":"Totals do not match last run","kind":"gold"},{"id":"b1","lane":1,"col":1,"label":"Ask: same input, same output?","kind":"box"},{"id":"b2","lane":1,"col":2,"label":"No. Promise three is broken","kind":"accent"},{"id":"c1","lane":2,"col":1,"label":"Reads rows in whatever order arrives first","kind":"bad"},{"id":"c2","lane":2,"col":3,"label":"Sorts first, then sums in a fixed order","kind":"accent"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"b2","style":"green"},{"from":"b2","to":"c2","style":"green","label":"make it deterministic"}],"caption":"Nobody wrote a wrong calculation. The steps were correct and they finished. They just were not the same steps twice, and a report that cannot be reproduced cannot be trusted even when it happens to be right."}'></div>

  <p><strong>The answer.</strong> The job reads rows from several sources in whatever order they arrive, and adds decimal amounts in that order. Adding the same decimals in a different order can land on a different final digit. Nothing is miscalculated and nothing is missing. Promise three was broken, so the fix is to impose a fixed order before summing, and to add in a form that does not drift.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It refused to hunt for a wrong number, because there was not one. It asked <strong>which of the three promises is failing</strong>, saw immediately that the same input gave different output, and that single observation eliminated every explanation involving missing rows or bad maths.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, no code</div>
    <p>Write down, in ordinary sentences, the exact steps for a task you do without thinking: making chai, or getting from your home to the nearest station. Now hand it to somebody who has never done it and watch where they stop. <strong>Every place they hesitate is an ambiguous step</strong>, and every "then just keep going until it looks right" is a missing guarantee. This is the same review an engineer does, on the same kind of failure.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A feature works perfectly in every demo and every test, on every input the team tried. Which of the three promises has been demonstrated?</div>
    <div class="opt" data-i="0">All three, since it behaved correctly each time</div>
    <div class="opt" data-i="1">None of them, because a promise is about every input, not the ones that were tried</div>
    <div class="opt" data-i="2">Only the first, because it finished on each run</div>
    <div class="qexp">A demo proves it worked on the inputs somebody chose. All three promises are statements about inputs nobody chose: the empty one, the enormous one, the strange one, and the one that arrives at exactly the wrong moment. This is precisely why "it works on my machine" is not an argument.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">A route planner returns a path that is two minutes slower than the true best route. Is it broken?</div>
    <div class="opt" data-i="0">Yes, an algorithm must produce the correct answer</div>
    <div class="opt" data-i="1">Yes, unless the user is told</div>
    <div class="opt" data-i="2">No, if it was deliberately built as an approximate algorithm that trades exactness for arriving in time</div>
    <div class="qexp">Finding the provably optimal route across a whole country, for every request, is exact and unusable. Approximation here is a design decision, not a defect. The failure would be making the same trade silently in a place where exactness was the requirement, such as a payment or a payroll calculation.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>You have the arrangements and you have the recipes. The last lesson of this chapter is the rule that governs both, and it is the one sentence the whole course keeps coming back to.</p>
  </div>
__NAV__
</div>`,

"1.4": `<div class="wrap">
  <div class="les-kicker">Chapter 1 · Lesson 1.4</div>
  <h1 class="les-title">The Trade That Never Goes Away: Time, Space and Order</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~12 min</span>
    <span class="pill gold">the chapter through line</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">Every structure is fast at something because it agreed to be slow at something else.</p>

  <p class="lead">This is the last lesson of the chapter and the one the other three were building toward. A data structure is a decision about how you lay things down, and that decision spends one of exactly three currencies to buy another. Once you can name which currency was spent, most technical arguments you will ever sit through resolve themselves in about a minute.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Two kitchens, and the same cook.</div>
  <p>In the first kitchen every ingredient and tool is out on the counter. Nothing takes more than a second to reach, and there is nowhere left to actually work. In the second everything is packed neatly into cupboards. There is space to cook, and every single item is a small search.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Two kitchens, same cook, same meal","width":700,"height":250,"items":[{"icon":"shelf","x":150,"y":118,"kind":"gold","label":"everything out on the counter"},{"icon":"person","x":390,"y":112,"kind":"accent","label":"the same cook, the same meal"},{"icon":"pile","x":610,"y":122,"kind":"muted","label":"everything packed away in cupboards"}],"arrows":[{"x1":330,"y1":118,"x2":222,"y2":118,"style":"gold","label":"instant to reach, no room to work"},{"x1":452,"y1":118,"x2":560,"y2":120,"style":"green","label":"tidy, but every item is a search"}],"caption":"Neither kitchen is wrong. One spent space to buy time, the other spent time to buy space. Every structure in this course is standing in one of these two kitchens."}'></div>

  <p>Neither cook is wrong, and neither kitchen is badly designed. One spent space to buy time. The other spent time to buy space. <strong>If you tried to build a kitchen with no trade in it, you would just be describing a kitchen you have not used yet.</strong></p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">There are only three things to spend.</div>
  <p><em class="k">Time</em> is how long an operation takes. <em class="k">Space</em> is how much memory you are holding. <em class="k">Order</em> is the tidiness you promise to maintain, and unlike the other two it is paid for on every single write, forever.</p>

  <div class="viz" data-viz='{"type":"arch","title":"The three currencies, and what buys what","maxChars":15,"nodes":[{"id":"c","label":"Every design decision","col":1,"row":1,"kind":"dark"},{"id":"t","label":"Time: how long an operation takes","col":0,"row":0,"kind":"accent"},{"id":"s","label":"Space: how much memory you hold","col":2,"row":0,"kind":"gold"},{"id":"o","label":"Order: the tidiness you maintain on every write","col":1,"row":2,"kind":"accent"}],"edges":[{"from":"c","to":"t","label":"spend to save"},{"from":"c","to":"s","label":"spend to save"},{"from":"c","to":"o","label":"spend to save","style":"green"}],"caption":"There are only three things to spend. A cache spends space to buy time. An index spends write time to buy read time. A sorted list spends order on every insert to buy fast searching later. That is the whole vocabulary."}'></div>

  <div class="callout accent">
    <div class="ch">Order is the one people forget</div>
    <p>Time and space are obvious, and everybody counts them. Order is the quiet third currency: a sorted list, a balanced tree and a database index all promise to stay tidy, and <strong>that promise is re-paid on every insert for the life of the system.</strong> Most surprising slowdowns in real products are an order bill arriving.</p>
  </div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The same two structures, judged twice, with opposite verdicts.</div>
  <p>You saw both of these structures in Lesson 1.2. This time watch them being judged on two different jobs in a single run, and watch the verdict flip halfway through.</p>

  <div class="board" data-anim='{"type":"race","title":"One structure, two jobs, two verdicts","speed":1400,"legend":[["working now","look"],["walked or moved","seen"],["done","found"]],"tracks":[{"label":"Row","data":["A","B","C","D","E","F","G","H"]},{"label":"Chain","data":["A","B","C","D","E","F","G","H"]}],"steps":[{"say":"<b>Job one: read the sixth item.</b> Watch who wins.","lanes":[{"look":[5],"count":1},{"look":[0],"count":1}]},{"say":"The row calculated an address and landed. The chain is still walking. Row wins, comfortably.","lanes":[{"found":[5],"count":1},{"look":[3],"seen":[0,1,2],"count":4}]},{"say":"Row: 1. Chain: 6. If you stopped here you would conclude the row is simply the better structure.","lanes":[{"found":[5],"count":1},{"found":[5],"seen":[0,1,2,3,4],"count":6}]},{"say":"<b>Job two: insert at the front.</b> Same two structures. Same eight items. Nothing else changed.","lanes":[{"look":[0],"count":0},{"look":[0],"count":0}]},{"say":"The row has no gap, so everything shifts right. The chain writes one node and changes one address.","lanes":[{"seen":[0,1,2,3,4,5,6,7],"count":8},{"found":[0],"count":2}]},{"say":"Row: 8. Chain: 2. <b>The verdict reversed, and neither structure changed.</b> Only the job did.","lanes":[{"found":[0],"seen":[1,2,3,4,5,6,7],"count":8},{"found":[0],"count":2}]},{"say":"This is the trade that never goes away. <b>Every structure is fast at something because it agreed to be slow at something else.</b> There is no version of this course where that stops being true.","lanes":[{"found":[0],"seen":[1,2,3,4,5,6,7],"count":8},{"found":[0],"count":2}]}],"caption":"Keep both counters in your head. When somebody asks whether a structure is fast, the only honest first move is to ask which of these two jobs the product actually does more often."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Which state of its life the bill actually lands in.</div>

  <div class="viz" data-viz='{"type":"state","title":"Where the bill is actually paid","maxChars":16,"nodes":[{"id":"b","label":"Built once","col":0,"row":1,"kind":"accent"},{"id":"w","label":"Written to, constantly","col":1,"row":0,"kind":"gold"},{"id":"r","label":"Read from, constantly","col":1,"row":2,"kind":"accent"},{"id":"g","label":"Grown beyond its plan","col":2,"row":1,"kind":"muted"}],"edges":[{"from":"b","to":"w","label":"first insert"},{"from":"b","to":"r","label":"first query"},{"from":"w","to":"r","label":"order maintained","style":"green"},{"from":"r","to":"w","label":"new data arrives"},{"from":"w","to":"g","label":"capacity exceeded"},{"from":"g","to":"b","label":"rebuilt, expensively"}],"caption":"Most people only ever look at the read state, because that is the one users experience. The cost of keeping order lives in the write state, and the rebuild at the right hand side is the one nobody plans for."}'></div>

  <p>Users only ever experience the read state, so that is the one everybody optimises and the one every dashboard measures. The cost of keeping order lands in the write state, where nobody is watching, and the rebuild lands during an import at two in the morning. <strong>A trade is not hidden because somebody hid it. It is hidden because it is paid somewhere else.</strong></p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">The five trades you will meet over and over.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The trade</th><th>What you spend</th><th>What you buy</th><th>Where it shows up</th></tr>
    <tr><td><strong>Cache</strong></td><td>Memory, and freshness</td><td>Time on repeated reads</td><td>Every app you have ever used</td></tr>
    <tr><td><strong>Index</strong></td><td>Write speed, and storage</td><td>Time on searches</td><td>Databases, search engines, Chapter 6</td></tr>
    <tr><td><strong>Sorting up front</strong></td><td>One expensive pass, and order on every insert</td><td>Cheap searching and cheap ranges, forever after</td><td>Chapter 7</td></tr>
    <tr><td><strong>Precomputing</strong></td><td>Storage, and freshness</td><td>Instant answers to expected questions</td><td>Feeds, dashboards, recommendations</td></tr>
    <tr><td><strong>Compression</strong></td><td>Time on every read and write</td><td>Space, and network cost</td><td>Images, video, backups, vector indexes</td></tr>
  </table>
  <div class="tbl-cap">Read the third column on its own and every row sounds like a free win. That is exactly how these decisions get made badly. The second column is the one that arrives later.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which currency can you afford to spend","maxChars":18,"nodes":[{"id":"q1","label":"Is reading far more frequent than writing?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"y","label":"Spend on writes: sort it, index it, cache it","col":0,"row":1,"kind":"accent"},{"id":"q2","label":"Is memory the tight constraint?","col":2,"row":1,"kind":"gold","shape":"diamond"},{"id":"n1","label":"Keep it simple and unordered. Pay on each read","col":1,"row":2,"kind":"muted"},{"id":"n2","label":"Spend space freely: caches, indexes, extra copies","col":3,"row":2,"kind":"accent"}],"edges":[{"from":"q1","to":"y","label":"yes","style":"green"},{"from":"q1","to":"q2","label":"no"},{"from":"q2","to":"n1","label":"yes"},{"from":"q2","to":"n2","label":"no","style":"green"}],"caption":"Two questions, and notice that neither of them is about the data. They are about your traffic. The same dataset in two different products wants two different structures."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The full invoice for one very ordinary decision.</div>
  <p>A team adds a search index because finding a row takes four seconds. Here is what actually happened, all of it, rather than the one line that made it into the update.</p>

  <div class="viz" data-viz='{"type":"card","title":"Adding a search index to a table","eyebrow":"THE FULL BILL","badge":"what you actually bought","width":460,"rows":[{"k":"Read: find one row","v":"4 seconds to 9 ms","tone":"good","bar":0.02},{"k":"Write: insert one row","v":"about 20 percent slower","tone":"bad","bar":0.2},{"k":"Storage used","v":"up 15 to 30 percent","tone":"bad","bar":0.3},{"k":"Rebuild after bulk import","v":"minutes, not seconds","tone":"bad","bar":0.5}],"caption":"Only the first row ever makes it into the summary. The other three are real, and they arrive later, on a different team, which is exactly why they get forgotten. Numbers here are illustrative of the shape, not measurements of any one system."}'></div>

  <p>The first row is real and worth having. The other three are also real. <strong>The skill being taught here is not avoiding trades, it is stating the whole invoice before you sign it</strong>, so that when writes slow down next month nobody treats it as a mystery.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">One ordinary product, four deliberate trades.</div>

  <div class="viz" data-viz='{"type":"arch","title":"One product, four trades, all made on purpose","maxChars":15,"nodes":[{"id":"u","label":"A user opens the app","col":0,"row":1,"kind":"gold"},{"id":"c","label":"Cache: spends memory to buy time","col":1,"row":0,"kind":"accent"},{"id":"i","label":"Index: spends write speed to buy read speed","col":1,"row":2,"kind":"accent"},{"id":"q","label":"Queue: spends latency to buy fairness and survival","col":2,"row":1,"kind":"accent"},{"id":"p","label":"Precomputed feed: spends freshness to buy instant loading","col":3,"row":0,"kind":"gold"},{"id":"d","label":"The database","col":3,"row":2,"kind":"muted","shape":"cyl"}],"edges":[{"from":"u","to":"c","label":"first"},{"from":"u","to":"i"},{"from":"c","to":"p","style":"green"},{"from":"i","to":"d","style":"green"},{"from":"q","to":"d"}],"caption":"Four boxes, four different currencies spent, and every one of them was a deliberate decision somebody could defend. A system with no trades in it is not a simple system. It is a system that has not met real traffic yet."}'></div>

  <p>Every box in that picture is somebody spending one currency to buy another, on purpose. The cache spends memory for speed. The index spends write time for read time. The queue spends immediacy for fairness and for the ability to survive a spike. The precomputed feed spends freshness for an instant open. <strong>A system with no trades in it has not met real traffic yet.</strong></p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the currency each one is really about.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>Which currency is being spent</th></tr>
    <tr><td>"We added an index and imports got slow"</td><td>One operation improved, another degraded</td><td>Write time, spent to buy read time. Working as designed</td></tr>
    <tr><td>"The app is fast but uses a lot of memory"</td><td>Speed with a weight to it</td><td>Space, spent to buy time. Usually a cache</td></tr>
    <tr><td>"The dashboard is instant but the numbers lag"</td><td>Fast and slightly wrong</td><td>Freshness, spent to buy time. Something is precomputed</td></tr>
    <tr><td>"Everything is fine until the nightly job"</td><td>A bill that arrives in batches</td><td>Order, being repaid in bulk during a rebuild</td></tr>
    <tr><td>"Can we make it faster without changing anything else?"</td><td>A request with no currency offered</td><td>None, which is why the honest answer is a question back</td></tr>
    <tr><td>"Let us just cache it"</td><td>A trade proposed without its cost</td><td>Space and freshness, and somebody has to own the staleness</td></tr>
  </table>
  <div class="tbl-cap">Row five is the one to memorise. When a request contains no currency, your job is not to say no. It is to say what it would cost, and let the person choose.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">A complaint that is really a receipt.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"We added the search index last sprint and search is genuinely great now. But our nightly import used to take eight minutes and now it takes fifty. Should we roll back the index?"</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"We added an index and now writes are slow","lanes":[{"label":"The team"},{"label":"You"},{"label":"The system"}],"steps":[{"id":"a1","lane":0,"col":0,"label":"Search got fast, imports got slow","kind":"gold"},{"id":"b1","lane":1,"col":1,"label":"Ask: what did the index actually buy?","kind":"box"},{"id":"b2","lane":1,"col":2,"label":"Read speed, paid for with write speed","kind":"accent"},{"id":"c1","lane":2,"col":1,"label":"Every insert now also updates the index","kind":"bad"},{"id":"c2","lane":2,"col":3,"label":"Drop the index, bulk import, rebuild once","kind":"accent"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"b2","style":"green"},{"from":"b2","to":"c2","style":"green","label":"pay it once, not per row"}],"caption":"Nothing regressed and nothing is broken. The team received exactly what they paid for, and the invoice simply arrived on a different operation from the one they were watching."}'></div>

  <p><strong>The answer.</strong> Do not roll back. The index is doing exactly what it was bought to do, and the import got slower because every one of its inserts now also updates the index. The fix is to stop paying that cost per row: drop the index, run the bulk import, then rebuild the index once at the end. You pay the order bill a single time instead of a million times.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It refused to treat the slowdown as a regression. It asked <strong>what did we buy, and what did we agree to pay</strong>, recognised the invoice, and then moved <em class="k">when</em> the bill is paid rather than trying to avoid it. Almost every good performance fix has that shape: not removing a cost, but relocating it to a moment nobody is waiting.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, no code</div>
    <p>Think of one feature in a product you use that feels instant. Write two sentences: <strong>what must have been spent to make it feel that way</strong>, and <strong>where you would expect to find the bill</strong>. Memory? Stale data? A slow write somewhere the user never sees? You are not guessing at their architecture. You are reading a receipt from the outside, and after this chapter you can do that.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A team is asked to make reads faster without using more memory and without slowing writes. What is the correct response?</div>
    <div class="opt" data-i="0">Look harder for a more efficient algorithm</div>
    <div class="opt" data-i="1">Point out that no currency has been offered, and ask which one they are willing to spend</div>
    <div class="opt" data-i="2">Accept it and cache the results</div>
    <div class="qexp">Occasionally a genuinely better algorithm exists and you should look once. But a request with no currency attached is not a technical problem, it is an unmade decision, and returning it as a question is the useful move. Option two hides the answer rather than giving it: caching spends both memory and freshness.</div>
  </div>

  <div class="quiz" data-correct="0">
    <div class="q">Why is order described as a different kind of cost from time and space?</div>
    <div class="opt" data-i="0">Because it is re-paid on every write for the life of the system, not once at the start</div>
    <div class="opt" data-i="1">Because it only applies to sorted data</div>
    <div class="opt" data-i="2">Because it cannot be measured</div>
    <div class="qexp">You buy memory once and you spend time per operation, but a promise to stay tidy has to be honoured every single time anything changes. That is why adding an index feels free on day one and shows up on the import job in month three, and it is the mechanism behind the worked problem above.</div>
  </div>

  <div class="callout good">
    <div class="ch">Chapter 1 complete</div>
    <p>A data structure is a decision about how you lay things down, and every later cost follows from that one decision. You have the boxes, both arrangements, the three promises an algorithm makes, and the three currencies every design spends. Next: the whiteboard, and then a whole chapter on learning to count what any of it costs at a glance.</p>
  </div>
__NAV__
</div>`,

"1.5": `<div class="wrap">
  <div class="les-kicker">Chapter 1 · Lesson 1.5</div>
  <h1 class="les-title">The Whiteboard: How a Computer Holds a Thing</h1>
  <div class="les-meta">
    <span class="pill">whiteboard</span><span class="pill">~1.5 min</span>
    <span class="pill gold">watch, do not read</span><span class="pill">11 acts</span>
  </div>

  <p class="motto">If you can watch it happen once, you never have to memorise it.</p>

  <p class="lead">The whole chapter with the prose taken out. Eleven acts in four parts. Part 2 is the mechanisms you just read about. <strong>Part 3 runs those exact same mechanisms inside a photo, an undo button, a database index, and a chat app that freezes for half a second.</strong> If any idea in this chapter has not landed yet, it lands there. One decision about how you lay things down, and every cost in the chapter following from it.</p>
</div>

<div class="reel" data-reel='{"title":"How a computer holds a thing, in one continuous run","speed":1500,"caption":"Eleven acts, about 1.5 minutes end to end. Part 2 shows the mechanisms. Part 3 runs those exact same mechanisms inside a photo, an undo button, a database index and a chat app that freezes. Nothing here needs code.","acts":[{"part":"Part 1 · The idea","tab":"Boxes and labels","title":"Act 1 · There is only one thing underneath everything","type":"reveal","speed":1650,"viz":{"maxChars":16,"gy":48,"nodes":[{"id":"m","label":"Memory: numbered boxes, all the same size, in order","col":1,"row":0,"kind":"dark"},{"id":"n","label":"The name you wrote","col":0,"row":1,"kind":"gold"},{"id":"a","label":"A box number","col":1,"row":1,"kind":"accent"},{"id":"v","label":"A value sitting in it","col":2,"row":1,"kind":"accent"},{"id":"d","label":"A data structure: how you lay things down in those boxes","col":1,"row":2,"kind":"dark"}],"edges":[{"from":"m","to":"a"},{"from":"n","to":"a","label":"is only a label for"},{"from":"a","to":"v","label":"which holds","style":"green"},{"from":"a","to":"d","style":"green"}]},"steps":[{"show":["m"],"look":["m"],"say":"Everything starts here. A very long row of numbered boxes, all the same size, sitting in order. That is memory, and there is nothing else."},{"show":["m","n","a"],"look":["n"],"say":"The names you write are for you. <b>They are gone by the time the program runs.</b> What survives is a number."},{"show":["m","n","a","v"],"found":["v"],"say":"That number is the box, and the box holds the value. A computer does not know what anything is. It only knows where things are."},{"show":["m","n","a","v","d"],"found":["d"],"say":"<b>And a data structure is nothing more than a decision about how you lay things down in those boxes.</b> Every cost in the next eighteen chapters follows from that one decision."}]},{"part":"Part 2 · The mechanisms","tab":"Position is arithmetic","title":"Act 2 · Reaching the third thing without counting to three","type":"array-scan","speed":1500,"big":true,"data":[42,17,88,5,63,91,30,74],"labels":["1040","1044","1048","1052","1056","1060","1064","1068"],"countLabel":" calculation","legend":[["being reached","look"],["already placed","seen"],["landed on it","found"]],"steps":[{"look":[0],"ptr":{"i":0},"count":1,"say":"Eight numbers, back to back. The first lives in box 1040, and every box is four wide."},{"look":[2],"seen":[0,1],"ptr":{"i":2},"count":1,"say":"Give me the third one. A person counts along. A computer does not."},{"found":[2],"seen":[0,1],"ptr":{"i":2},"count":1,"say":"1040, plus 2, times 4, equals 1048. <b>One calculation. No counting, no walking, no searching.</b>"},{"found":[6],"ptr":{"i":6},"count":1,"say":"The seventh? Still one calculation. <b>The seven millionth would also be one calculation.</b> This is the only operation in the whole course that does not care how much data you have."}]},{"part":"Part 2 · The mechanisms","tab":"Reach: row versus chain","title":"Act 3 · Two arrangements, asked to reach the sixth thing","type":"race","speed":1200,"legend":[["working now","look"],["already walked","seen"],["arrived","found"]],"tracks":[{"label":"Together","data":["A","B","C","D","E","F","G","H"]},{"label":"Linked","data":["A","B","C","D","E","F","G","H"]}],"steps":[{"say":"Same eight things, stored two different ways. Reach the sixth one.","lanes":[{"look":[5],"count":1},{"look":[0],"count":1}]},{"say":"The block calculated an address and landed, never touching the five before it. The chain has no address to calculate, so it walks.","lanes":[{"found":[5],"count":1},{"look":[2],"seen":[0,1],"count":3}]},{"say":"<b>Six steps against one.</b> At a million items it is a million against one, and that gap is not going to close.","lanes":[{"found":[5],"count":1},{"found":[5],"seen":[0,1,2,3,4],"count":6}]}]},{"part":"Part 2 · The mechanisms","tab":"Insert: the verdict flips","title":"Act 4 · Same two arrangements, one different job","type":"race","speed":1600,"legend":[["must move","seen"],["being edited","look"],["done","found"]],"tracks":[{"label":"Together","data":["A","B","C","D","E","F","G","H"]},{"label":"Linked","data":["A","B","C","D","E","F","G","H"]}],"steps":[{"say":"Nothing has changed except the question. Now insert something at the very front.","lanes":[{"look":[0],"count":0},{"look":[0],"count":0}]},{"say":"The block has no gap and cannot make one from nothing, so <b>every item shifts right</b>. The chain writes one node and changes one address.","lanes":[{"seen":[0,1,2,3,4,5,6,7],"count":8},{"found":[0],"count":2}]},{"say":"<b>Eight moves against two edits. The winner reversed, and neither structure changed.</b> Only the job did. That is the trade that never goes away.","lanes":[{"found":[0],"seen":[1,2,3,4,5,6,7],"count":8},{"found":[0],"count":2}]}]},{"part":"Part 2 · The mechanisms","tab":"What a link is","title":"Act 5 · A pointer is not magic, it is a number","type":"reveal","speed":1600,"viz":{"maxChars":16,"gy":48,"nodes":[{"id":"n","label":"One node","col":0,"row":0,"kind":"dark"},{"id":"v","label":"The value: 42","col":1,"row":0,"kind":"accent"},{"id":"p","label":"A box number: 2096","col":1,"row":1,"kind":"gold"},{"id":"x","label":"another node, somewhere completely unrelated","col":2,"row":1,"kind":"muted"}],"edges":[{"from":"n","to":"v","label":"holds"},{"from":"n","to":"p","label":"and holds"},{"from":"p","to":"x","label":"follow it","style":"gold"}]},"steps":[{"show":["n"],"look":["n"],"say":"Open one link of the chain from Act 3 and there are exactly two things inside it."},{"show":["n","v"],"found":["v"],"say":"The value. Obvious."},{"show":["n","v","p"],"look":["p"],"say":"And a second box holding <b>a number</b>. Not a connection, not a relationship. Just a number, that happens to be the number of another box."},{"show":["n","v","p","x"],"found":["x"],"say":"<b>That one move is the whole basis of Chapters 9 to 13.</b> Trees, graphs, file systems, the page you are reading. All of it is boxes holding the numbers of other boxes."}]},{"part":"Part 2 · The mechanisms","tab":"The three promises","title":"Act 6 · What separates an algorithm from a hope","type":"reveal","speed":1600,"viz":{"maxChars":16,"gy":48,"nodes":[{"id":"r","label":"A list of steps","col":1,"row":0,"kind":"dark"},{"id":"f","label":"Does it always finish?","col":0,"row":1,"kind":"gold","shape":"diamond"},{"id":"c","label":"Is it correct on every input?","col":1,"row":1,"kind":"gold","shape":"diamond"},{"id":"d","label":"Same input, same answer?","col":2,"row":1,"kind":"gold","shape":"diamond"},{"id":"ok","label":"An algorithm","col":1,"row":2,"kind":"accent"},{"id":"no","label":"A procedure that works until it does not","col":3,"row":2,"kind":"bad"}],"edges":[{"from":"r","to":"f"},{"from":"r","to":"c"},{"from":"r","to":"d"},{"from":"f","to":"ok","label":"yes","style":"green"},{"from":"c","to":"ok","label":"yes","style":"green"},{"from":"d","to":"ok","label":"yes","style":"green"},{"from":"d","to":"no","label":"no"}]},"steps":[{"show":["r"],"look":["r"],"say":"Steps alone are not an algorithm. Three questions decide it."},{"show":["r","f"],"look":["f"],"say":"<b>Does it always finish?</b> Not usually. Always."},{"show":["r","f","c"],"look":["c"],"say":"<b>Is it correct on every input?</b> Including the empty one, the enormous one, and the strange one nobody tried."},{"show":["r","f","c","d"],"look":["d"],"say":"<b>Same input, same answer?</b> If not, you cannot test it and you cannot trust it."},{"show":["r","f","c","d","ok"],"found":["ok"],"say":"Three yeses, and only then does it earn the word."},{"show":["r","f","c","d","ok","no"],"found":["ok"],"look":["no"],"say":"<b>One no, and this is what you shipped.</b> It looks identical in a demo. The difference appears later, on somebody else."}]},{"part":"Part 3 · The same ideas, in things you used today","tab":"A photo","title":"Act 7 · A photo is Act 2 with a much longer row","type":"array-scan","speed":1500,"big":true,"data":[18,42,240,255,120,64,90,200],"labels":["p0","p1","p2","p3","p4","p5","p6","p7"],"countLabel":" calculation","legend":[["being reached","look"],["must move","seen"],["landed on it","found"]],"steps":[{"look":[0],"count":1,"say":"Your phone does not store a photo as a photo. It stores <b>one very long row of numbers</b>, three per pixel, and something else agrees to read that row as an image."},{"found":[4],"ptr":{"i":4},"count":1,"say":"Want the pixel at row 200, column 640? Width times 200, plus 640, times 3. <b>One calculation.</b> This is Act 2, unchanged, with a row a few million boxes long."},{"found":[4],"ptr":{"i":4},"count":1,"say":"Which is why cropping is cheap: you are just reading a different stretch of the same row."},{"seen":[0,1,2,3,4,5,6,7],"count":8,"say":"<b>And why inserting a row of pixels into the middle is not.</b> Act 4, unchanged. Same arrangement, same bill."}]},{"part":"Part 3 · The same ideas, in things you used today","tab":"Undo","title":"Act 8 · Undo is Act 3, and it is linked on purpose","type":"graph-walk","speed":1400,"unit":118,"legend":[["where you are now","look"],["already undone","seen"],["arrived","found"]],"nodes":[{"id":"e1","label":"type","x":0,"y":0},{"id":"e2","label":"bold","x":1,"y":0},{"id":"e3","label":"paste","x":2,"y":0},{"id":"e4","label":"delete","x":3,"y":0},{"id":"e5","label":"type","x":4,"y":0}],"edges":[{"from":"e1","to":"e2"},{"from":"e2","to":"e3"},{"from":"e3","to":"e4"},{"from":"e4","to":"e5"}],"steps":[{"look":["e5"],"say":"Every edit you make in any editor is one node that knows the edit before it. A chain, exactly as in Act 3."},{"look":["e4"],"seen":["e5"],"edges":["e4-e5"],"say":"Press undo. Follow one address backwards. <b>Nothing moved and nothing was copied.</b>"},{"look":["e3"],"seen":["e4","e5"],"edges":["e3-e4","e4-e5"],"say":"Again. Adding a new edit is two edits to the chain, which is Act 4 with the winner on the other side."},{"found":["e2"],"seen":["e3","e4","e5"],"edges":["e2-e3","e3-e4","e4-e5"],"say":"<b>And nobody has ever asked for the 40,000th undo by position.</b> The slow operation of a chain is the one this feature never performs, which is exactly why it is the right arrangement."}]},{"part":"Part 3 · The same ideas, in things you used today","tab":"Adding an index","title":"Act 9 · The full invoice nobody reads","type":"reveal","speed":1650,"viz":{"maxChars":15,"gy":46,"nodes":[{"id":"p","label":"Finding one row takes 4 seconds","col":0,"row":1,"kind":"bad"},{"id":"i","label":"Add a search index","col":1,"row":1,"kind":"gold"},{"id":"g","label":"Reads: 4 seconds becomes 9 milliseconds","col":2,"row":0,"kind":"accent"},{"id":"w","label":"Writes: every insert now also updates the index","col":2,"row":1,"kind":"bad"},{"id":"s","label":"Storage: up by a quarter","col":2,"row":2,"kind":"bad"},{"id":"r","label":"Bulk imports: minutes instead of seconds","col":3,"row":2,"kind":"bad"}],"edges":[{"from":"p","to":"i"},{"from":"i","to":"g","label":"what you bought","style":"green"},{"from":"i","to":"w","label":"what you paid"},{"from":"i","to":"s","label":"what you paid"},{"from":"s","to":"r"}]},"steps":[{"show":["p"],"look":["p"],"say":"A real and ordinary complaint. Finding one row takes four seconds, and it gets worse every month."},{"show":["p","i"],"look":["i"],"say":"So the team adds an index, which is Act 5 kept on disk: order maintained as a shape."},{"show":["p","i","g"],"found":["g"],"say":"<b>And it works.</b> Four seconds becomes nine milliseconds. This is the line that goes in the update."},{"show":["p","i","g","w"],"look":["w"],"say":"Here is the rest of the invoice. Every insert now also updates the index, so writes got slower."},{"show":["p","i","g","w","s"],"look":["s"],"say":"Storage went up, because the index is a second copy of the order."},{"show":["p","i","g","w","s","r"],"look":["r"],"say":"<b>And the nightly import went from eight minutes to fifty.</b> Nothing regressed. The bill simply arrived on an operation nobody was watching."}]},{"part":"Part 3 · The same ideas, in things you used today","tab":"When you pick wrong","title":"Act 10 · The chat that freezes, and why it is not a rendering bug","type":"race","speed":1600,"legend":[["must move","seen"],["being edited","look"],["done","found"]],"tracks":[{"label":"Messages in a row","data":["A","B","C","D","E","F","G","H"]},{"label":"Messages linked","data":["A","B","C","D","E","F","G","H"]}],"steps":[{"say":"A group chat with 40,000 messages freezes for half a second every time a new one arrives. Small groups are fine. The message itself is tiny.","lanes":[{"look":[0],"count":0},{"look":[0],"count":0}]},{"say":"New messages go to the front. The messages are stored together. <b>So every single arrival shifts 40,000 items right by one.</b>","lanes":[{"seen":[0,1,2,3,4,5,6,7],"count":8},{"look":[0],"count":1}]},{"say":"Linked, the same arrival is two edits, at forty thousand messages or at four million.","lanes":[{"seen":[0,1,2,3,4,5,6,7],"count":8},{"found":[0],"count":2}]},{"say":"<b>The most frequent operation in the product was the one the chosen arrangement is worst at.</b> Not a rendering bug, not the network. An arrangement chosen before anyone knew what the app would spend its day doing.","lanes":[{"found":[0],"seen":[1,2,3,4,5,6,7],"count":8},{"found":[0],"count":2}]}]},{"part":"Part 4 · The map","tab":"The map","title":"Act 11 · The whole chapter, on one page","type":"reveal","speed":1700,"viz":{"maxChars":16,"gy":48,"nodes":[{"id":"s","label":"Many things to store","col":2,"row":0,"kind":"dark"},{"id":"q1","label":"Read by position, or rearrange constantly?","col":2,"row":1,"kind":"gold","shape":"diamond"},{"id":"tog","label":"Together: a row. Position is arithmetic","col":0,"row":2,"kind":"accent"},{"id":"lnk","label":"Linked: a chain. Rewiring is two edits","col":4,"row":2,"kind":"gold"},{"id":"q2","label":"Do the steps make all three promises?","col":2,"row":2,"kind":"gold","shape":"diamond"},{"id":"pr","label":"Finishes, correct, repeatable","col":2,"row":3,"kind":"accent"},{"id":"cur","label":"Now name the currency you spent: time, space or order","col":2,"row":4,"kind":"dark"}],"edges":[{"from":"s","to":"q1"},{"from":"q1","to":"tog","label":"read"},{"from":"q1","to":"lnk","label":"rearrange","style":"gold"},{"from":"tog","to":"q2","style":"green"},{"from":"lnk","to":"q2","style":"green"},{"from":"q2","to":"pr","label":"all three yes","style":"green"},{"from":"pr","to":"cur","style":"green"}]},"steps":[{"show":["s"],"look":["s"],"say":"Eleven acts collapse into three decisions."},{"show":["s","q1"],"look":["q1"],"say":"<b>Decision one.</b> Will you mostly read by position, or mostly rearrange? There is no third option and there never will be."},{"show":["s","q1","tog"],"found":["tog"],"say":"Read: keep it together. Acts 2, 3 and 7. Position becomes arithmetic, and rearranging becomes expensive."},{"show":["s","q1","tog","lnk"],"found":["lnk"],"say":"Rearrange: link it. Acts 4, 5 and 8. Rewiring becomes two edits, and reaching becomes a walk."},{"show":["s","q1","tog","lnk","q2"],"look":["q2"],"say":"<b>Decision two.</b> Whatever steps you then run over it: do they finish, are they correct, are they repeatable?"},{"show":["s","q1","tog","lnk","q2","pr"],"found":["pr"],"say":"Three yeses, from Act 6. One no and you have shipped something that only looks like it works."},{"show":["s","q1","tog","lnk","q2","pr","cur"],"found":["cur"],"say":"<b>Decision three, and the one people skip.</b> Name the currency. Act 9 is what happens when you buy without reading the invoice, and Act 10 is what happens when you never ask the first question at all."},{"show":["s","q1","tog","lnk","q2","pr","cur"],"say":"<b>Every structure is fast at something because it agreed to be slow at something else.</b> That sentence is the chapter, and it does not stop being true in any of the eighteen chapters after this one."}]}]}'></div>

<div class="wrap" style="padding-top:34px;">
  <h2><span class="ix gold">✓</span> What You Just Watched</h2>

  <div class="tbl-wrap"><table>
    <tr><th>Act</th><th>The idea</th><th>Where it came back in Part 3</th></tr>
    <tr><td>1</td><td>Memory is numbered boxes, and a structure is how you lay things down in them</td><td>Underneath all four</td></tr>
    <tr><td>2</td><td>Position is arithmetic, so reaching costs the same at any size</td><td>Act 7, a photo is one very long row</td></tr>
    <tr><td>3</td><td>A chain cannot jump, so reaching is a walk</td><td>Act 8, undo follows one address back</td></tr>
    <tr><td>4</td><td>Insert at the front reverses the verdict completely</td><td>Act 10, the chat that freezes</td></tr>
    <tr><td>5</td><td>A pointer is just a number that happens to be another box number</td><td>Act 9, an index is order kept as a shape</td></tr>
    <tr><td>6</td><td>Finishes, correct, repeatable. All three, or it is not an algorithm</td><td>The bar every Part 3 fix has to clear</td></tr>
  </table>
  <div class="tbl-cap">Read the right hand column down the page. Not one idea in Part 3 was new. They were the same six mechanisms, standing inside products you have used this week.</div></div>

  <div class="callout accent">
    <div class="ch">The line to carry into Chapter 2</div>
    <p>Every structure is fast at something <strong>because it agreed to be slow at something else.</strong> You now know the two arrangements and the three currencies. The only thing missing is a way to price them at a glance, which is the entire next chapter.</p>
  </div>

  <div class="callout warn">
    <div class="ch">And the line from Act 10</div>
    <p>The chat did not freeze because of rendering or the network. It froze because <strong>the most frequent operation in the product was the one the chosen arrangement is worst at.</strong> That mistake is never visible in a demo, because a demo has eight messages, not forty thousand.</p>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">In Act 3 the row won and in Act 4 the chain won. What actually changed between them?</div>
    <div class="opt" data-i="0">The chain was given fewer items to walk through</div>
    <div class="opt" data-i="1">Only the job changed. Reaching favours arithmetic, rearranging favours rewiring</div>
    <div class="opt" data-i="2">The row ran out of contiguous memory and had to be rebuilt</div>
    <div class="qexp">Same eight items, same two structures, same machine. The verdict reversed purely because the question did. This is why the useful reply to "which structure is faster" is always "faster at what", and it is the reason Act 11 opens with that exact question rather than with a list of structures.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">In Act 9 the search index made reads 400 times faster and the nightly import six times slower. What is the correct reading of that?</div>
    <div class="opt" data-i="0">The index was configured badly and should be rebuilt</div>
    <div class="opt" data-i="1">Something regressed when the index was added and should be investigated</div>
    <div class="opt" data-i="2">Nothing regressed. Read speed was bought with write speed, and the bill arrived on an operation nobody was watching</div>
    <div class="qexp">The team received exactly what they paid for. Order is the currency that is re-paid on every single write for the life of the system, which is why it feels free on day one and shows up on the import job later. The good fix moves when the bill is paid, by dropping the index for a bulk import and rebuilding it once, rather than trying to avoid a cost that was the whole point.</div>
  </div>

  <div class="callout good">
    <div class="ch">Chapter 1 complete</div>
    <p>A data structure is a decision about how you lay things down, and every later cost follows from that one decision. Next chapter: how to count what any of it costs, without any maths, so that you can read the invoice before you sign it.</p>
  </div>
__NAV__
</div>`
