const mainnav = document.querySelector('nav');
const hambutton = document.querySelector('#hamburger-btn');

hambutton.addEventListener('click', () =>
{
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});