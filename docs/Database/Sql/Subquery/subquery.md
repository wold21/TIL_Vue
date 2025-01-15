# Subquery

## 서브쿼리
서브쿼리는 복잡한 쿼리를 실행할 수 있게 도와준다. 서브쿼리가 없었다면 쿼리를 여러번 호출하여 데이터를 찾아야했을 것이다. 사용되는 용어가 몇가지 있다.

|용어|뜻|
|:---|:---|
|subquery(nested query or inner query)|SELECT, INSERT, UPDATE, DELETE에 포함된 query|
|outer query(main query)|subquery를 포함하는 query|
|subquery|()안에 기술된다|

```SQL
SELECT DISTINCT empl_id 
FROM works_on
WHERE empl_id != 5 AND proj_id IN (
    SELECT proj_id 
    FROM works_on 
    WHERE empl_id = 5
)
```

## IN
- v IN (v1, v2, v3,...): v가 (v1, v2, v3,...) 중에 하나와 값이 같다면 TRUE를 return 한다.
- (v1, v2, v3,...)는 명시적인 값들의 칩합일 수도 있고 subquery(set of multiset)의 결과일 수도 있다.
- v NOT IN (v1, v2, v3,...): v가 (v1, v2, v3,...)의 모든 값이 다르다면 TRUE를 return 한다.

```SQL
SELECT id, name
FROM employee
WHERE id IN (
    SELECT DISTINCT empl_id 
    FROM works_on
    WHERE empl_id != 5 AND proj_id IN (
        SELECT proj_id 
        FROM works_on 
        WHERE empl_id = 5
    )
);
```

```SQL
SELECT id, name
FROM employee, (
    SELECT DISTINCT empl_id 
    FROM works_on
    WHERE empl_id != 5 AND proj_id IN (
        SELECT proj_id 
        FROM works_on 
        WHERE empl_id = 5
    ) AS DSINCT_E
)
WHERE id = DSINCT_E.empl_id ;
```
> 같은 결과이지만 다른 쿼리

## EXISTS
|용어|뜻|
|:---|:---|
|correlated query|subquery가 바깥쪽 query의 attribute를 참조할 때 correlated subquery라 부른다|
|EXISTS|subquery의 결과가 최소 하나의 row라고 있다면 TRUE를 반환|
|NOT EXISTS|subquery의 결과가 단 하나의 row라도 없다면 TRUE를 반환|

```SQL
SELECT P.id, P.name
FROM project P
WHERE EXISTS (
    SELECT * 
    FROM works_on W
    WHERE W.proj_id = P.id, AND W.empl_id IN (7, 12)
)
```

## ANY
- v comparison_operator ANY (subquery) : subquery가 반환한 결과들 중에 단 하나라도 v와의 비교 연산이 TRUE라면 TRUE를 반환한다.
- SOME도 ANY과 같은 역할을 한다.
- <>는 != 과 같다.

```SQL
SELECT E.id, E.name, E.salary
FROM department D, employee E
WHERE D.leader_id = E.id AND E.salary < ANY (
    SELECT salary
    FROM employee
    WHERE id <> D.leader_id AND dept_id = E.dept_id
)
```
> 리더보다 높은 연봉을 받는 부서원이 있는 리더의 아이디와 이름, 연봉을 조회하는 쿼리

```SQL
SELECT E.id, E.name, E.salary, (
    SELECT MAX(salary) 
    FROM employee 
    WHERE dept_id = E.dept_id
) AS dept_max_salary
FROM department D, employee E
WHERE D.leader_id = E.id AND E.salary < ANY (
    SELECT salary
    FROM employee
    WHERE id <> D.leader_id AND dept_id = E.dept_id
)
```
> 위 쿼리에서 그러면 그 부서의 최고 연봉은 얼마인지 조회하는 쿼리

## ALL
- v comparison_operator ALL (subquery) :  subquery가 반환한 결과들과 v와의 비교 연산이 모두 TRUE라면 TRUE를 반환한다.
- <>는 != 과 같다.

```SQL
SELECT DISTINCT E.id, E.name, E.position
FROM employee E, works_on W
WHERE E.id = W.empl_id AND W.proj_id <> ALL (
    SELECT proj_id 
    FROM works_on
    WHERE empl_id = 13
)
```

## 정리
### IN vs EXISTS
예전에는 둘의 성능차이로 써야되는 시기에 대해 이야기하는 논의가 많았지만 요즘에는 성능이 많이 좋아져서 차이가 거의 없는 것으로 알려짐