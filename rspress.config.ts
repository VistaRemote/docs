import { defineConfig } from '@rspress/core';

export default defineConfig({
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
      message: '© VibeCode · VistaRemote — 立足中国，面向全球开源社区',
    },
  },
});
