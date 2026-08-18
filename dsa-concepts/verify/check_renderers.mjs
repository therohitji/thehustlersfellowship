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
  'race:units-badge-bad': { type: 'race', countLabel: ' scans',
    tracks: [{ label: 'Trolley', data: [1, 2, 3], countLabel: ' scans' }, { label: 'Basket', data: [1, 2, 3] }],
    steps: [{ badge: '12 items', lanes: [{ look: [0], count: 1 }, { bad: [2], count: 9 }] },
            { badge: '24 items', lanes: [{ found: [2], count: 3 }, { bad: [0, 1, 2], count: 9 }] }] },
  race: { tracks: [{ label: 'One', data: [1, 2, 3] }, { label: 'Two', data: [1, 2, 3] }], steps: [{ lanes: [{ look: [0], count: 1 }, { look: [1], range: [0, 2], count: 1 }] }, { lanes: [{ found: [2], count: 3 }, { found: [1], count: 2 }] }] },
  'tree-walk': { unit: 70, nodes: [{ id: 'r', label: 'r', x: 1, d: 0 }, { id: 'l', label: 'l', x: 0, d: 1 }, { id: 'q', label: 'q', x: 2, d: 1 }], edges: [{ from: 'r', to: 'l' }, { from: 'r', to: 'q' }], steps: [{ look: ['r'] }, { found: ['q'], dead: ['l'] }] },
  'graph-walk': { nodes: [{ id: 'a', label: 'a', x: 0, y: 0 }, { id: 'b', label: 'b', x: 1, y: 0 }], edges: [{ from: 'a', to: 'b', w: 3 }], steps: [{ look: ['a'] }, { found: ['b'], seen: ['a'], edges: ['a-b'] }] },
  vector: { query: { x: 200, y: 150, label: 'a question' }, points: [{ x: 120, y: 100, label: 'near' }, { x: 380, y: 260, label: 'far' }], steps: [{ radius: 0 }, { radius: 90, seen: [0] }, { radius: 90, found: [0] }] },
  curve: { series: GROWTH.map(f => ({ label: f, fn: f })), n: 30, steps: [{ pct: 10, show: [0, 1], badge: '12 items' }, { pct: 100, badge: '1,000,000 items' }] },
  'curve:log': { type: 'curve', logScale: true, series: GROWTH.map(f => ({ label: f, fn: f })), n: 30, steps: [{ pct: 100 }] },
  'curve:notation-reveal': { type: 'curve', logScale: true, n: 30,
    series: GROWTH.map(f => ({ label: 'plain words for ' + f, label2: 'O(' + f + ')', fn: f })),
    steps: [{ pct: 60 }, { pct: 100, notation: true }] },
  'array-scan:badge': { type: 'array-scan', data: [1, 2, 3], steps: [{ look: [0], badge: '12 boxes' }, { found: [2], badge: '12 million boxes' }] },
  'array-scan:bad-state': { type: 'array-scan', data: [1, 2, 3, 4],
    steps: [{ look: [0] }, { bad: [3], dead: [0, 1] }, { bad: [0, 1, 2, 3] }] },
  reveal: { viz: { nodes: NODES2, edges: EDGE2 }, steps: [{ show: ['a'], look: ['a'] }, { show: ['a', 'b'], found: ['b'] }] },
};

function fakeRoot(svg){
  const stub = () => ({ setAttribute(){}, getAttribute(){ return null; }, textContent: '', classList: { add(){}, remove(){} }, querySelector: stub, querySelectorAll: () => [], get offsetWidth(){ return 1; } });
  const groups = [...svg.matchAll(/<g class="(cell|ptr|ge|tcount|cline|cbadge)"([^>]*)>/g)].map(m => {
    const dataset = {};
    for (const a of m[2].matchAll(/data-([a-z]+)="([^"]*)"/g)) dataset[a[1]] = a[2];
    return { cls: m[1], dataset, setAttribute(){}, getAttribute(){ return null; }, classList: { add(){}, remove(){} }, querySelector: stub, querySelectorAll: () => [stub()], get offsetWidth(){ return 1; } };
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

for (const w of warnings) problems.push('overlap warning: ' + w);
if (problems.length){
  console.error(`\nFAIL: ${problems.length} renderer problem(s)`);
  problems.forEach(p => console.error('  - ' + p));
  process.exit(1);
}
console.log(`\n  all ${n} renderer fixtures clean`);
