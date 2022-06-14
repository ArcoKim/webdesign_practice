$(function() {
    $(".menubar > li a").hover(function() {
        $(".submenu").stop().slideDown(400)
    }, function() {
        $(".submenu").stop().slideUp(400)
    })
    setInterval(function() {
        $(".slides").stop().animate({"margin-top":"-300px"}, function() {
            $(".slide:first").appendTo(".slides")
            $(".slides").css({"margin-top":"0"})
        })
    }, 3000)
    $(".part li").click(function() {
        var idx = $(this).index()
        $(".partItem > *").hide().removeClass('acL')
        $(".partItem > *").eq(idx).show().addClass('acL')
        $(".part li").removeClass('active')
        $(this).addClass('active')
    })
    $(".board li:first").click(function() {
        $(".popupP").show()
    })
    $(".popup button").click(function() {
        $(".popupP").hide()
    })
})