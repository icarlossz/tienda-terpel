$(document).ready(function(){

	$(document).ready(function(){
	  $('img#thumb')
	    .wrap('<span style="display:inline-block"></span>')
	    .css('display', 'block')
	    .parent()
	    .zoom();
	});

	$('#trigger-login').click(function () {
    var isActive = $(this).hasClass('error');
    if (isActive) {
      $('.alert').removeClass('error')
    } else {
      $('.alert').addClass('error')
    }
  });

	$('.cls-1').click(function () {
    var isActive = $(this).hasClass('active');
    if (isActive) {
      $(this).removeClass('active')
    } else {
      $(this).addClass('active')
    }
  });

	$('.bxslider').bxSlider({
		infiniteLoop: true,
	  minSlides: 3,
	  maxSlides: 3,
	  slideWidth: 360,
	  slideMargin: 10,
	  moveSlides: 1,
	  touchEnabled:true,
	  hideControlOnEnd: true,
	});

	$('.bxslider-promociones').bxSlider({
	  infiniteLoop: true,
	  hideControlOnEnd: true,
	  auto: true,
	  responsive: true,
	});

	$('.bxslider-services').bxSlider({
	  infiniteLoop: true,
	  moveSlides: 1,
	  slideMargin: 10,
	  touchEnabled:true,
	});

	$('.bxslider-producto').bxSlider({
	  infiniteLoop: true,
	  minSlides: 3,
	  maxSlides: 3,
	  moveSlides: 1,
	  slideWidth: 360,
	  slideMargin: 10,
	  moveSlides: 1,
	  touchEnabled:true,
	  hideControlOnEnd: true,
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
	});


	$("[data-emotionaly]").click(function() {
  	 // Add active class to the tab
    var theEmotions = $(this).attr('data-emotionalyGroup')
    var emotions = $(theEmotions).find('.emotionp')
    emotions.removeClass('is-active')
    $(this).addClass('is-active')

    // Add active class to the content
    var theEmotion = $(this).attr('data-emotionaly')
    var emotion = $(theEmotion)
    var emotions = $('.emotionsContainer')
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
        console.log(selected)
          if (selected == 0) {
              $(element).removeClass('active')
              $(element).next().removeClass('active')
          }
      })
      $(this).addClass('active')
      $(this).next().addClass('active')
      $(this).prev().addClass('active')
  });


	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 500);
	});

	$('#checkout-table').stacktable();
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 500 ){
			$('.ir-arriba').slideDown(500);
		} else {
			$('.ir-arriba').slideUp(500);
		}
	});

	$('#select-all').click(function(event) {   
    if(this.checked) {
        // Iterate each checkbox
        $(':checkbox').each(function() {
            this.checked = true;                        
        });
    }
    else { $(":checkbox").each(function() { this.checked = false; }); }
	});

	$('.seguimientoContainer-icons .col-md-4:has(> .icon.active)').last().removeClass('active')
	$('.seguimientoContainer-icons .col-md-4:has(> .icon.active):not(:last-child)').addClass('active')
	
	$(window).load(function(){
        $('#modal-inicio').modal('show');
  });

});

