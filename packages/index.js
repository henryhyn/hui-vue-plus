import '@/style/main.less';
import Hex from '@/utils/Hex';
import HuiClipboard from '@/components/HuiClipboard.vue';
import HuiHamburger from '@/components/HuiHamburger.vue';

const components = [HuiClipboard, HuiHamburger];

const install = app => {
  components.forEach(component => {
    app.component(component.__name, component);
  });
};

export { Hex, HuiClipboard };
export default { install };
