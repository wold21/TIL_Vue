# Thymeleaf

## Thymeleaf란?

- 스프링에서 밀고있는 스프링 프레임워크 뷰
- HTML, XML, JavaScript, CSS 및 일반 텍스트를 처리 할 수 있는 웹 및 독립형 환경에서 사용할 수 있는 Java 템플릿 엔진입니다.
- HTML파일을 가져와서 파싱해서 분석후 정해진 위치에 데이터를 치환해서 웹 페이지를 생성합니다.
- 자바코드를 사용할 수 없으며 컨트롤러에서 전달받은 데이터를 이용해 HTML파일 내에서 동적인 페이지를 만들 수 있다.

<br>

### 간단 예제

1. **스프링 설정 세팅**

- yml

```yaml
spring:
    thymeleaf:
        prefix : classpath:templates/
        suffix : .html
        cache : false
```

- xml

```xml
<dependencies>
    	<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
    </dependencies>
```

<br>

1. 컨트롤러 작성

- @SpringBootApplication 하위에 HomeController.java를 생성한다.

```java
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/")
public class HomeController {

    @GetMapping(value = "/")
    public ModelAndView home() {
        ModelAndView modelAndView = new ModelAndView();
        
        modelAndView.setViewName("home");
        
        Map<String, Object> map = new HashMap<>();
        map.put("name", "Bamdule");
        map.put("date", LocalDateTime.now());
        
        modelAndView.addObject("data", map);
        
        return modelAndView;
    }
}
```

- modelAndView.addObject("data",map)를 통해 화면에 데이터를 렌더링 한다.

<br>

2. HTML작성

```html
<!DOCTYPE html>
<html>
    <head>
        <title>title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div th:text="${data.name}"></div>
        <th:block th:text="${data.date}"/>
    </body>
</html>
```

<br>
<br>

## 특징

- jsp가 아닌 html단에서 모든 처리가 가능하기 때문에 디자이너/퍼블리셔와 작업할 때 편리하다.
- 버전 3으로 넘어오면서 성능개선이 있었지만 jsp보다 느리다고 함.
- was를 통하지 않고 파일을 브라우저를 통해 열 수 있음(브라우저가 해석 가능한 마크업 언어만이 존재하기 때문에) 그리하여 퍼블리셔와 협업이 용이함.
- 가독성이 좋다.



---

<br>

#### 공식문서

[thymeleaf Doc](https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html#standard-expression-syntax)

#### 참고 블로그

[Blog Link](https://eblo.tistory.com/55)

[기본예제](https://bamdule.tistory.com/216)