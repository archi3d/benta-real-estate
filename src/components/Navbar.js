// src/components/Navbar.js
export function createNavbar() {
  return `
    <nav class="flex items-center justify-between px-8 py-6 bg-white/90 backdrop-blur-md border-b border-gray-100">
     
    <a href="/" class="nav-link text-2xl font-bold tracking-tight">Benta©</a>
      
      <div class="hidden md:flex items-center gap-8 text-gray-600 font-medium">
        <a href="/buyers" class="nav-link hover:text-black">For Buyers</a>
        <a href="/sellers" class="nav-link hover:text-black">For Sellers</a>
        <a href="/blog" class="nav-link hover:text-black">Bentas Blog</a>
      </div>
      
      <button class="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-black transition-colors">
        Contact
      </button>
    </nav>
  `;
}