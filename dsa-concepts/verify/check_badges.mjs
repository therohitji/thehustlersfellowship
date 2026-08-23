/* A badge plate is a fixed width and its text is set at runtime, so a caption that is one
   clause too long runs out of its own box. Nothing in the build can see it: the payload is
   valid, the render throws nothing, and the overflow is a few pixels of text past a pale
   border. This walks every board to every frame in a real browser and measures the badge
   text against the plate it is printed in. Usage: node verify/check_badges.mjs */
import path from 'node:path';
const PW = process.env.PLAYWRIGHT || path.join(process.env.HOME, '.claude/skills/gstack/node_modules/playwright/index.mjs');
const { chromium } = await import(PW);
const root = process.cwd();
const b = await chromium.launch();
const pg = await b.newPage({ viewport: { width: 1400, height: 1200 } });
await pg.goto('file://' + path.join(root, 'dsa-concepts-master.html'), { waitUntil: 'networkidle' });
const ids = await pg.$$eval('.les.live', ns => ns.map(n => n.dataset.id));
const bad = [];
for (const id of ids) {
  await pg.evaluate(i => { document.querySelector(`.les[data-id="${i}"]`)?.closest('.chap')?.classList.add('open'); load(i); }, id);
  await pg.waitForTimeout(260);
  const boards = await pg.$$('.board, .reel');
  for (let bi = 0; bi < boards.length; bi++) {
    const steps = await boards[bi].$$eval('.anim-dots i, .reel-dots i', ns => ns.length).catch(() => 0);
    const play = await boards[bi].$('.js-play');
    if (play && /pause/i.test((await play.textContent()) || '')) await play.click();
    const reset = await boards[bi].$('.js-reset'); if (reset) await reset.click();
    for (let k = 0; k < Math.max(steps, 1); k++) {
      const hit = await boards[bi].evaluate(el => {
        const g = el.querySelector('.abadge');
        if (!g || g.getAttribute('opacity') === '0') return null;
        const t = g.querySelector('text'), r = g.querySelector('rect');
        if (!t || !r || !t.textContent) return null;
        const tw = t.getBBox().width, rw = +r.getAttribute('width');
        return tw > rw - 8 ? { text: t.textContent, tw: Math.round(tw), rw } : null;
      });
      if (hit) bad.push({ id, step: k + 1, ...hit });
      const nx = await boards[bi].$('.js-next, .reel-next');
      if (!nx || !(await nx.isEnabled())) break;
      await nx.click({ timeout: 2000 }).catch(() => {});
      await pg.waitForTimeout(45);
    }
  }
}
for (const x of bad) console.log(`  ${x.id} step ${x.step}: ${x.tw}px of text in a ${x.rw}px plate  ${JSON.stringify(x.text)}`);
console.log(bad.length ? `FAIL: ${bad.length} badge(s) overflow their plate` : '  every badge fits its plate');
await b.close();
if (bad.length) process.exit(1);
