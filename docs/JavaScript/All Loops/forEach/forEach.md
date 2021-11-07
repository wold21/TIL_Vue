# 1장 - forEach

처음으로 살펴볼 메소드는 forEach이다. for문과 비슷하지만 가독성이 매우 향상되고 쓸데없이 명령문을 쓸 필요가 없다. 다만 forEach는 Array객체에서만 사용가능하다는 단점이 있다. 

>그러나 이것도 ES6부터는 Map, Set을 지원함.

내가 보고 느꼈던 첫 인상은 바닐라 js를 쓰거나 플러그인 된 제이쿼리를 쓰거나 그정도의 차이라고 생각했다. 정말이었다, Stackoverflow에서 찾아보니 성능상으로는 정말 차이가 없다고 말한다. 가독성을 위해 혹은 통일성을 위해 제이쿼리에서 추가한거라고 생각이 들었다. arr와 json 두 가지 방식으로 살펴보겠다.  



## forEach

```javascript
var arr = ['초', '밥', '먹', '고', '싶', '다', '.']; 
arr.forEach(function(item, index, arr){ 
  console.log(index, item, arr); 
});

// 0 초 초
// 1 밥 밥
// 2 먹 먹
// 3 고 고
// 4 싶 싶
// 5 다 다
// 6 . .
```

- Item 
  - 현재의 데이터
- index
  - Index
- arr
  - 잘 안쓰는 인자로 arr값을 나타낸다.
  
  

## $.each

```javascript
var arr= [ 
  {
    name : 'ediya', 
    rating : '3'
  }, 
  {
    name : 'starbucks', 
    rating : '3'
  } 
];

$.each(arr, function(index, item){
  console.log(item.name + " / " + item.rating);
});

// ediya / 3
// starbucks / 3
```



사용 결과와 사용법에는 둘다 큰 차이가 없으나 추가 jQuery를 사용해 객체에 접근해서 each문을 돌리는 예제를 하나 더 보겠다.



## $(selector).each

```javascript
$(".list li").each(function(index, item){
  $(this).data("foodNumber", index);
});
```



제이쿼리의 장점답게 유연하게 객체에 접근이 가능하고 재가공이나 값을 가져와서 쓸 때 편리하게 사용할 수 있다.





## 마치며

찾아보니 일반적인 for문보다 forEach가 더 빠르다고 하는데 정확하게 측정을 해보지는 못해서 정말인지는 모르겠으나 확실히 for문보다 가독성이 높은 것은 느껴볼 수 있었다. 다음엔 자바스크립트 함수인 some과 every에 대해서 작성해 볼 예정이다.