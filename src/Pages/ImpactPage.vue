<script setup>
import { onMounted, onUnmounted } from 'vue';
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import bgImg from '@/assets/images/Events/bg5.jpeg'
//import backgroundImg from '@/assets/images/background.jpg'
import backgdImg from '@/assets/images/Child.webp'


const impactItems = [
  {
    title: "Youth Leadership Development",
    description: "Equipping the next generation to lead with purpose and courage through comprehensive training programs."
  },
  {
    title: "Community Projects",
    description: "From building schools to mental health awareness, we create tangible change where it's needed most."
  },
  {
    title: "Global Advocacy",
    description: "Hosting conferences and events to amplify voices of unashamed individuals worldwide."
  }
];

const activities = [
  {
    title: "Feeding the Needy",
    description: "Providing meals to vulnerable families through food drives and community partnerships.",
    category: "Community Support",
    color: "green",
    icon: "FoodIcon",
    image: new URL('@/assets/images/Events/Feeding1.jpg', import.meta.url).href
  },
  {
    title: "Prom Night",
    description: "Creating unforgettable moments for underprivileged students to celebrate their achievements.",
    category: "Youth Empowerment",
    color: "blue",
    icon: "PartyIcon",
    image: new URL('@/assets/images/Events/Prom.jpg', import.meta.url).href
  },
  {
    title: "Fun Days",
    description: "Bringing smiles through games, sports and activities in safe environments.",
    category: "Community Building",
    color: "yellow",
    icon: "HappyIcon",
    image: new URL('@/assets/images/Events/fun.jpg', import.meta.url).href
  },
  {
    title: "Mentorship Programs",
    description: "Guiding youth with skills and confidence to build brighter futures.",
    category: "Education",
    color: "red",
    icon: "MentorIcon",
    image: new URL('@/assets/images/Events/mentorship.png', import.meta.url).href
  },
  {
    title: "Talent Nurturing",
    description: "Identifying and developing talents in arts, music, sports and more.",
    category: "Youth Development",
    color: "green",
    icon: "TalentIcon",
    image: new URL('@/assets/images/background.jpg', import.meta.url).href
  },
  {
    title: "Cooking Classes",
    description: "Teaching practical skills while promoting healthy eating and community.",
    category: "Life Skills",
    color: "purple",
    icon: "CookingIcon",
    image: new URL('@/assets/images/feeding.jpg', import.meta.url).href
  }
];

const objectives = [
  {
    title: "Beacon of Hope",
    description: "Serve as a catalyst for empowerment and transformation in marginalized communities."
  },
  {
    title: "Spiritual Growth",
    description: "Foster environments that promote faith-based development and values."
  },
  {
    title: "Sustainable Change",
    description: "Create initiatives with lasting impact through collaboration and innovation."
  }
];

// Enhanced parallax effect
const handleScroll = () => {
  const parallaxBg = document.querySelector('.parallax-bg');
  if (parallaxBg) {
    const scrollPosition = window.pageYOffset;
    parallaxBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="font-sans">
    <TheNavbar />

    <!-- Enhanced Hero Section with Parallax -->
    <div class="hero-parallax relative h-screen min-h-[600px] overflow-hidden">
      <div class="parallax-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${bgImg})` }"></div>


      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <!-- Floating Elements with enhanced animation -->
      <div class="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-yellow-400/20 animate-float1"></div>
      <div class="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-green-500/20 animate-float2"></div>
      <div class="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-blue-400/20 animate-float3"></div>
      <div class="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full bg-purple-500/20 animate-float4"></div>

      <!-- Content -->
      <div
        class="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-6 md:px-16 lg:px-24">
        <div class="mb-6">
          <span
            class="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-yellow-400 font-medium text-sm tracking-wider">
            MAKING A DIFFERENCE
          </span>
        </div>
        <h2 class="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          OUR <span class="text-yellow-400">IMPACT</span>
        </h2>
        <p class="text-xl md:text-2xl max-w-3xl leading-relaxed opacity-90 mb-8">
          Unashamed Group has left its mark through initiatives that transform lives and communities
        </p>

        <!-- Animated Impact List -->
        <div class="space-y-4 max-w-3xl">
          <div v-for="(item, index) in impactItems" :key="index" class="flex items-start group"
            :class="`animate-fade-in delay-${index + 1}00`">
            <div class="flex-shrink-0 mt-1 mr-4">
              <div
                class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center transform group-hover:rotate-45 transition duration-300">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3
                class="text-lg md:text-xl font-semibold text-white group-hover:text-yellow-400 transition duration-300">
                {{ item.title }}
              </h3>
              <p class="text-gray-300 group-hover:text-white transition duration-300">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>

        <button
          class="mt-12 relative overflow-hidden group bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg">
          <span class="relative z-10 flex items-center">
            Join Our Movement
            <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span
            class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>

    <!-- Impact Cards Section with Modern Layout -->
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-yellow-600 font-semibold tracking-wider">WHAT WE DO</span>
          <h2 class="text-4xl font-bold text-gray-800 mt-3">Our Transformative Activities</h2>
          <div class="w-20 h-1 bg-green-500 mx-auto mt-4 mb-8"></div>
          <p class="text-gray-600 max-w-3xl mx-auto text-lg">
            Each initiative is designed to create lasting impact in our communities
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div v-for="(activity, index) in activities" :key="index"
            class="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-[400px]">
            <!-- Image with Gradient Overlay -->
            <div class="absolute inset-0 z-0">
              <img :src="activity.image" :alt="activity.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 h-full flex flex-col justify-end p-8 text-white">
              <div class="transform transition-all duration-500 group-hover:-translate-y-3">
                <span class="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
                  {{ activity.category }}
                </span>
                <h3 class="text-2xl font-bold mb-3" :class="`text-${activity.color}-400`">
                  {{ activity.title }}
                </h3>
                <p class="text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {{ activity.description }}
                </p>
              </div>

              <button
                class="w-full py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg font-medium flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>

            <!-- Floating Icon -->
            <div
              class="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
              <div class="w-8 h-8 rounded-full flex items-center justify-center" :class="`bg-${activity.color}-500`">
                <component :is="activity.icon" class="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Objectives Section with Split Layout -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <!-- Text Content -->
          <div class="lg:w-1/2">
            <span class="text-yellow-600 font-semibold tracking-wider">OUR PURPOSE</span>
            <h2 class="text-4xl font-bold text-gray-800 mt-3 mb-6">Our Core Objectives</h2>
            <div class="w-20 h-1 bg-yellow-500 mb-10"></div>

            <div class="space-y-8">
              <div v-for="(objective, index) in objectives" :key="index"
                class="flex items-start group transform transition-all duration-300 hover:-translate-y-1">
                <div class="flex-shrink-0 mr-6">
                  <div class="w-14 h-14 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center bg-yellow-500 text-white">
                      <span class="text-xl font-bold">{{ index + 1 }}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ objective.title }}</h3>
                  <p class="text-gray-600">{{ objective.description }}</p>
                </div>
              </div>
            </div>

            <button
              class="mt-10 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              See Our Upcoming Events
            </button>
          </div>

          <!-- Image -->
          <div class="lg:w-1/2 relative">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img :src="backgdImg" alt="Our Objectives" class="w-full h-auto object-cover" />
            </div>

            <!-- Stats Cards -->
            <div class="absolute -bottom-18 -left-10 bg-white rounded-xl shadow-lg p-6 w-64 z-10">
              <div class="text-yellow-500 text-4xl font-bold mb-2">50+</div>
              <div class="text-gray-600">Community Projects Completed</div>
            </div>

            <div class="absolute -top-15 -right-10 bg-green-500 text-white rounded-xl shadow-lg p-6 w-64 z-10">
              <div class="text-4xl font-bold mb-2">1000+</div>
              <div>Lives Impacted Annually</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<style scoped>
.hero-parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax-bg {
  will-change: transform;
  transition: transform 0.1s ease-out;
  background-attachment: fixed;
}

@keyframes float1 {

  0%,
  100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }

  25% {
    transform: translateY(-50px) translateX(30px) rotate(5deg);
  }

  50% {
    transform: translateY(-20px) translateX(-20px) rotate(-5deg);
  }

  75% {
    transform: translateY(-40px) translateX(20px) rotate(3deg);
  }
}

@keyframes float2 {

  0%,
  100% {
    transform: translateY(0) translateX(0) scale(1);
  }

  25% {
    transform: translateY(40px) translateX(-30px) scale(1.1);
  }

  50% {
    transform: translateY(10px) translateX(20px) scale(0.95);
  }

  75% {
    transform: translateY(30px) translateX(-20px) scale(1.05);
  }
}

@keyframes float3 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(-30px) translateX(15px);
  }
}

@keyframes float4 {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  50% {
    transform: translateY(20px) translateX(-15px);
  }
}

.animate-float1 {
  animation: float1 12s ease-in-out infinite;
}

.animate-float2 {
  animation: float2 14s ease-in-out infinite;
}

.animate-float3 {
  animation: float3 10s ease-in-out infinite;
}

.animate-float4 {
  animation: float4 8s ease-in-out infinite;
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

.delay-400 {
  animation-delay: 0.4s;
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
    transform: translateY(-30px) translateX(-50%);
  }

  60% {
    transform: translateY(-15px) translateX(-50%);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

/* Simple icon components for demo purposes */
.food-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /%3E%3C/svg%3E");
}
</style>
