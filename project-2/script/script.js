$(function() {
    $(".menubar > li a").hover(function() {
        $(".submenu, .menubarBg").stop().slideDown(400)
    }, function() {
        $(".submenu, .menubarBg").stop().slideUp(400)
    })
    setInterval(function() {
        $(".slide-p").animate({"margin-left":"-100%"}, function() {
            $(".slide:first").appendTo(".slide-p")
            $(".slide-p").css({"margin-left":"0%"})
        })
    }, 3000)
    $(".cont li:first").click(function() {
        $(".popupBg").show()
    })
    $(".popup button").click(function() {
        $(".popupBg").hide()
    })
})