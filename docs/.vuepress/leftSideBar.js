module.exports = [
    {
      title: "🌏 Network",
      collapsable: true,
      children: [
        {
          title: "Network",
          children: [
           "/Network/Network/internet.md",
           "/Network/Network/protocol.md",
           "/Network/Network/www_and_web.md",
           "/Network/Network/socket_port_TCPconnection.md",
           "/Network/Network/socket_port_TCPconnection_1.md",
           "/Network/Network/segment_datagram_packet_frame.md",
           "/Network/Network/byte_stream_message_oriented.md"
          ],
        },
        "/Network/HTTP/http.md", 
        "/Network/TCPandUDP/TCP_UDP.md",
        {
          title: "CORS",
          children: [
           "/Network/CORS/cors_intro.md",
          ],
        },
        ],
    },
    {
      title: "🛢️ Database",
      collapsable: true,
      children: [
        "/Database/intro/intro.md",
        "/Database/relation_database/relation_database.md",
      ]
    },
    {
      title: "🕸 Web",
      collapsable: true,
      children: [
        "/Web/WebContainer/WebContainer.md",
        "/Web/WebServer&WAS/webserver_was.md",
        "/Web/WarJar/war_jar.md",
      ],
    },
    {
      title: "🧩 DataStructure",
      collapsable: true,
      children: ["/DataStructure/TimeComplexity/TimeComplexity.md"],
    },
    {
      title: "🦣Gradle",
      collapsable: true,
      children: [
        "/Gradle/GradleProjectStructure.md",
      ],
    },
    {
      title: "🌱 Spring",
      collapsable: true,
      children: [
        "/Spring/Intro/SpringIntro.md",
        "/Spring/IoC_DI/DI.md",
        "/Spring/IoC_DI/IoC.md",
        "/Spring/Container/SpringContainer.md",
        "/Spring/SpringBoot/SpringBootStart.md",
      ],
    },
    {
      title: "☕ Java",
      collapsable: true,
      children: [
        "/Java/JavaFX/FXML/FXML.md",
      ],
    },
    {
      title: "🥅 JPA",
      collapsable: true,
      children: [
        "/JPA/Intro/Intro.md",
        "JPA/emf_jpql/emf_jpql.md",
        "JPA/persistence_manage/persistence_manage.md",
        "JPA/entity_mapping/entity_mapping.md",
        "JPA/relation_intro/relation_intro.md",
        "JPA/relation_mapping/relation_mapping.md",
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
      title: "🎡 Tech",
      collapsable: true,
      children: ["/Tech/MSA/msa.md"],
    }
  ];