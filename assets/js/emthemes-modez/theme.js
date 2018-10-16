import $ from 'jquery';
import _ from 'lodash';
import utils from '@bigcommerce/stencil-utils';
import Pace from 'pace';
import ajaxAddToCart from './ajax-addtocart.js';
import collapsibleFactory from '../theme/common/collapsible';
// import scrollTo from 'jquery.scrollto';
import scrollToElement from 'scroll-to-element';
import mediaQueryListFactory from '../theme/common/media-query-list';
import newsletterPopup from './newsletter-popup.js';
import cartPopupRemove from './cart-popup-remove.js';

export default function (context) {
    const mq = mediaQueryListFactory('medium');

    ajaxAddToCart(context);

    function request($placeholder, tmpl, urlKey = 'emthemesmodezProductsByCategory') {
        if ($placeholder.data('emthemesmodezLoaded')) return;

        let template = tmpl;
        if ($placeholder.data('emthemesmodezTemplate')) { template = $placeholder.data('emthemesmodezTemplate'); }

        let url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, ''); // WORKAROUND: fix stencil localhost use real absolute urls

        utils.api.getPage(url, { template }, (err, resp) => {
            $placeholder.html(resp);
            $placeholder.data('emthemesmodezLoaded', true);

            // init products carousel
            $('[data-slick]', $placeholder)

                .on('init', e => setTimeout(() => {
                    // init nested carousel
                    $('[data-slick-nested]', e.target).each((i, el) => {
                        $(el).slick($(el).data('slickNested'));
                    });
                }, 200))

                .on('breakpoint', e => setTimeout(() => {
                    $('[data-slick-nested]', e.target).slick('setPosition');
                }, 200))

                .slick();
        });
    }

    // ========================================================================
    // Replace error images with placeholder
    // ========================================================================

    $('[data-emthemesmodez-help-img]').on('error', (event) => {
        const $img = $(event.target);
        if ($img.attr('src') !== $img.data('emthemesmodezHelpImg')) {
            // const oldSrc = $img.attr('src');
            $img.attr('src', $img.data('emthemesmodezHelpImg'));
            // console.log(`Please upload your image to ${oldSrc} via WEBDAV`);
        }
    }).each((i, el) => {
        const $el = $(el);
        const src = $el.attr('src');

        if (src !== $el.data('emthemesmodezHelpImg')) {
            $el.attr('src', '').attr('src', src);
        }
    });

    // ========================================================================
    // Hot News Carousel
    // ========================================================================

    const hotNewsInterval = 3000;

    const $hotNewsList = $('[data-emthemesmodez-hot-news-carousel]');

    function slideHotNews(el) {
        const $list = $(el);
        const $curItem = $('.emthemesModez-hotNews-item.is-open');
        const $nextItem = $curItem.next();

        $curItem.removeClass('is-open');

        if ($nextItem.length === 0) { $list.children('.emthemesModez-hotNews-item:first').addClass('is-open'); } else { $nextItem.addClass('is-open'); }
    }

    $hotNewsList.each((i, el) => {
        setInterval(() => {
            slideHotNews(el);
        }, hotNewsInterval);
    });


    // ========================================================================
    // Ajax load products in a category
    // ========================================================================
    function initAjaxProductsByCategory() {
        $('[data-emthemesmodez-products-by-category]').each((i, placeholder) => {
            request($(placeholder), 'emthemes-modez/category/ajax-products-by-category-result', 'emthemesmodezProductsByCategory');
        });
    }
    initAjaxProductsByCategory();


    // ========================================================================
    // Ajax load products in a category in sort|subcategories tabs
    //
    // - Only load products in active tab (has class .is-active)
    // - Ajax load products when a tab is open
    //
    // ========================================================================
    function initAjaxProductsByCategoryTabs() {
        const template = 'emthemes-modez/category/ajax-products-by-category-tabs-result';
        const urlKey = 'emthemesmodezProductsByCategoryTabs';

        // Ajax request loading products in the active tab
        $('.is-active[data-emthemesmodez-products-by-category-tabs]').each((i, placeholder) => {
            Pace.ignore(() => {
                request($(placeholder), template, urlKey);
            });
        });

        $('[data-tab-emthemesmodez-products-by-category-tabs]').on('toggled', (event, tab) => {
            Pace.ignore(() => {
                request($($('a', tab).attr('href')), template, urlKey);
            });
        });
    }
    initAjaxProductsByCategoryTabs();


    // ========================================================================
    // Ajax load remote banner
    //
    // - Banner must has position 'top'
    // - Banner must assign to Search page
    //
    // ========================================================================
    $('[data-emthemesmodez-remote-banner]').each((i, el) => {
        const $el = $(el);
        const banner = $el.data('emthemesmodezRemoteBanner');
        const template = 'papa-supermarket/banners/remote';

        Pace.ignore(() => {
            utils.api.getPage(`${context.urls.search}?search_query=${banner}&section=content`, { template }, (err, resp) => {
                $el.after(resp);
                $el.remove();
            });
        });
    });

    // ------------------------------------------------------------------------
    // Instagram Carousel
    // ------------------------------------------------------------------------
    // console.time("instagram-carousel");
    const $carousel = $('#instafeed-carousel');
    if ($carousel.length) {
        $carousel.on('instafeedAfter', (e) => {
            const $el = $(e.target);
            $el.slick($el.data('emthemesmodezInstafeedCarousel'));
        });
    }
    // console.timeEnd("instagram-carousel");


    // ========================================================================
    // Refresh products carousel when tab is open
    // ========================================================================
    $('#emthemesModez-specialProductsTabs-tabs').on('toggled', (event, tab) => {
        $('[data-slick]', $('a', tab).attr('href')).slick('setPosition');
    });


    // ========================================================================
    // Ajax Product Grid: Load products in a category by ajax and render as grid
    // ========================================================================

    if (typeof context.emthemesModez_enableAjaxProducts !== 'undefined') {
        $('[data-emthemesmodez-ajax-products-cat-id]').each((i, container) => {
            const $container = $(container);
            const url = $container.data('emthemesmodezAjaxProductsUrl');

            utils.api.getPage(url, { template: 'emthemes-modez/category/ajax-products-grid-result' }, (err, resp) => {
                $container.append(resp);
            });
        });
    }


    // ------------------------------------------------------------------------
    // Update main slideshow min-height to equal the vertical categories menu
    // ------------------------------------------------------------------------

    const $categoriesMenu = $('.papaSupermarket-layout--default .emthemesModez-verticalCategories--open');

    function updateMainSlideshowHeight() {
        $('.heroCarousel-slide').css('min-height', $(window).width() > 768 ? `${$categoriesMenu.height() + 20}px` : '');
    }

    if ($categoriesMenu.length > 0) {
        updateMainSlideshowHeight();
        $(window).on('resize', updateMainSlideshowHeight);
    }


    // ------------------------------------------------------------------------
    // Sticky header
    // ------------------------------------------------------------------------

    const $stickyMenus = $('[data-stickymenu]');
    if ($stickyMenus.length > 0) {
        $stickyMenus.each((i, el) => {
            $(el).data('papathemesOriginalTop', $(el).offset().top)
                .after('<div class="papathemes-stickymenu-placeholder"></div>')
                .next().height($(el).outerHeight());
        });

        $(window)
            .on('scroll', _.debounce(() => {
                if (!mq || !mq.matches) {
                    $stickyMenus.removeClass('is-sticky');
                    return;
                }

                $stickyMenus.each((i, el) => {
                    if ($(window).scrollTop() > $(el).data('papathemesOriginalTop')) {
                        $(el).addClass('is-sticky');
                    } else {
                        $(el).removeClass('is-sticky');
                    }
                });
            }, 10))

            .on('resize', _.debounce(() => {
                $stickyMenus.each((i, el) => {
                    $(el).removeClass('is-sticky');

                    $(el).data('papathemesOriginalTop', $(el).offset().top);
                });
            }, 100));
    }

    // ------------------------------------------------------------------------
    // Init Brand Carousel
    // ------------------------------------------------------------------------

    $('[data-emthemesmodez-brand-carousel]').slick({
        dots: false,
        infinite: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 3,
                },
            },
        ],
    });

    // ------------------------------------------------------------------------
    // Support collapsible contents on product page on mobile
    // ------------------------------------------------------------------------

    $('[data-emthemesmodez-mobile-collapse]').each((i, el) => {
        const $el = $(el);
        const $toggle = $el.find('[data-emthemesmodez-mobile-collapse-handle]');
        const $content = $el.find('[data-emthemesmodez-mobile-collapse-content]');

        $toggle.on('click', (e) => {
            e.preventDefault();
            $toggle.toggleClass('is-active');
            $content.toggleClass('is-active');
        });
    });

    // ------------------------------------------------------------------------
    // Enable data-collapsible globally
    // ------------------------------------------------------------------------

    collapsibleFactory();

    // ------------------------------------------------------------------------
    // Auto expand current category on vertical menu on sidebar
    // ------------------------------------------------------------------------
    if (context.enableVerticalCurrentCategory) {
        const $curMenuItem = $('[data-current-category]');
        const collapsibles = [];

        if ($curMenuItem.attr('data-collapsible')) {
            collapsibles.push($curMenuItem);
        }

        $curMenuItem.parents('.navPage-childList, .navPage-subMenu').prev('[data-collapsible]').each((i, el) => {
            collapsibles.push(el);
        });

        $.each(collapsibleFactory(collapsibles), (i, o) => {
            o.open();
        });

        // scrollToElement('[data-current-category]', { align: 'middle' });
    }

    // ------------------------------------------------------------------------
    // Scroll to Top button
    // ------------------------------------------------------------------------
    const $scrollToTopFloatingButton = $('#scrollToTopFloatingButton');
    let scrollToTopFloatingButtonShowing = false;

    $scrollToTopFloatingButton.on('click', () => {
        scrollToElement($scrollToTopFloatingButton.attr('href'), {
            duration: 300,
        });
    });

    $(window).on('scroll', _.debounce(() => {
        if (!mq || !mq.matches) {
            if (scrollToTopFloatingButtonShowing) {
                $scrollToTopFloatingButton.addClass('u-hiddenVisually');
                scrollToTopFloatingButtonShowing = false;
            }
            return;
        }

        if (!scrollToTopFloatingButtonShowing && $(window).scrollTop() > 500) {
            $scrollToTopFloatingButton.removeClass('u-hiddenVisually');
            scrollToTopFloatingButtonShowing = true;
        } else if (scrollToTopFloatingButtonShowing && $(window).scrollTop() <= 500) {
            $scrollToTopFloatingButton.addClass('u-hiddenVisually');
            scrollToTopFloatingButtonShowing = false;
        }
    }, 500));

    // ------------------------------------------------------------------------
    // Init Newsletter Popup
    // ------------------------------------------------------------------------
    if ($('#newsletterPopupModal').length > 0) {
        newsletterPopup(context);
    }

    // ------------------------------------------------------------------------
    // Init Cart Popup remove item button
    // ------------------------------------------------------------------------
    cartPopupRemove();
}
