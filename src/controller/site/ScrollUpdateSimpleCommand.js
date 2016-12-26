
puremvc.define
(
	// CLASS DEFINITION
	{
		name: "src.controller.site.ScrollUpdateSimpleCommand",
		parent: puremvc.SimpleCommand
	},
	
	// INSTANCE MEMBERS
	{
		execute: function(notification)
		{
			if (notification.getName() == s_Notifications.STOPPED_SCROLLING)
			{
				console.log("stopped scrolling");
			} else
			{
				console.log(notification.getBody());
			}
		}
	}
);