/** 
 *  Curtain.js v6.3.1 
 *  Curtain-Style-Overlay-Transition 
 *
 *  Author: Ben Bryan Sallao 
 *  Copyright 2015-2016
 *  Istudyo Nonato
 *
 *  About Curtain.js the exact curtain/blinds simulation from the house of Tony Stark in the Iron Man1 Movie
 **/

 document.getElementById('out').addEventListener('click', function() { FX.fadeOut(document.getElementById('out'), { duration: 10, complete: function() {play1();   }});}, false); function play1() { FX.fadeOut(document.getElementById('curtain-layer-one'), { duration: 200, complete: function() {play2(); }  });} function play2() { FX.fadeOut(document.getElementById('curtain-layer-two'), { duration: 200, complete: function() {play3(); } });} function play3() { FX.fadeOut(document.getElementById('curtain-layer-three'), { duration: 200, complete: function() {play4();  } });} function play4() { FX.fadeOut(document.getElementById('curtain-layer-four'), { duration: 200, complete: function() {play5();  } });} function play5() { FX.fadeOut(document.getElementById('curtain-layer-five'), { duration: 200, complete: function() {play6(); }});} function play6() { FX.fadeOut(document.getElementById('curtain-layer-six'), { duration: 200, complete: function() {play7();  } });} function play7() {FX.fadeOut(document.getElementById('curtain-layer-seven'), { duration: 200,  complete: function() {	play8();   }  });} function play8() { FX.fadeOut(document.getElementById('curtain-layer-eight'), { duration: 200, complete: function() {play9(); }});} function play9() { FX.fadeOut(document.getElementById('curtain-layer-nine'), { duration: 200, complete: function() {play10(); } });} function play10() { FX.fadeOut(document.getElementById('curtain-layer-ten').style.display="none", { duration: 200, complete: function() {	play11(); }});} function play11() { FX.fadeOut(document.getElementById('overlay-container'), { duration: 20, complete: function() { play12(); } });}
