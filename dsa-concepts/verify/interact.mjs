/* Drives the built master the way a reader does: opens every chapter, loads every live
   lesson, answers a quiz right and wrong, plays and steps an animation, and walks the reel
   act tabs. The other checks prove the page BUILDS. This one proves it WORKS.

   Usage: node verify/interact.mjs [PLAYWRIGHT=/abs/path/to/playwright/index.mjs] */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PW = process.env.PLAYWRIGHT || path.join(process.env.HOME, '.claude/skills/gstack/node_modules/playwright/index.mjs');
const { chromium } = await import(PW);

const fails = [];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
page.on('pageerror', e => fails.push('pageerror: ' + e.message));
page.on('console', m => { if (m.type() === 'error') fails.push('console: ' + m.text()); });
await page.goto('file://' + path.join(root, 'dsa-concepts-master.html'), { waitUntil: 'networkidle' });

const ids = await page.$$eval('.les.live', ns => ns.map(n => n.dataset.id));
console.log(`  ${ids.length} live lessons to drive`);

for (const id of ids) {
  const ok = await page.evaluate(i => {
    const el = document.querySelector(`.les[data-id="${i}"]`);
    if (!el) return 'no sidebar entry';
    el.closest('.chap')?.classList.add('open');
    if (typeof load !== 'function') return 'no loader';
    load(i);
    return null;
  }, id);
  if (ok) { fails.push(`${id}: ${ok}`); continue; }
  await page.waitForTimeout(420);

  const seen = await page.evaluate(() => ({
    title: (document.querySelector('.lesson h1, .lesson .lt, h1') || {}).textContent || '',
    quizzes: document.querySelectorAll('.quiz').length,
    anims: document.querySelectorAll('.board, .reel').length,
    nav: document.querySelectorAll('.navrow a, .nav a').length,
    soon: /ships next/i.test(document.body.innerText),
  }));
  if (!seen.title.trim()) fails.push(`${id}: rendered with no title`);
  if (seen.soon) fails.push(`${id}: shows the "ships next" placeholder although it is live`);
  if (!seen.anims) fails.push(`${id}: no animation on the page`);

  // a quiz must respond to a click, mark right and wrong, and reveal its explanation
  if (seen.quizzes) {
    const q = await page.$('.quiz');
    const correct = await q.evaluate(n => +n.dataset.correct);
    const opts = await q.$$('.opt');
    const wrong = opts[(correct + 1) % opts.length];
    await wrong.click(); await page.waitForTimeout(160);
    const afterWrong = await q.evaluate(n => ({
      marked: n.className + ' ' + [...n.querySelectorAll('.opt')].map(o => o.className).join(' '),
      exp: getComputedStyle(n.querySelector('.qexp')).display,
    }));
    await opts[correct].click(); await page.waitForTimeout(160);
    const afterRight = await q.evaluate(n => n.className + ' ' + [...n.querySelectorAll('.opt')].map(o => o.className).join(' '));
    if (!/wrong|bad|incorrect/i.test(afterWrong.marked)) fails.push(`${id}: a wrong quiz answer is not marked wrong`);
    if (!/right|good|correct/i.test(afterRight)) fails.push(`${id}: the correct quiz answer is not marked correct`);
    if (afterWrong.exp === 'none') fails.push(`${id}: the quiz explanation stays hidden after answering`);
  }

  // every animation must step, and the frame counter must advance
  for (const el of await page.$$('.board, .reel')) {
    const next = await el.$('.js-next'); const reset = await el.$('.js-reset');
    if (!next) { fails.push(`${id}: an animation has no step control`); continue; }
    // pause first, or the animation auto-plays to the end and every control disables
    const play = await el.$('.js-play');
    if (play && /pause/i.test((await play.textContent()) || '')) { await play.click(); await page.waitForTimeout(120); }
    // a board that auto-played to its last frame has next disabled; reset, and give the
    // transition time to settle before deciding it is broken
    for (let t = 0; t < 3 && !(await next.isEnabled()); t++) {
      if (reset && await reset.isEnabled()) await reset.click();
      await page.waitForTimeout(320);
    }
    if (!(await next.isEnabled())) { fails.push(`${id}: an animation cannot be stepped even after a reset`); continue; }
    const before = await el.evaluate(n => (n.querySelector('.frame, .fc, .cnt') || {}).textContent || '');
    await next.click(); await page.waitForTimeout(200);
    const after = await el.evaluate(n => (n.querySelector('.frame, .fc, .cnt') || {}).textContent || '');
    if (before && before === after) fails.push(`${id}: stepping an animation did not advance the frame counter`);
    const svg = await el.$('svg');
    if (!svg) fails.push(`${id}: an animation rendered no svg`);
  }

  // reel act tabs must switch acts
  const tabs = await page.$$('.reel .rtab, .reel .tab');
  if (tabs.length > 1) {
    const first = await page.evaluate(() => (document.querySelector('.reel .at, .reel .act-title') || {}).textContent || '');
    if (!(await tabs[tabs.length - 1].isEnabled())) { await browser.close(); throw new Error('act tab disabled'); }
    await tabs[tabs.length - 1].click(); await page.waitForTimeout(260);
    const last = await page.evaluate(() => (document.querySelector('.reel .at, .reel .act-title') || {}).textContent || '');
    if (first && first === last) fails.push(`${id}: clicking the last act tab did not change the act`);
  }
}

// a planned lesson must still render an honest, titled placeholder with its scope, never a
// blank page and never filler dressed up as content
const planned = await page.$$eval('.les:not(.live)', ns => ns.map(n => n.dataset.id));
console.log(`  ${planned.length} planned lessons to check`);
for (const id of planned) {
  await page.evaluate(i => { const el = document.querySelector(`.les[data-id="${i}"]`);
    el.closest('.chap')?.classList.add('open'); load(i); }, id);
  await page.waitForTimeout(120);
  const s = await page.evaluate(() => {
    const v = document.getElementById('view');
    return { txt: v.innerText, h2: (v.querySelector('h2') || {}).textContent || '',
             scope: v.querySelectorAll('.scope li').length,
             crumb: (document.getElementById('crumb') || {}).innerText || '' };
  });
  if (!/ships next/i.test(s.txt)) fails.push(`${id}: planned lesson has no "ships next" banner`);
  if (!s.h2.trim())              fails.push(`${id}: planned lesson placeholder has no title`);
  if (s.scope < 1)               fails.push(`${id}: planned lesson lists no planned scope`);
  if (!s.crumb.trim())           fails.push(`${id}: planned lesson has no chapter breadcrumb`);
}

const overflow = await page.evaluate(() => document.body.scrollWidth > document.documentElement.clientWidth + 1);
if (overflow) fails.push('the page scrolls horizontally');
await browser.close();

if (fails.length) { console.log(fails.map(f => '  ' + f).join('\n')); console.log(`  ${fails.length} interaction failure(s)`); process.exit(1); }
console.log('  every live lesson loads, answers, steps and switches acts');
