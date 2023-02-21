(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{655:function(t,_,v){"use strict";v.r(_);var r=v(2),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"_3-3-publish-发布消息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-publish-发布消息"}},[t._v("#")]),t._v(" 3.3 PUBLISH – 发布消息")]),t._v(" "),v("p",[t._v("PUBLISH控制报文是指从客户端向服务端或者服务端向客户端传输一个应用消息。")]),t._v(" "),v("h3",{attrs:{id:"_3-3-1-固定报头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-固定报头"}},[t._v("#")]),t._v(" 3.3.1 固定报头")]),t._v(" "),v("p",[v("a",{attrs:{href:"#_%E5%9B%BE%E4%BE%8B_3.10_%E2%80%93"}},[t._v("图例 3.10 – PUBLISH报文固定报头")]),t._v("描述了固定报头的格式")]),t._v(" "),v("h5",{attrs:{id:"图例-3-10-publish报文固定报头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图例-3-10-publish报文固定报头"}},[t._v("#")]),t._v(" 图例 3.10 – PUBLISH报文固定报头")]),t._v(" "),v("table",{staticStyle:{"text-align":"center"}},[v("tr",[v("td",{attrs:{align:"center"}},[v("strong",[t._v("Bit")])]),t._v(" "),v("td",{attrs:{align:"center"}},[v("strong",[t._v("7")])]),t._v(" "),v("td",{attrs:{align:"center"}},[v("strong",[t._v("6")])]),t._v(" "),v("td",{attrs:{align:"center"}},[v("strong",[t._v("5")])]),t._v(" "),v("td",{attrs:{align:"center"}},[v("strong",[t._v("4")])]),t._v(" "),v("td",{attrs:{align:"center"}},[v("strong",[t._v("3")])]),t._v(" "),v("td",{attrs:{align:"center"}},[v("strong",[t._v("2")])]),t._v(" "),v("td",{attrs:{align:"center"}},[v("strong",[t._v("1")])]),t._v(" "),v("td",{attrs:{align:"center"}},[v("strong",[t._v("0")])])]),t._v(" "),v("tr",[v("td",[t._v("byte 1")]),t._v(" "),v("td",{attrs:{colspan:"4",align:"center"}},[t._v(" MQTT控制报文类型 (3)")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("DUP")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("QoS-H")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("QoS-")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("RETAIN")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("1")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("1")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("X")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("X")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("X")]),t._v(" "),v("td",{attrs:{align:"center"}},[t._v("X")])]),t._v(" "),v("tr",[v("td",[t._v("byte 2...")]),t._v(" "),v("td",{attrs:{colspan:"8",align:"center"}},[t._v("剩余长度")])])]),t._v(" "),v("h4",{attrs:{id:"重发标志-dup"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重发标志-dup"}},[t._v("#")]),t._v(" 重发标志 DUP")]),t._v(" "),v("p",[t._v("**位置：**第1个字节，第3位")]),t._v(" "),v("p",[t._v("如果DUP标志被设置为0，表示这是客户端或服务端第一次请求发送这个PUBLISH报文。如果DUP标志被设置为1，表示这可能是一个早前报文请求的重发。")]),t._v(" "),v("p",[t._v("客户端或服务端请求重发一个PUBLISH报文时，"),v("strong",[t._v("必须")]),t._v("将DUP标志设置为1 [MQTT-3.3.1.-1].。对于QoS 0的消息，DUP标志"),v("strong",[t._v("必须")]),t._v("设置为0 [MQTT-3.3.1-2]。")]),t._v(" "),v("p",[t._v("服务端发送PUBLISH报文给订阅者时，收到（入站）的PUBLISH报文的DUP标志的值不会被传播。发送（出站）的PUBLISH报文与收到（入站）的PUBLISH报文中的DUP标志是独立设置的，它的值"),v("strong",[t._v("必须")]),t._v("单独的根据发送（出站）的PUBLISH报文是否是一个重发来确定 [MQTT-3.3.1-3]。")]),t._v(" "),v("blockquote",[v("p",[v("strong",[t._v("非规范评注")])]),t._v(" "),v("p",[t._v("接收者收到一个DUP标志为1的控制报文时，不能假设它看到了一个这个报文之前的一个副本。")]),t._v(" "),v("p",[v("strong",[t._v("非规范评注")])]),t._v(" "),v("p",[t._v("需要特别指出的是，DUP标志关注的是控制报文本身，与它包含的应用消息无关。当使用QoS 1时，客户端可能会收到一个DUP标志为0的PUBLISH报文，这个报文包含一个它之前收到过的应用消息的副本，但是用的是不同的报文标识符。 2.3.1节提供了有关报文标识符的更多信息。")])]),t._v(" "),v("h4",{attrs:{id:"服务质量等级-qos"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务质量等级-qos"}},[t._v("#")]),t._v(" 服务质量等级 QoS")]),t._v(" "),v("p",[t._v("**位置：**第1个字节，第2-1位。")]),t._v(" "),v("p",[t._v("这个字段表示应用消息分发的服务质量等级保证。服务质量等级在 "),v("a",{attrs:{href:"#_%E8%A1%A8%E6%A0%BC_3.2_-%E6%9C%8D%E5%8A%A1%E8%B4%A8%E9%87%8F%E5%AE%9A%E4%B9%89"}},[t._v("表格 3.2 -服务质量定义")]),t._v(" 中列出。")]),t._v(" "),v("h5",{attrs:{id:"表格-3-2-服务质量定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表格-3-2-服务质量定义"}},[t._v("#")]),t._v(" 表格 3.2 -服务质量定义")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("QoS值")])]),t._v(" "),v("th",[v("strong",[t._v("Bit 2")])]),t._v(" "),v("th",[v("strong",[t._v("Bit 1")])]),t._v(" "),v("th",[v("strong",[t._v("描述")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("最多分发一次")])]),t._v(" "),v("tr",[v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("至少分发一次")])]),t._v(" "),v("tr",[v("td",[t._v("2")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("只分发一次")])]),t._v(" "),v("tr",[v("td",[t._v("-")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("保留位")])])])]),t._v(" "),v("p",[t._v("PUBLISH报文"),v("strong",[t._v("不能")]),t._v("将QoS所有的位设置为1。如果服务端或客户端收到QoS所有位都为1的PUBLISH报文，它"),v("strong",[t._v("必须")]),t._v("关闭网络连接  [MQTT-3.3.1-4]。")]),t._v(" "),v("h4",{attrs:{id:"保留标志-retain"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#保留标志-retain"}},[t._v("#")]),t._v(" 保留标志 RETAIN")]),t._v(" "),v("p",[t._v("**位置：**第1个字节，第0位。")]),t._v(" "),v("p",[t._v("如果客户端发给服务端的PUBLISH报文的保留（RETAIN）标志被设置为1，服务端"),v("strong",[t._v("必须")]),t._v("存储这个应用消息和它的服务质量等级（QoS），以便它可以被分发给未来的主题名匹配的订阅者 [MQTT-3.3.1-5]。一个新的订阅建立时，对每个匹配的主题名，如果存在最近保留的消息，它"),v("strong",[t._v("必须")]),t._v("被发送给这个订阅者 [MQTT-3.3.1-6]。如果服务端收到一条保留（RETAIN）标志为1的QoS 0消息，它"),v("strong",[t._v("必须")]),t._v("丢弃之前为那个主题保留的任何消息。它"),v("strong",[t._v("应该")]),t._v("将这个新的QoS 0消息当作那个主题的新保留消息，但是任何时候都"),v("strong",[t._v("可以")]),t._v("选择丢弃它 — 如果这种情况发生了，那个主题将没有保留消息 [MQTT-3.3.1-7]。有关存储状态的更多信息见 4.1节。")]),t._v(" "),v("p",[t._v("服务端发送PUBLISH报文给客户端时，如果消息是作为客户端一个新订阅的结果发送，它"),v("strong",[t._v("必须")]),t._v("将报文的保留标志设为1 [MQTT-3.3.1-8]。当一个PUBLISH报文发送给客户端是因为匹配一个已建立的订阅时，服务端"),v("strong",[t._v("必须")]),t._v("将保留标志设为0，不管它收到的这个消息中保留标志的值是多少 [MQTT-3.3.1-9]。")]),t._v(" "),v("p",[t._v("保留标志为1且有效载荷为零字节的PUBLISH报文会被服务端当作正常消息处理，它会被发送给订阅主题匹配的客户端。此外，同一个主题下任何现存的保留消息必须被移除，因此这个主题之后的任何订阅者都不会收到一个保留消息 [MQTT-3.3.1-10]。"),v("em",[t._v("当作正常")]),t._v(" 意思是现存的客户端收到的消息中保留标志未被设置。服务端"),v("strong",[t._v("不能")]),t._v("存储零字节的保留消息 [MQTT-3.3.1-11]。")]),t._v(" "),v("p",[t._v("如果客户端发给服务端的PUBLISH报文的保留标志位0，服务端"),v("strong",[t._v("不能")]),t._v("存储这个消息也"),v("strong",[t._v("不能")]),t._v("移除或替换任何现存的保留消息 [MQTT-3.3.1-12]。")]),t._v(" "),v("blockquote",[v("p",[v("strong",[t._v("非规范评注")])]),t._v(" "),v("p",[t._v("对于发布者不定期发送状态消息这个场景，保留消息很有用。新的订阅者将会收到最近的状态。")])]),t._v(" "),v("p",[v("strong",[t._v("剩余长度字段")])]),t._v(" "),v("p",[t._v("等于可变报头的长度加上有效载荷的长度。")]),t._v(" "),v("h3",{attrs:{id:"_3-3-2-可变报头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-可变报头"}},[t._v("#")]),t._v(" 3.3.2 可变报头")]),t._v(" "),v("p",[t._v("可变报头按顺序包含主题名和报文标识符。")]),t._v(" "),v("h4",{attrs:{id:"主题名-topic-name"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主题名-topic-name"}},[t._v("#")]),t._v(" 主题名 Topic Name")]),t._v(" "),v("p",[t._v("主题名（Topic Name）用于识别有效载荷数据应该被发布到哪一个信息通道。")]),t._v(" "),v("p",[t._v("主题名"),v("strong",[t._v("必须")]),t._v("是PUBLISH报文可变报头的第一个字段。它"),v("strong",[t._v("必须")]),t._v("是 1.5.3节定义的UTF-8编码的字符串 [MQTT-3.3.2-1]。")]),t._v(" "),v("p",[t._v("PUBLISH报文中的主题名"),v("strong",[t._v("不能")]),t._v("包含通配符 [MQTT-3.3.2-2]。")]),t._v(" "),v("p",[t._v("服务端发送给订阅客户端的PUBLISH报文的主题名"),v("strong",[t._v("必须")]),t._v("匹配该订阅的主题过滤器（根据 4.7节定义的匹配过程）[MQTT-3.3.2-3]。")]),t._v(" "),v("h4",{attrs:{id:"报文标识符-packet-identifier"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#报文标识符-packet-identifier"}},[t._v("#")]),t._v(" 报文标识符 Packet Identifier")]),t._v(" "),v("p",[t._v("只有当QoS等级是1或2时，报文标识符（Packet Identifier）字段才能出现在PUBLISH报文中。2.3.1节提供了有关报文标识符的更多信息。")]),t._v(" "),v("h4",{attrs:{id:"可变报头非规范示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可变报头非规范示例"}},[t._v("#")]),t._v(" 可变报头非规范示例")]),t._v(" "),v("p",[v("a",{attrs:{href:"#_Figure_3.11_-"}},[t._v("图例 3.11 – PUBLISH报文可变报头非规范示例")]),t._v(" 举例说明了 "),v("a",{attrs:{href:"#_%E8%A1%A8%E6%A0%BC_3.3_-"}},[t._v("表格 3.3 - PUBLISH报文非规范示例")]),t._v(" 中简要描述的PUBLISH报文的可变报头。")]),t._v(" "),v("h5",{attrs:{id:"表格-3-3-publish报文非规范示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表格-3-3-publish报文非规范示例"}},[t._v("#")]),t._v(" "),v("span",{staticClass:"anchor",attrs:{id:"_Table_3.2_-"}},[v("span",{staticClass:"anchor",attrs:{id:"_表格_3.3_-"}},[v("span",{staticClass:"anchor",attrs:{id:"_Toc425971861"}})])]),t._v("表格 3.3 - PUBLISH报文非规范示例")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("Field")])]),t._v(" "),v("th",[v("strong",[t._v("Value")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("主题名")]),t._v(" "),v("td",[t._v("a/b")])]),t._v(" "),v("tr",[v("td",[t._v("报文标识符")]),t._v(" "),v("td",[t._v("10")])])])]),t._v(" "),v("h5",{attrs:{id:"图例-3-11-publish报文可变报头非规范示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图例-3-11-publish报文可变报头非规范示例"}},[t._v("#")]),t._v(" 图例 3.11 – PUBLISH报文可变报头非规范示例")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th"),t._v(" "),v("th",[v("strong",[t._v("描述")])]),t._v(" "),v("th",[v("strong",[t._v("7")])]),t._v(" "),v("th",[v("strong",[t._v("6")])]),t._v(" "),v("th",[v("strong",[t._v("5")])]),t._v(" "),v("th",[v("strong",[t._v("4")])]),t._v(" "),v("th",[v("strong",[t._v("3")])]),t._v(" "),v("th",[v("strong",[t._v("2")])]),t._v(" "),v("th",[v("strong",[t._v("1")])]),t._v(" "),v("th",[v("strong",[t._v("0")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Topic Name 主题名")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("byte 1")]),t._v(" "),v("td",[t._v("Length MSB (0)")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("byte 2")]),t._v(" "),v("td",[t._v("Length LSB (3)")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("byte 3")]),t._v(" "),v("td",[t._v("‘a’ (0x61)")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("byte 4")]),t._v(" "),v("td",[t._v("‘/’ (0x2F)")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("byte 5")]),t._v(" "),v("td",[t._v("‘b’ (0x62)")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("报文标识符")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("byte 6")]),t._v(" "),v("td",[t._v("报文标识符 MSB (0)")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("byte 7")]),t._v(" "),v("td",[t._v("报文标识符 LSB (10)")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",[t._v("0")])])])]),t._v(" "),v("p",[t._v("示例中的主题名为 “a/b”，长度等于3，报文标识符为 “10”")]),t._v(" "),v("h3",{attrs:{id:"_3-3-3-有效载荷"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3-有效载荷"}},[t._v("#")]),t._v(" 3.3.3 有效载荷")]),t._v(" "),v("p",[t._v("有效载荷包含将被发布的应用消息。数据的内容和格式是应用特定的。有效载荷的长度这样计算：用固定报头中的剩余长度字段的值减去可变报头的长度。包含零长度有效载荷的PUBLISH报文是合法的。")]),t._v(" "),v("h3",{attrs:{id:"_3-3-4-响应"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4-响应"}},[t._v("#")]),t._v(" 3.3.4 响应")]),t._v(" "),v("p",[t._v("PUBLISH报文的接收者"),v("strong",[t._v("必须")]),t._v("按照根据PUBLISH报文中的QoS等级发送响应，见下面表格的描述 [MQTT-3.3.4-1]。")]),t._v(" "),v("h5",{attrs:{id:"表格-3-4-publish报文的预期响应"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表格-3-4-publish报文的预期响应"}},[t._v("#")]),t._v(" 表格 3.4 – PUBLISH报文的预期响应")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("服务质量等级")])]),t._v(" "),v("th",[v("strong",[t._v("预期响应")])])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("QoS 0")]),t._v(" "),v("td",[t._v("无响应")])]),t._v(" "),v("tr",[v("td",[t._v("QoS 1")]),t._v(" "),v("td",[t._v("PUBACK报文")])]),t._v(" "),v("tr",[v("td",[t._v("QoS 2")]),t._v(" "),v("td",[t._v("PUBREC报文")])])])]),t._v(" "),v("h3",{attrs:{id:"_3-3-5-动作-actions"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-5-动作-actions"}},[t._v("#")]),t._v(" 3.3.5 动作 Actions")]),t._v(" "),v("p",[t._v("客户端使用PUBLISH报文发送应用消息给服务端，目的是分发到其它订阅匹配的客户端。")]),t._v(" "),v("p",[t._v("服务端使用PUBLISH报文发送应用消息给每一个订阅匹配的客户端。")]),t._v(" "),v("p",[t._v("客户端使用带通配符的主题过滤器请求订阅时，客户端的订阅可能会重复，因此发布的消息可能会匹配多个过滤器。对于这种情况，服务端"),v("strong",[t._v("必须")]),t._v("将消息分发给所有订阅匹配的QoS等级最高的客户端 [MQTT-3.3.5-1]。服务端之后可以按照订阅的QoS等级，分发消息的副本给每一个匹配的订阅者。")]),t._v(" "),v("p",[t._v("收到一个PUBLISH报文时，接收者的动作取决于4.3节描述的QoS等级。")]),t._v(" "),v("p",[t._v("如果服务端实现不授权某个客户端发布PUBLISH报文，它没有办法通知那个客户端。它"),v("strong",[t._v("必须")]),t._v("按照正常的QoS规则发送一个正面的确认，或者关闭网络连接 [MQTT-3.3.5-2]。")]),t._v(" "),v("h3",{attrs:{id:"第三章目录-mqtt控制报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第三章目录-mqtt控制报文"}},[t._v("#")]),t._v(" 第三章目录 MQTT控制报文")]),t._v(" "),v("ul",[v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/03-ControlPackets.html"}},[t._v("3.0 Contents – MQTT控制报文")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0301-CONNECT.html"}},[t._v("3.1 CONNECT – 连接服务端")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0302-CONNACK.html"}},[t._v("3.2 CONNACK – 确认连接请求")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0303-PUBLISH.html"}},[t._v("3.3 PUBLISH – 发布消息")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0304-PUBACK.html"}},[t._v("3.4 PUBACK –发布确认")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0305-PUBREC.html"}},[t._v("3.5 PUBREC – 发布收到（QoS 2，第一步）")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0306-PUBREL.html"}},[t._v("3.6 PUBREL – 发布释放（QoS 2，第二步）")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0307-PUBCOMP.html"}},[t._v("3.7 PUBCOMP – 发布完成（QoS 2，第三步）")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0308-SUBSCRIBE.html"}},[t._v("3.8 SUBSCRIBE - 订阅主题")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0309-SUBACK.html"}},[t._v("3.9 SUBACK – 订阅确认")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0310-UNSUBSCRIBE.html"}},[t._v("3.10 UNSUBSCRIBE –取消订阅")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0311-UNSUBACK.html"}},[t._v("3.11 UNSUBACK – 取消订阅确认")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0312-PINGREQ.html"}},[t._v("3.12 PINGREQ – 心跳请求")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0313-PINGRESP.html"}},[t._v("3.13 PINGRESP – 心跳响应")])],1),t._v(" "),v("li",[v("RouterLink",{attrs:{to:"/views/mqtt/0314-DISCONNECT.html"}},[t._v("3.14 DISCONNECT –断开连接")])],1)]),t._v(" "),v("h3",{attrs:{id:"项目主页"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目主页"}},[t._v("#")]),t._v(" 项目主页")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://github.com/mcxiaoke/mqtt",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT协议中文版"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);