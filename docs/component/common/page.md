<script setup>
import Vue3Search from '../components/page/vue3-search.vue';
import Vue3SearchTable from '../components/page/vue3-search-table.vue';
</script>

# 页面相关

页面相关的组件、布局，比如条件搜素部分、整体页面布局等

## 条件搜素部分

通过form表单进行条件收索

<Vue3Search />

::: code-group

<<< ../components/page/vue3-search.vue [vue3]

<<< ../components/page/vue2-search.vue [vue2]

:::

## 整体页面

包括查询部分、表格部分等

<Vue3SearchTable />

::: code-group

<<< ../components/page/vue3-search-table.vue [vue3]

<<< ../components/page/vue2-search-table.vue [vue2]

:::