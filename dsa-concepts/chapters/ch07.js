/* ===== Chapter 07 - Sorting: Putting Things in Order - DSA Concepts (2026) =====
   Through line: sorting is never the goal, it is the investment you make so that every later
   question becomes cheap.
   Ten blocks per concept lesson, then the whiteboard. See CONSISTENCY.md.
   RULES: no em-dashes; no backticks in content; no dollar-brace; no apostrophes inside
   a data-viz, data-anim or data-reel payload. */

"7.1": `<div class="wrap">
  <div class="les-kicker">Chapter 7 · Lesson 7.1</div>
  <h1 class="les-title">Why Sort At All: The Question Searching Asked</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">Sorting is never the goal. It is the invoice six chapters have been quoting.</p>

  <p class="lead">Lesson 6.3 said binary search is not fast, it is prepaid, and somebody else paid. Chapter 6 then spent nine lessons spending that money. This is the lesson where you finally meet the payer, read the itemised bill, and learn the one question that decides whether the investment was ever worth making.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Nobody sorts a drawer for fun.</div>
  <p>Nobody has ever alphabetised anything because alphabetical order is pleasant. They did it because <strong>they were tired of looking.</strong> A spice rack gets sorted after the fourth time somebody bought cumin they already had. A library was sorted once, by somebody who is not in the building today, so that everybody after them could walk straight to a shelf.</p>

  <div class="viz" data-viz='{"type":"scene","title":"The person who paid, and everybody who spends it","width":820,"height":280,"items":[{"icon":"person","x":120,"y":126,"kind":"gold","label":"somebody sorted it once"},{"icon":"shelf","x":360,"y":124,"kind":"accent","label":"and is not in the building today"},{"icon":"person","x":600,"y":126,"kind":"box","label":"everybody after them walks straight to a shelf"},{"icon":"doc","x":760,"y":124,"kind":"muted","label":"and never sees the bill"}],"arrows":[{"x1":180,"y1":126,"x2":300,"y2":126,"style":"gold","label":"paid once, in full"},{"x1":430,"y1":126,"x2":540,"y2":126,"style":"green","label":"spent forever, by others"}],"caption":"Lesson 6.3 called binary search prepaid and named nobody. This is the missing person. Sorting is the only thing in this course where the payer and the beneficiary are almost never the same, which is exactly why it is so often paid for by accident or not at all."}'></div>

  <p>That is the whole shape of sorting. <strong>One person pays, and everybody after them spends it</strong>, which is why the decision is so often made badly. The payer is looking at a cost and the beneficiary is looking at a benefit, and they are rarely in the same conversation.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">An investment, and investments have a break even.</div>
  <p>Sorting is not a way of finding things. It finds nothing. It is <strong>a one-off purchase of an arrangement</strong>, made so that every later question becomes cheap. That makes it the only thing in this course you should price the way you price a machine rather than an operation.</p>

  <div class="viz" data-viz='{"type":"arch","title":"Not an operation. A purchase","maxChars":18,"nodes":[{"id":"s","label":"Sorting: paid once, up front","col":0,"row":1,"kind":"gold"},{"id":"b","label":"Binary search: 20 looks instead of a million","col":2,"row":0,"kind":"accent"},{"id":"r","label":"Ranges: everything between two dates, no rows read outside","col":2,"row":1,"kind":"accent"},{"id":"g","label":"Grouping and duplicates: equal things land together","col":2,"row":2,"kind":"accent"},{"id":"t","label":"Top ten: the answer is the first ten boxes","col":2,"row":3,"kind":"accent"},{"id":"w","label":"And the bill nobody reads: every later insert","col":0,"row":3,"kind":"bad"}],"edges":[{"from":"s","to":"b","label":"buys","style":"green"},{"from":"s","to":"r","label":"buys","style":"green"},{"from":"s","to":"g","label":"buys","style":"green"},{"from":"s","to":"t","label":"buys","style":"green"},{"from":"s","to":"w","label":"and owes"}],"caption":"Four different questions become cheap from one purchase, which is what makes sorting worth more than it first appears. The red node is the half Lesson 6.5 refused to keep paying, and Lesson 7.6 is where real systems decide how to live with it."}'></div>

  <p>And notice what one purchase buys. Not one cheap question. <strong>Four completely different questions</strong>, and only the first of them is the one Chapter 6 talked about.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The investment, and the exact search where it pays for itself.</div>
  <p>A thousand items. On the left, no order is bought and every search scans, averaging 500 looks. On the right, the row is sorted once for about 10,000 comparisons and then every search costs 10. <strong>Watch the two running totals, not the two methods.</strong></p>

  <div class="board" data-anim='{"type":"race","title":"A thousand items, and the search where the order pays for itself","speed":1700,"legend":[["searching now","look"],["searches done","seen"],["the crossing","found"],["still behind","bad"]],"tracks":[{"label":"Never sort. Scan","data":["1","5","10","15","20","21","25","30","35","40"],"countLabel":" looks so far"},{"label":"Sort once, then halve","data":["1","5","10","15","20","21","25","30","35","40"],"countLabel":" looks so far"}],"steps":[{"badge":"before anybody asks","lanes":[{"count":0},{"count":"10,000"}],"say":"Nothing has been searched yet and one side is already ten thousand looks down. <b>That is the purchase</b>, and it is why sorting feels wasteful at the moment you do it."},{"badge":"after 1 search","lanes":[{"look":[0],"count":500},{"look":[0],"count":"10,010"}],"say":"One search. The scan spends 500 looks. The sorted row spends 10. <b>The gap is still enormous and the scan is winning comfortably.</b>"},{"badge":"after 10 searches","lanes":[{"seen":[0,1],"look":[2],"count":"5,000"},{"seen":[0,1],"look":[2],"count":"10,100"}],"say":"Ten searches in, and the scan is still ahead. Anybody measuring here would conclude that sorting was a mistake, and on this evidence they would be right."},{"badge":"after 20 searches","lanes":[{"seen":[0,1,2,3],"look":[4],"count":"10,000"},{"seen":[0,1,2,3],"look":[4],"count":"10,200"}],"say":"Twenty searches. <b>Level, almost exactly.</b> The scan has now spent the entire purchase price, one search at a time, without ever noticing it was paying."},{"badge":"the 21st search","lanes":[{"seen":[0,1,2,3,4],"bad":[5],"count":"10,500"},{"seen":[0,1,2,3,4],"found":[5],"count":"10,210"}],"say":"<b>Search twenty one is where it crosses.</b> Nothing changed about either method. The investment simply finished repaying itself, and from here the gap only widens."},{"badge":"after 40 searches","lanes":[{"bad":[0,1,2,3,4,5,6,7,8,9],"count":"20,000"},{"found":[0,1,2,3,4,5,6,7,8,9],"count":"10,400"}],"say":"Forty searches, and the scan has spent twice what the sorted row has. <b>Sorting was never faster.</b> It was cheaper, from the twenty first question onwards."}],"caption":"The crossing is the whole lesson, and the number to keep is not 21 but the question behind it: how many times will you ask before the answer changes? Lesson 6.8 made that the fourth question of the whole search family, and this board is where the number comes from."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What putting things in order physically is.</div>
  <p>Sorting has no clever move in it. <strong>It is comparisons and it is moves</strong>, the two currencies Chapter 2 gave you, and every algorithm in this chapter is a different mix of the two.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Six numbers, and what a sort actually does to them","speed":1500,"big":true,"data":[7,2,9,4,1,5],"countLabel":" moves","pointerLabels":{"i":"placing"},"legend":[["being compared","look"],["in its final place","found"],["still unsorted","seen"]],"steps":[{"order":[0,1,2,3,4,5],"look":[0,1],"count":0,"say":"Six numbers in the order they arrived. <b>Nothing here is wrong yet</b>, because arrival order is a perfectly good order until somebody asks a question it cannot answer."},{"order":[4,0,1,2,3,5],"look":[4],"found":[4],"count":1,"say":"The 1 belongs at the front, so it travels there and everything it passed slides right. <b>Watch the box, not the position:</b> one box is one value for this whole animation."},{"order":[4,1,0,2,3,5],"found":[4,1],"look":[1],"count":2,"say":"The 2 lands next to it. Two values are now in their final places and four are still homeless."},{"order":[4,1,3,0,2,5],"found":[4,1,3],"seen":[0,2,5],"count":3,"say":"The 4 moves in front of the 7 and the 9. <b>Three moves so far, and the position labels underneath have not moved at all</b>, because positions never move. Values do."},{"order":[4,1,3,5,0,2],"found":[4,1,3,5],"seen":[0,2],"count":4,"say":"The 5 slots in. Only the 7 and the 9 are left, and they are already in the right order relative to each other."},{"order":[4,1,3,5,0,2],"found":[4,1,3,5,0,2],"count":4,"badge":"1 2 4 5 7 9","say":"<b>Sorted, in four moves.</b> No value was created, destroyed or changed. Every single thing that happened was a comparison or a move, and the rest of this chapter is only ever arguing about how many of each."}],"caption":"This is the physical act underneath every algorithm in the chapter. The whole argument from here is how few comparisons and how few moves you can get away with, and what you have to know about the data to get away with fewer."}'></div>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Four questions one purchase makes cheap.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The question</th><th>On an unsorted row</th><th>On a sorted row</th></tr>
    <tr><td>Is this value here</td><td>up to 1,000,000 looks</td><td>20 looks, from Lesson 6.3</td></tr>
    <tr><td>Everything between two dates</td><td>read all million and test each</td><td>two searches, then read only the answer</td></tr>
    <tr><td>Are there duplicates</td><td>compare everything with everything</td><td>one pass. Equal things are already neighbours</td></tr>
    <tr><td>The ten largest</td><td>a full pass, keeping a running ten</td><td>the last ten boxes. No searching at all</td></tr>
  </table>
  <div class="tbl-cap">Only the first row is what Chapter 6 talked about. The other three are why sorting survives in systems where nobody ever runs a binary search, and rows three and four are the reason a report that was never about searching still gets faster when somebody sorts.</div></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The itemised bill, at a million.</div>
  <p>A thousand items costs about <strong>10,000 comparisons</strong> to sort, which is roughly one pass per doubling: ten passes, a thousand items each. Scale that to a million and it is <strong>twenty passes of a million</strong>, about 20,000,000 comparisons, which is the figure Lesson 6.8 put on its invoice.</p>

  <div class="viz" data-viz='{"type":"card","title":"The bill Chapter 6 kept quoting","eyebrow":"A MILLION ITEMS","badge":"paid once, then again","width":560,"rows":[{"k":"Sort it once","v":"about 20,000,000 comparisons","tone":"bad","bar":1},{"k":"Then every search costs","v":"20 looks","tone":"good","bar":0.000001},{"k":"But every later insert costs","v":"about 500,000 moves","tone":"bad","bar":0.025},{"k":"Because keeping a row sorted is Lesson 3.2","v":"half the row slides","tone":"bad","bar":0.025},{"k":"Break even against scanning","v":"about 21 searches","tone":"good","bar":0.000001}],"caption":"Every bar is drawn against a maximum of 20,000,000. Rows one and two are the trade everybody knows about. Rows three and four are the one nobody budgets for, and they are the reason Lesson 6.5 stopped keeping order in a row at all."}'></div>

  <p>In the Chapter 2 currency, the sorts in this chapter are <em class="g">O(n log n)</em>, which is the shape Lesson 2.2 named as one pass per doubling. <strong>And the bill does not stop when the sort finishes.</strong> Every later arrival has to be put in the right place, which on a row is the Lesson 3.2 shuffle, forever.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places, and in three of them nobody chose to sort.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Order somebody already paid for","unit":178,"nodes":[{"id":"c","label":"An order that exists before you ask","x":2,"y":1,"kind":"dark"},{"id":"g","label":"git history, in time order because history happened","x":0,"y":0,"kind":"gold"},{"id":"l","label":"A log file, in time order for the same free reason","x":0,"y":2,"kind":"gold"},{"id":"d","label":"A database index, sorted on write, deliberately","x":4,"y":0,"kind":"accent"},{"id":"r","label":"A leaderboard, which is a sort somebody runs on purpose","x":4,"y":2,"kind":"accent"},{"id":"m","label":"A merge of two already-sorted files, which Lesson 7.3 builds on","x":2,"y":3,"kind":"box"}],"edges":[{"from":"c","to":"g","label":"free, as a side effect","style":"gold"},{"from":"c","to":"l","label":"free, as a side effect","style":"gold"},{"from":"c","to":"d","label":"paid on every write","style":"green"},{"from":"c","to":"r","label":"paid on a schedule","style":"green"},{"from":"c","to":"m","label":"already paid, twice"}],"caption":"The two gold nodes are the cheapest order in computing: nobody sorted anything, the data simply arrived in the order it happened. Lesson 6.3 used exactly that when it explained git bisect, and it is worth looking for before you pay for anything."}'></div>

  <p>The two gold nodes are worth stealing. <strong>The cheapest sort is the one that already happened for another reason</strong>, and a surprising amount of data arrives in time order without anybody deciding it should.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Seven sentences, and the question under all of them.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"We sort it every time before searching"</td><td>Count searches per sort</td><td>The purchase is being made fresh each time. Below 21, scanning was cheaper</td></tr>
    <tr><td>"Sorting is the slowest part of the job"</td><td>Ask what the sort buys afterwards</td><td>If nothing downstream uses the order, it is a cost with no benefit</td></tr>
    <tr><td>"Finding duplicates takes hours"</td><td>Ask whether the data is sorted first</td><td>Sorted, duplicates are neighbours and one pass finds them all</td></tr>
    <tr><td>"The report is slow and it does not even search"</td><td>Ask whether it groups, ranks or de-duplicates</td><td>Three jobs that get cheap from order, and none of them is a search</td></tr>
    <tr><td>"Writes got slow after we sorted the table"</td><td>Ask what happens when a new row arrives</td><td>The shuffle, on every insert. Lesson 6.5 is the fix</td></tr>
    <tr><td>"It is already in date order, so we sort it anyway to be safe"</td><td>Ask where the data came from</td><td>The order was free and is being bought a second time</td></tr>
    <tr><td>"We only ever need the top ten"</td><td>Ask whether the other 999,990 need ordering</td><td>A full sort for a question that never needed one. Lesson 7.5</td></tr>
  </table>
  <div class="tbl-cap">Rows one, two, six and seven are all the same mistake wearing different clothes: an investment being made without anybody asking what it returns. Rows three and four are the opposite mistake, an investment nobody made that would have paid immediately.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">The nightly job that sorts four million rows for nothing.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our nightly job pulls about four million rows, sorts them by customer id, and then writes them into the warehouse. The sort is by far the slowest step and it has been growing every month. We have been asked to make the sort faster. Nobody remembers who added it, and the warehouse load after it does not seem to care what order the rows arrive in."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Nobody asked what the order was for","lanes":[{"label":"The team"},{"label":"You"},{"label":"The job"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Make the sort faster. It is the slowest step"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: what reads this order afterwards?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"The warehouse load. It does not care"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Then the purchase has no beneficiary at all"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"It was added years ago to help a report"},{"id":"c3","lane":2,"col":3,"kind":"bad","label":"That report was retired last year"},{"id":"b3","lane":1,"col":4,"kind":"accent","label":"So delete the sort, not optimise it"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"c3"},{"from":"c3","to":"b3"}],"caption":"The request was to make the slowest step faster, and the slowest step did not need to exist. An investment outlives the thing it was bought for, because nothing ever reminds anybody to cancel it."}'></div>

  <p><strong>The fastest sort is the one you do not run.</strong> The order was bought for a report that no longer exists, and nothing in the system ever raised its hand to say the beneficiary had gone. The sort was not slow because it was badly written. It was slow because it was four million rows of work with nobody on the other end.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It refused the question it was asked. Instead of <em class="k">how do we make this faster</em> it asked <strong>what reads this order afterwards?</strong> Sorting is the one operation in this course whose entire value lives outside itself, so it is the one place where the right first move is always to look downstream rather than at the code in front of you.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one drawer and one week</div>
    <p>Find something in your home that is not sorted and that you look through regularly: a spice rack, a toolbox, a folder of documents. <strong>Round one:</strong> over one week, count how many times you go looking in it, and roughly how long each hunt takes. <strong>Round two:</strong> estimate honestly how long it would take to put the whole thing in some order, once. <strong>Round three:</strong> divide the second number by the time each hunt costs you, and you have your own break even, in searches. Then decide, and notice that you now have a reason rather than a feeling.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A list of a thousand items costs about 10,000 comparisons to sort, and each later search then saves about 490 looks against scanning. It will be searched five times and then rebuilt. What should you do?</div>
    <div class="opt" data-i="0">Sort it, because sorted data is faster to search and that is always worth having</div>
    <div class="opt" data-i="1">Scan it, because five searches saves about 2,450 looks against a 10,000 look purchase that never repays</div>
    <div class="opt" data-i="2">Sort it, because the sort will pay for itself after the second search</div>
    <div class="qexp">Sorting is an investment and investments have a break even, which sits at about twenty one searches here. At five searches you would spend 10,000 to save roughly 2,450, and then throw the order away. Nothing about sorted data is wrong; it is simply a purchase whose beneficiary never turned up, and Lesson 6.2 defended exactly this case.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">A nightly job spends most of its time sorting four million rows, and the step that runs afterwards does not depend on the order. What is the fix?</div>
    <div class="opt" data-i="0">Use a faster sorting algorithm, since sorting is the bottleneck</div>
    <div class="opt" data-i="1">Sort a sample instead of the full four million rows</div>
    <div class="opt" data-i="2">Remove the sort, because an order with no reader is a cost with no benefit</div>
    <div class="qexp">Sorting is the one operation in this chapter whose entire value lives outside itself, so the first question is never how fast it is but what reads it afterwards. An order nobody consumes is pure expense, and it usually survives because it was bought for something real that has since been retired, with nothing in the system to notice the beneficiary is gone.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>You now know what the order costs and what it buys. <strong>The rest of this chapter is how the bill gets smaller.</strong> Next: the three simplest ways to put things in order, one of which is genuinely bad, one of which is what your hands already do with playing cards, and one of which is still inside the sort your programming language ships today.</p>
  </div>
__NAV__
</div>`
,

"7.2": `<div class="wrap">
  <div class="les-kicker">Chapter 7 · Lesson 7.2</div>
  <h1 class="les-title">The Simple Three: Bubble, Selection, Insertion</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">10 visuals</span>
  </div>

  <p class="motto">There are not three simple sorts. There is one question, and three different answers about what a comparison is allowed to buy.</p>

  <p class="lead">Lesson 7.1 said every event in a sort is a comparison or a move. These three methods spend those two currencies in completely different proportions, and one of them is still inside the sort your programming language ships today. By the end you can say which one your data wants before you know anything about the algorithms.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Your hands already picked one.</div>
  <p>You are dealt a hand of cards. Nobody has ever sorted a hand by repeatedly scanning it for the lowest card, and nobody has ever swapped neighbours over and over until it settled. <strong>You pick up one card at a time and push it into place</strong> among the cards you are already holding.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Three ways to sort a hand, and the one everybody actually uses","width":820,"height":280,"items":[{"icon":"person","x":120,"y":126,"kind":"gold","label":"you, holding a sorted hand"},{"icon":"doc","x":330,"y":124,"kind":"accent","label":"one new card at a time"},{"icon":"shelf","x":560,"y":124,"kind":"muted","label":"pushed into place among what you hold"},{"icon":"pile","x":740,"y":128,"kind":"box","label":"the rest, still face down"}],"arrows":[{"x1":180,"y1":126,"x2":268,"y2":126,"style":"green","label":"already in order"},{"x1":392,"y1":124,"x2":500,"y2":124,"style":"gold","label":"where does this one go"}],"caption":"That is insertion sort, and your hands chose it without being taught. The reason is that it is the only one of the three that gets cheaper when the thing you are adding to is already in order, and a hand of cards always is."}'></div>

  <p>That is one of the three, and your hands chose it for a reason this lesson will make explicit. <strong>It is the only one of the three that gets cheaper when what you are adding to is already in order.</strong></p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One comparison, three different purchases.</div>
  <p>Lesson 6.2 said one look eliminates one box, and that was the whole reason a scan is slow. Sorting has the same question with a different verb: <strong>what does one comparison actually buy?</strong></p>

  <div class="viz" data-viz='{"type":"arch","title":"What one comparison buys, three ways","maxChars":18,"nodes":[{"id":"q","label":"What does one comparison buy?","col":0,"row":1,"kind":"dark"},{"id":"b","label":"Bubble: it fixes one adjacent pair, and nothing else","col":1,"row":0,"kind":"bad"},{"id":"s","label":"Selection: it narrows the hunt for one extreme","col":1,"row":1,"kind":"accent"},{"id":"i","label":"Insertion: it may end the search for this card immediately","col":1,"row":2,"kind":"gold"},{"id":"br","label":"So it needs many, and moves constantly","col":2,"row":0,"kind":"bad"},{"id":"sr","label":"So it places one item perfectly, with almost no moving","col":2,"row":1,"kind":"accent"},{"id":"ir","label":"So it is nearly free when the data is nearly in order","col":2,"row":2,"kind":"gold"}],"edges":[{"from":"q","to":"b"},{"from":"q","to":"s"},{"from":"q","to":"i"},{"from":"b","to":"br","label":"and so"},{"from":"s","to":"sr","label":"and so","style":"green"},{"from":"i","to":"ir","label":"and so","style":"green"}],"caption":"Read the middle column and the right column falls out of it. Nothing about these three is a matter of style: each one is a different answer to what a single comparison is permitted to conclude, and everything about their behaviour follows from that."}'></div>

  <p>Bubble only ever compares neighbours, so one comparison can only ever settle one adjacent pair. <strong>That single restriction is why it is the slow one</strong>, and it is not a coding flaw.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Same eight numbers, and the sorted part grows from different ends.</div>
  <p>Three methods on the same starting row: 7, 2, 9, 4, 1, 5, 8, 3. Each cell below is a <strong>position</strong>, not a value, and green means that position now holds the value it will end with. Watch two things: the running comparison count, and <em class="k">which end the green grows from.</em></p>

  <div class="board" data-anim='{"type":"race","title":"Three sorts, eight positions, and where the order appears","speed":1700,"legend":[["settled: this position is final","found"],["sorted so far, but may still shift","seen"],["still unsorted","look"]],"tracks":[{"label":"Bubble","data":[1,2,3,4,5,6,7,8],"countLabel":" comparisons"},{"label":"Selection","data":[1,2,3,4,5,6,7,8],"countLabel":" comparisons"},{"label":"Insertion","data":[1,2,3,4,5,6,7,8],"countLabel":" comparisons"}],"steps":[{"badge":"7 2 9 4 1 5 8 3","lanes":[{"count":0},{"count":0},{"count":0}],"say":"The same eight numbers in all three lanes, in the same order. <b>Nothing has been compared yet.</b>"},{"badge":"after one pass","lanes":[{"found":[7],"count":7},{"found":[0],"count":7},{"seen":[0,1],"count":1}],"say":"One pass each. Bubble has walked the whole row and pushed the largest to <b>the right end</b>. Selection scanned the whole row to place the smallest at <b>the left end</b>. Both spent seven comparisons to place one item. Insertion spent <b>one</b>, and placed nothing permanently."},{"badge":"after three passes","lanes":[{"found":[5,6,7],"count":18},{"found":[0,1,2],"count":18},{"seen":[0,1,2,3],"count":5}],"say":"The two counters on the left are identical and will stay identical, because both do the same shrinking scan. <b>Insertion is less than a third of the way up.</b>"},{"badge":"after five passes","lanes":[{"found":[3,4,5,6,7],"count":25},{"found":[0,1,2,3,4],"count":25},{"seen":[0,1,2,3,4,5],"count":12}],"say":"Green grows from opposite ends, which is the clearest visible difference between the two. Insertion green is a different colour on purpose: <b>its front is sorted, but the next card can still push into the middle of it.</b>"},{"badge":"28, 28, 20","lanes":[{"found":[0,1,2,3,4,5,6,7],"count":28},{"found":[0,1,2,3,4,5,6,7],"count":28},{"found":[0,1,2,3,4,5,6,7],"count":20}],"say":"All three finish with the identical row. <b>Twenty eight, twenty eight and twenty comparisons.</b> And the number not on this board is the one that separates the first two: bubble moved fifteen times, selection moved three."}],"caption":"Two of these three lanes are the same cost in comparisons and wildly different in moves, and the third is cheaper in comparisons for a reason that has nothing to do with cleverness. Every difference on this board comes from what one comparison was allowed to conclude."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">The move nobody counts.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Two sorts, the same comparisons, opposite move counts","actors":[{"label":"Bubble","kind":"bad"},{"label":"The row","kind":"muted"},{"label":"Selection","kind":"accent"}],"messages":[{"from":0,"to":1,"label":"these two are out of order, swap them"},{"from":1,"to":0,"label":"done. That is 15 swaps so far"},{"from":2,"to":1,"label":"I have looked at all of you and found the smallest"},{"from":1,"to":2,"label":"and","style":"green"},{"from":2,"to":1,"label":"one swap. That is 3 in total","style":"green"}],"caption":"Identical comparison counts and five times the moving. Bubble commits after every comparison, so it moves constantly and often moves the same value repeatedly. Selection commits once per pass, having looked at everything first, which is why it does the fewest moves of any sort in this chapter."}'></div>

  <p><strong>Bubble commits after every comparison. Selection commits once per pass.</strong> That is the entire difference between fifteen moves and three, on identical data with an identical number of comparisons.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Three methods, and the one situation each is actually best at.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The method</th><th>What it is genuinely best at</th><th>What it costs you</th></tr>
    <tr><td>Selection</td><td>The fewest moves of anything here, never more than one per pass</td><td>Always the full comparison count, even on sorted data</td></tr>
    <tr><td>Insertion</td><td>Data that is already nearly in order, where it is close to free</td><td>Moves a lot when the data is badly out of order</td></tr>
    <tr><td>Bubble</td><td>Nothing. It is never the best answer to any question</td><td>The full comparison count and the most moves</td></tr>
  </table>
  <div class="tbl-cap">Bubble earns its place in this table by being the honest loser: it is worth knowing precisely because it shows what happens when a comparison is allowed to conclude as little as possible. Selection is the one to reach for when moving an item is genuinely expensive, which is a real situation and not a textbook one.</div></div>

  <p>And now the reason insertion sort survives into modern systems, which the first board could not show. Here it is on data that is <strong>already nearly in order</strong>: only one pair out of place.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Nearly sorted, and the same method costs almost nothing","speed":1500,"big":true,"data":[1,2,3,5,4,6,7,8],"countLabel":" comparisons","pointerLabels":{"i":"this card"},"legend":[["the card being placed","look"],["already in order","seen"],["moved","found"]],"steps":[{"order":[0,1,2,3,4,5,6,7],"look":[1],"seen":[0],"count":1,"say":"Pick up the 2. Compare it with the 1 to its left. <b>It is bigger, so it stays put and the search ends immediately.</b> One comparison, no move."},{"order":[0,1,2,3,4,5,6,7],"look":[3],"seen":[0,1,2],"count":3,"say":"Same for the 3 and the 5. Each one is bigger than its left neighbour, so each costs exactly one comparison and stops. <b>Three cards placed for three comparisons.</b>"},{"order":[0,1,2,4,3,5,6,7],"look":[4],"found":[4],"seen":[0,1,2],"count":5,"say":"The 4 is smaller than the 5, so it moves left one place and stops. <b>Two comparisons and one move</b>, and this is the only real work in the entire sort."},{"order":[0,1,2,4,3,5,6,7],"seen":[0,1,2,4,3],"look":[5],"count":6,"say":"The 6 is bigger than the 5. One comparison, stop."},{"order":[0,1,2,4,3,5,6,7],"found":[0,1,2,4,3,5,6,7],"count":8,"badge":"8 comparisons, 1 move","say":"<b>Eight comparisons and one move.</b> On the same eight items, bubble and selection would both spend twenty eight comparisons and would not notice the data was nearly sorted at all."}],"caption":"Eight against twenty eight, on identical data, and the method did not change. Insertion sort is the only one of the three that can stop early, because a card that is bigger than its left neighbour is already home and there is nothing left to check."}'></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Three costs, and only one of them moves with the data.</div>
  <p>On eight items in random order: bubble is 28 comparisons and 15 moves, selection is 28 and 3, insertion is 20 and 15. Now change the data rather than the method. <strong>Nearly sorted: insertion drops to 8 comparisons.</strong> The other two do not move at all.</p>

  <div class="viz" data-viz='{"type":"card","title":"Eight items, three methods, two kinds of data","eyebrow":"COMPARISONS","badge":"same eight items","width":560,"rows":[{"k":"Random order: bubble","v":"28 comparisons, 15 moves","tone":"bad","bar":1},{"k":"Random order: selection","v":"28 comparisons, 3 moves","tone":"good","bar":1},{"k":"Random order: insertion","v":"20 comparisons, 15 moves","tone":"good","bar":0.71},{"k":"Nearly sorted: bubble and selection","v":"28 comparisons, unchanged","tone":"bad","bar":1},{"k":"Nearly sorted: insertion","v":"8 comparisons","tone":"good","bar":0.29}],"caption":"Every bar is drawn against a maximum of 28 comparisons. Rows four and five are the whole reason this lesson exists: two methods that cannot see the shape of their data, and one that can. In the Chapter 2 currency all three are O(n squared) in the worst case, and insertion alone is O(n) when the data is already nearly in order."}'></div>

  <p>That last line is what carries this method into real software. <strong>All three are the same shape when the data is random.</strong> Only one of them gets dramatically cheaper when the data is not, and real data is very rarely random.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places, and one of them is inside the sort you use every day.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Where the simple three actually run","unit":178,"nodes":[{"id":"c","label":"Simple sorts, and where they still win","x":2,"y":1,"kind":"dark"},{"id":"h","label":"Inside a real language sort, on the small pieces. Lesson 7.6","x":0,"y":0,"kind":"gold"},{"id":"n","label":"A list that is already almost in order and gets one new item","x":0,"y":2,"kind":"gold"},{"id":"m","label":"Where moving an item is genuinely expensive, so selection wins","x":4,"y":0,"kind":"accent"},{"id":"s","label":"Anything under about twenty items, where the fancy sorts lose to overhead","x":4,"y":2,"kind":"accent"},{"id":"b","label":"And bubble sort, which lives almost entirely in classrooms","x":2,"y":3,"kind":"bad"}],"edges":[{"from":"c","to":"h","label":"insertion, on small runs","style":"gold"},{"from":"c","to":"n","label":"insertion, nearly free","style":"gold"},{"from":"c","to":"m","label":"selection, fewest moves","style":"green"},{"from":"c","to":"s","label":"simple beats clever","style":"green"},{"from":"c","to":"b","label":"honestly, nowhere"}],"caption":"The top left node is the surprise. The sophisticated sorts in Lessons 7.3 and 7.4 split their work into smaller and smaller pieces, and when a piece gets small enough almost every real implementation stops splitting and finishes it with insertion sort, because on twenty items it genuinely wins."}'></div>

  <p>That first node is worth holding on to. <strong>Insertion sort is not the sort you graduate from.</strong> It is the sort that the clever ones call when their pieces get small, and Lesson 7.6 is where that arrangement gets its name.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Seven sentences, and the shape of the data is under most of them.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"Re-sorting after adding one row takes as long as the first sort"</td><td>Ask what the sort does with data already in order</td><td>A method that cannot see existing order. Insertion can</td></tr>
    <tr><td>"It is fast on our nightly file and slow on the live one"</td><td>Compare how ordered each arrives</td><td>The nightly file arrives nearly sorted, and something is exploiting it</td></tr>
    <tr><td>"Sorting these is slow and each item is a huge object"</td><td>Count moves, not comparisons</td><td>Moving is the expensive act here, which is selection sort case</td></tr>
    <tr><td>"It got slower when we doubled the list"</td><td>Ask whether it got four times slower</td><td>Four times for double is the simple-sort shape. Lesson 7.3 fixes it</td></tr>
    <tr><td>"Sorting twenty items is slower with the fancy library"</td><td>Compare against a simple sort at that size</td><td>Below about twenty, the overhead costs more than it saves</td></tr>
    <tr><td>"The data is already sorted and it still takes the full time"</td><td>Ask if the sort can stop early</td><td>Selection and bubble never notice. Insertion notices immediately</td></tr>
    <tr><td>"We wrote our own bubble sort because it is simple"</td><td>Ask what it is best at</td><td>Nothing. Insertion is the same difficulty and strictly better</td></tr>
  </table>
  <div class="tbl-cap">Rows one, two and six are the same question asked three ways: can this method see that its data is already partly in order? Two of the three cannot, and that blindness costs more in practice than any difference in their comparison counts.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">The same file, sorted twice a day, and only one of them is slow.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"We sort the same product list twice a day. The morning run takes about forty seconds. The evening run takes about forty seconds too. The odd thing is that the evening run is sorting a list that is already sorted, because the morning run sorted it and only about thirty rows changed during the day. Somebody suggested caching the result, but the thirty changes are real and have to land."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Already sorted, and it still pays full price","lanes":[{"label":"The team"},{"label":"You"},{"label":"The job"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Evening run sorts sorted data, still 40 seconds"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: can this sort tell that the data is already in order?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"No. It scans the same way whatever it is given"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Then order it already has is worth nothing to it"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"About 30 rows out of place, out of 200,000"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"A method that stops early would barely work at all"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Or do not re-sort. Insert 30 rows into an ordered list"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"Caching was the wrong instinct because the thirty changes are real. The right observation is that the evening job is being handed an enormous amount of order for free and is throwing all of it away, because the method it uses cannot see order that already exists."}'></div>

  <p><strong>The evening run is not sorting a hard problem. It is being handed a nearly finished one and refusing to notice.</strong> Thirty rows out of two hundred thousand are out of place, and a method that can stop early does almost nothing on the other 199,970. The honest fix is smaller still: do not re-sort at all, and insert thirty rows into a list that is already in order.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked one question about the method rather than about the machine: <strong>can this sort tell that its data is already in order?</strong> Most cannot, and that blindness is invisible in a benchmark because benchmarks use random data. The moment somebody notices that real input arrives nearly sorted, the choice of method stops being a matter of taste.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one deck of cards</div>
    <p>Deal ten cards face up in a row. <strong>Round one:</strong> sort them by repeatedly swapping any two neighbours that are out of order, and count both your comparisons and your swaps. <strong>Round two:</strong> reshuffle, then sort by scanning for the lowest card, moving it to the front, and repeating, again counting both. <strong>Round three:</strong> reshuffle, then pick the cards up one at a time and push each into place in your hand. Now the question that matters: <strong>which round had the fewest swaps, and which had the fewest comparisons?</strong> They are not the same round, and that is the entire lesson.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">A nightly job re-sorts a 200,000 row list that is already sorted apart from about thirty rows, and it takes the same time as sorting it from scratch. Why?</div>
    <div class="opt" data-i="0">Sorted data is a worst case for most sorting algorithms</div>
    <div class="opt" data-i="1">The list is too large to detect existing order efficiently</div>
    <div class="opt" data-i="2">The method it uses cannot see order that already exists, so it does the same work whatever it is given</div>
    <div class="qexp">Selection and bubble do the full comparison count on every input, sorted or not, because neither has any step at which it could conclude it is finished early. Insertion sort can: a card bigger than its left neighbour is already home. On thirty rows out of two hundred thousand that difference is enormous, and it is invisible in any benchmark run on random data.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">Bubble and selection sort do the same number of comparisons on the same eight items, 28 each. Bubble makes 15 moves and selection makes 3. Where does that difference come from?</div>
    <div class="opt" data-i="0">Selection uses a more efficient comparison that rules out more items</div>
    <div class="opt" data-i="1">Bubble commits after every comparison, while selection looks at everything first and then moves once</div>
    <div class="opt" data-i="2">Bubble compares each pair twice, which doubles its work</div>
    <div class="qexp">The comparison counts are identical because both perform the same shrinking scan. What differs is when each one is willing to act. Bubble swaps the instant it sees a pair out of order, so the same value can be moved many times on its way across the row. Selection gathers all the information first and then makes at most one move per pass, which gives it the fewest moves of any sort in this chapter and makes it the right choice when moving an item is expensive.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>All three of these share one limit: <strong>doubling the data makes them four times slower</strong>, because each item is compared against many others. The next two lessons break that, and they do it with the same idea in two different disguises. First: stop trying to sort the whole thing at once.</p>
  </div>
__NAV__
</div>`
