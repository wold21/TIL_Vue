# Object와 친해지기

## Object에 값 넣기

```javascript
// 오브젝트 변수 생성
let obj = {};

// 방법 1
obj[key] = value;
// 방법 2
obj.key = value;
```



## Object for문 돌리기

```javascript
let obj = {
    "test1" : 1,
    "test2" : 2,
    "test3" : 3,
};

// 방법 1
for(let key in obj){
     console.log(key);
}

// 방법 2
for(let i=0; i<Object.keys(obj).length; i++){
    console.log(key);
}
```



## Object에 해당 Key값이 있는지 확인 하는 방법

```javascript
let obj = {
    "test1" : 1
};

obj.hasOwnProperty('test1'); // true
// 다만 프로토타입 체인을 통해 추가한 프로퍼티에는 접근하지 못한다.
```

