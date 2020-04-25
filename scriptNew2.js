var controller = new ScrollMagic.Controller();
var tline = new gsap.timeline();


var tween1 = new gsap.to('#fpage',{ opacity:0, y: 30 });

var tween2 = new gsap.to('#thinkingMan',{ opacity:0,x: -1,delay:-0.50});

var tween3 = new gsap.to('#disLogo',{ opacity:1,delay:-0.20 });

var tween4 = new gsap.to('#disInfo',{ opacity:1,y:-30,delay:-0.40 });


const flightPath = {
    curviness: 1,
    autoRotate: true,
    path:[
        {x:100,y:  0},
        {x:250,y: 10},
        {x:400,y: 20},
        {x:500,y: 50},
        {x:600,y:-60},
        {x:400,y:-30},
        {x:500,y: 20},
        {x:700,y:-80},
        {x:1100,y:-130,rotation:-20},  
]};
var tween5 = new gsap.to('#paperPlane',{
    motionPath:flightPath,
    ease:Power1.easeInOut,
    delay:-0.50
});


var scene = new ScrollMagic.Scene({
    triggerElement:"#thinkingMan",
    duration: 380,
    triggerHook: 0.1,
});


tline.add(tween1).add(tween2).add(tween3).add(tween5).add(tween4);
scene.setTween(tline).addTo(controller).setPin('#fPage');


var inLeft = new gsap.to(".easeLeft",{
    opacity:1,
    x: 30
});
var inRight = new gsap.to(".easeRight",{
    opacity:1,
    x: -30
});
new ScrollMagic.Scene({
    triggerElement:'#clipCard',
    triggerHook:0.6
})
.setTween(inLeft)
// .addIndicators()
.addTo(controller);
new ScrollMagic.Scene({
    triggerElement:'#clipCard',
    triggerHook:0.6
})
.setTween(inRight)
// .addIndicators()
.addTo(controller);
