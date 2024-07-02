<template lang="pug">
el-input(v-model='content')
hui-clipboard(:value='content')
</template>

<script setup>
import { ref } from 'vue';

const content = ref('Hello, HUI VUE!');
</script>
