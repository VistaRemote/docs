import fs from 'node:fs';
import path from 'node:path';

const DOCS_URL = 'https://docs.remote.vistacast.dev';
const root = process.cwd();
const outDir = path.join(root, 'doc_build');

/**
 * @param {string} dir
 * @param {string} base
 * @returns {string[]}
 */
function walkHtml(dir, base = '') {
  const urls = [];
  if (!fs.existsSync(dir)) return urls;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'assets' || entry.name === 'static') {
      continue;
    }
    const full = path.join(dir, entry.name);
    const rel = path.posix.join(base, entry.name);
    if (entry.isDirectory()) {
      urls.push(...walkHtml(full, rel));
      continue;
    }
    if (!entry.name.endsWith('.html')) continue;

    let route = `/${rel.split(path.sep).join('/')}`;
    if (route.endsWith('/index.html')) {
      route = route.slice(0, -'/index.html'.length) || '/';
    } else {
      route = route.slice(0, -'.html'.length);
    }
    if (route.includes('404')) continue;
    urls.push(route);
  }
  return urls;
}

/** @param {string} route */
function priorityFor(route) {
  if (route === '/' || route === '/zh' || route === '/en') return '1.0';
  if (route.includes('/user/') || route.includes('/guide/')) return '0.9';
  if (route.includes('/deploy/') || route.includes('/architecture/')) return '0.8';
  return '0.6';
}

const routes = [...new Set(walkHtml(outDir))].sort((a, b) => a.localeCompare(b));
const now = new Date().toISOString().slice(0, 10);

const urlsXml = routes
  .map((route) => {
    const loc = route === '/' ? `${DOCS_URL}/` : `${DOCS_URL}${route}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priorityFor(route)}</priority>
  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`;

fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml written (${routes.length} urls)`);
