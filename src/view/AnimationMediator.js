
puremvc.define
(
	// CLASS INFO
	{
		name: "src.view.AnimationMediator",
		parent: puremvc.Mediator
	},
	
	// INSTANCE MEMBERS
	{
		
		timeline: null,
		initialized: false,
		tltime: 0,
		currentTween: null,
		
		
		// add the shine effect to the ninja stars
		
		
		// convenience function for rotating elements
		rotate: function(element, rotation)
		{
			// each web kit has it's own implementation of transform
			element.style.MozTransform    = 'rotate(' + rotation + 'deg)';
			element.style.WebkitTransform = 'rotate(' + rotation + 'deg)';
			element.style.OTransform      = 'rotate(' + rotation + 'deg)';
			element.style.MsTransform     = 'rotate(' + rotation + 'deg)';
			element.style.transform       = 'rotate(' + rotation + 'deg)';
		},
		
		onRegister: function()
		{
			// construct all of the scroll animations for the site on a timeline as long as the site is tall
			this.timeline = new TimelineMax();
			this.timeline.add(TweenMax.from(whatAre, 300, {top: "-150px"}),0);
			this.timeline.add(TweenMax.from(shapes, 300, {top: "-150px"}),1000);
			this.timeline.add(TweenMax.from(Lone, 300, {top: "-150px"}),2000);
			this.timeline.add(TweenMax.from(possible, 300, {top: "-150px"}),3000);
			this.timeline.add(TweenMax.from(different, 300, {top: "-150px"}),4000);
			
			
			
			//this.timeline.add(TweenMax.to(london, 1500, {top: "-260px"}), "+=-(BOTTOM-CHARACTERS)");
			// start off paused so we don't just play everything when the page loads!
			this.timeline.pause();
		},
		
		listNotificationInterests: function()
		{
			return [
					s_Notifications.SCROLL_UPDATE
			];
		},
		
		// body of notification is the pixel value of where we are at
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
	
	// CLASS MEMBERS
	{
		NAME: "AnimationMediator"
	}
);