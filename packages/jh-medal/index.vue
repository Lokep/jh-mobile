<template>
  <div class="jh-medal" :class="[`jh-medal-${level}`]">
    <img :src="url" :alt="title" class="jh-medal-thumb">
    <div class="jh-medal-bd">
      <h3>{{title}}</h3>

      <div class="jh-medal--slot">
        <slot ></slot>
      </div>


      <div class="jh-medal--content">
        <p v-if="sustain">当前连续记录{{sustain}}天</p>
        <p v-if="total">当前累计记录{{total}}天</p>
      </div>
    </div>
  </div>
</template>

<script>
import { levelMap } from './medal.type';

export default {
  name: 'jh-medal',

  props: {
    level: {
      type: String,
      require: true,
      default: 'newbie',
      validator(val) {
        return ['star', 'model', 'expert', 'newbie'].includes(val);
      },
    },
    title: {
      type: String,
      require: true,
    },
    sustain: {
      type: [String, Number],
      default: ''
    },
    total: {
      type: [String, Number],
      default: ''
    },
  },

  data() {
    return {
      url: '',
    };
  },

  created() {
    const { level } = this;
    const { img } = levelMap[level];

    this.url = img;
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
