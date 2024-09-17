// JavaScript Document
$(function () {

	$('.burger_button').click(function () {
		$(this).toggleClass('active');
		$('.nav_bg').fadeToggle();
		$('nav').toggleClass('open');
	})
	$('.nav_bg').click(function () {
		$(this).fadeOut();
		$('.burger_button').removeClass('active');
		$('nav').removeClass('open');
	});
});