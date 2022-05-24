<template>
  <div>
    <jh-timeline>
      <jh-timeline-item node="12月26日" v-for="item in 10" :key="item">
        <div class="demo-item">
          <jh-article-card title="最近右腿晚上睡觉经常抽筋，伤口..." />
        </div>

        <div class="demo-item">
          <jh-article-card title="最近右腿晚上睡觉经常抽筋，伤口..." />
        </div>
      </jh-timeline-item>
    </jh-timeline>
  </div>
</template>

<script>
export default {
  name: 'jh-timeline-demo',
  props: {},
  data () {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
  },
  components: {}
}
</script>

<style lang="scss" scoped>
// style
.demo {
  &-item {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
