
/**
 * 没错，这是一个简单的数学函数库。
 * 看来现在很多的开发者都不是很熟悉这些函数了。
 * 所以我们来给他们一个更好的数学函数库。
 * 作者：LinWinCloud
 */

//函数库
function PLUS_MINUS(x,y)
{
    /**
     * 加减法
     * x：加数
     * y：加数
     * 返回值：x+y
     */
    return x+y;
}
function MULTIPLY(x,y)
{
    /**
     * 乘法
     * x：乘数
     * y：乘数
     * 返回值：x*y
     */
    return x*y;
}
function DIVIDE(x,y)
{
    /**
     * 除法
     * x：被除数
     * y：除数
     * 返回值：x/y
     */
    return x/y;
}
function MOD(x,y)
{
    /**
     * 求余数
     * x：被除数
     * y：除数
     * 返回值：x%y
     */
    return x%y;
}
function POW(x,y)
{
    /**
     * 求幂
     * x：底数
     * y：指数
     * 返回值：x^y
     */
    return Math.pow(x,y);
}
function SQRT(x)
{
    /**
     * 求平方根
     * x：数字
     * 返回值：Math.sqrt(x)
     */
    return Math.sqrt(x);
}
function ABS(x)
{
    /**
     * 求绝对值
     * x：数字
     * 返回值：Math.abs(x)
     */
    return Math.abs(x);
}
function FLOOR(x)
{
    /**
     * 求小于等于x的最大整数
     * x：数字
     * 返回值：Math.floor(x)
     */
    return Math.floor(x);
}
function CEIL(x)
{
    /**
     * 求大于等于x的最小整数
     * x：数字
     * 返回值：Math.ceil(x)
     */
    return Math.ceil(x);
}
function ROUND(x)
{
    /**
     * 求四舍五入的整数
     * x：数字
     * 返回值：Math.round(x)
     */
    return Math.round(x);
}
function RANDOM(x,y)
{
    /**
     * 求随机数
     * x：最小值
     * y：最大值
     * 返回值：Math.random()*(y-x)+x
     */
    return Math.random()*(y-x)+x;
}
function MAX(x,y)
{
    /**
     * 求最大值
     * x：数字
     * y：数字
     * 返回值：Math.max(x,y)
     */
    return Math.max(x,y);
}
function MIN(x,y)
{
    /**
     * 求最小值
     * x：数字
     * y：数字
     * 返回值：Math.min(x,y)
     */
    return Math.min(x,y);
}
function PI()
{
    /**
     * 求π
     * 返回值：Math.PI
     */
    return Math.PI;
}
function E()
{
    /**
     * 求e
     * 返回值：Math.E
     */
    return Math.E;
}