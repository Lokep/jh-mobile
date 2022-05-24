# Empty 空状态

空状态时的占位提示。

:::slot preview
<ClientOnly>
  <jh-empty-demo />
</ClientOnly>
:::

## 基本用法

```html
<template>
  <jh-empty></jh-empty>
</template>
```

## 使用场景


```html
<template>
  <jh-empty scene="offline" description="网络走丢了..."></jh-empty>
</template>
```

## 自定义图片

```html
<template>
  <jh-empty image="https://iknow-pic.cdn.bcebos.com/b03533fa828ba61e68571c505134970a304e5910"></jh-empty>
</template>
```

## 底部内容

```html
<template>
  <jh-empty>
    <template slot="description">
      <p>
        <van-button size="small" type="primary" href="https://www.baidu.com">百度一下</van-button>
      </p>
    </template>
  </jh-empty>
</template>
```



## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| scene | 场景，提供了收藏，聊天，断网，通用 四种场景 | String | `collection`, `offline`, `chat`, `primary`, `plan`,`data`, `error`, `record` | `primary` |
| image | 当以上场景无法满足时，可自定义图片，优先级比scene高 | String | - | - |
| description | 描述性文字，非必填 | String | - | 暂无数据 |

## Slot

| 名称  | 说明               |
| ------ | ------------------ |
| img | 当图片样式不满足需求时，可以通过插槽进行个性化开发 |
| description | 当描述文字样式、组件结构不满足需求时，可以通过插槽进行个性化开发 |
