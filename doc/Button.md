# Button(w,h,x,y,Text,style,Class) 组件
Button组件是一个可以在网页上显示按钮的一个组件，可以使用很少的代码
<br />
完成对dom页面的操作

     /**
     * 参数说明
     * x: 设置X左偏移量，默认为0
     * y: 设置y上偏移量，默认为0
     * h: 高
     * w: 宽
     * Class: 自定义的样式类名称，默认使用内定样式
     * Text: 显示的文字，默认空白
     */
在HTML中使用组件
    
    //创建一个新的按钮对象
    var button = new Button(长，高，x偏移量，y偏移量，文本，内定样式选择，自行定义的样式);
    //将组件添加到body中
    document.body.appendChild(button);
    /*
     * 此处的document.body可以换成其他元素，使用appendChild便可以添加元素
     */

## LinUI Button的style属性
1. black_theme 黑色主题
2. blue_theme 蓝调主题