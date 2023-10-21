(function($){

    class SATURN_DIGITAL_WORLD_HOME {
        init(){
            this.homeSlider();
            this.mixitup();
            this.reviewSlider();
        }

        homeSlider(){
            var args = {
                items             : 1,
                loop              : true,
                dots              : true,
                lazyLoad          : true,
                autoplay          : true,
                autoplayTimeout   : 4000,
                autoplayHoverPause: true,
                smartSpeed        : 1500,
                dotsSpeed         : 750,
                navSpeed          : 750,
                dotClass          : 'slider-dot',
                dotsClass         : 'saturn-slider-dots',
                animateIn         : 'animate__fadeInRight',
                animateOut        : 'animate__fadeOutLeft',
                
            }
            $('.home-slider').owlCarousel(args);
        }

        mixitup(){
            var cont = $('[data-ref="saturn-mixitup"]');

            var filtering = mixitup(cont, {
                selectors: {
                    target: '[data-ref="mixitup-target"]'
                }
            });
        }

        reviewSlider(){
            $('.review-area .review').owlCarousel({
                items             : 1,
                loop              : true,
                dots              : false,
                nav               : true,
                lazyLoad          : true,
                autoplay          : true,
                autoplayTimeout   : 4000,
                autoplayHoverPause: true,
                smartSpeed        : 1500,
                dotsSpeed         : 750,
                navSpeed          : 750,
                animateIn         : 'animate__fadeInRight',
                animateOut        : 'animate__fadeOutLeft',
            });
        }

    }
    $(document).ready(function () {
        const sdw = new SATURN_DIGITAL_WORLD_HOME();
        sdw.init();
    });
    
})(jQuery);