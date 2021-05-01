$(document).ready(function(){
    var moving_background = $(".p_fade");
    $(window).scroll(function() {
    	var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if ($(document).width() <= 800){
	        // moving_background.css('opacity', 1-(scrollBottom/(moving_background.height() + 40)));
        }else{
        	moving_background.css('margin-top', scrollBottom/6 + 10);
	        moving_background.css('opacity', 1-(scrollBottom/(moving_background.height() + 320)));
        }
    });
});