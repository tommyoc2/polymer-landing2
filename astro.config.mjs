import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // 'directory' so /blog/ resolves to /blog/index.html on any static server,
    // and /blog/<slug>/ resolves to /blog/<slug>/index.html. Cleaner URLs and
    // works under `astro preview`, `wrangler pages dev`, and Cloudflare Pages.
    format: 'directory',
  },
});
