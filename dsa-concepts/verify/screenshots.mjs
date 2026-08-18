/* Captures every diagram and animation in the built master so a human can look at them.
   Deliberately NOT part of qa.sh: it needs Playwright, and its job is catching "ugly",
   which no exit code can decide.

   Usage:
     node verify/screenshots.mjs [lessonId] [outDir]
     PLAYWRIGHT=/abs/path/to/playwright node verify/screenshots.mjs 6.1 /tmp/shots

   With no lessonId it walks every live lesson. Animations are stepped to their final frame
   before capture, so the fullest state is what you see. */
import { readFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const wanted = process.argv[2] && process.argv[2] !== 'all' ? process.argv[2] : null;
const outDir = process.argv[3] || path.join(root, '.shots');

const PW = process.env.PLAYWRIGHT
  || path.join(process.env.HOME, '.claude/skills/gstack/node_modules/playwright/index.mjs');

let chromium;
try { ({ chromium } = await import(PW)); }
catch {
  console.error('Playwright not found. Install it, or point PLAYWRIGHT at an install:');
  console.error('  PLAYWRIGHT=/abs/path/to/playwright/index.mjs node verify/screenshots.mjs');
  process.exit(2);
}

const master = path.join(root, 'dsa-concepts-master.html');
readFileSync(master);
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1500, height: 1050 }, deviceScaleFactor: 2 });
const errs = [];
page.on('pageerror', e => errs.push('pageerror: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await page.goto('file://' + master, { waitUntil: 'networkidle' });

const lessons = wanted ? [wanted]
  : await page.$$eval('.les.live', ns => ns.map(n => n.dataset.id));

let shots = 0;
for (const id of lessons){
  /* Drive the reader directly rather than clicking the sidebar: a lesson whose chapter is
     collapsed has a hidden link, and clicking it would just time out. */
  const ok = await page.evaluate(id => {
    if (typeof load !== 'function') return false;
    const el = document.querySelector(`.les[data-id="${id}"]`);
    if (el) el.closest('.chap')?.classList.add('open');
    load(id);
    return true;
  }, id);
  if (!ok){ console.error(`  skip ${id}: reader not ready`); continue; }
  await page.waitForTimeout(800);

  const blocks = await page.$$('.viz, .board, .reel');
  const names = await page.$$eval('.viz, .board, .reel', ns => ns.map(n =>
    ((n.querySelector('.viz-kind, .bk, .rk') || {}).textContent || '').trim() + ' | ' +
    ((n.querySelector('.viz-title, .bt, .rt') || {}).textContent || '').trim()));

  for (let i = 0; i < blocks.length; i++){
    const el = blocks[i];
    await el.scrollIntoViewIfNeeded();
    const next = await el.$('.js-next');
    if (next) for (let k = 0; k < 40 && await next.isEnabled(); k++){
      await next.click(); await page.waitForTimeout(120);
    }
    await page.waitForTimeout(220);
    const file = path.join(outDir, `${id.replace('.', '_')}_${String(i).padStart(2, '0')}.png`);
    await el.screenshot({ path: file });
    console.log(`  ${id}  ${String(i).padStart(2, '0')}  ${names[i]}`);
    shots++;
  }
}
const overflow = await page.evaluate(() => document.body.scrollWidth > document.documentElement.clientWidth);
await browser.close();

console.log(`\n  ${shots} screenshot(s) in ${outDir}`);
console.log('  horizontal page overflow:', overflow ? 'YES, fix it' : 'none');
console.log('  runtime errors:', errs.length ? errs : 'none');
if (errs.length || overflow) process.exit(1);
