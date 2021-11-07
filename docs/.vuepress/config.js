// config.js
module.exports = {
  title: "코드를 부르자",
  description: "Hyuk's tech Blog",
  base: "/TIL_Vue/",
  dest: "build",
  themeConfig: {
    logo:
      "https://cdn.shopify.com/s/files/1/0276/4803/2851/files/10375_-_Inferno_22_09_20_122834a1-bdd3-4886-b963-b53234fc46e5_480x480.jpg?v=1604507899",
    sidebar: [
      {
        title: "🌏 Network",
        collapsable: true,
        children: ["/Network/HTTP/http.md", "/Network/TCPandUDP/TCP_UDP.md"],
      },
      {
        title: "🕸 Web",
        collapsable: true,
        children: [
          "/Web/WebContainer/WebContainer.md",
          "/Web/WebServer&WAS/webserver_was.md",
          "/Web/WarJar/War와Jar.md",
        ],
      },
      {
        title: "🧩 DataStructure",
        collapsable: true,
        children: ["/DataStructure/TimeComplexity/TimeComplexity.md"],
      },
      {
        title: "🌱 Spring",
        collapsable: true,
        children: [
          "/Spring/IoC_DI/DI.md",
          "/Spring/IoC_DI/IoC.md",
          "/Spring/Container/SpringContainer.md",
          "/Spring/SpringBoot/SpringBootStart.md",
          "/Spring/Gradle/GradleProjectStructure.md",
        ],
      },
      {
        title: "🥪 JavaScript",
        collapsable: true,
        children: [
          "/JavaScript/DOM/DOM.md",
          "/JavaScript/Syntax/Object.md",
          {
            title: "Loops",
            children: [
              "/JavaScript/All Loops/Loop.md",
              "/JavaScript/All Loops/forEach/forEach.md",
              "/JavaScript/All Loops/everySome/everySome.md",
            ],
          },
        ],
      },
      {
        title: "🌊 jQuery",
        collapsable: true,
        children: ["/jQuery/jQuery/jQuery.md"],
      },
      {
        title: "⛓ Ajax",
        collapsable: true,
        children: [
          "/Ajax/Ajax_Intro/AjaxIntro.md",
          "/Ajax/Ajax_First/Ajax_First.md",
          "/Ajax/Ajax_Second/Ajax_Second.md",
        ],
      },
      {
        title: "🍃 Thymeleaf",
        collapsable: true,
        children: ["/Thymeleaf/Thymeleaf.md"],
      },
      {
        title: "🥴 Mustache",
        collapsable: true,
        children: ["/Mustache/Mustache.md"],
      },
      {
        title: "😖 HandleBars.js",
        collapsable: true,
        children: ["/Handlebars/Handlebars.js.md"],
      },
      {
        title: "🦋 Debug",
        collapsable: true,
        children: ["/Debug/Debug.md"],
      },
    ],
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
};
