function Zoom(x, y) {
    var l = $("#init_img_box img").offset().left;
    var t = $("#init_img_box img").offset().top;
    var w = 100;
    var h = 75;
    var imgbox = $("#init_img_box");
    var showbox = $("#show_box img");
    var moveX = x - l - (100 / 2);
    //鼠标区域距离
    var moveY = y - t - (75 / 2);
    //鼠标区域距离

    if (moveX < 0) {
        moveX = 0
    }
    if (moveY < 0) {
        moveY = 0
    }
    if (moveX > imgbox.width()-w) {
        moveX = imgbox.width()-w
    }
    if (moveY > imgbox.height()-h) {
        moveY = imgbox.height()-h
    }
    //判断鼠标使其不跑出图片框
    var zoomX = showbox.width() / imgbox.width()
    //求图片比例
    var zoomY = showbox.height() / imgbox.height()

    showbox.css({
        left: -(moveX * zoomX),
        top: -(moveY * zoomY)
    })
    $("#hover_box").css({
        left: moveX,
        top: moveY
    })
    //确定位置

}

function Zoomhover(imgbox, hoverbox, showbox) {

    var l = imgbox.offset().left;
    var t = imgbox.offset().top;
    var w = hoverbox.width();
    var h = hoverbox.height();
    var time;
    $("#init_img_box ,#hoverbox").mouseover(function(e) {
        var x = e.pageX;
        var y = e.pageY;
        $("#hoverbox,#showbox").show();

        hoverbox.css("opacity", "0.3")
        time = setTimeout(function() {
            Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
        }, 1)
    }).mousemove(function(e) {
        var x = e.pageX;
        var y = e.pageY;
        time = setTimeout(function() {
            Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
        }, 1)
    }).mouseout(function() {
        showbox.parent().hide()
        hoverbox.hide();
    })
}
$(document).ready(function() {


    $("#init_img_box ,#hoverbox").mouseover(function(e) {
        var x = e.pageX;
        var y = e.pageY;
        $("#hover_box").show();
        $("#show_box").show();
        $("#hover_box").css("opacity", "0.3")
        var w = $("#hoverbox").width();
        var h = $("#hoverbox").height();
       // alert(w+" "+h);
        time = setTimeout(function() {
            Zoom( x, y)
        }, 1)
    }).mousemove(function(e) {
        var x = e.pageX;
        var y = e.pageY;
        time = setTimeout(function() {
            Zoom(x, y)
        }, 1)
    }).mouseout(function() {
        $("#show_box").hide()
        $("#hover_box").hide();
    })


})
