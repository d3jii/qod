$(document).ready(function() {

	function get_callback(data){
		$(".quote").text(data.contents.quotes[0].quote).lettering('words').children('span').lettering();
		$(".author").text(data.contents.quotes[0].author).lettering('words').children('span').lettering();
	}	

	$.get('http://quotes.rest/qod.json',get_callback);
	$(".cs-text").lettering('words').children('span').lettering();
}); 