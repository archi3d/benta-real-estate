import { createSellingProcess } from '../components/SellingProcess.js';
import { createFAQ } from '../components/FAQ.js';

export function Sellers() {
  return `
    <div id="sellers-page" class="overflow-x-hidden">
      <section class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
        <span class="inline-block px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-[10px] md:text-sm text-gray-400 font-bold tracking-widest uppercase mb-8">
          Sell With Us
        </span>
        
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1a1a1a] mb-6 leading-[1.1]">
          List Your Property <br class="hidden md:block"/> With Confidence
        </h1>
        
        <p class="text-base md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed">
          Share your property details and let our team handle the valuation, marketing, and sale, from the first step to the final signature.
        </p>

        <div class="w-full h-64 md:h-[600px] overflow-hidden rounded-[32px] md:rounded-[40px] shadow-2xl mb-12 md:mb-20 reveal">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop" 
            alt="Modern Bedroom" 
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>

        <div class="max-w-4xl mx-auto bg-white border border-gray-100 rounded-[32px] md:rounded-[40px] p-8 md:p-16 shadow-xl shadow-gray-200/50 text-left reveal">
          <form id="seller-form" class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div class="space-y-3">
              <label class="text-sm font-bold text-[#1a1a1a] tracking-tight">Full Name</label>
              <input name="fullname" type="text" required placeholder="Jane Smith" 
                class="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all text-base" />
            </div>
            
            <div class="space-y-3">
              <label class="text-sm font-bold text-[#1a1a1a] tracking-tight">Property Type</label>
              <div class="relative">
                <select name="propertyType" 
                  class="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all appearance-none text-base">
                  <option value="" disabled selected>Select...</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
                <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="space-y-3">
              <label class="text-sm font-bold text-[#1a1a1a] tracking-tight">Email Address</label>
              <input name="email" type="email" required placeholder="jane@framer.com" 
                class="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all text-base" />
            </div>

            <div class="space-y-3">
              <label class="text-sm font-bold text-[#1a1a1a] tracking-tight">Desired Price</label>
              <input name="price" type="text" placeholder="$750,000" 
                class="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-black outline-none transition-all text-base" />
            </div>

            <div class="md:col-span-2 text-center pt-6">
              <button id="submit-btn" type="submit" 
                class="w-full sm:w-auto bg-black text-white px-16 py-5 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-black/10 active:scale-95">
                Submit Listing
              </button>
              <p class="text-gray-400 text-xs md:text-sm mt-6 font-medium">No obligation — our team will contact you within 24 hours.</p>
            </div>
          </form>
        </div>
      </section>

      <div class="reveal">
        ${createSellingProcess()}
      </div>

      <div class="reveal">
        ${createFAQ()}
      </div>
    </div>
  `;
}