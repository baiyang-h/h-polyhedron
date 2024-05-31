<template>
  <el-dialog
    :modal="false"
    :close-on-click-modal="false"
    title="标题"
    :visible.sync="visible"
    @close="close"
  >
    <el-form
      class="form"
      ref="form"
      :model="form"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item label="xxxxx：">
        内容
      </el-form-item>
      <el-form-item label="xxxxx：" prop="aaa">
        <el-input v-model="form.aaa"></el-input>
      </el-form-item>
      <el-form-item label="xxxxx：" prop="bbb">
        <el-select v-model="form.bbb" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">确定</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import {deepClone} from "@/util/util";
export default {
  name: "EditAccountDialog",
  data() {
    return {
      visible:false,
      detail:{},
      form: {
        aaa: '',
        bbb: ''
      },
      rules: {
        aaa: [
          { required: true, message: '请输入', trigger: 'blur' },
        ],
      },
      options: []
    }
  },
  methods: {
    open(detail) {
      console.log(detail)
      this.visible = true
      this.detail = deepClone(detail);
    },
    // 取消
    close() {
      this.visible = false
      this.form = {
        aaa: '',
        bbb: ''
      }
      this.$refs['form'].resetFields();
    },
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          const params = {}
          this.$emit('onOk')
          this.close()
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    cancel() {
      this.close()
      this.$emit('onCancel')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
