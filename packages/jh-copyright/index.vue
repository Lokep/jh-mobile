<template>
  <div class="jh-copyright">
    <slot></slot>
    <p>@2021 杭州健海科技有限公司</p>
    <p><a href="https://beian.miit.gov.cn/" target="_blank">浙 ICP 备 15022398 号 -1</a></p>
  </div>
</template>

<script>
export default {
  name: 'jh-copyright',
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
