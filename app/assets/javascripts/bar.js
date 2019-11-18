$(function(){
  $('.fas.fa-bars').on("click", function(){
    $('.top_side').fadeIn();
  });
  $('.fas.fa-times').on("click", function(){
    $('.top_side').fadeOut();
  });

});

$(function() {
  // disable auto discover
  Dropzone.autoDiscover = false;

  $(".dropzone").dropzone({
    maxFilesize: 1,
    addRemoveLinks: true
  });
});