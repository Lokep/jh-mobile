# Badge 角标

组件介绍

:::slot preview
<ClientOnly>
  <jh-badge-demo />
</ClientOnly>
:::

## 基本用法

```html
<template>
  <jh-badge content="5" />
  <jh-badge content="10" />
  <jh-badge content="Hot" />
  <jh-badge content="待回复"></jh-badge>
</template>
```

## 最大长度

```html
<template>
  <jh-badge content="好好学习天天向上" :maxLength="5" color="#FF9F40" />
</template>
```

## 自定义颜色

```html
<template>
  <jh-badge content="Hot" color="red" />
  <jh-badge content="待回复" color="#FF9F40"></jh-badge>
</template>
```

## 角标形状

```html
<template>

  <jh-badge position="right" content="奥力给">
    <jh-avatar shape="square" />
  </jh-badge>

  <jh-badge position="right" content="奥力给" shape="bubble">
    <jh-avatar shape="square" />
  </jh-badge>
</template>
```

## 角标位置

```html
<template>

  <jh-badge position="right" content="1">
    <jh-avatar shape="square" />
  </jh-badge>

  <jh-badge position="left" content="1">
    <jh-avatar shape="square" />
  </jh-badge>

</template>
```

## 自定义角标内容

```html
<template>
  <jh-badge position="right">
    <jh-icon slot="content" name="F-duigou" color="#fff" size="8" />
    <jh-article-card title="杭州健海科技有限公司" />
  </jh-badge>
</template>
```

## 自定义样式

```html
<template>
  <jh-badge 
    position="right" 
    content="奥力给" 
    shape="bubble" 
    :customStyle="{
      transform: 'translate(0, -50%)'
    }">
    <jh-article-card title="杭州健海科技有限公司" />
  </jh-badge>
</template>
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| color | 角标背景色 | String | - | - |
| position | 角标位置 | String | `left` , `right` | `right` |
| content | 角标文字内容 | String | - | - |
| maxLength | 角标最多容纳字数 | Number | - | 4 |
| shape | 角标形状 | String | `round` , `bubble` | `round` |
| customStyle | 自定义样式 | Object | - | - |

## Slot

| 名称  | 说明               |
| ------ | ------------------ |
| - | 需要使用badge的组件 |
| content | 自定义badge内容|
