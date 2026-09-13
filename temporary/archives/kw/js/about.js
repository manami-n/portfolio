// JavaScript Document
$(function(){
$(".paroller_visu, [data-paroller-factor]").paroller({
factor: 0.5,
factorXs: 0.2,
});

$('.slider').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: '<a class="slick-prev" href="#"><img src="../images/about_left.png" width="83" height="137"></a>',
  nextArrow: '<a class="slick-next" href="#"><img src="../images/about_right.png" width="83" height="137"></a>',
});

//タイトル
$(function() {
    var $allMsg = $('h1');
    var $wordList = $('h1').html().split("");
    $('h1').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 70);
        newEL.animate({ opacity: 1 }, 1100);
    });
});


//上からふわり

 $(window).scroll(function (){
        $('.fadeinD').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 400){
                $(this).addClass('scrollin');
            }
        });
    });


});
