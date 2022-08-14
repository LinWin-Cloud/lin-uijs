
/**
 * 用于打开搜索引擎
 * 细心的我还是发现了现在好多的网站都是需要调用其他搜索引擎API的
 * 不过呢这样做起来反而可以简化开发
 * 作者：LinWinCloud
 * 反正还是有很多的网站没有调用搜索引擎API的
 */
function Search(SearchConTent,SearchEngine)
{
    /**
     * 参数说明
     * SearchConTent：搜索内容
     * SearchEngine：搜索引擎
     * 主要的是调用搜索引擎的API
     */
    //判断搜索引擎
    if (SearchEngine == "Bing")
    {
        //必应
        WindowOpen('https://cn.bing.com/images/search?q='+SearchConTent);
        return true;
    }
    else if (SearchEngine == "Google")
    {
        //谷歌
        WindowOpen('https://www.google.com/search?q='+SearchConTent);
        return true;
    }
    else if (SearchEngine == "Baidu")
    {
        //百度
        WindowOpen('https://www.baidu.com/s?wd='+SearchConTent);
        return true;
    }
    else if (SearchEngine == "Sogou")
    {
        //搜狗
        WindowOpen('https://www.sogou.com/web?query='+SearchConTent);
        return true;
    }
    else if (SearchEngine == "Soso")
    {
        //搜搜
        WindowOpen('https://www.soso.com/q?w='+SearchConTent);
        return true;
    }
    else if (SearchEngine == "Youdao")
    {
        //有道
        WindowOpen('https://www.youdao.com/w/eng/'+SearchConTent);
        return true;
    }
    else if (SearchEngine == "Yandex")
    {
        //yandex
        WindowOpen('https://yandex.com/search/?text='+SearchConTent);
        return true;
    }
    else if (SearchEngine == "360")
    {
        //360
        WindowOpen('https://www.so.com/s?q='+SearchConTent);
        return true;
    }
}
function WindowOpen(URL)
{
    //打开新的浏览器窗口
    window.open(URL);
    return true;
}