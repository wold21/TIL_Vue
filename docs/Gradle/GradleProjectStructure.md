# Gradle Project Structure


### 🗂️ .gradle

- gradle 관련 폴더들이 있다.

- 버전에 관련된 정보나 체크섬, 설정에 관련한 캐시파일도 있다.

  - 체크섬 : 통신 용어로 중복 검사의 한 형태. 송신된 자료의 무결성을 보호하기위한 단순한 방법

  

### 🗂️ .idea

- 인텔리제이에서 설정한 파일들이 저장된다.



### 🗂️ build

- gradle로 빌드를 하게 되면 이 폴더에 컴파일된다.



### 🗂️ gradle

**wrapper**

- gradle-wrapper.jar

  - 실행 스크립트가 동작하면 wapper에 맞는 환경을 로컬 캐시에 다운로드 받은 뒤에 명령에 해당하는 작업을 실행한다.

- gradle-wrapper.properties

  - gradle-wrapper의 설정 파일

  - gradle-wrapper 런타임 동작을 구성하는 속성 파일

  - distributionUrl

    - Gradle 배포 ZIP 파일을 가리키는 전체 URL이다.

    

### 🗂️ libs

- 로컬 라이브러리 jar파일의 의존성을 gradle에 추가하고 싶을때 이 폴더에 jar파일을 담는다.
- 외부 라이브러리를 추가할 때 사용함.



### 🗂️ out

- intelliJ로 빌드를 하게되면 생기는 폴더로 프로젝트를 컴파일한 파일들이 생긴다.
- artifacts에 war파일이 생성됨.
- 상단에 File → Project Structure → Artifacts → + 클릭 → WebApplication: Archive → For... → OK → 상단에 build → build artifacts → 방금 생성한 artifacts → build → out 폴더가 생기게 되며 컴파일된 파일들과 war파일을 볼 수 있다.



### 🗂️ src

- 프로젝트 작업파일이 모여있는 곳
- main / test로 이루어져 있다.



### 🗒️ .gitignore

- git에 올릴 때 제외할 파일 및 폴더를 작성하는 곳.



### 🗒️ build.gradle

- 의존성이나 플러그인 DB설정 등을 위한 스크립트 파일

- groovy문법으로 작성

- 디펜던시에 대한 블로그

  - [BlogLink](https://kwonnam.pe.kr/wiki/gradle/dependencies)
  - [BlogLink2](https://programmer7895.tistory.com/38)
  - 안드로이드 공식문서에도 설명이 되어있다. → [Link](https://developer.android.com/studio/build/dependencies?hl=ko)

  

### 🗒️ gradlew, gradle.bat

- 각각 셸(unix), windows 배치 스크립트이다.

  - 해당 디렉토리에 가서 ./gradlew (build, clean 등) 형태로 실행한다.

  

### 🗒️ settings.gradle

- 프로젝트의 구성 정보를 기록하는 파일.

- 어떤 하위프로젝트들이 어떤 관계로 구성되어있는지 기술

- gradle은 이 파일에 기술된대로 프로젝트를 구성함.

  - 기본적으로 [`rootProject.name`](http://rootproject.name/) 하나만 적어져있다.

  

### 🖇️ 참조블로그

- [gradle 빌드 시스템 기초](https://effectivesquid.tistory.com/entry/Gradle-빌드시스템-기초)