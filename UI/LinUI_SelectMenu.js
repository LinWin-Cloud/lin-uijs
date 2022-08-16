/**
 * 下拉选择框组件
 * 适用于用于在下拉框内选择对应的数据和内容，简化原本的流程
 */
var SelectMenu = function(w,h,x,y,style="false",Class="false")
{
    try
    {
        /**
         * 参数说明
         * w:宽度
         * h:高度
         * x:x坐标
         * y:y坐标
         * style:是否显示样式
         * Class:是否显示类名
         */
        //选择框主构建
        var SelectMenu = document.createElement('select')
        if (Class == "false")
        {
            //未启用class属性
            SelectMenu.style.width = w;
            SelectMenu.style.height = h;
            SelectMenu.style.position = "absolute";
            SelectMenu.style.left = x;
            SelectMenu.style.top = y;
            //判断是否启用样式
            if (style == "false")
            {
                //不启动样式
                
            }
            else
            {
                //启动样式
            }
        }   
        else
        {
            SelectMenu.className = Class;
            return SelectMenu
        }
    }
    catch (e)
    {
        console.log("[ERR]Error SelectMenu: "+e)
    }
}
var MenuItem = function(TEXT,VALUE)
{
    //选项框功能
}