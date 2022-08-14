/**
 * 前端的基础防止sql注入的方法
 * 作者：LinWinCloud
 */
function SQL_TEST(test)
{
    //防止在语句中的sql注入
    //获取url中的参数
    var sUrl = test;
    var SQLDO = sUrl.substring(sUrl.indexOf("=")+1);
    var SQLKeyWord = /select|update|delete|truncate|join|union|exec|insert|drop|count|'|"|;|>|<|%/i;
    if (SQLKeyWord.test(SQLDO))
    {
        //有非法sql语句
        window.location.href='error/412.html'
        return false;
    }
    else{
        //没有非法sql语句
        return true;
    }
}   