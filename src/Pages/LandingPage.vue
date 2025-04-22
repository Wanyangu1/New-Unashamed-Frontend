<script setup>
import { onMounted } from 'vue';
import { format } from 'date-fns';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';
import { useEvents } from "@/composables/useEvent";
import testimonial1 from '@/assets/images/testimonials/testimonial1.jpg'
import testimonial2 from '@/assets/images/testimonials/testimonial2.jpg'
import testimonial3 from '@/assets/images/testimonials/testimonial3.jpg'

// Enhanced parallax effect
const handleScroll = () => {
  const parallaxBg = document.querySelector('.parallax-bg')
  const heroContent = document.querySelector('.hero-content')
  if (parallaxBg && heroContent) {
    const scrollPosition = window.pageYOffset
    parallaxBg.style.transform = `translateY(${scrollPosition * 0.3}px)`
    heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`
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
      <div class="parallax-bg absolute inset-0 bg-[url('@/assets/images/bg.jpg')] bg-cover bg-center bg-no-repeat"
        data-parallax="scroll" data-image-src="@/assets/images/bg.jpg" data-speed="0.4"></div>

      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <!-- Floating Elements -->
      <div class="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-green-400/20 animate-float1"></div>
      <div class="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-white/20 animate-float2"></div>

      <!-- Content -->
      <div class="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 text-white">
        <div class="mb-6 animate-fade-in">
          <span
            class="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-green-300 font-medium text-sm tracking-wider">
            COMPASSION IN ACTION
          </span>
        </div>
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in delay-100">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Unashamed</span>
          Charity
        </h1>
        <p class="text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90 mb-10 animate-fade-in delay-200">
          Empowering lives, uplifting communities, and transforming the world through compassion and action
        </p>
        <div class="flex flex-col sm:flex-row gap-6 animate-fade-in delay-300">
          <a href="#cta"
            class="relative overflow-hidden group bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg">
            <span class="relative z-10 flex items-center">
              Get Involved
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </span>
            <span
              class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          <a href="#about"
            class="relative overflow-hidden group border-2 border-white hover:border-green-400 text-white font-bold px-10 py-4 rounded-full transition-all duration-300">
            <span class="relative z-10 flex items-center">
              Learn More
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
            <span
              class="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Enhanced Stats Section with Icons -->
    <section class="py-2 bg-gradient-to-b from-green-700 to-green-800 text-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="p-8 group transform transition-all duration-500 hover:scale-105">
            <div class="flex justify-center mb-2">
              <div class="w-15 h-15 rounded-full bg-green-600/30 flex items-center justify-center">
                <i class="fas fa-users text-3xl text-green-300"></i>
              </div>
            </div>
            <div class="text-5xl font-bold mb-2 counter" data-target="500">0</div>
            <div class="text-xl font-light uppercase tracking-wider">Lives Impacted</div>
            <div class="w-16 h-1 bg-green-400 mx-auto mt-4 group-hover:w-24 transition-all duration-500"></div>
          </div>
          <div class="p-8 group transform transition-all duration-500 hover:scale-105">
            <div class="flex justify-center mb-2">
              <div class="w-15 h-15 rounded-full bg-green-600/30 flex items-center justify-center">
                <i class="fas fa-hands-helping text-3xl text-green-300"></i>
              </div>
            </div>
            <div class="text-5xl font-bold mb-2 counter" data-target="50">0</div>
            <div class="text-xl font-light uppercase tracking-wider">Dedicated Volunteers</div>
            <div class="w-16 h-1 bg-green-400 mx-auto mt-4 group-hover:w-24 transition-all duration-500"></div>
          </div>
          <div class="p-8 group transform transition-all duration-500 hover:scale-105">
            <div class="flex justify-center mb-2">
              <div class="w-15 h-15 rounded-full bg-green-600/30 flex items-center justify-center">
                <i class="fas fa-project-diagram text-3xl text-green-300"></i>
              </div>
            </div>
            <div class="text-5xl font-bold mb-2 counter" data-target="20">0</div>
            <div class="text-xl font-light uppercase tracking-wider">Community Projects</div>
            <div class="w-16 h-1 bg-green-400 mx-auto mt-4 group-hover:w-24 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section id="about" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-green-600 font-semibold tracking-wider">OUR FOUNDATION</span>
          <h2 class="text-4xl font-bold text-gray-800 mt-3">Core Values That Guide Us</h2>
          <div class="w-20 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-10">
          <div v-for="(value, index) in values" :key="index"
            class="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              :class="`bg-${value.color}-100 text-${value.color}-600`">
              <i :class="value.icon" class="text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4" :class="`text-${value.color}-600`">{{ value.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission/Vision Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <!-- Image with Floating Elements -->
          <div class="lg:w-1/2 relative">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="@/assets/images/Events/Group.jpg" alt="Our Mission" class="w-full h-auto object-cover">
            </div>


            <!-- Floating Stats -->
            <div class="absolute -bottom-18 -left-8 bg-white rounded-xl shadow-xl p-6 w-64 z-10">
              <div class="text-green-600 text-4xl font-bold mb-2">2019</div>
              <div class="text-gray-600">Founded with a vision for change</div>
            </div>

            <div class="absolute -top-14 -right-8 bg-green-600 text-white rounded-xl shadow-xl p-6 w-64 z-10">
              <div class="text-4xl font-bold mb-2">8+</div>
              <div>Branches Nationwide</div>
            </div>
          </div>


          <!-- Content -->
          <div class="lg:w-1/2">
            <div class="space-y-12">
              <div class="group">
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mr-6">
                    <i class="fas fa-users text-green-600 text-2xl"></i>
                  </div>
                  <h3 class="text-3xl font-bold text-gray-800">Who We Are</h3>
                </div>
                <p class="text-gray-600 leading-relaxed">
                  Unashamed Charity Group is a foundation dedicated to serving the marginalized through food drives,
                  outreach programs, and community support initiatives, inspired by James 1:28.
                </p>
              </div>

              <div class="group">
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mr-6">
                    <i class="fas fa-bullseye text-blue-600 text-2xl"></i>
                  </div>
                  <h3 class="text-3xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p class="text-gray-600 leading-relaxed">
                  To mobilize youth and community members in compassionate service, fostering spiritual, social,
                  physical, and economic transformation through partnership in God's Kingdom work.
                </p>
              </div>

              <div class="group">
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mr-6">
                    <i class="fas fa-eye text-purple-600 text-2xl"></i>
                  </div>
                  <h3 class="text-3xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p class="text-gray-600 leading-relaxed">
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
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-green-600 font-semibold tracking-wider">JOIN US</span>
          <h2 class="text-4xl font-bold text-gray-800 mt-3">Upcoming Events</h2>
          <div class="w-20 h-1 bg-green-500 mx-auto mt-4"></div>
          <p class="text-gray-600 max-w-2xl mx-auto mt-6">
            Participate in our next community initiatives and make a difference
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="event in upcomingEvents" :key="event.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl group">
            <div class="relative h-48 bg-contain overflow-hidden">
              <img src="@/assets/images/event.png" alt="Event"
                class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div class="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {{ format(new Date(event.date), 'MMM dd') }}
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 text-gray-800">{{ event.title }}</h3>
              <p class="text-gray-600 mb-6">{{ event.description }}</p>
              <div class="flex justify-between items-center">
                <div class="flex items-center text-sm text-gray-500">
                  <i class="fas fa-map-marker-alt mr-2 text-green-600"></i>
                  <span>Nairobi, Kenya</span>
                </div>
                <a href="#"
                  class="text-green-600 font-semibold hover:text-green-800 transition-colors flex items-center">
                  Details
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a href="#"
            class="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
            View All Events
            <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
    <!-- Testimonials Section with animated cards -->
    <section class="py-20 bg-green-700 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[url('@/assets/images/pattern.png')] bg-repeat"></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <span class="text-green-300 font-semibold tracking-wider">VOICES OF IMPACT</span>
          <h2 class="text-4xl font-bold mt-3">Stories That Inspire</h2>
          <div class="w-20 h-1 bg-green-400 mx-auto mt-4 animate-grow"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(testimonial, index) in testimonials" :key="index"
            class="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-500 transform hover:-translate-y-2 testimonial-card">
            <div class="flex items-center mb-6">
              <img :src="testimonial.image" :alt="testimonial.name"
                class="w-14 h-14 rounded-full object-cover mr-4 border-2 border-green-400">
              <div>
                <h4 class="font-bold text-lg">{{ testimonial.name }}</h4>
                <div class="text-green-200 text-sm">{{ testimonial.role }}</div>
              </div>
            </div>
            <p class="italic mb-6 relative pl-6">
              <span class="absolute left-0 top-0 text-green-400 text-2xl font-serif">"</span>
              {{ testimonial.quote }}
            </p>
            <div class="text-yellow-400">
              <i v-for="star in 5" :key="star" class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div class="container mx-auto px-6 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p class="text-xl mb-10">
            Join our movement of compassionate individuals transforming communities through faith and action.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/donate"
              class="relative overflow-hidden group bg-white text-green-700 font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg">
              <span class="relative z-10 flex items-center">
                <i class="fas fa-donate mr-2"></i> Donate Now
              </span>
              <span
                class="absolute inset-0 bg-green-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a href="/volunteer"
              class="relative overflow-hidden group border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
              <span class="relative z-10 flex items-center">
                <i class="fas fa-hands-helping mr-2"></i> Volunteer
              </span>
              <span
                class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
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

.animate-float1 {
  animation: float1 8s ease-in-out infinite;
}

.animate-float2 {
  animation: float2 10s ease-in-out infinite;
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

.animate-fade-in {
  animation: fadeIn 1s ease forwards;
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
    transform: translateY(-20px) translateX(-50%);
  }

  60% {
    transform: translateY(-10px) translateX(-50%);
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
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #38a169;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2f855a;
}
</style>
