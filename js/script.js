/* Author: Pierrick CAEN

*/
$(document).ready(function() {
	$("#tweeter_feed").tweetable({
		username: 'nimbus147',
		time: true,
		rotate: false,
		speed: false, 
		limit: 5, 
		replies: true, 
		position: 'append', 
		onComplete:function($ul){
			$ul.addClass('clearfix');
			$ul.children('li').each(function(index) {
				$(this).prepend('<i class="sprite" id="face">My face</i>');
			});
		}
	});
});
