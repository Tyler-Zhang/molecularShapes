
puremvc.define
(
	{
		name: "src.ApplicationFacade",
		parent: puremvc.Facade
	}, 
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


puremvc.define
(
	{
		name: "src.controller.EnterFrameCommand",
		parent: puremvc.SimpleCommand
	},
	{
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
			if (anchor != -1)
			{
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


puremvc.define
(
	{
		name: "src.controller.InitializeControllerCommand",
		parent: puremvc.SimpleCommand
	},
	{
		execute: function(notification)
		{
			this.facade.registerCommand(s_Notifications.ENTER_FRAME, src.controller.EnterFrameCommand);
		}
	}
);


puremvc.define
(
	{
		name: "src.controller.InitializeViewCommand",
		parent: puremvc.SimpleCommand
	},
	{
		execute: function(notification)
		{
			this.facade.registerMediator(new src.view.ScrollMediator());
			this.facade.registerMediator(new src.view.AnimationMediator());
		}
	}
)


puremvc.define
(
	{
		name: "src.controller.site.ScrollUpdateCommand",
		parent: puremvc.MacroCommand
	},
	{
		initializeMacroCommand: function()
		{
			this.addSubCommand(src.controller.site.ScrollUpdateSimpleCommand);
		}
	}
);


puremvc.define
(
	{
		name: "src.controller.site.ScrollUpdateSimpleCommand",
		parent: puremvc.SimpleCommand
	},
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


puremvc.define
(
	{
		name: "src.controller.StartupCommand",
		parent: puremvc.MacroCommand
	},
	{
		initializeMacroCommand: function ()
		{
			this.addSubCommand(src.controller.InitializeViewCommand);
			this.addSubCommand(src.controller.InitializeControllerCommand);
		}
	}
);


puremvc.define
(
	{
		name: "src.view.AnimationMediator",
		parent: puremvc.Mediator
	},
	{
		timeline: null,
		initialized: false,
		tltime: 0,
		currentTween: null,
		rotate: function(element, rotation)
		{
			element.style.MozTransform    = 'rotate(' + rotation + 'deg)';
			element.style.WebkitTransform = 'rotate(' + rotation + 'deg)';
			element.style.OTransform      = 'rotate(' + rotation + 'deg)';
			element.style.MsTransform     = 'rotate(' + rotation + 'deg)';
			element.style.transform       = 'rotate(' + rotation + 'deg)';
		},
		onRegister: function()
		{
			this.timeline = new TimelineMax();
			this.timeline.add(TweenMax.from(whatAre, 300, {top: "-150px"}),0);
			this.timeline.add(TweenMax.from(shapes, 300, {top: "-150px"}),1000);
			this.timeline.add(TweenMax.from(Lone, 300, {top: "-150px"}),2000);
			this.timeline.add(TweenMax.from(possible, 300, {top: "-150px"}),3000);
			this.timeline.add(TweenMax.from(different, 300, {top: "-150px"}),4000);
			this.timeline.pause();
		},
		listNotificationInterests: function()
		{
			return [
					s_Notifications.SCROLL_UPDATE
			];
		},
		handleNotification: function(notification)
		{
			var place = notification.getBody();
			if(notification.getBody()>= 300){
				block1Timeline.play();
			}
			if(notification.getBody()>= 1300){
				block2Timeline.play();
			}
			if(notification.getBody()>= 2300){
				block3Timeline.play();
			}
			if(notification.getBody()>= 3300){
				block4Timeline.play();
			}
			if(notification.getBody()>= 4300){
				block5Timeline.play();
			}
				console.log(notification.getBody());
				if(place>21)
					place-=21;
				this.timeline.seek(place);
		}		
	},
	{
		NAME: "AnimationMediator"
	}
);


puremvc.define
(
	{
		name: "src.view.ScrollMediator",
		parent: puremvc.Mediator
	},
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
	{
		NAME: "ScrollMediator"
	}
);


puremvc.define
(
	{
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
	{
		mediator: null,
		timeoutID: -1
	}
);

