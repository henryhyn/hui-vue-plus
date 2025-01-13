import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['**/dist', '**/cache'] },
  { files: ['**/*.{js,mjs,cjs,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'vue/multi-word-component-names': 'off'
    }
  }
];
