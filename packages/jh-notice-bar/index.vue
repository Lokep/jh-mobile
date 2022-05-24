<template>
  <transition name="fade">
    <div class="jh-notice-bar" v-if="show" :style="[{ backgroundColor: backgroundColor }]">
      <div class="jh-notice-bar--prefix-slot">
        <slot name="prefix"></slot>
      </div>

      <div class="jh-notice-bar--prefix-icon">
        <jh-icon name="F-yichang2" slot="prefix" size="20" :color="themeColor" />
      </div>

      <div class="jh-notice-bar--content" :class="cls">
        <div
          class="jh-notice-bar--content-slot"
          :class="{
            ellipsis: ellipsis,
          }"
          :style="styles"
        >
          <slot />
        </div>
        <div
          class="jh-notice-bar--content-inner"
          :class="{
            ellipsis: ellipsis,
          }"
          :style="styles"
        >
          {{ text }}
        </div>
      </div>

      <div class="jh-notice-bar--suffix-slot">
        <slot name="suffix"></slot>
      </div>

      <div class="jh-notice-bar--suffix-icon" v-if="closable" @click="handleMessageClose">
        <jh-icon name="L-guanbi" slot="prefix" size="12" bold :color="themeColor" />
      </div>
    </div>
  </transition>
</template>

<script>
import { THEME_COLOR, FONT_SIZE_XS } from '/constants/index';

export default {
  name: 'jh-notice-bar',
  model: {
    prop: 'show',
    event: 'close',
  },
  props: {
    type: {
      type: String,
      default: 'primary', // primary, success, warning, danger
    },

    text: {
      type: String,
      default: '',
    },

    animation: Boolean,
    ellipsis: {
      type: Boolean,
      default: true,
    },
    closable: Boolean,
    show: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: '',
    },
  },

  computed: {
    themeColor() {
      return this.color || THEME_COLOR[this.type] || THEME_COLOR.primary;
    },

    cls() {
      return {
        'jh-notice-bar--ellipsis': this.ellipsis,
        [`jh-notice-bar--${this.type}`]: true,
      };
    },

    styles() {
      return {
        ...this.animateStyle,
        color: this.themeColor,
      };
    },
  },

  data: () => ({
    animateStyle: {
      transform: 'translateX(0)',
    },
    interval: null,
  }),

  mounted() {
    this.clearAnination();
    this.animation && this.animate();
  },

  unmounted() {
    this.clearAnination();
  },

  methods: {
    clearAnination() {
      if (this.interval !== null) {
        clearInterval(this.interval);
      }
    },

    animate() {
      const speed = 2;
      const distance = this.text.length * FONT_SIZE_XS + 10;

      let n = 0,
        base = 0;
      this.interval = setInterval(() => {
        if (speed * n >= base + distance) {
          this.animateStyle.transform = `translateX(${distance + base}px)`;
          n = 0;
          base = Math.max(distance, 230);
        }
        // console.log(n, this.text.length * FONT_SIZE_XS);
        this.$nextTick(() => {
          this.animateStyle.transform = `translateX(${base - n * speed}px)`;
        });
        n += 1;
      }, 50);
    },

    handleMessageClose() {
      this.clearAnination();
      this.$emit('close', false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../common/style/var.scss';
@import '../common/style/mixins.scss';
@import '../common/style/mixins.scss';
@import './index.scss';
</style>
