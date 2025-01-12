# 4. JSX

```jsx
const element = <h1>Hello, world!</h1>;

return <h1>Hello, world!</h1>;
```

위와 같은 문법은 문자열도 html도 아니다. javascript를 확장한 `JSX`라는 문법인데 이 문법은 React Element를 생성한다.

-   특징
    1.  태그를 열었으면 꼭 닫아주어야 한다.
        -   \<br> 처럼 사용할 수 없다는 점이다.
        -   태그와 태그 사이에 내용이 들어가지 않을 때에는 Self Closing 태그로 사용한다.
    2.  두개 이상의 태그는 꼭 하나의 태그로 감싸져야한다.
