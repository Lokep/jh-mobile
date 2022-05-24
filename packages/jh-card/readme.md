# Card 卡片

将信息聚合在卡片容器中展示。

:::slot preview
<ClientOnly>
  <jh-card-demo />
</ClientOnly>
:::

## 基本用法

包含标题和内容。

```html
<jh-card shadow>
  <div class="jh-card-header" slot="header">
    <span class="jh-card-title">今日最新记录</span>
    <span>2021-04-12 12:23</span>
  </div>
  <div class="jh-card-topic">
    <span>肩关节前屈角度</span>
    <em>46°</em>
  </div>
</jh-card>
```

## 带图片

可配置定义更丰富的内容展示。

```html
<template>
  <jh-card shadow>
    <div class="jh-card-header" slot="header">
      <span class="jh-card-title">采集指导</span>
    </div>
    <div class="jh-card-article">
      <img class="jh-card-thumb" src="https://resource.lanniuh.com/just-fe/mobile/jh-empty-chat.png" alt="">
      <div class="jh-card-content">
        <div class="jh-card-box" :class="{ 'jh-card-unfold': !isOpen }">
          <p>
            指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容
            指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容
            内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容
          </p>
        </div>
        <div class="jh-btn jh-btn-unfold" @click="toggle">
          点击展开
          <van-icon name="arrow-up" v-if="isOpen" />
          <van-icon name="arrow-down" v-else />
        </div>
      </div>
    </div>
  </jh-card>
</template>
<script>
export default {
  data () {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggle(input) {
      const { isOpen } = this;

      this.isOpen = !isOpen;
    },
  },
}
</script>
```

## 图文列表

可配置图文列表的数据展示。

```html
<template>
  <jh-card shadow>
    <div class="jh-card-header" slot="header">
      <span class="jh-card-title">采集指导</span>
    </div>
    <div class="jh-list">
      <div class="jh-list-item" v-for="(item, idx) in list" :key="item.time+idx">
        <div class="jh-item-bd">
          <h4 class="jh-item-title">{{item.time}}</h4>
          <div class="jh-item-content">
            <span class="jh-tags">患肢前屈高度：{{item.height}}</span>
            <span class="jh-tags">患肢角度：{{item.angle}}</span>
          </div>
        </div>
        <div class="jh-item-ft">
          <img :src="item.icon" alt="">
        </div>
      </div>
    </div>
  </jh-card>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          time: '2021-03-19 12:23:34',
          height: '41cm',
          angle: '70°',
          icon: 'https://resource.lanniuh.com/just-fe/mobile/icon01.png',
        },
        {
          time: '2021-03-19 12:23:34',
          height: '41cm',
          angle: '70°',
          icon: 'https://resource.lanniuh.com/just-fe/mobile/icon01.png',
        },
        {
          time: '2021-03-19 12:23:34',
          height: '41cm',
          angle: '70°',
          icon: 'https://resource.lanniuh.com/just-fe/mobile/icon02.png',
        },
      ],
    };
  },
}
</script>
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| shadow | 设置阴影 | boolean | - | false |

## Slot

| 名称  | 说明 |
| --- | --- |
| header | 自定义头部 |
| default | 自定义内容 |
