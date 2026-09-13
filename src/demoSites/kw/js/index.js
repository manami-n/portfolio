// JavaScript Document
$(function(){
$(".paroller_one, [data-paroller-factor]").paroller({
	factor: 0.5,
	factorXs: 0.2,
	});
$(".paroller_two, [data-paroller-factor]").paroller({
	factor: 0.5,
	factorXs: 0.2,
});


//タイトルまわりのアニメーション
$('header').css('opacity','0');
$('header').delay(1800).animate({"opacity":"1"}, 900);

$('#board').css('opacity','0');
$('#board').delay(300).animate({"opacity":"1"}, 900);

$('#title').css('opacity','0');
$('#title').delay(900).animate({"opacity":"1"}, 900);



//who are weのところのタイトル
$(function() {
	var pos=$('.menu2 h1').offset().top;
	var $allMsg = $('.menu2 h1');
	var $wordList = $('.menu2 h1').html().split("");
	console.log($wordList);
	$('.menu2 h1').html("");
	$(window).scroll(function(){
		if( $(window).scrollTop() > pos-500){
			if(	!$('.menu2 h1').html()){
				$.each($wordList, function(idx, elem) {
					var newEL = $("<span/>").text(elem).css({ opacity: 0 });
					newEL.appendTo($allMsg);
					newEL.delay(idx * 70);
					newEL.animate({ opacity: 1 }, 900);
				});
			}
		}
	});
});

//Who are weのふわっと
$('.a-fadein').css('opacity','0');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.a-fadein').each(function(){
  var targetPosition = $(this).offset().top;
   if(topWindow > targetPosition - windowHeight + 300){
   $(this).animate({"opacity":"0.9"}, 1000);
  }
 });
});


//welcome aboardのタイトル
$('.menu3 h1').css('opacity','0');
$('.menu3 .a-fadein').css('opacity', '0');
$('.menu3 .more').css('opacity', '0');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.menu3 h1').each(function(){
  var targetPosition = $(this).offset().top;
   if(topWindow > targetPosition - windowHeight + 300){
   $(this).animate({"opacity":"0.9"}, 1000);
   $('.menu3 .a-fadein').delay(500).animate({"opacity":"0.9"}, 1000);
      $('.menu3 .more').delay(700).animate({"opacity":"0.9"}, 1000);
  }
 });
});


//worksのタイトル
$(function() {
	var pos=$('.menu4 h1').offset().top;
	var $allMsg = $('.menu4 h1');
	var $wordList = $('.menu4 h1').html().split("");
	console.log($wordList);
	$('.menu4 h1').html("");
	$(window).scroll(function(){
		if( $(window).scrollTop() > pos-300){
			if(	!$('.menu4 h1').html()){
				$.each($wordList, function(idx, elem) {
					var newEL = $("<span/>").text(elem).css({ opacity: 0 });
					newEL.appendTo($allMsg);
					newEL.delay(idx * 70);
					newEL.animate({ opacity: 1 }, 1100);
				});
			}
		}
	});

});


//最後のメニュー３つ
$('.menu5').css('opacity','0');
$('.menu5').children().css('opacity','0');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.menu5').each(function(){
  var targetPosition = $(this).offset().top;
   if(topWindow > targetPosition - windowHeight + 300){
   $(this).animate({"opacity":"1"}, 1000);
   $(this).children(".order").delay(500).animate({"opacity":"1"}, 1000);
   $(this).children(".faq").delay(700).animate({"opacity":"1"}, 1000);
   $(this).children(".contact").delay(900).animate({"opacity":"1"}, 1000);
  }
 });
});




//右からふわり

 $(window).scroll(function (){
        $('.fadeinD').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 800){
                $(this).addClass('scrollin');
            }
        });
    });




});