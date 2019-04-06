/**	
	* Template Name: Youmi Application Landing
	* Version: 1.0	
	* Template CSS
	* Author: Youme Techworld
	* Author URI: http://www.youmetechworld.com/
**/

/*	CUSTOM JS INDEX
================================
	1. LAYOUT LOADING JS
  	2. HEADER FIXED JS
	3. SMOOTH SCROLL JS
	4. SCREENSHOT SLIDER JS
	5. REVIEW SLIDER JS
	6. CONTACT FORM JS 
	
================================
*/
(function($) {
    'use strict';
			
	/*-----------------------------
		LAYOUT LOADING JS  
	-------------------------------*/
	var wind = $(window);
		wind.on('load', function () {
		$('.loader-effect').fadeOut();	
		$('#layout-loading').delay(150).fadeOut('slow');
	});
		
	/*-----------------------------
		HEADER FIXED JS  
	-------------------------------*/	
	var wind = $(window);
	var sticky = $(".navigation");
		wind.on("scroll", function() {
			var scroll = wind.scrollTop();
			if (scroll < 1) {
				sticky.removeClass("nav-fixed");
			} else {
		sticky.addClass("nav-fixed");
		}
	});	
	
	/*-----------------------------
		SMOOTH SCROLL JS  
	-------------------------------*/
	var sections = $('.scroll')
	  , nav = $('nav')
	  , nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();
		sections.each(function() {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();
			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				sections.removeClass('active');
		  
				$(this).addClass('active');
				nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
			}
		});
	});	

	$(function() {
		 $('.navigation ul li a, .download-btn ul li a').on('click', function() {
			 if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				 var target = $(this.hash);
				 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				 if (target.length) {
					 $('html, body').animate({
						 scrollTop: target.offset().top
					 }, 800);
					 return false;
				 }
			 }
		 });
	});

	$('.navbar-collapse a').on('click', function() {
		$(".navbar-collapse").collapse('hide');
	});
	


	/*-----------------------------
		SCREENSHOT SLIDER JS  
	-------------------------------*/
	$('#owl-snap').owlCarousel({
		loop:true,
		center:true,
		items:5,
		dots:false,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});

	/*-----------------------------
		REVIEW SLIDER JS  
	-------------------------------*/ 
	$('#owl-reviews').owlCarousel({
		autoplay: false,
		loop:true,
		items: 3,
		center:true,
		dots:true,
		margin:0,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:3
			}
		}
	});
		 
	/*-----------------------------
		CONTACT FORM JS  
	-------------------------------*/ 
	$(function () {
		$('#contact-form').validator();
		$('#contact-form').on('submit', function (e) {
			if (!e.isDefaultPrevented()) {
				var url = "php/contact.php";

				$.ajax({
					type: "POST",
					url: url,
					data: $(this).serialize(),
					success: function (data)
					{
						var messageAlert = 'alert-' + data.type;
						var messageText = data.message;

						var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
						if (messageAlert && messageText) {
							$('#contact-form').find('.messages').html(alertBox);
							$('#contact-form')[0].reset();
							}
						}
					});
				return false;
			}
		})
	});
})(jQuery);	
