<script setup>
import { ref, computed } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

// Sample data - replace with real data from your API
const children = ref([
  {
    id: 1,
    name: "Grace Mwende",
    age: 7,
    gender: "Female",
    country: "Kenya",
    waitingDays: 124,
    birthday: "May 15",
    bio: "Grace loves drawing and wants to be a teacher. She lives with her grandmother.",
    urgent: true
  },
  {
    id: 2,
    name: "David Omondi",
    age: 9,
    gender: "Male",
    country: "Kenya",
    waitingDays: 89,
    birthday: "August 3",
    bio: "David enjoys soccer and math. His family struggles to afford school fees.",
    urgent: false
  },
  {
    id: 3,
    name: "Amina Hassan",
    age: 5,
    gender: "Female",
    country: "Tanzania",
    waitingDays: 156,
    birthday: "January 22",
    bio: "Amina is full of energy and loves to sing. She needs sponsorship to attend school.",
    urgent: true
  },
  {
    id: 4,
    name: "Joseph Kamau",
    age: 10,
    gender: "Male",
    country: "Kenya",
    waitingDays: 67,
    birthday: "November 8",
    bio: "Joseph is bright but malnourished. Sponsorship would provide meals and education.",
    urgent: false
  },
  {
    id: 5,
    name: "Sarah Achieng",
    age: 8,
    gender: "Female",
    country: "Uganda",
    waitingDays: 112,
    birthday: "March 30",
    bio: "Sarah dreams of becoming a doctor. She's been waiting for a sponsor for months.",
    urgent: true
  },
  {
    id: 6,
    name: "Peter Otieno",
    age: 6,
    gender: "Male",
    country: "Kenya",
    waitingDays: 45,
    birthday: "July 12",
    bio: "Peter is shy but loves animals. His family cannot afford his education.",
    urgent: false
  },
  {
    id: 7,
    name: "Esther Wambui",
    age: 11,
    gender: "Female",
    country: "Kenya",
    waitingDays: 201,
    birthday: "September 5",
    bio: "Esther has been waiting the longest. She's responsible and helps care for siblings.",
    urgent: true
  },
  {
    id: 8,
    name: "Michael Njoroge",
    age: 7,
    gender: "Male",
    country: "Rwanda",
    waitingDays: 78,
    birthday: "December 18",
    bio: "Michael is creative and loves building things. Sponsorship would change his future.",
    urgent: false
  }
])

const countries = computed(() => {
  return [...new Set(children.value.map(child => child.country))]
})

const filters = ref({
  country: '',
  gender: '',
  age: ''
})

const filteredChildren = computed(() => {
  return children.value.filter(child => {
    const countryMatch = !filters.value.country || child.country === filters.value.country
    const genderMatch = !filters.value.gender || child.gender === filters.value.gender
    const ageMatch = !filters.value.age || (
      (filters.value.age === '3-5' && child.age >= 3 && child.age <= 5) ||
      (filters.value.age === '6-8' && child.age >= 6 && child.age <= 8) ||
      (filters.value.age === '9-11' && child.age >= 9 && child.age <= 11) ||
      (filters.value.age === '12+' && child.age >= 12)
    )
    return countryMatch && genderMatch && ageMatch
  })
})

const resetFilters = () => {
  filters.value = {
    country: '',
    gender: '',
    age: ''
  }
}

const faqs = ref([
  {
    question: "How does child sponsorship work?",
    answer: "When you sponsor a child, your monthly donation of $38 provides them with access to education, healthcare, nutritious food, and spiritual guidance through our local church partners. You'll receive updates about your child and can exchange letters.",
    open: false
  },
  {
    question: "Can I write to my sponsored child?",
    answer: "Yes! Letter writing is a special part of sponsorship. You can send letters through our online platform or by mail. Many sponsors find this relationship deeply rewarding as they watch their child grow and develop.",
    open: false
  },
  {
    question: "How long does sponsorship last?",
    answer: "Sponsorship typically continues until the child completes our program, usually around age 18. However, you can cancel at any time if your circumstances change. We'll immediately find another sponsor for your child.",
    open: false
  },
  {
    question: "Is my donation tax-deductible?",
    answer: "Yes, Unashamed Charity Group is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent allowed by law. You'll receive a receipt for tax purposes.",
    open: false
  },
  {
    question: "How much of my donation goes directly to the child?",
    answer: "Approximately 80% of your sponsorship goes directly to programs that benefit your sponsored child and their community. The remaining 20% covers administrative costs and fundraising to help more children.",
    open: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}

const selectedChild = ref(null)
const selectedAmount = ref(38)

const openModal = (child) => {
  selectedChild.value = child
}
</script>

<template>
  <div class="font-sans antialiased text-gray-900 bg-white">
    <!-- Navigation -->
    <TheNavbar />

    <!-- Hero Section -->
    <section class="relative h-screen min-h-[600px] overflow-hidden">
      <!-- High-contrast background image with dark overlay -->
      <div class="absolute inset-0">
        <img src="https://cdn.pixabay.com/photo/2015/07/31/15/01/girl-869213_1280.jpg" alt="Happy child"
          class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      </div>

      <!-- Content with elegant presentation -->
      <div class="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white">
        <div class="max-w-4xl mx-auto">
          <!-- Animated badge -->
          <div class="mb-8 animate-fade-in-down">
            <span
              class="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-green-300 font-medium text-sm tracking-wider border border-white/20">
              COMPASSION IN ACTION
            </span>
          </div>

          <!-- Headline with gradient text -->
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-down delay-100">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">Sponsor</span> a
            Child in Need
          </h1>

          <!-- Subheading -->
          <p
            class="text-xl md:text-2xl opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-down delay-200">
            Change a child's story through sponsorship. Provide life-changing opportunities to children living in
            poverty.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-down delay-300">
            <a href="#children"
              class="relative overflow-hidden group bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              <span class="relative z-10 flex items-center justify-center">
                Meet the Children
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path>
                </svg>
              </span>
              <span
                class="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a href="#how-it-works"
              class="relative overflow-hidden group border-2 border-white hover:border-green-300 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10">
              <span class="relative z-10 flex items-center justify-center">
                How It Works
                <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
              <span
                class="absolute inset-0 bg-green-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-8 h-8 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Impact Stats -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="p-6">
            <div class="text-4xl font-bold text-green-600 mb-3">1.9M+</div>
            <div class="text-gray-700">Children Sponsored</div>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold text-green-600 mb-3">25+</div>
            <div class="text-gray-700">Countries</div>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold text-green-600 mb-3">60+</div>
            <div class="text-gray-700">Years of Experience</div>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold text-green-600 mb-3">100%</div>
            <div class="text-gray-700">Christ-Centered</div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section id="how-it-works" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Child Sponsorship Works</h2>
          <div class="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-10">
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i class="fas fa-search text-green-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-center mb-4">1. Choose a Child</h3>
            <p class="text-gray-600 text-center">
              Browse profiles of children waiting for sponsors. You can search by age, country, or special needs.
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i class="fas fa-hand-holding-heart text-green-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-center mb-4">2. Become a Sponsor</h3>
            <p class="text-gray-600 text-center">
              For just $38/month, you'll provide life-changing support including education, healthcare, and spiritual
              guidance.
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i class="fas fa-heart text-green-600 text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-center mb-4">3. Change a Life</h3>
            <p class="text-gray-600 text-center">
              Exchange letters, see their progress, and witness the transformation your sponsorship brings.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2">
            <div class="relative rounded-xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9">
              <!-- AI-generated placeholder image for video -->
              <img src="https://source.unsplash.com/random/800x450/?charity,children" alt="Sponsorship impact"
                class="w-full h-96 object-cover">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center">
                  <i class="fas fa-play text-green-600 text-3xl"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The Power of Sponsorship</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Watch how child sponsorship breaks the cycle of poverty. Your monthly gift provides access to education,
              medical care, nutrition, and most importantly, the opportunity to hear about Jesus and be encouraged by a
              local church.
            </p>
            <a href="#" class="inline-flex items-center text-green-600 font-semibold hover:text-green-800">
              Learn More About Our Program
              <i class="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Children Grid -->
    <section id="children" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Children Waiting for Sponsors</h2>
          <p class="text-gray-600 max-w-2xl mx-auto mb-6">
            Each of these children is praying for a sponsor who will help change their life story.
          </p>
          <div class="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <!-- Filter Controls -->
        <div class="mb-12 bg-white p-6 rounded-xl shadow-md">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <select v-model="filters.country"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">
                <option value="">All Countries</option>
                <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
              </select>
            </div>
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <select v-model="filters.gender"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">
                <option value="">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <select v-model="filters.age"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">
                <option value="">All Ages</option>
                <option value="3-5">3-5 years</option>
                <option value="6-8">6-8 years</option>
                <option value="9-11">9-11 years</option>
                <option value="12+">12+ years</option>
              </select>
            </div>
            <div class="flex items-end">
              <button @click="resetFilters" class="px-4 py-3 text-gray-600 hover:text-green-600">
                Reset
              </button>
            </div>
          </div>
        </div>

        <!-- Children Grid -->
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div v-for="child in filteredChildren" :key="child.id"
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
            <div class="relative">
              <!-- AI-generated child images from Unsplash -->
              <img
                :src="`https://source.unsplash.com/random/400x500/?portrait,${child.gender === 'Male' ? 'boy' : 'girl'},${child.country.toLowerCase()}`"
                :alt="child.name" class="w-full h-64 object-cover">
              <div v-if="child.urgent"
                class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                URGENT
              </div>
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div class="text-white font-bold text-lg">{{ child.name }}</div>
                <div class="text-white/90 text-sm">{{ child.age }} years old • {{ child.country }}</div>
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <div>
                  <div class="text-gray-500 text-sm">Waiting</div>
                  <div class="font-medium">{{ child.waitingDays }} days</div>
                </div>
                <div>
                  <div class="text-gray-500 text-sm">Birthday</div>
                  <div class="font-medium">{{ child.birthday }}</div>
                </div>
              </div>
              <p class="text-gray-600 mb-6 text-sm">{{ child.bio }}</p>
              <button @click="openModal(child)"
                class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300">
                Sponsor {{ child.name.split(' ')[0] }}
              </button>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="mt-12 flex justify-center">
          <nav class="inline-flex rounded-md shadow">
            <a href="#" class="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Previous</span>
              <i class="fas fa-chevron-left"></i>
            </a>
            <a href="#" class="px-4 py-2 border-t border-b border-gray-300 bg-white text-green-600 font-medium">
              1
            </a>
            <a href="#" class="px-4 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              2
            </a>
            <a href="#" class="px-4 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              3
            </a>
            <a href="#" class="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Next</span>
              <i class="fas fa-chevron-right"></i>
            </a>
          </nav>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-green-700 text-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Sponsor Stories</h2>
          <div class="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-2 gap-10">
          <div class="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10">
            <div class="flex items-center mb-6">
              <!-- AI-generated sponsor image -->
              <img src="https://source.unsplash.com/random/100x100/?portrait,woman" alt="Sponsor"
                class="w-14 h-14 rounded-full object-cover mr-4 border-2 border-green-400">
              <div>
                <h4 class="font-bold text-lg">Mark & Sarah J.</h4>
                <div class="text-green-200 text-sm">Sponsors since 2015</div>
              </div>
            </div>
            <p class="italic mb-6 relative pl-6">
              <span class="absolute left-0 top-0 text-green-400 text-2xl font-serif">"</span>
              Sponsoring Maria has been one of the most rewarding experiences of our lives. Watching her grow through
              letters and photos, knowing we're helping her break the cycle of poverty - it's priceless.
            </p>
            <div class="flex items-center">
              <div class="mr-4">
                <!-- AI-generated child image -->
                <img src="https://source.unsplash.com/random/100x100/?portrait,girl,african" alt="Sponsored child"
                  class="w-12 h-12 rounded-full object-cover border-2 border-white">
              </div>
              <div>
                <div class="font-medium">Maria, 9</div>
                <div class="text-green-200 text-sm">Kenya</div>
              </div>
            </div>
          </div>
          <div class="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10">
            <div class="flex items-center mb-6">
              <!-- AI-generated sponsor image -->
              <img src="https://source.unsplash.com/random/100x100/?portrait,man" alt="Sponsor"
                class="w-14 h-14 rounded-full object-cover mr-4 border-2 border-green-400">
              <div>
                <h4 class="font-bold text-lg">David T.</h4>
                <div class="text-green-200 text-sm">Sponsor since 2018</div>
              </div>
            </div>
            <p class="italic mb-6 relative pl-6">
              <span class="absolute left-0 top-0 text-green-400 text-2xl font-serif">"</span>
              When I first sponsored Emmanuel, I thought I was just helping a child. But through our letters, I've
              realized he's helped me grow in my faith just as much as I've helped him with his education.
            </p>
            <div class="flex items-center">
              <div class="mr-4">
                <!-- AI-generated child image -->
                <img src="https://source.unsplash.com/random/100x100/?portrait,boy,african" alt="Sponsored child"
                  class="w-12 h-12 rounded-full object-cover border-2 border-white">
              </div>
              <div>
                <div class="font-medium">Emmanuel, 12</div>
                <div class="text-green-200 text-sm">Uganda</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div class="container mx-auto px-6 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Change a Life?</h2>
          <p class="text-xl mb-10">
            Your sponsorship of just $38 a month provides a child with education, healthcare, nutrition, and the
            opportunity to hear about Jesus.
          </p>
          <a href="#children"
            class="inline-block bg-white text-green-700 hover:bg-green-50 font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            Sponsor a Child Today
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div class="w-20 h-1 bg-green-500 mx-auto"></div>
        </div>

        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-6 border-b border-gray-200 pb-6">
            <button @click="toggleFaq(index)" class="flex justify-between items-center w-full text-left">
              <h3 class="text-lg font-medium text-gray-800">{{ faq.question }}</h3>
              <i :class="{ 'transform rotate-180': faq.open }"
                class="fas fa-chevron-down text-green-600 transition-transform duration-300"></i>
            </button>
            <div v-show="faq.open" class="mt-4 text-gray-600">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sponsorship Modal -->
    <div v-if="selectedChild" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900 mb-6">
                  Sponsor {{ selectedChild.name }}
                </h3>
                <div class="flex flex-col md:flex-row gap-8">
                  <div class="md:w-1/3">
                    <!-- AI-generated child image for modal -->
                    <img
                      :src="`https://source.unsplash.com/random/400x500/?portrait,${selectedChild.gender === 'Male' ? 'boy' : 'girl'},${selectedChild.country.toLowerCase()}`"
                      :alt="selectedChild.name" class="w-full rounded-lg shadow-md">
                    <div class="mt-4 text-center">
                      <div class="font-bold text-gray-800">{{ selectedChild.name }}</div>
                      <div class="text-gray-600 text-sm">{{ selectedChild.age }} years old • {{ selectedChild.country }}
                      </div>
                    </div>
                  </div>
                  <div class="md:w-2/3">
                    <div class="mb-6">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="amount">
                        Monthly Sponsorship Amount
                      </label>
                      <div class="grid grid-cols-3 gap-4">
                        <button v-for="amount in [38, 45, 50]" :key="amount" @click="selectedAmount = amount"
                          :class="{ 'bg-green-600 text-white': selectedAmount === amount, 'bg-gray-100 text-gray-800': selectedAmount !== amount }"
                          class="py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                          ${{ amount }}
                        </button>
                      </div>
                    </div>
                    <div class="mb-6">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Your Information
                      </label>
                      <input type="text" id="name" placeholder="Full Name"
                        class="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-green-500 focus:border-green-500">
                      <input type="email" id="email" placeholder="Email Address"
                        class="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-green-500 focus:border-green-500">
                      <input type="tel" id="phone" placeholder="Phone Number"
                        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">
                    </div>
                    <div class="mb-6">
                      <label class="block text-gray-700 text-sm font-bold mb-2" for="payment">
                        Payment Method
                      </label>
                      <div class="flex items-center mb-3">
                        <input id="credit-card" name="payment" type="radio" checked
                          class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300">
                        <label for="credit-card" class="ml-3 block text-sm font-medium text-gray-700">
                          Credit/Debit Card
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="bank-transfer" name="payment" type="radio"
                          class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300">
                        <label for="bank-transfer" class="ml-3 block text-sm font-medium text-gray-700">
                          Bank Transfer
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
              Complete Sponsorship
            </button>
            <button @click="selectedChild = null" type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<style scoped>
/* Custom styles */
.hero-parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Smooth transitions */
a,
button,
.transition-all {
  transition: all 0.3s ease;
}

/* Hover effects */
.hover-scale:hover {
  transform: scale(1.05);
}

/* Responsive typography */
@media (min-width: 1024px) {
  .text-responsive {
    font-size: calc(1rem + 0.5vw);
  }
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

/* Image loading animation */
img {
  background: linear-gradient(110deg, #f5f5f5 8%, #eee 18%, #f5f5f5 33%);
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>
