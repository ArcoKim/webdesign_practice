$(document).ready(function() {
    $(".menubar > li").hover(function() {
        $(this).find(".submenu").stop().slideDown(400)
    }, function() {
        $(".submenu").stop().slideUp(400)
    })
    setInterval(function() {
        $(".slides").animate({"margin-top":"-300px"}, function() {
            $(".slide:first").appendTo(".slides")
            $(".slides").css({"margin-top":"0px"})
        })
    }, 3000)
    $(".details li:first").click(function() {
        $(".popupBg").show()
    })
    $(".popup button").click(function() {
        $(".popupBg").hide()
    })
})