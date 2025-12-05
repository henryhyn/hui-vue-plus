import '@/style/main.less';
import 'diff2html/bundles/css/diff2html.min.css';
import Hex from '@/utils/Hex';
import HuiClipboard from '@/components/HuiClipboard.vue';
import HuiHamburger from '@/components/HuiHamburger.vue';
import HuiTagEditor from '@/components/HuiTagEditor.vue';
import HuiDiff from '@/components/HuiDiff.vue';
import HuiAceEditor from '@/components/HuiAceEditor.vue';
import HuiMarkedRender from '@/components/HuiMarkedRender.vue';
import HuiMarkedEditor from '@/components/HuiMarkedEditor.vue';

const components = [HuiClipboard, HuiHamburger, HuiTagEditor, HuiDiff, HuiAceEditor, HuiMarkedRender, HuiMarkedEditor];

const install = app => {
  components.forEach(component => {
    app.component(component.__name, component);
  });
};

export { Hex, HuiClipboard };
export default { install };
