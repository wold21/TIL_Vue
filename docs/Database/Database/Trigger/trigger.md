# Trigger

## 트리거란?
1. (총의) 방아쇠
2. (반응 사건을 유발한) 계기
3. 촉발시키다
4. 작동시키다

### SQL에서 Trigger란?
데이터 변경이 생겼을 때 즉, insert, update, delete가 발생했을 때 이것이 계기가 되어 자동적으로 실행되는 프로시저를 의미한다.

### 예시
#### 1. 사용자의 닉네임 변경 이력을 저장하는 트리거를 작성해 보자
```SQL
delimiter &&
CREATE TRIGGER log_user_nickname_trigger -- 트리거명
BEFORE UPDATE -- 즉, 업데이트 이전에 동작하는 트리거
ON users FOR EACH ROW -- users의 row에 변경이 일어날 때
BEGIN
    insert into users_log values(OLD.id, OLD.nickname, now());
END
&&
delimiter ;
```

> OLD  
> update 되기 전의 tuple을 가리킴   
> delete된 tuple을 가리킴  

#### 2. 사용자가 마트에서 상품을 구매할 때마다 지금까지 누적된 구매 비용을 구하는 트리거를 작성해 보자
```SQL
delimiter &&
CREATE TRIGGER sum_buy_prices_trigger
AFTER INSERT -- insert 후에 동작
ON buy FOR EACH ROW
BEGIN
   DECLARE total INT;
   DECLARE user_id INT DEFAULT NEW.user_id;

   SELECT sum(price) into total buy where user_id = user_id;
   update user_buy_stats set price_sum = total where user_id = user_id;
END
&&
delimiter ;
```

> NEW  
> insert된 tuple을 가리킴
> update된 후의 tuple을 가리킴  
 

 ### trigger를 정의할 때 알고 있으면 좋은 내용
 #### 1. update, insert, delete등을 한번에 감지하도록 설정가능하다 (MySQL은 불가능)
 ```SQL
 CREATE TRIGGER avg_empl_salary_trigger
    AFTER INSERT OR UPDATE OR DELETE
    ON employee
    FOR EACH ROW
    EXECUTE FUNCTION update_avg_empl_salary();
 ```

#### 2. row단위가 아니라 statement 단위로 트리거가 실행될 수 있도록 할 수 있다 (MySQL은 불가능)
 그런데 만약 다음과 같은 쿼리가 호출된다고 가정해보자. 만약 해당되는 인원이 10명인 경우 트리거는 10번 실행되게 될 것이다. 

 ```SQL
 UPDATE employee SET salary = 1.5 * salary WHERE dept_id = 1003;
 ```

 n개의 row가 해당 된다면 n번 트리거가 실행되는 것인데 이때 불필요한 호출을 방지하기 위해 트리거를 다음과 같이 선언할 수 있다.

 ```SQL
 CREATE TRIGGER avg_empl_salary_trigger
    AFTER INSERT OR UPDATE OR DELETE
    ON employee
    FOR EACH STATEMENT -- 실행 단위 기준으로 트리거가 실행된다.
    EXECUTE FUNCTION update_avg_empl_salary();
 ```

 #### 3. 트리거를 발생시킬 디테일한 조건을 지정할 수 있다 (MySQL은 불가능)
  ```SQL
 CREATE TRIGGER log_user_nickname_trigger
    BEFORE UPDATE
    ON users
    FOR EACH ROW
    WHEN (NEW.nickname IS DISTINCT FROM OLD.nickname)
    EXECUTE FUNCTION log_user_nickname();
 ```

 ## 주의 사항
소스 코드로는 발견할 수 없는 로직이기 때문에 어떤 동작이 일어나는지 파악하기 어렵고 문제가 생겼을 때 대응하기 어렵다 프로시저는 소스 코드에 등록 후 호출하면서 사용할 수 있지만 트리거는 가시적이지 않다는 점이 큰 단점이다. 또 트리거을 너무 많이 작성하여 사용하고 있는데 트리거끼리 영향을 미치는 트리거라면 확인하기가 정말 어렵다.

- 과도한 트리거 사용은 DB에 부담을 주고 응답을 느리게 만든다
- 디버깅이 어렵다
- 문서 정리가 특히나 중요하다

## 마무리
회사에서 일할 때 트리거를 만져본 적이 있었다. 검색엔진 동기화에 대한 코드였는데 예를 들면 메인 DB와 검색엔진 만을 위한 DB가 있다고 했을 때 메인 DB에 데이터가 insert, update, delete가 되면 똑같은 동작을 검색 엔진 DB에 해줘야하는 작업이 있었다. (정확한 로직은 보안상 말할 수 없을 것 같지만.) 그당시에는 나에게 꽤나 참신했던 기술이었다. 아무튼 언젠가 또 사용해볼 날이 오면 좋겠다.