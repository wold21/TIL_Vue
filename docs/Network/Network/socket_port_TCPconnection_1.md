# Socket, Port, TCP connection 2부

## 복습
우리는 TCP/IP stack을 기준으로 네트워크를 공부하고 있다. 이 스택은 크게 두 부분으로 나누어지는데 애플리케이션 영역과 시스템 영역이다. 각 영역의 차이점은 네트워크 기능을 사용하는 것과 네트워크 기능을 지원하는데에 그 차이가 있다. 그리고 애플리케이션은 시스템 기능을 함수로 쓸 수 없게 되어있다. 대신에 시스템은 애플리케이션이 네트워크 기능을 사용할 수 있도록 프로그래밍 인터페이스를 제공하는데 이를 Socket이라 부른다. 그래서 개발자는 socket programming을 통해서 네트워크 상의 다른 프로세스와 데이터를 주고 받을 수 있도록 구현한다.


## Socket
대부분의 시스템은 socket형태로 네트워크 기능을 제공한다. 그러나 내가 3년동안 일하면서 소켓에 대해 작업을 해본적이 단 한번도 없는데 그 이유는 보통 라이브러리나 모듈 형태로 한번 감싸져있어서 그랬던 것이다. 내부를 열어보면 모두 소켓을 활용해서 프로토콜을 구현했다는 것을 알 수 있을 것이다. 

## Socket의 실제 사용
이전 글에서 socket은 protocol과 ip주소 그리고 port이름으로 구성되어 유니크하다고 했는데 실제 시스템 레벨에서 구현되는 부분은 조금 달라지게 된다. UDP 프로토콜은 가능한 반면에 TCP 프로토콜은 그렇지 않다.

### TCP socket 동작 방식
TCP는 서로 연결이 되어야 데이터를 전송할 수 있다고 했는데 실제 구현된 순서를 어떻게 될까. 클라이언트와 서버가 있다고 했을 때 연결의 시작은 클라이언트가 서버에 연결을 요청하는 것으로부터 시작하는데 그렇게 하기 위해서는 서버에서 특정 소켓을 항상 오픈해놓고 요청을 기다려야한다. 그 소켓을 `listening socket`이라고 부른다. 이제 요청이 들어오면 연결을 맺을 때 대화하는 3-way handshaking을 시작하게 된다. 이 과정이 끝나고 연결이 되고나면 서버는 소켓을 하나 더 오픈하고 그 소켓으로 클라이언트와 연결하여 사용하게 된다. 이 와중에 다른 요청이 들어오고 연결 대화가 끝나고 나면 서버는 또 하나의 소켓을 생성해서 클라이언트와 통신하게 된다. 그런데 여기서 흥미로운 점은 서버가 새로 생성한 소켓은 리스닝 소켓과 정보가 똑같다는 것이다. 그러니까 현재 상황으로 보면 3개의 똑같은 소켓이 오픈되고 사용되고 있다는 것이다.  

<img src="./images/tcp_duplicate.png" alt="tcp_duplicate" height="300">

그러면 클라이언트는 어떻게 서버 쪽 소켓을 구분하고 통신하는 걸까? 바로 기존의 통신 정보에 다른 정보를 추가하여 구분할 수 있게 한다. 클라이언트가 서버로 통신을 요청하면 이때는 구분없이 리스닝 소켓을 사용하고 그 이후의 통신을 구분하기 위해서는 서버 쪽 소켓만으로는 구분할 수 없기에 클라이언트 쪽 정보를 추가로 확인하여 통신을 하게 된다. 그러면 필요한 소켓 정보는 클라이언트 ip와 클라이언트 port 그리고 서버 즉, 도착지의 ip와 도착지 port로 구분하면 된다는 것이다. 아래처럼 말이다.

<img src="./images/tcp_duplicate_1.png" alt="tcp_duplicate" height="300">

그런데 여기서 또 확인해 볼 수 있는 것이 클라이언트 쪽에서도 그러면 충분히 일어날 수 있는 일 아니냐 하는 점이다. 그렇다 몇몇 조건을 만족하면 클라이언트에서도 서로 다른 socket이 동일한 IP와 Port를 가지는 것이 가능하다고 한다. 중복이 되더라도 위에서 예로 들었던 서버 쪽의 로직과 똑같이 전송지와 목적지의 ip/port를 가지고 구분하여 통신하게 된다. 그래서 TCP 표준에서는 "IP와 Port그리고 프로토콜만 있으면 유니크하게 식별할 수 있다."가 정의였지만 이러한 예시를 보면 구현된 모습은 정의와는 다른 모습을 확인할 수 있다. 반면에 UDP는 TCP 표준 정의와 같이 동작할 수 있게 된다. 그 이유는 connection의 단계가 없기 때문이다.

### UDP socket 동작 방식  

<img src="./images/udp_duplicate.png" alt="udp_duplicate" height="300">

udp는 이전에 말했던 신뢰할 수 없는 internet protocol 위에서 큰 변화없이 그대로 작동한다. 그래서 TCP처럼 추가로 소켓을 만들지 않고 하나의 소켓으로 이곳 저곳으로 데이터를 보낼 수 있다. UDP socket은 데이터를 보낼 때마다 어느 UDP socket으로 보낼지 지정할 수 있으며 받는 쪽은 데이터를 읽을 때 어디서 보냈는지 알 수 있다. 


## Port number
Port number는 <b>16bits로 이루어진 숫자(0 ~ 65535)</b>이며 몇개의 큰 구분을 지어 사용하고 있다.

<b>0 ~ 1023</b>  
    - well-known ports, system ports  
    - HTTP(80), HTTPS(443), DNS(53)  

<b>1024 ~ 49151</b>  
    - registered ports(*IANA에 등록된 번호) *인터넷 번호 할당 관리 기관  
    - MySQL DB(3306), Apache tomcat server(8080)  

<b>49152 ~ 65535</b>  
    - dynamic ports(등록 안된 번호, 임시로 혹은 자동 할당될 때 사용)


## 마무리
<img src="./images/tcp_table.png" alt="tcp_table" height="300">

실제로 구현된 TCP의 동작방식으로 깨달은 것은 무수히 수많은 클라이언트가 어떻게 하나의 애플리케이션으로 요청을 보낼 수 있는지를 깨달을 수 있었던 내용이었다. 가장 자주보았고 경험했던 부분인데 한번도 의아하게 생각해본적이 없었던 문제였고 지금까지 OSI 모델을 3번정도 공부했는데 점점 완성되어가는 기분이다.