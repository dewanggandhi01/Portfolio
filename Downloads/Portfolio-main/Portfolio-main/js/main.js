// Main JavaScript file for portfolio functionality

let currentGalleryPaintings = [];
let currentPaintingIndex = -1;

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
    initStatsCounter();
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
        // Refresh ScrollTrigger calculations after all assets are loaded
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
        
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

    function handleScroll() {
        const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        const scrolled = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
        
        // Navbar scroll effect  
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.remove('hidden');
        }
    }

    // Progress bar and scroll effects
    window.addEventListener('scroll', handleScroll);
    
    // Call immediately to set correct initial state
    handleScroll();

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

// ==========================================
// TECHNOLOGY STACK RIBBON SCROLLING (GSAP Marquee)
// ==========================================

let techMarqueeTimeline = null;
let spotlightInterval = null;

function initSkillsEcosystem() {
    const section = document.querySelector('.skills-ribbon-section');
    if (!section) return;

    const container = section.querySelector('.tech-ribbon-container');
    const track = section.querySelector('.tech-ribbon-track');
    if (!container || !track) return;

    // Reset timelines/intervals if re-initializing
    if (techMarqueeTimeline) {
        techMarqueeTimeline.kill();
    }
    if (spotlightInterval) {
        clearInterval(spotlightInterval);
    }


    // GSAP ScrollTrigger Entrance Animation for Ribbon Strip
    gsap.from(container, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power3.out'
    });

    // Infinite Marquee horizontal loop: slides track left by 50% (exactly half width, since HTML list is duplicated)
    // Runs right-to-left
    techMarqueeTimeline = gsap.to(track, {
        xPercent: -50,
        ease: "none",
        duration: 38, // slow luxury speed
        repeat: -1
    });

    // Pause horizontal marquee scrolling when hovering anywhere on the ribbon
    container.addEventListener('mouseenter', () => {
        gsap.to(techMarqueeTimeline, { timeScale: 0.15, duration: 1.0, ease: "power2.out" }); // gently decelerate
    });
    container.addEventListener('mouseleave', () => {
        gsap.to(techMarqueeTimeline, { timeScale: 1.0, duration: 1.0, ease: "power2.out" }); // gently accelerate back
    });

    // Featured Spotlight highlighting effect
    spotlightInterval = setInterval(() => {
        const items = Array.from(track.querySelectorAll('.tech-ribbon-item'));
        if (items.length === 0) return;

        // Pick elements that are visible and not currently hovered
        const visibleItems = items.filter(item => {
            const rect = item.getBoundingClientRect();
            return rect.left >= 0 && rect.right <= window.innerWidth && !item.matches(':hover');
        });

        const activePool = visibleItems.length > 0 ? visibleItems : items;
        const randomItem = activePool[Math.floor(Math.random() * activePool.length)];

        // Run spotlight fade/scale animation
        gsap.to(randomItem, {
            opacity: 1,
            scale: 1.1,
            duration: 1.0,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
            onComplete: () => {
                // Ensure we return cleanly to standard styles
                gsap.set(randomItem, { clearProps: "opacity,scale" });
            }
        });
    }, 4500);

    // Run background particles
    initEcosystemParticles();
}

// Canvas particle animation in skills section background
function initEcosystemParticles() {
    const canvas = document.getElementById('ecosystemParticles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = Math.min(50, Math.floor((width * height) / 30000));

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 1.5 + 0.5;
            this.speedX = Math.random() * 0.3 - 0.15;
            this.speedY = Math.random() * 0.3 - 0.15;
            this.opacity = Math.random() * 0.4 + 0.1;
            this.baseOpacity = this.opacity;
            this.fadeSpeed = Math.random() * 0.005 + 0.002;
            this.fadeDir = 1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;

            this.opacity += this.fadeDir * this.fadeSpeed;
            if (this.opacity > this.baseOpacity * 1.5 || this.opacity > 0.7) {
                this.fadeDir = -1;
            } else if (this.opacity < this.baseOpacity * 0.5 || this.opacity < 0.05) {
                this.fadeDir = 1;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    });
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

// Projects filter functionality (Awwwards Fullscreen Scroll Showcase)
function initProjectsFilter() {
    generateTrackProjects();
    initProjectsScrollTimeline();
}

// Populate project cards inside the horizontal tracks dynamically
function generateTrackProjects() {
    const tracks = {
        'engineering': document.getElementById('track-engineering'),
        'ai': document.getElementById('track-ai'),
        'creative': document.getElementById('track-creative'),
        'content': document.getElementById('track-content')
    };

    const categoryMapping = {
        'engineering': p => p.category === 'web' || p.category === 'automation',
        'ai': p => p.category === 'ai' || p.category === 'data',
        'creative': p => p.category === 'creative',
        'content': p => p.category === 'art'
    };

    Object.keys(tracks).forEach(cat => {
        const trackEl = tracks[cat];
        if (!trackEl) return;

        // Save and restore the header element
        const header = trackEl.querySelector('.track-header');
        trackEl.innerHTML = '';
        if (header) {
            trackEl.appendChild(header);
        }

        const filtered = projectsData.filter(categoryMapping[cat]);
        
        if (cat === 'content') {
            // Populate global array for gallery modal slideshow navigation
            currentGalleryPaintings = filtered;

            // Render Art Exhibition paintings with masonry collage styling
            filtered.forEach(project => {
                const card = document.createElement('div');
                const gridClass = project.gridClass || 'painting-card-normal';
                card.className = `painting-track-card ${gridClass}`;
                card.setAttribute('data-project-id', project.id);
                card.innerHTML = `
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="painting-card-overlay">
                        <span class="painting-overlay-title">${project.title}</span>
                        <span class="painting-overlay-medium">${project.tech}</span>
                    </div>
                `;
                
                // Add load handler to this image to refresh ScrollTrigger calculations once the image loads
                const img = card.querySelector('img');
                if (img) {
                    img.addEventListener('load', function() {
                        if (typeof ScrollTrigger !== 'undefined') {
                            ScrollTrigger.refresh();
                        }
                    });
                }
                
                // Click handler for the entire painting card to open the slideshow modal
                card.addEventListener('click', function(e) {
                    const pid = parseInt(this.getAttribute('data-project-id'));
                    showProjectModal(pid);
                });
                
                trackEl.appendChild(card);
            });


        } else {
            // Standard projects cards
            filtered.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-track-card';
                card.innerHTML = `
                    <div class="track-card-header">
                        <span class="track-card-tech">${project.tech}</span>
                        <h4 class="track-card-title">${project.title}</h4>
                    </div>
                    <p class="track-card-desc">${project.description}</p>
                    <div class="track-card-links">
                        ${project.links.github && project.links.github !== '#' ? `
                        <a href="${project.links.github}" class="track-card-link" target="_blank">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        ` : ''}
                        ${project.links.demo && project.links.demo !== '#' ? `
                        <a href="${project.links.demo}" class="track-card-link" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                        ` : ''}
                        <button class="track-card-btn view-details" data-project-id="${project.id}">
                            <i class="fas fa-info-circle"></i> Details
                        </button>
                    </div>
                `;
                trackEl.appendChild(card);
            });

            // Click handler for the entire card (excluding anchor links)
            trackEl.querySelectorAll('.project-track-card').forEach(card => {
                card.addEventListener('click', function(e) {
                    if (e.target.closest('a')) {
                        return;
                    }
                    const btn = this.querySelector('.view-details');
                    if (btn) {
                        const pid = parseInt(btn.getAttribute('data-project-id'));
                        showProjectModal(pid);
                    }
                });
            });
        }
    });
}

// Setup the GSAP ScrollTrigger timeline for the scroll-driven projects section
function initProjectsScrollTimeline() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.error('GSAP or ScrollTrigger is not loaded');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const categories = ['engineering', 'ai', 'creative', 'content'];

    // Main scroll trigger timeline for projects showcase
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.projects-section',
            start: 'top top',
            end: '+=1000%', // Slower and smoother scroll speed for cards and showcase navigation
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true
        }
    });

    // Add a starting buffer so the section pins and remains in grid state for a short scroll distance
    // before the first category card starts expanding
    tl.to({}, { duration: 0.5 });

    categories.forEach((catKey, idx) => {
        const panel = document.getElementById(`panel-${catKey}`);
        const track = document.getElementById(`track-${catKey}`);
        if (!panel || !track) return;

        const labelName = `stage_${catKey}`;
        const isContent = (catKey === 'content');

        // 1. Expand active card to fullscreen, fade others
        tl.to(`.projects-grid .project-card:not([data-category="${catKey}"])`, {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: 'power2.out'
        }, labelName)
        .to('.projects-right', {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: 'power2.out'
        }, labelName)
        .to(`.projects-grid .project-card[data-category="${catKey}"]`, {
            scale: 3,
            borderRadius: 0,
            opacity: 0,
            zIndex: 200, // Elevate active card above the fullscreen panel during expand transition
            duration: 1.0,
            ease: 'power2.inOut'
        }, labelName)
        .fromTo(panel, {
            opacity: 0,
            scale: 0.95,
            display: 'none',
            pointerEvents: 'none'
        }, {
            opacity: 1,
            scale: 1,
            display: isContent ? 'block' : 'flex',
            pointerEvents: 'auto',
            duration: 1.0,
            ease: 'power2.inOut'
        }, labelName);

        // Add stagger reveal entrance animation for paintings in content category
        if (isContent) {
            tl.fromTo('#track-content .painting-track-card', {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                stagger: 0.08,
                duration: 0.8,
                ease: 'power2.out'
            }, `${labelName}+=0.2`);
        }

        // 2. Scroll translation for this panel
        if (isContent) {
            // Vertical scroll for masonry gallery wall
            tl.to(track, {
                y: () => {
                    const scrollAmount = track.scrollHeight - window.innerHeight;
                    return -Math.max(0, scrollAmount + 80); // Include some bottom padding space
                },
                ease: 'none',
                duration: 2.5
            });
        } else {
            // Horizontal scroll for card carousels
            tl.to(track, {
                x: () => {
                    const scrollAmount = track.scrollWidth - window.innerWidth;
                    return -Math.max(0, scrollAmount);
                },
                ease: 'none',
                duration: 2.5
            });
        }

        // 3. Collapse panel back to grid
        const outLabel = `stage_${catKey}_out`;
        tl.to(panel, {
            opacity: 0,
            scale: 0.95,
            display: 'none',
            pointerEvents: 'none',
            duration: 1.0,
            ease: 'power2.inOut'
        }, outLabel)
        .to(`.projects-grid .project-card[data-category="${catKey}"]`, {
            scale: 1,
            borderRadius: '8px',
            opacity: 1,
            zIndex: 3, // Restore original z-index
            duration: 1.0,
            ease: 'power2.inOut'
        }, outLabel)
        .to(`.projects-grid .project-card:not([data-category="${catKey}"])`, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, outLabel)
        .to('.projects-right', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, outLabel);

        // Add a small spacer delay between stages (except the last one)
        if (idx < categories.length - 1) {
            tl.to({}, { duration: 0.5 });
        }
    });
}

function getCategoryName(category) {
    const categoryNames = {
        'ai': 'AI/ML',
        'web': 'Full-Stack',
        'data': 'Data Science',
        'automation': 'Automation',
        'creative': 'Creative Work',
        'content': 'Content Creation'
    };
    return categoryNames[category] || category.toUpperCase();
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
    
    const catName = getCategoryName(project.category);
    
    // Check if it's a painting project (art gallery)
    if (project.category === 'art') {
        currentPaintingIndex = currentGalleryPaintings.findIndex(p => p.id === projectId);
        if (currentPaintingIndex === -1) {
            // Fallback if stashed array is empty
            currentGalleryPaintings = projectsData.filter(p => p.category === 'art');
            currentPaintingIndex = currentGalleryPaintings.findIndex(p => p.id === projectId);
        }

        renderPaintingModal(project);
        
        // Make modal active
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Trigger initial GSAP animations for art gallery modal
        if (typeof gsap !== 'undefined') {
            gsap.set(modal, { opacity: 0 });
            gsap.set('.gallery-modal-img', { scale: 0.9, opacity: 0 });
            gsap.set('.gallery-modal-details', { y: 25, opacity: 0 });

            const tl = gsap.timeline();
            tl.to(modal, {
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out'
            })
            .to('.gallery-modal-img', {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out'
            }, '-=0.1')
            .to('.gallery-modal-details', {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out'
            }, '-=0.3');
        }
        
        // Register keyboard slideshow keys listener
        document.addEventListener('keydown', handleGalleryKeyPress);
        return;
    }
    
    // Assign Role & Duration mappings
    let role = 'Lead Developer';
    let duration = '2 - 3 Months';
    
    switch(project.id) {
        case 1: role = 'Lead AI & Blockchain Developer'; duration = '3 Months'; break;
        case 2: role = 'AI Developer'; duration = '2 Months'; break;
        case 3: role = 'AI Developer'; duration = '2 Months'; break;
        case 4: role = 'Lead UI/UX & AI Developer'; duration = '3 Months'; break;
        case 6: role = 'Data Analyst'; duration = '1 Month'; break;
        case 7: role = 'ML Competitor'; duration = 'Ongoing'; break;
        case 8: role = 'Lead Developer'; duration = '2 Months'; break;
        case 9: role = 'Full-Stack Developer'; duration = '3 Months'; break;
        case 10: role = 'Full-Stack Developer'; duration = '2 Months'; break;
        case 11: role = 'AI Engineer'; duration = '3 Months'; break;
        case 12: role = 'Author / Poet'; duration = '1 Month'; break;
        case 13: role = 'Digital Artist'; duration = 'Ongoing'; break;
        case 14: role = 'Video Producer'; duration = '2 Months'; break;
        case 15: role = 'Content Creator'; duration = 'Ongoing'; break;
        case 16: role = 'Full-Stack & AI Developer'; duration = '2 Months'; break;
        default:
            if (project.category === 'ai') role = 'AI / ML Developer';
            else if (project.category === 'data') role = 'Data Analyst / Scientist';
            else if (project.category === 'web') role = 'Full-Stack Developer';
            else if (project.category === 'automation') role = 'Automation Engineer';
            else if (project.category === 'creative') role = 'Creative Director / Designer';
            else if (project.category === 'content') role = 'Content Creator / Producer';
    }

    modalBody.innerHTML = `
        <div class="project-modal">
            <!-- Background Watermark Title -->
            <div class="modal-bg-title">${project.title}</div>
            
            <!-- Left Panel: Large Visual Project Image / Fallback -->
            <div class="modal-image">
                ${project.image ? `
                    <img src="${project.image}" alt="${project.title}">
                ` : `
                    <div class="fallback-image-placeholder">
                        <div class="floating-brand-logo">${catName}</div>
                        <div class="placeholder-watermark">${project.title}</div>
                    </div>
                `}
                ${project.links.demo && project.links.demo !== '#' ? `
                    <a href="${project.links.demo}" class="view-btn" target="_blank">View Project</a>
                ` : ''}
            </div>
            
            <!-- Right Panel: Structured Content -->
            <div class="modal-content-panel">
                <span class="year">// ${project.year}</span>
                <h1>${project.title}</h1>
                
                <p>${project.longDescription}</p>
                
                <!-- Tech Stack Pills -->
                <div class="modal-tech-stack">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                
                <!-- Metadata Table Grid -->
                <div class="modal-meta-grid">
                    <div class="meta-item">
                        <span class="meta-label">Category</span>
                        <span class="meta-value">${catName}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Duration</span>
                        <span class="meta-value">${duration}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Role</span>
                        <span class="meta-value">${role}</span>
                    </div>
                </div>
                
                <!-- Action Buttons -->
                <div class="modal-action-buttons">
                    ${project.links.github && project.links.github !== '#' ? `
                        <a href="${project.links.github}" class="modal-btn modal-btn-primary" target="_blank">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                    ` : ''}
                    ${project.links.demo && project.links.demo !== '#' ? `
                        <a href="${project.links.demo}" class="modal-btn modal-btn-secondary" target="_blank">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;

    // Make modal active
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Trigger GSAP animations
    if (typeof gsap !== 'undefined') {
        // Reset properties before animation to prevent flashes
        gsap.set(modal, { opacity: 0 });
        gsap.set('.modal-image', { x: -100, opacity: 0 });
        gsap.set('.modal-content-panel', { x: 100, opacity: 0 });
        gsap.set('.modal-bg-title', { scale: 0.8, opacity: 0 });

        const tl = gsap.timeline();
        tl.to(modal, {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
        })
        .to('.modal-image', {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out'
        }, '-=0.2')
        .to('.modal-content-panel', {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out'
        }, '-=0.6')
        .to('.modal-bg-title', {
            scale: 1,
            opacity: 0.02,
            duration: 0.9,
            ease: 'power2.out'
        }, '-=0.5');
    }
}

// Render dynamic art slideshow contents inside modal
function renderPaintingModal(project) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div class="gallery-modal-layout">
            <!-- Left Navigation Button -->
            <button class="gallery-nav-btn prev-btn" aria-label="Previous painting">
                <i class="fas fa-chevron-left"></i>
            </button>
            
            <!-- Center Viewport -->
            <div class="gallery-modal-viewport">
                <img src="${project.image}" alt="${project.title}" class="gallery-modal-img">
            </div>
            
            <!-- Right Navigation Button -->
            <button class="gallery-nav-btn next-btn" aria-label="Next painting">
                <i class="fas fa-chevron-right"></i>
            </button>
            
            <!-- Bottom Details -->
            <div class="gallery-modal-details">
                <div class="gallery-modal-meta">
                    <span class="gallery-modal-medium">${project.tech}</span>
                </div>
                <h2 class="gallery-modal-title">${project.title}</h2>
                <p class="gallery-modal-desc">${project.description || ''}</p>
            </div>
        </div>
    `;

    // Hook up click listeners for prev/next
    modalBody.querySelector('.prev-btn').addEventListener('click', function(e) {
        e.stopPropagation();
        navigateGallery(-1);
    });

    modalBody.querySelector('.next-btn').addEventListener('click', function(e) {
        e.stopPropagation();
        navigateGallery(1);
    });
}

// Navigate inside stashed gallery paintings with slide transition
function navigateGallery(direction) {
    if (currentPaintingIndex === -1 || currentGalleryPaintings.length === 0) return;
    
    let newIndex = currentPaintingIndex + direction;
    if (newIndex < 0) newIndex = currentGalleryPaintings.length - 1;
    if (newIndex >= currentGalleryPaintings.length) newIndex = 0;
    
    currentPaintingIndex = newIndex;
    const nextProject = currentGalleryPaintings[newIndex];
    
    const imgEl = document.querySelector('.gallery-modal-img');
    const detailsEl = document.querySelector('.gallery-modal-details');
    
    if (!imgEl || !detailsEl) return;
    
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({
            onComplete: () => {
                imgEl.src = nextProject.image;
                imgEl.alt = nextProject.title;
                
                detailsEl.innerHTML = `
                    <div class="gallery-modal-meta">
                        <span class="gallery-modal-medium">${nextProject.tech}</span>
                    </div>
                    <h2 class="gallery-modal-title">${nextProject.title}</h2>
                    <p class="gallery-modal-desc">${nextProject.description || ''}</p>
                `;
                
                gsap.fromTo(imgEl, 
                    { opacity: 0, x: direction * 50, scale: 0.95 },
                    { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: 'power2.out' }
                );
                
                gsap.fromTo(detailsEl,
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
                );
            }
        });
        
        tl.to(imgEl, { opacity: 0, x: -direction * 50, scale: 0.95, duration: 0.3, ease: 'power2.in' })
          .to(detailsEl, { opacity: 0, y: -10, duration: 0.2, ease: 'power2.in' }, '-=0.2');
    } else {
        imgEl.src = nextProject.image;
        imgEl.alt = nextProject.title;
        detailsEl.innerHTML = `
            <div class="gallery-modal-meta">
                <span class="gallery-modal-medium">${nextProject.tech}</span>
            </div>
            <h2 class="gallery-modal-title">${nextProject.title}</h2>
            <p class="gallery-modal-desc">${nextProject.description || ''}</p>
        `;
    }
}

// Handle keyboard arrows slideshow triggers
function handleGalleryKeyPress(e) {
    if (e.key === 'ArrowLeft') {
        navigateGallery(-1);
    } else if (e.key === 'ArrowRight') {
        navigateGallery(1);
    }
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    const isArtModal = document.querySelector('.gallery-modal-layout') !== null;
    
    // Cleanup keyboard listeners
    document.removeEventListener('keydown', handleGalleryKeyPress);
    
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({
            onComplete: () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                document.getElementById('modal-body').innerHTML = ''; // Prevent memory leaks or residues
            }
        });
        
        if (isArtModal) {
            tl.to('.gallery-modal-img', {
                scale: 0.9,
                opacity: 0,
                duration: 0.35,
                ease: 'power2.in'
            })
            .to('.gallery-modal-details', {
                y: 20,
                opacity: 0,
                duration: 0.25,
                ease: 'power2.in'
            }, '-=0.2')
            .to(modal, {
                opacity: 0,
                duration: 0.25,
                ease: 'power2.in'
            }, '-=0.15');
        } else {
            tl.to('.modal-image', {
                x: -50,
                opacity: 0,
                duration: 0.4,
                ease: 'power3.in'
            })
            .to('.modal-content-panel', {
                x: 50,
                opacity: 0,
                duration: 0.4,
                ease: 'power3.in'
            }, '-=0.4')
            .to(modal, {
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in'
            }, '-=0.2');
        }
    } else {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.getElementById('modal-body').innerHTML = '';
    }
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
    if (!backToTopBtn) return;
    
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
    const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = Math.random() * 0.5 + 0.2;
            element.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
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
    initEducationShowcase(); // Initialize first as it appears higher in the DOM (allows correct ScrollTrigger pin spacing calculations)
    initProjectsFilter();    // Initialize second as it appears below education in the DOM
    initSkillsEcosystem();   // Initialize third as it appears below projects in the DOM (DOM index order)
    initAchievementsReveal(); // Initialize fourth as it appears below skills in the DOM
    initContactAnimations(); // Initialize fifth as it appears below achievements in the DOM
};

// ===== ACHIEVEMENTS INTERACTIVE STACKED-CARD SHOWCASE =====
function updateAchievementsStack(activeIndex) {
    const cards = document.querySelectorAll('.achievement-stack-card');
    const isMobile = window.innerWidth <= 768;
    
    // Update counters and background watermarks
    const currentCounter = document.querySelector('.achievements-counter .counter-current');
    if (currentCounter) {
        currentCounter.textContent = String(activeIndex + 1).padStart(2, '0');
    }
    const bgNum = document.getElementById('achievements-bg-num');
    if (bgNum) {
        bgNum.textContent = String(activeIndex + 1).padStart(2, '0');
    }

    cards.forEach((card, idx) => {
        const offset = idx - activeIndex;
        const absOffset = Math.abs(offset);
        
        if (isMobile) {
            if (offset === 0) {
                gsap.to(card, {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    x: 0,
                    y: 0,
                    zIndex: 5,
                    pointerEvents: 'auto',
                    duration: 0.6,
                    ease: 'power3.out'
                });
                card.classList.add('active');
            } else {
                gsap.to(card, {
                    opacity: 0,
                    scale: 0.8,
                    rotation: offset < 0 ? -10 : 10,
                    x: offset < 0 ? -300 : 300,
                    y: 0,
                    zIndex: 0,
                    pointerEvents: 'none',
                    duration: 0.6,
                    ease: 'power3.out'
                });
                card.classList.remove('active');
            }
            return;
        }

        // Desktop logic with 3D layers and depth
        if (absOffset > 2) {
            gsap.to(card, {
                opacity: 0,
                scale: 0.6,
                rotation: 0,
                x: offset > 0 ? 500 : -500,
                y: 50,
                zIndex: 0,
                pointerEvents: 'none',
                duration: 0.8,
                ease: 'power3.out'
            });
            card.classList.remove('active');
        } else if (offset === 0) {
            gsap.to(card, {
                opacity: 1,
                scale: 1,
                rotation: 0,
                x: 0,
                y: -15, // Lifted slightly
                zIndex: 5,
                pointerEvents: 'auto',
                duration: 0.8,
                ease: 'power3.out'
            });
            card.classList.add('active');
        } else if (absOffset === 1) {
            const rot = offset < 0 ? -8 : 8;
            const xShift = offset < 0 ? -240 : 240;
            gsap.to(card, {
                opacity: 0.7,
                scale: 0.9,
                rotation: rot,
                x: xShift,
                y: 0,
                zIndex: 3,
                pointerEvents: 'none',
                duration: 0.8,
                ease: 'power3.out'
            });
            card.classList.remove('active');
        } else if (absOffset === 2) {
            const rot = offset < 0 ? -16 : 16;
            const xShift = offset < 0 ? -440 : 440;
            gsap.to(card, {
                opacity: 0.3,
                scale: 0.75,
                rotation: rot,
                x: xShift,
                y: 15,
                zIndex: 1,
                pointerEvents: 'none',
                duration: 0.8,
                ease: 'power3.out'
            });
            card.classList.remove('active');
        }
    });
}

// ===== ACHIEVEMENTS DETAIL MODAL DATA =====
const achievementsDetailsData = {
    0: {
        title: "HackHeaven 2.0 Finalist",
        org: "GDG On Campus",
        year: "2025",
        description: "Selected among the top 12 finalist teams out of 200+ teams across the region. Developed 'AI Toolkit', a plug-and-play developer integration tool designed to streamline AI integration for developers.",
        details: [
            "Presented the prototype directly to Google Developer Group mentors and industry experts.",
            "Designed clean APIs and lightweight SDKs enabling quick integration in under 5 minutes.",
            "Leveraged Gemini API and vector embeddings for advanced contextual recommendations.",
            "Awarded Certificate of Excellence and secured mentorship opportunities."
        ],
        images: ["assets/hack1.jpeg", "assets/hack2.jpeg"]
    },
    1: {
        title: "IITM BS Certification",
        org: "IIT Madras",
        year: "2024",
        description: "Completed the Foundational Level in Programming and Data Science at India's premier technical institute, IIT Madras. Maintained high academic performance, earning multiple course badges.",
        details: [
            "Rigorous coursework covering Python programming, Statistics for Data Science, Mathematics, and Database Systems.",
            "Earned Subject Badges for scoring top grades in multiple foundation subjects.",
            "Gained hands-on experience in computational thinking and structured problem solving.",
            "Collaborated on multiple online academic projects and coding assignments."
        ],
        images: ["assets/badges_in_iitm.png"]
    },
    2: {
        title: "NCC 'C' Certificate",
        org: "ABES Engineering College",
        year: "2026",
        description: "Proud holder of the prestigious NCC 'C' Certificate. Served as a senior cadet leading recruit training, community outreach, and disaster response drills.",
        details: [
            "Demonstrated outstanding leadership, discipline, and teamwork during national camps.",
            "Organized annual parade events, drill training, and weapon handling sessions.",
            "Led community service campaigns including blood donation drives and tree plantation events.",
            "Maintained strict physical fitness standards and mentored 50+ junior cadets."
        ],
        images: ["assets/ncc-c certificate.jpeg", "assets/ncc.jpeg", "assets/ncc1.jpeg"]
    },
    3: {
        title: "Paranox Finalist",
        org: "Paranox 2.0",
        year: "2024",
        description: "Stood out among 1500+ teams during an intense, high-pressure 30-hour collaborative hackathon. Focused on building data-driven analytical tools for real-world impact.",
        details: [
            "Worked round-the-clock with teammate to clean, preprocess, and model complex datasets.",
            "Developed an interactive dashboard visualizing real-time predictive analytics.",
            "Utilized regression and time-series models to forecast growth trends.",
            "Highly commended by the jury for analytical accuracy and UX design."
        ],
        images: [
            "assets/1763550705080.jpeg", 
            "assets/1763550705112.jpeg", 
            "assets/1763550716186.jpeg", 
            "assets/1763550717023.jpeg"
        ]
    }
};

function showAchievementModal(idx) {
    const data = achievementsDetailsData[idx];
    if (!data) return;

    const modal = document.getElementById('achievement-modal');
    if (!modal) return;

    modal.querySelector('.modal-card-org').textContent = data.org;
    modal.querySelector('.modal-card-title').textContent = data.title;
    modal.querySelector('.modal-card-year').textContent = data.year;
    modal.querySelector('.modal-card-desc').textContent = data.description;

    const highlightsList = modal.querySelector('.modal-highlights-list');
    highlightsList.innerHTML = '';
    data.details.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        highlightsList.appendChild(li);
    });

    const mainImg = document.getElementById('modal-gallery-active-img');
    const thumbsContainer = document.getElementById('modal-gallery-thumbs');
    
    if (data.images && data.images.length > 0) {
        mainImg.src = data.images[0];
        mainImg.alt = data.title;
        mainImg.style.display = 'block';
        
        thumbsContainer.innerHTML = '';
        if (data.images.length > 1) {
            data.images.forEach((imgSrc, i) => {
                const thumb = document.createElement('div');
                thumb.className = `modal-thumb ${i === 0 ? 'active' : ''}`;
                thumb.innerHTML = `<img src="${imgSrc}" alt="Thumbnail ${i + 1}">`;
                thumb.addEventListener('click', () => {
                    mainImg.style.opacity = 0;
                    setTimeout(() => {
                        mainImg.src = imgSrc;
                        mainImg.style.opacity = 1;
                    }, 150);
                    
                    thumbsContainer.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                });
                thumbsContainer.appendChild(thumb);
            });
            thumbsContainer.style.display = 'flex';
        } else {
            thumbsContainer.style.display = 'none';
        }
    } else {
        mainImg.style.display = 'none';
        thumbsContainer.style.display = 'none';
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    const container = modal.querySelector('.achievement-modal-container');
    if (typeof gsap !== 'undefined') {
        gsap.fromTo(container, 
            { scale: 0.85, opacity: 0 }, 
            { scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out', overwrite: 'auto' }
        );
    }
}

function closeAchievementModal() {
    const modal = document.getElementById('achievement-modal');
    if (!modal) return;

    const container = modal.querySelector('.achievement-modal-container');
    if (typeof gsap !== 'undefined') {
        gsap.to(container, {
            scale: 0.85,
            opacity: 0,
            duration: 0.3,
            ease: 'power3.in',
            onComplete: () => {
                modal.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    } else {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function initAchievementsReveal() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP or ScrollTrigger is not loaded, skipping achievements reveal.');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.achievement-stack-card');
    const totalCards = cards.length;
    if (totalCards === 0) return;

    // Set initial layout
    updateAchievementsStack(0);

    const trigger = ScrollTrigger.create({
        trigger: "#achievements",
        start: "top top",
        end: `+=${totalCards * 700}`, // 700px of scroll per card
        pin: true,
        scrub: 1.0,
        id: 'achievements-trigger',
        invalidateOnRefresh: true,
        onUpdate: (self) => {
            const progress = self.progress;
            let activeIndex = Math.floor(progress * totalCards);
            if (activeIndex >= totalCards) activeIndex = totalCards - 1;
            if (activeIndex < 0) activeIndex = 0;
            
            updateAchievementsStack(activeIndex);
        }
    });

    // Touch swipe left/right navigation for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    const achievementsSection = document.getElementById('achievements');
    
    if (achievementsSection) {
        achievementsSection.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        achievementsSection.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchEndX - touchStartX;
            if (Math.abs(diff) > 50) {
                const step = (trigger.end - trigger.start) / totalCards;
                const currentScroll = window.scrollY;
                const direction = diff < 0 ? 1 : -1;
                const targetScroll = currentScroll + direction * step;
                window.scrollTo({
                    top: Math.max(trigger.start, Math.min(trigger.end, targetScroll)),
                    behavior: 'smooth'
                });
            }
        }, { passive: true });
    }

    // Card click navigation
    cards.forEach((card, idx) => {
        card.addEventListener('click', () => {
            if (card.classList.contains('active')) {
                if (achievementsDetailsData[idx]) {
                    showAchievementModal(idx);
                }
            } else {
                const step = (trigger.end - trigger.start) / totalCards;
                const targetScroll = trigger.start + idx * step + 50;
                window.scrollTo({
                    top: targetScroll,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Register close listeners for achievement modal
    const achModal = document.getElementById('achievement-modal');
    if (achModal) {
        const closeBtn = document.getElementById('achievement-modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeAchievementModal);
        }
        achModal.addEventListener('click', (e) => {
            if (e.target === achModal) {
                closeAchievementModal();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && achModal.classList.contains('open')) {
                closeAchievementModal();
            }
        });
    }

    // Recalculate layout on resize
    window.addEventListener('resize', () => {
        const triggerObj = ScrollTrigger.getById('achievements-trigger');
        if (triggerObj) {
            const progress = triggerObj.progress;
            let activeIndex = Math.floor(progress * totalCards);
            if (activeIndex >= totalCards) activeIndex = totalCards - 1;
            if (activeIndex < 0) activeIndex = 0;
            updateAchievementsStack(activeIndex);
        }
    });
}

// ===== CONTACT SECTION ANIMATIONS =====
function initContactAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP or ScrollTrigger is not loaded, skipping contact animations.');
        return;
    }
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Header timeline trigger
    const headerTl = gsap.timeline({
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });
    
    headerTl.from('#contact .contact-label', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out'
    }).from('#contact .contact-title', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.4');

    // Left info blocks reveal
    gsap.from('#contact .info-block', {
        scrollTrigger: {
            trigger: '#contact .contact-left',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Form fields staggered reveal
    gsap.from('#contact .form-group-new, #contact .clear-btn-outlined, #contact .submit-btn-pill', {
        scrollTrigger: {
            trigger: '#contact .premium-contact-form',
            start: 'top 75%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // Bottom contact bar fade-in
    gsap.from('#contact .bottom-contact-bar', {
        scrollTrigger: {
            trigger: '#contact .bottom-contact-bar',
            start: 'top 90%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out'
    });
}

// ===== EDUCATION SHOWCASE DATA AND FUNCTIONS =====
const educationData = [
  {
    id: "01",
    title: "Xth Standard",
    school: "Krishna International School",
    year: "2020 – 2021",
    percentage: "93.2%",
    description: "Completed secondary education with strong academic foundation in Mathematics and Science."
  },
  {
    id: "02",
    title: "XIIth Standard",
    school: "Krishna International School",
    year: "2022 – 2023",
    percentage: "93.6%",
    description: "Completed senior secondary education with focus on Physics, Chemistry and Mathematics."
  },
  {
    id: "03",
    title: "B.Tech Computer Science and Engineering",
    school: "ABES Engineering College",
    year: "2023 – 2027",
    cgpa: "8.5",
    description: "Pursuing Computer Science and Engineering with focus on software development, AI systems, algorithms and full stack development."
  },
  {
    id: "04",
    title: "BS Data Science",
    school: "Indian Institute of Technology Madras",
    year: "2023 – 2027",
    cgpa: "7.0",
    description: "Pursuing BS Degree in Data Science with specialization in machine learning, analytics and statistical modelling."
  }
];

let eduCurrentIndex = -1;
let dotState = { angle: 0 };
let dotTween = null;

function updateEducation(index) {
    if (index === eduCurrentIndex) return;
    
    // Update active state on points
    const points = document.querySelectorAll('.point');
    points.forEach((item, idx) => {
        if (idx === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Update right content with transition
    const contentBox = document.getElementById('content-box');
    if (contentBox) {
        contentBox.style.opacity = '0';
        contentBox.style.transform = 'translateY(15px)';
        
        setTimeout(() => {
            const data = educationData[index];
            document.getElementById('edu-id').textContent = data.id;
            document.getElementById('edu-title').textContent = data.title;
            
            // Format institution, duration, and grade dynamically
            let detailsHTML = `<span style="font-weight: 700; color: #111111;">${data.school}</span>`;
            if (data.year) {
                detailsHTML += ` <span style="font-size: 1.1rem; color: #6b6b6b; font-weight: normal; margin-left: 10px;">(${data.year})</span>`;
            }
            if (data.cgpa) {
                detailsHTML += `<div style="font-size: 1.2rem; color: #ff5533; font-weight: 600; margin-top: 8px; letter-spacing: 1px;">CGPA: ${data.cgpa}</div>`;
            }
            if (data.percentage) {
                detailsHTML += `<div style="font-size: 1.2rem; color: #ff5533; font-weight: 600; margin-top: 8px; letter-spacing: 1px;">Percentage: ${data.percentage}</div>`;
            }
            
            document.getElementById('edu-school').innerHTML = detailsHTML;
            document.getElementById('edu-description').textContent = data.description;
            
            contentBox.style.opacity = '1';
            contentBox.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Smoothly animate the indicator dot along the circumference path
    const isMobile = window.innerWidth <= 1024;
    const circleEl = document.querySelector('.circle');
    const indicator = document.querySelector('.circle .indicator');
    
    if (circleEl && indicator) {
        const radius = circleEl.clientWidth / 2;
        const center = radius;
        
        // Desktop: active positions are 0, 90, 180, 270 deg
        // Mobile: active positions are 270 (top), 360 (right), 90 (bottom), 180 (left) deg
        const targetAngle = isMobile ? (270 + index * 90) : (index * 90);
        
        if (dotTween) dotTween.kill();
        
        if (eduCurrentIndex === -1) {
            dotState.angle = targetAngle;
            const rad = targetAngle * Math.PI / 180;
            const x = center + radius * Math.cos(rad);
            const y = center + radius * Math.sin(rad);
            gsap.set(indicator, { left: x, top: y });
        } else {
            dotTween = gsap.to(dotState, {
                angle: targetAngle,
                duration: 0.8,
                ease: "power3.out",
                onUpdate: () => {
                    const rad = dotState.angle * Math.PI / 180;
                    const x = center + radius * Math.cos(rad);
                    const y = center + radius * Math.sin(rad);
                    gsap.set(indicator, { left: x, top: y });
                }
            });
        }
    }
    
    eduCurrentIndex = index;
}

function initEducationShowcase() {
    const section = document.querySelector('.education');
    if (!section) return;

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.error('GSAP or ScrollTrigger is not loaded');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    // Desktop
    mm.add("(min-width: 1025px)", () => {
        const wheel = document.querySelector('.circle');
        const eduTrigger = ScrollTrigger.create({
            trigger: ".education",
            start: "top top",
            end: "+=5000",
            scrub: 1.5, // Smooth elegant scrub lag
            pin: true,
            onUpdate: (self) => {
                const progress = self.progress;
                // Rotate the circle from 0 to -270 degrees
                const rotationVal = - (progress * 270);
                
                gsap.set(wheel, { rotation: rotationVal });
                
                // Counter-rotate each point (including its label) so they stay upright by setting the CSS variable
                gsap.set(".point", { 
                    "--point-rotation": `${-rotationVal}deg`
                });

                // Update active index
                const index = Math.min(3, Math.floor(progress * 4));
                updateEducation(index);
            }
        });

        // Click handler for desktop
        const points = document.querySelectorAll('.point');
        const clickHandlers = [];
        
        points.forEach((item, idx) => {
            const handler = () => {
                const scrollPos = eduTrigger.start + (idx / 3) * 5000;
                window.scrollTo({
                    top: scrollPos + 2,
                    behavior: 'smooth'
                });
            };
            item.addEventListener('click', handler);
            clickHandlers.push({ el: item, fn: handler });
        });

        // Initialize state
        eduCurrentIndex = -1;
        updateEducation(0);

        return () => {
            clickHandlers.forEach(h => h.el.removeEventListener('click', h.fn));
            if (eduTrigger) eduTrigger.kill();
        };
    });

    // Mobile/Tablet
    mm.add("(max-width: 1024px)", () => {
        const wheel = document.querySelector('.circle');
        if (wheel) wheel.style.transform = '';
        
        const points = document.querySelectorAll('.point');
        points.forEach((item, idx) => {
            item.style.transform = '';
        });
        
        // Reset state
        eduCurrentIndex = -1; 
        updateEducation(0);

        // Click handler for mobile
        const clickHandlers = [];
        points.forEach((item, idx) => {
            const handler = () => {
                updateEducation(idx);
            };
            item.addEventListener('click', handler);
            clickHandlers.push({ el: item, fn: handler });
        });

        return () => {
            clickHandlers.forEach(h => h.el.removeEventListener('click', h.fn));
        };
    });
}
