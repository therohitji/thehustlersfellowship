/* ===== Chapter 09 - Trees: Things That Branch - DSA Concepts (2026) =====
   Through line: a tree is what you get when one thing owns many things, and depth is the only
   number that decides its speed.
   Ten blocks per concept lesson, then the whiteboard. See CONSISTENCY.md.
   RULES: no em-dashes; no backticks in content; no dollar-brace; no apostrophes inside
   a data-viz, data-anim or data-reel payload. */

"9.1": `<div class="wrap">
  <div class="les-kicker">Chapter 9 · Lesson 9.1</div>
  <h1 class="les-title">Branching: Parents, Children, and Why Depth Matters</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
  </div>

  <p class="motto">Nobody designs a tree. You get one for free the moment ownership is exclusive, and then depth decides everything.</p>

  <p class="lead">Lesson 0.3 promised that by the time this chapter arrived you would already know why trees exist and what they compete with. You do: Chapter 3 gave you a row, Chapter 4 gave you a chain, and Lesson 6.5 showed you order kept as a shape instead of a row. A tree is what you get when one thing owns many things, and depth is the only number that decides its speed.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">You have been drawing these your whole life.</div>
  <p>A folder holds folders, which hold folders, which eventually hold files. <strong>Nobody sat down and designed that as a tree.</strong> It is a tree because of one rule that nobody wrote down either: every file sits in exactly one folder, and no folder can end up inside itself.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Four things you already draw as trees","width":820,"height":280,"items":[{"icon":"shelf","x":115,"y":124,"kind":"accent","label":"folders inside folders"},{"icon":"person","x":310,"y":126,"kind":"accent","label":"an org chart"},{"icon":"doc","x":510,"y":124,"kind":"accent","label":"a page: a box inside a box"},{"icon":"server","x":720,"y":124,"kind":"gold","label":"and the rule underneath all of them"}],"arrows":[{"x1":580,"y1":124,"x2":656,"y2":124,"style":"gold","label":"one owner each"}],"caption":"None of these was designed as a tree. Each one is a tree because ownership in it is exclusive: one folder for a file, one manager for a report, one parent box for a nested box. Exclusive ownership is the whole definition, and the branching is what falls out of it."}'></div>

  <p>An org chart is the same rule with people. A web page is the same rule with boxes inside boxes. <strong>Exclusive ownership is the whole definition</strong>, and the branching falls out of it rather than being designed.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One rule, and the vocabulary that follows.</div>
  <p>One thing owns many things, each of those owns many more, and <strong>nothing is owned twice.</strong> That is a tree. Everything else in this chapter is a name for a part of it.</p>

  <div class="viz" data-viz='{"type":"arch","title":"One rule, and every word that comes from it","maxChars":18,"nodes":[{"id":"r","label":"One thing owns many, and nothing is owned twice","col":0,"row":1,"kind":"dark"},{"id":"a","label":"The root: the one thing nobody owns","col":1,"row":0,"kind":"accent"},{"id":"b","label":"A parent and its children: one link, seen from both ends","col":1,"row":1,"kind":"accent"},{"id":"c","label":"A leaf: something that owns nothing","col":1,"row":2,"kind":"accent"},{"id":"d","label":"Depth: how many owners sit above you","col":2,"row":1,"kind":"gold"},{"id":"e","label":"Height: the depth of the deepest leaf","col":2,"row":2,"kind":"gold"}],"edges":[{"from":"r","to":"a"},{"from":"r","to":"b"},{"from":"r","to":"c"},{"from":"b","to":"d","label":"counted per node","style":"green"},{"from":"c","to":"e","label":"counted per tree","style":"green"}],"caption":"Five words, and only the last two are numbers. Depth belongs to a node and height belongs to the whole tree, and the rest of this chapter argues that those two are the only measurements that ever change how fast anything is."}'></div>

  <p>Note what is <strong>not</strong> in that list: how many things the tree holds. <strong>A tree with a million items and a tree with a thousand behave identically if they are the same depth</strong>, which is the claim the rest of this chapter has to earn.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Reaching anything costs its depth, and nothing else.</div>
  <p>Seven items. Watch how many nodes get touched to reach the one you want, and <strong>notice that the answer never depends on how many are in the tree.</strong></p>

  <div class="board" data-anim='{"type":"tree-walk","title":"Seven items, and three touches to reach any of them","speed":1600,"unit":76,"countLabel":" nodes touched","legend":[["where you are now","look"],["the path you walked","seen"],["reached","found"],["never touched","dead"]],"nodes":[{"id":"a","label":"50","x":3,"d":0},{"id":"b","label":"25","x":1,"d":1},{"id":"c","label":"75","x":5,"d":1},{"id":"d","label":"12","x":0,"d":2},{"id":"e","label":"37","x":2,"d":2},{"id":"f","label":"62","x":4,"d":2},{"id":"g","label":"88","x":6,"d":2}],"edges":[{"from":"a","to":"b"},{"from":"a","to":"c"},{"from":"b","to":"d"},{"from":"b","to":"e"},{"from":"c","to":"f"},{"from":"c","to":"g"}],"steps":[{"look":["a"],"count":1,"badge":"depth 0: the root","say":"Seven items. The top one is the <b>root</b>, and it is the only thing here that nobody owns. Everything begins there because there is nowhere else to begin."},{"seen":["a"],"look":["b"],"dead":["c","f","g"],"count":2,"badge":"depth 1","say":"Step to a child. <b>The other side of the tree is now unreachable from here</b>, and you did not look at any of it. Three items ruled out by one step."},{"seen":["a","b"],"found":["e"],"dead":["c","f","g","d"],"count":3,"badge":"depth 2: arrived","say":"One more step and you have arrived. <b>Three nodes touched out of seven</b>, and four were never examined at all."},{"seen":["a","b"],"found":["e"],"dead":["c","f","g","d"],"count":3,"badge":"3 touches, any leaf","say":"And here is the part worth keeping: <b>every one of the four leaves is exactly three touches away.</b> Not the popular ones, not the lucky ones. All of them, because they are all at the same depth."},{"look":["a"],"count":1,"badge":"now: a thousand items","say":"Now imagine this tree holding a thousand items instead of seven, still evenly branched. <b>It would be ten levels deep</b>, because two multiplied by itself ten times is 1,024. Eleven touches, not a thousand."}],"caption":"The number of touches never mentioned the number of items. It mentioned the depth, and only the depth. That is the sentence this whole chapter is built to prove, and it is why a tree of a million is only twice the work of a tree of a thousand."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What a node can and cannot tell you.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Asking a node where something is","actors":[{"label":"You","kind":"gold"},{"label":"The root","kind":"accent"},{"label":"A child","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"where is the thing I want","style":"gold"},{"from":1,"to":0,"label":"I do not know. I know my children"},{"from":1,"to":0,"label":"but I know which of them owns that side","style":"green"},{"from":0,"to":2,"label":"then I go to you, and ask again"},{"from":2,"to":0,"label":"same answer, one level lower","style":"green"}],"caption":"This is Chapter 4 arriving with a second address. A chain node knew the next one; a tree node knows several, and the only new thing is that it can send you down one branch rather than along one line. Everything else about walking it is unchanged."}'></div>

  <p><strong>No node knows where anything is.</strong> Each one knows only its children, exactly as a chain node knew only the next one, and Lesson 4.3 already called two addresses both pointing forwards a tree. The branching is what turns walking into narrowing.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Four shapes, and what each one owns.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The shape</th><th>What one thing owns</th><th>Where you have met it</th></tr>
    <tr><td>A general tree</td><td>Any number of children</td><td>Folders, org charts, page elements</td></tr>
    <tr><td>A binary tree</td><td>At most two children</td><td>Lesson 9.2, and everything after it in this chapter</td></tr>
    <tr><td>A trie</td><td>One child per possible next letter</td><td>Lesson 6.5, already built and already walked</td></tr>
    <tr><td>Not a tree at all</td><td>Something owned by two owners, or by itself</td><td>Chapter 12, where that becomes a graph</td></tr>
  </table>
  <div class="tbl-cap">The last row is the useful one. The moment something has two owners, or can contain itself, none of this chapter applies: depth stops being defined, walking stops terminating, and Lesson 4.4 already showed what a walk with no memory does when the data loops.</div></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Depth, and the number of items never appearing.</div>
  <p>Every operation in this chapter walks from the root downwards, so it costs <strong>about the depth</strong>. Now the arithmetic that makes that worth having. An evenly branched binary tree doubles its capacity with every level.</p>

  <div class="viz" data-viz='{"type":"card","title":"How many levels it takes to hold that much","eyebrow":"EVENLY BRANCHED, TWO CHILDREN EACH","badge":"levels, not items","width":560,"rows":[{"k":"7 items","v":"3 levels","tone":"good","bar":0.15},{"k":"1,000 items, because 2 to the 10 is 1,024","v":"10 levels","tone":"good","bar":0.5},{"k":"1,000,000 items, because 2 to the 20 is 1,048,576","v":"20 levels","tone":"good","bar":1},{"k":"A thousand times more data costs","v":"10 more levels","tone":"good","bar":0.5},{"k":"And the same million, laid out in a line","v":"1,000,000 levels","tone":"bad","bar":1}],"caption":"Every bar is a rough weight. Rows two and three are the shape Lesson 2.2 named, where doubling the data adds one step, and Lesson 6.3 already spent it on binary search. The last row is the same items in the same structure with the branching removed, and it is the whole reason the next few lessons care about shape."}'></div>

  <p>In the Chapter 2 currency that is <em class="g">O(log n)</em> when the branching is even, and it is the same shape Lesson 6.3 bought with a sorted row. <strong>The difference is what Lesson 6.5 already priced:</strong> a sorted row pays about half a million moves per insert to stay sorted, and a shape pays about twenty links walked and one written.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Six places, and none of them chose to be a tree.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Exclusive ownership, in things you use","unit":178,"nodes":[{"id":"c","label":"One owner each, and nothing owned twice","x":2,"y":1,"kind":"dark"},{"id":"f","label":"A file system: one folder per file, all the way up","x":0,"y":0,"kind":"gold"},{"id":"w","label":"A web page: every box sits inside exactly one box","x":0,"y":2,"kind":"accent"},{"id":"o","label":"An org chart, and every reporting line in it","x":4,"y":0,"kind":"accent"},{"id":"m","label":"A comment thread, where each reply owns its replies","x":4,"y":2,"kind":"accent"},{"id":"d","label":"A decision tree, which is this chapter drawn as a question","x":2,"y":3,"kind":"box"}],"edges":[{"from":"c","to":"f","label":"and it never loops","style":"gold"},{"from":"c","to":"w","label":"nesting is ownership","style":"green"},{"from":"c","to":"o","label":"one manager each"},{"from":"c","to":"m","label":"one parent comment"},{"from":"c","to":"d","label":"you have read dozens"}],"caption":"The file system node has a quiet condition on it. A shortcut that points at a folder above itself breaks exclusive ownership, and the moment that happens the thing stops being a tree, which is exactly the crash Lesson 5.4 opened on."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the tell is almost always depth.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"It is fast for most folders and slow for one"</td><td>Ask how deeply that one is nested</td><td>Depth, not size. Every operation costs about the depth</td></tr>
    <tr><td>"Ten times the records and it barely changed"</td><td>Say the new wait out loud first</td><td>Correct behaviour. Ten times the items is a few more levels</td></tr>
    <tr><td>"The page got slower as designers nested things"</td><td>Count how many boxes deep the content sits</td><td>Depth again, this time in a layout rather than a file system</td></tr>
    <tr><td>"It crashed opening one folder and nothing else"</td><td>Ask whether anything points back upwards</td><td>Ownership stopped being exclusive. It is not a tree any more</td></tr>
    <tr><td>"Deleting one thing deleted a lot of things"</td><td>Ask what that thing owned</td><td>Correct, and the reason ownership is the definition</td></tr>
    <tr><td>"Two teams both claim the same person"</td><td>Ask whether anything has two owners</td><td>Not a tree. That is Chapter 12, and it needs different tools</td></tr>
  </table>
  <div class="tbl-cap">Rows four and six are the same discovery from two directions: somebody drew a tree and the real world was not one. Everything else in this chapter silently assumes exclusive ownership, so that assumption is worth testing before any of it is applied.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">One customer, and a page that takes nine seconds.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our document browser is instant for almost everybody. One customer complains it takes about nine seconds to open. They do not have unusually many documents, in fact they have fewer than average. We have checked their account, their network and their permissions, and everything looks completely normal."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Fewer documents, and nine seconds","lanes":[{"label":"The team"},{"label":"You"},{"label":"The browser"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"One customer: 9 seconds. Fewer documents than average"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: how many levels deep do their folders go?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"About 40. Everybody else is under 8"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Every operation walks from the root, so it costs the depth"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"They mirror a folder tree from another system"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"Count is not the number. Depth is"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Flatten the mirror, or cap the depth and say so"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"Everybody checked the things that scale with size, because size is what people count. Nothing about this customer is large. The one measurement nobody took is the one this chapter says is the only one that matters."}'></div>

  <p><strong>They have fewer documents and a far deeper tree.</strong> Every operation walks from the root, so it costs about the depth, and forty levels against eight is five times the walking on every single action a page performs. Nothing here is a bug and nothing is large.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It measured the thing the structure actually charges for. <strong>Everybody counts items, because items are what you can see</strong>, and a tree does not charge by the item. This is the same move as Lesson 5.1, where a file that killed an importer was seventy five times smaller than one that passed and nested forty thousand levels deep. Depth, not amount, twice in one course.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one folder you already have</div>
    <p>Open the deepest folder you can find on your own computer. <strong>First:</strong> count how many folders you had to pass through to get there, and write that number down. That is its depth, and it is the only number this chapter cares about. <strong>Second:</strong> count how many files are in it. Notice that the second number had nothing to do with how long the journey took. <strong>Third:</strong> find something you own that has two owners, a document shared between two projects or a person in two teams, and try to draw it. The moment you cannot, you have found the edge of this chapter.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A customer with fewer documents than average takes nine seconds to open a page that is instant for everybody else. What is the first thing to measure?</div>
    <div class="opt" data-i="0">The size of their largest document, since one big file can dominate</div>
    <div class="opt" data-i="1">How many levels deep their folders are nested, because a tree charges by depth rather than by count</div>
    <div class="opt" data-i="2">How many total documents they have, compared against the average</div>
    <div class="qexp">Every operation on a tree walks from the root downwards, so the cost is about the depth and the number of items never enters it. Forty levels against eight is five times the walking on every action, on an account holding less data than average. Lesson 5.1 made the same point about a call stack: a file seventy five times smaller killed an importer because it nested forty thousand levels deep.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">An evenly branched binary tree holds a thousand items in ten levels. How many levels does it need for a million?</div>
    <div class="opt" data-i="0">Ten thousand, because a million is a thousand times more data</div>
    <div class="opt" data-i="1">About a hundred, because the levels grow with the square root</div>
    <div class="opt" data-i="2">Twenty, because each level doubles the capacity and two multiplied by itself twenty times is 1,048,576</div>
    <div class="qexp">Each level doubles what the tree can hold, so capacity climbs far faster than depth. Ten levels reach 1,024 and twenty reach 1,048,576, which means a thousand times more data costs ten more levels. That is the shape Lesson 2.2 named, where doubling the data adds one step, and Lesson 6.3 already bought the same shape with a sorted row.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>A tree is what you get when one thing owns many things, and you now know that depth is the only number that decides its speed. <strong>Next, the shape stops changing and the reading order becomes a choice:</strong> one tree, three different sequences, and each one is the right answer to a different question.</p>
  </div>
__NAV__
</div>`
,

"9.2": `<div class="wrap">
  <div class="les-kicker">Chapter 9 · Lesson 9.2</div>
  <h1 class="les-title">Binary Trees and the Three Walks</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
  </div>

  <p class="motto">The shape is fixed. The order you read it in is a choice, and each choice is the right answer to a different question.</p>

  <p class="lead">A tree is what you get when one thing owns many things, and 9.1 showed that depth is the only number that decides its speed. This lesson changes nothing about the shape and everything about the reading. By the end you will not memorise three names: you will ask what you need to see first, and the walk picks itself.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Three jobs on one folder, and three different orders.</div>
  <p>One folder, holding folders, holding files. <strong>Print the folder path before its contents</strong>, because a listing has to say where you are before it says what is there. <strong>Total the sizes</strong>, and you cannot know a folder size until every child is counted. <strong>Delete it</strong>, and you must empty it before you can remove it.</p>

  <div class="viz" data-viz='{"type":"scene","title":"One folder, three jobs, three orders","width":820,"height":280,"items":[{"icon":"shelf","x":120,"y":124,"kind":"gold","label":"one folder tree"},{"icon":"doc","x":330,"y":124,"kind":"accent","label":"list it: name first"},{"icon":"server","x":530,"y":124,"kind":"accent","label":"total it: children first"},{"icon":"person","x":730,"y":126,"kind":"bad","label":"delete it: children first, or it fails"}],"arrows":[{"x1":190,"y1":124,"x2":266,"y2":124,"style":"green","label":"same tree"}],"caption":"Nothing about the folder changes between these three jobs. What changes is when the parent gets its turn: before its children for a listing, after them for a total, and after them again for a delete, because an operating system will not remove a folder that still has things in it."}'></div>

  <p>Same tree, three jobs, and <strong>the only thing that differs is when the parent gets its turn.</strong> That is what a walk is.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">Three places to put the parent.</div>
  <p>Every node has a left side, a right side, and itself. A walk visits all three, and there are <strong>only three sensible places to put the parent:</strong> before both sides, between them, or after both.</p>

  <div class="viz" data-viz='{"type":"arch","title":"Where the parent takes its turn","maxChars":18,"nodes":[{"id":"c","label":"Left, right, and the node itself","col":0,"row":1,"kind":"dark"},{"id":"a","label":"Node first, then left, then right","col":1,"row":0,"kind":"accent"},{"id":"b","label":"Left, then node, then right","col":1,"row":1,"kind":"accent"},{"id":"d","label":"Left, then right, then node","col":1,"row":2,"kind":"accent"},{"id":"a2","label":"Preorder: you are told where you are before what is there","col":2,"row":0,"kind":"gold"},{"id":"b2","label":"Inorder: on a search tree, this comes out sorted","col":2,"row":1,"kind":"gold"},{"id":"d2","label":"Postorder: children finish before their parent can","col":2,"row":2,"kind":"gold"}],"edges":[{"from":"c","to":"a"},{"from":"c","to":"b"},{"from":"c","to":"d"},{"from":"a","to":"a2","label":"so","style":"green"},{"from":"b","to":"b2","label":"so","style":"green"},{"from":"d","to":"d2","label":"so","style":"green"}],"caption":"The middle column is the whole definition and the right column is what each one is for. Nothing here is a technique to memorise: each is simply an answer to when the parent should take its turn, and the job you are doing decides that for you."}'></div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">One tree, three sequences, and the badge keeps the receipt.</div>
  <p>The same seven items from Lesson 9.1. Nothing about the tree changes in any frame below. <strong>Watch only the sequence in the badge.</strong></p>

  <div class="board" data-anim='{"type":"tree-walk","title":"The same seven items, read three ways","speed":1800,"unit":76,"countLabel":" emitted","legend":[["taking its turn now","look"],["already emitted","seen"],["the finished sequence","found"]],"nodes":[{"id":"a","label":"50","x":3,"d":0},{"id":"b","label":"25","x":1,"d":1},{"id":"c","label":"75","x":5,"d":1},{"id":"d","label":"12","x":0,"d":2},{"id":"e","label":"37","x":2,"d":2},{"id":"f","label":"62","x":4,"d":2},{"id":"g","label":"88","x":6,"d":2}],"edges":[{"from":"a","to":"b"},{"from":"a","to":"c"},{"from":"b","to":"d"},{"from":"b","to":"e"},{"from":"c","to":"f"},{"from":"c","to":"g"}],"steps":[{"look":["a"],"count":1,"badge":"preorder: 50","say":"<b>Preorder.</b> The parent goes first, before either side is touched. So the root is emitted before anything below it exists as far as the output is concerned."},{"seen":["a","b"],"look":["d"],"count":3,"badge":"preorder: 50 25 12","say":"Down the left, still parent first: 25 before its children, then 12. <b>You are always told where you are before you are told what is there.</b>"},{"found":["a","b","c","d","e","f","g"],"count":7,"badge":"50 25 12 37 75 62 88","say":"<b>Preorder, finished.</b> That sequence is a folder listing: every path is announced before its contents, which is the only order in which a listing makes sense."},{"look":["d"],"count":1,"badge":"inorder: 12","say":"<b>Inorder.</b> Same tree, untouched. Now the left side goes entirely first, so the first thing emitted is the deepest node on the left rather than the root."},{"seen":["d","b"],"look":["e"],"count":3,"badge":"inorder: 12 25 37","say":"Left, then the parent, then right. The root has still not been emitted, and it is sitting above everything already produced."},{"found":["a","b","c","d","e","f","g"],"count":7,"badge":"12 25 37 50 62 75 88","say":"<b>Inorder, finished, and look at it.</b> 12 25 37 50 62 75 88. It came out sorted, and nothing sorted anything. Lesson 6.5 called this order kept as a shape, and this is the shape being read back."},{"look":["d"],"count":1,"badge":"postorder: 12","say":"<b>Postorder.</b> Both sides go before the parent, so a node cannot be emitted until everything it owns is finished."},{"seen":["d","e"],"look":["b"],"count":3,"badge":"postorder: 12 37 25","say":"12 and 37 are both out before 25 can take its turn. <b>Children always finish before their parent</b>, which is exactly what deleting a folder requires."},{"found":["a","b","c","d","e","f","g"],"count":7,"badge":"12 37 25 62 88 75 50","say":"<b>Postorder, finished, and the root is last.</b> That is the order a delete must use, and the order a total must use, because a folder size is not known until every child has reported."}],"caption":"Three sequences from one shape, and the shape was never modified. Preorder announces before it descends, inorder produces a search tree in sorted order without sorting, and postorder guarantees that nothing is finished before the things it owns."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">The only difference is one line of timing.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Three walks, asked when they emit","actors":[{"label":"A node","kind":"gold"},{"label":"Its left side","kind":"accent"},{"label":"Its right side","kind":"accent"}],"messages":[{"from":0,"to":0,"label":"preorder: I emit myself, then I ask both sides","style":"gold"},{"from":0,"to":1,"label":"inorder: I ask the left first"},{"from":0,"to":0,"label":"then I emit myself","style":"green"},{"from":0,"to":2,"label":"then I ask the right"},{"from":0,"to":2,"label":"postorder: I ask both, and only then emit myself","style":"green"}],"caption":"Every walk asks both sides and emits itself exactly once. The three names differ in nothing except where the emitting sits relative to the asking, and once that is seen the names stop needing to be memorised at all."}'></div>

  <p>All three do identical work and touch every node the same number of times. <strong>The difference is a single decision about timing</strong>, and that decision is made by the job rather than by preference.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Three walks, and what each one is genuinely for.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The walk</th><th>What it guarantees</th><th>The job that needs exactly that</th></tr>
    <tr><td>Preorder</td><td>A parent is emitted before anything it owns</td><td>Listing a folder tree, copying one, printing a page outline</td></tr>
    <tr><td>Inorder</td><td>On a search tree, everything comes out in order</td><td>Reading a search tree back sorted, without sorting anything</td></tr>
    <tr><td>Postorder</td><td>Everything a node owns is finished before the node is</td><td>Deleting a folder, totalling sizes, evaluating a formula</td></tr>
  </table>
  <div class="tbl-cap">The middle column is a guarantee rather than a description, and that is why the right column follows without argument. A delete that used preorder would try to remove a folder that still had contents, and a total that used preorder would report a parent before its children had been counted.</div></div>

  <p>And the inorder row is worth pausing on, because it is a debt being paid. <strong>Lesson 6.5 said order kept as a shape survives writes where a sorted row does not.</strong> Inorder is how you get that order back out, and it costs one walk and no sorting at all.</p>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">All three cost the same, and that is the point.</div>
  <p>Every walk visits every node exactly once, so all three cost the same: <strong>one visit per item.</strong> There is no fast walk and no slow walk. Choosing between them is not a performance decision at all.</p>

  <div class="viz" data-viz='{"type":"card","title":"What a walk costs, and what it does not","eyebrow":"SEVEN ITEMS, OR A MILLION","badge":"all three identical","width":560,"rows":[{"k":"Nodes visited, any of the three walks","v":"every one, exactly once","tone":"good","bar":1},{"k":"So the cost of choosing wrongly","v":"nothing, in time","tone":"good","bar":0},{"k":"And the cost of choosing wrongly","v":"a wrong answer","tone":"bad","bar":1},{"k":"Reading a search tree back sorted","v":"one walk, no sorting","tone":"good","bar":0.05},{"k":"The same items, sorted from scratch","v":"about 20,000,000 for a million","tone":"bad","bar":1}],"caption":"Every bar is a rough weight. Rows two and three are the honest pair: these three walks are indistinguishable on a stopwatch and completely different in what they produce. Rows four and five are Lesson 7.1 arriving: a shape that keeps order hands it back for one walk, where an unordered pile would pay the full sorting bill."}'></div>

  <p>In the Chapter 2 currency every walk is <em class="g">O(n)</em>, because it visits each node once. <strong>The interesting number is not in this chapter at all:</strong> it is that the order came out for free, and Lesson 7.1 priced what it would have cost to produce that order from an unsorted pile.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Six places, and each one had no choice.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"The job picks the walk","unit":178,"nodes":[{"id":"c","label":"When does the parent take its turn","x":2,"y":1,"kind":"dark"},{"id":"l","label":"Listing or copying a folder tree: the path before its contents","x":0,"y":0,"kind":"accent"},{"id":"s","label":"Reading a search tree back in order, with nothing sorted","x":0,"y":2,"kind":"gold"},{"id":"d","label":"Deleting a folder, which fails unless it is empty first","x":4,"y":0,"kind":"accent"},{"id":"t","label":"Totalling sizes, where a parent cannot know before its children","x":4,"y":2,"kind":"accent"},{"id":"f","label":"Working out a formula, where the brackets finish first","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"l","label":"preorder","style":"green"},{"from":"c","to":"s","label":"inorder","style":"gold"},{"from":"c","to":"d","label":"postorder"},{"from":"c","to":"t","label":"postorder"},{"from":"c","to":"f","label":"postorder","style":"gold"}],"caption":"The formula node is the one people do not expect. Two plus three, times four, is a tree: the multiply owns the plus, and the plus has to produce its answer before the multiply can use it. Every calculator and every spreadsheet is walking a tree postorder."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and every one is a walk in the wrong order.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"Deleting a folder fails saying it is not empty"</td><td>Ask what order it removes things in</td><td>Parent before children. It needs postorder</td></tr>
    <tr><td>"Folder totals are wrong for parents and right for leaves"</td><td>Ask when a parent is counted</td><td>Counted before its children reported. Postorder fixes it</td></tr>
    <tr><td>"The listing shows files before the folder they are in"</td><td>Ask when the path is emitted</td><td>Parent after children. It needs preorder</td></tr>
    <tr><td>"Reading the tree back gives them out of order"</td><td>Ask which walk it uses</td><td>Only inorder comes out sorted, and only on a search tree</td></tr>
    <tr><td>"The formula gives a different answer than the calculator"</td><td>Ask what finishes first</td><td>Something is being evaluated before what it depends on</td></tr>
    <tr><td>"Copying a tree creates files with no parent folder"</td><td>Ask what is created first</td><td>Children before parents. Preorder creates the container first</td></tr>
  </table>
  <div class="tbl-cap">Not one row here is a performance complaint, and that is what makes them hard to place. All three walks take exactly the same time, so a wrong walk never looks slow. It looks like a bug in something else entirely.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">The totals that are right for leaves and wrong for everything else.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our storage report shows folder sizes. The numbers are correct for folders that contain only files, and wrong for any folder that contains other folders, always too small. It is not off by a consistent amount. Nothing errors, and the code has not changed in a year. The report got noticeably wronger after teams started nesting their projects more deeply."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Right at the leaves, wrong everywhere above","lanes":[{"label":"The team"},{"label":"You"},{"label":"The report"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Leaf folders correct, parent folders too small"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: when does a folder record its total?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"When it is reached, before it descends"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"So a parent is totalled before its children have reported"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"Leaves own nothing, so they are accidentally correct"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"And the error grows with depth, which explains the trend"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Emit the parent AFTER both sides. Postorder"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"The clue everybody skipped is that the leaves are right. A leaf owns nothing, so a walk that totals a node before descending happens to be correct there and nowhere else, which is exactly the signature of a parent taking its turn too early."}'></div>

  <p><strong>The leaves being correct is the diagnosis, not a consolation.</strong> A folder that owns nothing has nothing to wait for, so a walk that records a parent before descending is accidentally right at the bottom and wrong at every level above it. And the error compounds with depth, which is why the report got worse as teams nested more deeply.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It read the pattern of what was correct rather than hunting the arithmetic. <strong>Nothing here is a sum bug.</strong> Every number is added correctly; they are simply added at the wrong moment. A total is a postorder job because a parent cannot know its own answer until everything it owns has reported, and no amount of checking the addition will ever reveal that.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one page of boxes</div>
    <p>Draw a small tree of seven circles, two children each, and put a different number in every one. <strong>Round one:</strong> write out the sequence you get by saying each circle before going down either side. <strong>Round two:</strong> do it again, this time going all the way down the left before saying the circle. <strong>Round three:</strong> do it once more, saying a circle only after both of its sides are finished. Now the question: <strong>which of the three sequences ends with the top circle, and why could a delete only ever use that one?</strong></p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">A storage report gives correct sizes for folders containing only files, and sizes that are too small for any folder containing other folders. What is wrong?</div>
    <div class="opt" data-i="0">The addition overflows on large folders and silently truncates</div>
    <div class="opt" data-i="1">Nested folders are being counted twice, which cancels part of the total</div>
    <div class="opt" data-i="2">A parent is totalled before its children have reported, which is accidentally correct only for folders that own nothing</div>
    <div class="qexp">Every number is added correctly; they are added at the wrong moment. A folder with only files inside owns nothing that needs to report first, so a walk that records a parent before descending happens to be right there and nowhere else. A total is a postorder job, because a parent cannot know its own answer until everything it owns has finished, and the error compounds with depth, which is why deeper nesting made it worse.</div>
  </div>

  <div class="quiz" data-correct="0">
    <div class="q">Reading a search tree with an inorder walk produces 12 25 37 50 62 75 88. What did that cost, compared with sorting the same items?</div>
    <div class="opt" data-i="0">One walk, one visit per item, and nothing was sorted at any point</div>
    <div class="opt" data-i="1">The same as sorting, since the values had to be compared to produce an order</div>
    <div class="opt" data-i="2">More than sorting, because walking a tree touches each node several times</div>
    <div class="qexp">The order was already in the shape, which is what Lesson 6.5 meant by order kept as a shape rather than in a row. An inorder walk visits every node once and emits it, so the sorted sequence falls out with no comparisons at all. Lesson 7.1 priced producing that order from an unsorted pile at about 20,000,000 comparisons for a million items, and this is what having paid for the shape already buys.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>All three walks go deep before they go wide: each one dives to the bottom of one side before it looks at the other. <strong>There is a fourth order that refuses to do that</strong>, reading the tree row by row instead, and it answers a question none of these three can.</p>
  </div>
__NAV__
</div>`
