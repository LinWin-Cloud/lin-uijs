/**
 * 本文件用于前端获取用户的信息
 * 可调用
 * 作者: LinWinCloud联沃云,github copilot
 */

function GetUser_userAgent()
{
    //获取用户浏览器信息
    var Get_WebBrowser = navigator.userAgent;
    return Get_WebBrowser;
}
function GetUser_OSCPU()
{
    //获取用户操作系统CPU
    var GetOS = navigator.oscpu;
    return GetOS;
}
function GetUser_language()
{
    //获取用户语言
    var GetLanguage = navigator.language;
    return GetLanguage;
}
function GetUser_platform()
{
    //获取用户平台
    var GetPlatform = navigator.platform;
    return GetPlatform;
}
function GetUser_appName()
{
    //获取用户浏览器名称
    var GetAppName = navigator.appName;
    return GetAppName;
}
function GetUser_appVersion()
{
    //获取用户浏览器版本
    var GetAppVersion = navigator.appVersion;
    return GetAppVersion;
}
function GetUser_cookieEnabled()
{
    //获取用户是否启用cookie
    var GetCookieEnabled = navigator.cookieEnabled;
    return GetCookieEnabled;
}
function GetUser_javaEnabled()
{
    //获取用户是否启用java
    var GetJavaEnabled = navigator.javaEnabled();
    return GetJavaEnabled;
}
function GetUser_mimeTypes()
{
    //获取用户浏览器mimeTypes
    var GetMimeTypes = navigator.mimeTypes;
    return GetMimeTypes;
}
function GetUser_plugins()
{
    //获取用户浏览器plugins
    var GetPlugins = navigator.plugins;
    return GetPlugins;
}
function GetUser_productSub()
{
    //获取用户浏览器productSub
    var GetProductSub = navigator.productSub;
    return GetProductSub;
}
function GetUser_vendor()
{
    //获取用户浏览器vendor
    var GetVendor = navigator.vendor;
    return GetVendor;
}
function GetUser_vendorSub()
{
    //获取用户浏览器vendorSub
    var GetVendorSub = navigator.vendorSub;
    return GetVendorSub;
}
function GetUser_userProfile()
{
    //获取用户浏览器userProfile
    var GetUserProfile = navigator.userProfile;
    return GetUserProfile;
}
function GetUser_cpuClass()
{
    //获取用户浏览器cpuClass
    var GetCpuClass = navigator.cpuClass;
    return GetCpuClass;
}
function GetUser_systemLanguage()
{
    //获取用户浏览器系统语言
    var GetSystemLanguage = navigator.systemLanguage;
    return GetSystemLanguage;
}