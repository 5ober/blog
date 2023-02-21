(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{502:function(t,v,r){"use strict";r.r(v);var _=r(2),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,r=t._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"_3-14-disconnect-断开连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-14-disconnect-断开连接"}},[t._v("#")]),t._v(" 3.14 DISCONNECT –断开连接")]),t._v(" "),r("p",[t._v("DISCONNECT报文是客户端发给服务端的最后一个控制报文。表示客户端正常断开连接。")]),t._v(" "),r("h3",{attrs:{id:"_3-14-1-固定报头"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-14-1-固定报头"}},[t._v("#")]),t._v(" 3.14.1 固定报头")]),t._v(" "),r("h5",{attrs:{id:"图例-3-35-disconnect报文固定报头"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图例-3-35-disconnect报文固定报头"}},[t._v("#")]),t._v(" 图例 3.35 – DISCONNECT报文固定报头")]),t._v(" "),r("table",{staticStyle:{"text-align":"center"}},[r("tr",[r("td",{attrs:{align:"center"}},[r("strong",[t._v("Bit")])]),t._v(" "),r("td",{attrs:{align:"center"}},[r("strong",[t._v("7")])]),t._v(" "),r("td",{attrs:{align:"center"}},[r("strong",[t._v("6")])]),t._v(" "),r("td",{attrs:{align:"center"}},[r("strong",[t._v("5")])]),t._v(" "),r("td",{attrs:{align:"center"}},[r("strong",[t._v("4")])]),t._v(" "),r("td",{attrs:{align:"center"}},[r("strong",[t._v("3")])]),t._v(" "),r("td",{attrs:{align:"center"}},[r("strong",[t._v("2")])]),t._v(" "),r("td",{attrs:{align:"center"}},[r("strong",[t._v("1")])]),t._v(" "),r("td",{attrs:{align:"center"}},[r("strong",[t._v("0")])])]),t._v(" "),r("tr",[r("td",[t._v("byte 1")]),t._v(" "),r("td",{attrs:{colspan:"4",align:"center"}},[t._v("MQTT控制报文类型 (14)")]),t._v(" "),r("td",{attrs:{colspan:"4",align:"center"}},[t._v("保留位")])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("1")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("1")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("1")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("0")])]),t._v(" "),r("tr",[r("td",[t._v("byte 2")]),t._v(" "),r("td",{attrs:{colspan:"8",align:"center"}},[t._v("剩余长度 (0)")])]),t._v(" "),r("tr",[r("td"),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("0")]),t._v(" "),r("td",{attrs:{align:"center"}},[t._v("0")])])]),t._v(" "),r("p",[t._v("服务端"),r("strong",[t._v("必须")]),t._v("验证所有的保留位都被设置为0，如果它们不为0"),r("strong",[t._v("必须")]),t._v("断开连接 [MQTT-3.14.1-1]。")]),t._v(" "),r("h3",{attrs:{id:"_3-14-2-可变报头"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-14-2-可变报头"}},[t._v("#")]),t._v(" 3.14.2 可变报头")]),t._v(" "),r("p",[t._v("DISCONNECT报文没有可变报头。")]),t._v(" "),r("h3",{attrs:{id:"_3-14-3-有效载荷"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-14-3-有效载荷"}},[t._v("#")]),t._v(" 3.14.3 有效载荷")]),t._v(" "),r("p",[t._v("DISCONNECT报文没有有效载荷。")]),t._v(" "),r("h3",{attrs:{id:"_3-14-4-响应"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-14-4-响应"}},[t._v("#")]),t._v(" 3.14.4 响应")]),t._v(" "),r("p",[t._v("客户端发送DISCONNECT报文之后：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("必须")]),t._v("关闭网络连接 [MQTT-3.14.4-1]。")]),t._v(" "),r("li",[r("strong",[t._v("不能")]),t._v("通过那个网络连接再发送任何控制报文 [MQTT-3.14.4-2]。")])]),t._v(" "),r("p",[t._v("服务端在收到DISCONNECT报文时：")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("必须")]),t._v("丢弃任何与当前连接关联的未发布的遗嘱消息，具体描述见 3.1.2.5节 [MQTT-3.14.4-3]。")]),t._v(" "),r("li",[r("strong",[t._v("应该")]),t._v("关闭网络连接，如果客户端 还没有这么做。")])]),t._v(" "),r("h2",{attrs:{id:"第三章目录-mqtt控制报文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第三章目录-mqtt控制报文"}},[t._v("#")]),t._v(" 第三章目录 MQTT控制报文")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/03-ControlPackets.html"}},[t._v("3.0 Contents – MQTT控制报文")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0301-CONNECT.html"}},[t._v("3.1 CONNECT – 连接服务端")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0302-CONNACK.html"}},[t._v("3.2 CONNACK – 确认连接请求")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0303-PUBLISH.html"}},[t._v("3.3 PUBLISH – 发布消息")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0304-PUBACK.html"}},[t._v("3.4 PUBACK –发布确认")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0305-PUBREC.html"}},[t._v("3.5 PUBREC – 发布收到（QoS 2，第一步）")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0306-PUBREL.html"}},[t._v("3.6 PUBREL – 发布释放（QoS 2，第二步）")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0307-PUBCOMP.html"}},[t._v("3.7 PUBCOMP – 发布完成（QoS 2，第三步）")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0308-SUBSCRIBE.html"}},[t._v("3.8 SUBSCRIBE - 订阅主题")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0309-SUBACK.html"}},[t._v("3.9 SUBACK – 订阅确认")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0310-UNSUBSCRIBE.html"}},[t._v("3.10 UNSUBSCRIBE –取消订阅")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0311-UNSUBACK.html"}},[t._v("3.11 UNSUBACK – 取消订阅确认")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0312-PINGREQ.html"}},[t._v("3.12 PINGREQ – 心跳请求")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0313-PINGRESP.html"}},[t._v("3.13 PINGRESP – 心跳响应")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0314-DISCONNECT.html"}},[t._v("3.14 DISCONNECT –断开连接")])],1)]),t._v(" "),r("h3",{attrs:{id:"第三章目录-mqtt控制报文-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第三章目录-mqtt控制报文-2"}},[t._v("#")]),t._v(" 第三章目录 MQTT控制报文")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/03-ControlPackets.html"}},[t._v("3.0 Contents – MQTT控制报文")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0301-CONNECT.html"}},[t._v("3.1 CONNECT – 连接服务端")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0302-CONNACK.html"}},[t._v("3.2 CONNACK – 确认连接请求")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0303-PUBLISH.html"}},[t._v("3.3 PUBLISH – 发布消息")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0304-PUBACK.html"}},[t._v("3.4 PUBACK –发布确认")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0305-PUBREC.html"}},[t._v("3.5 PUBREC – 发布收到（QoS 2，第一步）")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0306-PUBREL.html"}},[t._v("3.6 PUBREL – 发布释放（QoS 2，第二步）")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0307-PUBCOMP.html"}},[t._v("3.7 PUBCOMP – 发布完成（QoS 2，第三步）")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0308-SUBSCRIBE.html"}},[t._v("3.8 SUBSCRIBE - 订阅主题")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0309-SUBACK.html"}},[t._v("3.9 SUBACK – 订阅确认")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0310-UNSUBSCRIBE.html"}},[t._v("3.10 UNSUBSCRIBE –取消订阅")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0311-UNSUBACK.html"}},[t._v("3.11 UNSUBACK – 取消订阅确认")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0312-PINGREQ.html"}},[t._v("3.12 PINGREQ – 心跳请求")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0313-PINGRESP.html"}},[t._v("3.13 PINGRESP – 心跳响应")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/views/mqtt/0314-DISCONNECT.html"}},[t._v("3.14 DISCONNECT –断开连接")])],1)]),t._v(" "),r("h3",{attrs:{id:"项目主页"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目主页"}},[t._v("#")]),t._v(" 项目主页")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/mcxiaoke/mqtt",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT协议中文版"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=e.exports}}]);