/*
	
	Add an event listener for keyup to document to listen for the custom "U+1200001" key on OwOS
	or for the ESC key (U+001B) on other platforms and call onbackbutton to be compatible with
	PhoneGap. According to (http://forums.enyojs.com/discussion/comment/5826/#Comment_5826) webOS 2.x
	gives a "Back" key identifier.
	
*/

(function() {
	enyo.dispatcher.listen(document, 'keyup', function(ev) {
		if (ev.keyIdentifier == "U+1200001" || ev.keyIdentifier == "U+001B" || ev.keyIdentifier == "Back") {
			enyo.Signals && enyo.Signals.send && enyo.Signals.send('onbackbutton');
			return true;
		}
	});
})();
