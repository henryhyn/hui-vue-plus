<template lang="pug">
el-input(v-model='content')
hui-clipboard(type='primary' :value='content' label='一键复制')
</template>

<script setup>
import { ref } from 'vue';

const content = ref('Hello, HUI VUE!');
</script>
