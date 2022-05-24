# Tag 标签

该组件一般用于标记和选择，有如下特点：

- `mode` 参数可以设置 3 种模式，`dark`(深色背景)、`light`(浅色背景)、`plain`(白色背景)
- `shape` 参数可以设置多种形状，`circle`（两边半圆形）, `square`（方形，带圆角），`circleLeft`（左边半圆），`circleRight`（右边半圆）
- `type` 参数可以设置5种主题，`primary`，`success`，`warning`，`error`，`info`

:::slot preview
<ClientOnly>
  <jh-tag-demo />
</ClientOnly>
:::

## 基本用法

通过 `type` 参数设置主题类型，默认为 `primary`。

`text` 设置标签内容。

```html
<jh-tag text="雪月夜" type="success" />
```

## 设置标签的类型

通过设置mode参数，可以设置标签的类型，dark(深色背景)、light(浅色背景)、plain(白色背景)。

```html
<jh-tag text="一丘之貉" mode="dark" />
<jh-tag text="沆瀣一气" mode="light" />
<jh-tag text="狼狈为奸" mode="plain" />
```

## 设置标签的形状

通过shape参数，可以设置标签的形状，默认是square（方形，带圆角），可选：circle（两边半圆形）, circleLeft（左边半圆），circleRight（右边半圆）。

```html
<jh-tag text="主谓宾" shape="circle" />
<jh-tag text="定状补" shape="circleLeft" />
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 主题类型 | String | primary | success / info / warning / error |
| size | 标签大小 | String | default | mini |
| shape | 标签形状 | String | square | circle / circleLeft / circleRight |
| text | 标签的文字内容 | String | - | - |
| bg-color | 自定义标签的背景颜色 | String | - | - |
| color | 文字的颜色 | String | - | - |
| border-color | 标签的边框颜色 | String | - | - |
| close-color | 关闭按钮的颜色 | String | - | - |
| index | 点击标签时，会通过click事件返回该值 | String | Number | - | - |
| mode | 模式选择，见上方说明 | String | light | dark / plain |
| closeable | 是否可关闭，设置为true，文字右边会出现一个关闭图标 | Boolean | false | true |
| show | 标签显示与否 | Boolean | true | false |

## Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击标签触发 | index: 传递的index参数值 | - |
