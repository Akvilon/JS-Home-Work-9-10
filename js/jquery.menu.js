


$(function() {

	$('.menu_item').hover(function() {
		$(this).children('.drop_menu').stop(false, true).slideDown(300);
	}, function() {
		$(this).children('.drop_menu').stop(false, true).slideUp(300);
	});
});

