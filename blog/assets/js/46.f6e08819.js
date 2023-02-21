(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{453:function(_,v,t){"use strict";t.r(v);var r=t(1),s=Object(r.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"第四章-操作行为-operational-behavior"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第四章-操作行为-operational-behavior"}},[_._v("#")]),_._v(" 第四章 操作行为 Operational behavior")]),_._v(" "),v("h2",{attrs:{id:"目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[_._v("#")]),_._v(" 目录")]),_._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/01-Introduction.html"}},[_._v("第一章 - 介绍")])],1),_._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/02-ControlPacketFormat.html"}},[_._v("第二章 – MQTT控制报文格式")])],1),_._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/03-ControlPackets.html"}},[_._v("第三章 – MQTT控制报文")])],1),_._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/04-OperationalBehavior.html"}},[_._v("第四章 – 操作行为")])],1),_._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/05-Security.html"}},[_._v("第五章 – 安全")])],1),_._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/06-WebSocket.html"}},[_._v("第六章 – 使用WebSocket")])],1),_._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/07-Conformance.html"}},[_._v("第七章 – 一致性目标")])],1),_._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/08-AppendixB.html"}},[_._v("附录B - 强制性规范声明")])],1)]),_._v(" "),v("h2",{attrs:{id:"_4-1-状态存储-storing-state"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-状态存储-storing-state"}},[_._v("#")]),_._v(" 4.1 状态存储 Storing state")]),_._v(" "),v("p",[_._v("为了提供服务质量保证，客户端和服务端有必要存储会话状态。在整个会话期间，客户端和服务端都"),v("strong",[_._v("必须")]),_._v("存储会话状态 [MQTT-4.1.0-1]。会话"),v("strong",[_._v("必须")]),_._v("至少持续和它的活跃网络连接同样长的时间 [MQTT-4.1.0-2]。")]),_._v(" "),v("p",[_._v("服务端的保留消息不是会话状态的组成部分。服务端"),v("strong",[_._v("应该")]),_._v("保留那种消息直到客户端删除它。")]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("非规范评注")])]),_._v(" "),v("p",[_._v("客户端和服务端实现的存储容量必然是有限的，还可能要受管理策略的限制，比如跨网络连接的会话状态的最大存储时间。已保存的会话状态丢失可能是某个管理操作造成的，例如对某个预定义条件的自动响应。它造成的后果就是会话终止。这些操作可能是资源限制或其他操作原因引发的。需要谨慎的评估客户端和服务端的存储容量，以确保存储空间够用。")]),_._v(" "),v("p",[v("strong",[_._v("非规范评注")])]),_._v(" "),v("p",[_._v("客户端或服务端的软硬件故障都可能导致会话状态的丢失或损坏。")]),_._v(" "),v("p",[v("strong",[_._v("非规范评注")])]),_._v(" "),v("p",[_._v("服务器和客户端操作正常可能意味着，已保存的状态丢失或损坏是管理操作或软硬件故障造成的。管理操作可能是对某个预定义条件的自动响应。这些操作可能是资源限制或其他操作原因引发的。例如，服务端可能会基于外部条件，决定不再将某个消息或某些消息分发给任何当前的或以后的客户端。")]),_._v(" "),v("p",[v("strong",[_._v("非规范评注")])]),_._v(" "),v("p",[_._v("MQTT用户应该评估MQTT客户端和服务端实现的存储容量，确保能满足需求。")])]),_._v(" "),v("h4",{attrs:{id:"非规范示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非规范示例"}},[_._v("#")]),_._v(" 非规范示例")]),_._v(" "),v("p",[_._v("例如，想要收集电表读数的用户可能会决定使用QoS 1等级的消息，因为他们不能接受数据在网络传输途中丢失，但是，他们可能认为客户端和服务端的数据可以存储在内存（易失性存储器）中，因为（他们觉得）电力供应是非常可靠的，不会有太大的数据丢失风险。")]),_._v(" "),v("p",[_._v("与之相反，停车计费支付应用的提供商可能决定任何情况下都不能让数据支付消息丢失，因此他们要求在通过网络传输之前，所有的数据必须写入到非易失性存储器中（如硬盘）。")]),_._v(" "),v("h2",{attrs:{id:"_4-2-网络连接-network-connections"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-网络连接-network-connections"}},[_._v("#")]),_._v(" 4.2 网络连接 Network Connections")]),_._v(" "),v("p",[_._v("MQTT协议要求基础传输层能够提供有序的、可靠的、双向传输（从客户端到服务端 和从服务端到客户端）的字节流。")]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("非规范评注")])]),_._v(" "),v("p",[_._v("MQTT 3.1使用的传输层协议是 ["),v("a",{attrs:{href:"#RFC793"}},[_._v("RFC793")]),_._v("] 定义的TCP/IP协议。下面的协议也支持：")])]),_._v(" "),v("ul",[v("li",[_._v("TLS协议 "),v("a",{attrs:{href:"#RFC5246"}},[_._v("[RFC5246]")])]),_._v(" "),v("li",[_._v("WebSocket协议 "),v("a",{attrs:{href:"#RFC6455"}},[_._v("[RFC6455]")])])]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("非规范评注")])]),_._v(" "),v("p",[_._v("TCP端口8883和1883已在IANA注册，分别用于MQTT的TLS和非TLS通信。")])]),_._v(" "),v("p",[_._v("无连接的网络传输协议如UDP是不支持的，因为他们可能会丢失数据包或对数据包重排序。")]),_._v(" "),v("h2",{attrs:{id:"_4-3-服务质量等级和协议流程-qos"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-服务质量等级和协议流程-qos"}},[_._v("#")]),_._v(" 4.3 服务质量等级和协议流程 QoS")]),_._v(" "),v("p",[_._v("MQTT按照这里定义的服务质量 (QoS) 等级分发应用消息。分发协议是对称的，在下面的描述中，客户端和服务端既可以是发送者也可以是接收者。分发协议关注的是从单个发送者到单个接收者的应用消息。服务端分发应用消息给多个客户端时，每个客户端独立处理。分发给客户端的出站应用消息和入站应用消息的QoS等级可能是不同的。")]),_._v(" "),v("p",[_._v("下面的非规范流程图展示了可能的实现方法。")]),_._v(" "),v("h3",{attrs:{id:"_4-3-1-qos-0-最多分发一次"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-qos-0-最多分发一次"}},[_._v("#")]),_._v(" 4.3.1 QoS 0:最多分发一次")]),_._v(" "),v("p",[_._v("消息的分发依赖于底层网络的能力。接收者不会发送响应，发送者也不会重试。消息可能送达一次也可能根本没送达。")]),_._v(" "),v("p",[_._v("对于QoS 0的分发协议，发送者")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("必须")]),_._v("发送QoS等于0，DUP等于0的PUBLISH报文 [MQTT-4.3.1-1]。")])]),_._v(" "),v("p",[_._v("对于QoS 0的分发协议，接收者")]),_._v(" "),v("ul",[v("li",[_._v("接受PUBLISH报文时同时接受消息的所有权。")])]),_._v(" "),v("h5",{attrs:{id:"图例-4-1-qos-0协议流程图-非规范示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图例-4-1-qos-0协议流程图-非规范示例"}},[_._v("#")]),_._v(" 图例 4.1 – QoS 0协议流程图，非规范示例")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[_._v("发送者动作")])]),_._v(" "),v("th",[v("strong",[_._v("控制报文")])]),_._v(" "),v("th",[v("strong",[_._v("接收者动作")])])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("PUBLISH 报文 QoS 0, DUP=0")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("----------\x3e")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("分发应用消息给适当的后续接收者（们）")])])])]),_._v(" "),v("h3",{attrs:{id:"_4-3-2-qos-1-至少分发一次"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-qos-1-至少分发一次"}},[_._v("#")]),_._v(" 4.3.2 QoS 1: 至少分发一次")]),_._v(" "),v("p",[_._v("服务质量确保消息至少送达一次。QoS 1的PUBLISH报文的可变报头中包含一个报文标识符，需要PUBACK报文确认。2.3.1节提供了有关报文标识符的更多信息。")]),_._v(" "),v("p",[_._v("对于QoS 1的分发协议，发送者")]),_._v(" "),v("ul",[v("li",[_._v("每次发送新的应用消息都"),v("strong",[_._v("必须")]),_._v("分配一个未使用的报文标识符。")]),_._v(" "),v("li",[_._v("发送的PUBLISH报文"),v("strong",[_._v("必须")]),_._v("包含报文标识符且QoS等于1，DUP等于0。")]),_._v(" "),v("li",[v("strong",[_._v("必须")]),_._v("将这个PUBLISH报文看作是 "),v("em",[_._v("未确认的")]),_._v(" ，直到从接收者那收到对应的PUBACK报文。4.4节有一个关于未确认消息的讨论。")])]),_._v(" "),v("blockquote",[v("p",[_._v("[MQTT-4.3.2-1].")]),_._v(" "),v("p",[_._v("一旦发送者收到PUBACK报文，这个报文标识符就可以重用。")])]),_._v(" "),v("p",[_._v("注意：允许发送者在等待确认时使用不同的报文标识符发送后续的PUBLISH报文。")]),_._v(" "),v("p",[_._v("对于QoS 1的分发协议，接收者")]),_._v(" "),v("ul",[v("li",[_._v("响应的PUBACK报文"),v("strong",[_._v("必须")]),_._v("包含一个报文标识符，这个标识符来自接收到的、已经接受所有权的PUBLISH报文。")]),_._v(" "),v("li",[_._v("发送了PUBACK报文之后，接收者必须将任何包含相同报文标识符的入站PUBLISH报文当作一个新的消息，并忽略它的DUP标志的值。")])]),_._v(" "),v("blockquote",[v("p",[_._v("[MQTT-4.3.2-2].")])]),_._v(" "),v("h5",{attrs:{id:"图例-4-2-qos-1协议流程图-非规范示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图例-4-2-qos-1协议流程图-非规范示例"}},[_._v("#")]),_._v(" 图例 4.2 – QoS 1协议流程图，非规范示例")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[_._v("发送者动作")])]),_._v(" "),v("th",[v("strong",[_._v("控制报文")])]),_._v(" "),v("th",[v("strong",[_._v("接收者动作")])])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("存储消息")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("发送PUBLISH报文 QoS=1, DUP=0，带报文标识符")]),_._v(" "),v("td",[_._v("----------\x3e")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("开始应用消息的后续分发"),v("sup",[_._v("1")])])]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("<----------")]),_._v(" "),v("td",[_._v("发送PUBACK报文，带报文标识符")])]),_._v(" "),v("tr",[v("td",[_._v("丢弃消息")]),_._v(" "),v("td"),_._v(" "),v("td")])])]),_._v(" "),v("blockquote",[v("p",[v("sup",[_._v("1")]),_._v("不要求接收者在发送PUBACK之前完整分发应用消息。原来的发送者收到PUBACK报文之后，应用消息的所有权就会转移给这个接收者。")])]),_._v(" "),v("h3",{attrs:{id:"_4-3-3-qos-2-仅分发一次"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-3-qos-2-仅分发一次"}},[_._v("#")]),_._v(" 4.3.3 QoS 2: 仅分发一次")]),_._v(" "),v("p",[_._v("这是最高等级的服务质量，消息丢失和重复都是不可接受的。使用这个服务质量等级会有额外的开销。")]),_._v(" "),v("p",[_._v("QoS 2的消息可变报头中有报文标识符。2.3.1节提供了有关报文标识符的更多信息。QoS 2的PUBLISH报文的接收者使用一个两步确认过程来确认收到。")]),_._v(" "),v("p",[_._v("对于QoS 2的分发协议，发送者")]),_._v(" "),v("ul",[v("li",[_._v("必须给要发送的新应用消息分配一个未使用的报文标识符。")]),_._v(" "),v("li",[_._v("发送的PUBLISH报文"),v("strong",[_._v("必须")]),_._v("包含报文标识符且报文的QoS等于2,，DUP等于0。")]),_._v(" "),v("li",[v("strong",[_._v("必须")]),_._v("将这个PUBLISH报文看作是 "),v("em",[_._v("未确认的")]),_._v(" ，直到从接收者那收到对应的PUBREC报文。4.4节有一个关于未确认消息的讨论。")]),_._v(" "),v("li",[_._v("收到PUBREC报文后"),v("strong",[_._v("必须")]),_._v("发送一个PUBREL报文。PUBREL报文必须包含与原始PUBLISH报文相同的报文标识符。")]),_._v(" "),v("li",[v("strong",[_._v("必须")]),_._v("将这个PUBREL报文看作是 "),v("em",[_._v("未确认的")]),_._v(" ，直到从接收者那收到对应的PUBCOMP报文。")]),_._v(" "),v("li",[_._v("一旦发送了对应的PUBREL报文就"),v("strong",[_._v("不能")]),_._v("重发这个PUBLISH报文。")])]),_._v(" "),v("p",[_._v("[MQTT-4.3.3-1].")]),_._v(" "),v("blockquote",[v("p",[_._v("一旦发送者收到PUBCOMP报文，这个报文标识符就可以重用。")])]),_._v(" "),v("p",[_._v("注意：允许发送者在等待确认时使用不同的报文标识符发送后续的PUBLISH报文。")]),_._v(" "),v("p",[_._v("对于QoS 2的分发协议，接收者")]),_._v(" "),v("ul",[v("li",[_._v("响应的PUBREC报文"),v("strong",[_._v("必须")]),_._v("包含报文标识符，这个标识符来自接收到的、已经接受所有权的PUBLISH报文。")]),_._v(" "),v("li",[_._v("在收到对应的PUBREL报文之前，接收者"),v("strong",[_._v("必须")]),_._v("发送PUBREC报文确认任何后续的具有相同标识符的PUBLISH报文。 在这种情况下，它"),v("strong",[_._v("不能")]),_._v("重复分发消息给任何后续的接收者。")]),_._v(" "),v("li",[_._v("响应PUBREL报文的PUBCOMP报文"),v("strong",[_._v("必须")]),_._v("包含与PUBREL报文相同的标识符。")]),_._v(" "),v("li",[_._v("发送PUBCOMP报文之后，接收者必须将包含相同报文标识符的任何后续PUBLISH报文当作一个新的发布。")])]),_._v(" "),v("p",[_._v("[MQTT-4.3.3-2].")]),_._v(" "),v("h5",{attrs:{id:"图例-4-3-qos-2协议流程图-非规范示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图例-4-3-qos-2协议流程图-非规范示例"}},[_._v("#")]),_._v(" 图例 4.3 – QoS 2协议流程图，非规范示例")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[_._v("发送者动作")])]),_._v(" "),v("th",[v("strong",[_._v("控制报文")])]),_._v(" "),v("th",[v("strong",[_._v("接收者动作")])])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("存储消息")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("发送PUBLISH报文，QoS=2, DUP=0，带报文标识符")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("----------\x3e")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("方法A：存储消息，或方法B：存储报文标识符，然后开始向前分发这个应用消息"),v("sup",[_._v("1")]),_._v("。")])]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("发送PUBREC报文，带报文标识符。")])]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("<----------")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("丢弃消息，存储PUBREC中的报文标识符")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("发送PUBREL报文，带报文标识符")]),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("----------\x3e")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("方法A：开始向前分发应用消息"),v("sup",[_._v("1")]),_._v("然后丢弃消息 或方法B：丢弃报文标识符")])]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("发送PUBCOMP报文，带报文标识符")])]),_._v(" "),v("tr",[v("td"),_._v(" "),v("td",[_._v("<----------")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("丢弃已保存的状态")]),_._v(" "),v("td"),_._v(" "),v("td")])])]),_._v(" "),v("blockquote",[v("p",[v("sup",[_._v("1")]),_._v(" 不要求接收者在发送PUBREC或PUBCOMP之前完整分发应用消息。原来的发送者收到PUBREC报文之后，应用消息的所有权就会转移给这个接收者。")]),_._v(" "),v("p",[v("a",{attrs:{href:"#_Figure_4.3_%E2%80%93"}},[_._v("图例 4.3 – QoS 2协议流程图，非规范示例")]),_._v(" 展示了接收者对QoS 2等级消息的两种处理方法。他们的区别是消息什么时候可以开始分发。实现者可以决定使用哪种方法。只要实现者只选择了一种方法，就不会影响QoS流程的可靠性。")])]),_._v(" "),v("h2",{attrs:{id:"_4-4-消息分发重试-message-delivery-retry"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-消息分发重试-message-delivery-retry"}},[_._v("#")]),_._v(" 4.4 消息分发重试 Message delivery retry")]),_._v(" "),v("p",[_._v("客户端设置清理会话（CleanSession）标志为0重连时，客户端和服务端"),v("strong",[_._v("必须")]),_._v("使用原始的报文标识符重发任何未确认的PUBLISH报文（如果QoS>0）和PUBREL报文  [MQTT-4.4.0-1]。这是唯一"),v("strong",[_._v("要求")]),_._v("客户端或服务端重发消息的情况。")]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("非规范评注")])]),_._v(" "),v("p",[_._v("控制报文的重发曾经需要克服某些陈旧TCP网络上的数据丢失问题。部署在那些环境中的MQTT 3.1.1实现可能仍然需要关注这个问题。")])]),_._v(" "),v("h2",{attrs:{id:"_4-5-消息收到-message-receipt"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-消息收到-message-receipt"}},[_._v("#")]),_._v(" 4.5 消息收到 Message receipt")]),_._v(" "),v("p",[_._v("服务端接管入站应用消息的所有权时，它"),v("strong",[_._v("必须")]),_._v("将消息添加到订阅匹配的客户端的会话状态中。匹配规则定义见 4.7节 [MQTT-4.5.0-1]。")]),_._v(" "),v("p",[_._v("正常情况下，客户端收到发送给它的订阅的消息。客户端也可能收到不是与它的订阅精确匹配的消息。如果服务端自动给客户端分配了一个订阅，可能发生这种情况。正在处理UBSUBSCRIBE请求时也可能收到消息。客户端"),v("strong",[_._v("必须")]),_._v("按照可用的服务质量（QoS）规则确认它收到的任何PUBLISH报文，不管它选择是否处理报文包含的应用消息 [MQTT-4.5.0-2]。")]),_._v(" "),v("h2",{attrs:{id:"_4-6-消息排序-message-ordering"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-消息排序-message-ordering"}},[_._v("#")]),_._v(" 4.6 消息排序 Message ordering")]),_._v(" "),v("p",[_._v("实现本章定义的协议流程时，客户端"),v("strong",[_._v("必须")]),_._v("遵循下列规则：")]),_._v(" "),v("ul",[v("li",[_._v("重发任何之前的PUBLISH报文时，"),v("strong",[_._v("必须")]),_._v("按原始PUBLISH报文的发送顺序重发（适用于QoS 1和QoS 2消息）[MQTT-4.6.0-1]。")]),_._v(" "),v("li",[v("strong",[_._v("必须")]),_._v("按照对应的PUBLISH报文的顺序发送PUBACK报文（QoS 1消息）[MQTT-4.6.0-2]。")]),_._v(" "),v("li",[v("strong",[_._v("必须")]),_._v("按照对应的PUBLISH报文的顺序发送PUBREC报文（QoS 2消息）[MQTT-4.6.0-3]。")]),_._v(" "),v("li",[v("strong",[_._v("必须")]),_._v("按照对应的PUBREC报文的顺序发送PUBREL报文（QoS 2消息）[MQTT-4.6.0-4]。")])]),_._v(" "),v("p",[_._v("服务端"),v("strong",[_._v("必须")]),_._v("默认认为每个主题都是有序的。它"),v("strong",[_._v("可以")]),_._v("提供一个管理功能或其它机制，以允许将一个或多个主题当作是无序的 [MQTT-4.6.0-5]。")]),_._v(" "),v("p",[_._v("服务端处理发送给有序主题的消息时，"),v("strong",[_._v("必须")]),_._v("按照上面的规则将消息分发给每个订阅者。此外，它"),v("strong",[_._v("必须")]),_._v("按照从客户端收到的顺序发送PUBLISH报文给消费者（对相同的主题和QoS）[MQTT-4.6.0-6]。")]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("非规范评注")])]),_._v(" "),v("p",[_._v("上面列出的规则确保，使用QoS 1发布和订阅的消息流，订阅者按照消息发布时的顺序收到每条消息的最终副本，但是消息可能会重复，这可能导致在它的后继消息之后收到某个已经收到消息的重发版本。例如，发布者按顺序1,2,3,4发送消息，订阅者收到的顺序可能是1,2,3,2,3,4。")]),_._v(" "),v("p",[_._v("如果客户端和服务端能保证任何时刻最多有一条消息在 "),v("em",[_._v("传输中（in-flight）")]),_._v("（在某条消息被确认前不发送后面的那条消息），那么，不会有QoS 1的消息会在它的任何后续消息之后收到。 例如，订阅者收到的顺序可能是1,2,3,3,4，而不是1,2,3,2,3,4。将传输窗口 （in-flight window）设为1意味着，在同一个主题上，即使发布者发送了一系列不同QoS等级的消息，它们的顺序也被保留。")])]),_._v(" "),v("h2",{attrs:{id:"_4-7-主题名和主题过滤器-topic-names-and-topic-filters"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-主题名和主题过滤器-topic-names-and-topic-filters"}},[_._v("#")]),_._v(" 4.7 主题名和主题过滤器 Topic Names and Topic Filters")]),_._v(" "),v("h3",{attrs:{id:"_4-7-1-主题通配符-topic-wildcards"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-1-主题通配符-topic-wildcards"}},[_._v("#")]),_._v(" 4.7.1 主题通配符 Topic wildcards")]),_._v(" "),v("p",[_._v("主题层级（topic level）分隔符用于将结构化引入主题名。如果存在分隔符，它将主题名分割为多个"),v("em",[_._v("主题层级 topic level")]),_._v(" 。")]),_._v(" "),v("p",[_._v("订阅的主题过滤器可以包含特殊的通配符，允许你一次订阅多个主题。")]),_._v(" "),v("p",[_._v("主题过滤器中可以使用通配符，但是主题名"),v("strong",[_._v("不能")]),_._v("使用通配符 [MQTT-4.7.1-1]。")]),_._v(" "),v("h4",{attrs:{id:"主题层级分隔符-topic-level-separator"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主题层级分隔符-topic-level-separator"}},[_._v("#")]),_._v(" 主题层级分隔符 Topic level separator")]),_._v(" "),v("p",[_._v("斜杠（‘/’ U+002F）用于分割主题的每个层级，为主题名提供一个分层结构。当客户端订阅指定的主题过滤器包含两种通配符时，主题层级分隔符就很有用了。主题层级分隔符可以出现在主题过滤器或主题名字的任何位置。相邻的主题层次分隔符表示一个零长度的主题层级。")]),_._v(" "),v("h4",{attrs:{id:"多层通配符-multi-level-wildcard"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多层通配符-multi-level-wildcard"}},[_._v("#")]),_._v(" 多层通配符 Multi-level wildcard")]),_._v(" "),v("p",[_._v("数字标志（‘#’ U+0023）是用于匹配主题中任意层级的通配符。多层通配符表示它的父级和任意数量的子层级。多层通配符必须位于它自己的层级或者跟在主题层级分隔符后面。不管哪种情况，它都"),v("strong",[_._v("必须")]),_._v("是主题过滤器的最后一个字符 [MQTT-4.7.1-2]。")]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("非规范评注")])]),_._v(" "),v("p",[_._v("例如，如果客户端订阅主题 “sport/tennis/player1/#”，它会收到使用下列主题名发布的消息：")])]),_._v(" "),v("ul",[v("li",[_._v("“sport/tennis/player1”")]),_._v(" "),v("li",[_._v("“sport/tennis/player1/ranking”")]),_._v(" "),v("li",[_._v("“sport/tennis/player1/score/wimbledon”")])]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("非规范评注")])])]),_._v(" "),v("ul",[v("li",[_._v("“sport/#”也匹配单独的 “sport” ，因为 # 包括它的父级。")]),_._v(" "),v("li",[_._v("“#”是有效的，会收到所有的应用消息。")]),_._v(" "),v("li",[_._v("“sport/tennis/#”也是有效的。")]),_._v(" "),v("li",[_._v("“sport/tennis#”是无效的。")]),_._v(" "),v("li",[_._v("“sport/tennis/#/ranking”是无效的。")])]),_._v(" "),v("h4",{attrs:{id:"单层通配符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单层通配符"}},[_._v("#")]),_._v(" 单层通配符")]),_._v(" "),v("p",[_._v("加号 (‘+’ U+002B) 是只能用于单个主题层级匹配的通配符。")]),_._v(" "),v("p",[_._v("在主题过滤器的任意层级都可以使用单层通配符，包括第一个和最后一个层级。然而它"),v("strong",[_._v("必须")]),_._v("占据过滤器的整个层级 [MQTT-4.7.1-3]。可以在主题过滤器中的多个层级中使用它，也可以和多层通配符一起使用。")]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("非规范评注")])]),_._v(" "),v("p",[_._v("例如， “sport/tennis/+” 匹配 “sport/tennis/player1” 和 “sport/tennis/player2” ，但是不匹配 “sport/tennis/player1/ranking” 。同时，由于单层通配符只能匹配一个层级， “sport/+” 不匹配 “sport” 但是却匹配 “sport/”。")]),_._v(" "),v("p",[v("strong",[_._v("非规范评注")])])]),_._v(" "),v("ul",[v("li",[_._v("“+” 是有效的。")]),_._v(" "),v("li",[_._v("“+/tennis/#” 是有效的。")]),_._v(" "),v("li",[_._v("“sport+” 是无效的。")]),_._v(" "),v("li",[_._v("“sport/+/player1” 也是有效的。")]),_._v(" "),v("li",[_._v("“/finance” 匹配 “+/+” 和 “/+” ，但是不匹配 “+”。")])]),_._v(" "),v("h3",{attrs:{id:"_4-7-2-以-开头的主题-topics-beginning-with"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-2-以-开头的主题-topics-beginning-with"}},[_._v("#")]),_._v(" 4.7.2 以$开头的主题 Topics beginning with $")]),_._v(" "),v("p",[_._v("服务端"),v("strong",[_._v("不能")]),_._v("将 $ 字符开头的主题名匹配通配符 (#或+) 开头的主题过滤器 [MQTT-4.7.2-1]。服务端应该阻止客户端使用这种主题名与其它客户端交换消息。服务端实现可以将 $ 开头的主题名用作其他目的。")]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("非规范评注")])])]),_._v(" "),v("ul",[v("li",[_._v("$SYS/ 被广泛用作包含服务器特定信息或控制接口的主题的前缀。")]),_._v(" "),v("li",[_._v("应用不能使用 $ 字符开头的主题。")])]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("非规范评注")])])]),_._v(" "),v("ul",[v("li",[_._v("订阅 “#” 的客户端不会收到任何发布到以 “$” 开头主题的消息。")]),_._v(" "),v("li",[_._v("订阅 “+/monitor/Clients” 的客户端不会收到任何发布到 “$SYS/monitor/Clients” 的消息。")]),_._v(" "),v("li",[_._v("订阅 “$SYS/#” 的客户端会收到发布到以 “$SYS/” 开头主题的消息。")]),_._v(" "),v("li",[_._v("订阅 “$SYS/monitor/+” 的客户端会收到发布到 “$SYS/monitor/Clients” 主题的消息。")]),_._v(" "),v("li",[_._v("如果客户端想同时接受以 “$SYS/” 开头主题的消息和不以 $ 开头主题的消息，它需要同时订阅 “#” 和 ““$SYS/#”。")])]),_._v(" "),v("h3",{attrs:{id:"_4-7-3-主题语义和用法-topic-semantic-and-usage"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-3-主题语义和用法-topic-semantic-and-usage"}},[_._v("#")]),_._v(" 4.7.3 主题语义和用法 Topic semantic and usage")]),_._v(" "),v("p",[_._v("主题名和主题过滤器必须符合下列规则：")]),_._v(" "),v("ul",[v("li",[_._v("所有的主题名和主题过滤器"),v("strong",[_._v("必须")]),_._v("至少包含一个字符 [MQTT-4.7.3-1]。")]),_._v(" "),v("li",[_._v("主题名和主题过滤器是区分大小写的。")]),_._v(" "),v("li",[_._v("主题名和主题过滤器可以包含空格。")]),_._v(" "),v("li",[_._v("主题名或主题过滤器以前置或后置斜杠 “/” 区分。")]),_._v(" "),v("li",[_._v("只包含斜杠 “/” 的主题名或主题过滤器是合法的。")]),_._v(" "),v("li",[_._v("主题名和主题过滤器"),v("strong",[_._v("不能")]),_._v("包含空字符 (Unicode U+0000) ["),v("a",{attrs:{href:"#Unicode"}},[_._v("Unicode")]),_._v("] [MQTT-4.7.3-2]。")]),_._v(" "),v("li",[_._v("主题名和主题过滤器是UTF-8编码字符串，它们"),v("strong",[_._v("不能")]),_._v("超过65535字节 [MQTT-4.7.3-3]。见 1.5.3节。")])]),_._v(" "),v("p",[_._v("除了不能超过UTF-编码字符串的长度限制之外，主题名或主题过滤器的层级数量没有其它限制。")]),_._v(" "),v("p",[_._v("匹配订阅时，服务端"),v("strong",[_._v("不能")]),_._v("对主题名或主题过滤器执行任何规范化（normalization）处理，不能修改或替换任何未识别的字符 [MQTT-4.7.3-4]。主题过滤器中的每个非通配符层级需要逐字符匹配主题名中对应的层级才算匹配成功。")]),_._v(" "),v("blockquote",[v("p",[v("strong",[_._v("非规范评注")])]),_._v(" "),v("p",[_._v("使用UTF-8编码规则意味着，主题过滤器和主题名的比较可以通过比较编码后的UTF-8字节或解码后的Unicode字符。")]),_._v(" "),v("p",[v("strong",[_._v("非规范评注")])])]),_._v(" "),v("ul",[v("li",[_._v("“ACCOUNTS” 和 “Accounts” 是不同的主题名。")]),_._v(" "),v("li",[_._v("“Accounts payable” 是合法的主题名")]),_._v(" "),v("li",[_._v("“/finance” 和 “finance” 是不同的。")])]),_._v(" "),v("p",[_._v("如果订阅的主题过滤器与消息的主题名匹配，应用消息会被发送给每一个匹配的客户端订阅。主题可能是管理员在服务端预先定义好的，也可能是服务端收到第一个订阅或使用那个主题名的应用消息时动态添加的。服务端也可以使用一个安全组件有选择地授权客户端使用某个主题资源。")]),_._v(" "),v("h2",{attrs:{id:"_4-8-错误处理-handling-errors"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-错误处理-handling-errors"}},[_._v("#")]),_._v(" 4.8 错误处理 Handling errors")]),_._v(" "),v("p",[_._v("除非另有说明，如果服务端或客户端遇到了协议违规的行为，它"),v("strong",[_._v("必须")]),_._v("关闭传输这个协议违规控制报文的网络连接 [MQTT-4.8.0-1]。")]),_._v(" "),v("p",[_._v("客户端或服务端实现可能会遇到瞬时错误（Transient Error）（例如内部缓冲区满了的情况）导致无法成功处理MQTT报文。")]),_._v(" "),v("p",[_._v("如果客户端或服务端处理入站控制报文时遇到了瞬时错误，它"),v("strong",[_._v("必须")]),_._v("关闭传输那个控制报文的网络连接 [MQTT-4.8.0-2]。如果服务端发现了瞬时错误，它"),v("strong",[_._v("不应该")]),_._v("断开连接或者执行任何对其它客户端有影响的操作。")]),_._v(" "),v("h3",{attrs:{id:"项目主页"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目主页"}},[_._v("#")]),_._v(" 项目主页")]),_._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://github.com/mcxiaoke/mqtt",target:"_blank",rel:"noopener noreferrer"}},[_._v("MQTT协议中文版"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=s.exports}}]);