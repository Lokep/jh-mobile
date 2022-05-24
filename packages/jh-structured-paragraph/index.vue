<template>
  <div class="jh-paragraph">
    <div class="jh-paragraph-hd">
      <h3>{{title}}</h3>
      <slot name="header"></slot>
    </div>
    <div class="jh-paragraph-bd">
      <slot></slot>
    </div>
    <div class="jh-paragraph-ft">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jh-structured-paragraph',

  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
