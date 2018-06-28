$(document).ready(function(){
   
   $('.jumbotron h1').css({'opacity': '1', 'transition': '3s'});

   $('.slide').click(function(){
   		$('.slide').css({'margin-left': '150px', 'transition': '3s'});
   });
   
 
   $(".scrollTop").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});

	window.onscroll = function() {scrollFunction()};
   	function scrollFunction() {
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        $('.scrollTop').css('display', 'block');
	    } else {
	         $('.scrollTop').css('display', 'none');
	    }
	}



});