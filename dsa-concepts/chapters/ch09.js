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
