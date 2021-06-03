# WebServer & WAS

### **TA(Technical Architect)**

보통 규모가 있는 프로젝트인 경우 TA의 직군이 있다.

각 파일을 전달받아 부하방지 및 공격에 대비하기 위한 구조를 꾸린다.

하드웨어 및 네트워크 아키텍쳐를 설계한다.

+_11번에서 추가로 설명_

### WebServer

- 주소창에서 요청을 보내면 가장 먼저 웹서버로 들어간다.
- JSP를 받는다.

Apache. Nginx와 같은 것들이 WebServer이다.

### WAS(Web Application Server)

아래와 같은 것들을 포함한다.

- Controller
- Service
- Dao
- SQL

Apache Tomcat, JEUS와 같은 것들이 WAS이다.

### Signal Flow

**1. Browser(Request)**

- 서버에 요청

**2. WebServer**

- 요청받은 주소를 중계, 해석 후 WAS에 해석한 요청(주소)을 넘김

**3. WAS**

- 요청받은 것을 처리한다 (아래를 포함)
  - Java Class File
  - Xml
  - Controller
  - Service
  - Dao
  - SQL
- 결과를 가공하기 위해서 조회된 데이터(JSP)를 WebServer로 제공

**4. WebServer(Response)**

- 넘어온 데이터를 반복문을 통해 html, js로 가공 후 Browser로 보냄
- 자바에선 jsp만 받는다.

**5. Browser**

- 받은 파일 중 html을 먼저 화면에 뿌려준 뒤 js를 한줄씩 컴파일 한다.
- [---> WebServer와 WAS의 차이 <----](https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html)

**그럼 두가지가 꼭 필요한 이유?**

1. 정적 컨텐츠 동적 컨텐츠에 따라 서버의 대응을 구분하여 부하를 줄일 수 있다.
   - 웹서버는 정적 콘텐츠 WAS는 정적콘텐츠를 담당한다.
2. WAS가 없었다면 사용자의 요청을 모두 미리 만들어 놔야한다.
   - 요청이 많아지게되면 자원이 절대적으로 부족하다.
3. 각자의 역할이 분명하기 때문에 효율성이 좋다.
   - 물리적으로 떨어져있기 때문에 보안이 강화됨.
   - 빠른 응답이 가능
