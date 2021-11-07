# 2장 - Everybody, Something

사실 some이나 every를 써볼 상황이 나오지 않아서 한번도 써본 적은 없다. 간단하게 설명을 해보자면 `some`은 중간 중간 데이터에서 내가 원하는 값이 있을 경우 루프문을 빠져나오고 싶을 때 사용하는 함수이고 `every`는 내가 원하는 값이 오브젝트나 배열에 모두 들어있는지 확인할 때 사용하는 자바스크립트 내장 함수이다. 둘다 리턴 값으로 true / false를 반환한다. 



## .every()

every의 인자로 콜백함수를 필요로하며 콜백 함수는 item, index, arr의 순서를 갖는다.

```javascript
// Callback function
function underThree(value){
    return (value < 3) ? true : false;
}

function underSix(value){
    return (value < 6) ? true : false;
}

// arr
let arr = [1, 2, 3, 4, 5]; 

let result = arr.every(underThree, thisArg);
let result2 = arr.every(underSix, thisArg);

console.log(result); // false
console.log(result2); // true
```

코드를 상펴보면 굉장히 간단하다. arr를 순회하며 item을 콜백함수로 던지며, 콜백함수의 결과에 따라 결과를 받아볼 수 있다. 만약 반환 값이 false라면 콜백 함수의 순회를 멈추고 false를 반환한다. 



## .some()

some 또한 every의 인자와 같다. 비교를 위해 같은 예로 살펴보겠다.

```javascript
// Callback function
function underThree(value){
    return (value < 3) ? true : false;
}

function underSix(value){
    return (value < 6) ? true : false;
}

// arr
let arr = [1, 2, 3, 4, 5]; 

let result = arr.some(underThree, thisArg);
let result2 = arr.some(underSix, thisArg);

console.log(result); // true
console.log(result2); // true
```

some 함수는 하나라도 true가 나오면 콜백 함수를 멈추고 true를 리턴합니다.





## 마치며

나도 아직 사용해보지 못해서 성능같은건 잘 모르겠지만 전체를 반복해야한다면 forEach 특정 아이템을 찾고 싶다면 some 또는 every를 사용하면 된다. 어느 글에서는 그냥 forEach를 쓰는게 성능면에서는 더 좋다고 하는데 시간이 더 지나 체감하기 전까지는 모를 것 같다.