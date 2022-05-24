# ArticleCard 推荐阅读主题

用缩略图、文本和状态图标的形式展示推荐主题。

:::slot preview
<ClientOnly>
  <jh-article-card-demo />
</ClientOnly>
:::

## 基本用法

通过 `title` 设置推荐主题，扩展头部标签。

```html
<template>
  <jh-article-card title="小儿包皮术前应该要注意的五个事项">
    <div class="article-title" slot="header">今日问答</div>
  </jh-article-card>
</template>
```

## 标题行数

```html
<template>
  <jh-article-card title="小儿包皮术前应该要注意的五个事项" rows="1">
    <div class="article-title" slot="header">今日问答</div>
  </jh-article-card>
</template>
```

## 右侧图标扩展

```html
<template>
  <jh-article-card :title="title">
    <img class="article-cover" :src="cover" :alt="title" slot="header"/>
    <p>共计 8 个视频</p>
    <img class="article-icon" :src="icon" slot="footer"/>
  </jh-article-card>
</template>
<script>
export default {
  data () {
    return {
      cover: "https://resource.lanniuh.com/Shuliao/bg_shuliao.png",
      title: "妈妈应该怎么清洗宝宝的伤口以及该注意的事项",
      icon: "https://resource.lanniuh.com/Remedy/arrow.png",
    }
  }
}
</script>
```

## 状态切换

通过 `isRead` 设置为已读状态。

```html
<template>
  <jh-article-card :title="title" isRead>
    <img class="article-cover-02" :src="cover" :alt="title" slot="header"/>
    <jh-icon name="success" color="green" size="28" slot="footer"/>
  </jh-article-card>
</template>
```

## 反转展示

通过 `reverse` 设置消息反转，内容居左，缩略图居右。

```html
<template>
  <jh-article-card :title="title" reverse>
    <img class="article-cover-02" :src="cover" :alt="title" slot="header" />
  </jh-article-card>
</template>
```

## 设置边框

通过 `border` 设置边框。

```html
<template>
  <jh-article-card :title="title" border>
    <img class="article-cover-02" :src="cover" :alt="title" slot="header" />
  </jh-article-card>
</template>
```

## 设置阴影

通过 `shadow` 设置阴影。

```html
<template>
  <jh-article-card :title="title" shadow>
    <img class="article-cover-02" :src="cover" :alt="title" slot="header" />
  </jh-article-card>
</template>
```

## 多条信息组合

通过 `shape` 设置多条信息组合展示。

```html
<template>
  <div>
    <jh-article-card :title="title" shape>
      <img class="article-cover-02" :src="cover" :alt="title" slot="header" />
    </jh-article-card>
    <jh-article-card :title="title" shape>
      <img class="article-cover-02" :src="cover" :alt="title" slot="header" />
    </jh-article-card>
  </div>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title | 设置推荐主题的标题 | string | - | - |
| isRead | 设置已读状态 | boolean | true/false | false |
| reverse | 设置展示顺序反转 | boolean | true/false | false |
| shape | 设置多条信息组合模式 | boolean | true/false | false |
| border | 设置边框 | boolean | true/false | false |
| shadow | 设置阴影 | boolean | true/false | false |

## Slot

| 名称  | 说明               |
| ------ | ------------------ |
| default  | 自定义主题内容 |
| header   | 自定义头部扩展内容，文字或缩略 |
| footer   | 自定义尾部展示内容 |
