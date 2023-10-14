$(function () {
    $('.js-connectSlider').slick({
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
        prevArrow: '<div class="gst-connect_leftArrow"><svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2324 0.347056C12.4806 0.118642 12.809 -0.00570926 13.1482 0.000201458C13.4875 0.00611218 13.8112 0.141824 14.0511 0.378743C14.291 0.615662 14.4285 0.935291 14.4345 1.27029C14.4405 1.6053 14.3145 1.92951 14.0832 2.17464L3.65922 12.4677L14.0832 22.7608C14.2119 22.8792 14.3151 23.022 14.3866 23.1806C14.4582 23.3392 14.4967 23.5105 14.4998 23.6841C14.5029 23.8577 14.4706 24.0302 14.4047 24.1912C14.3388 24.3522 14.2408 24.4985 14.1164 24.6213C13.9921 24.7441 13.844 24.8409 13.6809 24.9059C13.5178 24.9709 13.3432 25.0029 13.1674 24.9998C12.9915 24.9967 12.8181 24.9587 12.6575 24.8881C12.4968 24.8174 12.3523 24.7155 12.2324 24.5884L0.882978 13.3815C0.637744 13.1391 0.5 12.8104 0.5 12.4677C0.5 12.1251 0.637744 11.7964 0.882978 11.554L12.2324 0.347056Z" fill="#E3010F"/></svg></div>',
        nextArrow: '<div class="gst-connect_rightArrow"><svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.76762 0.347056C2.51938 0.118642 2.19104 -0.00570926 1.85178 0.000201458C1.51252 0.00611218 1.18882 0.141824 0.94889 0.378743C0.708958 0.615662 0.571521 0.935291 0.565535 1.27029C0.559549 1.6053 0.685482 1.92951 0.9168 2.17464L11.3408 12.4677L0.9168 22.7608C0.788139 22.8792 0.684942 23.022 0.613367 23.1806C0.541793 23.3392 0.503306 23.5105 0.500204 23.6841C0.497101 23.8577 0.529447 24.0302 0.59531 24.1912C0.661173 24.3522 0.759206 24.4985 0.883558 24.6213C1.00791 24.7441 1.15603 24.8409 1.3191 24.9059C1.48216 24.9709 1.65681 25.0029 1.83265 24.9998C2.00848 24.9967 2.18189 24.9587 2.34253 24.8881C2.50316 24.8174 2.64774 24.7155 2.76762 24.5884L14.117 13.3815C14.3623 13.1391 14.5 12.8104 14.5 12.4677C14.5 12.1251 14.3623 11.7964 14.117 11.554L2.76762 0.347056Z" fill="#E3010F"/></svg>\n</div>',
    });
})