# 快速开始

## 使用组件和样式

安装依赖

```bash
npm i -d hui-vue
```

全局引入所有组件

```javascript
import HuiVue from 'hui-vue';
import 'hui-vue/css';

// 其他代码

app.use(HuiVue);
```

使用组件，比如 [剪贴板](../components/clipboard.md)。

## 使用工具方法

```javascript
import { Hex } from 'hui-vue';
Hex.split('a,b,c');
```
