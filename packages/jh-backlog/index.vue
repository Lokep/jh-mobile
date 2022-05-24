<template>
  <div class="jh-backlog">
    <hgroup>
      <h2>{{title}}</h2>
      <h3>{{next}}</h3>
    </hgroup>

    <div class="jh-backlog-hd">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jh-backlog',

  props: {
    title: {
      type: String,
      required: true,
    },
    next: String,
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
