
puremvc.define
(
	// CLASS DEFINITIONS
	{
		// view component that hooks onto the scrollbar and reports when it stops moving
		name: "src.view.ScrollView",
		constructor: function(_mediator)
		{
			this.mediator = _mediator;
			window.onscroll = function() {
				if (this.timeoutID != -1)
				{
					window.clearTimeout(this.timeoutID);
				}
				this.timeoutID = window.setTimeout(function() { 
					src.ApplicationFacade.getInstance(src.ApplicationFacade.NAME).sendNotification(s_Notifications.STOPPED_SCROLLING);
				}, 250);
			};
		}
	},
	
	// INSTANCE MEMBERS
	{
		mediator: null,
		timeoutID: -1
	}
	
);