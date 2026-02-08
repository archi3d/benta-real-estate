// src/components/Navbar.js
export function createNavbar() {
  return `
    <nav class="relative flex items-center justify-between px-6 md:px-12 py-6 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
     
      <a href="/" class="nav-link text-2xl font-bold tracking-tight text-black">Benta©</a>
      
      <div class="hidden md:flex items-center gap-8 text-gray-600 font-medium text-sm lg:text-base">
        <a href="/buyers" class="nav-link hover:text-black transition-colors">For Buyers</a>
        <a href="/sellers" class="nav-link hover:text-black transition-colors">For Sellers</a>
        <a href="/blog" class="nav-link hover:text-black transition-colors">Benta's Blog</a>
      </div>
      
      <div class="flex items-center gap-4">
        <button class="hidden sm:block bg-[#1a1a1a] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-black transition-colors active:scale-95">
          Contact
        </button>

        <button id="menu-toggle" class="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none" aria-label="Toggle Menu">
          <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 flex-col p-6 gap-4 shadow-xl md:hidden transition-all duration-300 z-50">
        <a href="/buyers" class="nav-link text-lg font-medium text-gray-700 hover:text-black py-2 border-b border-gray-50">For Buyers</a>
        <a href="/sellers" class="nav-link text-lg font-medium text-gray-700 hover:text-black py-2 border-b border-gray-50">For Sellers</a>
        <a href="/blog" class="nav-link text-lg font-medium text-gray-700 hover:text-black py-2">Benta's Blog</a>
        <button class="w-full bg-[#1a1a1a] text-white px-6 py-3 rounded-xl font-medium mt-2">
        Contact
      </button>
      </div>
    </nav>
  `;
}

export function initNavbarLogic() {
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (!toggleBtn || !mobileMenu) return;

  // Toggle Function
  const toggleMenu = (forceClose = false) => {
    const isHidden = mobileMenu.classList.contains('hidden');
    
    if (isHidden && !forceClose) {
      mobileMenu.classList.replace('hidden', 'flex');
      menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
    } else {
      mobileMenu.classList.replace('flex', 'hidden');
      menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />`;
    }
  };

  toggleBtn.addEventListener('click', () => toggleMenu());

  // Intercept all clicks on elements with the 'nav-link' class
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // 1. Close mobile menu if it's open
      toggleMenu(true);

      // 2. Handle SPA Routing
      const href = link.getAttribute('href');
      if (href && href.startsWith('/')) {
        e.preventDefault();
        window.history.pushState({}, "", href);
        
        // Dispatch popstate so main.js router picks it up
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}