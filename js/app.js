$(document).ready(function(){
	$("[data-openDropdown]").click(function() {
		var theDropdown = $(this).attr('data-openDropdown')
		var dropdown = $(theDropdown)
		var allDropdowns = $('.Dropdown')

		dropdown.toggleClass('active');

		allDropdowns.each(function(i, e) {
			dropdown[0] !== e && $(e).removeClass('active')
		})
		$(".invisible-closer").click(function(){ dropdown.removeClass('active') })
	});

	$("[data-openTab]").click(function() {
		// Add active class to the tab
		var tabControler = $('.tab').removeClass('active')
		$(this).addClass('active')

		// Add active class to the content
		var theTab = $(this).attr('data-openTab')
		var tab = $(theTab)
		var allTabs = $('.Tabs')

		tab.removeClass('active');
		allTabs.each(function(index, element) {
			tab[0] !== element && $(element).removeClass('active')
		})
		tab.addClass('active');
	});

	$("[data-openModalTab]").click(function() {
		// Add active class to the tab
		var tabs = $('.modal-tab-title')
		tabs.removeClass('active')
		$(this).addClass('active')

		// Add active class to the content
		var theModalTab = $(this).attr('data-openModalTab')
		var modalTab = $(theModalTab)
		var modalTabs = $('.modal-tab')

		modalTab.removeClass('active');
		modalTabs.each(function(index, element) {
			modalTab[0] !== element && $(element).removeClass('active')
		})
		modalTab.addClass('active');
	});

	$("[data-faqTab]").click(function() {
		// Add active class to the tab
		var tabs = $('.faq-tab-controller')
		tabs.removeClass('active')
		$(this).addClass('active')

		// Add active class to the content
		var theFaqTab = $(this).attr('data-faqTab')
		var faqTab = $(theFaqTab)
		var faqTabs = $('.faq-tab')

		faqTab.removeClass('active');
		faqTabs.each(function(index, element) {
			faqTab[0] !== element && $(element).removeClass('active')
		})
		faqTab.addClass('active');
	});

	$("[data-itemDetalle]").click(function() {
		// Add active class to the tab
		$(this).fadeIn('slow')
		var buttons = $('[data-itemDetalle]')
		buttons.each(function(index, element){
			if (this == element) {
				$(this).attr('src') == 'images/iconMore.svg'
					? $(this).attr('src', 'images/closeBurger.svg')
					: $(this).attr('src', 'images/iconMore.svg')
			}
		})
		

		// Add active class to the content
		var theItemDetalle = $(this).attr('data-itemDetalle')
		var itemDetalle = $(theItemDetalle)
		var itemsDetalle = $('.item-detalle')

		itemDetalle.toggleClass('active');
		itemsDetalle.each(function(index, element) {
			itemDetalle[0] !== element && $(element).removeClass('active')
		})
		// itemDetalle.addClass('active');
	});

	$("[data-emotional]").click(function() {
		// Add active class to the tab
		var emotions = $('.emotionp')
		emotions.removeClass('is-active')
		$(this).addClass('is-active')

		// Add active class to the content
		var theEmotion = $(this).attr('data-emotional')
		var emotion = $(theEmotion)
		var emotions = $('.emotionsContainer')

		if (theEmotion == '#emotionsFormGood') {
			$('#emotionsFormBad').removeClass('active')
			$('#emotionsFormGood').addClass('active')
			console.log($('#emotionsFormBad'), $('#emotionsFormgood'))
		} else {
			$('#emotionsFormGood').removeClass('active')
			$('#emotionsFormBad').addClass('active')
			console.log(theEmotion)
		}
		// emotion.addClass('active');
	});

  $("[data-outProduct]").click(function() {
  	var productID = $(this).attr('data-outProduct');
  	$(productID).addClass('invisible')
  });

  $("[data-toggleActive]").click(function() {
  	var commonElementsAttribbute = $(this).attr('data-toggleActive');
  	var elements = $(commonElementsAttribbute);

  	$(elements).each(function(index, element){
  		$(element).removeClass('active')
  		$(element).next().removeClass('active')
  	})
  	$(this).addClass('active')
  	$(this).next().addClass('active')
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

