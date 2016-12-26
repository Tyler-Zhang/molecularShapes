
puremvc.define
(
	// CLASS INFO
	{
		name: "src.controller.InitializeViewCommand",
		parent: puremvc.SimpleCommand
	},
	
	// INSTANCE MEMBERS
	{
		execute: function(notification)
		{
			// register the mediators that control scrolling and animations
			this.facade.registerMediator(new src.view.ScrollMediator());
			this.facade.registerMediator(new src.view.AnimationMediator());
		}
	}
)