# DSA Concepts - the full concept inventory

Every idea this course teaches, in the order it is taught, with a one-line plain-English
meaning for each. **184 concepts across 20 chapters and 125 lessons.** Use this as the map: if a
concept is not on this list, it is not in the course, and if you want it added it becomes a
lesson in the chapter that owns it.

Status is derived from the build, not maintained by hand. `live` means the lesson content
exists in a chapter file; `planned` means the title is in `course_map.json` and the content
is not written yet.

Authoring rules for all of this live in [CONSISTENCY.md](CONSISTENCY.md).

---

## Chapter 00 · Start Here

> You do not need to code to understand how computers organise and find things. You need to see it.

**Status:** live

### Lessons

| id | lesson | status |
|---|---|---|
| `0.1` | What This Course Is, and Who It Is For | live |
| `0.2` | How To Read It: Watch First, Read Second | live |
| `0.3` | The Whiteboard: The Whole Course in One Run | live |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **What a data structure is** | A decision about how you lay things down, made once, that every later cost inherits |
| **What an algorithm is** | A recipe with a guarantee about what it returns and roughly what it costs |
| **The trade principle** | No arrangement is good at everything. Fast at one thing means slow at another |

## Chapter 01 · What a Data Structure Actually Is

> A data structure is just a decision about how you lay things down. Every later cost follows from that one decision.

**Status:** live

### Lessons

| id | lesson | status |
|---|---|---|
| `1.1` | Everything Is Boxes and Labels: How a Computer Holds a Thing | live |
| `1.2` | The Two Real Choices: Keep It Together, or Keep It Linked | live |
| `1.3` | What an Algorithm Actually Is: A Recipe With a Guarantee | live |
| `1.4` | The Trade That Never Goes Away: Time, Space and Order | live |
| `1.5` | The Whiteboard: How a Computer Holds a Thing | live |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Memory as boxes and addresses** | A computer holds things in numbered boxes, and the number is how it finds them |
| **Contiguous versus linked storage** | Keep things together, or keep them apart and joined by pointers |
| **Pointer or reference** | A note that says where something else lives, rather than the thing itself |
| **Random access** | Being able to reach position N without touching positions 0 to N-1 |
| **Sequential access** | Having to travel through everything before what you want |
| **Abstract data type versus implementation** | What something promises to do, versus how it actually does it |
| **Mutability and in-place change** | Whether an operation rewrites what is there or builds something new |

## Chapter 02 · The Cost of Doing Things

> Speed is not a feeling, it is a count. Learn to count steps and you can predict any system before you build it.

**Status:** live

### Lessons

| id | lesson | status |
|---|---|---|
| `2.1` | Counting Steps Without Any Maths | live |
| `2.2` | The Seven Shapes of Growth You Will Ever Meet | live |
| `2.3` | Best, Average and Worst: Which One Actually Bites You | live |
| `2.4` | Space Costs Too, and When To Trade It For Time | live |
| `2.5` | The Whiteboard: Watch Cost Grow | live |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Counting steps** | Measuring work as a count of operations, not as a feeling of speed |
| **Growth rate** | How the count changes when the data doubles. The only thing that matters at scale |
| **Big O notation** | A name for the shape of that growth, written after you have already felt it |
| **Constant time O(1)** | The work does not change when the data grows |
| **Logarithmic time O(log n)** | Doubling the data adds one step |
| **Linear time O(n)** | Doubling the data doubles the work |
| **Linearithmic time O(n log n)** | The realistic floor for comparison sorting |
| **Quadratic time O(n squared)** | Doubling the data quadruples the work. Where systems die |
| **Exponential time O(2 to the n)** | Adding one item doubles the work. Where problems become impossible |
| **Best, average and worst case** | Three different questions, and only one of them wakes you at night |
| **Amortised cost** | An operation that is usually cheap and occasionally expensive, averaged honestly |
| **Space complexity** | Memory measured the same way as time |
| **The time versus space trade** | Spending memory to save time, which is what every cache and index is |

## Chapter 03 · Arrays: The Row of Boxes

> An array is fast because it is rigid. Every array problem is that rigidity showing its bill.

**Status:** live

### Lessons

| id | lesson | status |
|---|---|---|
| `3.1` | The Row of Boxes: Why Position Is Instant | live |
| `3.2` | Insert and Delete: The Shuffle Nobody Warns You About | live |
| `3.3` | Growing an Array: The Doubling Trick | live |
| `3.4` | Grids and 2D Arrays: Maps, Screens and Spreadsheets | live |
| `3.5` | Where Arrays Show Up, and the Problems They Create | live |
| `3.6` | The Whiteboard: Arrays, Every Operation Animated | live |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Array or row** | Things side by side, where position is arithmetic |
| **Index and zero-based counting** | The offset from the start, not the ordinal position |
| **Bounds and off-by-one errors** | The single most common mistake in the whole field |
| **Insertion and deletion shuffle** | Making or closing a gap costs a move for every element after it |
| **Dynamic array growth and doubling** | Why appending is cheap on average even though the array sometimes has to be rebuilt |
| **Two-dimensional arrays and grids** | Rows of rows: screens, maps, spreadsheets, images |
| **Cache locality** | Why things stored together are genuinely faster to read, not just theoretically |

## Chapter 04 · Linked Lists: The Chain

> A linked list buys cheap insertion by giving up instant position. That single swap explains all of its behaviour.

**Status:** live

### Lessons

| id | lesson | status |
|---|---|---|
| `4.1` | The Chain: Each Box Knows Only the Next One | live |
| `4.2` | Insert and Delete: Where the Chain Wins | live |
| `4.3` | Singly, Doubly and Circular | live |
| `4.4` | The Two-Pointer Trick: Finding the Middle and the Loop | live |
| `4.5` | Where Chains Show Up: Undo, Playlists, Browser History | live |
| `4.6` | The Whiteboard: The Chain, Rewired Step by Step | live |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Linked list** | A chain where each node knows only the next one |
| **Node and next pointer** | The two parts every chain is made of |
| **Head and tail** | The handle you hold the chain by, and the end of it |
| **Singly, doubly and circular lists** | One-way, two-way, and joined back to the start |
| **Insertion and deletion by pointer rewiring** | Changing two arrows instead of moving everything |
| **Traversal** | Walking a structure from one end to the other |
| **The two-pointer technique** | Two markers moving at different speeds, for finding a middle or a loop |
| **Cycle detection** | Working out whether a chain quietly loops back on itself |

## Chapter 05 · Stacks and Queues: Who Gets Served First

> Most systems are not about storing things, they are about deciding who gets served next. That rule is the structure.

**Status:** live

### Lessons

| id | lesson | status |
|---|---|---|
| `5.1` | Stack: Last In, First Out, Like a Pile of Plates | live |
| `5.2` | Queue: First In, First Out, Like a Ticket Line | live |
| `5.3` | Deque, Circular Queue and the Priority Twist | live |
| `5.4` | Where Order of Service Decides Everything | live |
| `5.5` | The Whiteboard: Plates and Ticket Lines | live |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Stack and last in first out** | A pile of plates. The newest thing is served first |
| **Push and pop** | The only two moves a stack allows |
| **The call stack** | Where a program remembers what it was doing before it went deeper |
| **Queue and first in first out** | A ticket line. The oldest thing is served first |
| **Enqueue and dequeue** | The only two moves a queue allows |
| **Deque** | A line you can join or leave at either end |
| **Circular buffer** | A fixed-size queue that reuses its own space |
| **Priority as a third rule** | Serving by urgency rather than by arrival, which leads to heaps |
| **Backpressure and bounded queues** | What happens when things arrive faster than they are served |

## Chapter 06 · Searching: Finding One Thing

> Search is the price you pay for order you did not keep. Every search method is one trade: how much structure you maintain up front, against how fast you find later. Decide the structure first and the algorithm picks itself.

**Status:** live

### Lessons

| id | lesson | status |
|---|---|---|
| `6.1` | What Searching Really Is, and the One Question That Decides Everything | live |
| `6.2` | Linear Search: Check Every Box | live |
| `6.3` | Binary Search: Halve the Haystack | live |
| `6.4` | The Search Family: Jump, Exponential, Interpolation, Ternary | live |
| `6.5` | Searching Structured Data: Trees, Tries and Database Indexes | live |
| `6.6` | Searching by Meaning: Vector Search, ANN and RAG | live |
| `6.7` | How Search Problems Show Up: Reading the Disguise | live |
| `6.8` | Choose Your Search: The Decision Flowchart and Six Systems Torn Down | live |
| `6.9` | The Whiteboard: All of Searching in One Run | live |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Linear search** | Check every box. Needs nothing, guarantees nothing fast |
| **Binary search** | Halve the haystack. Needs sorted data and instant jumps |
| **The invariant** | The fact that stays true every round, which is why halving is safe |
| **Jump search** | Hop in blocks, then walk back. For when a long jump is expensive |
| **Exponential search** | Doubling your reach when you do not know how big the collection is |
| **Interpolation search** | Guessing where a value should be, the way you open a phone book |
| **Ternary search** | Splitting into three, and why it is usually worse than two |
| **Search on the answer space** | Binary searching over possible answers rather than over data |
| **Lower and upper bound** | Finding the first and last position a value could occupy |
| **Tree and index search** | Order kept as a shape, so it survives inserts and deletes |
| **Prefix search** | Finding everything that starts with what you typed |
| **Vector or semantic search** | Matching meaning instead of characters |
| **Embeddings** | Turning text into coordinates so that closeness means similarity |
| **Approximate nearest neighbour** | Giving up a sliver of accuracy to get back the halving |
| **Hybrid search and reranking** | Combining keyword and meaning, then reordering the shortlist |
| **Retrieval augmented generation** | Standing in the right neighbourhood so a model reads three things, not everything |

## Chapter 07 · Sorting: Putting Things in Order

> Sorting is never the goal. It is the investment you make so that every later question becomes cheap.

**Status:** partial, 3 of 8 lessons written

### Lessons

| id | lesson | status |
|---|---|---|
| `7.1` | Why Sort At All: The Question Searching Asked | live |
| `7.2` | The Simple Three: Bubble, Selection, Insertion | live |
| `7.3` | Merge Sort: Split, Sort, Stitch | live |
| `7.4` | Quick Sort: Pick a Pivot and Partition | planned |
| `7.5` | Heap Sort, Counting Sort and Radix Sort | planned |
| `7.6` | Stability, In-Place, and Why Real Systems Use Hybrids | planned |
| `7.7` | How Sorting Problems Show Up, and Six Systems Torn Down | planned |
| `7.8` | The Whiteboard: Every Sort, Racing Side by Side | planned |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Why sorting is an investment** | You sort so that every later question becomes cheap |
| **Comparison sorting** | Ordering by asking which of two things comes first |
| **Bubble, selection and insertion sort** | The three simple sorts, and what each one is actually good at |
| **Merge sort** | Split, sort the halves, stitch them back together |
| **Quick sort** | Pick a pivot, partition around it, repeat |
| **Pivot choice and worst case** | Why quick sort can degrade, and how real implementations avoid it |
| **Heap sort** | Sorting by repeatedly taking the most extreme thing |
| **Counting and radix sort** | Sorting without comparing, when the values are small integers |
| **Stability** | Whether equal items keep their original relative order. It matters more than people expect |
| **In-place versus extra memory** | Whether the sort needs a second copy of the data |
| **Hybrid sorts** | Why real languages use a mix, and switch strategy by size |

## Chapter 08 · Hashing: Finding Without Looking

> Hashing trades memory and order for the one thing nothing else gives you: an answer without a search.

**Status:** planned

### Lessons

| id | lesson | status |
|---|---|---|
| `8.1` | The Instant Answer: Turning a Key Into an Address | planned |
| `8.2` | Collisions: When Two Keys Want the Same Box | planned |
| `8.3` | Load Factor and Resizing: Why It Stays Fast | planned |
| `8.4` | Sets, Maps, Caches and Deduplication | planned |
| `8.5` | How Hashing Problems Show Up, and Where It Runs in Production | planned |
| `8.6` | The Whiteboard: Keys Falling Into Buckets | planned |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Hash function** | Turning a key into an address, in one step |
| **Hash table, map and dictionary** | The structure that gives you an answer without a search |
| **Collision** | Two keys wanting the same box |
| **Chaining and open addressing** | The two ways to survive a collision |
| **Load factor** | How full the table is, and the number that decides when it slows down |
| **Resizing and rehashing** | Growing the table, and why appending stays cheap on average |
| **Set and membership testing** | Asking only whether something is present |
| **Deduplication** | Removing repeats without comparing everything to everything |
| **Caching and memoisation** | Remembering an answer so you never compute it twice |
| **Why hashing gives up order** | You bought speed by giving up the ability to ask for a range |

## Chapter 09 · Trees: Things That Branch

> A tree is what you get when one thing owns many things. Depth is the only number that decides its speed.

**Status:** planned

### Lessons

| id | lesson | status |
|---|---|---|
| `9.1` | Branching: Parents, Children, and Why Depth Matters | planned |
| `9.2` | Binary Trees and the Three Walks | planned |
| `9.3` | Level Order: Reading a Tree Row by Row | planned |
| `9.4` | Height, Depth and Balance: The Numbers That Decide Speed | planned |
| `9.5` | Where Trees Show Up: Folders, Web Pages, Org Charts, File Systems | planned |
| `9.6` | The Whiteboard: Walking a Tree Three Ways | planned |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Tree, root, parent, child, leaf** | The vocabulary of anything that branches |
| **Depth and height** | How far down a node sits, and how tall the whole thing is |
| **Binary tree** | Every node has at most two children |
| **Preorder, inorder and postorder traversal** | Three orders of visiting, and what each one is for |
| **Level order or breadth-first traversal** | Reading a tree row by row |
| **Balance** | Whether the branches are roughly even, which is what makes depth small |
| **Why depth is the only number that matters** | Every tree operation costs about its depth |

## Chapter 10 · Binary Search Trees and Staying Balanced

> A binary search tree is binary search made permanent. It only keeps that promise while it stays balanced.

**Status:** planned

### Lessons

| id | lesson | status |
|---|---|---|
| `10.1` | The Binary Search Tree: Order You Can Walk | planned |
| `10.2` | Insert, Search, Delete, and the Three Delete Cases | planned |
| `10.3` | When a Search Tree Quietly Becomes a List | planned |
| `10.4` | Staying Balanced: AVL and Red-Black, Without the Maths | planned |
| `10.5` | B-Trees: How a Database Index Actually Works | planned |
| `10.6` | The Whiteboard: A Search Tree Growing and Rebalancing | planned |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Binary search tree** | Binary search made permanent, and maintained on every write |
| **Insert, search and delete** | The three moves, and the three separate cases delete has |
| **Degeneration into a list** | What happens when you insert already-sorted data |
| **Rotation** | The local rewiring that restores balance |
| **AVL and red-black trees** | Two disciplines for staying balanced, without the proofs |
| **B-tree and B-plus tree** | Wide, shallow trees built for disks. This is a database index |
| **Why databases use B-trees** | Because reading from disk is expensive and depth is what you are paying for |

## Chapter 11 · Heaps and Priority Queues: Who Is Most Urgent

> When arrival order is the wrong order, you need urgency order. A heap keeps only the front of that queue honest, and that is exactly enough.

**Status:** planned

### Lessons

| id | lesson | status |
|---|---|---|
| `11.1` | The Emergency Room: Most Urgent First | planned |
| `11.2` | The Heap: A Tree Hiding Inside an Array | planned |
| `11.3` | Push, Pop and Heapify | planned |
| `11.4` | Top-K, Schedulers, and the Median of a Stream | planned |
| `11.5` | The Whiteboard: The Heap Bubbling Up and Down | planned |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Priority queue** | A line ordered by urgency rather than arrival |
| **Heap** | A tree hiding inside an array, with one simple promise |
| **Heap property** | A parent is always more extreme than its children. That is all it guarantees |
| **Sift up and sift down** | How one insert or removal restores the promise |
| **Heapify** | Turning an unordered pile into a heap in one pass |
| **Top-K** | Finding the best few without sorting everything |
| **Streaming median and running statistics** | Keeping an answer current as data keeps arriving |
| **Schedulers** | Where priority queues run in real systems |

## Chapter 12 · Graphs: Things Connected to Things

> The moment relationships matter more than order, you are holding a graph. Naming it correctly is most of the solution.

**Status:** planned

### Lessons

| id | lesson | status |
|---|---|---|
| `12.1` | Things Connected to Things | planned |
| `12.2` | Directed, Weighted, Cyclic: The Four Words That Change Everything | planned |
| `12.3` | Storing a Graph: Matrix Versus List | planned |
| `12.4` | Degrees, Paths, Components, and Why They Matter | planned |
| `12.5` | Where Graphs Show Up: Maps, Social, Payments, Dependencies | planned |
| `12.6` | The Whiteboard: A Graph, Drawn Into Existence | planned |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Graph, vertex and edge** | Things, and the connections between them |
| **Directed versus undirected** | Whether a connection goes both ways |
| **Weighted edges** | When a connection has a cost, not just an existence |
| **Cyclic versus acyclic** | Whether you can walk in a circle |
| **Adjacency matrix versus adjacency list** | Two ways to store a graph, and when each wins |
| **Degree** | How many connections a thing has |
| **Path, connected component and reachability** | What can get to what |
| **Dense versus sparse graphs** | Why the storage choice depends on how connected things are |
| **Trees as a special case of graphs** | A tree is just a connected graph with no cycles |

## Chapter 13 · Getting Around a Graph: Traversal and Shortest Path

> Every graph question is really one question: in what order do I visit? Choose the order and the algorithm has already been chosen.

**Status:** planned

### Lessons

| id | lesson | status |
|---|---|---|
| `13.1` | Breadth First: Ripples in a Pond | planned |
| `13.2` | Depth First: Down the Rabbit Hole | planned |
| `13.3` | Shortest Path When Every Step Costs the Same | planned |
| `13.4` | Dijkstra: When Steps Cost Different Amounts | planned |
| `13.5` | Topological Sort and Cycle Detection | planned |
| `13.6` | Minimum Spanning Trees, and Six Systems Torn Down | planned |
| `13.7` | The Whiteboard: BFS, DFS and Dijkstra Side by Side | planned |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Breadth-first search** | Spreading outwards in rings. Finds the fewest hops |
| **Depth-first search** | Going as deep as possible before backing up |
| **Visited set** | Why you must remember where you have been, and what breaks if you do not |
| **Shortest path on unweighted graphs** | Breadth-first search, and why it is already the answer |
| **Dijkstra** | Shortest path when steps cost different amounts |
| **Why Dijkstra needs a heap** | Always expanding the cheapest frontier first |
| **Negative weights and Bellman-Ford** | Where Dijkstra stops being correct |
| **Topological sort** | Ordering things so every dependency comes first |
| **Cycle detection in dependencies** | Finding the circular requirement that makes an order impossible |
| **Minimum spanning tree** | Connecting everything for the least total cost |
| **A star and heuristics** | Guiding a search with a guess about direction |

## Chapter 14 · Recursion and Divide and Conquer

> Recursion is not clever, it is honest. You admit the problem contains a smaller copy of itself, then you stop.

**Status:** planned

### Lessons

| id | lesson | status |
|---|---|---|
| `14.1` | A Function That Calls Itself, Explained With Mirrors | planned |
| `14.2` | The Call Stack: Where Recursion Actually Lives | planned |
| `14.3` | Base Case, Progress, and the Infinite Loop Trap | planned |
| `14.4` | Divide and Conquer: Break It, Solve It, Join It | planned |
| `14.5` | Recursion Versus Iteration: When Each Wins | planned |
| `14.6` | The Whiteboard: The Call Stack, Piling and Unwinding | planned |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Recursion** | A function that solves a smaller copy of its own problem |
| **Base case** | Where the recursion is allowed to stop |
| **Progress toward the base case** | The thing that prevents an infinite loop |
| **The call stack and stack overflow** | Where recursion physically lives, and how it runs out |
| **Divide and conquer** | Break it, solve the parts, join the results |
| **Recurrence relations, informally** | Reading the cost of a recursive method without the algebra |
| **Tail recursion** | When a recursive call is the last thing that happens, and why that matters |
| **Recursion versus iteration** | When each one is clearer, and when each one is cheaper |

## Chapter 15 · The Three Styles: Greedy, Dynamic Programming, Backtracking

> There are only three ways to attack a hard problem: commit early, remember everything, or try and undo. Knowing which one the problem allows is the whole skill.

**Status:** planned

### Lessons

| id | lesson | status |
|---|---|---|
| `15.1` | The Three Styles, Side by Side | planned |
| `15.2` | Greedy: Take the Best Bite Now | planned |
| `15.3` | When Greedy Lies, and How To Catch It | planned |
| `15.4` | Dynamic Programming: Stop Solving the Same Thing Twice | planned |
| `15.5` | Memoisation Versus Tabulation | planned |
| `15.6` | Backtracking: Try, Fail, Undo, Try Again | planned |
| `15.7` | The Whiteboard: Greedy, DP and Backtracking on One Problem | planned |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Greedy algorithms** | Take the best-looking bite now and never reconsider |
| **When greedy is provably right** | The property a problem needs before greedy is safe |
| **When greedy lies** | A worked counterexample, and how to catch it before shipping |
| **Overlapping subproblems** | Solving the same smaller thing over and over |
| **Optimal substructure** | When a best answer is built from best answers to smaller pieces |
| **Dynamic programming** | Stop solving the same thing twice |
| **Memoisation, top down** | Remember answers as you compute them |
| **Tabulation, bottom up** | Fill a table from the smallest case upwards |
| **State and transition** | The two things you must define before any DP problem is solvable |
| **Backtracking** | Try, fail, undo, try again |
| **Pruning** | Abandoning a branch the moment it cannot possibly win |
| **Choosing between the three** | The single question that decides which style a problem allows |

## Chapter 16 · Strings and Pattern Matching

> Text feels human, but to a computer it is just an array with rules. Every text feature you love is a pattern problem underneath.

**Status:** planned

### Lessons

| id | lesson | status |
|---|---|---|
| `16.1` | A String Is Just an Array With Rules | planned |
| `16.2` | Naive Matching, and Why It Gets Slow | planned |
| `16.3` | KMP and Rabin-Karp, Without the Maths | planned |
| `16.4` | Tries: The Structure Behind Autocomplete | planned |
| `16.5` | Tokens, Fuzzy Match and Search Relevance | planned |
| `16.6` | The Whiteboard: Matching a Pattern, Character by Character | planned |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Strings as arrays with rules** | Text is a row of characters, plus encoding |
| **Character encoding, briefly** | Why length in characters is not always length in bytes |
| **Naive pattern matching** | Sliding a needle along a haystack, and why it gets slow |
| **KMP** | Never re-checking what you have already matched |
| **Rabin-Karp and rolling hashes** | Comparing fingerprints instead of characters |
| **Trie or prefix tree** | One letter per level, which is what autocomplete runs on |
| **Suffix structures, informally** | Answering questions about every ending of a string |
| **Edit distance and fuzzy matching** | Measuring how far two pieces of text are from each other |
| **Tokenisation** | Cutting text into the units a search engine actually indexes |
| **Inverted index** | Word to list of documents. The core of every keyword search engine |
| **Relevance scoring** | Why two matching documents are not equally good answers |

## Chapter 17 · Modern Structures: Tries, Bloom Filters, LRU, Union-Find, Vector Indexes

> The structures that run 2026 products are not exotic. They are classic ideas bent around one modern constraint: scale.

**Status:** planned

### Lessons

| id | lesson | status |
|---|---|---|
| `17.1` | Tries and Prefix Search in Production | planned |
| `17.2` | Bloom Filters: Fast Maybe, Certain No | planned |
| `17.3` | LRU Cache: Remembering What Matters | planned |
| `17.4` | Union-Find: Are These Two In The Same Group | planned |
| `17.5` | Segment Trees and Range Queries | planned |
| `17.6` | Vector Indexes: HNSW, IVF, and the Structures Behind RAG | planned |
| `17.7` | The Whiteboard: The Structures Behind a RAG Pipeline | planned |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Trie in production** | Prefix search at scale, and where it costs memory |
| **Bloom filter** | A fast maybe and a certain no, using almost no memory |
| **False positives as a design choice** | Accepting a wrong yes to buy speed, on purpose |
| **LRU cache** | Keeping what was used most recently, and the two structures it needs |
| **Cache eviction policies** | LRU, LFU, and why the choice depends on your access pattern |
| **Union-find or disjoint set** | Are these two things in the same group, answered almost instantly |
| **Path compression** | The trick that makes union-find practically constant time |
| **Segment tree and Fenwick tree** | Answering range questions without rescanning the range |
| **Skip list** | A probabilistic alternative to a balanced tree |
| **Vector index, HNSW and IVF** | The structures underneath every RAG system |
| **Quantisation** | Shrinking vectors so that billions of them fit in memory |
| **Sharding and partitioning** | Splitting one structure across many machines |

## Chapter 18 · The Method: Reading a Problem You Have Never Seen

> You do not memorise problems, you recognise shapes. This chapter is the recognition drill.

**Status:** planned

### Lessons

| id | lesson | status |
|---|---|---|
| `18.1` | Read the Problem Like an Engineer | planned |
| `18.2` | The Signal Table: Phrase to Structure | planned |
| `18.3` | Constraints Tell You the Algorithm | planned |
| `18.4` | Explain Your Approach Out Loud | planned |
| `18.5` | The Whiteboard: Reading Three Problems Cold | planned |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Reading a problem for its shape** | The four questions to ask before touching a solution |
| **The signal table** | Phrase to structure. The recognition drill this whole course builds toward |
| **Constraints as a hint** | How the size of the input tells you which complexity is allowed |
| **Naming the trade out loud** | Explaining what you paid, which is what separates fluency from recall |
| **Choosing between candidate structures** | A repeatable elimination process, not a guess |

## Chapter 19 · The Real-World Lab: 10 Systems Torn Down

> Every product you use daily is a stack of the structures in this course. Once you can see them, you cannot unsee them.

**Status:** planned

### Lessons

| id | lesson | status |
|---|---|---|
| `19.1` | Google Search: Index, Rank, Return | planned |
| `19.2` | Google Maps: Routing a Country in Milliseconds | planned |
| `19.3` | Uber: Matching Riders to Drivers in Real Time | planned |
| `19.4` | Spotify: Recommendation as a Graph Problem | planned |
| `19.5` | WhatsApp: Delivering a Message Exactly Once | planned |
| `19.6` | Instagram: Ranking a Feed Under a Deadline | planned |
| `19.7` | Git: Version Control Is a Graph | planned |
| `19.8` | Amazon: Product Search With Filters and Facets | planned |
| `19.9` | A RAG Chatbot, End to End | planned |
| `19.10` | Your Turn: Tear Down a Product You Use Daily | planned |
| `19.11` | The Whiteboard: One Product, Every Structure Inside It | planned |

### Concepts taught here

| concept | what it means, in one line |
|---|---|
| **Google Search** | Inverted index, ranking, and why retrieval and ranking are separate problems |
| **Google Maps** | Graphs, weighted edges, Dijkstra and heuristics at country scale |
| **Uber matching** | Spatial indexing and a priority queue under a deadline |
| **Spotify recommendations** | Graphs and nearest neighbours over taste |
| **WhatsApp delivery** | Queues, ordering guarantees and exactly-once delivery |
| **Instagram feed ranking** | Top-K under a latency budget |
| **Git** | A directed acyclic graph, and binary search over its history |
| **Amazon product search** | Inverted index plus faceted filtering |
| **A RAG chatbot** | Every structure in this course, in one pipeline |
| **Tearing down a product yourself** | The final rep: name the structures inside something you use daily |
