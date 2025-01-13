<template lang="pug">
el-tag.hui-hspace(v-for='tag in tags' :key='tag') {{ tag }}
el-input(v-if='inputVisible' type='textarea' v-model='inputValue' ref='input' @change='handleInputConfirm' @keyup.enter='handleInputConfirm')
el-button(v-else icon='plus' size='small' @click='showInput')
</template>

<script setup>
import { ref, nextTick } from 'vue';
import Hex from '@/utils/Hex';

const inputVisible = ref(false);
const inputValue = ref('');
const input = ref(null);

const tags = defineModel({ type: Array, default: () => [] });

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    input.value.focus();
  });
};

const handleInputConfirm = () => {
  const value = inputValue.value;
  if (Hex.validString(value)) {
    tags.value = Hex.uniq(tags.value.concat(Hex.split(value)));
  }
  inputVisible.value = false;
  inputValue.value = '';
};
</script>
