// JavaScript Document
$(function(){

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

	//form系
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

		if(!$("#zip1").val()){
			$("#dtzip").show();
			sendFlag = false;
		}else{
			$("#dtzip").hide();
		}

		if(!$("#zip2").val()){
			$("#dtzip").show();
			sendFlag = false;
		}else{
			$("#dtzip").hide();
		}


		if(!$("#addr21").val()){
			$("#dtaddr").show();
			sendFlag = false;
		}else{
			$("#dtaddr").hide();
		}

		if(!$("#addr3").val()){
			$("#dtaddr").show();
			sendFlag = false;
		}else{
			$("#dtaddr").hide();
		}


		if(!$("#date").val()){
			$("#dtdate").show();
			sendFlag = false;
		}else{
			$("#dtdate").hide();
		}

		if(!$("#groom").val()){
			$("#dtnames").show();
			sendFlag = false;
		}else{
			$("#dtnames").hide();
		}

		if(!$("#bride").val()){
			$("#dtnames").show();
			sendFlag = false;
		}else{
			$("#dtnames").hide();
		}

		/*

		//ファイルサイズ

			var size = $('#file1')["0"].firstChild.files["0"].size;
			console.log(size);
			 if (size > 3000000){
				 $("#dtfile").show();
			sendFlag = false;
			 }
			 else {
				 $("#dtfile").hide();
			 }
		*/

		//判定
		if(sendFlag ===false){
		return false;
		}

		if(sendFlag ===true){
			alert("yay!");
		}

	});

});