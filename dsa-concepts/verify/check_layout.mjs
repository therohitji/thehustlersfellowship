/* Renders every declared diagram and animation frame outside the browser and asserts:
   - the payload is valid JSON of a registered type
   - the produced SVG contains no NaN, undefined or Infinity
   - no two nodes in a grid-laid-out diagram overlap
   - every animation step paints without throwing
   This is the deterministic answer to "nothing cluttered or overlapping". */
import { readFileSync, readdirSync } from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const master = readFileSync(path.join(root, 'dsa-concepts-master.html'), 'utf8');
let src = master.split('<script>').pop().split('</script>')[0];
const cut = src.indexOf('/* ============================ READER ============================ */');
if (cut < 0) { console.error('FAIL: reader marker not found'); process.exit(1); }
src = src.slice(0, cut);

const warnings = [];
const ctx = {
  console: { warn: (...a) => warnings.push(a.join(' ')), log: () => {} },
  window: { matchMedia: () => ({ matches: false }) },
  document: { querySelectorAll: () => [] },
  Math, JSON, Object, Array, String, Number, Error
};
vm.createContext(ctx);
vm.runInContext(src + '\n;globalThis.VIZ=VIZ;globalThis.ANIM=ANIM;', ctx);
const { VIZ, ANIM } = ctx;
if (!VIZ || !ANIM) { console.error('FAIL: could not read VIZ/ANIM registries'); process.exit(1); }

/* a minimal DOM good enough for apply() to run against */
function stub(){
  return { setAttribute(){}, getAttribute(){ return null; }, textContent: '',
           classList: { add(){}, remove(){} },
           querySelector(){ return stub(); }, querySelectorAll(){ return []; } };
}
function fakeRoot(svg){
  const groups = [...svg.matchAll(/<g class="(cell|ptr|ge|tcount|cline|cbadge)"([^>]*)>/g)].map(m => {
    const attrs = {};
    for (const a of m[2].matchAll(/data-([a-z]+)="([^"]*)"/g)) attrs[a[1]] = a[2];
    return { cls: m[1], dataset: attrs, _a: {},
      setAttribute(k, v){ this._a[k] = v; },
      getAttribute(k){ return this._a[k]; },
      classList: { remove(){}, add(){} },
      querySelector(){ return stub(); },
      querySelectorAll(){ return [stub()]; },
      get offsetWidth(){ return 1; } };
  });
  return {
    querySelectorAll(sel){
      const key = sel.replace('.', '').split(' ')[0];
      return groups.filter(g => g.cls === key);
    },
    querySelector(sel){
      const key = String(sel).replace('.', '').split(' ')[0];
      return groups.find(g => g.cls === key) || stub();
    }
  };
}

const bad = [];
let nViz = 0, nAnim = 0, nFrames = 0;

for (const f of readdirSync(path.join(root, 'chapters')).filter(f => /^ch\d+\.js$/.test(f))){
  const txt = readFileSync(path.join(root, 'chapters', f), 'utf8');
  for (const m of txt.matchAll(/data-reel='(\{[\s\S]*?\})'/g)){
    let reel;
    try { reel = JSON.parse(m[1]); }
    catch (e){ bad.push(`${f}: reel payload is not valid JSON: ${e.message}`); continue; }
    for (const [ai, act] of (reel.acts || []).entries()){
      const fn = ANIM[act.type];
      const name = `${f} reel act ${ai + 1} "${act.tab || act.title || act.type}"`;
      if (!fn){ bad.push(`${name}: unknown animation type "${act.type}"`); continue; }
      try {
        nAnim++;
        const impl = fn(act);
        for (const t of ['NaN', 'undefined', 'Infinity'])
          if (impl.svg.includes(t)) bad.push(`${name}: rendered SVG contains ${t}`);
        const r2 = fakeRoot(impl.svg);
        for (const step of act.steps){ impl.apply(r2, step); nFrames++; }
      } catch (e){ bad.push(`${name}: threw ${e.message}`); }
    }
  }
  for (const [attr, reg, kind] of [['data-viz', VIZ, 'viz'], ['data-anim', ANIM, 'anim']]){
    for (const m of txt.matchAll(new RegExp(attr + "='(\\{[\\s\\S]*?\\})'", 'g'))){
      let spec;
      try { spec = JSON.parse(m[1]); }
      catch (e){ bad.push(`${f}: ${kind} payload is not valid JSON: ${e.message}`); continue; }
      const fn = reg[spec.type];
      if (!fn){ bad.push(`${f}: unknown ${kind} type "${spec.type}"`); continue; }
      const name = `${f} ${kind} "${spec.title || spec.type}"`;
      try {
        if (kind === 'viz'){
          nViz++;
          const svg = fn(spec);
          for (const t of ['NaN', 'undefined', 'Infinity'])
            if (svg.includes(t)) bad.push(`${name}: rendered SVG contains ${t}`);
        } else {
          nAnim++;
          const impl = fn(spec);
          for (const t of ['NaN', 'undefined', 'Infinity'])
            if (impl.svg.includes(t)) bad.push(`${name}: rendered SVG contains ${t}`);
          const root2 = fakeRoot(impl.svg);
          for (const step of spec.steps){ impl.apply(root2, step); nFrames++; }
        }
      } catch (e){ bad.push(`${name}: threw ${e.message}`); }
    }
  }
}

for (const w of warnings) bad.push('overlap: ' + w);

if (bad.length){
  console.error('FAIL: ' + bad.length + ' layout problem(s)');
  bad.forEach(b => console.error('  - ' + b));
  process.exit(1);
}
console.log(`  layout clean: ${nViz} diagrams, ${nAnim} animations, ${nFrames} frames painted, 0 overlaps`);
