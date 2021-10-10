# Mustache

## Mustache란?

템플릿 엔진으로써 Loop와 같은 로직 구문이 존재하지 않으므로, Logic-Less Templates라고 불린다. 사용 예로는 백엔드 단에서 넘겨받은 데이터를 웹에서 뿌려줄 때 편리하게 뿌려줄 때 사용했다. 예를 들면 10줄 짜리의 데이터를 테이블에 그려줘야할 때 아래와 같이 표현할 수 있다.

```handlebars
// 백단에서 넘어온 데이터 변수명
{{#results}}

// 이렇게 data속성에도 값을 추가할 수 있다. 
<tr data-userid="{{key}}">

	// results안에 있는 key값을 results의 길이 만큼 그릴 수 있다.
	<td>{{key}}</td> 
</tr>
{{/results}}
```

앞의 예시를 포함해 추가로 몇가지 사용법을 알아보자.



### Data Load

#### #results와 /results

```handlebars
{{#results}}
	...
{{/results}}

// results 받은 값이 false가 아니고 빈 List가 아닌 경우에 
// #results 와 /results 사이에 적힌 내용이 유효하게 된다.
```



#### 넘겨 받은 값이 없을 때 핸들링

```handlebars
{{#results}}
	...
{{/results}}
{{^results}}
	값이 없습니다.
{{/results}}

//#results의 값이 null일 경우 ^results의 구간이 로드된다.
```



#### key가 함수일 경우

```handlebars
{{#wrapped}}
	{{name}} gle
{{/wrapped}}

// Data 
{ 
	"name":"goo", 
	"wrapped": function(text, render) { 
		return render(text)
	} 
} 
// 결과 "google"
```



#### 원하는 key의 값만 보여주고 싶을 때

```handlebars
{{#isGoogle?}} 
	{{name}}
{{/isGoogle?}} 

// Data 
{ 
	"isGoogle?":{"name":"yes!!"} 
} 

// 결과 "yes!!"
```



---

참고 블로그

[Link](https://engineer-mole.tistory.com/123)

