# Icon 图标

基于字体的图标集，包含了大多数常见场景的图标。

:::slot preview
<ClientOnly>
  <jh-icon-demo />
</ClientOnly>
:::

## 基本用法

`Icon` 的 `name` 属性支持传入图标名称或图片链接，所有可用的图标名称见右侧示例。

```html
<jh-icon name="L-mima" />
<jh-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
```

## 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```html
<jh-icon name="L-zhengjian" color="#1989fa" />
<jh-icon name="F-xuetang1" color="#ee0a24" />
```

## 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```html
<jh-icon name="F-fuzhen" size="40" />
<jh-icon name="L-tixing" size="60" />
```

## 自定义图标

如果需要在现有 `Icon` 的基础上使用更多图标，可以引入第三方 `iconfont` 对应的字体文件和 CSS 文件，之后就可以在 `Icon` 组件中直接使用。

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

通过如下方式引用：

通过 `custom-prefix` 指定类名为 `custom-icon`

```html
<jh-icon custom-prefix="custom-icon" name="extra" />
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| name | 图标名称，见示例图标集 | String | - | - |
| color | 图标颜色 | String | - | - |
| size | 图标字体大小，单位 px | String/Number | - | 30 |
| width | `name` 为图片路径时图片的宽度，单位任意，数值默认为 px 单位 | String/Number | - | - |
| height | `name` 为图片路径时图片的高度，单位任意，数值默认为 px 单位 | String/Number | - | - |
| top | 如果某些场景，如果图标没有垂直居中，可以调整此参数，单位任意，数值默认为 px 单位 | String/Number | - | 0 |
| label | 图标右侧/下方的 `label` 文字 | String | - | - |
| label-size | `label` 字体大小，单位 px | String/Number | - | 14 |
| label-color | `label` 字体颜色 | String | - | #606266 |
| label-pos | `label` 相对于图标的位置 | String | bottom/top/left | right |
| margin-left | `label` 在右方时与图标的距离，单位 px | String | - | 4 |
| margin-top | `label` 在下方时与图标的距离，单位 px | String | - | 4 |
| margin-bottom | `label` 在上方时与图标的距离，单位 px | String | - | 4 |
| margin-right | `label` 在左侧时与图标的距离，单位 px | String | - | 4 |
| index | 一个用于区分多个图标的值，点击图标时通过 `click` 事件传出 | String | - | - |
| hover-class | 图标按下去的样式类 | String | - | - |
| custom-prefix | 自定义字体图标库时，需要写上此值 | String | - | - |
| custom-style | icon的样式，对象形式 | String | - | - |
| show-decimal-icon | 是否为 DecimalIcon | String | true | false |
| inactive-color | 背景颜色，可接受主题色，仅 Decimal 时有效 | String | - | #ececec |
| percent | 显示的百分比，仅 Decimal 时有效 | String/Number | - | 50 |

## Events

| 事件名称 | 说明 | 回调参数 |
| ---  | --- | --- |
| click | 点击图标时触发 | index: 通过 `props` 传递的 `index` 值 |
