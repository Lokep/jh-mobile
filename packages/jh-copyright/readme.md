# Copyright 组件

通用 copyright 组件，统一全部的 copyright 展示。

:::slot preview
<ClientOnly>
  <jh-copyright-demo />
</ClientOnly>
:::

## 基本用法

使用所有 copyright 展示的场景。

```html
<template>
  <jh-copyright />
</template>
```

## 自定义扩展

```html
<template>
  <jh-copyright>
    <van-row class="custom-copyright" :gutter="20">
      <van-col :span="8">
        <p>内容板块1</p>
        <p>内容板块1</p>
        <p>内容板块1</p>
      </van-col>
      <van-col :span="8">
        <p>内容板块2</p>
        <p>内容板块2</p>
        <p>内容板块2</p>
      </van-col>
      <van-col :span="8">
        <p>内容板块3</p>
        <p>内容板块3</p>
        <p>内容板块3</p>
      </van-col>
    </van-row>
  </jh-copyright>
</template>
<style lang="scss" scoped>
.custom-copyright {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
</style>
```

## Slot

| 名称  | 说明               |
| ------ | ------------------ |
| default  | 自定义内容 |
