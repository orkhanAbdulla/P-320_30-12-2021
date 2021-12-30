$(".menu-icon i").click(function () {
    $(".menu").addClass("active")
})
$(".close i").click(function () {
    $(".menu").removeClass("active")
})

$(window).scroll(function () {
    let height=$(window).scrollTop()
    if (height>500) {
        $(".scroll-icon").addClass("scroll-active")
    }
    else{
        $(".scroll-icon").removeClass("scroll-active")
    }
})

$(".scroll-icon").click(function () {
    $(window).scrollTop(0)
})