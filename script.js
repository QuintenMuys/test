// Selecteer de elementen
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Klik op het hamburger-menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Menu openen/sluiten
    hamburger.classList.toggle('active'); // Hamburger veranderen in kruis
});

// Klik op een link in het menu → Sluiten
navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
});

