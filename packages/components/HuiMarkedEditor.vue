<template lang="pug">
section
  hui-ace-editor(v-model='content')
  hui-marked-render(:content='content' @change='changeHandler')
</template>
<script setup>
const content = defineModel({ type: String, default: '' });

const emit = defineEmits(['change']);

const changeHandler = html => {
  emit('change', html);
};
</script>
