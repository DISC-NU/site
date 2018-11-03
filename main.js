// move bar on hamburger click
$(document).ready(function(){
// Add smooth scrolling to all links
	$("#hamburger").on('click', function(event) {
		if($("#hamburger").hasClass("active")) {
			$(".bar").css("transform","translate(0, 0px)");
			$(".bar").css("opacity", "0");
			$("#hamburger").removeClass("active");
		}
		else {
			$(".bar").css("transform","translate(0, 0px)");
			$(".bar").css("opacity", "1");
			$("#hamburger").addClass("active");
		}})})