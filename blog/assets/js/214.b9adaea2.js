(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{620:function(t,a,s){"use strict";s.r(a);var v=s(1),r=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ul",[a("li",[a("a",{attrs:{href:"#%E5%9F%BA%E6%9C%AC%E9%97%AE%E9%A2%98"}},[t._v("基本问题")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#1-%E5%B0%81%E8%A3%85%E6%88%90%E5%B8%A7"}},[t._v("1. 封装成帧")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#2-%E9%80%8F%E6%98%8E%E4%BC%A0%E8%BE%93"}},[t._v("2. 透明传输")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#3-%E5%B7%AE%E9%94%99%E6%A3%80%E6%B5%8B"}},[t._v("3. 差错检测")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BF%A1%E9%81%93%E5%88%86%E7%B1%BB"}},[t._v("信道分类")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#1-%E5%B9%BF%E6%92%AD%E4%BF%A1%E9%81%93"}},[t._v("1. 广播信道")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#2-%E7%82%B9%E5%AF%B9%E7%82%B9%E4%BF%A1%E9%81%93"}},[t._v("2. 点对点信道")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BF%A1%E9%81%93%E5%A4%8D%E7%94%A8%E6%8A%80%E6%9C%AF"}},[t._v("信道复用技术")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#1-%E9%A2%91%E5%88%86%E5%A4%8D%E7%94%A8"}},[t._v("1. 频分复用")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#2-%E6%97%B6%E5%88%86%E5%A4%8D%E7%94%A8"}},[t._v("2. 时分复用")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#3-%E7%BB%9F%E8%AE%A1%E6%97%B6%E5%88%86%E5%A4%8D%E7%94%A8"}},[t._v("3. 统计时分复用")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#4-%E6%B3%A2%E5%88%86%E5%A4%8D%E7%94%A8"}},[t._v("4. 波分复用")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#5-%E7%A0%81%E5%88%86%E5%A4%8D%E7%94%A8"}},[t._v("5. 码分复用")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#csmacd-%E5%8D%8F%E8%AE%AE"}},[t._v("CSMA/CD 协议")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#ppp-%E5%8D%8F%E8%AE%AE"}},[t._v("PPP 协议")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#mac-%E5%9C%B0%E5%9D%80"}},[t._v("MAC 地址")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%B1%80%E5%9F%9F%E7%BD%91"}},[t._v("局域网")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BB%A5%E5%A4%AA%E7%BD%91"}},[t._v("以太网")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BA%A4%E6%8D%A2%E6%9C%BA"}},[t._v("交换机")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%99%9A%E6%8B%9F%E5%B1%80%E5%9F%9F%E7%BD%91"}},[t._v("虚拟局域网")])])]),t._v(" "),a("h1",{attrs:{id:"基本问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本问题"}},[t._v("#")]),t._v(" 基本问题")]),t._v(" "),a("h2",{attrs:{id:"_1-封装成帧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-封装成帧"}},[t._v("#")]),t._v(" 1. 封装成帧")]),t._v(" "),a("p",[t._v("将网络层传下来的分组添加首部和尾部，用于标记帧的开始和结束。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/29a14735-e154-4f60-9a04-c9628e5d09f4.png",width:"300"}})]),a("br"),t._v(" "),a("h2",{attrs:{id:"_2-透明传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-透明传输"}},[t._v("#")]),t._v(" 2. 透明传输")]),t._v(" "),a("p",[t._v("透明表示一个实际存在的事物看起来好像不存在一样。")]),t._v(" "),a("p",[t._v("帧使用首部和尾部进行定界，如果帧的数据部分含有和首部尾部相同的内容，那么帧的开始和结束位置就会被错误的判定。需要在数据部分出现首部尾部相同的内容前面插入转义字符。如果数据部分出现转义字符，那么就在转义字符前面再加个转义字符。在接收端进行处理之后可以还原出原始数据。这个过程透明传输的内容是转义字符，用户察觉不到转义字符的存在。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/e738a3d2-f42e-4755-ae13-ca23497e7a97.png",width:"500"}})]),a("br"),t._v(" "),a("h2",{attrs:{id:"_3-差错检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-差错检测"}},[t._v("#")]),t._v(" 3. 差错检测")]),t._v(" "),a("p",[t._v("目前数据链路层广泛使用了循环冗余检验（CRC）来检查比特差错。")]),t._v(" "),a("h1",{attrs:{id:"信道分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信道分类"}},[t._v("#")]),t._v(" 信道分类")]),t._v(" "),a("h2",{attrs:{id:"_1-广播信道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-广播信道"}},[t._v("#")]),t._v(" 1. 广播信道")]),t._v(" "),a("p",[t._v("一对多通信，一个节点发送的数据能够被广播信道上所有的节点接收到。")]),t._v(" "),a("p",[t._v("所有的节点都在同一个广播信道上发送数据，因此需要有专门的控制方法进行协调，避免发生冲突（冲突也叫碰撞）。")]),t._v(" "),a("p",[t._v("主要有两种控制方法进行协调，一个是使用信道复用技术，一是使用 CSMA/CD 协议。")]),t._v(" "),a("h2",{attrs:{id:"_2-点对点信道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-点对点信道"}},[t._v("#")]),t._v(" 2. 点对点信道")]),t._v(" "),a("p",[t._v("一对一通信。")]),t._v(" "),a("p",[t._v("因为不会发生碰撞，因此也比较简单，使用 PPP 协议进行控制。")]),t._v(" "),a("h1",{attrs:{id:"信道复用技术"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#信道复用技术"}},[t._v("#")]),t._v(" 信道复用技术")]),t._v(" "),a("h2",{attrs:{id:"_1-频分复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-频分复用"}},[t._v("#")]),t._v(" 1. 频分复用")]),t._v(" "),a("p",[t._v("频分复用的所有主机在相同的时间占用不同的频率带宽资源。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/4aa5e057-bc57-4719-ab57-c6fbc861c505.png",width:"350"}})]),a("br"),t._v(" "),a("h2",{attrs:{id:"_2-时分复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-时分复用"}},[t._v("#")]),t._v(" 2. 时分复用")]),t._v(" "),a("p",[t._v("时分复用的所有主机在不同的时间占用相同的频率带宽资源。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/67582ade-d44a-46a6-8757-3c1296cc1ef9.png",width:"350"}})]),a("br"),t._v(" "),a("p",[t._v("使用频分复用和时分复用进行通信，在通信的过程中主机会一直占用一部分信道资源。但是由于计算机数据的突发性质，通信过程没必要一直占用信道资源而不让出给其它用户使用，因此这两种方式对信道的利用率都不高。")]),t._v(" "),a("h2",{attrs:{id:"_3-统计时分复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-统计时分复用"}},[t._v("#")]),t._v(" 3. 统计时分复用")]),t._v(" "),a("p",[t._v("是对时分复用的一种改进，不固定每个用户在时分复用帧中的位置，只要有数据就集中起来组成统计时分复用帧然后发送。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/6283be2a-814a-4a10-84bf-9592533fe6bc.png",width:"350"}})]),a("br"),t._v(" "),a("h2",{attrs:{id:"_4-波分复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-波分复用"}},[t._v("#")]),t._v(" 4. 波分复用")]),t._v(" "),a("p",[t._v("光的频分复用。由于光的频率很高，因此习惯上用波长而不是频率来表示所使用的光载波。")]),t._v(" "),a("h2",{attrs:{id:"_5-码分复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-码分复用"}},[t._v("#")]),t._v(" 5. 码分复用")]),t._v(" "),a("p",[t._v("为每个用户分配 m bit 的码片，并且所有的码片正交，对于任意两个码片 "),a("img",{staticClass:"mathjax-pic",attrs:{src:"https://latex.codecogs.com/gif.latex?\\vec{S}"}}),t._v(" 和 "),a("img",{staticClass:"mathjax-pic",attrs:{src:"https://latex.codecogs.com/gif.latex?\\vec{T}"}}),t._v(" 有")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/308a02e9-3346-4251-8c41-bd5536dab491.png",width:"100px"}})]),a("br"),t._v(" "),a("p",[t._v("为了讨论方便，取 m=8，设码片 "),a("img",{staticClass:"mathjax-pic",attrs:{src:"https://latex.codecogs.com/gif.latex?\\vec{S}"}}),t._v(" 为 00011011。在拥有该码片的用户发送比特 1 时就发送该码片，发送比特 0 时就发送该码片的反码 11100100。")]),t._v(" "),a("p",[t._v("在计算时将 00011011 记作 (-1 -1 -1 +1 +1 -1 +1 +1)，可以得到")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/6fda1dc7-5c74-49c1-bb79-237a77e43a43.png",width:"100px"}})]),a("br"),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/e325a903-f0b1-4fbd-82bf-88913dc2f290.png",width:"125px"}})]),a("br"),t._v(" "),a("p",[t._v("其中 "),a("img",{staticClass:"mathjax-pic",attrs:{src:"https://latex.codecogs.com/gif.latex?\\vec{S'}"}}),t._v(" 为 "),a("img",{staticClass:"mathjax-pic",attrs:{src:"https://latex.codecogs.com/gif.latex?\\vec{S}"}}),t._v(" 的反码。")]),t._v(" "),a("p",[t._v("利用上面的式子我们知道，当接收端使用码片 "),a("img",{staticClass:"mathjax-pic",attrs:{src:"https://latex.codecogs.com/gif.latex?\\vec{S}"}}),t._v(" 对接收到的数据进行内积运算时，结果为 0 的是其它用户发送的数据，结果为 1 的是用户发送的比特 1，结果为 -1 的是用户发送的比特 0。")]),t._v(" "),a("p",[t._v("码分复用需要发送的数据量为原先的 m 倍。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/99b6060e-099d-4201-8e86-f8ab3768a7cf.png",width:"500px"}})]),a("br"),t._v(" "),a("h1",{attrs:{id:"csma-cd-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csma-cd-协议"}},[t._v("#")]),t._v(" CSMA/CD 协议")]),t._v(" "),a("p",[t._v("CSMA/CD 表示载波监听多点接入 / 碰撞检测。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("多点接入")]),t._v("  ：说明这是总线型网络，许多主机以多点的方式连接到总线上。")]),t._v(" "),a("li",[a("strong",[t._v("载波监听")]),t._v("  ：每个主机都必须不停地监听信道。在发送前，如果监听到信道正在使用，就必须等待。")]),t._v(" "),a("li",[a("strong",[t._v("碰撞检测")]),t._v("  ：在发送中，如果监听到信道已有其它主机正在发送数据，就表示发生了碰撞。虽然每个主机在发送数据之前都已经监听到信道为空闲，但是由于电磁波的传播时延的存在，还是有可能会发生碰撞。")])]),t._v(" "),a("p",[t._v("记端到端的传播时延为 τ，最先发送的站点最多经过 2τ 就可以知道是否发生了碰撞，称 2τ 为   "),a("strong",[t._v("争用期")]),t._v("  。只有经过争用期之后还没有检测到碰撞，才能肯定这次发送不会发生碰撞。")]),t._v(" "),a("p",[t._v("当发生碰撞时，站点要停止发送，等待一段时间再发送。这个时间采用   "),a("strong",[t._v("截断二进制指数退避算法")]),t._v("   来确定。从离散的整数集合 {0, 1, .., (2"),a("sup",[t._v("k")]),t._v("-1)} 中随机取出一个数，记作 r，然后取 r 倍的争用期作为重传等待时间。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/19d423e9-74f7-4c2b-9b97-55890e0d5193.png",width:"400"}})]),a("br"),t._v(" "),a("h1",{attrs:{id:"ppp-协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ppp-协议"}},[t._v("#")]),t._v(" PPP 协议")]),t._v(" "),a("p",[t._v("互联网用户通常需要连接到某个 ISP 之后才能接入到互联网，PPP 协议是用户计算机和 ISP 进行通信时所使用的数据链路层协议。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/e1ab9f28-cb15-4178-84b2-98aad87f9bc8.jpg",width:"300"}})]),a("br"),t._v(" "),a("p",[t._v("PPP 的帧格式：")]),t._v(" "),a("ul",[a("li",[t._v("F 字段为帧的定界符")]),t._v(" "),a("li",[t._v("A 和 C 字段暂时没有意义")]),t._v(" "),a("li",[t._v("FCS 字段是使用 CRC 的检验序列")]),t._v(" "),a("li",[t._v("信息部分的长度不超过 1500")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/759013d7-61d8-4509-897a-d75af598a236.png",width:"400"}})]),a("br"),t._v(" "),a("h1",{attrs:{id:"mac-地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-地址"}},[t._v("#")]),t._v(" MAC 地址")]),t._v(" "),a("p",[t._v("MAC 地址是链路层地址，长度为 6 字节（48 位），用于唯一标识网络适配器（网卡）。")]),t._v(" "),a("p",[t._v("一台主机拥有多少个网络适配器就有多少个 MAC 地址。例如笔记本电脑普遍存在无线网络适配器和有线网络适配器，因此就有两个 MAC 地址。")]),t._v(" "),a("h1",{attrs:{id:"局域网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#局域网"}},[t._v("#")]),t._v(" 局域网")]),t._v(" "),a("p",[t._v("局域网是一种典型的广播信道，主要特点是网络为一个单位所拥有，且地理范围和站点数目均有限。")]),t._v(" "),a("p",[t._v("主要有以太网、令牌环网、FDDI 和 ATM 等局域网技术，目前以太网占领着有线局域网市场。")]),t._v(" "),a("p",[t._v("可以按照网络拓扑结构对局域网进行分类：")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/807f4258-dba8-4c54-9c3c-a707c7ccffa2.jpg",width:"800"}})]),a("br"),t._v(" "),a("h1",{attrs:{id:"以太网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以太网"}},[t._v("#")]),t._v(" 以太网")]),t._v(" "),a("p",[t._v("以太网是一种星型拓扑结构局域网。")]),t._v(" "),a("p",[t._v("早期使用集线器进行连接，集线器是一种物理层设备， 作用于比特而不是帧，当一个比特到达接口时，集线器重新生成这个比特，并将其能量强度放大，从而扩大网络的传输距离，之后再将这个比特发送到其它所有接口。如果集线器同时收到两个不同接口的帧，那么就发生了碰撞。")]),t._v(" "),a("p",[t._v("目前以太网使用交换机替代了集线器，交换机是一种链路层设备，它不会发生碰撞，能根据 MAC 地址进行存储转发。")]),t._v(" "),a("p",[t._v("以太网帧格式：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("类型")]),t._v("  ：标记上层使用的协议；")]),t._v(" "),a("li",[a("strong",[t._v("数据")]),t._v("  ：长度在 46-1500 之间，如果太小则需要填充；")]),t._v(" "),a("li",[a("strong",[t._v("FCS")]),t._v("  ：帧检验序列，使用的是 CRC 检验方法；")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/164944d3-bbd2-4bb2-924b-e62199c51b90.png",width:"500"}})]),a("br"),t._v(" "),a("h1",{attrs:{id:"交换机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交换机"}},[t._v("#")]),t._v(" 交换机")]),t._v(" "),a("p",[t._v("交换机具有自学习能力，学习的是交换表的内容，交换表中存储着 MAC 地址到接口的映射。")]),t._v(" "),a("p",[t._v("正是由于这种自学习能力，因此交换机是一种即插即用设备，不需要网络管理员手动配置交换表内容。")]),t._v(" "),a("p",[t._v("下图中，交换机有 4 个接口，主机 A 向主机 B 发送数据帧时，交换机把主机 A 到接口 1 的映射写入交换表中。为了发送数据帧到 B，先查交换表，此时没有主机 B 的表项，那么主机 A 就发送广播帧，主机 C 和主机 D 会丢弃该帧，主机 B 回应该帧向主机 A 发送数据包时，交换机查找交换表得到主机 A 映射的接口为 1，就发送数据帧到接口 1，同时交换机添加主机 B 到接口 2 的映射。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/a4444545-0d68-4015-9a3d-19209dc436b3.png",width:"800"}})]),a("br"),t._v(" "),a("h1",{attrs:{id:"虚拟局域网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟局域网"}},[t._v("#")]),t._v(" 虚拟局域网")]),t._v(" "),a("p",[t._v("虚拟局域网可以建立与物理位置无关的逻辑组，只有在同一个虚拟局域网中的成员才会收到链路层广播信息。")]),t._v(" "),a("p",[t._v("例如下图中 (A1, A2, A3, A4) 属于一个虚拟局域网，A1 发送的广播会被 A2、A3、A4 收到，而其它站点收不到。")]),t._v(" "),a("p",[t._v("使用 VLAN 干线连接来建立虚拟局域网，每台交换机上的一个特殊接口被设置为干线接口，以互连 VLAN 交换机。IEEE 定义了一种扩展的以太网帧格式 802.1Q，它在标准以太网帧上加进了 4 字节首部 VLAN 标签，用于表示该帧属于哪一个虚拟局域网。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/e98e9d20-206b-4533-bacf-3448d0096f38.png",width:"500"}})]),a("br"),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{width:"320px",src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/githubio/公众号二维码-2.png"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);