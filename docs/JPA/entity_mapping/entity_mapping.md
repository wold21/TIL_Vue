# 엔티티 매핑

jpa를 사용하는 데 가장 중요한 것은 엔티티와 테이블을 정확히 매핑하는 것이다. 따라서 매핑 어노테이션을 숙지하고 올바르게 사용해야한다.

- 객체와 테이블 매핑 → @Entity, @Table
- 기본 키 매핑 → @Id
- 필드와 컬럼 매핑 → @Column
- 연관관계 매핑 → @ManyToOne, @JoinColumn

<aside>
💡 어노테이션이 아니라 xml로 매핑 정보를 사용하는 방법도 있다고 한다.

</aside>

# @Entity

jpa를 사용해서 테이블과 매핑할 클래스는 필수로 사용해야하는 어노테이션.

옵션으로 name이 있다. 설정하지 않는다면 기본값(클래스 명)을 사용한다. 

- 주의사항
    - 기본 생성자는 필수다.
    - final 클래스, enum, interface, inner 클래스에는 사용할 수 없다.
    - 저장할 필드에 final을 사용하면 안된다.

jpa가 엔티티를 생성할 때 기본 생성자를 사용한다. 자바는 생성자 선언이 없으면 기본 생성자를 만들어 준다.

# @Table

엔티티와 매핑할 테이블을 지정한다. 생략하면 매핑한 엔티티 이름을 테이블 이름으로 사용한다.

| 속성 | 기능 | 기본값 |
| --- | --- | --- |
| name | 매핑할 테이블 이름 | 엔티티 이름을 사용한다 |
| catalog | catalog기능이 있는 DB에서 catalog를 매핑한다.  |  |
| schema | schema기능이 있는 DB에서 schema를 매핑한다.  |  |
| uniqueConstraints(DDL) | DDL 생성 시에 유니크 제약 조건을 만든다. 2개 이상의 복합 유니크 제약 조건도 만들 수 있다. 참고로 이 기능은 스키마 자동 생성 기능을 사용해서 DDL을 만들 때만 사용된다. |  |

# 다양한 매핑 사용

enum

- @Enumerated를 사용하여 속성값을 매핑한다.

temporal

- 자바의 날짜 타입은 @Temporal을 사용하여 매핑한다.

description

- 설명하는 필드는 길이 제한이 없다. 따라서 VARCHAR 타입이 아닌 CLOB 타입으로 지정해야한다. jpa에서는 @Lob으로 매핑할 수 있다.(CLOB, BLOB)

# DB 스키마 자동 생성

```
jpa:
	hibernate:
	  ddl-auto: create or create-drop or update or validate or none
```

자동 생성되는 스키마는 DB 방언에 따라 DDL 문이 달라진다.

ex. varchar or varchar2

<aside>
💡 jpa 2.1부터 validate와 update는 지원하지 않는다.

</aside>

<aside>
💡 자바는 카멜케이스 DB는 스네이크 케이스를 사용하는데 옵션으로 ejb.naming.strategy를 사용하면 자동으로 매핑을 해준다. 이 경우에는 수동으로 엔티티에 테이블 명이나 컬럼 명을 생략하면 자동으로 카멜, 스네이크로 매핑해준다.

</aside>

## 🚫 주의 사항

- 운영서버에서 DDL 수정이 가능한 옵션은 절대 사용하면 안된다. (create, create-drop, update)
- 오직 개발 서버에서만 사용해야한다.
- 개발환경에 따른 추천 전략은 다음과 같다.
    - 개발 초기 단계는 create, update
    - 초기화 상태로 자동화된 테스트를 진행하는 개발자 환경과 CI서버는 create, create-drop
    - 테스트 서버는 update, validate
    - 스테이징과 운영서버는 validate, none

# DDL 생성기능

회원 이름은 필수 , 10자 초과 x 라는 조건이 있을 때 스키마 자동 생성을 사용하여 어떻게 만들까? 아래와 같이 필드에 설정해주면 된다. 

```java
@Entity
@Table(name = "MEMBER")
public class Member {
		
		@Id
		@Column(name = "ID")
		private String id;

		@Column(name = "NAME", nullable = false, length = 10)
		private	String username;
}
```

이번에는 유니크 제약 조건을 만들어주는 @Table의 uniqueConstraints 속성을 알아보자.

```java
@Entity
@Table(name = "MEMBER", uniqueConstraints = {@UniqueContraint(
		name = " NAME_AGE_UNIQUE,
		columnNames = {"NAME", "AGE"})})
public class Member {
		
		@Id
		@Column(name = "ID")
		private String id;

		@Column(name = "NAME", nullable = false, length = 10)
		private	String username;
}
```

# 기본키 매핑

앞서 봤듯이 `@Id`를 사용하여 기본 키를 할당했는데 만약 DB에서 생성해주는 값을 사용하려면 어떻게 매핑하여야할까? 오라클의 시퀸스 오브젝트 또는 Mysql의 AUTO_INCREMENT 같은 기능을 사용해서 생성된 값을 사용하고 싶다면? jpa에서는 다음과 같이 해결하였다.

- 직접 할당 - 기본 키를 애플리케이션에서 직접 할당한다.
- 자동 생성 - 대리 키 사용방식, @GeneratedValue를 사용하여 적용한다.
    - IDENTITY: 기본 키 생성을 DB에 위임한다.
    - SEQUENCE: DB 시퀸스를 사용해서 기본키를 할당한다.
    - TABLE: 키 생성 테이블을 사용한다.
    
    ## 기본 키 직접 할당 전략
    
    @Id를 사용하여 매핑하면 된다. 가능한 자바 타입은 아래와 같다.
    
    - 자바 기본형
    - 자바 wrapper형
    - String
    - java.util.date
    - java.sql.date
    - java.math.BigDecimal
    - jaba.math.BigInteger
    
    직접 할당 전략은 `em.persist()`로 저장하기 전에 애플리케이션에서 기본 키를 직접 할당하는 방법이다. (ex. member.setId(”member1”));
    
    ## ⭐IDENTITY 전략
    
    기본 키 생성을 DB에 위임하는 전략이다. 주로 MySQL, PostgreSQL, Server, DB2에서 사용한다.
    
    @GeneratedValue (strategy = GenerationType.IDENTITY)를 기본 키에 적용하면 되는데 이 옵션은 이미 DB에 값이 생성되어있어야한다. (값을 구할 수 있을 때 사용 가능)
    
    이 전략은 insert 한 후에 기본 키값을 조회할 수 있기 때문에 엔티티에 식별자 값을 할당하려면 jpa는 추가적으로 DB에서 조회를 해야한다. JDBC3에 추가된Statement.getGeneratedKeys()를 사용하면 데이터를 저장하면서 동시에 생성된 기본 키값을 얻어올 수 있어 하이버네이트는 이 메서드를 사용한다.
    
    🚫  주의사항
    
    엔티티가 영속 상태가 되려면 식별자가 반드시 필요한데 이 전략은 결국에 엔티티를 DB에 저장해야 식별자를 구할 수 있으므로 em.persist()를 호출하는 즉시 InsertSQL이 DB에 저장된다. 그러므로 이 전략은 쓰기 지연이 동작하지 않는다.
    
    ## ⭐SEQUENCE 전략
    
    유일한 값을 순서대로 생성하는 특별한 DB 오브젝트이다. 오라클, PostgreSQL, DB2, H2에서 사용 가능하다. 사용법은 아래와 같다.
    
    1. 시퀸스를 생성해준다.
    
    ```sql
    CREATE TABLE BOARD (
    		ID BIGINT NOT NULL PRIMARY KEY,
    		DATA VARCHAR(255)
    )
    
    // 시퀸스 생성
    CREATE SEQUENCE BOARD_SEQ START WITH 1 INCREMENT BY 1;
    ```
    
    1. 시퀸스를 매핑해준다.
    
    ```java
    @Entity
    @SequenceGenerator(
    		name = "BOARD_SEQ_GENERATOR",
    		sequenceName = "BOARD_SEQ" // 매핑할 DB 시퀸스 이름
    		initialValue = 1, allocationSize = 1) // 시퀸스 등록
    public class Board {
    		@Id
    		@GeneratedValue(strategy = GenerationType.SEQUENCE,
    				generator = "BOARD_SEQ_GENERATOR") // 등록한 시퀸스 생성기를 선택.
    		private Long id;
    }
    ```
    
    - 이렇게 등록된 시퀸스(식별자 값)는 em.persist()를 호출할 때 먼저 DB 시퀸스를 사용해서 식별자를 조회한다.
    - 그런 다음 조회한 식별자 값을 엔티티 id에 할당한 후에 엔티티를 영속성 컨텍스트에 저장한다.
    - 이후 커밋 → 플러시 과정을 거쳐 DB에 저장하게 된다.
    
    | 속성 | 기능 | 기본값 |
    | --- | --- | --- |
    | name | 식별자 생성기 이름 | 필수 |
    | sequenceName | DB에 등록되어 있는 시퀸스 이름 | hibernate_sequence |
    | initialValue | DDL 생성 시에만 사용됨. 시퀸스 DDL을 생성할 때 처음 시작하는 수를 지정한다.  | 1 |
    | allocationSize | 시퀸스 한번 호출에 증가하는 수 (성능 최적화에 사용됨) | 50 |
    | catalog. schema | DB catalog, schema 이름 |  |
    
    <aside>
    💡 여기서 allocationSize가 50인 이유는 시퀸스를 여러번 호출하지 않기 위해서 이다. 시퀸스를 한번 호출 했을 때 시퀸스를 한번에 50을 증가 시켜 놓은 후 1~50까지를 메모리에 저장하고 그 값을 식별자로 사용한다. 
    
    만약 insert성능에 신경을 쓰지 않아도 되면 size를 1로 줄여도 무방하다.
    
    </aside>
    
    ### ⭐TABLE 전략
    
    이 전략은 키 생성 전용 테이블을 하나 만들고 여기에 이름과 값으로 사용할 컬럼을 만들어 시퀸스를 흉내내는 전략이다. 그러므로 모든 DB에서 사용가능하다. 
    
    1. 먼저 테이블을 생성한다.
    
    ```sql
    CREATE TABLE MY_SEQUENCES (
    		SEQUNECE_NAME VARCHAR(255) NOT NULL,
    		NEXT_VAL BIGINT,
    		PRIMARY KEY ( SEQUENCE_NAME)
    )
    ```
    
    SEQUNECE_NAME 컬럼을 시퀸스 이름으로 사용하고 next_val 컬럼을 시퀸스 값으로 사용한다. 컬럼의 이름은 변경 가능하다.
    
    1. JPA
    
    ```java
    @Entity
    @TableGenerator(
    		name = "BOARD_SEQ_GENERATOR",
    		table = "MY_SEQUENCES" // 매핑할 DB 테이블 이름
    		pkColumnValue = "BOARD_SEQ", allocationSize = 1)
    public class Board {
    		@Id
    		@GeneratedValue(strategy = GenerationType.TABLE,
    				generator = "BOARD_SEQ_GENERATOR") // 등록한 시퀸스 생성기를 선택.
    		private Long id;
    }
    ```
    
    | 속성 | 기능 | 기본값 |
    | --- | --- | --- |
    | name | 식별자 생성기 이름 | 필수 |
    | table | 키 생성 테이블명 | hibernate_sequence |
    | pkColumnName | 시퀸스 컬럼명 | sequence_name |
    | valueColumnName | 시퀸스 값 컬럼명 | next_val |
    | pkColumnValue | 키로 사용할 값 이름 | 엔티티 이름 |
    | initialValue | 초기 값 마지막으로 생성된 값이 기준이다.  | 0 |
    | allocationSize | 시퀸스 한 번 호출에 증가하는 수 (성능 최적화에 사용됨) | 50 |
    | catalog, schema | DB catalog, schema 이름 |  |
    | uniqueConstraints | 유니크 제약 조건을 지정할 수 있다.  |  |
    
    <aside>
    💡 JPA 표준 명세서에는 table, pkColumnName, valueColumnName의 기본값은 JPA 구현체가 정의하도록 했다.
    
    </aside>
    
    | { pklColumnMame } | { valueColumnName } |
    | --- | --- |
    | { pkColumnValue } | { initialValue } |
    
    ### ⭐ AUTO 전략
    
    GenerationType.AUTO는 선택한 DB 방언에 따라 자동으로 세가지 전략 중 하나를 선택한다. 장점이라면 DB를 변경해도 코드의 수정이 불필요한 점이있다. 개발 초기 단계에서 보통 사용한다. 그럼 시퀸스나 테이블 전략이 자동으로 선택 됐을때 해당 시퀸스 테이블은 생성을 해야하는가? → 자동으로 JPA가 테이블을 만들어 줄 것이다. 
    
    ### 기본 키 매핑 정리
    
    영속성 컨텍스트는 식별자 값으로 엔티티를 구분하므로 영속상태로 만들기 위해서는 식별자 값이 필수이다. em.persist()를 호출한 직후에 발생하는 일을 식별자 할당 전략으로 정리하면 다음과 같다.
    
    - 직접 할당 em.persist()를 호출하기 전에 애플리케이션에서 직접 식별자 값을 할당해야한다. 만약 없다면 예외가 발생한다.
    - SEQUENCE : DB 시퀸스에서 식별자 값을 획득한 후 영속성 컨텍스트에 저장한다
    - TABLE : DB 시퀸스 생성용 테이블에서 식별자 값을 구한 후 영속성 컨텍스트에 저장한다.
    - IDENTITY : DB에 엔티티를 저장해서 식별자 값을 구한 후 영속성 컨텍스트에 저장한다.
        - 이 전략을 테이블에 데이터를 저장해야 식별자 값을 얻을 수 있다.
        
    
    # 4.7 필드와 컬럼 매핑: 레퍼런스
    
    아래는 jpa가 제공하는 필드와 컬럼 매핑용 어노테이션이다.
    
    | 분류 | 어노테이션 | 설명 |
    | --- | --- | --- |
    | 필드와 컬럼 매핑 | @Column | 컬럼을 매핑한다. |
    |  | @Enumerated | 자바의 Enum 타입을 매핑한다. |
    |  | @Temporal | 날짜 타입을 매핑한다. |
    |  | @Lob | BLOB, CLOB 타입을 매핑한다. |
    |  | @Transient | 특정 필드를 DB에 매핑하지 않는다. |
    | 기타 | @Access | JPA가 엔티티에 접근하는 방식을 지정한다. |
    |  |  |  |
    
    ## ⭐ @Column
    
    @Column은 객체 필드를 테이블 컬럼에 매핑한다. 가장 많이 사용되고 기능도 많다. 속성 중에 name, nullable이 제일 많이 사용된다.
    
    | 속성 | 기능 | 기본값 |
    | --- | --- | --- |
    | name  | 필드와 매핑할 테이블의 컬럼 이름 | 객체의 필드 이름 |
    | insertable 
    ( 거의 사용되지 않음 ) | 엔티티 저장 시 이 필드도 같이 저장한다. false로 설정하면 이 필드는 DB에 저장하지 않는다. false옵션은 읽기 전용일 때 사용한다.  | true |
    | updatable
    (거의 사용되지 않음 ) | 엔티티 저장 시 이 필드도 같이 수정한다. false로 설정하면 이 필드는 DB에 수정하지 않는다. false옵션은 읽기 전용일 때 사용한다.  | true |
    | table
    ( 거의 사용되지 않음 ) | 하나의 엔티티를 두 개 이상의 테이블에 매핑할 때 사용한다. 지정한 필드를 다른 테이블에 매핑할 수 있다.  | 현재 클래스가 매핑 된 테이블 |
    | nullable ( DDL ) | null 값의 허용 여부를 설정한다. false로 설정하면 DDL 생성 시에 not null 제약 조건이 붙는다. | true |
    | unique ( DDL ) | @Table의 uniqueConstraints와 같지만 한 컬럼에 간단히 유니크 제약 조건을 걸 때 사용한다. 만약 두 컬럼 이상을 사용해서 유니크 제약 조건을 사용하려면 클래스 레벨에서 @Table.uniqueConstraints를 사용해야한다. |  |
    | columnDefinition ( DDL ) | DB 컬럼 정보를 직접 줄 수 있다. | 필드의 자바 타입과 방언 정보를 사용해서 적절한 컬럼 타입을 생성한다. |
    | length ( DDL ) | 문자 길이 제약 조건. String 타입에만 사용한다. | 255 |
    | precision, scale ( DDL ) | BigDecimal 타입에서 사용한다. ( BigIneger에서도 사용 가능함. ) precision은 소수점을 포함한 전체 자릿수를, scale은 소수의 자릿수다. 참고로 double, float 타입에는 적용되지 않는다. 아주 큰 숫자나 정밀한 소수를 다루어야 할 때만 사용한다. | precision = 19,
    scale = 2 |
    
    DDL 생성 속성에 따라 어떤 DDL이 생성되는지 확인해보자.
    
    - nullable(DDL 생성 기능)
        
        ```java
        @Column(nullable = false)
        private String data;
        
        // 생성된 DDL
        data varchar(255) not null
        ```
        
    - unique(DDL 생성 기능)
        
        ```java
        @Column(unique = true)
        private String username;
        
        // 생성된 DDL
        alter table Tablename
        	add constraint UK_Xxx unique (username)
        ```
        
    - columnDefinition(DDL 생성 기능)
        
        ```java
        @Column(columnDefinition = "varchar(100) default 'EMPTY'")
        private String data;
        
        // 생성된 DDL
        data varchar(100) default 'EMPTY'
        ```
        
    - lengh(DDL 생성 기능)
        
        ```java
        @Column(length = 400)
        private String data;
        
        // 생성된 DDL
        data varchar(400)
        ```
        
    - precision, scale(DDL 생성 기능)
        
        ```java
        @Column(precision = 10, scale = 2)
        private BigDecimal cal;
        
        // 생성된 DDL
        cal numeric(10,2) //H2, PostgreSQL
        cal number(10,2) //Oracle
        cal decimal(10,2) // MySQL
        ```
        
    
    <aside>
    💡 @Column 생략
    대부분의 기본값이 적용되는데 자바 기본 타입일 때는 nullable 속성에 예외가 있다. 
    
    int data1; //@Column 생략, 자바 기본타입
    data1 integer not null // 생성된 DDL
    
    Integer data2 //@Column 생략, 객체 타입
    data2 integer // 생성된 DDL
    
    @Column
    int data3; // @Column 사용, 자바 기본 타입
    data3 integer // 생성된 DDL
    
    그래서 자바 기본 타입에 @Column를 사용하게 되면 nullabla = false를 걸어두는 것이 안전하다.
    
    </aside>
    
    ## ⭐@Enumerated
    
    자바의 enum 타입을 매핑할 때 사용한다.
    
    | 속성  | 기능 | 기본값 |
    | --- | --- | --- |
    | value | - EnumType.ORDINAL : enum 순서를 DB에 저장
    - EnumType.STRING : enum 이름을 DB에 저장 | EnumType.ORDINAL |
    
    예를 들면
    
    ```java
    // enum Class
    enum RoleType {
    		ADMIN, USER
    }
    
    // Entity Class
    @Enumerated(EnumType.STRING)
    private RoleType roleType; // enum 이름으로 매핑한다.
    ```
    
    - member.setRoleType(RoleType.ADMIN);
        - DB에 문자 `ADMIN`이 저장됨.
    - 만약 타입이 ORDINAL이었다면 enum Class에 정의된 순서대로 1이 DB에 저장된다.
    
    <aside>
    💡 만약 enum 클래스에 수정이 있을 경우 ORDINAL로 설정된 상태라면 순서 값이 달라지기 때문에 타입을 STRING으로 사용하는 것을 권장한다. (단점은 저장 데이터 크기가 ORDINAL에 비해 크다는 단점이 있다.)
    
    </aside>
    
    ## ⭐@Temporal
    
    날짜 타입을 매핑할 떄 사용된다. ( java.util.date, java.util.Calendar )
    
    | 속성 | 기능 | 기본값 |
    | --- | --- | --- |
    | value | - TemporalType.DATE : 날짜 , DB DATE 타입과 매핑 ( 예: 2022-05-11)
    - TemporalType.TIME : 시간, DB time타입과 매핑 ( 예: 11:11:11)
    - Tempotal.Type.TIMESTAMP: 날짜와 시간, DB timestamp 타입과 매핑 ( 예: 2022-05-11 11:11:11) | 필수로 지정해 주어야 한다.  |
    
    ## ⭐@Lob
    
    DB BLOB, CLOB 타입과 매핑한다. 속성이 없는 대신에 필드 타입이 문자면 CLOB으로 매핑하고 나머지는 BLOB으로 매핑한다. 
    
    - CLOB : String, char[], java.sql.CLOB
    - BLOB : byte[], java.sql.BLOB
    
    ## ⭐@Transient
    
    이 필드는 매핑하지 않는다. 따라서 DB에 저장하지 않고 조회하지도 않는다. 객체에 임시로 어떤 값을 보관하고 싶을 때 사용한다. 
    
    ```java
    @Transient
    private Integer temp;
    ```
    
    ## ⭐@Access
    
    jpa가 엔티티 데이터에 접근하는 방식을 지정한다.
    
    - 필드 접근 : AccessType.FIELD로 지정한다. 필드에 직접 접근하며 필드 접근 권한이 private여도 접근 할 수 있다.
        - @Access를 설정하지 않으면 @Id의 위치를 기준으로 접근 방식이 설정된다.
        
        ```java
        @Entity
        @Access(AccessType.FIELD)
        public class Member {
        		
        		@Id
        		private String id;
        
        		private String data1;
        		private String data2;
        }
        ```
        
        - @Id가 필드에 있으므로 AccessType.FIELD 타입으로 설정한 것과 같다.
        - 따라서 @Access는 생략 가능하다.
    - 프로퍼티 접근 : AccessType.PROPERTY로 지정한다. 접근자(Getter)를 사용한다.
        
        ```java
        @Entity
        @Access(AccessType.PROPERTY)
        public class Member {
        		
        		private String id;
        
        		private String data1;
        		private String data2;
        
        		@Id
        		public String getId() {
        				return id;
        		}
        
        		@Column
        		public String getData1() {
        				return data1;
        		}
        
        		public String getData2() {
        				return data2;
        		}
        }
        ```
        
        - @Id가 프로퍼티에 있으므로 AccessType.PROPERTY타입으로 설정한 것과 같다.
        - 따라서 @Access는 생략 가능하다.
        
    - 아래와 같이 접근 방식으로 함께 사용할 수도 있다.
        
        ```java
        @Entity
        public class Member {
        		
        		@Id
        		private String id;
        
        		@Transient
        		private String firstName;
        
        		@Transient
        		private String lastName;
        
        		@Access(AccessType.PROPERTY)
        		public String getFullName() {
        				return firstName + lastName;
        		}
        }
        ```