# FXML

웹을 시작할 때 HTML과 CSS를 먼저 공부하듯이 JavaFX의 기초에는 FXML이라는 언어가 자리를 잡고 있다. HTML과 비슷하니 금방 알아볼 수 있겠다.

 

## FXML 알아보기

일단 다 제쳐두고 fxml의 간단한 틀을 작성해 보았다.

먼저 눈으로 한줄 한줄 읽어보자.

```xml
<?xml version="1.0" encoding="UTF-8"?>
 
<?import javafx.scene.control.*?>
<?import javafx.scene.layout.*?>
<?import javafx.scene.layout.AnchorPane?>
 
 
<AnchorPane xmlns:fx="http://javafx.com/fxml/1" xmlns="http://javafx.com/javafx/8"
fx:controller="com.myproject.Controller">
   <children>
      <Pane prefHeight="150.0" prefWidth="200.0">
         <children>
            <Button fx:id="cancel" layoutX="73.0" layoutY="89.0" mnemonicParsing="false" text="Button" />
         </children>
      </Pane>
   </children>
</AnchorPane>

```

> 상단에 xml 버전이 명시되어있는 것으로 보아 일단 xml이 틀림없는 것을 알 수 있며 몇가지를 임포트 받고 있고 AnchorPane을 기준 하위로 무엇인가 작성되어있는 것을 볼 수 있을 것이다. 



 JavaFX는 view를 꾸리기 위해서 xml(마크업)을 택했고 이는 Java에 익숙하지 않은 이라도 쉽게 화면단을 작성할 수 있게 도와주었는데 스스로도 사용하다보니 html과 똑같이 느껴졌고 금새 익숙하게 작성 할 수 있었다. 게다가 상단에 자바스크립트까지 선언해 준다면 스크립트 문까지 사용할 수 있고 외부에서 js파일을 주입 받을 수도 있으며 css 또한 마찬가지이다. 

> 아마 기본 UI를 본다면 윈도우 98로 돌아간 느낌일 것이다.



## FXML 사용법

html 처럼 헤더나 푸터 같은 구분 태그는 없지만 하나의 큰 부모 태그를 지정하고 작성하는 것이 좋다. **부모 태그에서는 이 fxml이 어떤 컨트롤러를 탈 것인지 지정해주어야하고 fxml버전과 javaFX버전을 지정해주어야한다.**



> 예제에서는 AnchorPane를 사용했지만 찾아본 결과 AnchorPane는 태그 중에 위치가 제일 유동적인 태그라고 하니 부모 태그로는 적합하지 않은 것 같다. 기본 Pane나 VBox같은 걸로 지정해서 시작하면 더 깔끔한 결과물이 나올 것 같다. (사실 css로 처리하면 되기 때문에 큰 의미는 없을 것 같지만.)  



우리가 웹에서 스크립트 문을 작성할 때 html 태그에 id값이나 class값으로 접근 하는 것처럼 fxml도 마찬가지로 id 값을 사용해 어떤 액션들을 취할 수 있다. 당연히 태그에 인라인 함수도 가능하다. 다만 코드는 혼자 작성하는 것이 아니기 때문에 통일성과 흐름성을 지켜야한다고 생각한다. 나 같은 경우는 모든 액션 함수를 java에서 컨트롤하게 했고 css 요소는 모두 외부 css파일로 빼냈다. 



이러한 인라인 css 같은 모양새를

```xml
<Pane prefHeight="150.0" prefWidth="200.0">
```

아래 처럼 class처리 했다는 말이다.

```xml
<Pane styleClass="mainContainer">
```

꽤 많은 예제들이 그냥 인라인으로 css를 컨트롤 하는데 귀찮아서 그런지 좋은 예제는 아니라고 생각한다. 인라인 함수도 마찬가지이다. 



꽤 많은 태그들이 있어서 따로 더 찾아보면 좋을 것 같다. 아래에 참고 사이트에서 굉장히 fxml을 비롯해 JavaFX 전반적인 기능에 대해서 잘 정리해 놓았다. 참고하면 좋을 것이다.

[참고 사이트]([[Java] JavaFX - Intro :: Palpit's Techlog](https://palpit.tistory.com/entry/Java-JavaFX-Intro?category=843239))
