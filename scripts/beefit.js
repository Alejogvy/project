// scripts/beefit.js

document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
