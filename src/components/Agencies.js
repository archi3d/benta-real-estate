// src/components/Agencies.js
export function createAgencies() {
  const agencies = [
    { name: 'Agency 1', logo: 'https://framerusercontent.com/images/s8byoJvwTkn7Gm2jKWNdTPv9F8Q.svg?width=140&height=140' },
    { name: 'Agency 2', logo: 'https://www.vectorlogo.zone/logos/webflow/webflow-ar21.svg' },
    { name: 'Agency 3', logo: 'https://cdn.worldvectorlogo.com/logos/notion-2.svg' },
    { name: 'Agency 4', logo: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
  ];

  return `
    <section class="max-w-7xl mx-auto px-8 py-24 border-t border-gray-100">
      <h2 class="text-3xl font-bold text-[#1a1a1a] mb-12 text-center md:text-left">Working alongside leading agencies</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        ${agencies.map(agency => `
          <div class="bg-[#f5f5f5] rounded-3xl h-48 flex items-center justify-center p-12 hover:bg-gray-100 transition-colors cursor-pointer group">
            <img 
              src="${agency.logo}" 
              alt="${agency.name}" 
              class="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            />
          </div>
        `).join('')}
      </div>
    </section>
  `;
}