# 关于项目

HuiVue (寓意：会 Vue), 在使用 Vue 2 时，就做了这样一个项目，定位是收集自己常用的组件和工具，[源码地址](https://github.com/henryhyn/hui-vue). 在自己负责的多个项目中使用了，非常有助于提升开发效率。

在决定将自己负责的项目升级到 Vue 3 时，也需要同步升级 HuiVue, 于是新做了一个开源项目 [hui-vue-plus](https://github.com/henryhyn/hui-vue-plus), 发布的 npm 包还是使用 `hui-vue`, 版本号从 3.0.0 开始。

Vite 带来了非常高的开发构建效率，也带来了[库模式](https://cn.vitejs.dev/guide/build.html#library-mode) 的构建方式，让开发组件包变得非常方便。HuiVue 包含一些列组件、工具和样式，使用方式参见[这里](./getting-started.md)。

用 [VitePress](https://vitepress.dev/zh) 编写使用文档，通过 `enhanceApp` 扩展引入组件，并通过 `vitepress-demo-preview` 插件演示组件的使用，比如[剪贴板](../components/clipboard.md)。

通过配置 GitHub Action, 当代码提交时，自动构建 HuiVue, 并构建项目文档，然后发布到 GitHub Pages, 这样就看到了。

为了规范代码和文档，同时使用了 `prettier`, `lint`, 以及自己写的 `docs:format` (待完善)

```json
"lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore",
"docs:format": "node format.mjs docs/*.md docs/**/*.md",
"format": "prettier --write . --ignore-path .gitignore",
```
