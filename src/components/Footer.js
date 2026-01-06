// src/components/Footer.js
export function createFooter() {
  return `
    <footer class="bg-white border-t border-gray-100 pt-24 pb-12">
      <div class="max-w-7xl mx-auto px-8">
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-12 bg-gray-50 rounded-[40px] p-16 mb-24">
          <div class="md:w-1/2">
             <h3 class="text-4xl font-bold mb-4">Join The Best Real Estate Newsletter!</h3>
             <p class="text-gray-500 text-lg">Stay updated with the latest listings and market insights.</p>
          </div>
          <div class="md:w-1/2 flex gap-4 w-full">
            <input type="email" placeholder="jane@framer.com" class="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all" />
            <button class="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">Join Now!</button>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div>
            <h4 class="font-bold text-lg mb-6">Pages</h4>
            <ul class="space-y-4 text-gray-500">
              <li><a href="/" class="nav-link hover:text-black">Home</a></li>
              <li><a href="#" class="hover:text-black">Properties</a></li>
              <li><a href="#" class="nav-link hover:text-black">Sell Your Home</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-lg mb-6">Info</h4>
            <p class="text-gray-500 leading-relaxed">San Francisco, CA<br/>Mon-Sun 8:00-22:00<br/>contact@benta.com</p>
          </div>
          <div>
             <h4 class="font-bold text-lg mb-6">Social</h4>
             <ul class="space-y-4 text-gray-500">
              <li><a href="#" class="hover:text-black">Instagram</a></li>
              <li><a href="#" class="hover:text-black">LinkedIn</a></li>
              <li><a href="#" class="hover:text-black">Twitter</a></li>
            </ul>
          </div>
          <div>
             <h4 class="font-bold text-lg mb-6">Legal</h4>
             <ul class="space-y-4 text-gray-500">
              <li><a href="#" class="hover:text-black">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-black">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div class="flex justify-between items-center text-gray-400 border-t border-gray-100 pt-12">
          <p>© 2024 Benta. All Rights Reserved.</p>
          <p>Built by Marto</p>
        </div>
      </div>
    </footer>
  `;
}