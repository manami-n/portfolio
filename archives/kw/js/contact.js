// JavaScript Document
$(function(){

	$(".paroller_visu, [data-paroller-factor]").paroller({
		factor: 0.5,
		factorXs: 0.2,
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


	$(".alert").hide();

	$("#cfm").click(function(){
		var sendFlag = true;

		if(!$("#name").val()){
			$("#dtname").show();
			sendFlag = false;
		}else{
			$("#dtname").hide();
		}

		if(!$("#email").val()){
			$("#dtemail").show();
			sendFlag = false;
		}else{
			$("#dtemail").hide();
		}

		if(!$("#email2").val()){
			$("#dtemail2").show();
			sendFlag = false;
		}else if(
			$("#email").val()!==$("#email2").val()){
				$("#dtemail2").show();
				sendFlag=false;
		}else{
			$("#dtemail2").hide();
		}

		if(!$("#content").val()){
			$("#dtcontent").show();
			sendFlag = false;
		}else{
			$("#dtcontent").hide();
		}

		//判定
		if(sendFlag ===false){
		return false;
		}

		if(sendFlag ===true){
			alert("yay!");
		}
	});

});