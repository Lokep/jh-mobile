<template>
  <div class="result-demo">
    <a class="anchor" href="#基本用法">基本用法</a>
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

    <van-divider />

    <a class="anchor" href="#异常类型扩展">异常类型扩展</a>
    <jh-result type="fail" title="评估失败" subTitle="失败原因">
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
  </div>
</template>

<script>
export default {
  name: 'ResultDemo',
};
</script>

<style lang="scss" scoped>
.result-demo {
  .result-evaluate {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;

    em {
      line-height: 90px;
      font-style: normal;
      font-size: 64px;
      color: #333;
    }
  }

  .jh-result-footer {
    margin: 0 15px 15px;
  }
}
</style>
