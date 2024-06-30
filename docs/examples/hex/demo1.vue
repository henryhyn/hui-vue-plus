<template lang="pug">
h4 字符串拆分
p {{ content }}
</template>

<script setup>
import { ref } from 'vue';
import { Hex } from 'hui-vue';

const content = ref(Hex.split('a,b,c'));
</script>
