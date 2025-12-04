<template lang="pug">
el-form(label-suffix=':' @submit.prevent)
  el-form-item(label='模式')
    el-select(v-model='mode')
      el-option(v-for='item in modelType' :key='item.value' :value='item.value' :label='item.label')
hui-ace-editor(v-model='mdContent' :mode='mode')
pre {{ mdContent }}
</template>

<script setup>
import { ref } from 'vue';
const modelType = [
  { value: 'markdown', label: 'Markdown' },
  { value: 'json', label: 'JSON' },
  { value: 'mysql', label: 'MySQL' }
];
const mode = ref('markdown');
const mdContent = ref('# 标题');
</script>
