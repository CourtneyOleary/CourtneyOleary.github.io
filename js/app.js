jQuery(document).ready(function() {
	var user = prompt("Who are you, mate?");
	$('#welcome').hide();
	$('#welcome').text("Welcome to the " + user +". I wish you nice today.");
	$('#welcome').show("slow");
});

