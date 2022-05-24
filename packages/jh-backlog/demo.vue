<template>
  <div class="backlog-demo">
    <a class="anchor" href="#基本用法">基本用法</a>
    <jh-backlog title="太棒啦！今日任务已经全部完成～" next="看看明天的食谱吧" />

    <van-divider />

    <a class="anchor" href="#自定义扩展">自定义扩展</a>
    <jh-backlog title="太棒啦！今日任务已经全部完成～" next="看看明天的食谱吧">
      <van-button type="info">点击查看明日食谱</van-button>
    </jh-backlog>
  </div>
</template>

<script>
export default {
  name: 'BacklogDemo',
};
</script>
