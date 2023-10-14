$(function() {
    $('.js-phoneMask').mask('+8 (000) 000-00-00');

    $('.js-menuItem').on('click', function (e) {
        e.preventDefault();

        let padding = 20;
        let nativePadding = 0;
        let target = $('[data-scroll="' + $(this).attr('href').substring(1) + '"]');

        if (window.innerWidth <= 991 && window.innerWidth > 768) {
            padding = 50;

            if (target.css('padding-top') === '0px') {
                nativePadding = 45;
            }
        } else if (window.innerWidth >= 768) {
            padding = 80;

            if (target.css('padding-top') === '0px') {
                nativePadding = 60;
            }
        }

        $('html,body').animate({
            scrollTop: target.offset().top - padding - nativePadding
        }, 1000);
    });
});
