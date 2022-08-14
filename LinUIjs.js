
/**
 * LinUIjs用于基本的dom操作
 * 而且在原本的基础上增加了一些常用的方法
 * 更加方便的使用
 * 亿点点的优化
*/

//加载LinUIjs和组件js
function LoadJS(url)
{
    //加载js文件
    try
    {
        var Body = document.body;
        var script = document.createElement("script");
        script.src = url;
        document.head.appendChild(script);
    }
    catch (e)
    {
        console.log(e);
        return null;
    }
}
var config = "./LinUIJS/"
LoadJS(config+"src/Maths.js");


function Hello()
{
    //用于开始的在控制台内的输出
    console.log("<====LinUIJS====>");
    //输出
    console.log("LinWinCloud");
    console.log("https://gitee.com/LinWin-Cloud")
}
function Help_LinUI()
{
    //显示LinUI的帮助
    
}
function PLUS_MINUS1(x,y)
{
    return PLUS_MINUS(x,y)
}
