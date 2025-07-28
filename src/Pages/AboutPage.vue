<script setup>
import { useMembers } from "@/composables/useMembers";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import bg2Image from '@/assets/Images/bg2.png';
import streetsImage from '@/assets/Images/Events/streets.jpg';
import groupImage from '@/assets/Images/Events/Group.jpg';
import kirinyagaImage from '@/assets/Images/Events/Kirinyaga.jpg';
import kiambuImage from '@/assets/Images/Events/Kiambu.jpg';
import meruImage from '@/assets/Images/Events/Meru.jpg';
import rongoImage from '@/assets/Images/Events/Rongo.jpg';
import funImage from '@/assets/Images/Events/fun.jpg';
import laikipiaImage from '@/assets/Images/Events/Laikipia.jpg';

import { ref, onMounted } from 'vue';

const particles = ref([]);
const isHovering = ref(false);

const createParticles = () => {
  particles.value = Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
    opacity: Math.random() * 0.5 + 0.1,
    color: `hsl(${Math.random() * 60 + 120}, 80%, 60%)`
  }));
};

const animateParticles = () => {
  particles.value.forEach(particle => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    // Bounce off edges
    if (particle.x < 0 || particle.x > 100) particle.speedX *= -1;
    if (particle.y < 0 || particle.y > 100) particle.speedY *= -1;

    // Add some randomness
    if (Math.random() > 0.95) {
      particle.speedX = (Math.random() - 0.5) * 0.5;
      particle.speedY = (Math.random() - 0.5) * 0.5;
    }
  });

  if (isHovering.value) requestAnimationFrame(animateParticles);
};

onMounted(() => {
  createParticles();
});
const { teamMembers } = useMembers();
</script>

<template>
  <div class="about-us min-h-screen">
    <TheNavbar />

    <!-- Hero Section -->
    <section class="relative h-[90vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
      <!-- Parallax Background -->
      <div
        class="absolute inset-0 bg-[url('@/assets/Images/hero-parallax.jpg')] bg-cover bg-center bg-no-repeat opacity-70"
        data-parallax="scroll" data-image-src="@/assets/Images/hero-parallax.jpg" data-speed="0.4"></div>

      <!-- Content -->
      <div class="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div class="inline-block mb-6 sm:mb-8 animate-fade-in">
          <span
            class="text-yellow-400 font-semibold tracking-wider px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
            SINCE 2019
          </span>
        </div>
        <h1
          class="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight animate-fade-in delay-100">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Unashamed</span>
          Charity
        </h1>
        <p
          class="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed animate-fade-in delay-200">
          Empowering communities through faith-driven service and youth development initiatives
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in delay-300 items-center sm:items-stretch justify-center sm:justify-start">
          <button
            class="w-3/4 lg:w-1/2 md:w-1/2 relative overflow-hidden group bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 sm:px-12 py-3 sm:py-5 rounded-full transition-all duration-300 shadow-xl">
            <span class="relative z-10 flex justify-center">
              Get Involved
              <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span
              class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>

          <button
            class="w-3/4 lg:w-1/2 md:w-1/2 relative overflow-hidden group border-2 border-white hover:border-yellow-400 text-white font-bold px-8 sm:px-12 py-3 sm:py-5 rounded-full transition-all duration-300">
            <span class="relative z-10 flex justify-center">
              Our Programs
              <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span
              class="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div class="relative">
          <img :src="bg2Image" alt="About Us Image"
            class="w-full rounded-2xl shadow-xl transform hover:scale-[1.02] transition duration-500" />
          <div
            class="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-yellow-500 w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-lg">
            <ClockIcon class="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            Since 2019
          </div>
        </div>
        <div>
          <span class="text-yellow-600 font-semibold tracking-wider">OUR STORY</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 mt-2">About Our Organization</h2>
          <div class="w-16 sm:w-20 h-1 bg-yellow-500 mb-6 sm:mb-8"></div>
          <p class="text-gray-600 leading-relaxed mb-4 sm:mb-6">
            Unashamed Charity Group was formed in 2019 by a group of scholars who were Form Four leavers from
            Nkaimurunya Secondary School. The team, led by David Irihose (founder and president), had a vision to
            maintain youth unity and serve both God and society.
          </p>
          <p class="text-gray-600 leading-relaxed">
            The continued passion for unity and service evolved into a vibrant youth charity movement now known as
            UNASHAMED CHARITY GROUP, impacting communities across multiple regions.
          </p>
          <div class="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <div class="flex items-center mb-2">
                <HandshakeIcon class="w-5 h-5 text-yellow-500 mr-2" />
                <h3 class="font-bold text-gray-800">Our Mission</h3>
              </div>
              <p class="text-gray-600 text-sm">Serve God and society through united action</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <div class="flex items-center mb-2">
                <CommunityIcon class="w-5 h-5 text-yellow-500 mr-2" />
                <h3 class="font-bold text-gray-800">Our Vision</h3>
              </div>
              <p class="text-gray-600 text-sm">Empowered communities through youth engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
          <span class="text-yellow-600 font-semibold tracking-wider">MEET THE TEAM</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">Our Secretariat</h2>
          <div class="w-16 sm:w-20 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4"></div>
          <p class="text-gray-600 max-w-2xl mx-auto mt-4 sm:mt-6">
            Dedicated leaders driving our mission forward with passion and commitment
          </p>
        </div>

        <!-- Mobile Carousel for Team Members -->
        <div class="md:hidden relative overflow-hidden">
          <div class="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
            <div class="flex space-x-6">
              <div v-for="member in teamMembers" :key="member.name" class="flex-shrink-0 w-72 snap-center">
                <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div class="relative overflow-hidden h-60">
                    <img :src="member.image" :alt="`Team Member ${member.name}`"
                      class="w-full h-full object-cover transition duration-500 hover:scale-110" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-4 sm:p-6">
                      <h3 class="text-xl font-bold text-white">{{ member.name }}</h3>
                      <p class="text-yellow-400">{{ member.title }}</p>
                    </div>
                  </div>
                  <div class="p-4 sm:p-6">
                    <p class="text-gray-600 text-sm">{{ member.about }}</p>
                    <div class="mt-3 flex space-x-3">
                      <a href="#" class="text-gray-400 hover:text-yellow-500 transition">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a href="#" class="text-gray-400 hover:text-yellow-500 transition">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" class="text-gray-400 hover:text-yellow-500 transition">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-4 space-x-2">
            <button v-for="(_, index) in teamMembers" :key="index" class="w-2 h-2 rounded-full bg-gray-300"></button>
          </div>
        </div>

        <!-- Desktop Grid for Team Members -->
        <div class="hidden md:grid lg:grid-cols-3 gap-6">
          <div v-for="member in teamMembers" :key="member.name"
            class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div class="relative overflow-hidden h-72">
              <img :src="member.image" :alt="`Team Member ${member.name}`"
                class="w-full h-full object-cover transition duration-500 hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div class="absolute bottom-0 left-0 p-6">
                <h3 class="text-xl font-bold text-white">{{ member.name }}</h3>
                <p class="text-yellow-400">{{ member.title }}</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600">{{ member.about }}</p>
              <div class="mt-4 flex space-x-3">
                <a href="#" class="text-gray-400 hover:text-yellow-500 transition">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-yellow-500 transition">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-yellow-500 transition">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Branches Section -->
    <section class="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
          <span
            class="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-yellow-600 uppercase rounded-full bg-yellow-50">
            Our Reach
          </span>
          <h2 class="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Explore Our <span class="text-yellow-600">Branches</span>
          </h2>
          <div class="mt-4 sm:mt-6 max-w-2xl mx-auto">
            <div class="relative">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center">
                <span class="px-3 bg-gray-50 text-gray-500 text-sm sm:text-lg">
                  Expanding our impact nationwide
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Horizontal Scrolling Container -->
        <div class="relative">
          <!-- Scrollable Content -->
          <div class="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
            <div class="flex space-x-6">
              <!-- Branch Cards -->
              <div v-for="(branch, index) in [
                { name: 'Ongata Rongai', status: 'Active', region: 'Headquarters', image: streetsImage, description: 'Our flagship branch located at the nation\'s capital, pioneering the group\'s influence and coordinating national activities.', location: 'Nairobi, Kenya' },
                { name: 'Kisii Branch', status: 'Growing', region: 'Nyanza Region', image: groupImage, description: 'Serving the Nyanza region with members from Kisii University, Rongo University and surrounding communities.', location: 'Kisii, Kenya' },
                { name: 'Kirinyaga Branch', status: 'Active', region: 'Central Kenya', image: kirinyagaImage, description: 'Our Central Kenya branch engaging students from Kirinyaga University, Laikipia University and surrounding areas.', location: 'Kirinyaga, Kenya' },
                { name: 'Kiambu Branch', status: 'New', region: 'Central Kenya', image: kiambuImage, description: 'Serving Kiambu County with members from various tertiary institutions and local communities.', location: 'Kiambu, Kenya' },
                { name: 'Meru Branch', status: 'New', region: 'Eastern Kenya', image: meruImage, description: 'Our Eastern Kenya branch engaging students and youth from Meru County and surrounding regions.', location: 'Meru, Kenya' },
                { name: 'Rongo Branch', status: 'Active', region: 'Nyanza Region', image: rongoImage, description: 'Located near Rongo University, serving surrounding communities with youth empowerment initiatives.', location: 'Rongo, Kenya' },
                { name: 'Kilifi Branch', status: 'Active', region: 'Kilifi, Kenya', image: funImage, description: 'Supporting students and local communities in Kilifi County with a focus on coastal development and sustainability.', location: 'Kilifi, Kenya' },
                { name: 'Laikipia Branch', status: 'Active', region: 'Rift Valley Region', image: laikipiaImage, description: 'This branch works with students from Laikipia University and connects with communities across the Rift Valley region.', location: 'Laikipia, Kenya' }
              ]" :key="index" class="flex-shrink-0 w-72 sm:w-80 snap-center">
                <div
                  class="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                  <div class="relative aspect-w-16 aspect-h-9 overflow-hidden flex-grow">
                    <img :src="branch.image" :alt="`${branch.name} Branch`"
                      class="w-full h-60 object-cover transition duration-700 group-hover:scale-105" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-4 sm:p-6 w-full">
                      <div class="flex justify-between items-end">
                        <div>
                          <h3 class="text-xl sm:text-2xl font-bold text-white">{{ branch.name }}</h3>
                          <p class="text-yellow-300 font-medium">{{ branch.region }}</p>
                        </div>
                        <span :class="`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${branch.status === 'Active' ? 'bg-yellow-100 text-yellow-800' :
                          branch.status === 'Growing' ? 'bg-green-100 text-green-800' :
                            'bg-blue-100 text-blue-800'
                          }`">
                          <svg class="-ml-0.5 mr-1.5 h-2 w-2" :class="{
                            'text-yellow-400': branch.status === 'Active',
                            'text-green-400': branch.status === 'Growing',
                            'text-blue-400': branch.status === 'New'
                          }" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                          {{ branch.status }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 sm:p-6">
                    <p class="text-gray-600 text-sm sm:text-base mb-4">{{ branch.description }}</p>
                    <div class="flex items-center justify-between">
                      <div class="flex space-x-1 text-yellow-500">
                        <span class="text-xs sm:text-sm font-medium text-gray-700">{{ branch.location }}</span>
                      </div>
                      <button
                        class="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors text-sm sm:text-base">
                        Learn more
                        <svg class="ml-1 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Coming Soon Card -->
              <div class="flex-shrink-0 w-72 sm:w-80 snap-center">
                <div
                  class="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                  <div class="relative aspect-w-16 aspect-h-9 overflow-hidden flex-grow">
                    <div
                      class="w-full h-60 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                      <div class="text-center p-4 sm:p-6">
                        <div
                          class="mx-auto flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 mb-3 sm:mb-4">
                          <ClockIcon class="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">New Branch Coming Soon</h3>
                        <p class="text-blue-100 text-sm sm:text-base mb-4 sm:mb-6">We're expanding to more regions
                          across the country</p>
                        <button
                          class="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                          Suggest a Location
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 sm:p-6">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <ClockIcon class="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                      </div>
                      <div class="ml-3">
                        <p class="text-xs sm:text-sm text-gray-600">
                          <span class="font-medium text-blue-600">Next branch opening</span> in Q3 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Scroll Indicators -->
          <div class="flex justify-center mt-4 sm:mt-6 space-x-2">
            <button v-for="i in 4" :key="i"
              :class="`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${i === 3 ? 'bg-yellow-500' : 'bg-gray-300'}`"></button>
          </div>
        </div>

        <div class="mt-8 sm:mt-12 text-center">
          <button
            class="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all">
            Scroll to view all branches
            <svg class="ml-2 -mr-1 w-4 h-4 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Dynamic CTA Section with Particle Animation -->
    <section id="dynamic-cta"
      class="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 text-white"
      @mouseenter="isHovering = true; animateParticles()" @mouseleave="isHovering = false">
      <!-- Animated Particles Background -->
      <div class="absolute inset-0 overflow-hidden">
        <div v-for="(particle, index) in particles" :key="index" class="absolute rounded-full" :style="{
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          backgroundColor: particle.color,
          opacity: particle.opacity,
          transform: `scale(${isHovering ? 1.5 : 1})`,
          transition: 'transform 0.3s ease, opacity 0.5s ease'
        }"></div>
      </div>

      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-black/5"></div>

      <div class="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <!-- Animated Heading -->
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight" v-motion="{
          initial: { opacity: 0, y: 20 },
          enter: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
        }">
          <span class="inline-block">
            <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200"
              v-motion="{
                initial: { opacity: 0, y: 20 },
                enter: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }
              }">
              Ready to Make an Impact?
            </span>
          </span>
        </h2>

        <!-- Animated Subheading -->
        <p class="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90" v-motion="{
          initial: { opacity: 0, y: 10 },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: 'easeOut'
            }
          }
        }">
          Join our movement to create lasting change through compassionate action and community empowerment.
        </p>

        <!-- Interactive Action Buttons -->
        <div class="flex flex-col sm:flex-row justify-center gap-5 sm:gap-8" v-motion="{
          initial: { opacity: 0, y: 10 },
          enter: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.6,
              ease: 'easeOut'
            }
          }
        }">
          <!-- Donate Button with Floating Animation -->
          <a href="/donate"
            class="relative overflow-hidden group px-8 py-4 sm:px-10 sm:py-5 bg-white text-emerald-700 font-bold rounded-xl shadow-2xl hover:shadow-emerald-900/20 transition-all duration-500 hover:-translate-y-1 flex items-center justify-center"
            v-motion-pop>
            <span class="relative z-10 flex items-center">
              <svg class="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-110" fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <span class="whitespace-nowrap">Support Our Cause</span>
            </span>
            <span
              class="absolute inset-0 bg-gradient-to-r from-emerald-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </a>

          <!-- Volunteer Button with Hover Effect -->
          <a href="/volunteer"
            class="relative overflow-hidden group px-8 py-4 sm:px-10 sm:py-5 border-2 border-white/80 text-white font-bold rounded-xl hover:border-white transition-all duration-500 hover:-translate-y-1 flex items-center justify-center"
            v-motion-pop>
            <span class="relative z-10 flex items-center">
              <svg class="w-6 h-6 mr-3 transition-transform duration-300 group-hover:rotate-12" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span class="whitespace-nowrap">Join Our Team</span>
            </span>
            <span
              class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm"></span>
            <span
              class="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-all duration-500 rounded-xl"></span>
          </a>
        </div>

        <!-- Decorative Elements -->
        <div class="mt-12 flex justify-center space-x-4">
          <div class="w-3 h-3 rounded-full bg-white/30 animate-pulse" v-motion="{
            initial: { scale: 0 },
            enter: {
              scale: 1,
              transition: {
                delay: 0.8,
                duration: 0.5
              }
            }
          }"></div>
          <div class="w-3 h-3 rounded-full bg-white/50 animate-pulse" v-motion="{
            initial: { scale: 0 },
            enter: {
              scale: 1,
              transition: {
                delay: 0.9,
                duration: 0.5
              }
            }
          }"></div>
          <div class="w-3 h-3 rounded-full bg-white/70 animate-pulse" v-motion="{
            initial: { scale: 0 },
            enter: {
              scale: 1,
              transition: {
                delay: 1.0,
                duration: 0.5
              }
            }
          }"></div>
        </div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-white/10 animate-float1" v-motion="{
        initial: { opacity: 0 },
        enter: {
          opacity: 0.3,
          transition: {
            delay: 1.2
          }
        }
      }"></div>
      <div class="absolute bottom-1/3 right-20 w-12 h-12 rounded-full bg-white/5 animate-float2" v-motion="{
        initial: { opacity: 0 },
        enter: {
          opacity: 0.2,
          transition: {
            delay: 1.4
          }
        }
      }"></div>
    </section>
    <TheFooter />
  </div>
</template>

<style>
@keyframes float1 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(-40px) translateX(20px);
  }
}

@keyframes float2 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(30px) translateX(-30px);
  }
}

@keyframes float3 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(-20px) translateX(-20px);
  }
}

.animate-float1 {
  animation: float1 8s ease-in-out infinite;
}

.animate-float2 {
  animation: float2 10s ease-in-out infinite;
}

.animate-float3 {
  animation: float3 12s ease-in-out infinite;
}

[data-parallax="scroll"] {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Horizontal Scroll Styles */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Snap scrolling for mobile */
.snap-x {
  scroll-snap-type: x mandatory;
}

.snap-center {
  scroll-snap-align: center;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .team-member-card {
    min-width: 280px;
  }
}
</style>
