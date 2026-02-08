// src/components/Values.js
const values = [
  { title: 'Integrity', desc: 'We act with honesty and transparency in every decision.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Purpose-Driven', desc: 'We go beyond transactions to create real impact for our clients.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Innovation', desc: 'We embrace new tools to redefine the real estate experience.', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { title: 'Commitment', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', desc: 'We stay dedicated from the first meeting to the final result.' },
  { title: 'Care', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', desc: 'We treat every property and client as if they were our own.' },
  { title: 'Excellence', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', desc: 'We constantly learn and evolve to deliver better outcomes.' }
];

export function createValues() {
  return `
    <section class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center overflow-hidden">
      <h2 class="text-3xl md:text-6xl font-bold text-[#1a1a1a] mb-6 tracking-tight">
        And Here’s What We Stand For
      </h2>
      <p class="text-base md:text-xl text-gray-500 max-w-3xl mx-auto mb-12 md:mb-20 leading-relaxed">
        The principles and standards that shape our work, ensuring every client receives the clarity, care, and results they deserve.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20 md:mb-32">
        ${values.map(v => `
          <div class="p-8 md:p-10 bg-white border border-gray-100 rounded-[32px] md:rounded-[40px] text-left hover:border-gray-300 transition-all group">
            <div class="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1a1a1a] transition-colors">
              <svg class="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${v.icon}"></path>
              </svg>
            </div>
            <h3 class="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#1a1a1a]">${v.title}</h3>
            <p class="text-gray-500 text-base md:text-lg leading-relaxed">${v.desc}</p>
          </div>
        `).join('')}
      </div>

      <div class="w-full h-64 md:h-[600px] overflow-hidden rounded-[32px] md:rounded-[40px] mb-12 md:mb-16 shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
          class="w-full h-full object-cover" 
          loading="lazy"
        />
      </div>

      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 md:gap-12 text-left border-t border-gray-100 pt-12 md:pt-16">
        <p class="text-2xl md:text-4xl font-medium leading-tight lg:w-2/3 tracking-tight text-[#1a1a1a]">
          "Benta isn’t just redefining the real estate process, they’re reshaping how clients experience it. Their transparency and innovation set a new industry standard."
        </p>
        <div class="flex items-center gap-4">
          <img 
            src="https://i.pravatar.cc/150?u=james" 
            class="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-gray-50" 
          />
          <div>
            <h4 class="text-lg md:text-xl font-bold text-[#1a1a1a]">James Whitmore</h4>
            <p class="text-sm md:text-base text-gray-500">Editor-in-Chief, Modern Property</p>
          </div>
        </div>
      </div>
    </section>
  `;
}