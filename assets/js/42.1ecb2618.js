(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{487:function(t,o,e){t.exports=e.p+"assets/img/port.7dd33746.png"},488:function(t,o,e){t.exports=e.p+"assets/img/internet_protocol.dd8f34e3.png"},489:function(t,o,e){t.exports=e.p+"assets/img/socket_connection.bbd91f30.png"},556:function(t,o,e){"use strict";e.r(o);var r=e(17),a=Object(r.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"socket-port-tcp-connection-1부"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#socket-port-tcp-connection-1부"}},[t._v("#")]),t._v(" Socket, Port, TCP connection 1부")]),t._v(" "),o("h2",{attrs:{id:"osi-7-layer와-tcp-ip-stack의-차이"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#osi-7-layer와-tcp-ip-stack의-차이"}},[t._v("#")]),t._v(" OSI 7 layer와 TCP/IP stack의 차이")]),t._v(" "),o("ul",[o("li",[t._v("OSI 7 layer는 네트워크 시스템 구성을 위한 범용적이고 "),o("code",[t._v("개념적인 모델")]),t._v(" "),o("ul",[o("li",[t._v("관리 주체 : ISO/IEC")])])]),t._v(" "),o("li",[t._v("TCP/IP stack은 인터넷이 발명되면서 함께 개발된 "),o("code",[t._v("프로토콜 스택")]),t._v(" "),o("ul",[o("li",[t._v("관리 주체 : IETF에서 인터넷 표준을 관리(RFC 문서)")]),t._v(" "),o("li",[t._v("TCP, UDP, IP 등의 스펙은 RFC에서 정의")])])])]),t._v(" "),o("p",[t._v("그래서 사실 인터넷에서 실제 사용되고 있는 모델은 TCP/IP stack이라고 생각하면 된다.")]),t._v(" "),o("h2",{attrs:{id:"tcp-ip-stack"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-stack"}},[t._v("#")]),t._v(" TCP/IP stack")]),t._v(" "),o("h3",{attrs:{id:"system"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#system"}},[t._v("#")]),t._v(" System")]),t._v(" "),o("p",[o("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("transport")]),t._v(", "),o("span",{staticStyle:{color:"green","font-weight":"bold"}},[t._v(" internet layer")]),t._v(", "),o("span",{staticStyle:{color:"#005666","font-weight":"bold"}},[t._v("link layer")]),t._v("는 하드웨어나 펌웨어 혹은 OS 레벨에서 구현/관리하고 있으며 네트워크 기능을 "),o("code",[t._v("지원")]),t._v("하는데 목적이 있다.")]),t._v(" "),o("h3",{attrs:{id:"application"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[t._v("#")]),t._v(" Application")]),t._v(" "),o("p",[t._v("반면에 "),o("span",{staticStyle:{color:"orange","font-weight":"bold"}},[t._v("application layer")]),t._v("는 어플리케이션 레벨에서 구현되거나 관리하며 네트워크 기능을 "),o("code",[t._v("사용")]),t._v("하는데 목적이 있다.")]),t._v(" "),o("h2",{attrs:{id:"port"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" Port")]),t._v(" "),o("p",[t._v("TCP/IP stack은 이제 크게 애플리케이션과 시스템으로 나누어 살펴볼 수 있다. 애플리케이션에는 어떤 프로세스가 있고 이 프로세스가 네트워크 통신을 하고 싶다고 하면 시스템 영역과 연결하여 통신을 해야하는데 이때 통로 역할을 해주는 것이 바로 port이다.")]),t._v(" "),o("img",{attrs:{src:e(487),alt:"port",height:"300"}}),t._v(" "),o("p",[t._v("프로세스는 하나의 포트를 필요로 하기도 하지만 여러개의 포트를 필요로 하기도 한다. 각 포트는 port name을 가지고 있어 이를 통해 식별한다. 이제 이 포트를 통해서 서로 떨어져있는 프로세스가 통신할 수 있게 되는데 이때 시스템 영역은 internet protocol을 사용하여 통신을 하게 된다. internet protocol은 신뢰할 수 없는 프로토콜인데 그 이유는 전송 중 데이터가 유실되거나 보내는 순서대로 받지 못할 수 있기 때문이다. 대신 속도가 빠르다는 장점이 있다.")]),t._v(" "),o("blockquote",[o("p",[t._v("Internet Protocol?"),o("br"),t._v("\n하나의 프로세서에서 다른 프로세서로 데이터를 보내는 프로토콜")])]),t._v(" "),o("img",{attrs:{src:e(488),alt:"internet_protocol",height:"300"}}),t._v(" "),o("p",[t._v("그래서 프로세스간 데이터를 안정적으로 주고 받을 수 있는 프로토콜의 필요성이 생겼다. 그렇게 개발된 것이 바로 TCP(transmission control protocol)이다. TCP는 internet protocol위에서 동작하지만 어떠한 개념으로 인해 프로세스 간 통신을 안정적으로 할 수 있게 하였다.")]),t._v(" "),o("h3",{attrs:{id:"tcp-rec-793-connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tcp-rec-793-connection"}},[t._v("#")]),t._v(" TCP(REC 793) Connection")]),t._v(" "),o("h4",{attrs:{id:"connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[t._v("#")]),t._v(" Connection")]),t._v(" "),o("p",[t._v("프로세스 간의 안정적이로 논리적인 통신 통로")]),t._v(" "),o("ol",[o("li",[t._v("connection을 열고\n"),o("ul",[o("li",[t._v("3-way handshaking 방식을 사용함.")])])]),t._v(" "),o("li",[t._v("데이터를 주고 받고")]),t._v(" "),o("li",[t._v("connection을 닫는다.\n"),o("ul",[o("li",[t._v("4-way handshaking 방식을 사용함.\n이러한 과정을 가진 연결 방식을 "),o("code",[t._v("connection-oriented")]),t._v("이다.")])])])]),t._v(" "),o("h3",{attrs:{id:"인터넷-상에서-어떻게-포트를-식별할까"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#인터넷-상에서-어떻게-포트를-식별할까"}},[t._v("#")]),t._v(" 인터넷 상에서 어떻게 포트를 식별할까?")]),t._v(" "),o("p",[t._v("수많은 프로세스들이 통신할 때 포트를 사용하기때문에 포트(number)를 정의할 필요성이 생겼다. 정의는 다음과 같다.")]),t._v(" "),o("blockquote",[o("p",[t._v("16bits로 이루어진 숫자"),o("br"),t._v("\n0부터 65535까지")])]),t._v(" "),o("p",[t._v("그러나 포트 넘버 만으로는 유니크하게 식별할 수가 없어서 internet address(이후 IP로 발전하게 됨.)로 각 host를 유니크하게 식별할 수 있기 때문에 internet address + port number를 사용해서 포트를 유니크하게 구분하기로 하였다. 그리고 이 internet address + port number 두 값을 합쳐 부르게 된 말이 바로 "),o("code",[t._v("Socket")]),t._v("이다. TCP의 세계관에서 소켓이란 인터넷 상에 존재하는 각 port를 유니크하게 식별하기 위한 주소라고 정의하면 된다.")]),t._v(" "),o("h3",{attrs:{id:"connecntion-socket"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecntion-socket"}},[t._v("#")]),t._v(" Connecntion & Socket")]),t._v(" "),o("p",[o("b",[t._v("각 Connecntion은 유니크하게 식별할 수 있어야한다.")]),o("br"),t._v(" "),o("b",[t._v("그러므로 한 쌍의 Socket은 유니크하다")]),o("br"),t._v(" "),o("b",[t._v("src internet addr, src port, dest internet addr, dest port")]),o("br"),t._v(" "),o("b",[t._v("하나의 Socket은 동시에 여러 connecntion들에서 사용될 수 있다.")])]),t._v(" "),o("h3",{attrs:{id:"udp-user-datagram-protocol"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#udp-user-datagram-protocol"}},[t._v("#")]),t._v(" UDP(user datagram protocol)")]),t._v(" "),o("p",[o("b",[t._v("connectionless : ")]),t._v(" 연결을 맺지 않고 바로 데이터를 주고 받는다."),o("br"),t._v(" "),o("b",[t._v("unreliable : ")]),t._v(" internet protocol을 거의 그대로 사용"),o("br"),t._v(" "),o("b",[t._v("UDP 표준(RFC 768)을 보면 socket이라는 단어가 등장하지 않는다.")])]),t._v(" "),o("h2",{attrs:{id:"socket"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#socket"}},[t._v("#")]),t._v(" Socket")]),t._v(" "),o("p",[t._v("그러나 사실 socket이라는 것이 ip에 port number를 합친 개념이라 이후 UDP에서도 socket 개념을 쓰기 시작하게 되는데 정리를 해보자면 Socket은 TCP/IP stack에서 개념적으로 통신을 안정적으로 하기위해 Socket을 발명했다. 그러나 지금은 위처럼 TCP, UDP에서 Socket을 동일하게 사용하기 때문에 이제는 protocol, ip address, port number로 식별하게 된다.")]),t._v(" "),o("img",{attrs:{src:e(489),alt:"socket_connection",height:"300"}}),t._v(" "),o("blockquote",[o("p",[t._v("소켓에서 8282는 오타 -> 8082")])]),t._v(" "),o("h3",{attrs:{id:"주의사항"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#주의사항"}},[t._v("#")]),t._v(" 주의사항")]),t._v(" "),o("p",[t._v("실제로 네트워크 프로그래밍을 할 때는 소켓의 개념과 의미가 미묘하게 다르다. 그 중에서 소켓을 식별하는 방법에서 큰 차이가 있다고 한다.")]),t._v(" "),o("h2",{attrs:{id:"마무리"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#마무리"}},[t._v("#")]),t._v(" 마무리")]),t._v(" "),o("p",[t._v("1900년 후반 TCP/IP가 활발히 보급이 되었지만 안정적이지 못한 internet protocol을 주로 사용하던 도중 connection방식의 TCP 통신이 개발되어 안정적으로 통신할 수 있게됨. 이 방식은 연결 시 3-way handshaking, 해제 시 4-way handshaking을 주고 받는 특징이 있다.")]),t._v(" "),o("p",[t._v("각 호스트 즉, 프로세스가 연결되기 위해서는 각각의 프로세스가 고유한 존재가 되어야한다. 그렇지 않으면 중구난방으로 연결되어버릴 테니까. 그래서 Socket이라는 것이 정립된다. 소켓은 ip(그때 당시 internet addredd)와 port number를 합친 것을 소켓이라고 부르게 된다. 여기서 port란 애플리케이션 영역과 시스템 영역 그러니까 TCP/IP stack을 크게 두 부분으로 나누고 하나는 소위 소프트웨어 영역 그리고 나머지는 하드웨어 영역을 가리키는데 이 두 영역을 연결해주는 것이 port이고 port의 고유한 이름이 port number이다. (*한 프로세스 당 포트는 여러개를 가질 수 있음.)")]),t._v(" "),o("p",[t._v("TCP말고도 같은 레이어에 있는 UDP라는 프로토콜이 있다. 해당 프로토콜은 internet protocol을 거의 그대로 사용하는 프로토콜인데 이후 TCP처럼 socket의 개념을 그대로 사용하게 되었고 (특별하게 정의하지 않고 사용했을 수 있음.) 그래서 소켓은 protocol + ip + port number로 정의하게 되었다. TCP/10.10.10.10/8888과 같이 말이다.")])])}),[],!1,null,null,null);o.default=a.exports}}]);