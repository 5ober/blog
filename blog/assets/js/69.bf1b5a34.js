(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{475:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_16-数值的整数次方"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16-数值的整数次方"}},[s._v("#")]),s._v(" 16. 数值的整数次方")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.nowcoder.com/practice/1a834e5e3e1a4b7ba251417554e07c00?tpId=13&tqId=11165&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"}},[s._v("NowCoder"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),t("p",[s._v("给定一个 double 类型的浮点数 base 和 int 类型的整数 exponent，求 base 的 exponent 次方。")]),s._v(" "),t("h2",{attrs:{id:"解题思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[s._v("#")]),s._v(" 解题思路")]),s._v(" "),t("p",[s._v("下面的讨论中 x 代表 base，n 代表 exponent。")]),s._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/48b1d459-8832-4e92-938a-728aae730739.jpg",width:"330px"}})]),t("br"),s._v(" "),t("p",[s._v("因为 (x*x)"),t("sup",[s._v("n/2")]),s._v(" 可以通过递归求解，并且每次递归 n 都减小一半，因此整个算法的时间复杂度为 O(logN)。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Power")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" base"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" exponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exponent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exponent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" base"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" isNegative "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exponent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        exponent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("exponent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        isNegative "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("double")]),s._v(" pow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Power")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("base "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" base"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" exponent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exponent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        pow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" base"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" isNegative "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" pow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" pow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("div",{attrs:{align:"center"}},[t("img",{attrs:{width:"320px",src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/githubio/公众号二维码-2.png"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);