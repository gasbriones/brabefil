(function ($) {

    $(document).ready(function () {
        //Init animation scroll
        

if(screen.width > 500 ){
	new WOW().init();
}





        $('.dialog a').click(function(e){

            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 1000);

            return false;
        });
    });

})(jQuery);
