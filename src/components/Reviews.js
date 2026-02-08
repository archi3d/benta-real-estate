// src/components/Reviews.js
const reviews = [
  {
    name: 'Emma Johnson',
    role: 'Home Seller',
    image: 'https://i.pravatar.cc/150?u=emma',
    rating: 5,
    text: 'Working with Benta was effortless; they handled everything with precision and care. My home sold faster than I expected.'
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
    text: 'Selling my property with Benta was a stress-free experience. Every update was clear, and they handled all paperwork seamlessly.'
  }
];

export function createReviews() {
  return `
    <section class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
      <span class="inline-block px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-[10px] md:text-sm text-gray-400 font-bold tracking-widest uppercase mb-8">
        Reviews
      </span>
      
      <h2 class="text-3xl md:text-6xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
        What Our Clients Say
      </h2>
      
      <p class="text-base md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 md:mb-20 leading-relaxed">
        Real experiences from buyers and sellers who achieved results that exceeded expectations.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
        ${reviews.map(review => `
          <div class="p-8 md:p-10 border border-gray-100 rounded-[32px] md:rounded-[40px] bg-white hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500 flex flex-col relative overflow-hidden group">
            
            <div class="absolute -top-4 -right-2 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L14.017 2H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C2.9124 8 2.01697 7.10457 2.01697 6V3L2.01697 2H10.017V15C10.017 18.3137 7.33027 21 4.01697 21H2.01697Z" /></svg>
            </div>

            <div class="relative z-10 h-full flex flex-col justify-between">
            <div>
                <div class="flex justify-between items-center mb-8">
                <div class="flex items-center gap-4">
                    <img src="${review.image}" class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-gray-50" />
                  <div>
                      <h4 class="text-lg md:text-xl font-bold text-[#1a1a1a] tracking-tight">${review.name}</h4>
                      <p class="text-xs md:text-sm text-gray-400 font-medium tracking-wide uppercase">${review.role}</p>
                    </div>
                  </div>
                </div>
                
                <p class="text-gray-600 text-base md:text-lg leading-relaxed font-medium italic">
                  "${review.text}"
                </p>
              </div>
              
              <div class="flex gap-1 text-amber-400 mt-8">
                ${Array(review.rating).fill('<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}