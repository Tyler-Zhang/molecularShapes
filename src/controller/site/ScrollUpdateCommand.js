
puremvc.define
(
	// CLASS INFO
	{
		name: "src.controller.site.ScrollUpdateCommand",
		parent: puremvc.MacroCommand
	},
	
	// INSTANCE MEMBERS
	{
		initializeMacroCommand: function()
		{
			this.addSubCommand(src.controller.site.ScrollUpdateSimpleCommand);
		}
	}
);