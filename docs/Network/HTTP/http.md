# HTTP

### **Protocol**

- 통신 규약

- 보내고 받는 것을 해석하여 처리하는 것

### **HTTP**

- HyperText Transfer Protocol

- Request

  - userAgent에서 기기와 브라우저를 구분

- Response

  - 상태 코드값을 넘긴다(ex. 200, 404, 500....)
  - body에는 HTML과 JavaScript 뿐이다.
  - JS는 인라인 컴파일러이기 때문에 웹에 용이하다.
    - 그때 그때 컴파일한다.

- Connectionless - 서버에 연결하고, 요청후 응답을 받으면 연결을 끊는다.

  - 장점: 불특정 다수를 대상으로 하는 서비스에 적합
  - 단점: 클라이언트의 이전 상태를 알 수 없음. (stateless), 예를 들어 과거에 로그인을 성공했더라도 로그 정보를 유지할 수 없다. => cookie를 이용해서 이 문제를 해결

- HTTP는 **전송 프로토콜**이고 URI(Uniform Resource Identifiers)는 **자원의 위치를 알려주기 위한 프로토콜**이다.

* [**HTTP 개념 설명 블로그**](https://shlee0882.tistory.com/107)

- http 통신 구조

  - 참고링크 [----> MDN Document - HTTP Structure](https://developer.mozilla.org/ko/docs/Web/HTTP/Messages)

- http 상태 코드
  - 참고링크 [----> MDN Document - HTTP status code](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)

* **자주 쓰이는 응답코드**
  - `200 - OK`, 서버가 요청을 제대로 처리함.
  - `301 - Moved Permanently`, 해당 URI가 다른 주소로 바뀌었을 때.
  - `400 - Bad Request`, request에 포함된 보내는 데이터가 잘못 보내어 졌을 때.
  - `401 - Unauthorized`, 유저가 해당 요청을 진행하려면 로그인을 필요하다는 것을 나타내는 코드.
  - `403 - Forbidden`, 서버가 요청을 거부 (권한이 없기 때문), 예를 들어 구독자만 볼 수 있는 데이터 요청했을 때.
  - `404 - Not Found`, 요청한 자원(uri)이 서버에 존재하지 않음.
  - `505 - Internal Server Error`, 서버에서 에러가 났을 때 사용되는 코드.

> 웹 실행 순서는 웹 서버에서 전달 받은 html과 js 중에 html을 먼저 화면에 뿌리고 나서 js를 한줄씩 실행하고 화면에 뿌려준다.

### **Keep-alive**

- **Keep-alive 설정을 하면, 지정된 시간동안 연결을 끊지 않고 요청**을 계속해서 보낼 수 있다.

### **HTTP Request 구조**

- [참고 블로그](https://velog.io/@teddybearjung/HTTP-%EA%B5%AC%EC%A1%B0-%EB%B0%8F-%ED%95%B5%EC%8B%AC-%EC%9A%94%EC%86%8C)

- 크게 3부분으로 구성 Start Line / Headers / Body

1. Start Line

- 예시) `GET /search HTTP/1.1`

- `GET` : **HTTP Method**에 해당 / `request`가 의도한 `action`을 정의하는 파트

  - HTTP Methods: `GET`, `POST`, `PUT`, `DELETE`, `OPTIONS` 등이 있다.

- `/search` : **Request target**

  - 해당 request가 전송되는 목표 uri

- `HTTP/1.1`: **HTTP Version**

2. Headers

- request에 대한 추가정보를 담고 있는 부분

```bash
  Accept: _/_
  Accept-Encoding: gzip, deflate
  Connection: keep-alive
  Content-Type: application/json
  Content-Length: 257
  Host: google.com
  User-Agent: HTTPie/0.9.3
```

- 자주 사용되는 Header 정보
  - Host: 요청이 전송되는 target의 host url
  - User-Agent: 요청을 보내는 클라이언트에 대한 정보
  - Accept: 해당 요청이 받을 수 있는 응답(response) 타입
  - Connection: `keep-alive`로 설정하면 한 번에 하나씩 요청/응답이 아닌 불러올 파일들을 모두 한 번에 받을 수 있다.
  - Content-Type: 요청이 보내는 메시지 body의 타입.
  - Content-Length: 메세지 body의 길이

3. Body

- 클라이언트 요청(request)의 실제 내용

```bash
POST /payment-sync HTTP/1.1
Accept: application/json
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 83
Content-Type: application/json
Host: intropython.com
User-Agent: HTTPie/0.9.3
{
"imp_uid": "imp_1234567890",
"merchant_uid": "order_id_8237352",
"status": "paid"
}
```

### **TCP/IP**

- [TCP/IP에 대한 설명 블로그 - 카카오 기획자](https://brunch.co.kr/@wangho/6)

> TCP/IP 는 패킷 통신 방식의 인터넷 프로토콜인 IP (인터넷 프로토콜)와 전송 조절 프로토콜인 TCP (전송 제어 프로토콜)로 이루어져 있다.

- TCP는 IP 위에서 동작하는 프로토콜로 **\*\*데이터의 전달을 보증하고 보낸 순서대로 받게 해준다.\*\***

- FTP ( File Transfer Protocol ) [킹무위키](
