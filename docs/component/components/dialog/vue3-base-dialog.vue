<template>
  <el-dialog
    title="标题"
    :close-on-click-modal="false"
    width="30%"
    v-model="dialogVisible"
    @close="close"
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="100"
    >
      <el-form-item label="xxx" prop="aa">
        <el-input v-model="form.aa" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="xxx" prop="bb">
        <el-select v-model="form.bb" placeholder="请选择" >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleOk">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue'

const dialogVisible = ref(false)
const formRef = ref()
const form = reactive({
  aa: undefined,
  bb: []
})
const rules = reactive({
  aa: [
    { required: true, message: '请输入', trigger: 'blur' },
  ],
})
const options = []

const emit = defineEmits(['onCancel', 'onOk'])
defineExpose({
  open
})

function open(params) {
  console.log(params)
  dialogVisible.value = true
}

function close() {
  if (!formRef.value) return
  formRef.value.resetFields()
  dialogVisible.value = false
  emit("onCancel")
}

// 取消
const handleCancel = () => {
  close()
}
// 确定
const handleOk = async () => {
  if (!formRef.value) return
  await formRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      close()
      emit("onOk")
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<style scoped lang="scss">

</style>
