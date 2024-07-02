<template lang="pug">
hui-hamburger(v-model='isCollapsed')
p 值: {{ isCollapsed }}
</template>

<script setup>
import { useStorage } from '@vueuse/core';

const isCollapsed = useStorage('isCollapsed', true);
</script>
