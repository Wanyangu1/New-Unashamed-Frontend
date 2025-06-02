<script setup>
import { useMembers } from "@/composables/useMembers";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import bg2Image from '@/assets/images/bg2.png'

const { teamMembers } = useMembers();
</script>

<template>
  <div class="about-us min-h-screen">
    <TheNavbar />

    <!-- Hero Section with Parallax Effect -->
    <section class="relative h-[90vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
      <!-- Parallax Background -->
      <div
        class="absolute inset-0 bg-[url('@/assets/images/hero-parallax.jpg')] bg-cover bg-center bg-no-repeat opacity-70"
        data-parallax="scroll" data-image-src="@/assets/images/hero-parallax.jpg" data-speed="0.4"></div>

      <!-- Animated Floating Elements -->
      <div class="absolute top-20 left-20 w-16 h-16 rounded-full bg-yellow-400/20 animate-float1"></div>
      <div class="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-purple-500/20 animate-float2"></div>
      <div class="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-blue-400/20 animate-float3"></div>

      <!-- Content -->
      <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div class="inline-block mb-8 animate-fade-in">
          <span
            class="text-yellow-400 font-semibold tracking-wider px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            SINCE 2019
          </span>
        </div>
        <h1 class="text-7xl font-bold text-white mb-8 leading-tight animate-fade-in delay-100">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Unashamed</span>
          Charity
        </h1>
        <p class="text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in delay-200">
          Empowering communities through faith-driven service and youth development initiatives
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in delay-300">
          <button
            class="relative overflow-hidden group bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-12 py-5 rounded-full transition-all duration-300 shadow-xl">
            <span class="relative z-10 flex items-center">
              Get Involved
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </span>
            <span
              class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          <button
            class="relative overflow-hidden group border-2 border-white hover:border-yellow-400 text-white font-bold px-12 py-5 rounded-full transition-all duration-300">
            <span class="relative z-10 flex items-center">
              Our Programs
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
            <span
              class="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <img :src="bg2Image" alt="About Us Image"
            class="w-full rounded-2xl shadow-xl transform hover:scale-[1.02] transition duration-500" />
          <div
            class="absolute -bottom-6 -right-6 bg-yellow-500 w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            Since 2019
          </div>
        </div>
        <div>
          <span class="text-yellow-600 font-semibold tracking-wider">OUR STORY</span>
          <h2 class="text-4xl font-bold text-gray-800 mb-6 mt-2">About Our Organization</h2>
          <div class="w-20 h-1 bg-yellow-500 mb-8"></div>
          <p class="text-gray-600 leading-relaxed mb-6">
            Unashamed Charity Group was formed in 2019 by a group of scholars who were Form Four leavers from
            Nkaimurunya Secondary School. The team, led by David Irihose (founder and president), had a vision to
            maintain
            youth unity and serve both God and society.
          </p>
          <p class="text-gray-600 leading-relaxed">
            The continued passion for unity and service evolved into a vibrant youth charity movement now known as
            UNASHAMED CHARITY GROUP, impacting communities across multiple regions.
          </p>
          <div class="mt-8 flex space-x-4">
            <div class="bg-blue-50 p-4 rounded-lg flex-1 border-l-4 border-yellow-500">
              <h3 class="font-bold text-gray-800">Our Mission</h3>
              <p class="text-gray-600 text-sm mt-1">Serve God and society through united action</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg flex-1 border-l-4 border-yellow-500">
              <h3 class="font-bold text-gray-800">Our Vision</h3>
              <p class="text-gray-600 text-sm mt-1">Empowered communities through youth engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-yellow-600 font-semibold tracking-wider">MEET THE TEAM</span>
          <h2 class="text-4xl font-bold text-gray-800 mt-2">Our Secretariat</h2>
          <div class="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
          <p class="text-gray-600 max-w-2xl mx-auto mt-6">
            Dedicated leaders driving our mission forward with passion and commitment
          </p>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <div v-for="member in teamMembers" :key="member.name"
            class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div class="relative overflow-hidden h-72">
              <img :src="member.image" alt="Team Member"
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

    <!-- Branches Section - Horizontal Scrolling Version -->
    <section class="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span
            class="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-yellow-600 uppercase rounded-full bg-yellow-50">
            Our Reach
          </span>
          <h2 class="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Explore Our <span class="text-yellow-600">Branches</span>
          </h2>
          <div class="mt-6 max-w-2xl mx-auto">
            <div class="relative">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center">
                <span class="px-3 bg-gray-50 text-gray-500 text-lg">
                  Expanding our impact nationwide
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Horizontal Scrolling Container -->
        <div class="relative">
          <!-- Scrollable Content -->
          <div class="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
            <div class="flex space-x-8">
              <!-- Branch Card Template -->
              <div
                class="group flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div class="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <img src="@/assets/images/Events/streets.jpg" alt=" Branch"
                    class="w-full h-60 object-cover transition duration-700 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-6 w-full">
                    <div class="flex justify-between items-end">
                      <div>
                        <h3 class="text-2xl font-bold text-white">Ongata Rongai</h3>
                        <p class="text-yellow-300 font-medium">Headquarters</p>
                      </div>
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Active
                      </span>
                    </div>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">
                    Our flagship branch located at the nation's capital, pioneering the group's influence and
                    coordinating
                    national activities.
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex space-x-1 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd" />
                      </svg>
                      <span class="text-sm font-medium text-gray-700">Nairobi, Kenya</span>
                    </div>
                    <button
                      class="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                      Learn more
                      <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Kisii Branch -->
              <div
                class="group flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div class="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <img src="@/assets/images/Events/group.jpg" alt="Kisii Branch"
                    class="w-full h-60 object-cover transition duration-700 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-6 w-full">
                    <div class="flex justify-between items-end">
                      <div>
                        <h3 class="text-2xl font-bold text-white">Kisii Branch</h3>
                        <p class="text-yellow-300 font-medium">Nyanza Region</p>
                      </div>
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Growing
                      </span>
                    </div>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">
                    Serving the Nyanza region with members from Kisii University, Rongo University and surrounding
                    communities.
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex space-x-1 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd" />
                      </svg>
                      <span class="text-sm font-medium text-gray-700">Kisii, Kenya</span>
                    </div>
                    <button
                      class="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                      Learn more
                      <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Kirinyaga Branch -->
              <div
                class="group flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div class="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <img src="@/assets/images/Events/Kirinyaga.jpg" alt="Kirinyaga Branch"
                    class="w-full h-60 object-cover transition duration-700 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-6 w-full">
                    <div class="flex justify-between items-end">
                      <div>
                        <h3 class="text-2xl font-bold text-white">Kirinyaga Branch</h3>
                        <p class="text-yellow-300 font-medium">Central Kenya</p>
                      </div>
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Active
                      </span>
                    </div>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">
                    Our Central Kenya branch engaging students from Kirinyaga University, Laikipia University and
                    surrounding areas.
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex space-x-1 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd" />
                      </svg>
                      <span class="text-sm font-medium text-gray-700">Kirinyaga, Kenya</span>
                    </div>
                    <button
                      class="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                      Learn more
                      <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Kiambu Branch -->
              <div
                class="group flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div class="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <img src="@/assets/images/Events/Kiambu.jpg" alt="Kiambu Branch"
                    class="w-full h-60 object-cover transition duration-700 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-6 w-full">
                    <div class="flex justify-between items-end">
                      <div>
                        <h3 class="text-2xl font-bold text-white">Kiambu Branch</h3>
                        <p class="text-yellow-300 font-medium">Central Kenya</p>
                      </div>
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        New
                      </span>
                    </div>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">
                    Serving Kiambu County with members from various tertiary institutions and local communities.
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex space-x-1 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd" />
                      </svg>
                      <span class="text-sm font-medium text-gray-700">Kiambu, Kenya</span>
                    </div>
                    <button
                      class="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                      Learn more
                      <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="group flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div class="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <img src="@/assets/images/Events/Meru.jpg" alt="Kiambu Branch"
                    class="w-full h-60 object-cover transition duration-700 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-6 w-full">
                    <div class="flex justify-between items-end">
                      <div>
                        <h3 class="text-2xl font-bold text-white">Meru Branch</h3>
                        <p class="text-yellow-300 font-medium">Eastern Kenya</p>
                      </div>
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        New
                      </span>
                    </div>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">
                    Our Eastern Kenya branch engaging students and youth from Meru County and surrounding regions.
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex space-x-1 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd" />
                      </svg>
                      <span class="text-sm font-medium text-gray-700">Meru, Kenya</span>
                    </div>
                    <button
                      class="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                      Learn more
                      <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Rongo Branch -->
              <div
                class="group flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div class="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <img src="@/assets/images/Events/rongo.jpg" alt="Kiambu Branch"
                    class="w-full h-60 object-cover transition duration-700 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-6 w-full">
                    <div class="flex justify-between items-end">
                      <div>
                        <h3 class="text-2xl font-bold text-white">Rongo Branch</h3>
                        <p class="text-yellow-300 font-medium">Nyanza Region</p>
                      </div>
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Active
                      </span>
                    </div>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">
                    Located near Rongo University, serving surrounding communities with youth empowerment initiatives.
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex space-x-1 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd" />
                      </svg>
                      <span class="text-sm font-medium text-gray-700">Rongo, Kenya</span>
                    </div>
                    <button
                      class="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                      Learn more
                      <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Kilifi Branch -->
              <div
                class="group flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div class="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <img src="@/assets/images/Events/fun.jpg" alt=" Branch"
                    class="w-full h-60 object-cover transition duration-700 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-6 w-full">
                    <div class="flex justify-between items-end">
                      <div>
                        <h3 class="text-2xl font-bold text-white">Kilifi Branch</h3>
                        <p class="text-yellow-300 font-medium">Kilifi, Kenya</p>
                      </div>
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Active
                      </span>
                    </div>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">
                    Supporting students and local communities in Kilifi County with a focus on coastal development and
                    sustainability.
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex space-x-1 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd" />
                      </svg>
                      <span class="text-sm font-medium text-gray-700">Kilifi, Kenya</span>
                    </div>
                    <button
                      class="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                      Learn more
                      <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Laikipia Branch -->
              <div
                class="group flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div class="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <img src="@/assets/images/Events/Laikipia.jpg" alt="Kiambu Branch"
                    class="w-full h-60 object-cover transition duration-700 group-hover:scale-105" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div class="absolute bottom-0 left-0 p-6 w-full">
                    <div class="flex justify-between items-end">
                      <div>
                        <h3 class="text-2xl font-bold text-white">Laikipia Branch</h3>
                        <p class="text-yellow-300 font-medium">Rift Valley Region</p>
                      </div>
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3" />
                        </svg>
                        Active
                      </span>
                    </div>
                  </div>
                </div>
                <div class="p-6">
                  <p class="text-gray-600 mb-4">
                    This branch works with students from Laikipia University and connects with communities across the
                    Rift
                    Valley region.
                  </p>
                  <div class="flex items-center justify-between">
                    <div class="flex space-x-1 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd" />
                      </svg>
                      <span class="text-sm font-medium text-gray-700">Laikipia, Kenya</span>
                    </div>
                    <button
                      class="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                      Learn more
                      <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <!-- Coming Soon Card -->
              <div
                class="group flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div class="relative aspect-w-16 aspect-h-9 overflow-hidden">
                  <div
                    class="w-full h-60 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                    <div class="text-center p-6">
                      <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/10 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 class="text-2xl font-bold text-white mb-2">New Branch Coming Soon</h3>
                      <p class="text-blue-100 mb-6">We're expanding to more regions across the country</p>
                      <button
                        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                        Suggest a Location
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-6">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm text-gray-600">
                        <span class="font-medium text-blue-600">Next branch opening</span> in Q3 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Scroll Indicators -->
          <div class="flex justify-center mt-6 space-x-2">
            <button class="w-3 h-3 rounded-full bg-gray-300"></button>
            <button class="w-3 h-3 rounded-full bg-gray-300"></button>
            <button class="w-3 h-3 rounded-full bg-yellow-500"></button>
            <button class="w-3 h-3 rounded-full bg-gray-300"></button>
          </div>
        </div>

        <div class="mt-12 text-center">
          <button
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all">
            Scroll to view all branches
            <svg class="ml-3 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section id="cta" class="py-14 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
        <p class="text-xl mb-10 max-w-3xl mx-auto">Join us in our mission to transform lives and communities through
          compassionate action.</p>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <a href="/donate"
            class="px-8 py-4 bg-white text-green-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            <i class="fas fa-donate mr-2"></i> Donate Now
          </a>
          <a href="/volunteer"
            class="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300">
            <i class="fas fa-hands-helping mr-2"></i> Volunteer
          </a>
        </div>
      </div>
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

/* Custom hover effects */
.transform-hover {
  transition: transform 0.3s ease;
}

.transform-hover:hover {
  transform: translateY(-5px);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
