<template>
  <div
    class="jh-tag"
    :class="[
      disabled ? 'jh-disabled' : '',
      'jh-size-' + size,
      'jh-shape-' + shape,
      'jh-mode-' + mode + '-' + type,
    ]"
    :style="[customStyle]"
    @tap="clickTag"
    v-if="show"
  >
    {{ text }}
  </div>
</template>

<script>
/**
 * tag 提示
 * @description 该组件一般用于标记和选择
 * @tutorial https://www.uviewui.com/components/tag.html
 * @property {String} type 主题类型（默认primary）
 * @property {String} size 标签大小（默认default）
 * @property {String} shape 标签形状（默认square）
 * @property {String} text 标签的文字内容
 * @property {String} bg-color 自定义标签的背景颜色
 * @property {String} border-color 标签的边框颜色
 * @property {String Number} index 点击标签时，会通过click事件返回该值
 * @property {String} mode 模式选择，见官网说明（默认light）
 * @property {Boolean} show 标签显示与否（默认true）
 * @event {Function} click 点击标签触发
 * @example <jh-tag text="雪月夜" type="success" />
 */
export default {
  name: 'jh-tag',

  props: {
    // 标签类型info、primary、success、warning、error
    type: {
      type: String,
      default: 'primary',
    },
    // 是否禁用这个标签，禁用的话，会屏蔽点击事件
    disabled: {
      type: [Boolean, String],
      default: false,
    },
    // 标签的大小，分为default（默认），mini（较小）
    size: {
      type: String,
      default: 'default',
    },
    // tag的形状，circle（两边半圆形）, square（方形，带圆角），circleLeft（左边是半圆），circleRight（右边是半圆）
    shape: {
      type: String,
      default: 'square',
    },
    // 标签文字
    text: {
      type: [String, Number],
      default: '',
    },
    // 背景颜色，默认为空字符串，即不处理
    bgColor: {
      type: String,
      default: '',
    },
    // 标签字体颜色，默认为空字符串，即不处理
    color: {
      type: String,
      default: '',
    },
    // 镂空形式标签的边框颜色
    borderColor: {
      type: String,
      default: '',
    },
    // 点击时返回的索引值，用于区分例遍的数组哪个元素被点击了
    index: {
      type: [Number, String],
      default: '',
    },
    // 模式选择，dark|light|plain
    mode: {
      type: String,
      default: 'light',
    },
    // 是否显示
    show: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {};
  },

  computed: {
    customStyle() {
      const style = {};

      // 文字颜色（如果有此值，会覆盖type值的颜色）
      if (this.color) {
        style.color = this.color;
      }

      // tag 的背景颜色（如果有此值，会覆盖 type 值的颜色）
      if (this.bgColor) {
        style.backgroundColor = this.bgColor;
      }

      // 如果是镂空型 tag，没有传递边框颜色（borderColor）的话，使用文字的颜色（color 属性）
      if (this.mode === 'plain' && this.color && !this.borderColor) {
        style.borderColor = this.color;
      } else {
        style.borderColor = this.borderColor;
      }

      return style;
    },
  },

  methods: {
    // 标签被点击
    clickTag() {
      // 如果是 disabled 状态，不发送点击事件
      if (this.disabled) {
        return false;
      }

      this.$emit('click', this.index);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
