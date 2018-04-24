$(document).ready(
    function () {
        $("#close_btn").click(function () {

            $(".mask").fadeOut();
            $("#LoginBox").fadeOut();
        });
        $("#close_btn2").click(function () {
            $(".mask").fadeOut();
            $("#registerbox").fadeOut();

        });
        $("#login").click(function () {

            txtname = $("#txtName").val();
            passport = $("#txtPwd").val();
            security_code = $("#security_code").val();
            if (txtname == "") {
                alert("用户名不能为空");
                return;
            }
            if (passport =="") {
                alert("密码不能为空");
                return;
            }
            if (security_code!=8713) {
                alert("验证码出错");
                return;
            }
            if (passport=="1234")
            {
                alert("密码错误");
                return;
            }
            $(".before_login").fadeOut();
            $(".after_login").fadeIn();
            $(".mask").fadeOut();
            $("#LoginBox").fadeOut();
            alert("登陆成功");


        })


        $("#register_Pwd").on("focus",function () {

            if ($("#register_Name").val()=="") {
                $("#register_Name_Warning").text("请输入账号！");
                return;
            }
            if ($("#register_Name").val()=="<>")
            {
                $("#register_Name_Warning").text("请输入正确的账号 eg:ab123")
            }
        })
        $("#register_Pwd").blur(function () {
            $("#register_Name_Warning").text("")
        })



        $("#register_PwdEnsure").focus(function () {
            if ($("#register_Name").val()=="") {
                $("#register_Name_Warning").text("请输入账号！");

            }
            if ($("#register_Name").val()=="<>")
            {
                $("#register_Name_Warning").text("请输入正确的账号 eg:ab123")
            }
            if ($("#register_Pwd").val()=="") {
                $("#register_Pwd_Warning").text("请输入密码！");

            }
            if ($("#register_Pwd").val()=="<>")
            {
                $("#register_Pwd_Warning").text("请输入正确的密码 eg:ab123")
            }
        })
        $("#register_PwdEnsure").blur(function () {
            $("#register_Name_Warning").text("")
            $("#register_Pwd_Warning").text("")
        })

        $("#register_Email").focus(function () {
            if ($("#register_Name").val()=="") {
                $("#register_Name_Warning").text("请输入账号！");

            }
            if ($("#register_Name").val()=="<>")
            {
                $("#register_Name_Warning").text("请输入正确的账号 eg:ab123")
            }
            if ($("#register_Pwd").val()=="") {
                $("#register_Pwd_Warning").text("请输入密码！");

            }
            if ($("#register_Pwd").val()=="<>")
            {
                $("#register_Pwd_Warning").text("请输入正确的密码 eg:ab123")
            }
            if ($("#register_PwdEnsure").val()=="") {

                $("#register_PwdEnsure_Warning").text("请再次输入密码！");
            }
            if ($("#register_PwdEnsure").val()!=$("#register_Pwd").val()) {
                $("#register_PwdEnsure_Warning").text("密码不一致！");

            }
        })
         $("#register_Email").blur(function () {
             $("#register_Name_Warning").text("");
             $("#register_Pwd_Warning").text("");
             $("#register_PwdEnsure_Warning").text("");
         })




        $("#register").click(function () {

            txtname = $("#txtName2").val();
            passport = $("#txtPwd2").val();
            passport2 = $("#txtPwd3").val();
            if (txtname=="") {
                alert("用户名不能为空");
                return;
            }
            if (txtname=="1234"){
                alert("用户名已存在");
                return;
            }
            if (passport == "") {
                alert("密码不能为空");
                return;
            }
            if (passport != passport2) {
                alert("两次输入密码不一致");
                return;
            }
            security_code = $("#security_code2").val();
            if (security_code != 8713) {
                alert("验证码出错");
                return;
            }
            $(".mask").fadeOut();
            $("#registerbox").fadeOut();
            alert("注册成功");


        })

    })

function login() {
    $(".mask").fadeIn();
    $("#LoginBox").fadeIn();
}

function register() {
    $(".mask").fadeIn();
    $("#registerbox").fadeIn();
}