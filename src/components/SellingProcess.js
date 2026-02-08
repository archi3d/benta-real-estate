const steps = [
  { 
    id: '01', 
    title: 'Consult', 
    desc: 'We start with a tailored consultation to understand your goals and timeline.',
    icon: `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 9h8"></path><path d="M8 13h6"></path>`
  },
  { 
    id: '02', 
    title: 'Value', 
    desc: 'Our team provides a professional valuation, balancing market data with your home\'s unique features.',
    icon: `<path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path>`
  },
  { 
    id: '03', 
    title: 'Prepare', 
    desc: 'We guide you through staging, photography, and presentation, ensuring every detail reflects elegance.',
    icon: `<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline>`
  },
  { 
    id: '04', 
    title: 'Market', 
    desc: 'Your property is launched with a bespoke campaign, including cinematic tours and international exposure.',
    icon: `<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`
  },
  { 
    id: '05', 
    title: 'Close', 
    desc: 'From contracts to keys, we guide you seamlessly through the legal and financial process.',
    icon: `<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>`
  }
];

export function createSellingProcess() {
  return `
    <section class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
      <span class="inline-block px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-[10px] md:text-sm text-gray-400 font-bold tracking-widest uppercase mb-8">
        Sell Your Home
      </span>
      
      <h2 class="text-3xl md:text-6xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
        How the Selling Process Works
      </h2>
      
      <p class="text-base md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
        We guide you through each stage, from valuation to closing, ensuring a smooth, transparent, and rewarding selling experience.
      </p>
      
      <a href="/sellers" class="nav-link bg-[#1a1a1a] text-white px-8 py-4 rounded-xl font-bold mb-16 hover:bg-black transition-all active:scale-95 flex items-center justify-center gap-2 mx-auto w-full sm:w-fit shadow-lg shadow-black/5">
        Get Your Home Listed <span class="text-xs">→</span>
      </a>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
        ${steps.map(step => `
          <div class="p-8 md:p-10 border border-gray-100 rounded-[32px] md:rounded-[40px] hover:border-gray-300 transition-all duration-300 group">
            <span class="text-3xl md:text-4xl font-bold text-[#1a1a1a] block mb-6 md:mb-8">${step.id}</span>
            <div class="mb-6">
               <div class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 group-hover:text-black transition-colors">
                    ${step.icon}
                  </svg>
               </div> 
            </div>
            <h3 class="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-3 md:mb-4">${step.title}</h3>
            <p class="text-gray-500 leading-relaxed text-base md:text-lg">${step.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

// src/components/Testimonial.js
export function createTestimonial() {
  return `
    <section class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
      <div class="w-full h-64 md:h-[500px] overflow-hidden rounded-[32px] md:rounded-[40px] mb-12 md:mb-16 shadow-2xl">
        <img 
          src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Luxury Kitchen Interior" 
          class="w-full h-full object-cover"
        />
      </div>

      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 md:gap-12 border-t border-gray-100 pt-12 md:pt-16">
        
        <blockquote class="lg:w-2/3">
          <p class="text-2xl md:text-4xl font-medium leading-tight text-[#1a1a1a] tracking-tight">
            "Benta sets a new benchmark for real estate marketing, their process combines precision, creativity, and trust in every stage. A truly modern approach to selling high-end properties."
          </p>
        </blockquote>

        <div class="flex items-center gap-4">
          <img 
            src="https://i.pravatar.cc/150?u=laura" 
            alt="Laura Bennett" 
            class="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-gray-50"
          />
          <div>
            <h4 class="text-lg md:text-xl font-bold text-[#1a1a1a]">Laura Bennett</h4>
            <p class="text-sm md:text-base text-gray-500">Partnership Director, PropertyGlobal</p>
          </div>
        </div>

      </div>
    </section>
  `;
}