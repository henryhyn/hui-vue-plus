<template lang="pug">
el-button(v-if='model' text icon='expand' @click='model = !model')
el-button(v-else text icon='fold' @click='model = !model')
</template>

<script setup>
const model = defineModel({ type: Boolean });
</script>
