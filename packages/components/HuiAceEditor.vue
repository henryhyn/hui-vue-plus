<template lang="pug">
div(ref='el' :style='editorStyle')
</template>
<script setup>
import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/ext-settings_menu';
import 'ace-builds/src-noconflict/ext-prompt';
import 'ace-builds/src-noconflict/ext-language_tools';
import { ref, computed, onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue';

const props = defineProps({
  mode: {
    type: String,
    default: 'markdown'
  },
  modelValue: {
    type: String,
    default: ''
  },
  readOnly: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number],
    default: '100%'
  },
  height: {
    type: [String, Number],
    default: '300px'
  }
});

const emit = defineEmits(['update:modelValue', 'change']);

const editorStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height
}));
const el = useTemplateRef('el');
const editor = ref(null);
const initialize = () => {
  if (!el.value) {
    return;
  }
  // 官方文档: https://ace.c9.io/
  editor.value = ace.edit(el.value);
  editor.value.$blockScrolling = Infinity;
  editor.value.getSession().setTabSize(2);
  editor.value.getSession().setUseSoftTabs(true);
  editor.value.getSession().setUseWrapMode(true);
  editor.value.getSession().setUseWorker(false);
  editor.value.getSession().setMode(`ace/mode/${props.mode}`);
  editor.value.setTheme('ace/theme/monokai');
  editor.value.setOption('enableBasicAutocompletion', true);
  editor.value.setOption('enableLiveAutocompletion', true);
  // editor.value.setOption('enableSnippets', true);
  editor.value.setHighlightActiveLine(true);
  editor.value.setShowPrintMargin(false);
  editor.value.setReadOnly(props.readOnly);
  editor.value.clearSelection();
  editor.value.setValue(props.modelValue, 1);

  editor.value.on('change', () => {
    const content = editor.value.getValue();
    emit('update:modelValue', content);
    emit('change', content);
  });
};
onMounted(initialize);
onBeforeUnmount(() => {
  if (editor.value) {
    editor.value.destroy();
  }
});

watch(
  () => props.modelValue,
  newVal => {
    if (editor.value && newVal !== editor.value.getValue()) {
      editor.value.setValue(newVal, -1);
    }
  }
);

watch(
  () => props.mode,
  newMode => {
    if (editor.value) {
      editor.value.getSession().setMode(`ace/mode/${newMode}`);
    }
  }
);
</script>
