# Divider

组件介绍

:::slot preview
<ClientOnly>
  <jh-divider-demo />
</ClientOnly>
:::

## 基本用法

```html
<template>
  <jh-divider></jh-divider>
  <jh-divider >分割线</jh-divider>  
</template>
```

## 虚线

```html
<template>
  <jh-divider dashed></jh-divider>
  <jh-divider dashed>分割线</jh-divider>  
</template>
```

## 纯文本
```html
<template>
  <jh-divider pure>分割线</jh-divider>  
</template>
```

## 文本位置

> 文本位置默认在中间

```html
  <jh-divider content-position="left">分割线</jh-divider>  

  <jh-divider content-position="center">分割线</jh-divider>  

  <jh-divider content-position="right">分割线</jh-divider>  
```


## 自定义属性
```html
  <jh-divider 
    content-position="left"
    :custom-style="{
      'border-color': 'pink
    }">
    分割线
  </jh-divider>  
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| pure | 是否为纯文本，纯文本不渲染线条 | Boolean | - | false |
| size | 分割线的大小 | String | `small`, `large`  | `large` |
| dashed | 是否为虚线 | Boolean | - | false |
| contentPosition | 分割线的位置 | String | `left`, `right`, `center` | `center` |
| customStyle | 分割线的自定义样式 | Object | - | - |

## Slot

| 名称  | 说明               |
| ------ | ------------------ |
| - | 文字部分插槽 |
