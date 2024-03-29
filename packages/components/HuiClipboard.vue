<template lang="pug">
template(v-if='isSupported')
  el-button(:loading='copied' @click='copy(value)') {{ label }}
p(v-else) Your browser does not support Clipboard API
</template>

<script setup>
import { useClipboard } from '@vueuse/core';
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
</script>
