$(function() {
    $(".mainmenu li").hover(function() {
        $(".submenu").stop().slideDown(400)
    }, function() {
        $(".submenu").stop().slideUp(400)
    })
    setInterval(function() {
        $(".sliding").animate({"margin-left":"-100%"}, function() {
            $(".slide:first").appendTo(".sliding")
            $(".sliding").css({"margin-left":'0'})
        })
    }, 3000)
    $(".select li").click(function() {
        $(".select li").removeClass("active")
        $(this).addClass("active")
        $(".article > div").hide()
        $(".article > div").eq($(this).index()).show()
    })
    $(".notice li:first").click(function() {
        $("#popuping").show()
    })
    $("#popup button").click(function() {
        $("#popuping").hide()
    })
})