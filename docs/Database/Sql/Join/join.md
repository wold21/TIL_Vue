# Join

## Join이란?
두개 이상의 table에 있는 데이터를 한 번에 조회하는 것으로 여러 종류의 JOIN이 존재한다. 

## Implicit join & Explicit join

### implicit join
from 절에는 table들만 나열하고 where절에 join condition을 명시하는 방식이다. old-style join syntax이며 where절에 selection condition과 join condition이 같이 있기 때문에 가독성이 떨어진다. 복잡한 join쿼리를 작성하다 보면 실수로 잘못된 쿼리를 작성할 가능성이 크다.  

```SQL
SELECT D.name
FROM employee AS E, department AS D
WHERE E.id = 1 and E.dept_id = D.id;
```

### explicit join
from 절에 join키워드와 함께 joined table들을 명시하는 방식이다. from절에서 ON 뒤에 join condition이 명시된다. 그러므로 가독성이 implicit join보다 향상된 형태이며 복잡한 join쿼리여도 실수할 가능성이 적다.

```SQL
SELECT D.name
FROM employee AS E JOIN department AS D ON E.dept_id = D.id
WHERE E.id = 1;
```

## Inner join & Outer join

### inner join
기본적으로 join을 적으면 inner join을 사용하는 것이다. inner join은 두 table에서 join condition을 만족하는 tuple들로 result table을 만드는 join이다. join condition에서 null 값을 가지는 tuple은 result table에 포함되지 못한다.

```SQL
SELECT *
FROM employee AS E INNER JOIN department AS D ON E.dept_id = D.id;
```

### outer join
outer join은 두 table에서 `join condition을 만족하지 않는 tuple들도 result table에 포함`하는 join이다. 그 대신에 outer join에는 left, right, full로 나눠지게 된다.

#### LEFT OUTER JOIN
```SQL
SELECT *
FROM employee AS E LEFT OUTER JOIN department AS D ON E.dept_id = D.id;
```
만약 employee에 dept_id가 null인 데이터가 존재한다고 했을 때 inner join에서는 null인 데이터는 나오지 않았는데 지금은 해당 tuple의 employee의 속성은 모두 보여지고 join된 department 속성은 모두 null로 보여지게 된다. 간단하게 말하면 join condition을 만족하지 않아도 왼쪽 테이블의 데이터는 모두 가져오는 쿼리인 것이다.

#### RIGHT OUTER JOIN
```SQL
SELECT *
FROM employee AS E RIGHT OUTER JOIN department AS D ON E.dept_id = D.id;
```
right outer join은 그 반대로 동작한다. 오른쪽 테이블의 데이터는 빠짐없이 가져오게 된다.

#### FULL OUTER JOIN
```SQL
SELECT *
FROM employee AS E FULL OUTER JOIN department AS D ON E.dept_id = D.id;
```
join condition에 매칭되지 않은 모든 tuple들 까지도 result table에 보여지게 된다.

## Equi join
equi join은 join condition에서 = (equality comparator)를 사용하는 join이다.

## Using
```SQL
SELECT *
FROM employee AS E INNER JOIN department AS D ON E.dept_id = D.dept_id;

SELECT *
FROM employee AS E INNER JOIN department AS D USING(dept_id) ;
```
이대로 조회를 하게 되면 같은 이름의 속성(dept_id)이 보여지게 되는데 불필요하기 때문에 이때 using을 사용해주면 dept_id가 속성 맨 앞으로 조회되며 한번만 표시되게 된다. 정리하면 두 table이 equi join 할 때 join하는 속성의 같다면 USING으로 간단하게 만들 수 있다. 이때 사용된 속성은 result table에 한번만 표시된다. 만약 여러개의 속성이 있다면 USING의 인자에 여러 속성을 넣으면 된다.

## Natural join
두 table에서 같은 이름을 가지는 속성에 대해서 equi join을 수행하며 이때 join condition은 따로 명시하지 않는다.

## Cross join
두 table의 tuple pair로 만들 수 있는 모든 조합(=Cartesian product)을 result table로 반환한다. 해당 조인도 join condition이 없다. 방식은 두가지가 있다.
- implicit cross join : FROM table1, table2
- explicit cross join : FROM table1 CROSS JOIN table2

## Self join
이건 일하면서도 한 두번 봤던 조인이다. 자기 자신을 join하는 join문이다.