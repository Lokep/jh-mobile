<template>
  <div>
    <a class="anchor" href="#基本用法">基本用法</a>
    <jh-progress :percentage="50" />

    <van-divider></van-divider>

    <a class="anchor" href="#线条粗细">线条粗细</a>

    <jh-progress :percentage="30" :strokeWidth="8" />

    <van-divider></van-divider>
    <a class="anchor" href="#样式定制">样式定制</a>
    <jh-progress :percentage="30" :borderRadius="4" color="red" trackColor="green" />
  </div>
</template>

<script>
export default {
  name: 'jh-progress-demo',
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped>
// style
</style>
