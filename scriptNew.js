var tline = gsap.timeline();

tline.to('#thinkingMan',{
    opacity:1,
    x:-50,
    duration:0.7
});
tline.to('#fpage',{
    opacity:1,
    duration:0.2
},'-=0.3');
tline.to('#fpageLogo,#fpageDisc',{
    opacity: 1,
    y: 20,
    duration:0.3,
    stagger: 0.25
});
tline.to('#fpageButton',{
    opacity: 1,
    scale: 1,
    duration: 0.1
},'-=0.2');
tline.to('.navItem',{
    opacity: 1,
    duration:0.2,
    stagger:0.05
})


