import { defineConfig } from 'vitepress';
import { containerPreview } from '@vitepress-demo-preview/plugin';
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'HUI VUE',
  description: '基于 Vite + Vue3 的小众组件库',
  lastUpdated: true,
  ignoreDeadLinks: true,
  base: '/hui-vue-plus/',
  head: [
    ['link', { rel: 'shortcut icon', href: '//kysw-static.oss-cn-qingdao.aliyuncs.com/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '//kysw-static.oss-cn-qingdao.aliyuncs.com/favicon.ico' }]
  ],
  markdown: {
    config(md) {
      md.use(containerPreview);
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '组件', link: '/components/', activeMatch: '/components/' },
      { text: '工具', link: '/utils/', activeMatch: '/utils/' },
      { text: '样式', link: '/style/', activeMatch: '/style/' }
    ],

    sidebar: generateSidebar([
      {
        documentRootPath: 'docs',
        scanStartPath: 'guide',
        resolvePath: '/guide/',
        useTitleFromFileHeading: true,
        manualSortFileNameByPriority: ['getting-started.md']
      },
      {
        documentRootPath: 'docs',
        scanStartPath: 'components',
        resolvePath: '/components/',
        useTitleFromFileHeading: true
      },
      { documentRootPath: 'docs', scanStartPath: 'utils', resolvePath: '/utils/', useTitleFromFileHeading: true },
      { documentRootPath: 'docs', scanStartPath: 'style', resolvePath: '/style/', useTitleFromFileHeading: true }
    ]),

    socialLinks: [{ icon: 'github', link: 'https://github.com/henryhyn/hui-vue-plus' }],

    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    outline: [2, 3],
    outlineTitle: '目录',
    lastUpdatedText: '最后更新时间'
  }
});
