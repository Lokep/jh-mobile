<template>
  <div class="jh-tab">
    <div
      class="jh-tab-item"
      v-for="(item, index) in labelList"
      :key="index"
      :style="{
        color: tabIndex === index ? activeColor :color
      }"
      @click="tabChange(index)"
    >
      {{ item }}
      <div v-if="tabIndex === index" class="jh-tab-line" :style="{backgroundColor:activeColor}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jh-tab',

  props: {
    // 当前激活项,
    current: {
      type: Number,
      default: 0,
    },
    // 文案列表
    labelList: {
      type: Array,
      default() {
        return [];
      },
    },
    // 激活颜色
    activeColor:{
      type: String,
      default:"#409eff"
    },
    // 非激活颜色
    color:{
      type: String,
      default:"#333"
    }
  },
  

  data() {
    return {
      tabIndex: 0,
    };
  },

  watch: {
    current: {
      handler(val) {
        this.tabIndex = val;
      },
      immediate: true,
    },
  },

  methods: {
    tabChange(index) {
      this.tabIndex = index;
      this.$emit('tab-change', index);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
