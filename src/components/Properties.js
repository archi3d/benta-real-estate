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
    <section class="max-w-7xl mx-auto px-8 py-24 text-center">
      <span class="inline-block px-4 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-400 font-medium mb-6">
        Properties
      </span>
      <h2 class="text-5xl font-bold text-[#1a1a1a] mb-4">Discover Our Featured Properties</h2>
      <p class="text-gray-500 text-lg max-w-2xl mx-auto mb-10">
        Explore a curated selection of our most exceptional listings.
      </p>
      
      <a href="/buyers" class="nav-link bg-[#1a1a1a] text-white px-6 py-3 rounded-xl font-medium mb-16 hover:bg-black transition-all inline-flex items-center gap-2 mx-auto w-fit">
        View All Listings <span class="text-xs">→</span>
      </a>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
        ${listings.map((item, index) => `
          <div class="group cursor-pointer reveal delay-${(index + 1) * 100}">
            <div class="overflow-hidden rounded-[40px] mb-6 bg-gray-100 shadow-sm">
              <img 
                src="${item.image}" 
                alt="${item.name}" 
                class="w-full h-112.5 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div class="flex justify-between items-start px-2">
              <div>
                <h3 class="text-2xl font-bold text-[#1a1a1a]">${item.name}</h3>
                <p class="text-gray-400 font-medium">${item.location}</p>
              </div>
              <p class="text-xl font-bold text-[#1a1a1a]">${item.price}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}