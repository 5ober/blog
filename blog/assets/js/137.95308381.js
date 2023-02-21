(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{584:function(r,t,e){"use strict";e.r(t);var a=e(2),o=Object(a.a)({},(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("ul",[e("li",[e("a",{attrs:{href:"#%E4%B8%80%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98"}},[r._v("一、解决的问题")])]),r._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%8C%E4%B8%8E%E8%99%9A%E6%8B%9F%E6%9C%BA%E7%9A%84%E6%AF%94%E8%BE%83"}},[r._v("二、与虚拟机的比较")])]),r._v(" "),e("li",[e("a",{attrs:{href:"#%E4%B8%89%E4%BC%98%E5%8A%BF"}},[r._v("三、优势")])]),r._v(" "),e("li",[e("a",{attrs:{href:"#%E5%9B%9B%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF"}},[r._v("四、使用场景")])]),r._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BA%94%E9%95%9C%E5%83%8F%E4%B8%8E%E5%AE%B9%E5%99%A8"}},[r._v("五、镜像与容器")])]),r._v(" "),e("li",[e("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[r._v("参考资料")])])]),r._v(" "),e("h1",{attrs:{id:"一、解决的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、解决的问题"}},[r._v("#")]),r._v(" 一、解决的问题")]),r._v(" "),e("p",[r._v("由于不同的机器有不同的操作系统，以及不同的库和组件，在将一个应用部署到多台机器上需要进行大量的环境配置操作。")]),r._v(" "),e("p",[r._v("Docker 主要解决环境配置问题，它是一种虚拟化技术，对进程进行隔离，被隔离的进程独立于宿主操作系统和其它隔离的进程。使用 Docker 可以不修改应用程序代码，不需要开发人员学习特定环境下的技术，就能够将现有的应用程序部署在其它机器上。")]),r._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/011f3ef6-d824-4d43-8b2c-36dab8eaaa72-1.png",width:"400px"}})]),e("br"),r._v(" "),e("h1",{attrs:{id:"二、与虚拟机的比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、与虚拟机的比较"}},[r._v("#")]),r._v(" 二、与虚拟机的比较")]),r._v(" "),e("p",[r._v("虚拟机也是一种虚拟化技术，它与 Docker 最大的区别在于它是通过模拟硬件，并在硬件上安装操作系统来实现。")]),r._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/be608a77-7b7f-4f8e-87cc-f2237270bf69.png",width:"500"}})]),e("br"),r._v(" "),e("h2",{attrs:{id:"启动速度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动速度"}},[r._v("#")]),r._v(" 启动速度")]),r._v(" "),e("p",[r._v("启动虚拟机需要先启动虚拟机的操作系统，再启动应用，这个过程非常慢；")]),r._v(" "),e("p",[r._v("而启动 Docker 相当于启动宿主操作系统上的一个进程。")]),r._v(" "),e("h2",{attrs:{id:"占用资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#占用资源"}},[r._v("#")]),r._v(" 占用资源")]),r._v(" "),e("p",[r._v("虚拟机是一个完整的操作系统，需要占用大量的磁盘、内存和 CPU 资源，一台机器只能开启几十个的虚拟机。")]),r._v(" "),e("p",[r._v("而 Docker 只是一个进程，只需要将应用以及相关的组件打包，在运行时占用很少的资源，一台机器可以开启成千上万个 Docker。")]),r._v(" "),e("h1",{attrs:{id:"三、优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、优势"}},[r._v("#")]),r._v(" 三、优势")]),r._v(" "),e("p",[r._v("除了启动速度快以及占用资源少之外，Docker 具有以下优势：")]),r._v(" "),e("h2",{attrs:{id:"更容易迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更容易迁移"}},[r._v("#")]),r._v(" 更容易迁移")]),r._v(" "),e("p",[r._v("提供一致性的运行环境。已经打包好的应用可以在不同的机器上进行迁移，而不用担心环境变化导致无法运行。")]),r._v(" "),e("h2",{attrs:{id:"更容易维护"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更容易维护"}},[r._v("#")]),r._v(" 更容易维护")]),r._v(" "),e("p",[r._v("使用分层技术和镜像，使得应用可以更容易复用重复的部分。复用程度越高，维护工作也越容易。")]),r._v(" "),e("h2",{attrs:{id:"更容易扩展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更容易扩展"}},[r._v("#")]),r._v(" 更容易扩展")]),r._v(" "),e("p",[r._v("可以使用基础镜像进一步扩展得到新的镜像，并且官方和开源社区提供了大量的镜像，通过扩展这些镜像可以非常容易得到我们想要的镜像。")]),r._v(" "),e("h1",{attrs:{id:"四、使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、使用场景"}},[r._v("#")]),r._v(" 四、使用场景")]),r._v(" "),e("h2",{attrs:{id:"持续集成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续集成"}},[r._v("#")]),r._v(" 持续集成")]),r._v(" "),e("p",[r._v("持续集成指的是频繁地将代码集成到主干上，这样能够更快地发现错误。")]),r._v(" "),e("p",[r._v("Docker 具有轻量级以及隔离性的特点，在将代码集成到一个 Docker 中不会对其它 Docker 产生影响。")]),r._v(" "),e("h2",{attrs:{id:"提供可伸缩的云服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提供可伸缩的云服务"}},[r._v("#")]),r._v(" 提供可伸缩的云服务")]),r._v(" "),e("p",[r._v("根据应用的负载情况，可以很容易地增加或者减少 Docker。")]),r._v(" "),e("h2",{attrs:{id:"搭建微服务架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建微服务架构"}},[r._v("#")]),r._v(" 搭建微服务架构")]),r._v(" "),e("p",[r._v("Docker 轻量级的特点使得它很适合用于部署、维护、组合微服务。")]),r._v(" "),e("h1",{attrs:{id:"五、镜像与容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、镜像与容器"}},[r._v("#")]),r._v(" 五、镜像与容器")]),r._v(" "),e("p",[r._v("镜像是一种静态的结构，可以看成面向对象里面的类，而容器是镜像的一个实例。")]),r._v(" "),e("p",[r._v("镜像包含着容器运行时所需要的代码以及其它组件，它是一种分层结构，每一层都是只读的（read-only layers）。构建镜像时，会一层一层构建，前一层是后一层的基础。镜像的这种分层存储结构很适合镜像的复用以及定制。")]),r._v(" "),e("p",[r._v("构建容器时，通过在镜像的基础上添加一个可写层（writable layer），用来保存着容器运行过程中的修改。")]),r._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/docker-filesystems-busyboxrw.png"}})]),e("br"),r._v(" "),e("h1",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[r._v("#")]),r._v(" 参考资料")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.docker.com/2017/08/docker-101-introduction-docker-webinar-recap/",target:"_blank",rel:"noopener noreferrer"}},[r._v("DOCKER 101: INTRODUCTION TO DOCKER WEBINAR RECAP"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker 入门教程"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"http://www.bogotobogo.com/DevOps/Docker/Docker_Container_vs_Virtual_Machine.php",target:"_blank",rel:"noopener noreferrer"}},[r._v("Docker container vs Virtual machine"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://linoxide.com/linux-how-to/dockerfile-create-docker-container/",target:"_blank",rel:"noopener noreferrer"}},[r._v("How to Create Docker Container using Dockerfile"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"http://www.cnblogs.com/sammyliu/p/5877964.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("理解 Docker（2）：Docker 镜像"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/introduction/why.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("为什么要使用 Docker？"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"https://www.docker.com/what-docker",target:"_blank",rel:"noopener noreferrer"}},[r._v("What is Docker"),e("OutboundLink")],1)]),r._v(" "),e("li",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/09/continuous-integration.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("持续集成是什么？"),e("OutboundLink")],1)])]),r._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{width:"320px",src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/githubio/公众号二维码-2.png"}})])])}),[],!1,null,null,null);t.default=o.exports}}]);