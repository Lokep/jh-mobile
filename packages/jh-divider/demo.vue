<template>
  <div>
    <a class="anchor" href="#基本用法">基本用法</a>
    <jh-divider></jh-divider>
    <jh-divider >分割线</jh-divider>

    <van-divider />

    <a class="anchor" href="#虚线">虚线</a>
    <jh-divider dashed></jh-divider>
    <jh-divider dashed>分割线</jh-divider>

    <van-divider />

    <a class="anchor" href="#纯文本">纯文本</a>
    <template>
      <jh-divider pure>分割线</jh-divider>
    </template>

    <van-divider />

    <a class="anchor" href="#文本位置">文本位置</a>
    <jh-divider content-position="left">分割线</jh-divider>

    <jh-divider content-position="center">分割线</jh-divider>

    <jh-divider content-position="right">分割线</jh-divider>

    <van-divider />

    <a class="anchor" href="#文本位置">文本位置</a>
    <jh-divider
    content-position="left"
    :custom-style="{
      'border-color': 'pink'
    }">
    分割线
  </jh-divider>
  </div>
</template>

<script>
export default {
  name: 'jh-divider-demo',
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
</style>
