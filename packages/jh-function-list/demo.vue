<template>
  <van-row>
    <a class="anchor" href="#基本用法">基本用法</a>
    <jh-function-list center :lists="lists01" />

    <van-divider />

    <a class="anchor" href="#图片扩展">图片扩展</a>
    <jh-function-list
      start
      :lists="lists02"
      :icon-style="{ width: '22px', height: '22px' }"
      :text-style="{ fontSize: '12px' }"
    />
  </van-row>
</template>

<script>
export default {
  name: 'FunctionListDemo',

  data() {
    return {
      lists01: [
        {
          src: 'https://resource.lanniuh.com/just-fe/mobile/function-report.png',
          name: '报告查询',
        },
        {
          src: 'https://resource.lanniuh.com/just-fe/mobile/function-prescription.png',
          name: '我的处方',
        },
      ],
      lists02: [
        {
          src: 'https://resource.lanniuh.com/just-fe/mobile/function-report.png',
          name: '报告查询01',
        },
        {
          src: 'https://resource.lanniuh.com/just-fe/mobile/function-prescription.png',
          name: '我的处方01',
        },
        {
          src: 'https://resource.lanniuh.com/just-fe/mobile/function-report.png',
          name: '报告查询02',
        },
        {
          src: 'https://resource.lanniuh.com/just-fe/mobile/function-prescription.png',
          name: '我的处方02',
        },
      ],
    };
  },
};
</script>
