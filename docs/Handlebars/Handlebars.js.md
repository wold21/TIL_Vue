# Handlebars.js

## Handlebars란?

Handlebars.js는 중첩 중괄호({{ }})를 활용하는 웹 템플릿 엔진으로, 비슷한 류의 템플릿 엔진인 Mustache의 중첩 중괄호 방식을 사용하고 있는데 크게 봤을때는 Mustache와 크게 다른 점이 없어보이지만 분명 다른 점은 있다.  Mustache는 그저 Logic-less 지향으로 데이터를 뿌려주기만 하기 때문에 받아온 데이터의 가공이 필요할 때 프론트 단이든 Service단에서든 가공을 해야하지만 **Handlebars.js**는 헬퍼의  개념을 도입해 Mustache의  Logic-less를 크게 훼손하지 않으면서 기존의 불편함을 덜어주었다.



## 문법

기본적인 사용 방법은 Mustache와 똑같기 때문에 기초 문법을 스킵하도록 하겠다.

> [Mustache 살펴보기](http://localhost:8080/TIL_Vue/Mustache/Mustache.html)



### Helper 함수 만들기

#### 스크립트 단에 함수를 생성한다.

```javascript
Handlebars.registerHelper('to_lowercase', function(string) {
      return string.toLowerCase(); 
});
// 해당 함수는 들어온 인자를 소문자로 변환해준다.
```

데이터 앞에 해당 함수명을 써주면 사용법은 끝이 난다.

```handlebars
<div class='name'>
	{{to_lowercase name}}
</div>
```



## 마치며

요즘 프론트 단은 대부분 React와 Vue를 사용하지만 아직도 jQuery를 많이 사용하고 있는 한국 특성상 그 당시에 출시된 이러한 라이브러리 또한 오랫동안 살아남을 수 밖에 없는 것 같다. 내가 참고했던 블로그도 무려 15년도의 글이니 더 이상 설명은 필요가 없겠다. 내가 프로그래밍 공부를 하기 위해 갔던 학원에서 들었던 말과 음향 엔지니어를 공부하면서 들었던 말이 있는데 "새로 나오는 기술은 기존의 불편함을 해소하기 위한 경우가 많으나 기존의 불편함을 느껴보아야 진보된 기술을 접했을 때 얻을 수 있는 시야가 더 많을 것이다."라는 말이다. 우리 회사도 이제서야 Vue를 사용하기 시작했는데 어떻게 프론트의 모양이 달라졌는지 어서 빨리 만나보고 싶다.