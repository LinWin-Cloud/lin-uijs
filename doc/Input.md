# Input(w,h,x=0,y=0,placeholder="",type="text",value="",Class="false")

    参数说明:
     /**
     * 参数说明
     * w: 宽度
     * h: 高度
     * x: x偏离量
     * y: y偏离量
     * placeholder: 占位提示符
     * Class: 自定义的样式，默认不启用，如果启用则废弃原本的默认样式
     */
## 在浏览器内的代码：

    /* 新建Input输入框对象 */

    var input = new Input(宽,高,x偏移量,y偏移量,隐藏的占位符,类型,值,自定义的样式)

    /* 放置Input输入框元素 */

    document.body.appendChild(input);

    // 注意：单个新建过的对象不建议使用第二次，可能会出现问题，除非你有骚操作（小意思）。

## 在代码内的注释定义

    /**
    * 输入框组件
    * 作者：LinWinCloud
    */