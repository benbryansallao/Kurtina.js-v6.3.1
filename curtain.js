$(document).ready(function () { /* Curtain.js Curtain style Overlay transition by: Ben Bryan Sallao*/
	
 
 
 CurtainReady = (function() {
	_CurtainreAnimation();
	_sixPacksMenu();
});


_sixPacksMenu = (function () {
		$(".six-packs")
	   .delay(600).fadeIn({
	   "opacity":"1"
	   }, 600)
});

_CurtainreAnimation = (function() {
  $("h2, .overlay-container, .curtain-layer-one, .curtain-layer-two, .curtain-layer-three, .curtain-layer-four, .curtain-layer-five, .curtain-layer-six, .curtain-layer-seven, .curtain-layer-eight, .curtain-layer-nine, .curtain-layer-ten").fadeIn({"opacity":"1"}, 400)
	   });


$("#reanimate").click(function () {
    CurtainReady();	
});



	$("h2").click(function Curtain() { 
	
	  $(".curtain-layer-one, h2, .six-packs").delay(100).fadeOut({
	  "opacity":".1"
	  }, 100)
	   $(".curtain-layer-two")
	   .delay(200).fadeOut({
	   "opacity":".1"
	   }, 100)
	   $(".curtain-layer-three")
	   .delay(300).fadeOut({ 
	   "opacity":".1"
	   }, 100)
	   $(".curtain-layer-four")
	   .delay(400).fadeOut({
	   "opacity":".1"
	   }, 100)
	   $(".curtain-layer-five")
	   .delay(500).fadeOut({
	   "opacity":".1"
	   }, 100)
	   $(".curtain-layer-six")
	   .delay(600).fadeOut({ 
	   "opacity":".1"
	   }, 100)
	   $(".curtain-layer-seven")
	   .delay(700).fadeOut({
	   "opacity":".1"
	   }, 100)
	   $(".curtain-layer-eight")
	   .delay(800).fadeOut({ 
	   "opacity":".1"
	   }, 100)
	   $(".curtain-layer-nine")
	   .delay(900).fadeOut({ 
	   "opacity":".1"
	   }, 100)
	   $(".curtain-layer-ten")
	   .delay(1000).fadeOut({ 
	   "opacity":".1"
	   }, 100)
	   $(".overlay-container")
	   .delay(1100).fadeOut({
	   "opacity":".1"
	   }, 100); 
	});
});
