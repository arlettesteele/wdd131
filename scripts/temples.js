document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active'); 
        hamburgerBtn.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
    });
});