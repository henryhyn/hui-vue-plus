<template lang="pug">
el-button(@click='handleClick') count: {{ count }}
</template>

<script setup>
import { createApp, ref } from 'vue';

const count = ref(0);

const handleClick = () => {
  count.value++;
};
</script>
