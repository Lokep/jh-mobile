<template>
  <div>
    <a class="anchor" href="#基本用法">基本用法</a>
    <jh-empty></jh-empty>
    <van-divider />

    <a class="anchor" href="#使用场景">使用场景</a>
    <jh-empty scene="offline" description="网络走丢了..."></jh-empty>
    <van-divider />

    <a class="anchor" href="#自定义图片">自定义图片</a>
    <jh-empty image="https://iknow-pic.cdn.bcebos.com/b03533fa828ba61e68571c505134970a304e5910"></jh-empty>
    <van-divider />

    <a class="anchor" href="#底部内容">底部内容</a>
    <jh-empty>
      <template slot="description">
        <p>
          <van-button size="small" type="primary" href="https://www.baidu.com">百度一下</van-button>
        </p>
      </template>
    </jh-empty>
    <van-divider />
  </div>
</template>

<script>
export default {
  name: 'jh-empty-demo',
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
