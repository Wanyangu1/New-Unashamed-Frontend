<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Navigation -->
    <TheNavbar />

    <!-- Hero Section -->
    <section class="relative bg-green-700 text-white py-20 md:py-28">
      <div class="absolute inset-0 bg-black/40 z-0"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Your Generosity Changes Lives</h1>
          <div class="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p class="text-xl text-green-100 mb-8">
            Every donation, no matter the size, helps us continue our mission of serving those in need.
          </p>
          <a href="#donate-now"
            class="inline-block px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Donate Now <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Impact Stats -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Impact</h2>
          <div class="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            See how your contributions make a real difference in the lives of those we serve.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in impactStats" :key="stat.id"
            class="bg-green-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
            <div class="text-4xl font-bold text-green-600 mb-3">{{ stat.value }}+</div>
            <h3 class="text-lg font-semibold text-gray-800">{{ stat.label }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- How Donations Help -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Your Donation Helps</h2>
          <div class="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="cause in donationCauses" :key="cause.id"
            class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div class="h-48 overflow-hidden">
              <img :src="cause.image" :alt="cause.title"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3">{{ cause.title }}</h3>
              <p class="text-gray-600 mb-4">{{ cause.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-green-600 font-semibold">{{ cause.amount }}</span>
                <button class="text-green-600 hover:text-green-800 font-medium">
                  Learn More <i class="fas fa-chevron-right ml-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Donation Form -->
    <section id="donate-now" class="py-16 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="max-w-4xl mx-auto bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-2xl overflow-hidden">
          <div class="md:flex">
            <!-- Donation Options -->
            <div class="md:w-1/2 p-8 md:p-10 text-white">
              <h2 class="text-2xl md:text-3xl font-bold mb-6">Make a Donation</h2>
              <div class="space-y-6">
                <div>
                  <h3 class="text-lg font-semibold mb-3">Select Amount</h3>
                  <div class="grid grid-cols-3 gap-3">
                    <button v-for="amount in donationAmounts" :key="amount" @click="selectedAmount = amount"
                      :class="`py-2 rounded-lg border-2 ${selectedAmount === amount ? 'bg-white text-green-700 border-white' : 'border-white/50 text-white hover:bg-white/10'}`">
                      ${{ amount }}
                    </button>
                  </div>
                  <div class="mt-3">
                    <label for="custom-amount" class="block text-sm font-medium mb-1">Or enter custom amount</label>
                    <input type="number" id="custom-amount" v-model="customAmount" placeholder="$0.00"
                      class="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white" />
                  </div>
                </div>

                <div>
                  <h3 class="text-lg font-semibold mb-3">Donation Frequency</h3>
                  <div class="flex space-x-3">
                    <button v-for="freq in frequencies" :key="freq" @click="selectedFrequency = freq"
                      :class="`flex-1 py-2 rounded-lg border-2 ${selectedFrequency === freq ? 'bg-white text-green-700 border-white' : 'border-white/50 text-white hover:bg-white/10'}`">
                      {{ freq }}
                    </button>
                  </div>
                </div>

                <div>
                  <h3 class="text-lg font-semibold mb-3">Dedication</h3>
                  <div class="flex items-center space-x-2">
                    <input type="checkbox" id="dedicate" v-model="isDedicated" class="rounded text-green-600" />
                    <label for="dedicate" class="text-sm">Make this donation in honor or memory of someone</label>
                  </div>
                  <div v-if="isDedicated" class="mt-3">
                    <input type="text" placeholder="Recipient's name"
                      class="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Form -->
            <div class="md:w-1/2 bg-white p-8 md:p-10">
              <h3 class="text-xl font-bold text-gray-800 mb-6">Payment Information</h3>
              <form class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                  <label for="card" class="block text-sm font-medium text-gray-700 mb-1">Card Details</label>
                  <div class="relative">
                    <input type="text" id="card" placeholder="1234 1234 1234 1234" required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                    <div class="absolute right-3 top-2 flex space-x-1">
                      <div class="h-8 w-12 bg-gray-200 rounded"></div>
                      <div class="h-8 w-12 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label for="expiry" class="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                    <input type="text" id="expiry" placeholder="MM/YY" required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                  </div>
                  <div>
                    <label for="cvc" class="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                    <input type="text" id="cvc" placeholder="CVC" required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                  </div>
                </div>
                <button type="submit"
                  class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
                  Donate ${{ donationTotal }}
                </button>
                <p class="text-xs text-gray-500 text-center">
                  <i class="fas fa-lock mr-1"></i> Your donation is secure and encrypted
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- Footer -->
  <TheFooter />
</template>

<script setup>
import { ref, computed } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

const impactStats = [
  { id: 1, label: 'People Helped', value: 1200 },
  { id: 2, label: 'Meals Served', value: 8500 },
  { id: 3, label: 'Shelter Nights', value: 2300 },
  { id: 4, label: 'Education Grants', value: 320 }
]

const donationCauses = [
  {
    id: 1,
    title: 'Food for Families',
    description: 'Provide nourishing meals for families struggling with hunger.',
    amount: '$25 feeds a family',
    image: 'https://source.unsplash.com/400x300/?food,donation'
  },
  {
    id: 2,
    title: 'Emergency Shelter',
    description: 'Help provide warm beds and safety for the homeless.',
    amount: '$50 per night',
    image: 'https://source.unsplash.com/400x300/?shelter,help'
  },
  {
    id: 3,
    title: 'Education Support',
    description: 'Fund educational resources for underprivileged youth.',
    amount: '$100 per child',
    image: 'https://source.unsplash.com/400x300/?education,charity'
  }
]

const donationAmounts = [10, 25, 50, 100, 250]
const frequencies = ['One-Time', 'Monthly', 'Yearly']

const selectedAmount = ref(null)
const customAmount = ref(null)
const selectedFrequency = ref('One-Time')
const isDedicated = ref(false)

const donationTotal = computed(() => {
  return customAmount.value || selectedAmount.value || 0
})
</script>
