<template>
  <div class="jh-card" :class="{ 'jh-card-shadow': shadow }">
    <div class="jh-card-hd" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="jh-card-bd">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'jh-card',

  props: {
    shadow: Boolean,
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
