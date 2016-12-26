
puremvc.define
(
	// CLASS INFO
	{
		name: "src.ApplicationFacade",
		parent: puremvc.Facade
	}, 
	
	// INSTANCE MEMBERS
	{
		startup: function ()
		{
			if (!this.initialized)
			{
				this.initialized= true;
				this.registerCommand( s_Notifications.FC_STARTUP, src.controller.StartupCommand );
				this.sendNotification( s_Notifications.FC_STARTUP );
			}
		}
	},

	// STATIC MEMBERS
	{
	
		getInstance: function (multitonKey)
		{
			var instanceMap = puremvc.Facade.instanceMap;
			instance = instanceMap[multitonKey]; // read from the instance map
			
			if (instance)
			{
				return instance;
			}
			return instanceMap[multitonKey] = new src.ApplicationFacade(multitonKey);
		},
		
		
		NAME: 'ScrollingSite'
	}
);