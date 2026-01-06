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
    <section class="max-w-4xl mx-auto px-8 py-24">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-400 font-medium mb-8">Need Help?</span>
        <h2 class="text-6xl font-bold text-[#1a1a1a] mb-6">Frequently Asked Questions</h2>
        <p class="text-xl text-gray-500">Find clear answers to the most common questions about buying, selling, and working with our agency.</p>
      </div>

      <div class="space-y-4">
        ${faqData.map((faq, index) => `
          <div class="faq-item border-b border-gray-100 last:border-0 overflow-hidden">
            <button class="w-full flex items-center justify-between py-8 text-left group transition-all" onclick="this.parentElement.classList.toggle('active')">
              <span class="text-2xl font-semibold text-[#1a1a1a] group-hover:text-gray-600 transition-colors">${faq.question}</span>
              <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center transition-transform group-[.active]:rotate-45">
                <span class="text-2xl text-gray-400">+</span>
              </div>
            </button>
            <div class="faq-answer max-h-0 transition-all duration-500 ease-in-out opacity-0">
              <p class="pb-8 text-lg text-gray-500 leading-relaxed max-w-2xl">${faq.answer}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}