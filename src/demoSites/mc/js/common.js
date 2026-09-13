// JavaScript Document
$(function () {
  //nav用
  $("#navi li").hover(function () {
    $(this).children("div").css("display", "block");

  }, function () {
    $(this).children("div").css("display", "none");
  });

  // 写真ふわり
  /*
  $('.box img').css('visibility','hidden');
  $(window).scroll(function(){
  	var windowHeight = $(window).height(),
  		topWindow = $(window).scrollTop();
  	$('.box img').each(function(){
    		var targetPosition = $(this).offset().top,
  			 w = $(window).width()
  			 x = 500;
  		if(topWindow > targetPosition - windowHeight + 50 && w <= x){
     			 $(this).addClass("fadeInSP");
    } else if (topWindow > targetPosition - windowHeight + 100 && w > x){
  			 $(this).addClass("fadeIn");
    }
   	});
  });
  */
  //右からふわり

  $('.box').css('visibility', 'hidden');
  //スクロールしたら…
  $(window).scroll(function () {
    var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop();
    $('.box').each(function () {
      var targetPosition = $(this).offset().top,
        w = $(window).width();
      x = 500;
      if (topWindow > targetPosition - windowHeight + 100 && w <= x) {
        $(this).addClass("fadeInSP");
      } else if (topWindow > targetPosition - windowHeight + 100 && w > x) {
        $(this).addClass("fadeInRight");
      }
    });
  });


  //slideout

  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 225,
    'tolerance': 70
  });

  //FIXEDヘッダー
  var fixed = document.querySelector('.fixed-header');

  slideout.on('translate', function (translated) {
    fixed.style.transform = 'translateX(' + translated + 'px)';
  });

  slideout.on('beforeopen', function () {
    fixed.style.transition = 'transform 300ms ease';
    fixed.style.transform = 'translateX(225px)';
  });

  slideout.on('beforeclose', function () {
    fixed.style.transition = 'transform 300ms ease';
    fixed.style.transform = 'translateX(0px)';
  });

  slideout.on('open', function () {
    fixed.style.transition = '';
  });

  slideout.on('close', function () {
    fixed.style.transition = '';
  });

  // Toggle button
  document.querySelector('.toggle').addEventListener('click', function () {
    slideout.toggle();
  });

});
