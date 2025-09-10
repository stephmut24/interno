const navTriggerBtn= document.querySelector('#nav-triggger-btn');
const navMenu = document.querySelector('#nav-menu');

//event listener

navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open');
})

//swiper
const swiper = new Swiper('.swiper',{
    loop: true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    //pagination
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
            //spaceBetween: 10,
        },
        960: {
            slidesPerView: 2,
            //spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            //spaceBetween: 30,
        },
    }
})

//scroll reveal animations

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
    //reset: true
})

//hero

sr.reveal('.hero__text',{origin: 'top'});

//steps
sr.reveal('.steps__step', {distance: '100px', interval: 100});

//about
sr.reveal('.about__text', {origin: 'left'});
sr.reveal('.about__img', {origin: 'right', delay:800});

//testimonials
sr.reveal('.testimonial__bg', {display: 800});
sr.reveal('.testimonial__title');
sr.reveal('.testimonial__slider', {delay:1000});

//brands
sr.reveal('.brands__img', {display: 600,distance:'100px' ,interval: 100});

//work
sr.reveal('.work__title');
sr.reveal('.work__subtitle', {delay: 800});
sr.reveal('.work__grid', {delay: 1000});

//stats
sr.reveal('.stats');
sr.reveal('.stats__item',{distance: '100px', interval: 100});


//news
sr.reveal('.news_title');
sr.reveal('.news__subtitle', {delay: 800});
sr.reveal('.news_item', {distance: '100px', interval: 100, display:1000,});

//contact
sr.reveal('.contact__container');
sr.reveal('.contact__text', {delay: 800});

//footer
sr.reveal('.footer__item',{
    distance: '100px',
    interval: 100,
})

sr.reveal('.footer__copyright') 
