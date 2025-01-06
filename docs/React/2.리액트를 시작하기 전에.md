# 2. 리액트를 시작하기 전에

1.  **Node.js**

    -   Webpack과 Babel 같은 도구들이 JS runtime인 Node.js 기반으로 만들어져있기때문에 필수로 설치하여야한다.

          <br>

          <aside>

            💡 WebPack

            ES Module → import

            Common Js Module → require()

            AMD Modules → define, require

            CSS imports → css/sass/less에서 사용되는 @import

            image URLs → url(…), <img src”…”/>

            제각각인 모듈을 모두 JS 코드로 합쳐 import 할 수 있도록 도와주는 라이브러리다. 근데 아직 필요성을 잘 모르겠다. 추후에 더 공부해야함.

          </aside>
          <br>
          <aside>
          
            💡 Babel
                바벨은 간단하다. 만약 브라우저가 최신 ES문법을 이해하지 못할경우 바벨이 브라우저가 이해할 수 있는 문법으로 변환해준다. 
                개발자는 최신 ES문법을 사용하여 개발하면 되기에 개발 생산성이 향상된다.

          </aside>

    <br>

2.  **Yarn**
    -   Node.js를 설치하면 npm이 같이 설치가 되는데 npm의 조금 개선된 버전이라 생각하면 된다.
    -   npm보다 빠른 속도와 더 나은 캐싱 시스템이 장점이다.
