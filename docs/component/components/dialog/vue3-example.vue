<template>
  <el-button type="primary" @click="handleClick">点击出现弹框</el-button>

  <BaseDialog
    ref="dialogRef"
    @onCancel="handleCancel"
    @onOk="handleOk"
  />
</template>

<script setup>
import { ref } from 'vue'
import BaseDialog from "./vue3-base-dialog.vue";

const dialogRef = ref(null)

const handleClick = () => {
  if(!dialogRef.value) return
  let params = {a: 1}
  dialogRef.value.open(params)
}

const handleCancel = () => {
  console.log('取消')
}

const handleOk = () => {
  console.log('OK')
}
</script>
