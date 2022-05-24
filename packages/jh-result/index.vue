<template>
  <div class="jh-result" :class="[ `jh-result-${type}`]">
    <div class="jh-result-hd">
      <img class="jh-result-icon" :src="icon" :alt="title">
      <h3 class="jh-result-title">{{title}}</h3>
    </div>
    <div class="jh-result-bd">
      <p class="jh-result-subtitle">{{subTitle}}</p>
      <slot></slot>
    </div>
    <div class="jh-result-ft" v-if="$slots.extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
const resultType = {
  success: 'https://resource.lanniuh.com/just-fe/mobile/status-success.png',
  fail: 'https://resource.lanniuh.com/just-fe/mobile/status-fail.png',
};

export default {
  name: 'jh-result',

  props: {
    type: {
      type: String,
      require: true,
      default: 'success',
      validator(val) {
        return ['success', 'fail', 'warning', 'info'].includes(val);
      },
    },
    title: String,
    subTitle: String,
  },

  data() {
    return {
      icon: '',
    };
  },

  created() {
    const { type } = this;

    this.icon = resultType[type];
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
