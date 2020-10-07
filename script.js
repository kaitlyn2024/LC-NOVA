//scroll effect
$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 500) {
        $(".fixed-top").css({ opacity: 0.8 });

    } else{
		$(".fixed-top").css({ opacity: 1 });
	}
});

//fade in
$(document).ready(function(){
	$("#welcome-message").css({ opacity: 1 });
});