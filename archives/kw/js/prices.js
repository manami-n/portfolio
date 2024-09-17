// JavaScript Document
$(function(){

	$(".paroller_visu, [data-paroller-factor]").paroller({
		factor: 0.5,
		factorXs: 0.2,
	});


//タイトル

    var $allMsg = $('#h1a');
    var $wordList = $('#h1a').html().split("");
    $('#h1a').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 70);
        newEL.animate({ opacity: 1 }, 1100);
    });



    var $allMsg2 = $('.and');
    var $wordList2 = $('.and').html().split("");
    $('.and').html("");
    $.each($wordList2, function(idx, elem) {
        var newEL2 = $("<span/>").text(elem).css({ opacity: 0 });
        newEL2.appendTo($allMsg2);
        newEL2.delay(idx * 70);
        newEL2.delay(500).animate({ opacity: 1 }, 1100);
    });


    var $allMsg3 = $('#h1b');
    var $wordList3 = $('#h1b').html().split("");
    $('#h1b').html("");
    $.each($wordList3, function(idx, elem) {
        var newEL3 = $("<span/>").text(elem).css({ opacity: 0 });
		newEL3.appendTo($allMsg3);
        newEL3.delay(idx * 70);
        newEL3.delay(900).animate({ opacity: 1 }, 1100);
    });



//上からふわり

 	$(window).scroll(function (){
       $('.fadeinD').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
			}
		});
	});


//ただのふわり

 	$(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });


});
