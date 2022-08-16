# LinUIJS文档 2022

## 什么是LinUIJS
LinUIJS是一款使用JavaScript和css完成大部分前端工作的JavaScript库。
<br />
实现使用少量JavaScript便可以描述构建一个非常美观的前端页面。内置很多
<br />
函数，但是都不会太大的影响使用的效率。

## LinUIJS运行条件
LinUIJS必须嵌入HTML页面，无法单独成为一个单独的js文件。LinUIJS是前端
<br />
库，无法运行与nodejs。

## LinUIJS导入

### 克隆库

进入服务器网页执行目录内，打开终端（Linux命令）,输入：
###### git clone https://gitee.com/-/ide/project/LinWin-Cloud/lin-uijs
###### mv lin-uijs LinUIJS

### 在HTML内导入
在HTML内添加 <script src="./LinUIJS/LinUIjs.js"></script>

## LinUIJS使用注意
在HTML文件内LinUIJS文件编写结构如下

<!DOCTYPE html>

<html>

    <head>

        ... ... （头部代码）

    </head>

    <body>

        ... ... ...(其他代码)

        <script>

            setTimeout(() => {  

                ... ...（LinUIJS代码）

            }, 100);

        </script>

    </body>

</html>


使用延时函数，因为JavaScript所有JavaScript和LinUIJS库加载完成后
<br />
，如果不对LinUIJS加以延时启动，您编写的LinUIJS将无法获取已经定义好
<br />
的库和代码。

## 组件的使用
参考文档：<a href='./UI.md'>组件使用文档</a>

## 函数库和API使用文档
参考文档：<a href='lib.md'>API使用文档</a>
参考文档：<a href='src.md'>函数库使用文档</a>