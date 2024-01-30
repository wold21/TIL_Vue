// config.js
module.exports = {
    plugins: [[
        "sitemap", {hostname : "https://wold21.github.io/TIL_Vue/"},
        "@vuepress/google-analytics", {ga: "G-Z0007GLFLP"}
    ]],
    title: "코드를 부르자",
    head:[
        [
            "meta",
            {
                name: "google-site-verification",
                content: "98ofrs5bHu1o8TWDoXUdouRKvfAjQbhqsuX8TxMYb5I"
            },
            "script",
            {
                async: true,
                src: "https://www.googletagmanager.com/gtag/js?id=G-Z0007GLFLP",
            },
        ],
        ["script", {}, ["window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-Z0007GLFLP');"]],
    ],
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
                children: [
                    "/Network/HTTP/http.md",
                    "/Network/TCPandUDP/TCP_UDP.md",
                    {
                        title: "Cors",
                        children: [
                            "/Network/CORS/CORS의 시작.md"
                        ],
                    },
                   ],
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
                title: "☕ Java",
                collapsable: true,
                children: ["/Java/JavaFX/FXML/FXML.md"],
            },
            {
                title: "🥅 JPA",
                collapsable: true,
                children: [
                    "/JPA/Intro/Intro.md",
                    "JPA/EMF-JPQL/EMF-JPQL.md",
                    "JPA/영속성관리/영속성관리.md",
                    "JPA/엔티티매핑/엔티티매핑.md",
                    "JPA/연관관계매핑기초/연관관계매핑기초.md",
                    "JPA/다양한연관관계매핑/다양한연관관계매핑.md",
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
                            "/JavaScript/All Loops/map/map.md",
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
            {
                title: "--------------------",
                children: [],
            },
            {
                title: "🚀 React",
                collapsable: true,
                children: [
                    "React/1.리액트가 만들어진 이유.md",
                    "React/2.리액트를 시작하기 전에.md",
                    "React/3.Index.js.md",
                    "React/4.JSX.md",
                ],
            },
            {
                title: "⁉ TypeScript",
                collapsable: true,
                children: [],
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
