Blog.AboutController = Ember.Controller.extend({
	isPictureShowing: false,	
	actions: {
		buttonAction: function() {
			alert('TEST');
		},
		showPicture: function() {
			this.set('isPictureShowing', true);
		},
		hidePicture: function() {
			this.set('isPictureShowing', false);
		}
	} 
});