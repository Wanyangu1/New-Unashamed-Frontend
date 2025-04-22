<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isNavbarCollapsed = ref(true);
const isScrolled = ref(false);
const isMobile = ref(false);

const navLinks = [
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'About Us', path: '/about', icon: 'fas fa-info-circle' },
  { name: 'Our Impact', path: '/impact', icon: 'fas fa-chart-line' },
  { name: 'Programs', path: '/programs', icon: 'fas fa-hands-helping' },
  { name: 'Blog', path: '/blog', icon: 'fas fa-blog' },
];

const socialLinks = [
  { icon: 'fab fa-facebook-f', url: '#', color: 'blue', label: 'Facebook' },
  { icon: 'fab fa-twitter', url: '#', color: 'sky', label: 'Twitter' },
  { icon: 'fab fa-instagram', url: '#', color: 'pink', label: 'Instagram' },
  { icon: 'fab fa-youtube', url: '#', color: 'red', label: 'YouTube' }
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 1024;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<template>
  <!-- Secondary Navbar -->
  <div class="bg-gradient-to-r from-green-600 to-green-700 py-2 px-4 md:px-6">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Location with Icon - Left aligned -->
      <div class="flex items-center text-white text-sm md:text-base">
        <i class="fas fa-map-marker-alt mr-2 text-green-300"></i>
        <span>Nairobi, Kenya</span>
      </div>

      <!-- Social Links and Buttons - Right aligned -->
      <div class="flex items-center space-x-2 sm:space-x-3">
        <!-- Social Icons - Hidden on mobile -->
        <div class="hidden sm:flex space-x-2">
          <a v-for="(social, index) in socialLinks" :key="index" :href="social.url" :title="social.label"
            class="text-white hover:text-green-300 transition-colors p-1">
            <i :class="social.icon"></i>
          </a>
        </div>

        <!-- Action Buttons -->
        <div class="flex space-x-2">
          <a href="/gallery" class="group relative flex items-center">
            <button
              class="flex items-center border border-white/30 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-white bg-white/0 hover:bg-white/10 transition-all duration-300">
              <i class="fas fa-images text-xs sm:text-sm"></i>
              <span class="ml-1 text-xs sm:text-sm hidden sm:inline">Gallery</span>
            </button>
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/contact" class="group relative flex items-center">
            <button
              class="flex items-center border border-white/30 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-white bg-white/0 hover:bg-white/10 transition-all duration-300">
              <i class="fas fa-envelope text-xs sm:text-sm"></i>
              <span class="ml-1 text-xs sm:text-sm hidden sm:inline">Contact</span>
            </button>
            <span
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Navbar -->
  <nav class="w-full sticky top-0 z-50 overflow-hidden transition-all duration-300"
    :class="isScrolled ? 'bg-white shadow-lg py-1' : 'bg-white/95 backdrop-blur-sm py-2'">
    <div class="max-w-screen-xl mx-auto w-full px-4 md:px-4">
      <div class="flex justify-between items-center w-full overflow-hidden">
        <!-- Logo - Left aligned -->
        <a href="/" class="flex items-center space-x-2 group min-w-0">
          <img src="@/assets/Images/unashamed.png"
            class="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover:scale-105"
            alt="Unashamed Charity Group Logo" />
          <div class="h-8 sm:h-10 w-[2px] bg-gradient-to-b from-blue-800 to-green-500"></div>
          <div class="flex flex-col text-left min-w-0">
            <span
              class="text-green-600 font-bold text-sm sm:text-base md:text-lg leading-tight group-hover:text-green-700 transition-colors truncate">Unashamed</span>
            <span class="text-blue-900 text-xs sm:text-sm leading-tight truncate">Charity Org.</span>
          </div>
        </a>

        <!-- Desktop Navigation - Center aligned -->
        <div class="hidden lg:flex items-center justify-center flex-1 mx-4">
          <div class="flex space-x-1">
            <a v-for="(link, index) in navLinks" :key="index" :href="link.path"
              class="relative px-3 py-2 text-gray-700 hover:text-green-600 transition-colors group">

              <span class="flex items-center">
                <i :class="`${link.icon} mr-2 text-green-500`"></i> <!-- Icon always visible -->
                {{ link.name }}
              </span>
              <span
                class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-3/4"></span>
            </a>
          </div>
        </div>

        <!-- Desktop CTA Button - Right aligned -->
        <div class="hidden lg:flex items-center">
          <a href="/donate" class="ml-2">
            <button
              class="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center">
              <i class="fas fa-hand-holding-heart mr-2"></i>
              <span class="hidden sm:inline">Donate Now</span>
              <span class="inline sm:hidden">Donate</span>
            </button>
          </a>
        </div>

        <!-- Mobile Toggle Button - Right aligned -->
        <button @click="isNavbarCollapsed = !isNavbarCollapsed"
          class="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none transition-colors"
          :aria-expanded="!isNavbarCollapsed" aria-label="Toggle navigation">
          <i :class="isNavbarCollapsed ? 'fas fa-bars text-xl' : 'fas fa-times text-xl'"></i>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
    <div v-if="!isNavbarCollapsed && isMobile"
      class="lg:hidden fixed inset-x-0 top-28 bg-white shadow-xl z-40 mx-4 rounded-lg py-4 px-6">
      <div class="flex flex-col space-y-3">
        <a v-for="(link, index) in navLinks" :key="index" :href="link.path"
          class="flex items-center py-2 px-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
          @click="isNavbarCollapsed = true">
          <i :class="`${link.icon} mr-3 text-green-500 w-5 text-center`"></i>
          <span class="font-medium">{{ link.name }}</span>
        </a>

        <a href="/donate" class="mt-2" @click="isNavbarCollapsed = true">
          <button
            class="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-md flex items-center justify-center">
            <i class="fas fa-hand-holding-heart mr-2"></i>
            Donate Now
          </button>
        </a>
      </div>

      <div class="mt-6 pt-4 border-t border-gray-100">
        <div class="flex justify-center space-x-4">
          <a v-for="(social, index) in socialLinks" :key="index" :href="social.url"
            :class="`text-${social.color}-500 hover:text-${social.color}-600 text-xl transition-colors`"
            :title="social.label" @click="isNavbarCollapsed = true">
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
body {
  overflow-x: hidden;
}

/* Custom underline animation */
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #10b981;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Smooth backdrop blur transition */
.backdrop-blur-sm {
  transition: backdrop-filter 0.3s ease;
}

/* Prevent layout shift when scrollbar appears */
html {
  scrollbar-gutter: stable;
}
</style>
