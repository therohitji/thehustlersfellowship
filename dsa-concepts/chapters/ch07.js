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
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
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

  <p class="lead">Lesson 7.1 said every event in a sort is a comparison or a move. These three methods spend those two currencies in completely different proportions, and one of them is still inside the sort your programming language ships today. By the end you can say which one your data wants before you know anything about the algorithms. Sorting is never the goal, so what matters here is which of these buys the cheapest investment.</p>

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

  <div class="board" data-anim='{"type":"race","title":"Three sorts, eight positions, and where the order appears","speed":1700,"legend":[["settled: this position is final","found"],["sorted so far, but may still shift","seen"]],"tracks":[{"label":"Bubble","data":[1,2,3,4,5,6,7,8],"countLabel":" comparisons"},{"label":"Selection","data":[1,2,3,4,5,6,7,8],"countLabel":" comparisons"},{"label":"Insertion","data":[1,2,3,4,5,6,7,8],"countLabel":" comparisons"}],"steps":[{"badge":"7 2 9 4 1 5 8 3","lanes":[{"count":0},{"count":0},{"count":0}],"say":"The same eight numbers in all three lanes, in the same order. <b>Nothing has been compared yet.</b>"},{"badge":"after one pass","lanes":[{"found":[7],"count":7},{"found":[0],"count":7},{"seen":[0,1],"count":1}],"say":"One pass each. Bubble has walked the whole row and pushed the largest to <b>the right end</b>. Selection scanned the whole row to place the smallest at <b>the left end</b>. Both spent seven comparisons to place one item. Insertion spent <b>one</b>, and placed nothing permanently."},{"badge":"after three passes","lanes":[{"found":[5,6,7],"count":18},{"found":[0,1,2],"count":18},{"seen":[0,1,2,3],"count":5}],"say":"The two counters on the left are identical and will stay identical, because both do the same shrinking scan. <b>Insertion is less than a third of the way up.</b>"},{"badge":"after five passes","lanes":[{"found":[3,4,5,6,7],"count":25},{"found":[0,1,2,3,4],"count":25},{"seen":[0,1,2,3,4,5],"count":12}],"say":"Green grows from opposite ends, which is the clearest visible difference between the two. Insertion green is a different colour on purpose: <b>its front is sorted, but the next card can still push into the middle of it.</b>"},{"badge":"28, 28, 20","lanes":[{"found":[0,1,2,3,4,5,6,7],"count":28},{"found":[0,1,2,3,4,5,6,7],"count":28},{"found":[0,1,2,3,4,5,6,7],"count":20}],"say":"All three finish with the identical row. <b>Twenty eight, twenty eight and twenty comparisons.</b> And the number not on this board is the one that separates the first two: bubble moved fifteen times, selection moved three."}],"caption":"Two of these three lanes are the same cost in comparisons and wildly different in moves, and the third is cheaper in comparisons for a reason that has nothing to do with cleverness. Every difference on this board comes from what one comparison was allowed to conclude."}'></div>

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
,

"7.3": `<div class="wrap">
  <div class="les-kicker">Chapter 7 · Lesson 7.3</div>
  <h1 class="les-title">Merge Sort: Split, Sort, Stitch</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
  </div>

  <p class="motto">Merge sort never sorts anything. It only ever merges two things that are already sorted, and it arranges for that to always be true.</p>

  <p class="lead">The three simple sorts all share one limit: double the data and they get four times slower. This lesson breaks that, and the number it produces is the one Chapter 6 has been quoting since Lesson 6.3. By the end you will have derived where about 10,000 comparisons and about 20,000,000 comparisons actually came from. Sorting is never the goal, and this is where its price finally gets itemised.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Two sorted piles, and the easiest job in this chapter.</div>
  <p>Two people each hold a stack of forms, and each stack is already in date order. To combine them into one ordered stack you do not sort anything. <strong>You look at the top of each pile, take whichever is earlier, and repeat.</strong></p>

  <div class="viz" data-viz='{"type":"scene","title":"Two ordered piles, and one glance at a time","width":820,"height":280,"items":[{"icon":"pile","x":130,"y":128,"kind":"accent","label":"already in date order"},{"icon":"pile","x":330,"y":128,"kind":"accent","label":"also already in date order"},{"icon":"person","x":540,"y":126,"kind":"gold","label":"look at both tops, take the earlier"},{"icon":"shelf","x":740,"y":124,"kind":"box","label":"one ordered pile"}],"arrows":[{"x1":400,"y1":128,"x2":480,"y2":128,"style":"gold","label":"one comparison"},{"x1":600,"y1":126,"x2":680,"y2":126,"style":"green","label":"places one form, forever"}],"caption":"Nobody would call this sorting, and that is exactly the point. Merging two ordered piles is so easy that a child can do it, and the entire method in this lesson is an arrangement for making sure you are only ever asked to do this."}'></div>

  <p>That job is so easy nobody would call it sorting. <strong>The whole method in this lesson is an arrangement for only ever having to do that job</strong>, and never anything harder.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">Split until the problem is already solved.</div>
  <p>Merging needs two sorted piles. So where do the sorted piles come from? <strong>You split until they are sorted by accident.</strong> A pile of one item is always in order, and nobody has to do anything to make that true.</p>

  <div class="viz" data-viz='{"type":"arch","title":"Split down to trivial, then only ever merge","maxChars":18,"nodes":[{"id":"a","label":"Eight items, in no order at all","col":0,"row":1,"kind":"muted"},{"id":"b","label":"Split, and split, and split again","col":1,"row":1,"kind":"gold"},{"id":"c","label":"Eight piles of one. Every one is sorted, for free","col":2,"row":1,"kind":"accent"},{"id":"d","label":"Merge pairs: four piles of two","col":3,"row":0,"kind":"accent"},{"id":"e","label":"Merge again: two piles of four","col":3,"row":1,"kind":"accent"},{"id":"f","label":"Merge once more: one pile of eight","col":3,"row":2,"kind":"accent"}],"edges":[{"from":"a","to":"b"},{"from":"b","to":"c","label":"until trivial","style":"green"},{"from":"c","to":"d","label":"merge","style":"green"},{"from":"d","to":"e","label":"merge","style":"green"},{"from":"e","to":"f","label":"merge","style":"green"}],"caption":"Nothing in this diagram sorts. The splitting does no comparing at all, and the merging only ever combines two things that are already in order. The sortedness is manufactured at the far left, for free, by making the piles small enough that being sorted is unavoidable."}'></div>

  <p>Splitting does no comparing whatsoever. <strong>All the work is in the stitching</strong>, and stitching is the easy job from block 1.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Two sorted halves, and one comparison per item placed.</div>
  <p>The row below is two sorted runs sitting side by side: <em class="k">2 4 7 9</em> on the left and <em class="k">1 3 5 8</em> on the right. Watch how few comparisons it takes, and watch what happens to each value <strong>after</strong> it is placed.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Stitching two ordered runs into one","speed":1600,"big":true,"data":[2,4,7,9,1,3,5,8],"countLabel":" comparisons","pointerLabels":{"lo":"left top","hi":"right top"},"legend":[["the two being compared","look"],["placed, and never touched again","found"],["still waiting in its run","seen"]],"steps":[{"order":[0,1,2,3,4,5,6,7],"look":[0,4],"ptr":{"lo":0,"hi":4},"count":1,"seen":[1,2,3,5,6,7],"say":"Two runs, each already in order. <b>Compare only the two fronts:</b> 2 against 1. Nothing else in either run needs looking at, because each run is sorted and its front is its smallest."},{"order":[4,0,1,2,3,5,6,7],"found":[4],"look":[0,5],"ptr":{"lo":0,"hi":5},"count":2,"seen":[1,2,3,6,7],"say":"1 is smaller, so it moves to the front and <b>it is finished for good.</b> Nothing later in this sort will ever look at it again. Now 2 against 3."},{"order":[4,0,5,1,2,3,6,7],"found":[4,0,5],"look":[1,6],"ptr":{"lo":1,"hi":6},"count":4,"seen":[2,3,7],"say":"2 goes, then 3 goes. <b>One comparison, one item placed permanently</b>, every single time. That is the property the whole method is built to get."},{"order":[4,0,5,1,6,2,3,7],"found":[4,0,5,1,6],"look":[2,7],"ptr":{"lo":2,"hi":7},"count":6,"seen":[3],"say":"4 and 5 land. Five of the eight are home and <b>not one of them has been moved twice.</b>"},{"order":[4,0,5,1,6,2,7,3],"found":[4,0,5,1,6,2,7,3],"count":7,"badge":"7 comparisons","say":"7, then 8, then 9 falls in with nothing to compare against. <b>Seven comparisons for eight items.</b> The simple sorts in Lesson 7.2 needed twenty eight on the same eight numbers."}],"caption":"Seven comparisons, and every one of them placed an item permanently. That is the difference from Lesson 7.2, where bubble moved the same value fifteen times. Nothing here is revisited, because a run is sorted and its front is the only part that can possibly be next."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Why one comparison is enough.</div>

  <div class="viz" data-viz='{"type":"seq","title":"What a sorted run can promise about itself","actors":[{"label":"The merge","kind":"gold"},{"label":"The left run","kind":"accent"},{"label":"The right run","kind":"accent"}],"messages":[{"from":0,"to":1,"label":"what is your smallest remaining item","style":"gold"},{"from":1,"to":0,"label":"whatever is at my front. I am in order","style":"green"},{"from":0,"to":2,"label":"and yours","style":"gold"},{"from":2,"to":0,"label":"the same. My front, and nothing else can beat it","style":"green"},{"from":0,"to":0,"label":"then the smaller of those two is the smallest thing left anywhere"}],"caption":"This is the whole justification. Because each run is sorted, its front is its smallest, so the smallest item across both runs must be one of exactly two candidates. One comparison settles it, and no other item in either run needs to be examined at all."}'></div>

  <p>Bubble sort in Lesson 7.2 had no such promise. <strong>A comparison there told you about two neighbours and nothing else.</strong> Here a comparison between two fronts settles the smallest item out of everything remaining, which is why one comparison places one item and never has to be repeated.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">One method, and the three things it always demands.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What it always gives you</th><th>What it always demands</th><th>Why that matters</th></tr>
    <tr><td>The same speed on every input</td><td>It never adapts to data that is already sorted</td><td>No lucky cases, and no disastrous ones. Lesson 7.4 has both</td></tr>
    <tr><td>Equal items keep their original order</td><td>Nothing extra. It falls out of preferring the left run on a tie</td><td>This is stability, and Lesson 7.6 shows why it is a business requirement</td></tr>
    <tr><td>It works on data too big to hold at once</td><td>Room for a second copy while stitching</td><td>Merging reads two things front to back, which is what a disk and a network want</td></tr>
  </table>
  <div class="tbl-cap">The middle column is the honest price and it is the same price three times: this method needs somewhere to put the merged result. That extra room is the one thing it cannot avoid, and it is exactly what Lesson 7.4 refuses to pay.</div></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Where Chapter 6 numbers came from.</div>
  <p>Count it in layers. Splitting eight items takes three splits, because <strong>eight halves to four halves to two halves to one</strong>. At every layer, stitching touches each item about once, so each layer costs about eight comparisons. Three layers, eight items: about twenty four.</p>
  <p>Now the rule. <strong>The number of layers is how many times you can halve the pile</strong>, and the cost of each layer is the size of the pile.</p>

  <div class="viz" data-viz='{"type":"card","title":"The bill Chapter 6 kept quoting, finally itemised","eyebrow":"COMPARISONS TO SORT","badge":"layers times size","width":560,"rows":[{"k":"A thousand items: 10 layers of 1,000","v":"about 10,000","tone":"good","bar":0.0005},{"k":"The same thousand, simple sort","v":"about 499,500","tone":"bad","bar":0.025},{"k":"A million items: 20 layers of 1,000,000","v":"about 20,000,000","tone":"good","bar":1},{"k":"The same million, simple sort","v":"about 500,000,000,000","tone":"bad","bar":1},{"k":"Double the data, and the cost goes up by","v":"a bit over twice","tone":"good","bar":0.002}],"caption":"Every bar is a rough weight rather than a measurement. Rows one and three are the exact figures Lesson 6.3 and Lesson 6.8 have been quoting to the reader since before this chapter existed, and this is where they come from: layers times size, where layers is how many times you can halve the pile."}'></div>

  <p>That is the promise Chapter 6 was spending. <strong>About 10,000 comparisons for a thousand items and about 20,000,000 for a million</strong>, which is ten layers of a thousand and twenty layers of a million. In the Chapter 2 currency this is <em class="g">O(n log n)</em>, and the reason it matters is the last row: doubling the data costs a bit over twice, not four times.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places, and most of them are about size rather than speed.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Where stitching beats sorting","unit":178,"nodes":[{"id":"c","label":"Combining things that are already in order","x":2,"y":1,"kind":"dark"},{"id":"f","label":"Sorting a file bigger than the memory you have","x":0,"y":0,"kind":"gold"},{"id":"d","label":"Combining results from several machines, each sorted locally","x":0,"y":2,"kind":"accent"},{"id":"l","label":"Merging log files from several servers into one timeline","x":4,"y":0,"kind":"accent"},{"id":"v","label":"Version control merging two branches of history","x":4,"y":2,"kind":"box"},{"id":"s","label":"And inside real language sorts, on the runs it finds. Lesson 7.6","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"f","label":"read front to back","style":"gold"},{"from":"c","to":"d","label":"sort locally, stitch centrally","style":"green"},{"from":"c","to":"l","label":"already in time order"},{"from":"c","to":"v","label":"two ordered histories"},{"from":"c","to":"s","label":"the runs are free","style":"gold"}],"caption":"The top left node is why this method refuses to die. Merging reads each run strictly front to back, which is the one access pattern a disk or a network is genuinely good at, so it can sort a file far larger than the memory available while a method that jumps around cannot."}'></div>

  <p>Look at the merged log files. <strong>Each server already produced its lines in time order</strong>, for free, exactly as Lesson 7.1 pointed out, so combining them is only ever the easy job from block 1.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the tell is usually memory or order.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"Sorting this file runs out of memory"</td><td>Ask whether the sort needs the whole file at once</td><td>A method that reads front to back can sort more than it can hold</td></tr>
    <tr><td>"Doubling the data made it four times slower"</td><td>Time it at two sizes and compare the ratio</td><td>A simple sort. Layers times size grows a bit over twice</td></tr>
    <tr><td>"Equal rows come back in a different order each run"</td><td>Ask whether the sort preserves ties</td><td>Not stable. Lesson 7.6 shows what that breaks</td></tr>
    <tr><td>"It uses twice the memory of the data"</td><td>Ask where the merged result is being written</td><td>The honest price of this method. Lesson 7.4 avoids it</td></tr>
    <tr><td>"Each machine finishes fast and combining takes forever"</td><td>Ask whether the combine re-sorts everything</td><td>It should stitch, not sort. The pieces already arrive in order</td></tr>
    <tr><td>"It takes the same time whatever we feed it"</td><td>Feed it already-sorted data and compare</td><td>Correct behaviour for this method, and its main selling point</td></tr>
  </table>
  <div class="tbl-cap">The last row is the only one in this table that is not a problem. Predictability is what this method sells, and Lesson 7.4 is where somebody trades exactly that away for speed and memory.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Twelve machines that finish in minutes, and a combine that takes an hour.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"We split a large dataset across twelve machines. Each one sorts its own share and finishes in about two minutes. Then one machine collects all twelve results and produces the final sorted output, and that step takes just over an hour. We have tried giving the collector more memory and a faster disk and neither made much difference."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Twelve sorted piles, and somebody sorting them again","lanes":[{"label":"The team"},{"label":"You"},{"label":"The collector"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"12 machines: 2 minutes each. Combine: over an hour"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: what does the collector actually do with the twelve results?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"Concatenates them, then sorts the whole thing"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"So it throws away twelve pieces of finished work"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"The order each machine produced is discarded"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"Stitch instead: compare twelve fronts, take the smallest"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"One pass, front to back, and no re-sorting at all"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"More memory and a faster disk both aim at the symptom. The collector was handed twelve finished pieces of work and threw all of it away, which is why nothing about the hardware changed the outcome."}'></div>

  <p><strong>The collector is sorting data that is already sorted twelve times over.</strong> Concatenating twelve ordered runs produces something that is not in order, so a general sort has no choice but to do the full job. Stitching them instead is one pass: look at twelve fronts, take the smallest, repeat, and every item is placed exactly once and never revisited.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked what the collector <strong>does</strong>, not how fast it runs. The hardware questions could never have worked, because the problem was not that the work was slow but that finished work was being discarded. Whenever several producers each emit ordered output, the combine step should be the easy job from block 1, and if it is not, somebody is paying twice for order they already own.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, two ordered piles</div>
    <p>Take twenty cards and deal them into two piles of ten, then sort each pile by hand however you like. <strong>Round one:</strong> combine them by looking only at the top card of each pile and taking the smaller, and count your comparisons. It should be close to nineteen, and never more. <strong>Round two:</strong> shuffle all twenty together and sort them from scratch, counting again. <strong>Round three:</strong> the question that matters. In round one, how many times did you pick up a card, put it down, and later pick it up again? The answer is zero, and that is the property Lesson 7.2 methods could not offer.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">Twelve machines each sort their share of a dataset, and a collector concatenates the twelve results and sorts the whole thing. Why is the collector so slow?</div>
    <div class="opt" data-i="0">The collector has less memory than the twelve machines combined</div>
    <div class="opt" data-i="1">Concatenating ordered runs produces unordered data, so the finished work of all twelve machines is thrown away and paid for again</div>
    <div class="opt" data-i="2">Sorting always takes longer on one machine than on twelve</div>
    <div class="qexp">Twelve sorted runs laid end to end are not sorted, so a general sort must do the full job from scratch. The order those machines produced is real and valuable, and merging exploits it: compare the twelve fronts, take the smallest, repeat. Each item is placed once and never revisited, which is why the hardware changes made no difference. The work was not slow, it was being repeated.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">Why does merging two sorted runs need only one comparison per item placed, when bubble sort moved the same value fifteen times?</div>
    <div class="opt" data-i="0">Because merging uses a faster kind of comparison</div>
    <div class="opt" data-i="1">Because the runs are shorter, so there is less to compare</div>
    <div class="opt" data-i="2">Because each run is sorted, its front is its smallest, so the smallest item remaining anywhere must be one of exactly two candidates</div>
    <div class="qexp">The promise a sorted run makes about itself is what does the work. Its front is its smallest, so nothing behind the front can possibly be next, and the smallest item across both runs is one of two things. One comparison settles it permanently. Bubble sort had no such promise available, because a comparison between two neighbours in an unordered row tells you about those two and nothing else.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>This method is predictable, stable and needs room for a second copy. <strong>The next one is faster in practice, needs almost no extra room, and can fall apart completely on the most ordinary input there is.</strong> Everything about it follows from one decision made before a single comparison happens.</p>
  </div>
__NAV__
</div>`
,

"7.4": `<div class="wrap">
  <div class="les-kicker">Chapter 7 · Lesson 7.4</div>
  <h1 class="les-title">Quick Sort: Pick a Pivot and Partition</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
  </div>

  <p class="motto">Everything good and everything catastrophic about this method follows from one decision made before a single comparison happens.</p>

  <p class="lead">Merge sort is predictable, stable, and needs room for a second copy. This one is usually faster, needs almost no extra room, and can collapse to the cost of bubble sort on the most ordinary input there is. By the end you can say exactly which decision causes that, and why the data most likely to break it is the data you are most likely to have. Sorting is never the goal, and this method makes the investment cheaper in exchange for a risk.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Two piles before you sort either of them.</div>
  <p>A hundred exam papers to put in mark order. Nobody starts by finding the highest mark. <strong>You pick a number, say fifty, and throw every paper into one of two piles</strong>: below fifty, above fifty. Neither pile is sorted. But you now have two problems half the size, and you never have to compare anything in the left pile against anything in the right one again.</p>

  <div class="viz" data-viz='{"type":"scene","title":"One number, two piles, and a problem cut in half","width":820,"height":280,"items":[{"icon":"pile","x":130,"y":128,"kind":"muted","label":"a hundred papers, no order"},{"icon":"person","x":340,"y":126,"kind":"gold","label":"pick a number: fifty"},{"icon":"pile","x":560,"y":128,"kind":"accent","label":"below fifty"},{"icon":"pile","x":730,"y":128,"kind":"accent","label":"above fifty"}],"arrows":[{"x1":200,"y1":128,"x2":286,"y2":128,"style":"gold","label":"one pass"},{"x1":400,"y1":126,"x2":500,"y2":126,"style":"green","label":"nothing is sorted yet"}],"caption":"Neither pile is in order and the job is not finished, but something permanent has happened: no paper on the left will ever be compared with a paper on the right again. That single guarantee is the whole method, and it was bought with one pass and one number."}'></div>

  <p><strong>Neither pile is sorted and something permanent has still happened.</strong> The left and the right will never need to be compared with each other again, ever, and that guarantee cost one pass.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">One comparison buys a side, not a place.</div>
  <p>Lesson 7.3 had one comparison place one item permanently. This is weaker and cheaper: <strong>one comparison puts an item on the correct side of one number.</strong> That is much less information, and it turns out to be enough, because you then do it again inside each side.</p>

  <div class="viz" data-viz='{"type":"arch","title":"What a partition settles, and what it leaves open","maxChars":18,"nodes":[{"id":"p","label":"Pick one value, call it the pivot","col":0,"row":1,"kind":"gold"},{"id":"s","label":"Every item goes left of it or right of it","col":1,"row":1,"kind":"accent"},{"id":"a","label":"Settled forever: which side each item is on","col":2,"row":0,"kind":"accent"},{"id":"b","label":"Settled forever: the pivot is now in its final place","col":2,"row":1,"kind":"accent"},{"id":"c","label":"Not settled at all: the order inside each side","col":2,"row":2,"kind":"gold"},{"id":"d","label":"So do the same thing again, inside each side","col":3,"row":2,"kind":"dark"}],"edges":[{"from":"p","to":"s","label":"one pass"},{"from":"s","to":"a","style":"green"},{"from":"s","to":"b","style":"green"},{"from":"s","to":"c"},{"from":"c","to":"d","label":"repeat","style":"green"}],"caption":"The second node on the right is the one people miss. After a single pass the pivot is not merely on the correct side of things, it is in the exact position it will occupy in the finished row, and it will never move again. Every pass permanently places at least one item and halves what remains."}'></div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">One pass, one number, and one value that is finished forever.</div>
  <p>The same eight numbers from Lesson 7.2. The pivot is <strong>5</strong>. Watch where 5 ends up, and then check it against the finished row.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"One partition around 5","speed":1600,"big":true,"data":[7,2,9,4,1,5,8,3],"countLabel":" comparisons","pointerLabels":{"mid":"pivot"},"legend":[["being compared with the pivot","look"],["the pivot, now in its final place","found"],["smaller: goes left","seen"],["bigger: goes right","range"]],"steps":[{"order":[0,1,2,3,4,5,6,7],"look":[5],"ptr":{"mid":5},"count":0,"say":"Eight numbers, no order. <b>Pick one value and call it the pivot.</b> Here it is the 5, and nothing about choosing it required a comparison."},{"order":[0,1,2,3,4,5,6,7],"look":[0,1],"ptr":{"mid":5},"count":2,"say":"Walk the row and ask one question of each item: <b>are you smaller than 5?</b> 7 is not. 2 is. That is the only question anybody asks in this whole pass."},{"order":[1,3,0,2,4,5,6,7],"seen":[1,3],"look":[4,7],"ptr":{"mid":5},"count":5,"say":"The smaller ones start gathering on the left. Note what has NOT happened: <b>2 and 4 are on the correct side and in no particular order.</b> One comparison bought a side, not a place."},{"order":[1,3,4,7,5,0,2,6],"seen":[1,3,4,7],"found":[5],"range":[5,7],"count":7,"say":"Seven comparisons, and the pass is done. Left of the pivot: 2, 4, 1, 3. Right of it: 7, 9, 8. <b>Neither side is sorted.</b>"},{"order":[1,3,4,7,5,0,2,6],"found":[5],"seen":[1,3,4,7],"range":[5,7],"count":7,"badge":"5 is finished forever","say":"But look where the 5 is. In the finished row, 1 2 3 4 5 7 8 9, the 5 sits at exactly this position. <b>It was placed permanently by one pass, and it will never be examined again.</b>"}],"caption":"Seven comparisons placed one value forever and split the rest into two groups that never need to be compared with each other. Do the same thing inside each group and the whole row is sorted, having never compared a left-hand item with a right-hand one."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">The decision that decides everything.</div>
  <p>The method has one free choice: <strong>which value to use as the pivot.</strong> That choice is made before any comparison, it costs nothing, and it is the difference between the fastest sort in this chapter and the slowest.</p>

  <div class="viz" data-viz='{"type":"seq","title":"The same method, two pivots, on data that is already sorted","actors":[{"label":"Pivot: the last item","kind":"bad"},{"label":"An already sorted row","kind":"muted"},{"label":"Pivot: the middle item","kind":"accent"}],"messages":[{"from":0,"to":1,"label":"I choose the largest value, because it is at the end"},{"from":1,"to":0,"label":"then everything goes left and nothing goes right"},{"from":0,"to":1,"label":"so I shrink by one item instead of half"},{"from":2,"to":1,"label":"I choose the middle value","style":"green"},{"from":1,"to":2,"label":"then half go left and half go right","style":"green"}],"caption":"On sorted data the last item is always the largest, so partitioning around it produces one pile with everything in it and one empty pile. The problem shrinks by one instead of halving, and a method that should take twenty layers takes a million. Nothing about the code changed."}'></div>

  <p>That is the trap, and it is worse than it looks. <strong>The data most likely to break it is data that is already in order</strong>, which is the most common real input there is: yesterday's export, a file already grouped by date, a list somebody sorted an hour ago.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Four pivot choices, and what each is really betting on.</div>

  <div class="tbl-wrap"><table>
    <tr><th>How the pivot is chosen</th><th>What it bets</th><th>When the bet loses</th></tr>
    <tr><td>The first or last item</td><td>That the data is in no particular order</td><td>On sorted or reversed data, which is extremely common</td></tr>
    <tr><td>The middle item</td><td>The same bet, moved</td><td>Rarely in practice, but a crafted input can still defeat it</td></tr>
    <tr><td>The middle of first, middle and last</td><td>That three samples beat one</td><td>Almost never by accident. This is what most real sorts do</td></tr>
    <tr><td>A randomly chosen item</td><td>Nothing at all. It refuses to bet</td><td>Never systematically, though any single run can be unlucky</td></tr>
  </table>
  <div class="tbl-cap">Only the first row is genuinely dangerous, and it is the one people write when implementing this from memory. The bottom two rows are why the method survives in production despite having a worst case as bad as bubble sort.</div></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The same eight numbers, and a thirty six times difference at scale.</div>
  <p>On the eight numbers from Lesson 7.2, in random order, taking the last item as pivot: <strong>14 comparisons.</strong> Merge sort needed about 24 on the same data and the simple sorts needed 28. So it earns its name.</p>
  <p>Now feed the identical method data that is <strong>already sorted</strong>, still taking the last item: <strong>28 comparisons</strong>, which is exactly what bubble sort costs. Change one thing, the pivot, to the middle item: <strong>13.</strong></p>

  <div class="viz" data-viz='{"type":"card","title":"One decision, made before any comparison","eyebrow":"A THOUSAND ITEMS","badge":"same method","width":560,"rows":[{"k":"Good pivots: about 1.39 layers times size","v":"about 13,900","tone":"good","bar":0.028},{"k":"Merge sort, for reference","v":"about 10,000","tone":"good","bar":0.02},{"k":"Bad pivots on sorted data","v":"about 499,500","tone":"bad","bar":1},{"k":"So the gap from one decision is","v":"about 36 times","tone":"bad","bar":1},{"k":"And the extra memory it needs","v":"almost none","tone":"good","bar":0.002}],"caption":"Every bar is drawn against a maximum of 499,500. Row one is slightly worse than merge sort on paper and usually faster in practice, because it moves items less and works inside the row it was given. Row five is the reason it is chosen anyway, and row three is the reason it must be chosen carefully."}'></div>

  <p>In the Chapter 2 currency this is <em class="g">O(n log n)</em> on average and <em class="g">O(n squared)</em> at worst, and it is the only method in this chapter where those two are different. <strong>Merge sort has no bad days and no good ones.</strong> This one has both, and which you get is decided before it starts.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places, and one very old lesson learned the hard way.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Partitioning, and the guard that comes with it","unit":178,"nodes":[{"id":"c","label":"Split around a value, then repeat inside each side","x":2,"y":1,"kind":"dark"},{"id":"l","label":"The default sort in many language libraries, with guards","x":0,"y":0,"kind":"accent"},{"id":"k","label":"Finding the tenth largest without sorting anything else","x":0,"y":2,"kind":"gold"},{"id":"d","label":"Splitting work across machines by a range of keys","x":4,"y":0,"kind":"accent"},{"id":"g","label":"And the guard: watch the depth, switch method if it goes wrong","x":4,"y":2,"kind":"bad"},{"id":"s","label":"Stop splitting below about twenty and finish with insertion. Lesson 7.2","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"l","label":"with a chosen pivot","style":"green"},{"from":"c","to":"k","label":"only recurse one side","style":"gold"},{"from":"c","to":"d","label":"each machine gets a range"},{"from":"c","to":"g","label":"because the worst case is real"},{"from":"c","to":"s","label":"small pieces","style":"gold"}],"caption":"The gold node on the left is the trick worth stealing. If you only want the tenth largest item you do not need the row sorted: partition, see which side the tenth position falls in, and throw the other side away entirely. Lesson 7.5 has a different answer to the same question."}'></div>

  <p>The bottom node is where this chapter starts converging. <strong>Real sorts stop splitting when a piece gets small</strong> and finish it with insertion sort from Lesson 7.2, because below about twenty items the simple method genuinely wins.</p>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and most of them are about the shape of the input.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"It is fast on live data and hangs on the nightly file"</td><td>Ask whether the nightly file arrives already sorted</td><td>Sorted input plus an end pivot is the worst case, exactly</td></tr>
    <tr><td>"It got slow after we started pre-sorting the input"</td><td>The same question, with the cause admitted</td><td>Somebody helpfully handed it the one input that defeats it</td></tr>
    <tr><td>"Usually instant, occasionally takes minutes"</td><td>Capture the input on a slow run</td><td>Pivot luck. A random pivot removes the pattern</td></tr>
    <tr><td>"It crashed with a depth error on one file"</td><td>Ask how deep the splitting went</td><td>Shrinking by one instead of halving. Lesson 5.1 priced that ceiling</td></tr>
    <tr><td>"We only need the top ten and it sorts everything"</td><td>Ask whether the other side is ever read</td><td>Partition once, keep one side, discard the rest untouched</td></tr>
    <tr><td>"Equal rows come back in a different order every time"</td><td>Compare two runs on identical input</td><td>This method is not stable. Lesson 7.6 shows what that breaks</td></tr>
  </table>
  <div class="tbl-cap">Rows one and two are the same fault with and without a confession, and they are the most common production failure of this method. Row four is Chapter 5 arriving in a sorting lesson: splitting that shrinks by one instead of halving goes a million levels deep, and that ceiling was fixed before the program ran.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Somebody helped, and the job stopped finishing.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our import has run fine for three years. Last month the upstream team started sending us the file already sorted by customer id, as a courtesy, because they thought it would help. Since then the import either takes hours or dies with a depth error. We have changed nothing on our side. If we shuffle the file before importing, it is fast again, which makes no sense to anybody."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Shuffling the input makes it faster, which sounds impossible","lanes":[{"label":"The team"},{"label":"You"},{"label":"The import"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Sorted input: hours or a crash. Shuffled: fast"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: how does the sort choose its pivot?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"The last item of whatever it is given"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"On sorted data the last item is always the largest"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"So one side gets everything and the other gets nothing"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"It shrinks by one per pass, not by half"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Pick the middle of three, or at random. Do not shuffle"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"Shuffling works, which is the clue rather than the fix. A method whose performance improves when you destroy the order of its input is a method that is betting on disorder, and the only thing worth changing is the bet."}'></div>

  <p><strong>The upstream team did nothing wrong and the courtesy was real.</strong> On sorted data the last item is always the largest, so partitioning around it puts every remaining item on one side and nothing on the other. The problem shrinks by one per pass instead of halving, which turns twenty layers into a million and produces both symptoms: hours of work, and a depth ceiling from Lesson 5.1 being spent.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It took the strangest fact seriously instead of dismissing it. <strong>Shuffling the input made it faster</strong>, and nothing that is genuinely doing less work behaves that way. A method that rewards disorder is betting on disorder, so the fix is not to keep feeding it chaos, it is to stop it betting: choose the middle of three samples, or choose at random, and the input can arrive in any order it likes.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, twenty cards and one number</div>
    <p>Deal twenty cards face up. <strong>Round one:</strong> pick the middle card, then move every card lower than it to the left and every higher card to the right, without ordering either group. Count your comparisons. Now check where your chosen card is sitting, and confirm for yourself that it is already in the position it will end up in. <strong>Round two:</strong> do the same inside each group, and again, until everything is sorted. <strong>Round three:</strong> now lay the cards out already sorted, and always pick the last card as your number. Count how many passes it takes before you have made real progress, and you will feel exactly what breaks.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="0">
    <div class="q">An import became slow or crashed after the upstream team started sending the file already sorted, and shuffling the file makes it fast again. What is happening?</div>
    <div class="opt" data-i="0">The sort takes the last item as its pivot, which on sorted data is always the largest, so it shrinks by one per pass instead of halving</div>
    <div class="opt" data-i="1">Sorted data uses more memory to process than unsorted data</div>
    <div class="opt" data-i="2">The upstream file must be corrupted, since sorted input cannot be slower</div>
    <div class="qexp">A method that gets faster when you destroy the order of its input is betting on disorder. Partitioning around the largest value puts everything on one side and nothing on the other, so the problem shrinks by one per pass, which produces both the hours and the depth error from Lesson 5.1. Shuffling works, and it is the clue rather than the fix: change the pivot choice instead, and any input order becomes safe.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">After one partition around the value 5, neither side is sorted. What has been settled permanently?</div>
    <div class="opt" data-i="0">Nothing yet, because no side is in order</div>
    <div class="opt" data-i="1">Only which items are smaller than 5 and which are larger</div>
    <div class="opt" data-i="2">Both of those, and also that 5 is now sitting in the exact position it will occupy in the finished row</div>
    <div class="qexp">This is the property that makes one pass worth paying for. Everything smaller is to the left and everything larger is to the right, so the number of items before the pivot is exactly the number of items that belong before it, which means the pivot is home. It will never be moved or compared again, and neither side will ever need to be compared with the other.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Every method so far has done the same thing: <strong>ask which of two items comes first.</strong> The next lesson has one method that repeatedly grabs the most extreme item instead, and two that do not compare anything at all, and are therefore not bound by any of the limits in this chapter.</p>
  </div>
__NAV__
</div>`
,

"7.5": `<div class="wrap">
  <div class="les-kicker">Chapter 7 · Lesson 7.5</div>
  <h1 class="les-title">Heap Sort, Counting Sort and Radix Sort</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
  </div>

  <p class="motto">Every sort so far asked which of two things comes first. There is a proven floor on what that question can buy, and the only way under it is to stop asking it.</p>

  <p class="lead">Lessons 7.2, 7.3 and 7.4 all did the same thing: compare two items. This lesson has one method that compares differently and two that do not compare at all, which is why they are not bound by the limit everything else in this chapter obeys. By the end you can say what that limit is, and the exact condition that lets you escape it. Sorting is never the goal, and two of these three refuse to pay the usual price for it at all.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Nobody sorts a class by comparing pupils.</div>
  <p>Thirty pupils, and you want them lined up by school year. You do not compare pairs of children. <strong>You call out the years and let them gather</strong>, then read the groups back in order. You never once asked whether this child comes before that one.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Two ways to line up thirty children","width":820,"height":280,"items":[{"icon":"person","x":120,"y":126,"kind":"muted","label":"compare two, swap, repeat"},{"icon":"person","x":330,"y":126,"kind":"gold","label":"or: call out the years"},{"icon":"shelf","x":560,"y":124,"kind":"accent","label":"seven groups gather themselves"},{"icon":"doc","x":740,"y":124,"kind":"box","label":"read the groups back in order"}],"arrows":[{"x1":180,"y1":126,"x2":268,"y2":126,"style":"gold","label":"or do not"},{"x1":400,"y1":126,"x2":500,"y2":126,"style":"green","label":"nobody was compared"}],"caption":"The second method works because there are only seven possible years. It is not cleverer than comparing, it is exploiting a fact about the values that comparison sorts are forbidden from using: there is a small, known set of things any value can be."}'></div>

  <p>That works because there are only seven possible answers. <strong>It is not cleverness, it is a fact about the values</strong>, and every method in this lesson is built on a fact that the previous three chapters were not allowed to use.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">The floor, and the one way under it.</div>
  <p>If the only thing you may do is ask which of two items comes first, then <strong>there is a proven limit on how few questions can possibly be enough</strong>, and it is the layers-times-size figure Lesson 7.3 derived. No comparison sort will ever beat it, and merge sort essentially reaches it.</p>

  <div class="viz" data-viz='{"type":"arch","title":"Three methods, and which rule each one breaks","maxChars":18,"nodes":[{"id":"f","label":"The floor: layers times size, for anything that compares","col":0,"row":1,"kind":"dark"},{"id":"h","label":"Heap sort: still compares, so it lives on the floor","col":1,"row":0,"kind":"accent"},{"id":"c","label":"Counting sort: never compares two items at all","col":1,"row":2,"kind":"gold"},{"id":"hr","label":"But needs no extra room, and never has a bad day","col":2,"row":0,"kind":"accent"},{"id":"cr","label":"So the floor does not apply to it, and it goes under","col":2,"row":2,"kind":"gold"},{"id":"cd","label":"Its condition: the values must come from a small known set","col":2,"row":3,"kind":"bad"}],"edges":[{"from":"f","to":"h","label":"obeys"},{"from":"f","to":"c","label":"escapes","style":"green"},{"from":"h","to":"hr","label":"and buys","style":"green"},{"from":"c","to":"cr","label":"and buys","style":"green"},{"from":"c","to":"cd","label":"and demands"}],"caption":"Heap sort is not here to be faster. It is here because it reaches the floor while needing almost no extra room and having no bad case at all, which is a combination neither merge sort nor quick sort can offer. The two below it are a different argument entirely."}'></div>

  <p>Heap sort still compares, so it cannot beat the floor. <strong>It is here for a different reason:</strong> it reaches the floor with almost no extra memory and, unlike Lesson 7.4, it has no catastrophic case at all.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Eight values, five possible answers, and no comparison anywhere.</div>
  <p>Eight numbers, and every one of them is between 1 and 5. That is the fact everything below depends on. <strong>Count how many of each, then read the counts back in order.</strong> Nothing is ever compared with anything.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Sorting by counting, with nothing compared","speed":1600,"big":true,"data":[3,1,4,1,5,2,3,1],"countLabel":" values counted","pointerLabels":{"i":"counting"},"legend":[["being counted","look"],["already counted","seen"],["placed by its count","found"]],"steps":[{"order":[0,1,2,3,4,5,6,7],"look":[0],"ptr":{"i":0},"count":1,"say":"Eight numbers, and every value is between 1 and 5. <b>That is the whole condition</b>, and without it nothing in this board works."},{"order":[0,1,2,3,4,5,6,7],"look":[3],"seen":[0,1,2],"ptr":{"i":3},"count":4,"say":"Walk the row once and keep a tally: how many 1s, how many 2s, and so on. <b>Not one comparison has happened</b>, because no item has been held up against another item."},{"order":[0,1,2,3,4,5,6,7],"seen":[0,1,2,3,4,5,6,7],"count":8,"badge":"three 1s, one 2, two 3s","say":"One pass, and the tally is complete: <b>three 1s, one 2, two 3s, one 4, one 5.</b> Eight numbers, and eight tally marks, and no item was ever examined twice."},{"order":[1,3,7,5,0,6,2,4],"found":[1,3,7],"seen":[5,0,6,2,4],"count":8,"say":"Now read the tally back in order. Three 1s, so write three 1s. <b>The row is being produced rather than rearranged</b>, and the answer is being read off a count."},{"order":[1,3,7,5,0,6,2,4],"found":[1,3,7,5,0,6,2,4],"count":8,"badge":"sorted, 0 comparisons","say":"<b>Sorted, and not one comparison happened at any point.</b> Two passes over the data: one to count, one to write out. The floor from block 2 simply does not apply, because the floor is a statement about comparing."}],"caption":"Watch the three 1s at the end. They came from positions 1, 3 and 7, and they left in that same order, because the tally was read front to back. That is stability, arriving for free, and Lesson 7.6 is where it turns out to matter."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">What counting knows that comparing cannot.</div>

  <div class="viz" data-viz='{"type":"seq","title":"Two methods asking about the same item","actors":[{"label":"A comparison sort","kind":"muted"},{"label":"The value 3","kind":"accent"},{"label":"A counting sort","kind":"gold"}],"messages":[{"from":0,"to":1,"label":"are you smaller than this other item"},{"from":1,"to":0,"label":"yes. That is all I can tell you about myself"},{"from":2,"to":1,"label":"what are you","style":"gold"},{"from":1,"to":2,"label":"I am a 3","style":"green"},{"from":2,"to":2,"label":"then I already know exactly which group you belong in","style":"green"}],"caption":"A comparison sort is only ever allowed to learn about pairs, which is why it needs so many questions. A counting sort asks each item what it is, once, and that single answer places it, because the set of possible answers was known before anybody started."}'></div>

  <p><strong>A comparison only ever tells you about a pair.</strong> Asking an item what it is, when there are only five things it could be, tells you where it goes immediately. That is the whole difference, and it is bought with a condition rather than with cleverness.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Three methods, three completely different reasons to exist.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The method</th><th>Why it exists</th><th>The one condition it demands</th></tr>
    <tr><td>Heap sort</td><td>Reaches the floor with almost no extra memory and no bad case</td><td>Nothing about your data. It is the safe choice, and it is not stable</td></tr>
    <tr><td>Counting sort</td><td>Goes under the floor entirely, by never comparing</td><td>Values from a small known set. Ages yes, customer ids no</td></tr>
    <tr><td>Radix sort</td><td>Counting sort applied one digit at a time, so the set stays tiny</td><td>Values you can chop into digits, and a stable pass per digit</td></tr>
  </table>
  <div class="tbl-cap">Radix is the clever one and it is worth seeing why. Sorting a million nine-digit numbers by counting would need a billion tallies. Sorting them one digit at a time needs ten tallies, six or nine times over, and it only works because each pass preserves the order the previous pass established, which is exactly the stability the board above got for free.</div></div>

  <p>And heap sort deserves its own sentence, because it is the one people skip. <strong>It repeatedly grabs the largest remaining item</strong>, using a shape that makes finding the largest cheap. That shape is a heap, and Chapter 11, Heaps and Priority Queues, builds it properly. It is also exactly the shape Lesson 5.3 said priority needed and could not have.</p>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">A million items, and when the condition pays.</div>
  <p>A million items through a comparison sort is <strong>about 20,000,000 comparisons</strong>, which Lesson 7.3 derived. Now suppose those million items are ages, so every value is between 0 and 99.</p>

  <div class="viz" data-viz='{"type":"card","title":"A million items, and what the condition buys","eyebrow":"OPERATIONS","badge":"same million","width":560,"rows":[{"k":"Any comparison sort","v":"about 20,000,000","tone":"bad","bar":0.02},{"k":"Counting, if values are ages 0 to 99","v":"about 1,000,100","tone":"good","bar":0.001},{"k":"Radix, six digits, ten tallies per pass","v":"about 6,000,000","tone":"good","bar":0.006},{"k":"Counting, if values are ids up to a billion","v":"about 1,001,000,000","tone":"bad","bar":1},{"k":"So the condition is not a detail","v":"1,000 times either way","tone":"bad","bar":1}],"caption":"Every bar is drawn against a maximum of about a billion. Row two is twenty times better than any comparison sort. Row four is the identical method on the identical million items, and it is fifty times worse, because the tally now needs a billion slots for a million values. Nothing changed but the range."}'></div>

  <p>That is the honest shape of it. <strong>Counting sort is either magnificent or absurd</strong>, and which one depends entirely on the spread of the values rather than how many there are. In the Chapter 2 currency it is <em class="g">O(n + k)</em>, where k is the size of the range, and the whole art is noticing when k is small.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places, and in three of them nobody would say the word sort.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Sorting without comparing, where it already runs","unit":178,"nodes":[{"id":"c","label":"Sorting by what a thing IS, not how it ranks","x":2,"y":1,"kind":"dark"},{"id":"a","label":"Grouping records by a small fixed set: status, country, year","x":0,"y":0,"kind":"gold"},{"id":"p","label":"Ordering pixels or scores, where values have a fixed range","x":0,"y":2,"kind":"accent"},{"id":"r","label":"Sorting long ids or dates one digit at a time","x":4,"y":0,"kind":"accent"},{"id":"h","label":"Heap sort, where predictable memory matters more than speed","x":4,"y":2,"kind":"accent"},{"id":"t","label":"And the top ten, which needs no sorting at all. Chapter 11","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"a","label":"a few dozen buckets","style":"gold"},{"from":"c","to":"p","label":"a known range","style":"green"},{"from":"c","to":"r","label":"ten buckets, many passes","style":"green"},{"from":"c","to":"h","label":"no extra room, no bad case"},{"from":"c","to":"t","label":"grab the largest, ten times","style":"gold"}],"caption":"The bottom node is the trick this chapter has been circling since Lesson 7.1 asked why you would sort a million rows to answer a question about ten. If you only want the ten largest, a shape that makes grabbing the largest cheap answers it without ever ordering the other 999,990."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and the tell is the shape of the values.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"We sort a million rows to group them by status"</td><td>Ask how many distinct statuses exist</td><td>A handful. Counting beats comparing by a wide margin</td></tr>
    <tr><td>"We only ever look at the top ten"</td><td>Ask whether the other rows are read at all</td><td>A full sort for a question that never needed one. Chapter 11</td></tr>
    <tr><td>"Sorting is fine but memory spikes during it"</td><td>Ask whether the sort needs a second copy</td><td>Merge sort honest price. Heap sort does not pay it</td></tr>
    <tr><td>"We tried counting sort and it used gigabytes"</td><td>Ask the range of the values, not the count</td><td>The tally is sized by the range. Ids break it, ages do not</td></tr>
    <tr><td>"Occasionally a run takes far longer than usual"</td><td>Ask what happens on the unlucky input</td><td>Lesson 7.4 worst case. Heap sort has no unlucky input</td></tr>
    <tr><td>"Sorting by digit gave the wrong answer"</td><td>Ask whether each pass preserves the previous order</td><td>Radix collapses without stability. Lesson 7.6 explains why</td></tr>
  </table>
  <div class="tbl-cap">Rows one and four are the same question with opposite answers, and the difference is never how much data there is. It is how many different things a value is allowed to be, which is a question almost nobody asks before choosing a sort.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Twenty minutes to group a million rows into four piles.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our reporting job sorts about a million order rows by status so that the report can show them grouped: pending, paid, shipped, cancelled. The sort takes about twenty minutes and it is the slowest part of the night. Somebody suggested moving it to a bigger machine. There are only those four statuses and there have only ever been four."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"A million rows, four possible answers","lanes":[{"label":"The team"},{"label":"You"},{"label":"The job"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"20 minutes to sort a million rows by status"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: how many different values can status be?"},{"id":"c1","lane":2,"col":1,"kind":"accent","label":"Four. It has always been four"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Then nothing needs comparing. Count into four buckets"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"The sort does about 20,000,000 comparisons"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"Counting is one pass to tally, one to write out"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"About 2 million operations, on the same machine"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"The report never needed an order at all. It needed four groups, and asking a general sort to produce four groups is asking it to establish a million relationships when only four answers were ever possible."}'></div>

  <p><strong>The report does not want a sorted list. It wants four piles.</strong> A general sort has no idea that status can only be one of four things, so it does the full twenty million comparisons establishing an order between rows whose relative position nobody will ever look at. Counting is two passes: tally the four, then write them out.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked about the values rather than about the volume. <strong>How many different things can this field be?</strong> When the answer is a handful, comparing is doing enormously more work than the question requires, and no machine you buy will change that. The bigger machine would have made the wrong method faster, which is the most expensive kind of fix because it works just well enough to stop anybody asking again.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one deck and one tally</div>
    <p>Take a full deck and deal out thirty cards. <strong>Round one:</strong> sort them by suit using any comparison method you like, and count your comparisons. <strong>Round two:</strong> reshuffle, then deal each card straight into one of four piles by suit, and count how many comparisons you made. The answer should be zero, because you never held two cards against each other. <strong>Round three:</strong> now try the same trick sorting them by their exact value including suit, so that every card is distinct, and notice how many piles you would need. That number is the condition, and it is the whole lesson.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A job sorts a million rows by a status field that can only ever hold four values, and it takes twenty minutes. What is the fix?</div>
    <div class="opt" data-i="0">A faster machine, since twenty million comparisons is a lot of work</div>
    <div class="opt" data-i="1">Stop comparing. Tally the four values in one pass and write the groups out in a second</div>
    <div class="opt" data-i="2">Sort a sample and use it to estimate the grouping</div>
    <div class="qexp">A general sort must establish an order between rows because it is not allowed to know anything about the values. When a field has four possible values, asking each row what it is places it immediately, and no row is ever held up against another. That is two passes instead of about twenty million comparisons, and the bigger machine would only have made the wrong method faster.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">Counting sort is spectacular on a million ages and disastrous on a million customer ids. Why?</div>
    <div class="opt" data-i="0">Because ids are longer, so each comparison takes more time</div>
    <div class="opt" data-i="1">Because ages are already nearly in order and ids are not</div>
    <div class="opt" data-i="2">Because the tally is sized by the range of possible values, not by how many items there are</div>
    <div class="qexp">A hundred possible ages needs a hundred tally slots for any number of people. Ids running up to a billion need a billion slots to hold the same million values, which is fifty times worse than simply comparing. The method never looks at how much data there is; it looks at how many different things a value is allowed to be, and radix sort exists precisely to keep that number small by taking one digit at a time.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>You now have every sorting idea in the chapter, and one of them quietly appeared twice: the three 1s in the block 3 board left in the order they arrived, and radix sort collapses without it. <strong>Next: why that property is a business requirement rather than a footnote</strong>, and why the sort your language actually ships is none of these methods but a mixture of three of them.</p>
  </div>
__NAV__
</div>`
,

"7.6": `<div class="wrap">
  <div class="les-kicker">Chapter 7 · Lesson 7.6</div>
  <h1 class="les-title">Stability, In-Place, and Why Real Systems Use Hybrids</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
  </div>

  <p class="motto">Two sorts can both be correct, produce different answers, and only one of them keeps the promise your product made.</p>

  <p class="lead">You now have every sorting idea in the chapter. This lesson is about the two properties nobody asks for until something breaks, and about why the sort your programming language actually ships is none of the methods you have met but a mixture of three of them. By the end you can say what your sort must promise before you care how fast it is. Sorting is never the goal, and neither is speed: these two properties decide whether a sort is usable before anybody times it.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">You have already relied on this and never noticed.</div>
  <p>A table of products on a shop page. You click <em class="k">price</em> and it sorts cheapest first. Then you click <em class="k">rating</em>. <strong>What do you expect to see?</strong> Five star products at the top, and within those five star products, the cheap ones first, because that is what you asked for a moment ago.</p>

  <div class="viz" data-viz='{"type":"scene","title":"Two clicks, and the promise between them","width":820,"height":280,"items":[{"icon":"person","x":120,"y":126,"kind":"gold","label":"click: sort by price"},{"icon":"doc","x":330,"y":124,"kind":"accent","label":"cheapest first"},{"icon":"person","x":540,"y":126,"kind":"gold","label":"click: sort by rating"},{"icon":"doc","x":740,"y":124,"kind":"box","label":"best rated first, and still cheapest within each"}],"arrows":[{"x1":180,"y1":126,"x2":268,"y2":126,"style":"green","label":"first sort"},{"x1":600,"y1":126,"x2":676,"y2":126,"style":"gold","label":"does it remember?"}],"caption":"Nobody has ever asked a product team for a stable sort. Everybody has complained when they clicked two columns and the second click destroyed the first. That complaint is this lesson, and it arrives as a bug report about the interface rather than about an algorithm."}'></div>

  <p>Nobody has ever asked for that in writing. <strong>Everybody complains when it does not happen</strong>, and the complaint arrives as a bug about the page rather than about a sorting method.</p>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">Two properties, and neither one is about speed.</div>
  <p><strong>Stable</strong> means that when two items are equal, they come out in the order they went in. <strong>In place</strong> means the sort works inside the row it was given, without needing room for a second copy. Neither is about how fast anything runs, and both decide whether a method is usable at all.</p>

  <div class="viz" data-viz='{"type":"arch","title":"Two questions to ask before speed","maxChars":18,"nodes":[{"id":"q","label":"Before asking how fast","col":0,"row":1,"kind":"dark"},{"id":"s","label":"Does it keep the order of equal items?","col":1,"row":0,"kind":"gold"},{"id":"i","label":"Does it need room for a second copy?","col":1,"row":2,"kind":"gold"},{"id":"sy","label":"Yes: you can sort by one thing, then another, and keep both","col":2,"row":0,"kind":"accent"},{"id":"sn","label":"No: the second sort silently destroys the first","col":2,"row":1,"kind":"bad"},{"id":"iy","label":"Yes: merge sort, and memory spikes on big files","col":2,"row":2,"kind":"bad"},{"id":"in","label":"No: quick and heap sort, working inside the row","col":2,"row":3,"kind":"accent"}],"edges":[{"from":"q","to":"s"},{"from":"q","to":"i"},{"from":"s","to":"sy","label":"stable","style":"green"},{"from":"s","to":"sn","label":"not stable"},{"from":"i","to":"iy","label":"needs a copy"},{"from":"i","to":"in","label":"in place","style":"green"}],"caption":"These two questions have nothing to do with each other and nothing to do with speed, and between them they eliminate most methods for most jobs. The unhappy fact underneath this lesson is that the fastest in-place methods are the ones that are not stable."}'></div>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">Two correct answers, and only one of them keeps the promise.</div>
  <p>Six products. The number in each box is the <strong>rating</strong>, and the letter underneath is the product, listed in the order the previous sort left them: cheapest first. Now sort by rating and watch the letters.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Sorted by rating, two ways, both correct","speed":1600,"big":true,"data":[3,1,2,3,1,2],"labels":["a","b","c","d","e","f"],"countLabel":" items placed","legend":[["placed, tie order kept","found"],["placed, tie order lost","bad"]],"steps":[{"order":[0,1,2,3,4,5],"count":0,"say":"Six products, already sorted by price so that a is cheapest and f is dearest. <b>The number is the rating. The letter is the product.</b> Three ratings, and every rating appears twice."},{"order":[1,4,2,5,0,3],"found":[1,4,2,5,0,3],"count":6,"badge":"stable: b e c f a d","say":"Sorted by rating with a <b>stable</b> method. Read the letters: b, e, then c, f, then a, d. Inside every rating the cheaper product still comes first, <b>because equal items left in the order they arrived.</b>"},{"order":[4,1,5,2,3,0],"bad":[4,1,5,2,3,0],"count":6,"badge":"unstable: e b f c d a","say":"The same six products, sorted by rating with an <b>unstable</b> method. Read the letters now: e, b, f, c, d, a. <b>Every rating is still correct.</b> The ratings are in perfect order and no item is in the wrong group."},{"order":[4,1,5,2,3,0],"bad":[4,1,5,2,3,0],"count":6,"badge":"both are correctly sorted","say":"That is the trap. <b>Neither of these is a bug in the ordinary sense.</b> Both rows are correctly sorted by rating and either would pass a test that checks the ratings are in order. The second one has quietly thrown away everything the price sort established."}],"caption":"Both answers are correct and only one is useful. The letters are the evidence: the price sort did real work, and an unstable method deletes it while leaving no trace that anything was lost, because the thing it was asked to sort is still perfectly sorted."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Where stability comes from, and where it goes.</div>

  <div class="viz" data-viz='{"type":"seq","title":"A tie, offered to two methods","actors":[{"label":"Two equal items","kind":"gold"},{"label":"Merge sort","kind":"accent"},{"label":"Quick sort","kind":"bad"}],"messages":[{"from":0,"to":1,"label":"we are equal. Which of us goes first","style":"gold"},{"from":1,"to":0,"label":"the one from the left run. I always prefer the left on a tie","style":"green"},{"from":0,"to":2,"label":"and you","style":"gold"},{"from":2,"to":0,"label":"whichever side of the pivot you landed on"},{"from":2,"to":0,"label":"and that depends on where you happened to be standing"}],"caption":"Stability is not a feature anybody adds. It falls out of merge sort by preferring the left run whenever two items are equal, and it is destroyed in quick sort because partitioning moves items across the row without regard for where they started. Lesson 7.5 counting sort was stable for the same reason: the tally is read front to back."}'></div>

  <p><strong>Nobody adds stability. It either falls out of the method or it does not.</strong> Merge sort has it because a tie always resolves in favour of the left run. Quick sort loses it because partitioning throws items across the row, and Lesson 7.5 showed radix sort collapsing entirely without it.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Every method in this chapter, on the two questions that decide.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The method</th><th>Stable</th><th>Needs a second copy</th><th>Worst case</th></tr>
    <tr><td>Insertion</td><td>yes</td><td>no</td><td>four times slower per doubling</td></tr>
    <tr><td>Merge</td><td>yes</td><td>yes</td><td>none. Always layers times size</td></tr>
    <tr><td>Quick</td><td>no</td><td>no</td><td>as bad as bubble, on sorted input</td></tr>
    <tr><td>Heap</td><td>no</td><td>no</td><td>none. Always layers times size</td></tr>
    <tr><td>Counting and radix</td><td>yes</td><td>yes</td><td>collapses if the value range is large</td></tr>
  </table>
  <div class="tbl-cap">Read down the middle two columns and the problem of this chapter appears: no single row is stable, in place, and free of a worst case. That is not a gap in anybody knowledge. It is a genuine trade, and it is why the next section exists.</div></div>

  <p>Read that table again and the whole chapter turns into one uncomfortable fact. <strong>Nothing is stable, in place, and safe at the same time.</strong> So real systems stopped choosing.</p>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">The sort your language ships is a mixture, and here is why.</div>
  <p>Every lesson in this chapter contributed one fact that a real sort now uses. <strong>Lesson 7.2:</strong> below about twenty items, insertion sort genuinely wins, and it is nearly free on data that is already nearly in order. <strong>Lesson 7.3:</strong> merging existing runs is cheap, stable, and predictable. <strong>Lesson 7.4:</strong> partitioning is fast and needs no extra room, but has a worst case that must be guarded.</p>

  <div class="viz" data-viz='{"type":"card","title":"What a real sort actually does","eyebrow":"ONE SORT, THREE METHODS","badge":"per piece","width":560,"rows":[{"k":"Pieces under about 20 items","v":"insertion sort. Lesson 7.2","tone":"good","bar":0.02},{"k":"Runs of already-ordered data found in the input","v":"merged, not re-sorted. Lesson 7.3","tone":"good","bar":0.1},{"k":"Everything else, when stability is not required","v":"partitioning. Lesson 7.4","tone":"good","bar":0.5},{"k":"If the splitting goes too deep","v":"switch method, and stop the worst case","tone":"good","bar":0.5},{"k":"Nearly sorted input, end to end","v":"close to one pass","tone":"good","bar":0.05}],"caption":"Every row is a decision the sort makes about the data in front of it while it runs, rather than a decision somebody made in advance. That is the actual answer to which sort is best: none of them, and the useful skill is knowing which fact about your data each of them is exploiting."}'></div>

  <p>And the guard in row four is Lesson 7.4 worst case being taken seriously. <strong>A real sort watches how deep its splitting has gone</strong>, and if it goes far deeper than layers-times-size would allow, it abandons partitioning and finishes with a method that has no bad case at all.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five places where one of these two properties was the whole decision.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"Where stability and memory decided it","unit":178,"nodes":[{"id":"c","label":"Two questions, asked before speed","x":2,"y":1,"kind":"dark"},{"id":"t","label":"A table where clicking two columns must keep both","x":0,"y":0,"kind":"gold"},{"id":"r","label":"Radix sort, which is wrong without stability. Lesson 7.5","x":0,"y":2,"kind":"accent"},{"id":"f","label":"A file larger than memory, where a second copy is impossible","x":4,"y":0,"kind":"accent"},{"id":"e","label":"An embedded device with a fixed, small memory budget","x":4,"y":2,"kind":"accent"},{"id":"l","label":"And library sorts, which usually promise stability in writing","x":2,"y":3,"kind":"gold"}],"edges":[{"from":"c","to":"t","label":"stability is the feature","style":"gold"},{"from":"c","to":"r","label":"stability is the mechanism","style":"green"},{"from":"c","to":"f","label":"in place, or nothing"},{"from":"c","to":"e","label":"no room for a copy"},{"from":"c","to":"l","label":"promised, so relied on","style":"gold"}],"caption":"The bottom node is worth checking rather than assuming. Some language libraries guarantee a stable sort and some explicitly do not, and code that quietly depends on stability will work perfectly until the day it runs somewhere that never promised it."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Six sentences, and not one of them says stable.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The test to run</th><th>What it is really telling you</th></tr>
    <tr><td>"Clicking the second column loses the first sort"</td><td>Sort by one column, then another, and read the ties</td><td>Not stable. The second sort deleted the first work</td></tr>
    <tr><td>"The same list comes back in a different order each run"</td><td>Run it twice on identical input</td><td>Ties resolved arbitrarily. Nothing is wrong with the ordering</td></tr>
    <tr><td>"It works locally and gives a different order in production"</td><td>Compare the two sort implementations</td><td>One promises stability and the other does not</td></tr>
    <tr><td>"Memory doubles while sorting large files"</td><td>Ask whether the method needs a second copy</td><td>Merge sort honest price. Lesson 7.4 and heap sort avoid it</td></tr>
    <tr><td>"Sorting by digit produced nonsense"</td><td>Ask whether each pass is stable</td><td>Radix has no meaning without it. Lesson 7.5</td></tr>
    <tr><td>"Our tests pass and users say the order is wrong"</td><td>Check what the test actually asserts</td><td>It checks the sorted column. The complaint is about the ties</td></tr>
  </table>
  <div class="tbl-cap">The last row is why this whole lesson is worth its place. A test that asserts the list is sorted will pass on an unstable sort, every time, because the list genuinely is sorted. The information that was destroyed is in a column the test never looks at.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Every test passes and the support queue disagrees.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Users tell us our results page is scrambled. Our tests all pass and they assert the results are correctly ordered by relevance, which they are. We upgraded a library last month. Nobody can reproduce it reliably, and when we look at a screenshot the ordering looks correct to us. One user said it was fine until they filtered, then it went wrong."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Correctly sorted, and still wrong","lanes":[{"label":"The team"},{"label":"You"},{"label":"The page"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"Users say scrambled. Tests pass. Order looks correct"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: what do the tests actually assert?"},{"id":"c1","lane":2,"col":1,"kind":"bad","label":"That relevance is in order. It is"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Then look at rows with EQUAL relevance"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"Ties come back in a different order every run"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"The upgrade changed the sort to an unstable one"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"Restore stability, and assert on the ties in the test"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"Nothing here is a sorting bug in the usual sense, which is why nobody could see it. The list is genuinely sorted by the thing it was asked to sort by, and the information that was destroyed lives entirely in rows the tests never compare with each other."}'></div>

  <p><strong>The results are correctly sorted, and that is precisely why nobody could find it.</strong> Many results share the same relevance score, and the previous sort kept those ties in a sensible order, most likely the order an earlier stage produced. The upgraded library sorts just as correctly and resolves ties differently, so every screenshot looks right and every test passes.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It stopped looking at the sorted column, which is where everybody looks and where nothing is wrong. <strong>The question is not is this sorted, it is what happens to items that are equal.</strong> That is invisible to any test that asserts ordering, invisible in a screenshot, and it changes the moment somebody swaps an implementation, which is exactly the shape of a bug that survives for months.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one spreadsheet</div>
    <p>Open any spreadsheet with at least two columns and twenty rows. <strong>Round one:</strong> sort by one column, then take a photograph or note the order. <strong>Round two:</strong> now sort by a second column that contains repeats, and look carefully at the rows that share a value in that second column. Are they still in the order round one put them? <strong>Round three:</strong> undo everything and do the two sorts in the opposite sequence. If the final result differs, your spreadsheet is stable and you have just relied on it. If it does not differ, find out which of the two behaviours your tools promises in writing, because you will one day depend on the answer.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="2">
    <div class="q">Users report a scrambled results page. Tests assert the results are ordered by relevance and they pass. What is happening?</div>
    <div class="opt" data-i="0">The relevance scores are being computed incorrectly</div>
    <div class="opt" data-i="1">The page is displaying results before the sort has finished</div>
    <div class="opt" data-i="2">The sort is not stable, so rows with equal relevance come back in a different order, which is invisible to a test that only checks the sorted column</div>
    <div class="qexp">Both a stable and an unstable sort produce a correctly sorted list, so any test asserting order will pass on either. The information destroyed lives entirely in the ties, which no test compares and no screenshot reveals. This is why swapping a sorting implementation can break a product months later with nothing in the change that looks related.</div>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">Why does the sort in a real programming language use insertion sort, merge sort and partitioning rather than picking the best one?</div>
    <div class="opt" data-i="0">Because different data types need different algorithms</div>
    <div class="opt" data-i="1">Because no single method is stable, in place, and free of a worst case, so it switches based on what it finds in the data as it runs</div>
    <div class="opt" data-i="2">Because older algorithms are kept for compatibility with existing code</div>
    <div class="qexp">Read down the table in block 5 and no row has all three properties. So real sorts stop choosing in advance and decide while running: insertion below about twenty items where it genuinely wins, merging for runs of order already present in the input, partitioning for the rest, and a switch of method if the splitting goes suspiciously deep. Each of those is one lesson of this chapter being cashed in.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>You now have every method, both properties, and the reason real systems mix them. <strong>The last lesson is the part nobody teaches:</strong> how sorting problems actually arrive, which is never as somebody asking which sorting algorithm to use, and six systems taken apart to show what each of them decided.</p>
  </div>
__NAV__
</div>`
,

"7.7": `<div class="wrap">
  <div class="les-kicker">Chapter 7 · Lesson 7.7</div>
  <h1 class="les-title">How Sorting Problems Show Up, and Six Systems Torn Down</h1>
  <div class="les-meta">
    <span class="pill">foundational</span><span class="pill">~13 min</span>
    <span class="pill gold">no code needed</span><span class="pill">9 visuals</span>
  </div>

  <p class="motto">Nobody has ever asked which sorting algorithm to use. They ask for a report, and the sort is a decision somebody made on their behalf years ago.</p>

  <p class="lead">You have every method, both properties, and the reason real systems mix them. This is the part nobody teaches: sorting problems arrive as reports, exports, dashboards and complaints, and almost none of them are asking for a sorted list at all. By the end you can hear one and say what order it actually needs, who is paying for it, and whether it needs sorting in the first place. Sorting is never the goal, so the first question is always what the order is an investment in.</p>

  <h2><span class="ix">1</span> The Everyday Situation</h2>
  <div class="sub">Three requests, and not one of them wants a sorted list.</div>
  <p><em class="k">Show me our ten biggest customers.</em> <em class="k">Group these orders by status.</em> <em class="k">Which of these two files changed?</em> Every one of those gets answered by sorting something, in most systems, and <strong>not one of them asked for a sorted list.</strong></p>

  <div class="viz" data-viz='{"type":"scene","title":"Three requests, three sorts nobody asked for","width":820,"height":280,"items":[{"icon":"person","x":120,"y":126,"kind":"gold","label":"show me the ten biggest"},{"icon":"person","x":330,"y":126,"kind":"gold","label":"group these by status"},{"icon":"person","x":540,"y":126,"kind":"gold","label":"which of these two files changed"},{"icon":"server","x":740,"y":124,"kind":"bad","label":"all three answered by sorting everything"}],"arrows":[{"x1":600,"y1":126,"x2":680,"y2":126,"style":"gold","label":"and only one of them needs to"}],"caption":"Each of these is a real request and each is usually answered by putting a million rows in order. Only one of the three genuinely needs an order, and the other two are paying for something nobody will look at, which is the most expensive kind of invisible cost."}'></div>

  <h2><span class="ix">2</span> What It Actually Is</h2>
  <div class="sub">Three questions, asked of the request rather than the code.</div>
  <p>Lesson 6.7 gave you an instrument for hearing search problems. This is the same move for sorting, and it is three questions in a fixed order.</p>

  <div class="viz" data-viz='{"type":"flow","title":"The instrument, and its off switch","maxChars":18,"nodes":[{"id":"s","label":"Somebody asks for a report","col":0,"row":1,"kind":"gold"},{"id":"q1","label":"Does anything downstream read the order?","col":1,"row":1,"kind":"dark","shape":"diamond"},{"id":"n","label":"No: delete the sort. Lesson 7.1","col":2,"row":0,"kind":"bad"},{"id":"q2","label":"Does it need ALL of it ordered?","col":2,"row":2,"kind":"gold","shape":"diamond"},{"id":"p","label":"No: keep the few you want, and touch nothing else","col":3,"row":1,"kind":"accent"},{"id":"q3","label":"Yes. Then: what shape is the data already in?","col":3,"row":3,"kind":"gold"}],"edges":[{"from":"s","to":"q1"},{"from":"q1","to":"n","label":"no"},{"from":"q1","to":"q2","label":"yes","style":"green"},{"from":"q2","to":"p","label":"no"},{"from":"q2","to":"q3","label":"yes","style":"green"}],"caption":"The off switch is first for the same reason it was in Lesson 6.7: it is the answer most likely to be missed and the one that saves the most. The second question is the one nobody asks, and it is where the top ten and the grouping requests both leave the chapter without ever needing a sort."}'></div>

  <p>Question one is Lesson 7.1: <strong>an order with no reader is pure expense.</strong> Question two is new, and it is where most of the savings live: <em class="k">show me the ten biggest</em> does not need 999,990 rows put in order.</p>

  <h2><span class="ix">3</span> Watch It Work</h2>
  <div class="sub">The ten biggest, without sorting anything else.</div>
  <p>Eight values, and the request is <strong>the top three.</strong> Hold three, and for every remaining item ask one question: are you bigger than the smallest one I am holding? Watch the counter.</p>

  <div class="board" data-anim='{"type":"array-scan","title":"Top three, and the five values that were never ordered","speed":1600,"big":true,"data":[7,2,9,4,1,8,3,5],"countLabel":" comparisons","pointerLabels":{"i":"asking"},"legend":[["being asked one question","look"],["the three you are holding","found"],["never ordered, never needed","dead"]],"steps":[{"order":[0,1,2,3,4,5,6,7],"found":[0,1,2],"count":0,"say":"Take the first three and hold them: 7, 2, 9. <b>They are not in order and they do not need to be.</b> The only thing that matters is which of the three is smallest."},{"order":[0,1,2,3,4,5,6,7],"found":[0,1,2],"look":[3],"ptr":{"i":3},"count":1,"say":"Next value is 4. <b>One question: are you bigger than the smallest I hold?</b> The smallest I hold is 2. Yes, 4 is bigger, so 2 leaves and 4 joins."},{"order":[0,3,2,1,4,5,6,7],"found":[0,3,2],"look":[4],"ptr":{"i":4},"dead":[1],"count":2,"say":"Now holding 7, 4, 9. Next is 1. Bigger than 4? No. <b>It is discarded on one comparison and never looked at again.</b>"},{"order":[0,3,2,1,4,5,6,7],"found":[0,3,2],"look":[5],"ptr":{"i":5},"dead":[1,4],"count":3,"say":"Next is 8. Bigger than 4? Yes. So 4 leaves and 8 joins, and the three I hold are now 7, 8, 9."},{"order":[2,5,0,1,3,4,6,7],"found":[2,5,0],"dead":[1,3,4,6,7],"count":5,"badge":"5 comparisons","say":"3 and 5 are both smaller than 7, so both are discarded on one question each. <b>Five comparisons, and the answer is 9, 8, 7.</b>"},{"order":[2,5,0,1,3,4,6,7],"found":[2,5,0],"dead":[1,3,4,6,7],"count":5,"badge":"5 against 14, or 28","say":"Sorting all eight would have cost fourteen comparisons with Lesson 7.4, or twenty eight with Lesson 7.2. <b>The five faded values were never put in any order at all</b>, because nobody was ever going to look at their order."}],"caption":"Five comparisons instead of fourteen, and the saving grows with the pile: a million rows to find the top ten is about a million questions, against the twenty million comparisons a full sort would spend ordering rows nobody reads."}'></div>

  <h2><span class="ix">4</span> Under The Hood</h2>
  <div class="sub">Why the saving grows rather than staying the same.</div>

  <div class="viz" data-viz='{"type":"seq","title":"The same request, two readings","actors":[{"label":"The request","kind":"gold"},{"label":"A full sort","kind":"bad"},{"label":"Keeping ten","kind":"accent"}],"messages":[{"from":0,"to":1,"label":"show me the ten biggest of a million","style":"gold"},{"from":1,"to":0,"label":"about 20,000,000 comparisons, and here is the whole list in order"},{"from":0,"to":2,"label":"show me the ten biggest of a million","style":"gold"},{"from":2,"to":0,"label":"about 1,000,000 questions, and here are ten","style":"green"},{"from":2,"to":0,"label":"I never established any order among the other 999,990","style":"green"}],"caption":"The full sort is not doing the job badly. It is doing a much larger job, correctly, and then throwing almost all of it away. Twenty times the work, and every unit of the difference went into ordering rows that were never displayed."}'></div>

  <p><strong>The full sort is not slow. It is answering a much bigger question.</strong> It establishes a relationship between every pair of rows, and the request only ever needed ten of them.</p>

  <h2><span class="ix">5</span> The Types</h2>
  <div class="sub">Six systems, and what each one decided.</div>

  <div class="tbl-wrap"><table>
    <tr><th>The system</th><th>What it needed</th><th>What it chose, and who pays</th></tr>
    <tr><td>A shop page sorted by two columns</td><td>Stability above all else</td><td>A stable method, paid for in a second copy. Lesson 7.6</td></tr>
    <tr><td>A database index</td><td>Order that survives constant writes</td><td>Never a sort. Order kept as a shape, paid per write. Lesson 6.5</td></tr>
    <tr><td>A leaderboard showing the top ten</td><td>Ten rows, not an ordered million</td><td>Keep ten, and never order the rest. Chapter 11</td></tr>
    <tr><td>A report grouped by status</td><td>Four piles, not an order</td><td>Counting, and no comparison at all. Lesson 7.5</td></tr>
    <tr><td>Merging logs from twelve servers</td><td>To not re-sort work already done</td><td>Stitching, because each arrived in time order. Lesson 7.3</td></tr>
    <tr><td>A nightly export nobody reads in order</td><td>Nothing</td><td>Delete the sort. Lesson 7.1</td></tr>
  </table>
  <div class="tbl-cap">Only the first row is a sorting decision in the sense this chapter has been teaching. Two of the six needed no sort at all, two needed something that is not a sort, and one needed an order that was already free. That ratio is roughly what you will find in a real system.</div></div>

  <h2><span class="ix">6</span> What It Costs, In Plain English</h2>
  <div class="sub">Five ways to get an order, and what each one charges.</div>
  <p>Lesson 0.3 promised that this chapter would show <strong>the five ways to grow that boundary and why real systems mix them.</strong> Here they are, in one place, with the payer named.</p>

  <div class="viz" data-viz='{"type":"card","title":"Five ways to have an order, and who pays","eyebrow":"A MILLION ROWS","badge":"who pays, and when","width":560,"rows":[{"k":"Do not have one. Scan instead","v":"free to write, paid on every read","tone":"good","bar":0.02},{"k":"Sort it once, when you need it","v":"about 20,000,000 comparisons, paid then","tone":"bad","bar":1},{"k":"Keep it as a shape, always ordered","v":"paid a little by every writer, forever","tone":"good","bar":0.05},{"k":"Take the order that already exists free","v":"paid by nobody. Time order, git history","tone":"good","bar":0},{"k":"Do not order at all. Count into groups","v":"two passes, if the values are few","tone":"good","bar":0.1}],"caption":"Every bar is a rough weight rather than a measurement. Row four is the cheapest order in computing and the one most often bought twice by accident, and row five is not an order at all, which is why it escapes the whole comparison floor from Lesson 7.5."}'></div>

  <p>And why real systems mix them: <strong>because a system is not one question.</strong> The same database keeps a shape for its indexed columns, sorts once for a nightly report, counts for its status dashboard, and scans for the rest, and every one of those is the right answer to a different question in the same product.</p>

  <h2><span class="ix">7</span> Where It Lives In Real Life</h2>
  <div class="sub">Five complaints, and the question hiding under each.</div>

  <div class="viz" data-viz='{"type":"kgraph","title":"What people actually say when they mean sorting","unit":178,"nodes":[{"id":"c","label":"Nobody says the word sort","x":2,"y":1,"kind":"dark"},{"id":"r","label":"The month end report times out and the daily one is fine","x":0,"y":0,"kind":"accent"},{"id":"t","label":"The table jumps about when I click a second column","x":0,"y":2,"kind":"gold"},{"id":"e","label":"The export got slow and nothing changed","x":4,"y":0,"kind":"accent"},{"id":"d","label":"The dashboard takes a minute to show four numbers","x":4,"y":2,"kind":"gold"},{"id":"m","label":"Combining results takes longer than producing them","x":2,"y":3,"kind":"accent"}],"edges":[{"from":"c","to":"r","label":"thirty times the rows"},{"from":"c","to":"t","label":"stability. Lesson 7.6","style":"gold"},{"from":"c","to":"e","label":"an order with no reader","style":"green"},{"from":"c","to":"d","label":"counting, not sorting","style":"gold"},{"from":"c","to":"m","label":"stitching, not re-sorting","style":"green"}],"caption":"Not one of these five sentences contains a word from this chapter, and every one of them is answered by something in it. That gap between how a problem is described and what it actually is, is the entire reason this lesson exists."}'></div>

  <h2><span class="ix">8</span> How Problems Show Up</h2>
  <div class="sub">Seven sentences, and the question to ask each one.</div>

  <div class="tbl-wrap"><table>
    <tr><th>What somebody actually says</th><th>The question to ask</th><th>What it is really telling you</th></tr>
    <tr><td>"The dashboard takes a minute to show four numbers"</td><td>How many values can that field hold?</td><td>Counting, not sorting. Lesson 7.5</td></tr>
    <tr><td>"We only show the top twenty"</td><td>Is the rest of the order ever displayed?</td><td>Keep twenty. Never order the other million</td></tr>
    <tr><td>"The export got slower every month"</td><td>What reads the order afterwards?</td><td>Possibly nothing. Lesson 7.1</td></tr>
    <tr><td>"Clicking a second column loses the first"</td><td>Is the sort stable?</td><td>Lesson 7.6, and it will pass every test</td></tr>
    <tr><td>"It hangs only on the pre-sorted file"</td><td>How is the pivot chosen?</td><td>Lesson 7.4 worst case, on the most common input</td></tr>
    <tr><td>"Combining twelve results is the slow part"</td><td>Does the combine re-sort?</td><td>It should stitch. Lesson 7.3</td></tr>
    <tr><td>"We sort it fresh before every search"</td><td>How many searches per sort?</td><td>Below about twenty one, the scan was cheaper. Lesson 6.3</td></tr>
  </table>
  <div class="tbl-cap">Every question in the middle column can be asked in a meeting, without opening any code, and each one points at exactly one lesson of this chapter. That is what a chapter is for: not knowing seven algorithms, but knowing which seven questions retire them.</div></div>

  <h2><span class="ix">9</span> Solve It Live</h2>
  <div class="sub">Ninety seconds to show ten rows.</div>
  <div class="callout">
    <div class="ch">The problem, as it arrives</div>
    <p>"Our top customers dashboard takes about ninety seconds to load and it shows ten rows. It pulls about four million order rows, sorts them by total value, and displays the first ten. It has got slower every year in a way that tracks our growth exactly. We have been asked to cache it, but the numbers need to be live."</p>
  </div>

  <div class="viz" data-viz='{"type":"swim","title":"Four million rows ordered, ten displayed","lanes":[{"label":"The team"},{"label":"You"},{"label":"The dashboard"}],"steps":[{"id":"a1","lane":0,"col":0,"kind":"gold","label":"90 seconds to show 10 rows. Cache it?"},{"id":"b1","lane":1,"col":1,"kind":"box","label":"Ask: is the order of rows 11 to 4,000,000 ever displayed?"},{"id":"c1","lane":2,"col":1,"kind":"accent","label":"No. The page shows ten"},{"id":"b2","lane":1,"col":2,"kind":"accent","label":"Then the sort is answering a much larger question"},{"id":"c2","lane":2,"col":2,"kind":"bad","label":"About 88,000,000 comparisons to order 4 million"},{"id":"b3","lane":1,"col":3,"kind":"accent","label":"Hold ten. Ask each row one question against the smallest"},{"id":"b4","lane":1,"col":4,"kind":"accent","label":"About 4,000,000 questions. Same data, still live"}],"edges":[{"from":"a1","to":"b1"},{"from":"b1","to":"c1"},{"from":"c1","to":"b2"},{"from":"b2","to":"c2"},{"from":"c2","to":"b3"},{"from":"b3","to":"b4"}],"caption":"Caching was aimed at the symptom and would have traded correctness for speed, which the request explicitly refused. The sort was never wrong, it was answering a question about four million rows when the page asked about ten."}'></div>

  <p><strong>Nothing here is slow and nothing is broken.</strong> A full sort establishes an order between every pair of four million rows, which is about 88,000,000 comparisons, and then the page displays ten of them and discards the rest. Holding ten and asking each row a single question is about four million questions, on the same data, still live, with no cache and no staleness.</p>

  <div class="callout good">
    <div class="ch">Why this reasoning wins</div>
    <p>It asked the second question of the instrument, which almost nobody asks: <strong>does this need ALL of it ordered?</strong> Caching, faster hardware and a better sorting algorithm all accept the premise that four million rows must be put in order. Once that premise is questioned, the answer is not a faster version of the same work. It is twenty times less work, and it was hiding in the difference between what the page asked for and what the code went and got.</p>
  </div>

  <h2><span class="ix">10</span> Your Turn</h2>
  <div class="callout accent">
    <div class="ch">Your rep, one screen you look at every week</div>
    <p>Pick any dashboard, report or list you see regularly at work or at home. <strong>First:</strong> ask whether anything downstream reads the order, or whether you only ever look at the top few. <strong>Second:</strong> if you only look at the top few, work out how many rows sit underneath being ordered for nobody. <strong>Third:</strong> ask what the values in the sorted column actually are. If there are only a handful of distinct values, nothing needed comparing at all. Almost every screen you check will fail at least one of those three, and now you can say which.</p>
  </div>

  <h2><span class="ix gold">✓</span> Check Yourself</h2>

  <div class="quiz" data-correct="1">
    <div class="q">A dashboard sorts four million rows by value and displays the top ten, taking ninety seconds. The numbers must stay live. What is the fix?</div>
    <div class="opt" data-i="0">Cache the result and refresh it every few minutes</div>
    <div class="opt" data-i="1">Hold ten and ask each row one question against the smallest of them, which never orders the other rows at all</div>
    <div class="opt" data-i="2">Move the sort to a faster machine, since the data volume is the cause</div>
    <div class="qexp">A full sort establishes an order between every pair of four million rows, about 88,000,000 comparisons, and the page then discards all but ten. Keeping ten costs about one question per row. Caching was refused by the requirement and a faster machine accepts the premise that four million rows must be ordered, which is the premise that was wrong.</div>
  </div>

  <div class="quiz" data-correct="0">
    <div class="q">Which of these three requests genuinely needs a sorted list?</div>
    <div class="opt" data-i="0">Show every order from this year in date order, for an auditor to read through</div>
    <div class="opt" data-i="1">Group these orders by status into four piles</div>
    <div class="opt" data-i="2">Show the ten biggest customers</div>
    <div class="qexp">Only the first asks for an order that somebody will actually read from beginning to end, which is the test from block 2. Grouping by a field with four possible values is counting and needs no comparison at all. The top ten needs ten rows and never needs the other rows ordered against each other. Two of these three are answered by sorting in most real systems, and in both cases the order produced is thrown away unread.</div>
  </div>

  <div class="callout good">
    <div class="ch">Next</div>
    <p>Sorting is never the goal. It is the investment you make so that every later question becomes cheap, and this chapter has been the itemised bill for it. <strong>The whiteboard now runs the whole thing end to end:</strong> every method on the same row, the one decision that breaks the fastest of them, and the request that needed no sort at all.</p>
  </div>
__NAV__
</div>`,

"7.8": `<div class="wrap">
  <div class="les-kicker">Chapter 7 · Lesson 7.8</div>
  <h1 class="les-title">The Whiteboard: Every Sort, Racing Side by Side</h1>
  <div class="les-meta">
    <span class="pill">whiteboard</span><span class="pill">~2 min</span>
    <span class="pill gold">watch, do not read</span><span class="pill">10 acts</span>
  </div>

  <p class="motto">You never choose a sorting algorithm. You choose how much order you are willing to buy, and who you are willing to charge for it.</p>

  <p class="lead">Sorting is never the goal, it is the investment you make so that every later question becomes cheap, and this is that argument with the prose taken out. Ten acts in four parts. Part 2 animates every sorting idea in the chapter on real traces. <strong>Part 3 puts three of them inside a shop page, a dashboard, and one import that broke because somebody helpfully sorted the input first.</strong></p>
</div>

<div class="reel" data-reel='{"title":"Every sort, and who pays for each","speed":1600,"caption":"Ten acts, about 1.5 minutes end to end. Part 2 animates every sorting idea in the chapter on real traces. Part 3 runs three of them inside a shop page, a dashboard and one import that broke because somebody helpfully sorted the input first.","acts":[{"part":"Part 1 · The idea","tab":"An investment","title":"Act 1 · Sorting is never the goal","type":"reveal","speed":1650,"viz":{"maxChars":16,"gy":42,"nodes":[{"id":"s","label":"Sorting: paid once, up front","col":0,"row":2,"kind":"gold"},{"id":"b","label":"Find one thing: 20 looks, not a million","col":1,"row":0,"kind":"accent"},{"id":"r","label":"Everything between two dates","col":1,"row":1,"kind":"accent"},{"id":"g","label":"Duplicates: equal things are neighbours","col":1,"row":2,"kind":"accent"},{"id":"t","label":"The top ten: the last ten boxes","col":1,"row":3,"kind":"accent"},{"id":"w","label":"And the bill: every later insert, forever","col":1,"row":4,"kind":"bad"}],"edges":[{"from":"s","to":"b"},{"from":"s","to":"r"},{"from":"s","to":"g"},{"from":"s","to":"t"},{"from":"s","to":"w"}]},"steps":[{"show":["s"],"look":["s"],"say":"Sorting finds nothing. <b>It is a one-off purchase of an arrangement</b>, made so that every later question becomes cheap."},{"show":["s","b"],"found":["b"],"say":"It buys the twenty looks Chapter 6 spent nine lessons spending."},{"show":["s","b","r","g","t"],"found":["b","r","g","t"],"say":"And three more questions nobody credits it with. <b>One purchase, four different answers.</b>"},{"show":["s","b","r","g","t","w"],"found":["b","r","g","t"],"bad":["w"],"say":"And the bill nobody budgets for. <b>One person pays and everybody after them spends it</b>, which is why the decision is so often made badly."}]},{"part":"Part 2 · The methods","tab":"Bubble","title":"Act 2 · One comparison, one adjacent pair","type":"array-scan","speed":1400,"big":true,"data":[5,1,4,2,8],"countLabel":" swaps","pointerLabels":{"i":"comparing"},"legend":[["being compared","look"],["travelling","found"],["settled","seen"]],"steps":[{"order":[0,1,2,3,4],"look":[0,1],"ptr":{"i":0},"count":0,"say":"Bubble only ever compares <b>neighbours</b>, so one comparison can settle one adjacent pair and nothing else."},{"order":[1,0,2,3,4],"found":[0],"look":[0,2],"count":1,"say":"5 and 1 swap. Now 5 carries on rightwards, and it will be moved again, and again."},{"order":[1,2,3,0,4],"found":[0],"look":[0,4],"count":3,"say":"Three swaps, and <b>the same value has been moved three times.</b> That is the cost of a comparison that concludes almost nothing."},{"order":[1,2,3,0,4],"found":[0],"seen":[4],"count":3,"badge":"1 pass, 3 swaps","say":"8 is bigger, so 5 stops. On eight items this method spends 28 comparisons and 15 moves."}]},{"part":"Part 2 · The methods","tab":"Insertion","title":"Act 3 · The only one that can stop early","type":"array-scan","speed":1400,"big":true,"data":[1,2,3,5,4,6,7,8],"countLabel":" comparisons","pointerLabels":{"i":"this card"},"legend":[["the card being placed","look"],["already in order","seen"],["moved","found"]],"steps":[{"order":[0,1,2,3,4,5,6,7],"look":[1],"seen":[0],"count":1,"say":"Nearly sorted data. Pick up the 2, compare with the 1. <b>Bigger, so it is already home.</b> One comparison, and the search ends."},{"order":[0,1,2,3,4,5,6,7],"look":[3],"seen":[0,1,2],"count":3,"say":"Same for the 3 and the 5. Each costs exactly one comparison and stops."},{"order":[0,1,2,4,3,5,6,7],"look":[4],"found":[4],"seen":[0,1,2],"count":5,"say":"The 4 is smaller than the 5, so it moves one place. <b>This is the only real work in the whole sort.</b>"},{"order":[0,1,2,4,3,5,6,7],"found":[0,1,2,4,3,5,6,7],"count":8,"badge":"8, not 28","say":"<b>Eight comparisons and one move.</b> Bubble and selection would both spend twenty eight and never notice the data was nearly sorted."}]},{"part":"Part 2 · The methods","tab":"Merge","title":"Act 4 · One comparison, one item placed forever","type":"array-scan","speed":1500,"big":true,"data":[2,4,7,9,1,3,5,8],"countLabel":" comparisons","pointerLabels":{"lo":"left top","hi":"right top"},"legend":[["the two being compared","look"],["placed, never touched again","found"],["still waiting","seen"]],"steps":[{"order":[0,1,2,3,4,5,6,7],"look":[0,4],"ptr":{"lo":0,"hi":4},"count":1,"seen":[1,2,3,5,6,7],"say":"Two runs, each already in order. <b>Compare only the two fronts.</b> Nothing else needs looking at."},{"order":[4,0,5,1,2,3,6,7],"found":[4,0,5],"look":[1,6],"ptr":{"lo":1,"hi":6},"count":4,"seen":[2,3,7],"say":"1, 2, 3 land. <b>One comparison, one item placed permanently</b>, every single time."},{"order":[4,0,5,1,6,2,7,3],"found":[4,0,5,1,6,2,7,3],"count":7,"badge":"7 comparisons","say":"<b>Seven comparisons for eight items, and nothing was revisited.</b> Bubble moved one value three times in Act 2."}]},{"part":"Part 2 · The methods","tab":"Quick","title":"Act 5 · One comparison buys a side, not a place","type":"array-scan","speed":1500,"big":true,"data":[7,2,9,4,1,5,8,3],"countLabel":" comparisons","pointerLabels":{"mid":"pivot"},"legend":[["being compared with the pivot","look"],["the pivot, now home forever","found"],["smaller: left","seen"],["bigger: right","range"]],"steps":[{"order":[0,1,2,3,4,5,6,7],"look":[5],"ptr":{"mid":5},"count":0,"say":"Pick one value, the 5, and call it the pivot. <b>Choosing it cost no comparison at all.</b>"},{"order":[1,3,0,2,4,5,6,7],"seen":[1,3],"look":[4,7],"ptr":{"mid":5},"count":5,"say":"Ask each item one question: smaller than 5? <b>One comparison buys a side, not a place.</b>"},{"order":[1,3,4,7,5,0,2,6],"seen":[1,3,4,7],"found":[5],"range":[5,7],"count":7,"badge":"5 is home forever","say":"Seven comparisons, and neither side is sorted. But the 5 sits exactly where it sits in the finished row. <b>It will never move again.</b>"}]},{"part":"Part 2 · The methods","tab":"Counting","title":"Act 6 · Sorted, with nothing compared","type":"array-scan","speed":1500,"big":true,"data":[3,1,4,1,5,2,3,1],"countLabel":" comparisons","pointerLabels":{"i":"counting"},"legend":[["being counted","look"],["already counted","seen"],["placed by its count","found"]],"steps":[{"order":[0,1,2,3,4,5,6,7],"look":[0],"ptr":{"i":0},"count":0,"say":"Eight values, and every one is between 1 and 5. <b>That fact is the whole method.</b>"},{"order":[0,1,2,3,4,5,6,7],"seen":[0,1,2,3,4,5,6,7],"count":0,"badge":"three 1s, one 2, two 3s","say":"One pass, keeping a tally. <b>The counter is still zero</b>, because no item was ever held up against another item."},{"order":[1,3,7,5,0,6,2,4],"found":[1,3,7,5,0,6,2,4],"count":0,"badge":"sorted, 0 comparisons","say":"Read the tally back in order. <b>Sorted, and not one comparison happened.</b> The floor every other method obeys is a statement about comparing."}]},{"part":"Part 3 · The same rules in things you used today","tab":"The wrong choice","title":"Act 7 · The courtesy that broke the import","type":"array-scan","speed":1600,"big":true,"data":[1,2,3,4,5,7,8,9],"countLabel":" comparisons","pointerLabels":{"mid":"pivot"},"legend":[["the pivot","look"],["everything, on one side","range"],["and nothing on the other","bad"]],"steps":[{"order":[0,1,2,3,4,5,6,7],"look":[7],"ptr":{"mid":7},"count":0,"badge":"already sorted","say":"<b>This is Act 5, on data that arrived already sorted.</b> The upstream team started sending it that way as a courtesy."},{"order":[0,1,2,3,4,5,6,7],"range":[0,6],"look":[7],"ptr":{"mid":7},"count":7,"say":"The pivot is the last item, which on sorted data is <b>always the largest</b>. So everything goes left and nothing goes right."},{"order":[0,1,2,3,4,5,6,7],"range":[0,5],"look":[6],"bad":[7],"ptr":{"mid":6},"count":13,"say":"The problem shrank by <b>one</b> instead of halving. Seven comparisons bought one item."},{"order":[0,1,2,3,4,5,6,7],"bad":[0,1,2,3,4,5,6,7],"count":28,"badge":"28: the bubble bill","say":"<b>Twenty eight comparisons, which is exactly what bubble sort costs.</b> Nothing changed but the shape of the input, and shuffling the file makes it fast again. That is the diagnosis, not a curiosity."}]},{"part":"Part 3 · The same rules in things you used today","tab":"This is Act 4, on a shop page","title":"Act 8 · Two correct answers, one broken promise","type":"array-scan","speed":1600,"big":true,"data":[3,1,2,3,1,2],"labels":["a","b","c","d","e","f"],"countLabel":" items placed","legend":[["placed, tie order kept","found"],["placed, tie order lost","bad"]],"steps":[{"order":[0,1,2,3,4,5],"count":0,"say":"Six products, already sorted by price so a is cheapest. <b>The number is the rating, the letter is the product.</b>"},{"order":[1,4,2,5,0,3],"found":[1,4,2,5,0,3],"count":6,"badge":"stable: b e c f a d","say":"Sorted by rating, stably. Read the letters: <b>inside every rating, the cheaper product still comes first.</b>"},{"order":[4,1,5,2,3,0],"bad":[4,1,5,2,3,0],"count":6,"badge":"unstable: e b f c d a","say":"The same six, sorted by rating with an unstable method. <b>Every rating is still correct.</b> And the price sort has been silently deleted."},{"order":[4,1,5,2,3,0],"bad":[4,1,5,2,3,0],"count":6,"badge":"both pass the test","say":"Neither is a bug in the ordinary sense. <b>Both rows are correctly sorted, and any test asserting order passes on both.</b>"}]},{"part":"Part 3 · The same rules in things you used today","tab":"This is Act 1, on a dashboard","title":"Act 9 · Four million ordered, ten displayed","type":"array-scan","speed":1500,"big":true,"data":[7,2,9,4,1,8,3,5],"countLabel":" comparisons","pointerLabels":{"i":"asking"},"legend":[["being asked one question","look"],["the ones you are holding","found"],["never ordered, never needed","dead"]],"steps":[{"order":[0,1,2,3,4,5,6,7],"found":[0,1,2],"count":0,"say":"The request is <b>the top three</b>. Hold three. They do not need to be in order among themselves."},{"order":[0,3,2,1,4,5,6,7],"found":[0,3,2],"look":[4],"ptr":{"i":4},"dead":[1],"count":2,"say":"For each remaining value, one question: bigger than the smallest I hold? <b>1 is discarded on one comparison</b> and never looked at again."},{"order":[2,5,0,1,3,4,6,7],"found":[2,5,0],"dead":[1,3,4,6,7],"count":5,"badge":"5, not 14","say":"<b>Five comparisons.</b> Sorting all eight costs fourteen. The five faded values were never put in any order, <b>because nobody was going to look at their order.</b>"}]},{"part":"Part 4 · The map","tab":"The map","title":"Act 10 · Five ways to have an order, and who pays","type":"reveal","speed":1650,"viz":{"maxChars":16,"gy":42,"nodes":[{"id":"q","label":"Does anything read this order?","col":0,"row":2,"kind":"gold"},{"id":"n","label":"No: delete the sort. Nobody pays","col":1,"row":0,"kind":"bad"},{"id":"f","label":"Take the order that already exists. Time, history","col":1,"row":1,"kind":"accent"},{"id":"c","label":"Count into groups. Few values, no comparing","col":1,"row":2,"kind":"accent"},{"id":"s","label":"Keep it as a shape. Every writer pays a little","col":1,"row":3,"kind":"accent"},{"id":"o","label":"Sort once. Whoever sorts pays, then every insert","col":1,"row":4,"kind":"gold"},{"id":"e","label":"And the fourth question: how many times before it changes","col":2,"row":2,"kind":"dark"}],"edges":[{"from":"q","to":"n"},{"from":"q","to":"f"},{"from":"q","to":"c"},{"from":"q","to":"s"},{"from":"q","to":"o"},{"from":"o","to":"e"},{"from":"s","to":"e"}]},"steps":[{"show":["q"],"look":["q"],"say":"One question first, and it is the one most often skipped."},{"show":["q","n"],"bad":["n"],"say":"If nothing reads it, <b>delete the sort.</b> An order with no reader is pure expense."},{"show":["q","n","f","c"],"bad":["n"],"found":["f","c"],"say":"The cheapest order is the one that already happened for another reason. And if a field holds a handful of values, <b>nothing needs comparing at all.</b>"},{"show":["q","n","f","c","s","o"],"bad":["n"],"found":["f","c","s"],"look":["o"],"say":"Keep it as a shape and every writer pays a little forever. Sort it once and whoever sorts pays, and then every later insert pays again."},{"show":["q","n","f","c","s","o","e"],"bad":["n"],"found":["f","c","s","o","e"],"say":"<b>Sorting is never the goal. It is the investment you make so that every later question becomes cheap</b>, and the number that decides it is how many times you will ask before the answer changes."}]}]}'></div>

<div class="wrap" style="padding-top:34px;">
  <h2><span class="ix gold">✓</span> What You Just Watched</h2>

  <div class="tbl-wrap"><table>
    <tr><th>The method</th><th>What one comparison buys</th><th>Acts</th><th>Where it came back in Part 3</th></tr>
    <tr><td>Bubble</td><td>one adjacent pair, and nothing else</td><td>2</td><td>Act 7, as the bill quick sort pays on sorted input</td></tr>
    <tr><td>Insertion</td><td>possibly the end of the search, immediately</td><td>3</td><td>Inside every real sort, on the small pieces</td></tr>
    <tr><td>Merge</td><td>one item, placed permanently</td><td>4</td><td>Act 8, where preferring the left run is stability</td></tr>
    <tr><td>Quick</td><td>a side, not a place</td><td>5</td><td>Act 7, the courtesy that broke the import</td></tr>
    <tr><td>Counting</td><td>nothing. It never compares</td><td>6</td><td>Any dashboard grouping by a field with few values</td></tr>
    <tr><td>Keeping a few</td><td>one discard, on one question</td><td>9</td><td>Act 9, four million ordered and ten displayed</td></tr>
  </table>
  <div class="tbl-cap">Read the second column down the page. Every difference in the chapter comes from that one column, and the right hand column is where each of them turned up in something somebody uses.</div></div>

  <div class="callout accent">
    <div class="ch">The line to carry out of this chapter</div>
    <p>Sorting is never the goal. <strong>It is the invoice six chapters were quoting</strong>, and the four questions that settle it are: does anything read this order, does it need all of it ordered, how many different things can a value be, and how many times will you ask before the answer changes.</p>
  </div>

  <div class="callout warn">
    <div class="ch">And the line from Act 7</div>
    <p>An upstream team sorted the file as a courtesy and the import began taking hours. <strong>Shuffling the input made it fast again</strong>, and nothing that is genuinely doing less work behaves that way. A method that rewards disorder is betting on disorder, and the fix is to stop it betting rather than to keep feeding it chaos.</p>
  </div>

  <div class="quiz" data-correct="1">
    <div class="q">Act 6 sorts eight values and the comparison counter never leaves zero. How is that possible?</div>
    <div class="opt" data-i="0">The values were already in order, so no comparisons were needed</div>
    <div class="opt" data-i="1">It asks each item what it is rather than how it ranks, which places it immediately because there are only five things it could be</div>
    <div class="opt" data-i="2">The counter only tracks moves, not comparisons</div>
    <div class="qexp">There is a proven floor on how few questions can sort a pile if the only question allowed is which of two items comes first, and it is the layers-times-size figure Act 4 produces. Counting escapes that floor entirely by never asking it. The price is a condition rather than cleverness: the values must come from a small known set, which is why the same method is magnificent on ages and absurd on customer ids.</div>
  </div>

  <div class="quiz" data-correct="2">
    <div class="q">In Act 8 the same six products are sorted by rating twice and both rows are correctly ordered. What separates them?</div>
    <div class="opt" data-i="0">One of them has a bug that a better test would catch</div>
    <div class="opt" data-i="1">One of them is faster, and the ordering is otherwise identical</div>
    <div class="opt" data-i="2">One keeps equal items in the order they arrived, so the previous sort by price survives, and the other silently discards it</div>
    <div class="qexp">Both rows pass any test asserting that ratings are in order, because both genuinely are. The difference lives entirely in the ties, which no test compares and no screenshot reveals. That is why swapping a sorting implementation can break a product months later with nothing in the change that looks related to the complaint.</div>
  </div>
__NAV__
</div>`
