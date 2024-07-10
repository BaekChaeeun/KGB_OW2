$(function(){
  
  $("header .ham").click(function(){
    $(this).toggleClass("open")

    if($("header .ham").hasClass("open")){
      $(".hidden").show();
      $(".ham .x").show();
      $(".ham .list").hide();
      $("body").css({overflow:'hidden'});
    } else {
      $(".hidden").hide();
      $(".ham .x").hide();
      $(".ham .list").show();
      $("body").css({overflow:'auto'});
    }
  });
});