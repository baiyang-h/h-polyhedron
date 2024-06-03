<script setup>
import Vue3BaseTable from '../components/table/vue3-base-table.vue';
import Vue3CellInputTable from '../components/table/vue3-cell-input-table.vue'
</script>

# Table 表格

常用的通用性表格。

## 基础表格

基础的表格展示用法。

<Vue3BaseTable />

::: code-group

<<< ../components/table/vue3-base-table.vue [vue3]

<<< ../components/table/vue2-base-table.vue [vue2]

:::

## 单元格可输入表格

对于某项单元格需要修改数据，点击单元格变成 `<el-input>` 表单

<Vue3CellInputTable />

::: code-group

<<< ../components/table/vue3-cell-input-table.vue [vue3]

:::