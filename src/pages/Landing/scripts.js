document.addEventListener('DOMContentLoaded', () => {
    const downButton = document.querySelector('.down');
    const navLinks = document.querySelector('.nav-links');

    // Initially hide the menu
    navLinks.style.display = 'none';

    // Add click event listener to toggle menu
    downButton.addEventListener('click', () => {
        if (navLinks.style.display === 'none') {
            navLinks.style.display = 'block';
        } else {
            navLinks.style.display = 'none';
        }
    });
});