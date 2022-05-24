<template>
  <div class="paragraph-demo">
    <a class="anchor" href="#基本用法">基本用法</a>
    <jh-structured-paragraph title="粉刺痤疮">
      <div class="paragraph">
        <p class="paragraph-item">发生原因</p>
        <p>
          症状说明症状说明症状说明症状说明症状说明症状说明症状说明症状说明
          症状说明症状说明明症状说明症状说明明症状说明症状说明
        </p>
      </div>
      <div class="paragraph">
        <p class="paragraph-item">处理</p>
        <p>
          症状说明症状说明症状说明症状说明症状说明症状说明症状说明症状说明
          症状说明症状说明明症状说明症状说明明症状说明症状说明
        </p>
      </div>
    </jh-structured-paragraph>

    <van-divider />

    <a class="anchor" href="#自定义扩展">自定义扩展</a>
    <jh-structured-paragraph title="粉刺痤疮">
      <div class="paragraph-hd" slot="header">
        <span>查看更多</span>
        <van-icon name="arrow" />
      </div>
      <div class="paragraph">
        <p class="paragraph-item">发生原因</p>
        <p>
          症状说明症状说明症状说明症状说明症状说明症状说明症状说明症状说明
          症状说明症状说明明症状说明症状说明明症状说明症状说明
        </p>
      </div>
      <div class="paragraph-ft" slot="extra">
        <van-button type="primary" block>扩展操作</van-button>
      </div>
    </jh-structured-paragraph>
  </div>
</template>

<script>
export default {
  name: 'StructuredParagraphDemo',
};
</script>

<style lang="scss" scoped>
.paragraph-demo {
  .paragraph {
    margin-bottom: 15px;
    font-size: 15px;
    color: #333;

    .paragraph-item {
      position: relative;
      margin-bottom: 10px;
      padding-left: 15px;
      font-weight: bold;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: 6px;
        height: 6px;
        background-color: #333;
        border-radius: 6px;
      }
    }
  }
}
</style>
