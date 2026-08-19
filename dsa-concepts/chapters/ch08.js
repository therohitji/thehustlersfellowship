/* ===== Chapter 08 - Hashing: Finding Without Looking - DSA Concepts (2026) =====
   Through line: hashing trades memory and order for the one thing nothing else gives you,
   an answer without a search.
   Ten blocks per concept lesson, then the whiteboard. See CONSISTENCY.md.
   RULES: no em-dashes; no backticks in content; no dollar-brace; no apostrophes inside
   a data-viz, data-anim or data-reel payload. */

"8.1": `<div class="wrap">
  <div class="les-kicker">Chapter 8 · Lesson 8.1</div>
  <h1 class="les-title">The Instant Answer: Turning a Key Into an Address</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
  </div>

  <p class="motto">Every other structure in this course answers where is it by looking. This one computes the answer and never looks at all.</p>

  <p class="lead">Lesson 6.2 left you with a number: a signup form checking a hundred thousand registered addresses pays about 95,000 looks per check, because the common answer is the expensive one. It handed the fix to this chapter by name. This is that fix, and the number it replaces 95,000 with is one.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">The cloakroom that never searches.</div>
  <p>You hand your coat to a cloakroom attendant and they give you ticket 47. When you come back, <strong>nobody searches for your coat.</strong> They walk to hook 47. There is no hunting, no narrowing, no checking of other hooks, and it takes exactly the same time whether the cloakroom holds fifty coats or five thousand.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Nobody looks for your coat","width":820,"height":280,"items":[{"icon":"person","x":120,"y":126,"kind":"gold","label":"you, holding ticket 47"},{"icon":"shelf","x":360,"y":124,"kind":"accent","label":"hook 47"},{"icon":"doc","x":600,"y":124,"kind":"muted","label":"the other 4,999 hooks"},{"icon":"person","x":760,"y":126,"kind":"box","label":"never examined"}],"arrows":[{"x1":180,"y1":126,"x2":296,"y2":126,"style":"green","label":"walk straight there"}],"caption":"The ticket is not a name and it is not a description. It is an address, and it was decided at the moment the coat arrived rather than looked up when you came back. That is the entire idea of this chapter, and everything else in it is a consequence."}'></div>

  <p>The ticket is not a name. <strong>It is an address, and it was decided when the coat arrived</strong> rather than looked up when you returned.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">Compute the address from the thing itself.</div>
  <p>Every structure so far answered <em class="k">where is it</em> by looking: a scan looked everywhere, binary search looked in halves, a tree looked down branches. <strong>This one does not look anywhere.</strong> It takes the key, does a small piece of arithmetic on it, and that arithmetic IS the address.</p>

  <div class="viz" data-viz='{"type":"arch","title":"Two ways to answer where is it","maxChars":18,"nodes":[{"id":"q","label":"Where is it?","col":0,"row":1,"kind":"dark"},{"id":"l","label":"Look for it: scan, halve, or walk a shape","col":1,"row":0,"kind":"accent"},{"id":"c","label":"Compute it: do arithmetic on the key itself","col":1,"row":2,"kind":"gold"},{"id":"lr","label":"Cost grows with how much you have","col":2,"row":0,"kind":"accent"},{"id":"cr","label":"Cost does not mention how much you have, at all","col":2,"row":2,"kind":"gold"},{"id":"cd","label":"And it can only ever answer about one exact key","col":2,"row":3,"kind":"bad"}],"edges":[{"from":"q","to":"l","label":"Chapters 6 and 7"},{"from":"q","to":"c","label":"this chapter","style":"green"},{"from":"l","to":"lr"},{"from":"c","to":"cr","style":"green"},{"from":"c","to":"cd","label":"and demands"}],"caption":"The bottom right node is the counterweight and it arrives in the same breath as the benefit. The address is computed from one exact key, so a table like this can never answer everything between two dates, or what is nearest to this, or show me these in order. Lesson 6.8 already priced it: one step, and no ranges ever."}'></div>

  <p>Read the bottom node now rather than later. <strong>The cost never mentions how much you have</strong>, and the price for that is everything Chapter 6 spent nine lessons building.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Four names, eight boxes, and no searching anywhere.</div>
  <p>Eight numbered boxes and a rule anybody can follow: <strong>add up the letters, then take the remainder when you divide by eight.</strong> The letter a counts 1, b counts 2, and so on. Watch where each name goes, and notice that nothing is ever compared with anything.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Four names, computed straight into their boxes","speed":1700,"big":true,"data":["ana","raj","sam","mia"],"capacity":8,"countLabel":" looks","pointerLabels":{"i":"computing"},"legend":[["being placed","look"],["stored","found"],["read back in one step","seen"]],"steps":[{"capacity":8,"order":[null,null,null,null,null,null,null,null],"count":0,"say":"Eight empty boxes, numbered 0 to 7. <b>Nothing is stored anywhere yet</b>, and the boxes are not in any order because they do not need to be."},{"capacity":8,"order":[0,null,null,null,null,null,null,null],"look":[0],"count":0,"say":"<b>ana.</b> a is 1, n is 14, a is 1, so 16. Sixteen divided by eight leaves nothing, so ana goes in box 0. <b>Not one box was examined to decide that.</b>"},{"capacity":8,"order":[0,null,null,null,null,1,null,null],"found":[0],"look":[1],"count":0,"say":"<b>raj.</b> 18 plus 1 plus 10 is 29. Twenty nine divided by eight leaves 5, so raj goes in box 5. The arithmetic chose the box, and the box was empty because nothing else had computed to 5."},{"capacity":8,"order":[0,2,null,null,null,1,null,null],"found":[0,1],"look":[2],"count":0,"say":"<b>sam.</b> 19 plus 1 plus 13 is 33, which leaves 1. Box 1. <b>The counter has not moved</b>, because storing something here has never involved looking at anything."},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[0,2,1,3],"count":0,"badge":"4 stored, 0 looks","say":"<b>mia.</b> 13 plus 9 plus 1 is 23, which leaves 7. Box 7. Four names stored and the number of boxes examined is still zero."},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"seen":[2],"found":[0,1,3],"count":1,"badge":"is sam here? 1 look","say":"Now the question Lesson 6.2 could not answer cheaply: <b>is sam in here?</b> Add the letters, take the remainder, get 1, and look in box 1. <b>One look, and the answer is yes.</b>"},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[0,2,1,3],"count":1,"badge":"is bob here? 1 look","say":"And bob? 2 plus 15 plus 2 is 19, which leaves 3. <b>Box 3 is empty, so the answer is no</b>, in exactly one look. Lesson 6.2 needed all hundred thousand to say that."}],"caption":"The counter is the whole lesson. Storing four names cost zero looks and answering two questions cost one look each, on a table of eight or of eight million. Nothing here was searched, narrowed, halved or walked, because the address was never unknown."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Where the address comes from.</div>

  <div class="viz" data-viz='{"type":"seq","title":"One key, two questions, and the same arithmetic both times","actors":[{"label":"The key: sam","kind":"gold"},{"label":"The arithmetic","kind":"accent"},{"label":"The table","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"storing: where do I go","style":"gold"},{"from":1,"to":0,"label":"33, which leaves 1. Box 1","style":"green"},{"from":0,"to":2,"label":"put me in box 1"},{"from":0,"to":1,"label":"later, reading: where would I be","style":"gold"},{"from":1,"to":0,"label":"33, which leaves 1. Box 1","style":"green"},{"from":0,"to":2,"label":"look only in box 1","style":"green"}],"caption":"The same key always produces the same address, which is the only property that makes any of this work. Storing and reading run the identical arithmetic, so the reader never has to remember where anything went. The table does not remember either."}'></div>

  <p><strong>Nobody records where anything went.</strong> The same key always computes to the same box, so the address can be recomputed on demand rather than stored, and that is why the table needs no index, no order and no map of itself.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">What the arithmetic has to be, and what it does not.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What the rule must do</th><th>Why</th><th>What happens if it does not</th></tr>
    <tr><td>Give the same key the same box, always</td><td>Reading recomputes the address rather than remembering it</td><td>Nothing can ever be found again. This is the only unbreakable rule</td></tr>
    <tr><td>Spread different keys across the boxes</td><td>So the boxes fill evenly instead of piling up</td><td>Everything lands in a few boxes, and Lesson 8.2 is about that</td></tr>
    <tr><td>Be cheap to compute</td><td>It runs on every single store and every single read</td><td>The one step becomes an expensive step, and the advantage goes</td></tr>
    <tr><td>Nothing else at all</td><td>It does not need to be clever, secret, or reversible</td><td>Nothing. Those are different jobs for different tools</td></tr>
  </table>
  <div class="tbl-cap">The letter-adding rule in block 3 satisfies the first and third rows and is mediocre at the second, which is exactly the honest situation and the reason Lesson 8.2 exists. A rule that spreads keys badly is not broken, it is slow, and the difference between those two is the whole of the next lesson.</div></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Settling the bill from Lesson 6.2.</div>
  <p>A signup form checking whether an address is already registered, against 100,000 records. Lesson 6.2 priced it honestly: nine checks in ten are a <em class="k">no</em>, and a no reads everything, so the real cost is <strong>about 95,000 looks per check.</strong></p>

  <div class="viz" data-viz='{"type":"card","title":"The same check, before and after","eyebrow":"100,000 REGISTERED ADDRESSES","badge":"per signup","width":560,"rows":[{"k":"Scanning, from Lesson 6.2","v":"about 95,000 looks","tone":"bad","bar":1},{"k":"Computing the address","v":"1 look","tone":"good","bar":0.00001},{"k":"At ten million records, scanning","v":"about 9,500,000 looks","tone":"bad","bar":1},{"k":"At ten million records, computing","v":"still 1 look","tone":"good","bar":0.00001},{"k":"And what it costs you","v":"boxes you keep empty on purpose","tone":"bad","bar":0.4}],"caption":"Every bar is drawn against a maximum of 95,000. Rows two and four are the same number, and that is the point: the cost of a lookup here does not mention how much you are storing. Row five is the bill, and Lesson 8.3 is where it gets a name and a number."}'></div>

  <p>In the Chapter 2 currency this is <em class="g">O(1)</em>, the shape Lesson 2.2 named as the one where the pile does not appear in the cost at all. <strong>And it is the only structure in this course that reaches it for finding something.</strong> The price is in row five: a table that is nearly full stops behaving like this, so you keep boxes empty deliberately, and Lesson 6.8 already wrote that down as <em class="k">spare memory, permanently.</em></p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places you have used today without noticing.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Computing the address, in things you already use","unit":178,"nodes":[{"id":"c","label":"The key computes its own address","x":2,"y":1,"kind":"dark"},{"id":"e","label":"Is this email already registered","x":0,"y":0,"kind":"gold"},{"id":"s","label":"Anything you look up by an exact name or id","x":0,"y":2,"kind":"accent"},{"id":"d","label":"Have I already processed this message","x":4,"y":0,"kind":"accent"},{"id":"a","label":"A cache: have I computed this answer before","x":4,"y":2,"kind":"accent"},{"id":"n","label":"And where it cannot help: everything between two dates","x":2,"y":3,"kind":"bad"}],"edges":[{"from":"c","to":"e","label":"Lesson 6.2 debt, settled","style":"gold"},{"from":"c","to":"s","label":"one step, any size","style":"green"},{"from":"c","to":"d","label":"Lesson 8.4 builds it"},{"from":"c","to":"a","label":"Lesson 8.4 builds it"},{"from":"c","to":"n","label":"never. No order exists"}],"caption":"The red node is not a limitation to work around, it is the thing you sold. Boxes were filled by arithmetic rather than by order, so neighbouring boxes hold unrelated things and there is no such thing as the next one. Chapter 6 sorted branch and this branch are genuinely different purchases."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the tell is a cost that ignores the pile.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"Looking up by id is instant, by date range it crawls"</td><td>Ask what the lookup is keyed on</td><td>Computed addresses answer exact keys and nothing else</td></tr>
    <tr><td>"Ten times the users and the lookup did not change"</td><td>Say the new wait out loud before measuring</td><td>Correct behaviour. The cost never mentions the pile</td></tr>
    <tr><td>"It uses far more memory than the data itself"</td><td>Ask how full the table is kept</td><td>Empty boxes on purpose. Lesson 8.3 names the number</td></tr>
    <tr><td>"We cannot show them in order without sorting again"</td><td>Ask what order the boxes are in</td><td>None. Order was the thing that was sold</td></tr>
    <tr><td>"The duplicate check got slow as we grew"</td><td>Ask whether it scans or computes</td><td>Lesson 6.2 exactly, and this lesson is the fix</td></tr>
    <tr><td>"Sometimes one particular lookup is slower"</td><td>Ask what else is in that box</td><td>Two keys computed to the same box. Lesson 8.2</td></tr>
  </table>
  <div class="tbl-cap">Rows one and four are the same sale seen from two sides, and neither is a fault. Row six is the crack in the story this lesson has been telling, and the next lesson is entirely about it.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">The check that got slower every month, for four years.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our signup form has a duplicate email check that has been getting slower every month for four years. It is now the slowest thing on the page. Nobody has touched that code. We have added indexes and it helped for a while, and it is slow again. The list is about 100,000 addresses and it grows by a few thousand a month."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Four years of getting slower, and nothing changed","lanes":[{"label":"The team"},{"label":"You"},{"label":"The form"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Slower every month for four years, code untouched"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: does a yes cost less than a no?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"No. Both answers cost the same"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Then it reads everything, and the no is the common case"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"About 95,000 looks per signup"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"The question is only ever is this exact key present"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"So compute the address instead of searching for it"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"This is Lesson 6.2 block 9 arriving again with the fix attached. The diagnosis needed no profiler: a scan that stops early is visibly faster on a hit, so equal timings meant nothing was stopping early and the whole list was being read either way."}'></div>

  <p><strong>The question was never a search question.</strong> It asks whether one exact key is present, which is the one shape a computed address answers in a single step. Nothing about the code got worse over four years; the pile grew, and a cost that mentions the pile grows with it. A cost that does not mention the pile does not.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It read the question rather than the code. <strong>Is this exact key present</strong> has no range in it, no ordering, no nearest, and no sorting, so every expensive thing Chapter 6 taught is unnecessary here. The indexes helped for a while because they made the looking cheaper, and this makes the looking disappear.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, ten boxes and a marker</div>
    <p>Draw ten boxes on a page and number them 0 to 9. <strong>Round one:</strong> take ten words and for each one, add up the letter positions and write the word in the box matching the last digit of that total. Count how many boxes you examined while placing them. The answer should be zero. <strong>Round two:</strong> have somebody call out one of the words and find it, counting your looks. <strong>Round three:</strong> now ask for every word that starts with the letter s, and notice that your ten boxes are no help at all. That third round is the price, and it is what the whole of Chapter 6 was selling.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A duplicate email check against 100,000 addresses has been getting slower every month for four years, with the code untouched. Why does computing an address fix it?</div>
    <div class="opt" data-i="0">Because the arithmetic runs faster than a comparison does</div>
    <div class="opt" data-i="1">Because the question only asks whether one exact key is present, which an address answers in one step, and the cost never mentions how much is stored</div>
    <div class="opt" data-i="2">Because the addresses can be kept sorted, which allows halving</div>
    <div class="qexp">Lesson 6.2 priced this at about 95,000 looks per check, because nine answers in ten are a no and only a no has to read everything. The question contains no range, no ordering and no nearest, so nothing Chapter 6 built is needed. The address is computed from the key itself, so the lookup does not grow when the pile does, which is why four years of growth changed nothing about the code and everything about the wait.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">What is the one property the address rule absolutely must have?</div>
    <div class="opt" data-i="0">It must spread keys evenly across the boxes</div>
    <div class="opt" data-i="1">It must be difficult to reverse, so keys cannot be recovered</div>
    <div class="opt" data-i="2">It must give the same key the same box every single time</div>
    <div class="qexp">Nobody records where anything was put. Reading recomputes the address from the key, so if the same key ever produced a different box the item could never be found again. Spreading keys evenly matters enormously, but a rule that spreads badly is slow rather than broken, and that difference is the entire subject of the next lesson. Being hard to reverse is a different job for a different tool.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Everything above rested on a quiet assumption: that when a name computed to a box, the box was empty. <strong>Add one more name and that stops being true</strong>, and it is not bad luck, not a flaw in the rule, and not something anybody can engineer away. The next lesson is what a table does about it.</p>
  </div>
__NAV__
</div>`
,

"8.2": `<div class="wrap">
  <div class="les-kicker">Chapter 8 · Lesson 8.2</div>
  <h1 class="les-title">Collisions: When Two Keys Want the Same Box</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">A collision is not bad luck and it is not a flaw in the rule. It is arithmetic, and it arrives far earlier than anybody expects.</p>

  <p class="lead">Lesson 8.1 rested on a quiet assumption: that when a name computed to a box, the box was empty. This lesson is what happens when it is not, and the first surprise is how soon that happens. By the end you can say why every hash table is a collision strategy wearing a lookup as a disguise.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Two people, one shared birthday.</div>
  <p>Put twenty three people in a room and there is a slightly better than even chance that two of them share a birthday. Most people guess you would need a hundred and fifty. <strong>There are 365 possible days and only twenty three people</strong>, so the room is six percent full, and a clash is already more likely than not.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Twenty three people, 365 days, and a clash more likely than not","width":820,"height":280,"items":[{"icon":"person","x":130,"y":126,"kind":"gold","label":"twenty three people"},{"icon":"shelf","x":390,"y":124,"kind":"accent","label":"365 possible days"},{"icon":"person","x":640,"y":126,"kind":"bad","label":"two of them share one"}],"arrows":[{"x1":200,"y1":126,"x2":320,"y2":126,"style":"green","label":"six percent full"},{"x1":470,"y1":126,"x2":576,"y2":126,"style":"gold","label":"and it is already even odds"}],"caption":"Nobody is unlucky in that room. The reason is that a clash does not need two people to want one particular day, it needs any two people to want any one day, and there are far more pairs of people than there are people. A hash table is that room, and its boxes are the days."}'></div>

  <p>Nobody in that room is unlucky. <strong>A clash does not need two people to want one particular day.</strong> It needs any two to want any one day, and there are far more pairs than people.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">Two keys, one box, and no way to prevent it.</div>
  <p>The rule in Lesson 8.1 takes a key of any kind and produces one of eight boxes. There are more possible names than there are boxes, <strong>so some names must share.</strong> That is not a weakness of the letter-adding rule. It is true of every rule, and it would still be true if the rule were perfect.</p>

  <div class="viz" data-viz='{"type":"arch","title":"Why it cannot be engineered away","maxChars":18,"nodes":[{"id":"k","label":"Endlessly many possible keys","col":0,"row":1,"kind":"gold"},{"id":"b","label":"A fixed number of boxes","col":1,"row":1,"kind":"accent"},{"id":"c","label":"So some keys must share a box","col":2,"row":1,"kind":"bad"},{"id":"g","label":"A better rule spreads them more evenly","col":2,"row":0,"kind":"accent"},{"id":"n","label":"But it never makes sharing impossible","col":3,"row":0,"kind":"bad"},{"id":"a","label":"So every table needs an answer for when it happens","col":3,"row":1,"kind":"dark"}],"edges":[{"from":"k","to":"b","label":"squeezed into"},{"from":"b","to":"c","label":"therefore"},{"from":"c","to":"g","label":"a better rule helps"},{"from":"g","to":"n","label":"but"},{"from":"c","to":"a","label":"so","style":"green"}],"caption":"Read the top right node twice. A good rule reduces how often two keys share a box and can never reduce it to zero, because there are more things you might store than there are places to put them. Every design decision in the rest of this chapter is an answer to the bottom right node."}'></div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">One more name, and the assumption breaks.</div>
  <p>The same table from Lesson 8.1, with the same four names already in it. Now add <strong>leo</strong>: l is 12, e is 5, o is 15, so 32, which divided by eight leaves nothing. <strong>Box 0.</strong> And ana is already there.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"leo computes to box 0, and ana is already in it","speed":1700,"big":true,"data":["ana","raj","sam","mia","leo"],"capacity":8,"countLabel":" boxes touched","pointerLabels":{"i":"probing"},"legend":[["being placed","look"],["stored","found"],["occupied, so keep walking","bad"],["where it settled","seen"]],"steps":[{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[0,2,1,3],"count":0,"say":"Lesson 8.1 left the table like this. Four names, four boxes, and four empty ones. <b>Everything so far has assumed the computed box was free.</b>"},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[2,1,3],"bad":[0],"look":[4],"count":1,"say":"<b>leo adds up to 32, which leaves nothing, so box 0.</b> And ana is sitting in it. Nothing has gone wrong: two different names computed to the same address, which is the arithmetic working exactly as described."},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[1,3],"bad":[0,2],"look":[4],"count":2,"say":"One answer is to walk. <b>Box 0 is taken, so try box 1.</b> That holds sam, so it is taken too. The counter is moving now, and in Lesson 8.1 it never did."},{"capacity":8,"order":[0,2,4,null,null,1,null,3],"found":[0,2,1,3],"seen":[4],"count":3,"badge":"3 boxes touched","say":"<b>Box 2 is empty, so leo lives there.</b> Three boxes touched instead of one. And notice what that did to reading: to find leo later you compute 0, find ana, and have to keep walking too."},{"capacity":8,"order":[0,2,4,null,null,1,null,3],"found":[0,1,3],"seen":[2],"bad":[4],"count":3,"badge":"and the cost is now shared","say":"<b>The cost is no longer a property of leo alone.</b> ana was stored first and is still one look, sam is still one, and leo is three, on the same table, with the same rule. The lookup time now depends on what else arrived and when."}],"caption":"The counter is the whole difference from Lesson 8.1. Storing cost nothing there and reading cost one look, always. Here both depend on what is already in the table, which is why the next lesson is about how full it is allowed to get."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">The other answer: let the box hold more than one thing.</div>
  <p>Walking to the next free box is one strategy. The other is to stop insisting that a box holds one item. <strong>Let it hold a chain</strong>, which is exactly the structure Chapter 4 built, and which its own knowledge graph already listed a hash table under.</p>

  <div class="board" data-anim='{"type":"graph-walk","title":"The other answer: box 0 holds a chain","speed":1600,"directed":true,"unit":124,"legend":[["the box you computed","look"],["walking the chain","seen"],["found it","found"]],"nodes":[{"id":"b0","label":"0","x":0,"y":0},{"id":"b1","label":"1","x":1,"y":0},{"id":"b2","label":"2","x":2,"y":0},{"id":"b5","label":"5","x":3,"y":0},{"id":"ana","label":"ana","x":0,"y":1},{"id":"leo","label":"leo","x":0,"y":2},{"id":"sam","label":"sam","x":1,"y":1},{"id":"raj","label":"raj","x":3,"y":1}],"edges":[{"from":"b0","to":"ana"},{"from":"ana","to":"leo"},{"from":"b1","to":"sam"},{"from":"b5","to":"raj"}],"steps":[{"edges":["b0-ana","ana-leo","b1-sam","b5-raj"],"say":"Same four boxes, and box 0 now holds <b>a chain of two</b> rather than one name. Nothing was moved and nothing walked to a different box."},{"edges":["b0-ana","ana-leo","b1-sam","b5-raj"],"look":["b0"],"say":"Reading leo: compute 32, take the remainder, get box 0. <b>One step to the box, exactly as in Lesson 8.1.</b>"},{"edges":["b0-ana","ana-leo","b1-sam","b5-raj"],"seen":["b0","ana"],"look":["leo"],"say":"Then walk the chain: ana is not leo, so follow to the next one. <b>That walk is Lesson 4.1, and it costs one hop per name in the box.</b>"},{"edges":["b0-ana","ana-leo","b1-sam","b5-raj"],"seen":["b0","ana"],"found":["leo"],"say":"Found. <b>One step plus one hop.</b> And the important part: sam and raj are untouched, so their lookups are still exactly one step. The cost of a collision stayed inside the box it happened in."}],"caption":"This is the difference between the two strategies in one picture. Walking to the next free box spreads the cost of a collision into boxes that had nothing to do with it. Keeping a chain confines the cost to the box where the clash actually happened."}'></div>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Two answers, and what each one is willing to pay.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The strategy</th><th>What it does</th><th>What it costs</th></tr>
    <tr><td>Walk to the next free box</td><td>Keeps everything inside the table itself</td><td>A collision makes OTHER keys slower, and clashes clump together</td></tr>
    <tr><td>Let the box hold a chain</td><td>Confines the clash to the box it happened in</td><td>A chain per box, which is Chapter 4 memory cost on every entry</td></tr>
    <tr><td>Either one, on a table kept mostly empty</td><td>Almost never has to do anything</td><td>Empty boxes. This is Lesson 8.3</td></tr>
  </table>
  <div class="tbl-cap">The third row is where this chapter is heading and it matters more than the choice between the first two. Both strategies are fine when clashes are rare and both degrade when the table fills, so the number that decides a hash table is not which answer it uses but how much room it is given.</div></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">How soon is soon.</div>
  <p>The birthday room is the intuition. Here is the arithmetic, and it is worse than most people expect. <strong>In a table of eight boxes, by the fourth key a collision is already more likely than not.</strong></p>

  <div class="viz" data-viz='{"type":"card","title":"The chance that at least two keys share a box","eyebrow":"BEFORE THE TABLE IS ANYWHERE NEAR FULL","badge":"more likely than not","width":560,"rows":[{"k":"8 boxes, 3 keys stored","v":"about 34 percent","tone":"good","bar":0.34},{"k":"8 boxes, 4 keys stored","v":"about 59 percent","tone":"bad","bar":0.59},{"k":"100 boxes, 12 keys stored","v":"about 50 percent","tone":"bad","bar":0.5},{"k":"365 boxes, 23 keys, the birthday room","v":"about 51 percent","tone":"bad","bar":0.51},{"k":"1,000 boxes, 40 keys stored","v":"about 55 percent","tone":"bad","bar":0.55}],"caption":"Every bar is a probability rather than a cost. Read the last row and hold on to it: a thousand boxes holding only forty things is four percent full, and a collision has already happened more likely than not. Collisions are not an edge case, they are the normal condition of every hash table you will ever meet."}'></div>

  <p>Four percent full, and a clash is the expected outcome. <strong>So a hash table is not a lookup with an occasional collision problem.</strong> It is a collision strategy that happens to answer lookups, and Lesson 8.1 showed you the easy half.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places, and one of them was Chapter 4 all along.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"What a table does when two keys clash","unit":178,"nodes":[{"id":"c","label":"Two keys, one box","x":2,"y":1,"kind":"dark"},{"id":"ch","label":"A chain in the box, which Chapter 4 already built","x":0,"y":0,"kind":"gold"},{"id":"w","label":"Walking to the next free box, staying inside the table","x":0,"y":2,"kind":"accent"},{"id":"s","label":"Keeping the table mostly empty so it rarely matters","x":4,"y":0,"kind":"accent"},{"id":"r","label":"Growing the table when it fills. Lesson 8.3","x":4,"y":2,"kind":"accent"},{"id":"b","label":"And a rule that spreads keys badly, which makes all of it worse","x":2,"y":3,"kind":"bad"}],"edges":[{"from":"c","to":"ch","label":"confine the cost","style":"gold"},{"from":"c","to":"w","label":"spread the cost","style":"green"},{"from":"c","to":"s","label":"avoid the cost","style":"green"},{"from":"c","to":"r","label":"and keep avoiding it"},{"from":"c","to":"b","label":"multiply the cost"}],"caption":"Chapter 4 kgraph already placed a hash table on its node about chains, and this is why: the classic answer to a clash is a chain hanging off the box. The chapter that looked like it was about linked lists was quietly building half of this one."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the tell is that only some lookups are slow.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"Most lookups are instant, a few are noticeably slower"</td><td>Ask what else computes to that box</td><td>A clash. The slow ones are sharing with something</td></tr>
    <tr><td>"It got slower and we did not add many records"</td><td>Ask how full the table is</td><td>Clashes rise steeply as a table fills. Lesson 8.3</td></tr>
    <tr><td>"Our keys all start with the same prefix"</td><td>Ask whether the rule looks at the whole key</td><td>A rule that ignores what differs spreads badly and clashes constantly</td></tr>
    <tr><td>"One customer is slow and the rest are fine"</td><td>Look at that customer keys specifically</td><td>Their keys are clumping into a few boxes</td></tr>
    <tr><td>"Adding one item made an unrelated lookup slower"</td><td>Ask which collision strategy is in use</td><td>Walking to the next free box spreads cost onto innocent keys</td></tr>
    <tr><td>"Memory is higher than the data plus the table"</td><td>Ask whether boxes hold chains</td><td>A chain per box is Chapter 4 cost, paid per entry</td></tr>
  </table>
  <div class="tbl-cap">Row five is the one that catches people, because it violates the intuition a hash table sells. Under the walking strategy, storing one new key can genuinely make a completely different key slower to find, and nothing about that key changed.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Ninety nine percent instant, and one percent unusable.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our session lookups are instant for almost everybody. But a small group of users, always the same ones, get a noticeably slow page. We have checked their accounts and there is nothing special about them. The session keys are built from the customer id followed by a fixed region code and a version number, and the slow users are all from one region."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Nothing is wrong with those users","lanes":[{"label":"The team"},{"label":"You"},{"label":"The table"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"A small group is always slow. Nothing special about them"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: what do their keys have in common?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"Same region code, same version, in the same place"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"So most of the key is identical across all of them"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"The rule is dominated by the part that never varies"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"So that whole region lands in a handful of boxes"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Use the part that differs, or a rule that mixes the whole key"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"The users are not the pattern. Their keys are. A rule that is dominated by a part of the key that never varies will send everything sharing that part to the same few boxes, and those boxes then behave like the scan from Lesson 6.2 while the rest of the table stays instant."}'></div>

  <p><strong>There is nothing special about those users, and that is the diagnosis rather than a dead end.</strong> What they share is a key shape: most of their key is identical, so a rule that leans on the identical part produces nearly the same address for all of them. They pile into a few boxes, and inside a box you are back to walking, which is Lesson 6.2 running inside one bucket while the rest of the table stays instant.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It stopped investigating the users and started reading the keys. <strong>A hash table treats a key as a thing to be mixed, not as a thing to be understood</strong>, so any structure in your keys that the rule fails to mix becomes structure in your boxes. The fix is not more memory and not a different collision strategy: it is to make sure the part of the key that actually differs is the part doing the work.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, ten boxes and a room of names</div>
    <p>Draw ten boxes numbered 0 to 9. <strong>Round one:</strong> take the first names of ten people you know, add the letter positions, and place each in the box matching the last digit. Count how many clashes you got, and compare it against your guess before you started. <strong>Round two:</strong> for every clash, decide on the spot whether to hang the second name under the first or walk it to the next free box, and note which one made a different name harder to find. <strong>Round three:</strong> now use only the FIRST letter of each name as your rule, and watch the whole thing collapse into a few boxes. That third round is block 9, and it is the most common way this goes wrong in real systems.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">A table of 1,000 boxes holds only 40 keys, which is four percent full. What is the chance that at least two keys share a box?</div>
    <div class="opt" data-i="0">Almost zero, since the table is nearly empty</div>
    <div class="opt" data-i="1">About four percent, matching how full it is</div>
    <div class="opt" data-i="2">More than half, because a clash needs any two keys to want any one box, and there are far more pairs than keys</div>
    <div class="qexp">This is the birthday room with a thousand days. Forty keys make 780 pairs, and each pair is a chance to clash, which is why the answer tracks pairs rather than fullness. Collisions are not an edge case that appears when a table fills up, they are the normal condition of a table from very early on, which is why every hash table is a collision strategy first and a lookup second.</div>
  </div>

  <div class="quiz" data-correct="0">
    <div class="q">Session keys are built as customer id, then a fixed region code, then a version number. Users from one region are consistently slow. What is happening?</div>
    <div class="opt" data-i="0">Most of those keys are identical, so a rule leaning on the unchanging part sends them all to a few boxes</div>
    <div class="opt" data-i="1">That region has more users than the others, so its data is larger</div>
    <div class="opt" data-i="2">The table needs a different collision strategy for those keys</div>
    <div class="qexp">A hash table mixes a key rather than understanding it, so any structure in the keys that the rule fails to mix becomes structure in the boxes. Everything sharing the region code computes to nearly the same address, piles into a handful of boxes, and inside a box you are walking again, which is Lesson 6.2 running inside one bucket. The fix is to make the part that actually differs do the work, not to add memory or change strategy.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Both strategies work well when clashes are rare and both degrade as clashes get common, so neither of them is the real decision. <strong>The real decision is one number: how full the table is allowed to get</strong>, and the mechanism that enforces it is something Lesson 3.3 already built, running here with a different trigger.</p>
  </div>
__NAV__
</div>`
,

"8.3": `<div class="wrap">
  <div class="les-kicker">Chapter 8 · Lesson 8.3</div>
  <h1 class="les-title">Load Factor and Resizing: Why It Stays Fast</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
  </div>

  <p class="motto">A hash table is kept half empty on purpose. The empty half is not waste, it is the entire product.</p>

  <p class="lead">Lesson 8.2 ended on the real decision: not which collision strategy, but how full the table is allowed to get. This lesson is that one number, the cliff it falls off, and the mechanism that stops it. That mechanism is Lesson 3.3, running here with a different trigger.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">The car park that is technically not full.</div>
  <p>A car park with a hundred spaces and ninety five cars in it is <em class="k">not full</em>. There are five spaces. But finding one means driving up and down the rows, and <strong>the last five percent takes longer than the first ninety did.</strong> At fifty cars you park immediately. At ninety five you circle.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Five spaces free, and nobody can find one","width":820,"height":280,"items":[{"icon":"shelf","x":150,"y":124,"kind":"accent","label":"100 spaces, 50 cars"},{"icon":"person","x":360,"y":126,"kind":"gold","label":"park immediately"},{"icon":"shelf","x":580,"y":124,"kind":"bad","label":"100 spaces, 95 cars"},{"icon":"person","x":760,"y":126,"kind":"bad","label":"circle for ten minutes"}],"arrows":[{"x1":220,"y1":124,"x2":310,"y2":124,"style":"green","label":"first free space"},{"x1":650,"y1":124,"x2":716,"y2":124,"style":"gold","label":"still five free"}],"caption":"Both car parks have free spaces and only one of them works. The cost of finding a space does not track how many cars there are, it tracks how few gaps there are, and that relationship is not gentle. It falls off a cliff near the end."}'></div>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One number: items divided by boxes.</div>
  <p>The load factor is how full the table is. Four names in eight boxes is <strong>0.5</strong>. It is the only number that predicts a hash table behaviour, and it does not care how big the table is: a hundred items in two hundred boxes and a million in two million behave identically.</p>

  <div class="viz" data-viz='{"type":"arch","title":"One number, and everything that follows from it","maxChars":18,"nodes":[{"id":"l","label":"Load factor: items divided by boxes","col":0,"row":1,"kind":"gold"},{"id":"a","label":"Low: clashes are rare, lookups are one step","col":1,"row":0,"kind":"accent"},{"id":"b","label":"High: clashes are constant, lookups walk","col":1,"row":2,"kind":"bad"},{"id":"c","label":"So watch it, and act before it climbs","col":2,"row":1,"kind":"dark"},{"id":"d","label":"Double the boxes, and recompute every address","col":3,"row":1,"kind":"accent"}],"edges":[{"from":"l","to":"a","label":"under a half","style":"green"},{"from":"l","to":"b","label":"over three quarters"},{"from":"a","to":"c"},{"from":"b","to":"c"},{"from":"c","to":"d","label":"the only lever","style":"green"}],"caption":"Notice what is missing from this diagram: the number of items. A table of a million behaves exactly like a table of a hundred at the same load factor, which is why the answer to a slow hash table is almost never that it holds too much."}'></div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">One arrival crosses the line, and every address changes.</div>
  <p>The table from Lesson 8.1, four names in eight boxes, load factor <strong>0.5</strong>. Now <em class="k">kai</em> arrives: 11 plus 1 plus 9 is 21, which leaves 5. And raj is in box 5.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Crossing the line, and rehashing everything","speed":1800,"data":["ana","raj","sam","mia","kai"],"capacity":16,"countLabel":" boxes","legend":[["arriving","look"],["stored","found"],["a clash","bad"],["rehashed to a new box","seen"]],"steps":[{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[0,2,1,3],"count":8,"badge":"4 of 8: load 0.5","say":"Four names, eight boxes. <b>Load factor 0.5</b>, and every lookup here is one step because clashes are rare at this fullness."},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[0,2,3],"bad":[1],"look":[4],"count":8,"badge":"kai wants box 5","say":"kai adds to 21, which leaves 5. <b>raj is in box 5.</b> A clash, and it is handled, but the load factor is about to become 5 of 8, which is 0.625."},{"capacity":16,"order":[0,2,null,null,null,1,null,3],"found":[0,2,1,3],"look":[4],"count":16,"badge":"double to 16","say":"That crosses the line, so <b>the table doubles.</b> Sixteen boxes now, and the eight new ones are empty. This is Lesson 3.3, exactly, with a different trigger."},{"capacity":16,"order":[0,2,null,null,null,4,null,3,null,null,null,null,null,1,null,null],"seen":[0,2,3,1],"found":[4],"count":16,"badge":"5 of 16: load 0.31","say":"And here is the part that is not in Lesson 3.3: <b>every address had to be recomputed</b>, because the addresses were never stored. raj was 29, which left 5 on eight and leaves 13 on sixteen, so raj moves. <b>The clash is gone.</b>"},{"capacity":16,"order":[0,2,null,null,null,4,null,3,null,null,null,null,null,1,null,null],"found":[0,2,4,3,1],"count":16,"badge":"every lookup: 1 step","say":"Five names, sixteen boxes, load 0.31, and every lookup is one step again. <b>Doubling did not just make room. It re-scattered the keys</b>, and a clash that existed a moment ago simply does not exist any more."}],"caption":"Two things happened at once and only the first is obvious. The table got bigger, and every single key got a new address, because a hash table never wrote its addresses down. That second half is what makes a resize expensive and what makes it work."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Why the whole table has to be rebuilt.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Why you cannot simply add more boxes","actors":[{"label":"The table","kind":"gold"},{"label":"The rule","kind":"accent"},{"label":"The key: raj","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"I have grown from 8 boxes to 16","style":"gold"},{"from":1,"to":0,"label":"then every remainder I ever gave you was on eight"},{"from":1,"to":2,"label":"you were 29, which left 5 on eight"},{"from":1,"to":2,"label":"you are 29, which leaves 13 on sixteen","style":"green"},{"from":2,"to":0,"label":"so I am in the wrong box, and so is everybody else"}],"caption":"The address depends on how many boxes there are, so changing that number invalidates every address in the table at once. Nothing is corrupted and nothing is lost, but until every key is recomputed and moved, the table cannot find anything, including the keys that did not need to move."}'></div>

  <p><strong>The address depends on the number of boxes</strong>, so growing the table invalidates every address in it simultaneously. That is why a resize is not an adjustment, it is a rebuild.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">The cliff, in numbers.</div>
  <p>How fullness turns into work, for the walking strategy from Lesson 8.2. Read the last two rows and you will never argue for a full hash table again.</p>

  <div class="tbl-wrap"><table>
    <tr><th>How full</th><th>Boxes touched per lookup</th><th>What that feels like</th></tr>
    <tr><td>25 percent</td><td>about 1.3</td><td>Indistinguishable from one step</td></tr>
    <tr><td>50 percent</td><td>about 2</td><td>Still fine, and this is where most tables live</td></tr>
    <tr><td>75 percent</td><td>about 4</td><td>Noticeably slower, and the usual place to grow</td></tr>
    <tr><td>90 percent</td><td>about 10</td><td>Ten times the work, for ten percent more room</td></tr>
    <tr><td>99 percent</td><td>about 100</td><td>A hundred boxes touched, on a table that is not full</td></tr>
  </table>
  <div class="tbl-cap">Nothing about the rule changed between the first row and the last. The same table, the same keys, the same arithmetic, and a hundredfold difference in work, produced entirely by how much room was left. This is the car park from block 1 with numbers on it.</div></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The expensive step that is cheap on average.</div>
  <p>Doubling means copying everything, which is genuinely expensive, and it happens rarely. Lesson 3.3 already did this arithmetic for a growing row: <strong>doubling from one to a thousand costs about a thousand copies in total, spread across a thousand insertions</strong>, which is about one copy per insertion.</p>

  <div class="viz" data-viz='{"type":"card","title":"What a resize costs, and how often","eyebrow":"GROWING TO A THOUSAND ITEMS","badge":"amortised","width":560,"rows":[{"k":"The one resize you notice","v":"copies every item, once","tone":"bad","bar":1},{"k":"How many resizes happen on the way","v":"about 10","tone":"good","bar":0.01},{"k":"Total copies across all of them","v":"about 1,000","tone":"good","bar":1},{"k":"Spread across 1,000 insertions","v":"about 1 copy each","tone":"good","bar":0.001},{"k":"And the room you keep empty","v":"about half the table, always","tone":"bad","bar":0.5}],"caption":"Every bar is a rough weight. Rows one and four are the same event described honestly from two distances: any single insertion may be very expensive, and the average across all of them is small. Lesson 3.3 called this O(n) writes, so O(1) each, and it is the same sentence here."}'></div>

  <p>And row five is the real bill, which Lesson 6.8 wrote down as <em class="k">spare memory, permanently</em>. <strong>You keep about half the table empty forever</strong>, not because you failed to fill it but because the emptiness is what you are buying. In the Chapter 2 currency the lookup stays <em class="g">O(1)</em> only while that emptiness is maintained.</p>

  <div class="callout warn">
    <div class="ch">The same mechanism, a different trigger</div>
    <p>Lesson 3.3 grows a row <strong>when it is full</strong>, because a full row cannot accept anything. A hash table grows <strong>when it is about half full</strong>, because a half full table still works perfectly and a three quarters full one does not. Same doubling, same amortised arithmetic, and a trigger pulled far earlier, because for this structure being full is not the problem. Being crowded is.</p>
  </div>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places where the empty half is the product.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Keeping room, and what it buys","unit":178,"nodes":[{"id":"c","label":"Deliberately unfilled space","x":2,"y":1,"kind":"dark"},{"id":"h","label":"A hash table kept near half empty so lookups stay one step","x":0,"y":0,"kind":"gold"},{"id":"g","label":"A growing row from Lesson 3.3, half empty right after it doubles","x":0,"y":2,"kind":"accent"},{"id":"d","label":"A disk that slows down when nearly full, for the same reason","x":4,"y":0,"kind":"accent"},{"id":"p","label":"A car park, a restaurant, a motorway at 95 percent capacity","x":4,"y":2,"kind":"box"},{"id":"q","label":"And Chapter 5: a queue that is never allowed to fill","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"h","label":"the empty half IS the speed","style":"gold"},{"from":"c","to":"g","label":"a side effect there","style":"green"},{"from":"c","to":"d","label":"free space to place things"},{"from":"c","to":"p","label":"the last few percent"},{"from":"c","to":"q","label":"Lesson 5.4 priced it","style":"gold"}],"caption":"The bottom node is the one worth pausing on. Lesson 5.4 said a queue absorbs a burst and cannot absorb a deficit, and that a line running at full capacity has nowhere to put anything. This is the same fact about a different structure: systems that run at a hundred percent utilisation do not run fast, they stop."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the question is always how full.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"It got slow and we barely added anything"</td><td>Ask what the load factor was before and after</td><td>The last few percent are the expensive ones. Block 5</td></tr>
    <tr><td>"Every so often one request takes far longer"</td><td>Ask what happens when it grows</td><td>A resize. Rare, expensive, and cheap on average</td></tr>
    <tr><td>"We sized it exactly to our data to save memory"</td><td>Ask what the load factor is at that size</td><td>A table sized exactly is a table with no room, and no speed</td></tr>
    <tr><td>"It uses twice the memory of the data"</td><td>Ask what the empty half is for</td><td>It is the product. Lesson 6.8 called it spare memory, permanently</td></tr>
    <tr><td>"The pause happens when we bulk load"</td><td>Ask how many resizes that load triggers</td><td>Every doubling on the way, one after another</td></tr>
    <tr><td>"Lookups slowed but nothing else changed"</td><td>Ask whether anything grew that shares the table</td><td>Somebody else filled it. The load factor is shared</td></tr>
  </table>
  <div class="tbl-cap">Row three is the most expensive mistake in this chapter and it is always made with good intentions. Sizing a hash table to fit your data exactly removes the only thing that made it fast, and it looks like careful engineering right up until it is measured.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Somebody saved memory, and the lookups collapsed.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"A lookup table in our service used to be instant and is now the slowest thing in the request. Last month somebody noticed it was using about twice the memory of the data it held, which looked wasteful, so they sized it to match the record count exactly. Memory did drop. Nothing else was changed, and the record count has not grown."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Memory dropped, and so did everything else","lanes":[{"label":"The team"},{"label":"You"},{"label":"The table"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Sized it to fit exactly. Memory dropped, lookups collapsed"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: what is the load factor now?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"Close to 1. Boxes equal to records"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"At that fullness a lookup touches many boxes, not one"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"About 100 at 99 percent, against 2 at half"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"The empty half was not waste. It was the speed"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Give the room back, and let it double on its own"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"The memory saving was real and so was its cost. A hash table that is exactly the size of its data is a hash table with the one property that made it worth choosing removed, and the change looks like careful engineering in every review."}'></div>

  <p><strong>The empty half was not waste. It was the product.</strong> A table sized exactly to its records has a load factor near one, and at that fullness the walking from Lesson 8.2 stops being occasional and becomes the normal path. Nothing about the rule or the data changed; the only thing removed was room.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked what the memory was for before treating it as waste. <strong>Every structure in this course charges for what it gives you</strong>, and Lesson 6.8 had already written this one down as spare memory, permanently, in the same row that promised one step. The two are the same purchase, and cancelling half of it cancels both.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, ten boxes and rising</div>
    <p>Draw ten boxes numbered 0 to 9 and take a list of twenty words. <strong>Round one:</strong> place words one at a time using the last digit of their letter total, walking to the next free box on a clash, and after every insertion write down how many boxes you had to touch. <strong>Round two:</strong> plot those numbers as the table fills, and find the point where the line stops being flat. It will be earlier than you expect. <strong>Round three:</strong> at that point, draw twenty boxes instead of ten and place all the words again from scratch using the last digit of the total divided by twenty. Count how many clashes survived the move.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A hash table was resized to exactly fit its record count to save memory. Lookups collapsed, though the data did not change. Why?</div>
    <div class="opt" data-i="0">Resizing corrupted the addresses, and the table needs rebuilding</div>
    <div class="opt" data-i="1">The empty space was what kept lookups to one step, so removing it turned occasional walking into the normal path</div>
    <div class="opt" data-i="2">Smaller tables have worse cache behaviour, which slows every lookup</div>
    <div class="qexp">Load factor is the only number that predicts a hash table's behaviour, and it is items divided by boxes. Near one, a lookup touches about a hundred boxes where at half it touches about two. Lesson 6.8 priced this structure as spare memory permanently in the same row that promised one step, because they are the same purchase: the empty half is not unused capacity, it is the thing being bought.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">Why must a hash table recompute every address when it doubles, rather than simply adding empty boxes at the end?</div>
    <div class="opt" data-i="0">Because the new boxes would otherwise never be used</div>
    <div class="opt" data-i="1">Because the items need to be re-sorted into the larger space</div>
    <div class="opt" data-i="2">Because the address is computed from the number of boxes, so changing that number invalidates every address at once</div>
    <div class="qexp">Nothing in a hash table records where anything went; reading recomputes the address from the key. That computation includes the table size, so raj at 29 lands in box 5 of eight and box 13 of sixteen. Change the size and every key is suddenly in the wrong place, including the ones that would not have moved. That is why a resize is a rebuild rather than an extension, and it is also why it re-scatters keys and can make an existing clash disappear.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>You now have the whole machine: an address computed instead of searched, a strategy for when two keys want one box, and a number that keeps it fast. <strong>Next: what people actually build with it</strong>, which is mostly not storing things at all but asking one question, and it is the question Lesson 6.2 charged 95,000 looks for.</p>
  </div>
__NAV__
</div>`
