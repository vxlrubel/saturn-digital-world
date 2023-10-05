(function($){

    class SDW {
        init(){
            this.header();
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
    }
    $(document).ready(function () {
        const sdw = new SDW();
        sdw.init();
    });
})(jQuery);