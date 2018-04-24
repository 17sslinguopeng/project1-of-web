$(document).ready(function () {
    $(".delete").click(function () {

        $(this).parent().remove();
        var mon = parseInt($("#cost").text());
        $("#cost").text(mon-120);
        var mon = parseInt($("#cost").text());
        alert("删除成功!")
        if (mon==0){
            $(".empty").show();
            $(".buttons").hide();
        }
    });
    $("#pay").click(function () {
        alert("付款成功！")
        $(".goods").remove();
        $("#cost").text(0);
        $(".empty").show();
        $(".buttons").hide();

    })
})