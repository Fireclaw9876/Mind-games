console.log('sanity check');

$(document).ready(function(){

  // NOTE: Hides necessary elements on page load.
  $('#rotd-answer').hide();
  $('#rotd-button-hide').hide();
  $('.rd-answer').hide();
  $('.rd-button-hide').hide();

  // NOTE: RIDDLE-OF-THE-DAY CONTROLS
  // NOTE: Shows ROTD answer
  $('#rotd-button-show').click(function(){
    $(this).hide();
    $('#rotd-button-hide').show();
    $('#rotd-answer').show();
  })

  // NOTE: Hides ROTD answer
  $('#rotd-button-hide').click(function(){
    $(this).hide();
    $('#rotd-answer').hide();
    $('#rotd-button-show').show();
  })


  // NOTE: RIDDLES CONTROLS
  // NOTE: Shows RD answer
  $('.rd-button-show').click(function(){
    $(this).hide();
    var $riddleBox = $(this).parent();
    var $buttonHide = $riddleBox.find('.rd-button-hide')
    var $rdAnswer = $riddleBox.find('.rd-answer');
    $buttonHide.show();
    $rdAnswer.show();
  })

  // NOTE: Hide RD answer
  $('.rd-button-hide').click(function(){
    $(this).hide();
    var $riddleBox = $(this).parent();
    var $buttonShow = $riddleBox.find('.rd-button-show')
    var $rdAnswer = $riddleBox.find('.rd-answer');
    $buttonShow.show();
    $rdAnswer.hide();
  })




  $('.info-box').click(function(){
    var colorArray = ["red", "green", "blue", "orange", "purple", "yellow"];

    var rng = Math.random();
    rng = rng * 10 / 2;
    rng = Math.round(rng);

    console.log('rng: ' + rng);

    $(this).css('background-color', colorArray[rng] );
  });




});
// closes document.ready()
