/**
 * 获取时间参数
 * 作者：LinWinCloud
 */
var date = new Date(); //创建Date对象

function GetYear()
{
    //获取年份
    return date.getFullYear();
}
function GetMonth()
{
    //获取月份
    return date.getMonth() + 1;
}
function GetDay()
{
    //获取日期
    return date.getDate();
}
function GetHours()
{
    //获取小时
    return date.getHours();
}
function GetMinutes()
{
    //获取分钟
    return date.getMinutes();
}
function GetSeconds()
{
    //获取秒
    return date.getSeconds();
}
function GetMilliseconds()
{
    //获取毫秒
    return date.getMilliseconds();
}
function GetWeek()
{
    //获取星期
    return date.getDay();
}
function GetTime()
{
    //获取时间
    return date.getTime();
}
function GetTimezoneOffset()
{
    //获取时区偏移量
    return date.getTimezoneOffset();
}
function GetTimezone()
{
    //获取时区
    return date.getTimezone();
}
function GetUTCDate()
{
    //获取UTC日期
    return date.getUTCDate();
}
function GetUTCDay()
{
    //获取UTC星期
    return date.getUTCDay();
}
function GetUTCFullYear()
{
    //获取UTC年份
    return date.getUTCFullYear();
}
function GetUTCHours()
{
    //获取UTC小时
    return date.getUTCHours();
}
function GetUTCMilliseconds()
{
    //获取UTC毫秒
    return date.getUTCMilliseconds();
}
function GetUTCMinutes()
{
    //获取UTC分钟
    return date.getUTCMinutes();
}
function GetUTCMonth()
{
    //获取UTC月份
    return date.getUTCMonth();
}
function GetUTCSeconds()
{
    //获取UTC秒
    return date.getUTCSeconds();
}
/* 获取默认的浏览器显示事件 */
function GetDefaultTime()
{
    //获取默认的浏览器显示事件
    return date;
}