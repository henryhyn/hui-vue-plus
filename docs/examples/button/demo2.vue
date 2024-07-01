<template lang="pug">
el-form(label-position='top')
  el-form-item(label='默认按钮')
    el-button Default
    el-button(type='primary') Primary
    el-button(type='success') Success
    el-button(type='info') Info
    el-button(type='warning') Warning
    el-button(type='danger') Danger
  el-form-item(label='朴素按钮 (plain)')
    el-button(plain) Plain
    el-button(plain type='primary') Primary
    el-button(plain type='success') Success
    el-button(plain type='info') Info
    el-button(plain type='warning') Warning
    el-button(plain type='danger') Danger
  el-form-item(label='链接按钮 (link)')
    el-button(link) Link
    el-button(link type='primary') Primary
    el-button(link type='success') Success
    el-button(link type='info') Info
    el-button(link type='warning') Warning
    el-button(link type='danger') Danger
  el-form-item(label='文字按钮 (text)')
    el-button(text) Text
    el-button(text type='primary') Primary
    el-button(text type='success') Success
    el-button(text type='info') Info
    el-button(text type='warning') Warning
    el-button(text type='danger') Danger
  el-form-item(label='文字按钮, 带背景 (text bg)')
    el-button(text bg) Text Background
    el-button(text bg type='primary') Primary
    el-button(text bg type='success') Success
    el-button(text bg type='info') Info
    el-button(text bg type='warning') Warning
    el-button(text bg type='danger') Danger
  el-form-item(label='圆角按钮 (round)')
    el-button(round) Round
    el-button(round type='primary') Primary
    el-button(round type='success') Success
    el-button(round type='info') Info
    el-button(round type='warning') Warning
    el-button(round type='danger') Danger
  el-form-item(label='圆形按钮 (circle)')
    el-button(circle icon='search')
    el-button(circle icon='edit' type='primary')
    el-button(circle icon='check' type='success')
    el-button(circle icon='message' type='info')
    el-button(circle icon='star' type='warning')
    el-button(circle icon='delete' type='danger')
</template>
