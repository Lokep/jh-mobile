<template>
  <div class="jh-empty">
    <div class="jh-empty-img">

      <div class="jh-empty-img--slot">
        <slot name="img" />
      </div>

      <img class="jh-empty-img--default" mode="heightFix" :src="imageUrl" />
    </div>
    <div class="jh-empty-desc">
      <div class="jh-empty-desc--slot">
        <slot name="description" />
      </div>
      <div class="jh-empty-desc--default">{{ description }}</div>
    </div>
  </div>
</template>

<script>

const SCENE = {
  collection: 'collection',
  offline: 'offline',
  chat: 'chat',
  primary: 'primary',

  plan: 'plan',
  data: 'data',
  error: 'error',
  record: 'record'
};

const makeUpImageUrl = (scene) =>
  `https://resource.lanniuh.com/just-fe/mobile/jh-empty-${scene}-lg.png`;

export default {
  name: 'jh-empty',
  props: {
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '暂无数据',
    },
    scene: {
      // image优先级比scene高
      type: String, // collection, offline, chat, primary
      default: 'primary',
    },
  },
  computed: {
    imageUrl() {
      if (this.image) {
        return this.image;
      } else if (SCENE[this.scene]) {
        return makeUpImageUrl(this.scene);
      } else {
        return makeUpImageUrl(SCENE.primary);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
