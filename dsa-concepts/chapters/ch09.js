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

  <div class="board" data-anim='{"type":"tree-walk","title":"Seven items, and three touches to reach any of them","speed":1600,"unit":76,"countLabel":" nodes touched","legend":[["where you are now","look"],["the path you walked","seen"],["reached","found"],["never touched","dead"]],"nodes":[{"id":"a","label":"50","x":3,"d":0},{"id":"b","label":"25","x":1,"d":1},{"id":"c","label":"75","x":5,"d":1},{"id":"d","label":"12","x":0,"d":2},{"id":"e","label":"37","x":2,"d":2},{"id":"f","label":"62","x":4,"d":2},{"id":"g","label":"88","x":6,"d":2}],"edges":[{"from":"a","to":"b"},{"from":"a","to":"c"},{"from":"b","to":"d"},{"from":"b","to":"e"},{"from":"c","to":"f"},{"from":"c","to":"g"}],"steps":[{"look":["a"],"count":1,"badge":"depth 0: the root","say":"Seven items. The top one is the <b>root</b>, and it is the only thing here that nobody owns. Everything begins there because there is nowhere else to begin."},{"seen":["a"],"look":["b"],"dead":["c","f","g"],"count":2,"badge":"depth 1","say":"Step to a child. <b>The other side of the tree is now unreachable from here</b>, and you did not look at any of it. Three items ruled out by one step."},{"seen":["a","b"],"found":["e"],"dead":["c","f","g","d"],"count":3,"badge":"depth 2: arrived","say":"One more step and you have arrived. <b>Three nodes touched out of seven</b>, and four were never examined at all."},{"seen":["a","b"],"found":["e"],"dead":["c","f","g","d"],"count":3,"badge":"3 touches, any leaf","say":"And here is the part worth keeping: <b>every one of the four leaves is exactly three touches away.</b> Not the popular ones, not the lucky ones. All of them, because they are all at the same depth."},{"look":["a"],"count":1,"badge":"now: a thousand items","say":"Now imagine this tree holding a thousand items instead of seven, still evenly branched. <b>It would be ten levels deep</b>, because two multiplied by itself ten times is 1,024. <b>Ten levels, ten touches, not a thousand.</b>"}],"caption":"The number of touches never mentioned the number of items. It mentioned the depth, and only the depth. That is the sentence this whole chapter is built to prove, and it is why a tree of a million is only twice the work of a tree of a thousand."}'></div>

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
,

"9.3": `<div class="wrap">
  <div class="les-kicker">Chapter 9 · Lesson 9.3</div>
  <h1 class="les-title">Level Order: Reading a Tree Row by Row</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~12 min</span>
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
  </div>

  <p class="motto">The three walks all dive. This one refuses to, and refusing is what makes it answer nearest first.</p>

  <p class="lead">A tree is what you get when one thing owns many things, and depth is the only number that decides its speed. The three walks in Lesson 9.2 all go deep before they go wide. This one goes wide before it goes deep, and that single change answers a question none of the other three can.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Looking for the nearest person who can approve it.</div>
  <p>You need a signature. You ask your manager. If they cannot, you ask <strong>everybody at their level</strong> before you go higher, because somebody one step away is better than somebody three steps away even if the three-step person is more likely to say yes.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Nearest first, not deepest first","width":820,"height":280,"items":[{"icon":"person","x":118,"y":126,"kind":"gold","label":"you, needing a signature"},{"icon":"person","x":330,"y":126,"kind":"accent","label":"everybody one step away"},{"icon":"person","x":545,"y":126,"kind":"muted","label":"then everybody two steps away"},{"icon":"doc","x":740,"y":124,"kind":"box","label":"and you stop the moment one says yes"}],"arrows":[{"x1":186,"y1":126,"x2":266,"y2":126,"style":"green","label":"try all of these first"}],"caption":"Nobody hunts for a signature by picking one person and following their whole chain of contacts to the end before trying anyone else. You sweep outwards a ring at a time, because the first yes you find at distance one is better than any yes at distance three."}'></div>

  <p>Nobody hunts by following one person all the way to the end of their contacts before trying anybody else. <strong>You sweep outwards, a ring at a time</strong>, and the first yes you find is the nearest one.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">Finish a level before you start the next one.</div>
  <p>Every walk in Lesson 9.2 dives: it goes to the bottom of one side before looking at the other. <strong>Level order refuses to dive.</strong> It reads the root, then everything at depth one, then everything at depth two, and never touches depth three while anything at depth two is unread.</p>

  <div class="viz" data-viz='{"type":"arch","title":"Two ways to move through a tree","maxChars":18,"nodes":[{"id":"c","label":"You are at the root. Where next?","col":0,"row":1,"kind":"dark"},{"id":"d","label":"Deeper: follow one side to the bottom","col":1,"row":0,"kind":"accent"},{"id":"w","label":"Wider: finish this level first","col":1,"row":2,"kind":"gold"},{"id":"d2","label":"The three walks in Lesson 9.2","col":2,"row":0,"kind":"accent"},{"id":"w2","label":"Level order, and it finds the nearest first","col":2,"row":2,"kind":"gold"},{"id":"w3","label":"Which is why the first one it finds is the closest one","col":3,"row":2,"kind":"gold"}],"edges":[{"from":"c","to":"d"},{"from":"c","to":"w"},{"from":"d","to":"d2","style":"green"},{"from":"w","to":"w2","style":"green"},{"from":"w2","to":"w3","label":"and so","style":"green"}],"caption":"One decision, made at every single node: deeper or wider. The three walks in 9.2 all answered deeper and differed only in when the parent spoke. This one answers wider, and that is the entire difference between them."}'></div>

  <p>And the consequence in the last node is the whole reason it exists. <strong>If you sweep level by level, the first match you find is the shallowest one</strong>, because you had already finished every level above it.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Row by row, and the shallowest answer first.</div>
  <p>The same seven items. Watch the badge fill row by row, and then watch what happens when two nodes both match what you were looking for.</p>

  <div class="board" data-anim='{"type":"tree-walk","title":"Level order, and why the first match is the nearest","speed":1700,"unit":76,"countLabel":" emitted","legend":[["this level, being read","look"],["already emitted","seen"],["a match","found"],["never reached","dead"]],"nodes":[{"id":"a","label":"50","x":3,"d":0},{"id":"b","label":"25","x":1,"d":1},{"id":"c","label":"75","x":5,"d":1},{"id":"d","label":"12","x":0,"d":2},{"id":"e","label":"37","x":2,"d":2},{"id":"f","label":"62","x":4,"d":2},{"id":"g","label":"88","x":6,"d":2}],"edges":[{"from":"a","to":"b"},{"from":"a","to":"c"},{"from":"b","to":"d"},{"from":"b","to":"e"},{"from":"c","to":"f"},{"from":"c","to":"g"}],"steps":[{"look":["a"],"count":1,"badge":"level 0: 50","say":"Start at the root, exactly as every walk does. <b>The difference is what happens next.</b>"},{"seen":["a"],"look":["b","c"],"count":3,"badge":"50, then 25 75","say":"<b>Both children, before either of their children.</b> A walk from Lesson 9.2 would already be two levels down the left by now. This one has not left depth one."},{"seen":["a","b","c"],"look":["d","e","f","g"],"count":7,"badge":"50 25 75 12 37 62 88","say":"Now the whole of depth two, left to right. <b>Level order, finished:</b> 50 25 75 12 37 62 88. Compare it with 9.2 preorder, 50 25 12 37 75 62 88, and notice that only the root agrees."},{"seen":["a"],"look":["b","c"],"count":3,"badge":"now: find anything over 60","say":"Now the question this walk is for. <b>Find anything over 60.</b> Depth one holds 25 and 75."},{"seen":["a","b"],"found":["c"],"dead":["d","e","f","g"],"count":3,"badge":"found at depth 1","say":"<b>75 matches, at depth one, and the entire bottom row was never reached.</b> 62 and 88 also match, and both are further away, and neither was examined."},{"seen":["a","b"],"found":["c"],"dead":["d","e","f","g"],"count":3,"badge":"nearest, guaranteed","say":"That guarantee is the whole product. <b>Because every level above was finished first, the first match found cannot have a shallower match hiding beneath it.</b> No other walk in this chapter can promise that."}],"caption":"Every walk here visits nodes in a different order and they all cost the same. What level order buys is not speed: it is a guarantee about WHICH match you get, and it is the only walk in this chapter that can make one."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">It needs a structure the other three did not.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Where the next node comes from","actors":[{"label":"The walk","kind":"gold"},{"label":"A waiting line","kind":"accent"},{"label":"The tree","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"who is next","style":"gold"},{"from":1,"to":0,"label":"the one who has been waiting longest","style":"green"},{"from":0,"to":2,"label":"then I read it, and I hand you its children"},{"from":0,"to":1,"label":"join the back of the line"},{"from":1,"to":0,"label":"so they are read after everything already waiting","style":"green"}],"caption":"That is Chapter 5, arriving inside a chapter about trees. Children join the back and the next node comes off the front, which is first in first out, and it is the queue that produces the level by level order. The three walks in Lesson 9.2 use a pile instead, where the newest thing is served first, and that is precisely why they dive."}'></div>

  <p><strong>The walk itself is not clever. The waiting line is.</strong> Children join the back, the next node comes off the front, and Lesson 5.2 already named that: first in, first out. Swap the queue for the pile from Lesson 5.1 and you get a diving walk instead, with no other change at all.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Four orders, and the one guarantee each provides.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The order</th><th>What it guarantees</th><th>What holds the waiting work</th></tr>
    <tr><td>Preorder</td><td>A parent before anything it owns</td><td>A pile: newest first, so it dives</td></tr>
    <tr><td>Inorder</td><td>A search tree comes out sorted</td><td>A pile</td></tr>
    <tr><td>Postorder</td><td>Everything owned finishes before its owner</td><td>A pile</td></tr>
    <tr><td>Level order</td><td>The first match found is the shallowest one</td><td>A queue: oldest first, so it sweeps</td></tr>
  </table>
  <div class="tbl-cap">Read the last column and the chapter divides in two. Three of these are the same machine with a pile in it, differing only in when the parent speaks. The fourth is a genuinely different machine, and the difference is one structure from Chapter 5.</div></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Same time, different memory, and one guarantee.</div>
  <p>Level order visits every node once, exactly like the other three, so it costs the same. <strong>What differs is how much is waiting at once.</strong> A diving walk holds one path: as deep as the tree. A sweeping walk holds one level: as wide as the tree.</p>

  <div class="viz" data-viz='{"type":"card","title":"A million items, evenly branched","eyebrow":"WHAT IS WAITING AT ONCE","badge":"20 levels","width":560,"rows":[{"k":"Nodes visited, either way","v":"1,000,000","tone":"good","bar":1},{"k":"Waiting at once, a diving walk","v":"about 20, one path","tone":"good","bar":0.00002},{"k":"Waiting at once, level order","v":"about 500,000, the widest row","tone":"bad","bar":0.5},{"k":"Because the bottom row holds","v":"half of everything","tone":"bad","bar":0.5},{"k":"And what that buys","v":"the nearest match, guaranteed","tone":"good","bar":0.1}],"caption":"Every bar is drawn against a maximum of one million. Row three is the honest cost and it surprises people: an evenly branched tree has half of all its nodes in the bottom row, so sweeping level by level means holding half the tree in a queue at the widest moment. Row two is the diving alternative, holding one path of about twenty."}'></div>

  <p>In the Chapter 2 currency both are <em class="g">O(n)</em> in time and they differ in space: about the depth for a diving walk, about the widest level for this one. <strong>That is a real trade and it is the reason both survive</strong>, and Lesson 5.4 already warned what an unbounded queue does when nobody sets a limit.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places where nearest-first was the requirement.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Sweeping outwards, where it already runs","unit":178,"nodes":[{"id":"c","label":"Finish this ring before starting the next","x":2,"y":1,"kind":"dark"},{"id":"n","label":"Fewest connections between two people","x":0,"y":0,"kind":"gold"},{"id":"m","label":"The shortest route, when every step costs the same","x":0,"y":2,"kind":"gold"},{"id":"u","label":"Drawing a page: a row of boxes at a time","x":4,"y":0,"kind":"accent"},{"id":"o","label":"An org chart printed level by level","x":4,"y":2,"kind":"accent"},{"id":"g","label":"And Chapter 13, where this becomes the main event","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"n","label":"nearest first","style":"gold"},{"from":"c","to":"m","label":"first found is shortest","style":"gold"},{"from":"c","to":"u","label":"a row at a time"},{"from":"c","to":"o","label":"reads the way it looks"},{"from":"c","to":"g","label":"Lesson 13.1 builds it","style":"gold"}],"caption":"The bottom node is where this walk stops being a footnote. Lesson 13.1, Breadth First: Ripples in a Pond, is this exact sweep applied to something that is not a tree, and the guarantee travels with it: the first time you reach somewhere, you reached it by the shortest route."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the tell is which match came back.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"It finds a match, but not the closest one"</td><td>Ask whether it dives or sweeps</td><td>Only a sweep can promise the nearest. Lesson 9.2 walks cannot</td></tr>
    <tr><td>"Memory spikes on wide trees and not deep ones"</td><td>Ask how many are waiting at the widest level</td><td>A sweep holds a whole row. Half the tree is the bottom row</td></tr>
    <tr><td>"Memory spikes on deep trees and not wide ones"</td><td>The same question, other way round</td><td>A dive holds one path, and Lesson 5.1 priced that ceiling</td></tr>
    <tr><td>"The org chart prints in a strange order"</td><td>Ask whether it goes down or across</td><td>A dive prints one branch fully before the next name at the top</td></tr>
    <tr><td>"The route it suggests is longer than the obvious one"</td><td>Ask what it explored first</td><td>It dived. The first route found is not the shortest one</td></tr>
    <tr><td>"It never finishes on a very wide tree"</td><td>Ask what bounds the waiting line</td><td>Nothing does. Lesson 5.4 called that the fourth door</td></tr>
  </table>
  <div class="tbl-cap">Rows two and three are the same measurement pointing in opposite directions, and together they are the whole choice. One walk is bounded by how deep the tree is and the other by how wide, so the shape of your data decides which one is affordable before either is chosen.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">The correct route that nobody would drive.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our internal tool finds a path between two teams through the reporting structure, for routing approvals. It always finds a valid path and the path is always genuinely connected. But people keep pointing out that a much shorter route obviously exists. It is worse on our deeper divisions and fine on the flat ones. Nobody can find a bug in the path it returns."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Every path is valid, and none is shortest","lanes":[{"label":"The team"},{"label":"You"},{"label":"The tool"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Valid paths, obviously not the shortest ones"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: does it explore deeper or wider first?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"Deeper. It follows one branch to the end"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Then the first path it finds is just the first one, not the shortest"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"Worse on deep divisions, fine on flat ones"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"Which is the signature exactly: depth is what it wastes"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Sweep level by level. First found is then shortest"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"Nobody could find a bug in the path because there is no bug in the path. Every route it returns is real and connected. The tool was never asked for the shortest one and a diving walk cannot produce it, so it returns the first valid answer it stumbles into."}'></div>

  <p><strong>There is no bug in the path, which is why nobody found one.</strong> A diving walk returns the first valid route it reaches, and the first one it reaches is simply the first, not the shortest. Sweeping level by level changes nothing about correctness and everything about which valid answer comes back, because finishing every level above guarantees nothing shorter was skipped.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It stopped auditing the answer and asked what the search had promised. <strong>Correct and shortest are different requirements</strong>, and only one walk in this chapter can deliver the second. The tell was in the complaint all along: worse on deep structures and fine on flat ones is exactly what a dive looks like, because on a flat structure there is nowhere deep to get lost.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one org chart</div>
    <p>Draw any org chart you know, four levels deep. <strong>First:</strong> read it out by following one person all the way down their reports before moving to the next person at the top. <strong>Second:</strong> read it out again by naming everybody at each level before going a level deeper. <strong>Third:</strong> now pick a property, anybody who has worked here over five years, and find one using each method. Note which method found somebody nearer to the top, and note that neither method looked at fewer people to do it.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A tool returns valid but unnecessarily long routes through a reporting structure, and it is worse on deep divisions than flat ones. What is happening?</div>
    <div class="opt" data-i="0">The path data is incomplete for deep divisions, so shorter links are missing</div>
    <div class="opt" data-i="1">It explores deeper before wider, so the first valid route it reaches is simply the first one rather than the shortest</div>
    <div class="opt" data-i="2">It is finding the shortest route but measuring distance incorrectly</div>
    <div class="qexp">There is no bug in the route, which is why nobody could find one. A diving walk follows one branch to its end before trying alternatives, so it returns the first valid answer it stumbles into. Only a sweep can guarantee the shortest, because finishing every level before starting the next means nothing nearer was skipped. Worse-on-deep and fine-on-flat is the signature: a flat structure has nowhere deep to get lost.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">Level order and the three walks from Lesson 9.2 all visit every node once. Where do they genuinely differ in cost?</div>
    <div class="opt" data-i="0">Nowhere. They are identical in every respect</div>
    <div class="opt" data-i="1">Level order is slower because it revisits parents to find their children</div>
    <div class="opt" data-i="2">In how much is waiting at once: a dive holds one path, about the depth, and a sweep holds one level, which at the bottom of an even tree is half of everything</div>
    <div class="qexp">Time is identical because every node is visited exactly once either way. The space is not. A diving walk only ever holds the path it is currently on, which is about twenty for a million items. A sweep holds a whole level, and an evenly branched tree keeps half of all its nodes in the bottom row, so the queue reaches about half a million. That is a real trade and it is why both walks survive.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Every lesson so far has said depth decides the speed, and every board has quietly assumed the branching was even. <strong>Next: what happens when it is not</strong>, the two numbers that measure it, and why the same items in the same structure can be ten steps away or a thousand.</p>
  </div>
__NAV__
</div>`
,

"9.4": `<div class="wrap">
  <div class="les-kicker">Chapter 9 · Lesson 9.4</div>
  <h1 class="les-title">Height, Depth and Balance: The Numbers That Decide Speed</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">The gap between a good tree and a perfect one is nothing. The gap between a good tree and none at all is everything.</p>

  <p class="lead">Every lesson so far has said depth decides the speed, and every board has quietly assumed the branching was even. This lesson is what happens when it is not. By the end you can measure a tree with two numbers, say which one your operation actually pays, and know how much imbalance is worth worrying about, which is far less than people expect.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Two filing systems, same drawers, same papers.</div>
  <p>Two offices file the same thousand documents. One splits them into ten boxes, then ten folders each, then ten wallets. <strong>Three moves to reach anything.</strong> The other files them in one long chain: every document tucked inside the previous one. Also correct. Also complete. <strong>A thousand moves to reach the last one.</strong></p>

  <div class="viz" data-viz='{"type":"scene","title":"Same documents, same rule, two shapes","width":820,"height":280,"items":[{"icon":"shelf","x":135,"y":124,"kind":"accent","label":"split ten ways, three times"},{"icon":"person","x":345,"y":126,"kind":"gold","label":"three moves to anything"},{"icon":"pile","x":560,"y":128,"kind":"bad","label":"each one inside the last"},{"icon":"person","x":740,"y":126,"kind":"bad","label":"up to a thousand moves"}],"arrows":[{"x1":215,"y1":124,"x2":300,"y2":124,"style":"green","label":"depth 3"},{"x1":625,"y1":126,"x2":690,"y2":126,"style":"gold","label":"depth 1,000"}],"caption":"Both offices followed the rule and both are genuinely trees: one owner each, nothing owned twice. The documents are identical and so is the number of them. The only thing that differs is how the branching was spent, and it is the difference between three moves and a thousand."}'></div>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">Two numbers, and only one of them is yours.</div>
  <p><strong>Depth</strong> belongs to a node: how many owners sit above it. <strong>Height</strong> belongs to the tree: the depth of its deepest node. Lesson 9.1 gave you both words, and here is what to do with them.</p>

  <div class="viz" data-viz='{"type":"arch","title":"Which number does your operation pay","maxChars":18,"nodes":[{"id":"q","label":"What are you doing to the tree?","col":0,"row":1,"kind":"dark"},{"id":"o","label":"Reaching one specific thing","col":1,"row":0,"kind":"accent"},{"id":"w","label":"Reading all of it","col":1,"row":2,"kind":"accent"},{"id":"o2","label":"You pay THAT node depth, not the height","col":2,"row":0,"kind":"gold"},{"id":"w2","label":"You pay one visit per item, and height does not enter","col":2,"row":2,"kind":"gold"},{"id":"h","label":"Height is the worst case: the deepest thing you could be asked for","col":3,"row":1,"kind":"bad"}],"edges":[{"from":"q","to":"o"},{"from":"q","to":"w"},{"from":"o","to":"o2","style":"green"},{"from":"w","to":"w2","style":"green"},{"from":"o2","to":"h","label":"and at worst","style":"green"}],"caption":"Most people quote height and most operations pay depth. Reaching something shallow is cheap in a tall tree, and a full walk from Lesson 9.2 pays one visit per item whatever the shape is. Height is what you promise a stranger, because it is the deepest thing they could ask for."}'></div>

  <p><strong>Balance</strong> is then not a third number. It is a description of how close the height is to the smallest it could be for that many items, and Lesson 9.1 already gave that smallest: ten levels for a thousand, twenty for a million.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Seven items, two shapes, and the same walk.</div>
  <p>Seven items, evenly branched. Reaching the deepest is three touches. Now the same seven with the branching spent badly, and <strong>nothing else changed at all.</strong></p>

  <div class="board" data-anim='{"type":"tree-walk","title":"Seven items, evenly branched: three touches","speed":1700,"unit":74,"countLabel":" touches","legend":[["where you are","look"],["walked","seen"],["reached","found"],["never touched","dead"]],"nodes":[{"id":"a","label":"50","x":3,"d":0},{"id":"b","label":"25","x":1,"d":1},{"id":"c","label":"75","x":5,"d":1},{"id":"d","label":"12","x":0,"d":2},{"id":"e","label":"37","x":2,"d":2},{"id":"f","label":"62","x":4,"d":2},{"id":"g","label":"88","x":6,"d":2}],"edges":[{"from":"a","to":"b"},{"from":"a","to":"c"},{"from":"b","to":"d"},{"from":"b","to":"e"},{"from":"c","to":"f"},{"from":"c","to":"g"}],"steps":[{"look":["a"],"count":1,"badge":"start at the top","say":"Seven items, evenly branched, and the job is to reach 88. <b>Start at the top.</b> One touch so far, and nothing else has been examined."},{"seen":["a"],"look":["c"],"count":2,"badge":"one side rejected","say":"88 is bigger than 50, so <b>the entire left side can be ignored without being looked at.</b> Go right. Two touches."},{"seen":["a","c"],"found":["g"],"dead":["b","d","e","f"],"count":3,"badge":"height 2: 3 touches","say":"<b>Height 2, and the deepest thing is three touches away.</b> Four of the seven were never examined, which is what branching buys."}],"caption":"Four of the seven were never examined. That is what branching buys, and it is only available because every node on the path had a side to reject."}'></div>

  <p>Now the same seven values with the branching never spent. <strong>Not imagined: drawn.</strong> One owner each, nothing owned twice, so it is still a tree by the definition in Lesson 9.1.</p>

  <div class="board" data-anim='{"type":"tree-walk","title":"The same seven, with the branching never spent","speed":1600,"unit":74,"countLabel":" touches","legend":[["where you are","look"],["walked","seen"],["reached","found"]],"nodes":[{"id":"n1","label":"50","x":0,"d":0},{"id":"n2","label":"25","x":1,"d":1},{"id":"n3","label":"75","x":2,"d":2},{"id":"n4","label":"12","x":3,"d":3},{"id":"n5","label":"37","x":4,"d":4},{"id":"n6","label":"62","x":5,"d":5},{"id":"n7","label":"88","x":6,"d":6}],"edges":[{"from":"n1","to":"n2"},{"from":"n2","to":"n3"},{"from":"n3","to":"n4"},{"from":"n4","to":"n5"},{"from":"n5","to":"n6"},{"from":"n6","to":"n7"}],"steps":[{"look":["n1"],"count":1,"badge":"same seven items","say":"The same seven values, and the same rule from Lesson 9.1: one owner each, nothing owned twice. <b>This is still a tree.</b> It simply never branches."},{"seen":["n1","n2"],"look":["n3"],"count":3,"badge":"3 touches, not arrived","say":"Three touches in. On the board above you had already arrived. <b>Here nothing has been ruled out</b>, because a node with one child has no side to reject."},{"seen":["n1","n2","n3","n4","n5"],"look":["n6"],"count":6,"badge":"6 touches, still going","say":"Six touches, and still descending. Every step cost the same as a step on the balanced board and bought nothing at all."},{"seen":["n1","n2","n3","n4","n5","n6"],"found":["n7"],"count":7,"badge":"7 touches vs 3","say":"<b>Seven touches to reach what took three.</b> Same items, same rule, same walk, and Lesson 6.2 is exactly what this became."}],"caption":"This is the picture the sentence above describes, drawn rather than imagined. A node with two children throws away half of what is left when you step past it; a node with one child throws away nothing, so a tree that never branches is a chain wearing a tree diagram and it costs what Chapter 4 said a chain costs."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What a step is actually buying.</div>

  <div class="viz" data-viz='{"type":"seq","title":"The same step, in two shapes","actors":[{"label":"You, stepping down","kind":"gold"},{"label":"A node with two children","kind":"accent"},{"label":"A node with one child","kind":"bad"}],"messages":[{"from":0,"to":1,"label":"I am going left","style":"gold"},{"from":1,"to":0,"label":"then everything on my right is now impossible","style":"green"},{"from":0,"to":2,"label":"I am going down","style":"gold"},{"from":2,"to":0,"label":"nothing is ruled out. There was nowhere else to go"}],"caption":"This is the whole of balance in one exchange. A step past a node with two children eliminates a subtree; a step past a node with one child eliminates nothing, because there was no alternative to reject. Branching is not what makes a tree pretty, it is what makes a step worth taking."}'></div>

  <p><strong>Branching is not decoration. It is what makes a step worth taking</strong>, and Lesson 6.3 already priced the same idea: halving works because a comparison eliminates a side, and a comparison that eliminates nothing is a scan.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Four shapes holding the same thousand items.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The shape</th><th>Height, for a thousand items</th><th>What it behaves like</th></tr>
    <tr><td>Perfectly balanced</td><td>10</td><td>The best case, and the number Lesson 9.1 derived</td></tr>
    <tr><td>Roughly balanced</td><td>10 to 20</td><td>Indistinguishable in practice. This is the target</td></tr>
    <tr><td>Badly lopsided</td><td>a few hundred</td><td>Noticeably slow, and getting worse as it grows</td></tr>
    <tr><td>Fully one-sided</td><td>1,000</td><td>A chain. Chapter 4 costs, with a tree diagram on top</td></tr>
  </table>
  <div class="tbl-cap">Rows one and two are the point of this table. Perfect balance is worth almost nothing over rough balance, ten against twenty on a thousand items, and chasing it is effort spent on a difference nobody will measure. Row four is worth everything, and that is where all the attention belongs.</div></div>

  <p>And the boundary of this chapter sits right here. <strong>How a tree gets into row four, and what a structure does to climb back out, is Lesson 10.3, When a Search Tree Quietly Becomes a List, and Lesson 10.4.</strong> This chapter measures the shape. Chapter 10 maintains it.</p>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The gap that matters and the gap that does not.</div>
  <p>A million items. Perfectly balanced is <strong>twenty levels</strong>, because two multiplied by itself twenty times is 1,048,576. Fully one-sided is <strong>a million levels</strong>. That is fifty thousand times the work, on identical data with an identical rule.</p>

  <div class="viz" data-viz='{"type":"card","title":"A million items, four shapes","eyebrow":"TOUCHES TO REACH THE DEEPEST","badge":"same million","width":560,"rows":[{"k":"Perfectly balanced","v":"20","tone":"good","bar":0.00002},{"k":"Roughly balanced, the realistic target","v":"about 40","tone":"good","bar":0.00004},{"k":"So perfect against good costs you","v":"20 touches, once","tone":"good","bar":0.00002},{"k":"Fully one-sided","v":"1,000,000","tone":"bad","bar":1},{"k":"And good against none costs you","v":"about 50,000 times","tone":"bad","bar":1}],"caption":"Every bar is drawn against a maximum of one million. Rows three and five are the two comparisons worth carrying: chasing perfect balance buys twenty touches, and losing balance entirely costs fifty thousand times. Effort spent on the first is effort not spent on the second."}'></div>

  <p>In the Chapter 2 currency a balanced tree is <em class="g">O(log n)</em> and a one-sided one is <em class="g">O(n)</em>, which is the whole of Lesson 6.2 arriving inside a structure that looks like it should be fast. <strong>The diagram still branches on the page and the data no longer branches at all.</strong></p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places where the shape drifted.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Where trees quietly stop branching","unit":178,"nodes":[{"id":"c","label":"A tree that stopped spending its branching","x":2,"y":1,"kind":"dark"},{"id":"f","label":"A folder mirrored from another system, one level per step","x":0,"y":0,"kind":"gold"},{"id":"p","label":"A page where every wrapper wraps exactly one thing","x":0,"y":2,"kind":"accent"},{"id":"o","label":"An org chart where each manager has one report","x":4,"y":0,"kind":"accent"},{"id":"t","label":"A comment thread that is one long reply chain","x":4,"y":2,"kind":"accent"},{"id":"s","label":"And a search tree fed in order. Lesson 10.3 owns it","x":2,"y":3,"kind":"bad"}],"edges":[{"from":"c","to":"f","label":"deep, and nobody looked","style":"gold"},{"from":"c","to":"p","label":"nesting with no branching"},{"from":"c","to":"o","label":"a chain of one"},{"from":"c","to":"t","label":"a chain of replies"},{"from":"c","to":"s","label":"Chapter 10 fixes it"}],"caption":"Every node here is still a genuine tree by the definition in Lesson 9.1: one owner each, nothing owned twice. Not one of them is broken. They have simply spent no branching, so every step they offer eliminates nothing, and they cost what a chain costs."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the number nobody measured.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"It is slow for one account with less data than average"</td><td>Measure the height, not the count</td><td>Depth, not amount. Lesson 9.1 block 9, exactly</td></tr>
    <tr><td>"It used to be fast and degraded over months"</td><td>Ask whether items arrive in order</td><td>The shape drifted. Lesson 10.3 owns the search tree case</td></tr>
    <tr><td>"Rebuilding it from scratch made it fast again"</td><td>Ask what rebuilding changed</td><td>Not the data. The shape. Same items, new height</td></tr>
    <tr><td>"Some lookups are instant and some are not"</td><td>Compare the depth of those two items</td><td>You pay the depth of the thing you asked for, not the height</td></tr>
    <tr><td>"We spent a week perfectly balancing it"</td><td>Ask what the height was before and after</td><td>Twenty against forty is nothing. Chase row four, not row one</td></tr>
    <tr><td>"The page has forty nested wrappers"</td><td>Ask how many of them have two children</td><td>Nesting is not branching. Depth with no elimination</td></tr>
  </table>
  <div class="tbl-cap">Row three is the diagnostic worth memorising. If rebuilding a structure from the same data makes it fast again, nothing about the data was ever the problem, and you have measured the shape without meaning to.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Rebuilt nightly, fast every morning, slow by evening.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our category browser is rebuilt from scratch every night and it is fast every morning. By late afternoon it is noticeably slower, and by the end of the day some pages take seconds. The same rebuild fixes it every night. We have not been able to reproduce it in testing, where we load the same data and it stays fast all day."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"The rebuild is the clue, not the fix","lanes":[{"label":"The team"},{"label":"You"},{"label":"The browser"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Fast after rebuild, slow by evening, every day"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: if the data is the same, what did the rebuild change?"},{"id":"c1","lane":2,"col":1,"kind":"accent","label":"Only the shape. Same categories, rebuilt evenly"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"So the height is climbing during the day"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"New categories are added all day, in name order"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"Which is why testing never reproduced it: it loads at once"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Keep the shape as it grows. Lesson 10.4"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"The rebuild was treated as the workaround and it was the diagnosis. Same data in, same data out, and the only thing it can possibly have changed is the arrangement, which means the arrangement is what degrades and the data never did."}'></div>

  <p><strong>The rebuild is the evidence.</strong> It loads identical data and makes the problem disappear, so nothing about the data can be the cause and the shape is the only thing left. Categories arrive all day in name order, so each one attaches below the last and the height climbs steadily while the item count barely moves. Testing loads everything at once and builds an even tree, which is why it never reproduced.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It took the workaround seriously as a measurement. <strong>If rebuilding from the same data fixes it, the data was never the problem</strong>, and there is only one other thing a rebuild changes. Keeping the shape as items arrive, rather than rebuilding it nightly, is Lesson 10.4, Staying Balanced, and this chapter has now measured exactly what that lesson is protecting.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, fifteen sticky notes</div>
    <p>Number fifteen sticky notes 1 to 15. <strong>Round one:</strong> build a tree by putting 8 at the top, then 4 and 12 below it, then 2, 6, 10, 14, and finally the odd numbers. Count how many notes you pass through to reach 15. <strong>Round two:</strong> start again and add them in plain order, 1 then 2 then 3, each one hanging below the last. Count again. <strong>Round three:</strong> compare the two counts, and then notice that both walls hold exactly the same fifteen notes and both obey the same rule.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="0">
    <div class="q">A browser is rebuilt nightly from the same data, is fast every morning and slow by evening, and testing never reproduces it. What is degrading?</div>
    <div class="opt" data-i="0">The shape. Items are added in order all day so the height climbs, and a rebuild is the only thing that resets it</div>
    <div class="opt" data-i="1">Memory fragmentation, which a restart clears</div>
    <div class="opt" data-i="2">The data volume, which grows during the day and is reset at night</div>
    <div class="qexp">The rebuild is the diagnosis rather than the workaround. It loads identical data and fixes the problem, so the data cannot be the cause and the arrangement is the only thing left. Items arriving in order attach below one another, so the height climbs while the count barely moves. Testing loads everything at once and builds an even tree, which is exactly why it never reproduces.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">A team spends a week making a tree perfectly balanced rather than roughly balanced, on a million items. What did they buy?</div>
    <div class="opt" data-i="0">A tenfold improvement, since perfect balance halves the height</div>
    <div class="opt" data-i="1">About twenty touches, because roughly balanced is around forty levels and perfect is twenty, while losing balance entirely would have cost fifty thousand times</div>
    <div class="opt" data-i="2">Nothing at all, because balance has no effect on the cost of reaching an item</div>
    <div class="qexp">The gap between good and perfect is twenty touches against forty, which nobody will ever measure. The gap between good and none is twenty against a million. Both matter enormously in one direction and not at all in the other, so effort spent chasing perfection is effort not spent on the failure that actually costs something, which is a tree that stops branching altogether.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Depth is the only number that decides a tree speed, and you can now measure it and say what it will cost. <strong>The last lesson is finding them</strong>, which is easier than it sounds, because you have been using half a dozen of them today without once thinking of them as trees.</p>
  </div>
__NAV__
</div>`
,

"9.5": `<div class="wrap">
  <div class="les-kicker">Chapter 9 · Lesson 9.5</div>
  <h1 class="les-title">Where Trees Show Up: Folders, Web Pages, Org Charts, File Systems</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~12 min</span>
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
  </div>

  <p class="motto">You have used six trees today. None of them was called a tree, and every one of them charged you by depth.</p>

  <p class="lead">A tree is what you get when one thing owns many things, and depth is the only number that decides its speed. This lesson is recognising them in the wild, which is easier than it sounds and matters more than it sounds, because the moment ownership stops being exclusive none of this chapter applies at all.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">One morning, six trees.</div>
  <p>You opened a folder. You loaded a page, which is boxes inside boxes. You read a comment thread with replies to replies. You looked at a menu with submenus. You checked who somebody reports to. <strong>Not one of those was presented to you as a tree</strong>, and every one of them is.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Six trees before lunch","width":820,"height":280,"items":[{"icon":"shelf","x":115,"y":124,"kind":"accent","label":"a folder"},{"icon":"doc","x":300,"y":124,"kind":"accent","label":"a page of nested boxes"},{"icon":"phone","x":480,"y":126,"kind":"accent","label":"a menu with submenus"},{"icon":"person","x":660,"y":126,"kind":"accent","label":"a comment thread"},{"icon":"server","x":780,"y":124,"kind":"gold","label":"one rule under all of it"}],"arrows":[{"x1":700,"y1":126,"x2":744,"y2":126,"style":"gold","label":"one owner each"}],"caption":"Nobody labels these as trees and nobody needs to. What they share is the rule from Lesson 9.1: exclusive ownership. And what they share as a consequence is that every one of them charges by depth, which is why the deeply nested one is always the slow one."}'></div>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One test, run on anything.</div>
  <p>To know whether you are holding a tree, ask two questions and nothing else. <strong>Does everything have exactly one owner? And can anything end up inside itself?</strong> One yes and one no, and you have a tree, with everything in this chapter available.</p>

  <div class="viz" data-viz='{"type":"flow","title":"Is this a tree, and does the chapter apply","maxChars":18,"nodes":[{"id":"s","label":"Something that branches","col":0,"row":1,"kind":"gold"},{"id":"q1","label":"Does everything have exactly one owner?","col":1,"row":1,"kind":"dark","shape":"diamond"},{"id":"n1","label":"No: two owners. That is a graph, Chapter 12","col":2,"row":0,"kind":"bad"},{"id":"q2","label":"Can anything end up inside itself?","col":2,"row":2,"kind":"dark","shape":"diamond"},{"id":"n2","label":"Yes: it loops. Walking never ends, Lesson 4.4","col":3,"row":1,"kind":"bad"},{"id":"y","label":"No: a tree. Depth decides everything","col":3,"row":3,"kind":"accent"}],"edges":[{"from":"s","to":"q1"},{"from":"q1","to":"n1","label":"no"},{"from":"q1","to":"q2","label":"yes","style":"green"},{"from":"q2","to":"n2","label":"yes"},{"from":"q2","to":"y","label":"no","style":"green"}],"caption":"Both no branches are real destinations rather than failures. Two owners is a graph and Chapter 12 has the tools for it. Something containing itself is a loop, which Lesson 4.4 showed makes a walk with no memory run forever, and Lesson 5.4 opened on exactly that as an outage."}'></div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">A page, and the depth nobody was measuring.</div>
  <p>A web page is boxes inside boxes, and every one of them has exactly one parent box. <strong>So it is a tree, and it charges by depth like every other one.</strong> Watch what a browser has to do to reach the text.</p>

  <div class="board" data-anim='{"type":"tree-walk","title":"A page is a tree, and the text sits at the bottom","speed":1700,"unit":78,"countLabel":" levels down","legend":[["where the browser is","look"],["walked through","seen"],["the thing you wanted to read","found"],["not on this path","dead"]],"nodes":[{"id":"a","label":"page","x":2,"d":0},{"id":"b","label":"main","x":1,"d":1},{"id":"c","label":"side","x":3,"d":1},{"id":"d","label":"wrap","x":0,"d":2},{"id":"e","label":"card","x":2,"d":2},{"id":"f","label":"box","x":4,"d":2},{"id":"g","label":"text","x":2,"d":3}],"edges":[{"from":"a","to":"b"},{"from":"a","to":"c"},{"from":"b","to":"d"},{"from":"b","to":"e"},{"from":"c","to":"f"},{"from":"e","to":"g"}],"steps":[{"look":["a"],"count":0,"badge":"the page itself","say":"The whole page is one box, and it owns everything. <b>That is the root</b>, and it is the only thing here that nothing else contains."},{"seen":["a"],"look":["b"],"dead":["c","f"],"count":1,"badge":"one level in","say":"Inside it, a main area and a sidebar. Stepping into one means <b>everything in the other is now irrelevant</b>, which is the branching from Lesson 9.4 being spent."},{"seen":["a","b","e"],"look":["g"],"dead":["c","f","d"],"count":3,"badge":"3 levels to the text","say":"Down through a wrapper and a card, and the sentence you came to read is <b>three levels below the page</b>. Every layout decision anybody makes moves that number."},{"seen":["a","b","e"],"found":["g"],"dead":["c","f","d"],"count":3,"badge":"now: forty levels","say":"<b>Now make it forty.</b> Nothing about the page looks different to a reader, the same sentence is on screen, and every operation touching that text now walks forty levels instead of three."}],"caption":"Designers do not think of nesting as depth and browsers charge for it exactly as this chapter says they must. A page that reads identically can be three levels deep or forty, and the second one is doing more than ten times the walking for every single thing it touches."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Why deleting a folder deletes everything in it.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Ownership, and what follows from it","actors":[{"label":"You","kind":"gold"},{"label":"A folder","kind":"accent"},{"label":"Everything it owns","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"delete yourself","style":"gold"},{"from":1,"to":2,"label":"then none of you has an owner any more"},{"from":2,"to":1,"label":"and nothing else can reach us, ever"},{"from":1,"to":0,"label":"so we all go together","style":"green"}],"caption":"This is not a policy anybody chose and it is not a convenience. Exclusive ownership means there is exactly one route to anything, so removing an owner removes the only route to everything beneath it. The behaviour people find alarming is the definition doing its job."}'></div>

  <p><strong>Nobody decided that deleting a folder should delete its contents.</strong> Exclusive ownership means one route to everything, so removing an owner removes the only way to reach anything below it, and the alarming behaviour is the definition working correctly.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Six systems, and what depth costs in each.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The system</th><th>What owns what</th><th>What depth costs there</th></tr>
    <tr><td>A file system</td><td>A folder owns files and folders</td><td>Every operation walks from the top. Lesson 9.1 block 9</td></tr>
    <tr><td>A web page</td><td>A box owns the boxes inside it</td><td>Layout and styling walk it constantly, per box</td></tr>
    <tr><td>A comment thread</td><td>A comment owns its replies</td><td>Deep threads are slow to render and hard to read</td></tr>
    <tr><td>An org chart</td><td>A manager owns their reports</td><td>Approvals travel the depth. Lesson 9.3 nearest-first</td></tr>
    <tr><td>A menu</td><td>A menu owns its submenus</td><td>Clicks to reach anything equal its depth exactly</td></tr>
    <tr><td>A trie</td><td>A prefix owns its continuations</td><td>Cost is what you typed. Lesson 6.5 already built it</td></tr>
  </table>
  <div class="tbl-cap">The menu row is the one you can feel without any tools. Every level of submenu is one more click for every user, forever, and it is the only design decision in that list where the depth cost is paid by a person rather than a machine.</div></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The same number, in five different currencies.</div>
  <p>Depth is one number and it gets charged in whatever the system happens to spend. <strong>The arithmetic never changes and the units do.</strong></p>

  <div class="viz" data-viz='{"type":"card","title":"What one extra level costs","eyebrow":"THE SAME NUMBER, DIFFERENT UNITS","badge":"per level","width":560,"rows":[{"k":"A menu","v":"one more click, for every user","tone":"bad","bar":0.6},{"k":"A page","v":"one more box to walk, per element","tone":"bad","bar":0.4},{"k":"A folder tree","v":"one more step on every operation","tone":"bad","bar":0.4},{"k":"A comment thread","v":"one more indent, and less width to read in","tone":"bad","bar":0.3},{"k":"A balanced tree of a million","v":"twice as much data held","tone":"good","bar":0.1}],"caption":"Every bar is a rough weight. The last row is the one that inverts: when branching is being spent, a level is what lets the tree hold twice as much, and Lesson 9.1 derived it as twenty levels for a million. When branching is not being spent, as in the four rows above, a level buys nothing and costs everybody."}'></div>

  <p>That last row is the difference between the two halves of this chapter. <strong>A level in a branching tree doubles what you can hold. A level in a nesting structure holds nothing extra and costs a step</strong>, which is Lesson 9.4 saying that a node with one child eliminates nothing.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places where the ownership turned out not to be exclusive.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Where it stops being a tree","unit":178,"nodes":[{"id":"c","label":"Ownership stops being exclusive","x":2,"y":1,"kind":"dark"},{"id":"s","label":"A shortcut pointing at a folder above itself","x":0,"y":0,"kind":"bad"},{"id":"t","label":"A person reporting to two managers","x":0,"y":2,"kind":"bad"},{"id":"d","label":"A document shared into two projects","x":4,"y":0,"kind":"bad"},{"id":"p","label":"A part used inside two other parts","x":4,"y":2,"kind":"bad"},{"id":"g","label":"All of these are graphs, and Chapter 12 has the tools","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"s","label":"and it loops"},{"from":"c","to":"t","label":"two owners"},{"from":"c","to":"d","label":"two owners"},{"from":"c","to":"p","label":"two owners"},{"from":"c","to":"g","label":"the honest answer","style":"gold"}],"caption":"Every node here is a real situation and none of them is a mistake in the world. The mistake is only ever in the model. The moment something has two owners, depth is not defined, a walk can arrive twice, and every guarantee in this chapter quietly stops holding."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and half of them are not trees at all.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"The menu takes too many clicks"</td><td>Count the levels, not the items</td><td>Depth charged to a person. Flatten it, or nothing improves</td></tr>
    <tr><td>"The page is slow and there is barely anything on it"</td><td>Count how deep the content sits</td><td>Nesting with no branching. Depth with no elimination</td></tr>
    <tr><td>"Deleting that removed far more than expected"</td><td>Ask what it owned</td><td>Correct behaviour. One route in, so one route out</td></tr>
    <tr><td>"The same file appears in two places"</td><td>Ask which one really owns it</td><td>If both do, it is not a tree. Chapter 12</td></tr>
    <tr><td>"The sync job runs forever on one account"</td><td>Ask whether anything points upwards</td><td>A loop. Lesson 4.4, and a walk with no memory</td></tr>
    <tr><td>"Two teams both claim this person"</td><td>Ask whether the org chart allows it</td><td>The world is a graph and the model is a tree</td></tr>
  </table>
  <div class="tbl-cap">Rows four, five and six are the same discovery three times: somebody modelled the world as a tree and the world declined. That is not a bug to fix inside this chapter, it is a signal to leave it, and knowing when to leave is worth as much as anything in it.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">The sync that never finishes, for one customer.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our backup sync walks a customer folder tree and uploads what it finds. For one customer it never finishes. It does not crash and it does not error, it just runs until we stop it. Their storage is not large. We have restarted it, given it more memory and more time, and it behaves the same way every run."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"It never finishes, and nothing is wrong with the files","lanes":[{"label":"The team"},{"label":"You"},{"label":"The sync"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Runs forever for one customer. No crash, no error"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: is that folder structure actually a tree?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"A shortcut points at a folder above itself"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"So ownership is not exclusive, and it loops"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"The walk keeps finding new paths to the same folders"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"And it keeps no memory of where it has been"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Keep a set of what you have visited. Lesson 8.4"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"No crash and no error is the diagnosis. A walk that runs forever without failing is not stuck on a large amount of work, it is going round, and it will keep going round for as long as anybody lets it because nothing about a loop looks different from the inside."}'></div>

  <p><strong>It never finishes because it is not walking a tree.</strong> A shortcut points at a folder above itself, so ownership stopped being exclusive and the structure loops. Lesson 4.4 showed exactly this: a walk that keeps no memory of where it has been cannot notice it has come round, and Lesson 8.4 showed the fix costs one question per folder.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It questioned the shape rather than the size. <strong>More memory and more time both assume the work is large and finite</strong>, and this work is neither. The tell was that it never errored: a job hitting a real limit fails, and a job going round in a circle looks perfectly healthy from the inside, forever.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one product you use daily</div>
    <p>Pick any app with a menu. <strong>First:</strong> count the clicks to reach the setting you change most often. That number is its depth, and somebody chose it. <strong>Second:</strong> look at how many options sit at each level. If a level has one option, it is a level that eliminates nothing and costs a click, which is Lesson 9.4 on a screen. <strong>Third:</strong> find something in that app that belongs to two places at once, a file in two albums or a task in two lists, and ask yourself whether the app treats one as the real owner. The answer will tell you whether they modelled a tree or a graph.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">A sync job walks one customer's folders and never finishes, without crashing or erroring, on a small amount of storage. What is happening?</div>
    <div class="opt" data-i="0">The storage is larger than reported and the job is still working through it</div>
    <div class="opt" data-i="1">The job has run out of memory silently and is retrying</div>
    <div class="opt" data-i="2">A shortcut points at a folder above itself, so ownership is not exclusive, the structure loops, and a walk with no memory can never notice</div>
    <div class="qexp">Never finishing without ever failing is the diagnosis. A job hitting a real limit errors; a job going round a loop looks healthy from the inside forever. Lesson 4.4 showed that a walk keeping no memory of where it has been cannot detect that it has come round, and Lesson 8.4 showed the fix is one question per folder against a set of what has already been visited.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">A page has forty levels of nesting and very little content, and it is slow. Why does the depth matter when the content is small?</div>
    <div class="opt" data-i="0">Deeper pages use proportionally more memory per element</div>
    <div class="opt" data-i="1">Layout and styling walk from the top for every element, so each one pays the depth, and nesting with one child per level eliminates nothing on the way</div>
    <div class="opt" data-i="2">Browsers limit nesting depth and slow down as the limit approaches</div>
    <div class="qexp">A page is a tree by the definition in Lesson 9.1: every box sits inside exactly one box. So it charges by depth like every other tree in this chapter, and the amount of content never enters the cost. Worse, wrappers that contain one thing each are Lesson 9.4's node with one child: a step that eliminates nothing, so the depth is being paid without any of the branching that normally makes depth worth having.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>A tree is what you get when one thing owns many things, and depth is the only number that decides its speed. <strong>The whiteboard now runs the whole chapter end to end:</strong> one shape, four reading orders, the branching being spent and then not spent, and the moment a tree turns out not to be one.</p>
  </div>
__NAV__
</div>`,

"9.6": `<div class="wrap">
  <div class="les-kicker">Chapter 9 · Lesson 9.6</div>
  <h1 class="les-title">The Whiteboard: Walking a Tree Three Ways</h1>
  <div class="les-meta">
    <span class="pill">whiteboard</span><span class="pill">~2 min</span>
    <span class="pill gold">watch, do not read</span><span class="pill">11 acts</span>
  </div>

  <p class="motto">A tree is what you get when one thing owns many things, and depth is the only number that decides its speed.</p>

  <p class="lead">A tree is what you get when one thing owns many things, and depth is the only number that decides its speed. That whole argument with the prose taken out, in eleven acts across four parts. Part 2 reads one seven-item tree four different ways and then takes its branching away. <strong>Part 3 runs it inside a web page, a routing tool that returns valid answers that are never the shortest, and a sync job that never finishes because the thing it is walking turned out not to be a tree.</strong></p>
</div>

<div class="reel" data-reel='{"title":"One shape, four readings, and the number that decides","speed":1600,"caption":"Eleven acts, about 1.5 minutes end to end. Part 2 reads one seven-item tree four different ways and then removes its branching. Part 3 runs it inside a web page, a routing tool that returns valid but never shortest answers, and a sync job that never finishes because the thing it is walking is not a tree.","acts":[{"part":"Part 1 · The idea","tab":"Ownership","title":"Act 1 · Nobody designs a tree","type":"reveal","speed":1650,"viz":{"maxChars":16,"gy":42,"nodes":[{"id":"r","label":"One thing owns many, and nothing is owned twice","col":0,"row":2,"kind":"dark"},{"id":"f","label":"A folder owns files and folders","col":1,"row":0,"kind":"accent"},{"id":"p","label":"A box owns the boxes inside it","col":1,"row":1,"kind":"accent"},{"id":"o","label":"A manager owns their reports","col":1,"row":3,"kind":"accent"},{"id":"d","label":"And depth is the only number that decides speed","col":2,"row":2,"kind":"gold"}],"edges":[{"from":"r","to":"f"},{"from":"r","to":"p"},{"from":"r","to":"o"},{"from":"r","to":"d"}]},"steps":[{"show":["r"],"look":["r"],"say":"One rule, and nobody wrote it down. <b>Exclusive ownership.</b>"},{"show":["r","f","p","o"],"found":["f","p","o"],"say":"Three things you used today. <b>None of them was designed as a tree.</b> Each is one because ownership in it is exclusive."},{"show":["r","f","p","o","d"],"found":["f","p","o"],"look":["d"],"say":"And every one of them charges the same way. <b>Depth is the only number that decides a tree speed.</b>"}]},{"part":"Part 2 · The methods","tab":"Depth","title":"Act 2 · Three touches, whatever it holds","type":"tree-walk","speed":1500,"unit":74,"countLabel":" touches","legend":[["where you are","look"],["walked","seen"],["reached","found"],["never touched","dead"]],"nodes":[{"id":"a","label":"50","x":3,"d":0},{"id":"b","label":"25","x":1,"d":1},{"id":"c","label":"75","x":5,"d":1},{"id":"d","label":"12","x":0,"d":2},{"id":"e","label":"37","x":2,"d":2},{"id":"f","label":"62","x":4,"d":2},{"id":"g","label":"88","x":6,"d":2}],"edges":[{"from":"a","to":"b"},{"from":"a","to":"c"},{"from":"b","to":"d"},{"from":"b","to":"e"},{"from":"c","to":"f"},{"from":"c","to":"g"}],"steps":[{"look":["a"],"count":1,"badge":"depth 0","say":"Seven items. Everything starts at the root, because there is nowhere else to start."},{"seen":["a"],"look":["b"],"dead":["c","f","g"],"count":2,"badge":"depth 1","say":"One step, and <b>the whole right side is now unreachable</b>. Three items ruled out, none of them examined."},{"seen":["a","b"],"found":["e"],"dead":["c","f","g","d"],"count":3,"badge":"3 touches, any leaf","say":"<b>Three touches, and every leaf is exactly three away.</b> A thousand items would be ten levels, because 2 to the 10 is 1,024."}]},{"part":"Part 2 · The methods","tab":"Preorder","title":"Act 3 · The parent speaks first","type":"tree-walk","speed":1500,"unit":74,"countLabel":" emitted","legend":[["taking its turn","look"],["emitted","seen"],["the sequence","found"]],"nodes":[{"id":"a","label":"50","x":3,"d":0},{"id":"b","label":"25","x":1,"d":1},{"id":"c","label":"75","x":5,"d":1},{"id":"d","label":"12","x":0,"d":2},{"id":"e","label":"37","x":2,"d":2},{"id":"f","label":"62","x":4,"d":2},{"id":"g","label":"88","x":6,"d":2}],"edges":[{"from":"a","to":"b"},{"from":"a","to":"c"},{"from":"b","to":"d"},{"from":"b","to":"e"},{"from":"c","to":"f"},{"from":"c","to":"g"}],"steps":[{"look":["a"],"count":1,"badge":"preorder: 50","say":"<b>Preorder.</b> The parent goes before either side is touched."},{"seen":["a","b"],"look":["d"],"count":3,"badge":"preorder: 50 25 12","say":"You are always told where you are before you are told what is there."},{"found":["a","b","c","d","e","f","g"],"count":7,"badge":"50 25 12 37 75 62 88","say":"<b>That sequence is a folder listing.</b> Every path announced before its contents, which is the only order a listing makes sense in."}]},{"part":"Part 2 · The methods","tab":"Inorder","title":"Act 4 · Sorted, and nothing sorted it","type":"tree-walk","speed":1500,"unit":74,"countLabel":" emitted","legend":[["taking its turn","look"],["emitted","seen"],["the sequence","found"]],"nodes":[{"id":"a","label":"50","x":3,"d":0},{"id":"b","label":"25","x":1,"d":1},{"id":"c","label":"75","x":5,"d":1},{"id":"d","label":"12","x":0,"d":2},{"id":"e","label":"37","x":2,"d":2},{"id":"f","label":"62","x":4,"d":2},{"id":"g","label":"88","x":6,"d":2}],"edges":[{"from":"a","to":"b"},{"from":"a","to":"c"},{"from":"b","to":"d"},{"from":"b","to":"e"},{"from":"c","to":"f"},{"from":"c","to":"g"}],"steps":[{"look":["d"],"count":1,"badge":"inorder: 12","say":"<b>Inorder.</b> Same tree, untouched. The left side goes entirely first."},{"seen":["d","b"],"look":["e"],"count":3,"badge":"inorder: 12 25 37","say":"Left, then the parent, then right. The root has still not been emitted."},{"found":["a","b","c","d","e","f","g"],"count":7,"badge":"12 25 37 50 62 75 88","say":"<b>It came out sorted, and nothing sorted anything.</b> Lesson 6.5 called this order kept as a shape, and this is the shape being read back."}]},{"part":"Part 2 · The methods","tab":"Postorder","title":"Act 5 · Children finish first","type":"tree-walk","speed":1500,"unit":74,"countLabel":" emitted","legend":[["taking its turn","look"],["emitted","seen"],["the sequence","found"]],"nodes":[{"id":"a","label":"50","x":3,"d":0},{"id":"b","label":"25","x":1,"d":1},{"id":"c","label":"75","x":5,"d":1},{"id":"d","label":"12","x":0,"d":2},{"id":"e","label":"37","x":2,"d":2},{"id":"f","label":"62","x":4,"d":2},{"id":"g","label":"88","x":6,"d":2}],"edges":[{"from":"a","to":"b"},{"from":"a","to":"c"},{"from":"b","to":"d"},{"from":"b","to":"e"},{"from":"c","to":"f"},{"from":"c","to":"g"}],"steps":[{"look":["d"],"count":1,"badge":"postorder: 12","say":"<b>Postorder.</b> Both sides go before the parent, so nothing finishes before what it owns."},{"seen":["d","e"],"look":["b"],"count":3,"badge":"postorder: 12 37 25","say":"12 and 37 are both out before 25 can take its turn."},{"found":["a","b","c","d","e","f","g"],"count":7,"badge":"12 37 25 62 88 75 50","say":"<b>The root is last.</b> That is the order a delete must use, and the order a total must use, because a folder size is not known until every child reports."}]},{"part":"Part 2 · The methods","tab":"Level order","title":"Act 6 · The one that refuses to dive","type":"tree-walk","speed":1500,"unit":74,"countLabel":" emitted","legend":[["this level","look"],["emitted","seen"],["a match","found"],["never reached","dead"]],"nodes":[{"id":"a","label":"50","x":3,"d":0},{"id":"b","label":"25","x":1,"d":1},{"id":"c","label":"75","x":5,"d":1},{"id":"d","label":"12","x":0,"d":2},{"id":"e","label":"37","x":2,"d":2},{"id":"f","label":"62","x":4,"d":2},{"id":"g","label":"88","x":6,"d":2}],"edges":[{"from":"a","to":"b"},{"from":"a","to":"c"},{"from":"b","to":"d"},{"from":"b","to":"e"},{"from":"c","to":"f"},{"from":"c","to":"g"}],"steps":[{"seen":["a"],"look":["b","c"],"count":3,"badge":"50, then 25 75","say":"<b>Both children before either of their children.</b> The three walks above would already be two levels down the left."},{"seen":["a","b","c"],"look":["d","e","f","g"],"count":7,"badge":"50 25 75 12 37 62 88","say":"Then the whole of depth two. Compare with Act 3 preorder: <b>only the root agrees.</b>"},{"seen":["a","b"],"found":["c"],"dead":["d","e","f","g"],"count":3,"badge":"nearest, guaranteed","say":"Find anything over 60. <b>75 matches at depth one and the bottom row was never reached.</b> Because every level above was finished first, no shallower match can be hiding beneath."}]},{"part":"Part 2 · The methods","tab":"Balance","title":"Act 7 · The same seven, never branching","type":"tree-walk","speed":1500,"unit":74,"countLabel":" touches","legend":[["where you are","look"],["walked","seen"],["reached","found"]],"nodes":[{"id":"n1","label":"50","x":0,"d":0},{"id":"n2","label":"25","x":1,"d":1},{"id":"n3","label":"75","x":2,"d":2},{"id":"n4","label":"12","x":3,"d":3},{"id":"n5","label":"37","x":4,"d":4},{"id":"n6","label":"62","x":5,"d":5},{"id":"n7","label":"88","x":6,"d":6}],"edges":[{"from":"n1","to":"n2"},{"from":"n2","to":"n3"},{"from":"n3","to":"n4"},{"from":"n4","to":"n5"},{"from":"n5","to":"n6"},{"from":"n6","to":"n7"}],"steps":[{"look":["n1"],"count":1,"badge":"still a tree","say":"The same seven values. One owner each, nothing owned twice. <b>This is still a tree.</b> It simply never branches."},{"seen":["n1","n2","n3","n4","n5"],"look":["n6"],"count":6,"badge":"6 touches, still going","say":"Six touches, and nothing has been ruled out at any point, because <b>a node with one child has no side to reject.</b>"},{"seen":["n1","n2","n3","n4","n5","n6"],"found":["n7"],"count":7,"badge":"7 touches vs 3","say":"<b>Seven touches to reach what took three in Act 2.</b> A million items this way is a million levels against twenty. Lesson 6.2 is exactly what this became."}]},{"part":"Part 3 · The same rules in things you used today","tab":"This is Act 2, on a page","title":"Act 8 · Forty wrappers and one sentence","type":"tree-walk","speed":1500,"unit":78,"countLabel":" levels down","legend":[["where the browser is","look"],["walked through","seen"],["what you came to read","found"],["not on this path","dead"]],"nodes":[{"id":"a","label":"page","x":2,"d":0},{"id":"b","label":"main","x":1,"d":1},{"id":"c","label":"side","x":3,"d":1},{"id":"d","label":"wrap","x":0,"d":2},{"id":"e","label":"card","x":2,"d":2},{"id":"f","label":"box","x":4,"d":2},{"id":"g","label":"text","x":2,"d":3}],"edges":[{"from":"a","to":"b"},{"from":"a","to":"c"},{"from":"b","to":"d"},{"from":"b","to":"e"},{"from":"c","to":"f"},{"from":"e","to":"g"}],"steps":[{"look":["a"],"count":0,"badge":"a page is a tree","say":"<b>This is Act 2.</b> A page is boxes inside boxes, and every box sits inside exactly one box."},{"seen":["a","b","e"],"found":["g"],"dead":["c","f","d"],"count":3,"badge":"3 levels to the text","say":"The sentence you came to read is three levels below the page."},{"seen":["a","b","e"],"found":["g"],"dead":["c","f","d"],"count":3,"badge":"now make it forty","say":"<b>Now make it forty.</b> Same sentence on screen, nothing different to a reader, and every operation touching that text walks forty levels instead of three."}]},{"part":"Part 3 · The same rules in things you used today","tab":"The wrong choice","title":"Act 9 · A valid route nobody would drive","type":"reveal","speed":1600,"viz":{"maxChars":17,"gy":42,"nodes":[{"id":"q","label":"Find a path between two teams","col":0,"row":1,"kind":"gold"},{"id":"d","label":"It dives: follows one branch to the end","col":1,"row":1,"kind":"warn"},{"id":"v","label":"Every route it returns is genuinely valid","col":2,"row":0,"kind":"accent"},{"id":"s","label":"And none of them is the shortest","col":2,"row":2,"kind":"bad"},{"id":"f","label":"Sweep level by level. First found is then shortest","col":3,"row":1,"kind":"gold"}],"edges":[{"from":"q","to":"d"},{"from":"d","to":"v"},{"from":"d","to":"s"},{"from":"s","to":"f"}]},"steps":[{"show":["q","d"],"look":["d"],"say":"A tool routes approvals through a reporting structure. <b>It explores deeper before wider.</b>"},{"show":["q","d","v"],"found":["v"],"say":"Every path it returns is real and connected. <b>Nobody could find a bug, because there is no bug in the path.</b>"},{"show":["q","d","v","s"],"found":["v"],"bad":["s"],"say":"But the first route a dive reaches is <b>just the first one</b>, not the shortest. Worse on deep divisions, fine on flat ones, which is the signature exactly."},{"show":["q","d","v","s","f"],"bad":["s"],"found":["f"],"say":"<b>Correct and shortest are different requirements.</b> Only Act 6 can promise the second, because finishing every level first means nothing nearer was skipped."}]},{"part":"Part 3 · The same rules in things you used today","tab":"When it is not a tree","title":"Act 10 · The sync that never finishes","type":"reveal","speed":1600,"viz":{"maxChars":17,"gy":42,"nodes":[{"id":"s","label":"A sync walks one customer folders","col":0,"row":1,"kind":"gold"},{"id":"n","label":"It never finishes, and never errors","col":1,"row":1,"kind":"warn"},{"id":"c","label":"A shortcut points at a folder above itself","col":2,"row":0,"kind":"bad"},{"id":"o","label":"So ownership is not exclusive. Not a tree","col":2,"row":2,"kind":"bad"},{"id":"f","label":"Keep a set of where you have been. Lesson 8.4","col":3,"row":1,"kind":"gold"}],"edges":[{"from":"s","to":"n"},{"from":"n","to":"c"},{"from":"c","to":"o"},{"from":"o","to":"f"}]},"steps":[{"show":["s","n"],"look":["n"],"say":"It runs until somebody stops it. <b>No crash, no error</b>, and the storage is not large."},{"show":["s","n","c","o"],"bad":["c","o"],"say":"A shortcut points at a folder above itself, so <b>ownership stopped being exclusive and the structure loops.</b>"},{"show":["s","n","c","o","f"],"bad":["c","o"],"found":["f"],"say":"<b>Never failing is the diagnosis.</b> A job hitting a real limit errors; a job going round a circle looks healthy from the inside forever. Lesson 4.4 said it, and Lesson 8.4 costs one question per folder."}]},{"part":"Part 4 · The map","tab":"The map","title":"Act 11 · One shape, and the two numbers","type":"reveal","speed":1650,"viz":{"maxChars":16,"gy":42,"nodes":[{"id":"q","label":"One owner each, nothing owned twice?","col":0,"row":2,"kind":"gold"},{"id":"n","label":"No: a graph. Chapter 12 has the tools","col":1,"row":0,"kind":"bad"},{"id":"y","label":"Yes: a tree, and depth decides everything","col":1,"row":3,"kind":"accent"},{"id":"w","label":"Reading it all: one visit each, any order you choose","col":2,"row":1,"kind":"accent"},{"id":"o","label":"Reaching one thing: you pay THAT depth","col":2,"row":3,"kind":"accent"},{"id":"b","label":"And the height is whatever the branching was spent on","col":3,"row":2,"kind":"dark"}],"edges":[{"from":"q","to":"n"},{"from":"q","to":"y"},{"from":"y","to":"w"},{"from":"y","to":"o"},{"from":"w","to":"b"},{"from":"o","to":"b"}]},"steps":[{"show":["q"],"look":["q"],"say":"One question decides whether any of this applies."},{"show":["q","n"],"bad":["n"],"say":"Two owners, or something inside itself, and <b>none of it holds.</b> Depth is not defined and a walk can arrive twice."},{"show":["q","n","y","w","o"],"bad":["n"],"found":["y","w","o"],"say":"Otherwise: reading it all costs one visit each and the order is yours to choose. Reaching one thing costs <b>that thing depth</b>, not the height."},{"show":["q","n","y","w","o","b"],"bad":["n"],"found":["y","w","o","b"],"say":"<b>A tree is what you get when one thing owns many things, and depth is the only number that decides its speed.</b> Twenty levels for a million, or a million, and the difference is only ever whether the branching was spent."}]}]}'></div>

<div class="wrap" style="padding-top:34px;">
  <h2><span class="ix gold">✓</span> What You Just Watched</h2>

  <div class="tbl-wrap"><table>
    <tr><th>The reading</th><th>What it guarantees</th><th>Acts</th><th>Where it came back in Part 3</th></tr>
    <tr><td>Depth</td><td>Three touches, whatever the tree holds</td><td>2</td><td>Act 8, a page where the text sits forty levels down</td></tr>
    <tr><td>Preorder</td><td>A parent before anything it owns</td><td>3</td><td>Every folder listing you have ever read</td></tr>
    <tr><td>Inorder</td><td>A search tree comes out sorted, unsorted by anything</td><td>4</td><td>Lesson 6.5 order kept as a shape, read back</td></tr>
    <tr><td>Postorder</td><td>Everything owned finishes before its owner</td><td>5</td><td>Deleting a folder, and totalling one</td></tr>
    <tr><td>Level order</td><td>The first match found is the shallowest one</td><td>6</td><td>Act 9, where a dive returned a valid but longer route</td></tr>
    <tr><td>Branching, unspent</td><td>Nothing. A step that eliminates nothing</td><td>7</td><td>Act 8 again, where nesting is depth with no branching</td></tr>
  </table>
  <div class="tbl-cap">Read the second column down the page. Every walk in Part 2 costs exactly the same and they differ only in what they promise, which is why choosing wrongly never looks slow. It looks like a bug in something else.</div></div>

  <div class="callout accent">
    <div class="ch">The line to carry out of this chapter</div>
    <p>Nobody designs a tree. <strong>You get one free the moment ownership is exclusive</strong>, and from then on depth is the only number that decides its speed. Twenty levels for a million items, or a million levels for the same million, and the difference is only ever whether the branching was spent.</p>
  </div>

  <div class="callout warn">
    <div class="ch">And the line from Act 10</div>
    <p>The sync never finished and never errored, and never failing was the diagnosis rather than a mystery. <strong>A job hitting a real limit fails. A job going round a circle looks perfectly healthy from the inside, forever</strong>, because a loop is invisible to a walk that keeps no memory of where it has been.</p>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">Acts 3, 4, 5 and 6 read one unchanged tree and produce four different sequences. What separates them?</div>
    <div class="opt" data-i="0">Each one visits a different subset of the nodes</div>
    <div class="opt" data-i="1">Only when the parent takes its turn, and for level order, whether the waiting work is held in a queue or a pile</div>
    <div class="opt" data-i="2">Each one is faster or slower depending on the shape of the tree</div>
    <div class="qexp">All four visit every node exactly once, so they are indistinguishable on a stopwatch. Three of them differ only in whether the parent speaks before, between or after its two sides. The fourth is a genuinely different machine: children join the back of a queue and the next node comes off the front, which is Lesson 5.2, and swapping that queue for Lesson 5.1's pile turns it back into a diving walk.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">Act 7 shows the same seven values taking seven touches where Act 2 took three. What changed?</div>
    <div class="opt" data-i="0">The values were reordered, so the search had further to go</div>
    <div class="opt" data-i="1">The tree became invalid, because a tree must branch</div>
    <div class="opt" data-i="2">Nothing except the shape. Every node has one child, so stepping past it eliminates nothing, and the branching was never spent</div>
    <div class="qexp">It is still a tree by the definition in Act 1: one owner each, nothing owned twice. A node with two children throws away half of what remains when you step past it, and a node with one child has no side to reject, so the step costs the same and buys nothing. At a million items that is twenty touches against a million, which is Lesson 6.2 arriving inside a structure that still looks like it should be fast.</div>
  </div>
__NAV__
</div>`
