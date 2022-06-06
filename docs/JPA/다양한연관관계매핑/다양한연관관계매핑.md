# 다양한 연관관계 매핑

엔티티의 연관관계를 매핑할 때는 다음 3가지를 고려해야 한다.

- 다중성
    - 다대일
    - 일대다
    - 일대일
    - 다대다 (거의 쓰이지 않음)
- 단방향, 양방향
    - 테이블과 다르게 객체는 참조용 필드를 통해서 연관된 객체를 조회할 수 있다.
    - 한 쪽만 참조하는 것을 단방향
    - 양쪽이 서로 참조하는 것을 양방향 관계라한다.
- 연관관계의 주인
    - 양방향 관계일때 (A→B, B→A) 연관관계를 관리하는 포인트는 2곳이다.
    - JPA는 두 객체 중 하나를 정해서 외래 키를 관리하는데 이것을 연관관계의 주인이라 한다.
    - 따라서 둘 중 하나를 정해야한다.
    - 외래 키를 가진 테이블과 매핑한 엔티티가 외래키를 관리하는게 효율적이라 이곳을 주인으로 선택한다.
    - 주인이 아닌 엔티티는 외래 키를 변경할 수 없고 읽기만 가능하다.
    - 연관관계의 주인은 mappedBy 속성을 사용하지 않는다.
    - 주인이 아닌 엔티티는 mappedBy 속성을 사용하고 연관관계의 주인 필드 이름을 값으로 입력해야한다.

다중성과 단방향, 양방향을 고려한 가능한 모든 연관관계를 하나씩 알아보자.

- 다대일 : 단방향, 양방향
- 일대다 : 단방향, 양방향
- 일대일 : 주 테이블 단방향, 양방향
- 일대일 : 대상 테이블 단방향, 양방향
- 다대다 : 단방향, 양방향

참고로 다중성은 왼쪽을 연관관계의 주인으로 정했다. 예를 들어 다대일 양방향이라 하면 다(N)가 연관관계의 주인이다.

# 6.1

- 다대일
    
    DB 테이블의 일대다 관계에서 외래 키는 항상 다쪽에 있다. 따라서 객체 양방향 관계에서 연관관계의 주인은 항상 다쪽이다. 예를 들어 회원(N)과 팀(1)이 있으면 회원 쪽이 연관관계의 주인이다.
    
    ## ⭐다대일 단방향[N:1]
    
    - [N:1]
        
        [회원]
        
        ```java
        @Entity
        public class Member {
        		
        		@Id @GeneratedValue
        		@Column(name = "MEMBER_ID")
        		private Long id;
        
        		private String username;
        
        		@ManyToOne
        		@JoinColumn(name = "TEAM_ID")
        		private Team team;
        
        		// Getter, Setter
        		// ...
        }
        ```
        
        [팀]
        
        ```java
        @Entity
        public class Team {
        		
        		@Id @GeneratedValue
        		@Column(name = "TEAM_ID")
        		private Long id;
        
        		private String name;
        
        		// Getter, Setter
        		// ...
        }
        ```
        
        회원은 Member.team으로 팀 엔티티를 참조할 수 있지만 반대로 팀에는 회원을 참조하는 필드가 없다, 따라서 이상태는 다대일 단방향 연관관계이다.
        
    
    ## ⭐다대일 양방향[N:1, 1:N]
    
    - [N:1, 1:N]
        
        [회원]
        
        ```java
        @Entity
        public class Member {
        		
        		@Id @GeneratedValue
        		@Column(name = "MEMBER_ID")
        		private Long id;
        
        		private String username;
        
        		@ManyToOne
        		@JoinColumn(name = "TEAM_ID")
        		private Team team;
        
        		public void setTeam(Team team) {
        			
        				this.team = team;
        
        				// 무한루프에 빠지지 않도록 체크
        				if(!team.getMembers().contains(this)) {
        						team.getMembers().add(this);
        				}
        		}
        }
        ```
        
        [팀]
        
        ```java
        @Entity
        public class Team {
        		
        		@Id @GeneratedValue
        		@Column(name = "TEAM_ID")
        		private Long id;
        
        		private String name;
        
        		@OneToMany(mappedBy = "team")
        		private List<Member> members = new ArrayList<Member>();
        
        		public void addMember(Member member) {
        				this.members.add(member);
        				if(member.getTeam() != this) { // 무한루프에 빠지지 않도록 체크
        						member.setTeam(this);
        				}
        		}
        }
        ```
        
        <aside>
        📢 양방향 연관관계를 항상 서로를 참조해야한다.
        항상 서로 참조하게 하려면 연관관계 편의 메소드를 작성하는 것이 좋은데 회원의 setTeam(), 팀의 addMember() 메소드가 이런 편의 메소드이다.
        편의 메소드는 한 곳에만 작성하거나 양쪽 다 작성할 수있는데 양쪽에 다 작성하면 무한루프에 빠지므로 주의해야한다.
        예제 코드는 편의 메소드를 양쪽에 다 작성해서 둘 중 하나만 호출하면 된다. 또한 무한 루프에 빠지지 않도록 검사하는 로직도 있다.
        
        </aside>
        

# 6.2

- 일대다
    
    다대일의 반대 방향, 일대다 관계는 엔티티를 하나 이상 참조할 수 있으므로 자바 컬렉션인 Collection, List, Set, Map 중에 하나를 사용해야한다.
    
    ## ⭐일대다 단방향[N:1]
    
    - [N:1]
        
        하나의 팀은 여러 회원을 참조할 수 있고 이런 관계를 일대다 관계라 한다. 그리고 팀은 회원들을 참조하지만 반대로 회원은 팀을 참조하지 않으면 둘의 관계는 단방향이다. 
        
        외래 키는 항상 다쪽 테이블에 있지만 회원 엔티티에는 외래 키를 참조할 수 있는 필드가 없다. 
        
        | Team | Member |
        | --- | --- |
        | id | id |
        | name | name |
        | List members |  |
        
        대신에 반대편 테이블인 팀 엔티티에만 참조 필드인 members가 있다. 따라서 반대편 테이블의 외래 키를 관리하는 특이한 모습을 보인다.
        
        [팀 엔티티]
        
        ```java
        @Entity
        public class Team {
        
        		@Id @GeneratedValue
        		@Column(name = "TEAM_ID")
        		private Long id;
        
        		private String name;
        
        		@OneToMany
        		@JoinColumn(name = "TEAM_ID") // MEMBER 테이블의 TEAM_ID(FK)
        		private List<Member> members = new ArrayList<Member>();
        
        		// Getter, Setter
        		// ...
        }
        ```
        
        [회원 엔티티]
        
        ```java
        @Entity
        public class Member{
        
        		@Id @GeneratedValue
        		@Column(name = "MEMBER_ID")
        		private Long id;
        
        		private String username;
        
        		// Getter, Setter
        		// ...
        }
        ```
        
        일대다 단방향 관계를 매핑할 때는 @JoinColumn을 명시해야 한다. 그렇지 않으면 jpa는 연결 테이블을 중간에 두고 연관관계를 관리하는 조인 테이블 전략을 기본으로 사용해서 매핑한다.
        
        - 일대다 단방향 매핑의 단점
            - 매핑한 객체가 관리하는 외래 키가 다른 테이블에 있다.
            - 본인에게 있으면 INSERT SQL로 한번에 처리할 수 있지만 없다면 UPDATE SQL을 추가로 실행해야한다.
        - 일대다 단방향 매핑보다는 다대일 양방향 매핑을 사용하자.
            - 일대다 단방향은 성능도 성능이지만 관리 측면에서도 부담이다.
            - 다대일 양방향은 외래 키가 본인 테이블에 있다.
    
    ## ⭐일대다 양방향[1:N, N:1]
    
    - [1:N, N:1]
        
        일대다 양방향 매핑은 존재하지 않는다, 대신 다대일 양방향 매핑을 사용해야한다. 더 정확히 말하자면 양방향 매핑에서 @OneToMany는 연관관계의 주인이 될 수 없다. 이유는 RDB 특성 상 일대다, 다대일 관계는 항상 다 쪽에 외래 키가 있기 때문이다. 따라서 @OneToMany, @ManyToOne 둘 중에 연관관계의 주인은 항상 다 쪽인 @ManyToOne를 사용한 쪽이다. 그러한 이유로 @ManyToOne에는 mappedBy 속성이 없다. 
        
        그렇다고 일대다 양방향 매핑이 완전히 불가능 한 것은 아니다. 일대다 단방향 매핑 반대편에 같은 외래 키를 사용하는 다대일 단방향 매핑을 읽기 전용으로 하나 추가하면 된다.
        
        [팀 엔티티]
        
        ```java
        @Entity
        public class Team {
        
        		@Id @GeneratedValue
        		@Column(name = "TEAM_ID")
        		private Long id;
        
        		private String name;
        
        		@OneToMany
        		@JoinColumn(name = "TEAM_ID") // MEMBER 테이블의 TEAM_ID(FK)
        		private List<Member> members = new ArrayList<Member>();
        
        		// Getter, Setter
        		// ...
        }
        ```
        
        [회원 엔티티]
        
        ```java
        @Entity
        public class Member{
        
        		@Id @GeneratedValue
        		@Column(name = "MEMBER_ID")
        		private Long id;
        
        		private String username;
        
        		@ManyToOne
        		@JoinColumn(name="TEAM_ID", insertable = false, updatable = false)
        		private Team team;
        
        		// Getter, Setter
        		// ...
        }
        ```
        

# 6.3

- 일대일
    
    일대일 관계는 양쪽이 서로 하나의 관계만 가진다. 예를 들면 회원은 하나의 사물함만 사용하고 사물함도 하나의 회원에 의해서 사용된다. 다음과 같은 특징이 있다.
    
    - 일대일 관계는 그 반대도 동일하다.
    - 테이블 관계에서 일대다, 다대일은 항상 다 쪽이 외래키를 가지는 반면 일대일 관계는 어느 곳이나 외래 키를 가질 수 있다. 테이블은 주 테이블이든 대상 테이블이든 외래 키 하나만 있으면 양쪽으로 조회가 가능하다. 따라서 일대일 관계는 주 테이블이나 대상 테이블 중에 누가 외래 키를 가질지 선택해야한다.
    - 주 테이블에 외래 키
        
        주 객체가 대상 객체를 참고하는 것처럼 주 테이블에 외래 키를 두고 대상 테이블을 참조한다. 외래 키를 객체 참조와 비슷하게 사용할 수 있어서 객체 지향 개발자들이 선호한다. 이 방법의 장점은 주 테이블이 외래 키를 가지고 있으므로 주 테이블만 확인해도 대상 테이블과 연관관계가 있는지 알 수 있다.
        
    - 대상 테이블에 외래 키
        
        전통적인 DB 개발자들은 보통 대상 테이블에 외래 키를 두는 것을 선호한다. 이 방법의 장점은 테이블 관계를 일대일에서 일대다로 변경할 때 테이블 구조를 그대로 유지할 수 있다.
        
    
    ## ⭐주 테이블에 외래 키
    
    - 단방향
        
        (주) MEMBER (대상) LOCKER
        
        | Member | Locker |
        | --- | --- |
        | id | id |
        | Locker locker | name |
        | username |  |
        
        | MEMBER | LOCKER |
        | --- | --- |
        | MEMBER_ID(PK) | LOCKER_ID(PK) |
        | LOCKER_ID(FK, UNI) | NAME |
        | USERNAME |  |
        
        ```java
        @Entity
        public class Member {
        
        		@Id @GeneratedValue
        		@Column(name = "TEAM_ID")
        		private Long id;
        
        		private String username;
        
        		@OneToOne
        		@JoinColumn(name = "LOCKER_ID") // MEMBER 테이블의 TEAM_ID(FK)
        		private Locker locker;
        }
        
        @Entity
        public class Locker {
        		
        		@Id @GeneratedValue
        		@Column(name = "LOCKER_ID")
        		private Long id;
        
        		private String name;
        }
        ```
        
        일대일 관계이므로 주 테이블에 @OneToOne를 사용했고 DB에는 UNI를 추가했다. 이 관계는 다대일 단방향(@ManyToOne)과 거의 비슷하다. 
        
    - 양방향
        
        양방향 관계는 아래와 같다.
        
        | Member | Locker |
        | --- | --- |
        | id | id |
        | Locker locker | name |
        | username | Member mebmer |
        
        | MEMBER | LOCKER |
        | --- | --- |
        | MEMBER_ID(PK) | LOCKER_ID(PK) |
        | LOCKER_ID(FK, UNI) | NAME |
        | USERNAME |  |
        
        ```java
        @Entity
        public class Member {
        
        		@Id @GeneratedValue
        		@Column(name = "TEAM_ID")
        		private Long id;
        
        		private String username;
        
        		@OneToOne
        		@JoinColumn(name = "LOCKER_ID") // MEMBER 테이블의 TEAM_ID(FK)
        		private Locker locker;
        }
        
        @Entity
        public class Locker {
        		
        		@Id @GeneratedValue
        		@Column(name = "LOCKER_ID")
        		private Long id;
        
        		private String name;
        
        		@OneToOne(mappedBy = "locker")
        		private Member member
        }
        ```
        
        양방향 관계이므로 주인을 Member.locker가 연관관계의 주인이고 사물함 엔티티에 mappedBy를 선언하여 주인이 아님을 설정했다.
        
    
    ## ⭐대상 테이블에 외래 키
    
    - 단방향
        
        일대일 관계 중 대상 테이블에 외래 키가 있는 단방향 관계는 jpa에서 지원하지 않는다. 그리고 이런 모양으로 매핑할 수 있는 방법도 없다. 이때는 단바얗ㅇ 관계를 Locker에서 Member 방향으로 수정하거나, 양방향 관계로 만들고 Locker를 연관관계의 주인으로 설정해야한다. 참고로 jpa2.0부터 일대다 단방향 관계에서 대상 테이블에 외래키가 있는 매핑을 허용했다. 하지만 일대일 단방향은 이런 매핑을 허용하지 않는다. 
        
    - 양방향
        
        대상 테이블에 외래 키가 있는 양방향 관계를 알아보자.
        
        | Member | Locker |
        | --- | --- |
        | id | id |
        | Locker locker | name |
        | username | Member member |
        
        | MEMBER | LOCKER |
        | --- | --- |
        | MEMBER_ID(PK) | LOCKER_ID(PK) |
        | USERNAME | MEMBER_ID(FK, UNI) |
        |  | NAME |
        
        ```java
        @Entity
        public class Member {
        
        		@Id @GeneratedValue
        		@Column(name = "TEAM_ID")
        		private Long id;
        
        		private String username;
        
        		@OneToOne(mappedBy = "member") // MEMBER 테이블의 TEAM_ID(FK)
        		private Locker locker;
        }
        
        @Entity
        public class Locker {
        		
        		@Id @GeneratedValue
        		@Column(name = "LOCKER_ID")
        		private Long id;
        
        		private String name;
        
        		@OneToOne
            @JoinColumn(name = "MEMBER_ID")
        		private Member member
        }
        ```
        
        <aside>
        ⚠️ 프록시를 사용할 때 외래 키를 직접 관리하지 않는 일대일 관계는 지연 로딩으로 설정해도 즉시 로딩된다. 위의 예제에서 Locker.member는 지연로딩이 가능하지만 Member.locker는 지연로딩으로 설정해도 즉시 로딩된다. 이것은 프록시의 한계때문에 발생하는 문제인데 프록시 대신에 bytecode instrumentation을 사용하면 해결할 수 있다.
        
        </aside>
        

# 6.4

- 다대다
    
    RDB는 정규화된 테이블 2개로 다대다 관계를 표현할 수 없어서 다대일, 일대다 관계로 풀어내는 연결 테이블을 사용한다. 
    
    | Member | Product |
    | --- | --- |
    | MEMBER_ID(PK) | PRODUCT_ID(PK) |
    | USERNAME | NAME |
    
    위의 경우처럼 회원은 상품을 주문하고 상품들은 회원들에 주문되기 때문에 둘은 다대다 관계이다. 그래서 아래와 같이 연결 테이블을 추가하여 사용하는데.
    
    | Member | Member_Product | Product |
    | --- | --- | --- |
    | MEMBER_ID(PK) | MEMBER_ID(PK, FK) | PRODUCT_ID(PK) |
    | USERNAME | PRODUCT_ID(PK, FK) | NAME |
    
    그런데 객체는 테이블과 다르게 객체 2개로 다대다 관계를 만들 수 있다. 예들들어 회원 객체는 `컬렉션`을 사용해서 상품들을 참조하면 되고 반대로 상품들도 똑같이 참조하면 된다. @ManyToMany라는 어노테이션이 준비되어있는 것이다.
    
    ## ⭐다대다: 단방향
    
    - [N:N] 단방향
        
        [회원 엔티티]
        
        ```java
        @Entity
        public class Member {
        
        		@Id @Column(name = "MEMBER_ID")
        		private String id;
        
        		private String username;
        
        		@ManyToMany
        		@JoinTable(name = "MEMBER_PRODUCT",
        					joinColumns = @JoinColumn(name = "MEMBER_ID"),
        					inverseJoinColumn = @JoinColumn(name = "PRODUCT_ID"))
        		private List<Product> products = new ArrayList<Product>();
        		
        }
        ```
        
        [상품 엔티티]
        
        ```java
        @Entity
        public class Product {
        		
        		@Id @Column(name = "PRODUCT_ID")
        		private String id;
        
        		private String name;
        }
        ```
        
        회원 엔티티와 상품 엔티티를 @ManyToMany로 매핑했다. 여기서 중요한 점은 회원 엔티티에서 @ManyToMany와 @JoinTable을 사용해서 연결 테이블을 바로 매핑한 것이다. 따라서 RDB의 연결 테이블 구조를 생략하고 매핑할 수 있다.
        
        @JoinTable의 속성을 정리해보자.
        
        - @JoinTable.name → 연결 테이블을 지정한다.
        - @JoinTable.joinColumns → 현재 방향인 회원과 매핑할 조인 컬럼 정보를 지정한다.
        - @JoinTable.inverseJoinColumn → 반대 방향인 상품과 매핑할 조인 컬럼 정보를 지정한다.
        
        ### * 저장
        
        ```java
        public void save() {
        
        		Product productA = new Product();
        		productA.setId("productA");
        		productA.setName("상품A");
        		em.persist(productA);
        
        		Member member1 = new Member();
        		member1.setId("member1");
        		member1.setUsername("회원1");
        		member1.getProducts().add(productA); // 연관관계 설정
        		em.persist(member1);
        }
        
        // SQL
        INSERT INTO PRODUCT...
        INSERT INTO MEMBER...
        INSERT INTO MEMBER_PRODUCT...
        ```
        
        ### * 탐색
        
        ```java
        public void find() {
        
        		Member member = em.find(Member.class, "member1");
        		List<Product> products = member.getProducts(); // 객체 그래프 탐색
        		for (Product product : products) {
        				sout("product.name = " + product.getName());
        		}
        }
        
        // member.getProducts() -> SQL
        SELECT * FROM MEMBER_PRODUCT MP
        INNER JOIN PRODUCT P ON MP.PRODUCT_ID=P.PRODUCT_ID
        WHERE MP.MEMBER_id=?
        ```
        
        위의 예제들처럼 @ManyToMany 덕분에 복잡한 다대다 관계를 애플리케이션에서는 아주 단순하게 사용할 수 있다. 
        
    
    ## ⭐다대다: 양방향
    
    - [N:N] 양방향
        
        다대다 매핑이므로 역 방향도 @ManyToMany를 사용한다. 그리고 원하는 곳에 mappedBy로 연관관계 주인을 지정한다.
        
        ```java
        @Entity
        public class Product {
        		
        		@Id
        		private String id;
        		
        		@ManyToMany(mappedBy = "products") // 역방향 추가
        		private List<Member> members;
        
        		private String name;
        }
        ```
        
        다대다 양방향 연관관계는 다음처럼 설정하면 된다.
        
        - member.getProducts().add(product);
        - product.getMembers().add(mamber);
        
        양방향 연관관계는 편의 메소드를 추가해서 관리하는 것이 편하다. 회원 엔티티에 추가해보자.
        
        ```java
        @Entity
        public class Member {
        
        		@Id @Column(name = "MEMBER_ID")
        		private String id;
        
        		private String username;
        
        		@ManyToMany
        		@JoinTable(name = "MEMBER_PRODUCT",
        					joinColumns = @JoinColumn(name = "MEMBER_ID"),
        					inverseJoinColumn = @JoinColumn(name = "PRODUCT_ID"))
        		private List<Product> products = new ArrayList<Product>();
        
        		public void addProduct(Product product) {
        				...
        				product.add(product);
        				product.getMembers().add(this);
        		}
        		
        }
        ```
        
        이렇게 편의 메소드를 작성하면 연관관계 설정이 간단해진다.
        
        - member.addProduct(product);
        
        양방향 연관관계로 만들었으므로 product.getMembers()를 사용해서 역방향으로 객체 그래프를 탐색할 수 있다.
        
    
    ## ⭐다대다: 매핑의 한계와 극복, 연결 엔티티 사용
    
    - 연결 엔티티
        
        @ManyToMany를 통해 다대다 매핑을 쉽게 처리할 수 있으나 실무에서는 각각의 PK 값만을 가지고 사용할수만은 없다. 예를 들면 회원과 상품의 ID값만이 아니라 날짜나 수량 같은 컬럼이 더 필요하기 때문이다. 다른 컬럼을 추가하면 더이상 @ManyToMany를 사용할 수 없다. 이유는 주문 엔티티나 상품 엔티티에는 추가한 컬럼을 매핑할 수 없기 때문이다. 결국엔 RDB처럼 연결 엔티티를 만들어 사용해야한다.
        
        | Member | Member_Product | Product |
        | --- | --- | --- |
        | id | member | id |
        | memberProduct | product | name |
        | username | orderAmount |  |
        |  | orderDate |  |
        
        [회원 엔티티]
        
        ```java
        @Entity
        public class Member {
        
        		@Id @Column(name ="MEMBER_ID")
        		private Long id;
        
        		private String username;
        
        		// 역방향
        		@OneToMany(mappedBy = "member")
        		private List<MemberProduct> memberProducts;
        }
        ```
        
        [상품 엔티티]
        
        ```java
        @Entity
        public class Product {
        
        		@Id @Column(name ="PRODUCT_ID")
        		private Long id;
        
        		private String name;
        }
        ```
        
        - 상품은 상품 엔티티에서 회원 상품 엔티티로 객체 그래프 탐색 기능이 필요하지 않다고 판단해서 연관관계를 만들지 않았다.
        
        [회원 상품 엔티티]
        
        ```java
        @Entity
        @IdClass(MemberProductId.class)
        public class MemberProduct {
        
        		@Id
        		@ManyToOne
        		@JoinColumn(name = "MEMBER_ID")
        		private Member member; // MemberProductId.member와 연결
        
        		@Id
        		@ManyToOne
        		@JoinColumn(name = "PRODUCT_ID")
        		private Product product // MemberProductId.product와 연결
        
        		private int orderAmount;
        
        		private String orderDate;
        }
        ```
        
        [회원 상품 식별자 클래스]
        
        ```java
        public class MemberProductId implements Serializable {
        
        		private String member;  // MemberProduct.member와 연결
        		private String product; //MemberProduct.product와 연결
        
        		// hashCode and equals
        
        		@Override
        		public boolean equals(Obejct o) {...}
        
        		@Override
        		public int hashCode() {...}
        }
        ```
        
        회원상품 엔티티를 보면 기본 키를 매핑하는 @Id와 외래 키를 매핑하는 @JoinColumn을 동시에 사용해서 기본 키 + 외래 키를 한번에 매핑했다. 그리고 @IdClass를 사용하여 복합 기본 키를 매핑했다.
        
        - 복합 기본 키?
            
            회원 상품 엔티티는 기본키가 MEMBER_ID, PRODUCT_ID로 이루어진 복합 기본 키다. JPA에서 복합 키를 사용하려면 별도의 식별자 클래스를 만들어야한다. (엔티티 상단에 @IdClass로 지정)
            
            복합 키를 위한 식별자 클래스는 다음과 같은 특징이 있다.
            
            - 복합 키는 별도의 식별자 클래스로 만들어야한다.
            - Serializable을 구현해야한다.
            - equals와 hashCode 메소드를 구현해야한다.
            - 기본 생성자가 있어야한다.
            - 식별자 클래스는 public이어야한다.
            - @IdClass를 사용하는 방법 외에 @EmbeddedId를 사용하는 방법도 있다.
            - 
        - 식별 관계?
            
            회원 상품은 회원과 상품의 기본 키를 받아서 자신의 기본키로 사용한다. 이렇게 부모 테이블의 기본 키를 받아서 자신의 기본 키 + 외래 키로 사용하는 것을 DB 용어로 식별관계라고 한다. 
            
        
        종합해보면 회원 상품은 회원의 기본 키를 받아서 자신의 기본 키로 사용함과 동시에 회원과의 관계를 위한 외래 키로 사용한다. 상품 또한 마찬가지이다. 그리고 이 두 기본 키를 MemberProductId 식별자 클래스로 묶어서 복합 기본 키로 사용한다. 
        
        ### * 저장
        
        ```java
        public void save() {
        
        		// 회원 저장
        		Member member = new Member();
        		member.setId("member1");
        		member.setUsername("회원1");
        		em.persist(member);
        
        		// 상품 저장
        		Product product = new Product();
        		product.setId("productA");
        		product.setName("상품A");
        		em.persist(product);
        
        		// 회원 상품 저장
        		MemberProduct memberProduct = new MemberProduct();
        		memberProduct.setMember(member); // 주문 회원 연관관계 설정
        		memberProduct.setProduct(product); // 주문 상품 연관관계 설정
        		memberProduct.setOrderAmount(2); // 주문 수량
        		memberProduct.setOrderDate("2022-05-28"); // 주문 날짜
        		em.persist(memberProduct);
        }
        ```
        
        ### * 조회
        
        ```java
        public void find() {
        
        		
        		// 기본 키 값 생성
        		MemberProductId memberProductId = new MemberProductId();
        		memberProductId.setMember("member");
        		memberProductId.setProduct("product");
        		
        		MemberProduct memberProduct = em.find(MemberProduct.class, memberProductId);
        		
        		Member member = memberProduct.getMember();
        		Product product = memberProduct.getProduct();
        
        		// ...
        }
        ```
        
        - 복합 키가 되면 항상 식별자 클래스를 만들어야한다. em.find()를 보면 생성한 식별자 클래스로 엔티티를 조회한다.
        - 복합 키를 사용하는 방법은 복잡하다. 단순히 컬럼 하나만 기본 키로 사용하는 것과 비교해서 복합 키를 사용하면 ORM 매핑에서 처리할 일이 상당히 많아진다.
        - 식별자 클래스(equals, hashCode 구현), @IdClass, @EmbeddedId도 사용해야한다.
        - 복합 키를 사용하지 않고 다대다 관계를 구성하는 방법도 있다.
    
    ## ⭐다대다: 새로운 기본 키 사용
    
    - 새로운 기본 키
        
        책에서 추천하는 기본 키 생성 전략은 DB에서 자동으로 생성해주는 대리 키를 Long 값으로 사용하는 것이다. 다음과 같은 장점이 있다.
        
        - 간편하다.
        - 거의 영구히 쓸 수 있다.
        - 비즈니스에 의존하지 않는다.
        - ORM 매핑 시에 복합 키를 만들지 않아도 되므로 매핑을 간소화 할 수 있다.
        
        | Member | ORDER or ORDERS | Product |
        | --- | --- | --- |
        | MEMBER_ID(PK) | ORDER_ID(PK) | PRODUCT_ID(PK) |
        | USERNAME | MEMBER_ID(FK) | NAME |
        |  | PRODUCT_ID(FK) |  |
        |  | ORDERAMOUNT |  |
        |  | ORDERDATE |  |
        
        <aside>
        📢  order는 일부 데이터 베이스의 예약어인 경우가 있어 orders를 사용하기도함.
        
        </aside>
        
        [주문 엔티티]
        
        ```java
        @Entity
        public class Order {
        
        		@Id @GeneratedValue
        		@Column(name = "ORDER_ID")
        		private Long id;
        
        		@ManyToOne
        		@JoinColumn(name = "MEMBER_ID")
        		private Member member;
        
        		@ManyToOne
        		@JoinColumn(name = "PRODUCT_ID")
        		private Product product;
        
        		private int orderAmount;
        	
        		// ...
        }
        ```
        
        [회원 엔티티]
        
        ```java
        @Entity
        public class Member {
        
        		@Id @Column(name ="MEMBER_ID")
        		private Long id;
        
        		private String username;
        
        		// 역방향
        		@OneToMany(mappedBy = "member")
        		private List<MemberProduct> memberProducts;
        }
        ```
        
        [상품 엔티티]
        
        ```java
        @Entity
        public class Product {
        
        		@Id @Column(name ="PRODUCT_ID")
        		private Long id;
        
        		private String name;
        }
        ```
        
        ### * 저장
        
        ```java
        public void save() {
        
        		// 회원 저장
        		Member member = new Member();
        		member.setId("member");
        		member.setUsername("회원");
        		em.persist(member);
        
        		// 상품 저장
        		Product product = new Product();
        		product.setId("product");
        		product.setName("상품");
        		em.persist(product);
        
        		// 주문 저장
        		Order order = new Order();
        		order.setMember(member);
        		order.setProduct(product);
        		order.setOrderAmount(2);
        		em.persist(order);
        }
        ```
        
        ### * 조회
        
        ```java
        public void find() {
        
        		Long orderId = 1L;
        		Order order = em.find(Order.class, orderId);
        		
        		Member member = order.getMember();
        		Product product = order.getProduct();
        }
        ```
        
    
    ## ⭐다대다 연관관계 정리
    
    다대다 관계를 일대다 다대일 관계로 풀어내기 위해 연결 테이블을 만들 때 식별자를 어떻게 구성할지 선택해야한다.
    
    - 식별 관계 → 받아온 식별자를 기본 키 + 외래 키로 사용한다.
    - 비식별 관계 → 받아온 식별자는 외래 키로만 사용하고 새로운 식별자를 추가한다.