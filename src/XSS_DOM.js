
/**
 * 现在还是有很多网站都会把XSS放在DOM上，比如：
 * <a href="javascript:alert(1)">XSS</a>
 * 这些都是很危险的
 * 但是我们可以选择过滤字符串，完美解决这个问题
 */

/**
 * 先把字符串过滤掉，再把DOM添加上
 * @param {String} Name
*/
function XSS_ReName(IN)
{
    /**
     * 参数说明
     * IN: 要过滤的字符串
     * 但是IN过滤完成后转义了，所以要解码
     */
    //过滤字符串
    var OUT = IN.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    //返回过滤后的字符串
    return OUT;
}
/* 解码 */
function XSS_DO(OUT)
{
    /**
     * 参数说明
     * OUT: 要解码的字符串
     */
    //过滤字符串
    var IN = OUT.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    //返回过滤后的字符串
    return IN;
}
//其实预防xss可以使用'
function XSS_DOM(Name)
{
    /**
     * 参数说明
     * Name: 要过滤的XSS字符串的名字
     */
    var KeyWord = 
    [
        "javascript",
        "vbscript",
        "expression",
        "applet",
        "meta",
        "xml",
        "<",
        ">",
        "/",
    ];
    //替换过后的字符
    var Replace = "'";
    var GetOut = Name.replace(KeyWord, Replace+KeyWord);
    return GetOut;
}