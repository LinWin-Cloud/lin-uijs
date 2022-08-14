
/* 获取名称然后添加 */
function DomAddName(Name,Num)
{
    /**
     * 参数 Name 是用于获取要添加的内容
     * 参数 Num 是添加的元素的ID
     */
    //用于添加Dom元素
    try
    {
        //首先获取元素 Name
        var Dom = document.getElementsByName(Name);
        console.log(Dom);
        //获取父元素
        var Parent = Dom[Num].parentNode;
        //添加元素
        console.log("[!]Add DOM: " + Name);
        var NewDom = document.createElement(Name);
        Parent.appendChild(NewDom);
    }
    catch (e)
    {
        console.log('[ERR]Add Error: '+e);
    }
}
/* 获取ID然后添加 */
function DomAddID(ID,Num)
{
    /**
     * 参数 ID 是用于获取要添加的内容
     * 参数 Num 是添加的元素的ID
     */
    //用于添加Dom元素
    try
    {
        //首先获取元素 ID
        var Dom = document.getElementById(ID);
        console.log(Dom);
        //获取父元素
        var Parent = Dom.parentNode;
        //添加元素
        console.log("[!]Add DOM: " + ID);
        var NewDom = document.createElement(ID);
        Parent.appendChild(NewDom);
    }
    catch (e)
    {
        console.log('[ERR]Add Error: '+e);
    }
}
/* 获取标签名称然后添加 */
function DomAddTag(Tag,Num)
{
    /**
     * 参数 Tag 是用于获取要添加的内容
     * 参数 Num 是添加的元素的ID
     */
    //用于添加Dom元素
    try
    {
        //首先获取元素 Tag
        var Dom = document.getElementsByTagName(Tag);
        console.log(Dom);
        //获取父元素
        var Parent = Dom[Num].parentNode;
        //添加元素
        console.log("[!]Add DOM: " + Tag);
        var NewDom = document.createElement(Tag);
        Parent.appendChild(NewDom);
    }
    catch (e)
    {
        console.log('[ERR]Add Error: '+e);
    }
}