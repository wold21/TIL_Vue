# Internet

## 개요
난 인터넷없으면 살지 못할 것 같다. 이렇게 재미있는 우물을 두고 어떻게 다른 것을 우선시 할 수 있을까. 이러한 것들 말고 우리가 이 인터넷이 뭔지 알기 위해서는 알아야 할 개념과 라우터, 모뎀, 허브, 스위치와 같은 장비를 알아야한다. 천천히 인터넷에 대해서 알아가보자.

## Network
### 우리집부터
우리집에는 컴퓨터, 스마트폰, 스마트 tv가 존재한다. 이들은 모두 각각 인터넷에 연결되어있다. 이때 알고 가야하는 개념이 하나 등장한다. 바로 IP주소라는 것이다. 
> IP 주소란?  
> 인터넷에 연결되기 위해 필요한 인터넷 상의 주소
> 종류는 IPv4와 IPv6가 있다. v는 버전을 뜻하며 주소의 길이로는 4버전은 32비트를 6버전은 128비트를 가진다.

아무튼 이 IP주소는 회선당 하나를 부여받을 수 있다. 우리가 흔히 아는 KT나 SKT에서 말이다. 가정에서 인터넷을 쓰기 위해서는 외부에서 케이블(회선)이 하나 들어와야한다. 이때 만날 수 있는 장비가 모뎀이다. 모뎀은 간단하게 `네트워크 통신에 필요한 신호 변환 장치`라고 생각하면 된다. 이제 이 모뎀과 우리가 흔히 들었던 공유기(Home Router)를 연결시켜줍니다. 
> 공유기란?   
> 여러 기기들을 인터넷에 연결될 수 있도록 하는 장치   
> 하나의 IP주소로도 동시에 인터넷을 사용하는 것이 가능  
> 공유기에 연결된 기기들은 같은 네트워크 소속  

이제 스마트폰과 컴퓨터 스마트 tv를 이 공유기에 연결시켜주게되면 각 기기는 모두 인터넷에 연결되게 됩니다. 만약 집에 Nas나 프린터 혹은 추가로 데스크탑을 설치하려고 하는데 공유기에 랜포트가 부족한 상황이 올 수 있습니다. 이때 등장한 것이 바로 스위치 입닌다.
> 스위치란?  
> 같은 네트워크 내의 기기들이 서로 통신할 수 있도록 하는 장치  
> 보통 공유기의 랜포트가 부족할 때 사용  
> 스위칭 허브 혹은 그냥 허브라고도 불림  

모뎀과 공유기가 연결된 것처럼 공유기와 스위치를 연결시켜주면 우리에겐 또 n개의 랜포트가 생겨나게됩니다. 나머지 기기를 모두 연결할 수 있게 되었습니다. 이제 모든 기기는 서로 연결되어있고 파일 혹은 프린트를 할 수 있습니다. 이러한 것처럼 서로 어떠한 망을 통해서 연결되어있는 모습이 바로 네트워크입니다. 
> 네트워크란?  
> 컴퓨터나 기타 기기들이 리소스를 공유하거나 데이터를 주고 받기 위해 유선 혹은 무선으로 연결된 통신 체계

### 내가 다니는 학교, 회사에서는 LAN
이러한 네트워크는 학교, 가정, 회사에서 모두 구축할 수 있습니다. 그런데 이 네트워크에는 일정한 범위가 존재하고 그에 따라 부르는 명칭이 있습니다. 위처럼 제한된 공간이나 범위에서 각 기기들을 연결하여 데이터를 공유하는 네트워크를 Local Area Network 즉, LAN이라고 부릅니다. 그리고 랜을 구성하는 주요 기술 중 Ethernet(유선통신)과 wireless LAN(무선통신, Wi-Fi)이 있습니다.

### 내 친구 집과 친구 집과 친구 집의 친구 집까지 WAN
저와 친구는 영화를 보는 것을 정말 좋아합니다. 그래서 우리는 서로의 영화를 네트워크를 사용해서 공유하려고 했습니다. 그런데 저와 친구 집은 5km나 떨어져있어서 랜선으로 연결시키는 것은 굉장히 무모한 일입니다.(가능은 하겠지만) 이럴때 사용하는 네트워크가 Wide Area Network, WAN입니다. WAN은 여러 LAN이나 다른 종류의 네트워크들을 묶어서 멀리 떨어진 기기들도 서로 통신이 가능하도록 만든 네트워크입니다. LAN보다 범위가 엄청 넓어짐을 상상해볼 수 있습니다. 은행의 ATM 기기나 우리가 사용하는 4G, 5G 그리고 Internet도 WAN의 한 종류가 됩니다. 

## Internet
### 그래서 인터넷이 뭐지?
인터넷은 우리가 위에서 말한 모든 것을 아우르는 말로 `The network of networks`혹은 `the world's largest WAN` 또는 `Global Network` 라고 불립니다. 

### ISP?
이제 우리의 인터넷 범위는 WAN까지 확장하게 되었는데 이런 질문이 생길 수 있습니다.  
> `도대체 이 수많은 WAN을 누가 연결해주고 있는거지?`  

바로 ISP(Internet Service Provider)라고 하는 것이 그 역할을 해주고 있습니다. ISP가 일반 사용자나 회사, 기관 등이 인터넷을 사용할 수 있도록 `인터넷 연결 서비스`를 제공해 주는 것이지요. 내가 나의 친구 집과 통신하기 위해서는 수많은 ISP를 거쳐서 통신을 하게 됩니다. 이 말은 ISP가 엄청 많다는 것을 의미합니다. 게다가 ISP는 역할과 규모에 따라서 tier가 나뉘게 됩니다.
#### Tier
1. tier 1
    - 국제 범위의 네트워크 보유
    - 인터넷의 모든 네트워크 접근 가능
        - 다른 티어에 접근이 가능하다는 뜻이다.
    - 인터넷 중추 역할(backbone)
    - 트래픽 전송 비용이 없다. 
    - <b>최상의 포식자</b>
2. tier 2
    - 국가/지방 범위 네트워크 보유
    - 일반 사용자나 기업 대상 서비스
    - 인터넷의 모든 영역에 연결되기 위해 tier 1 ISP에게 비용을 내고 트래픽 전송
    - tier 3에게 전송 비용을 받는다.
    - tier 2끼리는 전송 비용이 없다.
    - SKT, KT, LG
3. tier 3
    - 작은 지역 범위 서비스 제공
    - 일반 사용자나 기업 대상 서비스
    - 상위 ISPs에게 비용을 내고 인터넷 트래픽을 구매해서 이를 통해 서비스
    - 한국은 지역이 좁아 없다. 미국 같은 대륙은 존재함.

### 그러면 ISP끼리는 어떻게 연결되어있지?
#### 라우터 Router
라우터는 목적하는 네트워크에 데이터는 보내는 장치이다. 한 ISP내에도 수많은 라우터가 존재하며 서로 다른 LAN으로 데이터를 보내기 위해서는 부여받은 IP주소가 있고 이 주소를 기반으로 데이터는 각 라우터를 이동하여 데이터를 전송할 수 있게 된다. 어떠한 라우터가 다른 라우터로 데이터를 전송하는 것을 결정하는 기준에는 `라우팅 테이블`이란 것이 존재한다. 쉽게 말해서 주소 모음 테이블이라 생각하면 될 것 같다.  
[라우팅 테이블에 대한 블로그](https://louis-j.tistory.com/entry/%EB%9D%BC%EC%9A%B0%ED%8C%85%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%9D%BC%EC%9A%B0%ED%8C%85-%ED%85%8C%EC%9D%B4%EB%B8%94Routing-table%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)

### 네트워크망
현재 여기에는 그림이 없지만 각 기기들과 ISP가 연결된 모습을 상상해보자 수많은 점들이 연결되어있는 것을 상상할 수 있을 것이다. 우리는 이 점 하나를 <u>`노드`</u>라고 부른다.

### 노드
#### end system 또는 호스트(Host)
가장 끝단에 있는 즉, 나의 스마트폰 혹은 데스크탑은 <u>`end system 또는 호스트(Host)`</u>이라고 불린다. 라우터나 스위치는 네트워크를 구축하고 연결하기 위한 것이 목적인 반면에 이 호스트 노드는 네트워크를 사용하기 위해 연결된 노드이다. 이 노드는 클라이언트와 서버로 나뉘게 된다.

##### 클라이언트
- 다른 호스트의 데이터나 리소스를 요청하는 호스트
##### 서버
- 다른 호스트에게 서비스를 제공하는 호스트
- 요청에 따라 데이터나 리소스를 제공

## 마무리
이로써 인터넷과 네트워크에 대해서 알아보았다. 간단하게 정리를 해보자

- <b>네트워크란?</b>
    - 각 기기들을 연결하는 그 행위 자체를 네트워크라고 한다.
    - 범위에 따라 LAN, WAN이 존재한다.
    - 네트워크를 사용하기 위해서 존재하는 장비가 있다.
        - 스위치/허브
        - 공유기
        - 모뎀
        - 라우터
- <b>인터넷이란?</b>
    - 네트워크 생태계를 아우르는 단어
    - WAN끼리의 통신을 가능케하는 것은 ISP가 존재하기 때문이다.
    - ISP는 라우터를 통해 각 네트워크를 연결시켜주며 ISP는 역할에 따라 티어가 나뉘게 된다.
        - Tier 1
            - 국가 범위의 네트워크
            - 모든 네트워크에 접근 가능
        - Tier 2
            - 일반 사용자나 기업 대상 서비스
            - 흔히 아는 SKT, KT, LG가 여기에 속함.
            - Tier 1에게 비용을 낸다.
        - Tier 3 
            - 한국에서는 볼 수 없으며 미국같은 큰 대륙에는 존재함.
            - 상위 ISPs에게 비용을 지불하고 트래픽을 구매함.
            
---
> 강의 출처  
> 해당 폴더에 있는 글은 모두 쉬운코딩님의 강좌를 보고 공부한 내용들입니다.  
> [유튜브 - 쉬운코딩](https://www.youtube.com/@ezcd)