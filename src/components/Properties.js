const listings = [
  {
    id: 1,
    name: 'Elysium Curve',
    location: 'Swiss Alps, Switzerland',
    price: '$8.7M',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Arcadia House',
    location: 'Crete, Greece',
    price: '$9.2M',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Aurora Vista',
    location: 'Dubai Waterfront, UAE',
    price: '$7.8M',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop'
  }
];

export function createProperties() {
  return `
    <section class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center overflow-hidden">
      <span class="inline-block px-4 py-1 bg-gray-50 border border-gray-200 rounded-full text-[10px] md:text-xs text-gray-400 font-bold tracking-widest uppercase mb-6">
        Featured Collection
      </span>
      
      <h2 class="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4 tracking-tight">
        Discover Our Featured Properties
      </h2>
      
      <p class="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Explore a curated selection of our most exceptional listings, chosen for their unique design and prime locations.
      </p>
      
      <a href="/buyers" class="nav-link bg-[#1a1a1a] text-white px-8 py-4 rounded-2xl font-bold mb-16 hover:bg-black transition-all active:scale-95 inline-flex items-center gap-3 mx-auto shadow-lg shadow-black/5">
        View All Listings <span>→</span>
      </a>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 text-left">
        ${listings.map((item, index) => `
          <div class="group cursor-pointer reveal">
            <div class="overflow-hidden rounded-[32px] md:rounded-[40px] mb-6 bg-gray-100 shadow-sm relative">
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl z-10 md:hidden">
                <p class="text-sm font-bold text-[#1a1a1a]">${item.price}</p>
              </div>
              
              <img 
                src="${item.image}" 
                alt="${item.name}" 
                class="w-full h-80 md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            
            <div class="flex justify-between items-start px-2">
              <div class="space-y-1">
                <h3 class="text-xl md:text-2xl font-bold text-[#1a1a1a]">${item.name}</h3>
                <p class="text-sm md:text-base text-gray-400 font-medium">${item.location}</p>
              </div>
              <p class="hidden md:block text-xl font-bold text-[#1a1a1a]">${item.price}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}