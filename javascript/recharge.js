$(document).ready(function () {
    $("#recharge").click(function () {
        $("#rechargeDiv").fadeIn();
        $(".mask").fadeIn();

    })
    $("#closeBtn").click(function () {
        $("#rechargeDiv").fadeOut();
        $(".mask").fadeOut();
    })
    $("#rechargeBtn").click(function () {
        var a=$("#rechargeDiv input").val();
        var s=$("#money").text();

        var money=parseInt(s)+parseInt(a);
        $("#money").text(money);
        $("#rechargeDiv").fadeOut();
        $(".mask").fadeOut();
        alert("充值成功");
    })


})