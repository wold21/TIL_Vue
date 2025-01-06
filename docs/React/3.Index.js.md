# 3. Index.js

리액트 프로젝트를 처음 만들게 되면 많은 파일들이 있지만 그중에서 `index.js`를 눈여겨 보자.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

-   ReactDOM.render
    -   브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링 하겠다는 것을 의미한다.
    -   id가 root인 것을 선택하고 있는데 이 DOM은 index.html에 있다.

```html
<div id="root"></div>
```

-   모든 컴포넌트 들은 이 div를 기반으로 그려지게 된다.
