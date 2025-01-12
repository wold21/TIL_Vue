const leftSideBar = require("./leftSideBar");

// config.js
module.exports = {
  plugins: [
    ["@vuepress/last-updated", {
      transformer: (timestamp) => {
        const moment = require('moment')
        moment.locale('ko')
        // Add debug info
        console.log('Raw timestamp:', timestamp)
        console.log('Moment date:', moment(timestamp).format('YYYY-MM-DD HH:mm:ss'))
        return timestamp ? moment(timestamp).format('YYYY-MM-DD HH:mm:ss') : ''
      },
      dateOptions: {
        hour12: false
      }
    }],
    ["@vuepress/back-to-top"],
    ["vuepress-plugin-code-copy"],
    [
        "sitemap", {hostname : "https://wold21.github.io/TIL_Vue/"},
        "@vuepress/google-analytics", {ga: "G-Z0007GLFLP"}
    ]
  ],
  title: "코드를 부르자",
  description: "Hyuk's tech Blog",
  base: "/TIL_Vue/",
  dest: "build",
  themeConfig: {
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
    lastUpdated: 'Last Updated',
    repo: 'wold21/TIL_Vue',
    docsDir: 'docs',
    docsBranch: 'main'  // 추가: 현재 사용 중인 브랜치 명시
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/main.css' }],
    ['meta', { name: 'last-updated', content: (new Date()).toISOString() }],
  ],
};
