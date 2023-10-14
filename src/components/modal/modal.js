import 'magnific-popup';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

$(function () {
    const targetElement = document.querySelector(".js-modal-wrapper");

    $('.js-modal').magnificPopup({
        callbacks: {
            open: function () {
                if (!window.matchMedia("(pointer: coarse)").matches && window.innerWidth >= 768) {
                    $('body > header').css('padding-right', 15);
                    $('.js-stickMenu').css('padding-right', 15);
                }

                disableBodyScroll(targetElement, {
                    reserveScrollBarGap: true,
                });
            },
            close: function () {
                $('body > header').css('padding-right', 0);
                $('.js-stickMenu').css('padding-right', 0);
                enableBodyScroll(targetElement);
            }
        }
    });
});
