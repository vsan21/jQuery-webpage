$(document).ready(function() {
  // console.log('myScript.js loaded!');
  $('#red-sentence').hover(function() {
    // First remove the purple-text class in case it was added first.
    $(this).removeClass('purple-text');
    //this is added because later when we turn it purple with the button, it won't change back to red when we click again (we have to tell that when it is clicked, to remove purple and turn red!)

    // Then add the red-text class to turn the sentence red.
    $(this).addClass('red-text');
    $(this).addClass('increase-font');
  });

  $('#blue-button').click(function() {
    // We can also "chain" methods together like this:
    $('#blue-sentence')
    .removeClass('purple-text')
    .addClass('blue-text');
  });

  $('#purple-button').click(function() {
    $('.colorful-sentence').addClass('purple-text');
    $('#purple-button').show(300).hide(500).show(800);
  });

  $('#pink-sentence').hover(function() {
    $(this).addClass('pink-text');
  });

  $("button").click(function(){
    $('#b').animate({bottom: '350px', left: '500px'});
    $('#b').animate({top: '500px'});
    $('#hide-hoop').animate({opacity: '0.5'}, 2000);
  });

  // $('#b').animate({bottom: '50px', top: '50px'}, 2000, 'easeOutBounce');

});
