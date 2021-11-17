$(function(){

    // fade slide
    var x=0;
    setInterval(function(){
        var next = (x+1)%3;
        $(".slideList").find("div").eq(x).fadeOut();
        $(".slideList").find("div").eq(next).fadeIn();
        x = next;
    },3000);

    // layerPopup
    $(".layerPopup").on("click",function(){
        $("#popup").show();
    });
    $(".close").on("click",function(){
        $("#popup").hide();
    });

    // fullMenu
    $("nav>ul>li").mouseenter(function(){
        $(".submenu, .bg").stop().slideDown();
    });
    $("nav>ul>li").mouseleave(function(){
        $(".submenu, .bg").stop().slideUp();
    });

});