<template>
  <el-form
    ref="search"
    :model="search"
    :inline="true"
    class="search-form"
  >
    <el-form-item label="aaa" prop="aaa">
      <el-input v-model.trim="search.aaa"></el-input>
    </el-form-item>
    <el-form-item label="bbb" prop="bbb">
      <el-input v-model.trim="search.bbb"></el-input>
    </el-form-item>
    <el-form-item label="ccc" prop="ccc">
      <el-select v-model.trim="search.ccc" clearable placeholder="请选择">
        <el-option
          v-for="item in [{label: 'a', value: 1}, {label: 'b', value: 2}]"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="ddd">
      <el-date-picker
        v-model="search.ddd"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="handleSearch"
        icon="el-icon-search"
        size="mini"
      >搜索</el-button
      >
      <el-button @click="handleReset" icon="el-icon-delete" size="mini"
      >清空</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      search: {
        aaa: undefined,
        bbb: undefined,
        ccc: undefined,
        ddd: undefined,
      },
    }
  },
  methods: {
    handleSearch() {
      console.log(this.search)
    },
    // 清空
    handleReset() {
      this.search = {
        aaa: undefined,
        bbb: undefined,
        ccc: undefined,
        ddd: undefined,
      };
      // this.$refs['search'].resetFields();
    },
  },
};
</script>
