// Button Hover
const btnMain = document.querySelectorAll('.btn');
const btnBoderMain = document.querySelectorAll('.btn-border');
btnMain.forEach((btnItem, index) => {
    btnItem.addEventListener('mouseover', (e) => {
        if (e.target) {
            e.target.style.transition = 'all 200ms ease-in';
            e.target.style.opacity = 0;
            btnBoderMain[index].style.opacity = 1;
        }
    });
});
btnMain.forEach((btnItem, index) => {
    btnItem.addEventListener('mouseout', (e) => {
        if (e.target) {
            e.target.style.transition = 'all 200ms ease-in';
            e.target.style.opacity = 1;
            btnBoderMain[index].style.opacity = 0;
        }
    });
});

// Expanding Cards
const boxCards = document.querySelectorAll('.box-card');
boxCards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        removeActiveClass();
        card.classList.add('active');
    });
});
function removeActiveClass() {
    boxCards.forEach((card) => {
        card.classList.remove('active');
    });
}

// Show and Hide Cards
const overlay = document.querySelectorAll('.overlay');
overlay.forEach((lay) => {
    lay.addEventListener('mouseover', () => {
        removeOpacity();
        lay.style.opacity = 0;
    });
});
function removeOpacity() {
    overlay.forEach((lay) => {
        lay.style.opacity = 1;
    });
}

// Scroll Menu
const boxStory = document.querySelector('.box-story');
const boxEcosystem = document.querySelector('.box-ecosystem');
const boxLaunch = document.querySelector('.sticky');
const boxRoadmap = document.querySelector('.roadmap');
const boxWhitepaper = document.querySelector('.roadcenter');
const boxBtnLaika = document.querySelector('.roadfooter');
const navLink = document.querySelectorAll('.nav-item');
navLink.forEach((navItem) => {
    navItem.addEventListener('click', (e) => {
        e.preventDefault();
        const elements = document.querySelector('.nav-link.active');
        if (elements !== null) {
            elements.classList.remove('active');
        }
        e.target.classList.add('active');
        if (e.target.href.includes('#story')) {
            window.scrollTo({
                left: 0,
                top: boxStory.offsetTop - 50,
                behavior: 'smooth',
            });
        }
        if (e.target.href.includes('#ecosystem')) {
            window.scrollTo({
                left: 0,
                top: boxEcosystem.offsetTop - 50,
                behavior: 'smooth',
            });
        }
        if (e.target.href.includes('#launch')) {
            window.scrollTo({
                left: 0,
                top: boxLaunch.offsetTop - 50,
                behavior: 'smooth',
            });
        }
        if (e.target.href.includes('#roadmap')) {
            window.scrollTo({
                left: 0,
                top: boxRoadmap.offsetTop - 50,
                behavior: 'smooth',
            });
        }
        if (e.target.href.includes('#whitepaper')) {
            window.scrollTo({
                left: 0,
                top: boxWhitepaper.offsetTop - 50,
                behavior: 'smooth',
            });
        }
        if (e.target.href.includes('#getlaika')) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    });
});

// Scroll Animation
const boxSticky = document.querySelectorAll('.img-cards');
window.addEventListener('scroll', scrolling);
function scrolling() {
    const triggerBottom = window.innerHeight * (4 / 5);
    // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
    // The returned value is a DOMRect object which is the smallest rectangle which contains the entire element, including its padding and border-width. The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels. Properties other than width and height are relative to the top-left of the viewport.
    boxSticky.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (triggerBottom > boxTop) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
