<template>
  <div class="jh-timeline">
    <div class="jh-timeline-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
import TimeLineItem from "./item";
/**
 * direction: 步骤条方向 horizontal | vertical
 */
export default {
  name: 'jh-timeline',
  props: {},
  methods: {
  },
  components: {
    TimeLineItem
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
