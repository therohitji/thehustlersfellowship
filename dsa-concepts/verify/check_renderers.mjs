/* Smoke test for EVERY registered renderer, whether or not a lesson uses it yet.

   check_layout.mjs only exercises what the written chapters happen to declare, so a renderer
   can sit broken for months until the first lesson reaches for it. This file renders each
   registered type with a minimal valid payload and fails on NaN, undefined, Infinity, an empty
   render, or geometry outside the canvas. It also reports which types no lesson uses yet, so
   the gap between "registered" and "proven in a real lesson" stays visible.

   Usage: node verify/check_renderers.mjs */
import { readFileSync, readdirSync } from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const master = readFileSync(path.join(root, 'dsa-concepts-master.html'), 'utf8');
let src = master.split('<script>').pop().split('</script>')[0];
const cut = src.indexOf('/* ============================ READER ============================ */');
if (cut < 0) { console.error('FAIL: reader marker not found'); process.exit(1); }

const warnings = [];
const ctx = {
  console: { warn: (...a) => warnings.push(a.join(' ')), log: () => {} },
  window: { matchMedia: () => ({ matches: false }) },
  document: { querySelectorAll: () => [] },
  Math, JSON, Object, Array, String, Number, Error,
};
vm.createContext(ctx);
vm.runInContext(src.slice(0, cut) + '\n;globalThis.VIZ=VIZ;globalThis.ANIM=ANIM;', ctx);
const { VIZ, ANIM } = ctx;

const NODES2 = [{ id: 'a', label: 'First thing', col: 0, row: 0 }, { id: 'b', label: 'Second thing', col: 1, row: 0 }];
const EDGE2 = [{ from: 'a', to: 'b', label: 'goes to' }];
const GROWTH = ['1', 'logn', 'sqrtn', 'n', 'nlogn', 'n2', 'n3', '2n', 'nfact'];

const VIZ_FIXTURES = {
  flow: { nodes: [...NODES2, { id: 'c', label: 'Decision', col: 0, row: 1, shape: 'diamond' }], edges: [...EDGE2, { from: 'c', to: 'b', label: 'yes' }] },
  dtree: { nodes: NODES2, edges: EDGE2 },
  state: { nodes: NODES2, edges: EDGE2 },
  uflow: { nodes: NODES2, edges: EDGE2 },
  ia: { nodes: NODES2, edges: EDGE2 },
  arch: { nodes: [...NODES2, { id: 'd', label: 'A store', col: 2, row: 0, shape: 'cyl' }], edges: [...EDGE2, { from: 'b', to: 'd' }], groups: [{ label: 'A group', nodes: ['a', 'b'] }] },
  component: { nodes: NODES2, edges: EDGE2 },
  seq: { actors: [{ label: 'One' }, { label: 'Two' }], messages: [{ from: 0, to: 1, label: 'asks' }, { from: 1, to: 1, label: 'thinks' }, { from: 1, to: 0, label: 'answers' }] },
  swim: { lanes: [{ label: 'Lane one' }, { label: 'Lane two' }], steps: [{ id: 's1', lane: 0, col: 0, label: 'Start' }, { id: 's2', lane: 1, col: 1, label: 'Then' }], edges: [{ from: 's1', to: 's2', label: 'next' }] },
  journey: { stages: [{ stage: 'Open', doing: 'Looks', thinking: 'Where is it', feeling: 2 }, { stage: 'Find', doing: 'Taps', thinking: 'There', feeling: 5 }] },
  net: { nodes: [{ id: 'a', label: 'Centre', x: 0, y: 0 }, { id: 'b', label: 'Edge', x: 1, y: 1 }], edges: [{ from: 'a', to: 'b', label: 'links' }] },
  kgraph: { nodes: [{ id: 'a', label: 'Centre', x: 0, y: 0 }, { id: 'b', label: 'Edge', x: 1, y: 1 }], edges: [{ from: 'a', to: 'b' }] },
  erd: { entities: [{ name: 'User', col: 0, row: 0, fields: [{ name: 'id', type: 'int', key: true }, { name: 'email', type: 'text' }] }, { name: 'Order', col: 1, row: 0, fields: [{ name: 'id', type: 'int', key: true }] }], rels: [{ from: 'User', to: 'Order', label: 'places' }] },
  wire: { screen: 'A screen', blocks: [{ x: 0, y: 0, w: 12, h: 3, label: 'Header' }, { x: 0, y: 3, w: 6, h: 4, label: 'Left', kind: 'accent' }] },
  card: { title: 'A card', eyebrow: 'TEST', badge: 'badge', rows: [{ k: 'Good row', v: '1 step', tone: 'good', bar: 0.1 }, { k: 'Bad row', v: 'many', tone: 'bad', bar: 1 }], footer: 'a footer' },
  curve: { series: GROWTH.map(f => ({ label: f, fn: f })), n: 30 },
  scene: { items: [{ icon: 'person', x: 90, y: 100, label: 'somebody' }, { icon: 'shelf', x: 300, y: 100, label: 'a shelf' }, { icon: 'pile', x: 500, y: 100, label: 'a pile' }], arrows: [{ x1: 140, y1: 100, x2: 250, y2: 100, label: 'walks to' }] },
};
/* every icon in the scene library gets exercised too */
const SCENE_ICONS = ['person', 'doc', 'server', 'phone', 'glass', 'shelf', 'pile', 'unknown'];
VIZ_FIXTURES['scene:all-icons'] = { type: 'scene', items: SCENE_ICONS.map((ic, i) => ({ icon: ic, x: 80 + i * 95, y: 110, label: ic })) };

const ANIM_FIXTURES = {
  'array-scan': { data: [1, 2, 3, 4], labels: ['a', 'b', 'c', 'd'], target: 3, steps: [{ look: [0], ptr: { i: 0 }, count: 1 }, { range: [1, 3], look: [2], dead: [0], ptr: { lo: 1, mid: 2, hi: 3 }, count: 2 }, { found: [2], seen: [1], count: 2 }] },
  'array-scan:big': { type: 'array-scan', big: true, data: [10, 20, 30], steps: [{ look: [0] }, { found: [2] }] },
  'array-scan:coincident-pointers': { type: 'array-scan', data: [1, 2], steps: [{ ptr: { lo: 0, mid: 0, hi: 0, i: 0 }, look: [0] }] },
  'race:long-counter': { type: 'race', countLabel: ' trips',
    tracks: [{ label: 'Packed in one row', data: ['1','2','3'] }, { label: 'Scattered', data: ['1','2','3'] }],
    steps: [{ lanes: [{ count: 2 }, { count: 12 }] }, { lanes: [{ count: '125,000' }, { count: '1,000,000' }] }] },
  'race:units-badge-bad': { type: 'race', countLabel: ' scans',
    tracks: [{ label: 'Trolley', data: [1, 2, 3], countLabel: ' scans' }, { label: 'Basket', data: [1, 2, 3] }],
    steps: [{ badge: '12 items', lanes: [{ look: [0], count: 1 }, { bad: [2], count: 9 }] },
            { badge: '24 items', lanes: [{ found: [2], count: 3 }, { bad: [0, 1, 2], count: 9 }] }] },
  race: { tracks: [{ label: 'One', data: [1, 2, 3] }, { label: 'Two', data: [1, 2, 3] }], steps: [{ lanes: [{ look: [0], count: 1 }, { look: [1], range: [0, 2], count: 1 }] }, { lanes: [{ found: [2], count: 3 }, { found: [1], count: 2 }] }] },
  'tree-walk': { unit: 70, nodes: [{ id: 'r', label: 'r', x: 1, d: 0 }, { id: 'l', label: 'l', x: 0, d: 1 }, { id: 'q', label: 'q', x: 2, d: 1 }], edges: [{ from: 'r', to: 'l' }, { from: 'r', to: 'q' }], steps: [{ look: ['r'] }, { found: ['q'], dead: ['l'] }] },
  'tree-walk:walk': { type: 'tree-walk', unit: 70, countLabel: ' emitted',
    nodes: [{ id: 'a', label: '5', x: 1, d: 0 }, { id: 'b', label: '3', x: 0, d: 1 }, { id: 'c', label: '8', x: 2, d: 1 }],
    steps: [{ look: ['a'], count: 0, badge: 'preorder so far: 5' },
            { seen: ['a'], look: ['b'], count: 1, badge: 'preorder so far: 5 3' },
            { seen: ['a', 'b'], found: ['c'], count: 3, badge: 'preorder: 5 3 8' }] },
  'tree-walk:trie': { type: 'tree-walk', unit: 74,
    nodes: [{ id: 'r', label: '', x: 2, d: 0 }, { id: 'c', label: '', x: 1, d: 1 }, { id: 'a', label: '', x: 3, d: 1 },
            { id: 'ca', label: '', x: 0, d: 2 }, { id: 'co', label: '', x: 2, d: 2 }],
    edges: [{ from: 'r', to: 'c', w: 'c' }, { from: 'r', to: 'a', w: 'a' },
            { from: 'c', to: 'ca', w: 'a' }, { from: 'c', to: 'co', w: 'o' }],
    steps: [{ look: ['r'] }, { seen: ['r'], look: ['c'] }, { seen: ['r', 'c'], found: ['ca'], dead: ['a'] }] },
  'heap': { type: 'heap', countLabel: ' swaps', order: 'min',
    data: ['12', '19', '27', '33', '41', '58', '64', '08'],
    steps: [{ look: [7], count: 0, badge: '08 lands in slot 7' },
            { look: [7], seen: [3], at: [0, 1, 2, 3, 4, 5, 6, 7], count: 0, badge: 'against slot 3' },
            { look: [7], seen: [1], at: [0, 1, 2, 7, 4, 5, 6, 3], count: 1, badge: '1 swap' },
            { look: [7], seen: [0], at: [0, 7, 2, 1, 4, 5, 6, 3], count: 2, badge: '2 swaps' },
            { found: [7], at: [7, 0, 2, 1, 4, 5, 6, 3], count: 3, settled: true, badge: '08 is the front' }] },
  'heap:row': { type: 'heap', row: true, order: 'min', countLabel: ' swaps',
    data: ['12', '19', '27', '33', '41'],
    steps: [{ found: [0], count: 0, badge: 'slot 0 is the front', settled: true },
            { found: [0], seen: [1, 2], count: 0, badge: 'children of 0 are 1 and 2', settled: true },
            { found: [0], look: [4], n: 5, count: 0, badge: 'the row is the whole structure', settled: true }] },
  'graph-walk:chain-rewire': { type: 'graph-walk', directed: true,
    nodes: [{ id: 'a', label: 'A', x: 0, y: 0 }, { id: 'b', label: 'B', x: 1, y: 0 }, { id: 'n', label: 'new', x: 0.5, y: 1 }],
    edges: [{ from: 'a', to: 'b' }, { from: 'a', to: 'n' }, { from: 'n', to: 'b' }],
    steps: [{ edges: ['a-b'], look: ['a'], tags: { a: 'head' } },
            { edges: ['a-n', 'n-b'], found: ['n'], tags: { a: 'head', n: 'new' } }] },
  'graph-walk:two-pointer': { type: 'graph-walk', directed: true,
    nodes: [{ id: 'n1', label: '1', x: 0, y: 0 }, { id: 'n2', label: '2', x: 1, y: 0 }, { id: 'n3', label: '3', x: 2, y: 0 }, { id: 'n4', label: '4', x: 3, y: 0 }],
    edges: [{ from: 'n1', to: 'n2' }, { from: 'n2', to: 'n3' }, { from: 'n3', to: 'n4' }],
    steps: [{ look: ['n1'], tags: { n1: 'slow and fast' } },
            { look: ['n2'], found: ['n3'], tags: { n2: 'slow', n3: 'fast' } }] },
  'graph-walk': { nodes: [{ id: 'a', label: 'a', x: 0, y: 0 }, { id: 'b', label: 'b', x: 1, y: 0 }], edges: [{ from: 'a', to: 'b', w: 3 }], steps: [{ look: ['a'] }, { found: ['b'], seen: ['a'], edges: ['a-b'] }] },
  vector: { query: { x: 200, y: 150, label: 'a question' }, points: [{ x: 120, y: 100, label: 'near' }, { x: 380, y: 260, label: 'far' }], steps: [{ radius: 0 }, { radius: 90, seen: [0] }, { radius: 90, found: [0] }] },
  curve: { series: GROWTH.map(f => ({ label: f, fn: f })), n: 30, steps: [{ pct: 10, show: [0, 1], badge: '12 items' }, { pct: 100, badge: '1,000,000 items' }] },
  'curve:log': { type: 'curve', logScale: true, series: GROWTH.map(f => ({ label: f, fn: f })), n: 30, steps: [{ pct: 100 }] },
  'curve:notation-reveal': { type: 'curve', logScale: true, n: 30,
    series: GROWTH.map(f => ({ label: 'plain words for ' + f, label2: 'O(' + f + ')', fn: f })),
    steps: [{ pct: 60 }, { pct: 100, notation: true }] },
  'array-scan:pointer-labels': { type: 'array-scan', data: [1, 2, 3, 4], big: true,
    pointerLabels: { lo: 'front', hi: 'back', i: 'top' },
    steps: [{ ptr: { lo: 0, hi: 3 }, range: [0, 3] }, { ptr: { i: 2 }, found: [2] }] },
  'array-scan:badge': { type: 'array-scan', data: [1, 2, 3], steps: [{ look: [0], badge: '12 boxes' }, { found: [2], badge: '12 million boxes' }] },
  'array-scan:bad-state': { type: 'array-scan', data: [1, 2, 3, 4],
    steps: [{ look: [0] }, { bad: [3], dead: [0, 1] }, { bad: [0, 1, 2, 3] }] },
  grid: { rows: 3, cols: 6, flatRow: true, rowLabels: ['row 0', 'row 1', 'row 2'], colLabels: ['0','1','2','3','4','5'],
    steps: [{ look: [[1, 3]], badge: 'row 1, column 3' },
            { row: 1, look: [[1, 3]] },
            { found: [[1, 3]], seen: [[0, 0]], dead: [[2, 5]], bad: [[2, 0]], badge: '1 times 6 plus 3 is 9' }] },
  'grid:no-flat': { type: 'grid', rows: 4, cols: 4, data: [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],
    steps: [{ col: 2 }, { found: [[3, 3]] }] },
  'array-scan:order': { type: 'array-scan', data: [5, 3, 8, 1],
    steps: [{ look: [0, 1] }, { order: [1, 0, 2, 3], found: [1] },
            { order: [3, 1, 0, 2], seen: [3, 1] }, { order: [3, 1, 0, 2] }] },
  'array-scan:shift-capacity': { type: 'array-scan', data: [1, 2, 3, 4], capacity: 8, big: true,
    steps: [{ look: [0], capacity: 8 },
            { shift: { from: 1, by: 1 }, seen: [1, 2, 3], capacity: 8, badge: 'making a gap' },
            { shift: { from: 1, by: 1 }, found: [1], capacity: 8 },
            { capacity: 8, found: [0, 1, 2, 3] }] },
  reveal: { viz: { nodes: NODES2, edges: EDGE2 }, steps: [{ show: ['a'], look: ['a'] }, { show: ['a', 'b'], found: ['b'] }] },
};

function fakeRoot(svg){
  const stub = () => ({ setAttribute(){}, removeAttribute(){}, getAttribute(){ return null; }, textContent: '', classList: { add(){}, remove(){} }, querySelector: stub, querySelectorAll: () => [], get offsetWidth(){ return 1; } });
  const groups = [...svg.matchAll(/<g class="(cell|ptr|ge|tcount|cline|cbadge)"([^>]*)>/g)].map(m => {
    const dataset = {};
    for (const a of m[2].matchAll(/data-([a-z]+)="([^"]*)"/g)) dataset[a[1]] = a[2];
    return { cls: m[1], dataset, setAttribute(){}, removeAttribute(){}, getAttribute(){ return null; }, classList: { add(){}, remove(){} }, querySelector: stub, querySelectorAll: () => [stub()], get offsetWidth(){ return 1; } };
  });
  const pick = sel => { const k = String(sel).replace('.', '').split(' ')[0]; return groups.filter(g => g.cls === k); };
  return { querySelectorAll: pick, querySelector: sel => pick(sel)[0] || stub() };
}

function inspect(name, svg){
  const bad = [];
  for (const t of ['NaN', 'undefined', 'Infinity']) if (svg.includes(t)) bad.push(`renders ${t}`);
  if (!/<svg/.test(svg)) bad.push('produced no svg');
  const vb = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  if (!vb) bad.push('no viewBox');
  else {
    const W = +vb[1], H = +vb[2];
    if (!(W > 0 && H > 0)) bad.push(`degenerate canvas ${W}x${H}`);
    const pts = [...svg.matchAll(/[ML]([\d.-]+),([\d.-]+)/g)];
    const esc = pts.filter(p => +p[1] < -60 || +p[1] > W + 60 || +p[2] < -60 || +p[2] > H + 60);
    if (esc.length) bad.push(`${esc.length} point(s) far outside the canvas`);
  }
  return bad;
}

const problems = [];
let n = 0;
console.log('  diagrams');
for (const [name, fixture] of Object.entries(VIZ_FIXTURES)){
  const type = fixture.type || name;
  const fn = VIZ[type];
  if (!fn){ problems.push(`${name}: type "${type}" is not registered`); continue; }
  n++;
  try {
    const bad = inspect(name, fn({ type, title: name, caption: 'smoke test', ...fixture }));
    if (bad.length) problems.push(`${name}: ${bad.join('; ')}`);
    else console.log(`    ok  ${name}`);
  } catch (e){ problems.push(`${name}: threw ${e.message}`); }
}
console.log('  animations');
for (const [name, fixture] of Object.entries(ANIM_FIXTURES)){
  const type = fixture.type || name;
  const fn = ANIM[type];
  if (!fn){ problems.push(`${name}: type "${type}" is not registered`); continue; }
  n++;
  try {
    const impl = fn({ type, title: name, ...fixture });
    const bad = inspect(name, impl.svg);
    const root = fakeRoot(impl.svg);
    for (const st of fixture.steps) impl.apply(root, st);
    if (bad.length) problems.push(`${name}: ${bad.join('; ')}`);
    else console.log(`    ok  ${name}  (${fixture.steps.length} frames)`);
  } catch (e){ problems.push(`${name}: threw ${e.message}`); }
}

/* which registered types has no real lesson exercised yet */
const declared = new Set();
for (const f of readdirSync(path.join(root, 'chapters')).filter(f => /^ch\d+\.js$/.test(f))){
  const txt = readFileSync(path.join(root, 'chapters', f), 'utf8');
  for (const m of txt.matchAll(/"type":"([a-z-]+)"/g)) declared.add(m[1]);
}
const unused = [...Object.keys(VIZ), ...Object.keys(ANIM)].filter(t => !declared.has(t));
if (unused.length) console.log('\n  registered but not yet used by any lesson: ' + unused.join(', '));

/* ---- state contract ----------------------------------------------------------------
   A renderer that paints cells must handle the whole palette, not the part its first lesson
   happened to need. When one hand-rolls a partial chain it silently drops whatever it forgot,
   and the payload still parses, still lays out, still passes every other check. `bad` was inert
   in graph-walk, tree-walk and reveal for four chapters: fifteen authored frames asked for red
   and rendered plain grey. A dropped state is not an error, it is a colour nobody set.

   So: a renderer either delegates to stateOf / stateOfId, or assigns all five itself. Anything
   in between is the bug. grid legitimately hand-rolls, because it addresses cells as row and
   column pairs, and it assigns all five. */
const STATES = ['bad', 'found', 'look', 'seen', 'dead'];
const body = src.slice(0, cut).replace(/function stateOfI?d?\(step, [ai]\)\{[\s\S]*?\n\}/g, '');
for (const m of body.matchAll(/(?:ANIM|VIZ)\['([a-z-]+)'\]\s*=\s*function[\s\S]*?(?=\n(?:ANIM|VIZ)\[|$)/g)){
  const assigned = new Set([...m[0].matchAll(/st\s*=\s*'(bad|found|look|seen|dead)'/g)].map(x => x[1]));
  if (!assigned.size) continue;
  const missing = STATES.filter(st => !assigned.has(st));
  if (missing.length) problems.push(`renderer "${m[1]}" assigns states but never paints ${missing.join(', ')} `
    + `- delegate to stateOf/stateOfId or handle all five`);
}

/* a step key the engine never reads is the same failure wearing a different hat: it parses,
   it renders, and the frame quietly means nothing. Derived from the engine rather than an
   allowlist, so it stays true as renderers gain options. */
const readKeys = new Set([...src.slice(0, cut).matchAll(/step\.([a-zA-Z]+)/g)].map(m => m[1]));
/* One key is deliberately write-only at render time: a heap board marks a frame `settled` to
   ASSERT that it holds a valid heap, and build.py simulates the arrangement against the rule
   the board declares and fails if it does not. The engine has nothing to draw for it, which is
   the point: it is a claim the author makes and the build checks, not an instruction. */
readKeys.add('settled');
const unknown = new Map();
for (const f of readdirSync(path.join(root, 'chapters')).filter(f => /^ch\d+\.js$/.test(f))){
  const txt = readFileSync(path.join(root, 'chapters', f), 'utf8');
  for (const m of txt.matchAll(/data-(?:anim|reel)='([^']*)'/g)){
    let o; try { o = JSON.parse(m[1]); } catch { continue; }
    for (const a of (Array.isArray(o.acts) ? o.acts : [o])){
      for (const st of (a.steps || [])) for (const k of Object.keys(st)){
        if (!readKeys.has(k)) unknown.set(`${k} (${a.type || o.type})`, f);
      }
    }
  }
}
for (const [k, f] of unknown) problems.push(`step key "${k}" in ${f} is never read by the engine`);

for (const w of warnings) problems.push('overlap warning: ' + w);
if (problems.length){
  console.error(`\nFAIL: ${problems.length} renderer problem(s)`);
  problems.forEach(p => console.error('  - ' + p));
  process.exit(1);
}
console.log(`\n  all ${n} renderer fixtures clean`);
