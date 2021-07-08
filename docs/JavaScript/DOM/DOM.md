

# DOM

## DOM이란?

문서 객체 모델이라고 하며 영어로는 Document Object Model이라고 한다.

사용 용도는 자바스크립트로 XML이나 HTML 문서에 접근하기 위한 일종의 인터페이스이다.

이러한 DOM은 W3C의 표준 객체 모델이며 아래와 같이 계층 구조를 가지고 있다.

<img src="https://i.loli.net/2021/07/08/qTIiEtSvU3xbRWV.png" alt="HTML DOM" style="zoom:67%;" />

그리고 이러한 계층 구조의 객체 모델을 사용하여 다음과 같은 작업을 할 수 있다.



#### 🔥중요

>- 자바스크립트는 새로운 HTML 요소나 속성을 추가할 수 있습니다.
>
>- 자바스크립트는 존재하는 HTML 요소나 속성을 제거할 수 있습니다.
>
>- 자바스크립트는 HTML 문서의 모든 HTML 요소를 변경할 수 있습니다.
>
>- 자바스크립트는 HTML 문서의 모든 HTML 속성을 변경할 수 있습니다.
>
>- 자바스크립트는 HTML 문서의 모든 CSS 스타일을 변경할 수 있습니다.
>
>- 자바스크립트는 HTML 문서에 새로운 HTML 이벤트를 추가할 수 있습니다.
>
>- 자바스크립트는 HTML 문서의 모든 HTML 이벤트에 반응할 수 있습니다.


<br>


## DOM의 종류

W3C DOM 표준은 세가지 모델로 구분된다.

1. Core DOM : 모든 문서 타입을 위한 DOM 모델

2. HTML DOM : HTML 문서를 위한 DOM 모델

3. XML DOM : XML 문서를 위한 DOM 모델


<br>


## HTML에 사용해보기

1. HTML 태그 이름(tag name)을 이용한 선택

   ```javascript
   var selectedItem = document.getElementsByTagName("li"); // 모든 <li> 요소를 선택함.
   for (var i = 0; i < selectedItem.length; i++) {
       selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.
   }
   ```

2. 아이디(id)를 이용한 선택

   ```javascript
   var selectedItem = document.getElementById("even"); // 아이디가 "even"인 요소를 선택함.
   selectedItem.style.color = "red"; // 선택된 요소의 텍스트 색상을 변경함.
   ```

3. 클래스(class)를 이용한 선택

   ```javascript
   var selectedItem = document.getElementsByClassName("odd"); // 클래스가 "odd"인 모든 요소를 선택함.
   for (var i = 0; i < selectedItem.length; i++) {
       selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.
   }

4. name 속성(attribute)을 이용한 선택

   ```javascript
   var selectedItem = document.getElementsByName("first"); // name 속성값이 "first"인 모든 요소를 선택함.
   for (var i = 0; i < selectedItem.length; i++) {
       selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.
   }
   ```

5. CSS 선택자(selector)를 이용한 선택

   ```javascript
   var selectedItem = document.querySelectorAll("li.odd"); // 클래스가 "odd"인 요소 중에서 <li> 요소만을 선택함.
   for (var i = 0; i < selectedItem.length; i++) {
       selectedItem.item(i).style.color = "red"; // 선택된 모든 요소의 텍스트 색상을 변경함.
   }
   ```

   - .querySelectorAll은 익스플로러 8 포함 이전 버전에서는 지원하지 않음.

6. HTML 객체 집합(object collection)을 이용한 선택

   ```javascript
   var title = document.title; // <title> 요소를 선택함.
   document.write(title);
   ```

<br>



## 내용 변경

```javascript
var str = document.getElementById("text");
str.innerHTML = "이 문장으로 바뀌었습니다!"; // 이 문장으로 해당 객체가 대체됨.
// innerText은 html태그를 텍스트로 인식한다.
```

```javascript
var link = document.getElementById("link");          // 아이디가 "link"인 요소를 선택함.
link.href = "/javascript/intro"; // 해당 요소의 href 속성값을 변경함.
link.innerHTML = "자바스크립트 수업 바로 가기!";     // 해당 요소의 내용을 변경함.
```



마찬가지로 CSS도 가능하다.

```javascript
var str = document.getElementById("text");                 // 아이디가 "str"인 요소를 선택함.
function changeRedColor() { str.style.color = "red"; }     // 해당 요소의 글자색을 빨간색으로 변경함.
function changeBlackColor() { str.style.color = "black"; } // 해당 요소의 글자색을 검정색으로 변경함.
```


<br>


#### 참고 링크

전반적인 내용 -> [TCP School](http://tcpschool.com/xml/intro)

innerText -> [innerHTML vs innerText](https://kyoung-jnn.tistory.com/entry/JavaScript-innerHTML-innerText-%EC%B0%A8%EC%9D%B4%EC%A0%90)



