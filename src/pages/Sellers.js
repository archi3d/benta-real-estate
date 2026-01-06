import { createSellingProcess } from '../components/SellingProcess.js';
import { createFAQ } from '../components/FAQ.js';

export function Sellers() {
  return `
    <div id="sellers-page">
      <section class="max-w-7xl mx-auto px-8 py-24 text-center reveal active">
        <span class="inline-block px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-400 font-medium mb-8">
          Sell With Us
        </span>
        <h1 class="text-7xl font-bold tracking-tight text-[#1a1a1a] mb-6">
          List Your Property <br/> With Confidence
        </h1>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto mb-16">
          Share your property details and let our team handle the valuation, marketing, and sale, from the first step to the final signature.
        </p>

        <div class="w-full h-[600px] overflow-hidden rounded-[40px] shadow-2xl mb-12 reveal">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop" 
            alt="Modern Bedroom" 
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div class="max-w-4xl mx-auto bg-white border border-gray-100 rounded-[40px] p-12 shadow-sm text-left reveal">
          <form id="seller-form" class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-2">
              <label class="font-bold text-[#1a1a1a]">Full Name</label>
              <input name="fullname" type="text" required placeholder="Jane Smith" class="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:ring-2 focus:ring-black outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="font-bold text-[#1a1a1a]">Property Type</label>
              <select name="propertyType" class="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:ring-2 focus:ring-black outline-none transition-all">
                <option>Select...</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
            </div>
            <div class="space-y-2">
              <label class="font-bold text-[#1a1a1a]">Email</label>
              <input name="email" type="email" required placeholder="jane@framer.com" class="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:ring-2 focus:ring-black outline-none transition-all" />
            </div>
            <div class="space-y-2">
              <label class="font-bold text-[#1a1a1a]">Desired listing price</label>
              <input name="price" type="text" placeholder="$750,000" class="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:ring-2 focus:ring-black outline-none transition-all" />
            </div>
            <div class="md:col-span-2 text-center pt-4">
              <button id="submit-btn" type="submit" class="bg-black text-white px-12 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg active:scale-95">
                Submit
              </button>
              <p class="text-gray-400 text-sm mt-4">No obligation — we'll get back to you within 24 hours.</p>
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