<template>
  <div>
    <a class="anchor" href="#基本用法">基本用法</a>

    <jh-copyright />

    <van-divider />

    <a href="#自定义扩展" class="anchor">自定义扩展</a>

    <jh-copyright>
      <van-row class="custom-copyright" :gutter="20">
        <van-col :span="8">
          <p>内容板块1</p>
          <p>内容板块1</p>
          <p>内容板块1</p>
        </van-col>
        <van-col :span="8">
          <p>内容板块2</p>
          <p>内容板块2</p>
          <p>内容板块2</p>
        </van-col>
        <van-col :span="8">
          <p>内容板块3</p>
          <p>内容板块3</p>
          <p>内容板块3</p>
        </van-col>
      </van-row>
    </jh-copyright>
  </div>
</template>

<script>
export default {
  name: 'CopyrightDemo',
};
</script>

<style lang="scss" scoped>
.custom-copyright {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
</style>
