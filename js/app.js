$(document).ready(function(){
	$("[data-openDropdown]").click(function() {
		var theDropdown = $(this).attr('data-openDropdown')
		var dropdown = $(theDropdown)
		var allDropdowns = $('.Dropdown')

		dropdown.toggleClass('active');

		allDropdowns.each(function(i, e) {

			if (dropdown[0] !== e) {
				$(e).removeClass('active')
			}
		})

	});

	// $(document).ready(function(){
	//     $(".modal").fadeIn();
	//     $(".cerrar").click(function(){
	//         $(".modal").fadeOut(300);
	//     });
	// });
	 
});