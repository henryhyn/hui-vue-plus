import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['**/{dist,cache}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest'
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off'
    }
  }
];
