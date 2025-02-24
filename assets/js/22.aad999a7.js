(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{467:function(t,a,s){t.exports=s.p+"assets/img/datatype_number.b95923ce.png"},468:function(t,a,s){t.exports=s.p+"assets/img/datatype_string.7397dccc.png"},469:function(t,a,s){t.exports=s.p+"assets/img/datatype_time.e826538b.png"},470:function(t,a,s){t.exports=s.p+"assets/img/datatype_etc.e90acd92.png"},471:function(t,a,s){t.exports=s.p+"assets/img/foreign_key.1344e987.png"},472:function(t,a,s){t.exports=s.p+"assets/img/constraint_name.acb25ba1.png"},473:function(t,a,s){t.exports=s.p+"assets/img/alter.0ef19938.png"},531:function(t,a,s){"use strict";s.r(a);var e=s(17),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sql-시작"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-시작"}},[t._v("#")]),t._v(" SQL 시작")]),t._v(" "),a("h2",{attrs:{id:"sql의-기본-개념"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql의-기본-개념"}},[t._v("#")]),t._v(" SQL의 기본 개념")]),t._v(" "),a("p",[t._v("SQL은 Structured Query Language의 줄이말이며 현업에서 쓰이는 relation DBMS의 표준 언어이다.")]),t._v(" "),a("h3",{attrs:{id:"주요용어"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#주요용어"}},[t._v("#")]),t._v(" 주요용어")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("relation data model")]),t._v(" "),a("th",[t._v("SQL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("relation")]),t._v(" "),a("td",[t._v("table")])]),t._v(" "),a("tr",[a("td",[t._v("attribute")]),t._v(" "),a("td",[t._v("column")])]),t._v(" "),a("tr",[a("td",[t._v("tuple")]),t._v(" "),a("td",[t._v("row")])]),t._v(" "),a("tr",[a("td",[t._v("domain")]),t._v(" "),a("td",[t._v("domain")])])])]),t._v(" "),a("h3",{attrs:{id:"sql에서-relation이란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql에서-relation이란"}},[t._v("#")]),t._v(" SQL에서 relation이란?")]),t._v(" "),a("ul",[a("li",[t._v("multiset(= bag) of tuples @ SQL")]),t._v(" "),a("li",[t._v("중복된 tuple을 허용한다")])]),t._v(" "),a("h3",{attrs:{id:"sql-rdbms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-rdbms"}},[t._v("#")]),t._v(" SQL & RDBMS")]),t._v(" "),a("p",[t._v("SQL은 RDBMS의 표준 언어지만 실제 구현에 강제가 없기 때문에 각 RDBMS마다 제공하는 SQL의 스펙이 조금씩 다르다. 예를 들면 프로시저나 함수를 선언하는 방식이나. 조인의 기준 혹은 내장 함수명이 다른 것이 그 특징이다.")]),t._v(" "),a("h2",{attrs:{id:"mysql로-배워보기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql로-배워보기"}},[t._v("#")]),t._v(" MYSQL로 배워보기")]),t._v(" "),a("h3",{attrs:{id:"database-vs-schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-vs-schema"}},[t._v("#")]),t._v(" Database vs schema")]),t._v(" "),a("ul",[a("li",[t._v("MySQL에서는 database와 schema가 같은 뜻을 의미")]),t._v(" "),a("li",[t._v("create database company = create schema company")]),t._v(" "),a("li",[t._v("다른 RDBMS에서는 의미가 다르게 쓰임")]),t._v(" "),a("li",[t._v("ex. PostgreSQL에서는 schema가 database의 namespace를 의미\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://postgresql.kr/docs/12/sql-createschema.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("참고 블로그 링크"),a("OutboundLink")],1)])])])]),t._v(" "),a("h3",{attrs:{id:"데이터-타입"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#데이터-타입"}},[t._v("#")]),t._v(" 데이터 타입")]),t._v(" "),a("h4",{attrs:{id:"숫자"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#숫자"}},[t._v("#")]),t._v(" 숫자")]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{src:s(467),alt:"datatype_number",height:"300"}}),t._v(" "),a("p",[t._v("표준 SQL은 DECIMAL에서는 자리수가 넘어가도 조금 유연하게 저장하는 반면에 NUMERIC은 저장조차 안되는데 MySQL에서는 어떤 타입을 쓰던 엄격하게 스펙을 제한하여 조건을 넘으면 저장하지 않는다.")]),t._v(" "),a("h4",{attrs:{id:"문자열"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문자열"}},[t._v("#")]),t._v(" 문자열")]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{src:s(468),alt:"datatype_string",height:"300"}}),t._v(" "),a("p",[t._v("그러면 편하게 VARCHAR를 쓰면 되는 거 아니냐라고 말할 수 있는데 이는 RDBMS마다 권장하는 것이 다르다. PostgreSQL은 VARCHAR를 권장하고 MySQL은 공간적인 측면에서는 VARCHAR가 좋지만 시간적인 측면에서는 CHAR를 사용할 것을 권장한다. 그리고 TINYTEXT와 TEXT는 MySQL에서 VARCHAR와 동일하거나 더 작은 길이를 가지고 있다.")]),t._v(" "),a("h4",{attrs:{id:"날짜와-시간"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#날짜와-시간"}},[t._v("#")]),t._v(" 날짜와 시간")]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{src:s(469),alt:"datatype_time",height:"300"}}),t._v(" "),a("h4",{attrs:{id:"그-외"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#그-외"}},[t._v("#")]),t._v(" 그 외")]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{src:s(470),alt:"datatype_etc",height:"300"}}),t._v(" "),a("h3",{attrs:{id:"제약사항"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#제약사항"}},[t._v("#")]),t._v(" 제약사항")]),t._v(" "),a("p",[t._v("대부분의 것들은 알고 있어서 처음 알게된 것만 기술하겠다.")]),t._v(" "),a("h4",{attrs:{id:"check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check"}},[t._v("#")]),t._v(" Check")]),t._v(" "),a("p",[t._v("check 제약사항은 속성값을 제한하고 싶을 때 사용하는데 예를 들면 점프 높이를 측정하고 그 값을 기록해야하는 테이블이 있고 속성값 중에 height라는 속성이 있는데 해당 값이 무조건 300보다 작아야한다면 "),a("code",[t._v("CHECK(height < 300)")]),t._v("이라고 DDL문에 작성하면 된다. 선언은 속성이 두 개 이상으로 구성될 때는 "),a("code",[t._v("CHECK(start_date < end_date)")]),t._v("처럼 사용해야한다.")]),t._v(" "),a("h4",{attrs:{id:"foreign-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foreign-key"}},[t._v("#")]),t._v(" Foreign key")]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{src:s(471),alt:"foreign_key",height:"250"}}),t._v(" "),a("h4",{attrs:{id:"contraint-이름-명시하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contraint-이름-명시하기"}},[t._v("#")]),t._v(" contraint 이름 명시하기")]),t._v(" "),a("ul",[a("li",[t._v("이름을 붙이면 어떤 constraint를 위반했는지 쉽게 파악할 수 있다.")]),t._v(" "),a("li",[t._v("contraint를 삭제하고 싶을 때 해당 이름으로 삭제 가능")])]),t._v(" "),a("img",{attrs:{src:s(472),alt:"constraint_name",height:"200"}}),t._v(" "),a("h3",{attrs:{id:"alter-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter-table"}},[t._v("#")]),t._v(" Alter table")]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{src:s(473),alt:"alter",height:"250"}}),t._v(" "),a("ul",[a("li",[t._v("table의 schema를 변경하고 싶을 때 사용")]),t._v(" "),a("li",[t._v("서비스 중인 table의 schema를 변경하는 것이라면 변경 작업때문에 서비스의 백엔드에 영향이 없을 시 검토한 후에 변경하는 것이 중요")])]),t._v(" "),a("h2",{attrs:{id:"마무리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#마무리"}},[t._v("#")]),t._v(" 마무리")]),t._v(" "),a("h3",{attrs:{id:"database-구조를-정의할-때-중요한-점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-구조를-정의할-때-중요한-점"}},[t._v("#")]),t._v(" database 구조를 정의할 때 중요한 점")]),t._v(" "),a("p",[t._v("만들려는 서비스의 스펙과 데이터 일관성, 편의성, 확장성 등등을 종합적으로 고려하여 DB 스키마를 적절하게 정의하는 것이 중요하다.")])])}),[],!1,null,null,null);a.default=r.exports}}]);