# DB Connection pool

## DBCP란 무엇인가?
먼저 백엔드 애플리케이션이 DB에 쿼리를 요청하고 응답 받는 경우가 굉장히 많은데 이때 통신은 TCP 기반으로 이루어지게 된다. TCP 통신의 특징으로는 높은 신뢰성을 기반으로 한 프로토콜인데 통신을 시작하고(open) 닫는(close) connection 단계가 있다는 것이 특징이다. 게다가 open connection을 할 시에는 3-way hand shake를 통해 연결하며 끊을 때는 4-way hand shake를 사용한다. 그런데 만약 매번 매 요청마다 이렇게 연결을 끊어다 맺었다하면 시간적인 비용도 많이 발생하게 되고 결과적으로 서비스 성능에 영향을 미치게 되는 문제가 생기게 된다. 이때 사용되는 것이 바로 DBCP다.

## DBCP
DBCP은 DB Connection pool의 줄임말인데 컨셉은 간단하다. 백엔드 애플리케이션이 뜨게되면 이때 DB와 TCP 연결을 여러개를 열어버리고 요청을 기다리게된다, 이 부분 때문에 pool이라고 불리는 것이다. 그렇게 서버가 요청을 받게되면 서버는 pool에서 연결을 하나 빌려오고 해당 connection을 이용해 DB와 통신하고 close connection을 하게 된다. 이때 close의 의미는 pool에 connection을 반납하는 의미로 바뀌게 된다.
이렇게 사용하게 되면 connection을 재사용할 수 있으며 연결을 할때 소비되는 시간을 절약할 수 있게 된다.
<br>
<img src="./d_1.png" alt="d_1" height="200">

## 설정방법
> 예시는 HikariCP와 MySQL이 기준이다.

paremeter를 적절하게 설정하는 것이 정말 정말 중요하다.

### DB 서버 설정
- max_connections
    - client와 맺을 수 있는 최대 connection 수
    - 충분하게 설정해야 client의 수가 증가해도 대응할 수 있게 된다.

- wait_timeout
    - connection이 inactive 할 때 다시 요청이 오기까지 얼마의 시간을 기다린 뒤에 close 할 것인지를 결정
    - 비 정상적으로 connenction이 종료되거나 connection을 다 쓰고 반환을 안하는 경우 혹은 네트워크 단절이 되는 경우 대비할 수 있는 시간 값
    - 위와 같은 연결이 많아지면 사용할 수 있는 pool의 개수가 줄어들기 때문.
    - 시간 내에 요청이 도착하면 0으로 초기화한다

### DBCP 설정(HikariCP)
- minimumIdle
    - pool에서 유지하는 최소한의 idel connection 수
    - 전체 connection 수도 maximumPoolSize보다 작다면 신속하게 추가로 connection을 만든다
    - 기본 값은 maximumPoolSize와 동일(= pool size 고정, 권장)
- maximumPoolSize
    - pool이 가질 수 있는 최대 connection 수
    - idle과 active(in-use) connection을 합쳐서 최대 수
- maxLifetime
    - pool에서 connection의 최대 수명
    - maxLifetime을 넘기면 idle일 경우 pool에서 바로 제거, active인 경우 `pool로 반환된 후` 제거
    - pool로 반환이 안되면 maxLifetime 동작 안함
    - pool로 반환을 잘 시켜주는 것이 중요하다
    - DB의 connection time limit보다 몇 초 짧게 설정해야한다. (wait_timeout)
- connectionTimeout
    - pool에서 connection을 받기 위한 대기 시간
    
### 적절한 connection 수를 찾기 위한 과정
1. 먼저 모니터링 환경을 구축한다. 
    - 서버 리소스, 서버 스레드 수, DBCP등등
2. 백엔드 시스템 부하 테스트 실행 (nGrinder)
    - request per second와 avg reponse time확인
3. 백엔드 서버와 DB 서버의 CPU, MEM 등등 리소스 사용률 확인
    - 백엔드 서버의 CPU가 치솟으면 애플리케이션 서버 증설
    - DB 서버의 CPU가 치솟으면
        - Secondary 추가
        - cache layer 추가
        - sharing
4. 리소스 사용률이 치솟지 않는데 RPS나 ART의 그래프에 문제가 보인다면
    - 만약 백엔드 서버가 thread per request 모델이라면 active thread 수 확인
        - thread를 늘려주면 된다.
    - 또는 DBCP의 active connection 수를 확인해본다.
        - 다 쓰고 있는 경우에는 수정해주면 된다.
        - DB 서버의 max_connection을 조절해주는 방법도 있다 각각 잘 타협해서 적용
        - max_connections보다 (백엔드 서버 수 X DBCP max size)를 적게 잡힐 수 있도록 설정하는게 좋다
5. 사용할 백엔드 서버 수를 고려하여 DBCP의 max pool size 결정

이런식으로 모니터링 툴을 통해 connection수를 설정할 수 있다.

[네이버 D2 Commons DBCP 이해하기](https://d2.naver.com/helloworld/5102792)

## 마무리
회사에서 개발을 했을 때 한 DB서버에 많은 사람의 DB 툴과 개발용으로 띄워 놓은 서버가 DB의 커넥션을 잡아먹어서 갑자기 한명이 "DB 조회가 언돼요!" 혹은 "DB가 내려간 것 같아요!" 라고 소리칠때가 있었는데 10의 9은 모두 커넥션 문제였다. 그때 처음으로 DB는 모두에게 열려있는 자원이 아니구나 하는 것을 깨달았었는데 이번 강의에서 더 자세하게 생각해 볼 수 있어서 좋았던거 같다. 회사에서는 그냥 무작정 DB서버의 커넥션 수를 막 1000개 2000개 이렇게 늘렸었는데 꽤나 재밌는 대응이었다고 생각된다. 물론 우리만 쓰는 개발서버라서 상관은 없었지만 말이다.