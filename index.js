function handleSceneTimelines() {
	var scene1__title = document.getElementById('scene1__title');
	scene1__title = new SplitText(scene1__title, {type:"lines"});
	
	var tl_one = new TimelineLite({pause: false});
	tl_one.staggerFrom(scene1__title.lines, 0.3, {opacity:0, y: 50, rotationX: 40, delay: 0.3}, 0.1)

	var scene2__title = document.getElementById('scene2__title');
	var scene2__subtitle1 = document.getElementById('scene2__subtitle1');
	var scene2__subtitle2 = document.getElementById('scene2__subtitle2');
	var scene2__waveBL = document.getElementById('scene2__wave--bigL');
	var scene2__waveML = document.getElementById('scene2__wave--medL');
	var scene2__waveSL = document.getElementById('scene2__wave--smL');
	var scene2__waveBR = document.getElementById('scene2__wave--bigR');
	var scene2__waveMR = document.getElementById('scene2__wave--medR');
	var scene2__waveSR = document.getElementById('scene2__wave--smR');
	var scene2__gradient = document.getElementById('scene2__gradient');

	scene2__title = new SplitText(scene2__title, {type:"lines"});
	scene2__subtitle1 = new SplitText(scene2__subtitle1, {types: "lines"});
	scene2__subtitle2 = new SplitText(scene2__subtitle2, {types: "lines"});

	var tl_two = new TimelineLite({pause: false});
	tl_two.staggerFrom(scene2__title.lines, 0.3, {opacity:0, y: 10, delay: 0.3}, 0.1)
	.staggerFrom(scene2__subtitle1.lines, 0.3, {opacity: 0,  y: 10, delay: 0.3}, 0.1)
	.staggerFrom(scene2__subtitle2.lines, 0.3, {opacity: 0, y: 10}, 0.1)
	.staggerFrom([scene2__waveSL, scene2__waveML, scene2__waveBL], 1, {opacity: 0, repeat: -1, repeatDelay: 1, yoyo:true}, 0.3, "waves")
	.staggerFrom([scene2__waveSR, scene2__waveMR, scene2__waveBR], 1, {opacity: 0, repeat: -1, repeatDelay: 1, yoyo:true}, 0.3, "waves")


	var tl_twothree = new TimelineLite({pause: false});
	tl_twothree.to(scene2__gradient, 0.5, {opacity:0, ease:Power2.easeOut})

	var scene3__slider = document.getElementById('scene3__slider');
	var scene3__phone = document.getElementById('scene3__phone');
	var scene3__num = document.getElementById('scene3__num');
	var scene3__title = document.getElementById('scene3__title');
	var	scene3__subtitle = document.getElementById('scene3__subtitle');

	scene3__title = new SplitText(scene3__title, {types: "lines"});
	scene3__subtitle = new SplitText(scene3__subtitle, {types: "lines"});

	var tl_three = new TimelineLite({pause: false});
	tl_three.from(scene3__slider, 0.5, {x: -100, opacity:0})
	.from(scene3__phone, 0.5, {x: 20, opacity: 0, delay: 0.2})
	.from(scene3__num, 0.4, {opacity: 0})
	.staggerFrom(scene3__title.lines, 0.3, {opacity:0, y:10, rotationX:40}, 0.1)
	.staggerFrom(scene3__subtitle.lines, 0.3, {opacity: 0, y: 10, rotationX: 40}, 0.1)
	

	var scene4__title = document.getElementById('scene4__title');
	scene4__title = new SplitText(scene4__title, {types: "lines"});

	var tl_four = new TimelineLite({pause: false});
	tl_four.staggerFrom(scene4__title.lines, 0.5, {opacity: 0, y: 20}, 0.1);

	var scene5__slider = document.getElementById('scene5__slider');
	var scene5__phone = document.getElementById('scene5__phone');
	var scene5__title = document.getElementById('scene5__title');
	var scene5__subtitle1 = document.getElementById('scene5__subtitle1');
	var scene5__subtitle2 = document.getElementById('scene5__subtitle2');

	scene5__title = new SplitText(scene5__title, {types: "lines"});
	scene5__subtitle1 = new SplitText(scene5__subtitle1, {types: "lines"});
	scene5__subtitle2 = new SplitText(scene5__subtitle2, {types: "lines"});

	var tl_five = new TimelineLite({pause: false});
	tl_five.from(scene5__slider, 0.5, {x: -100, opacity: 0})
	.from(scene5__phone, 0.5, {x: 20, opacity: 0, delay: 0.2})
	.from(scene5__num, 0.4, {opacity: 0})
	.staggerFrom(scene5__title.lines, 0.3, {opacity:0, y:10, rotationX:40}, 0.1)
	.staggerFrom(scene5__subtitle1.lines, 0.3, {opacity: 0, y: 10, rotationX: 40}, 0.1)
	.staggerFrom(scene5__subtitle2.lines, 0.3, {opacity: 0, y: 10, rotationX: 40}, 0.1)

	var tl_fivesix = new TimelineLite({pause: false});
	tl_fivesix.to(scene5__slider, 0.5, {opacity:0, ease:Power2.easeOut, x: -100})

	var scene6__quote = document.getElementById('scene6__quote');
	var scene6__author = document.getElementById('scene6__author');
	var scene6__gradient = document.getElementById('scene6__gradient');

	scene6__quote = new SplitText(scene6__quote, {types: "lines"});

	var tl_six = new TimelineLite({pause: false});
	tl_six.from(scene6__gradient, 0.5, {opacity: 0})
	.staggerFrom(scene6__quote.lines, 0.4, {opacity:0, y: 10, rotationX: 40}, 0.2)
	.from(scene6__author, 0.3, {opacity: 0, delay: 0.5});

	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {triggerHook: 'onLeave'}
	});
	
	var trigger_one = document.getElementById('trigger_one');
	var trigger_two = document.getElementById('trigger_two');
	var trigger_three = document.getElementById('trigger_three');
	var trigger_four = document.getElementById('trigger_four');
	var trigger_five = document.getElementById('trigger_five');
	var trigger_six = document.getElementById('trigger_six');

	var scene_one = new ScrollMagic.Scene({
		triggerElement: trigger_one,
		offset: -100
	})
	.setTween(tl_one)
	.addTo(controller);

	var scene_two = new ScrollMagic.Scene({
		triggerElement: trigger_two,
		offset: -100
	})
	.setTween(tl_two)
	.addTo(controller);

	var scene_twothree = new ScrollMagic.Scene({
		triggerElement: trigger_two,
		offset: 50
	})
	.setTween(tl_twothree)
	.addTo(controller);

	var scene_three = new ScrollMagic.Scene({
		triggerElement: trigger_three,
		offset: -100
	})
	.setTween(tl_three)
	.addTo(controller);

	var scene_four = new ScrollMagic.Scene({
		triggerElement: trigger_four,
		offset: -100
	})
	.setTween(tl_four)
	.addTo(controller);

	var scene_five = new ScrollMagic.Scene({
		triggerElement: trigger_five,
		offset: -100
	})
	.setTween(tl_five)
	.addTo(controller);

	var scene_fivesix = new ScrollMagic.Scene({
		triggerElement: trigger_six,
		offset: -200
	})
	.setTween(tl_fivesix)
	.addTo(controller);

	var scene_six = new ScrollMagic.Scene({
		triggerElement: trigger_six,
		offset: -100
	})
	.setTween(tl_six)
	.addTo(controller);
};

function handleScrollSlides() {
	var controller = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
		.to('#slideContainer', 1, {y: "-16.66%", ease: Power0.easeIn})
		.to('#slideContainer', 1, {z: 0, delay: 0.8})
		.to('#slideContainer', 1, {y: "-33.33%", ease: Power0.easeIn})
		.to('#slideContainer', 1, {z: 0, delay: 0.8})
		.to('#slideContainer', 1, {y: "-50%", ease: Power0.easeIn})
		.to('#slideContainer', 1, {z: 0, delay: 0.8})
		.to('#slideContainer', 1, {y: "-66.66%", ease: Power0.easeIn})
		.to('#slideContainer', 1, {z: 0, delay: 0.8})
		.to('#slideContainer', 1, {y: "-83.33%", ease: Power0.easeIn})

	new ScrollMagic.Scene({
		triggerElement: "#pinContainer",
		triggerHook: "onLeave",
		duration: "500%"
	})
	.setPin("#pinContainer")
	.setTween(wipeAnimation)
	.addTo(controller);

};

function handleVideo() {
	$('.video').get(0).play();
};

$(document).ready(function() {
	if (window.innerWidth > 480) {
		handleScrollSlides();
		handleVideo();
		handleSceneTimelines();
	}
});
