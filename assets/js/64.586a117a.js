(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{429:function(t,a,n){"use strict";n.r(a);var i=n(17),_=Object(i.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spring-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-container"}},[t._v("#")]),t._v(" Spring Container")]),t._v(" "),a("p",[a("strong",[t._v("Spring FrameWork")]),t._v("의 핵심 컴포넌트")]),t._v(" "),a("ul",[a("li",[t._v("Container는 DI를 사용하여 프로그램을 구성하는 bean 객체를 관리한다.")]),t._v(" "),a("li",[t._v("객체의 생명주기를 관리함.")])]),t._v(" "),a("blockquote",[a("p",[t._v("컴포넌트 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈을 뜻함.")])]),t._v(" "),a("h2",{attrs:{id:"container의-종류"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container의-종류"}},[t._v("#")]),t._v(" Container의 종류")]),t._v(" "),a("h3",{attrs:{id:"_1-beanfactory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-beanfactory"}},[t._v("#")]),t._v(" 1. BeanFactory")]),t._v(" "),a("p",[t._v("BeanFactory 계열의 인터페이스만 구현한 클래스는 단순히 컨테이너에서 객체를 생성하고 DI를 처리해주는 기능만을 제공한다.")]),t._v(" "),a("ul",[a("li",[t._v("Bean을 등록, 생성, 조회, 반환을 관리함")])]),t._v(" "),a("p",[t._v("필요하게 되기 전까지는 인스턴스화 하지 않는다.")]),t._v(" "),a("h3",{attrs:{id:"_2-applicationcontext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-applicationcontext"}},[t._v("#")]),t._v(" 2. ApplicationContext")]),t._v(" "),a("p",[t._v("스프링을 사용하는 이유는 컨테이너 때문만이 아니라 스프링이 제공하는 다양한 부가 기능 때문이다.")]),t._v(" "),a("p",[t._v("BeanFactory와 유사한 기능을 제공하지만 더 많은 기능을 제공한다.")]),t._v(" "),a("ul",[a("li",[t._v("국제화가 지원되는 텍스트 메시지를 관리해준다.")]),t._v(" "),a("li",[t._v("이미지같은 파일 자원을 로드할 수 있는 포괄적인 방법을 제공해준다.")]),t._v(" "),a("li",[t._v("리스너로 등록된 빈에게 이벤트 발생을 알려준다.")]),t._v(" "),a("li",[t._v("따라서 대부분의 application은 ApplicationContext를 사용하는 것이 좋다.")])]),t._v(" "),a("h3",{attrs:{id:"실제로-사용되는-구현-클래스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#실제로-사용되는-구현-클래스"}},[t._v("#")]),t._v(" 실제로 사용되는 구현 클래스")]),t._v(" "),a("ul",[a("li",[t._v("ClassPathXmlApplicationContext : 클래스패스에 위치한 xml 파일에서 컨텍스트 정의 내용을 읽어들인다.")]),t._v(" "),a("li",[t._v("FileSystemXmlApplicationContext : 파일 경로로 지정된 xml 파일에서 컨텍스트 정의 내용을 읽어들인다.")]),t._v(" "),a("li",[t._v("XmlWebApplicationContext : 웹 어플리케이션에 포함된 xml 파일에서 컨텍스트 정의 내용을 읽어들인다.")]),t._v(" "),a("li",[t._v("GenericXmlApplicationContext : Xml 파일을 설정 정보로 사용하는 스프링 컨테이너 구현 클래스이다. 독립형 어플리케이션을 개발할 때 사용된다.")]),t._v(" "),a("li",[t._v("AnnotationConfigApplicationContext : 그루비 언어로 작성된 설정 정보를 사용하는 스프링 컨테이너이다. 독립형 어플리케이션을 개발할 때 사용된다.")]),t._v(" "),a("li",[t._v("AnnotationConfigWebApplicationContext : 웹 어플리케이션을 개발할 때 사용하는 스프링 컨테이너로써 자바 코드를 설정 정보로 사용한다.")])]),t._v(" "),a("h3",{attrs:{id:"beanfactory-와-applicationcontext-차이점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory-와-applicationcontext-차이점"}},[t._v("#")]),t._v(" BeanFactory 와 ApplicationContext 차이점")]),t._v(" "),a("ul",[a("li",[t._v("BeanFactory : 처음으로 getBean()이 호출된 시점에서야 해당 빈을 생성 (Lazy Loading, 게으른 호출)")]),t._v(" "),a("li",[t._v("ApplicationContext : 컨텍스트 초기화 시점에 모든 싱글톤 빈을 미리 로드한 후 애플리케이션 가동 후에는 Bean을 지연없이 얻을 수 있다 (미리 Bean을 생성해 놓아 빈이 필요할 때 즉시 사용할 수 있도록 보장한다.)")])]),t._v(" "),a("h2",{attrs:{id:"역할-및-설정방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#역할-및-설정방법"}},[t._v("#")]),t._v(" 역할 및 설정방법")]),t._v(" "),a("h3",{attrs:{id:"역할"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#역할"}},[t._v("#")]),t._v(" 역할")]),t._v(" "),a("ol",[a("li",[t._v("bean을 생성")]),t._v(" "),a("li",[t._v("객체들은 묶고(그룹화)")]),t._v(" "),a("li",[t._v("객체들을 구성(조립)")]),t._v(" "),a("li",[t._v("객체들의 전체 수명주기를 관리한다.")])]),t._v(" "),a("h3",{attrs:{id:"설정방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#설정방법"}},[t._v("#")]),t._v(" 설정방법")]),t._v(" "),a("ol",[a("li",[t._v("xml\n"),a("ul",[a("li",[t._v("빈 객체 정의(Bean Definition)")]),t._v(" "),a("li",[t._v("DI")]),t._v(" "),a("li",[t._v("SpringBoot는 xml에 작성하지 않고 단순 자바 코드에서 설정함.")])])]),t._v(" "),a("li",[t._v("Java Annotation")]),t._v(" "),a("li",[t._v("Java Code")])])])}),[],!1,null,null,null);a.default=_.exports}}]);