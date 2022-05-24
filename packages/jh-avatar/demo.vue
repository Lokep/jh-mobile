<template>
  <div class="avatar-demo">
    <a class="anchor" href="#基本用法">基本用法</a>
    <h3>circle</h3>
    <div class="avatar-list">
      <jh-avatar :size="50" :src="circleUrl" />
      <jh-avatar v-for="size in sizeList" :key="size" :size="size" :src="circleUrl" />
    </div>

    <van-divider />

    <h3>square</h3>
    <div class="avatar-list">
      <jh-avatar shape="square" :size="50" :src="squareUrl" />
      <jh-avatar
        shape="square"
        v-for="size in sizeList"
        :key="size"
        :size="size"
        :src="squareUrl"
      />
    </div>

    <van-divider />

    <a class="anchor" href="#展示类型">展示类型</a>
    <div class="avatar-list">
      <jh-avatar icon="iconfont icon-icon_mine" />
      <jh-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <jh-avatar> user </jh-avatar>
    </div>

    <van-divider />

    <a href="#图片加载失败的-fallback-行为" class="anchor">图片加载失败的 fallback 行为</a>
    <div class="avatar-list">
      <jh-avatar :size="60" src="https://empty" @error="errorHandler">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
      </jh-avatar>
    </div>

    <van-divider />

    <a class="anchor" href="#图片如何适应容器框">图片如何适应容器框</a>
    <div class="avatar-list">
      <div v-for="fit in fits" :key="fit" class="avatar-item">
        <span class="avatar-title">{{ fit }}</span>
        <jh-avatar shape="square" :size="100" :fit="fit" :src="url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarDemo',

  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      sizeList: ['large', 'medium', 'small'],
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    };
  },

  methods: {
    errorHandler() {
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-demo {
  h3 {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
}

.avatar-list {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;

  .avatar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    .avatar-title {
      margin-bottom: 10px;
    }
  }
}
</style>
