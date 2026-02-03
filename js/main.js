// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Simple reveal animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .about-text, .hero h1, .hero p').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
});

// Implementation of the reveal class
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ========================================
// HAMBURGER MENU
// ========================================

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const body = document.body;

// Toggle mobile menu
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

// Open/close menu
hamburger.addEventListener('click', toggleMobileMenu);
mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

// M3: Close button functionality
if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', toggleMobileMenu);
}

// Close menu when clicking on a link
document.querySelectorAll('.mobile-menu-content a').forEach(link => {
    link.addEventListener('click', () => {
        toggleMobileMenu();
    });
});

// Smooth scroll for nav links (both desktop and mobile)
document.querySelectorAll('nav a, .mobile-menu-content a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: targetSection.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Role swapping logic
const roleElement = document.getElementById('hero-role');
const roles = {
    es: ['UX/UI Designer', 'Product Designer'],
    en: ['UX/UI Designer', 'Product Designer']
};
let roleIndex = 0;
let currentLang = 'es';

function updateRole() {
    roleElement.textContent = roles[currentLang][roleIndex];
}

setInterval(() => {
    roleIndex = (roleIndex + 1) % roles[currentLang].length;
    updateRole();
}, 6000);

// ========================================
// LANGUAGE TOGGLE SYSTEM
// ========================================

const translations = {
    es: {
        nav: {
            projects: 'Proyectos',
            about: 'Sobre mí',
            contact: 'Contacto'
        },
        hero: {
            role: 'UX/UI Designer',
            subtitle: 'Especializado en crear interfaces intuitivas para productos complejos'
        },
        projects: {
            title: 'Casos de estudio',
            paydot: {
                tag: 'Fintech App',
                description: 'Plataforma de pagos digitales enfocada en la rapidez y la seguridad financiera.'
            }
        },
        about: {
            title: 'Enfoque Refinado en cada Píxel.',
            paragraph1: 'Creo que el buen diseño no es el que más se ve, sino el que mejor se siente. Mi proceso combina la investigación profunda con una estética minimalista para resolver problemas complejos.',
            paragraph2: 'Con más de 5 años de experiencia, he trabajado con startups y empresas consolidadas para elevar su presencia digital.'
        },
        footer: {
            title: '¿Tienes un proyecto en mente?',
            cta: 'Dime hola',
            copyright: '© 2026 Diseñado con refinamiento.'
        }
    },
    en: {
        nav: {
            projects: 'Projects',
            about: 'About',
            contact: 'Contact'
        },
        hero: {
            role: 'UX/UI Designer',
            subtitle: 'Specialized in creating intuitive interfaces for complex products'
        },
        projects: {
            title: 'Case Studies',
            paydot: {
                tag: 'Fintech App',
                description: 'Digital payment platform focused on speed and financial security.'
            }
        },
        about: {
            title: 'Refined Focus on Every Pixel.',
            paragraph1: 'I believe good design is not the one that is most seen, but the one that feels best. My process combines deep research with minimalist aesthetics to solve complex problems.',
            paragraph2: 'With over 5 years of experience, I have worked with startups and established companies to elevate their digital presence.'
        },
        footer: {
            title: 'Have a project in mind?',
            cta: 'Say hello',
            copyright: '© 2026 Designed with refinement.'
        }
    }
};

// Get nested translation value
function getTranslation(lang, key) {
    const keys = key.split('.');
    let value = translations[lang];

    for (const k of keys) {
        value = value[k];
        if (!value) return key;
    }

    return value;
}

// Update page language
function updateLanguage(lang) {
    currentLang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(lang, key);
        element.textContent = translation;
    });

    // Update role immediately
    updateRole();

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize language toggle
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    updateLanguage(savedLang);

    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
});
