// Manhattan Jan Kalyan Panel - Campaign Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initScrollEffects();
    initScrollAnimations();
    initContactForm();
    initSmoothScrolling();
    initCounterAnimations();
    initParallaxEffects();
    initTrackRecordTabs();
});

// Enhanced Mobile Navigation Toggle
function initMobileNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    if (mobileMenu && navMenu) {
        // Toggle mobile menu
        mobileMenu.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                // Add aria-expanded for accessibility
                mobileMenu.setAttribute('aria-expanded', 'true');
            } else {
                document.body.style.overflow = '';
                mobileMenu.setAttribute('aria-expanded', 'false');
            }
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !mobileMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close mobile menu on resize to larger screen
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // Add touch-friendly interactions
        let touchStartY = 0;
        navMenu.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        navMenu.addEventListener('touchmove', function(e) {
            const touchY = e.touches[0].clientY;
            const deltaY = touchY - touchStartY;
            
            // Close menu on swipe up
            if (deltaY < -50) {
                closeMobileMenu();
            }
        }, { passive: true });
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        mobileMenu.setAttribute('aria-expanded', 'false');
    }
}

// Track Record Tabs Functionality
function initTrackRecordTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
}

// Navbar Scroll Effects
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special handling for staggered animations
                if (entry.target.classList.contains('stagger-parent')) {
                    const children = entry.target.querySelectorAll('.stagger-child');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    const animationElements = [
        { selector: '.vision-card', class: 'fade-in' },
        { selector: '.why-star-section', class: 'slide-in-right' },
        { selector: '.team-member', class: 'fade-in stagger-child' },
        { selector: '.goal-card', class: 'fade-in stagger-child' },
        { selector: '.plan-category', class: 'slide-in-left' },
        { selector: '.pledge-content', class: 'fade-in' },
        { selector: '.vote-content', class: 'fade-in' },
        { selector: '.contact-info', class: 'slide-in-left' },
        { selector: '.contact-form', class: 'slide-in-right' }
    ];

    animationElements.forEach(({ selector, class: className }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add(className);
            observer.observe(element);
        });
    });

    // Mark stagger parents
    const staggerParents = [
        '.team-grid',
        '.goals-grid'
    ];

    staggerParents.forEach(selector => {
        const parent = document.querySelector(selector);
        if (parent) {
            parent.classList.add('stagger-parent');
            observer.observe(parent);
        }
    });
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate form
            if (validateForm(data)) {
                // Simulate form submission
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
            } else {
                showNotification('Please fill in all required fields correctly.', 'error');
            }
        });
    }
}

// Form Validation
function validateForm(data) {
    const { name, email, subject } = data;
    
    // Check required fields
    if (!name || !email || !subject) {
        return false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return false;
    }
    
    return true;
}

// Show Notification
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : '⚠'}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
}

// Counter Animations (if needed for stats)
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-target]');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const startTime = performance.now();
                
                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing function
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const current = Math.round(target * easeOut);
                    
                    counter.textContent = current;
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                }
                
                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Parallax Effects for Hero Section
function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    const starsAnimation = document.querySelector('.stars-animation');
    
    if (hero && starsAnimation) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < hero.offsetHeight) {
                starsAnimation.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

// Add Loading Animation
function showLoadingAnimation() {
    const loadingHTML = `
        <div class="loading" id="loading">
            <div class="star">⭐</div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', loadingHTML);
    
    window.addEventListener('load', function() {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.remove();
            }, 500);
        }
    });
}

// Star Rain Effect (Optional - for extra flashiness)
function createStarRain() {
    const starRain = document.createElement('div');
    starRain.className = 'star-rain';
    starRain.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    document.body.appendChild(starRain);
    
    function createStar() {
        const star = document.createElement('div');
        star.innerHTML = '⭐';
        star.style.cssText = `
            position: absolute;
            top: -50px;
            left: ${Math.random() * 100}%;
            font-size: ${Math.random() * 20 + 10}px;
            opacity: ${Math.random() * 0.8 + 0.2};
            animation: starFall ${Math.random() * 3 + 2}s linear forwards;
            color: #ffc107;
        `;
        
        starRain.appendChild(star);
        
        star.addEventListener('animationend', () => {
            star.remove();
        });
    }
    
    // Add CSS for star fall animation
    if (!document.getElementById('starfall-styles')) {
        const style = document.createElement('style');
        style.id = 'starfall-styles';
        style.textContent = `
            @keyframes starFall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Create stars periodically
    setInterval(createStar, 3000);
}

// Enhanced Scroll Animations with Stagger Effect
function addStaggeredAnimations() {
    const staggerElements = document.querySelectorAll('.team-member, .goal-card');
    
    staggerElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
}

// Initialize additional effects on load
window.addEventListener('load', function() {
    addStaggeredAnimations();
    
    // Optional: Add star rain effect (uncomment if you want it)
    // createStarRain();
});

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');
        
        if (mobileMenu && navMenu && navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            
            const bars = mobileMenu.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        }
    }
});

// Utility Functions
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
    }
}

// Performance optimized scroll handler
const optimizedScrollHandler = throttle(function() {
    // Any additional scroll-based functionality can go here
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // Could implement error reporting here
});

// Touch/Swipe Support for Mobile
let startX, startY, distX, distY;

document.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
}, { passive: true });

document.addEventListener('touchmove', function(e) {
    if (!startX || !startY) return;
    
    const touch = e.touches[0];
    distX = touch.clientX - startX;
    distY = touch.clientY - startY;
}, { passive: true });

document.addEventListener('touchend', function(e) {
    if (!distX || !distY) return;
    
    // Handle swipe gestures here if needed
    // For example, swipe to close mobile menu
    
    startX = null;
    startY = null;
    distX = null;
    distY = null;
});

// Console styling for developers
console.log('%c🌟 Manhattan Jan Kalyan Panel Campaign Website 🌟', 
    'color: #ff6b35; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%cVote For STAR - तारा सीतारा', 
    'color: #f7931e; font-size: 16px; font-weight: bold;');
console.log('%cBuilding a better future together through transparency, innovation, and care.', 
    'color: #666; font-size: 14px; font-style: italic;');
