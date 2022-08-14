/**
 * 本代码部分采用github copilot的代码
 * 作者: LinWinCloud联沃云
 * 链接: https://gitee.com/LinWin-Cloud/LinUIjs
 */

/* 使用ID获取dom然后删除 */
function DomRemoveID(ID)
{
    //用于删除Dom元素
    try
    {
        //首先获取元素
        var Dom = document.getElementById(ID);
        console.log(Dom);
        //获取父元素
        var Parent = Dom.parentNode;
        //删除元素
        console.log("[!]ReMove DOM: " + ID);
        Parent.removeChild(Dom);
    }
    catch (e)
    {
        console.log("[ERR]ReMove Dom Error: "+e);
    }
}
/* 获取名称然后删除 */
function DomRemoveName(Name,Num)
{
    /**
     * 参数 Name 是用于获取要删除的内容
     * 参数 Num 是删除第页面的第几个元素，因为Name不是唯一的元素，所以要指定删除的元素
     */
    //用于删除Dom元素
    try
    {
        //首先获取元素
        var Dom = document.getElementsByName(Name);
        console.log(Dom);
        //获取父元素
        var Parent = Dom[Num].parentNode;
        //删除元素
        console.log("[!]ReMove DOM: " + Name);
        Parent.removeChild(Dom[Num]);
    }
    catch (e)
    {
        //获取错误
        console.log('[ERR]ReMove Error: '+e);
    }
}
/* 获取标签然后删除 */
function DomRemoveTag(Tag,Num)
{
    /*
     * 参数 Tag 是用于获取要删除的内容,就是HTML页面
     * 参数 Num 是删除第页面的第几个元素，因为Tag不是唯一的元素。
    */
    //用于删除Dom元素
    try
    {
        //首先获取元素
        var Dom = document.getElementsByTagName(Tag);
        console.log(Dom);
        //获取父元素
        var Parent = Dom[Num].parentNode;
        //删除元素
        console.log("[!]ReMove DOM: " + Tag);
        Parent.removeChild(Dom[Num]);
    }
    catch (e)
    {
        //获取错误
        console.log('[ERR]ReMove Error: '+e);
    }
}
/* 获取类名然后删除 */
function DomRemoveClass(Class,Num)
{
    /**
     * 参数 Class 是用于获取要删除的内容
     * 参数 Num 是删除第页面的第几个元素，因为Class不是唯一的元素，所以要指定删除的元素
     */
    //用于删除Dom元素
    try
    {
        //首先获取元素
        var Dom = document.getElementsByClassName(Class);
        console.log(Dom);
        //获取父元素
        var Parent = Dom[Num].parentNode;
        //删除元素
        console.log("[!]ReMove DOM: " + Class);
        Parent.removeChild(Dom[Num]);
    }
    catch (e)
    {
        //获取错误
        console.log('[ERR]ReMove Error: '+e);
    }
}