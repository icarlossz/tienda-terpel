$(document).ready(function() {
	$("[data-openDropdown]").hover(function() {
		var theDropdown = $(this).attr('data-openDropdown')
		var dropdown = $(theDropdown)
		dropdown.addClass('active');
	});

	$("[data-openDropdown]").mouseleave(function() {
		var theDropdown = $(this).attr('data-openDropdown')
		var dropdown = $(theDropdown)
		dropdown.removeClass('active');
	});
	
	$("[data-closeDropdown]").mouseleave(function() {
		var theDropdown = $(this).attr('data-closeDropdown')
		var dropdown = $(theDropdown)
		dropdown.toggleClass('active');
	});
});