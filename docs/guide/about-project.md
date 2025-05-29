# 关于项目

## 简介

**HuiVue** (寓意：会 Vue)，在使用 Vue 2 时，就做了 [开源项目 hui-vue](https://github.com/henryhyn/hui-vue)，定位是统一管理自己常用的组件和工具方法，以复用提升开发效率。在自己负责的多个项目中使用了，非常高效！

在决定将自己负责的项目升级到 Vue 3 时，也需要同步升级 HuiVue，于是做了这个新的 [开源项目 hui-vue-plus](https://github.com/henryhyn/hui-vue-plus)，发布的 npm 包还是使用 `hui-vue`，版本号从 3.0.0 开始。

[Vite](https://cn.vitejs.dev) 带来了非常高的开发构建效率，也带来了 [库模式](https://cn.vitejs.dev/guide/build.html#library-mode) 的构建方式，让开发组件库变得非常方便。HuiVue 包含一系列组件、工具和样式，使用方式参见 [这里](./getting-started.md)。

用 [VitePress](https://vitepress.dev/zh) 编写使用文档，通过 `enhanceApp` 引入 Vue 组件，并通过 `vitepress-demo-preview` 插件演示组件的使用，比如 [剪贴板](../components/clipboard.md)。关于文档编写配置的更新信息参见 [关于文档](./about-docs.md)。

## 开发

### 先决条件

- 至少安装 node v18
- git clone 代码到本地
- 进入项目，执行 `npm ci`
- 执行构建 `npm run build`

### 开发组件

```bash
npm run docs:dev
```

启动测试 (演示) 文档，一边开发组件，一边验证效果。注意，组件或工具方法的改动，需要执行 `npm run build`，才能在演示中生效。

### 开发工具方法

开发工具方法，使用 [vitest](https://cn.vitest.dev) 测试，命令如下

```bash
npm run test
```

### 统一代码风格

为了规范代码和文档，同时使用了 `prettier`, `lint`，以及自己写的 `docs:format` (待完善)

```bash
npm run format
npm run lint
npm run docs:format
```

### 本地测试

```bash
npm run build
npm pack
npm install <your_path.tgz>
```

### 发布文档

通过配置 GitHub Action，当代码提交到 GitHub 时，将自动构建 HuiVue，并构建项目文档，然后发布到 GitHub Pages，这样就看到了。手动构建命令如下

```bash
npm run docs:build
```

### 发布 npm 包

1. 修改版本号
2. `npm run build`
3. `rm -frv .npmrc`
4. `npm publish`
