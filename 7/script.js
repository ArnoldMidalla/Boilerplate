document.addEventListener('DOMContentLoaded', (event) => {
    gsap.to(".box", {
        rotation:360,
        duration:2,
    });
    gsap.set(".flair", {xPercent: -50, yPercent: -50});

    let xTo = gsap.quickTo(".flair", "x", {duration: 0.6, ease: "power3"}),
        yTo = gsap.quickTo(".flair", "y", {duration: 0.6, ease: "power3"});
    
    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
    
});//so that the gsap and js only run after very html element is loaded. and also, instead of having to move the script tags from the head to the bottom the body

