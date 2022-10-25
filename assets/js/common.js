$(document).ready(function(){
	//toggle mobile mobile
	$(".js-open-menu").click(function(e){
		e.preventDefault();
		$(".l-header-mobile").addClass("show-canvas");
	});
	$(".js-close-menu").click(function(e){
		e.preventDefault();
		$(".l-header-mobile").removeClass("show-canvas");
	});

	//toggle dropdown languages
	$(".js-open-dropdown-languages").click(function(){
		$(".l-header-mobile__canvas__languages").toggleClass("show")
	});
	
	//home slider
	$(".p-home__slider").slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        dots: true,
        prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">
						<img src="./assets/img/common/icn_prev.svg" alt="">
					</button>`,
        nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button">
						<img src="./assets/img/common/icn_next.svg" alt="">
					</button>`,
        responsive: [
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
	$(".p-home__slider .slick-dots").append(`<a class="p-home__slider__btn-play" href="#"><img src="./assets/img/common/icn_play.svg" alt=""></a>`)

	//project slider
	$(".p-home__project__slider").slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 959,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button">
                                    <img src="./assets/img/home/icn_prev.svg" alt="">
                                </button>`,
                     nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button">
                                    <img src="./assets/img/home/icn_next.svg" alt="">
                                </button>`,
                }
            }
        ]
    });

    // Aos animation
    AOS.init({
        duration: 1000
    });
    $(window).on("scroll", function() {
        AOS.init({
            duration: 1000
        });
    });

    //back to top
    var btnBack = $('.c-back-to-top');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btnBack.addClass('show');
    } else {
        btnBack.removeClass('show');
    }
    });

    btnBack.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });


    
    counterSlider();
})


//counter slider project
counterSlider();

function counterSlider(){
    var $status = $('.p-home__project__slider-count');
    var $slickElement = $('.p-home__project__slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html(`
            <span class="current-slide">${i}</span>
            <span class="separate"></span>
            <span class="total-slide">${slick.slideCount}</span>`
        );
    });
}
