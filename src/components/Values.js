// src/components/Values.js
const values = [
  { title: 'Integrity', desc: 'We act with honesty and transparency in every decision.' },
  { title: 'Purpose-Driven', desc: 'We go beyond transactions to create real impact for our clients.' },
  { title: 'Innovation', desc: 'We embrace new tools to redefine the real estate experience.' },
  { title: 'Commitment', desc: 'We stay dedicated from the first meeting to the final result.' },
  { title: 'Care', desc: 'We treat every property and every client as if they were our own.' },
  { title: 'Excellence', desc: 'We constantly learn and evolve to deliver better outcomes.' }
];

export function createValues() {
  return `
    <section class="max-w-7xl mx-auto px-8 py-24 text-center">
      <h2 class="text-6xl font-bold text-[#1a1a1a] mb-6">And Here’s What We Stand For</h2>
      <p class="text-xl text-gray-500 max-w-3xl mx-auto mb-20">The principles and standards that shape our work, ensuring every client receives the clarity, care, and results they deserve.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        ${values.map(v => `
          <div class="p-10 bg-white border border-gray-100 rounded-[40px] text-left hover:shadow-lg transition-shadow">
            <h3 class="text-2xl font-bold mb-4">${v.title}</h3>
            <p class="text-gray-500 text-lg">${v.desc}</p>
          </div>
        `).join('')}
      </div>

      <div class="w-full h-150 overflow-hidden rounded-[40px] mb-16">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" class="w-full h-full object-cover" />
      </div>
      <div class="flex flex-col md:flex-row items-center justify-between gap-12 text-left">
        <p class="text-3xl md:text-4xl font-medium leading-tight md:w-2/3">
          "Benta isn’t just redefining the real estate process, they’re reshaping how clients experience it. Their transparency, innovation, and attention to detail set a new industry standard for what a modern agency should be."
        </p>
        <div class="flex items-center gap-4">
          <img src="https://i.pravatar.cc/150?u=james" class="w-16 h-16 rounded-full object-cover" />
          <div>
            <h4 class="text-xl font-bold">James Whitmore</h4>
            <p class="text-gray-500">Editor-in-Chief, Modern Property Review</p>
          </div>
        </div>
      </div>
    </section>
  `;
}