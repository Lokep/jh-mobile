module.exports = {
  theme: "",
  title: "JustFE Mobile 组件中心",
  head: [
    [
      "link",
      { rel: "icon", href: "https://resource.lanniuh.com/common/logo.ico" },
    ],
  ],
  themeConfig: {
    logo: "https://resource.lanniuh.com/common/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "组件", link: "/packages/" },
      { text: "PC 组件库", link: "http://pc.justfe.cn" },
      { text: "文档中心", link: "http://docs.justfe.cn" },
      { text: "NPM 仓库", link: "http://npm.justfe.cn" },
    ],
    extraWatchFiles: ["/packages"],
    sidebarDepth: 2,

    sidebar: {
      
    },
    /**
     * 由于 lastUpdated 是基于 git 的, 所以你只能在一个基于 git 的项目中启用它。
     * 此外，由于使用的时间戳来自 git commit，因此它将仅在给定页的第一次提交之后显示，
     * 并且仅在该页面后续提交更改时更新。
     */
    lastUpdated: true,
    smoothScroll: true,
  },
};
