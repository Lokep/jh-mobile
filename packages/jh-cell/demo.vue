<template>
  <div class="card-demo">
    <a class="anchor" href="#基本用法">基本用法</a>
    <jh-card shadow class="demo-card">
      <div class="jh-card-header" slot="header">
        <span class="jh-card-title">今日最新记录</span>
        <span>2021-04-12 12:23</span>
      </div>
      <div class="jh-card-topic">
        <span>肩关节前屈角度</span>
        <em>46°</em>
      </div>
    </jh-card>

    <van-divider />

    <a class="anchor" href="#带图片">带图片</a>
    <jh-card shadow class="demo-card">
      <div class="jh-card-header" slot="header">
        <span class="jh-card-title">采集指导</span>
      </div>
      <div class="jh-card-article">
        <img
          class="jh-card-thumb"
          src="https://resource.lanniuh.com/just-fe/mobile/jh-empty-chat.png"
          alt=""
        />
        <div class="jh-card-content">
          <div class="jh-card-box" :class="{ 'jh-card-unfold': !isOpen }">
            <p>
              指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南
              内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容内容指南
              内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容指南内容
            </p>
          </div>
          <div class="jh-btn jh-btn-unfold" @click="toggle">
            点击展开
            <van-icon name="arrow-up" v-if="isOpen" />
            <van-icon name="arrow-down" v-else />
          </div>
        </div>
      </div>
    </jh-card>

    <van-divider />

    <a class="anchor" href="#图文列表">图文列表</a>
    <jh-card shadow class="demo-card">
      <div class="jh-card-header" slot="header">
        <span class="jh-card-title">采集指导</span>
      </div>
      <div class="jh-list">
        <div class="jh-list-item" v-for="(item, idx) in list" :key="item.time + idx">
          <div class="jh-item-bd">
            <h4 class="jh-item-title">{{ item.time }}</h4>
            <div class="jh-item-content">
              <span class="jh-tags">患肢前屈高度：{{ item.height }}</span>
              <span class="jh-tags">患肢角度：{{ item.angle }}</span>
            </div>
          </div>
          <div class="jh-item-ft">
            <img :src="item.icon" alt="" />
          </div>
        </div>
      </div>
    </jh-card>
  </div>
</template>

<script>
export default {
  name: 'CardDemo',

  data() {
    return {
      isOpen: false,
      list: [
        {
          time: '2021-03-19 12:23:34',
          height: '41cm',
          angle: '70°',
          icon: 'https://resource.lanniuh.com/just-fe/mobile/icon01.png',
        },
        {
          time: '2021-03-19 12:23:34',
          height: '41cm',
          angle: '70°',
          icon: 'https://resource.lanniuh.com/just-fe/mobile/icon01.png',
        },
        {
          time: '2021-03-19 12:23:34',
          height: '41cm',
          angle: '70°',
          icon: 'https://resource.lanniuh.com/just-fe/mobile/icon02.png',
        },
      ],
    };
  },

  methods: {
    toggle(input) {
      const { isOpen } = this;

      this.isOpen = !isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin multi-ellipsis($lines: 0) {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: $lines;
  -webkit-box-orient: vertical;
}

.card-demo {
  .jh-card-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 15px;
    font-size: 15px;
    color: #999;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 3px;
      width: 3px;
      height: 16px;
      background-color: #31ce8c;
    }

    .jh-card-title {
      margin-left: 10px;
      color: #333;
      font-size: 15px;
    }
  }

  .jh-card-topic {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #333;
    font-size: 15px;

    em {
      margin: 12px 0;
      line-height: 45px;
      font-style: normal;
      font-size: 32px;
      font-weight: bold;
    }
  }

  .jh-card-article {
    display: flex;
    padding: 10px 15px 15px;

    .jh-card-thumb {
      margin-right: 15px;
      width: 108px;
      height: 145px;
      background-color: blue;
    }

    .jh-card-content {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      color: #333;
      font-size: 15px;

      .jh-card-unfold {
        @include multi-ellipsis(6);
      }

      .jh-btn {
        color: #31ce8c;
        font-size: 12px;

        .icon-icon_enter2 {
          font-size: 12px;
        }
      }
    }
  }

  .jh-list {
    margin-left: 12px;
    margin-top: -10px;
    padding-bottom: 16px;
    background-color: #fff;

    .jh-list-item {
      display: flex;
      align-items: center;
      padding: 12px 12px 12px 0;
      border-bottom: 1px solid #ebedf0;

      .jh-item-bd {
        flex: 1;
        color: #666;
        font-size: 16px;

        .jh-item-title {
          margin-bottom: 10px;
          color: #333;
        }

        .jh-item-content {
          .jh-tags {
            margin-right: 15px;
          }
        }
      }

      .jh-item-ft {
        img {
          width: 27px;
          height: 27px;
        }
      }
    }
  }
}
</style>
