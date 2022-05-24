<template>
  <div>
    <a class="anchor" href="#基本用法">基本用法</a>
    <jh-notice-bar text="今日flag：没有bug" />
    <br />
    <jh-notice-bar v-model="show" text="今日flag：没有bug" closable />
    <br />
    <jh-notice-bar
      v-model="show"
      animation
      text="今日flag：没有bug, 没有蛀牙, 一库一库"
      closable
      :ellipsis="false"
    />
    <van-divider />

    <br />
    <a class="anchor" href="#主题色">主题色</a>

    <template>
      <jh-notice-bar v-for="item in types" text="今日flag：没有bug" :key="'c' + item" :type="item" />
      <br v-for="item in types" :key="item" />
    </template>
    <jh-notice-bar text="今日flag：没有bug" closable color="gold" />
    <br />
    <jh-notice-bar text="今日flag：没有bug" backgroundColor="pink" />

    <br />

    <van-divider />

    <a class="anchor" href="#内容滚动">内容滚动</a>
    <jh-notice-bar text="今日flag：没有bug" type="primary" animation />
    <br />
    <jh-notice-bar text="今日flag：没有bug" type="success" animation />
    <br />
    <jh-notice-bar text="今日flag：没有bug" type="danger" animation />
    <br />
    <jh-notice-bar text="今日flag：没有bug" type="warning" animation />
    <br />
    <van-divider />

    <a class="anchor" href="#插槽">插槽</a>
    <br />
    <jh-notice-bar text="今日flag：没有bug" type="danger" animation>
      睁开双眼做场梦
    </jh-notice-bar>
    <br />
    <jh-notice-bar text="今日flag：没有bug" type="warning">
      <jh-icon name="L-shezhi" slot="prefix" size="20" />
    </jh-notice-bar>
    <br />
    <jh-notice-bar text="今日flag：没有bug" type="warning" />
    <br />
    <van-divider />
  </div>
</template>

<script>
export default {
  name: 'jh-notice-bar-demo',
  props: {},
  data() {
    return {
      show: true,
      types: ['primary', 'success', 'warning', 'danger'],
    };
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
