var secureCode=0;
function login() {
    $(".mask").fadeIn();
    $("#LoginBox").fadeIn();
    var s="";
    secureCode=0;
    for (var i =0;i<=3;i++)
    {

        tempNum = parseInt(Math.random() * 10);
        secureCode=secureCode*10+tempNum;
        s = s+" "+tempNum;
    }
    $("#rand_code").text(s);

}
function outLogin() {
    $(".before_login").fadeIn();
    $(".after_login").fadeOut();
    $("#userName").text("未登录");
    setCookie("username","",10);
}


$(document).ready(
    function () {
        $("#close_btn").click(function () {

            $(".mask").fadeOut();
            $("#LoginBox").fadeOut();
        });
       $("#login").click( function loginCheck() {

            txtname = $("#txtName").val();
            passport = $("#txtPwd").val();
            security_code = $("#security_code").val();
            if (txtname == "") {
                alert("用户名不能为空");
                return;
            }
           if (txtname == "1234") {
               alert("用户名不存在");
               return;
           }
            if (passport == "") {
                alert("密码不能为空");
                return;
            }

            if (parseInt(security_code) != secureCode) {
                alert("验证码出错");
                return;
            }
            if (passport == "1234") {
                alert("密码错误");
                return;
            }

            $(".before_login").fadeOut();
            $(".after_login").fadeIn();
            $(".mask").fadeOut();
            $("#LoginBox").fadeOut();
            $("#userName").text("👤"+txtname);
            setCookie("username",txtname,1);
            alert("登陆成功");
        })


        $("#txtPwd").on("focus",function () {

            if ($("#txtName").val()=="") {

                $("#login_txtName_Warning").text("请输入账号！");

            }
            if ($("#txtName").val()=="<>")
            {
                $("#login_txtName_Warning").text("请输入正确的账号 eg:ab123")
            }
        })
        $("#txtPwd").blur(function () {
            $("#login_txtName_Warning").text("")
        })

        $("#security_code").on("focus",function () {

            if ($("#txtName").val()=="") {
                $("#login_txtName_Warning").text("请输入账号！");

            }
            if ($("#txtName").val()=="<>")
            {
                $("#login_txtName_Warning").text("请输入正确的账号 eg:ab123")
            }
            if ($("#txtPwd").val()=="") {
                $("#login_txtPwd_Warning").text("请输入密码！");

            }
            if ($("#txtPwd").val()=="<>")
            {
                $("#login_txtPwd_Warning").text("请输入正确的密码 eg:ab123")
            }
        })
        $("#security_code").blur(function () {
            $("#login_txtName_Warning").text("")
            $("#login_txtPwd_Warning").text("")
        })


    }
)