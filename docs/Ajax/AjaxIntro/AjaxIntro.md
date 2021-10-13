# Ajax

## Ajax란?

> Ajax란 Asynchronous JavaScript and XML의 약자이다.

한줄로 요약하면 웹페이지를 새로고침하지 않고 웹페이지의 부분을 갱신할 수 있는 동적인 웹페이지를 위한 기법의 하나이다. 새로고침하면서 데이터를 받아오지 않고 새로운 데이터로 바꿔 보여줄 수 있다는 것인데 이때 백엔드 단과 통신할 때 사용하는 데이터 형식은 JSON, XML, HTML, Text File 등이 있다. 내가 사용해본 것은 대부분의 웹 개발자들이 사용한다는 JSON만을 사용해 보았다. 



## 단점

앞서 장점을 말했으니 단점을 몇가지 이야기해보자면

- 클라이언트 서버에 데이터를 요청하는 방식이기에 서버가 먼저 푸시하는 서버 푸시방식의 실시간 서비스로는 적합하지 않다.

- 바이너리 데이터를 주고 받을 수 없다.

  > 0과 1로 인코딩된 파일을 뜻 함.

- Ajax 스크립트가 포함된 서버가 아닌 다른 서버로 Ajax요청을 보낼 수 없다.

- 클라이언트의 PC로 Ajax요청을 보낼 수 없다.



## Ajax 프레임워크

Ajax를 소위 바닐라로 아래와 같이 사용할 수도 있지만 

```javascript
function reqListener (e) {
    console.log(e.currentTarget.response);
}

var oReq = new XMLHttpRequest();
var serverAddress = "https://hacker-news.firebaseio.com/v0/topstories.json";

oReq.addEventListener("load", reqListener);
oReq.open("GET", serverAddress);
oReq.send();
```

나는 바닐라로 한번도 사용해본적이 없다. Ajax는 주로 쉽게 사용하기 위해서 Ajax 프레임워크를 사용한다고 한다. 종류는 아래와 같다.

- Prototype
- script.aculo.us
- dojo
- jQuery

그중 jQuery의 예시는 아래와 같다. 보면 위의 Ajax보다 직관성이 더 뛰어날 것이다.

```javascript
var serverAddress = 'https://hacker-news.firebaseio.com/v0/topstories.json';

$.ajax({
    url: ,
    type: 'GET',
    success: function onData (data) {
        console.log(data);
    },
    error: function onError (error) {
        console.error(error);
    }
});
```



## 마치며

이번 글에서는 Ajax가 어떤 녀석인지 왜 써야 하는지에 대해서 살짝 맛을 볼 수 있는 글이다. 다음 글부터는 동작방식과 세세한 부분들을 살펴보려고 한다. 



#### 참고 블로그

[Link-1](https://velog.io/@surim014/AJAX%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)

[Link-2](http://tcpschool.com/ajax/ajax_intro_basic)

