<template lang="pug">
hui-tag-editor(v-model='cityList')
</template>

<script setup>
import { ref } from 'vue';

const cityList = ref(['北京', '上海', '广州', '深圳']);
</script>
