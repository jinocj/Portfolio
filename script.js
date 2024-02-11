// Add this to your existing script.js or create a new file and link it in your HTML

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.navbar a');

    // Toggle mobile menu
    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navbarLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbar.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});
