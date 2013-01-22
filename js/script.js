(function($){

	$(function(){ /* DOM READY */

		$("html").addClass( $.client.browser );  /* Browser detection. */

		if ($.cookie("responsiveStylesheet") == "off") {
			$("html").removeClass("responsive");
			$("#enableResponsiveLink").show();
		}

	});

}(jQuery));




function disableResponsiveStylesheet() {
	$("html").removeClass("responsive");
	$.cookie("responsiveStylesheet", 'off');
	$("#enableResponsiveLink").show();
}





function enableResponsiveStylesheet() {
	$("html").addClass("responsive");
	$.cookie("responsiveStylesheet", "on");
	$("#enableResponsiveLink").hide();
}

