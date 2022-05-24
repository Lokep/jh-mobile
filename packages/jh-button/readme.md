# Button 按钮

组件介绍

该组件为按钮组件，需要注意的是该组件并没有接入 `openType` 的能力，所以该组件不具备 `分享` , `获取用户信息` 等能力，

:::slot preview
<ClientOnly>
  <jh-button-demo />
</ClientOnly>
:::

## 基本用法

```html
<template>
  <jh-button>按钮</jh-button>
  <jh-button type="warning">按钮</jh-button>
  <jh-button type="danger">按钮</jh-button>
  <jh-button type="success">按钮</jh-button>
</template>
```

## 朴素按钮

```html
<template>
  <jh-button plain>按钮</jh-button>
  <jh-button plain type="warning">按钮</jh-button>
  <jh-button plain type="danger">按钮</jh-button>
  <jh-button plain type="success">按钮</jh-button>
</template>
```

## 禁用状态

```html
<template>
  <jh-button disabled>按钮</jh-button>
  <jh-button plain disabled>按钮</jh-button>
</template>
```

## 按钮尺寸

```html
<template>
  <jh-button size="small">按钮</jh-button>
  <jh-button size="normal">按钮</jh-button>
</template>
```

## 块级元素

```html
<template>
  <jh-button block size="small">按钮</jh-button>

  <jh-button block size="normal">按钮</jh-button>
</template>
```

## 按钮形状

```html
<template>
  <jh-button block round size="small">按钮</jh-button>

  <jh-button block round size="normal">按钮</jh-button>
</template>
```

## 图标

```html
<template>
  <jh-button size="small">
    <jh-icon name="L-tianjia" slot="prefix" size="16" color="#fff" />
    按钮
  </jh-button>
  <jh-button type="danger" size="small">
    <jh-icon name="L-tianjia" slot="prefix" size="16" color="#fff" />
    按钮
  </jh-button>
  <jh-button type="success" size="small">
    <jh-icon name="L-tianjia" slot="prefix" size="16" color="#fff" />
    按钮
  </jh-button>
  <br>
  <br>
  <jh-button size="normal">
    按钮
    <jh-icon name="L-tianjia" slot="suffix" size="16" color="#fff" />
  </jh-button>

  <jh-button type="danger" size="normal">
    按钮
    <jh-icon name="L-tianjia" slot="suffix" size="16" color="#fff" />
  </jh-button>

  <jh-button type="success" size="normal">
    按钮
    <jh-icon name="L-tianjia" slot="suffix" size="16" color="#fff" />
  </jh-button>
</template>
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 按钮类型 | String | `primary`, `danger`, `success`, `warning` | `primary` |
| plain | 是否为朴素按钮 | Boolean | - | `false` |
| disabled | 是否禁用 | Boolean | - | `false`|
| round | 按钮形状是否为圆形 | Boolean | - | `false` |
| size | 按钮尺寸 | String | `normal`, `small` | `normal` |
| block | 是否为块级按钮 | Boolean | - | `false` |

## Slot

| 名称  | 说明               |
| ------ | ------------------ |
| default | 默认插槽，用于文字展示等 |
| prefix | 展示在按钮内容左侧 |
| suffix | 展示在按钮内容右侧 |

## Events

| 事件名称 | 说明 | 回调参数 |
| ---  | --- | --- |
| tap | 点击事件 | event |
