// One-shot scraper: pulls every blog post from polymerlabs.org, converts the
// Lexical/Payload rich-text JSON to Markdown, downloads cover/inline images,
// and writes Astro Content Collection files.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'src/content/blog');
const IMG_DIR = path.join(ROOT, 'public/assets/blog');
const RAW_DIR = '/tmp/blog-raw';

const SLUGS = [
  'polymer-launches-zero-slippage-usdc-bridge-with-lifi',
  'polymer-powers-modern-money',
  'polymer-integrates-x402-for-prove-api-workflows',
  'optimized-payment-verification-for-everclear',
  'prove-api-a-better-interoperability-model',
  'superform-raises-us14m-in-polymer-led-community-round',
  'lucid-x-polymer-unifying-crosschain-liquidity-management',
  'build-apps-not-interop',
  'polymer-expands-real-time-interoperability-to-celo',
  'lucid-integrates-polymer-for-real-time-liquidity-management',
  'polymer-x-epoch-crosschain-intent-solver-orchestration',
  'polymer-extends-support-for-the-open-intents-framework-oif',
  'prove-anything-cross-chain',
  'dont-send-messages-just-share-state',
  'ethereum-avengersassemble',
  'real-time-interop-is-just-the-beginning',
  'introducing-the-polymer-hub-a-rollup-built-for-interoperability',
  'the-network-layer',
  'substance-spaces-series-a-recap',
  'multi-layered-mesh-interoperability',
  'informal-systems-hosts-polymer-labs-and-cosmos-dev-teams',
  'polymer-labs-raises-23m-to-build-ethereums-interoperability-hub',
  'introducing-polymer-labs-the-future-of-multichain-infrastructure',
  'coindesk-polymer-is-excited-to-announce-3-6m-in-seed-funding',
];

const CDN = 'https://storage.googleapis.com/polymer-foundation.appspot.com/';

const FETCH_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0 Safari/537.36',
};

async function fetchText(url) {
  const r = await fetch(url, { headers: FETCH_HEADERS });
  if (!r.ok) throw new Error(`fetch ${url} -> ${r.status}`);
  return r.text();
}

async function fetchJson(url) {
  const r = await fetch(url, { headers: FETCH_HEADERS });
  if (!r.ok) throw new Error(`fetch ${url} -> ${r.status}`);
  return r.json();
}

async function fetchBuffer(url) {
  const r = await fetch(url, { headers: FETCH_HEADERS });
  if (!r.ok) throw new Error(`fetch ${url} -> ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

// Discover the current cache-buster timestamp from the live blog index page
async function discoverTimestamp() {
  const html = await fetchText('https://polymerlabs.org/blog');
  const m = html.match(/assets\/data\/uil\.(\d+)\.json/);
  if (!m) throw new Error('Could not find SSG timestamp on /blog');
  return m[1];
}

// ---------- Lexical → Markdown ----------

function fmtMarks(text, format) {
  // Lexical text format bitmask:
  //   1=bold, 2=italic, 4=strikethrough, 8=underline, 16=code, 32=sub, 64=sup
  if (!text) return text;
  let s = text;
  if (format & 16) s = '`' + s + '`';
  if (format & 4) s = '~~' + s + '~~';
  if (format & 1) s = '**' + s + '**';
  if (format & 2) s = '*' + s + '*';
  return s;
}

function inlineToMd(node) {
  if (!node) return '';
  switch (node.type) {
    case 'text':
      return fmtMarks(node.text || '', node.format || 0);
    case 'linebreak':
      return '  \n';
    case 'link': {
      const inner = (node.children || []).map(inlineToMd).join('');
      const url = node.fields?.url || node.url || '';
      return `[${inner}](${url})`;
    }
    case 'autolink': {
      const inner = (node.children || []).map(inlineToMd).join('');
      const url = node.fields?.url || node.url || '';
      return `[${inner}](${url})`;
    }
    default:
      // Unknown inline: try to recurse for any text children, else dump text
      if (Array.isArray(node.children)) return node.children.map(inlineToMd).join('');
      return node.text || '';
  }
}

function blockToMd(node, ctx) {
  if (!node) return '';
  switch (node.type) {
    case 'paragraph': {
      const text = (node.children || []).map(inlineToMd).join('');
      return text.trim() === '' ? '' : text + '\n';
    }
    case 'heading': {
      const tag = (node.tag || 'h2').toLowerCase();
      const level = Math.max(1, Math.min(6, parseInt(tag.slice(1), 10) || 2));
      const text = (node.children || []).map(inlineToMd).join('');
      return '#'.repeat(level) + ' ' + text + '\n';
    }
    case 'quote': {
      const text = (node.children || []).map(inlineToMd).join('');
      return text
        .split('\n')
        .map((l) => '> ' + l)
        .join('\n') + '\n';
    }
    case 'list': {
      const ordered = node.listType === 'number' || node.tag === 'ol';
      const items = (node.children || [])
        .map((li, i) => {
          const text = (li.children || []).map((c) => {
            if (c.type === 'text' || c.type === 'link' || c.type === 'autolink' || c.type === 'linebreak') {
              return inlineToMd(c);
            }
            return blockToMd(c, ctx);
          }).join('');
          const bullet = ordered ? `${i + 1}.` : '-';
          return `${bullet} ${text.trim()}`;
        })
        .join('\n');
      return items + '\n';
    }
    case 'horizontalrule':
      return '\n---\n';
    case 'upload': {
      const v = node.value || node.fields || {};
      const filename = v.filename || (v.url || '').split('/').pop();
      const alt = v.altText || v.alt || node.fields?.altText || '';
      if (!filename) return '';
      const localPath = `/assets/blog/${ctx.slug}/${safeFilename(filename)}`;
      ctx.images.push({ remote: cdnUrl(filename), local: localPath, filename: safeFilename(filename) });
      return `![${alt}](${localPath})\n`;
    }
    case 'block': {
      // Custom Payload block — try to render children if any, else skip
      if (Array.isArray(node.children)) return node.children.map((c) => blockToMd(c, ctx)).join('\n');
      return '';
    }
    default:
      if (Array.isArray(node.children)) {
        return node.children.map((c) => blockToMd(c, ctx)).join('');
      }
      return '';
  }
}

function lexicalToMd(content, ctx) {
  if (!content || !content.root) return '';
  const blocks = (content.root.children || []).map((c) => blockToMd(c, ctx));
  return blocks.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

function safeFilename(name) {
  return name.replace(/\s+/g, '_').replace(/[^A-Za-z0-9._\-]/g, '_');
}

function cdnUrl(filename) {
  return CDN + 'media/' + encodeURIComponent(filename).replace(/%2F/g, '/');
}

function yamlEscape(s) {
  if (s == null) return '""';
  const v = String(s);
  if (/^[\w \-./:#@,'!?()&+]+$/.test(v) && !v.includes(': ') && !v.startsWith('-')) {
    // Still wrap in quotes to be safe with apostrophes/colons; escape internal "
    return `"${v.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  }
  return `"${v.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ')}"`;
}

// ---------- Main ----------

async function main() {
  await fs.mkdir(CONTENT_DIR, { recursive: true });
  await fs.mkdir(IMG_DIR, { recursive: true });
  await fs.mkdir(RAW_DIR, { recursive: true });

  const ts = await discoverTimestamp();
  console.log('cache-buster timestamp:', ts);

  const allImages = new Set();
  const summaries = [];

  for (const slug of SLUGS) {
    process.stdout.write(`[${slug}] ... `);
    const url = `https://polymerlabs.org/assets/data/ssg/blog/${slug}/index-${ts}.json`;
    let payload;
    try {
      payload = await fetchJson(url);
      await fs.writeFile(path.join(RAW_DIR, `${slug}.json`), JSON.stringify(payload, null, 2));
    } catch (e) {
      console.log('FAIL', e.message);
      continue;
    }
    const d = payload.data || {};
    const meta = d.metadata || {};
    const ctx = { slug, images: [] };

    // Cover image
    let coverPath = '';
    if (meta.metaImage?.filename) {
      const fn = safeFilename(meta.metaImage.filename);
      coverPath = `/assets/blog/${slug}/${fn}`;
      ctx.images.push({ remote: cdnUrl(meta.metaImage.filename), local: coverPath, filename: fn });
    }

    const body = lexicalToMd(d.content, ctx);

    // Download images for this post
    const postImgDir = path.join(IMG_DIR, slug);
    await fs.mkdir(postImgDir, { recursive: true });
    for (const img of ctx.images) {
      const dest = path.join(ROOT, 'public', img.local.replace(/^\//, ''));
      try {
        await fs.access(dest);
      } catch {
        try {
          const buf = await fetchBuffer(img.remote);
          await fs.writeFile(dest, buf);
          allImages.add(img.local);
        } catch (e) {
          console.log(`\n  IMG FAIL ${img.remote}: ${e.message}`);
        }
      }
    }

    const fm = [];
    fm.push('---');
    fm.push(`title: ${yamlEscape(meta.title)}`);
    fm.push(`description: ${yamlEscape(meta.description || '')}`);
    fm.push(`date: ${yamlEscape(d.publishedDate || '')}`);
    fm.push(`author: ${yamlEscape(d.author || '')}`);
    fm.push(`readTime: ${d.readTime || 0}`);
    fm.push(`featured: ${d.featured ? 'true' : 'false'}`);
    if (coverPath) fm.push(`cover: ${yamlEscape(coverPath)}`);
    fm.push(`slug: ${yamlEscape(slug)}`);
    fm.push('---');
    fm.push('');
    fm.push(body);

    const outPath = path.join(CONTENT_DIR, `${slug}.md`);
    await fs.writeFile(outPath, fm.join('\n'));
    summaries.push({ slug, title: meta.title, body_chars: body.length, images: ctx.images.length });
    console.log(`ok (${body.length} chars, ${ctx.images.length} images)`);
  }

  console.log('\nDone.');
  console.log(JSON.stringify(summaries, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
