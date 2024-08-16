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

// Filtered Projects
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.filtered-project-grid .project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        projectItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.style.display = 'none');
    testimonials[index].style.display = 'block';
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

function previousTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

showTestimonial(currentTestimonial);
setInterval(nextTestimonial, 5000); // Auto-advance every 5 seconds

// You can add navigation buttons for the testimonial slider if desired
document.querySelector('.next-testimonial').addEventListener('click', nextTestimonial);
document.querySelector('.prev-testimonial').addEventListener('click', previousTestimonial);

// Enhance existing animations for new sections
const newFadeInElements = document.querySelectorAll('#filtered-projects .fade-in, #blog .fade-in, #skills .fade-in, #testimonials .fade-in');
const newFadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

newFadeInElements.forEach(element => {
    newFadeInObserver.observe(element);
});