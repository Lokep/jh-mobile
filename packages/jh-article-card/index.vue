<template>
  <div
    class="jh-article-card"
    :class="{
      'jh-article-card-readed': isRead,
      'jh-article-card-reverse': reverse,
      'jh-article-card-shape': shape,
      'jh-article-card-border': border,
      'jh-article-card-shadow': shadow,
    }"
    :style="[customStyle]"
    @click="handleClick"
  >
    <div class="jh-article-hd">
      <slot name="header" />
    </div>
    <div class="jh-article-bd">
      <div class="jh-article-title"
        :class="[
          rows === 1 ? 'jh-article-title--single' : 'jh-article-title--multi',
        ]">
        {{ title }}
      </div>
      <slot></slot>
    </div>
    <div class="jh-article-ft">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'jh-article-card',

  props: {
    title: String,
    isRead: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    shape: {
      type: Boolean,
      default: false,
    },
    border: Boolean,
    shadow: Boolean,
    rows: {
      type: Number,
      default: 2,
    },
    customStyle: {
      type: Object,
      default: () => ({}),
    }
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
