// src/components/Hero.js
export function createHero() {
  return `
    <section class="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 overflow-hidden">
      
      <div class="w-full lg:w-1/2 space-y-6 md:space-y-8 reveal">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
          <span class="text-xs md:text-sm text-gray-600 font-medium">Trusted by 1,200+ families</span>
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
          Helping Buyers Find <span class="text-gray-400">Homes</span> and Sellers Get <span class="text-gray-400">Results</span>.
        </h1>
        
        <p class="text-base md:text-xl text-gray-500 leading-relaxed max-w-lg">
          From buying to selling, we handle every step with precision, discretion, and a tailored approach that maximizes your property's potential.
        </p>

        <div class="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a href="/buyers" class="nav-link w-full sm:w-auto bg-[#1a1a1a] text-white px-10 py-4 rounded-2xl font-bold flex justify-center items-center gap-3 hover:bg-black transition-all active:scale-95 shadow-xl shadow-black/10">
             Browse Properties
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/sellers" class="nav-link w-full sm:w-auto bg-white border border-gray-200 px-10 py-4 rounded-2xl font-bold flex justify-center items-center gap-3 hover:bg-gray-50 transition-all active:scale-95">
             Sell Your Home
            </a>
        </div>
      </div>

      <div class="w-full lg:w-1/2 reveal">
        <div class="relative">
          <div class="absolute -top-6 -right-6 w-32 h-32 bg-gray-100 rounded-full -z-10 blur-2xl opacity-50"></div>
          
        <img 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
          alt="Benta Luxury Mansion" 
            class="w-full h-[400px] md:h-[600px] object-cover rounded-[32px] md:rounded-[48px] shadow-2xl transform hover:scale-[1.01] transition-transform duration-500"
        />
          
          <div class="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg hidden md:block">
            <p class="text-sm font-bold text-black">Luxury Penthouse</p>
            <p class="text-xs text-gray-500 font-medium">Lekki, Lagos</p>
          </div>
        </div>
      </div>
    </section>
  `;
}