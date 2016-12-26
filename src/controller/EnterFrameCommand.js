
puremvc.define
(
	// CLASS DEFINITION
	{
		name: "src.controller.EnterFrameCommand",
		parent: puremvc.SimpleCommand
	},
	
	// INSTANCE MEMBERS
	{
		
		// convenience functions because Math functions are slow in js
		min: function(a, b)
		{
			return (a < b) ? a : b;
		},
		
		max: function(a, b)
		{
			return (a > b) ? a : b;
		},
		
		abs: function(a)
		{
			return (a < 0) ? -a : a;
		},
		
		execute: function (notification)
		{
			// in anchored to a spot on the page ease the scrollbar towards that position
			if (anchor != -1)
			{
				// moz supports doument.body.scrollTop/scrollLeft but not scrollHeight/scrollWidth. huh?
				var curScroll = document.body.scrollTop;
				var diff = this.abs(anchor - curScroll) / 5;		// this is the fake easing when you click the header
				diff += 10;
				if (curScroll < anchor)
				{
					window.scrollTo(document.body.scrollLeft, curScroll + this.min(diff, anchor - curScroll));
				}
				else if (curScroll > anchor)
				{
					window.scrollTo(document.body.scrollLeft, curScroll - this.min(diff, curScroll - anchor));
				}
			}
		}
	}
);