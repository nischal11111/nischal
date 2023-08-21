document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.classList.add('bounce');
        });

        link.addEventListener('mouseout', () => {
            link.classList.remove('bounce');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Apply Vanilla Tilt to the profile picture
    VanillaTilt.init(document.querySelector('.profile-picture'), {
        max: 25,       // Maximum tilt rotation angle
        speed: 400,    // Tilt speed
        glare: true,   // Enable glare effect
        'max-glare': 0.5, // Glare intensity (0 to 1)
    });
});
