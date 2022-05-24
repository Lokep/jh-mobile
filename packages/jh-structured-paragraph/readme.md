# Structured Paragraph 结构化段落

用于结构化段落展示，如症状解析等。

:::slot preview
<ClientOnly>
  <jh-structured-paragraph-demo />
</ClientOnly>
:::

## 基本用法

```html
<template>
  <jh-structured-paragraph title="粉刺痤疮">
    <div class="paragraph">
      <p class="paragraph-item">发生原因</p>
      <p>
        症状说明症状说明症状说明症状说明症状说明症状说明症状说明
        症状说明症状说明症状说明明症状说明症状说明明症状说明症状说明
      </p>
    </div>
    <div class="paragraph">
      <p class="paragraph-item">处理</p>
      <p>
        症状说明症状说明症状说明症状说明症状说明症状说明症状说明
        症状说明症状说明症状说明明症状说明症状说明明症状说明症状说明
      </p>
    </div>
  </jh-structured-paragraph>
</template>
```

## 自定义扩展

```html
<template>
  <jh-structured-paragraph title="粉刺痤疮">
    <div class="paragraph-hd" slot="header">
      <span>查看更多</span>
      <van-icon name="arrow" />
    </div>
    <div class="paragraph">
      <p class="paragraph-item">发生原因</p>
      <p>
        症状说明症状说明症状说明症状说明症状说明症状说明症状说明
        症状说明症状说明症状说明明症状说明症状说明明症状说明症状说明
      </p>
    </div>
    <div class="paragraph-ft" slot="extra">
      <van-button type="primary" block>扩展操作</van-button>
    </div>
  </jh-structured-paragraph>
</template>
```

## Attributes

| 参数  | 说明   | 类型   | 可选值 | 默认值 |
| ----- | ------ | ------ | ------ | ------ |
| title | 主标题 | string | -      | -      |

## Slot

| 名称    | 说明                                                |
| ------- | --------------------------------------------------- |
| header  | 头部扩展                                            |
| default | 自定义内容，传入自定义插槽时，sustain 和 total 无效 |
| extra   | 自定义底部额外区域                                  |
