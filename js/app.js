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

	$("[data-openTab]").click(function() {
		var theTab = $(this).attr('data-openTab')
		var tab = $(theTab)
		var allTabs = $('.Tabs')

		tab.toggleClass('active');

		allTabs.each(function(i, e) {

			if (tab[0] !== e) {
				$(e).removeClass('active')
			}
		})

	});



	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 500);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(500);
		} else {
			$('.ir-arriba').slideUp(500);
		}
	});

 



	// $(document).ready(function(){
	//     $(".modal").fadeIn();
	//     $(".cerrar").click(function(){
	//         $(".modal").fadeOut(300);
	//     });
	// });
	 
});

