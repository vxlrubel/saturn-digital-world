(function($){

    class SaturnDigitalWorld {
        init(){
            this.header();
            this.homeSlider();
            this.scrollToTop();
            this.mixitup();
            this.reviewSlider();
        }

        header(){
            // clone menu
            $('.menu').clone().attr('class', 'mobile-menu').appendTo('.responsive-menu');

            // add toggle class if has submenu
            $('.responsive-menu').find('li.has-submenu').children('a').addClass('has-submenu-link').append('<span class="submenu-toggle">submen toggle</span>');

            // slide toggle submenu when click '.has-submenu-link'
            $('.has-submenu-link').on('click','.submenu-toggle', function(e){
                e.preventDefault();
                $(this).stop().toggleClass('show');
                $(this).parent('a').siblings('ul.submenu').stop().slideToggle(300);
            });

            // open responsive menu
            $('#menu-toggle').on('click', function(e){
                e.preventDefault();
                $('.responsive-menu').stop().toggleClass('show');
            });
        
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

        scrollToTop(){
            
            let win = $(window);

            win.on('scroll', function(){
                showHide();
            });
            
            $('.scroll-to-top').on('click', (e)=>{
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 1000);
            });

            function showHide(){
                const top = win.scrollTop();
                const windowHeight = win.outerHeight();
                if( top >= windowHeight ){
                    $('.scroll-to-top').fadeIn();
                }else{
                    $('.scroll-to-top').fadeOut();
                }
            }
            showHide();
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
        const sdw = new SaturnDigitalWorld();
        sdw.init();
    });
    
})(jQuery);