// JavaScript Document

$(function(){

	//背景paroller
	$(".paroller_visu, [data-paroller-factor]").paroller({
		factor: 0.5,
		factorXs: 0.2,
	});


//タイトル

    var $allMsg = $('h1');
    var $wordList = $('h1').html().split("");
    $('h1').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 70);
        newEL.animate({ opacity: 1 }, 1100);
    });




// モーダルウィンドウが開くときの処理
	$(".modalopen").click(function(){
        var navClass = $(this).attr("class"),
			 href = $(this).attr("href");

        $(href).fadeIn();
    	$(this).addClass("open");
    	return false;
	});

// モーダルウィンドウが閉じるときの処理
	$(".modalclose").click(function(){
		$(this).parents(".modal").fadeOut();
		$(".modalopen").removeClass("open");
		return false;
	});


	$("div[id^='modal']").each(function(){

		var currentModal = $(this);

		//click next
		currentModal.find('.btn-next').click(function(){
			currentModal.modal('hide');
			currentModal.closest("div[id^='modal']").nextAll("div[id^='modal']").first().modal('show');
		});

		//click prev
		currentModal.find('.btn-prev').click(function(){
			currentModal.modal('hide');
			currentModal.closest("div[id^='modal']").prevAll("div[id^='modal']").first().modal('show');
		});

	});

	$('.thumb').click(function(){
    	var imgSrc = $(this).children().attr('src');
		console.log(imgSrc);
    	$(this).parent('ul').parent('div').prev('.modal-imgbox').children().attr('src',imgSrc);
  	});

});
