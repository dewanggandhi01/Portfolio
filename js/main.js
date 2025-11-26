// Main JavaScript file for portfolio functionality

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// Main initialization function
function initializePortfolio() {
    // Initialize all components
    initPreloader();
    initNavigation();
    initTypingEffect();
    initScrollAnimations();
    initParticles();
    initSkillBars();
    initStatsCounter();
    initProjectsFilter();
    initContactForm();
    initThemeToggle();
    initBackToTop();
    initProjectModals();
    initImageGallery();
    
    // Set up AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
}

// Preloader functionality with growing animation
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function() {
        // Wait for growing animation to complete at least one full cycle (4.5s)
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 800); // Match the CSS transition duration
        }, 4500); // Allow animation to run for one complete cycle
    });
}

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.id = 'progress-bar';
    document.body.appendChild(progressBar);

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Enhanced smooth scrolling with focus effect
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu
                if (navToggle) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
                
                // Remove focus from all sections
                document.querySelectorAll('section').forEach(section => {
                    section.classList.remove('focus');
                });
                
                // Add focus to target section
                targetSection.classList.add('focus');
                
                // Remove focus after animation
                setTimeout(() => {
                    targetSection.classList.remove('focus');
                }, 2000);
                
                // Smooth scroll to target
                const offsetTop = targetSection.offsetTop - 79;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active state
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Progress bar and scroll effects
    window.addEventListener('scroll', function() {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
        
        // Navbar scroll effect  
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Update active navigation on scroll (ScrollSpy)
    window.addEventListener('scroll', updateActiveNavigation);
    
    // Ensure last section can scroll to top
    adjustBodyPadding();
    window.addEventListener('resize', adjustBodyPadding);
}

// Adjust body padding to ensure last section can scroll to top
function adjustBodyPadding() {
    const lastSection = document.querySelector('section:last-of-type');
    if (!lastSection) return;
    
    const sectionHeight = lastSection.offsetHeight;
    const windowHeight = window.innerHeight;
    const navHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 80;
    
    if (sectionHeight < windowHeight) {
        const paddingNeeded = windowHeight - navHeight - sectionHeight;
        document.body.style.paddingBottom = paddingNeeded + 'px';
    }
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Typing effect for hero section
function initTypingEffect() {
    const typingText = document.getElementById('typing-text');
    const roles = [
        'Data Science Student',
        'AI Engineer',
        'Machine Learning Enthusiast',
        'Full-Stack Developer',
        'Problem Solver',
        'Tech Innovator'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 200;
    
    function typeRole() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            delay = 100;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            delay = 200;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            delay = 500;
        }
        
        setTimeout(typeRole, delay);
    }
    
    // Start typing effect
    setTimeout(typeRole, 1000);
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
}

// Particles.js initialization
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#6366f1', '#ec4899', '#10b981']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.3,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6366f1',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Skills bar animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
}

// Stats counter animation
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const target = parseInt(statNumber.getAttribute('data-target'));
                const showPlus = statNumber.hasAttribute('data-plus');
                let count = 0;
                const increment = target / 100;
                
                const updateCount = () => {
                    if (count < target) {
                        count += increment;
                        statNumber.textContent = Math.ceil(count) + (showPlus ? '+' : '');
                        setTimeout(updateCount, 20);
                    } else {
                        statNumber.textContent = target + (showPlus ? '+' : '');
                    }
                };
                
                updateCount();
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => statsObserver.observe(stat));
}

// Projects filter functionality
function initProjectsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectsGrid = document.getElementById('projects-grid');
    
    // Generate project cards
    generateProjectCards();
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
}

function generateProjectCards() {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (!projectsData || !projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${project.category}`;
        projectCard.setAttribute('data-aos', 'fade-up');
        projectCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-category">${getCategoryName(project.category)}</div>
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tech">${project.tech}</div>
                <p class="project-description">${project.description}</p>
            </div>
            <div class="project-links">
                <a href="${project.links.github}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i>
                    GitHub
                </a>
                <button class="project-link view-details" data-project-id="${project.id}">
                    <i class="fas fa-info-circle"></i>
                    Details
                </button>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Add click handlers for detail buttons
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-project-id'));
            showProjectModal(projectId);
        });
    });
}

function getCategoryName(category) {
    const categoryNames = {
        'ai': 'AI/ML',
        'web': 'Web Dev',
        'data': 'Data Science',
        'automation': 'Automation'
    };
    return categoryNames[category] || category.toUpperCase();
}

function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (filter === 'all' || card.classList.contains(filter)) {
            card.style.display = 'block';
            card.classList.remove('hidden');
        } else {
            card.style.display = 'none';
            card.classList.add('hidden');
        }
    });
}

// Project modal functionality
function initProjectModals() {
    const modal = document.getElementById('project-modal');
    const closeBtn = modal.querySelector('.close');
    
    closeBtn.addEventListener('click', closeProjectModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProjectModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
}

function showProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="project-modal-content">
            <div class="project-modal-header">
                <h2>${project.title}</h2>
                <div class="project-modal-meta">
                    <span class="project-modal-category">${getCategoryName(project.category)}</span>
                    <span class="project-modal-year">${project.year}</span>
                </div>
                <div class="project-modal-tech">${project.tech}</div>
            </div>
            <div class="project-modal-body">
                ${project.longDescription}
            </div>
            <div class="project-modal-tags">
                ${project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-modal-links">
                <a href="${project.links.github}" class="btn btn-primary" target="_blank">
                    <i class="fab fa-github"></i>
                    View on GitHub
                </a>
                ${project.links.demo !== '#' ? `
                    <a href="${project.links.demo}" class="btn btn-secondary" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        Live Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const formStatus = document.getElementById('form-status');
    
    if (!contactForm) return;
    
    // Initialize EmailJS (Replace with your credentials)
    emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (validateContactForm(data)) {
            // Disable button and show loading state
            submitBtn.disabled = true;
            btnText.textContent = 'Sending...';
            submitBtn.style.opacity = '0.7';
            
            // Send email using EmailJS
            emailjs.sendForm(
                'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
                this
            ).then(
                function(response) {
                    // Success
                    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.disabled = false;
                    btnText.textContent = 'Send Message';
                    submitBtn.style.opacity = '1';
                    
                    console.log('SUCCESS!', response.status, response.text);
                },
                function(error) {
                    // Error
                    showNotification('Failed to send message. Please try again or contact me directly.', 'error');
                    
                    // Reset button
                    submitBtn.disabled = false;
                    btnText.textContent = 'Send Message';
                    submitBtn.style.opacity = '1';
                    
                    console.log('FAILED...', error);
                }
            );
        }
    });
}

function validateContactForm(data) {
    const name = data.from_name;
    const email = data.from_email;
    const subject = data.subject;
    const message = data.message;
    
    if (!name || !name.trim()) {
        showNotification('Please enter your name.', 'error');
        return false;
    }
    
    if (!email || !email.trim() || !isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return false;
    }
    
    if (!subject || !subject.trim()) {
        showNotification('Please enter a subject.', 'error');
        return false;
    }
    
    if (!message || !message.trim()) {
        showNotification('Please enter your message.', 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--accent-color)' : 'var(--danger-color)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        z-index: 10001;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Theme toggle functionality - Dark theme is now default
function initThemeToggle() {
    // Set dark theme as default
    document.documentElement.setAttribute('data-theme', 'dark');
}

// Back to top functionality
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimizations
const debouncedResize = debounce(function() {
    // Handle resize events
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}, 250);

const throttledScroll = throttle(function() {
    updateActiveNavigation();
}, 100);

window.addEventListener('resize', debouncedResize);
window.addEventListener('scroll', throttledScroll);

// Error handling
window.addEventListener('error', function(e) {
    console.error('Portfolio error:', e.error);
});

// Console message for developers
console.log(`
🚀 Portfolio by Dewang Gandhi
📧 dewanggandhi2@gmail.com
🔗 https://linkedin.com/in/dewang-gandhi-21323b331
💻 https://github.com/dewanggandhi01

Thanks for checking out my portfolio! 
Feel free to reach out if you'd like to collaborate.
`);

// Add CSS for modal content styling
const modalStyles = `
<style>
.project-modal-content {
    max-width: 800px;
    margin: 0 auto;
}

.project-modal-header {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
}

.project-modal-header h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.project-modal-meta {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.project-modal-category,
.project-modal-year {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-full);
    font-size: 0.875rem;
    font-weight: 600;
}

.project-modal-tech {
    color: var(--text-secondary);
    font-style: italic;
    font-size: 1.125rem;
}

.project-modal-body {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 2rem;
}

.project-modal-body h4 {
    color: var(--primary-color);
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem;
}

.project-modal-body ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
}

.project-modal-body li {
    margin-bottom: 0.5rem;
}

.project-modal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
}

.modal-tag {
    background: var(--bg-secondary);
    color: var(--text-primary);
    padding: 0.25rem 0.75rem;
    border-radius: var(--radius-full);
    font-size: 0.875rem;
    font-weight: 500;
    border: 1px solid var(--border-color);
}

.project-modal-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    .project-modal-content {
        padding: 1rem;
    }
    
    .project-modal-header h2 {
        font-size: 1.5rem;
    }
    
    .project-modal-meta {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .project-modal-links {
        flex-direction: column;
    }
    
    .project-modal-links .btn {
        justify-content: center;
    }
}
</style>
`;

// Inject modal styles
document.head.insertAdjacentHTML('beforeend', modalStyles);

// Image Gallery functionality
function initImageGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item, .badges-container');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('.hackathon-image, .ncc-image, .badges-image');
            if (img) {
                showImageModal(img.src, img.alt);
            }
        });
    });
}

function showImageModal(src, alt) {
    // Create image modal
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="image-modal-content">
            <span class="image-modal-close">&times;</span>
            <img src="${src}" alt="${alt}" class="modal-image">
            <div class="image-modal-caption">${alt}</div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add event listeners
    const closeBtn = modal.querySelector('.image-modal-close');
    closeBtn.addEventListener('click', closeImageModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
    
    function closeImageModal() {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    }
    
    // Animate in
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

// Add image modal styles
const imageModalStyles = `
<style>
.image-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10001;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-modal.active {
    opacity: 1;
}

.image-modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    text-align: center;
}

.image-modal-close {
    position: absolute;
    top: -40px;
    right: 0;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10002;
    background: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;
}

.image-modal-close:hover {
    background: rgba(255, 255, 255, 0.2);
}

.modal-image {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-xl);
}

.image-modal-caption {
    color: white;
    margin-top: 1rem;
    font-size: 1.125rem;
    font-weight: 500;
}

@media (max-width: 768px) {
    .image-modal-close {
        top: -30px;
        font-size: 1.5rem;
        width: 30px;
        height: 30px;
    }
    
    .modal-image {
        max-height: 70vh;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', imageModalStyles);

// ===== PREMIUM FEATURES =====

// Magnetic Cursor Effect
function initMagneticCursor() {
    if (window.innerWidth < 768) return; // Disable on mobile
    
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(follower);
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
    });
    
    // Animate follower
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        follower.style.left = followerX - 20 + 'px';
        follower.style.top = followerY - 20 + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    
    // Add magnetic effect to buttons and links
    const magneticElements = document.querySelectorAll('.btn, .project-link, .nav-link');
    
    magneticElements.forEach(element => {
        element.classList.add('magnetic');
        
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            follower.style.transform = 'scale(1.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
        });
    });
}

// Premium Scroll Reveal Animations
function initPremiumScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Add stagger effect for multiple elements
                const siblings = entry.target.parentElement.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
                siblings.forEach((sibling, index) => {
                    setTimeout(() => {
                        sibling.classList.add('revealed');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all scroll reveal elements
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale').forEach(el => {
        observer.observe(el);
    });
}

// Premium Loading Sequence
function initPremiumLoading() {
    const loadingSequence = document.createElement('div');
    loadingSequence.className = 'loading-sequence';
    loadingSequence.innerHTML = `
        <div class="loading-content">
            <div class="loading-logo">DEWANG</div>
            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>
        </div>
    `;
    
    document.body.appendChild(loadingSequence);
    
    // Hide loading sequence after delay
    setTimeout(() => {
        loadingSequence.classList.add('hidden');
        setTimeout(() => {
            loadingSequence.remove();
        }, 500);
    }, 2500);
}

// Enhanced Parallax Effect
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.hero, .floating-shapes .shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            if (element.classList.contains('hero')) {
                element.style.transform = `translate3d(0, ${rate}px, 0)`;
            } else {
                const speed = Math.random() * 0.5 + 0.2;
                element.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
            }
        });
    });
}

// Performance Optimizations
function initPerformanceOptimizations() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Add GPU acceleration to animated elements
    const animatedElements = document.querySelectorAll('.btn, .project-card, .skill-bar-fill, .nav-link');
    animatedElements.forEach(el => {
        el.classList.add('gpu-accelerated');
    });
}

// Enhanced Theme Toggle with Smooth Transition
function initEnhancedThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    themeToggle.addEventListener('click', () => {
        // Add transition class
        document.body.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });
}

// Initialize all premium features
function initPremiumFeatures() {
    initPremiumLoading();
    initMagneticCursor();
    initPremiumScrollAnimations();
    initParallaxEffect();
    initPerformanceOptimizations();
    initEnhancedThemeToggle();
}

// Update the main initialization to include premium features
const originalInitializePortfolio = initializePortfolio;
initializePortfolio = function() {
    originalInitializePortfolio();
    initPremiumFeatures();
    initAchievementsCarousel();
};

// ===== ACHIEVEMENTS 3D CARD STACK =====
function initAchievementsCarousel() {
    const container = document.querySelector('.achievements-3d-container');
    const radioButtons = document.querySelectorAll('input[name="achievement-slider"]');
    
    if (!container || !radioButtons.length) return;
    
    let currentIndex = 0;
    let autoPlayInterval;
    const autoPlayDelay = 3500; // 3.5 seconds per card
    
    // Auto-play functionality - runs continuously
    function nextCard() {
        currentIndex = (currentIndex + 1) % radioButtons.length;
        radioButtons[currentIndex].checked = true;
    }
    
    function startAutoPlay() {
        // Clear any existing interval
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
        // Start continuous loop
        autoPlayInterval = setInterval(nextCard, autoPlayDelay);
    }
    
    // Update current index when user manually interacts
    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            currentIndex = index;
        });
    });
    
    // Keyboard navigation (doesn't stop auto-play)
    document.addEventListener('keydown', (e) => {
        const achievementsSection = document.getElementById('achievements');
        if (!achievementsSection) return;
        
        const rect = achievementsSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isInView) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                currentIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
                radioButtons[currentIndex].checked = true;
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                currentIndex = (currentIndex + 1) % radioButtons.length;
                radioButtons[currentIndex].checked = true;
            }
        }
    });
    
    // Touch/swipe support for mobile (doesn't stop auto-play)
    let touchStartX = 0;
    let touchEndX = 0;
    
    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next card
                currentIndex = (currentIndex + 1) % radioButtons.length;
            } else {
                // Swipe right - previous card
                currentIndex = (currentIndex - 1 + radioButtons.length) % radioButtons.length;
            }
            radioButtons[currentIndex].checked = true;
        }
    });
    
    // Start continuous auto-play on init
    startAutoPlay();
}