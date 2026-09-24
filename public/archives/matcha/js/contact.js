// JavaScript Document
$(function () {
  $(".alert").hide();

  $("#confirm").click(function () {
    var sendFlag = true;

    if (!$("#my_name").val()) {
      $("#alert_name").show();
      sendFlag = false;
    } else {
      $("#alert_name").hide();
    }
    if (!$("#email").val()) {
      $("#alert_email").show();
      sendFlag = false;
    } else {
      $("#alert_email").hide();
    }

    if (!$("#email2").val()) {
      $("#alert_email2").show();
      sendFlag = false;
    } else if (
      $("#email").val() !== $("#email2").val()) {
      $("#alert_email2").show();
      sendFlag = false;
    } else {
      $("#alert_email2").hide();
    }

    if (!$("#body").val()) {
      $("#alert_body").show();
      sendFlag = false;
    } else {
      $("#alert_body").hide();
    }

    if (sendFlag === false) {
      return false;
    }
  });

  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href);
    console.log(target);
    var position = target.offset().top;
    $('body,html').stop().animate({
      scrollTop: position
    }, 400);
    return false;
  });

});