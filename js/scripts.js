$(document).ready(function(){

  $('#height-select').change(function(){
    if($(this).val() === 'Filter by height') {
      $('[class^=height]').slideDown();
    } else if ($(this).val()=== "<4 ft"){
      $('[class^=height]').slideUp();
      $(".height1").slideDown();
    } else if ($(this).val()==="4-5 ft") {
      $('[class^=height]').slideUp();
      $(".height2").slideDown();

    } else if ($(this).val()==="5-6.5 ft"){
      $('[class^=height]').slideUp();
      $(".height3").slideDown();

    }else{
      $('[class^=height]').slideUp();
      $("p").slideDown();
    }
  });

});
