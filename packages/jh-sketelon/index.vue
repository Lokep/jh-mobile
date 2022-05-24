<template>
  <div class="jh-sketelon">
    <div class="jh-sketelon--hd">
      <!-- <div class="jh-sketelon--avatar" :class="cls"></div> -->
    </div>
    <div class="jh-sketelon--bd">
      <div class="jh-sketelon--title" :class="cls"></div>
      <div class="jh-sketelon--row" :class="cls"></div>
      <div class="jh-sketelon--row"></div>
      <div class="jh-sketelon--row"></div>
    </div>
    <!-- <div class="jh-sketelon--ft" :class="cls"></div> -->
  </div>
</template>

<script>
export default {
  name: 'jh-sketelon',
  props: {
    animate: Boolean,
    rows: {
      type: Number,
      default: 2,
    },
  },
  data () {
    return {
      hasPoint: false, // rows字段有无小数点
    }
  },
  computed: {
    cls () {
      return [{
        'animate': true || this.animate
      }]
    }
  },
  onReachBottom() {
    console.log('reach bottom')
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
