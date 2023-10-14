$(function () {
    const arrow = $('.js-toTop');

    $(window).on('scroll', function () {
        $(this).scrollTop() > 200 ? arrow.fadeIn() : arrow.fadeOut();
    });

    arrow.on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);

        return false;
    });
});
