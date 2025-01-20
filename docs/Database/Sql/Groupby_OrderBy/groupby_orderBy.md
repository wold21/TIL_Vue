# Group BY & Order By

## Order by
order by는 조회결과를 특정 attribute(s) 기준으로 정렬하여 가져오고 싶을 때 사용하는 절이다. default는 오름차순이며 ASC, DESC를 사용하여 차순을 변경할 수 있다.

```SQL
SELECT * FROM employee ORDER BY salay;
SELECT * FROM employee ORDER BY salay DESC;
SELECT * FROM employee ORDER BY dept_id ASC, salay DESC;
```

## Aggregate function
aggregate function이란 여러 tuple들의 정보를 요약해서 하나의 값으로 추출하는 `함수`이다. 대표적으로 COUNT, SUM, MAX, MIN, AVG함수가 있으며 NULL값은 제외하고 요약값을 추출한다.

```SQL
SELECT COUNT(*) FROM employee; // 중복을 포함한다
SELECT COUNT(*), MAX(salary), MIN(salary), AVG(salary)
    FROM work_on W JOIN employee E ON W.empl_id = E.id
    WHERE W.proj_id = 2002;
```

## Group by
관심있는 attribute(s)를 기준으로 그룹을 나눠서 그룹별로 aggregate function을 적용하고 싶을 때 사용하며 NULL 값이 있을 경우 NULL 값을 가지는 tuple끼리 묶이는 특징이 있다.

```SQL
SELECT COUNT(*) FROM employee; // 중복을 포함한다
SELECT W.proj_id, COUNT(*), MAX(salary), MIN(salary), AVG(salary)
    FROM work_on W JOIN employee E ON W.empl_id = E.id
    GROUP BY W.proj_id;
```

## Having
group by와 함께 사용이 되며 aggregate function의 결과값을 바탕으로 그룹을 필터링하고 싶을 때 사용한다. 그러면 result table에는 having절에 명시된 조건을 만족하는 그룹만 결과에 포함된다.

```SQL
SELECT COUNT(*) FROM employee; // 중복을 포함한다
SELECT W.proj_id, COUNT(*), MAX(salary), MIN(salary), AVG(salary)
    FROM work_on W JOIN employee E ON W.empl_id = E.id
    GROUP BY W.proj_id
    HAVING COUNT(*) >= 7;
```

## 예제
#### 각 부서별 인원수를 인원 수가 많은 순서대로 정렬해서 알고 싶다.
```SQL
SELECT dept_id, COUNT(*) AS empl_count FROM employee
GROUP BY dept_id
ORDER BY empl_count DESC;
```

#### 각 부서별, 성별 인원수를 인원 수가 많은 순서대로 정렬해서 알고 싶다.
```SQL
SELECT dept_id, sex, COUNT(*) AS empl_count FROM employee
GROUP BY dept_id, sex
ORDER BY empl_count DESC;
```

#### 회사 전체 평균 연봉보다 평균 연봉이 적은 부서들의 평균 연봉을 알고 싶다.
```SQL
SELECT dept_id, AVG(salary)
FROM employee
GROUP BY dept_id
HAVING AVG(salary) < (
    SELECT AVG(salary) FROM employee
)
```

#### 각 프로젝트별로 프로젝트에 참여한 90년대생들의 수와 이들의 평균 연봉을 알고 싶다.
```SQL
SELECT W.proj_id, COUNT(*) AS empl_count, ROUND(AVG(salary), 0)
FROM work_on W JOIN employee E ON W.empl_id = E.id
WHERE E.birth_date BETWEEN '1990-01-01' AND '1999-12-31'
GROUP BY W.proj_id
ORDER BY W.proj_id;
```

#### 프로젝트 참여 인원이 7명 이상인 프로젝트에 한정해서 각 프로젝트별로 프로젝트에 참여한 90년대생들의 수와 이들의 평균 연봉을 알고 싶다.
```SQL
SELECT W.proj_id, COUNT(*) AS empl_count, ROUND(AVG(salary), 0)
FROM works_on W JOIN employee E ON W.empl_id = E.id
WHERE E.birth_date BETWEEN '1990-01-01' AND '1999-12-31' 
    AND W.proj_id IN (SELECT proj_id
                        FROM works_on
                        GROUP BY proj_id
                        HAVING COUNT(*) >= 7
                    )
GROUP BY W.proj_id
ORDER BY W.proj_id;
```

> SELECT 실행순서  
> FROM > WHERE > GROUP BY > HAVING > ORDER BY > SELECT  
> 이 순서는 개념적인 순서이며 실제 실행 순서는 RDBMS마다 다를 수 있다.


## 마무리
일을 하면서 ORDER BY나 GROUP BY를 쓸때 실수하는 장면들을 꽤 많이 보았다. 쿼리에 대해서 이해를 못하는 사람도 있었지만 배움의 척도와는 다르게 자주 사용하지 않아서 그랬던 것 같다. 내가 작성하고 보았던 쿼리들은 대부분 ORDER BY정도로 끝마쳤던 것 같다. (통계빼고...) group by의 포인트는 기준이 되는 테이블에 적절하게 적용해야한다는 것이다. 