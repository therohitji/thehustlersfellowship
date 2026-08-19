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

  <p class="lead">Chapter 3 gave you four clauses and four bills. This lesson is the same list refusing all four and signing one line instead. By the end you can read any list as a receipt: which bills it cancelled, which one it made considerably worse, and the one thing it sold to pay for them. A chain buys cheap insertion by giving up instant position, and this lesson is where that swap is signed.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Twenty clues, and nobody can name the sixth.</div>
  <p>It is a children birthday party and you have hidden twenty clues around the house. Each clue says one thing: where the next clue is. The first is taped inside the fridge and sends you to the blue cushion. The cushion sends you to the bookcase. Nothing else is written anywhere.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Twenty clues, and not one of them is the sixth","width":760,"height":270,"items":[{"icon":"doc","x":112,"y":126,"kind":"gold","label":"the first clue, taped inside the fridge"},{"icon":"doc","x":392,"y":126,"kind":"accent","label":"each clue names one place and nothing else"},{"icon":"person","x":662,"y":122,"kind":"muted","label":"which one is the sixth?"}],"arrows":[{"x1":168,"y1":126,"x2":330,"y2":126,"style":"green","label":"go here next"},{"x1":452,"y1":126,"x2":596,"y2":124,"style":"gold","label":"nobody can answer"}],"caption":"A chapter ago a wedding hall refused you twenty seats because they had to be side by side. A treasure hunt has the opposite problem and the opposite freedom: no clue needs to be near any other, so a clue can never be refused, and no clue can ever be numbered."}'></div>

  <p>A parent asks which clue is the sixth. <strong>Nobody can answer. Not the children, not the parent, and not you, and you wrote them.</strong> A chapter ago a wedding hall refused you twenty seats because they had to be side by side. This is the mirror image: no clue needs to be anywhere near another one, so a clue can never be refused for want of room, and no clue can ever be numbered.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One line, and what tearing up four clauses buys.</div>
  <p>A chain is a set of separate boxes, each holding a thing and the address of the next box. That is the whole contract, and Lesson 1.2 already told you what an address is: <strong>a number sitting in a box, which happens to be the number of another box.</strong></p>

  <div class="viz" data-viz='{"type":"arch","title":"One line signed, four clauses refused","maxChars":17,"nodes":[{"id":"c","label":"The one line: a node holds the address of the next one","col":0,"row":2,"kind":"dark"},{"id":"w","label":"Same width: refused. A node may be any size","col":1,"row":0,"kind":"gold"},{"id":"s","label":"Side by side: refused. Nothing needs a neighbour","col":1,"row":1,"kind":"gold"},{"id":"a","label":"Claimed in advance: refused. One box at a time","col":1,"row":2,"kind":"gold"},{"id":"f","label":"It does not move: refused. Nothing is ever replaced","col":1,"row":3,"kind":"gold"},{"id":"b2","label":"The shuffle bill: cancelled","col":2,"row":1,"kind":"accent"},{"id":"b3","label":"The copy bill: cancelled","col":2,"row":2,"kind":"accent"},{"id":"b4","label":"The stale position bill: cancelled","col":2,"row":3,"kind":"accent"},{"id":"b1","label":"The trips bill: eight times worse","col":2,"row":0,"kind":"bad"},{"id":"n","label":"And a new one: the position bill. Every position is now a walk","col":3,"row":2,"kind":"bad"}],"edges":[{"from":"c","to":"w"},{"from":"c","to":"s"},{"from":"c","to":"a"},{"from":"c","to":"f"},{"from":"s","to":"b2","style":"green"},{"from":"a","to":"b3","style":"green"},{"from":"f","to":"b4","style":"green"},{"from":"s","to":"b1"},{"from":"c","to":"n"}],"caption":"Read the right hand column as a receipt. Three of Chapter 3 bills are torn up. One is made far worse. Lesson 3.1 hung the trips bill on the same width clause; here it arrives through side by side instead, because a node claimed on its own has neighbours belonging to somebody else. And one new bill appears that an array never had."}'></div>

  <p>The last node has to hold something too, and what it holds is <em class="k">nothing</em>: an address that deliberately points nowhere. That is how anything walking a chain knows it has reached the end, and it is the only ending signal a chain has.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Six hops, and every one of them wasted.</div>
  <p>The unit here is one hop: following one address to one other box. The tag under the gold node carries the count, so say the next one out loud before you press.</p>

  <div class="board" data-anim='{"type":"graph-walk","title":"Six hops to reach the seventh thing","speed":1500,"unit":150,"directed":true,"legend":[["where you are now","look"],["already walked","seen"],["arrived","found"]],"nodes":[{"id":"n0","label":"19","x":4,"y":1},{"id":"n1","label":"74","x":5,"y":1},{"id":"n2","label":"31","x":3,"y":0},{"id":"n3","label":"60","x":5,"y":0},{"id":"n4","label":"8","x":1,"y":1},{"id":"n5","label":"45","x":3,"y":1},{"id":"n6","label":"27","x":0,"y":0}],"edges":[{"from":"n0","to":"n1"},{"from":"n1","to":"n2"},{"from":"n2","to":"n3"},{"from":"n3","to":"n4"},{"from":"n4","to":"n5"},{"from":"n5","to":"n6"}],"steps":[{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n0":"head"},"say":"These are the first seven of the twelve numbers from Lesson 3.1, in the same order, and <b>not one of them is beside its neighbour.</b> The leftmost box on the board is the last link, not the first."},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n0":"head"},"say":"You hold exactly one thing, the head, and it is not part of the chain. Now read what the first node will tell you. Not how long the chain is, not what is behind it. <b>Only where the next one lives.</b>","seen":[],"look":["n0"]},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n1":"hop 1"},"say":"One hop, and the arrow jumps a column and a row, because that is simply where 74 happened to be granted. <b>Nothing in the picture predicted that jump.</b>","seen":["n0"],"look":["n1"]},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n2":"hop 2"},"say":"Hop two, back across the board. You could not have found 31 by looking, and neither can the machine. It had to read 74 first.","seen":["n0","n1"],"look":["n2"]},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n4":"hop 4"},"say":"Hops three and four in one frame. The count lives in a tag under the node rather than in a counter, because <b>a chain carries no number telling you where you are.</b>","seen":["n0","n1","n2","n3"],"look":["n4"]},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n5":"hop 5"},"say":"Hop five. Stop and ask where you are. The honest answer is five hops from the head, <b>which is a distance rather than a position.</b>","seen":["n0","n1","n2","n3","n4"],"look":["n5"]},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n6":"hop 6"},"say":"Six hops to six unrelated addresses to reach the last of seven things. <b>Lesson 3.1 answered this same question with one sum</b> and never touched a box it was not asked about.","seen":["n0","n1","n2","n3","n4","n5"],"found":["n6"]}],"caption":"Six hops, six boxes read, and not one of them was the thing you wanted. Each was read only to find out where to go next, which is the position bill in full."}'></div>

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

  <div class="board" data-anim='{"type":"race","title":"The same twelve things, and the same question","speed":1500,"legend":[["being read now","look"],["already walked","seen"],["found it","found"]],"tracks":[{"label":"A row of twelve","data":[19,74,31,60,8,45,27,93,52,11,66,38],"countLabel":" looks"},{"label":"A chain of twelve","data":[19,74,31,60,8,45,27,93,52,11,66,38],"countLabel":" hops"}],"steps":[{"badge":"give me the eighth thing","lanes":[{"look":[7],"count":1},{"look":[0],"count":0}],"say":"Both hold the same twelve. The row calculates an address and lands. The chain starts at the head, because it has nowhere else to start."},{"lanes":[{"found":[7],"count":1},{"look":[3],"seen":[0,1,2],"count":3}],"say":"<b>The row is finished.</b> One look. The chain is on its third hop and has read three numbers it did not want."},{"lanes":[{"found":[7],"count":1},{"found":[7],"seen":[0,1,2,3,4,5,6],"count":7}],"say":"<b>Seven hops against one look.</b> Lesson 1.2 already showed you this race at eight items and told you the gap does not close. Here it is with Chapter 2 counting attached."},{"badge":"a million things","lanes":[{"found":[7],"count":1},{"found":[7],"seen":[0,1,2,3,4,5,6],"count":"500,000"}],"say":"At a million, the middle thing costs one look in the row and <b>about five hundred thousand hops</b> in the chain. That is the position bill, and no handle you buy makes it go away."}],"caption":"This is Lesson 1.2 first animation, priced. There the two boards together showed that the winner flips depending on the job. Here the point is the size of the number on the losing side."}'></div>

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
</div>`,

"4.2": `<div class="wrap">
  <div class="les-kicker">Chapter 4 · Lesson 4.2</div>
  <h1 class="les-title">Insert and Delete: Where the Chain Wins</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">12 visuals</span>
  </div>

  <p class="motto">The two writes were never the price. Walking to them is the entire bill.</p>

  <p class="lead">This is the half of the receipt a chain bought, and it is genuinely good. By the end you can price any insert or delete on a chain in two numbers rather than one, and you will be able to name the single condition that decides whether moving to a chain helps at all.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Same hall, same guest, and nobody stands up.</div>
  <p>Row J again, same wedding, same twenty people. Last time they sat shoulder to shoulder and one late guest cost eighteen of them their seats. Tonight there are no chairs. A rope runs down the hall with name cards clipped along it, and every card carries the name of whoever comes next.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Same guest, same row, and nobody stands up","width":750,"height":264,"items":[{"icon":"person","x":108,"y":124,"kind":"gold","label":"the late guest"},{"icon":"shelf","x":394,"y":122,"kind":"accent","label":"name cards clipped along a rope"},{"icon":"doc","x":666,"y":122,"kind":"muted","label":"two cards rewritten, nobody moves"}],"arrows":[{"x1":160,"y1":124,"x2":330,"y2":124,"style":"gold","label":"walk to the right card"},{"x1":458,"y1":122,"x2":600,"y2":122,"style":"green","label":"then two writes"}],"caption":"Row J again, same wedding, same twenty people. Last time one late guest cost eighteen of them their seats. Tonight the chairs are gone and each card names whoever comes next, so the same arrival costs two cards and nobody stands up."}'></div>

  <p>Mira arrives late and has to go in after Cara. You walk along the rope until you find Cara, write a new card that says whatever Cara card said, and change Cara card to say Mira. <strong>Two cards rewritten. Nobody stands up, nobody moves, and nobody after Cara even learns that anything happened.</strong></p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">Two writes, and one of them has to go first.</div>
  <p>An insert into a chain is two writes and there is no third one hiding anywhere. It costs the same on a chain of six as on a chain of six million, because neither write mentions how long the chain is.</p>

  <div class="viz" data-viz='{"type":"flow","title":"An insert is two writes, and one of them has to go first","maxChars":16,"nodes":[{"id":"a","label":"Put a new thing after the node you are holding","col":0,"row":1,"kind":"gold"},{"id":"w1","label":"Write one: the new node takes the address you were carrying","col":1,"row":0,"kind":"accent"},{"id":"w2","label":"Write two: you hand that slot over to the new node","col":2,"row":0,"kind":"accent"},{"id":"ok","label":"Two writes. The chain is readable at every instant","col":3,"row":0,"kind":"accent"},{"id":"bad","label":"Do them the other way and the rest of the chain has nothing pointing at it","col":2,"row":2,"kind":"bad"}],"edges":[{"from":"a","to":"w1"},{"from":"w1","to":"w2"},{"from":"w2","to":"ok","style":"green"},{"from":"a","to":"bad","label":"wrong order"}],"caption":"The two writes have the same two destinations either way, but they are not the same two writes. Do the handover first and the address the new node was supposed to take no longer exists anywhere, so everything after the insertion point loses its only referrer."}'></div>

  <div class="callout warn">
    <div class="ch">The sentence this whole lesson turns on</div>
    <p><strong>A chain does not make inserting cheap. It makes inserting cheap once you are already there.</strong> Every number in the first half of this lesson is standing behind those last four words, and block 9 is what happens to a team that forgets them.</p>
  </div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The splice, and then the same thing done in the wrong order.</div>
  <p>One write is the unit again, exactly as in Lesson 3.2, so count before you press.</p>

  <div class="board" data-anim='{"type":"graph-walk","title":"The splice: two writes, and the order matters","speed":1700,"unit":132,"directed":true,"legend":[["where you are standing","look"],["already walked","seen"],["the new node","found"]],"nodes":[{"id":"n1","label":"Ada","x":0,"y":0},{"id":"n2","label":"Ben","x":1,"y":0},{"id":"n3","label":"Cara","x":2,"y":0},{"id":"n4","label":"Dev","x":3,"y":0},{"id":"n5","label":"Eli","x":4,"y":0},{"id":"n6","label":"Fay","x":5,"y":0},{"id":"nx","label":"Mira","x":2.5,"y":1}],"edges":[{"from":"n1","to":"n2"},{"from":"n2","to":"n3"},{"from":"n3","to":"n4"},{"from":"n4","to":"n5"},{"from":"n5","to":"n6"},{"from":"n3","to":"nx"},{"from":"nx","to":"n4"}],"steps":[{"edges":["n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n1":"head"},"say":"Six names, five arrows, one handle. Mira sits below the line with both her arrows faded, so <b>nothing points at her and she points at nothing.</b>"},{"edges":["n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"look":["n3"],"seen":["n1","n2"],"tags":{"n1":"head","n3":"here"},"say":"You walked to Cara, and Mira goes after her. In Lesson 3.2 the identical arrival at the identical spot in a row of ten cost <b>eight box writes.</b>"},{"edges":["n1-n2","n2-n3","n3-n4","n4-n5","n5-n6","nx-n4"],"look":["n3"],"found":["nx"],"seen":["n1","n2"],"tags":{"n3":"here","nx":"write 1"},"say":"Write one. Mira takes the address Cara was carrying, so <b>two nodes now name Dev as next.</b> Nothing is broken during this instant: a walker arriving from the head still reaches every name."},{"edges":["n1-n2","n2-n3","n3-nx","nx-n4","n4-n5","n5-n6"],"found":["nx"],"seen":["n1","n2","n3"],"tags":{"nx":"write 2"},"say":"Write two. Cara lets go of Dev and takes Mira. <b>Two writes on a chain of seven, and Dev, Eli and Fay were never read, moved or rewritten.</b>"},{"edges":["n1-n2","n2-n3","n3-nx"],"look":["n3"],"tags":{"n3":"here","nx":"no address"},"say":"Now the same two destinations in the other order. Cara takes Mira before Mira has an address, and <b>nothing in the world now remembers where Dev was.</b> Half the chain is intact, correct, and unreachable."}],"caption":"Same two destinations, not the same two writes. Doing the handover first destroys the only copy of the address the new node was supposed to take, and a chain gives you no warning at all when that happens."}'></div>

  <p>Deleting is even cheaper, provided you are standing in the one place that matters.</p>

  <div class="board" data-anim='{"type":"graph-walk","title":"The unlink: one write, and the node does not go anywhere","speed":1700,"unit":132,"directed":true,"legend":[["where you are standing","look"],["still reachable","seen"],["now reachable past the gap","found"]],"nodes":[{"id":"d1","label":"Ada","x":0,"y":0},{"id":"d2","label":"Ben","x":1,"y":0},{"id":"d3","label":"Cara","x":2,"y":0},{"id":"d4","label":"Dev","x":3,"y":0},{"id":"d5","label":"Eli","x":4,"y":0}],"edges":[{"from":"d1","to":"d2"},{"from":"d2","to":"d3"},{"from":"d3","to":"d4"},{"from":"d4","to":"d5"},{"from":"d2","to":"d4"}],"steps":[{"edges":["d1-d2","d2-d3","d3-d4","d4-d5"],"look":["d2"],"seen":["d1"],"tags":{"d1":"head","d2":"here"},"say":"Take Cara out, standing on Ben. <b>Only the node before her holds the address that has to change</b>, so this is the one spot on the chain where a delete is cheap."},{"edges":["d1-d2","d2-d4","d3-d4","d4-d5"],"found":["d4"],"seen":["d1","d2"],"tags":{"d2":"here"},"say":"One write. Ben lets go of Cara and takes Dev. <b>Nothing behind her shifted, because nothing behind her was ever touching her.</b> In a row of five, removing the third item costs two box writes and a lowered count."},{"edges":["d1-d2","d2-d4","d3-d4","d4-d5"],"seen":["d1","d2","d4","d5"],"tags":{"d3":"still here"},"say":"Walk from the head and Cara is not on the chain. <b>She is also still in memory, holding a perfectly good address for Dev.</b> Unlinking removes a node from the walk, not from the building, and Lesson 3.2 told you the same thing about a deleted box."}],"caption":"One write to unlink, once you are standing in the right place. Everything expensive about deleting from a chain happens before this board starts."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Two writes of one number each.</div>

  <div class="viz" data-viz='{"type":"seq","title":"What a rewire actually says","actors":[{"label":"Your program","kind":"gold"},{"label":"Cara, the node you hold","kind":"accent"},{"label":"Mira, the new node","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"what number are you carrying","style":"gold"},{"from":1,"to":0,"label":"the address of Dev","style":"green"},{"from":0,"to":2,"label":"take that number"},{"from":0,"to":1,"label":"now carry Mira instead","style":"gold"}],"caption":"Two writes of one number each. Lesson 1.2 defined a pointer as a number sitting in a box which happens to be the number of another box, and this is that definition doing a job: nothing here mentions how long the chain is, so nothing here can get slower as it grows."}'></div>

  <p>Lesson 1.2 defined a pointer as a number sitting in a box which happens to be the number of another box. <strong>This is that definition doing a job.</strong> Nothing in the exchange mentions how long the chain is, so nothing in it can get slower as the chain grows, and that is the entire reason the write half of the receipt holds at any size.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Read the third column, not the second.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The move</th><th>What it costs</th><th>The condition it demands</th></tr>
    <tr><td>Add at the head</td><td>2 writes, at any length</td><td>Nothing at all. Every chain hands you the head</td></tr>
    <tr><td>Add after a node you are already holding</td><td>2 writes, at any length</td><td>Something else already walked you there</td></tr>
    <tr><td>Add at a position by number</td><td>2 writes, plus the walk</td><td>You pay one hop per position, every time</td></tr>
    <tr><td>Add at the tail, with a tail handle</td><td>2 writes, at any length</td><td>A second handle, repaired on every change at the end</td></tr>
    <tr><td>Remove a node you are holding the one before</td><td>1 write</td><td>You must be on the node before it, not on it</td></tr>
    <tr><td>Remove a node you are standing on</td><td>1 write, plus a walk from the head</td><td>A one way chain has no way back, and Lesson 4.3 is what fixing that costs</td></tr>
  </table>
  <div class="tbl-cap">The second column barely moves: one or two writes, at any length. What changes going down is what you had to be holding before you were allowed to start, and that is the only variable a chain really has.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"What do you have to be holding first","maxChars":18,"nodes":[{"id":"q","label":"Are you already standing on the node before the spot?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"y","label":"Two writes, at any length","col":0,"row":1,"kind":"accent"},{"id":"n","label":"Walk from the head first, and that walk is the whole bill","col":2,"row":1,"kind":"bad"},{"id":"s","label":"Unless you are inserting at the head, which every chain hands you free","col":0,"row":2,"kind":"accent"}],"edges":[{"from":"q","to":"y","label":"yes","style":"green"},{"from":"q","to":"n","label":"no"},{"from":"y","to":"s","label":"or"}],"caption":"There is no branch here where a chain finds a position for you. Every cheap number in this lesson is standing behind the words once you are already there."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Two numbers, not one.</div>

  <div class="board" data-anim='{"type":"race","title":"The same arrival, in the middle of five hundred","speed":1500,"legend":[["working now","look"],["rewritten or walked","seen"],["done","found"]],"tracks":[{"label":"Row of 500: boxes moved","data":["1","2","3","4","5","6","7","8","9","10","11","12"],"countLabel":" moves"},{"label":"Chain of 500: writes","data":["1","2","3","4","5","6","7","8","9","10","11","12"],"countLabel":" writes"},{"label":"Chain of 500: hops to get there","data":["1","2","3","4","5","6","7","8","9","10","11","12"],"countLabel":" hops"}],"steps":[{"badge":"insert at position 250","lanes":[{"look":[0],"count":0},{"look":[0],"count":0},{"look":[0],"count":0}],"say":"One arrival, dropped in the middle of five hundred. <b>The third lane is a counter rather than a picture</b>, because those nodes are scattered all over memory and no row of boxes can honestly draw them."},{"lanes":[{"seen":[6,7,8,9,10,11],"count":251},{"found":[0],"count":2},{"seen":[0,1,2,3,4,5],"count":"250"}],"say":"The row rewrites everything behind the address: 251 moves. The chain writes two. <b>And then look at the third lane.</b>"},{"badge":"the same job, at the head","lanes":[{"seen":[0,1,2,3,4,5,6,7,8,9,10,11],"count":501},{"found":[0],"count":2},{"found":[0],"count":0}],"say":"Move the arrival to the front and the row gets worse, 501 moves, while the chain writes the same two and <b>walks nothing at all</b>, because the head is the one position a chain hands you free."}],"caption":"Two of these three lanes are the reason people move to a chain. The third is the reason they are sometimes disappointed, and it is the only lane that changes when you move the address."}'></div>

  <div class="viz" data-viz='{"type":"card","title":"One arrival, priced by where","eyebrow":"WRITES AND HOPS","badge":"500 items","width":520,"rows":[{"k":"Row, at the front","v":"501 moves","tone":"bad","bar":1},{"k":"Row, in the middle","v":"251 moves","tone":"bad","bar":0.5},{"k":"Chain, at the head","v":"2 writes, 0 hops","tone":"good","bar":0.004},{"k":"Chain, in the middle","v":"2 writes, about 250 hops","bar":0.5},{"k":"Chain, at the end, no tail handle","v":"2 writes, 499 hops","tone":"bad","bar":1}],"caption":"Every bar is drawn against a scale of 501. The writes column never moves and the hops column is the entire story, which is why the chain wins outright in exactly one place: the head."}'></div>

  <p>The writes column never moves and the hops column is the entire story. In the Chapter 2 currency, the write is <em class="g">O(1)</em> and the walk is <em class="g">O(n)</em>, so quoting either one on its own is how this structure gets chosen badly. <strong>A chain wins outright in exactly one place, and that place is the head.</strong></p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places an unlink and a relink are running now.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Two writes, and where they already run","unit":168,"nodes":[{"id":"c","label":"Two writes, at any length","x":2,"y":1,"kind":"dark"},{"id":"a","label":"An allocator handing out free blocks from a chain of them","x":0,"y":0,"kind":"accent"},{"id":"o","label":"A scheduler moving a task between its queues","x":0,"y":2,"kind":"box"},{"id":"l","label":"An LRU cache moving the thing you just used to the front","x":4,"y":0,"kind":"gold"},{"id":"m","label":"A music queue taking a track dropped in mid playlist","x":4,"y":2,"kind":"box"},{"id":"h","label":"Two things sharing one hash bucket","x":2,"y":3,"kind":"box"}],"edges":[{"from":"c","to":"a","label":"unlink and relink"},{"from":"c","to":"o","label":"one queue to another"},{"from":"c","to":"l","label":"Chapter 17","style":"gold"},{"from":"c","to":"m","label":"splice"},{"from":"c","to":"h","label":"Chapter 8"}],"caption":"The allocator is the neat one. It keeps free blocks on a chain because handing one out is an unlink and a relink, which is why a program can claim and release for days without anything being shuffled. It does not solve the wedding hall: fragmented free blocks still cannot be handed to you as one run."}'></div>

  <p>The gold node is worth remembering. A cache that keeps the thing you just used at the front is doing precisely the move this lesson prices: unlink from the middle, relink at the head, two writes and no shuffling, on a structure that never needs to know how long it is. Chapter 17 builds one.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and where the bill actually sits.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"Adding at the top is instant now, but jumping to item 400 got slow"</td><td>Both halves of the receipt, in one sentence</td><td>Somebody swapped a row for a chain. Not a regression, a purchase</td></tr>
    <tr><td>"The insert is one line of code and it still takes a second"</td><td>A cheap operation with an expensive prefix</td><td>The write is one step. The walk to it is the bill, priced by distance from the head</td></tr>
    <tr><td>"We batched two hundred inserts and it made no difference"</td><td>Batching that saved nothing</td><td>Every insert restarted the walk from the head, so the batch was two hundred walks rather than one</td></tr>
    <tr><td>"Half the list vanished after last night deploy, and nothing errored"</td><td>Silent loss with no crash</td><td>The two writes ran in the wrong order, so everything after the insertion point lost its only referrer</td></tr>
    <tr><td>"We delete thousands of these and memory never comes back"</td><td>A delete that freed nothing</td><td>Unlinking removes a node from the walk, not from the building. Lesson 3.2 said the same about a row</td></tr>
    <tr><td>"Sorting this is far slower than sorting the array version"</td><td>Identical comparisons, worse wall clock</td><td>The comparisons did not change. Each one is now a separate journey, which is the trips bill from 4.1</td></tr>
  </table>
  <div class="tbl-cap">Rows one, two and three arrive as pure performance complaints and all three are about travel before a write. Rows four, five and six are not about travel at all, which is why the middle column has to be read rather than assumed.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">The right structure, chosen for the right reason, and no improvement.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"We moved our event timeline off an array onto a linked list specifically to make inserts cheap. Inserts were the entire reason. The nightly merge splices about 400 new events into a 50,000 event timeline, and it takes exactly as long as it did before. Not worse. Not better. Identical."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"They moved to a chain for cheap inserts, and the inserts got no cheaper","lanes":[{"label":"The team"},{"label":"You"},{"label":"The job"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Moved to a chain for cheap inserts, no improvement at all"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: cheap once you are there, or cheap to get there?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"Each of 400 splices restarts at the head"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Writes fell from 10 million to 800"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"Hops rose to about 10 million"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"Sort the batch, then walk the chain once"},{"id":"c3","lane":2,"col":4,"kind":"accent","label":"50,000 hops and 800 writes"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"b1","to":"b2","style":"green"},{"from":"c2","to":"c3"},{"from":"b2","to":"b3","style":"green","label":"stop restarting the walk"}],"caption":"The structure was the right choice and the reasoning behind it was sound. What nobody costed was that a chain hands you a position exactly once, at the head, and this job was asking for four hundred of them."}'></div>

  <p><strong>The writes fell by a factor of twelve thousand and the total did not move, because the writes were never the bill.</strong> On the array each splice rewrote everything behind its address, about 25,000 boxes, so 400 splices did roughly ten million box moves. On the chain each splice walks from the head to its address, also about 25,000 hops, so 400 splices do roughly ten million hops. The fix is not the structure, which is now correct. It is to sort the 400 arrivals first and then walk the chain <em class="k">once</em>, splicing as you pass each spot: 50,000 hops and 800 writes.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked the one question this lesson exists to hand you: <strong>is this cheap once you are there, or cheap to get there?</strong> Every other explanation on the table assumes the move was wrong. The move was right, and the thing nobody costed is that a chain hands you a position exactly once, at the head, and this job was asking for four hundred of them.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, no code</div>
    <p>Write eight sticky notes, put a name on each, write on every note where the next note is, then scatter them around the room in no order. <strong>Round one:</strong> add a ninth note after the third, counting how many notes you rewrite. It is two, and it stays two at eight notes or eight hundred. <strong>Round two:</strong> do the same insert in the wrong order on purpose, changing the third note first, and then try to find note four. <strong>Round three:</strong> now count the notes you had to read before you could start. That number is the one this lesson is about, and it is the only one that grows.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A team moves a list to a chain to make inserts cheap. The inserts happen at sorted positions throughout the list. What actually changes?</div>
    <div class="opt" data-i="0">Inserts become much cheaper, because two writes beats hundreds of moves</div>
    <div class="opt" data-i="1">The writes collapse to two each, and an equally large walk appears in their place</div>
    <div class="opt" data-i="2">Nothing changes, because a chain and a row cost the same for everything</div>
    <div class="qexp">Option zero is the trap and it is exactly why this move gets made. The writes really do collapse, and they were never the whole bill: finding the sorted position costs a hop per node in a chain, where a row found it by arithmetic. Option two is too strong: the head insert is genuinely free of any walk, which is a real and useful win.</div>
  </div>

  <div class="quiz" data-correct="0">
    <div class="q">An insert is done in the wrong order: the node you are holding is pointed at the new node before the new node has an address. What happens?</div>
    <div class="opt" data-i="0">Everything after the insertion point becomes unreachable, and nothing errors</div>
    <div class="opt" data-i="1">The insert fails and the chain is left as it was</div>
    <div class="opt" data-i="2">The new node is inserted at the end instead</div>
    <div class="qexp">The address of the rest of the chain existed in exactly one place, and you have just overwritten it. Those nodes are still in memory, still correct, and nothing in the world names them. That is the same failure as Lesson 4.1 round four, losing the head, and a chain gives you no warning at all because there is nothing left to complain.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Two writes at any length, provided you are standing in the right place, and standing in the right place is what a one way chain refuses to help with. Next: what it costs to buy the way back.</p>
  </div>
__NAV__
</div>`,

"4.3": `<div class="wrap">
  <div class="les-kicker">Chapter 4 · Lesson 4.3</div>
  <h1 class="les-title">Singly, Doubly and Circular</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~12 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">There are not three kinds of linked list. There is one, and two things you can buy back afterwards.</p>

  <p class="lead">Lesson 4.2 ended on a condition: two writes, provided you are standing in the right place. This lesson is what it costs to always be standing in the right place. By the end you can look at any chain and answer two questions about one node, and those two answers tell you everything the whole structure can and cannot do. Every variant here is the same swap, cheap insertion against instant position, priced slightly differently.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">A line you can only see forwards.</div>
  <p>You are in a conga line, hands on the shoulders of the person in front. Somebody calls your name from the door. You cannot step out, because the person behind you has to be joined to the person in front, and <strong>somebody has to know who those two are.</strong> You know the one in front. You have never once seen the one behind.</p>

  <div class="viz" data-viz='{"type":"scene","title":"You cannot leave a line you can only see forwards","width":760,"height":270,"items":[{"icon":"person","x":104,"y":126,"kind":"gold","label":"you, holding the shoulders in front"},{"icon":"pile","x":390,"y":126,"kind":"muted","label":"the person behind, who you cannot see"},{"icon":"person","x":664,"y":126,"kind":"accent","label":"somebody calling your name"}],"arrows":[{"x1":152,"y1":126,"x2":330,"y2":126,"style":"gold","label":"you know who is in front"},{"x1":452,"y1":126,"x2":598,"y2":126,"style":"green","label":"nobody knows who is behind"}],"caption":"You cannot step out, because the person behind you has to be joined to the person in front, and only somebody who can see backwards can do that. You know exactly one of the two, and it is not the one that matters."}'></div>

  <p>The only way out is for the whole line to be walked from the front until somebody finds who is behind you. Or every person could have been told, on joining, who was behind them as well as in front. That is a small extra fact, held by everybody, forever, and it is the entire subject of this lesson.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One node, and two independent decisions.</div>
  <p>The first decision is <strong>how many addresses a node carries.</strong> One, and the chain runs forwards only. Two, and it runs both ways, and every node pays for the second one whether or not anything ever walks backwards.</p>

  <div class="viz" data-viz='{"type":"arch","title":"One node, and the only two questions","maxChars":16,"nodes":[{"id":"n","label":"One node: a value, and some addresses","col":0,"row":1,"kind":"dark"},{"id":"q1","label":"How many addresses does a node carry?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"q2","label":"What does the last address point at?","col":1,"row":2,"kind":"gold","shape":"diamond"},{"id":"a1","label":"One: forwards only. Singly","col":2,"row":0,"kind":"accent"},{"id":"a2","label":"Two: both ways. Doubly, and every node pays","col":3,"row":0,"kind":"accent"},{"id":"b1","label":"Nothing: the chain ends. You can tell where the end is","col":2,"row":2,"kind":"accent"},{"id":"b2","label":"The head: circular. There is no end to find","col":3,"row":2,"kind":"gold"}],"edges":[{"from":"n","to":"q1"},{"from":"n","to":"q2"},{"from":"q1","to":"a1"},{"from":"a1","to":"a2","label":"or"},{"from":"q2","to":"b1"},{"from":"b1","to":"b2","label":"or","style":"gold"}],"caption":"Singly, doubly and circular are not three kinds of chain. They are one chain and two independent decisions, which is why all four combinations exist and why you can be handed any of them."}'></div>

  <p>The second decision is <strong>what the last address points at.</strong> Lesson 4.1 said it holds nothing, an address that deliberately points nowhere, and that is how a walker knows it has finished. Point it at the head instead and the chain is circular: perfectly usable, and with no ending signal anywhere in it.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The same removal, once without the way back and once with.</div>

  <div class="board" data-anim='{"type":"graph-walk","title":"Removing the node you are already holding, twice","speed":1800,"directed":true,"unit":126,"legend":[["where you are standing","look"],["walked, or now reachable","seen"],["the node that took its place","found"]],"nodes":[{"id":"n1","label":"19","x":0,"y":0},{"id":"n2","label":"74","x":1,"y":0},{"id":"n3","label":"31","x":2,"y":0},{"id":"n4","label":"60","x":3,"y":0},{"id":"n5","label":"8","x":4,"y":0},{"id":"d1","label":"19","x":0,"y":1.6},{"id":"d2","label":"74","x":1,"y":1.6},{"id":"d3","label":"31","x":2,"y":1.6},{"id":"d4","label":"60","x":3,"y":1.6},{"id":"d5","label":"8","x":4,"y":1.6}],"edges":[{"from":"n1","to":"n2"},{"from":"n2","to":"n3"},{"from":"n3","to":"n4"},{"from":"n4","to":"n5"},{"from":"n2","to":"n4"},{"from":"d1","to":"d2"},{"from":"d2","to":"d3"},{"from":"d3","to":"d4"},{"from":"d4","to":"d5"},{"from":"d2","to":"d1"},{"from":"d3","to":"d2"},{"from":"d4","to":"d3"},{"from":"d5","to":"d4"},{"from":"d2","to":"d4"},{"from":"d4","to":"d2"}],"steps":[{"edges":["n1-n2","n2-n3","n3-n4","n4-n5"],"look":["n3"],"tags":{"n1":"head","n3":"here"},"say":"Top row, singly. You are standing on 31 and it has to come out. <b>The bottom row is the same five nodes with a second address on each, and its arrows stay faded until we get there.</b>"},{"edges":["n1-n2","n2-n3","n3-n4","n4-n5"],"look":["n3"],"tags":{"n3":"who is before me?"},"say":"To unhook it you have to change what the node before it points at. So ask 31 who that is. <b>There is no answer</b>, and not because it is hidden. It was never stored."},{"edges":["n1-n2","n2-n3","n3-n4","n4-n5"],"look":["n2"],"seen":["n1"],"tags":{"n1":"head","n2":"found it"},"say":"So you go back to the head, the only handle that can start a walk, and follow one address. <b>One hop, and two nodes read, to earn the right to do one write.</b> On a chain of a million it is about half a million."},{"edges":["n1-n2","n2-n4","n3-n4","n4-n5"],"found":["n4"],"seen":["n1","n2"],"tags":{"n2":"one write"},"say":"One write. 74 lets go of 31 and takes 60. <b>31 still points at 60 and nothing points at 31</b>, which is exactly the unlink from Lesson 4.2."},{"edges":["d1-d2","d2-d3","d3-d4","d4-d5","d2-d1","d3-d2","d4-d3","d5-d4"],"look":["d3"],"tags":{"d3":"here"},"say":"Now the same job on the bottom row, where every node carries two addresses. Eight arrows instead of four, and <b>you paid for all four extra ones on every node before any of this started.</b>"},{"edges":["d1-d2","d2-d3","d3-d4","d4-d5","d2-d1","d3-d2","d4-d3","d5-d4"],"look":["d3"],"seen":["d2","d4"],"tags":{"d3":"here","d2":"answers instantly"},"say":"Ask 31 who comes before it and 74 answers on the spot. <b>Zero hops.</b> Both neighbours are reachable from where you are standing."},{"edges":["d1-d2","d2-d4","d4-d2","d2-d1","d4-d5","d5-d4"],"found":["d2","d4"],"tags":{"d2":"write 1","d4":"write 2"},"say":"<b>Two writes instead of one</b>, because 74 has to point forward past 31 and 60 has to point backward past it. Two writes and no walk, against one write and a walk from the head."}],"caption":"The walk vanished and the write count went up. That is the trade in one board: a second address on every node, forever, buys you the right to never go back to the head again."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What a node can actually answer.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Asking a node who comes before it","actors":[{"label":"You, holding one node","kind":"gold"},{"label":"That node","kind":"accent"},{"label":"The head handle","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"who comes before you","style":"gold"},{"from":1,"to":0,"label":"I do not hold that"},{"from":0,"to":2,"label":"then start me at the beginning","style":"gold"},{"from":2,"to":0,"label":"here, walk","style":"green"}],"caption":"A node is not a place in a line. It is a thing holding a value and holding addresses, and it can only answer questions about the addresses it holds. Backwards is not hidden. It was never stored, and storing it is a decision somebody makes once, for every node, forever."}'></div>

  <p>A node is not a place in a line. It is a thing holding a value and holding addresses, and <strong>it can only answer questions about the addresses it holds.</strong> Backwards is not hidden and it is not lost. It was never stored, and storing it is a decision somebody made once, for every node that will ever exist.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Four chains, and the one thing each still cannot do.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The chain</th><th>Addresses a node carries</th><th>Removing a node you are holding</th><th>What it still cannot do</th></tr>
    <tr><td>Singly</td><td>one</td><td>walk from the head, then one write</td><td>Look backwards, ever</td></tr>
    <tr><td>Doubly</td><td>two</td><td>two writes, no walk</td><td>Tell you a position by number, and it costs 1.5 times a singly node forever</td></tr>
    <tr><td>Singly circular</td><td>one</td><td>walk, and the walk never ends by itself</td><td>Say where the end is, because there is not one</td></tr>
    <tr><td>Doubly circular</td><td>two</td><td>two writes, no walk</td><td>The same, at 1.5 times the memory, which is what a round robin scheduler buys</td></tr>
  </table>
  <div class="tbl-cap">The second column is the only thing that actually differs. Everything in the third and fourth columns falls out of it, which is why this is two decisions about one node rather than four structures to memorise.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which chain are you allowed to buy","maxChars":18,"nodes":[{"id":"q1","label":"Do you ever need the node before the one you are holding?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"s","label":"Singly. One address a node, and a walk when you need to look back","col":0,"row":1,"kind":"accent"},{"id":"d","label":"Doubly. Two addresses a node, paid on every node forever","col":2,"row":1,"kind":"gold"},{"id":"q2","label":"Does the walk ever need to stop?","col":2,"row":2,"kind":"gold","shape":"diamond"},{"id":"c","label":"Circular. The last address points at the head, so nothing ends","col":3,"row":3,"kind":"bad"}],"edges":[{"from":"q1","to":"s","label":"no","style":"green"},{"from":"q1","to":"d","label":"yes"},{"from":"d","to":"q2"},{"from":"q2","to":"c","label":"no","style":"gold"}],"caption":"The second question is independent of the first, so all four combinations are real. Circular is the one that turns a bug into an infinite loop rather than an error, because there is no longer any node that can say the walk is over."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Count the bytes first.</div>
  <p>Take a million numbers, eight bytes each, on a machine where an address is also eight bytes. As a row: eight million bytes. As a singly chain every node carries the number and one address, so sixteen bytes each. As a doubly chain, twenty four.</p>

  <div class="viz" data-viz='{"type":"card","title":"What the second address costs","eyebrow":"BOTH METERS","badge":"a million numbers","width":530,"rows":[{"k":"A million numbers, as a row","v":"8 MB","tone":"good","bar":0.33},{"k":"The same million, as a singly chain","v":"16 MB","bar":0.67},{"k":"The same million, as a doubly chain","v":"24 MB","tone":"bad","bar":1},{"k":"Removing a node you hold, singly","v":"1 write, plus a walk from the head","tone":"bad","bar":1},{"k":"Removing a node you hold, doubly","v":"2 writes, no walk","tone":"good","bar":0.004}],"caption":"Eight bytes for the number, eight for each address, on a machine where an address is eight bytes. A doubly chain is three times the row and one and a half times the singly chain, and it pays that on every node whether or not anything is ever removed."}'></div>

  <p>A doubly chain is <strong>three times the row and one and a half times the singly chain</strong>, and it pays that on every node whether or not anything is ever removed. In the Chapter 2 currency, the second address turns one operation from <em class="g">O(n)</em> into <em class="g">O(1)</em> and adds <em class="g">O(n)</em> extra space to do it, which is the space for time trade from Lesson 2.4 in its purest form.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Four places these answers are already running.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Where each re-purchase is already running","unit":172,"nodes":[{"id":"c","label":"How many addresses one node carries","x":2,"y":1,"kind":"dark"},{"id":"b","label":"Browser history: Back and Forward are both real buttons","x":0,"y":0,"kind":"accent"},{"id":"r","label":"A round robin scheduler that starts again at the first worker","x":0,"y":2,"kind":"gold"},{"id":"m","label":"A music player with previous track as well as next","x":4,"y":0,"kind":"box"},{"id":"a","label":"An allocator that has to join two free blocks either side of a gap","x":4,"y":2,"kind":"box"},{"id":"l","label":"A cache that moves any entry to the front on use","x":2,"y":3,"kind":"box"}],"edges":[{"from":"c","to":"b","label":"two addresses"},{"from":"c","to":"r","label":"circular","style":"gold"},{"from":"c","to":"m","label":"two addresses"},{"from":"c","to":"a","label":"two addresses"},{"from":"c","to":"l","label":"two addresses, Chapter 17"}],"caption":"Back and Forward being two real buttons rather than one button and a wish is the second address, visible from the outside. A round robin scheduler is circular: it has no last worker, because the last one points at the first."}'></div>

  <p>Your browser keeps a session history you move through in both directions, which is <strong>why Back and Forward are two real buttons rather than one button and a wish.</strong> A round robin scheduler hands work to each worker in turn and starts again at the first, which is a chain whose last address points at the head, and it has no last worker at all.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences about one node design.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"Back works, Forward does nothing, and always has"</td><td>One direction free, the other absent</td><td>One address a node. Backwards was never stored, and storing it costs every node</td></tr>
    <tr><td>"Deleting is instant from the list and slow from a search result"</td><td>The same delete, two prices</td><td>One path hands you the node before it, the other hands you the node itself</td></tr>
    <tr><td>"Nothing changed but how the records are joined, and memory tripled"</td><td>Memory up with no new data</td><td>Twenty four bytes a node where a row spent eight, and half the increase is the back address alone</td></tr>
    <tr><td>"The job that counts them never finishes and never errors"</td><td>A loop with no complaint</td><td>The last address points at the head, so no node can ever say the walk is over</td></tr>
    <tr><td>"Can we show the previous track as well as the next one?"</td><td>A feature request that is a node design</td><td>A second address on every node forever, or a walk from the head every time</td></tr>
    <tr><td>"It got slower as the list grew, and it is one single write"</td><td>A fixed cost that grew anyway</td><td>The write is fixed at one. What grew is the walk to the node before it</td></tr>
  </table>
  <div class="tbl-cap">Not one row here is about the list being long. Every one is about how many addresses a node was given, and where its last address points.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">A correct fix, and a cheaper one nobody looked for.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"We moved our recently seen list from a plain row to a doubly linked list so that dropping any single record would be instant. It worked, deletes went from noticeable to nothing. But the same four million records now take 96 MB where they used to take 32, and we are being asked to explain it."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Memory tripled and nobody added a record","lanes":[{"label":"The team"},{"label":"You"},{"label":"The service"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"32 MB became 96 MB, same 4 million records"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: what is each node now carrying?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"A value and two addresses, 24 bytes a node"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Half the increase is the back address alone"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"Ask: are you deleting the node, or its value?"},{"id":"c2","lane":2,"col":3,"kind":"bad","label":"Its value. The node itself is interchangeable"},{"id":"c3","lane":2,"col":4,"kind":"accent","label":"Copy the next value in, unlink the next node"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"b1","to":"b2","style":"green"},{"from":"b2","to":"b3","style":"green"},{"from":"b3","to":"c3","style":"green","label":"no back address needed"}],"caption":"Four million records at eight bytes each is 32 MB as a row and 96 MB as a doubly chain. Exactly half that increase, 32 MB, is the back address on its own, bought so that one operation would be instant."}'></div>

  <p><strong>They are not deleting the node. They are deleting the value it holds, and those are different jobs.</strong> Copy the value out of the next node into this one, then unlink the next node, whose address you are already holding. Two writes, no walk, and no back address on any node in the list. That drops them to 64 MB and keeps the instant delete, and it fails on exactly one input: the last node, where there is no next one to steal from.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It did not argue about whether the memory was worth it. It asked <strong>are you deleting the node, or the value?</strong> Almost every list in a product cares about the values and treats the nodes as interchangeable, and the moment that is true the back address stops being necessary and starts being 32 MB of habit.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, no code</div>
    <p>Write eight names on eight sticky notes and scatter them, not in a line. On each note write the name of the next note and nothing else. <strong>Round one:</strong> take the fifth note out without breaking the chain. You have to start at the first and follow along, and count how many you read before you could write anything. <strong>Round two:</strong> add the name of the previous note to every note, then take the fifth out again, and notice that you did no reading at all and two writes instead of one. <strong>Round three:</strong> on the last note, write the name of the first note instead of nothing, and then ask somebody to count how many notes there are.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A doubly linked list removes a node you are holding in two writes and no walk. What did that cost?</div>
    <div class="opt" data-i="0">Nothing, since two writes is still a fixed number</div>
    <div class="opt" data-i="1">A second address on every node in the list, forever, whether or not anything is ever removed</div>
    <div class="opt" data-i="2">The ability to walk forwards</div>
    <div class="qexp">The write count barely moved, from one to two. What was bought is the disappearance of the walk, and it was paid for in advance and in full: every node is now 24 bytes instead of 16, which on four million records is 32 MB spent so that one operation would not need to start at the head.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">A job that counts the items in a list never finishes and never reports an error. What is the most likely cause?</div>
    <div class="opt" data-i="0">The list is too long to count</div>
    <div class="opt" data-i="1">A node was deleted while the count was running</div>
    <div class="opt" data-i="2">The last address points at the head, so no node ever says the walk is over</div>
    <div class="qexp">A walk stops when it reaches an address that points nowhere. Make the chain circular and that address does not exist anywhere in it, so the walk is not stuck, it is working perfectly and will simply never be done. That is why circular chains are always paired with a rule about when to stop, and why a missing rule produces silence rather than a crash.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>You now have every shape a chain can take. Next: the one thing a chain hands you free that a row cannot, and the two questions it answers in a single walk.</p>
  </div>
__NAV__
</div>`,

"4.4": `<div class="wrap">
  <div class="les-kicker">Chapter 4 · Lesson 4.4</div>
  <h1 class="les-title">The Two-Pointer Trick: Finding the Middle and the Loop</h1>
  <div class="les-meta">
    <span class="pill">technique</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">12 visuals</span>
  </div>

  <p class="motto">Two markers do not save you a single step. They save you the second pass, and on a chain that loops there is no second pass to save.</p>

  <p class="lead">Three lessons of a chain refusing to tell you where anything is. This one is the exception: the only position a chain hands back free. By the end you can answer two questions about a chain that has never been counted, and you will know precisely what that costs, which is not what most people are told.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Two people, one track, nothing to write with.</div>
  <p>Two people start together on a running track. One walks, the other jogs at exactly twice her pace, and the only rule either follows is keep going. No measuring tape, no stopwatch, nothing written down.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Two people, one track, and nothing to write with","width":760,"height":270,"items":[{"icon":"person","x":110,"y":130,"kind":"gold","label":"the walker, one step a beat"},{"icon":"person","x":390,"y":130,"kind":"accent","label":"the jogger, two steps a beat"},{"icon":"shelf","x":650,"y":130,"kind":"muted","label":"the far end of the track"}],"arrows":[{"x1":432,"y1":130,"x2":588,"y2":130,"style":"green","label":"reaches the end first"}],"caption":"No measuring tape, no stopwatch, nothing written down. They start together and the only rule either follows is keep going. When the jogger reaches the far end, look at the walker: she is standing on the middle, and nobody measured anything."}'></div>

  <p>When the jogger reaches the far end, look at the walker. <strong>She is standing on the middle</strong>, and nobody measured the track, counted the laps, or wrote anything down. That is the whole method, and everything else in this lesson is that one idea with the dial moved.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">Two markers, and what each rule buys.</div>
  <p>Put two positions on the same chain, move them by different rules, and read the answer off where they finish. There are two rules you will meet constantly, and between them they buy three things.</p>

  <div class="viz" data-viz='{"type":"flow","title":"Two markers, and what each rule buys","maxChars":16,"nodes":[{"id":"a","label":"Two markers on one chain","col":0,"row":1,"kind":"gold"},{"id":"q","label":"What is the rule between them?","col":1,"row":1,"kind":"gold","shape":"diamond"},{"id":"r","label":"A ratio: one hop against two","col":2,"row":0,"kind":"accent"},{"id":"g","label":"A fixed gap: start one k ahead","col":2,"row":2,"kind":"accent"},{"id":"b1","label":"A fraction of the length, without knowing the length","col":3,"row":0,"kind":"accent"},{"id":"b2","label":"A distance from the end, without knowing the end","col":3,"row":2,"kind":"accent"},{"id":"b3","label":"And if the chain loops, the ratio pair meets. Nothing else can tell you","col":3,"row":1,"kind":"gold"}],"edges":[{"from":"a","to":"q"},{"from":"q","to":"r"},{"from":"q","to":"g"},{"from":"r","to":"b1","style":"green"},{"from":"g","to":"b2","style":"green"},{"from":"r","to":"b3","style":"gold"}],"caption":"Two rules, three purchases. Nothing is measured and nothing is stored, which is the entire point: every one of these answers arrives without the chain ever being asked how long it is."}'></div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The middle first, then the same pairing on something that never ends.</div>

  <div class="board" data-anim='{"type":"graph-walk","title":"The middle of seven, without ever learning it is seven","speed":1600,"directed":true,"unit":112,"legend":[["slow","look"],["fast","found"],["already walked","seen"]],"nodes":[{"id":"n1","label":"19","x":0,"y":0},{"id":"n2","label":"74","x":1,"y":0},{"id":"n3","label":"31","x":2,"y":0},{"id":"n4","label":"60","x":3,"y":0},{"id":"n5","label":"8","x":4,"y":0},{"id":"n6","label":"45","x":5,"y":0},{"id":"n7","label":"27","x":6,"y":0}],"edges":[{"from":"n1","to":"n2"},{"from":"n2","to":"n3"},{"from":"n3","to":"n4"},{"from":"n4","to":"n5"},{"from":"n5","to":"n6"},{"from":"n6","to":"n7"}],"steps":[{"edges":["n1-n2","n2-n3","n3-n4","n4-n5","n5-n6","n6-n7"],"look":["n1"],"tags":{"n1":"both start here"},"say":"Two markers, same start. Slow takes one hop a turn, fast takes two. <b>Nothing on this board knows the chain is seven long</b>, including you, if you had not been told."},{"edges":["n1-n2","n2-n3","n3-n4","n4-n5","n5-n6","n6-n7"],"look":["n2"],"found":["n3"],"seen":["n1"],"tags":{"n2":"slow","n3":"fast"},"say":"One turn. The gap between them is one node, and it widens by exactly one every turn, which is the whole mechanism."},{"edges":["n1-n2","n2-n3","n3-n4","n4-n5","n5-n6","n6-n7"],"look":["n3"],"found":["n5"],"seen":["n1","n2"],"tags":{"n3":"slow","n5":"fast"},"say":"Two turns. Two hops for slow, four for fast. Say the next frame out loud before you press."},{"edges":["n1-n2","n2-n3","n3-n4","n4-n5","n5-n6","n6-n7"],"look":["n4"],"found":["n7"],"seen":["n1","n2","n3"],"tags":{"n4":"slow","n7":"fast"},"say":"<b>Fast has run out of chain and slow is standing on node four of seven.</b> One walk, no counting, no second pass, and nobody ever asked how long it was."}],"caption":"Seven is odd, so there is one middle and slow lands on it. On an even length there are two middles and this pairing lands on the later of the two, which is a rule to know rather than a flaw to fix."}'></div>

  <p>Now the same two markers, same two rules, on a chain that comes back on itself. Nothing about the method changes.</p>

  <div class="board" data-anim='{"type":"graph-walk","title":"The same two markers, on a chain that comes back on itself","speed":1700,"directed":true,"unit":118,"legend":[["slow","look"],["fast","found"],["already walked","seen"],["they met here","bad"]],"nodes":[{"id":"m1","label":"19","x":0,"y":0},{"id":"m2","label":"74","x":1,"y":0},{"id":"m3","label":"31","x":2,"y":0},{"id":"m4","label":"60","x":3,"y":0},{"id":"m5","label":"8","x":3.7,"y":1},{"id":"m6","label":"45","x":2.9,"y":1.5},{"id":"m7","label":"27","x":1.9,"y":1}],"edges":[{"from":"m1","to":"m2"},{"from":"m2","to":"m3"},{"from":"m3","to":"m4"},{"from":"m4","to":"m5"},{"from":"m5","to":"m6"},{"from":"m6","to":"m7"},{"from":"m7","to":"m4"}],"steps":[{"edges":["m1-m2","m2-m3","m3-m4","m4-m5","m5-m6","m6-m7","m7-m4"],"look":["m1"],"tags":{"m1":"both start here"},"say":"Same start, same two rules. This chain has something the last one did not, and <b>neither marker has been told and neither can be.</b>"},{"edges":["m1-m2","m2-m3","m3-m4","m4-m5","m5-m6","m6-m7","m7-m4"],"look":["m2"],"found":["m3"],"seen":["m1"],"tags":{"m2":"slow","m3":"fast"},"say":"One turn. Nothing looks wrong, and nothing will look wrong until fast comes back to somewhere it has already been."},{"edges":["m1-m2","m2-m3","m3-m4","m4-m5","m5-m6","m6-m7","m7-m4"],"look":["m3"],"found":["m5"],"seen":["m1","m2"],"tags":{"m3":"slow","m5":"fast"},"say":"Two turns. Fast has crossed into the part that returns to itself, and <b>no signal announced it</b>, because a node that loops looks exactly like a node that does not."},{"edges":["m1-m2","m2-m3","m3-m4","m4-m5","m5-m6","m6-m7","m7-m4"],"look":["m4"],"found":["m7"],"seen":["m1","m2","m3"],"tags":{"m4":"slow","m7":"fast"},"say":"Three turns. Fast is now inside the loop and slow has just entered it. From here fast gains <b>one net node on slow every single turn.</b>"},{"edges":["m1-m2","m2-m3","m3-m4","m4-m5","m5-m6","m6-m7","m7-m4"],"bad":["m5"],"seen":["m1","m2","m3","m4"],"tags":{"m5":"both, same node"},"say":"They land on the same node. <b>The gap fast had to close drops by exactly one every turn, so it reaches zero and fast can never step over slow.</b> On a chain that ends, fast simply runs out. On this one, they meet, and that meeting is the only proof there is."}],"caption":"A walk that follows next until there is no next cannot notice this, because on this chain there is no next to run out of. Two markers are the only thing on the board that can tell the difference, and they do it with no memory at all."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">One turn, and the only comparison in it.</div>

  <div class="viz" data-viz='{"type":"seq","title":"One turn, in full","actors":[{"label":"The turn","kind":"gold"},{"label":"Slow","kind":"accent"},{"label":"Fast","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"give me your next","style":"gold"},{"from":1,"to":0,"label":"one address","style":"green"},{"from":0,"to":2,"label":"give me your next, twice","style":"gold"},{"from":2,"to":0,"label":"two addresses, or nothing","style":"green"},{"from":0,"to":0,"label":"are those two the same address?"}],"caption":"The only comparison in the whole method is the last line, and it compares two addresses rather than two values. Lesson 1.2 defined a pointer as a number that happens to be another box number, and this is that number being used as an identity rather than as a route."}'></div>

  <p>The comparison at the end is the part worth slowing down on. <strong>It compares the two addresses, not the two values</strong>, because two different nodes can perfectly well hold the same value and that would prove nothing. Lesson 1.2 defined a pointer as a number that happens to be another box number, and here that number is being used as an identity rather than as a route.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Two markers, one dial.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The pairing</th><th>What it buys</th><th>The condition it demands</th></tr>
    <tr><td>Both from the head, one hop against two</td><td>The halfway node</td><td>The chain has to end, or you get the loop answer instead</td></tr>
    <tr><td>Both from the head, one hop against three</td><td>The node a third of the way in</td><td>The same, and the fraction follows the ratio you chose</td></tr>
    <tr><td>One hop against two, watching for a meeting</td><td>An answer to does this loop</td><td>Nothing at all, which is what makes it useful</td></tr>
    <tr><td>Start one marker five ahead, then move both at one hop</td><td>The node five from the end</td><td>You must know the gap you want, not the length</td></tr>
  </table>
  <div class="tbl-cap">Row three is the odd one out and the important one. It is not a fraction of the length and not a distance from the end, and it is the only thing here that works on a chain which may never end at all.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which pairing answers your question","maxChars":18,"nodes":[{"id":"q","label":"What do you actually need?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"f","label":"A fraction of the way in. Use the ratio","col":0,"row":1,"kind":"accent"},{"id":"e","label":"A distance from the end. Use the fixed gap","col":2,"row":1,"kind":"accent"},{"id":"l","label":"To know whether it ends at all. Use the ratio and watch for a meeting","col":2,"row":2,"kind":"gold"}],"edges":[{"from":"q","to":"f","label":"a position"},{"from":"q","to":"e","label":"from the end"},{"from":"q","to":"l","label":"does it end","style":"gold"}],"caption":"These are not three methods to memorise. They are two markers with one dial moved, and where that dial sits decides which question you are allowed to ask."}'></div>

  <div class="callout warn">
    <div class="ch">The claim to be careful with</div>
    <p>You will hear that two markers are cheaper than counting. <strong>They are not.</strong> Writing down every node you have seen also works and also stops, and it stops the instant a node repeats. What it costs is memory: one entry per node walked. Two markers cost two addresses and nothing else, and that is the honest comparison to make.</p>
  </div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Count both methods before you praise either.</div>

  <div class="board" data-anim='{"type":"race","title":"The middle, two ways, on the same chain","speed":1700,"countLabel":" node reads","legend":[["reading now","look"],["already read","seen"],["done","found"]],"tracks":[{"label":"Two markers, one pass","data":["1","2","3","4","5","6","7","8","9","10","11"]},{"label":"Walk to learn the length, then walk again","data":["1","2","3","4","5","6","7","8","9","10","11"]}],"steps":[{"badge":"a chain of eleven","lanes":[{"look":[0],"count":0},{"look":[0],"count":0}],"say":"Eleven nodes and no stored length. Both methods will find the middle."},{"lanes":[{"look":[3],"seen":[0,1,2],"count":9},{"seen":[0,1,2,3,4,5,6,7,8,9,10],"count":11}],"say":"Two markers have read nine nodes so far. The other method has finished its first walk and knows the answer is eleven, so it now has to walk again."},{"badge":"the same number","lanes":[{"found":[5],"seen":[0,1,2,3,4],"count":16},{"found":[5],"seen":[0,1,2,3,4,5,6,7,8,9,10],"count":16}],"say":"<b>Sixteen node reads each.</b> Two markers did not save you a single step. They saved you the <b>second pass</b>, and that is a completely different thing."},{"badge":"and if you may only walk once","lanes":[{"found":[5],"count":16},{"bad":[0,1,2,3,4,5,6,7,8,9,10],"count":0}],"say":"Now make it a stream you are allowed to walk exactly once. <b>One method still works and the other cannot start.</b> That is the purchase, and it was never about the count."}],"caption":"If the chain already stores its own length, the second method needs no first pass at all and wins outright. Two markers matter when the length is unknown, when a second pass is impossible, or when the chain may not end."}'></div>

  <div class="viz" data-viz='{"type":"card","title":"What two markers actually buy","eyebrow":"NODE READS","badge":"a chain of 500","width":520,"rows":[{"k":"Two markers, one pass","v":"750 reads","bar":1},{"k":"Walk for the length, then walk again","v":"750 reads","bar":1},{"k":"A chain that stores its own length","v":"250 reads, no first walk","tone":"good","bar":0.33},{"k":"Two markers, on a stream you may walk once","v":"works","tone":"good","bar":0},{"k":"Either walking method, on a chain that loops","v":"never finishes","tone":"bad","bar":1}],"caption":"Read rows one and two together and then never quote a step count for this method again. The bottom two rows are the whole reason it exists, and neither of them is about speed."}'></div>

  <p>On a chain of five hundred, two markers read seven hundred and fifty nodes: slow reads two hundred and fifty, fast reads five hundred. Walking to learn the length and then walking to the middle reads five hundred and then two hundred and fifty. <strong>Seven hundred and fifty either way.</strong> Both are <em class="g">O(n)</em> and they are the same <em class="g">O(n)</em>. What two markers buy is one pass instead of two, two addresses of memory instead of a stored count, and an answer on a chain that will not let you walk it twice.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five things that refuse a second pass.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"One pass and two markers, in five places","unit":170,"nodes":[{"id":"c","label":"Two markers on one pass","x":2,"y":1,"kind":"dark"},{"id":"s","label":"A stream you are allowed to read exactly once","x":0,"y":0,"kind":"accent"},{"id":"f","label":"A file too large to hold in memory","x":0,"y":2,"kind":"box"},{"id":"l","label":"A history that loops because something was rewritten","x":4,"y":0,"kind":"gold"},{"id":"p","label":"The last five items of a feed with no length","x":4,"y":2,"kind":"box"},{"id":"r","label":"A random number generator that eventually repeats","x":2,"y":3,"kind":"box"}],"edges":[{"from":"c","to":"s","label":"no second pass"},{"from":"c","to":"f","label":"no second pass"},{"from":"c","to":"l","label":"the meeting","style":"gold"},{"from":"c","to":"p","label":"a fixed gap"},{"from":"c","to":"r","label":"the meeting"}],"caption":"Every one of these refuses something. A stream refuses a rewind, a large file refuses a second read, a looping history refuses to end. Two markers are what you reach for when the thing you are walking will not let you walk it twice."}'></div>

  <p>Note what is <em class="k">not</em> on that list. A chain that keeps its own length needs no walk at all to know how long it is, and several mainstream list types do exactly that. <strong>Two markers are not a better way to count. They are what you reach for when counting is not available</strong>, and the difference between those two sentences is most of this lesson.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and two questions underneath them.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"The job never finishes and there is no error anywhere"</td><td>Silence rather than a crash</td><td>The chain loops, so the end never arrives. Only a marker pairing or a record of where you have been can see it</td></tr>
    <tr><td>"Memory climbs while we are only reading and storing nothing"</td><td>Reading that grows memory</td><td>Something is listing where it has been, and the list is the only thing keeping the walk honest</td></tr>
    <tr><td>"It works on the sample file and hangs on the real one"</td><td>A failure that only real data produces</td><td>The loop is in the real data. A longer timeout cannot help, because nothing is slow</td></tr>
    <tr><td>"We need the middle of a feed that never says how long it is"</td><td>A position with no length available</td><td>The ratio pairing. One hop against two, and no length is ever asked for</td></tr>
    <tr><td>"Give me the last five events from a stream we read once"</td><td>A distance from an end you cannot see</td><td>The gap pairing. Start one marker five ahead, then move both together</td></tr>
    <tr><td>"Every retry starts the walk again and it is getting worse"</td><td>Repeated work with no progress</td><td>Either the walk is not ending, or nothing is remembering where it got to. Both are this lesson</td></tr>
  </table>
  <div class="tbl-cap">Rows one, two and three arrive as performance complaints and not one of them is about speed. A job that is not stopping has no ratio you can divide, which is exactly what makes it feel like slowness until somebody asks the right question.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Twenty minutes for a year, then nine hours.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our nightly job walks every customer event history and has taken about twenty minutes for a year. On Tuesday we killed it after nine hours. Memory went from 300 MB to over 6 GB while it ran, and it never logged a single error."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Not slower. Not stopping.","lanes":[{"label":"The team"},{"label":"You"},{"label":"The job"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Twenty minutes for a year, then nine hours and no error"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: is it slower, or is it not stopping?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"Memory climbing while only reading"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Reading does not grow memory. Something is collecting"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"One history loops back on itself"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"A walk that waits for no next never finds one"},{"id":"c3","lane":2,"col":4,"kind":"accent","label":"Two markers meet, and name the customer"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"b1","to":"b2","style":"green"},{"from":"c2","to":"c3"},{"from":"b2","to":"b3","style":"green","label":"it is not a speed problem"}],"caption":"Nine hours is not twenty minutes multiplied by anything. A job that is slower has a ratio you can divide; a job that is not stopping has no ratio at all, which is why the first question has to separate those two before any number is looked at."}'></div>

  <p><strong>The job was never slow. It was not stopping.</strong> A merge had rewritten one history and left an event pointing back at a newer one, closing a loop, and a walk that follows next until there is no next cannot notice that, because on that history there is no next to run out of. The memory climb is the tell: reading does not grow memory, so something was collecting, and what it was collecting was an unbounded list of events it kept finding. Run the marker pairing over each history first and the one that loops names itself in one pass.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked one question before looking at any number: <strong>is this slower, or is it not stopping?</strong> Nine hours is not twenty minutes multiplied by anything. A job that is slower has a ratio you can divide by the ratio of the data, exactly as in Chapter 2. A job that is not stopping has no ratio at all, and every minute spent tuning it is wasted.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, eleven playing cards</div>
    <p>Deal eleven cards face up in a line. <strong>Round one:</strong> both index fingers on card one. Move the left finger one card and the right two, again and again, until the right finger has no card to land on. Your left finger is on card six, the middle of eleven, and you never counted. <strong>Round two:</strong> do it with twelve cards and notice where you land, because there are two middles and this rule always picks the same one. <strong>Round three:</strong> quietly bend the last card round so it points back at card eight, and run round one again. Watch your fingers meet, and notice that nothing about the rule changed to make that happen.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">Two markers find the middle of a chain of 500 in 750 node reads. Walking for the length and then walking to the middle also takes 750. So what did the pairing buy?</div>
    <div class="opt" data-i="0">Half the work, since only one marker reaches the end</div>
    <div class="opt" data-i="1">Nothing. The two methods are interchangeable</div>
    <div class="opt" data-i="2">One pass instead of two, which is the only thing available on something you may walk exactly once</div>
    <div class="qexp">The step counts really are identical and quoting a saving there is the most common thing said wrongly about this method. What changes is the shape of the access: a stream, an enormous file and a history you cannot rewind all refuse a second walk, and on any of them the counting method cannot even begin. Option one is also the arithmetic error: fast reads 500 and slow reads 250, and those add rather than cancel.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">A job walking a chain never finishes and never errors, while memory climbs steadily. What is the most useful first question?</div>
    <div class="opt" data-i="0">How much data did the customer add this month</div>
    <div class="opt" data-i="1">Is this slower, or is it not stopping, since those need completely different answers</div>
    <div class="opt" data-i="2">Can we raise the timeout and let it finish overnight</div>
    <div class="qexp">Reading does not grow memory, so a climb during a read means something is collecting, and the most likely thing being collected is nodes that keep arriving. A slower job has a ratio: twice the data, twice the time. A job that is not stopping has none, so every hour spent tuning it, and every raised timeout, buys exactly nothing.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>You have the whole structure now, and the one position it gives away free. The last lesson of this chapter is the payoff: how to look at a product you did not build and read which half of the receipt it signed.</p>
  </div>
__NAV__
</div>`,

"4.5": `<div class="wrap">
  <div class="les-kicker">Chapter 4 · Lesson 4.5</div>
  <h1 class="les-title">Where Chains Show Up: Undo, Playlists, Browser History</h1>
  <div class="les-meta">
    <span class="pill">the diagnostic</span><span class="pill">~13 min</span>
    <span class="pill gold">read it from the outside</span><span class="pill">11 visuals</span>
  </div>

  <p class="motto">A product that will take you back one step and never back forty is not missing a feature. It is showing you its receipt.</p>

  <p class="lead">This is where the chapter becomes a diagnostic you can run on things you did not build. By the end you can look at any interface, ask one question, and make a claim about the structure underneath it that is specific enough to be wrong. The lesson also hands you the counterexample, because a rule you cannot falsify is not a rule. The same swap seen from outside: cheap insertion bought, instant position sold.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Three things in front of you right now.</div>
  <p>There is a button that takes you back one page and has never once offered to take you back forty. There is a shortcut that undoes the last thing you did and does not ask you which thing. Somewhere there is a next track, and next is all it does.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Three things in front of you that offer a direction and refuse a number","width":760,"height":260,"items":[{"icon":"phone","x":128,"y":122,"kind":"accent","label":"back one page"},{"icon":"doc","x":392,"y":122,"kind":"gold","label":"undo the last thing"},{"icon":"phone","x":648,"y":122,"kind":"box","label":"next track"}],"caption":"Not one of them offers to go back forty, undo the fourth thing, or jump to track 137. Every one offers a direction and refuses a number, and that refusal is not a missing feature. It is a receipt."}'></div>

  <p>Every one of those offers a direction and refuses a number. <strong>It is not a design fashion and it is not laziness.</strong> Going one step in a named direction is one read on a chain, at any length, and going to a numbered position is a walk that gets longer as the thing you love gets bigger.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One rule, and the direction it can be wrong in.</div>
  <p>Here is the whole diagnostic in one sentence. <strong>A product that offers you next and back and refuses to take a number is almost certainly sitting on a chain.</strong></p>

  <div class="viz" data-viz='{"type":"flow","title":"The rule, and the direction it can be wrong in","maxChars":17,"nodes":[{"id":"r","label":"Any product in front of you","col":0,"row":1,"kind":"dark"},{"id":"q","label":"Will it take a number, or only a direction?","col":1,"row":1,"kind":"gold","shape":"diamond"},{"id":"c","label":"Only a direction: almost certainly sitting on a chain","col":2,"row":0,"kind":"accent"},{"id":"n","label":"It takes a number","col":2,"row":2,"kind":"gold"},{"id":"n2","label":"Do not conclude a row. Look for the index somebody stood beside the chain","col":3,"row":2,"kind":"bad"}],"edges":[{"from":"r","to":"q"},{"from":"q","to":"c","label":"direction","style":"green"},{"from":"q","to":"n","label":"a number"},{"from":"n","to":"n2","style":"gold"}],"caption":"The rule is only worth something because it can be wrong, and the bottom branch is where the skill lives. A product that takes a number has not escaped the receipt. It has stood a second structure beside the chain and now pays to keep the two honest."}'></div>

  <p>That is worth something only because it can be wrong, and the other direction is where the skill lives. Where a product <em class="k">does</em> take a number, do not conclude it is a row. Go looking for the index somebody stood beside the chain, because that index is a second structure with a maintenance bill, and Lesson 3.5 already told you what happens when it is not repaired.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Your own document, and then something that writes its mechanism on the surface.</div>

  <div class="board" data-anim='{"type":"reveal","title":"Undo, and the redo you were never offered","speed":1700,"viz":{"maxChars":11,"gy":48,"nodes":[{"id":"e5","label":"type","col":0,"row":0,"kind":"accent"},{"id":"e4","label":"photo","col":1,"row":0,"kind":"accent"},{"id":"e3","label":"bold","col":2,"row":0,"kind":"accent"},{"id":"e2","label":"paste","col":3,"row":0,"kind":"accent"},{"id":"e1","label":"open","col":4,"row":0,"kind":"accent"},{"id":"nn","label":"new letter","col":2,"row":1,"kind":"gold"},{"id":"h","label":"the handle you hold","col":0,"row":1,"kind":"dark"}],"edges":[{"from":"e5","to":"e4"},{"from":"e4","to":"e3"},{"from":"e3","to":"e2"},{"from":"e2","to":"e1"},{"from":"nn","to":"e3"},{"from":"h","to":"e5"},{"from":"h","to":"e3"},{"from":"h","to":"nn"}]},"steps":[{"show":["e5","e4","e3","e2","e1","h"],"edges":["e5-e4","e4-e3","e3-e2","e2-e1","h-e5"],"look":["e5"],"say":"Five edits, and <b>each one names the edit it followed</b>, so every arrow points backwards in time. The handle names the newest. That is your document history and it is a chain."},{"show":["e5","e4","e3","e2","e1","h"],"edges":["e5-e4","e4-e3","e3-e2","e2-e1","h-e3"],"look":["e3"],"seen":["e4","e5"],"say":"Press undo twice. <b>Nothing was thrown away and nothing moved.</b> The handle now names an older edit, and standing further back is the entire operation."},{"show":["e5","e4","e3","e2","e1","h","nn"],"edges":["e5-e4","e4-e3","e3-e2","e2-e1","h-e3","nn-e3"],"found":["nn"],"seen":["e4","e5"],"say":"Now type one letter. A new edit is written and it already names what it followed. <b>Nothing points at it yet</b>, so nothing is committed to it."},{"show":["e5","e4","e3","e2","e1","h","nn"],"edges":["e4-e3","e3-e2","e2-e1","nn-e3","h-nn"],"found":["nn"],"bad":["e4","e5"],"say":"One address rewritten. <b>The photo and the typing are both still in memory and still perfectly readable, and nothing in the world names them any more.</b> That is why redo went grey, and nobody deleted anything."}],"caption":"Most editors keep two piles rather than one chain, and typing after an undo empties the redo pile. The picture is the same either way: the branch you were on is still there and nothing points at it, which is why the button greys out rather than warning you."}'></div>

  <p>You have watched that happen a thousand times and never seen the cause. Now the same rule on something that does not hide behind a grey button.</p>

  <div class="board" data-anim='{"type":"graph-walk","title":"A commit names its parent, so a history is a chain","speed":1600,"directed":true,"unit":112,"legend":[["where the walk is","look"],["already walked","seen"],["arrived without walking","found"]],"nodes":[{"id":"c0","label":"c0","x":6,"y":0},{"id":"c1","label":"c1","x":5,"y":0},{"id":"c2","label":"c2","x":4,"y":0},{"id":"c3","label":"c3","x":3,"y":0},{"id":"c4","label":"c4","x":2,"y":0},{"id":"c5","label":"c5","x":1,"y":0},{"id":"c6","label":"c6","x":0,"y":0}],"edges":[{"from":"c6","to":"c5"},{"from":"c5","to":"c4"},{"from":"c4","to":"c3"},{"from":"c3","to":"c2"},{"from":"c2","to":"c1"},{"from":"c1","to":"c0"}],"steps":[{"edges":["c6-c5","c5-c4","c4-c3","c3-c2","c2-c1","c1-c0"],"look":["c6"],"tags":{"c6":"HEAD"},"say":"Git stores a commit as a thing that names its parent, so a history is a chain and <b>every arrow points backwards in time.</b> HEAD is the only handle git hands you free."},{"edges":["c6-c5","c5-c4","c4-c3","c3-c2","c2-c1","c1-c0"],"look":["c4"],"seen":["c5","c6"],"tags":{"c4":"back 2"},"say":"Back one, back two. <b>Nothing here can skip</b>, so the only way to the third one is through the second."},{"edges":["c6-c5","c5-c4","c4-c3","c3-c2","c2-c1","c1-c0"],"look":["c1"],"seen":["c2","c3","c4","c5","c6"],"tags":{"c1":"HEAD~5"},"say":"HEAD tilde 5 is not a position. <b>It is the instruction hop back five times</b>, and five hops is exactly what you just watched. At four hundred it is four hundred hops."},{"edges":["c6-c5","c5-c4","c4-c3","c3-c2","c2-c1","c1-c0"],"found":["c0"],"seen":["c1","c2","c3","c4","c5","c6"],"tags":{"c0":"by its hash"},"say":"Now name the same commit by its hash instead. <b>Git does not walk the history at all</b>, because the hash is a key into a store that sits beside the chain. Same object, two ways of naming it, and only one of them is a walk."}],"caption":"This is the counterexample the rule needs. Git offers you a direction and a number, and the number is not a position in the chain, it is a key into an index standing next to it. That distinction is the whole diagnostic."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What a Back button actually asks for.</div>

  <div class="viz" data-viz='{"type":"seq","title":"What a Back button actually asks for","actors":[{"label":"You","kind":"gold"},{"label":"The entry you hold","kind":"accent"},{"label":"The entry it names","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"go back","style":"gold"},{"from":1,"to":0,"label":"one address, the one I followed","style":"green"},{"from":0,"to":2,"label":"you are the current one now"},{"from":0,"to":1,"label":"go back forty","style":"gold"},{"from":1,"to":0,"label":"I hold one address, not forty"}],"caption":"Going back is one read at any history length, because the thing you are holding stores exactly one address. Forty is not written anywhere, so a product offering it would have to walk for it, and a button that sometimes takes a moment is a worse button than one that never offers."}'></div>

  <p>That is the whole feature. The thing you are holding stores one address, so going back is one read at any history length. <strong>Forty is not written anywhere</strong>, so no version of that read takes forty as an argument, and a product offering it would have to walk. A button that sometimes takes a moment is a worse button than one that never offers.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Four shapes, and what each will answer.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The shape</th><th>What you may ask it</th><th>The condition it demands</th></tr>
    <tr><td>A walk only chain: an undo history, a next track</td><td>next and back, nothing with a number in it</td><td>Nothing. This is a chain with no extras</td></tr>
    <tr><td>A chain with a key store beside it: a commit and its hash</td><td>next, back, and any node by name</td><td>The store has to hold every node, and a name is not a position</td></tr>
    <tr><td>A chain with a position index beside it: a track number column</td><td>anything, including a number</td><td>The index has to be repaired on every insert and delete, forever</td></tr>
    <tr><td>A capped ring: an undo history that forgets its oldest step</td><td>next and back, up to the cap</td><td>Not a chain at all. Lesson 3.5 priced this one, and the cap is how you tell</td></tr>
  </table>
  <div class="tbl-cap">Rows two and three are the two ways to take a number and they are not the same thing. A name never goes stale because it never claimed a position. An index is a promise about order, and every insert is a chance to break it.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Reading a product from the outside","maxChars":17,"nodes":[{"id":"q1","label":"Does it offer a number?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"a","label":"No. A chain, and the refusal is the evidence","col":0,"row":1,"kind":"accent"},{"id":"q2","label":"Is the number a position, or a name?","col":2,"row":1,"kind":"gold","shape":"diamond"},{"id":"p","label":"A position: something is standing beside the chain, and it has to be repaired","col":2,"row":2,"kind":"bad"},{"id":"k","label":"A name or a token: a key into a store, and no walk at all","col":4,"row":2,"kind":"accent"}],"edges":[{"from":"q1","to":"a","label":"no","style":"green"},{"from":"q1","to":"q2","label":"yes"},{"from":"q2","to":"p","label":"a position"},{"from":"q2","to":"k","label":"a name","style":"green"}],"caption":"The second question is the one that separates a page number from a cursor token. One of them is a promise about order that has to be kept true forever. The other is a key that never goes stale because it never claimed a position."}'></div>

  <div class="callout warn">
    <div class="ch">The counterexample that sharpens the rule</div>
    <p>Your browser Back button refuses a number, and the model underneath it does not: the session history is specified as an ordered list with a current index, and a page can be sent forward or back by a signed number of steps. <strong>So the refusal you see is a decision about the interface, not proof about the structure.</strong> Which is exactly why the rule says almost certainly, and why the second question in the tree above is the one that does the real work.</p>
  </div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Four commands that look identical.</div>

  <div class="viz" data-viz='{"type":"card","title":"Naming the same commit two ways","eyebrow":"NODE READS","badge":"one history","width":520,"rows":[{"k":"Back one step, at any history length","v":"1 read","tone":"good","bar":0.0025},{"k":"HEAD~5","v":"5 reads","tone":"good","bar":0.0125},{"k":"HEAD~40","v":"40 reads","bar":0.1},{"k":"HEAD~400","v":"400 reads","tone":"bad","bar":1},{"k":"The same commit, by its hash","v":"no walk at all","tone":"good","bar":0}],"caption":"Every bar is drawn against a scale of 400 reads, so the two one-read rows are almost invisible and that is the honest picture. All four of the top rows are typed as commands that look identical to each other, and one of them is four hundred times another."}'></div>

  <p>Back one step is one read whether the history holds seven entries or seven hundred thousand. Five steps back is five reads, forty is forty, four hundred is four hundred, <strong>and all four are typed as commands that look exactly like each other.</strong> Name the same commit by its hash and there is no walk at all, because a hash is a key into a store rather than a distance along a chain. In the Chapter 2 currency: one is <em class="g">O(1)</em>, a numbered step back is <em class="g">O(n)</em>, and the hash is <em class="g">O(1)</em> again by a completely different route.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five receipts already signed.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Five places the same receipt is already signed","unit":168,"nodes":[{"id":"c","label":"Offers a direction, refuses a position","x":2,"y":1,"kind":"dark"},{"id":"u","label":"Undo, and the redo that greys out","x":0,"y":0,"kind":"accent"},{"id":"g","label":"A commit and its parent","x":0,"y":2,"kind":"box"},{"id":"p","label":"Cursor pagination: a token back, never a page number","x":4,"y":0,"kind":"gold"},{"id":"a","label":"A memory allocator walking its own free list","x":4,"y":2,"kind":"box"},{"id":"t","label":"Next track, previous track, and no track number","x":2,"y":3,"kind":"box"}],"edges":[{"from":"c","to":"u","label":"one address back"},{"from":"c","to":"g","label":"names its parent"},{"from":"c","to":"p","label":"a token, not a page","style":"gold"},{"from":"c","to":"a","label":"Lesson 3.1, answered"},{"from":"c","to":"t","label":"a direction only"}],"caption":"Cursor pagination is the one you may have shipped yourself. An interface that hands you a token and takes it back for the next page is refusing page numbers on purpose, and the refusal is the tell."}'></div>

  <p>The allocator is worth sitting with. Lesson 3.1 opened with a hall that refused twenty seats while three hundred stood empty, and the thing doing the refusing keeps its own spare space as a chain of free blocks. <strong>The structure that could not be given a run is the structure that hands out the runs</strong>, which is the neatest thing this course has been able to close so far.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and one question underneath all of them.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The tell</th><th>What it is really asking</th></tr>
    <tr><td>"Can we add a jump to page 40?"</td><td>A position asked of something that never had one</td><td>An index beside the chain, and a repair bill on every change forever</td></tr>
    <tr><td>"Why is redo greyed out, I only typed one letter"</td><td>A feature that vanished without a warning</td><td>The branch you were on is still there and nothing names it any more</td></tr>
    <tr><td>"The playlist screen is fine at 200 tracks and crawls at 4,000"</td><td>Twenty times the tracks, far more than twenty times the wait</td><td>Every row is being asked for by number, so the total is the sum of all the distances</td></tr>
    <tr><td>"We store the row number on each item and half are now wrong"</td><td>Positions that were right once</td><td>The stale position bill from Lesson 3.5, arriving through the index rather than through the row</td></tr>
    <tr><td>"Memory looks fine but allocations get slower the longer we run"</td><td>A slowdown that tracks uptime rather than load</td><td>The free space is itself a chain, walked on every claim, and fragmentation makes it longer. Lesson 3.1 named the same clock from the other side</td></tr>
    <tr><td>"Can we let people drag a track straight to position 300?"</td><td>A position arriving as a number rather than as a place</td><td>The Lesson 4.2 rule exactly. If they dragged it, you are already standing there and it is two writes</td></tr>
  </table>
  <div class="tbl-cap">Middle column, top to bottom, is one question in six costumes: did somebody name a position, or hand over a thing they were already holding? Everything expensive in this chapter is on the first side of that line.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Ten times the tracks, a hundred times the wait.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our playlist screen opens instantly for most people. A customer with 4,000 saved tracks says it takes about a second, which does not sound like much until you watch them do it. Same screen, same code, nothing deployed, and 4,000 is only ten times 400."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Ten times the tracks, a hundred times the wait","lanes":[{"label":"The team"},{"label":"You"},{"label":"The screen"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Instant at 400 tracks, about a second at 4,000"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: how is each row being fetched?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"By its number, one request per row"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"A number on a chain is a walk from the head"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"400 rows: 80,200 node reads"},{"id":"c3","lane":2,"col":3,"kind":"bad","label":"4,000 rows: 8,002,000 node reads"},{"id":"b3","lane":1,"col":4,"kind":"accent","label":"Walk once and hand out rows as you pass them"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"b1","to":"b2","style":"green"},{"from":"c2","to":"c3"},{"from":"b2","to":"b3","style":"green","label":"one walk, not one per row"}],"caption":"Ten times the tracks and a hundred times the reads, which is the four times line from Lesson 2.2 in a screen that nobody redeployed. The screen is asking a chain for a position, four thousand times over, and each ask starts again at the head."}'></div>

  <p><strong>Every row is priced by its own distance from the head.</strong> Rendering track 137 asks the list for track 137, which reads 137 nodes. Render all 400 rows that way and you have read 1 plus 2 plus 3 all the way to 400, which is 80,200 node reads. Render 4,000 the same way and it is 8,002,000. Ten times the tracks, a hundred times the reads, exactly what the four times line from Lesson 2.2 promises. The fix does not need a new structure: walk the chain once and hand out each row as you pass it, which is 4,000 reads instead of eight million.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It never asked how much data. It asked <strong>how is each row being fetched?</strong> The moment the answer is by its number, on a chain, the sum of all the distances is unavoidable and the ratio names itself. Notice also what the fix is not: nobody moved to an array, because the screen never needed a position in the first place.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, no code</div>
    <p>Open three things you use daily and write down, for each, whether it takes a number or only a direction. Then find the one that does take a number and go hunting for the index standing beside the chain: a page number, a scrollbar that knows where it is, a track number column. <strong>Then ask the one question that makes this a real diagnostic rather than a party trick:</strong> what would have to be repaired, and when, for that number to keep being true? If you cannot find an answer, you have probably found a row instead, and that is a correct result too.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A product offers Back and Next and refuses to jump to a numbered position. What can you honestly conclude?</div>
    <div class="opt" data-i="0">It is definitely a linked list, since only a chain refuses numbers</div>
    <div class="opt" data-i="1">It is probably a chain, and the refusal is evidence rather than proof, because an interface can refuse a number the structure would happily answer</div>
    <div class="opt" data-i="2">Nothing at all, since interfaces tell you nothing about structures</div>
    <div class="qexp">Your browser is the standing counterexample: the Back button refuses a number and the session history underneath is specified with an index and a signed step count. The refusal is a real signal and it is not a proof, which is why the useful follow up is the second question: if it does take a number, is that a position or a name?</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">A screen renders 400 rows by asking a chain for each row number in turn. The list grows ten times. What happens to the work?</div>
    <div class="opt" data-i="0">It grows ten times, in step with the data</div>
    <div class="opt" data-i="1">It stays the same, because the screen still shows the same number of rows</div>
    <div class="opt" data-i="2">It grows about a hundred times, because the total is the sum of every row distance and both the count and the distances grew</div>
    <div class="qexp">Asking for row k costs k reads, so rendering n rows costs 1 plus 2 plus 3 up to n, which is the four times line from Lesson 2.2. Ten times the rows is a hundred times the reads. The tell in the complaint is that the screen never changed: only a cost measured as a distance from a handle can do that.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>That is the chapter. One line signed, three bills torn up, one made worse, and one entirely new. Next: the whiteboard, and then Chapter 5, which adds no new structure at all and only a rule about which handle you are allowed to touch.</p>
  </div>
__NAV__
</div>`,

"4.6": `<div class="wrap">
  <div class="les-kicker">Chapter 4 · Lesson 4.6</div>
  <h1 class="les-title">The Whiteboard: The Chain, Rewired Step by Step</h1>
  <div class="les-meta">
    <span class="pill">whiteboard</span><span class="pill">~1.5 min</span>
    <span class="pill gold">watch, do not read</span><span class="pill">13 acts</span>
  </div>

  <p class="motto">A chain has no positions. It has handles, and a handle is a position you bought back.</p>

  <p class="lead">The whole chapter with the prose taken out. Thirteen acts in four parts. Part 2 animates every operation a chain has, including the one a row cannot do at all. <strong>Part 3 runs those same operations inside your undo button, a music player, the memory allocator that refused you a run back in Lesson 3.1, and a playlist screen that ships broken.</strong> One swap, cheap insertion against instant position, and every consequence it has.</p>
</div>

<div class="reel" data-reel='{"title":"The chain, rewired step by step","speed":1600,"caption":"Thirteen acts, about 1.5 minutes end to end. Part 2 animates every operation a chain has, including the one a row cannot do at all. Part 3 runs those same operations inside your undo button, a music player, the memory allocator from Lesson 3.1, and a playlist screen that ships broken.","acts":[{"part":"Part 1 · The idea","tab":"The swap","title":"Act 1 · One line signed, four bills torn up, and the thing that was sold","type":"reveal","speed":1650,"viz":{"maxChars":15,"gy":44,"nodes":[{"id":"c","label":"A node holds the address of the next one","col":1,"row":1,"kind":"dark"},{"id":"w","label":"Same width: refused","col":0,"row":0,"kind":"gold"},{"id":"s","label":"Side by side: refused","col":0,"row":1,"kind":"gold"},{"id":"a","label":"Claimed in advance: refused","col":0,"row":2,"kind":"gold"},{"id":"f","label":"It does not move: refused","col":0,"row":3,"kind":"gold"},{"id":"b2","label":"The shuffle bill: cancelled","col":2,"row":1,"kind":"accent"},{"id":"b3","label":"The copy bill: cancelled","col":2,"row":2,"kind":"accent"},{"id":"b4","label":"The stale position bill: cancelled","col":2,"row":3,"kind":"accent"},{"id":"b1","label":"The trips bill: eight times worse","col":2,"row":0,"kind":"bad"},{"id":"n","label":"Instant position: sold","col":3,"row":1,"kind":"bad"}],"edges":[{"from":"c","to":"w"},{"from":"c","to":"s"},{"from":"c","to":"a"},{"from":"c","to":"f"},{"from":"s","to":"b2"},{"from":"a","to":"b3"},{"from":"f","to":"b4"},{"from":"s","to":"b1"},{"from":"c","to":"n"}]},"steps":[{"show":["c"],"look":["c"],"say":"A chain signs one line where a row signed four. <b>Every node holds the address of the next one</b>, and that is the whole contract."},{"show":["c","w","s","a","f"],"found":["w","s","a","f"],"say":"All four of Chapter 3 clauses are refused. A node may be any size, nothing needs a neighbour, nothing is claimed ahead, and nothing is ever replaced."},{"show":["c","w","s","a","f","b2","b3","b4"],"found":["b2","b3","b4"],"say":"<b>Three of the four bills are torn up.</b> No shuffle, no copy, no stale position, at any size."},{"show":["c","w","s","a","f","b2","b3","b4","b1"],"bad":["b1"],"say":"One is made <b>considerably worse.</b> A node claimed on its own has neighbours belonging to somebody else, so every hop is its own journey."},{"show":["c","w","s","a","f","b2","b3","b4","b1","n"],"bad":["b1","n"],"say":"<b>And this is what paid for all of it.</b> A chain has no positions. The next eleven acts are that one swap being cashed and paid."}]},{"part":"Part 2 · The operations","tab":"Follow one address","title":"Act 2 · Six hops, and not one of them was the thing you wanted","type":"graph-walk","speed":1450,"directed":true,"unit":150,"legend":[["where you are now","look"],["already walked","seen"],["arrived","found"]],"nodes":[{"id":"n0","label":"19","x":4,"y":1},{"id":"n1","label":"74","x":5,"y":1},{"id":"n2","label":"31","x":3,"y":0},{"id":"n3","label":"60","x":5,"y":0},{"id":"n4","label":"8","x":1,"y":1},{"id":"n5","label":"45","x":3,"y":1},{"id":"n6","label":"27","x":0,"y":0}],"edges":[{"from":"n0","to":"n1"},{"from":"n1","to":"n2"},{"from":"n2","to":"n3"},{"from":"n3","to":"n4"},{"from":"n4","to":"n5"},{"from":"n5","to":"n6"}],"steps":[{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"tags":{"n0":"head"},"say":"Seven boxes scattered wherever there was room. <b>The leftmost box on the board is the last link</b>, not the first, and nothing about the picture tells you the order."},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"look":["n0"],"tags":{"n0":"head"},"say":"You hold one thing. It tells you where the next one is and nothing else: not the length, not what is behind it."},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"look":["n2"],"seen":["n0","n1"],"tags":{"n2":"hop 2"},"say":"Two hops, and the arrow has crossed the board twice. <b>You could not have found this by looking</b>, and neither can the machine."},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"look":["n5"],"seen":["n0","n1","n2","n3","n4"],"tags":{"n5":"hop 5"},"say":"Five hops. The green trail behind you is the bill: every one of those was read <b>only to find out where to go next.</b>"},{"edges":["n0-n1","n1-n2","n2-n3","n3-n4","n4-n5","n5-n6"],"found":["n6"],"seen":["n0","n1","n2","n3","n4","n5"],"tags":{"n6":"hop 6"},"say":"Six hops to reach the seventh thing. <b>Lesson 3.1 answered this same question with one sum</b> and never touched a box it was not asked about."}]},{"part":"Part 2 · The operations","tab":"Two writes","title":"Act 3 · An insert is two writes, and the order is the whole thing","type":"graph-walk","speed":1600,"directed":true,"unit":132,"legend":[["where you are standing","look"],["already walked","seen"],["the new node","found"]],"nodes":[{"id":"s1","label":"Ada","x":0,"y":0},{"id":"s2","label":"Ben","x":1,"y":0},{"id":"s3","label":"Cara","x":2,"y":0},{"id":"s4","label":"Dev","x":3,"y":0},{"id":"s5","label":"Eli","x":4,"y":0},{"id":"s6","label":"Fay","x":5,"y":0},{"id":"sx","label":"Mira","x":2.5,"y":1}],"edges":[{"from":"s1","to":"s2"},{"from":"s2","to":"s3"},{"from":"s3","to":"s4"},{"from":"s4","to":"s5"},{"from":"s5","to":"s6"},{"from":"s3","to":"sx"},{"from":"sx","to":"s4"}],"steps":[{"edges":["s1-s2","s2-s3","s3-s4","s4-s5","s5-s6"],"tags":{"s1":"head"},"say":"Six names, and Mira waiting below the line with nothing pointing at her."},{"edges":["s1-s2","s2-s3","s3-s4","s4-s5","s5-s6"],"look":["s3"],"seen":["s1","s2"],"tags":{"s3":"here"},"say":"You walked to Cara. <b>That walk is the bill</b>, and everything after this is nearly free."},{"edges":["s1-s2","s2-s3","s3-s4","s4-s5","s5-s6","sx-s4"],"look":["s3"],"found":["sx"],"seen":["s1","s2"],"tags":{"sx":"write 1"},"say":"Write one. Mira takes the address Cara was carrying. <b>Two nodes now name Dev, and nothing is broken</b>: a walker from the head still reaches everything."},{"edges":["s1-s2","s2-s3","s3-sx","sx-s4","s4-s5","s5-s6"],"found":["sx"],"seen":["s1","s2","s3"],"tags":{"sx":"write 2"},"say":"Write two. <b>Two writes on a chain of seven, and Dev, Eli and Fay were never read or moved.</b>"},{"edges":["s1-s2","s2-s3","s3-sx"],"look":["s3"],"tags":{"sx":"no address"},"say":"Same two destinations, other order. Cara takes Mira before Mira has an address, and <b>nothing in the world now remembers where Dev was.</b> Half the chain is intact and unreachable."}]},{"part":"Part 2 · The operations","tab":"The Chapter 3 row","title":"Act 4 · The same arrival, in the row that has to shuffle","type":"array-scan","speed":1600,"big":true,"data":["Ada","Ben","Cara","Dev","Eli","Fay","Gus","Hana","Ivo","Jai"],"capacity":12,"countLabel":" box writes","legend":[["the box being read next","look"],["already rewritten","seen"]],"steps":[{"capacity":12,"look":[3],"ptr":{"i":3},"count":0,"badge":"the same arrival, in a row","say":"<b>This is Lesson 3.2, replayed for comparison.</b> Same guest, same spot, in a row of ten."},{"capacity":12,"shift":{"from":7,"by":1},"seen":[7,8,9],"look":[6],"count":3,"badge":"3 writes","say":"The gap walks backwards from the last box, one write at a time."},{"capacity":12,"shift":{"from":3,"by":1},"seen":[3,4,5,6,7,8,9],"count":7,"badge":"7 writes","say":"Seven writes and the spot is free. <b>Not one of them was about the guest.</b>"},{"capacity":12,"shift":{"from":3,"by":1},"seen":[3,4,5,6,7,8,9],"count":8,"badge":"8 against 2","say":"The eighth write drops the guest into the empty box. <b>Eight box writes here. Two pointer writes in Act 3.</b> That is the half of the receipt the chain bought, and it is genuinely good."}]},{"part":"Part 2 · The operations","tab":"One write out","title":"Act 5 · Delete is one write, and the node does not go anywhere","type":"graph-walk","speed":1600,"directed":true,"unit":132,"legend":[["where you are standing","look"],["still reachable","seen"],["reachable past the gap","found"]],"nodes":[{"id":"d1","label":"Ada","x":0,"y":0},{"id":"d2","label":"Ben","x":1,"y":0},{"id":"d3","label":"Cara","x":2,"y":0.9},{"id":"d4","label":"Dev","x":3,"y":0},{"id":"d5","label":"Eli","x":4,"y":0}],"edges":[{"from":"d1","to":"d2"},{"from":"d2","to":"d3"},{"from":"d3","to":"d4"},{"from":"d4","to":"d5"},{"from":"d2","to":"d4"}],"steps":[{"edges":["d1-d2","d2-d3","d3-d4","d4-d5"],"look":["d2"],"seen":["d1"],"tags":{"d2":"here"},"say":"Take Cara out, standing on Ben. <b>Only the node before her holds the address that has to change.</b>"},{"edges":["d1-d2","d2-d4","d3-d4","d4-d5"],"found":["d4"],"seen":["d1","d2"],"tags":{"d2":"one write"},"say":"One write. <b>Nothing behind her shifted, because nothing behind her was ever touching her.</b>"},{"edges":["d1-d2","d2-d4","d3-d4","d4-d5"],"seen":["d1","d2","d4","d5"],"tags":{"d3":"still here"},"say":"Walk from the head and Cara is gone. <b>She is also still in memory, still holding a perfectly good address.</b> Unlinking removes a node from the walk, not from the building."}]},{"part":"Part 2 · The operations","tab":"The second address","title":"Act 6 · Buy the way back, and every node pays forever","type":"graph-walk","speed":1700,"directed":true,"unit":126,"legend":[["where you are standing","look"],["reachable from here","seen"]],"nodes":[{"id":"u1","label":"19","x":0,"y":0},{"id":"u2","label":"74","x":1,"y":0},{"id":"u3","label":"31","x":2,"y":0},{"id":"u4","label":"60","x":3,"y":0},{"id":"u5","label":"8","x":4,"y":0},{"id":"b1","label":"19","x":0,"y":1.6},{"id":"b2","label":"74","x":1,"y":1.6},{"id":"b3","label":"31","x":2,"y":1.6},{"id":"b4","label":"60","x":3,"y":1.6},{"id":"b5","label":"8","x":4,"y":1.6}],"edges":[{"from":"u1","to":"u2"},{"from":"u2","to":"u3"},{"from":"u3","to":"u4"},{"from":"u4","to":"u5"},{"from":"b1","to":"b2"},{"from":"b2","to":"b3"},{"from":"b3","to":"b4"},{"from":"b4","to":"b5"},{"from":"b2","to":"b1"},{"from":"b3","to":"b2"},{"from":"b4","to":"b3"},{"from":"b5","to":"b4"}],"steps":[{"edges":["u1-u2","u2-u3","u3-u4","u4-u5"],"look":["u3"],"tags":{"u3":"here"},"say":"Top row, one address a node. You are standing on 31 and it has to come out. <b>Ask it who comes before it and there is no answer.</b>"},{"edges":["u1-u2","u2-u3","u3-u4","u4-u5"],"look":["u2"],"seen":["u1"],"tags":{"u2":"found it"},"say":"So you walk from the head. <b>One hop, and two nodes read, to earn one write.</b> On a million nodes it is about half a million."},{"edges":["b1-b2","b2-b3","b3-b4","b4-b5","b2-b1","b3-b2","b4-b3","b5-b4"],"look":["b3"],"seen":["b2","b4"],"tags":{"b3":"here"},"say":"Bottom row, two addresses a node. Ask the same question and both neighbours answer <b>from where you are standing. Zero hops.</b>"},{"edges":["b1-b2","b2-b3","b3-b4","b4-b5","b2-b1","b3-b2","b4-b3","b5-b4"],"found":["b2","b4"],"tags":{"b2":"write 1","b4":"write 2"},"say":"<b>Two writes instead of one, and no walk at all.</b> Paid for by every node in the list carrying an extra address, forever, whether or not anything is ever removed."}]},{"part":"Part 2 · The operations","tab":"Two markers","title":"Act 7 · Two markers, the middle free, and then the chain that never ends","type":"graph-walk","speed":1600,"directed":true,"unit":118,"legend":[["slow","look"],["fast","found"],["already walked","seen"],["they met","bad"]],"nodes":[{"id":"t1","label":"19","x":0,"y":0},{"id":"t2","label":"74","x":1,"y":0},{"id":"t3","label":"31","x":2,"y":0},{"id":"t4","label":"60","x":3,"y":0},{"id":"t5","label":"8","x":3.6,"y":1},{"id":"t6","label":"45","x":2.8,"y":1.4},{"id":"t7","label":"27","x":1.8,"y":1}],"edges":[{"from":"t1","to":"t2"},{"from":"t2","to":"t3"},{"from":"t3","to":"t4"},{"from":"t4","to":"t5"},{"from":"t5","to":"t6"},{"from":"t6","to":"t7"},{"from":"t7","to":"t4"}],"steps":[{"edges":["t1-t2","t2-t3","t3-t4","t4-t5","t5-t6","t6-t7"],"look":["t1"],"tags":{"t1":"both start"},"say":"Slow takes one hop a turn, fast takes two. <b>Nothing here knows the chain is seven long.</b>"},{"edges":["t1-t2","t2-t3","t3-t4","t4-t5","t5-t6","t6-t7"],"look":["t3"],"found":["t5"],"seen":["t1","t2"],"tags":{"t3":"slow","t5":"fast"},"say":"Two turns. The gap widens by exactly one every turn, which is the whole mechanism."},{"edges":["t1-t2","t2-t3","t3-t4","t4-t5","t5-t6","t6-t7"],"look":["t4"],"found":["t7"],"seen":["t1","t2","t3"],"tags":{"t4":"slow","t7":"fast"},"say":"<b>Fast runs out and slow is on node four of seven.</b> One pass, no counting, and nobody asked how long it was."},{"edges":["t1-t2","t2-t3","t3-t4","t4-t5","t5-t6","t6-t7","t7-t4"],"look":["t1"],"tags":{"t1":"both start"},"say":"Now one arrow changes and the chain comes back on itself. <b>Neither marker has been told and neither can be.</b>"},{"edges":["t1-t2","t2-t3","t3-t4","t4-t5","t5-t6","t6-t7","t7-t4"],"bad":["t5"],"seen":["t1","t2","t3","t4"],"tags":{"t5":"both, same node"},"say":"They meet. <b>The gap fast has to close drops by one every turn, so it reaches zero and fast can never step over slow.</b> A walk waiting for no next would still be running."}]},{"part":"Part 2 · The operations","tab":"Row against chain","title":"Act 8 · The whole receipt, on one board","type":"race","speed":1600,"legend":[["working now","look"],["rewritten or walked","seen"],["done","found"]],"tracks":[{"label":"Row of 500: boxes moved","data":["1","2","3","4","5","6","7","8","9","10","11","12"],"countLabel":" moves"},{"label":"Chain of 500: writes","data":["1","2","3","4","5","6","7","8","9","10","11","12"],"countLabel":" writes"},{"label":"Chain of 500: hops to get there","data":["1","2","3","4","5","6","7","8","9","10","11","12"],"countLabel":" hops"}],"steps":[{"badge":"insert at position 250","lanes":[{"look":[0],"count":0},{"look":[0],"count":0},{"look":[0],"count":0}],"say":"One arrival, in the middle of five hundred. Chapter 1 drew this race at eight items. <b>Here is the same race with the numbers attached.</b>"},{"lanes":[{"seen":[6,7,8,9,10,11],"count":251},{"found":[0],"count":2},{"seen":[0,1,2,3,4,5],"count":"250"}],"say":"251 moves against 2 writes. <b>And then the third lane.</b>"},{"badge":"the same job, at the head","lanes":[{"seen":[0,1,2,3,4,5,6,7,8,9,10,11],"count":501},{"found":[0],"count":2},{"found":[0],"count":0}],"say":"Move it to the front and the row gets worse while the chain <b>walks nothing at all.</b> The head is the one position a chain hands you free, and it is the only place the chain wins outright."}]},{"part":"Part 3 · The same operations, in things you used today","tab":"Undo and redo","title":"Act 9 · Undo is Act 3, and typing one letter is the write","type":"reveal","speed":1700,"viz":{"maxChars":11,"gy":46,"nodes":[{"id":"e5","label":"type","col":0,"row":0,"kind":"accent"},{"id":"e4","label":"photo","col":1,"row":0,"kind":"accent"},{"id":"e3","label":"bold","col":2,"row":0,"kind":"accent"},{"id":"e2","label":"paste","col":3,"row":0,"kind":"accent"},{"id":"e1","label":"open","col":4,"row":0,"kind":"accent"},{"id":"nn","label":"new letter","col":2,"row":1,"kind":"gold"},{"id":"h","label":"the handle","col":0,"row":1,"kind":"dark"}],"edges":[{"from":"e5","to":"e4"},{"from":"e4","to":"e3"},{"from":"e3","to":"e2"},{"from":"e2","to":"e1"},{"from":"nn","to":"e3"},{"from":"h","to":"e5"},{"from":"h","to":"e3"},{"from":"h","to":"nn"}]},"steps":[{"show":["e5","e4","e3","e2","e1","h"],"edges":["e5-e4","e4-e3","e3-e2","e2-e1","h-e5"],"look":["e5"],"say":"<b>This is Act 3 in your own document.</b> Each edit names the edit it followed, so every arrow points backwards in time."},{"show":["e5","e4","e3","e2","e1","h"],"edges":["e5-e4","e4-e3","e3-e2","e2-e1","h-e3"],"look":["e3"],"seen":["e4","e5"],"say":"Undo twice. <b>Nothing was thrown away and nothing moved.</b> The handle names an older edit, and that is the entire operation."},{"show":["e5","e4","e3","e2","e1","h","nn"],"edges":["e5-e4","e4-e3","e3-e2","e2-e1","h-e3","nn-e3"],"found":["nn"],"seen":["e4","e5"],"say":"Type one letter. A new edit is written and already names what it followed. Nothing points at it yet."},{"show":["e5","e4","e3","e2","e1","h","nn"],"edges":["e4-e3","e3-e2","e2-e1","nn-e3","h-nn"],"found":["nn"],"bad":["e4","e5"],"say":"<b>One address rewritten, and redo went grey.</b> The photo and the typing are still in memory, still readable, and nothing in the world names them. Nobody deleted anything."}]},{"part":"Part 3 · The same operations, in things you used today","tab":"Next track","title":"Act 10 · Next and previous is Act 6, and track 137 is the box it cannot answer","type":"graph-walk","speed":1600,"directed":true,"unit":126,"legend":[["where you are","look"],["reachable in one read","seen"]],"nodes":[{"id":"p1","label":"t1","x":0,"y":0},{"id":"p2","label":"t2","x":1,"y":0},{"id":"p3","label":"t3","x":2,"y":0},{"id":"p4","label":"t4","x":3,"y":0},{"id":"p5","label":"t5","x":4,"y":0},{"id":"q1","label":"t1","x":0,"y":1.6},{"id":"q2","label":"t2","x":1,"y":1.6},{"id":"q3","label":"t3","x":2,"y":1.6},{"id":"q4","label":"t4","x":3,"y":1.6},{"id":"q5","label":"t5","x":4,"y":1.6}],"edges":[{"from":"p1","to":"p2"},{"from":"p2","to":"p3"},{"from":"p3","to":"p4"},{"from":"p4","to":"p5"},{"from":"q1","to":"q2"},{"from":"q2","to":"q3"},{"from":"q3","to":"q4"},{"from":"q4","to":"q5"},{"from":"q2","to":"q1"},{"from":"q3","to":"q2"},{"from":"q4","to":"q3"},{"from":"q5","to":"q4"}],"steps":[{"edges":["p1-p2","p2-p3","p3-p4","p4-p5"],"look":["p2"],"tags":{"p2":"playing"},"say":"<b>This is Act 6 in a music player.</b> One address a node: next works in one read."},{"edges":["p1-p2","p2-p3","p3-p4","p4-p5"],"look":["p3"],"seen":["p2"],"tags":{"p3":"next"},"say":"Next again, one read, at five tracks or five thousand."},{"edges":["q1-q2","q2-q3","q3-q4","q4-q5","q2-q1","q3-q2","q4-q3","q5-q4"],"look":["q3"],"seen":["q2","q4"],"tags":{"q3":"playing"},"say":"Add the second address and <b>previous becomes a real button rather than a wish</b>, paid for by every track in the list."},{"edges":["q1-q2","q2-q3","q3-q4","q4-q5","q2-q1","q3-q2","q4-q3","q5-q4"],"look":["q3"],"tags":{"q3":"track 137?"},"say":"<b>Now ask for track 137.</b> Neither row can answer, because no node holds a number. Somebody has to stand an index beside the chain and repair it on every change."}]},{"part":"Part 3 · The same operations, in things you used today","tab":"The free list","title":"Act 11 · Act 2 running inside the thing that refused you in Lesson 3.1","type":"array-scan","speed":1600,"big":true,"data":["7112","6208","8004","6852","7728","6440"],"labels":["free","free","free","free","free","free"],"countLabel":" blocks read","legend":[["being read now","look"],["already walked","seen"],["the block handed out","found"]],"steps":[{"look":[0],"count":1,"badge":"this is Act 2","say":"<b>The hall that refused you twenty seats keeps its own spare space as a chain</b>, because a chain is the only arrangement that can be handed one loose box and have somewhere to put it."},{"look":[2],"seen":[0,1],"count":3,"badge":"3 blocks read","say":"A claim arrives and the allocator walks its free blocks looking for one big enough. Left to right on this board means nothing: <b>the only order is written inside the boxes.</b>"},{"found":[4],"seen":[0,1,2,3],"count":5,"badge":"5 blocks read, then one write","say":"It finds one and unlinks it, <b>which is Act 5.</b> One write, and nothing else on the chain moved."},{"found":[4],"seen":[0,1,2,3],"count":5,"badge":"and it gets longer with uptime","say":"<b>And this is why allocations get slower the longer a service runs.</b> Every claim and release chops the free space into more pieces, so the chain gets longer, and the walk is Act 2 paying its bill."}]},{"part":"Part 3 · The same operations, in things you used today","tab":"The wrong choice","title":"Act 12 · The wrong choice: Act 2 performed once per row","type":"curve","speed":1800,"width":650,"height":300,"n":40,"logScale":true,"xlabel":"rows on the screen","ylabel":"node reads","series":[{"fn":"n2","color":"bad","label":"ask the chain for each row by number","label2":"O(n squared)"},{"fn":"n","color":"green","label":"walk once and hand out rows as you pass","label2":"O(n)"}],"steps":[{"show":[0],"pct":45,"badge":"400 tracks","say":"A playlist screen asks the list for track 1, then track 2, then track 137. <b>Each ask is Act 2, starting again at the head.</b> At 400 rows it is 80,200 node reads and it feels instant."},{"show":[0],"pct":100,"badge":"4,000 tracks","say":"Ten times the tracks. <b>8,002,000 node reads, and about a hundred times the wait.</b> Nothing was deployed and the screen never changed."},{"show":[0,1],"pct":100,"badge":"the same screen, one walk","say":"Walk the chain once and hand out each row as you pass it: <b>4,000 reads instead of eight million.</b> Nobody had to move to an array, because the screen never needed a position."},{"show":[0,1],"pct":100,"notation":true,"badge":"why it shipped","say":"<b>And this is why it shipped.</b> At 400 tracks the two lines are indistinguishable, every individual ask is genuinely fast, and the only number growing is the one nobody watches."}]},{"part":"Part 4 · The map","tab":"The map","title":"Act 13 · One swap, and every act it explains","type":"reveal","speed":1700,"viz":{"maxChars":15,"gy":44,"nodes":[{"id":"r","label":"Many things to store","col":2,"row":0,"kind":"dark"},{"id":"q","label":"How does the position arrive?","col":2,"row":1,"kind":"gold","shape":"diamond"},{"id":"num","label":"As a number","col":0,"row":2,"kind":"bad"},{"id":"hand","label":"Already in your hand","col":4,"row":2,"kind":"accent"},{"id":"row","label":"A row wins. Position is one sum. Acts 4 and 8","col":0,"row":3,"kind":"bad"},{"id":"ch","label":"A chain wins. Two writes, no shuffle. Acts 3, 5 and 9","col":4,"row":3,"kind":"accent"},{"id":"back","label":"Need the node before it? Buy the second address. Acts 6 and 10","col":4,"row":4,"kind":"accent"},{"id":"walk","label":"Cannot walk it twice, or it may never end? Two markers. Act 7","col":2,"row":4,"kind":"gold"},{"id":"idx","label":"Or stand an index beside the chain, and repair it forever. Act 12","col":0,"row":4,"kind":"bad"}],"edges":[{"from":"r","to":"q"},{"from":"q","to":"num","label":"a number"},{"from":"q","to":"hand","label":"in hand"},{"from":"num","to":"row"},{"from":"hand","to":"ch","style":"green"},{"from":"ch","to":"back","style":"green"},{"from":"q","to":"walk"},{"from":"num","to":"idx"}]},"steps":[{"show":["r"],"look":["r"],"say":"Twelve acts collapse into one question, and it is not the question Chapter 1 asked."},{"show":["r","q"],"look":["q"],"say":"<b>How does the position arrive?</b> Not what shape is the data. Not how much of it there is. How do you come to be standing where the work happens."},{"show":["r","q","num","row"],"bad":["num","row"],"say":"As a number, and a chain has nothing to do with a number. Every ask is a walk from the head, which is Act 12 shipping quietly and waiting."},{"show":["r","q","num","row","hand","ch"],"found":["hand","ch"],"say":"Already in your hand, because you dragged it, or you are standing there anyway, and now <b>two writes beat five hundred moves at any size.</b> Acts 3, 5 and 9."},{"show":["r","q","num","row","hand","ch","back"],"found":["back"],"say":"Need the node before the one you hold? Buy the second address, paid by every node forever. Acts 6 and 10."},{"show":["r","q","num","row","hand","ch","back","walk"],"found":["walk"],"say":"Cannot walk it twice, or it might never end? Two markers, which is the only position a chain hands back free. Act 7."},{"show":["r","q","num","row","hand","ch","back","walk","idx"],"bad":["idx"],"say":"Or take the number anyway and stand an index beside the chain, <b>which is a second structure with a repair bill on every change, forever.</b>"},{"show":["r","q","num","row","hand","ch","back","walk","idx"],"say":"<b>A linked list buys cheap insertion by giving up instant position.</b> Every act you watched was that one swap being cashed or paid, and nothing else was ever going on."}]}]}'></div>

<div class="wrap" style="padding-top:34px;">
  <h2><span class="ix gold">✓</span> What You Just Watched</h2>

  <div class="tbl-wrap"><table>
    <tr><th>The operation</th><th>What it costs</th><th>Acts</th><th>Where it came back in Part 3</th></tr>
    <tr><td>Reach a position</td><td>one hop per node, every time</td><td>2</td><td>Act 11, the allocator walking its own free list</td></tr>
    <tr><td>Insert or delete</td><td>two writes, or one, once you are there</td><td>3, 5</td><td>Act 9, undo and the redo that greys out</td></tr>
    <tr><td>Look backwards</td><td>a second address on every node forever</td><td>6</td><td>Act 10, previous track being a real button</td></tr>
    <tr><td>Find the middle, or a loop</td><td>one pass, two addresses of memory</td><td>7</td><td>Nowhere, and that is the point. It is for things you may walk only once</td></tr>
    <tr><td>Ask for a number</td><td>an index beside the chain, repaired forever</td><td>8</td><td>Act 12, the playlist screen that ships and waits</td></tr>
  </table>
  <div class="tbl-cap">Read the right hand column down the page. Nothing in Part 3 was a new idea. They were the same five operations, running inside things you touched today.</div></div>

  <div class="callout accent">
    <div class="ch">The line to carry into Chapter 5</div>
    <p>A head is a bought position. A tail handle is a bought position. <strong>Chapter 5 starts by adding no structure at all, only a rule about which of those handles you are allowed to touch:</strong> a stack lets you touch one end, a queue lets you add at one and take from the other. Same chain, one rule, and two of the most useful things in computing.</p>
  </div>

  <div class="callout warn">
    <div class="ch">And the line from Act 12</div>
    <p>At 400 tracks the right way and the wrong way are indistinguishable, every individual ask is genuinely fast, and every measurement anybody takes is honest. <strong>The only number that grows is the sum of all the distances</strong>, and nobody has ever put that on a dashboard.</p>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">Act 3 showed an insert as two writes and Act 4 showed the same arrival as eight box writes in a row. So why is a chain not simply better?</div>
    <div class="opt" data-i="0">Because two writes is only cheaper on short chains</div>
    <div class="opt" data-i="1">Because the row can be made faster with a bigger machine</div>
    <div class="opt" data-i="2">Because Act 3 began with a walk to the right node, and Act 8 priced that walk at 250 hops where the row paid nothing to find the spot</div>
    <div class="qexp">Every cheap number in this chapter stands behind the words once you are already there. The row calculates the position and then pays to shuffle. The chain pays to find the position and then writes almost nothing. Which one wins is decided entirely by how the position arrives, which is why Act 13 forks on that question and on nothing else.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">In Act 7, two markers found the middle without ever learning the length. What did that actually buy?</div>
    <div class="opt" data-i="0">Half the work, since only one marker walks the whole chain</div>
    <div class="opt" data-i="1">One pass instead of two, plus an answer on a chain that never ends, which no counting method can give</div>
    <div class="opt" data-i="2">Nothing, since you could simply store the length</div>
    <div class="qexp">The step counts are identical: slow reads half and fast reads all of it, which adds rather than cancels. Option two is right in one specific case and wrong in general, because a chain that stores its own length needs no walk at all, and a stream you may read exactly once will never let you store anything. The purchase is the shape of the access, not the size of the count.</div>
  </div>

  <div class="callout good">
    <div class="ch">Chapter 4 complete</div>
    <p>A linked list buys cheap insertion by giving up instant position, and every act you watched was that one swap being cashed or paid. Three of Chapter 3 bills torn up, one made considerably worse, and one entirely new one invented. Next: the same chain with a rule bolted on, and why that rule turns out to be most of what software actually does.</p>
  </div>
__NAV__
</div>`
