# Result 结果

用于对用户的操作结果或者异常状态做反馈。

:::slot preview
<ClientOnly>
  <jh-result-demo />
</ClientOnly>
:::

## 基本用法

```html
<template>
  <jh-result type="success" title="评估完成" subTitle="评估结果">
    <div class="result-evaluate">
      <em>86°</em>
    </div>
    <template slot="extra">
      <div class="jh-result-footer">
        <van-button type="primary" block>完成</van-button>
      </div>
    </template>
  </jh-result>
</template>
```

## 异常类型扩展

```html
<template>
  <jh-result type="fail" title="评估失败" subTitle="失败原因" >
    <div class="result-evaluate">
      <p>
        那些更棒的点子来自于个体依然用过去习惯的方式思考创意时——坐在办公桌前时，
        在咖啡店等咖啡时，洗澡时。这些由人们独自想出的点子更胜一筹。
        当讨论会的狂热劲头散去，头脑风暴产生的点子其实并没有那么特别
      </p>
    </div>
    <template slot="extra">
      <div class="jh-result-footer">
        <van-button type="primary" block>重新测评</van-button>
      </div>
    </template>
  </jh-result>
</template>
```

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 结果类型 | string | `success` 成功 / `fail` 失败 | `success` |
| title | 主标题 | string | - | - |
| subTitle | 副标题 | string | - | - |

## Slot

| 名称  | 说明               |
| ------ | ------------------ |
| default  | 自定义内容，传入自定义插槽时，sustain 和 total 无效 |
| extra  | 自定义底部额外区域 |
