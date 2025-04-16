const hambutton = document.querySelector('#hamburger-btn');
const sectionText = document.querySelector('.section-text');

hambutton.addEventListener('click', () =>
{
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');

    if (window.innerWidth > 640) {
        if (mainnav.classList.contains('open')) {
            sectionText.style.top = "45%";
        } else {
            sectionText.style.top = "30%";
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('nav');
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 800) {
            nav.classList.remove("open");
        }
    });
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


