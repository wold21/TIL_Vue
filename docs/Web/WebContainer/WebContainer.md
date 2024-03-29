# Web Container



### 먼저 Servlet과 JSP을 알고가야한다.

#### Servlet

- Java를 이용하여 웹페이지를 동적으로 생성하는 서버측 프로그램

- 흔히 CGI(Common Gateway Interface)라고 한다.

- CGI는 사용자의 요청을 받아서 동적인 HTML문서를 만드는 역할을 한다.

- Servlet이란 Java로 구현된 CGI라고 생각하면 된다.



#### JSP

- JavaServerPage의 약자

- HTML 코드에 Java코드를 넣어 **동적 웹페이지**를 생성하는 웹 어플리케이션 도구이다.

- JSP가 실행되면 Java Servlet으로 변환된다.

-  WAS에서 동작되면서 필요한 기능을 수행하고 클라이언트에게 응답된다.



## Web Container는?

- Servlet과 JSP를 실행할 수 있는 소프트웨어를 웹 컨테이너(서블릿 컨테이너)라 부른다.

- Web Server에서 JSP를 요청하면 Container에서는 JSP파일을 서블릿 파일로 변환 한 뒤 컴파일하여 이것을 실행하고 그 결과를 웹 서버에 전달한다.



**다시 한번 WebServer, Container, WAS를 정리해보자.**



### WebServer

- 웹 브라우저와 같은 클라이언트로부터 HTTP 프로토콜로 요청을 받아 정적 데이터(HTML, CSS, JS 등)를 화면상에 단지 뿌려주는 역할(응답)을 하는 소프트웨어다. 대표적으로 Apache, Nginx, Node.js(자체 웹 서버 내장)이 있다.

- 크게 행동에 따라 하드웨어와 소프트웨어 부분으로 나눌 수 있다.



**하드웨어**

- 웹사이트 컴포넌트 파일(HTML, CSS, JS, Contents(image, video 등))들을 저장하는 컴퓨터 - 최종적으로 이 파일들을 사용자에게 전달함.

- 인터넷에 연결되어 있고 도메인 이름을 통해 접속될 수 있음.



**소프트웨어**

- 웹 사용자가 어떻게 호스트 파일들에 접근하는지를 관리

- HTTP서버는 URL(Web address)과 HTTP의 소프트웨어 일부다.



클라이언트가 웹 서버에 불려진 파일을 필요로 할때, 클라이언트는 HTTP를 통해 웹 서버에 파일을 요청하고 요청이 올바르게 웹 서버(하드웨어)에 도달되었을 때, HTTP서버(소프트웨어)는 요청된 문서를 HTTP를 이용해 클라이언트에게 파일을 제공한다.



### Web Container

- 웹 서버에서 JSP를 요청하면 Container는 JSP파일을 서블릿 파일로 변환한 뒤 컴파일하여 그 결과를 웹 서버에게 전달.
- 내가 써본 스택 중에서는 아파치가 WebServer, Tomcat이 WebContainer이다.
- Controller부터 Container단으로 볼 수 있다.



### WAS(Web Application Server)

- WebServer와 WebContainer가 합쳐진것.
  - WebServer없이 WAS만 존재할 수도 있다. 
- 다양한 로직 처리를 요구하는 동적 컨텐츠를 제공하기 위해 만들어진 Application Server
- Container : JSP, Servlet을 실행시킬 수 있는 소프트웨어
- WAS : JSP, Servlet 구동 환경을 제공함



## 동작과정

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1grd7ig5grlj315a0kaaeg.jpg" alt="스크린샷 2021-06-10 오후 4.33.42" style="zoom: 50%;" />



1. WebServer를 통해 필요한 페이지를 요청받는다.
2. Container가 web.xml을 참조하여 스레드를 생성하고 요청 및 응답 객체(HttpServletRequest, HttpServletResponse를 생성하여 스레드에게 전달한다.
3. 스레드 및 요청, 응답 객체 생성을 완료했다면 Container는 사용자의 요청에 맞는 Servlet(service)을 호출한다.
4. 호출된 Servlet의 요청을 담당하는 thread가 요청에 따라 doGet(), doPost()를 호출한다.
5. 호출된 doPost(), doGet() 메소드는 생성된 동적 페이지를 Response객체에 실어 Container에게 전달한다.
6. Container는 전달받은 Response객체를 HttpResponse형태로 전환하여 웹서버에 전달하고 생성되었던 스레드를 종료하고 요청 및 응답 객체를 소멸시킨다.





## WebServer와 WAS를 구분하는 이유

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1grd8g5tsmkj31600gcaec.jpg" alt="스크린샷 2021-06-10 오후 5.06.07" style="zoom:50%;" />

### Web Server가 필요한 이유?

클라이언트에게 이미지(정적 컨텐츠)를 보낸다고 가정해보자. 이미지는 일단 HTML이 클라이언트로 보내질때 함께 가는 것이 아니라 먼저 HTML문서를 받아 페이지 틀을 잡고 이미지를 다시 서버로 요청하여 이미지를 받아온다. 이미지는 동적 컨텐츠가 아니기 때문에 WAS까지 시그널을 보낼 필요가 없다. 그렇기에 Web Server를 정적 컨텐츠 담당으로 사용해 서버의 부담을 줄일 수 있다.



### WAS가 필요한 이유?

만약 Web Server만 있다면 사용자가 요청할 모든 상황에 대비한 동적 페이지를 HTML로 만들어놔야하기 때문에 자원 낭비가 불가피한데 WAS를 사용해 필요한 데이터를 그때 그때 DB에 요청하여 로직에 맞게 제공할 수 있어 자원을 효율적으로 사용할 수 있다. 

> 한 카페가 있다. 이 가게는 커피 머신이 구식이라 피크 타임이 올때를 대비에 많은 양의 베이스 커피를 쓸데없이 매장에 늘어 놓을 수 밖에 없다.(WAS를 사용하지 않음.) 그런데 반대편 가게는 웬일인지 피크타임 준비를 하나도 하지 않는 것이다. 며칠전 새 커피 머신을 샀다고 하더니 피크타임이 돼도 사람들이 금새 커피를 받아가는 것이었다. 미리 베이스 커피를 준비하지 않아도 새 커피머신(WAS)만 있다면 어떤 손님의 요청에도 커피를 내릴 수 있다는게 참으로 부러웠다.



### 그렇다면 WAS가 Web Server의 기능도 모두 수행하면 되지 않을까?

1. 일단 WAS는 그 나름대로 바쁘다 DB조회를 해야하고 다양한 로직을 수행해야하기 때문에 간단한 정적 컨텐츠는 Web Server에서 처리하는것이 사용자에게도 서버에도 훨씬 좋다. 그럼에도 불구하고 WAS로 모든 것을 처리하려고 한다면 사용자는 한페이지 한페이지 볼때마다 스트레스가 쌓여갈것이다. 
2. 물리적으로 분리하여 보안을 강화할 수 있는데 SSL에 대한 암복호화 처리에 Web Server를 사용한다.
3. 로드 밸런싱을 위해서 Web Server를 사용하고 Fail over, Fail back 처리에 유리하다.
4. 대용량 웹 어플리케이션의 경우 Web Server WAS를 분리하여 무중단 서비스를 가능하게 할 수 있다.