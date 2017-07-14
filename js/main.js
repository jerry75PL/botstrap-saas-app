$(function () {


    $(window).scroll(function () {
        if ($(window).scrollTop() >= 30) { //to jest w praktyce to samo co niżej if ((window.scrollY)
            $('#main-nav').addClass('nav-scroll')
        } else {
            $('#main-nav').removeClass('nav-scroll')
        }
    });

    if ((window.scrollY) >= 30) {
        $('#main-nav').addClass('nav-scroll'); //to jest w praktyce to samo co wyżej if ($(window).scrollTop()
    }

    $("a[href*='#']").click(function () {
        $('body').animate({
            scrollTop: $(this.hash).offset().top - 30
        }, 800, )

    });

});