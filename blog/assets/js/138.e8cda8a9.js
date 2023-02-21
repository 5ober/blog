(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{585:function(t,a,s){"use strict";s.r(a);var r=s(2),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li",[s("a",{attrs:{href:"#%E9%9B%86%E4%B8%AD%E5%BC%8F%E4%B8%8E%E5%88%86%E5%B8%83%E5%BC%8F"}},[t._v("集中式与分布式")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%AD%E5%BF%83%E6%9C%8D%E5%8A%A1%E5%99%A8"}},[t._v("中心服务器")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%B7%A5%E4%BD%9C%E6%B5%81"}},[t._v("工作流")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%88%86%E6%94%AF%E5%AE%9E%E7%8E%B0"}},[t._v("分支实现")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%86%B2%E7%AA%81"}},[t._v("冲突")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#fast-forward"}},[t._v("Fast forward")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%82%A8%E8%97%8Fstashing"}},[t._v("储藏（Stashing）")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#ssh-%E4%BC%A0%E8%BE%93%E8%AE%BE%E7%BD%AE"}},[t._v("SSH 传输设置")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#gitignore-%E6%96%87%E4%BB%B6"}},[t._v(".gitignore 文件")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#git-%E5%91%BD%E4%BB%A4%E4%B8%80%E8%A7%88"}},[t._v("Git 命令一览")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("参考资料")])])]),t._v(" "),s("h1",{attrs:{id:"集中式与分布式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集中式与分布式"}},[t._v("#")]),t._v(" 集中式与分布式")]),t._v(" "),s("p",[t._v("Git 属于分布式版本控制系统，而 SVN 属于集中式。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/image-20191208200656794.png"}})]),s("br"),t._v(" "),s("p",[t._v("集中式版本控制只有中心服务器拥有一份代码，而分布式版本控制每个人的电脑上就有一份完整的代码。")]),t._v(" "),s("p",[t._v("集中式版本控制有安全性问题，当中心服务器挂了所有人都没办法工作了。")]),t._v(" "),s("p",[t._v("集中式版本控制需要连网才能工作，如果网速过慢，那么提交一个文件会慢的无法让人忍受。而分布式版本控制不需要连网就能工作。")]),t._v(" "),s("p",[t._v("分布式版本控制新建分支、合并分支操作速度非常快，而集中式版本控制新建一个分支相当于复制一份完整代码。")]),t._v(" "),s("h1",{attrs:{id:"中心服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中心服务器"}},[t._v("#")]),t._v(" 中心服务器")]),t._v(" "),s("p",[t._v("中心服务器用来交换每个用户的修改，没有中心服务器也能工作，但是中心服务器能够 24 小时保持开机状态，这样就能更方便的交换修改。")]),t._v(" "),s("p",[t._v("Github 就是一个中心服务器。")]),t._v(" "),s("h1",{attrs:{id:"工作流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作流"}},[t._v("#")]),t._v(" 工作流")]),t._v(" "),s("p",[t._v("新建一个仓库之后，当前目录就成为了工作区，工作区下有一个隐藏目录 .git，它属于 Git 的版本库。")]),t._v(" "),s("p",[t._v("Git 的版本库有一个称为 Stage 的暂存区以及最后的 History 版本库，History 存储所有分支信息，使用一个 HEAD 指针指向当前分支。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/image-20191208195941661.png"}})]),s("br"),t._v(" "),s("ul",[s("li",[t._v("git add files 把文件的修改添加到暂存区")]),t._v(" "),s("li",[t._v("git commit 把暂存区的修改提交到当前分支，提交之后暂存区就被清空了")]),t._v(" "),s("li",[t._v("git reset -- files 使用当前分支上的修改覆盖暂存区，用来撤销最后一次 git add files")]),t._v(" "),s("li",[t._v("git checkout -- files 使用暂存区的修改覆盖工作目录，用来撤销本地修改")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/image-20191208200014395.png"}})]),s("br"),t._v(" "),s("p",[t._v("可以跳过暂存区域直接从分支中取出修改，或者直接提交修改到分支中。")]),t._v(" "),s("ul",[s("li",[t._v("git commit -a 直接把所有文件的修改添加到暂存区然后执行提交")]),t._v(" "),s("li",[t._v("git checkout HEAD -- files 取出最后一次修改，可以用来进行回滚操作")])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/image-20191208200543923.png"}})]),s("br"),t._v(" "),s("h1",{attrs:{id:"分支实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支实现"}},[t._v("#")]),t._v(" 分支实现")]),t._v(" "),s("p",[t._v("使用指针将每个提交连接成一条时间线，HEAD 指针指向当前分支指针。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/image-20191208203219927.png"}})]),s("br"),t._v(" "),s("p",[t._v("新建分支是新建一个指针指向时间线的最后一个节点，并让 HEAD 指针指向新分支，表示新分支成为当前分支。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/image-20191208203142527.png"}})]),s("br"),t._v(" "),s("p",[t._v("每次提交只会让当前分支指针向前移动，而其它分支指针不会移动。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/image-20191208203112400.png"}})]),s("br"),t._v(" "),s("p",[t._v("合并分支也只需要改变指针即可。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/image-20191208203010540.png"}})]),s("br"),t._v(" "),s("h1",{attrs:{id:"冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#冲突"}},[t._v("#")]),t._v(" 冲突")]),t._v(" "),s("p",[t._v("当两个分支都对同一个文件的同一行进行了修改，在分支合并时就会产生冲突。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/image-20191208203034705.png"}})]),s("br"),t._v(" "),s("p",[t._v("Git 会使用 <<<<<<< ，======= ，>>>>>>> 标记出不同分支的内容，只需要把不同分支中冲突部分修改成一样就能解决冲突。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<<<<<<< HEAD\nCreating a new branch is quick & simple.\n=======\nCreating a new branch is quick AND simple.\n>>>>>>> feature1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h1",{attrs:{id:"fast-forward"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fast-forward"}},[t._v("#")]),t._v(" Fast forward")]),t._v(" "),s("p",[t._v('"快进式合并"（fast-farward merge），会直接将 master 分支指向合并的分支，这种模式下进行分支合并会丢失分支信息，也就不能在分支历史上看出分支信息。')]),t._v(" "),s("p",[t._v("可以在合并时加上 --no-ff 参数来禁用 Fast forward 模式，并且加上 -m 参数让合并时产生一个新的 commit。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ git merge --no-ff -m "merge with no-ff" dev\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/image-20191208203639712.png"}})]),s("br"),t._v(" "),s("h1",{attrs:{id:"储藏（stashing）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#储藏（stashing）"}},[t._v("#")]),t._v(" 储藏（Stashing）")]),t._v(" "),s("p",[t._v("在一个分支上操作之后，如果还没有将修改提交到分支上，此时进行切换分支，那么另一个分支上也能看到新的修改。这是因为所有分支都共用一个工作区的缘故。")]),t._v(" "),s("p",[t._v("可以使用 git stash 将当前分支的修改储藏起来，此时当前工作区的所有修改都会被存到栈中，也就是说当前工作区是干净的，没有任何未提交的修改。此时就可以安全的切换到其它分支上了。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ git stash\nSaved working directory and index state \\ "WIP on master: 049d078 added the index file"\nHEAD is now at 049d078 added the index file (To restore them type "git stash apply")\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("该功能可以用于 bug 分支的实现。如果当前正在 dev 分支上进行开发，但是此时 master 上有个 bug 需要修复，但是 dev 分支上的开发还未完成，不想立即提交。在新建 bug 分支并切换到 bug 分支之前就需要使用 git stash 将 dev 分支的未提交修改储藏起来。")]),t._v(" "),s("h1",{attrs:{id:"ssh-传输设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-传输设置"}},[t._v("#")]),t._v(" SSH 传输设置")]),t._v(" "),s("p",[t._v("Git 仓库和 Github 中心仓库之间的传输是通过 SSH 加密。")]),t._v(" "),s("p",[t._v("如果工作区下没有 .ssh 目录，或者该目录下没有 id_rsa 和 id_rsa.pub 这两个文件，可以通过以下命令来创建 SSH Key：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ ssh-keygen -t rsa -C "youremail@example.com"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v('然后把公钥 id_rsa.pub 的内容复制到 Github "Account settings" 的 SSH Keys 中。')]),t._v(" "),s("h1",{attrs:{id:"gitignore-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gitignore-文件"}},[t._v("#")]),t._v(" .gitignore 文件")]),t._v(" "),s("p",[t._v("忽略以下文件：")]),t._v(" "),s("ul",[s("li",[t._v("操作系统自动生成的文件，比如缩略图；")]),t._v(" "),s("li",[t._v("编译生成的中间文件，比如 Java 编译产生的 .class 文件；")]),t._v(" "),s("li",[t._v("自己的敏感信息，比如存放口令的配置文件。")])]),t._v(" "),s("p",[t._v("不需要全部自己编写，可以到 "),s("a",{attrs:{href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/github/gitignore"),s("OutboundLink")],1),t._v(" 中进行查询。")]),t._v(" "),s("h1",{attrs:{id:"git-命令一览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-命令一览"}},[t._v("#")]),t._v(" Git 命令一览")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/7a29acce-f243-4914-9f00-f2988c528412.jpg",width:""}})]),s("br"),t._v(" "),s("p",[t._v("比较详细的地址：http://www.cheat-sheets.org/saved-copy/git-cheat-sheet.pdf")]),t._v(" "),s("h1",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://rogerdudler.github.io/git-guide/index.zh.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git - 简明指南"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解 Git"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000",target:"_blank",rel:"noopener noreferrer"}},[t._v("廖雪峰 : Git 教程"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://learngitbranching.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn Git Branching"),s("OutboundLink")],1)])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{width:"320px",src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/githubio/公众号二维码-2.png"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);