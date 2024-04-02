import DefaultTheme from 'vitepress/theme';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import HuiVue from 'hui-vue';
import 'hui-vue/css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { ElementPlusContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.use(HuiVue);
    app.component('demo-preview', ElementPlusContainer);
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  }
};
