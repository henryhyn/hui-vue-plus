# Vue 3 快速上手

特性：

- 声明式渲染
- 响应性
- 渐进式框架
- 选项式 API 与组合式 API，为了提升代码复用，选择**组合式** API (Composition API).

## 单文件组件

**单文件组件** (Single-File Components, SFC)

:::preview
demo-preview=../examples/vue3/demo1.vue
:::

## 组件

### 生命周期

![lifecycle](https://cn.vuejs.org/assets/lifecycle_zh-CN.W0MNXI0C.png)

### 基础知识

#### 根组件

```
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
```

#### 模板语法

- 文本插值 `{{ msg }}`
- 原始 HTML `span(v-html='rawHtml')`
- 属性绑定 `div(v-bind:id='dynamicId')` (vue 3.4 及以上版本，当属性绑定的名称和值相同时，可以简化为类似于 `:id`)
- 一次绑定多个属性，用指令 `v-bind`
- 绑定都支持 JS 表达式
- 支持全局变量 `Math`, `Date`，或者自定义 `app.config.globalProperties`
- 指令，与指令参数通过冒号分开，通过方括号可以支持动态参数
- 事件监听的指令 `v-on`，缩写为 `@`
- 修饰符，比如 `.prevent`

## 参考资料

- [Vue.js 官方文档](https://cn.vuejs.org)
