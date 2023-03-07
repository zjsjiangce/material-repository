### Select 选择器
#### 基本用法
::: demo
```html
<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: ''
      }
    }
  }
</script>
```
:::
#### Select Attributes
| 参数 | 说明 |	类型 | 可选值 |	默认值 |
| ---- | ---- | ---- | ---- |---- |
| value/v-model | 绑定值 | boolean / string / number | — | — |
| multiple |	是否多选	| boolean |	—	| false |
| disabled |	是否禁用	| boolean |	— | false |
