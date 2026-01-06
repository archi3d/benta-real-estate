// src/components/Reviews.js
const reviews = [
  {
    name: 'Emma Johnson',
    role: 'Home Seller',
    image: 'https://i.pravatar.cc/150?u=emma',
    rating: 5,
    text: 'Working with Benta was effortless, they handled everything with precision and care. My home sold faster than I expected.'
  },
  {
    name: 'David Chen',
    role: 'First-Time Buyer',
    image: 'https://i.pravatar.cc/150?u=david',
    rating: 5,
    text: 'They made the buying process simple and transparent. I felt supported every step of the way.'
  },
  {
    name: 'Olivia Perez',
    role: 'Home Seller',
    image: 'https://i.pravatar.cc/150?u=olivia',
    rating: 5,
    text: 'Selling my property with Benta was a completely stress-free experience. Every update was clear, and they handled all the paperwork seamlessly.'
  }
  // Add more review objects here to fill the grid!
];

export function createReviews() {
  return `
    <section class="max-w-7xl mx-auto px-8 py-24 text-center">
      <span class="inline-block px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-400 font-medium mb-8">
        Reviews
      </span>
      <h2 class="text-6xl font-bold text-[#1a1a1a] mb-6 text-center">What Our Clients Say</h2>
      <p class="text-xl text-gray-500 max-w-2xl mx-auto mb-20 text-center">
        Real experiences from buyers and sellers who trusted our team, and achieved results that exceeded expectations.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        ${reviews.map(review => `
          <div class="p-10 border border-gray-100 rounded-[40px] bg-white hover:border-gray-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start mb-8">
                <div class="flex items-center gap-4">
                  <img src="${review.image}" class="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 class="text-xl font-bold text-[#1a1a1a]">${review.name}</h4>
                    <p class="text-gray-400 font-medium">${review.role}</p>
                  </div>
                </div>
                <div class="flex gap-0.5 text-amber-400 text-lg">
                  ${Array(review.rating).fill('★').join('')}
                </div>
              </div>
              
              <p class="text-gray-600 text-lg leading-relaxed italic">
                "${review.text}"
              </p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}