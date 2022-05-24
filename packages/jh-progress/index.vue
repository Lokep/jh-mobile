<template>
  <div class="jh-progress"
    :style="{
      borderRadius: borderRadius + 'px',
      backgroundColor: trackColor,
      height: strokeWidth + 'px',
    }">
    <div class="jh-progress--bar"
      :style="{
        width: percentage + '%',
        backgroundColor: color,
      }">
    </div>
  </div>
</template>

<script>
export default {
  name: 'jh-progress',
  props: {
    borderRadius: {
      type: Number,
      default: 6
    },
    percentage: {
      type: Number,
      default: 20
    },
    strokeWidth: {
      type: Number,
      default: 12
    },
    color: {
      type: String,
      default: '#FF9F40'
    },
    trackColor: {
      type: String,
      default: '#fff'
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
