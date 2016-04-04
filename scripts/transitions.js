$(document).ready(function() {
	// $(".smaller").fadeIn("slow").slideDown("slow");
	$('.smaller').animate( { opacity: 	1 },
						   { duration: 	1500, 
						   	 easing: 	'easeOutSine',
						   	 queue: 	false})
				 .animate( { top: 		30 }, 
						   { duration: 	1800,
						   	 queue: 	false });
	$("#pg-title").fadeIn(4000);
	$(".intro").fadeIn(6000);
});