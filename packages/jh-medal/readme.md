# Medal 勋章

勋章展示。

:::slot preview
<ClientOnly>
  <jh-medal-demo />
</ClientOnly>
:::

## 基本用法

配置 `title` 和 `level` 展示不同勋章。`title` 代表业务类型，level 代表层级，包括四种类型：`star`、`model`、`expert` 和 `newbie`。

```html
<template>
  <div>
    <jh-medal title="称重之星" level="star" sustain="23" total="50" />
    <jh-medal title="称重标兵" level="model" sustain="23" total="50" />
    <jh-medal title="称重能手" level="expert" sustain="23" total="50" />
    <jh-medal title="称重新手" level="newbie" sustain="23" total="50" />
  </div>
</template>
```

## 自定义扩展业务类型

传入不同的业务类型。

```html
<template>
  <div>
    <jh-medal title="称重之星" level="star" sustain="23" total="50" />
    <jh-medal title="扎针标兵" level="model" sustain="23" total="50" />
    <jh-medal title="运动能手" level="expert" sustain="23" total="50" />
    <jh-medal title="饮食新手" level="newbie" sustain="23" total="50" />
  </div>
</template>
```

## 自定义扩展内容

自定义内容。

```html
<template>
  <jh-medal title="称重" level="star">
    <p>自定义内容</p>
    <p>自定义内容</p>
    <p>自定义内容</p>
  </jh-medal>
</template>
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| level | 勋章层级 | string | `star` 星级 / `model` 标兵 / `expert` 能手 / `newbie` 新手 | `newbie` |
| title | 业务类型 | string | - | - |
| sustain | 连续天数 | string/number | - | - |
| total | 总数 | string/number | - | - |

## Slot

| 名称  | 说明               |
| ------ | ------------------ |
| default  | 自定义内容，传入自定义插槽时，sustain 和 total 无效 |
