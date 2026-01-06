// src/components/Agencies.js
const comparisons = [
  { feature: 'Property Valuation', typical: 'Often based on generic estimates', benta: 'Accurate, data-driven, and updated in real time' },
  { feature: 'Client Support', typical: 'Rotating agents or limited availability', benta: 'Dedicated expert from start to finish' },
  { feature: 'Marketing Strategy', typical: 'Basic listings with minimal exposure', benta: 'Tailored campaigns with professional visuals' },
  { feature: 'Transparency', typical: 'Limited communication and unclear fees', benta: 'Full visibility of process, costs, and feedback' },
  { feature: 'Negotiation', typical: 'Minimal strategy, often focused on quick sales', benta: 'Focused on maximizing your return' },
  { feature: 'Experience', typical: 'Outdated systems and slow response times', benta: 'Streamlined, tech-driven, and efficient' }
];

export function createWhyChooseUs() {
  return `
    <section class="max-w-7xl mx-auto px-8 py-24 text-center">
      <span class="inline-block px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-400 font-medium mb-8">Why Choose Us</span>
      <h2 class="text-6xl font-bold text-[#1a1a1a] mb-6">What Sets Us Apart</h2>
      <p class="text-xl text-gray-500 max-w-3xl mx-auto mb-20">We don't just list properties — we guide, advise, and deliver results. Here's how our approach compares to the traditional real estate experience.</p>

      <div class="overflow-hidden border border-gray-100 rounded-[40px] text-left">
        <div class="grid grid-cols-3 bg-gray-50 p-8 border-b border-gray-100 font-bold text-xl">
          <div></div>
          <div class="text-gray-400">Typical Agencies</div>
          <div class="text-[#1a1a1a]">With Benta</div>
        </div>

        ${comparisons.map(item => `
          <div class="grid grid-cols-3 p-8 border-b border-gray-100 items-center hover:bg-gray-50/50 transition-colors">
            <div class="font-bold text-[#1a1a1a] flex items-center gap-3">
               <span class="w-2 h-2 rounded-full bg-gray-200"></span> ${item.feature}
            </div>
            <div class="text-gray-500 pr-8 flex items-center gap-2">
               <span class="text-red-400">✕</span> ${item.typical}
            </div>
            <div class="text-[#1a1a1a] font-medium flex items-center gap-2">
               <span class="text-green-500">✓</span> ${item.benta}
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}