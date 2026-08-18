/* ===== Chapter 04 - Linked Lists: The Chain - DSA Concepts (2026) =====
   Through line: a linked list buys cheap insertion by giving up instant position.
   That single swap explains all of its behaviour.
   Ten blocks per concept lesson, then the whiteboard. See CONSISTENCY.md.
   RULES: no em-dashes; no backticks in content; no dollar-brace; no apostrophes inside
   a data-viz, data-anim or data-reel payload. */

"4.1": `<div class="wrap">
  <div class="les-kicker">Chapter 4 · Lesson 4.1</div>
  <h1 class="les-title">The Chain: Each Box Knows Only the Next One</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">11 visuals</span>
  </div>

  <p class="motto">A chain has no positions. It has handles, and a handle is a position you bought back, one pointer at a time.</p>

  <p class="lead">Chapter 3 gave you four clauses and four bills. This lesson is the same list refusing all four and signing one line instead. By the end you can read any list as a receipt: which bills it cancelled, which one it made considerably worse, and the one thing it sold to pay for them.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Twenty clues, and nobody can name the sixth.</div>
  <p>It is a children birthday party and you have hidden twenty clues around the house. Each clue says one thing: where the next clue is. The first is taped inside the fridge and sends you to the blue cushion. The cushion sends you to the bookcase. Nothing else is written anywhere.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Twenty clues, and not one of them is the sixth","width":760,"height":270,"items":[{"icon":"doc","x":112,"y":126,"kind":"gold","label":"the first clue, taped inside the fridge"},{"icon":"doc","x":392,"y":126,"kind":"accent","label":"each clue names one place and nothing else"},{"icon":"person","x":662,"y":122,"kind":"muted","label":"which one is the sixth?"}],"arrows":[{"x1":168,"y1":126,"x2":330,"y2":126,"style":"green","label":"go here next"},{"x1":452,"y1":126,"x2":596,"y2":124,"style":"gold","label":"nobody can answer"}],"caption":"A chapter ago a wedding hall refused you twenty seats because they had to be side by side. A treasure hunt has the opposite problem and the opposite freedom: no clue needs to be near any other, so a clue can never be refused, and no clue can ever be numbered."}'></div>

  <p>A parent asks which clue is the sixth. <strong>Nobody can answer. Not the children, not the parent, and not you, and you wrote them.</strong> A chapter ago a wedding hall refused you twenty seats because they had to be side by side. This is the mirror image: no clue needs to be anywhere near another one, so a clue can never be refused for want of room, and no clue can ever be numbered.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One line, and what tearing up four clauses buys.</div>
  <p>A chain is a set of separate boxes, each holding a thing and the address of the next box. That is the whole contract, and Lesson 1.2 already told you what an address is: <strong>a number sitting in a box, which happens to be the number of another box.</strong></p>

  <div class="viz" data-viz='{"type":"arch","title":"One line signed, four clauses refused","maxChars":17,"nodes":[{"id":"c","label":"The one line: a node holds the address of the next one","col":0,"row":2,"kind":"dark"},{"id":"w","label":"Same width: refused. A node may be any size","col":1,"row":0,"kind":"gold"},{"id":"s","label":"Side by side: refused. Nothing needs a neighbour","col":1,"row":1,"kind":"gold"},{"id":"a","label":"Claimed in advance: refused. One box at a time","col":1,"row":2,"kind":"gold"},{"id":"f","label":"It does not move: refused. Nothing is ever replaced","col":1,"row":3,"kind":"gold"},{"id":"b2","label":"The shuffle bill: cancelled","col":2,"row":1,"kind":"accent"},{"id":"b3","label":"The copy bill: cancelled","col":2,"row":2,"kind":"accent"},{"id":"b4","label":"The stale position bill: cancelled","col":2,"row":3,"kind":"accent"},{"id":"b1","label":"The trips bill: eight times worse","col":2,"row":0,"kind":"bad"},{"id":"n","label":"And a new one: the position bill. Every position is now a walk","col":3,"row":2,"kind":"bad"}],"edges":[{"from":"c","to":"w"},{"from":"c","to":"s"},{"from":"c","to":"a"},{"from":"c","to":"f"},{"from":"s","to":"b2","style":"green"},{"from":"a","to":"b3","style":"green"},{"from":"f","to":"b4","style":"green"},{"from":"s","to":"b1"},{"from":"c","to":"n"}],"caption":"Read the right hand column as a receipt. Three of Chapter 3 bills are torn up. One is made far worse, and it is the side by side clause doing it, because a node claimed on its own has neighbours belonging to somebody else. And one new bill appears that an array never had."}'></div>

  <p>The last node has to hold something too, and what it holds is <em class="k">nothing</em>: an address that deliberately points nowhere. That is how anything walking a chain knows it has reached the end, and it is the only ending signal a chain has.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Six hops, and every one of them wasted.</div>
  <p>The unit here is one hop: following one address to one other box. The tag under the gold node carries the count, so say the next one out loud before you press.</p>

  <div class="board" data-anim='{"type":"graph-walk","title":"Six hops to reach the seventh thing","speed":1500,"unit":150,"directed":true,"legend":[["where you are now","look"],["already walked","seen"],["arrived","found"]],"nodes":[{"id":"n0","label":"19","x":4,"y":1},{"id":"n1","label":"74","x":5,"y":1},{"id":"n2","label":"31","x":3,"y":0},{"id":"n3","label":"60","x":5,"y":0},{"id":"n4","label":"8","x":1,"y":1},{"id":"n5","label":"45","x":3,"y":1},{"id":"n6","label":"27","x":0,"y":0}],"edges":[{"from":"n0","to":"n1"},{"from":"n1","to":"n2"},{"from":"n2","to":"n3"},{"from":"n3","to":"n4"},{"from":"n4","to":"n5"},{"from":"n5","to":"n6"}],"steps":[{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n0":"head"},"say":"These are the first seven of the twelve numbers from Lesson 3.1, in the same order, and <b>not one of them is beside its neighbour.</b> The leftmost box on the board is the last link, not the first."},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n0":"head"},"say":"You hold exactly one thing, the head, and it is not part of the chain. Now read what the first node will tell you. Not how long the chain is, not what is behind it. <b>Only where the next one lives.</b>","seen":[],"look":["n0"]},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n1":"hop 1"},"say":"One hop, and the arrow jumps a column and a row, because that is simply where 74 happened to be granted. <b>Nothing in the picture predicted that jump.</b>","seen":["n0"],"look":["n1"]},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n2":"hop 2"},"say":"Hop two, back across the board. You could not have found 31 by looking, and neither can the machine. It had to read 74 first.","seen":["n0","n1"],"look":["n2"]},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n4":"hop 4"},"say":"Hop four. The count lives in a tag under the node because <b>this renderer has no counter, and that is itself the lesson</b>: a chain carries no number telling you where you are.","seen":["n0","n1","n2","n3"],"look":["n4"]},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n5":"hop 5"},"say":"Hop five. Stop and ask where you are. The honest answer is five hops from the head, <b>which is a distance rather than a position.</b>","seen":["n0","n1","n2","n3","n4"],"look":["n5"]},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n6":"hop 6"},"say":"Six hops to six unrelated addresses to reach the last of seven things. <b>Lesson 3.1 answered this same question with one sum</b> and never touched a box it was not asked about.","seen":["n0","n1","n2","n3","n4","n5"],"found":["n6"]}],"caption":"Six hops, six boxes read, and not one of them was the thing you wanted. Each was read only to find out where to go next, which is the position bill in full."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Why a chain is almost never refused.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Asking for one box, and never being refused","actors":[{"label":"Your program","kind":"gold"},{"label":"The memory manager","kind":"accent"},{"label":"The free space","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"room for one node, anywhere","style":"gold"},{"from":1,"to":2,"label":"is there a free gap this wide"},{"from":2,"to":1,"label":"yes, several","style":"green"},{"from":1,"to":0,"label":"7112","style":"green"},{"from":0,"to":1,"label":"room for one more node","style":"gold"},{"from":1,"to":0,"label":"6208, nowhere near the last one","style":"green"}],"caption":"Two rounds drawn, seven needed for seven nodes, and one address came back per round. Lesson 3.1 asked for an unbroken run and was refused while the space was free. Ask for one node at a time and there is almost nothing left to refuse."}'></div>

  <p>Lesson 3.1 asked for an unbroken run and was told no while the space was free. <strong>Ask for one node at a time and there is almost nothing left to refuse</strong>, because a single gap is the easiest thing in the building to find. The addresses come back scattered, in whatever order the machine happened to have room, and the chain does not care, because nothing in it was ever going to be found by arithmetic.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Handles, and what each one costs to keep.</div>
  <p>The <em class="k">head</em> is not part of the chain. It is one address kept outside it, and the only thing in the world that can reach the first node. Lose it and every node is still there, intact and unreachable forever.</p>

  <div class="tbl-wrap"><table>
    <tr><th>The handle you keep</th><th>What holding it costs</th><th>What it buys back</th></tr>
    <tr><td>The head</td><td>one address, rewritten when the front changes</td><td>The only free entry point. Everything else is a walk</td></tr>
    <tr><td>A tail handle</td><td>a second address, repaired on every change at the end</td><td>Reaching the end without walking. It does not make deleting the end cheap, because you still have to reach the node before it</td></tr>
    <tr><td>A running count</td><td>one number, adjusted on every insert and delete</td><td>The length, which a chain otherwise has no way to know</td></tr>
    <tr><td>An index of addresses</td><td>a row, rebuilt whenever the chain changes shape</td><td>Position by number, at the price the swap was avoiding</td></tr>
  </table>
  <div class="tbl-cap">Row four is not a kind of chain. It is a row bolted to one, buying back the exact thing the swap sold, at the exact price the swap was avoiding.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which handle did somebody buy","maxChars":17,"nodes":[{"id":"q","label":"What do you need to reach without walking?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"h","label":"The front only. Keep the head and nothing else","col":0,"row":1,"kind":"accent"},{"id":"t","label":"The end too. Buy a tail handle and repair it on every change","col":2,"row":1,"kind":"accent"},{"id":"n","label":"Any position by number. That is a row bolted to a chain","col":2,"row":2,"kind":"bad"}],"edges":[{"from":"q","to":"h","label":"the front","style":"green"},{"from":"q","to":"t","label":"both ends"},{"from":"q","to":"n","label":"any position"}],"caption":"There is no branch here that gives you a position for free. Every handle is an address kept outside the chain, and every one of them has to be repaired by hand whenever the thing it names changes."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The receipt, in hops, looks and trips.</div>

  <div class="board" data-anim='{"type":"race","title":"The same twelve things, and the same question","speed":1500,"legend":[["being read now","look"],["already walked","seen"],["found it","found"]],"tracks":[{"label":"A row of twelve","data":[19,74,31,60,8,45,27,93,52,11,66,38],"countLabel":" looks"},{"label":"A chain of twelve","data":[19,74,31,60,8,45,27,93,52,11,66,38],"countLabel":" hops"}],"steps":[{"badge":"give me the eighth thing","lanes":[{"look":[7],"count":1},{"look":[0],"count":0}],"say":"Both hold the same twelve. The row calculates an address and lands. The chain starts at the head, because it has nowhere else to start."},{"lanes":[{"found":[7],"count":1},{"look":[3],"seen":[0,1,2],"count":3}],"say":"<b>The row is finished.</b> One look. The chain is on its third hop and has read three numbers it did not want."},{"lanes":[{"found":[7],"count":1},{"found":[7],"seen":[0,1,2,3,4,5,6],"count":7}],"say":"<b>Seven hops against one look.</b> Lesson 1.2 already showed you this race at eight items and told you the gap does not close. Here it is with Chapter 2 counting attached."},{"badge":"a million things","lanes":[{"found":[7],"count":1},{"found":[7],"seen":[0,1,2,3,4,5,6],"count":"500,000"}],"say":"At a million, the middle thing costs one look in the row and <b>about five hundred thousand hops</b> in the chain. That is the position bill, and no handle you buy makes it go away."}],"caption":"This is Lesson 1.2 first animation, priced. There the point was that the winner flips depending on the job. Here the point is the size of the number on the losing side."}'></div>

  <div class="viz" data-viz='{"type":"card","title":"The receipt, both meters","eyebrow":"WHAT THE SWAP COST","badge":"a million items","width":540,"rows":[{"k":"Insert in the middle, once you are there","v":"2 pointer writes","tone":"good","bar":0},{"k":"Insert in the middle of a row","v":"about 500,000 moves","tone":"bad","bar":1},{"k":"Reach the middle of a row","v":"1 look","tone":"good","bar":0},{"k":"Reach the middle of a chain","v":"about 500,000 hops","tone":"bad","bar":1},{"k":"Read the whole row end to end","v":"about 125,000 trips","tone":"good","bar":0.125},{"k":"Read the whole chain end to end","v":"1,000,000 trips","tone":"bad","bar":1},{"k":"Extra addresses held, one per node","v":"1,000,000","tone":"bad","bar":1}],"caption":"Rows one and two are what the swap bought. Rows three and four are what it sold. Rows five and six are the trips bill from Lesson 3.5, eight times worse here because a node claimed on its own has neighbours belonging to somebody else. The last row is the quiet one Lesson 1.2 already named."}'></div>

  <p>Three of Chapter 3 bills are torn up, one is made considerably worse, and one entirely new one appears. In the Chapter 2 currency: reaching a position in a row is <em class="g">O(1)</em> and in a chain it is <em class="g">O(n)</em>, while inserting in the middle is <em class="g">O(n)</em> in a row and <em class="g">O(1)</em> in a chain <strong>once you are already standing there</strong>. That last clause is doing an enormous amount of work and the next lesson is entirely about it.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places a node with one address is already running.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"A node that holds one address, and where you meet it","unit":172,"nodes":[{"id":"c","label":"A node that holds one address","x":2,"y":1,"kind":"dark"},{"id":"p","label":"Free space in a memory manager, kept as a chain of free blocks","x":0,"y":0,"kind":"accent"},{"id":"u","label":"Undo, browser back, and every history you can step through","x":0,"y":2,"kind":"box"},{"id":"f","label":"A file spread across a disk in scattered pieces","x":4,"y":0,"kind":"box"},{"id":"h","label":"Two things sharing one bucket in a hash table","x":4,"y":2,"kind":"box"},{"id":"t","label":"Two addresses both pointing forwards, which is a tree","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"p","label":"the joke Chapter 3 set up","style":"green"},{"from":"c","to":"u","label":"one step back"},{"from":"c","to":"f","label":"the next piece"},{"from":"c","to":"h","label":"Chapter 8"},{"from":"c","to":"t","label":"Chapters 9 to 13","style":"gold"}],"caption":"The green edge is the joke Chapter 3 set up without telling you. The memory manager that refused you an unbroken run in Lesson 3.1 keeps its own free space as a chain, because a chain is the only arrangement that can be handed one spare box and have somewhere to put it."}'></div>

  <div class="callout warn">
    <div class="ch">What Lesson 1.2 already told you, and meant</div>
    <p>Do not read any of this as linked being more flexible, so prefer it. <strong>A chain is slower to read, uses more memory per item, and is much worse for the processor to scan, because scattered boxes defeat the caching that makes contiguous data genuinely fast. Together is the default. Linked is what you reach for when the shape of your writes forces it.</strong> That was shipped two chapters ago and this chapter exists to show you the arithmetic behind it.</p>
  </div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and which half of the receipt each one is standing on.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"Adding to this list is instant now, and jumping to a row is awful"</td><td>Both halves of the receipt in one sentence</td><td>The swap, described by somebody who has met both sides of it</td></tr>
    <tr><td>"The feed is fine at the top and worse the further down you scroll"</td><td>Cost that grows with position, not with size</td><td>Every row is counted from the head, so row 4,000 costs 4,000 hops</td></tr>
    <tr><td>"Same items, same loop, much slower than the array version"</td><td>Identical counts, different wall clock</td><td>The trips bill. Every hop is its own journey, because the neighbours belong to somebody else</td></tr>
    <tr><td>"Can we let people jump straight to page 40?"</td><td>A request for a position</td><td>A chain cannot answer a number. Bolt an index on and repair it forever, or refuse</td></tr>
    <tr><td>"Deleting the last item takes as long as deleting all of them"</td><td>The end costing as much as everything</td><td>To remove the last node you must reach the one before it, and a one way chain has no way back</td></tr>
    <tr><td>"It never runs out of room any more, it just got slower everywhere"</td><td>A refusal that stopped, and a slowness that started</td><td>The swap, described by somebody who did not realise they had made it</td></tr>
  </table>
  <div class="tbl-cap">Four answers live in that middle column: distance from the head, journeys, the extra addresses, and the swap itself. Not one row is priced by the thing being added, which is the same thing Lesson 3.2 table said about a row, from the opposite side.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">The same fifty rows, twenty times the work.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our activity feed used to paint in about a second and now it takes twenty. Same fifty rows it always showed, nothing deployed in a year. The only thing that changed is that customers kept using it, so the history behind it is much longer."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"The same fifty rows, and twenty times the work","lanes":[{"label":"The team"},{"label":"You"},{"label":"The feed"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Same fifty rows, nothing deployed, one second became twenty"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: priced by what is on screen, or by how far it sits?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"The newest fifty are at the far end of the chain"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"So every one of the fifty is a walk from the head"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"4,000 long: about 199,000 hops"},{"id":"c3","lane":2,"col":3,"kind":"bad","label":"80,000 long: about 4,000,000 hops"},{"id":"b3","lane":1,"col":4,"kind":"accent","label":"Keep the newest at the head, or buy a tail handle"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"b1","to":"b2","style":"green"},{"from":"c2","to":"c3"},{"from":"b2","to":"b3","style":"green","label":"stop walking to the end"}],"caption":"Twenty times the history and twenty times the work, on a screen that never changed. Nobody deployed anything, and the fifty rows never got dearer. The walk to them did."}'></div>

  <p><strong>The fifty rows never got dearer. The walk to them did.</strong> The service holds the history as a chain with the newest at the end, and the feed asks for the last row, then the one before it, fifty times over, and every request starts again at the head. A year ago the history was 4,000 long, so the newest fifty cost about 199,000 hops. At 80,000 they cost about 4,000,000. The fix is to keep the newest at the head, so the fifty rows the screen wants are the fifty nearest the handle you already hold.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked one question: <strong>is this priced by what is on the screen, or by how far away it sits?</strong> The complaint says the screen never changed, which eliminates every explanation about volume. Only a cost measured as a distance from a handle can grow twenty times while the thing being shown stays identical.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, six sticky notes and no numbering</div>
    <p>Hide six notes in six rooms, each naming the room the next note is in, and tell somebody the first room. <strong>Round one:</strong> ask for the fourth thing and watch them walk. <strong>Round two:</strong> ask for it without walking, and listen to what comes back. <strong>Round three:</strong> add a seventh note between the third and the fourth. One existing note gets rewritten and one new note gets written, so that is two writes, and nothing else in the house is touched. <strong>Round four, the one that lands:</strong> move the first note to a different room and tell nobody. Every note is still there, perfectly correct, and the whole chain is now unreachable.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">Somebody asks for box 500,000 of a row of a million, then of a chain of a million. What is the honest answer?</div>
    <div class="opt" data-i="0">One look in both, since both hold a million things</div>
    <div class="opt" data-i="1">One look in the row, and about five hundred thousand hops in the chain, because a chain has no positions to calculate from</div>
    <div class="opt" data-i="2">About five hundred thousand in both, since something has to find it either way</div>
    <div class="qexp">The row calculates an address, which is Lesson 1.1 and it never changes. The chain has nothing to calculate with: a node knows only where the next one is, so the only way to reach the five hundred thousandth is to arrive at it. That is not a slower search, it is a different kind of answer, and no handle you buy removes it.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">A service keeps being refused a large unbroken run, so the team moves its list to a chain. What did they buy, and what did they sell?</div>
    <div class="opt" data-i="0">They bought speed and sold nothing, since the refusals have stopped</div>
    <div class="opt" data-i="1">They bought the end of refusals and cheap rewiring, and sold instant position along with eight times the journeys to read it</div>
    <div class="opt" data-i="2">They bought memory savings, since nothing is claimed in advance</div>
    <div class="qexp">Option two is backwards: a chain uses more memory, not less, because every node now carries an address it did not need before. The refusals really do stop, which is a genuine win and the reason this move gets made. What it costs is on the receipt, and the item people forget is the trips bill, because it never shows up as a refusal or a crash, only as everything being quietly slower.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Every cheap number in this lesson came with the words <em class="k">once you are already there</em>. Next: what it costs to get there, and the one case where a chain genuinely wins outright.</p>
  </div>
__NAV__
</div>`
