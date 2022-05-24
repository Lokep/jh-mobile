<template>
  <div class="jh-divider"
    :class="{
      'jh-divider--lg': size === 'large',
      'jh-divider--sm': size === 'small',
      'jh-divider--pure': pure,
      'jh-divider--dashed': dashed,
      'jh-divider--left': contentPosition === 'left',
      'jh-divider--right': contentPosition === 'right',
    }"
    :style="[customStyle]">
    <div class="jh-divider--slot">
      <slot />
    </div>
  </div>
</template>

<script>
/**
 * pure 是否为纯文本，纯文本不渲染线条
 * size 分割线的大小， 可选值：small, large
 * dashed 是否为虚线
 * contentPosition 分割线的位置，可选值：left, right, center
 * customStyle 分割线的自定义样式
 */
export default {
  name: 'jh-divider',
  props: {
    pure: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'large',
    },
    dashed: {
      type: Boolean,
      default: false,
    },
    contentPosition: {
      type: String,
      default: 'center',
    },
    customStyle: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
