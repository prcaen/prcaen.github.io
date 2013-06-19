/* Author: Pierrick CAEN

*/
$(document).ready(function() {
  $("#tweeter_feed").tweetable({
    html5: true,
    username: 'prcaen',
    time: true,
    rotate: false,
    speed: false,
    limit: 5,
    replies: true,
    position: 'append',
    failed: "An error has occured with Twitter API",
    onComplete:function($ul){
      $ul.addClass('clearfix');
      $ul.children('li').each(function(index) {
        $(this).prepend('<i class="sprite" id="face">My face</i>');
      });
    }
  });
});
