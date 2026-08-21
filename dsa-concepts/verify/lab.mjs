/* A bench for trying a board BEFORE a lesson commits to it. Feeds arbitrary specs into the
   built engine and screenshots each one, so a proposed board can be looked at rather than
   argued about. Usage: node verify/lab.mjs specs.json outDir [stepIndex] */
import { readFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PW = process.env.PLAYWRIGHT || path.join(process.env.HOME, '.claude/skills/gstack/node_modules/playwright/index.mjs');
const { chromium } = await import(PW);

const specs = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const outDir = process.argv[3] || '/tmp/lab';
mkdirSync(outDir, { recursive: true });

const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1400, height: 1400 }, deviceScaleFactor: 2 });
const errs = [];
pg.on('pageerror', e => errs.push(String(e)));
await pg.goto('file://' + path.join(root, 'dsa-concepts-master.html'), { waitUntil: 'networkidle' });

for (const s of specs) {
  const isAnim = !!(s.spec.steps || s.spec.acts);
  const html = await pg.evaluate(({ spec, isAnim, wrapW }) => {
    const host = document.createElement('div');
    host.style.cssText = 'position:fixed;left:0;top:0;background:#fff;z-index:99999;padding:0;';
    host.innerHTML = '<div class="wrap" style="max-width:' + wrapW + 'px;margin:0;padding:40px;">'
      + '<div class="' + (isAnim ? 'board' : 'viz') + '" data-' + (isAnim ? 'anim' : 'viz')
      + "='" + JSON.stringify(spec).replace(/'/g, '&#39;') + "'></div></div>";
    document.body.appendChild(host);
    host.id = 'lab-host';
    if (isAnim) mountAnims(host); else mountViz(host);
    return host.innerHTML.length;
  }, { spec: s.spec, isAnim, wrapW: s.wrapW || 760 });
  await pg.waitForTimeout(500);
  // step an animation to the frame asked for
  const at = s.step;
  if (isAnim && at != null) {
    await pg.evaluate(n => {
      const host = document.querySelector('#lab-host');
      const play = host.querySelector('.js-play');
      if (play && /pause/i.test(play.textContent)) play.click();
      const next = host.querySelector('.js-next');
      for (let i = 0; i < n; i++) next?.click();
    }, at);
    await pg.waitForTimeout(400);
  }
  const el = pg.locator('#lab-host .board, #lab-host .viz').first();
  await el.screenshot({ path: path.join(outDir, s.name + '.png') });
  await pg.evaluate(() => document.querySelector('#lab-host')?.remove());
  console.log('  ' + s.name);
}
if (errs.length) { console.error('RUNTIME ERRORS:'); errs.forEach(e => console.error('  ' + e)); }
await b.close();
console.log(errs.length ? 'errors: ' + errs.length : 'no runtime errors');
