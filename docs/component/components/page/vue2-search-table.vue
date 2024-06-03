<template>
  <div>
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
          :size="'mini'"
        >搜索</el-button
        >
        <el-button @click="handleReset" icon="el-icon-delete" :size="'mini'"
        >清空</el-button
        >
      </el-form-item>
    </el-form>
    <el-table
      v-loading="tableLoading"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        :formatter="(row, column, cellValue) => {
          return cellValue
        }"
      >
      </el-table-column>
      <el-table-column
        prop="custom"
        label="自定义">
        <template slot-scope="scope">
          <div>
            {{ scope.row.custom }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="remark1"
        label="备注1"
        show-overflow-tooltip
        width="300">
      </el-table-column>
      <el-table-column
        prop="remark2"
        label="备注2"
      >
        <template slot-scope="scope">
          <div>
            <span v-if="scope.row.remark.length < 38">{{ scope.row.remark }}</span>
            <el-tooltip class="item" effect="dark" :content="scope.row.remark" placement="top" v-else>
              <span>{{ scope.row.remark.slice(0, 38) + '...' }}</span>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleDetail(scope.row)" type="text" size="small">详情</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="text-align: right; margin-top: 15px;"
      :current-page="page.currentPage"
      :page-sizes="[10, 20, 30, 40, 50, 100]"
      :page-size="page.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
      @size-change="sizeChange"
      @current-change="currentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'xxxx',
  data() {
    return {
      search: {
        aaa: undefined,
        bbb: undefined,
        ccc: undefined,
        ddd: undefined,
      },
      tableLoading: false,
      tableData: [],
      page: {
        total: 0, // 总页数
        currentPage: 1, // 当前页数
        pageSize: 20, // 每页显示多少条
      },
    }
  },
  created() {
    this.fetchList();
  },
  methods: {
    async fetchList() {
      try {
        const r = await new Promise(resolve => {
          setTimeout(() => {
            resolve({
              code: 0,
              data: {
                list: [
                  { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles',},
                  { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles',},
                  { date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles',},
                ],
                total: 9999
              },
              message: '成功',
            })
          }, 500)
        })
        this.page.total = r.data.total;
        this.tableData = r.data.list || [];
      } catch (error) {
        console.log(error)
      } finally {
        this.tableLoading = false
      }
    },
    handleSearch() {
      this.page.currentPage = 1;
      this.fetchList();
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
    sizeChange(value) {
      this.page.currentPage = 1;
      this.page.pageSize = value;
      this.fetchList();
    },
    currentChange(value) {
      this.page.currentPage = value;
      this.fetchList();
    },
    handleDetail(row) {
      console.log(row)
    }
  },
};
</script>

<style scoped lang="scss">

</style>
