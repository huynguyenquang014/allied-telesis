// show and hiden faq
$(".p-qa__content__list__question").click(function() {
    $(this).toggleClass("show");
    $(this).find(".p-qa__content__list__answer").slideToggle();
})