<template>
  <div>
    <a class="anchor" href="#基本用法">基本用法</a>
    <jh-tab
      :current="current"
      :labelList="labelList"
      @tab-change="tabChange"
      :activeColor="activeColor"
      :color="color"
    />
  </div>
</template>

<script>
export default {
  name: 'TabDemo',

  data() {
    return {
      current: 1,
      labelList: ['全部', '监测', '运动', '饮食'],
      activeColor: '#d909ff',
      color: 'blue',
    };
  },

  methods: {
    tabChange(e) {
      console.log('e', e);
    },
  },
};
</script>
