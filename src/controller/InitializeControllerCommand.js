
puremvc.define
(
	// CLASS INFO
	{
		name: "src.controller.InitializeControllerCommand",
		parent: puremvc.SimpleCommand
	},
	
	// INSTANCE MEMBERS
	{
		execute: function(notification)
		{
			// set up necessary command/notification pairs
			//this.facade.registerCommand(s_Notifications.SCROLL_UPDATE, src.controller.site.ScrollUpdateCommand);
			//this.facade.registerCommand(s_Notifications.STOPPED_SCROLLING, src.controller.site.ScrollUpdateCommand);
			this.facade.registerCommand(s_Notifications.ENTER_FRAME, src.controller.EnterFrameCommand);
		}
	}
);