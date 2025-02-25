# MVCC 2부

## 개요
이전 예제와 동일하지만 MySQL인 경우 어떻게 해결하는지 알아보겠다.

## 예제
<br>
<img src="./my.png" alt="my" height="300"> 

> 위 예제는 이전 예제의 마지막 부분을 가져온 것.  

<br>
<img src="./my_1.png" alt="my_1" height="300"> 

MySQL에서는 lost update를 해결하기 위해서 read를 할 때에 추가적으로 lock을 줄 수 있게 해야한다. 이를 `Locking read`라고 하며 쿼리문에 `FOR UPDATE`를 추가해주면 `read를 하면서도 write lock을 취득`할 수 있게 된다. 이는 RDBMS에서 하는 것이 아니라 개발자가 직접 추가해줘야한다.

<br>
<img src="./my.png" alt="my" height="200"> 

자 그래서 순서대로 schedule을 적어보자면  
1. tx1의 read(x)도 locking read의 동작으로 lock을 취득하려하지만 tx2가 가지고 있기 때문에 대기하게 된다.
2. x에 대해 write 권한을 가지고 있는 tx2가 x=80을 하고 저장 공간에 해당 변경 사항을 저장한다.
3. 그리고 tx2는 commit을 하게 되면서 lock을 반납하고 값을 최종적으로 80으로 업데이트 하게된다.
4. 이제 tx1이 lock을 얻게되고 x를 read하게 되는데 이때 repeatable read level임에도 불구하고 80을 읽게된다.
    - 그 이유는 MySQL의 locking read는 가장 최근의 commit된 데이터를 읽는 규칙이 있기 때문이다.
5. 이제 tx1은 x의 변경사항인 40을 저장한다.
6. tx1은 y에 대한 read를 함과 동시에 locking read를 적용해주고 write lock을 획득한다.
7. 그리고 tx1은 y=50을 적용하고 변경 사항을 저장한다.
8. tx1은 commit을 완료하고 모든 lock을 반환한다.

### Locking read
MySQL에서는 read할 시 Lock을 취득하게 되어있는데 이때 두가지 종류로 나뉘게 된다. 이 문법은 다른 RDBMS에도 존재하지만 그 동작 방식이 조금 다른데 아래에서 설명해보겠다.

#### FOR UPDATE
이는 write lock 즉, exclusive lock을 획득하게 되는 것을 말한다.

#### FOR SHARE
이는 read lock 즉, shared lock을 획득하게 된다.

## repeatable read일 때 write skew 문제
<br>
<img src="./write_skew.png" alt="write_skew" height="300"> 

이러한 tx들이 있을때 x, y의 초기값은 각각 10으로 최종 기대 결과 값은 30, 20 혹은 20, 30이 나와야 정상인 값이라고 할 수 있는데 이 경우 repeatable read임에도 불구하고 결과값이 20, 20으로 도출되었다. 이를 `write skew`라고 부른다. 이 현상은 MySQL과 PostgreSQL에서도 나타날 수 있는 현상이다. 더불어 이 현상을 해결하기 위해서 isolation level을 serializable로 올려서 작업하게되면 write skew문제는 해결된다.

### MySQL
mysql에서는 locking read를 사용하여 해결할 수 있다. 서로 read를 할 때 write lock을 얻으려 할 것이고 먼저 lock을 얻지 못하면 기다렸다가 최종적으로 commit된 값을 기반으로 나머지 tx이 진행 될 것이기 때문에 결과값은 문제가 없게 된다. 

<img src="./my_skew.png" alt="my_skew" height="200"> 

### PostgreSQL
위 처럼 PostgreSQL 또한 locking read를 할 수 있는데 그 방식이 조금 다르다고 하였다, 한번 살펴보자.

<img src="./post_skew.png" alt="post_skew" height="200"> 

그러나 repeatable read인 경우 같은 데이터에 먼저 update한 tx가 commit이 되면 나중에 접근하는 tx는 rollback이 되는 규칙을 가지고 있어. 최종적인 결과값은 x=20, y=10으로 사실은 성공한 schedule이라고 볼 수 있게 되는 것이다.

### Isolation level이 serializable일 때

#### MySQL
- repeatable read와 유사
- tx의 모든 평범한 select문은 암묵적으로 `for share`처럼 동작한다.

#### PostgreSQL
- SSI(serializable snapshot isolation)로 구현
- first-committier-winner

## 추가 전달 사항
MySQL과 postgreSQL은 repeatable read level에서 phantom read를 발생시키지 않습니다
표준 SQL에서는 repeatable read에서는 phantom read가 발생하는 것으로 정의하고 있는데 MySQL과 postgreSQL은 표준보다 더 엄격히 구현되어 있다.

MySQL의 serializable level은 이전 영상에서 설명했던 SS2PL로 동작하는 것으로 판단됩니다
모든 select 문이 암묵적으로는 select ... for share로 처리되고, MySQL에서 락은 commit 혹은 rollback 될 때 반환되기 때문에 그렇다.

## 마무리
지금까지 DB의 트랜잭션에 대한 concurrency control 즉, 동시성에 대해 공부해보았다. 동시성과 관련이 있는 기술로 앞서 배웠던 Isolation level, Lock base 그리고 MVCC를 마지막으로 배워보았다.

Isolation level이 등장하게 된 계기는 dirty read, non-repeatable read, phantom read와 같은 현상을 방지하기 위해서 등장했고 얼마나 엄격하게 트랜잭션을 관리할지 read uncommitted, read committed, repeatable read, serializabla로 구분짓게 되었다. 이는 트랜잭션 처리량에 영향을 미치게된다.

그리고 Lock은 트랜잭션이 데이터에 read 혹은 write를 할 때 해당 tx만 접근 권한을 얻어 다른 tx가 접근하지 못하게 하는 것이다. read-read일때는 허용이 되지만 read-write같은 쌍은 허용하지 않는다. 이 Lock base에는 2PL protocol이 존재하고 해당 프로토콜은 lock을 얻고 반납하는 단계를 2 페이즈로 나누고 연산하는 것이 컨셉이다. 한 단계에서는 lock을 취득만 하고 다른 단계에서는 반납만 하는 방법이다. 2PL에도 종류가 있는데 tx 시작시에 모든 lock을 취득하는 방식을 conservative 2PL이라하고 write lock을 commit / rollback 될 때 반환하는 방식을 Strict 2PL (혹은 S2PL)이라고 하며 commit / rollback이 될 때 read-lock, write-lock을 모두 반납하는 String strict 2PL (혹은 SS2PL or rigorous 2PL)이라고 한다.

마지막으로 `특정 시점 기준으로 커밋된 데이터`를 읽는 MVCC가 등장하게 된다. 이는 Isolation level에 영향을 받고 있으며 특정 시점을 관리해야하지 때문에 RDBMS가 데이터의 변화를 관리하고 있다. 그래서 lock의 단점이었던 read를 하는 도중에도 write를 할 수 있게 된다.

이러한 강의를 들으면서 어떻게 해결해야지 이상현상이 없을까를 또 계속 생각하고 있었던 것 같다. 이 영상의 댓글을 살펴보니 postgreSQL에서 만약 first-commitier-winner에 밀려 rollback이 된다면 그냥 애러가 나는 건지에 대한 질문이 있었는데 비즈니스 로직 단에서 이런 경우 타이밍 이슈로 실패한 것이기 때문에 1~2번 더 재시도를 하게 구현하면 될 것 같다고 댓글을 달아주셨다. 사실 직접 맞닿뜨리고 해결하기 전까지는 이 모든 규칙들이 와닿지 않을 것 같다. 우리는 이미 아무 설정을 하지 않아도 일반적인 작업들은 문제없이 사용하고 있기 때문이다. 그렇지만 꼭 알아두어야할 중요한 정보라고 생각된다.