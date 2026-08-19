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
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">Every other structure in this course answers where is it by looking. This one computes the answer and never looks at all.</p>

  <p class="lead">Lesson 6.2 left you with a number: a signup form checking a hundred thousand registered addresses pays about 95,000 looks per check, because the common answer is the expensive one. It handed the fix to this chapter by name. Hashing trades memory and order for the one thing nothing else gives you, an answer without a search, and this is where that trade begins: the number it replaces 95,000 with is one.</p>

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

  <div class="board" data-anim='{"type":"array-scan","title":"Four names, computed straight into their boxes","speed":1700,"big":true,"data":["ana","raj","sam","mia"],"capacity":8,"countLabel":" looks","pointerLabels":{"i":"computing"},"legend":[["being placed","look"],["stored","found"],["read back in one step","seen"]],"steps":[{"capacity":8,"order":[null,null,null,null,null,null,null,null],"count":0,"say":"Eight empty boxes, numbered 0 to 7. <b>Nothing is stored anywhere yet</b>, and the boxes are not in any order because they do not need to be."},{"capacity":8,"order":[0,null,null,null,null,null,null,null],"look":[0],"ptr":{"i":0},"count":0,"say":"<b>ana.</b> a is 1, n is 14, a is 1, so 16. Sixteen divided by eight leaves nothing, so ana goes in box 0. <b>Not one box was examined to decide that.</b>"},{"capacity":8,"order":[0,null,null,null,null,1,null,null],"found":[0],"look":[1],"ptr":{"i":5},"count":0,"say":"<b>raj.</b> 18 plus 1 plus 10 is 29. Twenty nine divided by eight leaves 5, so raj goes in box 5. The arithmetic chose the box, and the box was empty because nothing else had computed to 5."},{"capacity":8,"order":[0,2,null,null,null,1,null,null],"found":[0,1],"look":[2],"ptr":{"i":1},"count":0,"say":"<b>sam.</b> 19 plus 1 plus 13 is 33, which leaves 1. Box 1. <b>The counter has not moved</b>, because storing something here has never involved looking at anything."},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[0,2,1,3],"ptr":{"i":7},"count":0,"badge":"4 stored, 0 looks","say":"<b>mia.</b> 13 plus 9 plus 1 is 23, which leaves 7. Box 7. Four names stored and the number of boxes examined is still zero."},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"seen":[2],"found":[0,1,3],"ptr":{"i":1},"count":1,"badge":"is sam here? 1 look","say":"Now the question Lesson 6.2 could not answer cheaply: <b>is sam in here?</b> Add the letters, take the remainder, get 1, and look in box 1. <b>One look, and the answer is yes.</b>"},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[0,2,1,3],"ptr":{"i":3},"count":1,"badge":"is bob here? 1 look","say":"And bob? 2 plus 15 plus 2 is 19, which leaves 3. <b>Box 3 is empty, so the answer is no</b>, in exactly one look. Lesson 6.2 needed all hundred thousand to say that."}],"caption":"The counter is the whole lesson. Storing four names cost zero looks and answering two questions cost one look each, on a table of eight or of eight million. Nothing here was searched, narrowed, halved or walked, because the address was never unknown."}'></div>

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

  <div class="viz" data-viz='{"type":"dtree","title":"Is this rule allowed to be your hash rule","maxChars":20,"gx":50,"nodes":[{"id":"q1","label":"Same key, same box, every single time?","col":0,"row":3,"kind":"gold","shape":"diamond"},{"id":"n1","label":"Unusable. Nothing can ever be found again","col":1,"row":0,"kind":"muted"},{"id":"q2","label":"Does it spread different keys evenly?","col":1,"row":3,"kind":"gold","shape":"diamond"},{"id":"n2","label":"Usable, and Lesson 8.2 is now your problem","col":2,"row":1,"kind":"gold"},{"id":"q3","label":"Cheap on every store and every read?","col":2,"row":4,"kind":"gold","shape":"diamond"},{"id":"n3","label":"The one step stops being one step","col":3,"row":2,"kind":"muted"},{"id":"y3","label":"Use it. Nothing else is required","col":3,"row":5,"kind":"accent"}],"edges":[{"from":"q1","to":"n1","label":"no"},{"from":"q1","to":"q2","label":"yes","style":"green"},{"from":"q2","to":"n2","label":"no"},{"from":"q2","to":"q3","label":"yes","style":"green"},{"from":"q3","to":"n3","label":"no"},{"from":"q3","to":"y3","label":"yes","style":"green"}],"caption":"Only the first question can disqualify a rule outright, and that is the whole point of the table above it. The letter-adding rule in block 3 passes the first and third questions and is mediocre at the second, which is why it reaches the bottom of this tree and why Lesson 8.2 exists at all. Notice what is not asked anywhere: whether the rule is clever, secret or reversible."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Settling the bill from Lesson 6.2.</div>
  <p>A signup form checking whether an address is already registered, against 100,000 records. Lesson 6.2 priced it honestly: nine checks in ten are a <em class="k">no</em>, and a no reads everything, so the real cost is <strong>about 95,000 looks per check.</strong></p>

  <div class="viz" data-viz='{"type":"card","title":"The same check, before and after","eyebrow":"100,000 REGISTERED ADDRESSES","badge":"per signup","width":560,"rows":[{"k":"Scanning, from Lesson 6.2","v":"about 95,000 looks","tone":"bad","bar":1},{"k":"Computing the address","v":"1 look","tone":"good","bar":0.00001},{"k":"At ten million records, scanning","v":"about 9,500,000 looks","tone":"bad","bar":1},{"k":"At ten million records, computing","v":"still 1 look","tone":"good","bar":0.00001},{"k":"And what it costs you","v":"boxes you keep empty on purpose","tone":"bad","bar":0.4}],"caption":"Every bar is drawn against a maximum of 95,000, so the ten million row runs off the end of the card instead of being a hundred times longer than it looks. Rows two and four are the same number, and that is the point: the cost of a lookup here does not mention how much you are storing. Row five is the bill, and Lesson 8.3 is where it gets a name and a number."}'></div>

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
    <p>Everything above rested on a quiet assumption: that when a name computed to a box, the box was empty. <strong>Add one more name and that stops being true</strong>, and it is not bad luck, not a flaw in the rule, and not something anybody can engineer away. An answer without a search was always going to cost something, and the next lesson is the first instalment.</p>
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

  <p class="lead">Lesson 8.1 rested on a quiet assumption: that when a name computed to a box, the box was empty. This lesson is what happens when it is not, and the first surprise is how soon that happens. An answer without a search is still the promise, and this is the first thing it charges for. By the end you can say why every hash table is a collision strategy wearing a lookup as a disguise.</p>

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

  <div class="board" data-anim='{"type":"array-scan","title":"leo computes to box 0, and ana is already in it","speed":1700,"big":true,"data":["ana","raj","sam","mia","leo"],"capacity":8,"countLabel":" boxes touched","pointerLabels":{"i":"probing"},"legend":[["stored","found"],["occupied, so keep walking","bad"],["where it settled","seen"]],"steps":[{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[0,2,1,3],"count":0,"say":"Lesson 8.1 left the table like this. Four names, four boxes, and four empty ones. <b>Everything so far has assumed the computed box was free.</b>"},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[2,1,3],"bad":[0],"ptr":{"i":0},"count":1,"say":"<b>leo adds up to 32, which leaves nothing, so box 0.</b> And ana is sitting in it. Nothing has gone wrong: two different names computed to the same address, which is the arithmetic working exactly as described."},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[1,3],"bad":[0,2],"ptr":{"i":1},"count":2,"say":"One answer is to walk. <b>Box 0 is taken, so try box 1.</b> That holds sam, so it is taken too. The counter is moving now, and in Lesson 8.1 it never did."},{"capacity":8,"order":[0,2,4,null,null,1,null,3],"found":[0,2,1,3],"seen":[4],"ptr":{"i":2},"count":3,"badge":"3 boxes touched","say":"<b>Box 2 is empty, so leo lives there.</b> Three boxes touched instead of one. And notice what that did to reading: to find leo later you compute 0, find ana, and have to keep walking too."},{"capacity":8,"order":[0,2,4,null,null,1,null,3],"found":[0,1,3],"seen":[2],"bad":[4],"count":3,"badge":"and the cost is now shared","say":"<b>The cost is no longer a property of leo alone.</b> ana was stored first and is still one look, sam is still one, and leo is three, on the same table, with the same rule. The lookup time now depends on what else arrived and when."}],"caption":"The counter is the whole difference from Lesson 8.1. Storing cost nothing there and reading cost one look, always. Here both depend on what is already in the table, which is why the next lesson is about how full it is allowed to get."}'></div>

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

  <div class="viz" data-viz='{"type":"dtree","title":"Two keys want one box. Which answer are you allowed to use","maxChars":20,"gx":50,"nodes":[{"id":"q1","label":"Is the table kept mostly empty?","col":0,"row":2,"kind":"gold","shape":"diamond"},{"id":"either","label":"Either answer. Clashes are rare, and Lesson 8.3 is why","col":1,"row":0,"kind":"accent"},{"id":"q2","label":"Can you spend a chain node on every entry?","col":1,"row":3,"kind":"gold","shape":"diamond"},{"id":"walk","label":"Walk to the next free box. It stays inside the table","col":2,"row":2,"kind":"accent"},{"id":"chain","label":"Let the box hold a chain. Chapter 4 memory, per entry","col":2,"row":4,"kind":"accent"},{"id":"cost","label":"A clash now makes OTHER keys slower","col":3,"row":1,"kind":"muted"},{"id":"keep","label":"The clash stays in the box it happened in","col":3,"row":4,"kind":"gold"}],"edges":[{"from":"q1","to":"either","label":"yes","style":"green"},{"from":"q1","to":"q2","label":"no"},{"from":"q2","to":"walk","label":"no"},{"from":"q2","to":"chain","label":"yes","style":"green"},{"from":"walk","to":"cost","label":"and the price"},{"from":"chain","to":"keep","label":"and the prize"}],"caption":"The top branch matters more than the choice underneath it. Both strategies are fine on a table that is kept mostly empty and both degrade as it fills, so the number that decides a hash table is not which of these two answers it uses, it is how much room it was given. That number is the whole of Lesson 8.3."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">How soon is soon.</div>
  <p>The birthday room is the intuition. Here is the arithmetic, and it is worse than most people expect. <strong>In a table of eight boxes, by the fourth key a collision is already more likely than not.</strong></p>

  <div class="viz" data-viz='{"type":"card","title":"The chance that at least two keys share a box","eyebrow":"BEFORE THE TABLE IS ANYWHERE NEAR FULL","badge":"sooner than you think","width":560,"rows":[{"k":"8 boxes, 3 keys stored","v":"about 34 percent","tone":"good","bar":0.34},{"k":"8 boxes, 4 keys stored","v":"about 59 percent","tone":"bad","bar":0.59},{"k":"100 boxes, 12 keys stored","v":"about 50 percent","tone":"bad","bar":0.5},{"k":"365 boxes, 23 keys, the birthday room","v":"about 51 percent","tone":"bad","bar":0.51},{"k":"1,000 boxes, 40 keys stored","v":"about 55 percent","tone":"bad","bar":0.55}],"caption":"Every bar is a probability rather than a cost. Read the last row and hold on to it: a thousand boxes holding only forty things is four percent full, and a collision has already happened more likely than not. Collisions are not an edge case, they are the normal condition of every hash table you will ever meet."}'></div>

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
    <p>Both strategies work well when clashes are rare and both degrade as clashes get common, so neither of them is the real decision. <strong>The real decision is one number: how full the table is allowed to get</strong>, which is the memory half of the trade this chapter is built on. The mechanism that enforces it is something Lesson 3.3 already built, running here with a different trigger. Memory and order, traded for an answer without a search, and this is the first instalment.</p>
  </div>
__NAV__
</div>`
,

"8.3": `<div class="wrap">
  <div class="les-kicker">Chapter 8 · Lesson 8.3</div>
  <h1 class="les-title">Load Factor and Resizing: Why It Stays Fast</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">A hash table is kept half empty on purpose. The empty half is not waste, it is the entire product.</p>

  <p class="lead">Lesson 8.2 ended on the real decision: not which collision strategy, but how full the table is allowed to get. This lesson is that one number, the cliff it falls off, and the mechanism that stops it. This is where the memory half of the trade gets its price: an answer without a search is paid for in boxes you keep empty. That mechanism is Lesson 3.3, running here with a different trigger.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">The car park that is technically not full.</div>
  <p>A car park with a hundred spaces and ninety five cars in it is <em class="k">not full</em>. There are five spaces. But finding one means driving up and down the rows, and <strong>the last five percent takes longer than the first ninety did.</strong> At fifty cars you park immediately. At ninety five you circle.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Five spaces free, and nobody can find one","width":820,"height":280,"items":[{"icon":"shelf","x":150,"y":124,"kind":"accent","label":"100 spaces, 50 cars"},{"icon":"person","x":360,"y":126,"kind":"gold","label":"park immediately"},{"icon":"shelf","x":580,"y":124,"kind":"bad","label":"100 spaces, 95 cars"},{"icon":"person","x":760,"y":126,"kind":"bad","label":"circle for ten minutes"}],"arrows":[{"x1":220,"y1":124,"x2":310,"y2":124,"style":"green","label":"first free space"},{"x1":650,"y1":124,"x2":716,"y2":124,"style":"gold","label":"still five free"}],"caption":"Both car parks have free spaces and only one of them works. The cost of finding a space does not track how many cars there are, it tracks how few gaps there are, and that relationship is not gentle. It falls off a cliff near the end."}'></div>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One number: items divided by boxes.</div>
  <p>The load factor is how full the table is. Four names in eight boxes is <strong>0.5</strong>. Once the rule genuinely mixes your keys, it is the only number left that predicts a hash table behaviour, and it does not care how big the table is: a hundred items in two hundred boxes and a million in two million behave identically.</p>

  <div class="viz" data-viz='{"type":"arch","title":"One number, and everything that follows from it","maxChars":18,"nodes":[{"id":"l","label":"Load factor: items divided by boxes","col":0,"row":1,"kind":"gold"},{"id":"a","label":"Low: clashes are rare, lookups are one step","col":1,"row":0,"kind":"accent"},{"id":"b","label":"High: clashes are constant, lookups walk","col":1,"row":2,"kind":"bad"},{"id":"c","label":"So watch it, and act before it climbs","col":2,"row":1,"kind":"dark"},{"id":"d","label":"Double the boxes, and recompute every address","col":3,"row":1,"kind":"accent"}],"edges":[{"from":"l","to":"a","label":"under a half","style":"green"},{"from":"l","to":"b","label":"over three quarters"},{"from":"a","to":"c"},{"from":"b","to":"c"},{"from":"c","to":"d","label":"the only lever","style":"green"}],"caption":"Notice what is missing from this diagram: the number of items. A table of a million behaves exactly like a table of a hundred at the same load factor, which is why the answer to a slow hash table is almost never that it holds too much."}'></div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">One arrival crosses the line, and every address changes.</div>
  <p>The table from Lesson 8.1, four names in eight boxes, load factor <strong>0.5</strong>. Now <em class="k">kai</em> arrives: 11 plus 1 plus 9 is 21, which leaves 5. And raj is in box 5.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Crossing the line, and rehashing everything","speed":1800,"data":["ana","raj","sam","mia","kai"],"capacity":16,"countLabel":" boxes touched","pointerLabels":{"i":"arriving"},"legend":[["stored","found"],["a clash","bad"],["rehashed to a new box","seen"]],"steps":[{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[0,2,1,3],"badge":"4 of 8: load 0.5","say":"Four names, eight boxes. <b>Load factor 0.5</b>, and every lookup here is one step because clashes are rare at this fullness."},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[0,2,3],"bad":[1],"ptr":{"i":5},"badge":"kai wants box 5","say":"kai adds to 21, which leaves 5. <b>raj is in box 5.</b> A clash, and it is handled, but the load factor is about to become 5 of 8, which is 0.625."},{"capacity":16,"order":[0,2,null,null,null,1,null,3],"found":[0,2,1,3],"badge":"double to 16","say":"That crosses the line, so <b>the table doubles.</b> Sixteen boxes now, and the eight new ones are empty. This is Lesson 3.3, exactly, with a different trigger."},{"capacity":16,"order":[0,2,null,null,null,4,null,3,null,null,null,null,null,1,null,null],"seen":[0,2,3,1],"found":[4],"badge":"5 of 16: load 0.31","say":"And here is the part that is not in Lesson 3.3: <b>every address had to be recomputed</b>, because the addresses were never stored. raj was 29, which left 5 on eight and leaves 13 on sixteen, so raj moves. <b>The clash is gone.</b>"},{"capacity":16,"order":[0,2,null,null,null,4,null,3,null,null,null,null,null,1,null,null],"found":[0,2,4,3,1],"badge":"every lookup: 1 step","say":"Five names, sixteen boxes, load 0.31, and every lookup is one step again. <b>Doubling did not just make room. It re-scattered the keys</b>, and a clash that existed a moment ago simply does not exist any more."}],"caption":"Two things happened at once and only the first is obvious. The table got bigger, and every single key got a new address, because a hash table never wrote its addresses down. That second half is what makes a resize expensive and what makes it work."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Why the whole table has to be rebuilt.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Why you cannot simply add more boxes","actors":[{"label":"The table","kind":"gold"},{"label":"The rule","kind":"accent"},{"label":"The key: raj","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"I have grown from 8 boxes to 16","style":"gold"},{"from":1,"to":0,"label":"then every remainder I ever gave you was on eight"},{"from":1,"to":2,"label":"you were 29, which left 5 on eight"},{"from":1,"to":2,"label":"you are 29, which leaves 13 on sixteen","style":"green"},{"from":2,"to":0,"label":"so I am in the wrong box, and so is everybody else"}],"caption":"The address depends on how many boxes there are, so changing that number invalidates every address in the table at once. Nothing is corrupted and nothing is lost, but until every key is recomputed and moved, the table cannot find anything, including the keys that did not need to move."}'></div>

  <p><strong>The address depends on the number of boxes</strong>, so growing the table invalidates every address in it simultaneously. That is why a resize is not an adjustment, it is a rebuild.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">The cliff, in numbers.</div>
  <p>How fullness turns into work, for the walking strategy from Lesson 8.2. Read the last two rows and you will never argue for a full hash table again.</p>

  <div class="tbl-wrap"><table>
    <tr><th>How full</th><th>Boxes touched per lookup</th><th>What that feels like</th></tr>
    <tr><td>25 percent</td><td>about 1.4</td><td>Indistinguishable from one step</td></tr>
    <tr><td>50 percent</td><td>about 2.5</td><td>Still fine, and this is where most tables live</td></tr>
    <tr><td>75 percent</td><td>about 8</td><td>Noticeably slower, and well past where a table following this rule has already doubled</td></tr>
    <tr><td>90 percent</td><td>about 50</td><td>Fifty boxes for one answer, for ten percent more room</td></tr>
    <tr><td>99 percent</td><td>about 5,000</td><td>Five thousand boxes touched, on a table that is not full</td></tr>
  </table>
  <div class="tbl-cap">Nothing about the rule changed between the first row and the last. The same table, the same keys, the same arithmetic, and a three thousandfold difference in work, produced entirely by how much room was left. This is the car park from block 1 with numbers on it.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Should this table grow right now","maxChars":20,"gx":50,"nodes":[{"id":"q1","label":"Is it about half full?","col":0,"row":2,"kind":"gold","shape":"diamond"},{"id":"no1","label":"Leave it. A half full table still works perfectly","col":1,"row":0,"kind":"accent"},{"id":"q2","label":"Does the rule genuinely mix your keys?","col":1,"row":3,"kind":"gold","shape":"diamond"},{"id":"n2","label":"Growing will not save you. Fix the rule first","col":2,"row":1,"kind":"muted"},{"id":"y2","label":"Double, and recompute every address in it","col":2,"row":4,"kind":"accent"},{"id":"why","label":"No address was ever written down, so all of them move","col":3,"row":4,"kind":"gold"}],"edges":[{"from":"q1","to":"no1","label":"no","style":"green"},{"from":"q1","to":"q2","label":"yes"},{"from":"q2","to":"n2","label":"no"},{"from":"q2","to":"y2","label":"yes","style":"green"},{"from":"y2","to":"why","label":"and this is why it costs"}],"caption":"The middle question is the one people skip. A table that is slow at low fullness does not have a room problem, it has a rule problem, and doubling it just buys twice the memory for the same clumping. The bottom node is the half of a resize that is not in Lesson 3.3: a row that doubles copies its values, and a hash table has to recompute every single address on the way."}'></div>

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

  <div class="viz" data-viz='{"type":"kgraph","title":"Keeping room, and what it buys","unit":178,"nodes":[{"id":"c","label":"Deliberately unfilled space","x":2,"y":1,"kind":"dark"},{"id":"h","label":"A hash table kept near half empty so lookups stay one step","x":0,"y":0,"kind":"gold"},{"id":"g","label":"A growing row from Lesson 3.3, half empty right after it doubles","x":0,"y":2,"kind":"accent"},{"id":"d","label":"A disk that slows down when nearly full, for the same reason","x":4,"y":0,"kind":"accent"},{"id":"p","label":"A car park, a restaurant, a motorway at 95 percent capacity","x":4,"y":2,"kind":"box"},{"id":"q","label":"And Chapter 5: a queue that is never allowed to fill","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"h","label":"the empty half IS the speed","style":"gold"},{"from":"c","to":"g","label":"a side effect there","style":"green"},{"from":"c","to":"d","label":"free space to place things"},{"from":"c","to":"p","label":"the last few percent"},{"from":"c","to":"q","label":"Lesson 5.4 priced it","style":"gold"}],"caption":"The bottom node is the one worth pausing on. Lesson 5.4 said a queue absorbs a burst and cannot absorb a deficit, and this is the same fact about a different structure: systems that run at a hundred percent utilisation do not run fast, they stop."}'></div>

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
    <div class="qexp">Once the rule mixes your keys, load factor is the only number left that predicts a hash table behaviour, and it is items divided by boxes. Near one, walking to a free box touches about five thousand of them where at half it touches about two. Lesson 6.8 priced this structure as spare memory permanently in the same row that promised one step, because they are the same purchase: the empty half is not unused capacity, it is the thing being bought.</div>
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
    <p>You now have the whole machine: an address computed instead of searched, a strategy for when two keys want one box, and a number that keeps it fast. <strong>Next: what people actually build with it</strong>, which is mostly not storing things at all but asking one question. Memory and order, traded for an answer without a search, and the question Lesson 6.2 charged 95,000 looks for.</p>
  </div>
__NAV__
</div>`
,

"8.4": `<div class="wrap">
  <div class="les-kicker">Chapter 8 · Lesson 8.4</div>
  <h1 class="les-title">Sets, Maps, Caches and Deduplication</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">Most uses of hashing store nothing. They answer one question: have I seen this before.</p>

  <p class="lead">You have the whole machine now. This lesson is what people actually build with it, and the surprise is how little of it is storage. Memory and order are traded away, and what comes back is an answer without a search. By the end you can recognise four different products that are the same structure asked four slightly different questions, and price a job that Lesson 7 would have sorted.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">The bouncer with a list.</div>
  <p>A door with a guest list. Somebody gives a name and the bouncer answers <em class="k">yes</em> or <em class="k">no</em>. <strong>They do not tell you the guest table number, the booking date, or anything else</strong>, and they do not need to hold any of it. The entire product is one bit of information, repeated a thousand times a night.</p>

  <div class="viz" data-viz='{"type":"scene","title":"One question, a thousand times a night","width":820,"height":280,"items":[{"icon":"person","x":130,"y":126,"kind":"gold","label":"a name"},{"icon":"doc","x":360,"y":124,"kind":"accent","label":"the list"},{"icon":"person","x":600,"y":126,"kind":"box","label":"yes or no, and nothing else"}],"arrows":[{"x1":190,"y1":126,"x2":296,"y2":126,"style":"gold","label":"is this on it"},{"x1":420,"y1":126,"x2":536,"y2":126,"style":"green","label":"one look"}],"caption":"The bouncer holds no details about anybody. The list exists to answer one question and refuses all the others, which is exactly what makes it small, fast, and easy to keep. Most hashing in real systems is this and not a filing cabinet."}'></div>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One structure, four questions.</div>
  <p>A set, a map, a cache and a deduplicator look like four different tools. <strong>They are one table, asked four slightly different things</strong>, and every one of them is the same one-step lookup from Lesson 8.1.</p>

  <div class="viz" data-viz='{"type":"arch","title":"The same table, four questions","maxChars":18,"nodes":[{"id":"t","label":"A box computed from a key","col":0,"row":1,"kind":"dark"},{"id":"s","label":"Set: is this present? Store nothing but the key","col":1,"row":0,"kind":"gold"},{"id":"m","label":"Map: what is stored under this key? Keep a value too","col":1,"row":1,"kind":"accent"},{"id":"c","label":"Cache: have I computed this before? A map with a memory limit","col":1,"row":2,"kind":"accent"},{"id":"d","label":"Dedup: have I seen this? A set used once per item","col":1,"row":3,"kind":"gold"}],"edges":[{"from":"t","to":"s","style":"green"},{"from":"t","to":"m","style":"green"},{"from":"t","to":"c","style":"green"},{"from":"t","to":"d","style":"green"}],"caption":"Nothing in this diagram is a different structure. The only thing that varies is whether you store a value beside the key, and what you do when the table gets full, and both of those are decisions rather than designs. The first and last rows do not store anything at all."}'></div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Nine items, three repeats, and one pass.</div>
  <p>Deduplication is the one worth watching, because Chapter 7 would have solved it by sorting. Nine order ids arrive, three of them are repeats. <strong>Keep a set, and ask one question of each.</strong></p>

  <div class="board" data-anim='{"type":"array-scan","title":"Removing repeats in one pass, without comparing anything","speed":1600,"big":true,"data":[41,17,41,63,17,88,41,63,25],"countLabel":" comparisons","pointerLabels":{"i":"asking"},"legend":[["being asked","look"],["new: kept","found"],["a repeat: dropped","bad"],["already seen","seen"]],"steps":[{"order":[0,1,2,3,4,5,6,7,8],"look":[0],"ptr":{"i":0},"count":0,"say":"Nine order ids, in the order they arrived. <b>41 first.</b> Compute its box, find it empty, so this is new. Keep it, and remember it."},{"order":[0,1,2,3,4,5,6,7,8],"found":[0],"look":[1],"ptr":{"i":1},"count":0,"say":"17: box empty, so new. Keep it. <b>The counter is still zero</b>, because nothing has been compared with anything."},{"order":[0,1,2,3,4,5,6,7,8],"found":[1],"seen":[0],"bad":[2],"look":[2],"ptr":{"i":2},"count":0,"say":"41 again. <b>Compute its box, and 41 is already sitting in it.</b> A repeat, dropped, in one step, without looking at any of the others."},{"order":[0,1,2,3,4,5,6,7,8],"found":[0,3],"seen":[1],"bad":[2,4],"look":[4],"ptr":{"i":4},"count":0,"say":"63 is new, then 17 is a repeat. Each answer took one step and neither depended on how many ids had come before."},{"order":[0,1,2,3,4,5,6,7,8],"found":[0,1,3,5,8],"bad":[2,4,6,7],"count":0,"badge":"9 in, 5 kept, 0 comparisons","say":"<b>Nine ids in, five kept, four dropped, and the comparison counter never moved.</b> One pass, one step each, nothing sorted and nothing compared."}],"caption":"Chapter 7 would have answered this by sorting, so that repeats become neighbours, and Lesson 7.1 priced that at about 20,000,000 comparisons for a million items. This is one pass, and the order the ids arrived in is untouched, which sorting would have destroyed."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">A cache is a map that is allowed to forget.</div>

  <div class="viz" data-viz='{"type":"seq","title":"The same question, asked twice","actors":[{"label":"The caller","kind":"gold"},{"label":"The cache","kind":"accent"},{"label":"The expensive work","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"what is the answer for this input","style":"gold"},{"from":1,"to":0,"label":"never seen it. One step to find that out"},{"from":1,"to":2,"label":"do the expensive thing"},{"from":2,"to":1,"label":"here, after four seconds"},{"from":0,"to":1,"label":"same input again, later","style":"gold"},{"from":1,"to":0,"label":"one step, and here it is","style":"green"}],"caption":"Nothing about the expensive work got faster. It simply did not run the second time. That is the whole mechanism, and the only genuinely hard part of a cache is deciding what to forget when it fills, which is Lesson 5.3 ring and Chapter 17 properly."}'></div>

  <p><strong>A cache does not make anything faster. It makes something not happen.</strong> And the one step that discovers whether it has happened before is this chapter, which is why a cache with a slow lookup is worse than no cache at all.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Four products, and what each one refuses.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The product</th><th>What it stores</th><th>What it refuses to answer</th></tr>
    <tr><td>A set</td><td>Keys only. No values at all</td><td>How many of these, or what order, or what is nearby</td></tr>
    <tr><td>A map</td><td>A key and one value beside it</td><td>Which keys have similar values, or everything between two keys</td></tr>
    <tr><td>A cache</td><td>The same, plus a rule for what to forget</td><td>Anything it has already thrown away, silently</td></tr>
    <tr><td>Deduplication</td><td>Nothing, once the pass is over</td><td>How many times each repeat appeared, unless you count</td></tr>
  </table>
  <div class="tbl-cap">Read the right column. Every one of these refuses order, ranges and neighbours, because all four are the same computed address underneath and that address destroys order by construction. Chapter 6 sorted branch answers those questions and this one never will.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Which of these four do you actually need","maxChars":20,"gx":50,"nodes":[{"id":"q1","label":"Do you need a value beside the key?","col":0,"row":2,"kind":"gold","shape":"diamond"},{"id":"q2","label":"Do you need it after this pass ends?","col":1,"row":0,"kind":"gold","shape":"diamond"},{"id":"q3","label":"Can you afford to keep everything, forever?","col":1,"row":4,"kind":"gold","shape":"diamond"},{"id":"dedup","label":"Deduplication. Nothing is kept once the pass is over","col":2,"row":-1,"kind":"accent"},{"id":"set","label":"A set. Keys only, and one question each","col":2,"row":1,"kind":"accent"},{"id":"cache","label":"A cache, plus a rule for what to forget","col":2,"row":3,"kind":"accent"},{"id":"map","label":"A map. One value beside each key","col":2,"row":5,"kind":"accent"},{"id":"no","label":"None of them answer order, ranges or nearest","col":3,"row":2,"kind":"muted"}],"edges":[{"from":"q1","to":"q2","label":"no","style":"green"},{"from":"q1","to":"q3","label":"yes"},{"from":"q2","to":"dedup","label":"no"},{"from":"q2","to":"set","label":"yes","style":"green"},{"from":"q3","to":"cache","label":"no"},{"from":"q3","to":"map","label":"yes","style":"green"},{"from":"set","to":"no","label":"and all four refuse"}],"caption":"Every destination here is the same computed address underneath, which is why the muted node applies to all four of them equally. Choosing between them is a question about what you need to keep, not about how the lookup works, because the lookup is identical in all four. The questions Chapter 6 answers are ruled out before you reach this diagram at all."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The same job, priced three ways.</div>
  <p>A million order ids with an unknown number of repeats. Find the distinct ones. <strong>Three chapters of this course each have an answer</strong>, and they are not close.</p>

  <div class="viz" data-viz='{"type":"card","title":"Finding the distinct values among a million","eyebrow":"THREE ANSWERS","badge":"1,000,000 ids","width":560,"rows":[{"k":"Compare everything with everything","v":"about 500,000,000,000","tone":"bad","bar":1},{"k":"Sort first, then repeats are neighbours","v":"about 20,000,000","tone":"bad","bar":0.00004},{"k":"A set, one question per id","v":"1,000,000 steps","tone":"good","bar":0.000002},{"k":"And what the sort destroyed","v":"the order they arrived in","tone":"bad"},{"k":"And what the set costs","v":"a table of empty boxes","tone":"bad"}],"caption":"Every bar is drawn against a maximum of 500 billion, which is why the second and third bars are too small to see. That is the whole card. Row two is Lesson 7.1 exact figure for sorting a million, and it is a genuinely good answer that this chapter beats by twenty times. Rows four and five are the honest columns: sorting rearranges your data and hashing spends memory, and neither is free."}'></div>

  <p>In the Chapter 2 currency, comparing everything is <em class="g">O(n squared)</em>, sorting is <em class="g">O(n log n)</em>, and this is <em class="g">O(n)</em>. <strong>One pass, one step per item</strong>, and the arrival order survives, which the sorting answer destroys.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Six things you used today, and none of them is a filing cabinet.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Have I seen this before","unit":178,"nodes":[{"id":"c","label":"One question, asked in one step","x":2,"y":1,"kind":"dark"},{"id":"e","label":"Is this email already registered. Lesson 6.2 debt","x":0,"y":0,"kind":"gold"},{"id":"m","label":"Have I already processed this message, so I do not do it twice","x":0,"y":2,"kind":"accent"},{"id":"b","label":"Is this word in the dictionary, for a spell checker","x":4,"y":0,"kind":"accent"},{"id":"v","label":"Have I visited this page before, so a crawler does not loop","x":4,"y":2,"kind":"accent"},{"id":"a","label":"Did I compute this answer already, which is a cache","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"e","label":"settled in 8.1","style":"gold"},{"from":"c","to":"m","label":"exactly once delivery"},{"from":"c","to":"b","label":"a set of words","style":"green"},{"from":"c","to":"v","label":"or it never terminates"},{"from":"c","to":"a","label":"Chapter 17 builds it","style":"gold"}],"caption":"The crawler node is the one that surprises people. A crawler without a seen-before set does not run slowly, it runs forever, because pages link back to each other and Lesson 4.4 already showed what a loop does to a walk that keeps no memory."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and most are a set that nobody built.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"Removing duplicates takes hours"</td><td>Ask whether it sorts, or compares pairs</td><td>A set does it in one pass. Block 6</td></tr>
    <tr><td>"Customers got the same email twice"</td><td>Ask what stops a message being processed twice</td><td>No seen-before set, so retries deliver again</td></tr>
    <tr><td>"The crawler never finishes"</td><td>Ask whether it remembers where it has been</td><td>Pages link back. Lesson 4.4 loop, with no memory</td></tr>
    <tr><td>"The cache made it slower"</td><td>Ask what a miss costs before the work starts</td><td>A cache lookup must be one step or it is pure overhead</td></tr>
    <tr><td>"We lost the original order after de-duplicating"</td><td>Ask whether it sorted to find repeats</td><td>Sorting rearranges. A set does not touch the order</td></tr>
    <tr><td>"Memory grew until it fell over"</td><td>Ask what the cache throws away, and when</td><td>A cache with no forgetting rule is an unbounded queue. Lesson 5.4</td></tr>
  </table>
  <div class="tbl-cap">Rows two, three and six are the same absence with three different costs: duplicate work, no termination, and a slow memory leak. In each case the missing thing is a set, and a set is the cheapest structure in this entire course to add.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Every customer charged twice, occasionally.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"A small number of customers get charged twice. It is rare, we cannot reproduce it, and it always follows a period when our payment provider was slow. Our code sends the charge request, waits, and retries if it times out. The provider says every request they received was distinct and they processed each one exactly once."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Both sides are behaving correctly","lanes":[{"label":"The team"},{"label":"You"},{"label":"The system"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Rare double charges, always after provider slowness"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: what happens when a request times out?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"It retries. The first one may still be in flight"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"So two genuine requests arrive, and both are valid"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"The provider is right: they are distinct requests"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"Nothing anywhere asks: have I already done this one?"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Send an id with each charge, and keep a set of them"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"Neither side has a bug. A timeout means the answer did not arrive, not that the work did not happen, so a retry is a reasonable thing to do and a second charge is a reasonable thing to process. The missing piece is not in either system, it is the question nobody asks."}'></div>

  <p><strong>Both systems are behaving correctly, which is why nobody could find the fault.</strong> A timeout means the answer did not come back, not that the work did not happen. Retrying is right, and processing a distinct request is right. What is missing is a set: send an identifier with each charge, and have the receiver ask one question before doing anything. <em class="k">Have I seen this before?</em></p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It stopped hunting for a broken component. <strong>Retries make duplicates inevitable, exactly as Lesson 5.4 said</strong>, where every abandoned request sent again is a new arrival. You cannot prevent the second request and you should not try. You make the second one harmless, and the structure that does that is the cheapest one in this course: one question, one step, and no comparison with anything.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one week of your own repeats</div>
    <p>For one day, keep a running list of every website you open, writing each address only if it is not already on your page. <strong>First:</strong> notice that you are doing a lookup before every write, and that you are scanning your own list to do it, which is Lesson 6.2. <strong>Second:</strong> after fifty entries, time how long each check takes and watch it grow. <strong>Third:</strong> now group your list into ten columns by the last digit of the address length, and check only the matching column. That is this whole chapter, done by hand, and you will feel the check stop growing.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">Customers are occasionally charged twice, always after the payment provider was slow. The provider confirms every request it received was distinct and processed once. Where is the fault?</div>
    <div class="opt" data-i="0">In the provider, since it should detect duplicate charges itself</div>
    <div class="opt" data-i="1">In the retry logic, which should never retry a payment</div>
    <div class="opt" data-i="2">Nowhere in either system. Nothing asks whether this particular charge has been done before, which needs an id and a set</div>
    <div class="qexp">A timeout means the answer did not arrive, not that the work did not happen, so retrying is correct and processing a distinct request is correct. Lesson 5.4 already established that retries turn one arrival into two. You cannot prevent the second request, so you make it harmless: attach an identifier and ask one question before acting. That question is one step and compares nothing.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">Finding the distinct values among a million ids: sorting first costs about 20,000,000 comparisons. What does a set cost, and what else differs?</div>
    <div class="opt" data-i="0">About the same, since both must examine every item once</div>
    <div class="opt" data-i="1">About 1,000,000 steps, and the arrival order survives, which sorting destroys</div>
    <div class="opt" data-i="2">More, because each lookup must handle collisions</div>
    <div class="qexp">Sorting is a genuinely good answer here and Lesson 7.1 priced it exactly: about 20,000,000 comparisons for a million items, after which repeats are neighbours. A set asks one question per item, so one pass, and it never compares two items with each other. The second half matters as much as the first: sorting rearranges your data to answer the question, and if the arrival order mattered you have paid twice.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>You can now build with this. <strong>The last lesson is hearing it</strong>, because hashing problems almost never arrive as somebody asking for a hash table. They arrive as duplicate emails, a crawler that will not finish, a cache that made things slower, and one particular customer who is always slow. In every one of them, somebody has traded memory and order for an answer without a search, or has failed to.</p>
  </div>
__NAV__
</div>`
,

"8.5": `<div class="wrap">
  <div class="les-kicker">Chapter 8 · Lesson 8.5</div>
  <h1 class="les-title">How Hashing Problems Show Up, and Where It Runs in Production</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~12 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">Nobody asks for a hash table. They report a duplicate, a crawler that will not stop, or one customer who is always slow.</p>

  <p class="lead">You can build with this now. This lesson is hearing it, which is the harder half, and it is one question with three follow-ups. By the end you can take a complaint that mentions none of this chapter and say whether the answer is a computed address, and what memory and order it will cost you if it is.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Four complaints, one structure.</div>
  <p><em class="k">Some customers got the same email twice.</em> <em class="k">The import takes four hours and most of it is checking for duplicates.</em> <em class="k">One region is always slow and we cannot see why.</em> <em class="k">We added a cache and the page got slower.</em> Four sentences, four teams, <strong>and every one of them is this chapter.</strong></p>

  <div class="viz" data-viz='{"type":"scene","title":"Four complaints, and not one says hash","width":820,"height":280,"items":[{"icon":"person","x":115,"y":126,"kind":"gold","label":"the same email twice"},{"icon":"person","x":315,"y":126,"kind":"gold","label":"four hours of duplicate checking"},{"icon":"person","x":525,"y":126,"kind":"gold","label":"one region is always slow"},{"icon":"server","x":740,"y":124,"kind":"bad","label":"the cache made it slower"}],"arrows":[{"x1":600,"y1":126,"x2":676,"y2":126,"style":"gold","label":"and this one is the trap"}],"caption":"The first three are a missing computed address. The fourth is one that exists and is not doing its job, which is the only one of the four that gets worse when you add more of this chapter to it."}'></div>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One question, then three that price it.</div>
  <p>The instrument is the same shape as Lesson 6.7 and Lesson 7.7: <strong>ask the question of the complaint, not of the code.</strong> One question decides whether this chapter applies at all.</p>

  <div class="viz" data-viz='{"type":"flow","title":"The instrument, and the three prices","maxChars":18,"nodes":[{"id":"s","label":"Somebody reports a problem","col":0,"row":1,"kind":"gold"},{"id":"q","label":"Is the question only ever about ONE EXACT key?","col":1,"row":1,"kind":"dark","shape":"diamond"},{"id":"n","label":"No: ranges, order or nearest. Chapter 6, not this one","col":2,"row":0,"kind":"bad"},{"id":"y","label":"Yes: a computed address answers it in one step","col":2,"row":2,"kind":"accent"},{"id":"p","label":"Then pay three prices: memory, no order, and a rule that mixes","col":3,"row":2,"kind":"gold"}],"edges":[{"from":"s","to":"q"},{"from":"q","to":"n","label":"no"},{"from":"q","to":"y","label":"yes","style":"green"},{"from":"y","to":"p","label":"and","style":"green"}],"caption":"The no branch is the off switch and it fires more often than people expect, because show me everything between two dates and what is nearest to this both sound like lookups and neither one is. If the question has a range, an order or a nearest in it, this chapter cannot help at any price."}'></div>

  <p>And if the answer is yes, three prices, all of which this chapter has already charged: <strong>memory you keep empty, order you give up, and a rule that genuinely mixes your keys.</strong></p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The same complaint, priced at four sizes.</div>
  <p>An import spends most of four hours checking for duplicates. Watch what each answer costs as the pile grows, and notice which line stops mattering.</p>

  <div class="board" data-anim='{"type":"race","title":"Duplicate checking, three answers, four sizes","speed":1700,"legend":[["work done","look"],["finished","found"],["hopeless","bad"]],"tracks":[{"label":"Compare all pairs","data":[1,2,3,4,5,6,7,8,9,10],"countLabel":" units of work"},{"label":"Sort, then scan","data":[1,2,3,4,5,6,7,8,9,10],"countLabel":" units of work"},{"label":"A set","data":[1,2,3,4,5,6,7,8,9,10],"countLabel":" units of work"}],"steps":[{"badge":"1,000 records","lanes":[{"look":[0],"count":"500,000"},{"look":[0],"count":"10,000"},{"look":[0],"count":"1,000"}],"say":"A thousand records. All three are fine and nobody would notice a difference. <b>This is where most systems are when the choice gets made</b>, and it is why the choice usually gets made badly."},{"badge":"100,000 records","lanes":[{"look":[0,1,2,3,4],"count":"5,000,000,000"},{"look":[0,1],"count":"1,700,000"},{"look":[0],"count":"100,000"}],"say":"A hundred times the records. The first lane is now <b>five billion</b>, because comparing all pairs squares. The other two grew roughly in step with the data."},{"badge":"1,000,000 records","lanes":[{"bad":[0,1,2,3,4,5,6,7,8,9],"count":"500,000,000,000"},{"look":[0,1,2],"count":"20,000,000"},{"look":[0],"count":"1,000,000"}],"say":"A million. The first lane is hopeless and would not finish tonight. <b>The second is Lesson 7.1 exact figure and it is a genuinely good answer.</b> The third is one pass."},{"badge":"and the honest column","lanes":[{"bad":[0,1,2,3,4,5,6,7,8,9],"count":"500,000,000,000"},{"found":[0,1,2],"count":"20,000,000"},{"found":[0],"count":"1,000,000"}],"say":"Twenty times between the last two, <b>and the sort also rearranged the data</b>. If arrival order mattered, the middle lane charged you twice and the right lane charged you a table of empty boxes."}],"caption":"The first lane is the one people write by accident and it is the only one that becomes impossible rather than slow. The gap between the last two is real but modest, and the deciding factor is usually not speed at all: it is whether you were allowed to reorder the data."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Where it is already running, without being asked for.</div>

  <div class="viz" data-viz='{"type":"seq","title":"One request, and the computed addresses inside it","actors":[{"label":"Your request","kind":"gold"},{"label":"The service","kind":"accent"},{"label":"The store","kind":"muted"}],"messages":[{"from":0,"to":1,"label":"here is my session token","style":"gold"},{"from":1,"to":1,"label":"look up the session: one step"},{"from":1,"to":1,"label":"have I seen this request id before: one step"},{"from":1,"to":2,"label":"fetch the record by its exact id","style":"green"},{"from":2,"to":1,"label":"one step, from an index built on exact keys","style":"green"},{"from":1,"to":1,"label":"is this response already cached: one step"}],"caption":"Four computed addresses in one ordinary request, and nobody designed a hash table to get any of them. They are what a session lookup, an idempotency check, an exact-key fetch and a cache are made of, and each is one step whatever the system holds."}'></div>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Six systems, and what each of them decided.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The system</th><th>The question it asks</th><th>What it paid</th></tr>
    <tr><td>A signup duplicate check</td><td>Is this exact address present</td><td>Memory. Lesson 6.2 debt, settled in 8.1</td></tr>
    <tr><td>A payment retry guard</td><td>Have I already done this exact charge</td><td>An id on every request, and a set to hold them</td></tr>
    <tr><td>A crawler</td><td>Have I visited this exact page</td><td>Memory that grows with pages seen, or it never stops</td></tr>
    <tr><td>A database index on an exact key</td><td>Where is the row with this id</td><td>A second structure, updated on every write. Lesson 6.5</td></tr>
    <tr><td>A response cache</td><td>Did I compute this before</td><td>Memory, plus a rule for what to forget. Lesson 5.3</td></tr>
    <tr><td>A report grouped by status</td><td>Which pile does this belong in</td><td>Nothing. Lesson 7.5 counting, which is this idea without storage</td></tr>
  </table>
  <div class="tbl-cap">The last row is the honest edge of the chapter. Counting sort places an item by what it IS rather than by comparing it, which is the same move as computing an address, and it is why Lesson 7.5 escaped the comparison floor. The two chapters meet here.</div></div>

  <div class="viz" data-viz='{"type":"dtree","title":"Should you put a computed address in front of this","maxChars":20,"gx":50,"nodes":[{"id":"q1","label":"Is the question one exact key?","col":0,"row":2,"kind":"gold","shape":"diamond"},{"id":"n1","label":"Chapter 6. This chapter cannot help at any price","col":1,"row":0,"kind":"muted"},{"id":"q2","label":"Is discovering a miss cheaper than doing the work?","col":1,"row":3,"kind":"gold","shape":"diamond"},{"id":"n2","label":"It will make everything slower. Nobody prices a miss","col":2,"row":1,"kind":"muted"},{"id":"q3","label":"Can you spend memory that grows with what you have seen?","col":2,"row":4,"kind":"gold","shape":"diamond"},{"id":"bound","label":"Bound it and accept forgetting. Lesson 5.3","col":3,"row":3,"kind":"accent"},{"id":"keep","label":"Store it and ask once. One step","col":3,"row":5,"kind":"accent"}],"edges":[{"from":"q1","to":"n1","label":"no"},{"from":"q1","to":"q2","label":"yes","style":"green"},{"from":"q2","to":"n2","label":"no"},{"from":"q2","to":"q3","label":"yes","style":"green"},{"from":"q3","to":"bound","label":"no"},{"from":"q3","to":"keep","label":"yes","style":"green"}],"caption":"The middle question is the one the cache in block 9 failed, and it failed it while reporting a perfectly respectable hit rate. A miss has to be discovered before any work starts, so if discovering it costs a scan, the seventy percent who miss pay the scan and then pay the full price anyway. Both bottom destinations are correct answers; they differ only in what you are willing to spend."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Three prices, and the one nobody budgets for.</div>

  <div class="viz" data-viz='{"type":"card","title":"What a computed address charges","eyebrow":"ALWAYS, NOT SOMETIMES","badge":"three prices","width":560,"rows":[{"k":"Memory kept empty on purpose","v":"about half the table","tone":"bad","bar":0.5},{"k":"Order, ranges and nearest","v":"gone entirely","tone":"bad","bar":1},{"k":"A rule that mixes the whole key","v":"or one region goes slow","tone":"bad","bar":0.3},{"k":"And in exchange, a lookup that costs","v":"1 step, at any size","tone":"good","bar":0.001},{"k":"Which does not change when you grow","v":"still 1 step","tone":"good","bar":0.001}],"caption":"Every bar is a rough weight. The second row is the largest bill in this chapter and the one that gets discovered late, usually the first time somebody asks for a report sorted by date. Lesson 6.8 wrote it into its invoice as one step, and no ranges ever."}'></div>

  <p><strong>The second row is the one that gets discovered late.</strong> A team builds on computed addresses because lookups are instant, and then somebody asks for the records between two dates, or the twenty most recent, or the nearest match, and there is no cheap answer anywhere in the structure.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five complaints, and the question hiding under each.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"What people say when they mean this chapter","unit":178,"nodes":[{"id":"c","label":"Nobody says the word hash","x":2,"y":1,"kind":"dark"},{"id":"d","label":"Some customers got the same email twice","x":0,"y":0,"kind":"gold"},{"id":"i","label":"Most of the import is checking for duplicates","x":0,"y":2,"kind":"accent"},{"id":"r","label":"One region is slow and nothing about them is different","x":4,"y":0,"kind":"accent"},{"id":"m","label":"Memory grew all week and then it fell over","x":4,"y":2,"kind":"bad"},{"id":"o","label":"And: can we show these in date order","x":2,"y":3,"kind":"bad"}],"edges":[{"from":"c","to":"d","label":"no seen-before set","style":"gold"},{"from":"c","to":"i","label":"comparing instead of computing"},{"from":"c","to":"r","label":"keys that do not mix. Lesson 8.2"},{"from":"c","to":"m","label":"a cache with no forgetting rule"},{"from":"c","to":"o","label":"the bill, arriving"}],"caption":"The bottom node is the one that ends the chapter honestly. It is not a bug report, it is the invoice for a decision made months earlier, and there is no fix inside this chapter for it. That question belongs to Chapter 6 sorted branch and always did."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Seven sentences, and the question to ask each one.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The question to ask</th><th>What it is really telling you</th></tr>
    <tr><td>"The duplicate check got slower every month"</td><td>Does a yes cost less than a no?</td><td>Lesson 6.2 scan. This chapter is the fix</td></tr>
    <tr><td>"Customers were charged twice after an outage"</td><td>What makes a repeat harmless?</td><td>Nothing. Retries need an id and a set</td></tr>
    <tr><td>"Most lookups are instant, a few are not"</td><td>What else computes to that box?</td><td>A clash, or keys that do not mix. Lesson 8.2</td></tr>
    <tr><td>"It slowed down and we barely added records"</td><td>What is the load factor now?</td><td>The cliff. Lesson 8.3</td></tr>
    <tr><td>"We sized it exactly to save memory"</td><td>What was the empty space for?</td><td>It was the speed. Lesson 8.3 block 9</td></tr>
    <tr><td>"Can we show these in date order"</td><td>What order do the boxes have?</td><td>None, and never will. This is the bill</td></tr>
    <tr><td>"The cache made the page slower"</td><td>What does a miss cost before any work starts?</td><td>A cache lookup must be one step or it is overhead</td></tr>
  </table>
  <div class="tbl-cap">Rows one to five are answered inside this chapter. Row six cannot be, at any price, and saying so early is worth more than any optimisation. Row seven is the only case where the answer is to remove hashing rather than add it.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">The cache that made everything slower.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"We added a cache in front of an expensive report and the page got slower for everybody. The report itself takes about four seconds. Cache hits are fast. But the overall page is worse than before we added it, and our hit rate looks reasonable at about thirty percent."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"A thirty percent hit rate that costs more than it saves","lanes":[{"label":"The team"},{"label":"You"},{"label":"The cache"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Cache added, page slower, hit rate 30 percent"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: what does a MISS cost, before any work starts?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"It scans a list of cached keys to check"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"So seventy percent of requests pay that, then pay the report too"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"The check is Lesson 6.2, not Lesson 8.1"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"A cache lookup must be one step or it is pure overhead"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Compute the address instead of searching the keys"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"The hit rate was never the problem and thirty percent is a perfectly respectable number. What matters is what the other seventy percent pay before they even begin, and here they paid a scan to be told the thing they wanted was not there."}'></div>

  <p><strong>A cache is a bet, and the losing side pays first.</strong> Seventy percent of requests miss, and a miss must be discovered before any real work begins. If discovering it is a scan, every one of those requests pays the scan and then pays the four seconds anyway. The lookup being one step is not an optimisation of a cache, it is the precondition for a cache to be worth having at all.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked about the misses rather than the hits. <strong>Everybody measures hit rate and almost nobody prices a miss</strong>, and the miss is the common case in most caches. This is the same shape as Lesson 6.2, where nine checks in ten were a no and the no was the expensive answer, arriving one chapter later wearing a completely different costume.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one system you rely on</div>
    <p>Pick anything you use that looks something up: your email search, a password manager, a music library. <strong>First:</strong> ask it for one exact thing by name and notice the wait. <strong>Second:</strong> ask it for a range, everything from last March, and notice whether that felt different. <strong>Third:</strong> decide which of the two it was built for, because almost nothing is built for both, and the one it is bad at will tell you what its designers decided to sell.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A cache is added in front of a four second report. Hits are fast and the hit rate is about thirty percent, yet the page got slower for everybody. Why?</div>
    <div class="opt" data-i="0">A thirty percent hit rate is too low for a cache to be worthwhile</div>
    <div class="opt" data-i="1">The miss is discovered by scanning the cached keys, so seventy percent of requests pay a search and then pay the report anyway</div>
    <div class="opt" data-i="2">Caching a slow report always adds more overhead than it saves</div>
    <div class="qexp">Everybody measures hit rate and almost nobody prices a miss, which is the common case in most caches. If discovering a miss costs a scan, the losing side of the bet pays twice: once to find out the answer is not there and once to compute it. That check is exactly Lesson 6.2 arriving inside a cache, and the fix is Lesson 8.1: compute the address rather than search for the key.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">A team builds on computed addresses because lookups are instant. Six months later somebody asks to show records between two dates. What do you tell them?</div>
    <div class="opt" data-i="0">Add an index on the date column to the same table</div>
    <div class="opt" data-i="1">Increase the table size so range scans become faster</div>
    <div class="opt" data-i="2">This structure cannot answer that at any price, because the boxes were filled by arithmetic and have no order, so the question belongs to a different structure</div>
    <div class="qexp">Lesson 6.8 wrote this into its invoice before the chapter began: one step, and no ranges ever. The address is computed from an exact key, so neighbouring boxes hold unrelated things and there is no such thing as the next record. Saying so early is worth more than any optimisation, because the honest answer is a second structure that keeps order, which is Lesson 6.5 and its own permanent bill.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Hashing trades memory and order for the one thing nothing else gives you, an answer without a search. <strong>The whiteboard runs the whole chapter end to end:</strong> an address computed rather than found, two keys wanting one box, a table doubling and re-scattering everything, and the one question that no computed address will ever answer.</p>
  </div>
__NAV__
</div>`,

"8.6": `<div class="wrap">
  <div class="les-kicker">Chapter 8 · Lesson 8.6</div>
  <h1 class="les-title">The Whiteboard: Keys Falling Into Buckets</h1>
  <div class="les-meta">
    <span class="pill">whiteboard</span><span class="pill">~1 min</span>
    <span class="pill gold">watch, do not read</span><span class="pill">10 acts</span>
  </div>

  <p class="motto">Hashing trades memory and order for the one thing nothing else gives you: an answer without a search.</p>

  <p class="lead">Hashing trades memory and order for the one thing nothing else gives you, an answer without a search, and this is that whole trade with the prose taken out. Ten acts in four parts, and every number on the boards is arithmetic you can check by hand. <strong>Part 3 runs the machine inside a table somebody shrank to save memory, a payment charged twice where neither side had a bug, and a cache that made every page slower.</strong></p>
</div>

<div class="reel" data-reel='{"title":"An answer without a search, and what it costs","speed":1600,"caption":"Ten acts, about one minute end to end. Part 2 builds the whole machine on real arithmetic you can check by hand. Part 3 runs it inside a table somebody shrank to save memory, a payment charged twice, and a cache that made everything slower.","acts":[{"part":"Part 1 · The idea","tab":"Compute, do not look","title":"Act 1 · The address was never unknown","type":"reveal","speed":1650,"viz":{"maxChars":16,"gy":42,"nodes":[{"id":"q","label":"Where is it?","col":0,"row":1,"kind":"dark"},{"id":"l","label":"Look for it: scan, halve, walk a shape","col":1,"row":0,"kind":"accent"},{"id":"c","label":"Compute it: arithmetic on the key itself","col":1,"row":2,"kind":"gold"},{"id":"lr","label":"Cost grows with how much you have","col":2,"row":0,"kind":"accent"},{"id":"cr","label":"Cost never mentions how much you have","col":2,"row":2,"kind":"gold"},{"id":"cd","label":"And it answers one exact key, and nothing else","col":2,"row":3,"kind":"bad"}],"edges":[{"from":"q","to":"l"},{"from":"q","to":"c"},{"from":"l","to":"lr"},{"from":"c","to":"cr"},{"from":"c","to":"cd"}]},"steps":[{"show":["q"],"look":["q"],"say":"Every structure in this course answers one question, and there are only two ways to do it."},{"show":["q","l","lr"],"found":["l"],"seen":["lr"],"say":"Chapters 6 and 7 looked: scanning, halving, walking a shape. <b>Every one of them costs more as the pile grows.</b>"},{"show":["q","l","lr","c","cr"],"found":["l","c"],"seen":["lr","cr"],"say":"This chapter computes. <b>The cost does not mention the pile at all</b>, which no other structure here manages."},{"show":["q","l","lr","c","cr","cd"],"found":["c"],"seen":["lr","cr"],"bad":["cd"],"say":"And the counterweight arrives in the same breath. <b>The address comes from one exact key</b>, so ranges, order and nearest all go at once."}]},{"part":"Part 2 · The methods","tab":"One step","title":"Act 2 · Four names, and the counter never moves","type":"array-scan","speed":1500,"big":true,"data":["ana","raj","sam","mia"],"capacity":8,"countLabel":" looks","pointerLabels":{"i":"computing"},"legend":[["being placed","look"],["stored","found"],["read back in one step","seen"]],"steps":[{"capacity":8,"order":[null,null,null,null,null,null,null,null],"count":0,"say":"Eight boxes, numbered 0 to 7. The rule: <b>add up the letters, take the remainder on eight.</b>"},{"capacity":8,"order":[0,null,null,null,null,1,null,null],"found":[0],"look":[1],"ptr":{"i":5},"count":0,"say":"ana is 16, which leaves nothing, so box 0. raj is 29, which leaves 5. <b>No box was examined to decide either.</b>"},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[0,2,1,3],"ptr":{"i":7},"count":0,"badge":"4 stored, 0 looks","say":"sam to box 1, mia to box 7. <b>Four names stored and the counter is still zero.</b>"},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"seen":[2],"found":[0,1,3],"ptr":{"i":1},"count":1,"badge":"is sam here? 1 look","say":"Is sam here? Compute, get 1, look in box 1. <b>One look.</b> Lesson 6.2 needed about 95,000 to answer the same shape of question."}]},{"part":"Part 2 · The methods","tab":"The clash","title":"Act 3 · leo wants a box that is taken","type":"array-scan","speed":1500,"big":true,"data":["ana","raj","sam","mia","leo"],"capacity":8,"countLabel":" boxes touched","pointerLabels":{"i":"probing"},"legend":[["stored","found"],["occupied, keep walking","bad"],["where it settled","seen"]],"steps":[{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[2,1,3],"bad":[0],"ptr":{"i":0},"count":1,"say":"leo is 32, which leaves nothing, so <b>box 0. And ana is in it.</b> Nothing went wrong: two names computed to one address."},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[1,3],"bad":[0,2],"ptr":{"i":1},"count":2,"say":"One answer is to walk. Box 0 taken, box 1 taken. <b>The counter is moving, and in Act 2 it never did.</b>"},{"capacity":8,"order":[0,2,4,null,null,1,null,3],"found":[0,2,1,3],"seen":[4],"ptr":{"i":2},"count":3,"badge":"ana 1, sam 1, leo 3","say":"Box 2 is free, so leo lives there. <b>Three boxes touched, and the cost stopped being a property of leo alone.</b>"}]},{"part":"Part 2 · The methods","tab":"The chain","title":"Act 4 · Or let the box hold two","type":"graph-walk","speed":1500,"directed":true,"unit":124,"legend":[["the box you computed","look"],["walking the chain","seen"],["found it","found"]],"nodes":[{"id":"b0","label":"0","x":0,"y":0},{"id":"b1","label":"1","x":1,"y":0},{"id":"b5","label":"5","x":2,"y":0},{"id":"ana","label":"ana","x":0,"y":1},{"id":"leo","label":"leo","x":0,"y":2},{"id":"sam","label":"sam","x":1,"y":1},{"id":"raj","label":"raj","x":2,"y":1}],"edges":[{"from":"b0","to":"ana"},{"from":"ana","to":"leo"},{"from":"b1","to":"sam"},{"from":"b5","to":"raj"}],"steps":[{"edges":["b0-ana","ana-leo","b1-sam","b5-raj"],"look":["b0"],"say":"The other answer: <b>box 0 holds a chain</b>, which is the structure Chapter 4 built. Reading leo: compute, get box 0, one step."},{"edges":["b0-ana","ana-leo","b1-sam","b5-raj"],"seen":["b0","ana"],"found":["leo"],"say":"Then walk. <b>One step plus one hop</b>, and sam and raj are untouched. The cost of the clash stayed inside the box it happened in."}]},{"part":"Part 2 · The methods","tab":"The resize","title":"Act 5 · Doubling re-scatters everything","type":"array-scan","speed":1700,"data":["ana","raj","sam","mia","kai"],"capacity":16,"countLabel":" boxes touched","pointerLabels":{"i":"arriving"},"legend":[["stored","found"],["a clash","bad"],["rehashed","seen"]],"steps":[{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[0,2,1,3],"badge":"4 of 8: load 0.5","say":"Four names, eight boxes. <b>Load factor 0.5</b>, and lookups are one step because clashes are rare here."},{"capacity":8,"order":[0,2,null,null,null,1,null,3],"found":[0,2,3],"bad":[1],"ptr":{"i":5},"badge":"5 of 8: load 0.63","say":"kai is 21, which leaves 5, and raj is there. <b>That crosses the line.</b>"},{"capacity":16,"order":[0,2,null,null,null,1,null,3],"found":[0,2,1,3],"badge":"double to 16","say":"So the table doubles. <b>This is Lesson 3.3, with a different trigger:</b> a row grows when full, this grows when half full."},{"capacity":16,"order":[0,2,null,null,null,4,null,3,null,null,null,null,null,1,null,null],"seen":[0,2,3,1],"found":[4],"badge":"every lookup: 1 step","say":"And every address is recomputed, because none were ever written down. raj leaves 5 on eight and 13 on sixteen. <b>The clash is gone. Doubling re-scattered the keys.</b>"}]},{"part":"Part 2 · The methods","tab":"Dedup","title":"Act 6 · Nine ids, four repeats, zero comparisons","type":"array-scan","speed":1500,"big":true,"data":[41,17,41,63,17,88,41,63,25],"countLabel":" comparisons","pointerLabels":{"i":"asking"},"legend":[["being asked","look"],["new: kept","found"],["a repeat: dropped","bad"]],"steps":[{"order":[0,1,2,3,4,5,6,7,8],"look":[0],"ptr":{"i":0},"count":0,"say":"Nine order ids. For each one: compute its box and ask whether it is already there."},{"order":[0,1,2,3,4,5,6,7,8],"found":[0,1],"bad":[2],"look":[2],"ptr":{"i":2},"count":0,"say":"41 again. <b>Its box already holds 41, so it is a repeat</b>, discovered in one step without looking at any other id."},{"order":[0,1,2,3,4,5,6,7,8],"found":[0,1,3,5,8],"bad":[2,4,6,7],"count":0,"badge":"9 in, 5 kept, 0 comparisons","say":"<b>Nine in, five kept, and the comparison counter never moved.</b> Chapter 7 would have sorted, at about 20,000,000 comparisons for a million, and it would have destroyed the arrival order."}]},{"part":"Part 3 · The same rules in things you used today","tab":"The wrong choice","title":"Act 7 · Somebody saved memory","type":"array-scan","speed":1600,"data":["ana","raj","sam","mia","kai","leo","zoe","ida"],"capacity":16,"countLabel":" boxes touched","legend":[["stored","found"],["had to walk to find a free box","bad"]],"steps":[{"capacity":16,"order":[0,2,null,null,null,4,null,3,null,null,null,null,null,1,null,null],"found":[0,2,4,3,1],"count":1,"badge":"5 of 16: 1 step","say":"<b>This is Act 5, working.</b> Five names, sixteen boxes, every lookup one step. And it uses about twice the memory of the data."},{"capacity":8,"order":[0,2,null,null,null,1,4,3],"found":[0,2,1,3],"bad":[4],"count":2,"badge":"5 records, 8 boxes","say":"Somebody noticed that and sized the table down to match the record count. <b>Memory dropped, and kai already had to walk one box to fit.</b>"},{"capacity":8,"order":[0,2,5,6,7,1,4,3],"found":[0,2,1,3],"bad":[4,5,6,7],"count":6,"badge":"8 of 8: load 1.0","say":"Three more arrive and the table is completely full. leo computes to box 0, finds ana, walks to 1, finds sam, and settles in 2. zoe computes to 6 and has to walk past five occupied boxes before it settles in 3. <b>Walking is no longer occasional, it is the normal path.</b> At 99 percent full, finding a free box walks about five thousand of them; at half it walked two."},{"capacity":8,"order":[0,2,5,6,7,1,4,3],"found":[0,1,2,3],"bad":[4,5,6,7],"count":6,"badge":"the empty half WAS the speed","say":"<b>The empty half was not waste. It was the product.</b> Lesson 6.8 wrote it into the invoice as spare memory, permanently, in the same row that promised one step."}]},{"part":"Part 3 · The same rules in things you used today","tab":"This is Act 6, on a payment","title":"Act 8 · Charged twice, and nothing is broken","type":"reveal","speed":1600,"viz":{"maxChars":17,"gy":42,"nodes":[{"id":"s","label":"Send the charge","col":0,"row":1,"kind":"gold"},{"id":"t","label":"Provider is slow. The answer does not arrive","col":1,"row":1,"kind":"warn"},{"id":"r","label":"So retry. This is correct","col":2,"row":0,"kind":"accent"},{"id":"p","label":"Provider sees two distinct requests. Also correct","col":2,"row":2,"kind":"accent"},{"id":"c","label":"Customer charged twice","col":3,"row":1,"kind":"bad"},{"id":"f","label":"The fix: an id, and one question. Have I seen this?","col":4,"row":1,"kind":"gold"}],"edges":[{"from":"s","to":"t"},{"from":"t","to":"r"},{"from":"t","to":"p"},{"from":"r","to":"c"},{"from":"p","to":"c"},{"from":"c","to":"f"}]},"steps":[{"show":["s","t"],"look":["t"],"say":"A charge is sent and the provider is slow. <b>A timeout means the answer did not arrive, not that the work did not happen.</b>"},{"show":["s","t","r","p"],"found":["r","p"],"say":"So the sender retries, which is correct. And the provider processes a distinct request, which is also correct. <b>Neither side has a bug.</b>"},{"show":["s","t","r","p","c"],"found":["r","p"],"bad":["c"],"say":"And the customer is charged twice. Lesson 5.4 said it: <b>every abandoned request sent again is a new arrival.</b>"},{"show":["s","t","r","p","c","f"],"bad":["c"],"found":["f"],"say":"You cannot prevent the second request. <b>You make it harmless.</b> Send an id, and ask one question before acting, which is Act 6 with a different name."}]},{"part":"Part 3 · The same rules in things you used today","tab":"This is Act 2, in a cache","title":"Act 9 · The cache that made it slower","type":"race","speed":1600,"legend":[["work being done","look"],["answered","found"],["wasted","bad"]],"tracks":[{"label":"Miss: scanning the keys","data":[1,2,3,4,5,6,7,8],"countLabel":" ms before any work"},{"label":"Miss: computing the address","data":[1,2,3,4,5,6,7,8],"countLabel":" ms before any work"}],"steps":[{"badge":"hit rate 30 percent","lanes":[{"count":0},{"count":0}],"say":"A cache in front of a four second report. Hits are fast, the hit rate is thirty percent, <b>and the page got slower for everybody.</b>"},{"badge":"the 70 percent that miss","lanes":[{"look":[0,1,2,3,4,5],"count":"a scan"},{"look":[0],"count":"1 step"}],"say":"Everybody measures hits. <b>Nobody prices a miss</b>, and here seven requests in ten miss. On the left, finding that out means scanning the cached keys."},{"badge":"then they pay anyway","lanes":[{"bad":[0,1,2,3,4,5],"count":"scan + 4s"},{"found":[0],"count":"1 step + 4s"}],"say":"And then they pay the four seconds regardless. <b>The losing side of the bet paid twice.</b> This is Lesson 6.2 running inside a cache, one chapter later in a different costume."}]},{"part":"Part 4 · The map","tab":"The map","title":"Act 10 · One question, and three prices","type":"reveal","speed":1650,"viz":{"maxChars":16,"gy":42,"nodes":[{"id":"q","label":"Is the question about ONE EXACT key?","col":0,"row":1,"kind":"gold"},{"id":"n","label":"No: ranges, order, nearest. Chapter 6, not this","col":1,"row":0,"kind":"bad"},{"id":"y","label":"Yes: one step, at any size","col":1,"row":2,"kind":"accent"},{"id":"p1","label":"Price: memory kept empty on purpose","col":2,"row":1,"kind":"gold"},{"id":"p2","label":"Price: order, ranges and nearest, gone","col":2,"row":2,"kind":"gold"},{"id":"p3","label":"Price: a rule that mixes the whole key","col":2,"row":3,"kind":"gold"}],"edges":[{"from":"q","to":"n"},{"from":"q","to":"y"},{"from":"y","to":"p1"},{"from":"y","to":"p2"},{"from":"y","to":"p3"}]},"steps":[{"show":["q"],"look":["q"],"say":"One question decides whether this chapter applies at all."},{"show":["q","n"],"bad":["n"],"say":"If there is a range, an order or a nearest in it, <b>this chapter cannot help at any price.</b> That branch belongs to Chapter 6."},{"show":["q","n","y"],"bad":["n"],"found":["y"],"say":"If it is one exact key: <b>one step, and the cost never mentions how much you hold.</b>"},{"show":["q","n","y","p1","p2","p3"],"bad":["n"],"found":["y"],"look":["p1","p2","p3"],"say":"And three prices, all charged always. Memory you keep empty, order you give up, and a rule that genuinely mixes."},{"show":["q","n","y","p1","p2","p3"],"bad":["n"],"found":["y","p1","p2","p3"],"say":"<b>Hashing trades memory and order for the one thing nothing else gives you: an answer without a search.</b> The middle price is the one discovered late."}]}]}'></div>

<div class="wrap" style="padding-top:34px;">
  <h2><span class="ix gold">✓</span> What You Just Watched</h2>

  <div class="tbl-wrap"><table>
    <tr><th>The idea</th><th>What it costs</th><th>Acts</th><th>Where it came back in Part 3</th></tr>
    <tr><td>Compute the address</td><td>one step, at any size</td><td>2</td><td>Act 9, where a cache did not, and paid twice</td></tr>
    <tr><td>Two keys, one box</td><td>walking, or a chain in the box</td><td>3, 4</td><td>Act 7, where a full table made walking the normal path</td></tr>
    <tr><td>Load factor</td><td>about half the table, kept empty</td><td>5, 7</td><td>Act 7, the memory saving that removed the speed</td></tr>
    <tr><td>Rehashing on growth</td><td>every address recomputed at once</td><td>5</td><td>The reason a resize is a rebuild, not an extension</td></tr>
    <tr><td>A set</td><td>one question, no comparison</td><td>6</td><td>Act 8, the missing question behind a double charge</td></tr>
    <tr><td>And what it refuses</td><td>order, ranges and nearest, entirely</td><td>1, 10</td><td>The bill, which always arrives late</td></tr>
  </table>
  <div class="tbl-cap">Read the second column down the page. Every row is a price, and the last one is the price nobody puts in the plan, because it is not discovered until somebody asks for a report sorted by date.</div></div>

  <div class="callout accent">
    <div class="ch">The line to carry out of this chapter</div>
    <p>Every other structure in this course answers where is it by looking. <strong>This one computes the answer and never looks at all</strong>, and it pays for that with memory it keeps empty on purpose, an order it destroys by construction, and a rule that has to genuinely mix your keys.</p>
  </div>

  <div class="callout warn">
    <div class="ch">And the line from Act 7</div>
    <p>Somebody noticed the table used twice the memory of its data, sized it to fit exactly, and the lookups collapsed. <strong>The empty half was not waste, it was the product.</strong> Lesson 6.8 had already written it into the invoice as spare memory permanently, in the same row that promised one step, because they are the same purchase.</p>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">In Act 2 four names are stored and the look counter never leaves zero. Why?</div>
    <div class="opt" data-i="0">Because the table was empty, so nothing needed checking</div>
    <div class="opt" data-i="1">Because the counter only measures reads, not writes</div>
    <div class="opt" data-i="2">Because the box is computed from the key itself, so storing never involves examining any other box</div>
    <div class="qexp">Every other structure in this course finds a position by looking at what is already there. Here the arithmetic produces the address directly, so placing a name consults nothing. That is also why reading is one step: the same key always computes the same box, so nothing has to be remembered about where anything went.</div>
  </div>

  <div class="quiz" data-correct="0">
    <div class="q">In Act 5 the table doubles and every key gets a new address, even keys that had no clash. Why can it not simply add empty boxes at the end?</div>
    <div class="opt" data-i="0">Because the address is computed from the number of boxes, so changing that number invalidates every address at once</div>
    <div class="opt" data-i="1">Because the keys need to be sorted into the larger space</div>
    <div class="opt" data-i="2">Because the new boxes would otherwise never be used</div>
    <div class="qexp">raj is 29, which leaves 5 on eight boxes and 13 on sixteen. Nothing recorded where raj was, so the table can only find it by recomputing, and the recomputation now gives a different answer. Every key is in the wrong place the instant the size changes. That is what makes a resize a rebuild, and it is also why doubling re-scatters the keys and can make an existing clash vanish.</div>
  </div>
__NAV__
</div>`
