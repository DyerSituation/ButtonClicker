console.log("in");
$( window ).load(function() { show(); })

function show(){
	$('#msgBox').fadeIn();
	$('#lookAround').fadeIn(1000);

	console.log("out");
}