$(function(){
  $("left_hover_content").hover(
    $(function(){
      $(".left_hover_text").fadeIn();
    },
    function(){
      $(".left_hover_text").fadeOut();
    })
  );

});


$(function() {
  $(".left_hover_text").css("color", "green");
 });