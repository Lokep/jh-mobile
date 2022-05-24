# Progress 进度条

组件介绍

:::slot preview
<ClientOnly>
  <jh-progress-demo />
</ClientOnly>
:::

## 基本用法

```html
<template>
  <jh-progress :percentage="50" />
</template>
```

## 线条粗细
```html
<template>
  <jh-progress :percentage="30" :strokeWidth="8" />
</template>
```

## 样式定制

```html
<template>
  <jh-progress 
    :percentage="30" 
    :borderRadius="4" 
    color="red" 
    trackColor="green" 
  />
</template>
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| borderRadius | 圆角 | Number | - | 6 |
| percentage | 进度条百分比 | Number | - | 20 |
| strokeWidth | 进度条粗线 | Number | - | 12 |
| color | 进度条背景色 | String | - | #FF9F40 |
| trackColor | 轨道背景色 | String | - | #ffffff |
