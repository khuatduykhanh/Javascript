$(document).ready(function() {
	
	var c = Math.random() * (500 - 0) + 0;
		console.log(c);	
	var d = Math.random() * (1000 - 0) + 0;
		console.log(d);	
	$('#btn2').mouseenter(function(event) {
		$('#btn2').animate({
			top: c,
			left: d },
			100,);
		
	});
});
