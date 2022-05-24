<template>
  <div class="jh-button" :class="cls" @click="handleClick">
    <div class="jh-button--prefix">
      <slot name="prefix"></slot>
    </div>
    <div class="jh-button--content">
      <slot></slot>
    </div>
    <div class="jh-button--suffix">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jh-button',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    plain: Boolean,
    disabled: Boolean,
    round: Boolean,
    size: {
      type: String, // large, normal, small,目前只有normal和small
      default: 'normal'
    },
    block: Boolean
  },
  data() {
    return {};
  },
  computed: {
    cls() {
      return {
        [`jh-button--${this.type}`]: true,
        [`jh-button--${this.size}`]: true,
        'jh-button--plain': this.plain,
        'jh-button--disabled': this.disabled,
        'jh-button--round': this.round,
        'jh-button--block': this.block
      }
    },
  },
  methods: {
    handleClick(e) {
      if (this.disabled) {
        return false
      }

      this.$emit('tap', e)
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../common/style/var.scss';
@import '../common/style/mixins.scss';
@import './index.scss';
</style>
