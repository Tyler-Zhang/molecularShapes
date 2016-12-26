
puremvc.define
(
	// CLASS INFO
	{
		name: "src.controller.StartupCommand",
		parent: puremvc.MacroCommand
	},
	
	// INSTANCE MEMBERS
	{
		initializeMacroCommand: function ()
		{
			// initialize mvc modules (or just vc for us. No persistent data in the mvc core of this site)
			this.addSubCommand(src.controller.InitializeViewCommand);
			this.addSubCommand(src.controller.InitializeControllerCommand);
		}
	}
);