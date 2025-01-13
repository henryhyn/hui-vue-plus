<template lang="pug">
template(v-if='isSupported')
  el-button(icon='copy-document' :type='type' :loading='copied' @click='copyHandler' v-if='!!label') {{ label }}
  el-button(icon='copy-document' :type='type' :loading='copied' @click='copyHandler' v-else text)
p(v-else) Your browser does not support Clipboard API
</template>

<script setup>
import { useClipboard } from '@vueuse/core';
import { ElMessage } from 'element-plus';

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  label: {
    type: String,
    default: null
  },
  value: {
    type: String,
    default: ''
  }
});
const { text, copy, copied, isSupported } = useClipboard({
  source: props.value,
  copiedDuring: 100,
  legacy: true
});

const copyHandler = () => {
  copy(props.value).then(() => {
    ElMessage({
      message: '复制成功!',
      type: 'success',
      plain: true
    });
  });
};
</script>
