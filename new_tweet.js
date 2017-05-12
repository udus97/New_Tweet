$(function () {
  //Remove the noscript element from the DOM
  $('noscript').remove();
  var $textArea = $('textarea');
  var $tweetCount = $('span');
  var $tweetButton = $('button');
  var maxValue = 140;
  $tweetCount.text(maxValue);

  $textArea.on('input', function () {
    var enteredTextLength = $(this).val().length;
    var textLength = maxValue - enteredTextLength;
    $tweetCount.text(textLength);
    if (textLength < 0) {
      $tweetCount.addClass('error');
      $tweetButton.prop({disabled: true});
      $tweetButton.addClass('errorButton');


    } else {
      $tweetCount.removeClass('error');
      $tweetButton.prop({disabled: false});
      $tweetButton.removeClass('errorButton');

    }


  });


});