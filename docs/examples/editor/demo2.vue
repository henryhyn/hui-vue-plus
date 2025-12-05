<template lang="pug">
hui-marked-editor(v-model='content' @change='changeHandler')
pre {{ htmlContent }}
</template>

<script setup>
import { ref } from 'vue';
const content = ref('# 标题');
const htmlContent = ref(null);

const changeHandler = html => {
  htmlContent.value = html;
};
</script>
