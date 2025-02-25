# Socket, Port, TCP connection 1부

## OSI 7 layer와 TCP/IP stack의 차이
- OSI 7 layer는 네트워크 시스템 구성을 위한 범용적이고 `개념적인 모델`
    - 관리 주체 : ISO/IEC
- TCP/IP stack은 인터넷이 발명되면서 함께 개발된 `프로토콜 스택`
    - 관리 주체 : IETF에서 인터넷 표준을 관리(RFC 문서)
    - TCP, UDP, IP 등의 스펙은 RFC에서 정의

그래서 사실 인터넷에서 실제 사용되고 있는 모델은 TCP/IP stack이라고 생각하면 된다. 

## TCP/IP stack
### System
<span style="color:blue; font-weight:bold;">transport</span>, <span style="color:green; font-weight:bold;"> internet layer</span>, <span style="color:#005666; font-weight:bold;">link layer</span>는 하드웨어나 펌웨어 혹은 OS 레벨에서 구현/관리하고 있으며 네트워크 기능을 `지원`하는데 목적이 있다. 

### Application
반면에 <span style="color:orange; font-weight:bold;">application layer</span>는 어플리케이션 레벨에서 구현되거나 관리하며 네트워크 기능을 `사용`하는데 목적이 있다.

## Port
TCP/IP stack은 이제 크게 애플리케이션과 시스템으로 나누어 살펴볼 수 있다. 애플리케이션에는 어떤 프로세스가 있고 이 프로세스가 네트워크 통신을 하고 싶다고 하면 시스템 영역과 연결하여 통신을 해야하는데 이때 통로 역할을 해주는 것이 바로 port이다.

<img src="./images/port.png" alt="port" height="300">

프로세스는 하나의 포트를 필요로 하기도 하지만 여러개의 포트를 필요로 하기도 한다. 각 포트는 port name을 가지고 있어 이를 통해 식별한다. 이제 이 포트를 통해서 서로 떨어져있는 프로세스가 통신할 수 있게 되는데 이때 시스템 영역은 internet protocol을 사용하여 통신을 하게 된다. internet protocol은 신뢰할 수 없는 프로토콜인데 그 이유는 전송 중 데이터가 유실되거나 보내는 순서대로 받지 못할 수 있기 때문이다. 대신 속도가 빠르다는 장점이 있다.
> Internet Protocol?  
> 하나의 프로세서에서 다른 프로세서로 데이터를 보내는 프로토콜  

<img src="./images/internet_protocol.png" alt="internet_protocol" height="300">

그래서 프로세스간 데이터를 안정적으로 주고 받을 수 있는 프로토콜의 필요성이 생겼다. 그렇게 개발된 것이 바로 TCP(transmission control protocol)이다. TCP는 internet protocol위에서 동작하지만 어떠한 개념으로 인해 프로세스 간 통신을 안정적으로 할 수 있게 하였다.

### TCP(REC 793) Connection
#### Connection 
프로세스 간의 안정적이로 논리적인 통신 통로
1. connection을 열고
    - 3-way handshaking 방식을 사용함.
2. 데이터를 주고 받고
3. connection을 닫는다.
    - 4-way handshaking 방식을 사용함.
이러한 과정을 가진 연결 방식을 `connection-oriented`이다.

### 인터넷 상에서 어떻게 포트를 식별할까?
수많은 프로세스들이 통신할 때 포트를 사용하기때문에 포트(number)를 정의할 필요성이 생겼다. 정의는 다음과 같다.  
> 16bits로 이루어진 숫자  
> 0부터 65535까지  

그러나 포트 넘버 만으로는 유니크하게 식별할 수가 없어서 internet address(이후 IP로 발전하게 됨.)로 각 host를 유니크하게 식별할 수 있기 때문에 internet address + port number를 사용해서 포트를 유니크하게 구분하기로 하였다. 그리고 이 internet address + port number 두 값을 합쳐 부르게 된 말이 바로 `Socket`이다. TCP의 세계관에서 소켓이란 인터넷 상에 존재하는 각 port를 유니크하게 식별하기 위한 주소라고 정의하면 된다.

### Connecntion & Socket
<b>각 Connecntion은 유니크하게 식별할 수 있어야한다.</b>  
<b>그러므로 한 쌍의 Socket은 유니크하다</b>  
<b>src internet addr, src port, dest internet addr, dest port</b>  
<b>하나의 Socket은 동시에 여러 connecntion들에서 사용될 수 있다.</b>  

### UDP(user datagram protocol)
<b>connectionless : </b> 연결을 맺지 않고 바로 데이터를 주고 받는다.  
<b>unreliable : </b> internet protocol을 거의 그대로 사용  
<b>UDP 표준(RFC 768)을 보면 socket이라는 단어가 등장하지 않는다.</b>  

## Socket
그러나 사실 socket이라는 것이 ip에 port number를 합친 개념이라 이후 UDP에서도 socket 개념을 쓰기 시작하게 되는데 정리를 해보자면 Socket은 TCP/IP stack에서 개념적으로 통신을 안정적으로 하기위해 Socket을 발명했다. 그러나 지금은 위처럼 TCP, UDP에서 Socket을 동일하게 사용하기 때문에 이제는 protocol, ip address, port number로 식별하게 된다.

<img src="./images/socket_connection.png" alt="socket_connection" height="300">  

> 소켓에서 8282는 오타 -> 8082

### 주의사항
실제로 네트워크 프로그래밍을 할 때는 소켓의 개념과 의미가 미묘하게 다르다. 그 중에서 소켓을 식별하는 방법에서 큰 차이가 있다고 한다. 

## 마무리
1900년 후반 TCP/IP가 활발히 보급이 되었지만 안정적이지 못한 internet protocol을 주로 사용하던 도중 connection방식의 TCP 통신이 개발되어 안정적으로 통신할 수 있게됨. 이 방식은 연결 시 3-way handshaking, 해제 시 4-way handshaking을 주고 받는 특징이 있다. 

각 호스트 즉, 프로세스가 연결되기 위해서는 각각의 프로세스가 고유한 존재가 되어야한다. 그렇지 않으면 중구난방으로 연결되어버릴 테니까. 그래서 Socket이라는 것이 정립된다. 소켓은 ip(그때 당시 internet addredd)와 port number를 합친 것을 소켓이라고 부르게 된다. 여기서 port란 애플리케이션 영역과 시스템 영역 그러니까 TCP/IP stack을 크게 두 부분으로 나누고 하나는 소위 소프트웨어 영역 그리고 나머지는 하드웨어 영역을 가리키는데 이 두 영역을 연결해주는 것이 port이고 port의 고유한 이름이 port number이다. (\*한 프로세스 당 포트는 여러개를 가질 수 있음.)

TCP말고도 같은 레이어에 있는 UDP라는 프로토콜이 있다. 해당 프로토콜은 internet protocol을 거의 그대로 사용하는 프로토콜인데 이후 TCP처럼 socket의 개념을 그대로 사용하게 되었고 (특별하게 정의하지 않고 사용했을 수 있음.) 그래서 소켓은 protocol + ip + port number로 정의하게 되었다. TCP/10.10.10.10/8888과 같이 말이다.