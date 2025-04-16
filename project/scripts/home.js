const mainnav = document.querySelector('nav');
const hambutton = document.querySelector('#hamburger-btn');
const sectionText = document.querySelector('.section-text');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 800) {
        mainnav.classList.remove("open");
    }
});

const logo = document.querySelector('#logo');

logo.addEventListener('click', () => {
    window.location.href = 'home.html';
});

const footerLogo = document.querySelector('.footer-logo');

footerLogo.addEventListener('click', () => {
    window.location.href = 'home.html';
});

const instagram = document.querySelector('#ig');

instagram.addEventListener('click', () => {
    window.open('https://www.instagram.com/', '_blank');
});

const facebook = document.querySelector('#fb');

facebook.addEventListener('click', () => {
    window.open('https://www.facebook.com/', '_blank');
});


