import '@/style/main.less';
import Hex from '@/utils/Hex';
import HuiClipboard from '@/components/HuiClipboard.vue';

const components = [HuiClipboard];

const install = app => {
  components.forEach(component => {
    app.component(component.__name, component);
  });
};

export { Hex, HuiClipboard };
export default { install };
