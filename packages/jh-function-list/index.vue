<template>
  <div
    class="jh-function-list"
    :class="{
      'center': center,
      'flex-start': start,
    }"
  >
    <div class="jh-function-item" v-for="item in lists" :key="item.name">
      <img
        class="jh-function-img"
        :src="item.src"
        :alt="item.name"
        :style="iconStyle"
      />
      <span :style="textStyle">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jh-function-list',

  props: {
    center: Boolean,
    start: Boolean,
    iconStyle: {},
    textStyle: {},
    lists: Array,
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
