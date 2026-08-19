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
