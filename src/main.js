// src/main.js
import { createNavbar, initNavbarLogic } from './components/Navbar.js';
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

  // Re-init navbar logic on every route change
  initNavbarLogic();

  if (route) {
    if (route.component) {
      try {
        pageContent.innerHTML = route.component();
        initScrollAnimations(); 

        if (path === '/sellers') {
          handleFormSubmission();
        }
      } catch (error) {
        console.error("Component Error:", error);
        pageContent.innerHTML = `<p class="py-20 text-center text-red-500 font-bold">Error loading ${route.name}.</p>`;
      }
    } else {
      // PREMIUM COMING SOON TEMPLATE
      pageContent.innerHTML = `
        <section class="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center reveal active">
          <div class="space-y-6 md:space-y-8 max-w-3xl">
            <span class="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span class="text-[10px] md:text-xs text-gray-400 font-bold tracking-widest uppercase">Coming Soon</span>
            </span>
            
            <h1 class="text-4xl md:text-7xl font-bold text-[#1a1a1a] tracking-tight leading-[1.1]">
              The ${route.name} <br class="hidden md:block"/> Experience is Arriving.
            </h1>
            
            <p class="text-base md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
              We are currently handcrafting our ${route.name.toLowerCase()} portal to provide you with the precision and excellence Benta is known for.
            </p>
            
            <div class="pt-6">
              <a href="/" class="nav-link inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-10 py-4 rounded-2xl font-bold hover:bg-black transition-all active:scale-95 shadow-xl shadow-black/10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Return to Home
              </a>
            </div>
          </div>
        </section>`;
      initScrollAnimations();
    }
  } else {
    // 404 PAGE
    pageContent.innerHTML = `
      <section class="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 class="text-[120px] md:text-[200px] font-black text-gray-50 leading-none">404</h1>
        <p class="text-xl md:text-2xl text-gray-400 -mt-8 md:-mt-12 font-medium">Page Not Found</p>
        <a href="/" class="nav-link mt-12 text-[#1a1a1a] font-bold border-b-2 border-black pb-1 hover:text-gray-500 transition-colors">Back to Safety</a>
      </section>`;
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
          <h2 class="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Thank you, ${name.split(' ')[0]}!</h2>
          <p class="text-lg md:text-xl text-gray-500 max-w-md mx-auto leading-relaxed">We'll contact you within 24 hours to discuss your property.</p>
        </div>`;
    }, 2000);
  });
}

// --- INITIALIZATION ---

function init() {
  const app = document.querySelector('#app');
  
  app.innerHTML = `
    <div id="navbar-placeholder" class="sticky top-0 z-50">${createNavbar()}</div>
    <main id="page-content"></main>
    <div id="footer-placeholder">${createFooter()}</div>
  `;
  
  initNavbarLogic(); 
  handleRouting();

  // Safeguard for slow paints
  setTimeout(() => initNavbarLogic(), 150);
}

init();

// Global SPA Link Interceptor
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('/')) {
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