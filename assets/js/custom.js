(function($){

    class SATURN_DIGITAL_WORLD_CUSTOM {
        init(){
            this.custom();
        }

        custom(){
            console.log('hello world.')
        }
    }
    $(document).ready(function () {
        const sdw = new SATURN_DIGITAL_WORLD_CUSTOM();
        sdw.init();
    });
    
})(jQuery);