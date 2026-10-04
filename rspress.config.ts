import path from 'node:path';
import { defineConfig } from '@rspress/core';

const DOCS_URL = 'https://docs.remote.vistacast.dev';
const OG_IMAGE = `${DOCS_URL}/og-image.png`;
const TITLE_ZH = 'VistaRemote 文档';
const DESC_ZH =
  'VistaRemote 官方文档：WebRTC 远程桌面、设备舰队、私有化部署、AI 电脑操控与 TypeScript 二开指南。';
const TITLE_EN = 'VistaRemote Docs';
const DESC_EN =
  'Official VistaRemote docs: WebRTC remote desktop, device fleet, self-hosted deploy, AI computer use, and TypeScript customization guides.';

export default defineConfig({
  head: [
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, noai, noimageai' }],
    ['meta', { name: 'tdm-reservation', content: '1' }],
    ['meta', { name: 'tdm-policy', content: 'https://github.com/VistaRemote/docs/blob/main/AI-USE.md' }],
    ['meta', { name: 'author', content: 'LuminaryWorks' }],
    ['meta', { name: 'theme-color', content: '#0d1117' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'VistaRemote Docs' }],
    ['meta', { property: 'og:url', content: DOCS_URL }],
    ['meta', { property: 'og:title', content: TITLE_ZH }],
    ['meta', { property: 'og:description', content: DESC_ZH }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:locale:alternate', content: 'en_US' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: TITLE_ZH }],
    ['meta', { name: 'twitter:description', content: DESC_ZH }],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }],
    ['link', { rel: 'canonical', href: DOCS_URL }],
    ['link', { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' }],
  ],
  root: 'docs',
  globalStyles: path.join(__dirname, 'styles/index.css'),
  // Custom domain: https://docs.remote.vistacast.dev (GitHub Pages)
  base: '/',
  lang: 'zh',
  title: TITLE_ZH,
  description: DESC_ZH,
  icon: '/icon.svg',
  logo: {
    light: '/logo.svg',
    dark: '/logo.svg',
  },
  // Avoid clash with Nest API / web on :3000.
  // Rspress 2 ignores top-level `port` / `server.port` for `dev`; use builderConfig (or `rspress dev --port`).
  builderConfig: {
    server: {
      port: 13401,
      // Prefer IPv4 so localhost resolves to docs, not Nest on *:3000
      host: '127.0.0.1',
    },
  },
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: TITLE_ZH,
      description: DESC_ZH,
    },
    {
      lang: 'en',
      label: 'English',
      title: TITLE_EN,
      description: DESC_EN,
    },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/VistaRemote',
      },
    ],
    footer: {
      message: '© VibeCode · VistaRemote · 公开阅读 · 禁止用于 AI 训练或生成同类产品（/legal/ai-use）',
    },
  },
});
