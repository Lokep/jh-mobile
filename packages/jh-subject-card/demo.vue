<template>
  <div>
    <a class="anchor" href="#基本用法">基本用法</a>
    <van-row gutter="20">
      <van-col :span="12" v-for="item in subjects" :key="item.title">
        <jh-subject-card
          :color="item.color"
          :title="item.title"
          :units="item.units"
          :groups="item.groups"
        />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: 'SubjectCardDemo',

  data() {
    return {
      subjects: [
        {
          title: '康复训练时长',
          units: 'min',
          groups: [
            {
              text: '',
              highlight: true,
              major: 0,
              total: 120,
            },
          ],
        },
        {
          color: '#ABAFFF',
          title: '肩关节前屈角度',
          units: '度',
          groups: [
            {
              text: '较上周',
              highlight: true,
              major: '30',
            },
            {
              text: '最新值',
              major: '87',
            },
          ],
        },
      ],
    };
  },
};
</script>
