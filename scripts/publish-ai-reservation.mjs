import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const outDir = path.join(root, 'doc_build');
if (!fs.existsSync(outDir)) {
  console.error('doc_build is missing; rspress build did not produce output');
  process.exit(1);
}

const publicDir = fs.existsSync(path.join(root, 'docs/public/robots.txt'))
  ? path.join(root, 'docs/public')
  : path.join(root, 'public');

fs.copyFileSync(path.join(publicDir, 'robots.txt'), path.join(outDir, 'robots.txt'));
fs.cpSync(path.join(publicDir, '.well-known'), path.join(outDir, '.well-known'), {
  recursive: true,
});

for (const name of ['og-image.png', 'CNAME', 'brand-logo.png']) {
  const src = path.join(publicDir, name);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(outDir, name));
  }
}

const DOCS_URL = 'https://docs.remote.vistacast.dev';
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'VistaRemote Docs',
      url: DOCS_URL,
      description:
        'Official VistaRemote docs: WebRTC remote desktop, device fleet, self-hosted deploy, AI computer use, and TypeScript customization guides.',
      inLanguage: ['zh-CN', 'en'],
      publisher: {
        '@type': 'Organization',
        name: 'LuminaryWorks',
        url: 'https://luminaryworks.dev',
      },
    },
  ],
};

function injectJsonLd(filePath) {
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');
  if (html.includes('application/ld+json')) return;
  const tag = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${tag}</head>`);
    fs.writeFileSync(filePath, html, 'utf8');
  }
}

for (const rel of ['index.html', 'zh/index.html', 'en/index.html']) {
  injectJsonLd(path.join(outDir, rel));
}

const sitemap = spawnSync(process.execPath, [path.join(root, 'scripts/generate-sitemap.mjs')], {
  stdio: 'inherit',
});
if (sitemap.status !== 0) {
  process.exit(sitemap.status ?? 1);
}
