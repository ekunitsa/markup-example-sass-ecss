import { disableBodyScroll } from 'body-scroll-lock';

$(function () {
    const targetElement = document.querySelector('.js-mobileMenu-list');

    $('.js-burger').on('click', function () {
        $('.js-bodyShadow').fadeIn(200);

        $('.js-mobileMenu').addClass('is-active');

        $('body').addClass('is-mobileMenuActive');

        disableBodyScroll(targetElement, {
            reserveScrollBarGap: true,
        });
    });
});
