(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{466:function(t,s,a){t.exports=a.p+"assets/img/select_1.01bf11d2.png"},530:function(t,s,a){"use strict";a.r(s);var e=a(17),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"select"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[t._v("#")]),t._v(" Select")]),t._v(" "),s("h2",{attrs:{id:"select-statement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select-statement"}},[t._v("#")]),t._v(" Select statement")]),t._v(" "),s("img",{attrs:{src:a(466),alt:"select_1",height:"150"}}),t._v(" "),s("p",[t._v("가장 기본적인 select 구문으로 조회하고자 하는 데이터에 따라서 조건과 테이블 그리고 나열된 속성 값이 달라지며\nwhere 절에는 조건 타입에 따라서 selection condition과 join condition으로 나눠진다.")]),t._v(" "),s("h2",{attrs:{id:"as"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#as"}},[t._v("#")]),t._v(" AS")]),t._v(" "),s("ul",[s("li",[t._v("AS는 테이블이나 attribute에 별칭을 붙일 때 사용한다.")]),t._v(" "),s("li",[t._v("AS는 생략 가능하다.")])]),t._v(" "),s("div",{staticClass:"language-SQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" leader_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" leader_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" position\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" project "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" P"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" employee "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" E\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" P"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2002")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" P"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leader_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"distinct"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#distinct"}},[t._v("#")]),t._v(" DISTINCT")]),t._v(" "),s("ul",[s("li",[t._v("중복되는 tuple을 제외하고 싶을 때 사용한다.")])]),t._v(" "),s("div",{staticClass:"language-SQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTINCT")]),t._v(" P"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" P"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" employee "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" works_on "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" W"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" project "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" P\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DSGN'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v("\n      E"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" W"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("empl_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" W"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proj_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" P"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"like"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#like"}},[t._v("#")]),t._v(" LIKE")]),t._v(" "),s("ul",[s("li",[t._v("조건문에 사용되며 조회되는 데이터 중 원하는 데이터를 필터링하기 위해 사용하며 특정 문자열로 된 데이터를 찾기 위해 많이 사용한다.")])]),t._v(" "),s("div",{staticClass:"language-SQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" name\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" employee\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'N%'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%N'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("이름이 n으로 시작하거나 n으로 끝나는 사람을 찾기 위한 쿼리")])]),t._v(" "),s("div",{staticClass:"language-SQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" name\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" employee\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%NG%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("이름에 NG가 들어간 사람을 찾기 위한 쿼리")])]),t._v(" "),s("div",{staticClass:"language-SQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" name\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" employee\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("LIKE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'J____'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("이름이 J로 시작하고 총 4글자인 사람을 찾기 위한 쿼리")])]),t._v(" "),s("h2",{attrs:{id:"asterisk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asterisk"}},[t._v("#")]),t._v(" *(asterisk)")]),t._v(" "),s("ul",[s("li",[t._v("조회되는 모든 데이터의 속성을 알고 싶을 때 사용")]),t._v(" "),s("li",[t._v("만약 속성이 100개가 되고 그것을 모두 조회하고 싶을 때 100개를 나열하는게 아니라 *만 써주면 된다.")])]),t._v(" "),s("h2",{attrs:{id:"주의사항"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#주의사항"}},[t._v("#")]),t._v(" 주의사항")]),t._v(" "),s("ul",[s("li",[t._v("SELECT로 조회할 때 조건들을 포함해서 조회를 한다면 이때 조건들과 관련된 속성에 인덱스가 걸려있어야 한다.")]),t._v(" "),s("li",[t._v("그렇지 않다면 데이터가 많아질 시 조회 속도가 느려진다.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);