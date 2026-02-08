// src/components/Footer.js
export function createFooter() {
  return `
    <footer class="bg-white border-t border-gray-100 pt-16 md:pt-24 pb-12">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        
        <div class="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 bg-gray-50 rounded-[32px] md:rounded-[40px] p-8 md:p-16 mb-16 md:mb-24 overflow-hidden">
          <div class="w-full lg:w-1/2 text-center lg:text-left">
             <h3 class="text-2xl md:text-4xl font-bold mb-4 tracking-tight text-[#1a1a1a]">Join The Best Real Estate Newsletter!</h3>
             <p class="text-sm md:text-lg text-gray-500">Stay updated with the latest listings and market insights.</p>
          </div>
          <div class="w-full lg:w-1/2">
            <form class="flex flex-col sm:flex-row gap-3 w-full">
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="flex-1 px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all bg-white text-base" 
                required
              />
              <button type="submit" class="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-black/10">
                Join Now!
              </button>
            </form>
          </div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-24">
          <div class="col-span-1">
            <h4 class="font-bold text-base md:text-lg mb-6 text-[#1a1a1a]">Pages</h4>
            <ul class="space-y-3 md:space-y-4 text-sm md:text-base text-gray-500">
              <li><a href="/" class="nav-link hover:text-black transition-colors">Home</a></li>
              <li><a href="/buyers" class="nav-link hover:text-black transition-colors">Properties</a></li>
              <li><a href="/sellers" class="nav-link hover:text-black transition-colors">Sell Your Home</a></li>
            </ul>
          </div>
          <div class="col-span-1">
            <h4 class="font-bold text-base md:text-lg mb-6 text-[#1a1a1a]">Info</h4>
            <div class="space-y-3 md:space-y-4 text-sm md:text-base text-gray-500 leading-relaxed">
              <p>San Francisco, CA</p>
              <p>Mon-Sun 8:00-22:00</p>
              <a href="mailto:contact@benta.com" class="block hover:text-black transition-colors">contact@benta.com</a>
            </div>
          </div>
          <div class="col-span-1">
             <h4 class="font-bold text-base md:text-lg mb-6 text-[#1a1a1a]">Social</h4>
             <ul class="space-y-3 md:space-y-4 text-sm md:text-base text-gray-500">
              <li><a href="#" class="hover:text-black transition-colors">Instagram</a></li>
              <li><a href="#" class="hover:text-black transition-colors">LinkedIn</a></li>
              <li><a href="#" class="hover:text-black transition-colors">Twitter</a></li>
            </ul>
          </div>
          <div class="col-span-1">
             <h4 class="font-bold text-base md:text-lg mb-6 text-[#1a1a1a]">Legal</h4>
             <ul class="space-y-3 md:space-y-4 text-sm md:text-base text-gray-500">
              <li><a href="#" class="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-black transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-gray-400 border-t border-gray-100 pt-12">
          <p>© 2026 Benta. All Rights Reserved.</p>
          <div class="flex items-center gap-1">
            <span>Built by</span>
            <span class="font-bold text-gray-600">Marto</span>
            <span class="text-gray-300">×</span>
            <span class="font-bold text-gray-600">Judah</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}