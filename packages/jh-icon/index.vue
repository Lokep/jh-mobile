<template>
  <div
    class="jh-icon"
    :class="['jh-icon-' + labelPos]"
    @tap="click"
    :style="[customStyle]"
  >
    <img
      class="jh-icon-img"
      :src="name"
      :style="[imgStyle]"
      v-if="isImg"
    />
    <span
      class="jh-icon-font"
      :class="customClass"
      :hover-class="hoverClass"
      :style="[iconStyle]"
      @touchstart="touchstart"
      v-else
    >
      <span
        class="jh-icon-decimal"
        :class="decimalIconClass"
        :hover-class="hoverClass"
        :style="[decimalIconStyle]"
        v-if="showDecimalIcon"
      />
    </span>
    <span
      class="jh-icon-label"
      :style="{
        color: labelColor,
        fontSize: `${labelSize}px`,
        marginLeft: labelPos === 'right' ? marginLeft : 0,
        marginTop: labelPos === 'bottom' ? marginTop : 0,
        marginRight: labelPos === 'left' ? marginRight : 0,
        marginBottom: labelPos === 'top' ? marginBottom : 0,
      }"
      v-if="label !== ''"
    >
      {{ label }}
    </span>
  </div>
</template>

<script>
import { type } from './list';

export default {
  name: 'jh-icon',

  props: {
    // 图标类名
    name: {
      type: String,
      default: '',
    },
    // 图标颜色，可接受主题色
    color: {
      type: String,
      default: '#606266',
    },
    // 字体大小，单位rpx
    size: {
      type: [Number, String],
      default: '30',
    },
    // 是否显示粗体
    bold: {
      type: Boolean,
      default: false,
    },
    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
    index: {
      type: [Number, String],
      default: '',
    },
    // 触摸图标时的类名
    hoverClass: {
      type: String,
      default: '',
    },
    // 自定义扩展前缀，方便用户扩展自己的图标库
    customPrefix: {
      type: String,
      default: 'jhicon',
    },
    // 图标右边或者下面的文字
    label: {
      type: [String, Number],
      default: '',
    },
    // label的位置，只能右边或者下边
    labelPos: {
      type: String,
      default: 'right',
    },
    // label的大小
    labelSize: {
      type: [String, Number],
      default: '14',
    },
    // label的颜色
    labelColor: {
      type: String,
      default: '#606266',
    },
    // label与图标的距离(横向排列)
    marginLeft: {
      type: [String, Number],
      default: '4',
    },
    // label与图标的距离(竖向排列)
    marginTop: {
      type: [String, Number],
      default: '4',
    },
    // label与图标的距离(竖向排列)
    marginRight: {
      type: [String, Number],
      default: '4',
    },
    // label与图标的距离(竖向排列)
    marginBottom: {
      type: [String, Number],
      default: '4',
    },
    // 自定义样式
    customStyle: {
      type: Object,
      default() {
        return {};
      },
    },
    // 用于显示图片小图标时，图片的宽度
    width: {
      type: [String, Number],
      default: '',
    },
    // 用于显示图片小图标时，图片的高度
    height: {
      type: [String, Number],
      default: '',
    },
    // 用于解决某些情况下，让图标垂直居中的用途
    top: {
      type: [String, Number],
      default: 0,
    },
    // 是否为DecimalIcon
    showDecimalIcon: {
      type: Boolean,
      default: false,
    },
    // 背景颜色，可接受主题色，仅Decimal时有效
    inactiveColor: {
      type: String,
      default: '#ececec',
    },
    // 显示的百分比，仅Decimal时有效
    percent: {
      type: [Number, String],
      default: '50',
    },
  },

  data() {
    return {
      type,
    };
  },

  computed: {
    customClass() {
      const classes = [];

      classes.push(`icon-${this.name}`);

      // 自定义图标类名为 jh-iconfont
      if (this.customPrefix === 'jhicon') {
        classes.push('jh-iconfont');
      } else {
        classes.push(this.customPrefix);
      }

      // 主题色，通过类配置
      if (
        this.showDecimalIcon &&
        this.inactiveColor &&
        this.type.includes(this.inactiveColor)
      ) {
        classes.push(`jh-icon-${this.inactiveColor}`);
      } else if (this.color && this.type.includes(this.color)) {
        classes.push(`jh-icon-font-${this.color}`);
      }

      return classes;
    },

    iconStyle() {
      let style = {};

      style = {
        fontSize: this.size === 'inherit' ? 'inherit' : `${this.size}px`,
        fontWeight: this.bold ? 'bold' : 'normal',
        // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
        top: `${this.top}px`,
      };

      // 非主题色值时，才当作颜色值
      if (
        this.showDecimalIcon &&
        this.inactiveColor &&
        !this.type.includes(this.inactiveColor)
      ) {
        style.color = this.inactiveColor;
      } else if (this.color && !this.type.includes(this.color)) {
        style.color = this.color;
      }

      return style;
    },

    // 判断传入的 name 属性，是否图片路径，只要带有"/"均认为是图片形式
    isImg() {
      return this.name.indexOf('/') !== -1;
    },

    imgStyle() {
      const style = {};

      // 如果设置 width 和 height 属性，则优先使用，否则使用 size 属性
      style.width = this.width ? `${this.width}px` : `${this.size}px`;
      style.height = this.height ? `${this.height}px` : `${this.size}px`;

      return style;
    },

    decimalIconStyle() {
      let style = {};

      style = {
        fontSize: this.size === 'inherit' ? 'inherit' : `${this.size}px`,
        fontWeight: this.bold ? 'bold' : 'normal',
        // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
        top: `${this.top}px`,
        width: `${this.percent}%`,
      };

      // 非主题色值时，才当作颜色值
      if (this.color && !this.type.includes(this.color)) {
        style.color = this.color;
      }

      return style;
    },

    decimalIconClass() {
      const classes = [];

      classes.push(`${this.customPrefix}-${this.name}`);

      // 自定义图标类名为 jh-iconfont
      if (this.customPrefix === 'jhicon') {
        classes.push('jh-iconfont');
      } else {
        classes.push(this.customPrefix);
      }

      // 主题色，通过类配置
      if (this.color && this.type.includes(this.color)) {
        classes.push(`jh-icon-font-${this.color}`);
      } else {
        classes.push('jh-icon-font-primary');
      }

      return classes;
    },
  },

  methods: {
    click() {
      this.$emit('click', this.index);
    },

    touchstart() {
      this.$emit('touchstart', this.index);
    },
  },
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
