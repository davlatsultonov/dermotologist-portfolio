import "./style.scss";
import "normalize.css/normalize.css";
import Swiper from "swiper";
import $ from 'jquery';
window.jQuery = window.$ = $;

$(document).ready(function () {
    if ($('.work_box_cont_img').length > 2) workBlock()

    if ($(window).width() > 380) {
        const navigationSectionEl = $('.navigation-sections');
        const distance = $(navigationSectionEl).height();

        placeNavigationSection(navigationSectionEl, distance);
        $(window).scroll(() => placeNavigationSection(navigationSectionEl, distance));

        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - ($(window).width() > 1024 ? 140 : 120)
            }, 500);
        });
    }
});

function placeNavigationSection (el, distance) {
    const styles = {
        'transition': 'all 400ms ease-in-out'
    }

    el.css($(window).scrollTop() >= distance ? {
        ...styles,
        'position': 'sticky',
        'top': $('#main-title').height() - 3,
        'z-index': 100,
    } : {
        ...styles,
        'position': 'static',
        'top': 0,
    });
}

function workBlock() {
    let sliderWork = "";

    function initSlider() {
        if (sliderWork === "") {
            sliderWork = new Swiper(".work_box_cont", {
                wrapperClass: "work_box_cont_block",
                slideClass: "work_box_cont_img",
                speed: 6000,
                freeModeMomentumRatio: 0.8,
                freeModeMomentumVelocityRatio: 0.8,
                freeModeMomentumBounceRatio: 1,
                slidesPerView: "auto",
                loop: true,
                freeMode: true,
                loopedSlides: 10,
                autoplay: {
                    delay: 0.5,
                    disableOnInteraction: false,
                },
                pauseOnFocus: true,
                pauseOnHover: true,
            });
        }
    }

    initSlider();

    window.addEventListener('resize', updateSlider);

    function updateSlider() {
        if (sliderWork !== "") {
            sliderWork.update();
        }
    }
}
