# Transaction & ACID

## 트랜잭션이란?
- 단일한 논리적인 작업 단위를 말한다.
- 논리적인 이유로 여러 SQL문들을 단일 작업으로 묶어서 나눠질 수 없게 만든 것이 transaction이다.
- transaction의 SQL문들 중에 일부만 성공해서 DB에 반영되는 일은 일어나지 않는다.

예를 들면 A계좌에서 B계좌로 30만원을 이체 시킬일이 생겼을 때 그 순서는 다음과 같다.
1. A의 계좌 잔액을 조회 함. (SELECT)
2. 문제가 없을 경우 A의 계좌 총액에서 30만원을 뺀 값으로 총액을 업데이트한다. (UPDATE)
3. B계좌의 총액을 총액 + 30만원을 한 값으로 업데이트 한다. (UPDATE)

이와 같이 이체를 하는 행위를 하나의 작업 단위로 보고 이를 transaction이라고 부르는 것이다.

### MySQL의 예제 (간결하게)
#### COMMIT
```SQL
START TRANSACTION;
UPDATE account SET balance = balance - 300000 WHERE id = 'A';
UPDATE account SET balance = balance + 300000 WHERE id = 'B';
COMMIT;
```

> COMMIT?  
> 지금까지 작업한 내용을 DB에 영구적으로 저장하는 명령어  
> Transaction 종료를 의미함

#### ROLLBACK
```SQL
START TRANSACTION;
UPDATE account SET balance = balance - 300000 WHERE id = 'B';
ROLLBACK;
```

> ROLLBACK?  
> 지금까지 작업한 내용들을 모두 취소하고 transaction 이전 상태로 되돌린다  
> Transaction 종료한다

#### AUTOCOMMIT
- 각각의 SQL문을 자동으로 transaction 처리 해주는 개념
- SQL문이 성공적으로 실행하면 자동으로 commit한다
- 실행 중에 문제가 있었다면 알아서 rollback한다

#### MySQL에서는....
쿼리를 `START TRANSACTION;`로 시작하게 되면 autocommit이 1인 상태여도 `off`로 설정되며 `COMMIT / ROLLBACK`과 함께 transaction이 종료되면 원래 autocommit 상태로 돌아간다

## ACID
ACID는 간단하게 transaction이 어떤 개념을 지녀야하는지에 대한 내용이다.  
<br>

- <b>Atomicity</b>  
    - ALL or NOTHING  
    - transaction의 쿼리는 모두 성공해야한다  
    - 중간에 어떤 쿼리가 실패하거나 커밋전에 DB에서 crash가 발생하거나 하는 경우에도 모든 상태가 ROLLBACK되어야 함  
    - COMMIT 혹은 ROLLBACK을 담당하는 것은 DBMS의 영역  
    - 개발자는 언제 COMMIT 혹은 ROLLBACK을 할 것인지를 결정해야한다  

- <b>Consistency</b>  
    - 데이터 베이스에 일관성을 유지시켜야한다  
    - transaction은 DB 상태를 consistent 상태에서 또 다른 consistent 상태로 바꿔줘야 한다  
    - consistents, trigger 등을 통해 DB에 정의된 rules을 transaction이 위반했다면 ROLLBACK해야 한다  
    - transaction이 DB에 정의된 rule을 위반했는지는 DBMS가 commit 전에 확인하고 알려준다  
    - 그 외에 application 관점에서 transaction이 consistent하게 동작하는지는 개발자의 영역이다  

- <b>Isolation</b>  
    - 여러 transaction들이 동시에 실행될 때도 혼자 실행되는 것처럼 동작하게 만든다  
    - DBMS는 여러 종류의 isolation level을 제공한다  
    - 개발자는 isolation level 중에 어떤 level로 transaction을 동작시킬지 설정할 수 있다  
    - concurrency control의 주된 목표가 isolation이다  

- <b>Durability</b>  
    - 영존성  
    - commit된 transaction은 DB에 영구적으로 저장한다
    - 즉, DB system에 문제가 생겨도 commit된 transaction은 DB에 남아 있는다
    - `영구적으로 저장한다`라고 할 때는 일반적으로 `비휘발성(HDD, SSD) 메모리`에 저장함을 의미한다
    - 기본적으로 transaction의 durability는 DBMS가 보장한다

## 마무리
지금까지 개발할 때는 알아서 잘 해주겠거니 하면서 사용을 해왔었다. 물론 프레임 워크가 잘 되어있고 그래서 그런 것이겠지만 문득 이렇게 배우다보니 정말 중요한 시스템에는 `DB가 실행하는 transaction을 로깅해야 할수도 있겠다.`라는 생각이 들었다. 동시에 오늘 내용을 배우면서 프레임워크가 작업을 편리하게는 해주지만 너무 가려져버려서 나같이 얉은 지식을 가진 사람한테는 치명적인 부분으로 작용할 수 있는 부분일 거 같다. 개발을 배우면 배울수록 조심성만 나날이 늘어가는 것 같다.