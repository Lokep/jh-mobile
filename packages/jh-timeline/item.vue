<template>
  <div class="jh-timeline-item">
    <div class="jh-timeline-step">
      <div class="jh-timeline-step--icon"></div>
      <div class="jh-timeline-step--node">{{node}}</div>
    </div>
    <div class="jh-timeline--slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ArticleCard from '../jh-article-card/index.vue';

export default {
  name: 'jh-timeline-item',
  props: {
    node: {
      type: String,
      default: ''
    }
  },
  components: { ArticleCard }
};
</script>

<style lang="scss" scoped>
@import './item.scss';
</style>
