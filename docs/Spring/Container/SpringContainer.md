# Spring Container

**Spring FrameWork**의 핵심 컴포넌트

- Container는 DI를 사용하여 프로그램을 구성하는 bean 객체를 관리한다.
- 객체의 생명주기를 관리함.

> 컴포넌트 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈을 뜻함.

## Container의 종류

### 1. BeanFactory

BeanFactory 계열의 인터페이스만 구현한 클래스는 단순히 컨테이너에서 객체를 생성하고 DI를 처리해주는 기능만을 제공한다.

- Bean을 등록, 생성, 조회, 반환을 관리함

필요하게 되기 전까지는 인스턴스화 하지 않는다.

### 2. ApplicationContext

스프링을 사용하는 이유는 컨테이너 때문만이 아니라 스프링이 제공하는 다양한 부가 기능 때문이다.

BeanFactory와 유사한 기능을 제공하지만 더 많은 기능을 제공한다.

- 국제화가 지원되는 텍스트 메시지를 관리해준다.
- 이미지같은 파일 자원을 로드할 수 있는 포괄적인 방법을 제공해준다.
- 리스너로 등록된 빈에게 이벤트 발생을 알려준다.
- 따라서 대부분의 application은 ApplicationContext를 사용하는 것이 좋다.

### 실제로 사용되는 구현 클래스

- ClassPathXmlApplicationContext : 클래스패스에 위치한 xml 파일에서 컨텍스트 정의 내용을 읽어들인다.
- FileSystemXmlApplicationContext : 파일 경로로 지정된 xml 파일에서 컨텍스트 정의 내용을 읽어들인다.
- XmlWebApplicationContext : 웹 어플리케이션에 포함된 xml 파일에서 컨텍스트 정의 내용을 읽어들인다.
- GenericXmlApplicationContext : Xml 파일을 설정 정보로 사용하는 스프링 컨테이너 구현 클래스이다. 독립형 어플리케이션을 개발할 때 사용된다.
- AnnotationConfigApplicationContext : 그루비 언어로 작성된 설정 정보를 사용하는 스프링 컨테이너이다. 독립형 어플리케이션을 개발할 때 사용된다.
- AnnotationConfigWebApplicationContext : 웹 어플리케이션을 개발할 때 사용하는 스프링 컨테이너로써 자바 코드를 설정 정보로 사용한다.

### BeanFactory 와 ApplicationContext 차이점

- BeanFactory : 처음으로 getBean()이 호출된 시점에서야 해당 빈을 생성 (Lazy Loading, 게으른 호출)
- ApplicationContext : 컨텍스트 초기화 시점에 모든 싱글톤 빈을 미리 로드한 후 애플리케이션 가동 후에는 Bean을 지연없이 얻을 수 있다 (미리 Bean을 생성해 놓아 빈이 필요할 때 즉시 사용할 수 있도록 보장한다.)

## 역할 및 설정방법

### 역할

1. bean을 생성
2. 객체들은 묶고(그룹화)
3. 객체들을 구성(조립)
4. 객체들의 전체 수명주기를 관리한다.

### 설정방법

1. xml
   - 빈 객체 정의(Bean Definition)
   - DI
   - SpringBoot는 xml에 작성하지 않고 단순 자바 코드에서 설정함.
2. Java Annotation
3. Java Code
