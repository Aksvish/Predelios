// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 24px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Form submission
document.querySelector('.contact form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! We\'ll get back to you soon.');
    e.target.reset();
});

console.log('Predelios website loaded!');
