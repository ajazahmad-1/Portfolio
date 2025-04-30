// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) navLinks.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous messages
            formMessage.textContent = '';
            formMessage.className = 'form-message';
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                subject: document.getElementById('subject').value.trim(),
                message: document.getElementById('message').value.trim()
            };
            
            // Validate form
            if (!formData.name || !formData.email || !formData.message) {
                formMessage.textContent = 'Please fill in all required fields (Name, Email, and Message)';
                formMessage.classList.add('error');
                return;
            }
            
            // Validate email format
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                formMessage.textContent = 'Please enter a valid email address';
                formMessage.classList.add('error');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll simulate a successful submission
            simulateFormSubmission(formData)
                .then(response => {
                    formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
                    formMessage.classList.add('success');
                    contactForm.reset();
                })
                .catch(error => {
                    formMessage.textContent = 'There was an error sending your message. Please try again later.';
                    formMessage.classList.add('error');
                    console.error('Form submission error:', error);
                });
        });
    }
    
    // Simulate form submission (replace with actual fetch/API call)
    function simulateFormSubmission(formData) {
        return new Promise((resolve) => {
            // Simulate network delay
            setTimeout(() => {
                console.log('Form submitted:', formData);
                resolve({ status: 'success' });
            }, 1000);
        });
    }

    // Animation on scroll
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize animations
    function initAnimations() {
        // Set initial state for animations
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Trigger animations for hero section immediately
        const homeSection = document.querySelector('#home');
        if (homeSection) {
            homeSection.style.opacity = '1';
            homeSection.style.transform = 'translateY(0)';
        }
        
        // Run reveal on scroll once to check initial positions
        revealOnScroll();
    }

    window.addEventListener('scroll', revealOnScroll);
    initAnimations();
});

//===============================================================

// Add this to your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.btn[download]');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // Optional: Add tracking or confirmation here
            console.log('Resume download initiated');
            
            // The download will happen automatically because of the download attribute
            // You could also add a slight delay for any animations
            setTimeout(() => {
                // This is just for the console log, the download happens via HTML
                console.log('Resume download should be starting...');
            }, 300);
        });
    }
});
