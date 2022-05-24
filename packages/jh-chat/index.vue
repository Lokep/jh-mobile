<template>
  <div
    class="jh-chat"
    :class="{
      'jh-chat-reverse': reverse,
      'jh-chat-interaction': type
    }"
  >
    <div class="jh-chat-hd" v-if="avatar">
      <jh-avatar :src="avatar" />
    </div>

    <div class="jh-chat-bd">
      <div class="jh-chat-title" v-if="message">
        <p class="jh-chat-type" v-if="type === 'radio'">单选题</p>
        <p class="jh-chat-type" v-if="type === 'checkbox'">
          多选题
          <template v-if="max">
            (最多选择{{ max }}项)
          </template>
        </p>

        <p>{{ message }}</p>
      </div>

      <slot />
    </div>

    <div class="jh-chat-ft" @click="recall">
      <img
        class="jh-chat-revert"
        src="https://resource.lanniuh.com/Remedy/%E6%92%A4%E5%9B%9E%E6%93%8D%E4%BD%9C.png"
        alt="撤回"
      />
      <p>撤回</p>
    </div>
  </div>
</template>

<script>
import JhAvatar from '../jh-avatar/index.vue';

export default {
  name: 'jh-chat',

  components: {
    JhAvatar,
  },

  props: {
    // 聊天头像，必传
    avatar: {
      type: String,
      required: true,
    },
    // 聊天消息
    message: String,
    // 回复消息，头像顺序反转，回复时必传
    reverse: {
      type: Boolean,
      default: false,
    },
    // 消息交互类型
    type: {
      type: String,
      validator(val) {
        return ['radio', 'checkbox', 'input'].includes(val);
      },
    },
    // 最大选项，仅限多选交互类型，限制最多选择项
    max: Number,
  },

  methods: {
    recall() {
      this.$emit('recall');
    },
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
