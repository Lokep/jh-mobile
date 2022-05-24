<template>
  <van-row>
    <a class="anchor" href="#基本用法">基本用法</a>
    <van-row>
      <jh-medal title="称重之星" level="star" sustain="23" total="50" />
      <jh-medal title="称重标兵" level="model" sustain="23" total="50" />
      <jh-medal title="称重能手" level="expert" sustain="23" total="50" />
      <jh-medal title="称重新手" level="newbie" sustain="23" total="50" />
    </van-row>

    <van-divider />

    <a class="anchor" href="#自定义扩展业务类型">自定义扩展业务类型</a>
    <van-row>
      <jh-medal title="称重之星" level="star" sustain="23" total="50" />
      <jh-medal title="扎针标兵" level="model" sustain="23" total="50" />
      <jh-medal title="运动能手" level="expert" sustain="23" total="50" />
      <jh-medal title="饮食新手" level="newbie" sustain="23" total="50" />
    </van-row>

    <van-divider />

    <a class="anchor" href="#自定义扩展内容">自定义扩展内容</a>
    <jh-medal title="称重之星" level="star">
      <p>自定义内容</p>
      <p>自定义内容</p>
      <p>自定义内容</p>
    </jh-medal>
  </van-row>
</template>

<script>
export default {
  name: 'MedalDemo',

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
