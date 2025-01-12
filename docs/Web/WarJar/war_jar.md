# **War**

## **WAR(WebApplication Archive)**

- **WAR**란 **W**ebApplication **Ar**chive의 약자로 말그대로 웹 어플리케이션 저장소이며 웹 어플리케이션을 압축해 저장해 놓은 파일이라고 생각하시면 됩니다.
- 개발한 웹어플리케이션 프로젝트가 WAS에서 돌아갈 수 있는 구조를 담고 있으며 JSP 및 서블릿 빈클래스 등의 소스가 컴파일 되어 저장되며 기타 이미지 및 자원들이 포함되어 있습니다.
    - 그럼 war파일 여러개로 만들면 편할 듯.

### **war와 war exploded의 차이**

**war**

- 압축된 상태
- WAS에 의해 압축이 풀림
- 파일이 많을 경우 압축해제 시간이 많이 걸릴 수 있음
- 파일 전송시 하나만 보내면 됨.
- WAS에서 제공하는 업로드를 통한 배포기능 활용가능

**war exploded**

- 압축 및 해제 과정이 불필요
- 별도의 디렉토리에 원본 소스를 복사하여 만듬
- 작업시 변경사항들을 바로 서버에 적용할 수 있음
- 복사시간이 오래 걸릴 수 있음
- 원본 소스를 건드리지 않고 배포를 원하는 경우 적합
- 리모트 서버 배포시 파일이 많은 경우 시간이 오래 걸릴 수 있음
    - rsync라는 걸 사용하면 빠르게 할 수도 있다?

<br>

# Jar

## JAR(Java Archive Files)

- 마찬가지로 일종의 자바 프로젝트 압축파일이다.
- ZIP 기반 알고리즘으로 만들어졌다.
    - 반디집 알집과 같은 zip프로그램과 호환가능함.
- 웹 브라우저에서 빠르게 다운로드 할 수 있도록 자바 애플릿을 위한 파일을 담고 있다.
    - 클래스
    - 이미지 및 사운드
    - 등등
- JAR 로 묶어서 배포하게 되면, 경로나 파일의 위치에 상관없이 프로그램의 실행이 가능하다.

<br>

# War vs Jar

애초에 사용하려는 목적이 다르기 때문에 혼동할 필요가 없다. 

war는 웹 어플리케이션을 위해 만들어졌고 was 또는 web서버에 의해 실행되기 때문에 

jar에는 없는 xml 같은 설정파일이 들어있다. 

jar - 자바 프로젝트 압축파일

war - 자바 웹 어플리케이션 압축파일

<br>

# + 추가

## **EAR (Enterprise Archive)**

추가적으로  EAR 파일은 JAVA EE(Enterprise Edition)쓰이는 파일 형식으로 한 개 이상의 모듈을 단일 아카이브로 패키징 하여 어플리케이션 서버에 동시에 일관적으로 올리기 위하여 사용되는 포맷이다.