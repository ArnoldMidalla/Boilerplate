window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;

    if (scrollY > 100 && scrollY <1240) { // You can change the scroll distance as needed
        header.classList.add('scrolled');
        header.classList.remove('scrolledB');
    } else if (scrollY > 1240 && scrollY <1807) { 
        header.classList.add('scrolledB');
        header.classList.remove('scrolled');
    } else if (scrollY > 1807 && scrollY <2630) {
        header.classList.add('scrolled');
        header.classList.remove('scrolledB');
    } else {
        header.classList.remove('scrolled', 'scrolledB');
    }
});

window.addEventListener('scroll', function () {
    const header = document.querySelectorAll('.butcent'); // Use ID selector
    header.forEach(header =>{
    if (scrollY > 100 && scrollY <1240) { // You can change the scroll distance as needed
        header.classList.add('scrolled');
        header.classList.remove('scrolledB');
    } else if (scrollY > 1240 && scrollY <1807) { 
        header.classList.add('scrolledB');
        header.classList.remove('scrolled');
    } else if (scrollY > 1807 && scrollY <2630) {
        header.classList.add('scrolled');
        header.classList.remove('scrolledB');
    } else {
        header.classList.remove('scrolled', 'scrolledB');
    }})
});