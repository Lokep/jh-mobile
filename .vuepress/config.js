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
      "/packages/": [
        { title: "快速上手", collapsable: false, children: ["/packages/"] },
        {
          title: "组件",
          collapsable: false,
          children: [
            "/packages/jh-article-card/",
            "/packages/jh-avatar/",
            "/packages/jh-backlog/",
            "/packages/jh-badge/",
            "/packages/jh-button/",
            "/packages/jh-card/",
            "/packages/jh-cell/",
            "/packages/jh-chat/",
            "/packages/jh-copyright/",
            "/packages/jh-divider/",
            "/packages/jh-empty/",
            "/packages/jh-function-list/",
            "/packages/jh-icon/",
            "/packages/jh-medal/",
            "/packages/jh-notice-bar/",
            "/packages/jh-progress/",
            "/packages/jh-result/",
            "/packages/jh-sketelon/",
            "/packages/jh-structured-paragraph/",
            "/packages/jh-subject-card/",
            "/packages/jh-tab/",
            "/packages/jh-tag/",
            "/packages/jh-timeline/"
          ],
        },
      ],
    },
    lastUpdated: true,
    smoothScroll: true,
  },
};
