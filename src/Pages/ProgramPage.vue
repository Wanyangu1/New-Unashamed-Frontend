<script setup>
import { ref, onMounted, computed } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

// Local image imports
import feedingImage from '@/assets/images/Events/Feeding1.jpg'
import promImage from '@/assets/images/Events/Prom.jpg'
import funImage from '@/assets/images/Events/fun.jpg'
import mentorshipImage from '@/assets/images/Events/mentorship.png'
import talentImage from '@/assets/images/background.jpg'
import highschoolImage from '@/assets/images/Events/mentorship.png'
import colorfestImage from '@/assets/images/Events/colorfest.jpg'
import mentalhealthImage from '@/assets/images/Events/mentalhealth.jpg'
import sanitaryImage from '@/assets/images/Events/cleaning.jpg'
import streetsImage from '@/assets/images/Events/streets1.jpg'
import fooddriveImage from '@/assets/images/Events/feeding1.jpg'
import youngmomsImage from '@/assets/images/Events/youngmoms.jpg'
import bgImg from '@/assets/images/Events/bg2.jpg'


const programs = ref([
  {
    title: "Feeding the Needy",
    description: "Providing meals to vulnerable families through food drives and community partnerships.",
    category: "Community Support",
    color: "green",
    icon: "FoodIcon",
    image: feedingImage,
    stats: "500+ meals served monthly"
  },
  {
    title: "Highschool Ministry",
    description: "Engaging high school students with mentorship, career guidance, and spiritual development programs.",
    category: "Youth Empowerment",
    color: "blue",
    icon: "SchoolIcon",
    image: highschoolImage,
    stats: "15 schools reached"
  },
  {
    title: "Color Festival",
    description: "Annual celebration of diversity and joy through vibrant colors, music, and community bonding.",
    category: "Community Building",
    color: "yellow",
    icon: "ColorIcon",
    image: colorfestImage,
    stats: "2,000+ participants"
  },
  {
    title: "Mental Health Advocacy",
    description: "Breaking stigma through workshops, counseling services, and awareness campaigns.",
    category: "Health",
    color: "purple",
    icon: "MindIcon",
    image: mentalhealthImage,
    stats: "300+ counseling sessions"
  },
  {
    title: "Sanitary Pads Drive",
    description: "Providing menstrual hygiene products and education to underprivileged girls and women.",
    category: "Women Empowerment",
    color: "pink",
    icon: "CareIcon",
    image: sanitaryImage,
    stats: "1,200+ kits distributed"
  },
  {
    title: "Streets Visit",
    description: "Weekly outreach to homeless communities with essential supplies and social support.",
    category: "Community Support",
    color: "orange",
    icon: "StreetIcon",
    image: streetsImage,
    stats: "50+ weekly engagements"
  },
  {
    title: "Food Drive",
    description: "Large-scale collection and distribution of food to combat hunger in disadvantaged areas.",
    category: "Community Support",
    color: "green",
    icon: "FoodIcon",
    image: fooddriveImage,
    stats: "5 tons of food collected"
  },
  {
    title: "Prom Night",
    description: "Creating unforgettable moments for underprivileged students to celebrate their achievements.",
    category: "Youth Empowerment",
    color: "blue",
    icon: "PartyIcon",
    image: promImage,
    stats: "200+ students annually"
  },
  {
    title: "Young Mothers & Teens Program",
    description: "Literacy and life skills training for young mothers and at-risk teenage girls.",
    category: "Education",
    color: "red",
    icon: "BookIcon",
    image: youngmomsImage,
    stats: "80% graduation rate"
  },
  {
    title: "Fun Days",
    description: "Bringing smiles through games, sports and activities in safe environments.",
    category: "Community Building",
    color: "yellow",
    icon: "HappyIcon",
    image: funImage,
    stats: "30+ events yearly"
  },
  {
    title: "Mentorship Programs",
    description: "Guiding youth with skills and confidence to build brighter futures.",
    category: "Education",
    color: "red",
    icon: "MentorIcon",
    image: mentorshipImage,
    stats: "150 mentor-mentee pairs"
  },
  {
    title: "Talent Nurturing",
    description: "Identifying and developing talents in arts, music, sports and more.",
    category: "Youth Development",
    color: "green",
    icon: "TalentIcon",
    image: talentImage,
    stats: "20+ talents discovered"
  },
])

const activeCategory = ref('All')
const categories = ref(['All', 'Community Support', 'Youth Empowerment', 'Education', 'Health', 'Women Empowerment', 'Community Building', 'Youth Development', 'Life Skills'])

const filteredPrograms = computed(() => {
  if (activeCategory.value === 'All') return programs.value
  return programs.value.filter(program => program.category === activeCategory.value)
})

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-card')
      }
    })
  }, { threshold: 0.1 })

  const cards = document.querySelectorAll('.program-card')
  cards.forEach(card => {
    observer.observe(card)
  })
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Navigation -->
    <TheNavbar />

    <!-- Hero Section -->
    <section class="relative h-[40vh] min-h-[400px] overflow-hidden flex items-center">
      <div class="absolute inset-0 bg-black/40 z-0"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10"></div>
      <div class="parallax-bg absolute inset-0 bg-cover bg-center brightness-75"
        :style="{ backgroundImage: `url(${bgImg})`, filter: 'brightness(60%)' }"></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">Our Life-Changing Programs</h1>
          <div class="w-24 h-1 bg-yellow-400 mx-auto mb-6 animate-grow"></div>
          <p class="text-xl text-white/90 mb-8 animate-fade-in-up delay-100">
            Transforming communities through comprehensive initiatives that address diverse needs
          </p>
          <a href="#programs"
            class="inline-block px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200">
            Explore Programs <i class="fas fa-arrow-down ml-2"></i>
          </a>
        </div>
      </div>

      <!-- Floating elements -->
      <div class="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-yellow-400/20 animate-float1"></div>
      <div class="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-green-500/20 animate-float2"></div>
    </section>

    <!-- Programs Section -->
    <section id="programs" class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Impactful Initiatives</h2>
          <div class="w-20 h-1 bg-green-500 mx-auto mb-6 animate-grow"></div>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Each program is carefully designed to create sustainable change in our communities
          </p>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button v-for="category in categories" :key="category" @click="activeCategory = category" :class="`px-5 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category ?
            'bg-green-600 text-white shadow-md' :
            'bg-gray-100 hover:bg-gray-200 text-gray-700'}`">
            {{ category }}
          </button>
        </div>

        <!-- Programs Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(program, index) in filteredPrograms" :key="index"
            class="program-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <!-- Image with floating icon -->
            <div class="relative h-60 overflow-hidden">
              <img :src="program.image" :alt="program.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div
                class="absolute top-4 right-4 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                <div class="w-10 h-10 rounded-full flex items-center justify-center" :class="`bg-${program.color}-500`">
                  <component :is="program.icon" class="w-5 h-5 text-white" />
                </div>
              </div>
              <div class="absolute bottom-4 left-4">
                <span class="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold"
                  :class="`text-${program.color}-600`">
                  {{ program.category }}
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3">{{ program.title }}</h3>
              <p class="text-gray-600 mb-4">{{ program.description }}</p>
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <i class="fas fa-chart-line mr-2" :class="`text-${program.color}-500`"></i>
                <span>{{ program.stats }}</span>
              </div>
              <button
                class="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium flex items-center justify-center transition-all duration-300">
                Learn More
                <i
                  class="fas fa-chevron-right ml-2 text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="mt-20 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-5xl font-bold mb-3">15+</div>
              <h3 class="text-xl font-semibold mb-2">Diverse Programs</h3>
              <p class="text-white/80">Addressing various community needs</p>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-3">5,000+</div>
              <h3 class="text-xl font-semibold mb-2">Lives Impacted</h3>
              <p class="text-white/80">Through our initiatives annually</p>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-3">200+</div>
              <h3 class="text-xl font-semibold mb-2">Dedicated Volunteers</h3>
              <p class="text-white/80">Making change possible</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Join Our Movement</h2>
        <div class="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you want to volunteer, donate, or partner with us, together we can create lasting change
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="/contact"
            class="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
            Become a Volunteer
          </a>
          <a href="/donate"
            class="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
            Make a Donation
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<style scoped>
.parallax-bg {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  will-change: transform;
}

@keyframes float1 {

  0%,
  100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) translateX(10px) rotate(5deg);
  }
}

@keyframes float2 {

  0%,
  100% {
    transform: translateY(0) translateX(0) scale(1);
  }

  50% {
    transform: translateY(20px) translateX(-10px) scale(1.05);
  }
}

.animate-float1 {
  animation: float1 8s ease-in-out infinite;
}

.animate-float2 {
  animation: float2 10s ease-in-out infinite;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}

.animate-grow {
  animation: grow 0.8s ease-out forwards;
  transform-origin: left;
}

@keyframes card-enter {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.program-card {
  opacity: 0;
}

.program-card.animate-card {
  animation: card-enter 0.6s ease-out forwards;
}

/* Stagger animations */
.program-card:nth-child(1).animate-card {
  animation-delay: 0.1s
}

.program-card:nth-child(2).animate-card {
  animation-delay: 0.2s
}

.program-card:nth-child(3).animate-card {
  animation-delay: 0.3s
}

.program-card:nth-child(4).animate-card {
  animation-delay: 0.4s
}

.program-card:nth-child(5).animate-card {
  animation-delay: 0.5s
}

.program-card:nth-child(6).animate-card {
  animation-delay: 0.6s
}

.program-card:nth-child(7).animate-card {
  animation-delay: 0.7s
}

.program-card:nth-child(8).animate-card {
  animation-delay: 0.8s
}

.program-card:nth-child(9).animate-card {
  animation-delay: 0.9s
}

.program-card:nth-child(10).animate-card {
  animation-delay: 1.0s
}

.program-card:nth-child(11).animate-card {
  animation-delay: 1.1s
}

.program-card:nth-child(12).animate-card {
  animation-delay: 1.2s
}

.program-card:nth-child(13).animate-card {
  animation-delay: 1.3s
}

/* Color classes for dynamic category colors */
.bg-green-500 {
  background-color: #10B981;
}

.bg-blue-500 {
  background-color: #3B82F6;
}

.bg-yellow-500 {
  background-color: #F59E0B;
}

.bg-purple-500 {
  background-color: #8B5CF6;
}

.bg-pink-500 {
  background-color: #EC4899;
}

.bg-orange-500 {
  background-color: #F97316;
}

.bg-red-500 {
  background-color: #EF4444;
}

.text-green-600 {
  color: #059669;
}

.text-blue-600 {
  color: #2563EB;
}

.text-yellow-600 {
  color: #D97706;
}

.text-purple-600 {
  color: #7C3AED;
}

.text-pink-600 {
  color: #DB2777;
}

.text-orange-600 {
  color: #EA580C;
}

.text-red-600 {
  color: #DC2626;
}
</style>
