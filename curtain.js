/** 
 *  Curtain.js v1.0.0 
 *  Curtain style Overlay transition 
 *
 *  Author: Ben Bryan Sallao 
 *  Copyright 2015 
 **/

$(document).ready(function () { 

var $CurtainReanimation = $('button'); /* Change the button to another variable name = http://www.benbryansallao.com */

var CurtainTimerDefault = 0; /* Curtain animation default timer and or time when to start the animating */

 function CurtainPlayAnimation() {    /* Function where the curtain animation Start */
 setTimeout(CurtainPlayAnimation, 100);
 CurtainTimerDefault ++;  /* The time default was adding its value every milli-seconds */
 
 if(CurtainTimerDefault>100) {  /* set timeoout to use on every frame of animation was 100 milli-seconds */
  setTimeout(PlayCurtainLayer1, 100);
  CurtainTimerDefault = 1000;
  Play2();
  Play3();
  Play4();
  Play5();
  Play6();
  Play7();
  Play8();
  Play9();
  Play10();
 };
 };


$('h2').click(function() { 
Inloading();
 CurtainPlayAnimation();
 });
 
 init:CurtainReady = (function() { /* Looping all functions to be ready on page(index.html) open */
	_CurtainreAnimation();
	_sixPacksMenu();
	Outloading();
});


_sixPacksMenu = (function () {
		$(".six-packs")
	   .fadeIn({ "opacity" : "1" });
});

_CurtainreAnimation = (function() {
  $("h2, .overlay-container, .curtain-layer-one, .curtain-layer-two, .curtain-layer-three, .curtain-layer-four, .curtain-layer-five, .curtain-layer-six, .curtain-layer-seven, .curtain-layer-eight, .curtain-layer-nine, .curtain-layer-ten").fadeIn({ "opacity" : "1" }, 400);
	   });


PlayCurtainLayer1 = (function () { 
	   Outloading();
	  $(".curtain-layer-one, h2, .six-packs").fadeOut();
	  });
PlayCurtainLayer2 = (function () { 
	   $(".curtain-layer-two").fadeOut();
	   });
PlayCurtainLayer3 = (function () { 
	   $(".curtain-layer-three").fadeOut();
	   });
PlayCurtainLayer4 = (function () { 
	   $(".curtain-layer-four").fadeOut();
	   });
PlayCurtainLayer5 = (function () { 
	   $(".curtain-layer-five").fadeOut();
	   });
PlayCurtainLayer6 = (function () { 
	   $(".curtain-layer-six").fadeOut();
	   });
PlayCurtainLayer7 = (function () { 
	   $(".curtain-layer-seven").fadeOut();
	   });
PlayCurtainLayer8 = (function () { 
	   $(".curtain-layer-eight").fadeOut(); 
	   });
PlayCurtainLayer9 = (function () { 
	   $(".curtain-layer-nine").fadeOut();
	   });
PlayCurtainLayer10 = (function () { 
	   $(".curtain-layer-ten, .overlay-container").fadeOut({ 
	   "opacity":".1"
	   }, 100);
	   });
	   
	   
	

 
 function Play2() {
 if(CurtainTimerDefault>200) {
  setTimeout(PlayCurtainLayer2, 200);
  
  
 }; };
 
 function Play3() {
 if(CurtainTimerDefault>300) {
  setTimeout(PlayCurtainLayer3, 300);

 }; };
 
 function Play4() {
 if(CurtainTimerDefault>400) {
  setTimeout(PlayCurtainLayer4, 400);

 }; };
 
 function Play5() {
 if(CurtainTimerDefault>500) {
  setTimeout(PlayCurtainLayer5, 500);

 }; };
 
 function Play6() {
 if(CurtainTimerDefault>600) {
  setTimeout(PlayCurtainLayer6, 600);

 }; };
 
 function Play7() {
 if(CurtainTimerDefault>700) {
  setTimeout(PlayCurtainLayer7, 700);

 }; };
 
 function Play8() {
 if(CurtainTimerDefault>800) {
  setTimeout(PlayCurtainLayer8, 800);

 }; };
 
 function Play9() {
 if(CurtainTimerDefault>900) {
  setTimeout(PlayCurtainLayer9, 900);

 }; };
 
 function Play10() {
 if(CurtainTimerDefault>1000) {
  setTimeout(PlayCurtainLayer10, 1000);

 }; };

function Inloading() {
$(".loading").fadeIn({ "oppacity" : "1" });
};
function Outloading() {
$(".loading").fadeOut({});
};
	
 $CurtainReanimation.click(function Reanimate() { /* When request reanimation, this function will call the CurtainReady like on window load */
   init:CurtainReady();	
   Reanimate();
});

}) ();
