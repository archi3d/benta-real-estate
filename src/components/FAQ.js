// src/components/FAQ.js
const faqData = [
  { question: "What areas do you operate in?", answer: "We primarily work across the most desirable neighborhoods in the region, focusing on properties that combine great location, architecture, and value." },
  { question: "Are you a local or international agency?", answer: "We are an independent local agency with a global mindset, blending local market expertise with international exposure." },
  { question: "How long has your agency been operating?", answer: "Our team brings years of combined experience in the real estate industry, from property sales to marketing and valuation." },
  { question: "What types of properties do you specialize in?", answer: "We specialize in high-quality and luxury properties, from elegant city apartments to modern villas and lakeside homes." },
  { question: "Do you work with both buyers and sellers?", answer: "Yes. Our agency supports both buyers and sellers throughout every step of the process." }
];

export function createFAQ() {
  return `
    <section class="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <div class="text-center mb-12 md:mb-16">
        <span class="inline-block px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-[10px] md:text-sm text-gray-400 font-bold tracking-widest uppercase mb-6">
          Need Help?
        </span>
        <h2 class="text-3xl md:text-6xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p class="text-base md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
          Find clear answers to the most common questions about buying, selling, and working with our agency.
        </p>
      </div>

      <div class="space-y-2">
        ${faqData.map((faq, index) => `
          <div class="faq-item border-b border-gray-100 last:border-0 overflow-hidden">
            <button class="w-full flex items-center justify-between py-6 md:py-8 text-left group transition-all" 
                    onclick="this.parentElement.classList.toggle('active')">
              <span class="text-lg md:text-2xl font-bold text-[#1a1a1a] group-hover:text-gray-600 transition-colors pr-4">
                ${faq.question}
              </span>
              <div class="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-50 flex items-center justify-center transition-all duration-300 group-parent-[.active]:bg-[#1a1a1a] group-parent-[.active]:rotate-45">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-parent-[.active]:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </button>
            <div class="faq-answer max-h-0 transition-all duration-500 ease-in-out opacity-0 pointer-events-none">
              <p class="pb-6 md:pb-8 text-sm md:text-lg text-gray-500 leading-relaxed max-w-2xl">
                ${faq.answer}
              </p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <style>
      .faq-item.active .faq-answer {
        max-h: 500px; /* Large enough to fit any answer */
        opacity: 1;
        pointer-events: auto;
        padding-top: 0.5rem;
      }
      .faq-item.active svg {
        transform: rotate(0deg);
      }
      /* Tailwind doesn't easily handle parent-state for icon colors in string templates, 
         so we use this simple CSS hook */
      .faq-item.active button div {
        background-color: #1a1a1a !important;
      }
      .faq-item.active button svg {
        color: white !important;
      }
    </style>
  `;
}