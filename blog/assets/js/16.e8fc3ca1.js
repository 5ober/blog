(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{421:function(a,t,e){"use strict";e.r(t);var s=e(1),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("Boxx"),a._v(" "),t("blockquote",[t("p",[a._v("本文主要介绍JDK中Collection和Map相关知识体系，后续章节将对主要对类进行源码解读。")])]),a._v(" "),t("h1",{attrs:{id:"知识体系结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#知识体系结构"}},[a._v("#")]),a._v(" 知识体系结构")]),a._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/java_collections_overview.png",alt:""}})]),a._v(" "),t("h1",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("p",[a._v("容器，就是可以容纳其他Java对象的对象。*Java Collections Framework(JCF)*为Java开发者提供了通用的容器，其始于JDK 1.2，优点是:")]),a._v(" "),t("ul",[t("li",[a._v("降低编程难度")]),a._v(" "),t("li",[a._v("提高程序性能")]),a._v(" "),t("li",[a._v("提高API间的互操作性")]),a._v(" "),t("li",[a._v("降低学习难度")]),a._v(" "),t("li",[a._v("降低设计和实现相关API的难度")]),a._v(" "),t("li",[a._v("增加程序的重用性")])]),a._v(" "),t("p",[a._v("Java容器里只能放对象，对于基本类型(int, long, float, double等)，需要将其包装成对象类型后(Integer, Long, Float, Double等)才能放到容器里。很多时候拆包装和解包装能够自动完成。这虽然会导致额外的性能和空间开销，但简化了设计和编程。")]),a._v(" "),t("h1",{attrs:{id:"collection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#collection"}},[a._v("#")]),a._v(" Collection")]),a._v(" "),t("blockquote",[t("p",[a._v("容器主要包括 Collection 和 Map 两种，Collection 存储着对象的集合，而 Map 存储着键值对(两个对象)的映射表。")])]),a._v(" "),t("h3",{attrs:{id:"set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[a._v("#")]),a._v(" Set")]),a._v(" "),t("h4",{attrs:{id:"treeset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#treeset"}},[a._v("#")]),a._v(" TreeSet")]),a._v(" "),t("p",[a._v("基于红黑树实现，支持有序性操作，例如根据一个范围查找元素的操作。但是查找效率不如 HashSet，HashSet 查找的时间复杂度为 O(1)，TreeSet 则为 O(logN)。")]),a._v(" "),t("h4",{attrs:{id:"hashset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashset"}},[a._v("#")]),a._v(" HashSet")]),a._v(" "),t("p",[a._v("基于哈希表实现，支持快速查找，但不支持有序性操作。并且失去了元素的插入顺序信息，也就是说使用 Iterator 遍历 HashSet 得到的结果是不确定的。")]),a._v(" "),t("h4",{attrs:{id:"linkedhashset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashset"}},[a._v("#")]),a._v(" LinkedHashSet")]),a._v(" "),t("p",[a._v("具有 HashSet 的查找效率，且内部使用双向链表维护元素的插入顺序。")]),a._v(" "),t("h3",{attrs:{id:"list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[a._v("#")]),a._v(" List")]),a._v(" "),t("h4",{attrs:{id:"arraylist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arraylist"}},[a._v("#")]),a._v(" ArrayList")]),a._v(" "),t("p",[a._v("基于动态数组实现，支持随机访问。")]),a._v(" "),t("h4",{attrs:{id:"vector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vector"}},[a._v("#")]),a._v(" Vector")]),a._v(" "),t("p",[a._v("和 ArrayList 类似，但它是线程安全的。")]),a._v(" "),t("h4",{attrs:{id:"linkedlist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linkedlist"}},[a._v("#")]),a._v(" LinkedList")]),a._v(" "),t("p",[a._v("基于双向链表实现，只能顺序访问，但是可以快速地在链表中间插入和删除元素。不仅如此，LinkedList 还可以用作栈、队列和双向队列。")]),a._v(" "),t("h3",{attrs:{id:"queue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[a._v("#")]),a._v(" Queue")]),a._v(" "),t("h4",{attrs:{id:"linkedlist-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linkedlist-2"}},[a._v("#")]),a._v(" LinkedList")]),a._v(" "),t("p",[a._v("可以用它来实现双向队列。")]),a._v(" "),t("h4",{attrs:{id:"priorityqueue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#priorityqueue"}},[a._v("#")]),a._v(" PriorityQueue")]),a._v(" "),t("p",[a._v("基于堆结构实现，可以用它来实现优先队列。")]),a._v(" "),t("h1",{attrs:{id:"map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[a._v("#")]),a._v(" Map")]),a._v(" "),t("h3",{attrs:{id:"treemap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#treemap"}},[a._v("#")]),a._v(" TreeMap")]),a._v(" "),t("p",[a._v("基于红黑树实现。")]),a._v(" "),t("h3",{attrs:{id:"hashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap"}},[a._v("#")]),a._v(" HashMap")]),a._v(" "),t("p",[a._v("基于哈希表实现。")]),a._v(" "),t("h3",{attrs:{id:"hashtable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashtable"}},[a._v("#")]),a._v(" HashTable")]),a._v(" "),t("p",[a._v("和 HashMap 类似，但它是线程安全的，这意味着同一时刻多个线程可以同时写入 HashTable 并且不会导致数据不一致。它是遗留类，不应该去使用它。现在可以使用 ConcurrentHashMap 来支持线程安全，并且 ConcurrentHashMap 的效率会更高，因为 ConcurrentHashMap 引入了分段锁。")]),a._v(" "),t("h3",{attrs:{id:"linkedhashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashmap"}},[a._v("#")]),a._v(" LinkedHashMap")]),a._v(" "),t("p",[a._v("使用双向链表来维护元素的顺序，顺序为插入顺序或者最近最少使用(LRU)顺序。")]),a._v(" "),t("p",[a._v("参考内容")]),a._v(" "),t("ul",[t("li",[a._v("CarpenterLee/JCFInternals https://github.com/CarpenterLee/JCFInternals")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);