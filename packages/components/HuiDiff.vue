<template lang="pug">
div(v-html='prettyHtml')
</template>

<script setup>
import { computed } from 'vue';
import { createPatch } from 'diff';
import * as Diff2Html from 'diff2html';

const props = defineProps({
  oldString: {
    type: String,
    default: ''
  },
  newString: {
    type: String,
    default: ''
  },
  context: {
    type: Number,
    default: 5
  },
  fileName: {
    type: String,
    default: ''
  }
});

const prettyHtml = computed(() => {
  // 接口文档: https://github.com/kpdecker/jsdiff?tab=readme-ov-file#api
  const dd = createPatch(props.fileName, props.oldString, props.newString, '', '', { context: props.context });

  // 接口文档: https://github.com/rtfpessoa/diff2html?tab=readme-ov-file#diff2html-configuration
  return Diff2Html.html(dd, {
    drawFileList: false,
    matching: 'lines',
    diffStyle: 'char',
    outputFormat: 'side-by-side'
  });
});
</script>
