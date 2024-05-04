<template lang="pug">
el-button(type='primary') 主要按钮
el-popconfirm(title='您确定要删除吗?')
  template(#reference)
    el-button(type='danger') 删除
</template>
