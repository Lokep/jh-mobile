# NoticeBar 通知栏

组件介绍
用于广播消息的展示

:::slot preview
<ClientOnly>
  <jh-notice-bar-demo />
</ClientOnly>
:::

## 基本用法

```html
<template>
  <jh-notice-bar text="今日flag：没有bug" />
  <jh-notice-bar text="今日flag：没有bug" closable />
  <jh-notice-bar v-model="show" text="今日flag：没有bug, 没有蛀牙, 一库一库" closable ellipsis />
</template>
```

## 主题色

```html
<template>
  <jh-notice-bar text="今日flag：没有bug" type="primary" />
  <jh-notice-bar text="今日flag：没有bug" type="success" />
  <jh-notice-bar text="今日flag：没有bug" type="danger" />
  <jh-notice-bar text="今日flag：没有bug" type="warning" />
  <jh-notice-bar text="今日flag：没有bug" closable color="gold" />
  <jh-notice-bar text="今日flag：没有bug" backgroundColor="pink" />
</template>
```

## 内容滚动

```html
<template>
  <jh-notice-bar text="今日flag：没有bug" type="primary" animation />
  <jh-notice-bar text="今日flag：没有bug" type="success" animation />
  <jh-notice-bar text="今日flag：没有bug" type="danger" animation />
  <jh-notice-bar text="今日flag：没有bug" type="warning" animation />
</template>
```

## 插槽

```html
<template>
</template>
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 类型也就是组件主题色 | `string` | `primary` , `success` , `warning` , `danger` | `primary` |
| text | 组件要展示的文字 | `string` | - | - |
| animation | 是否开启动画 | `Boolean` | `true` | `false` |
| ellipsis | 文字过长是否需要隐藏 | `Boolean` | `false` | `true` |
| closable | 是否需要展示关闭按钮 | `Boolean` | `false` | `true` |
| show | 用于控制组件的隐藏与展示 | `Boolean` | `false` | `true` |
| color | 文字与图标颜色 | - | - | - |
| backgroundColor | 背景颜色 | - | - | - |

## Slot

| 名称  | 说明               |
| ------ | ------------------ |
| default | 文字部分插槽 |
| prefix | 组件左侧图标插槽 |
| suffix | 组件右侧插槽 |

## Events

| 事件名称 | 说明 | 回调参数 |
| ---  | --- | --- |
| close | 当closable为true时，点击关闭按钮触发 | false |
