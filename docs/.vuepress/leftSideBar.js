module.exports = [
    {
      title: "🌏 Network",
      collapsable: true,
      children: [
        {
          title: "Network",
          collapsable: true,
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
        {
          title: "Database",
          collapsable: true,
          children: [
            "/Database/Database/intro/intro.md",
            "/Database/Database/RelationDatabase/relation_database.md",
            "/Database/Database/StoreFuction/store_fuction.md",
            "/Database/Database/StoreProcedure/store_procedure_1.md",
            "/Database/Database/StoreProcedure/store_procedure_2.md",
            "/Database/Database/Trigger/trigger.md",
            "/Database/Database/DBArchitecture/db_architecture.md",
            "/Database/Database/PartioningShardingReplication/1.md",
            "/Database/Database/DBCP/dbcp.md",
            {
              title: "Concurrency",
              collapsable: true,
              children: [
                "/Database/Database/Concurrency/1/schedule_serializability.md",
                "/Database/Database/Concurrency/2/recoverability.md",
                "/Database/Database/TransactionAcid/transaction_acid.md",
                "/Database/Database/Isolation/isolation.md",
                "/Database/Database/Lock/lock.md",
              ],
            },
            {
              title: "MVCC",
              collapsable: true,
              children: [
                "/Database/Mvcc/1/mvcc_1.md",
                "/Database/Mvcc/2/mvcc_2.md"
              ],
            },
            {
              title: "정규화",
              collapsable: true,
              children: [
                "/Database/Database/FunctionalDependency/functional_dependency.md",
                "/Database/Database/Normalization/1/1.md",
                "/Database/Database/Normalization/2/2.md"
              ],
            },
            {
              title: "Index",
              collapsable: true,
              children: [
                "/Database/Database/DBIndex/db_index.md",
                {
                  title: "B-tree",
                  collapsable: true,
                  children: [
                    "/Database/Database/B-tree/1/1.md",
                    "/Database/Database/B-tree/2/2.md",
                    "/Database/Database/B-tree/3/3.md"
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "SQL",
          collapsable: true,
          children: [
            "/Database/Sql/Sql/intro.md",
            "/Database/Sql/Insert_Update/insert_update_delete.md",
            "/Database/Sql/Select/select.md",
            "/Database/Sql/Subquery/subquery.md",
            "/Database/Sql/NULL/null.md",
            "/Database/Sql/Join/join.md",
            "/Database/Sql/Groupby_OrderBy/groupby_orderBy.md",
          ],
        },
       
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
        "/JPA/Summary/summary.md",
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