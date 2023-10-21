(function($){

    class SATURN_DIGITAL_WORLD {
        init(){
            this.header();
            this.scrollToTop();
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
    }
    $(document).ready(function () {
        const sdw = new SATURN_DIGITAL_WORLD();
        sdw.init();
    });
    
})(jQuery);