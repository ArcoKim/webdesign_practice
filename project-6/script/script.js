$(document).ready(function() { 
   $(".mainmenu > li").hover(function() {
        $(".submenu, .headerBg").stop().slideDown(400)
    }, function() {
        $(".submenu, .headerBg").stop().slideUp(400)
    })
    setInterval(function() {
        $(".sliding").animate({"margin-top":"-300px"}, function() {
            $(".slide").first().appendTo(".sliding")
            $(".sliding").css({"margin-top":"0px"})
        })
    }, 3000)
    $(".noticeList li").first().click(function() {
        $(".popupBg, .popupDiv").show()
    })
    $(".popup button").click(function() {
        $(".popupBg, .popupDiv").hide()
    })
})