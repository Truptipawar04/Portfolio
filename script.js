$(document).ready(()=>{
    $("nav i").click(()=>{
        $("nav a").slideToggle();
        
    })
})

$(document).ready(()=>{
    $(".icons a").mouseenter(()=>{
        $(".icons p").show();
    })
    $(".icons").mouseleave(()=>{
        $(".icons p").hide();
    })

})

gsap.from(".info h1",{
    y:200,
    opacity:0,
    duration:1,

})

gsap.from(".info h3",{
    y:200,
    opacity:0,
    duration:1,
    delay:1

})

gsap.from(".icons a",{
    y:200,
    opacity:0,
    duration:1,
    delay:2
})

gsap.from(".about h1",{
    y:200,
    opacity:0,
    duration:1.5,
    delay:1,
    scrollTrigger:(".about h1")
})

gsap.from(".about p",{
    y:200,
    opacity:0,
    duration:1.5,
    delay:2,
    scrollTrigger:(".about p")
})

gsap.from(".projects h2",{
    y:200,
    opacity:0,
    duration:1.5,
    delay:1,
    scrollTrigger:(".projects h2")
})

gsap.from(".projects .left",{
    x:60,
    opacity:0,
    duration:1.5,
    delay:2,
    scrollTrigger:(".projects .left")
})

gsap.from(".projects .right",{
    x:-60,
    opacity:0,
    duration:1.5,
    delay:2,
    scrollTrigger:(".projects .right")
})

gsap.from(".end h3",{
    y:160,
    opacity:0,
    duration:1,
    delay:3,
    scrollTrigger:(".end .h3")
})