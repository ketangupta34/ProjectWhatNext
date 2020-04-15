// Bezier Function 
const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values:[
        {x:100,y:-20},
        {x:250,y: 30},
        {x:400,y:  0},
        {x:600,y:-60},
        {x:400,y:-30},
        {x:500,y: 20},
        {x:700,y:-80},
        {x:999,y:-150},  
]};

// TweenLite 
var tween = new TweenLite.to('.paperPlane',3,{
    bezier:flightPath,
    ease:Power1.easeInOut,
});

// ScrollMagic
var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement:".discription",
    duration: 300,
    triggerHook: 0.65
})
.setTween(tween)
.addIndicators()
.addTo(controller);


// ScrollReveal
// ScrollReveal.debug = true;
ScrollReveal().reveal('#disLogo',{
    reset: true,
    duration: 500,
    delay: 300,
    origin: 'left',
    distance: '100px'
});
ScrollReveal().reveal('#disInfo',{
    // reset:true,
    delay: 300,
    origin: 'right',
    distance: '100px'
});
