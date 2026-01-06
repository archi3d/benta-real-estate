// src/components/Hero.js
export function createHero() {
  return `
    <section class="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center gap-16">
      <div class="lg:w-1/2 space-y-8">
        <span class="inline-block px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-500 font-medium">
          Trusted by 1,200+ families
        </span>
        
        <h1 class="text-6xl font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
          Helping Buyers Find Homes and Sellers Get Results
        </h1>
        
        <p class="text-xl text-gray-600 leading-relaxed max-w-lg">
          From buying to selling, we handle every step with precision, discretion, and a tailored approach that maximizes your property's value and potential.
        </p>

        <div class="flex items-center gap-4">
            <a href="/buyers" class="nav-link bg-[#1a1a1a] text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3">
             Browse Properties
            </a>
            <a href="/sellers" class="nav-link bg-white border border-gray-200 px-8 py-4 rounded-xl font-semibold flex items-center gap-3">
             Sell Your Home
            </a>
        </div>
      </div>

      <div class="lg:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
          alt="Benta Luxury Mansion" 
          class="w-full h-150 object-cover rounded-[40px] shadow-2xl"
        />
      </div>
    </section>
  `;
}

