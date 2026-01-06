// src/main.js
import { createNavbar } from './components/Navbar.js';
import { createFooter } from './components/Footer.js';
import { Home } from './pages/Home.js';
import { Sellers } from './pages/Sellers.js';

const routes = {
  '/': { name: 'Home', component: Home },
  '/index.html': { name: 'Home', component: Home },
  '/sellers': { name: 'Sellers', component: Sellers },
  '/buyers': { name: 'Buyers', component: null }, 
  '/blog': { name: 'Blog', component: null }
};

function handleRouting() {
  const path = window.location.pathname;
  const pageContent = document.querySelector('#page-content');
  const route = routes[path];

  if (route) {
    if (route.component) {
      try {
        pageContent.innerHTML = route.component();
        initScrollAnimations(); 

        // CORRECT PLACEMENT: Run this when the component exists
        if (path === '/sellers') {
          handleFormSubmission();
        }
      } catch (error) {
        console.error("Component Error:", error);
        pageContent.innerHTML = `<p class="py-20 text-center text-red-500">Error loading ${route.name}.</p>`;
      }
    } else {
      pageContent.innerHTML = `
        <section class="py-40 text-center animate-fadeIn">
          <span class="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-400 font-medium mb-8 inline-block">Coming Soon</span>
          <h1 class="text-6xl font-bold text-[#1a1a1a] mb-6">${route.name} Portal</h1>
          <p class="text-xl text-gray-500 max-w-xl mx-auto">Our ${route.name} experience is being handcrafted.</p>
          <a href="/" class="mt-8 inline-block px-8 py-4 bg-black text-white rounded-xl font-bold">Return Home</a>
        </section>`;
      initScrollAnimations();
    }
  } else {
    pageContent.innerHTML = `<section class="py-40 text-center"><h1 class="text-9xl font-black text-gray-100">404</h1></section>`;
  }
}

// --- SEPARATE CLEAN FUNCTIONS ---

function initScrollAnimations() {
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  const targets = document.querySelectorAll('.reveal');
  targets.forEach(target => observer.observe(target));
}

function handleFormSubmission() {
  const form = document.querySelector('#seller-form');
  const btn = document.querySelector('#submit-btn');
  
  if (!form || !btn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    btn.innerHTML = `<span class="flex items-center gap-2 italic">Sending...</span>`;
    btn.classList.add('opacity-70', 'pointer-events-none');

    setTimeout(() => {
      const nameInput = form.querySelector('input[name="fullname"]');
      const name = nameInput ? nameInput.value : "there";
      
      form.parentElement.innerHTML = `
        <div class="text-center py-12 animate-fadeIn">
          <div class="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h2 class="text-4xl font-bold text-[#1a1a1a] mb-4">Thank you, ${name.split(' ')[0]}!</h2>
          <p class="text-xl text-gray-500 max-w-md mx-auto">We'll contact you within 24 hours.</p>
        </div>`;
    }, 2000);
  });
}

// --- INITIALIZATION & LISTENERS ---

function init() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <div id="navbar-placeholder" class="sticky top-0 z-50">${createNavbar()}</div>
    <main id="page-content"></main>
    <div id="footer-placeholder">${createFooter()}</div>
  `;
  handleRouting();
}

init();

document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link && link.getAttribute('href').startsWith('/')) {
    e.preventDefault();
    window.history.pushState({}, "", link.getAttribute('href'));
    handleRouting();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

window.addEventListener('popstate', handleRouting);

window.addEventListener('scroll', () => {
  const nav = document.querySelector('#navbar-placeholder nav');
  if (nav && window.scrollY > 10) nav.classList.add('shadow-sm');
  else if (nav) nav.classList.remove('shadow-sm');
});