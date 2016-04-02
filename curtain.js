/** 
 *  Curtain.js v5.3.0
 *  Curtain-Style-Overlay-Transition 
 *
 *  Author: Ben Bryan Sallao 
 *  Copyright 2015-2016
 *  Istudyo Nonato
 *
 *  About Curtain.js the exact curtain/blinds simulation from the house of Tony Stark in the Iron Man1 Movie
 **/

$(document).ready(function () { 
var r=document.getElementById('reanimate'),
button=$('button'),
to=$('h2'),

/* Mathematical computation on Curtain/blinds animation */
n=Math.round(10*Math.pow(Math.ceil(1.1),Math.ceil(1.2)))+Math.round(10*Math.ceil(3.1))+Math.ceil(9.23*2)+1.0, /* Computation where the curtain animation initiates at 10% of 1 second */

cm=n,y= Math.sqrt(Math.ceil(n/2.0)*Math.round(Math.ceil(0.3)*1.0)*2.0), /* Computation of the whole curtain animation 1000 milliseconds or 1 second */

g= Math.round(cm*Math.ceil(9.23*1.0))*n/n, 
h= Math.ceil(n/2)*Math.round(Math.ceil(0.1)*1), 
l=Math.round(y*y)*Math.ceil(1.10)*1.0,xk=Math.round(l*Math.ceil(1.12))-cm,km=Math.round(h*2)+xk,kn=Math.round(n,2)+l+xk-n,ko=Math.pow(cm,2)/10-km,kp= Math.pow(h,2)-g-g+l,kq=Math.round(km*2),kr=Math.round(l*2)+kn,

o=function()
{    
 on(o,cm),cm++;if(cm>=cm){on(pa,cm),cm=g,ab();}; /* Commencing curtain animation... */
};

var es=to;es.click(function(){o();});x=(function(){cr();});cr=(function(){xd;});
var istudyononatoReady=x;
ab=function() {if(cm>l){on(pb,l);}if(cm>xk){on(pc,xk);};if(cm>km){on(pd,km);};if(cm>kn){on(pe,kn);};if(cm=>ko){on(pf,ko);};if(cm>kp){on(pg,kp);};if(cm>kq){on(ph,kq);};if(cm>kr){on(pi,kr);};if(cm=>g){on(pj,g);};};var xd = $("h2, .overlay-container, .curtain-layer-one, .curtain-layer-two, .curtain-layer-three, .curtain-layer-four, .curtain-layer-five, .curtain-layer-six, .curtain-layer-seven, .curtain-layer-eight, .curtain-layer-nine, .curtain-layer-ten").fadeIn();var pja=$(".curtain-layer-ten, .overlay-container"),pia=$(".curtain-layer-nine"),pha=$(".curtain-layer-eight"),pga=$(".curtain-layer-seven"),pfa=$(".curtain-layer-six"),pea=$(".curtain-layer-five"),pda=$(".curtain-layer-four"),pca=$(".curtain-layer-three"),pba=$(".curtain-layer-two"),paa=$(".curtain-layer-one, h2"),on=setTimeout; pa=(function(){paa.fadeOut();});pb=(function(){pba.fadeOut();});pc=(function(){pca.fadeOut();});pd=(function(){pda.fadeOut();});pe=(function(){pea.fadeOut();});pf=(function (){pfa.fadeOut();});pg=(function (){pga.fadeOut();});ph=(function(){pha.fadeOut()});pi=(function(){pia.fadeOut()});pj=function(){pja.fadeOut();};var wh=button;wh.click(function(){window.location.href='index.html';});
})();
