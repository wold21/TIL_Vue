# 3장 - map

## .map()

for, forEach를 했는데도 아직 돌려볼게 남았다. map은 이전의 반복문처럼 쓸 수도 있지만 반복문을 돌며 작업된 내용을 새 배열로 리턴을 받는다는 것이다. 더 자세하게 설명하자면 forEach가 배열을 돌면서 계속 콜백을 실행하는 것과 다르게 map은 배열 내의 모든 요소 각각에 대해 똑같이 콜백을 실행하지만 그 결과를 모아 새로운 배열로 반환한다는 것이다. 

인자로는 콜백 함수를 하나 가지고 있고 그 함수의 인자로 요소값, 인덱스, 대상 객체를 가지고 있다.

```javascript
Array.prototype.map ( callbackfn [ item , index , thisArg ] )
```

사용 방법은 forEach와 크게 다르지 않으나 새로운 변수에 결과 값을 할당해야한다.
```javascript
// 배열
const numbers = [1, 2, 3, 4, 5]; 

// map의 결과를 result에 반환
const result = numbers.map(number => number * number);

console.log(numbers); // [1, 2, 3, 4, 5]; 
console.log(result); // [1, 4, 9, 16, 25]
```

그러나 arrow 함수는 목적이 return 하나라면 return을 생략해도 되기에 arrow 함수를 사용하지 않는다면 **return**을 반드시 써주어야 반환 값을 받을 수 있다.

