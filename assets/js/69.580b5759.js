(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{540:function(t,a,s){"use strict";s.r(a);var e=s(17),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"영속성-관리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#영속성-관리"}},[t._v("#")]),t._v(" 영속성 관리")]),t._v(" "),a("h2",{attrs:{id:"entity-manager-factory-entity-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entity-manager-factory-entity-manager"}},[t._v("#")]),t._v(" Entity Manager Factory & Entity Manager")]),t._v(" "),a("ul",[a("li",[t._v("Entity Manager Factory\n"),a("ul",[a("li",[t._v("말 그대로 엔티티 매니저를 만드는 공장이다.")]),t._v(" "),a("li",[t._v("비용이 크기 때문에 한 개만 만든다.")]),t._v(" "),a("li",[t._v("여러 스레드가 접근해도 안전하여 공유가 가능함")])])]),t._v(" "),a("li",[t._v("Entity Manager\n"),a("ul",[a("li",[t._v("엔티티 매니저 팩토리에서 생성할 수 있다.")]),t._v(" "),a("li",[t._v("비용이 거의 들지 않기 때문에 갯 수에 대한 제약이 없어보인다.")]),t._v(" "),a("li",[t._v("동시성 문제가 있어 스레드 간에 공유는 안된다.")]),t._v(" "),a("li",[t._v("DB 연결이 필요한 시점까지 커넥션을 얻지 않는다.\n"),a("ul",[a("li",[t._v("예를 들면 트랜잭션을 시작할 때 라던지...")])])])])])]),t._v(" "),a("h2",{attrs:{id:"영속성-컨텍스트란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#영속성-컨텍스트란"}},[t._v("#")]),t._v(" 영속성 컨텍스트란?")]),t._v(" "),a("p",[t._v("jpa를 이해하는 데 가장 중요한 용어이다. "),a("code",[t._v("영속성 컨텍스트")]),t._v(" 쉽게 말해 엔티티를 영구 저장하는 환경이라는 것이다. "),a("code",[t._v("em.persist(member);")]),t._v(" 는 엔티티 매니저를 통해 member 엔티티를 영속성 컨텍스트에 저장한다는 뜻이다. 바로 DB와 연결되는 것이 아니다. 이 영속성 컨텍스트는 매니저를 하나 생성할 때 하나가 만들어지며 매니저를 통해 영속성 컨텍스트에 접근, 관리 할 수 있다.")]),t._v(" "),a("blockquote",[a("p",[t._v("하나의 영속성 컨텍스트에 여러 매니저가 접근할 수도 있다.")])]),t._v(" "),a("h2",{attrs:{id:"엔티티의-생명주기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#엔티티의-생명주기"}},[t._v("#")]),t._v(" 엔티티의 생명주기")]),t._v(" "),a("p",[t._v("엔티티에는 4가지 상태가 존재한다.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("비영속 : 영속성 컨텍스트와 관계가 없는 상태")]),t._v(" "),a("div",{staticClass:"language-Java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Member")]),t._v(" member "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Member")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUsername")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hyuk"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("순수한 객체 상태이며 아직 저장되기 전")]),t._v(" "),a("li",[t._v("영속성 컨텍스트와 DB와는 전혀 관련이 없다.")])])]),t._v(" "),a("li",[a("p",[t._v("영속 :  영속성 컨텍스트에 저장된 상태")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("persist")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("엔티티를 영속성 컨텍스트에 저장했다.")]),t._v(" "),a("li",[t._v("이 상태를 영속 상태라 부른다.")]),t._v(" "),a("li",[t._v("find메소드나 JPQL을 사용하여 조회한 엔티티 또한 영속성 컨텍스트가 관리하는 영속 상태이다.")])])]),t._v(" "),a("li",[a("p",[t._v("준영속 : 영속성 컨텍스트에 저장되었다가 분리된 상태")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("detach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("관리 되던 엔티티가 관리당하지 않은 상태를 준영속 상태라 한다.")]),t._v(" "),a("li",[t._v("detach를 호출하여 준영속으로 만들수 있다.")]),t._v(" "),a("li",[t._v("또는 clear(), close를 호출하여 준영속 상태로 만들 수 있다.")])])]),t._v(" "),a("li",[a("p",[t._v("삭제 : 삭제된 상태")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("엔티티를 영속성 컨텍스트와 DB에서 삭제한다.")])])])]),t._v(" "),a("h2",{attrs:{id:"영속성-컨텍스트의-특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#영속성-컨텍스트의-특징"}},[t._v("#")]),t._v(" 영속성 컨텍스트의 특징")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("영속성 컨텍스트와 식별자 값")]),t._v(" "),a("ul",[a("li",[t._v("엔티티의 식별자 값으로 구분한다. (@Id로 매핑된 필드)")]),t._v(" "),a("li",[t._v("반드시 식별자 값이 있어야한다.")]),t._v(" "),a("li",[t._v("없으면 예외가 발생한다.\n"),a("ul",[a("li",[t._v("IDE에서 이미 빨간줄임.")])])])])]),t._v(" "),a("li",[a("p",[t._v("영속성 컨텍스트와 DB 저장")]),t._v(" "),a("ul",[a("li",[t._v("트랜잭션을 커밋하는 순간 영속성 컨텍스트에 새로 저장된 엔티티를 DB에 반영하는데 이것을 flush라고 한다.")])])]),t._v(" "),a("li",[a("p",[t._v("영속성 컨텍스트가 엔티티를 관리하면 얻게 되는 장점")]),t._v(" "),a("ul",[a("li",[t._v("1차 캐시")]),t._v(" "),a("li",[t._v("동일성 보장\n"),a("ul",[a("li",[t._v("같은 트랜잭션이면 같은 값을 보장한다.")])])]),t._v(" "),a("li",[t._v("변경감지")]),t._v(" "),a("li",[t._v("지연 로딩")])])])]),t._v(" "),a("h3",{attrs:{id:"엔티티-조회"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#엔티티-조회"}},[t._v("#")]),t._v(" 엔티티 조회")]),t._v(" "),a("p",[t._v("영속성 컨텍스트는 내부에 캐시를 가지고 있는데 이것을 "),a("code",[t._v("1차 캐시")]),t._v(" 라 한다. 영속 상태의 엔티티는 모두 이곳에 저장된다. 영속성 컨텍스트 내부에 Map이 하나 있는데 키는 @Id로 매핑한 식별자고 값은 엔티티 인스턴스이다.")]),t._v(" "),a("blockquote",[a("p",[t._v("어떤 변화가 있을 때마다 캐시를 업데이트 하면서 저장하는 것 같다.\npersist를 했을 때의 상태이다.")])]),t._v(" "),a("p",[t._v("그래서 find 함수를 쓸 때 "),a("code",[t._v('em.find(Member.class, "member1");')]),t._v(" 를 인자로 받는 이유이지 않을까 싶다. 만약 1차 캐시에 데이터가 없다면 그제서야 DB에서 조회한다고 한다. 예를 들어 이런 경우이다.")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Member")]),t._v(" member "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Member")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmember"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"member1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmember"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUsername")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"회원1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1차 캐시 저장됨.")]),t._v("\nem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("persist")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("member"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1차 캐시에서 조회")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Member")]),t._v(" findMember "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Member")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"memeber1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",[a("li",[t._v('em.find(Member.class, "memeber2"); → 1차 캐시에 없음')]),t._v(" "),a("li",[t._v("DB조회")]),t._v(" "),a("li",[t._v("조회한 데이터로 엔티티를 생성해서 1차 캐시에 저장한다.(영속상태)")]),t._v(" "),a("li",[t._v("조회한 엔티티를 반환한다.")])]),t._v(" "),a("p",[t._v("그래서 같은 트랜잭션 내에서 같은 엔티티를 조회했을 때는 언제나 같은 데이터를 받을 수 있는 보장이 되어있다. → 동일설 보장(동등성 X)")]),t._v(" "),a("h3",{attrs:{id:"엔티티-등록"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#엔티티-등록"}},[t._v("#")]),t._v(" 엔티티 등록")]),t._v(" "),a("p",[t._v("엔티티 매니저는 persist된 상태(아직 DB에 저장된 상태가 아님) 등등을 커밋하기 전까지 내부 쿼리 저장소에 sql을 쌓아둔다. 이것을 트랜잭션을 지원하는 쓰기 지연이라고 한다. (쓰기 지연 SQL 저장소)")]),t._v(" "),a("ol",[a("li",[t._v("persist")]),t._v(" "),a("li",[t._v("1차 캐시에 저장함과 동시에 쓰기 지연 sql 저장소에 저장")]),t._v(" "),a("li",[t._v("commit")]),t._v(" "),a("li",[t._v("엔티티 매니저 → 영속성 컨텍스트 플러시\n"),a("ol",[a("li",[t._v("플러시는 영속선 컨텍스트의 변경 내용을 DB에 동기화 하는 작업이다.")]),t._v(" "),a("li",[t._v("이때 등록, 수정, 삭제한 엔티티를 DB에 반영한다.")]),t._v(" "),a("li",[t._v("쓰기 지연 sql 저장소에 있던 할 일 들을 DB로 보낸다는 말이다.")])])])]),t._v(" "),a("h3",{attrs:{id:"엔티티-수정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#엔티티-수정"}},[t._v("#")]),t._v(" 엔티티 수정")]),t._v(" "),a("p",[a("strong",[t._v("SQL 수정 쿼리의 문제점")])]),t._v(" "),a("p",[t._v("수정 필드가 추가 될 때 마다 당연하지만 쿼리를 수정해야하고 때에 따라 쿼리를 다시 짜야한다. SQL에 의존하게 될 수 밖에 없다는 것이다.")]),t._v(" "),a("p",[a("strong",[t._v("변경감지")])]),t._v(" "),a("p",[t._v("만약 persist를 날린 뒤 setter를 사용해서 데이터를 수정 한 경우에는 어떨까? 보통의 생각으로는 update 메서드가 있어 그것을 사용하면 될 것 같지만 jpa는 달랐다.")]),t._v(" "),a("p",[t._v("setter를 통해 엔티티가 수정되면 1차 캐시와 비교를 한다. 만약 다르다면 update sql을 쓰기지연 저장소(쓰지저)에 저장한다. 최종적으로 커밋을 날리면 수정된 데이터가 update된다.")]),t._v(" "),a("ol",[a("li",[t._v("setter 수정")]),t._v(" "),a("li",[t._v("commit → flush")]),t._v(" "),a("li",[t._v("1차 캐시에서 해당 엔티티를 찾아 비교 → 변경이 감지됨")]),t._v(" "),a("li",[t._v("update sql 생성 후 쓰지저에 저장")]),t._v(" "),a("li",[t._v("commit")])]),t._v(" "),a("blockquote",[a("p",[t._v("jpa의 update 쿼리는 엔티티의 모든 필드를 업데이트 한다.\n비용이 많이 드는 단점이 있지만 수정 쿼리가 매번 같다는 장점이 있어 수정 쿼리를 미리 생성해두고 재사용할 수 있다. DB에 동일한 쿼리를 보내면 DB는 이전에 한 번 파싱된 쿼리를 재사용할 수 있다는 장점들이 있다. 하지만 필드가 너무 많거나 저장되는 내용이 크면 수정된 데이터만 동적으로 쿼리를 생성하는 전략으로 선택하면 된다.\n@org.hibernate.annotation.DynamicUpdate를 사용해서 변경되는 데이터만 동적으로 sql을 생성하게 하거나 데이터가 존재하는 필드만으로 (null이 아님) insert sql을 동적으로 생성하는 @DynamicInsert도 있다.")])]),t._v(" "),a("h3",{attrs:{id:"엔티티-삭제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#엔티티-삭제"}},[t._v("#")]),t._v(" 엔티티 삭제")]),t._v(" "),a("p",[t._v("수정과 같이 em.remove({entity})를 날리면 삭제 쿼리를 쓰지저에 저장한다. 이후 커밋(플러시)를 하면 삭제 쿼리를 DB에 전달한다. 참고로 remove 메서드를 사용하는 순간 영속성 컨텍스트에서 제거 된다고 한다. 재사용하지 말고 자연스럽게 GC의 대상이 되도록 두는 것이 좋다고 한다.")]),t._v(" "),a("h2",{attrs:{id:"플러시-flush"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#플러시-flush"}},[t._v("#")]),t._v(" 플러시(flush)")]),t._v(" "),a("p",[t._v("영속성 컨텍스트의 변경 내용을 DB에 반영하는 행위이다.")]),t._v(" "),a("ol",[a("li",[t._v("변경 감지가 동작해서 영속성 컨텍스트에 있는 모든 엔티티를 스냅샷과 비교해서 수정된 엔티티를 찾는다. 수정된 엔티티는 수정 쿼리를 만들어 쓰지저에 저장한다.")]),t._v(" "),a("li",[t._v("쓰지저에있는 쿼리를 DB에 전송한다. (CUD)")])]),t._v(" "),a("p",[t._v("영속성 컨텍스트를 플러시 하는 방법은 3가지다.")]),t._v(" "),a("ol",[a("li",[t._v("em.flush()를 직접 호출한다.\n"),a("ol",[a("li",[t._v("테스트나 다른 프레임워크와 jpa를 사용할 떄를 제외하고 거의 사용하지 않음.")])])]),t._v(" "),a("li",[t._v("트랜잭션 커밋 시 자동 호출된다.\n"),a("ol",[a("li",[t._v("jpa구조 상 커밋을 하면 플러시가 먼저 호출되고 영속성 컨텍스트의 변경 내용을 DB에 반영한다.")])])]),t._v(" "),a("li",[t._v("JPQL 쿼리 실행 시 자동 호출된다.\n"),a("ol",[a("li",[t._v("2번과 마찬가지로 jpql를 호출할 때 아직 persist에 머물러 있는 객체를 반영해야하는 경우가 있을 수 있기 때문에 jpa에서는 jpql을 실행할 때 플러시를 먼저 수행한다.")]),t._v(" "),a("li",[t._v("예외적으로 find메서드를 호출 할 때는 플러시가 실행되지 않는다.")])])])]),t._v(" "),a("h3",{attrs:{id:"플러시-모드-옵션"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#플러시-모드-옵션"}},[t._v("#")]),t._v(" 플러시 모드 옵션")]),t._v(" "),a("p",[t._v("플러시 모드를 직접 지정하려면 아래와 같은 옵션을 사용하면 된다.")]),t._v(" "),a("ul",[a("li",[t._v("FlushModeType.AUTO - 커밋이나 쿼리를 실행 할 때 플러시 (기본값)")]),t._v(" "),a("li",[t._v("FlushModeType.COMMIT - 커밋할 떄만 플러시")]),t._v(" "),a("li",[t._v("em.setFlushMode(FlushModeType.AUTO)")])]),t._v(" "),a("h2",{attrs:{id:"준영속"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#준영속"}},[t._v("#")]),t._v(" 준영속")]),t._v(" "),a("p",[t._v("영속상태의 엔티티를 준영속으로 만드는 방법은 크게 3가지이다.")]),t._v(" "),a("ol",[a("li",[t._v("em.detach({entity}) → 특정 엔티티만 준영속 상태로 전환한다.\n"),a("ul",[a("li",[t._v("위처럼 선언한 엔티티는 1차 캐시부터 쓰지저에 저장되어있는 해당 엔티티를 관리하기 위한 모든 것이 삭제된다.")])])]),t._v(" "),a("li",[t._v("em.clear() → 영속성 컨텍스트를 완전히 초기화한다.")]),t._v(" "),a("li",[t._v("em.close() → 영속성 컨텍스트를 종료한다.")])]),t._v(" "),a("h3",{attrs:{id:"준영속-상태의-특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#준영속-상태의-특징"}},[t._v("#")]),t._v(" 준영속 상태의 특징")]),t._v(" "),a("ul",[a("li",[t._v("거의 비영속 상태에 가깝다.\n"),a("ul",[a("li",[t._v("1차 캐시, 쓰기 지연, 변경 감지, 지연 로딩을 포함한 영속선 컨텍스트가 제공하는 어떠한 기능도 동작하지 않는다.")])])]),t._v(" "),a("li",[t._v("식별자 값을 가지고 있다.\n"),a("ul",[a("li",[t._v("준영속 상태는 이미 한번 영속 상태였기 때문에 식별자 값을 가지고 있다.")])])]),t._v(" "),a("li",[t._v("지연 로딩을 할 수 없다.")])]),t._v(" "),a("h3",{attrs:{id:"병합-merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#병합-merge"}},[t._v("#")]),t._v(" 병합(merge())")]),t._v(" "),a("p",[t._v("준영속 상태의 엔티티를 다시 영속상태로 만들기 위한 메서드")]),t._v(" "),a("p",[t._v("준영속 상태의 엔티티를 받아서 "),a("strong",[t._v("새로운 영속 상태의 엔티티를 반환한다.")])]),t._v(" "),a("p",[t._v("병합은 준영속, 비영속을 신경쓰지 않는다.")]),t._v(" "),a("ul",[a("li",[t._v("식별자 값으로 엔티티를 조회할 수 있으면 불러서 병합하고 없으면 새로 생성해서 병합한다.")]),t._v(" "),a("li",[t._v("따라서 병합은 save or update 기능을 수행한다.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);