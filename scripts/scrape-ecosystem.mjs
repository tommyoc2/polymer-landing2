// Scrapes polymerlabs.org/ecosystem: pulls section structure (Chains/Apps/Infra),
// downloads all logos to public/assets/ecosystem/, and emits a typed JSON file
// at src/data/ecosystem.json that the Astro page consumes.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'src/data');
const IMG_DIR = path.join(ROOT, 'public/assets/ecosystem');
const CDN = 'https://storage.googleapis.com/polymer-foundation.appspot.com/media/';

const FETCH_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0 Safari/537.36',
};

const fetchText = async (u) => {
  const r = await fetch(u, { headers: FETCH_HEADERS });
  if (!r.ok) throw new Error(`${u} -> ${r.status}`);
  return r.text();
};
const fetchJson = async (u) => JSON.parse(await fetchText(u));
const fetchBuffer = async (u) => {
  const r = await fetch(u, { headers: FETCH_HEADERS });
  if (!r.ok) throw new Error(`${u} -> ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
};

async function discoverTimestamp() {
  const html = await fetchText('https://polymerlabs.org/ecosystem');
  const m = html.match(/assets\/data\/uil\.(\d+)\.json/);
  if (!m) throw new Error('No uil timestamp');
  return m[1];
}

const safe = (n) => n.replace(/\s+/g, '_').replace(/[^A-Za-z0-9._\-]/g, '_');
const cdn = (filename) => CDN + encodeURIComponent(filename).replace(/%2F/g, '/');

async function downloadOnce(remote, dest) {
  try {
    await fs.access(dest);
    return false; // already there
  } catch {}
  const buf = await fetchBuffer(remote);
  await fs.writeFile(dest, buf);
  return true;
}

async function main() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.mkdir(IMG_DIR, { recursive: true });

  const ts = await discoverTimestamp();
  console.log('uil timestamp:', ts);
  const url = `https://polymerlabs.org/assets/data/ssg/ecosystem/index-${ts}.json`;
  const payload = await fetchJson(url);
  const sections = payload.data;

  const out = {
    title: payload.head.title,
    description: payload.head.description,
    sections: [],
  };

  for (const key of Object.keys(sections)) {
    const sec = sections[key];
    const items = (sec.content?.items || []).map((it) => {
      const filename = it.image?.filename || '';
      const localFilename = safe(filename);
      return {
        name: it.description || it.title || it.label || filename,
        url: it.url || null,
        image: localFilename ? `/assets/ecosystem/${localFilename}` : null,
        _remote: filename ? cdn(filename) : null,
      };
    });

    // Download images
    let dlCount = 0;
    for (const it of items) {
      if (!it._remote) continue;
      const dest = path.join(IMG_DIR, path.basename(it.image));
      try {
        if (await downloadOnce(it._remote, dest)) dlCount++;
      } catch (e) {
        console.log(`  IMG FAIL ${it.name}: ${e.message}`);
      }
      delete it._remote;
    }

    out.sections.push({
      index: sec.header?.index?.replace(/[\[\]\s]/g, '') || String(out.sections.length + 1).padStart(2, '0'),
      title: sec.header?.title || 'Section',
      items,
    });
    console.log(`  [${sec.header?.title}] ${items.length} items, ${dlCount} new images`);
  }

  await fs.writeFile(
    path.join(DATA_DIR, 'ecosystem.json'),
    JSON.stringify(out, null, 2)
  );
  console.log('Wrote src/data/ecosystem.json');
}

main().catch((e) => { console.error(e); process.exit(1); });
