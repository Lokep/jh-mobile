<template>
  <main class="page">
    <slot name="top" />

    <div class="jh-content">
      <Content class="theme-default-content" />

      <Mobile v-show="isShowMobile">
        <div class="jh-slot" ref="jhSlot" slot="demo">
          <Content slot-key="preview"/>
        </div>
      </Mobile>
    </div>

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import Mobile from "./Mobile.vue"

export default {
  components: {
    PageEdit,
    PageNav,
    Mobile,
  },

  props: ['sidebarItems'],

  data: () => ({
    isShowMobile: false,
  }),

  mounted() {
    this.$nextTick(() => {
      this.handleMobileVisible()
    })
  },

  updated () {
    this.handleMobileVisible()
  },

  methods: {
    handleMobileVisible() {
      const slotKey = this.$refs.jhSlot.querySelectorAll('.content__preview')[0]

      this.isShowMobile =  slotKey.childNodes.length > 0
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
.jh-content
  display: flex
  box-sizing: border-box
  padding-right: 360px
  .theme-default-content
    flex: 1
</style>
