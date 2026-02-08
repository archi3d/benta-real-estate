// src/components/Agencies.js
const comparisons = [
  { feature: 'Property Valuation', typical: 'Based on generic estimates', benta: 'Accurate, data-driven, and real-time' },
  { feature: 'Client Support', typical: 'Rotating agents/limited availability', benta: 'Dedicated expert from start to finish' },
  { feature: 'Marketing Strategy', typical: 'Basic listings, minimal exposure', benta: 'Tailored campaigns, pro visuals' },
  { feature: 'Transparency', typical: 'Unclear fees and communication', benta: 'Full visibility of costs and feedback' },
  { feature: 'Negotiation', typical: 'Focused on quick sales', benta: 'Focused on maximizing your return' },
  { feature: 'Experience', typical: 'Outdated systems, slow response', benta: 'Streamlined, tech-driven, efficient' }
];

export function createWhyChooseUs() {
  return `
    <section class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
      <span class="inline-block px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-[10px] md:text-sm text-gray-400 font-bold tracking-widest uppercase mb-8">Why Choose Us</span>
      
      <h2 class="text-3xl md:text-6xl font-bold text-[#1a1a1a] mb-6 tracking-tight">What Sets Us Apart</h2>
      
      <p class="text-base md:text-xl text-gray-500 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed">
        We don't just list properties — we guide, advise, and deliver results. Here's how our approach compares to the traditional real estate experience.
      </p>

      <div class="hidden lg:block overflow-hidden border border-gray-100 rounded-[40px] text-left">
        <div class="grid grid-cols-3 bg-gray-50 p-8 border-b border-gray-100 font-bold text-xl">
          <div class="text-[#1a1a1a]">Feature</div>
          <div class="text-gray-400">Typical Agencies</div>
          <div class="text-[#1a1a1a]">With Benta©</div>
        </div>

        ${comparisons.map(item => `
          <div class="grid grid-cols-3 p-8 border-b border-gray-100 items-center hover:bg-gray-50/50 transition-colors">
            <div class="font-bold text-[#1a1a1a] flex items-center gap-3">
               <span class="w-2 h-2 rounded-full bg-blue-500"></span> ${item.feature}
            </div>
            <div class="text-gray-500 pr-8 flex items-center gap-2">
               <span class="text-red-400">✕</span> ${item.typical}
            </div>
            <div class="text-[#1a1a1a] font-semibold flex items-center gap-2">
               <span class="text-green-500">✓</span> ${item.benta}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="lg:hidden space-y-4">
        ${comparisons.map(item => `
          <div class="p-6 border border-gray-100 rounded-[32px] text-left space-y-4 bg-white shadow-sm">
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
              <h3 class="font-bold text-lg text-[#1a1a1a]">${item.feature}</h3>
            </div>
            
            <div class="grid grid-cols-1 gap-3 pt-2">
              <div class="bg-red-50/50 p-4 rounded-2xl border border-red-100">
                <p class="text-[10px] uppercase font-bold text-red-400 mb-1">Typical Agencies</p>
                <p class="text-sm text-gray-600 flex items-start gap-2">
                  <span>✕</span> ${item.typical}
                </p>
              </div>
              
              <div class="bg-green-50/50 p-4 rounded-2xl border border-green-100">
                <p class="text-[10px] uppercase font-bold text-green-600 mb-1">With Benta©</p>
                <p class="text-sm text-[#1a1a1a] font-semibold flex items-start gap-2">
                  <span>✓</span> ${item.benta}
                </p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}