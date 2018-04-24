var k=1;
$(document).ready(function () {
     checkCookie();
     var pageInf = $(".page_information").text();

     var i=parseInt(getCookie("num"));
     i = i+1;
     setCookie(i,pageInf,5);
     setCookie("num",i,5);
     t="您的足迹：";
     if (pageInf!="首页"){
       for ( k=1;k<=i;k++)
       {
           var temp = getCookie(k);

          if (k==i) t = t+"<label class='tracks' onclick='deleteTracks(this)'>"+temp+"</label>";
          else t = t+"<label  class='tracks' onclick='deleteTracks(this)'>"+temp+"</label>"+"->";
       }
         $("#track").html(t);
       var ele = $(".tracks");

       for (k=0;k<=i-1;k++)
       {
           var temp = getCookie(k+1);
           ele[k].id = k+1;
           ele[k].text=temp;
       }

     }

})
function deleteTracks(element) {

    y = element.id;
    page = element.text;
    setCookie("num",y-1,5);
    switch (page)
    {
        case "首页":window.location.href="Home_page.html";break
        case "商品详情":window.location.href="Goods_page.html";break
        case  "个人信息":window.location.href="Personal_information_page.html";break;
        case  "购物车":window.location.href="shopping_cart_page.html";break;
        case "搜索页面":window.location.href="Search_page.html";break;
    }

}
// function deleteTracks(y,page) {
//     alert(123);
//     setCookie("num",y,5);
//     switch (page)
//     {
//         case "首页":window.location.href="Home_page.html";break
//         case "商品详情":window.location.href="Goods_page.html";break
//         case  "个人信息":window.location.href="Personal_information_page.html";break;
//         case  "购物车":window.location.href="Search_page.html";break;
//         case "搜索页面":window.location.href="shopping_cart_page.html";break;
//     }
//
// }
function setCookie(cname,cvalue,exminute){
    var d = new Date();
    d.setTime(d.getTime()+(exminute*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    if (cname =="num") return 0;
   return "";
}
function checkCookie() {
    var user=getCookie("username");
    if (user!=""){
        $(".before_login").hide();
        $(".after_login").show();
        $("#userName").text("👤"+user);
    }
    }

