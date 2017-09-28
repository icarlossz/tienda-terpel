$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto: true,
		infiniteLoop: true,
		useCSS: false,
	  minSlides: 3,
	  maxSlides: 3,
	  slideWidth: 360,
	  slideMargin: 10,
	  moveSlides: 1,
	  nextSelector: '#slider-next',
	  prevSelector: '#slider-prev',
	  touchEnabled:true
	});

	$('.bxslider-promociones').bxSlider({
	  infiniteLoop: true,
	  hideControlOnEnd: true,
	  auto: true,
	  responsive: true,
	});

	$('.bxslider-catalogo').bxSlider({
	  infiniteLoop: true,
	  hideControlOnEnd: true,
	  auto: true,
	});

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
  		var next = $(element).next()
  		var selected = next.find('select option:selected').val()
		
		console.log(selected == 0)

  		if (selected == 0) {
  			$(element).removeClass('active')
  			$(element).next().removeClass('active')
  		} else {
  			$(element).addClass('active')
  			$(element).next().addClass('active')
  		}
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
		if( $(this).scrollTop() > 500 ){
			$('.ir-arriba').slideDown(500);
		} else {
			$('.ir-arriba').slideUp(500);
		}
	});

  // $('#contact_form').bootstrapValidator({
  //     // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
  //     feedbackIcons: {
  //         valid: 'glyphicon glyphicon-ok',
  //         invalid: 'glyphicon glyphicon-remove',
  //         validating: 'glyphicon glyphicon-refresh'
  //     },
  //     fields: {
  //         first_name: {
  //             validators: {
  //                     stringLength: {
  //                     min: 2,
  //                 },
  //                     notEmpty: {
  //                     message: 'Please supply your first name'
  //                 }
  //             }
  //         },
  //          last_name: {
  //             validators: {
  //                  stringLength: {
  //                     min: 2,
  //                 },
  //                 notEmpty: {
  //                     message: 'Please supply your last name'
  //                 }
  //             }
  //         },
  //         email: {
  //             validators: {
  //                 notEmpty: {
  //                     message: 'Please supply your email address'
  //                 },
  //                 emailAddress: {
  //                     message: 'Please supply a valid email address'
  //                 }
  //             }
  //         },
  //         phone: {
  //             validators: {
  //                 notEmpty: {
  //                     message: 'Please supply your phone number'
  //                 },
  //                 phone: {
  //                     country: 'US',
  //                     message: 'Please supply a vaild phone number with area code'
  //                 }
  //             }
  //         },
  //         address: {
  //             validators: {
  //                  stringLength: {
  //                     min: 8,
  //                 },
  //                 notEmpty: {
  //                     message: 'Please supply your street address'
  //                 }
  //             }
  //         },
  //         city: {
  //             validators: {
  //                  stringLength: {
  //                     min: 4,
  //                 },
  //                 notEmpty: {
  //                     message: 'Please supply your city'
  //                 }
  //             }
  //         },
  //         state: {
  //             validators: {
  //                 notEmpty: {
  //                     message: 'Please select your state'
  //                 }
  //             }
  //         },
  //         zip: {
  //             validators: {
  //                 notEmpty: {
  //                     message: 'Please supply your zip code'
  //                 },
  //                 zipCode: {
  //                     country: 'US',
  //                     message: 'Please supply a vaild zip code'
  //                 }
  //             }
  //         },
  //         comment: {
  //             validators: {
  //                   stringLength: {
  //                     min: 10,
  //                     max: 200,
  //                     message:'Please enter at least 10 characters and no more than 200'
  //                 },
  //                 notEmpty: {
  //                     message: 'Please supply a description of your project'
  //                 }
  //                 }
  //             }
  //         }
  //     })
  //     .on('success.form.bv', function(e) {
  //         $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
  //             $('#contact_form').data('bootstrapValidator').resetForm();

  //         // Prevent form submission
  //         e.preventDefault();

  //         // Get the form instance
  //         var $form = $(e.target);

  //         // Get the BootstrapValidator instance
  //         var bv = $form.data('bootstrapValidator');

  //         // Use Ajax to submit form data
  //         $.post($form.attr('action'), $form.serialize(), function(result) {
  //             console.log(result);
  //         }, 'json');
  //     });

	// $(document).ready(function(){
	//     $(".modal").fadeIn();
	//     $(".cerrar").click(function(){
	//         $(".modal").fadeOut(300);
	//     });
	// });

	// $('form').validate({
	//     rules: {
	//         new-password: {
	//             minlength: 8,
	//             maxlength: 15,
	//             required: true
	//         },
	//         repeat-new-password: {
	//             minlength: 8,
	//             maxlength: 15,
	//             required: true
	//         }
	//     },
	//     highlight: function(element) {
	//         $(element).closest('.form-group').addClass('has-error');
	//     },
	//     unhighlight: function(element) {
	//         $(element).closest('.form-group').removeClass('has-error');
	//     },
	//     errorElement: 'span',
	//     errorClass: 'help-block',
	//     errorPlacement: function(error, element) {
	//         if(element.parent('.input-group').length) {
	//             error.insertAfter(element.parent());
	//         } else {
	//             error.insertAfter(element);
	//         }
	//     }
	// });



});

