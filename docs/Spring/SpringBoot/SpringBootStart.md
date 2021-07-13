# SpringBoot Step

## 과제

빈 스프링 부트 프로젝트에서 HelloWorld 띄우기

폴더 구조와 각 파일들이 하는 역할 정리



## step 1

- start.spring.io에서 빈 프로젝트 생성하기

- 생성해서 zip파일 풀기
- intelliJ에서 open



## step 2

#### 폴더 구조 및 Gradle프로젝트 구성 살펴보기

[참조 블로그](https://limdevbasic.tistory.com/12)

[참조 블로그](https://ahngo13.github.io/springboot-structure/)

- src/main/java/
  - 기존의 스프링 프로젝트와 마찬가지로 클래스, 인터페이스 등 자바 파일을 품고있음
  - 자바소스
- src/main/resource/
  - 자바 리소스
  - Resource 디렉토리는 classpath가 된다.
- 스프링부트 메인 어플리케이션의 위치
  - @SpringBootApplication class가 위치하는 곳.
  - @SpringBootApplication가 쓰인 메인클래스가 있는 최상위 패키지 이하의 패키지에서 등록된 모든 Component를 스캔한다.



## step 3

#### build.gradle

#### application.properties

[application.properties - 참조 블로그](https://blog.voidmainvoid.net/40)

#### application.yml

- 프로젝트 파일이라 생성을 해줘야하는 줄 알았는데 프로퍼티에서 yaml으로 확장자만 바꾸면 된다고 한다.
- 도커파일 만들때 한번 사용했었는데 문법이 기억난다.



## step 4

#### hello world출력

1. @SpringBootApplication 클래스가 있는 곳에 컨트롤러 생성

   ```java
   package com.example.demo;
   
   import org.springframework.stereotype.Controller;
   import org.springframework.web.bind.annotation.GetMapping;
   
   @Controller
   public class HelloController {
       @GetMapping("/")
       public String main(){
           return "index.html";
       }
   }
   ```

2. /src/main/resources/static 아래 정적 html 생성

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
   </head>
   <body>
     <h4>Hello World</h4>
   </body>
   </html>
   ```

3. @SpringBootApplication의 클래스 내용

   ```java
   package com.example.demo;
   
   import org.springframework.boot.SpringApplication;
   import org.springframework.boot.autoconfigure.SpringBootApplication;
   import org.springframework.boot.builder.SpringApplicationBuilder;
   import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
   
   @SpringBootApplication
   // 아래의 어노테이션을 포함한다.
   // @Configuration: 애플리케이션 컨텍스트에 대한 Bean 정의 소스로 클래스에 태그를 지정합니다.
   // @EnableAutoConfiguration: Spring Boot에 클래스 경로 설정, 기타 Bean 및 다양한 속성 설정을 기반으로 Bean 추가를 시작하도록 지시합니다.
   // @ComponentScan: Spring에 com/example패키지 에서 다른 구성 요소, 구성 및 서비스를 찾도록 지시 하여 컨트롤러를 찾을 수 있도록합니다.
   public class DemoApplication extends SpringBootServletInitializer {
   
   	@Override
   	protected SpringApplicationBuilder configure(SpringApplicationBuilder application){
   		return application.sources(DemoApplication.class);
   	}
   
   	public static void main(String[] args) {
   		SpringApplication.run(DemoApplication.class, args);
   	}
   }
   ```

4. 그리고 실행하면 root로 잘 이동하고 helloworld도 잘 뜬다.

   하지만 이 방법은 내장 톰캣을 사용하는 것이기 때문에 배포를 위해 프로젝트를 war파일로 만들어야한다.

   > war는 전통적인 배포방식이라고 함.
   >
   > 내장톰캣을 사용하지 않기 위해서라고 생각된다.

5. 그런데 메인에 보면 SpringBootServletInitializer 이녀석을 상속받는다.

   빈 프로젝트를 만들었을때 Application클래스와 함께 있던 녀석인데 war로 뽑기 위해선 SpringBootServletInitializer를 상속받고 오버라이드 해야한다고 한다.

   > **Spring** 웹 애플리케이션을 외부 Tomcat에서 동작하도록 하기 위해서는 web.xml (Deployment Descriptor, DD)에 애플리케이션 컨텍스트를 등록해야만 한다. **이는, Apache Tomcat(Servlet Container)이 구동될 때 /WEB-INF 디렉토리에 존재하는 web.xml을 읽어 웹 애플리케이션을 구성하기 때문이다.** 하지만 Servlet 3.0 스펙으로 업데이트되면서 web.xml이 없어도 동작이 가능해졌다. 이는, web.xml 설정을 WebApplicationInitializer인터페이스를 구현하여 대신할 수 있게 됐고, 프로그래밍적으로 ServletContext에 Spring IoC 컨테이너(AnnotationConfigWebApplicationContext)를 생성하여 추가할 수 있도록 변경됐기 때문이다. 이와 비슷한 맥락에서, web.xml이 없는 **SpringBoot** 웹 애플리케이션을 외부 Tomcat에서 동작하도록 하기 위해서는 WebApplicationInitializer 인터페이스를 구현한 **SpringBootServletInitializer를 상속을 받는 것이 필요했던 것이다.**
   >
   >
   > 참조블로그 - [Good](https://serverwizard.tistory.com/165)







## build.gradle

```groovy
plugins {
	id 'org.springframework.boot' version '2.5.1'
	id 'io.spring.dependency-management' version '1.0.11.RELEASE'
	id 'java'
	id 'war'
}

group = 'com.example'
version = '0.0.1-SNAPSHOT'
sourceCompatibility = '1.8'

repositories {
	mavenCentral()
}
// providedRuntime -> providedCompile
dependencies {
	implementation 'org.springframework.boot:spring-boot-starter-web'
	providedRuntime 'org.springframework.boot:spring-boot-starter-tomcat'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'
}

test {
	useJUnitPlatform()
}

// 빌드할 war파일 설정
war{
	archiveBaseName = "world-war"
	archiveFileName = "world-war.war"
	archiveVersion = "0.0.0"
}
```

- plugins (apply plugin)
  - 미리 구성해놓은 task들의 그룹.
  - 특정 빌드과정에 필요한 기본정보를 포함.
- repositories
  - 오픈소스 종속성을 다운로드하고 사용할 수 있다.
  - 크게 MavenCentral(mavenCentral()), BintrayJCenter(jcenter()), GoogleAndroid(google())가 있다.

- dependencies
  - (test)Compile - 컴파일시에 필요한 디펜던시를 설정한다.
  - providedCompile - 컴파일시에는 필요하지만 배포시에는 제외될 디펜던시를 설정한다.
    - war로 배포할때 사용함.
  - providedRuntime - 런타임시에만 사용하고 배포시에는 실행환경에서 제공되는 디펜던시를 설정한다.
    - 마찬가지로 war로 배포할때 사용
- war
  - archiveBaseName
    - 파일의 이름을 정할 수 있다.
  - archiveVersion
    - 버전 명시
  - archiveFileName
    - String으로 할당한 값이 최종 파일 명으로 됨.

---







