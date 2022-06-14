$(function() {
    $(".mainmenu > li").hover(function() {
        $(this).find("ul.submenu").stop().slideDown(400)
    }, function() {
        $(this).find("ul.submenu").stop().slideUp(400)
    })
    $(".slide:gt(0)").hide()
    setInterval(function() {
        $(".slide:first").fadeOut("slow").next().fadeIn("slow")
        $(".slide:first").appendTo(".sliding")
    }, 3000)
    $(".btn li").click(function() {
        var idx = $(this).index()
        $(".tabContents > *").hide().removeClass("active")
        $(".tabContents > *").eq(idx).show().addClass("active")
        $(".tabMenu li").removeClass("active")
        $(this).addClass("active")
    })
    $(".notice li:first").click(function() {
        $(".pp").show()
    })
    $(".popup button").click(function() {
        $(".pp").hide()
    })
})