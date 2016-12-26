
puremvc.define
(
	// CLASS INFO
	{
		name: "src.view.ScrollMediator",
		parent: puremvc.Mediator
	},
	
	// INSTANCE MEMBERS
	{
		
		scrollPosition: 0,
		
		onRegister: function()
		{
			this.mediatorName = src.view.ScrollMediator.NAME;
			this.viewComponent = new src.view.ScrollView(this);
		},
		
		listNotificationInterests: function()
		{
			return [
					s_Notifications.ENTER_FRAME
			];
		},
		
		handleNotification: function(notification)
		{
			var tempScroll = document.body.scrollTop;
			// if the scroll position has changed update it and send a notification. If
			// the user broke an autoscroll reset the site's animation speeds.
			if (tempScroll != this.scrollPosition)
			{
				if ((tempScroll - this.scrollPosition < 0 && tempScroll < anchor) || (tempScroll - this.scrollPosition > 0 && tempScroll > anchor))
				{
					anchor = -1;
				}
				this.scrollPosition = tempScroll;
				this.sendNotification(s_Notifications.SCROLL_UPDATE, this.scrollPosition);
			}
		}
	},
	
	// CLASS MEMBERS
	{
		NAME: "ScrollMediator"
	}
);