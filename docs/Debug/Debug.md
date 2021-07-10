# Debug

## 디버그(Debug)란

>  "컴퓨터 프로그램 상의 오류를 찾아내는 과정으로 디버깅(Debugging)이라고도 한다."

우리가 대부분 겪는 에러의 대부분은 문법오류(Syntax error, ~~Human Error~~)이며 코드상의 문제는 없으나 논리적(Logical error)으로 일어나는 에러가 있다.

<br>

## 원인을 찾자, Debugging!

디버깅을 해보라는 소리에 굉장히 당황했던적이 있는데 실무에서 디버깅하라는 뜻은 뭘까.

우리는 개발할때 IDE의 힘을 빌려 개발을 한다. 웬만한 IDE는 모두 디버거 툴(Debugger tool)이라는 것을 가지고 있고 우리는 이제 그것을 사용하여  line by line으로 **디버깅**을 시작 할 것이다. 

>  (Vim은 pdb를 주로 사용한다고 함.)

가끔 디버그 모드를 켜고 중단점(break point)까지 잡았는데 평소와 똑같다고 느낄 수 있는데 찍어놓은 중단점의 함수까지 어플리케이션이 도달(또는 사용)되지 않았기 때문에 별 다를게 없다고 보여진다. 

중단점을 찍어놓은 부분까지 동작해보자.

<br>

## Debugging Button

인텔리제이 기준으로 자바 디버깅을 설명한다.

각 IDE마다 디버깅할 때 사용하는 단축키가 조금 다르지만 하고자 하는 행동은 똑같기에 참고하면 좋겠다.

서버를 켜거나 실행 할 때 일반적인 재생모양을 누르는 것이 아니라 벌레 모양을 눌러 서버(어플리케이션)를 실행 시켜야 한다.

<br>

## **Break Point**

- 라인 중단점 🔴

  <img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsbttpscwcj30ik03qt8z.jpg" alt="스크린샷 2021-07-10 오후 2.49.47" style="zoom:67%;" />

- 메소드 중단점 ♦️

  - 함수에 걸면 인텔리제이가 하나의 토스트 팝업창을 띄우는데 프로세스가 굉장히 느려진다고 이야기한다.
  - 웬만해서는 라인에 걸자.

<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsbtu5fdaaj30ii03sjrn.jpg" alt="스크린샷 2021-07-10 오후 2.49.32" style="zoom:67%;" />

<br>

### resume

- 다음 break point로 이동

  <img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsbu2nqss9j301w0h8t8n.jpg" alt="스크린샷 2021-07-10 오후 2.52.06" style="zoom:67%;" />

<br>

### step over (F8)

- 현재 break된 라인에서 다음 라인으로 이동

- 함수가 걸려있다면 함수를 실행하고 다음 라인으로 이동한다.

  <img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsbtumgj6bj60ci04kmxe02.jpg" alt="스크린샷 2021-07-10 오후 2.51.06" style="zoom:67%;" />

<br>

### step into (F7)

- 현재 break된 라인에 함수가 있다면 그 함수 속으로 라인을 이동시킨다.

  <img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsbtuw6e61j30c204gjrm.jpg" alt="스크린샷 2021-07-10 오후 2.51.14" style="zoom:67%;" />

<br>

### Force step into (option(alt) + shift + F7)

- 다음 라인으로 이동하나 step into와 달리 Stepping을 무시하고 진행한다.

  <img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsbtv0dywnj30e204c74j.jpg" alt="스크린샷 2021-07-10 오후 2.51.19" style="zoom:67%;" />

<br>

### step out (F8)

- 현재 break된 라인에서 호출된 곳으로 빠져나온다. 

- 함수 안으로 들어갈 땐 step into 나올 땐 step out

  <img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsbtv7dd8wj30cw04g74j.jpg" alt="스크린샷 2021-07-10 오후 2.51.25" style="zoom:67%;" />

<br>

### drop frame

- step out 와 똑같은 행동을 하지만 해당 라인이 실행되기 전으로 돌아간다.

  <img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsbtvddgosj30d004aq34.jpg" alt="스크린샷 2021-07-10 오후 2.51.32" style="zoom:67%;" />

<br>

### run to cursor (option(alt) + F9)

- 포커스 되어있는 라인으로 이동한다. 

  <img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsbtvnr54kj30ge04iaab.jpg" alt="스크린샷 2021-07-10 오후 2.51.38" style="zoom:67%;" />



<br>



## Watch와 Call Stack (작성 중)

### Evaluate

### Watch



<br>

#### 참고 블로그

[IntelliJ 디버깅툴 설명](https://dncjf64.tistory.com/226)

[IntelliJ 사용법 및 디버깅 설명](https://github.com/jojoldu/blog-code/tree/master/intellij-debugging)















