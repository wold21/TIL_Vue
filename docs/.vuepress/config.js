// config.js
module.exports = {
  title: "Welcome to ",
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
