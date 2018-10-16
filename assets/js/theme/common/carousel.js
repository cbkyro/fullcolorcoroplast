import $ from 'jquery';
import 'slick-carousel';
import youtubeCarouselFactory from '../../emthemes-modez/youtube-carousel';

export default function () {
    const $carousel = $('[data-slick]');

    if ($carousel.length) {
        youtubeCarouselFactory($carousel);
        $carousel.slick();
    }

    // Supermarket theme MOD: doesn't need below script
    // // Alternative image styling for IE, which doesn't support objectfit
    // if (typeof document.documentElement.style.objectFit === 'undefined') {
    //     $('.heroCarousel-slide').each(() => {
    //         const $container = $(this);
    //         const imgUrl = $container.find('img').data('lazy');

    //         if (imgUrl) {
    //             $container.css('backgroundImage', `url(${imgUrl})`).addClass('compat-object-fit');
    //         }
    //     });
    // }
}
