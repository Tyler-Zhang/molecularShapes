	// the anchor point specifies where the page should be auto-scrolling to, used for the nav bar at the top of each section

	anchor = -1;
	carousel = null;
	
	var preloadedImageMap = new Array();
	var preload;
	var preloadComplete = false;
	var DOMContentLoaded = false;
	var manifest;
	var selectedIndex = 0;
	var sideBarAnimation;
	var introTimeline = new TimelineMax();
	var block1Timeline = new TimelineMax();
	var block2Timeline = new TimelineMax();
	var block3Timeline = new TimelineMax();
	var block4Timeline = new TimelineMax();
	var block5Timeline = new TimelineMax();
	var moleculeTimeline = new TimelineMax();
    var preloadedImages = [
			"SiteSlices/Molecule.png"		
		];
	
	function reload()
	{
        // If there is an open preload queue, close it.
        if (typeof preload !== 'undefined' && preload != null)
        { 
            preload.close(); 
        }
        	            
    	manifest = preloadedImages;			// Push each item into our manifest
        preload = new createjs.LoadQueue();	// Create a preloader. There is no manfest added to it up-front, we will add items on-demand.
        preload.onFileLoad = handleFileLoad;
        preload.onProgress = handleOverallProgress;
        preload.onFileProgress = handleFileProgress;
        preload.onComplete = preloadingCompleteCB;
        preload.onError = handleFileError;
        preload.setMaxConnections(5);
	}
	function loadAll()
	{
    	while (manifest.length > 0) loadAnother();
    }
    
     function loadAnother()
     {            
    	var item = manifest.shift();	// Get the next manifest item, and load it
    	preload.loadFile(item);
    }
    
    // File complete handler
	function handleFileLoad(event)
	{
		//console.log('loaded ' + String(event.src));
    	// Get a reference to the loaded image (<img/>)
    	var img = event.result;
    
    	// getting the images and their index for later sorting
    	preloadedImageMap[preloadedImageMap.length] = {'src':String(String(event.src).toLowerCase()).replace('assets/image','').replace('.jpg','').replace('.png',''),'data':img};
	}

	// File progress handler
	function handleFileProgress(event) {}

	// Overall progress handler
	function handleOverallProgress(event)
	{
	}

	// An error happened on a file
	function handleFileError(event)
	{
    }
    
	
	//// entry point to website (main)
	document.addEventListener('DOMContentLoaded', function ()
	{
		
		
		introTimeline.add(TweenMax.from(title, 2, { top: "-380px", ease: Power4.easeInOut}), "1");		
		introTimeline.add(TweenMax.from(scrollDown, 2, { top: "450px",opacity:"0", ease: Power4.easeInOut}), "2");
		introTimeline.add(TweenMax.to(wholeSite, 2, { height: "1300px", ease: Power4.easeInOut}), "4");
	
		block1Timeline.add(TweenMax.from(block1Text1, 4, { left: "-950px", ease: Power4.easeInOut}), "0");
		block1Timeline.add(TweenMax.from(block1Text2, 5, { left: "-1100px", ease: Power4.easeInOut}), "3");
		block1Timeline.add(TweenMax.from(block1Text3, 5, { right: "-500px", ease: Power4.easeInOut}), "11");
		block1Timeline.add(TweenMax.from(block1Text4, 5, { right: "-500px", ease: Power4.easeInOut}), "12");
		block1Timeline.add(TweenMax.from(image1, 5, { right: "-500px", ease: Power4.easeInOut}), "12");
		block1Timeline.add(TweenMax.from(block1Text5, 5, { right: "-500px", ease: Power4.easeInOut}), "14");
		block1Timeline.add(TweenMax.from(image2, 5, { right: "-500px", ease: Power4.easeInOut}), "14");
		block1Timeline.add(TweenMax.from(block1Text6, 3, { right: "-600px", ease: Power4.easeInOut}), "16");
		block1Timeline.add(TweenMax.from(block1Text7, 3, { right: "-600px", ease: Power4.easeInOut}), "19");
		block1Timeline.add(TweenMax.to(image1, 3, { left: "+=122", ease: Power4.easeInOut}), "19");
		block1Timeline.add(TweenMax.to(image2, 3, { right: "+=122", ease: Power4.easeInOut}), "19");
		block1Timeline.add(TweenMax.from(block1Text8, 2, { top: "+=125", opacity:"0", ease: Power4.easeInOut}), "23");
		block1Timeline.add(TweenMax.to(wholeSite, 2, { height: "2300px", ease: Power4.easeInOut}), "23");
		block1Timeline.pause();
		
		block2Timeline.add(TweenMax.from(block2Text1, 4, { left: "-1000px", ease: Power4.easeInOut}), "0");
		block2Timeline.add(TweenMax.from(block2Text2, 5, { left: "-1000px", ease: Power4.easeInOut}), "3");
		block2Timeline.add(TweenMax.from(block2Text3, 5, { right: "-500px", ease: Power4.easeInOut}), "11");
		block2Timeline.add(TweenMax.from(block2Text4, 5, { right: "-500px", ease: Power4.easeInOut}), "12");
		block2Timeline.add(TweenMax.from(image3, 5, { right: "-700px", ease: Power4.easeInOut}), "12");
		block2Timeline.add(TweenMax.from(block2Text5, 5, { right: "-500px", ease: Power4.easeInOut}), "14");
		block2Timeline.add(TweenMax.from(electron1, 3, { right: "-700px", ease: Power4.easeInOut}), "14");
		block2Timeline.add(TweenMax.from(electron2, 3.5, { right: "-700px", ease: Power4.easeInOut}), "14");
		block2Timeline.add(TweenMax.from(electron3, 4, { right: "-700px", ease: Power4.easeInOut}), "14");
		block2Timeline.add(TweenMax.from(electron4, 4.5, { right: "-700px", ease: Power4.easeInOut}), "14");
		block2Timeline.add(TweenMax.from(block2Text6, 5, { right: "-600px", ease: Power4.easeInOut}), "16");
		block2Timeline.add(TweenMax.from(block2Text7, 5, { right: "-600px", ease: Power4.easeInOut}), "18");
		block2Timeline.add(TweenMax.to(electron1, 3, { css:{rotation:10}, ease: Power4.easeInOut}), "18");
		block2Timeline.add(TweenMax.to(electron2, 3, { css:{rotation:100}, ease: Power4.easeInOut}), "18");
		block2Timeline.add(TweenMax.to(electron3, 3, { css:{rotation:190}, ease: Power4.easeInOut}), "18");
		block2Timeline.add(TweenMax.to(electron4, 3, { css:{rotation:280}, ease: Power4.easeInOut}), "18");
		block2Timeline.add(TweenMax.from(block2Text8, 2, { top: "+=125", opacity:"0", ease: Power4.easeInOut}), "20");
		block2Timeline.add(TweenMax.to(wholeSite, 2, { height: "3300px", ease: Power4.easeInOut}), "20");
		block2Timeline.pause();
		
		block3Timeline.add(TweenMax.from(block3Text1, 2, { left: "-100px",opacity:"0", ease: Power4.easeInOut}), "0");
		block3Timeline.add(TweenMax.from(block3Text2, 2, { left: "-100px",opacity:"0", ease: Power4.easeInOut}), "2");
		block3Timeline.add(TweenMax.from(demonstrationBond, 2, { left: "-100px", opacity:"0",ease: Power4.easeInOut}), "2.2");
		block3Timeline.add(TweenMax.from(bond, 2, { left: "-100px",opacity:"0", ease: Power4.easeInOut}), "2.4");
		block3Timeline.add(TweenMax.from(block3Text3, 2, { left: "-100px",opacity:"0", ease: Power4.easeInOut}), "5");
		block3Timeline.add(TweenMax.from(lonePair, 2, { left: "-100px",opacity:"0", ease: Power4.easeInOut}), "5.4");
		block3Timeline.add(TweenMax.from(block3Text4, 2, { left: "-100px",opacity:"0", ease: Power4.easeInOut}), "8.2");
		block3Timeline.add(TweenMax.from(block3Text5, 2, { left: "-100px",opacity:"0", ease: Power4.easeInOut}), "8.4");
		block3Timeline.add(TweenMax.from(block3Text6, 2, { left: "-100px",opacity:"0", ease: Power4.easeInOut}), "8.6");
		block3Timeline.add(TweenMax.from(block3Text7, 2, { left: "+=100px",opacity:"0", ease: Power4.easeInOut}), "10");
		block3Timeline.add(TweenMax.from(block3Text8, 2, { left: "+=100px",opacity:"0", ease: Power4.easeInOut}), "10.5");
		block3Timeline.add(TweenMax.from(block3Text9, 2, { left: "+=100px",opacity:"0", ease: Power4.easeInOut}), "11");
		block3Timeline.add(TweenMax.from(block3Text10, 2, { left: "+=100px",opacity:"0", ease: Power4.easeInOut}), "11.5");
		block3Timeline.add(TweenMax.from(block3Text11, 2, { left: "+=100px",opacity:"0", ease: Power4.easeInOut}), "12");
		block3Timeline.add(TweenMax.from(block3Text12, 2, { top: "+=125", opacity:"0", ease: Power4.easeInOut}), "13");
		block3Timeline.add(TweenMax.to(wholeSite, 2, { height: "4300px", ease: Power4.easeInOut}), "13");
		block3Timeline.pause();
		
		
		block4Timeline.add(TweenMax.from(block4Text1, 3, { top: "+=50px",opacity:"0" ,ease: Power4.easeInOut}), 0);
		block4Timeline.add(TweenMax.from(legend, 1, { left: "-200px",opacity:"0",ease: Power4.easeInOut}), 2.5);
		block4Timeline.add(function(){
		moleculeTimeline.play()}, 2);
		block4Timeline.add(TweenMax.from(block4Text2, 2, { top: "+=125", opacity:"0", ease: Power4.easeInOut}), 19)
		block4Timeline.add(TweenMax.to(wholeSite, 2, { height: "5300px", ease: Power4.easeInOut}), 19);
		block4Timeline.pause();
		
		block5Timeline.add(TweenMax.from(block5Text1, 2, { left: "-=100px",opacity:"0", ease: Power4.easeInOut}), "0");
		block5Timeline.add(TweenMax.from(block5Text2, 2, { left: "-=100px",opacity:"0", ease: Power4.easeInOut}), "2");
		block5Timeline.add(TweenMax.from(block5Text9, 3, { left: "+=100px",opacity:"0", ease: Power4.easeInOut}), "3");
		block5Timeline.add(TweenMax.from(block5Text3, 2, { left: "-=100px",opacity:"0", ease: Power4.easeInOut}), "5");
		
		block5Timeline.add(TweenMax.from(Carbon, 3, { top: "-=50px",opacity:"0", ease: Power4.easeInOut}), "7");
		block5Timeline.add(TweenMax.from(Hydrogen1, 2.5, { top: "-=50px",opacity:"0", ease: Power4.easeInOut}), "7");
		block5Timeline.add(TweenMax.from(Hydrogen2, 2, { top: "-=50px",opacity:"0", ease: Power4.easeInOut}), "7");
		block5Timeline.add(TweenMax.from(Hydrogen3, 1.5, { top: "-=50px",opacity:"0", ease: Power4.easeInOut}), "7");
		block5Timeline.add(TweenMax.from(Hydrogen4, 1, { top: "-=50px",opacity:"0", ease: Power4.easeInOut}), "7");
		
		block5Timeline.add(TweenMax.from(block5Text4, 2, { left: "-=100px",opacity:"0", ease: Power4.easeInOut}), "9");
		block5Timeline.add(TweenMax.to(Carbon, 2, { left: "+=300px",top:"+=100", ease: Power4.easeInOut}), "11");
		block5Timeline.add(TweenMax.from(block5Text5, 2, { left: "-=100px",opacity:"0", ease: Power4.easeInOut}), "13");
		block5Timeline.add(TweenMax.to(Hydrogen1, 2.5, { top: "+=100px",left:"+=255",ease: Power4.easeInOut}), "15");
		block5Timeline.add(TweenMax.to(Hydrogen2, 2.3, { top: "+=160px",left:"+=100",ease: Power4.easeInOut}), "15");
		block5Timeline.add(TweenMax.to(Hydrogen3, 2.1, { top: "+=37px",left:"+=0",ease: Power4.easeInOut}), "15");
		block5Timeline.add(TweenMax.to(Hydrogen4, 1.9, { top: "+=100px",left:"-=155",ease: Power4.easeInOut}), "15");
		
		block5Timeline.add(TweenMax.from(block5Text6, 2, { left: "+=100px",opacity:"0", ease: Power4.easeInOut}), "16");
		block5Timeline.add(TweenMax.from(block5Text10, 2, { top: "+=100px",opacity:"0", ease: Power4.easeInOut}), "18");
		block5Timeline.add(TweenMax.from(block5Text7, 2, { left: "+=100px",opacity:"0", ease: Power4.easeInOut}), "20");
		block5Timeline.add(TweenMax.from(VESPRDrawing, 2, { top: "+=100px",opacity:"0", ease: Power4.easeInOut}), "22");
		block5Timeline.add(TweenMax.from(block5Text8, 2, { left: "+=100px",opacity:"0", ease: Power4.easeInOut}), "24");
		block5Timeline.add(TweenMax.from(block5Text11, 2, { top: "+=100px",opacity:"0", ease: Power4.easeInOut}), "26");
		block5Timeline.pause();
		
		
		
		
		
		moleculeTimeline.add(TweenMax.to(atom3,1,{opacity:"1",left:"10px",ease:Power4.easeInOut}),0);
		moleculeTimeline.add(TweenMax.to(atom6,2,{opacity:"1",left:"55px",ease:Power4.easeInOut}),0.2);
		moleculeTimeline.add(TweenMax.from(example1,1.5,{opacity:"0",top:"+=100px",ease:Power4.easeInOut}),0.4);
		moleculeTimeline.add(TweenMax.to(movingDemo,1.5,{opacity:"1",left:"+=250px",ease:Power4.easeInOut}),3.5);
		moleculeTimeline.add(TweenMax.to(atom6,1,{opacity:"1",left:"50px",ease:Power4.easeInOut}),4);
		moleculeTimeline.add(TweenMax.from(example2,1.5,{opacity:"0",top:"+=100px",ease:Power4.easeInOut}),4.2);
		moleculeTimeline.add(TweenMax.to(movingDemo,1.5,{opacity:"1",left:"+=250px",ease:Power4.easeInOut}),5.5);
		moleculeTimeline.add(TweenMax.to(atom4,1,{opacity:"1",left:"60px",ease:Power4.easeInOut}),6);
		moleculeTimeline.add(TweenMax.to(atom6,1,{opacity:"1",left:"130px",ease:Power4.easeInOut}),6.2);
		moleculeTimeline.add(TweenMax.from(example3,1.5,{opacity:"0",top:"+=100px",ease:Power4.easeInOut}),6.4);
		moleculeTimeline.add(TweenMax.to(movingDemo,1.5,{opacity:"1",left:"+=250px",ease:Power4.easeInOut}),7.5);
		moleculeTimeline.add(TweenMax.to(atom5,1,{opacity:"1", top:"+=10",left:"+=70px",ease:Power4.easeInOut}),8);
		moleculeTimeline.add(TweenMax.to(atom2,1,{opacity:"1", top:"-=50px",left:"+=70",ease:Power4.easeInOut}),8.2);
		moleculeTimeline.add(TweenMax.to(atom3,1,{top:"+=30px",ease:Power4.easeInOut}),8.2);
		moleculeTimeline.add(TweenMax.to(atom6,1,{top:"+=30px",ease:Power4.easeInOut}),8.2);
		moleculeTimeline.add(TweenMax.from(example4,1.5,{opacity:"0",top:"+=100px",ease:Power4.easeInOut}),8.4);
		moleculeTimeline.add(TweenMax.to(movingDemo,1.5,{opacity:"1",left:"+=250px",ease:Power4.easeInOut}),10.5);
		moleculeTimeline.add(TweenMax.to(atom5,1,{opacity:"0",ease:Power4.easeInOut}),11);
		moleculeTimeline.add(TweenMax.to(atom2,1,{opacity:"0",ease:Power4.easeInOut}),11.2);
		moleculeTimeline.add(TweenMax.to(atom1,1,{opacity:"1", top:"-=50px",left:"+=70",ease:Power4.easeInOut}),11.4);
		moleculeTimeline.add(TweenMax.from(example5,1.5,{opacity:"0",top:"+=100px",ease:Power4.easeInOut}),11.6);
		moleculeTimeline.add(TweenMax.to(movingDemo,1.5,{opacity:"1",left:"+=250px",ease:Power4.easeInOut}),13.7);
		moleculeTimeline.add(TweenMax.to(atom7,1,{opacity:"1", top:"+=10",left:"+=70",ease:Power4.easeInOut}),14.2);
		moleculeTimeline.add(TweenMax.from(example6,1.5,{opacity:"0",top:"+=100px",ease:Power4.easeInOut}),14.4);
		moleculeTimeline.add(TweenMax.to(movingDemo,1.5,{opacity:"1",left:"+=250px",ease:Power4.easeInOut}),15.5);
		moleculeTimeline.add(TweenMax.to(atom7,1,{opacity:"0",ease:Power4.easeInOut}),16);
		moleculeTimeline.add(TweenMax.to(atom1,1,{top:"+=20",left:"-=20",ease:Power4.easeInOut}),16);
		moleculeTimeline.add(TweenMax.to(atom5,1,{opacity:"1",ease:Power4.easeInOut}),16.2);
		moleculeTimeline.add(TweenMax.from(example7,1.5,{opacity:"0",top:"+=100px",ease:Power4.easeInOut}),16.4);
		moleculeTimeline.add(TweenMax.from(replay,1.5,{opacity:"0",top:"+=100px",ease:Power4.easeInOut}),17);
		moleculeTimeline.pause();
		
		reload();
		loadAll();

		
	});
	
	// end here and then begin loading afterwards

	function preloadingCompleteCB()
	{
		introTimeline.play();
			src.ApplicationFacade.getInstance(src.ApplicationFacade.NAME).startup();
			setInterval(function() { src.ApplicationFacade.getInstance(src.ApplicationFacade.NAME).sendNotification(s_Notifications.ENTER_FRAME); }, 33);
	}
	//Repurpose this for beta testing
	


