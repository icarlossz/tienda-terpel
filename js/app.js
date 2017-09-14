$(document).ready(function() {
	$("[data-openDropdown]").click(function() {
		var theDropdown = $(this).attr('data-openDropdown')
		var dropdown = $(theDropdown)
		dropdown.toggleClass('active');
	});

	// $("[data-openDropdown]").click(function() {
	// 	var theDropdown = $(this).attr('data-openDropdown')
	// 	var dropdown = $(theDropdown)
	// 	dropdown.removeClass('active');
	// });
	
	// $("[data-closeDropdown]").mouseleave(function() {
	// 	var theDropdown = $(this).attr('data-closeDropdown')
	// 	var dropdown = $(theDropdown)
	// 	dropdown.toggleClass('active');
	// });
});