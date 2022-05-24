# Tab 标签页

选项卡切换组件。

:::slot preview
<ClientOnly>
  <jh-tab-demo />
</ClientOnly>
:::

## 基本用法

`labelList` 要展示的列表。

```html
<template>
  <jh-tab
    :current="current"
    :labelList="labelList"
    @tab-change="tabChange"
    :activeColor="activeColor"
    :color="color"
  />
</template>
<script>
export default {
  data() {
    return {
      current: 1,
      labelList: ['全部', '监测', '运动', '饮食'],
      activeColor: '#d909ff',
      color: 'blue',
    };
  },

  methods: {
    tabChange(e) {
      console.log('e', e);
    },
  },
};
</script>
```

## Attributes

| 参数        | 说明                      | 类型   | 可选值 | 默认值  |
| ----------- | ------------------------- | ------ | ------ | ------- |
| current     | 当前激活项的 index,可不填 | Number | -      | 0       |
| labelList   | tab 列表                  | Array  | -      | []      |
| activeColor | 激活项的颜色              | String | -      | #409eff |
| color       | 未激活项的颜色            | String | -      | #333    |

## Events

| 事件名称  |        说明        |            回调参数 |
| --------- | :----------------: | ------------------: |
| tabChange | tab 点击切换时触发 | 切换后的 tab 的下标 |
