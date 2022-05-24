# Chat 聊天消息

展示每一条聊天消息的形态。

:::slot preview
<ClientOnly>
  <jh-chat-demo />
</ClientOnly>
:::

## 基本用法

通过 `avatar` 和 `message` 设置最简单的聊天消息。回复消息时，需要设置 `reverse` 反转信息的展示顺序。

```html
<template>
  <div class="chat-demo">
    <jh-chat
      :avatar="avatar01"
      message="HI，我是你的专属健康管理师，接下来我会针对今天的病情问你几个问题哦~"
    />
    <jh-chat :avatar="avatar02" message="好的呀" reverse />
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatar01: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      avatar02: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    }
  },
};
</script>
```

## 消息交互

聊天消息可通过 `type` 设置不同的操作类型。支持三种类型：radio、checkbox 和 input 三种类型。

### 交互-单选操作

```html
<template>
  <div class="chat-demo">
    <jh-chat
      :avatar="avatar01"
      type="radio"
      message="手术包扎拆除了吗？"
    >
      <van-radio-group v-model="radios" @change="handleRadioChange">
        <van-cell-group>
          <van-cell
            v-for="item in radioList"
            :key="item"
            :title="item"
            clickable
            @click="radio = item"
          >
            <template #right-icon>
              <van-radio :name="item" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </jh-chat>
    <jh-chat :avatar="avatar02" message="已拆除" reverse @recall="handleRecall" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      radioList: ['已拆除', '还没拆除'],
      radios: '',
    };
  },

  methods: {
    handleRadioChange(radio) {
      console.log('单选操作：' + radio);
    },

    handleRecall() {
      console.log('撤回操作');
    },
  },
}
</script>
```

### 交互-多选操作

```html
<template>
  <div class="chat-demo">
    <jh-chat :avatar="avatar01" message="最近注意饮食了吗？" type="checkbox">
      <van-checkbox-group v-model="checkboxes" @change="handleCheckboxChange">
        <van-cell-group>
          <van-cell
            v-for="item in checkboxList"
            clickable
            :key="item"
            :title="item"
          >
            <template #right-icon>
              <van-checkbox :name="item" ref="checkboxes" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
      <div class="jh-chat-operations">
        <van-button
          type="info"
          class="jh-chat-btn"
          round
          :disabled="isDisabled"
          @click="handleSubmit"
        >
          确认
        </van-button>
      </div>
    </jh-chat>
    <jh-chat
      :avatar="avatar02"
      message="完全没注意、没怎么注意"
      reverse
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkboxList: ['完全没注意', '不怎么注意', '注意了一些', '十分注意'],
      checkboxes: [],
      isDisabled: true,
    };
  },

  methods: {
    handleCheckboxChange(checkbox) {
      console.log('多选操作：' + checkbox);

      const { checkboxes = [] } = this;

      if (checkboxes.length > 0) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },

    handleSubmit() {
      console.log(this.checkboxes);
    },
  },
}
</script>
```

### 交互-输入操作

```html
<template>
  <div class="chat-demo">
    <jh-chat
      :avatar="avatar01"
      message="饮食也是很重要的内容哦，记得注意哈"
      type="input"
    >
      <van-cell-group>
        <van-field
          v-model="inputs"
          label=""
          :placeholder="placeholder"
          @change="handleInputChange"
        />
      </van-cell-group>
      <div class="jh-chat-operations">
        <van-button
          type="info"
          round
          class="jh-chat-btn"
          :disabled="isDisabled"
          @click="handleSubmit"
        >
          确认
        </van-button>
      </div>
    </jh-chat>
    <jh-chat
      :avatar="avatar02"
      message="以下是今日的评估总结和必读宣教，请仔细阅读哦~"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputs: '',
      placeholder: '请输入',
      isDisabled: true,
    };
  },

  methods: {
    handleInputChange(input) {
      console.log(input.target.value);

      if (input.target.value.length > 0) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },

    handleSubmit() {
      console.log(this.inputs);
    },
  },
}
</script>
```

## 自定义消息类型

通过 `slot` 展示自定义消息类型。

```html
<template>
  <div class="chat-demo">
    <jh-chat
      :avatar="avatar01"
      message="手术包扎拆除了吗？"
    >
      <p>自定义消息自定义消息自定义消息。</p>
    </jh-chat>
    <jh-chat :avatar="avatar01">
      <jh-article-card class="article-card" :title="title" reverse shape>
        <img
          class="article-cover"
          :src="cover"
          :alt="title"
          slot="header"
        />
      </jh-article-card>
      <jh-article-card class="article-card" :title="title" reverse shape isRead>
        <img
          class="article-cover"
          :src="cover"
          :alt="title"
          slot="header"
        />
      </jh-article-card>
    </jh-chat>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cover: "https://resource.lanniuh.com/Remedy/3xAYfcxW2IWZY4vuwPIOtg.png",
      title: "妈妈应该怎么清洗宝宝的伤口以及该注意的事项",
    };
  },
}
</script>
```

## Attributes

| 参数              | 说明                             | 类型            | 可选值 | 默认值 |
| ----------------- | ------------------------------- | --------------- | ------ | ------ |
| avatar            | 设置头像的图标链接                 | string          |        |        |
| message           | 消息内容                          | string          |  |  |
| reverse           | 回复消息，展示顺序反转              | boolean         | true / false | false  |
| type              | 设置消息类型                      | string          |  |  |
| max               | 最大选项限制，type 为 checkbox 时设置 | string          |  | 0 |

## Events

| 事件名   | 说明                | 回调参数 |
| ------  | ------------------ | -------- |
| recall   | 撤回操作 |  |

## Slot

| 名称  | 说明               |
| ------ | ------------------ |
| default  | 自定义消息 |
