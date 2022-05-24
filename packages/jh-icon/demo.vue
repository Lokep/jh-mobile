<template>
  <van-tabs v-model="active">
    <van-tab title="用法示例">
      <a class="anchor" href="#基本用法">基本用法</a>
      <van-row>
        <van-col span="6">
          <jh-icon name="L-mima" />
        </van-col>
        <van-col span="6">
          <jh-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
        </van-col>
      </van-row>

      <van-divider />

      <a class="anchor" href="#图标颜色">图标颜色</a>
      <van-row>
        <van-col span="6">
          <jh-icon name="L-zhengjian" color="#1989fa" size="40" />
        </van-col>
        <van-col span="6">
          <jh-icon name="F-xuetang1" color="#ee0a24" size="40" />
        </van-col>
      </van-row>

      <van-divider />

      <a class="anchor" href="#图标大小">图标大小</a>
      <van-row>
        <van-col span="6">
          <jh-icon name="F-fuzhen" size="40" label="复诊" labelPos="bottom" />
        </van-col>
        <van-col span="6">
          <jh-icon name="L-tixing" size="60" />
        </van-col>
      </van-row>
    </van-tab>

    <van-tab title="线性图">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(item, index) in lineIconList"
          :key="index"
          @click="e => selectIcon(item.name, e)"
        >
          <jh-icon :name="item.name" size="32" color="#666" />
          <span class="jh-icon-name">{{item.name}}</span>
        </van-grid-item>
      </van-grid>
    </van-tab>

    <van-tab title="实体图">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(item, index) in fillIconList"
          :key="index"
          @click="e => selectIcon(item.name, e)"
        >
          <jh-icon :name="item.name" size="32" color="#666" />
          <span class="jh-icon-name">{{item.name}}</span>
        </van-grid-item>
      </van-grid>
    </van-tab>
  </van-tabs>
</template>
<script>
import clip from '../common/utils/clipboard';
import icons from './list'

const lineIconList = [
  { name: 'L-mima' },
  { name: 'L-tianjia' },
  { name: 'L-shoujihao' },
  { name: 'L-yanzheng' },
  { name: 'L-kapian' },
  { name: 'L-zhengjian' },
  { name: 'L-bianji' },
  { name: 'L-guanbi' },
  { name: 'L-jiantou2-shang-2' },
  { name: 'L-jiantou2-shang-1' },
  { name: 'L-fankui' },
  { name: 'L-jiantou1-xia' },
  { name: 'L-jiantou2-shang' },
  { name: 'L-jiantou1-shang' },
  { name: 'L-jiantou1-you' },
  { name: 'L-jiantou1-zuo' },
  { name: 'L-jiantou2-xia' },
  { name: 'L-shaixuan' },
  { name: 'L-shanchu' },
  { name: 'L-shoucang' },
  { name: 'L-shuoming' },
  { name: 'L-tixing' },
  { name: 'L-xiangji' },
  { name: 'L-yaoxiang' },
  { name: 'L-shebei' },
];

const fillIconList = [
  { name: 'F-xuetang1' },
  { name: 'F-zanting' },
  { name: 'F-zhengchang' },
  { name: 'F-bofang' },
  { name: 'F-weiwancheng' },
  { name: 'F-yichang2' },
  { name: 'F-duigou' },
  { name: 'F-fuzhen' },
  { name: 'F-jiantou1-you' },
  { name: 'F-jiantou1-xia' },
  { name: 'F-jiantou1-zuo' },
  { name: 'F-fengxianguanli' },
  { name: 'F-shangsheng' },
  { name: 'F-jingqiliuliang' },
  { name: 'F-rili' },
  { name: 'F-jingqi' },
  { name: 'F-gengduo' },
  { name: 'F-suifang' },
  { name: 'F-pailuan' },
  { name: 'F-shenghuofuwu' },
  { name: 'F-renwu' },
  { name: 'F-tongjing' },
  { name: 'F-tizhong' },
  { name: 'F-wode' },
  { name: 'F-shoucang' },
  { name: 'F-xiajiang' },
  { name: 'F-jiantou1-shang' },
  { name: 'F-xueya' },
  { name: 'F-tiwen' },
  { name: 'F-xiangji' },
  { name: 'F-gerenxinxi' },
  { name: 'F-shezhi' },
  { name: 'F-xinqing' },
  { name: 'F-yinshi' },
  { name: 'F-yongyao' },
  { name: 'F-yinshui' },
  { name: 'F-yongyaotixing' },
  { name: 'F-tiwei' },
  { name: 'F-yichang' },
  { name: 'F-zhishi' },
  { name: 'F-zhoubao' },
  { name: 'F-zhengzhuang' },
  { name: 'F-yuebao' },
  { name: 'F-yundong' },
];

export default {
  name: 'jh-iconfont-demo',

  data() {
    return {
      active: 0,
      lineIconList: icons.filter(item => item.name.indexOf('L-') === 0),
      fillIconList: icons.filter(item => item.name.indexOf('F-') === 0)
    };
  },

  created() {
    console.log(icons);
  },

  methods: {
    selectIcon(name, event) {
      clip(name, event);
    },
  },
};
</script>

<style scoped lang="scss">
@import '../common/style/mixins.scss';

.jh-icon-name {
  @include multi-ellipsis(1);
  font-size: 10px;
  text-align: center;
}
</style>
