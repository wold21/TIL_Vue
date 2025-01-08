# Spring?

## Spring?

스프링은 자바의 Back-end 프레임 워크이며 공식 문서에 따르면 `개발자에게 겨울은 끝나고 봄이 왔다.`라고 표현하고 있다. 
2003년 6월에 첫 릴리즈가 된 스프링은 이후 엄청난 사이즈로 불어나게 된다.

## 특징

대표적으로 DI, IoC, AOP라고 하는 세가지의 개념이 존재한다. 
> - DI (Dependency Injection)
> - IoC (Invesion of Control)
> - AOP (Aspect Oriented Programming)  

솔직히 3년동안 스프링프레임워크(부트)를 사용했음에도 말로 설명하라고 하면 말문이 막히는 개념들이다.

### Dependency Injection
내가 느낀 그대로를 풀어보자면 DI는 각 모듈을 세세하고 뚜렷하게 만들어서 서로 밀접하지 않게 만들고 그것을 사용하기 편이하게 해주는 것이 DI이다. 말 그대로 재사용을 편리하게 만들어 주는 개념인 것 같다.  

### Invention of Control
프레임 워크를 사용하면서 가장 손을 대지 않았던 영역이다. Servlet이나 Bean 같은 존재를 알아서 등록하고 관리를 해주고 객체의 생성 그리고 의존관계를 프레임 워크에서 대신해준다고 한다. 프론트 개발을 많이해서 그럴 확률이 높지만 자바 소스를 만지면서 의존관계나 Bean 때문에 스트레스를 받았던 적은 없는 것 같다. 어려운 말이지만 제어의 역전이라는 말이 맞기는 하다.

### Aspect Oriented Programming
이거는 개발을 하면서 한번도 안들어본 개념이라 간단하게 찾아보았다. 핵심기능을 제외한 부수적인 기능을 프레임워크가 제공한다고 하는 개념인데 기존의 스프링 프로젝트에 로깅 라이브러리나 시큐리티를 적용하려고 할때 기존 로직을 건들이지 않고 추가할 수 있는 장점이 있다고 한다. 뭐 그렇다고 해도 코어적인 로직만 건들이지 않는거지 추가되고 변경되는 코드가 많을 것 같다. 


## Spring과 Spring boot의 차이점

스프링 프레임 워크가 나온 뒤에 스프링 부트 프레임 워크가 출시되었다. 
이 부분은 길게 작성하지 않아도 될 것 같아서 간단하게 적어보려고 한다. 

### 차이점

1. 내장 서버를 제공하지 않는다는 차이가 있다. 
    > 반며네 스프링 부트는 내장 톰캣을 가지고 있어서 별도의 외장 웹서버를 띄우지 않아도 된다는 장점이 있다. 
2. 의존성 관리
    > 빌드 툴(Maven, Gradle)을 사용하는 것은 동일하나 스프링은 버전 관리를 직접해줘야하고 부트는 공통 의존성에 대해서는 간단하게 추가할 수 있다.

크게 보면 이 두가지인데 스프링 부트는 스프링 프레임 워크에다가 엄청난 생산성을 덮어씌운 프레임 워크라고 생각하면 된다. 

## 마무리

스프링 프레임 워크를 배우고 스프링 부트 프레임 워크를 한다면 꽤 섬세하게 프레임 워크를 다룰 수 있을 것 같다는 생각을 했다.
그러나 스프링부터 시작하기에는 학습 곡선도 가파르고 시간도 많이 들기때문에 부트를 기준으로 먼저 시작하는 것을 많은 사람들이 추천한다. 왜냐하면 이것은 단지 프레임워크이기 때문이다. 개발을 하다보면 어느새 스프링의 구조를 파악해야만 만날 수 있는 문제들이 존재할 것이고 그때 탐구하여도 늦지 않을 것이다. 