/**
 * 作者：LinWinCloud联沃云,github copilot
 * 快来关注作者，一件三联哦
 * https://gitee.com/LinWinCloud/
 * https://space.bilibili.com/1012391123
 */
//本js代码用于优化alert的提示
//说句实在话，原版的alert真的是shit一样的，我们可以用这个来优化一下
//该代码只能在浏览器中使用

function AlertUI(Text)
{
    /**
     * 参数说明
     * Text:提示的文本
     * icon:提示的图标
     */
    try
    {
            //获取body元素
    var Body = document.body;
    //创建一个div元素
    var alert = document.createElement("div");
    //设置div的id
    alert.id = "LinUI_Alert";
    //设置提示框的样式
    alert.style.display = 'block';
    alert.style.position = 'absolute';
    //获取以下的屏幕宽度
    //然后折中一下
    var ScreenWidth = document.body.clientWidth;
    var ScreenHeight = document.body.clientHeight;
    //设置提示框的位置
    alert.style.width = 270 + "px";
    alert.style.height = 170 +"px";
    alert.style.left = ScreenWidth/2 - 135 + "px";
    alert.style.top = ScreenHeight/2 - 85 + "px";
    alert.style.backgroundColor = "white";
    alert.style.borderRadius = "10px";
    alert.style.color = "white";
    alert.style.textAlign = "center";
    alert.style.boxShadow='0px 0px 10px black';
    alert.style.textAlign='center'
    //创建一个p元素
    var p = document.createElement("p");
    p.style.width = alert.style.width.replace("px","") - 40 + "px";
    p.style.textAlign='left';
    p.style.WordBreak='break-all';
    p.style.wordWrap = 'break-word';
    p.style.marginTop='20px';
    p.style.marginLeft='20px';
    p.style.height=alert.style.height.replace("px","") - 80 + "px";
    p.style.color='black';
    //设置p的内容
    p.innerHTML = Text;
    //床架一个确定按钮
    var btn = document.createElement("button");
    btn.style.width = "100px";
    btn.style.height = "30px";
    btn.style.marginLeft = alert.style.width.replace("px","") - 120 + "px";
    btn.style.backgroundColor = "white";
    btn.style.borderRadius = "5px";
    btn.style.color = "black";
    btn.style.border = "1px solid black";
    btn.innerHTML = "OK";
    //按钮事件
    btn.onclick = function()
    {
        //删除提示框
        Body.removeChild(alert);
    }
    btn.onmouseover = function()
    {
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.style.boxShadow='0px 0px 10px black';
    }
    btn.onmouseout = function()
    {
        btn.style.backgroundColor = "white";
        btn.style.color = "black";
        btn.style.boxShadow = '0px 0px 0px white';
    }

    //把p添加到div中
    alert.appendChild(p);
    //把div添加到body中
    Body.appendChild(alert);
    //把按钮添加到div中
    alert.appendChild(btn);
    return true;
    }
    catch (e)
    {
        console.log("[ERR]Error Alert: "+e);
        return false;
    }
}