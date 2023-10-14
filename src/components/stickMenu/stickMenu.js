$(function() {
    $(window).on('scroll', function() {
        $(window).scrollTop() >= 250 ? $(".js-stickMenu").addClass('gst-stickMenu_stick') : $(".js-stickMenu").removeClass('gst-stickMenu_stick');
    });
});
