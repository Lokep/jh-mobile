<template>
  <div class="mobile-navbar align-center">
    <div class="mobile-navbar--icon"></div>
    <div class="mobile-">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "MobileNavBar",
  props: {
    title: String,
    leftArrow: Boolean,
  }
}
</script>

<style lang="scss">
.mobile {
  &-navbar {
    height: 50px;
    background-color: #fff;
    line-height: 50px;
    text-align: center;
  }
}

</style>