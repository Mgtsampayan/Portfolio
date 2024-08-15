// Modern Portfolio JavaScript 2024

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Intersection Observer for fade-in animations
const fadeInElements = document.querySelectorAll('.fade-in');
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    document.querySelector('.hero').style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Project hover effect using GSAP
document.querySelectorAll('.project-item').forEach(item => {
    const overlay = item.querySelector('.project-overlay');
    const image = item.querySelector('img');

    item.addEventListener('mouseenter', () => {
        gsap.to(overlay, { opacity: 1, duration: 0.3 });
        gsap.to(image, { scale: 1.05, duration: 0.3 });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(overlay, { opacity: 0, duration: 0.3 });
        gsap.to(image, { scale: 1, duration: 0.3 });
    });
});

// Animated counter for skills or stats (if you decide to add them)
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Usage example (uncomment if you add stat counters to your HTML):
document.querySelectorAll('.counter').forEach(counter => {
    animateValue(counter, 0, parseInt(counter.getAttribute('data-target')), 2000);
});

// Form submission (add your own logic for handling form submission)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});

// Optional: Dark mode toggle (you'll need to add a toggle button in your HTML)
const darkModeToggle = document.querySelector('#dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Save user preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}