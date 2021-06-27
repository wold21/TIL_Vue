# DI

## Object Dependencies(객체 의존성)

현재 객체가 다른 객체와 상호작용하고 있다면 현재 객체는 다른 객체에 **의존성**을 가진다.

```java
public class Lette{
	private BaseCoffee coffee;
    
    public Latte(){
    	this.coffee = new Espresso();
    }
}
```

> Latte라는 객체는 coffee타입의 객체(Espresso)에 의존한다. 생성자를 통해 Espresso를 생성했기 때문.
>
> 굉장히 긴밀하게 결합된 상태이다.



### 의존성이 위험한 이유

1. Latte객체는 BaseCoffee 객체의 생성을 제어하기 떄문에 두 객체 간에는 긴밀한 결합(tight coupling)이 생기고 BaseCoffee 객체를 변경하면  Lette 객체도 변경된다.
2. 하나의 모듈(BaseCoffee)이 바뀌면 그것을 의존한 다른 모듈(Latte)까지 변경이 된다.
3. 또한 두 객체 사이의 의존성이 존재하면 Unit Test작성이 어려워진다.
   - 아직 테스트 코드를 짜본 적이 없어서 이해가 안됨.



## Dependency Injection(의존성 주입) -> DI

- 각 클래스간의 의존관계를 빈 설정을 바탕으로 컨테이너가 자동으로 연결해주는 것을 말한다.

  - 실행 시에 설정내용에 따라 동적으로 의존관계가 생성됨.
  - 빈 설정을 개발자가 설정 파일로 설정을 해주면 컨테이너가 정보를 읽어 자동으로 생성해주고 조립해준다.

- 객체가 아니라 FrameWork에 의해 객체의 의존성이 주입되는 설계 패턴

  - FrameWork에 의해 동적으로 주입되므로 여러 객체 간의 결합이 줄어든다.

  - DI는 SpringFrameWork에서 지원하는 IoC 형태

    <img src="https://tva1.sinaimg.cn/large/008i3skNgy1grwscd9cj0j30nk0e8q5l.jpg" alt="스크린샷 2021-06-27 오후 2.59.47" style="zoom:50%;" />

    > 그림에 보이는대로 Container가 bean객체를 생성하고 종속성을 주입한다.
    >
    >
    > IoC(제어의 역전) : 프로그램 제어권을 FrameWork가  가져가는 것.
    >
    > - 개발자가 모든 제어의 중심이지만 코드 전체에 대한 제어는 FrameWork가 한다.
    > - 개발자가 설정(xml, annotation 등)만 하면 Container가 알아서 처리한다.
    > - 그렇기에 FrameWork이다.
    >
    > 따라서 IoC는 DI를 통해 완성된다.

    

### 장점

1. 종속성이 감소한다.

   - 변경에 민감하지 않음.
   - 컴포넌트 간의 결합도가 제거된다.

2. 재사용성이 증가한다.

   - 일부 인터페이스의 다른 구현이 필요한 경우, 코드 변경할 필요없이 해당 구현을 사용하도록 Components를 구성할 수 있다.

     > 컴포넌트 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈을 뜻한다.

3. 더 많은 테스트 코드를 만들 수 있다.

4. 코드 읽기가 쉽다.

> 아직 몸에 와닿지 않은 장점들이다.



### 유형

1. Setter Injection (Setter 메서드를 이용한 의존성 삽입)
   - 의존성을 입력 받는 setter 메서드를 만들고 이를 통해서 의존성을 주입한다.
2. Constructor Injection (생성자를 이용한 의존성 삽입)
   - 필요한 의존성을 포함하는 클래스의 생성자를 만들고 이를 통해 의존성을 주입한다.
3. Method Injection (일반 메서드를 이용한 의존성 삽입)
   - 의존성을 입력 받는 일반 메서드를 만들고 이를 통해 의존성을 주입한다.







