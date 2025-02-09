document.addEventListener('DOMContentLoaded', (event) => {
    gsap.to(".box", {
        rotation:360,
        duration:2,
    });
    gsap.set(".flair", {xPercent: -50, yPercent: -50});

    let xTo = gsap.quickTo(".flair", "x", {duration: 0.4, ease: "power3"}),
        yTo = gsap.quickTo(".flair", "y", {duration: 0.4, ease: "power3"});
    
    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });

    window.addEventListener('scroll', function () {
        const slideText = document.querySelector('#three > p');
        const scrollY = window.scrollY;
    
        if (scrollY > 740) { // You can change the scroll distance as needed
            slideText.classList.add('one');
            slideText.classList.remove('two');
        } else {
            slideText.classList.remove('one');
            slideText.classList.add('two');
        }
    });

    window.addEventListener('scroll', function () {
        const header = document.querySelectorAll('.left');
        const scrollY = window.scrollY;
        
        header.forEach(header =>{
            if (scrollY > 270) { // You can change the scroll distance as needed
                header.classList.add('three');
                header.classList.remove('four');
            } else {
                header.classList.remove('three');
                header.classList.add('four');
            }
        })
    });
});