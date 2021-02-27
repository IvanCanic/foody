menuControll();
tabsControll();
searchModalControll();

function menuControll() {
    let menuToggler = document.querySelector('.menu__toggler');
    let menuList = document.querySelector('.menu__list');
    
    menuToggler.addEventListener('click', (e) => {
    
        menuToggler.classList.toggle('active');
        menuList.classList.toggle('active');
    
        menuList.style.animation = 'menuOpen 3s';
    
    });
}

function tabsControll() {
    let tabsBtns = document.querySelectorAll('.tabs__btn');

    let tabs = document.querySelectorAll('.tabs__content');

    tabsBtns.forEach( btn => {

        btn.addEventListener('click', (e) => {

        tabsBtns.forEach( b => { b.classList.remove('active');});

        e.currentTarget.classList.add('active');

        tabs.forEach(tab => {

            tab.classList.remove('active');

            if(tab.dataset.id === e.currentTarget.id){
                tab.classList.add('active');
            }

        })
        
    });
    
});
}

function searchModalControll() {

    let searchClose = document.querySelector('.search__close');

    let searchModal = document.querySelector('.search');

    let searchOpen = document.querySelector('.menu__search');

    searchOpen.addEventListener('click', () => {
        searchModal.classList.add('open');
        sr.play();
    });

    searchClose.addEventListener('click', () => {
        searchModal.classList.remove('open');
    });

    let sr = new gsap.timeline();

    sr.from(".search > .search__form", {duration: 2, opacity:0, x: -200}).pause();

}

// GSAP ANIMATIONS //

gsap.registerPlugin(ScrollTrigger);

gsap.from(".header__title", {
    duration: 2, x:-300
})
gsap.from(".header__subtitle", {
    duration: 2, x:300
})
gsap.from(".header__buttons > *", {
    duration: 2, x:3000, stagger: 0.5
});

gsap.from(".blog", {
    scrollTrigger: {
        trigger: '.blog',
        start: 'top bottom',
    },
    duration: 2,
    opacity:0,
    y: 300,
    stagger: 0.5
});

gsap.from(".tabs__information > *", {
    scrollTrigger: {
        trigger: '.tabs',
        start: 'top center',
    },
    duration: 10,
    opacity: 0,
    stagger: 0.5
});
