<template>
  <div class="jh-badge">
    <div
      class="jh-badge__wrapper"
      :class="[position, 'jh-badge__wrapper--' + shape]"
      :style="[badgeStyle]"
    >
      <div class="jh-badge__slot">
        <slot name="content"></slot>
      </div>
      <div
        class="jh-badge__content ellipsis"
        :style="{
          maxWidth: maxLength + 'em',
        }"
      >
        {{ content }}
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'jh-badge',
  props: {
    color: {
      type: String,
      default: '#2686FF',
    },
    position: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    maxLength: {
      type: Number,
      default: 4,
    },
    shape: {
      type: String,
      default: 'round',
    },
    customStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    badgeStyle () {
      return {
        backgroundColor: this.color,
        ...this.customStyle,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
