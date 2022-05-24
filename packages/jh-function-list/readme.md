# Function List 功能列表

功能列表展示。

:::slot preview
<ClientOnly>
  <jh-function-list-demo />
</ClientOnly>
:::

## 基本用法

包含功能图片和名称。

```html
<template>
  <jh-function-list center :lists="lists01" />
</template>
<script>
export default {
  data () {
    return {
      lists01: [
        {
          src: 'https://resource.lanniuh.com/just-fe/mobile/function-report.png',
          name: '报告查询',
        },
        {
          src: 'https://resource.lanniuh.com/just-fe/mobile/function-prescription.png',
          name: '我的处方',
        },
      ],
    };
  },
}
</script>
```

## 图片扩展

可配置定义更丰富的内容展示。

```html
<template>
  <jh-function-list
    start
    :lists="lists"
    :icon-style="{ width: '22px', height: '22px' }"
    :text-style="{ fontSize: '12px' }"
  />
</template>
<script>
export default {
  data () {
    return {
      lists02: [
        {
          src: 'https://resource.lanniuh.com/just-fe/mobile/function-report.png',
          name: '报告查询01',
        },
        {
          src: 'https://resource.lanniuh.com/just-fe/mobile/function-prescription.png',
          name: '我的处方01',
        },
        {
          src: 'https://resource.lanniuh.com/just-fe/mobile/function-report.png',
          name: '报告查询02',
        },
        {
          src: 'https://resource.lanniuh.com/just-fe/mobile/function-prescription.png',
          name: '我的处方02',
        },
      ],
    };
  },
}
</script>
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| center | 居中展示 | boolean | - | false |
| start | 从左往右展示 | boolean | - | false |
| lists | 功能列表，默认功能子项为 `{src, name}` | array | - | [] |
| iconStyle | 功能图标样式扩展 | object | - | {} |
| textStyle | 功能名称样式扩展 | object | - | {} |
