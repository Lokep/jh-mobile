# SubjectCard 主题卡片

用卡片形式展示主题数据信息。

:::slot preview
<ClientOnly>
  <jh-subject-card-demo />
</ClientOnly>
:::

## 基本用法

通过 `title`、`units` 和数据，设置卡片的数据展示。

```html
<template>
  <van-row gutter="20">
    <van-col :span="12" v-for="(item, idx) in subjects" :key="item.title">
      <jh-subject-card
        :color="item.color"
        :title="item.title"
        :units="item.units"
        :groups="item.groups"
      />
    </van-col>
  </van-row>
</template>
<script>
export default {
  data () {
    return {
      subjects: [
        {
          title: '康复训练时长',
          units: 'min',
          groups: [
            {
              text: '',
              highlight: true,
              major: 0,
              total: 120,
            },
          ],
        },
        {
          color: '#ABAFFF',
          title: '肩关节前屈角度',
          units: '度',
          groups: [
            {
              text: '较上周',
              highlight: true,
              major: '30',
            },
            {
              text: '最新值',
              major: '87',
            },
          ],
        },
      ],
    };
  },
}
</script>
```

## Attributes

| 参数              | 说明                             | 类型            | 可选值 | 默认值 |
| -----------------| -------------------------------- | --------------- | ------ | ------ |
| color | 标题颜色 | string | - | #31CE8C |
| title | 主题-标题 | string | - | - |
| units | 单位 | string | - | - |
| groups | 主题分组数据 | array | - | - |

## groups 结构说明

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| text | 分组-文案 | string | 可为空 |
| highlight | 高亮展示 | boolean | 默认 false，可为空 |
| color | 高亮颜色 | string | - | #31CE8C |
| major | 分组数据 | string | 主要数据，只展示第一个时，total 可不传 |
| total | 分组数据 | string | - |

标准结构：

```js
[
  {
    title: '康复训练时长',
    units: 'min',
    groups: [
      {
        text: '',
        highlight: true,
        major: 0,
        total: 120,
      },
    ],
  },
  {
    color: '#ABAFFF',
    title: '肩关节前屈角度',
    units: '度',
    groups: [
      {
        text: '较上周',
        highlight: true,
        major: '30',
      },
      {
        text: '最新值',
        major: '87',
      },
    ],
  },
],
```
