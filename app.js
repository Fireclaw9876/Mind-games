$(document).ready(function(){

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
