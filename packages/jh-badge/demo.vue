<template>
  <div>
    <a class="anchor" href="#基本用法">基本用法</a>
    <jh-badge content="5" />
    <jh-badge content="10" />
    <jh-badge content="Hot" />
    <jh-badge content="待回复"></jh-badge>
    <van-divider />

    <a class="anchor" href="#最大长度">最大长度</a>
    <jh-badge content="好好学习天天向上" :maxLength="5" color="#FF9F40"></jh-badge>
    <van-divider />

    <a class="anchor" href="#自定义颜色">自定义颜色</a>
    <jh-badge content="Hot" color="red" />
    <jh-badge content="待回复" color="#FF9F40"></jh-badge>

    <van-divider />

    <a class="anchor" href="#角标形状">角标形状</a>
    <van-row :gutter="30">
      <van-col span="6">
        <jh-badge position="right" content="奥力给">
          <jh-avatar shape="square" />
        </jh-badge>
      </van-col>

      <van-col span="6">
        <jh-badge position="right" content="奥力给" shape="bubble">
          <jh-avatar shape="square" />
        </jh-badge>
      </van-col>
    </van-row>

    <van-divider />

    <a class="anchor" href="#角标位置">角标位置</a>
    <van-row>
      <van-col span="6">
        <jh-badge position="right" content="1">
          <jh-avatar shape="square" />
        </jh-badge>
      </van-col>
      <van-col span="6">
        <jh-badge position="left" content="1">
          <jh-avatar shape="square" />
        </jh-badge>
      </van-col>
    </van-row>

    <van-row style="margin-top: 10px">
      <van-col span="24">
        <jh-badge position="right" content="奥力给">
          <jh-article-card title="杭州健海科技有限公司" />
        </jh-badge>
      </van-col>
    </van-row>

    <van-divider></van-divider>

    <a class="anchor" href="#自定义角标内容">自定义角标内容</a>

    <jh-badge position="right">
      <jh-icon slot="content" name="F-duigou" color="#fff" size="8" />
      <jh-article-card title="杭州健海科技有限公司" />
    </jh-badge>
    <van-divider></van-divider>

    <a class="anchor" href="#自定义样式">自定义样式</a>
    <van-row style="margin-top: 10px">
      <van-col span="24">
        <jh-badge
          position="right"
          content="奥力给"
          shape="bubble"
          :customStyle="{
            transform: 'translate(0, -50%)'
          }">
          <jh-article-card title="杭州健海科技有限公司" />
        </jh-badge>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'jh-badge-demo',
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
