/* =========================================
   Neways — Interactive Behaviours
   ========================================= */

'use strict';

// --- Sticky header on scroll ---
const header = document.getElementById('header');

const handleScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
};

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll(); // run once on load


// --- Mobile nav toggle ---
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close nav when a link is clicked
navList.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});


// --- Scroll-triggered animations (Intersection Observer) ---
const animatedEls = document.querySelectorAll('[data-animate]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings within the same parent
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('[data-animate]'));
          const delay = siblings.indexOf(entry.target) * 80;
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );

  animatedEls.forEach(el => observer.observe(el));
} else {
  // Fallback: show all immediately
  animatedEls.forEach(el => el.classList.add('visible'));
}


// --- Smooth active nav link highlighting ---
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--color-text)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(section => sectionObserver.observe(section));


// --- Contact form (client-side demo) ---
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (!name || !email || !message) return;

    const submitBtn = contactForm.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    // Simulate async send
    setTimeout(() => {
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      formSuccess.hidden = false;

      setTimeout(() => {
        formSuccess.hidden = true;
      }, 5000);
    }, 1200);
  });
}


// --- Pause logo ticker on hover ---
const logoTrack = document.querySelector('.logos-section__track');

if (logoTrack) {
  logoTrack.addEventListener('mouseenter', () => {
    logoTrack.style.animationPlayState = 'paused';
  });
  logoTrack.addEventListener('mouseleave', () => {
    logoTrack.style.animationPlayState = 'running';
  });
}
