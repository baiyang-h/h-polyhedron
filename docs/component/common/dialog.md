<script setup>
import Vue3Example from '../components/dialog/vue3-example.vue';
</script>

# Dialog 弹框

常用的通用性弹框，使用非受控组件的方法调用，通过`ref`的方式执行组件内部的方法，可在方法中直接传递参数给弹框，和外部隔离不受影响，完全独立

`dialogRef.value.open(params)`的方式来显示弹框，并传入参数

## 案例

<Vue3Example />
<<< ../components/dialog/vue3-example.vue

## 弹框组件

::: code-group

<<< ../components/dialog/vue3-base-dialog.vue [vue3]

<<< ../components/dialog/vue2-base-dialog.vue [vue2]

:::

[//]: # (:::demo)

[//]: # (<<< /src/examples/dialog/base-dialog.vue)

[//]: # (:::)