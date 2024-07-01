<template lang="pug">
el-form(label-position='top')
  el-form-item(label='删除按钮')
    el-popconfirm(title='您确定要删除吗?')
      template(#reference)
        el-button(type='danger' icon='delete') 删除
  el-form-item(label='禁用状态')
    el-button(type='danger' icon='delete' disabled) 删除
  el-form-item(label='加载状态')
    el-button(type='primary' loading) Loading
  el-form-item(label='按钮组')
    el-button-group
      el-button(icon='arrow-left') 上一页
      el-button 下一页
        el-icon.el-icon--right: arrow-right
</template>
