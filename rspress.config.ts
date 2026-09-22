import { defineConfig } from '@rspress/core';

export default defineConfig({
  head: [
    ['meta', { name: 'robots', content: 'noai, noimageai, noarchive' }],
    ['meta', { name: 'tdm-reservation', content: '1' }],
    ['meta', { name: 'tdm-policy', content: 'https://github.com/VistaRemote/docs/blob/main/AI-USE.md' }],
  ],
  root: 'docs',
  lang: 'zh',
  title: 'VistaRemote',
  description: 'WebRTC 远程桌面 · 可私有化 AI · TypeScript 全栈',
  icon: '/icon.svg',
  logo: {
    light: '/logo.svg',
    dark: '/logo.svg',
  },
  locales: [
    {
      lang: 'zh',
      label: '简体中文',
      title: 'VistaRemote',
      description: 'WebRTC 远程桌面 · 可私有化 AI · TypeScript 全栈',
    },
    {
      lang: 'en',
      label: 'English',
      title: 'VistaRemote',
      description: 'WebRTC remote desktop · self-hosted AI · TypeScript stack',
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
