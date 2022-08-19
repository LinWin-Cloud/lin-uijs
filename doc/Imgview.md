# ImgView(w,h,x,y,Image,style,Class)
ImgView组件是一个可以显示图像数据的组件，内置的样式可以使得图像更加美丽的呈现

    参数说明
     /*
     * 参数说明
     * x: 设置X左偏移量，默认为0
     * y: 设置y上偏移量，默认为0
     * h: 高
     * w: 宽
     * style: 可选择的组件内定样式
     * Class: 自定义的样式类名称，默认为不启用
     * Image: 要显示的图像
     */

在HTML页面中的代码

    //创建一个图像类
    var image = new ImgView(宽，高，x偏移量，y偏移量，要显示的图像，选择的内定样式，自定义的类型)
    //在页面中放置元素
    document.body.appendChild(image);
