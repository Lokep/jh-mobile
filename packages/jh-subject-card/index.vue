<template>
  <div class="jh-subject-card" :class="{ 'jh-subject-card-single': isSingle }">
    <header class="jh-subject-hd">
      <div class="jh-subject-line" :style="{ 'background-color': color }"></div>
      <h3 class="jh-subject-title">{{title}}</h3>
      <span class="jh-subject-units" v-if="units">/{{units}}</span>
    </header>
    <div class="jh-subject-bd" :class="{ 'jh-subject-single': isSingle }">
      <div class="jh-subject-cell" v-for="group in groups" :key="group.name">
        <span class="jh-subject-text" v-if="group.text">{{group.text}}</span>
        <div class="jh-subject-nums">
          <em
            class="jh-subject-major"
            :class="{
              'jh-subject-highlight': group.highlight
            }"
            :style="{ 'background-color': group.color }"
          >
            {{group.major}}
          </em>
          <template v-if="group.total">
            <span>/</span>
            <em>{{group.total}}</em>
          </template>
        </div>
      </div>
    </div>
    <div class="jh-subject-bg"></div>
  </div>
</template>

<script>
export default {
  name: 'jh-subject-card',

  props: {
    color: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    units: String,
    groups: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      isSingle: false,
    };
  },

  created() {
    if (this.groups.length === 1) {
      this.isSingle = true;
    }
  },

  methods: {},
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
