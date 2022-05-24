import vant from "vant";
import "vant/lib/index.css";

import "../packages/common/style/demo.scss";

const examples = require.context("../packages/", true, /\.vue/);
const components = examples.keys().map((fileName) => {
  // 组件实例
  const component = examples(fileName);
  // 截取路径作为组件名
  const componentName =
    component.name ||
    fileName.replace('./', '')
      .replace(/\//g, "-")
      .replace(/(\-index|\.vue)/g, "");

  return {
    name: componentName,
    component: component.default || component,
  };
});

export default async ({ Vue }) => {
  components.forEach(({ name, component }) => {
    Vue.component(name, component);
  });

  if (typeof process === "undefined") {
    Vue.use(vant);
  }
};
