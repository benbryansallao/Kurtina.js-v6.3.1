/** 
 *  Curtain.js v1.0.0 
 *  Curtain-Style-Overlay-Transition 
 *
 *  Author: Ben Bryan Sallao 
 *  Copyright 2015 
 **/

$('document').ready(function () { /* DOM Ready */
var $TriggerAnimation = $('h2'),
	CurtainTimerDefault = 100, /* Time where the animation initiate at 100 milli-seconds or 10% of 1 second */
	$request_Reanimation = $('button');
var $LoopedCurtainlayers$Ready = function() {
	playAnimationCurtainLayer2() || playAnimationCurtainLayer3() || playAnimationCurtainLayer4() || playAnimationCurtainLayer5()
	|| playAnimationCurtainLayer6() || playAnimationCurtainLayer7() || playAnimationCurtainLayer8() || playAnimationCurtainLayer9() ||
	playAnimationCurtainLayer10(); };
$CurtainReady = (function() { /* On page open (index.html) this function will be called automatically. */
	Outloading();
	_CurtainreAnimation();
});
function CurtainPlayAnimation() {

	setTimeout(CurtainPlayAnimation, 100);
	CurtainTimerDefault ++;
if(CurtainTimerDefault>100) {
	setTimeout(PlayCurtainLayer1, 100);
	$LoopedCurtainlayers$Ready();
	CurtainTimerDefault = 1000; /* The time of the whole animation takes about 1000 milli-seconds or 1 second. */
}
};
$TriggerAnimation.click(function() {
	Inloading(), CurtainPlayAnimation();
});

var _curtainInfusion = function() {
}
_sixPacksMenu = (function () {
	$(".six-packs").append("<div class='six-packs-menu'></div>");
});

var $reloadCurtain = function() { window.location.href='index.html'}; _CurtainreAnimation = (function() { $("h2 && .overlay-container && .curtain-layer-one && .curtain-layer-two && .curtain-layer-three && .curtain-layer-four && .curtain-layer-five && .curtain-layer-six && .curtain-layer-seven && .curtain-layer-eight && .curtain-layer-nine && .curtain-layer-ten").fadeIn(); }); PlayCurtainLayer1 = (function () { $(".curtain-layer-one, h2, .six-packs").fadeOut(); }); PlayCurtainLayer2 = (function () { $(".curtain-layer-two").fadeOut(); }); PlayCurtainLayer3 = (function () { $(".curtain-layer-three").fadeOut(); }); PlayCurtainLayer4 = (function () { $(".curtain-layer-four").fadeOut(); }); PlayCurtainLayer5 = (function () { $(".curtain-layer-five").fadeOut(); }); PlayCurtainLayer6 = (function () { $(".curtain-layer-six").fadeOut(); }); PlayCurtainLayer7 = (function () { $(".curtain-layer-seven").fadeOut(); }); PlayCurtainLayer8 = (function () { $(".curtain-layer-eight").fadeOut(); }); PlayCurtainLayer9 = (function () { $(".curtain-layer-nine").fadeOut(); }); PlayCurtainLayer10 = (function () { $(".curtain-layer-ten, .overlay-container").fadeOut(); }); function playAnimationCurtainLayer2() { if(CurtainTimerDefault>200) { setTimeout(PlayCurtainLayer2, 200); }; }; function playAnimationCurtainLayer3() { if(CurtainTimerDefault>300) { setTimeout(PlayCurtainLayer3, 300); }; }; function playAnimationCurtainLayer4() { if(CurtainTimerDefault>400) { setTimeout(PlayCurtainLayer4, 400); }; }; function playAnimationCurtainLayer5() { if(CurtainTimerDefault>500) { setTimeout(PlayCurtainLayer5, 500); }; }; function playAnimationCurtainLayer6() { if(CurtainTimerDefault>600) { setTimeout(PlayCurtainLayer6, 600); }; }; function playAnimationCurtainLayer7() { if(CurtainTimerDefault>700) { setTimeout(PlayCurtainLayer7, 700); }; }; function playAnimationCurtainLayer8() { if(CurtainTimerDefault>800) { setTimeout(PlayCurtainLayer8, 800); }; }; function playAnimationCurtainLayer9() { if(CurtainTimerDefault>900) { setTimeout(PlayCurtainLayer9, 900); }; }; function playAnimationCurtainLayer10() { if(CurtainTimerDefault>1000) { setTimeout(PlayCurtainLayer10, 1000); }; };

/*
* In using of an event handler to animate this Curtain.js layers, it is advisable to use "fadeIn/Out" and not hide/show or remove/addClass,
* because of the easing effects and transition results' discrepancies.
* However, on the version2 the function and format could be more intelligent.
*/
var Inloading = function() { $(".loading").show(); }, Outloading = function() { $(".loading").hide(); };

$request_Reanimation.click(function Reanimate () { /* Request curtain re-animation (function to reload the page)*/
	$reloadCurtain() && Outloading();
	die();
});
}) ();
