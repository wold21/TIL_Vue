# 연관관계 매핑 기초

객체는 `참조`를 통하여 서로와 연관 관계를 맺고 데이터 중심에서는 `외래키`를 가지고 관계를 맺는다. 객체 관계 매핑에서 가장 어려운 부분이 바로 객체 연관관계와 테이블 연관 관계를 매핑하는 일이다. 

**객체의 참조와 데이터의 외래 키를 매핑하는 것이 이 장의 목표이다.**  

- **방향**
    - 단방향, 양방향이 있다. 예들 들어 회원과 팀이 관계가 있을 때 회원 → 팀 또는 팀 → 회원 둘 중 한 쪽만 참조하는 것을 단방향 관계라 하고, 회원 → 팀, 팀 → 회원 양쪽 모두 서로 참조하는 것을 `양방향 관계`라한다. 방향은 객체관계에서만 존재하고 테이블 관계는 항상 양방향이다.
- **다중성**
    - [다대일, 일대다, 일대일, 다대다] 다중성이 있다. 예를 들어 회원과 팀이 관계가 있을 때 여러 회원은 한 팀에 속하므로 회원과 팀은 다대일 관계이다. 반대로 한 팀에 여러 회원이 소속될 수 있으므로 팀과 회원은 일대다 관계다.
- **연관 관계 주인**
    - 객체를 양방향 연관 관계로 만들면 연관관계 주인을 정해야한다.
    - CRUD를 할때 주체가 되어야할 엔티티(객체)


# 5.1

- 단방향 연관관계
    
    연관관계 중에선 다대일 단방향 관계를 가장 먼저 이해해야한다. 지금부터 회원과 팀의관계를 통해 다대일 단방향 관계를 알아보자.
    
    - 회원과 팀이 있다.
    - 회원은 하나의 팀에만 소속될 수 있다.
    - 회원과 팀은 다대일 관계다.
    
    [객체 연관관계]
    
    | Member | Team |
    | --- | --- |
    | id
    Team team
    username | id
    name |
    - 회원 객체는 Member.team 필드로 팀 객체와 연관관계를 맺는다.
    - 회원과 팀은 단방향 관계다 회원은 Member.team로 팀을 알 수 있지만 반대로 팀은 알 수 없다. 팀 객체에 회원을 참조할 수 있는 필드가 없기 때문이다.
    
    [테이블 연관관계]
    
    | Member | Team |
    | --- | --- |
    | MEMBER_ID(PK)
    TEAM_ID(FK)
    USERNAME | TEAM_ID(PK)
    NAME |
    - 회원은 TEAM_ID FK로 팀과 연관관계를 맺는다.
    - 회원과 팀은 양방향 관계이다.
    - 회원 테이블의 TEAM_ID하나로 회원과 팀 테이블 모두를 조회할 수 있다.
    
    - 객체 연관관계와 테이블 연관관계의 가장 큰 차이
        
        참조를 통한 연관관계는 언제나 단방향이다. 만약 양방향으로 만들고 싶다면 각각의 엔티티에 필드를 추가해서 참조를 보관해야한다. 그렇지만 엄밀히 따지자면 양방향이 아니라 서로 다른 방향의 단뱡향 두개라고 볼 수 있다. 
        
    
    ## ⭐순수한 객체 연관관계
    
    순수한 객체만 사용한 연관관계는 아래와 같다, jpa를 사용하지 않은 순수한 회원과 팀 클래스 코드이다.
    
    ```java
    public class Member {
    		
    		private String id;
    		private String username;
    
    		private Team team; // 팀의 참조를 고봔
    
    		public void setTeam(Team team) {
    				this.team = team;
    		}
    
    		// Getter, Setter
    }
    
    public class Team {
    
    		private String id;
    		private String name;
    
    		// Getter, Setter
    }
    ```
    
    다음 두명의 회원을 생성하고 팀하나에 소속시켜보자.
    
    ```java
    public static void main(String[] args) {
    		
    		// 생성자(id, 이름)
    		Member member1 = new Member("member1", "회원1");
    		Member member2 = new Member("member2", "회원2");
    
    		Team team1 = new Team("team1", "팀1");
    
    		member1.setTeam(team1);
    		member1.setTeam(team1);
    
    		Team findTeam = member1.getTeam();
    }
    ```
    
    이처럼 객체는 참조를 통해서 연관관계를 탐색할 수 있는데 이것을 `객체 그래프 탐색`이라고 한다. 
    
    ## ⭐테이블 연관관계
    
    위는 객체 타입이었다면 이번엔 DB로 연관관계를 맺어보자.
    
    ```sql
    CREATE TABLE MEMBER (
    		MEMEBER_ID VARCHAR(255) NOT NULL,
    		TEAM_ID VARCHAR(255),
    		USERNAME VARCHAR(255),
    		PRIMARY KEY (MEMBER_ID)
    )
    
    CREATE TABLE TEAM (
    		TEAM_ID VARCHAR(255) NOT NULL,
    		NAME VARCHAR(255),
    		PRIMARY KEY (TEAM_ID)
    )
    
    ALTER TABLE MEMBER ADD CONSTRAINT FK_MEMBER_TEAM
    		FOREIGN KEY (TEAM_ID)
    		REFERENCES TEAM
    
    -- 다음의 SQL을 실행하여 회원1과 회원2를 팀 1에 소속시키자.
    INSERT INTO TEAM(TEAM_ID, NAME) VALUE('team1', '팀1');
    INSERT INTO MEMBER(MEMBER_ID, TEAM_ID, USERNAME)
    	VALUE('member1', 'team1', '회원1');
    INSERT INTO MEMBER(MEMBER_ID, TEAM_ID, USERNAME)
    	VALUE('member2', 'team1', '회원2');
    
    -- 그리고 조인을 사용하여 조회
    SELECT *
    	FROM MEMBER M
    	JOIN TEAM T ON M.TEAM_ID = T.TEAM_ID
     WHERE M.MEMBER_ID = 'member1';
    ```
    
    ## ⭐객체 관계 매핑(JPA 사용)
    
    **[회원 클래스]**
    
    ```java
    @Entity
    public class Member {
    		
    		@Id
    		@Column(name = "MEMBER_ID")
    		private String id;
    
    		private String username;
    
    		// 연관관계 매핑
    		@ManyToOne
    		@JoinColumn(name = "TEAM_ID")
    		private Team team;
    	
    		// 연관관계 설정
    		public void setTeam(Team team) {
    				this.team = team;
    		}
    
    		// Getter, Setter
    }
    ```
    
    **[팀 클래스]**
    
    ```java
    @Entity
    public class Team {
    		
    		@Id
    		@Column(name = "TEAM_ID")
    		private String id;
    
    		private String name;
    
    		// Getter, Setter
    }
    ```
    
    | @ManyToOne | 이름 그대로 다대일 관계라는 매핑 정보다. (회원과 팀은 다대일 관계이므로) 연관관계를 매핑할 때 이렇게 다중성을 나타내는 어노테이션을 필수로 사용해야한다. |
    | --- | --- |
    | @JoinColumn(name = "TEAM_ID") | 조인 컬럼은 외래키를 매핑할 때 사용한다. name 속성에는 매핑할 외래키 이름을 지정한다. 회원과 팀 테이블은 TEAM_ID로 연관관계를 맺으므로 이 값을 지정하면 된다. (생략가능한 어노테이션) |
    
    ## ⭐@JoinColumn
    
    | 속성 | 기능 | 기본값 |
    | --- | --- | --- |
    | name | 매핑할 외래 키 이름 | 필드명 + _ + 참조하는 테이블의 기본 키 컬럼명 (생략시 (필드명)+_+(참조하는 테이블의 컬럼명) ex. team_TEAM_ID) |
    | referencedColumnName | 외래 키가 참조하는 대상 테이블의 컬럼명 | 참조하는 테이블의 기본 키 컬럼명 |
    | foreignKey(DDL) | 외래 키 제약조건을 직접 지정할 수 있다. 이속성은 테이블을 생성할 때만 사용한다. |  |
    | unique
    nullable
    insertable
    updatable
    columnDefinition
    table | @Column의 속성과 같다. |  |
    
    ## ⭐@ManyToOne
    
    @ManyToOne은 다대일 관계에서 사용한다.
    
    | 속성 | 기능 | 기본값 |
    | --- | --- | --- |
    | optional | false로 설정하면 연관된 엔티티가 항상 있어야한다. | true |
    | fetch | 글로벌 페치 전략을 설정한다.  | @ManyToOne = FetchType.EAGER
    @OneToMany = FetchType.LAZY |
    | cascade | 영속성 전이 기능을 사용한다. |  |
    | targetEntity | 연관된 엔티티의 타입 정보를 설정한다. 이 기능은 거의 사용하지 않는다. 컬렉션을 사용해도 제네릭으로 타입 정보를 알수있다. |  |
    - targetEntity 사용 예시
        
        ```java
        @OneToMany
        private List<Member> members; // 제네릭으로 타입 정보를 알 수 있다.
        
        @OneToMany(targetEntity=Member.class)
        private List members; // 제네릭이 없으면 타입 정보를 알 수 없다.
        ```
        
    
    <aside>
    💡 다대일과 비슷한 일대일 관계도 있다. 단방향 관계를 매핑할 때 둘 중 어느 것을 사용해야 할지는 반대편 관계에 달려있다. 반대편이 일대다 관계면 다대일을 사용하고 반대편이 일대일 관계면 일대일을 사용하면 된다.
    
    </aside>
    

# 5.2

- 연관관계 사용
    
    ## ⭐저장
    
    ```java
    public void testSave(){
    		// 팀 1 저장
    		Team team1 = new Team("team1", "팀1");
    		em.persist(team1);
    
    		// 회원1 저장
    		Member member1 = new Member("member1", "회원1");
    		member1.setTeam(team1); // 연관관계 설정 member1 -> team1
    		em.persist(member1);
    
    		// 회원2 저장
    		Member member2 = new Member("member2", "회원2");
    		member2.setTeam(team1); // 연관관계 설정 member2 -> team1
    		em.persist(member2);
    }
    ```
    
    <aside>
    ⚠️ JPA에서 엔티티를 저장할 때 연관된 모든 엔티티는 영속 상태여야 한다.
    
    </aside>
    
    회원 엔티티는 team1을 참조하고 저장했다. jpa는 참조한 팀의 식별자를 외래키로 사용해서 적정한 등록 쿼리를 생성한다. 이때 실행된 sql은 다음과 같다.
    
    ```sql
    INSERT INTO TEAM (TEAM_ID, NAME) VALUES ('team1', '팀1')
    INSERT INTO MEMBER (MAMBER_ID, NAME, TEAM_ID) VALUES ('member1', '회원1', 'team1')
    INSERT INTO MEMBER (MAMBER_ID, NAME, TEAM_ID) VALUES ('member2', '회원2', 'team1')
    ```
    
    ## ⭐조회
    
    연관관계가 있는 엔티티를 조회하는 방법은 크게 2가지이다.
    
    - 객체 그래프 탐색 (객체 연관관계를 사용한 조회)
        - 객체 그래프 탐색
            
            ```sql
            -- member.getTeam()을 통해서 member와 연관된 team 엔티티를 조회할 수 있다.
            Member member = em.find(Member.class, "member1");
            Team team = member.getTeam();
            System.out.println("팀 이름 = " + team.getName());
            ```
            
    - 객체 지향 쿼리 사용 (JPQL)
        - JPQL
            
            객체 지향 쿼리는 어떻게 연관관계를 사용하는지 보자. 
            
            예를 들어 회원을 대상으로 조회하는데 팀1에 소속된 회원만 조회하려면 회원과 연관된 팀 엔티티를 검색 조건으로 사용해야한다. sql 연관된 테이블을 조인해서 검색조건을 사용하면 된다. 물론 jpql도 조인을 지원한다. 
            
            ```java
            private static void queryLogicJoin(EntityManager em) {
            		
            		String jpql = "select m from Member m join m.team t where " + 
            				"t.name=:teamName";
            
            		List<Member> resultList = em.createQuery(jpql, Member.class)
            				.setParameter("teamName", "팀1")
            				.getResultList();
            
            		for(Member member : resultList) {
            				System.out.println("[query] member.username=" + 
            						member.getUsername()));
            		}
            }
            ```
            
            `from Member m join m.team t` 부분을 통해서 회원이 팀과 관계를 가지고 있는 필드(m.team)을 통해서 Member와 Team을 조인했다. 그리고 where 절을 보면 조인한 t.name을 검색 조건으로 사용해서 팀 1에 속한 회원만 검색했다. :teamName은 createQuery에서 던져준 파라미터 값이 들어가게 된다. 키 밸류 형식으로 jpql과 매핑된다. 실행되는 sql은 여타 DB 쿼리처럼 조인하여 파라미터 값으로 값을 조회한다. 
            
    
    ## ⭐수정
    
    팀 1 소속이던 회원을 새로운 팀2에 소속하도록 수정해보자.
    
    ```java
    private static void updateRelation(EntityManager em) {
    		
    		// 새로운 팀2
    		Team team2 = new Team("team2", "팀2");
    		em.persist(team2);
    
    		// 회원 1에 새로운 팀2 설정
    		Member member = em.find(Member.class, "member1");
    		member.setTeam(team2);
    }
    ```
    
    이후 트랜잭션을 커밋할때 플러시가 일어나면서 자동으로 반영된다. 참고로 연관관계 수정에 대해서도 같은 로직으로 처리된다, 아래에서 살펴보자.
    
    ## ⭐연관관계 제거
    
    회원 1에 연관되어있는 team을 제거해보자.
    
    ```java
    private static void deleteRelation(EntityManager em) {
    
    		// 회원 1에 새로운 팀2 설정
    		Member member = em.find(Member.class, "member1");
    		member.setTeam(null);
    }
    ```
    
    이때 실행되는 쿼리는 다음과 같다.
    
    ```sql
    UPDATE MEMBER
    	SET 
    		TEAM_ID = null,...
    	WHERE 
    		ID = 'member1';
    ```
    
    ## ⭐연관된 엔티티 제거
    
    무작정 team을 삭제할 수는 없다. 기존에 연관관계를 우선 제거한 후에 삭제해야한다. 그렇지 않으면 외래 키 제약 조건으로 인해 DB에서 오류가 발생한다.
    
    ```java
    member1.setTeam(null);
    member2.setTeam(null);
    em.remove(team);
    ```
    

# 5.3

- 양방향 연관관계
    
    지금까지 회원에서 팀으로만 접근하는 다대일 단방향 매핑을 알아보았다. 이번에는 반대 방향도 추가해보자. 그래서 두 테이블이 상대편의 테이블에 접근 할 수 있도록 말이다. 
    
    먼저 회원은 팀 입장에서 일대다 관계기 때문에 List 타입으로 Member를 받아야 한다. 
    
    - 회원 → 팀 (Member.team)
    - 팀 → 회원 (Team.members)
    
    <aside>
    💡 List 외에 Collection, Set, Map 같은 다양한 컬렉션을 지원한다.
    
    </aside>
    
    ## ⭐양방향 연관관계 매핑
    
    [회원 엔티티]
    
    ```java
    @Entity
    public class Member {
    		
    		@Id
    		@Column(name = "MEMBER_ID")
    		private String id;
    
    		private String username;
    
    		// 연관관계 매핑
    		@ManyToOne
    		@JoinColumn(name = "TEAM_ID")
    		private Team team;
    	
    		// 연관관계 설정
    		public void setTeam(Team team) {
    				this.team = team;
    		}
    
    		// Getter, Setter
    }
    ```
    
    [팀 엔티티]
    
    ```java
    @Entity
    public class Team {
    		
    		@Id
    		@Column(name = "TEAM_ID")
    		private String id;
    
    		private String name;
    		
    		// 추가 
    		@OneToMany(mappedBy = "team")
    		private List<Member> members = new ArrayList<Member>();
    
    		// Getter, Setter
    }
    ```
    
    일대다 관계를 매핑하기 위해 @OneToMany를 사용하였고 mappedBy 속성은 양방향 매핑일때 사용하는데 반대쪽 매핑의 필드 이름을 값으로 주면 된다. 
    
    ## ⭐일대다 컬렉션 조회
    
    팀에서 회원 컬렉션으로 객체 그래프 탐색을 사용해서 회원을 조회한다.
    
    ```java
    public void biDirection(){
    		
    		Team team = em.find(Team.class, "team1");
    		List<Member> members = team.getMembers(); // 팀 -> 회원 (객체 그래프 탐색)
    
    		for (Member member : members) {
    				System.out.println("member.username = " + member.getUsername());
    		}
    }
    ```
    

# 5.4

- 연관관계의 주인
    
    @OneToMany를 직관적으로 일대다라고 이해가 가능한데 mappedBy속성이 필요한 이유는 뭘까? 앞서 말했듯이 객체에는 양방향 관계라는 것이 없는데 객체에서 양방향을 구현하려면 회원 → 팀, 팀 → 회원으로 2가지 포인트를 관리해야 할것이다. 엔티티를 양뱡향 연관관계로 설정하면 객체의 참조는 둘인데 외래 키는 하나다. 따라서 둘 사이에 차이가 발생한다. (데이터의 불균형?)
    
    이런 차이로 인헤 jpa에서는 두 객체 연관관계 중 하나를 정해서 테이블의 외래 키를 관리해야하는데 이것을 연관관계의 주인이라 한다. 
    
    ## ⭐양방향 매핑의 규칙: 연관관계의 주인
    
    양방향 연관관계 매핑 시 지켜야 할 규칙이 있는데 두 연관관계  중 하나를 연관관계의 주인으로 정해야한다.
    
    - 연관관계 주인만이 DB 연관관계와 매핑되고 외래 키를 관리(등록, 수정, 삭제) 할 수 있다.
    - 주인이 아닌 반대편은 읽기만 가능하다.
    - 어떤 연관관계를 주인으로 정할지는 mappedBy 속성을 사용하면 된다.
    - 주인은 mappedBy 속성을 사용하지 않는다.
    - 주인이 아니면 mappedBy 속성을 사용해서 속성의 값으로 연관관계의 주인을 지정해야한다.
    - 연관관계의 주인을 정한다는 것은 사실 외래 키 관리자를 선택하는 것이다.
    
    ## ⭐연관관계의 주인은 외래 키가 있는 곳
    
    한마디로 정리하면 연관관계의 주인은 테이블에 외래 키가 있는 곳으로 정해야한다. 위의 예제에서는 회원 테이블이 외래 키(team)을 가지고 있으므로 Member.team이 주인이 된다. 주인이 아닌 Team.memebers에는 mappedBy=”team” 속성을 사용해서 주인이 아님을 설정한다. 
    
    ```java
    class team {
    		@OneToMany(mappedBy="team") // mappedBy 속성의 값은 연관관계의 주인인 Member.team
    
    		private List<Member> members = new ArrayList<Member>();
    }
    ```
    
    <aside>
    💡 DB 테이블의 다대일, 일대다 관계에서는 항상 다 쪽이 외래 키를 가진다. 다 쪽인 @ManyToOne은 항상 연관관계의 주인이 되므로 mappedBy를 설정할 수 없다. 따라서 @ManyToOne에는 mappedBy속성이 없다.
    
    </aside>
    

# 5.5

- 양방향 연관관계 저장
    
    양방향 연관관계를 사용해서 팀1, 회원1~2를 저장해보자.
    
    ```java
    public void testSave() {
    		
    		// 팀1 저장
    		Team team1 = new Team("team1", "팀1");
    		em.persist(team1);
    
    		// 회원1 저장
    		Member member1 = new Member("member1", "회원1");
    		member1.setTeam(team1);
    		em.persist(member1);
    
    		// 회원2 저장
    		Member member2 = new Member("member2", "회원2");
    		member1.setTeam(team1);
    		em.persist(member2);
    }
    ```
    

# 5.6

- 양방향 연관관계의 주의점
    
    가장 많이 하는 실수는 주인에는 값을 입력하지 않고 주인이 아닌 곳에만 값을 입력하는 것이다. DB에 외래 키 값이 정상적으로 저장되지 않으면 이것부터 의심해보자. 
    
    - 위에 문제에 해당하는 영상.
        
        [https://youtu.be/brE0tYOV9jQ](https://youtu.be/brE0tYOV9jQ)
        
    
    그 실수는 아래와 같다.
    
    ```java
    public void testSaveNonOwner() {
    
    		// 회원1 저장
    		Member member1 = new Member("member1", "회원1");
    		em.persist(member1);
    
    		// 회원2 저장
    		Member member2 = new Member("member2", "회원2");
    		em.persist(member2);
    
    		// 팀1 저장
    		Team team1 = new Team("team1", "팀1");
    		team1.getMembers().add(member1);
    		team1.getMembers().add(member1);
    		em.persist(team1);
    }
    ```
    
    | MEMBER_ID | USERNAME | TEAM_ID |
    | --- | --- | --- |
    | member1 | 회원1 | null |
    | member2 | 회원2 | null |
    
    연관관계의 주인이 아닌 Team.members에만 값을 저장했기 때문에 TEAM_ID는 null이다. 연관관계의 주인만이 외래 키의 값을 변경할 수 있다. 
    
    ## ⭐순수한 객체까지 고려한 양방향 연관관계
    
    지금까지는 연관관계의 주인에만 값을 저장하고 주인이 아닌 곳에는 값을 저장하지 않았다. 하지만 `객체`를 이런 방식으로 운용하는 것이 맞을까? 
    
    객체의 관점에서는 양쪽 방향에 모두 값을 입력해주는 것이 가장 안전하다. 양쪽 방향 모두 값을 입력하지 않으면 jpa를 사용하지 않는 순수한 객체 상태에서 심각한 문제가 발생할 수 있다.
    
    ```java
    public void test순수한객체_양방향() {
    		
    		// 팀1 저장
    		Team team1 = new Team("team1", "팀1");
    		Member member1 = new Member("member1", "회원1");
    		Member member2 = new Member("member2", "회원2");
    
    		member1.setTeam(team1);
    		team1.getMembers().add(member1);
    
    		member2.setTeam(team1);
    		team1.getMembers().add(member2);
    
    		List<Member> members = team1.getMembers();
    		System.out.println("members.size = " + members.size()); 
    		// members.size = 2
    }
    ```
    
    이제 객체를 고려한 jpa를 사용해보자
    
    ```java
    public void testORM_양방향() {
    		
    		// 팀1 저장
    		Team team1 = new Team("team1", "팀1");
    		em.persist(team1);
    
    		Member member1 = new Member("member1", "회원1");
    
    		// 양방향 연관관계 설정
    		member1.setTeam(team1);
    		team1.getMembers().add(member1); // 주인이 아니다 따라서 저장 시에 사용되지 않는다.
    		em.persist(member1); 
    
    		Member member1 = new Member("member2", "회원2");
    
    		// 양방향 연관관계 설정
    		member2.setTeam(team1);
    		team1.getMembers().add(member2); // 주인이 아니다 따라서 저장 시에 사용되지 않는다.
    		em.persist(member2); 
    }
    ```
    
    이렇게 작성해주면 순수한 객체의 측면에서도 사용이 가능하고 테이블의 외래 키도 정상 입력된다.
    
    - 객체의 양방향 연관관계는 양쪽 모두 관계를 맺어주자.
    
    ## ⭐연관관계 편의 메소드
    
    위처럼 양방향 연관관계는 결국 양쪽 다 신경을 써야한다. 둘 중에 하나만 빼먹어도 DB에 반영이 안될 수 있고 순수한 객체로서 동작하지 않을 수 있다. member.setTeam(team)과 team.getMembers().add(member)를 각각 호출하다 보면 실수로 둘 중 하나만 호출해서 양방향이 깨질 수 있다. 그러므로 양방향 관계에서 두 코드는 하나인 것처럼 사용하는 것이 안정하다.
    
    Member 클래스의 setTeam() 메소드와 전체 코드를 리팩토링해보자.
    
    ```java
    public class Member {
    		
    		private Team team;
    
    		public void setTeam(Team team) {
    			this.team = team;
    			team.getMembers.add(this);
    		}
    }
    ```
    
    ```java
    public void testORM_양방향_리팩토링() {
    		
    		// 팀1 저장
    		Team team1 = new Team("team1", "팀1");
    		em.persist(team1);
    
    		Member member1 = new Member("member1", "회원1");
    		member1.setTeam(team1); // 양방향 연관관계 설정
    		em.persist(member1); 
    
    		Member member2 = new Member("member2", "회원2");
    		member2.setTeam(team1); // 양방향 연관관계 설정
    		em.persist(member2); 
    }
    ```
    
    ## ⭐연관관계 편의 메소드 작성 시 주의사항
    
    사실 setTeam() 메소드에는 버그가 있다.(리팩토링 전에도.)
    
    ```java
    member1.setTeam(teamA);
    member1.setTeam(teamB);
    Member findMember = teamA.getMember(); // member1이 여전히 조회된다.
    ```
    
    팀을 옮긴 이후에도 조회가 된다는 것이 문제인데, 연관관계를 수정할 때는 아래와 같이 기존 관계를 제거한 후 추가해야한다.
    
    ```java
    public void setTeam (Team team) {
    		
    		// 기존 팀과 관계를 제거
    		if(this.team != null) {
    				this.team.getMembers().remove(this);
    		}
    		this.team = team;
    		team.getMembers().add(this);
    }
    ```
    
    어쩌면 객체로 관리하는 것의 단점인 부분일 수 있겠다. DB를 사용한다면 외래 키로 단순하게 문제가 해결되기 때문이다. 객체에서 양방향 연관관계를 사용하려면 로직을 견고하게 작성해야한다.
    
    <aside>
    💡 관계가 삭제되지 않은 관계에서 teamA → member1 관계가 제거되지 않아도 DB 외래 키를 변경하는 데는 문제가 없다. 왜냐하면 teamA → member1 관계를 설정한 Team.members는 연관관계의 주인이 아니기 때문이다. 주인인 Member.team의 참조를 member1 → teamB로 변경했으므로 외래 키는 teamB를 반영한다. 이후 teamA.getMembers()를 호출하면 외래 키 관계가 끊어져 있으므로 아무것도 조회되지 않는다.
    문제는 관계를 변경하고 영속성 컨텍스트가 아직 살아있는 상태에서 teamA의 getMembers()를 호출하면 member1이 반환된다는 점이다. 따라서 변경된 연관관계는 즉각 제거를 하는 것이 안전하다.
    
    </aside>
    

# 5.7

- 정리
    
    단방향 매핑과 비교해서 양방향 매핑은 복잡한 편이다. 주인도 정해야하고 로직도 추가되어야한다. 중요한 사실은 연관관계가 하나인 단방향 매핑은 언제나 연관관계의 주인이라는 점이다. 양방향은 여기에 주인이 아닌 연관관계를 하나 추가했을 뿐이다. 결국 단방향과 다른 점은 반대 방향으로 객체 그래프 탐색 기능이 추가된 것 뿐이다.
    
    ```java
    member.getTeam(); // 회원 -> 팀
    team.getMembers(); // 팀 -> 회원 (양방향 매핑으로 추가된 기능)
    ```
    
    주인의 반대편은 mappedBy로 주인을 지정해야한다. 그리고 주인의 반대편은 단순히 조회하는 일만 할 수있다. 정리하면 다음과 같다.
    
    - 단방향 매핑만으로 테이블과 객체의 연관관계 매핑은 이미 완료되었다.
    - 단방향을 양방향으로 만들면 반대 방향으로 객체 그래프 탐색 기능이 추가된다.
    - 양방향 연관관계를 매핑하려면 객체에서 양쪽 방향을 모두 관리해야한다.
    
    <aside>
    ⚠️ 양방향 매핑 시에는 무한 루프에 빠지지 않게 조심해야한다. 예를 들어 Member.toString()에서 getTeam()을 호출하고 Team.toString()에서 getMember()를 호출하면 무한 루프에 빠질 수 있다. 이런 문제는 엔티티를 JSON으로 변환할 때 자주 발생하는데 JSON 라이브러리들은 보통 무한루프에 빠지지 않도록 하는 어노테이션이나 기능을 제공한다. (Lombok에서도 발생한다.)
    
    </aside>
    
    <aside>
    📢 일대다를 연관관계의 주인으로 선택하는 것이 불가능한 것만은 아니다. 예를 들어 팀 엔티티의 Team.members를 연관관계의 주인으로 선택하는 것이다. 하지만 성능과 관리 측면에서 권장하지 않는다. 될 수 있으면 외래 키가 있는 곳을 연관관계 주인으로 선택하자.
    
    </aside>