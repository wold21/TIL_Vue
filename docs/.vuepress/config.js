// config.js
module.exports = {
    title: 'vuepress-stater', // 사이트 타이틀
    description: 'vuepress로 만든 문서입니다.',
    base: "/TIL_Vue/",
	  dest: "build",
    themeConfig: {
      logo: 'https://cdn.shopify.com/s/files/1/0276/4803/2851/files/10375_-_Inferno_22_09_20_122834a1-bdd3-4886-b963-b53234fc46e5_480x480.jpg?v=1604507899', // 로고 이미지
      nav: [{
        text: 'GitHub',
        link: 'https://github.com/wold21/'
      }, {
        text: 'Blog',
        link: 'https://companion-tazo.tistory.com/'
      }
    ],
      sidebar: 'auto' // h1~h6 같은 heading tag를 기준으로 sidebar를 만들어줌
    }
  }