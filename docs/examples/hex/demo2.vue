<template lang="pug">
h4 时间格式化
p {{ content }}
</template>

<script setup>
import { ref } from 'vue';
import { Hex } from 'hui-vue';

const content = ref(Hex.fromNow(new Date()));
</script>
