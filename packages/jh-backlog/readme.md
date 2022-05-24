# Backlog 待办事项

待办事项展示组件，展示待办提醒。

:::slot preview
<ClientOnly>
  <jh-backlog-demo />
</ClientOnly>
:::

## 基本用法

通用的待办事项场景。

```html
<jh-backlog title="太棒啦！今日任务已经全部完成～" next="看看明天的食谱吧" />
```

## 自定义扩展

```html
<jh-backlog title="太棒啦！今日任务已经全部完成～" next="看看明天的食谱吧">
  <van-button type="info">点击查看明日食谱</van-button>
</jh-backlog>
```

## Slot

| 名称  | 说明               |
| ------ | ------------------ |
| default  | 自定义内容 |
