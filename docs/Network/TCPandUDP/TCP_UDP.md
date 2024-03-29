# TCP와 UDP

둘다 공통적으로 네트워크 레이어 중 전송 레이어에 있으며 데이터를 어딘가에 보낼 때 사용하기 위한 프로토콜이다.

> `이후에 OSI 7 Layer와 TCP/IP 4 Layer에 대해서도 작성해보려고 한다.`

![NetworkLayer](https://i.loli.net/2021/06/13/NhH8MPSfyZq6TbX.png)

## TCP

Transmission Control Protocol의 약자이며 인터넷 상에서 데이터를 메세지의 형태로 보내기 위해 IP와 함께 사용하는 프로토콜이라고 한다. 또 연결지향적 프로토콜이라고 하는데 이는 클라이언트와 서버가 **연결된 상태**에서 데이터를 주고 받는 프로토콜을 의미한다.

### 동작 유형

클라이언트가 서버에 연결 요청을 보내고 서버가 이를 수락하면 통신 선로가 고정되고 모든 데이터는 이 선로를 통해 순차적으로 전달된다. 그렇기 때문에 데이터를 안정적으로 보낼 수 있다.

TCP프로토콜은 신뢰성 있는 데이터의 전송을 위해 확인 작업을 거치는데 TCP는 패킷을 성공적으로 전송하면 'ACK'라는 신호를 날리고 만약 제시간에 도착하지 않으면 Timeout이 발생하여 손실이 발생한 패킷을 다시 전송해 준다.

TCP는 이렇게 데이터를 주고 받을 때 응답을 주고받는 절차가 있어 통신의 신뢰성이 올라가게 되는 것이다.

> 패킷이란?
>
> 네트워크 전송의 용량 단위 중 하나이며 데이터를 분할해놓은 것을 뜻한다. 보통 헤더, 데이터(페이로드), 트레일러로 구성되어 있으며 헤더에는 송수신 주소와 정보 조각이 분할 된 패킷 수와 개별 패킷의 위치를 가지고 있으며 데이터는 48byte에서 4kb의 크기로 나누어져있다. 트레일러에는 네트워크 유형마다 다르지만 일반적으로 패킷 모두가 잘 도달했는지를 알려주는 몇가지 비트와 컴퓨터가 모든 패킷을 받았는지 확인할 수 있는 CRC(전송 에러 탐지)가 포함되어있다.
>
> 패킷과는 다른 단위로 서킷이라는 것도 있다.
>
> 출처 - [Link](https://blog.naver.com/PostView.nhn?blogId=dreamxpeed&logNo=222113381125&categoryNo=53&parentCategoryNo=0)

### 단점

- 데이터를 보내기 위해서 반드시 클라이언트와 서버가 연결이되어야하며 1:1 통신만 가능하다.
- 통신 선로가 최단선이 아닐경우 상대적으로 UDP보다 데이터 전송 속도가 느리다

### 특징

- 데이터의 경계를 구분하지 않는다. (바이트 스트림 서비스)
- 데이터의 전송 순서를 보장한다.
- 신뢰성있는 데이터를 전송한다.
- 데이터 흐름제어 및 혼잡제어
- 연결(3-way handshaking), 해제(4-way handshaking) 방식을 가지고 있다.

### 3-way handshaking

- 클라이언트와 서버가 초기에 통신 선로를 마련하기 위해 거치는 단계
- 이 단계에서 가장 많은 시간이 소요됨.

![3-way_handshaking](https://i.loli.net/2021/06/13/TBMdezpvrt7UGRq.png)

## UDP

User Datagram Protocol의 약자이며 비연결 지향적 프로토콜이며 TCP처럼 연결 절차를 거치지 않고 발신자가 일반적으로 데이터를 발산하는 방식이다.

TCP에 비해 빠른 전송을 할 수 있지만 데이터의 신뢰성이 떨어지는데 발신자가 데이터 패킷을 순차적으로 보내더라도 서로 다른 통신 선로를 통해 전달 될 수 있고 먼저 보낸 패킷이 나중에 보낸 패킷보다 늦게 도착할 수도 있으며 잘못된 경우 아예 패킷이 유실 될 수도 있다.

비연결이기 때문에 최종적으로 유실이나 변조가 되더라도 재전송을 하지 않는다.

### 단점

- 데이터의 신뢰성이 없다.

- 의미있는 서버를 구축하기 위해서는 일일히 패킷을 관리해주어야한다.

### 특징

- 클라이언트와 서버가 연결되어있지 않아도 된다.
- 데이터 그램 방식을 제공한다.
- 데이터 경계를 구분한다.
- 신호절차가 없다.
- 상대적으로 TCP보다 전송속도가 빠르다.
- 실시간 서비스에 자주 사용됨.

### UDP의 헤더정보

- 송신자의 포트번호
- 수신자의 포트번호
- 데이터의 길이(UDP 헤더와 데이터의 총 길이)
- 체크섬
  - 데이터 오류 검사에 사용

## TCP/UDP 비교

### 공통점

- 포트번호를 이용하여 주소지정
- 데이터 오류 검사를 위한 체크섬이 존재

### 차이점

|                |        TCP         |           UDP            |
| :------------- | :----------------: | :----------------------: |
| 연결방식       |   연결형 서비스    |     비 연결형 서비스     |
| 패킷 교환 방식 |   가상 회선 방식   |     데이터그램 방식      |
| 전송 순서      |   전송 순서 보장   |  전송 순서 바뀔 수 있음  |
| 수신 여부 확인 | 수신 여부를 확인함 | 수신여부를 확인하지 않음 |
| 통신방식       |        1:1         |     1:1 / 1:N / N:N      |
| 신뢰성         |        높음        |           낮음           |
| 속도(상대적)   |        느림        |           빠름           |
