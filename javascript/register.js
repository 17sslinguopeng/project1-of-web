var secureCode=0;
var patt1 = new RegExp(/[^0-9]/);
var patt2 = new RegExp(/[^a-z]/i);
function register() {
    $(".mask").fadeIn();
    $("#registerbox").fadeIn();
    var s="";
    secureCode=0;
    for (var i =0;i<=3;i++)
    {

        tempNum = parseInt(Math.random() * 10);
        secureCode=secureCode*10+tempNum;
        s = s+" "+tempNum;
    }
    $("#register_rand_code").text(s);
}

$(document).ready(function () {
    $("#close_btn2").click(function () {

        $(".mask").fadeOut();
        $("#registerbox").fadeOut();

    });

    $("#register_Pwd").on("focus",function () {

       checkName()
    })
    $("#register_Pwd").blur(function () {
        clearWarning()
    })



    $("#register_PwdEnsure").focus(function () {
        checkName()
       checkPwd()
    })
    $("#register_PwdEnsure").blur(function () {
        clearWarning()
    })

    $("#register_security_code").focus(function () {
       checkName()
       checkPwd()
       checkEnsurePwd()
        checkEmail()
    })
    $("#register_security_code").blur(function () {
       clearWarning()
    })



    $("#register").click(function () {

        checkName();
        checkPwd();
        checkEnsurePwd();
        checkEmail()
        setTimeout(function () {
            clearWarning()
        },3000);
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
        security_code = $("#register_security_code").val();
        if (parseInt(security_code) != secureCode) {
            alert("验证码出错");
            return;
        }
        $(".mask").fadeOut();
        $("#registerbox").fadeOut();
        alert("注册成功");


    })
})
function clearWarning() {
    $("#register_Name_Warning").text("");
    $("#register_Pwd_Warning").text("");
    $("#register_PwdEnsure_Warning").text("");
    $("#register_email_Warning").text("");
}
function checkName() {
    if ($("#register_Name").val()=="") {
        $("#register_Name_Warning").text("请输入账号！");
        return;
    }
    var s =$("#register_Name").val();

    if (patt1.test(s)&&patt2.test(s)&& s.length>=6) return;

    $("#register_Name_Warning").text("长度应大于6，且不为纯数字或纯字母，正确示例:123abc");

}
function checkPwd() {
    if ($("#register_Pwd").val()=="") {
        $("#register_Pwd_Warning").text("请输入密码！");
        return
    }
    var s = $("#register_Pwd").val();
    if (s==$("#register_Name").val())
    {
        $("#register_Pwd_Warning").text("账号密码不能相同");
        return
    }
    if (patt1.test(s)&&patt2.test(s)&& s.length>=6) return;
    $("#register_Pwd_Warning").text("长度应大于6，且不为纯数字或纯字母，正确示例:123abc");

}
function checkEnsurePwd() {
    if ($("#register_PwdEnsure").val()=="") {

        $("#register_PwdEnsure_Warning").text("请再次输入密码！");
    }
    if ($("#register_PwdEnsure").val()!=$("#register_Pwd").val()) {
        $("#register_PwdEnsure_Warning").text("密码不一致！");

    }
}
function checkEmail() {
    var re = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;

    if ($("#register_email").val()==""){

        $("#register_email_Warning").text("邮箱不得为空!");
        return;
    }
    if (!re.test($("#register_email").val())){
        $("#register_email_Warning").text("邮箱格式不正确,eg:abc@163.com");
    }

}