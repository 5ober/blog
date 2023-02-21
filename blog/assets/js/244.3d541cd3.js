(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{649:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1"}},[t._v("一、负载均衡")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E7%AE%97%E6%B3%95"}},[t._v("负载均衡算法")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E8%BD%AC%E5%8F%91%E5%AE%9E%E7%8E%B0"}},[t._v("转发实现")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8C%E9%9B%86%E7%BE%A4%E4%B8%8B%E7%9A%84-session-%E7%AE%A1%E7%90%86"}},[t._v("二、集群下的 Session 管理")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#sticky-session"}},[t._v("Sticky Session")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#session-replication"}},[t._v("Session Replication")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#session-server"}},[t._v("Session Server")])])])])]),t._v(" "),s("h1",{attrs:{id:"一、负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、负载均衡"}},[t._v("#")]),t._v(" 一、负载均衡")]),t._v(" "),s("p",[t._v("集群中的应用服务器（节点）通常被设计成无状态，用户可以请求任何一个节点。")]),t._v(" "),s("p",[t._v("负载均衡器会根据集群中每个节点的负载情况，将用户请求转发到合适的节点上。")]),t._v(" "),s("p",[t._v("负载均衡器可以用来实现高可用以及伸缩性：")]),t._v(" "),s("ul",[s("li",[t._v("高可用：当某个节点故障时，负载均衡器会将用户请求转发到另外的节点上，从而保证所有服务持续可用；")]),t._v(" "),s("li",[t._v("伸缩性：根据系统整体负载情况，可以很容易地添加或移除节点。")])]),t._v(" "),s("p",[t._v("负载均衡器运行过程包含两个部分：")]),t._v(" "),s("ol",[s("li",[t._v("根据负载均衡算法得到转发的节点；")]),t._v(" "),s("li",[t._v("进行转发。")])]),t._v(" "),s("h2",{attrs:{id:"负载均衡算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡算法"}},[t._v("#")]),t._v(" 负载均衡算法")]),t._v(" "),s("h3",{attrs:{id:"_1-轮询-round-robin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-轮询-round-robin"}},[t._v("#")]),t._v(" 1. 轮询（Round Robin）")]),t._v(" "),s("p",[t._v("轮询算法把每个请求轮流发送到每个服务器上。")]),t._v(" "),s("p",[t._v("下图中，一共有 6 个客户端产生了 6 个请求，这 6 个请求按 (1, 2, 3, 4, 5, 6) 的顺序发送。(1, 3, 5) 的请求会被发送到服务器 1，(2, 4, 6) 的请求会被发送到服务器 2。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/9daa3616-00a4-48c4-9146-792dc8499be3.jpg",width:"500px"}})]),s("br"),t._v(" "),s("p",[t._v("该算法比较适合每个服务器的性能差不多的场景，如果有性能存在差异的情况下，那么性能较差的服务器可能无法承担过大的负载（下图的 Server 2）。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/bfea8772-d01b-4a51-8adc-edfd7d3dce84.jpg",width:"500px"}})]),s("br"),t._v(" "),s("h3",{attrs:{id:"_2-加权轮询-weighted-round-robbin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-加权轮询-weighted-round-robbin"}},[t._v("#")]),t._v(" 2. 加权轮询（Weighted Round Robbin）")]),t._v(" "),s("p",[t._v("加权轮询是在轮询的基础上，根据服务器的性能差异，为服务器赋予一定的权值，性能高的服务器分配更高的权值。")]),t._v(" "),s("p",[t._v("例如下图中，服务器 1 被赋予的权值为 5，服务器 2 被赋予的权值为 1，那么 (1, 2, 3, 4, 5) 请求会被发送到服务器 1，(6) 请求会被发送到服务器 2。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/4ab87717-e264-4232-825d-8aaf08f14e8b.jpg",width:"500px"}})]),s("br"),t._v(" "),s("h3",{attrs:{id:"_3-最少连接-least-connections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-最少连接-least-connections"}},[t._v("#")]),t._v(" 3. 最少连接（least Connections）")]),t._v(" "),s("p",[t._v("由于每个请求的连接时间不一样，使用轮询或者加权轮询算法的话，可能会让一台服务器当前连接数过大，而另一台服务器的连接过小，造成负载不均衡。")]),t._v(" "),s("p",[t._v("例如下图中，(1, 3, 5) 请求会被发送到服务器 1，但是 (1, 3) 很快就断开连接，此时只有 (5) 请求连接服务器 1；(2, 4, 6) 请求被发送到服务器 2，只有 (2) 的连接断开，此时 (6, 4) 请求连接服务器 2。该系统继续运行时，服务器 2 会承担过大的负载。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/e98deb5a-d5d4-4294-aa9b-9220d4483403.jpg",width:"500px"}})]),s("br"),t._v(" "),s("p",[t._v("最少连接算法就是将请求发送给当前最少连接数的服务器上。")]),t._v(" "),s("p",[t._v("例如下图中，服务器 1 当前连接数最小，那么新到来的请求 6 就会被发送到服务器 1 上。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/43d323ac-9f07-4e4a-a315-4eaf8c38766c.jpg",width:"500px"}})]),s("br"),t._v(" "),s("h3",{attrs:{id:"_4-加权最少连接-weighted-least-connection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-加权最少连接-weighted-least-connection"}},[t._v("#")]),t._v(" 4. 加权最少连接（Weighted Least Connection）")]),t._v(" "),s("p",[t._v("在最少连接的基础上，根据服务器的性能为每台服务器分配权重，再根据权重计算出每台服务器能处理的连接数。")]),t._v(" "),s("h3",{attrs:{id:"_5-随机算法-random"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-随机算法-random"}},[t._v("#")]),t._v(" 5. 随机算法（Random）")]),t._v(" "),s("p",[t._v("把请求随机发送到服务器上。")]),t._v(" "),s("p",[t._v("和轮询算法类似，该算法比较适合服务器性能差不多的场景。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/a42ad3a7-3574-4c48-a783-ed3d08a0688a.jpg",width:"500px"}})]),s("br"),t._v(" "),s("h3",{attrs:{id:"_6-源地址哈希法-ip-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-源地址哈希法-ip-hash"}},[t._v("#")]),t._v(" 6. 源地址哈希法 (IP Hash)")]),t._v(" "),s("p",[t._v("源地址哈希通过对客户端 IP 计算哈希值之后，再对服务器数量取模得到目标服务器的序号。")]),t._v(" "),s("p",[t._v("可以保证同一 IP 的客户端的请求会转发到同一台服务器上，用来实现会话粘滞（Sticky Session）")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/0f399a9f-1351-4b2d-b8a4-2ebe82b1a703.jpg",width:"500px"}})]),s("br"),t._v(" "),s("h2",{attrs:{id:"转发实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转发实现"}},[t._v("#")]),t._v(" 转发实现")]),t._v(" "),s("h3",{attrs:{id:"_1-http-重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-http-重定向"}},[t._v("#")]),t._v(" 1. HTTP 重定向")]),t._v(" "),s("p",[t._v("HTTP 重定向负载均衡服务器使用某种负载均衡算法计算得到服务器的 IP 地址之后，将该地址写入 HTTP 重定向报文中，状态码为 302。客户端收到重定向报文之后，需要重新向服务器发起请求。")]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("需要两次请求，因此访问延迟比较高；")]),t._v(" "),s("li",[t._v("HTTP 负载均衡器处理能力有限，会限制集群的规模。")])]),t._v(" "),s("p",[t._v("该负载均衡转发的缺点比较明显，实际场景中很少使用它。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/02a1fbfd-7a9d-4114-95df-ca2445587a1f.jpg",width:"500px"}})]),s("br"),t._v(" "),s("h3",{attrs:{id:"_2-dns-域名解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-dns-域名解析"}},[t._v("#")]),t._v(" 2. DNS 域名解析")]),t._v(" "),s("p",[t._v("在 DNS 解析域名的同时使用负载均衡算法计算服务器 IP 地址。")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("DNS 能够根据地理位置进行域名解析，返回离用户最近的服务器 IP 地址。")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("由于 DNS 具有多级结构，每一级的域名记录都可能被缓存，当下线一台服务器需要修改 DNS 记录时，需要过很长一段时间才能生效。")])]),t._v(" "),s("p",[t._v("大型网站基本使用了 DNS 做为第一级负载均衡手段，然后在内部使用其它方式做第二级负载均衡。也就是说，域名解析的结果为内部的负载均衡服务器 IP 地址。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/d2c072cc-8b17-480c-813e-18cdb3b4b51f.jpg",width:"500px"}})]),s("br"),t._v(" "),s("h3",{attrs:{id:"_3-反向代理服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-反向代理服务器"}},[t._v("#")]),t._v(" 3. 反向代理服务器")]),t._v(" "),s("p",[t._v("反向代理服务器位于源服务器前面，用户的请求需要先经过反向代理服务器才能到达源服务器。反向代理可以用来进行缓存、日志记录等，同时也可以用来做为负载均衡服务器。")]),t._v(" "),s("p",[t._v("在这种负载均衡转发方式下，客户端不直接请求源服务器，因此源服务器不需要外部 IP 地址，而反向代理需要配置内部和外部两套 IP 地址。")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("与其它功能集成在一起，部署简单。")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("所有请求和响应都需要经过反向代理服务器，它可能会成为性能瓶颈。")])]),t._v(" "),s("h3",{attrs:{id:"_4-网络层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-网络层"}},[t._v("#")]),t._v(" 4. 网络层")]),t._v(" "),s("p",[t._v("在操作系统内核进程获取网络数据包，根据负载均衡算法计算源服务器的 IP 地址，并修改请求数据包的目的 IP 地址，最后进行转发。")]),t._v(" "),s("p",[t._v("源服务器返回的响应也需要经过负载均衡服务器，通常是让负载均衡服务器同时作为集群的网关服务器来实现。")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("在内核进程中进行处理，性能比较高。")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("和反向代理一样，所有的请求和响应都经过负载均衡服务器，会成为性能瓶颈。")])]),t._v(" "),s("h3",{attrs:{id:"_5-链路层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-链路层"}},[t._v("#")]),t._v(" 5. 链路层")]),t._v(" "),s("p",[t._v("在链路层根据负载均衡算法计算源服务器的 MAC 地址，并修改请求数据包的目的 MAC 地址，并进行转发。")]),t._v(" "),s("p",[t._v("通过配置源服务器的虚拟 IP 地址和负载均衡服务器的 IP 地址一致，从而不需要修改 IP 地址就可以进行转发。也正因为 IP 地址一样，所以源服务器的响应不需要转发回负载均衡服务器，可以直接转发给客户端，避免了负载均衡服务器的成为瓶颈。")]),t._v(" "),s("p",[t._v("这是一种三角传输模式，被称为直接路由。对于提供下载和视频服务的网站来说，直接路由避免了大量的网络传输数据经过负载均衡服务器。")]),t._v(" "),s("p",[t._v("这是目前大型网站使用最广负载均衡转发方式，在 Linux 平台可以使用的负载均衡服务器为 LVS（Linux Virtual Server）。")]),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.jscape.com/blog/load-balancing-algorithms",target:"_blank",rel:"noopener noreferrer"}},[t._v("Comparing Load Balancing Algorithms"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://slideplayer.com/slide/6599069/#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redirection and Load Balancing"),s("OutboundLink")],1)])]),t._v(" "),s("h1",{attrs:{id:"二、集群下的-session-管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、集群下的-session-管理"}},[t._v("#")]),t._v(" 二、集群下的 Session 管理")]),t._v(" "),s("p",[t._v("一个用户的 Session 信息如果存储在一个服务器上，那么当负载均衡器把用户的下一个请求转发到另一个服务器，由于服务器没有用户的 Session 信息，那么该用户就需要重新进行登录等操作。")]),t._v(" "),s("h2",{attrs:{id:"sticky-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sticky-session"}},[t._v("#")]),t._v(" Sticky Session")]),t._v(" "),s("p",[t._v("需要配置负载均衡器，使得一个用户的所有请求都路由到同一个服务器，这样就可以把用户的 Session 存放在该服务器中。")]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("当服务器宕机时，将丢失该服务器上的所有 Session。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/1623f524-b011-40c8-b83f-eab38d538f76.png",width:"400px"}})]),s("br"),t._v(" "),s("h2",{attrs:{id:"session-replication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-replication"}},[t._v("#")]),t._v(" Session Replication")]),t._v(" "),s("p",[t._v("在服务器之间进行 Session 同步操作，每个服务器都有所有用户的 Session 信息，因此用户可以向任何一个服务器进行请求。")]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("占用过多内存；")]),t._v(" "),s("li",[t._v("同步过程占用网络带宽以及服务器处理器时间。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/40c6570d-c1d7-4c38-843e-ba991b2328c2.png",width:"400px"}})]),s("br"),t._v(" "),s("h2",{attrs:{id:"session-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-server"}},[t._v("#")]),t._v(" Session Server")]),t._v(" "),s("p",[t._v("使用一个单独的服务器存储 Session 数据，可以使用传统的 MySQL，也使用 Redis 或者 Memcached 这种内存型数据库。")]),t._v(" "),s("p",[t._v("优点：")]),t._v(" "),s("ul",[s("li",[t._v("为了使得大型网站具有伸缩性，集群中的应用服务器通常需要保持无状态，那么应用服务器不能存储用户的会话信息。Session Server 将用户的会话信息单独进行存储，从而保证了应用服务器的无状态。")])]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("需要去实现存取 Session 的代码。")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/fdc45a09-f838-4348-8959-d2c793727788.png",width:"600px"}})]),s("br"),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://sivalabs.in/2018/02/session-management-using-spring-session-jdbc-datastore/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Session Management using Spring Session with JDBC DataStore"),s("OutboundLink")],1)])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"320px",src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/githubio/公众号二维码-2.png"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);