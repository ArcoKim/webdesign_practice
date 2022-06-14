$(function() {
    $(".mainmenu > li").hover(function() {
        $(".submenu").stop().slideDown(400)
        $("#wideMenu").stop().slideDown(400)
    }, function() {
        $(".submenu").stop().slideUp(400)
        $("#wideMenu").stop().slideUp(400)
    })
    $(".slide:gt(0)").hide()
    setInterval(function() {
        $(".slide:first").fadeOut("slow").next().fadeIn("slow")
        $(".slide:first").appendTo(".sliding")
    }, 3000)
    $(".article li:first").click(function() {
        $("#popupDiv").show()
    })
    $("#popup button").click(function() {
        $("#popupDiv").hide()
    })
})