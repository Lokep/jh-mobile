const fs = require("fs");
const path = require("path");
const camelCase = require("uppercamelcase");

const RELATIVE_PATH = "/packages/";
const DIR = path.resolve(__dirname, "../packages");

const VUEPRESS_CONFIG = require("./default-config");

// "/packages/": [
//   {
//     title: "开发指南",
//     collapsable: false,
//     children: ["../packages/"],
//   },
//   {
//     title: "组件",
//     collapsable: false,
//     children: ["/packages/","/packages/article-card/"],
//   },
// ],

const STATIC_DIR = ["common", ".DS_Store"];

/**
 * 读取目录，主要是为了修改config里的sidebar
 */
const sidebarItem = [];
const sidebarItemChildren = [];

fs.readdirSync(DIR).forEach((dir) => {

  if (dir.toLocaleLowerCase() === "readme.md") {
    sidebarItem.push({
      title: "快速上手",
      collapsable: true,
      children: [RELATIVE_PATH],
    });
  }

  if (STATIC_DIR.indexOf(dir) <= -1) {
    sidebarItemChildren.push(`${RELATIVE_PATH}${dir}/`);
  }
});

const sidebar = {
  [RELATIVE_PATH]: [
    ...sidebarItem,
    {
      title: "组件",
      children: sidebarItemChildren,
    },
  ],
};

const config = {
  ...VUEPRESS_CONFIG,
  themeConfig: {
    ...VUEPRESS_CONFIG.themeConfig,
    sidebar,
  },
};

console.log(VUEPRESS_CONFIG)

fs.writeFileSync(
  path.resolve(__dirname, "../.vuepress/config.js"),
  `module.exports = ${JSON.stringify(config)};`
);
