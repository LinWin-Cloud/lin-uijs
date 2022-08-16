
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
        var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;  
        console.log("[!]Load JavaScript: "+url+" ;Done...Using Time: "+loadTime+"ms");
    }
    catch (e)
    {
        console.log(e);
        return null;
    }
}
console.log("[!]Load JavaScript ... ...")
var config = "./LinUIJS/"
//需要的加载的js文件
try
{
    LoadJS(config+"src/Maths.js");
    LoadJS(config+"src/add.js");    
    LoadJS(config+"src/Remove.js");
    LoadJS(config+"src/SQL_DOM.js");
    LoadJS(config+"src/XSS_DOM.js");
    LoadJS(config+"src/Start_Search.js");
    LoadJS(config+"lib/GetUser_InFo.js");
    LoadJS(config+"lib/Time.js");
    LoadJS(config+"UI/LinUI_Alert.js");
    LoadJS(config+"UI/LinUI_Button.js");
    LoadJS(config+"UI/LinUI_Img.js");
    LoadJS(config+"UI/LinUI_Input.js");
    LoadJS(config+"UI/LinUI_Label.js");
    LoadJS(config+"UI/LinUI_Link.js");
    LoadJS(config+"UI/LinUI_Panel.js");
    LoadJS(config+"UI/LinUI_Table.js");
    LoadJS(config+"UI/LinUI_SelectMenu.js");
}
catch (e)
{
    console.log("[!]Load JavaScript Error: "+e);
}

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
