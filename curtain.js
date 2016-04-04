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

(function() {
    var FX = {
        easing: {
            linear: function(progress) {
                return progress;
            },
            quadratic: function(progress) {
                return Math.pow(progress, 2);
            },
            swing: function(progress) {
                return 0.5 - Math.cos(progress * Math.PI) / 2;
            },
            circ: function(progress) {
                return 1 - Math.sin(Math.acos(progress));
            },
            back: function(progress, x) {
                return Math.pow(progress, 2) * ((x + 1) * progress - x);
            },
            bounce: function(progress) {
                for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
                    if (progress >= (7 - 4 * a) / 11) {
                        return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
                    }
                }
            },
            elastic: function(progress, x) {
                return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
            }
        },
        animate: function(options) {
            var start = new Date;
            var id = setInterval(function() {
                var timePassed = new Date - start;
                var progress = timePassed / options.duration;
                if (progress > 1) {
                    progress = 1;
                }
                options.progress = progress;
                var delta = options.delta(progress);
                options.step(delta);
                if (progress == 1) {
                    clearInterval(id);
                    options.complete();
                }
            }, options.delay || 10);
        },
        fadeOut: function(element, options) {
            var to = 1;
            this.animate({
                duration: options.duration,
                delta: function(progress) {
                    progress = this.progress;
                    return FX.easing.circ(progress);
                },
                complete: options.complete,
                step: function(delta) {
                    element.style.opacity = to - delta;
                }
            });
        },
        fadeIn: function(element, options) {
            var to = 0;
            this.animate({
                duration: options.duration,
                delta: function(progress) {
                    progress = this.progress;
                    return FX.easing.swing(progress);
                },
                complete: options.complete, step: function(delta) {  element.style.opacity = to + delta; } });     } }; window.FX = FX; }) (); document.getElementById('out').addEventListener('click', function() { FX.fadeOut(document.getElementById('out'), { duration: 10, complete: function() {play1();   }});}, false); function play1() { FX.fadeOut(document.getElementById('curtain-layer-one'), { duration: 200, complete: function() {play2(); }  });} function play2() { FX.fadeOut(document.getElementById('curtain-layer-two'), { duration: 200, complete: function() {play3(); } });} function play3() { FX.fadeOut(document.getElementById('curtain-layer-three'), { duration: 200, complete: function() {play4();  } });} function play4() { FX.fadeOut(document.getElementById('curtain-layer-four'), { duration: 200, complete: function() {play5();  } });} function play5() { FX.fadeOut(document.getElementById('curtain-layer-five'), { duration: 200, complete: function() {play6(); }});} function play6() { FX.fadeOut(document.getElementById('curtain-layer-six'), { duration: 200, complete: function() {play7();  } });} function play7() {FX.fadeOut(document.getElementById('curtain-layer-seven'), { duration: 200,  complete: function() {	play8();   }  });} function play8() { FX.fadeOut(document.getElementById('curtain-layer-eight'), { duration: 200, complete: function() {play9(); }});} function play9() { FX.fadeOut(document.getElementById('curtain-layer-nine'), { duration: 200, complete: function() {play10(); } });} function play10() { FX.fadeOut(document.getElementById('curtain-layer-ten').style.display="none", { duration: 200, complete: function() {	play11(); }});} function play11() { FX.fadeOut(document.getElementById('overlay-container'), { duration: 20, complete: function() { play12(); } });}
