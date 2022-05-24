<template>
  <div>
    <a class="anchor" href="#基本用法">基本用法</a>
    <jh-tag text="雪月夜" type="success" />

    <van-divider />

    <a class="anchor" href="#设置标签的类型">设置标签的类型</a>
    <jh-tag text="一丘之貉" mode="dark" />
    <jh-tag text="沆瀣一气" mode="light" />
    <jh-tag text="狼狈为奸" mode="plain" />

    <van-divider />

    <a class="anchor" href="#设置标签的形状">设置标签的形状</a>
    <jh-tag text="主谓宾" shape="circle" />
    <jh-tag text="定状补" shape="circleLeft" />
  </div>
</template>

<script>
export default {
  name: 'jh-tag-demo',

  data() {
    return {};
  },

  methods: {},
};
</script>
