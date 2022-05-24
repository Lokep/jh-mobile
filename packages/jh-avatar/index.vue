<template>
  <div
    class="jh-avatar"
    :class="avatarClass"
    :style="sizeStyle"
  >
    <img
      :src="src"
      :alt="alt"
      :srcSet="srcSet"
      :style="{ 'object-fit': fit }"
      @error="handleError"
      v-if="isImageExist && src"
    />

    <i :class="icon" v-if="icon"></i>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'jh-avatar',

  props: {
    size: {
      type: [Number, String],
      // size 的有效性检测
      validator(val) {
        if (typeof val === 'string') {
          // size 的枚举类型
          return ['large', 'medium', 'small'].includes(val);
        }

        return typeof val === 'number';
      }
    },
    shape: {
      type: String,
      default: 'circle',
      validator(val) {
        // shape 的枚举类型
        return ['circle', 'square'].includes(val);
      }
    },
    icon: String,
    src: String,
    alt: String,
    srcSet: String,
    error: Function,
    fit: {
      type: String,
      default: 'cover'
    }
  },

  data() {
    return {
      isImageExist: true
    };
  },

  computed: {
    avatarClass() {
      const { size, icon, shape } = this;
      const classList = ['jh-avatar'];

      if (size && typeof size === 'string') {
        classList.push(`jh-avatar-${size}`);
      }

      if (icon) {
        classList.push('jh-avatar-icon');
      }

      if (shape) {
        classList.push(`jh-avatar-${shape}`);
      }

      return classList.join(' ');
    },

    sizeStyle() {
      const { size } = this;
      let sizeStyle = {};

      if (size && typeof size === 'number') {
        sizeStyle = {
          width: `${size}px`,
          height: `${size}px`,
          lineHeight: `${size}px`,
        };
      }

      return sizeStyle;
    },
  },

  methods: {
    handleError() {
      const { error } = this;
      const errorFlag = error ? error() : undefined;

      if (errorFlag !== false) {
        this.isImageExist = false;
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
