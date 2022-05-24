<template>
  <div class="mobile" v-if="$slots.demo">
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="$router.go(-1)"
    />

    <div class="mobile-wrapper">
      <div class="demo">
        <slot name="demo" />
      </div>
      <div class="description">
        <slot name="description" />
      </div>
      <van-empty v-if="!$slots.demo" description="暂无待渲染的组件" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mobile',

  props: {
    options: Object,
  },

  watch: {
    '$route.path'() {
      this.$nextTick(() => {
        this.title = this.setTitle();
      });
    },
  },

  data: () => ({
    title: '',
  }),

  mounted() {
    this.title = this.setTitle();
  },

  methods: {
    setTitle() {
      this.$nextTick(() => {
        this.title =
          (document.getElementsByTagName('h1')[0].innerText || '').replace(
            /([\u4e00-\u9fa5])|(\#)/g,
            '',
          ) || 'JustFE';
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile {
  /* margin-right: 20px; */
  flex-shrink: 0;
  background: #fafafa;
  border-radius: 20px;
  box-shadow: 0 8px 12px #ebedf0;
  box-sizing: border-box;
  min-width: 340px;
  overflow: hidden auto;
  margin-top: 88px;
  width: 340px;
  // height: 500px;
  height: 75vh;
  min-height: 75vh;

  // position: sticky;
  top: 0vh;
  right: 20px;

  position: fixed;

  display: flex;
  flex-direction: column;

  &-wrapper {
    height: 0;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 12px;
  }

  ::-webkit-scrollbar-track-piece {
    //滚动条凹槽的颜色，还可以设置边框属性
    background-color: #f8f8f8;
  }
  ::-webkit-scrollbar {
    //滚动条的宽度
    width: 0px;
  }
}
</style>
