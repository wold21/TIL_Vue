const leftSideBar = require("./leftSideBar");

// config.js
module.exports = {
  plugins: [
    [
        "sitemap", {hostname : "https://wold21.github.io/TIL_Vue/"},
        "@vuepress/google-analytics", {ga: "G-Z0007GLFLP"}
    ],
    ["@vuepress/last-updated"],
    ["@vuepress/back-to-top"],
    ["vuepress-plugin-code-copy"]
  ],
  title: "코드를 부르자",
  description: "Hyuk's tech Blog",
  base: "/TIL_Vue/",
  dest: "build",
  themeConfig: {
    lastUpdated: '작성일 ', 
    smoothScroll: true,
    logo:
      "https://cdn.shopify.com/s/files/1/0276/4803/2851/files/10375_-_Inferno_22_09_20_122834a1-bdd3-4886-b963-b53234fc46e5_480x480.jpg?v=1604507899",
    sidebar: leftSideBar,
    nav: [
      {
        text: "GitHub",
        link: "https://github.com/wold21/",
      },
      {
        text: "Blog",
        link: "https://companion-tazo.tistory.com/",
      },
    ],
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/main.css' }],
    ['meta', { name: 'last-updated', content: (new Date()).toISOString() }],
  ],
};
