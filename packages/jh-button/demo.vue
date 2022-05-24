<template>
  <div>
    <a class="anchor" href="#基本用法">基本用法</a>
    <jh-button>按钮</jh-button>
    <jh-button type="warning">按钮</jh-button>
    <jh-button type="danger">按钮</jh-button>
    <jh-button type="success">按钮</jh-button>

    <van-divider />

    <a class="anchor" href="#朴素按钮">朴素按钮</a>
    <jh-button plain>按钮</jh-button>
    <jh-button plain type="warning">按钮</jh-button>
    <jh-button plain type="danger">按钮</jh-button>
    <jh-button plain type="success">按钮</jh-button>

    <van-divider />

    <a class="anchor" href="#禁用状态">禁用状态</a>
    <jh-button disabled>按钮</jh-button>
    <jh-button plain disabled>按钮</jh-button>

    <van-divider />

    <a class="anchor" href="#按钮尺寸">按钮尺寸</a>
    <jh-button size="small">按钮</jh-button>
    <jh-button size="normal">按钮</jh-button>

    <van-divider />

    <a class="anchor" href="#块级元素">块级元素</a>
    <jh-button block size="small">按钮</jh-button>
    <br>
    <br>
    <jh-button block size="normal">按钮</jh-button>

    <van-divider />

    <a class="anchor" href="#按钮形状">按钮形状</a>
    <jh-button block round size="small">按钮</jh-button>
    <br>
    <br>
    <jh-button block round size="normal">按钮</jh-button>

    <van-divider />


    <a class="anchor" href="#图标">图标</a>
    <jh-button size="small">
      <jh-icon name="L-tianjia" slot="prefix" size="16" color="#fff" />
      按钮
    </jh-button>
    <jh-button type="danger" size="small">
      <jh-icon name="L-tianjia" slot="prefix" size="16" color="#fff" />
      按钮
    </jh-button>
    <jh-button type="success" size="small">
      <jh-icon name="L-tianjia" slot="prefix" size="16" color="#fff" />
      按钮
    </jh-button>
    <br>
    <br>
    <jh-button size="normal">
      按钮
      <jh-icon name="L-tianjia" slot="suffix" size="16" color="#fff" />
    </jh-button>

    <jh-button type="danger" size="normal">
      按钮
      <jh-icon name="L-tianjia" slot="suffix" size="16" color="#fff" />
    </jh-button>

    <jh-button type="success" size="normal">
      按钮
      <jh-icon name="L-tianjia" slot="suffix" size="16" color="#fff" />
    </jh-button>

    <van-divider />
  </div>
</template>

<script>
export default {
  name: 'jh-button-demo',
  props: {},
  data () {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
  },
  components: {}
}
</script>

<style lang="scss" scoped>
// style
</style>
