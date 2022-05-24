# Timeline 时间轴

组件介绍

:::slot preview
<ClientOnly>
  <jh-timeline-demo />
</ClientOnly>
:::

## 基本用法


```html
<template>
  <div>
    <jh-timeline>
      <jh-timeline-item node="12月26日" v-for="item in 10" :key="item">
        <div class="demo-item">
          <jh-article-card title="最近右腿晚上睡觉经常抽筋，伤口..." />
        </div>

        <div class="demo-item">
          <jh-article-card title="最近右腿晚上睡觉经常抽筋，伤口..." />
        </div>
      </jh-timeline-item>
    </jh-timeline>
  </div>
</template>

<style lang="scss" scoped>
// style
.demo {
  &-item {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
```

## Attributes

### TimelineItem

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| node | 时间轴上的时间节点 | String | - | - |

## Slot

| 名称  | 说明               |
| ------ | ------------------ |
| - | - |
