<template lang="pug">
section(v-html='htmlContent')
</template>
<script setup>
import { marked } from 'marked';
import { ref, watch } from 'vue';

const props = defineProps({
  content: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['change']);
const htmlContent = ref(null);
watch(
  () => props.content,
  newVal => {
    htmlContent.value = marked.parse(newVal);
    emit('change', htmlContent.value);
  },
  { immediate: true }
);
</script>
