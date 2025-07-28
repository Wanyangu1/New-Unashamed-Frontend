<script setup>
import { onMounted } from 'vue';
import { format } from 'date-fns';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';
import { useEvents } from "@/composables/useEvent";
import testimonial1 from '@/assets/Images/Testimonials/testimonial1.jpg'
import testimonial2 from '@/assets/Images/Testimonials/testimonial2.jpg'
import testimonial3 from '@/assets/Images/Testimonials/testimonial3.jpg'
import groupImage from '@/assets/Images/Events/Group.jpg'
import eventImage from '@/assets/Images/event.png'
import bgImage from '@/assets/Images/Events/bg1.jpeg';

// Enhanced parallax effect with bubble movement
const handleScroll = () => {
  const parallaxBg = document.querySelector('.parallax-bg')
  const heroContent = document.querySelector('.hero-content')
  const bubbles = document.querySelectorAll('.parallax-bubble')

  if (parallaxBg && heroContent) {
    const scrollPosition = window.pageYOffset
    parallaxBg.style.transform = `translateY(${scrollPosition * 0.3}px)`
    heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`

    // Add parallax effect to bubbles
    bubbles.forEach((bubble, index) => {
      // Each bubble moves at a different speed for depth effect
      const speed = 0.1 + (index * 0.05)
      bubble.style.transform = `translateY(${scrollPosition * speed}px)`
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  // Animate counters
  const counters = document.querySelectorAll('.counter')
  const speed = 200
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target')
      const count = +counter.innerText
      const increment = target / speed
      if (count < target) {
        counter.innerText = Math.ceil(count + increment)
        setTimeout(updateCount, 1)
      } else {
        counter.innerText = target + '+' // Add plus sign after animation
      }
    }
    updateCount()
  })
})
const testimonials = [
  {
    name: "Lilian W.",
    role: "Community Member",
    quote: "The food drive during the pandemic saved my family. We were struggling, and Unashamed Charity Group gave us hope when we needed it most.",
    rating: 5,
    image: testimonial1
  },
  {
    name: "Peris W.",
    role: "Volunteer",
    quote: "Volunteering with Unashamed has changed my perspective on service. The organization's commitment to the community is truly inspiring.",
    rating: 5,
    image: testimonial2
  },
  {
    name: "Sarah R.",
    role: "Community Partner",
    quote: "Their door-to-door outreach program has brought real change to our neighborhood. The youth engagement is particularly transformative.",
    rating: 5,
    image: testimonial3
  }
]
const values = [
  {
    title: "Compassion",
    description: "We approach every individual with empathy and understanding, recognizing the inherent dignity in all people.",
    icon: "fas fa-heart",
    color: "red"
  },
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards, ensuring transparency and accountability in all our actions.",
    icon: "fas fa-shield-alt",
    color: "blue"
  },
  {
    title: "Community",
    description: "We believe in the power of collective action and the strength that comes from unity and collaboration.",
    icon: "fas fa-hands-helping",
    color: "green"
  }
]
const { upcomingEvents, fetchEvents } = useEvents();

onMounted(() => {
  fetchEvents();
});
</script>

<template>
  <div class="font-sans antialiased text-gray-900 bg-white">
    <!-- Navbar -->
    <TheNavbar />

    <!-- Hero Section with Parallax -->
    <section class="hero-parallax relative h-[90vh] min-h-[300px] overflow-hidden">
      <div class="parallax-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${bgImage})` }" data-parallax="scroll" data-speed="0.4"></div>

      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

      <!-- Floating Elements - Added more bubbles with different animations -->
      <div
        class="parallax-bubble absolute top-1/4 left-1/4 w-10 h-10 md:w-16 md:h-16 rounded-full bg-green-500/50 animate-float1">
      </div>
      <div
        class="parallax-bubble absolute bottom-1/3 right-1/4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/30 animate-float2">
      </div>
      <div
        class="parallax-bubble absolute top-1/5 right-1/5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-400/40 animate-float5">
      </div>
      <div
        class="parallax-bubble absolute top-1/3 right-1/3 w-8 h-8 md:w-12 md:h-12 rounded-full bg-yellow-700/30 animate-float3">
      </div>
      <div
        class="parallax-bubble absolute bottom-1/4 left-1/3 w-14 h-14 md:w-20 md:h-20 rounded-full bg-purple-400/30 animate-float4">
      </div>
      <div
        class="parallax-bubble absolute bottom-1/5 left-1/5 w-20 h-20 md:w-28 md:h-28 rounded-full bg-pink-400/30 animate-float6">
      </div>
      <div
        class="parallax-bubble absolute top-2/3 left-2/3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-teal-400/30 animate-float7">
      </div>
      <div
        class="parallax-bubble absolute bottom-2/3 right-2/3 w-14 h-14 md:w-18 md:h-18 rounded-full bg-orange-400/30 animate-float8">
      </div>

      <!-- Content -->
      <div
        class="hero-content relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-16 lg:px-24 text-white">
        <div class="mb-4 sm:mb-6 animate-fade-in">
          <span
            class="inline-block px-4 py-1 sm:px-6 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-green-300 font-medium text-xs sm:text-sm tracking-wider">
            COMPASSION IN ACTION
          </span>
        </div>
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-6 leading-tight animate-fade-in delay-100">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Unashamed</span>
          Charity
          <p class="text-green-400 mt-1 text-2xl" style="font-family: 'Pacifico', cursive;">Organization</p>
        </h1>
        <p
          class="text-lg sm:text-xl md:text-2xl max-w-2xl sm:max-w-3xl leading-relaxed opacity-90 mb-5 sm:mb-10 animate-fade-in delay-200">
          Empowering lives, uplifting communities, and transforming the world through compassion and action
        </p>
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in delay-300">
          <a href="#cta"
            class="w-3/4 lg:w-1/4 relative overflow-hidden group bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 sm:px-6 sm:py-3 md:px-10 md:py-4 rounded-full transition-all duration-300 shadow-lg text-sm sm:text-base">
            <span class="relative z-10 flex justify-center">
              Get Involved
              <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </span>
            <span
              class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          <a href="#about"
            class="w-1/2 lg:w-1/4 relative overflow-hidden group border-2 border-white hover:border-green-400 text-white font-bold px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full transition-all duration-300 text-sm sm:text-base">
            <span class="relative z-10 flex justify-center">
              Learn More
              <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
            <span
              class="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 sm:w-8 sm:h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Reduced Size Stats Section with Branches -->
    <section class="py-4 bg-gradient-to-b from-green-700 to-green-800 text-white text-sm">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 text-center">
          <div class="p-2 group transform transition-all duration-300 hover:scale-105">
            <div class="flex justify-center mb-1">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600/30 flex items-center justify-center">
                <i class="fas fa-users text-lg sm:text-xl text-green-300"></i>
              </div>
            </div>
            <div class="text-2xl sm:text-3xl font-bold mb-1 counter" data-target="5000">0</div>
            <div class="uppercase font-light tracking-wide text-xs sm:text-sm">Lives Impacted</div>
            <div
              class="w-8 h-0.5 sm:w-10 bg-green-400 mx-auto mt-2 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300">
            </div>
          </div>
          <div class="p-2 group transform transition-all duration-300 hover:scale-105">
            <div class="flex justify-center mb-1">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600/30 flex items-center justify-center">
                <i class="fas fa-hands-helping text-lg sm:text-xl text-green-300"></i>
              </div>
            </div>
            <div class="text-2xl sm:text-3xl font-bold mb-1 counter" data-target="300">0</div>
            <div class="uppercase font-light tracking-wide text-xs sm:text-sm">Dedicated Volunteers</div>
            <div
              class="w-8 h-0.5 sm:w-10 bg-green-400 mx-auto mt-2 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300">
            </div>
          </div>
          <div class="p-2 group transform transition-all duration-300 hover:scale-105">
            <div class="flex justify-center mb-1">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600/30 flex items-center justify-center">
                <i class="fas fa-project-diagram text-lg sm:text-xl text-green-300"></i>
              </div>
            </div>
            <div class="text-2xl sm:text-3xl font-bold mb-1 counter" data-target="20">0</div>
            <div class="uppercase font-light tracking-wide text-xs sm:text-sm">Community Projects</div>
            <div
              class="w-8 h-0.5 sm:w-10 bg-green-400 mx-auto mt-2 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300">
            </div>
          </div>
          <div class="p-2 group transform transition-all duration-300 hover:scale-105">
            <div class="flex justify-center mb-1">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600/30 flex items-center justify-center">
                <i class="fas fa-building text-lg sm:text-xl text-green-300"></i>
              </div>
            </div>
            <div class="text-2xl sm:text-3xl font-bold mb-1 counter" data-target="9">0</div>
            <div class="uppercase font-light tracking-wide text-xs sm:text-sm">Branches</div>
            <div
              class="w-8 h-0.5 sm:w-10 bg-green-400 mx-auto mt-2 group-hover:w-12 sm:group-hover:w-16 transition-all duration-300">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ultra-Modern Core Values Section with Enhanced Decorations -->
    <section id="about"
      class="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <!-- Background decorative elements -->
      <div class="hidden lg:block">
        <svg class="absolute -left-20 top-1/4 w-72 h-72 text-emerald-100 opacity-40" viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor"
            d="M45,-78.4C57.9,-70.8,67.6,-57.8,75.5,-43.6C83.4,-29.4,89.6,-14,90.3,0.5C91,15,86.2,30,76.2,42.1C66.2,54.2,51,63.4,34.8,71.8C18.6,80.2,1.4,87.8,-15.4,85.6C-32.2,83.4,-48.4,71.3,-60.2,56.6C-72,41.8,-79.3,24.4,-81.6,6.1C-83.9,-12.2,-81.1,-31.4,-71.5,-46.3C-61.9,-61.2,-45.5,-71.8,-29.4,-78.2C-13.3,-84.6,2.6,-86.8,18.7,-82.9Z"
            transform="translate(100 100)"></path>
        </svg>
        <svg class="absolute right-0 top-1/3 w-80 h-80 text-blue-100 opacity-30" viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor"
            d="M49.3,-76.9C63.2,-69.1,73.5,-55.5,78.2,-40.7C82.9,-25.9,82,-9.9,77.7,4.4C73.4,18.7,65.7,31.4,55.1,42.5C44.5,53.6,31,63.1,15.1,72.9C-0.8,82.7,-19.1,92.8,-34.5,88.8C-49.9,84.8,-62.4,66.7,-72.1,48.7C-81.8,30.7,-88.7,12.8,-88.9,-5.3C-89.1,-23.4,-82.6,-46.8,-69.8,-63.3C-57,-79.8,-37.9,-89.3,-20.1,-93.9C-2.3,-98.5,14.2,-98.1,49.3,-76.9Z"
            transform="translate(100 100)"></path>
        </svg>
        <svg class="absolute left-1/3 bottom-1/4 w-64 h-64 text-amber-100 opacity-30" viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor"
            d="M42.1,-71.2C55.2,-63.5,66.7,-53.1,74.3,-40.2C81.9,-27.3,85.6,-11.9,85.2,3.7C84.8,19.3,80.3,38.7,69.8,52.8C59.3,66.9,42.8,75.8,25.7,80.4C8.6,85,-9.1,85.4,-24.9,79.6C-40.7,73.8,-54.6,61.8,-63.8,47.2C-73,32.5,-77.5,15.3,-77.9,-2.1C-78.3,-19.5,-74.6,-39,-63.4,-54.2C-52.2,-69.5,-33.5,-80.5,-15.3,-86.2C2.9,-91.9,29,-92.9,42.1,-71.2Z"
            transform="translate(100 100)"></path>
        </svg>
      </div>

      <div class="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div class="text-center mb-12 sm:mb-16 md:mb-20">
          <span class="text-emerald-500 font-semibold tracking-wider uppercase text-xs sm:text-sm md:text-base">Our
            Guiding
            Principles</span>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
            Built on <span class="relative inline-block">Values
              <svg class="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-emerald-400"
                viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M0 10 Q 50 18, 100 10 T 200 10" stroke-width="0"></path>
              </svg>
            </span>
          </h2>
          <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">These fundamental beliefs shape every decision
            we make and
            every relationship we build.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          <div v-for="(value, index) in values" :key="index"
            class="group relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 overflow-hidden">
            <!-- Gradient background overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
            </div>

            <!-- Animated icon container -->
            <div
              class="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110"
              :class="`bg-${value.color}-100 text-${value.color}-600`">
              <i :class="value.icon" class="text-2xl sm:text-3xl"></i>
              <div
                class="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-dashed opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                :class="`border-${value.color}-300`"></div>
            </div>

            <h3
              class="relative z-10 text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
              {{ value.title }}
            </h3>
            <p
              class="relative z-10 text-sm sm:text-base text-gray-600 leading-relaxed transition-colors group-hover:text-gray-700">
              {{ value.description }}
            </p>

            <!-- Enhanced decorative elements -->
            <div
              class="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 -mr-4 sm:-mr-6 -mt-4 sm:-mt-6 rounded-full opacity-20 group-hover:opacity-40 transition-all duration-700"
              :class="`bg-${value.color}-500`"></div>
            <div
              class="absolute top-1/4 right-1/4 w-10 h-10 sm:w-12 sm:h-12 rounded-full opacity-15 group-hover:opacity-30 transition-all duration-1000"
              :class="`bg-${value.color}-400`"></div>
            <div
              class="absolute bottom-0 left-0 w-20 h-20 sm:w-28 sm:h-28 -ml-6 sm:-ml-10 -mb-6 sm:-mb-10 rounded-full opacity-15 group-hover:opacity-25 transition-all duration-800"
              :class="`bg-${value.color}-600`"></div>
            <div
              class="absolute bottom-1/3 right-1/4 w-12 h-12 sm:w-16 sm:h-16 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-1200"
              :class="`bg-${value.color}-300`"></div>

            <!-- SVG decorative elements -->
            <svg
              class="absolute bottom-2 left-2 w-12 h-12 sm:w-16 sm:h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
              :class="`text-${value.color}-500`" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor"
                d="M42,-71.2C55.2,-63.5,66.7,-53.1,74.3,-40.2C81.9,-27.3,85.6,-11.9,85.2,3.7C84.8,19.3,80.3,38.7,69.8,52.8C59.3,66.9,42.8,75.8,25.7,80.4C8.6,85,-9.1,85.4,-24.9,79.6C-40.7,73.8,-54.6,61.8,-63.8,47.2C-73,32.5,-77.5,15.3,-77.9,-2.1C-78.3,-19.5,-74.6,-39,-63.4,-54.2C-52.2,-69.5,-33.5,-80.5,-15.3,-86.2C2.9,-91.9,29,-92.9,42,-71.2Z"
                transform="translate(100 100)"></path>
            </svg>
          </div>
        </div>

        <!-- Enhanced floating decorative elements -->
        <div class="hidden lg:block">
          <div
            class="absolute left-10 top-1/4 w-40 h-40 rounded-full bg-emerald-300 opacity-25 blur-xl animate-float-slow">
          </div>
          <div
            class="absolute right-20 top-1/3 w-48 h-48 rounded-full bg-blue-300 opacity-25 blur-xl animate-float-medium">
          </div>
          <div
            class="absolute left-1/3 bottom-1/4 w-36 h-36 rounded-full bg-amber-200 opacity-25 blur-xl animate-float-slow">
          </div>
          <div
            class="absolute left-1/4 top-1/2 w-28 h-28 rounded-full bg-purple-200 opacity-20 blur-xl animate-float-fast">
          </div>
          <div
            class="absolute right-1/4 bottom-1/3 w-32 h-32 rounded-full bg-cyan-200 opacity-20 blur-xl animate-float-medium">
          </div>
        </div>
      </div>
    </section>

    <!-- Mission/Vision Section -->
    <section class="py-12 sm:py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <!-- Image with Floating Elements -->
          <div class="lg:w-1/2 relative">
            <div class="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
              <img :src="groupImage" alt="Our Mission" class="w-full h-auto object-cover" />
            </div>

            <!-- Floating Stats -->
            <div
              class="absolute -bottom-14 sm:-bottom-18 -left-6 sm:-left-8 bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl p-4 sm:p-6 w-48 sm:w-64 z-10">
              <div class="text-green-600 text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">2019</div>
              <div class="text-xs sm:text-sm text-gray-600">Founded with a vision for change</div>
            </div>

            <div
              class="absolute -top-10 sm:-top-14 -right-6 sm:-right-8 bg-green-600 text-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl p-4 sm:p-6 w-48 sm:w-64 z-10">
              <div class="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">8+</div>
              <div class="text-xs sm:text-sm">Branches Nationwide</div>
            </div>
          </div>

          <!-- Content -->
          <div class="lg:w-1/2">
            <div class="space-y-8 sm:space-y-12">
              <div class="group">
                <div class="mt-12 md:mt-0 lg:mt-0 flex items-center mb-4 sm:mb-6">
                  <div
                    class="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-green-100 flex items-center justify-center mr-4 sm:mr-6">
                    <i class="fas fa-users text-green-600 text-xl sm:text-2xl"></i>
                  </div>
                  <h3 class="text-2xl sm:text-3xl font-bold text-gray-800">Who We Are</h3>
                </div>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Unashamed Charity Group is a foundation dedicated to serving the marginalized through food drives,
                  outreach programs, and community support initiatives, inspired by James 1:28.
                </p>
              </div>

              <div class="group">
                <div class="flex items-center mb-4 sm:mb-6">
                  <div
                    class="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-blue-100 flex items-center justify-center mr-4 sm:mr-6">
                    <i class="fas fa-bullseye text-blue-600 text-xl sm:text-2xl"></i>
                  </div>
                  <h3 class="text-2xl sm:text-3xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  To mobilize youth and community members in compassionate service, fostering spiritual, social,
                  physical, and economic transformation through partnership in God's Kingdom work.
                </p>
              </div>

              <div class="group">
                <div class="flex items-center mb-4 sm:mb-6">
                  <div
                    class="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-purple-100 flex items-center justify-center mr-4 sm:mr-6">
                    <i class="fas fa-eye text-purple-600 text-xl sm:text-2xl"></i>
                  </div>
                  <h3 class="text-2xl sm:text-3xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  A world where every community member is engaged, educated, and empowered to respond to needs with
                  purpose-driven action rooted in divine mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="py-16 sm:py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="text-center mb-12 sm:mb-16">
          <span class="text-green-600 font-semibold tracking-wider text-sm sm:text-base">JOIN US</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mt-2 sm:mt-3">Upcoming <span
              class="relative inline-block">Events
              <svg class="absolute -bottom-2 sm:-bottom-2 left-0 w-full h-2 sm:h-3 text-emerald-400"
                viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M0 10 Q 50 18, 100 10 T 200 10" stroke-width="0"></path>
              </svg>
            </span></h2>
          <p class="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-4 sm:mt-6">
            Participate in our next community initiatives and make a difference
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div v-for="event in upcomingEvents" :key="event.id"
            class="bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden transition-all duration-500 hover:shadow-lg sm:hover:shadow-xl group">
            <div class="relative h-40 sm:h-48 bg-contain overflow-hidden">
              <img :src="eventImage" alt="Event"
                class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div
                class="absolute top-3 sm:top-4 right-3 sm:right-4 bg-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                {{ format(new Date(event.date), 'MMM dd') }}
              </div>
            </div>

            <div class="p-4 sm:p-6">
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">{{ event.title }}</h3>
              <p class="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">{{ event.description }}</p>
              <div class="flex justify-between items-center">
                <div class="flex items-center text-xs sm:text-sm text-gray-500">
                  <i class="fas fa-map-marker-alt mr-1 sm:mr-2 text-green-600"></i>
                  <span>Nairobi, Kenya</span>
                </div>
                <a href="#"
                  class="text-green-600 font-semibold hover:text-green-800 transition-colors flex items-center text-xs sm:text-sm">
                  Details
                  <svg class="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-8 sm:mt-12">
          <a href="#"
            class="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
            View All Events
            <i class="fas fa-arrow-right ml-1 sm:ml-2"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Testimonials Section with animated cards -->
    <section class="py-16 sm:py-20 bg-green-700 text-white relative overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 relative z-10">
        <div class="text-center mb-12 sm:mb-16">
          <span class="text-green-300 font-semibold tracking-wider text-xs sm:text-sm">VOICES OF IMPACT</span>
          <h2 class="text-3xl sm:text-4xl font-bold mt-2 sm:mt-3">Stories That Inspire</h2>
          <div class="w-16 sm:w-20 h-0.5 sm:h-1 bg-green-400 mx-auto mt-3 sm:mt-4 animate-grow"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index"
            class="bg-white/10 p-6 sm:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 testimonial-card">
            <div class="flex items-center mb-4 sm:mb-6">
              <img :src="testimonial.image" :alt="testimonial.name"
                class="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover mr-3 sm:mr-4 border-2 border-green-400">
              <div>
                <h4 class="font-bold text-base sm:text-lg">{{ testimonial.name }}</h4>
                <div class="text-green-200 text-xs sm:text-sm">{{ testimonial.role }}</div>
              </div>
            </div>
            <p class="italic mb-4 sm:mb-6 relative pl-4 sm:pl-6 text-sm sm:text-base">
              <span class="absolute left-0 top-0 text-green-400 text-xl sm:text-2xl font-serif">"</span>
              {{ testimonial.quote }}
            </p>
            <div class="text-yellow-400 text-sm sm:text-base">
              <i v-for="star in 5" :key="star" class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Balanced Color CTA Section -->
    <section id="cta" class="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <!-- Geometric background elements -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-30">
        </div>
        <div
          class="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20">
        </div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 relative z-10">
        <div class="max-w-3xl sm:max-w-4xl mx-auto text-center">
          <!-- Heading with balanced color contrast -->
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Ready to <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">Make an
              Impact?</span>
          </h2>

          <!-- Supporting text with balanced contrast -->
          <p class="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Join our community of changemakers creating sustainable solutions for tomorrow.
          </p>

          <!-- Action buttons with balanced color scheme -->
          <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <!-- Primary button (emerald) -->
            <a href="/donate"
              class="w-1/2 lg:w-1/4 relative group overflow-hidden bg-green-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg sm:rounded-xl transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-0.5 sm:hover:-translate-y-1 text-sm sm:text-base">
              <span class="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                  </path>
                </svg>
                Donate Now
              </span>
              <div
                class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </a>

            <!-- Secondary button (blue outline) -->
            <a href="/volunteer"
              class="w-3/4 lg:w-1/4 relative group overflow-hidden border-2 border-blue-600 text-blue-600 hover:text-white font-bold px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-0.5 sm:hover:-translate-y-1 text-sm sm:text-base">
              <span class="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                  </path>
                </svg>
                Volunteer
              </span>
              <div class="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600 transition-all duration-300"></div>
            </a>
          </div>

          <!-- Trust indicators with balanced colors -->
          <div class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <p class="text-xs sm:text-sm text-gray-600 uppercase tracking-wider mb-1">Trusted by organizations worldwide
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

.hero-parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@keyframes float1 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

@keyframes float2 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(15px) translateX(-15px);
  }
}

@keyframes float3 {

  0%,
  100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }

  50% {
    transform: translateY(-10px) translateX(-10px) rotate(5deg);
  }
}

@keyframes float4 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(12px) translateX(8px);
  }
}

@keyframes float5 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(-8px) translateX(5px);
  }
}

@keyframes float6 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(20px) translateX(-8px);
  }
}

@keyframes float7 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(-12px) translateX(-12px);
  }
}

@keyframes float8 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(8px) translateX(12px);
  }
}

.animate-float1 {
  animation: float1 8s ease-in-out infinite;
}

.animate-float2 {
  animation: float2 10s ease-in-out infinite;
}

.animate-float3 {
  animation: float3 9s ease-in-out infinite;
}

.animate-float4 {
  animation: float4 11s ease-in-out infinite;
}

.animate-float5 {
  animation: float5 7s ease-in-out infinite;
}

.animate-float6 {
  animation: float6 12s ease-in-out infinite;
}

.animate-float7 {
  animation: float7 10s ease-in-out infinite;
}

.animate-float8 {
  animation: float8 8s ease-in-out infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease forwards;
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

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) translateX(-50%);
  }

  40% {
    transform: translateY(-10px) translateX(-50%);
  }

  60% {
    transform: translateY(-5px) translateX(-50%);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

body {
  font-family: 'Poppins', sans-serif;
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #38a169;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2f855a;
}

/* Bubble styles */
.parallax-bubble {
  filter: blur(1px);
  opacity: 0.8;
  will-change: transform;
  transition: transform 0.1s ease-out;
}

@keyframes float-slow {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(-10px) translateX(5px);
  }
}

@keyframes float-medium {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(-8px) translateX(3px);
  }
}

@keyframes float-fast {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(-5px) translateX(2px);
  }
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}

@media (max-width: 640px) {
  .hero-parallax {
    background-attachment: scroll;
  }
}
</style>
