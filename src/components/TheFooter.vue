<script setup>
import usaFlag from '@/assets/images/usa.png';
import logo from '@/assets/images/unashamed.png';

const socialLinks = [
  { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://facebook.com' },
  { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com' },
  { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com' }
];

const quickLinks = [
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'About Us', path: '/about', icon: 'fas fa-info-circle' },
  { name: 'Our Impact', path: '/impact', icon: 'fas fa-chart-line' },
  { name: 'Programs', path: '/programs', icon: 'fas fa-hands-helping' },
  { name: 'Blog', path: '/blog', icon: 'fas fa-newspaper' },
  { name: 'Get Involved', path: '/volunteer', icon: 'fas fa-hand-holding-heart' }
];
</script>

<template>
  <footer class="bg-gradient-to-b from-blue-900 to-blue-800 text-white pt-12 pb-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Brand & Social Section -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <img :src="logo" class="h-12" alt="Unashamed Charity Group Logo" />
            <div>
              <span class="text-xl font-bold text-white">Unashamed</span>
              <span class="block text-sm text-blue-200">Charity Group</span>
            </div>
          </div>
          <p class="text-blue-100 text-sm leading-relaxed">
            Empowering communities through compassion and action. Together we can make a difference.
          </p>
          <div class="space-y-2">
            <h3 class="text-lg font-semibold text-white">Follow Us</h3>
            <div class="flex space-x-4">
              <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank"
                :aria-label="social.name"
                class="h-10 w-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300">
                <i :class="`${social.icon} text-white`"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4 pb-2 border-b border-blue-700">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <router-link :to="link.path"
                class="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors">
                <i :class="`${link.icon} text-blue-300`"></i>
                <span>{{ link.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4 pb-2 border-b border-blue-700">Contact Us</h3>
          <ul class="space-y-3">
            <li class="flex items-start space-x-3">
              <i class="fas fa-map-marker-alt mt-1 text-blue-300"></i>
              <span class="text-blue-100">Nairobi City, Kenya</span>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-phone-alt text-blue-300"></i>
              <a href="tel:+254700000000" class="text-blue-100 hover:text-white transition-colors">+254 700 000 000</a>
            </li>
            <li class="flex items-center space-x-3">
              <i class="fas fa-envelope text-blue-300"></i>
              <a href="mailto:unashamedgroup@gmail.com"
                class="text-blue-100 hover:text-white transition-colors">unashamedgroup@gmail.com</a>
            </li>
          </ul>

          <div class="mt-6">
            <h4 class="text-sm font-semibold text-blue-200 mb-2">Currency</h4>
            <div class="flex items-center space-x-2">
              <span class="text-white font-medium">USD</span>
              <img class="h-6 w-6 rounded-full border border-blue-300" :src="usaFlag" alt="USA Flag" />
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4 pb-2 border-b border-blue-700">Stay Updated</h3>
          <p class="text-blue-100 text-sm mb-4">
            Subscribe to our newsletter for the latest updates and events.
          </p>
          <form class="space-y-3">
            <input type="email" placeholder="Your email address"
              class="w-full px-4 py-2 rounded-lg bg-blue-800 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300">
            <button type="submit"
              class="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all duration-300">
              Subscribe
            </button>
          </form>
          <p class="text-xs text-blue-300 mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-blue-700 my-8"></div>

      <!-- Bottom Bar -->
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div class="text-sm text-blue-200">
          &copy; {{ new Date().getFullYear() }} Unashamed Charity Group. All rights reserved.
        </div>

        <div class="flex space-x-6">
          <router-link to="/privacy-policy" class="text-blue-200 hover:text-white text-sm transition-colors">
            Privacy Policy
          </router-link>
          <router-link to="/terms" class="text-blue-200 hover:text-white text-sm transition-colors">
            Terms of Service
          </router-link>
          <router-link to="/contact" class="text-blue-200 hover:text-white text-sm transition-colors">
            Contact Us
          </router-link>
        </div>

        <div class="text-sm text-blue-300">
          Designed by <a href="https://clinton.miteexplorers.com/" target="_blank"
            class="text-green-400 hover:text-green-300">ACW Developers</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: linear-gradient(135deg, #1e3a8a 0%, #172554 100%);
}

html {
  scroll-behavior: smooth;
}

a:focus,
button:focus {
  outline: 2px solid #93c5fd;
  outline-offset: 2px;
}

.fab,
.fas {
  transition: transform 0.2s ease;
}

a:hover .fab,
a:hover .fas {
  transform: scale(1.1);
}
</style>
