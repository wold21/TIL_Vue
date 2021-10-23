# Ajax_Second

## Configuration

다 써본건 아니지만 대게의 Ajax 프레임워크가 가지고 있는 구성은 목적이 정해져 있기 때문에 비슷할거라고 생각한다. 흔하디 흔한 jQuery의 Ajax만 써봤기 때문에 예시 또한 그렇게 들겠다.

```javascript
$.ajax({
	url:"API요청 주소",
	dataType:"text", //서버가 요청 URL을 통해서 응답하는 내용의 타입
    async: true,
    method: "GET", //요청 메소드 방식
    beforeSend: function (xhr) {  // 간단한 경우 headers: {'name': 'value'}로도 가능
            xhr.setRequestHeader("Content-type","application/json");
            xhr.setRequestHeader("Authorization","JWT " + token);
        },
	success : function(response){
		//서버의 응답데이터가 클라이언트에게 도착하면 자동으로 실행되는함수(콜백)
		//response - 응답데이터
		//$('#response').html(response);
		console.log(response);
	},
	error : function(xhr){
		//통신 실패시 발생하는 함수(콜백)
		console.log(xhr);
	}
});
```

 

각 키에 대해 간단한 설명이다. 이 외에 정말 많은 옵션들이 있으며 추가적으로 참고 사이트에 기입해 놓았다. 아마 이정도의 옵션을 가지고 사용할 것이다. 

| method(type)                                                 | url                                   | datatype                                        | headers                                                      |
| ------------------------------------------------------------ | ------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| [First편](https://wold21.github.io/TIL_Vue/Ajax/Ajax_First/Ajax_First.html#%E1%84%83%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8-%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%85%E1%85%B5)에서 나온 그 타입이다. | 데이터를 요청할 주소를 작성하면 된다. | 예시는 text이지만 나는  Json을 주로 사용하였다. | 데이터를 보낼 때 보내는 데이터의 형식이나 토큰을 보낼 수 있다. |

| async                            | success                         | error                            |
| -------------------------------- | ------------------------------- | -------------------------------- |
| 동기/비동기 여부를 정할 수 있다. | 데이터 응답 성공시의 콜백 함수. | 데이터 응답 실패시 에러 콜백함수 |



## url로 보내면?

이제 로직에 따라서 설정한 url로 요청을 보내게 되는데 나 같은 경우는 백단으로 Java를 사용하였고 자바 서버에서 Ajax의 요청을  xhr객체로 받고 service단에서 데이터를 가공하거나 가공을 하지 않는다면 DB(Mapper)라든지 아니면 또 다른 서버라든지로 요청을 보내서 콜백함수로 전달 받게 된다.



## Ajax를 마치며

Intro부터 두번째 장까지 Ajax의 사용법과 사용의의에 대해서 적어보았다. 웹을 깊게 공부해보지 못한 나로써는 Ajax라는 기법이 나의 시야를 한단계 성장 시켜줬던 기법이었다. 회사에서는 더 간편하게 함수로 만들어 사용하고 있어 안 쪽의 코드를 잘 살펴보지 못했는데 그냥 가져다 쓰기보다 나를 이렇게 편하게 해준 기법에 대해서 공부가 필요하다고 생각하여 이렇게 짧은 글을 써보았다. 



#### 참고 사이트

[Link - jQuery Ajax Option](https://cofs.tistory.com/404)

[Link - TcpSchool](http://tcpschool.com/ajax/ajax_server_request)



