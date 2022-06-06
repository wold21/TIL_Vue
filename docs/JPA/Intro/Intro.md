# JPA Intro

## 패러다임의 불일치

지금 우리 회사는 마이바티스를 활용해 CRUD를 진행한다. 컨트롤러에서 서비스 서비스에서 DAO와 매핑한 뒤 매퍼영역으로 접근하여 데이터를 운용하는데 이전의 자바 개발자들은 JDBC API를 활용하여 RDBMS와 통신을 했다. 마이바티스를 쓰면서 부터 반복되고 고착된 코드 사용이 많이 줄었지만 마이바티스도 결국에는 반복적인 CRUD 코드 작성은 마찬가지였다. 원인은 객체와 관계형 데이터 베이스가 서로 지향하는 목적이 달라, 표현하는 방식이 달랐기 때문이다. 이를 `패러다임 불일치` 문제라고 한다. 그래서 개발자들이 그 중간을 이어주기 위해 길고 고정된 코드를 사용할 수 밖에 없었다.

객체는 상속이나 구현, 추상화의 개념이 있지만 RDBMS는 그런 개념 자체가 성립되지 않는 형태이다. 그나마 데이터베이스 모델링에서 이야기하는 슈퍼타입 서브타입 관계를 사용하면 객체 상속과 유사한 형태를 만들 수 있다. 바로 `DTYPE`이라는 컬럼인데 어떤 자식 테이블과 관계가 있는지 정의를 할 수 있는 컬럼이라 설명할 수 있을 것같다.

```Text
부모 테이블인
`ITEM`
ITEM_ID(PK)
- NAME
- PRICE
- DTYPE

각각 부모와 연관된 테이블인

ALBUM
ITEM_ID(PK, FK)
- ARTIST

MOVIE
ITEM_ID(PK, FK)
- DIRECTOR
- ACTOR

BOOK
ITEM_ID(PK, FK)
- AUTHOR
- ISBN

```

> 테이블은 이렇게 구성되며 객체 모델 코드는 아래와 같다.
> 

```Java
abstract clas Item {
  Long id;
  String name;
  int price;
}

class Album extends Item {
  String artist;
}

class Movie extends Item {
  String director;
  String actor;
}

class Book extends Item {
  String author;
  String isbn;
}

```

> 이제 상속 받은 객체들을 저장하려면 객체를 분해해서 두 번의 SQL을 사용해야한다. 아래처럼 말이다.
> 

```SQL
INSERT INTO ITEM...

INSERT INTO ALBUM...

```

> 만약 객체들을 데이터 베이스가 아닌 자바 컬렉션에 보관한다면 다음과 같이 부모 자식에 대한 고민 없이 사용할 수 있을 것이다.
> 

```Java
list.add(album);
list.add(movie);

Album album = list.get(albumId);

```

### JPA를 사용해 불필요한 과정을 해결해보자.

간단하다. persist()라는 메서드를 사용하면 끝이다.

```Java
jpa.persist.(album);

```

그러면 jpa내부에서는 객체를 두 테이블에 나누어 저장해준다.

```SQL
INSERT INTO ITEM...
INSERT INTO ALBUM...

```

조회 같은 경우는 어떨까?
바로 find 메서드를 사용하면 된다.

```Java
String albumId = "id001;"
Album album = jpa.find(Album.class, albumId);

```

그러면 ITEM과 ALBUM 테이블을 조인해서 결과를 반환해준다.

### 연관관계

참조를 사용하는 객체와 외래 키를 사용하는 RDBMS의 불일치를 jpa를 사용해 해결하는 방법이있다.
멤버와 팀이라는 두개의 테이블(객체)가 있다고 가정했을 때.

```Java
class Member {
  Team team;

  ...

  Team getTeam() {
    return team;
  }
}

class Team {
  ...
}

```

`member.getTeam();`을 사용해 접근할 수 있으며 Team의 PK를 FK로 받고 있는 Member 테이블을 조인하면 Member 테이블과 관련된 Team 테이블을 조회 할 수 있다. 하지만 여기서 객체와 RDBMS의 차이점은 객체는 `member.getTeam();`은 가능하지만 `team.getMember();`는 불가능하다. 반면 RDBMS는 방향이 어떻든 JOIN이 가능하다. 아래는 테이블에 객체를 맞추어 모델링을 한 것이다.

```Java
class Member {
  String id;       // PK
  Long teamId;     // FK
  String username; //USERNAME Column
}

class Team {
  Long id;         // TEAM_ID PK 사용
  String name;     // NAME Column
}

```

하지만 객체는 연관된 객체의 참조를 보관해야 다음처럼 참고를 통해 연관된 객체를 찾을 수 있다.

```Java
Team team = member.getTeam();

```

테이블에 맞춘 객체는 teamId를 가지고 있어봐야 라는 말이다. 그래서 위와 같은 모델링은 아래와 같이 표현되어야 한다.

```Java
class Member {
  String id;       // PK
  Team team;       // 참조
  String username; //USERNAME Column

  Team getTeam() {
    return team;
  }
}

class Team {
  Long id;         // TEAM_ID PK 사용
  String name;     // NAME Column
}

```

외래 키를 그대로 보관하는 것이 아닌 연관된 team의 참조를 보관한다. 이 간극을 개발자가 중간에서 변환 역할을 해줘야한다.

- 저장
member.getId();
member.getTeam().getId();
member.getUsername();
- 조회
조회 할 때는 TEAM_ID 외래 키 값을 Member 객체의 team 참조로 변환해서 객체에 보관해야 한다. 두 테이블을 조인하면 된다.
    
    ``` Java
    public Member find(String memberId) {
      // SQL실행
      ...
      Member member = new Member();
      ...
    
      // 데이터 베이스에서 조회한 회원 관련 정보를 모두 입력
      Team team = new Team();
      ...
    
      // 데이터 베이스에서 조회한 팀 관련 정보를 모두 입력
    
      // 회원과 팀 관계 설정
      member.setTeam(team);
      return member;
    }
    
    ```
    
    ### JPA와 연관 관계
    
    JPA는 이런 불일치를 해결해준다.
    
    ```
    member.setTeam(team);
    
    jpa.persist(member);
    
    // 조회도 마찬가지이다.
    
    Member member = jpa.find(Member.class, memberId);
    Team team = member.getTeam();
    
    ```
    

### JPA와 객체 그래프 탐색

JPA를 사용하면 객체 그래프를 마음껏 탐색할 수 있다. `member.getOrder().getOrderItem()...` 처럼 말이다.

> 지연로딩
> 
> 
> > 참조 되어있는 객체를 실제로 사용하는 시점까지 DB조회를 미루는 방식을 말한다.
> > 

### JPA 특징

JPA는 같은 트랜잭션일 때 같은 객체가 조회되는 것을 보장한다. 그렇지만 이전의 방법에서는 한번 조회할 때 매번 트랜잭션을 날리기 때문에(같은 객체를 두 번 조회.) 동일성 비교에서 false가 나온다.

- jpa는 객체과 RDBMS 간의 불일치를 메우기 위해 개발되었고 기존의 모델링의 필요성을 부각시켜준다.(객체 지향성)

---

## JPA란 무엇인가?

JPA(Java Persistence API)는 자바 진영의 ORM 기술 표준이다. JPA는 자바 애플리케이션과 JDBC사이에서 동작한다.

> Java Application -> JPA -> JDBC API <-> SQL, Return <-> DB
> 

> ORM
Object-Relational Mapping 객체와 RDBMS를 매핑한다는 뜻이다. SQL을 직접 작성하는 것이 아니라 객체를 자바 컬렉션에 저장하듯이 ORM 프레임워크에 저장하게 되고 ORM 프레임워크가 적절한 SQL를 생성해서 DB에 객체를 저장해준다. 편의성을 높여주기도 하지만 위와 같은 불일치한 관계를 해소시켜준다는 것에 집중하여 봐야한다. 덕분에 개발자는 객체지향 애플리케이션 개발에 집중할 수 있다는 뜻이다.
> 

Java ORM은 EJB라고 하는 기술 표준이 만들어졌을 때 그 안에 엔티티 빈이라는 ORM이 시작이었다. 하지만 너무 복잡하고 기술 성숙도도 떨어졌으며 자바 엔터프라이즈 애플리케이션 서버에서만 동작했다. 이때 하이버네이트라는 오픈소스 ORM 프레임워크가 등장했고 EJB의 ORM 기술보다 가볍고 실용적인 데다 성숙도도 높았으며 엔터프라이즈 서버가 없어도 동장한다는 것이 큰 이점이었던 것 같다. 지금 배우는 JPA는 EJB(3.0)에서 하이버네이트를 기반으로 만들어졌다.