<template>
  <div class="article-card-demo">
    <a class="anchor" href="#基本用法">基本用法</a>
    <jh-article-card title="小儿包皮术前应该要注意的五个事项">
      <div class="article-title" slot="header">今日问答</div>
    </jh-article-card>

    <jh-divider />

    <a class="anchor" href="#标题行数">标题行数</a>
    <jh-article-card title="小儿包皮术前应该要注意的五个事项" :rows="1">
      <div class="article-title" slot="header">今日问答</div>
    </jh-article-card>

    <jh-divider />

    <a class="anchor" href="#右侧图标扩展">右侧图标扩展</a>
    <jh-article-card :title="title">
      <img class="article-cover" :src="cover" :alt="title" slot="header" />
      <p>共计 8 个视频</p>
      <img class="article-icon" :src="icon" slot="footer" />
    </jh-article-card>

    <jh-divider />

    <a class="anchor" href="#状态切换">状态切换</a>
    <jh-article-card :title="title" isRead>
      <img class="article-cover-02" :src="cover" :alt="title" slot="header" />
      <jh-icon name="success" color="green" size="28" slot="footer" />
    </jh-article-card>

    <jh-divider />

    <a class="anchor" href="#反转展示">反转展示</a>
    <jh-article-card :title="title" reverse>
      <img class="article-cover-02" :src="cover" :alt="title" slot="header" />
    </jh-article-card>

    <jh-divider />

    <a class="anchor" href="#设置边框">设置边框</a>
    <jh-article-card :title="title" border>
      <img class="article-cover-02" :src="cover" :alt="title" slot="header" />
    </jh-article-card>

    <jh-divider />

    <a class="anchor" href="#设置阴影">设置阴影</a>
    <jh-article-card :title="title" shadow>
      <img class="article-cover-02" :src="cover" :alt="title" slot="header" />
    </jh-article-card>

    <jh-divider />

    <a class="anchor" href="#多条信息组合">多条信息组合</a>

    <div>
      <jh-article-card :title="title" shape>
        <img class="article-cover-02" :src="cover" :alt="title" slot="header" />
      </jh-article-card>
      <jh-article-card :title="title" shape>
        <img class="article-cover-02" :src="cover" :alt="title" slot="header" />
      </jh-article-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCardDemo',

  data() {
    return {
      cover: 'https://resource.lanniuh.com/Shuliao/bg_shuliao.png',
      title: '妈妈应该怎么清洗宝宝的伤口以及该注意的事项',
      icon: 'https://resource.lanniuh.com/Remedy/arrow.png',
    };
  },
};
</script>

<style lang="scss" scoped>
.article-card-demo {
  .article-title {
    font-family: zihun144hao-langyuanti;
    font-style: italic;
    font-weight: 700;
    font-size: 15px;
    line-height: 32px;
    color: #318cf5;
  }

  .article-cover {
    display: block;
    width: 104px;
    height: 63px;
  }

  .article-cover-02 {
    display: block;
    width: 54px;
    height: 54px;
  }

  .article-icon {
    width: 28px;
    height: 28px;
  }
}
</style>
