<script setup>
import { ref, computed, onMounted } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'

// Local image imports
import foodImage from '@/assets/images/Events/Feeding1.jpg'
import shelterImage from '@/assets/images/Events/Feeding.jpg'
import educationImage from '@/assets/images/Events/Feeding1.jpg'

const impactStats = [
  { id: 1, label: 'People Helped', value: 1200 },
  { id: 2, label: 'Meals Served', value: 8500 },
  { id: 3, label: 'Shelter Nights', value: 200 },
  { id: 4, label: 'Community Projects', value: 20 }
]

const donationCauses = [
  {
    id: 1,
    title: 'Food for Families',
    description: 'Provide nourishing meals for families struggling with hunger.',
    amount: '$25 feeds a family',
    image: foodImage
  },
  {
    id: 2,
    title: 'Emergency Shelter',
    description: 'Help provide warm beds and safety for the homeless.',
    amount: '$50 per night',
    image: shelterImage
  },
  {
    id: 3,
    title: 'Education Support',
    description: 'Fund educational resources for underprivileged youth.',
    amount: '$100 per child',
    image: educationImage
  }
]

const donationAmounts = [10, 25, 50, 100, 250]
const frequencies = ['One-Time', 'Monthly', 'Yearly']
const paymentMethods = ['M-Pesa', 'PayPal', 'Sendwave', 'Credit Card']

const selectedAmount = ref(50)
const customAmount = ref(null)
const selectedFrequency = ref('One-Time')
const selectedMethod = ref('M-Pesa')
const isDedicated = ref(false)
const showMpesaInstructions = ref(false)
const showPaypalEmail = ref(false)
const showSendwaveInfo = ref(false)

const donationTotal = computed(() => {
  return customAmount.value || selectedAmount.value || 0
})

const copyMpesaNumber = () => {
  navigator.clipboard.writeText('0718826305')
  alert('M-Pesa number copied to clipboard!')
}

const copyPaypalEmail = () => {
  navigator.clipboard.writeText('unashamedcharity@gmail.com')
  alert('PayPal email copied to clipboard!')
}

// Animation triggers
const animateStats = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats.value = true
      }
    })
  }, { threshold: 0.1 })

  const statsSection = document.querySelector('#impact-stats')
  if (statsSection) {
    observer.observe(statsSection)
  }
})
</script>

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

    <!-- Impact Stats with counter animation -->
    <section id="impact-stats" class="py-16 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Impact</h2>
          <div class="w-20 h-1 bg-green-500 mx-auto mb-6 animate-grow"></div>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            See how your contributions make a real difference in the lives of those we serve.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in impactStats" :key="stat.id"
            class="bg-green-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2">
            <div class="text-4xl font-bold text-green-600 mb-3">
              <Counter :to="animateStats ? stat.value : 0" :duration="2" />+
            </div>
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
          <div class="w-20 h-1 bg-green-500 mx-auto mb-6 animate-grow"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="cause in donationCauses" :key="cause.id"
            class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
            <div class="h-48 overflow-hidden relative">
              <img :src="cause.image" :alt="cause.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3">{{ cause.title }}</h3>
              <p class="text-gray-600 mb-4">{{ cause.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-green-600 font-semibold">{{ cause.amount }}</span>
                <button class="text-green-600 hover:text-green-800 font-medium flex items-center">
                  Learn More <i class="fas fa-chevron-right ml-1 transition-transform group-hover:translate-x-1"></i>
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
          class="max-w-4xl mx-auto bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-2xl overflow-hidden animate-fade-in">
          <div class="md:flex">
            <!-- Donation Options -->
            <div class="md:w-1/2 p-8 md:p-10 text-white">
              <h2 class="text-2xl md:text-3xl font-bold mb-6">Make a Donation</h2>
              <div class="space-y-6">
                <div>
                  <h3 class="text-lg font-semibold mb-3">Select Amount (Ksh)</h3>
                  <div class="grid grid-cols-3 gap-3">
                    <button v-for="amount in donationAmounts" :key="amount" @click="selectedAmount = amount"
                      :class="`py-2 rounded-lg border-2 transition-all ${selectedAmount === amount ? 'bg-white text-green-700 border-white scale-105' : 'border-white/50 text-white hover:bg-white/10'}`">
                      {{ amount }}
                    </button>
                  </div>
                  <div class="mt-3">
                    <label for="custom-amount" class="block text-sm font-medium mb-1">Or enter custom amount</label>
                    <input type="number" id="custom-amount" v-model="customAmount" placeholder="0.00"
                      class="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition-all" />
                  </div>
                </div>

                <div>
                  <h3 class="text-lg font-semibold mb-3">Donation Frequency</h3>
                  <div class="flex space-x-3">
                    <button v-for="freq in frequencies" :key="freq" @click="selectedFrequency = freq"
                      :class="`flex-1 py-2 rounded-lg border-2 transition-all ${selectedFrequency === freq ? 'bg-white text-green-700 border-white scale-105' : 'border-white/50 text-white hover:bg-white/10'}`">
                      {{ freq }}
                    </button>
                  </div>
                </div>

                <div>
                  <h3 class="text-lg font-semibold mb-3">Payment Method</h3>
                  <select v-model="selectedMethod"
                    class="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white transition-all"
                    @change="showMpesaInstructions = false; showPaypalEmail = false; showSendwaveInfo = false">
                    <option v-for="method in paymentMethods" :key="method" :value="method">{{ method }}</option>
                  </select>

                  <!-- M-Pesa Instructions -->
                  <div v-if="selectedMethod === 'M-Pesa'" class="mt-4 bg-white/10 p-4 rounded-lg">
                    <button @click="showMpesaInstructions = !showMpesaInstructions"
                      class="flex items-center justify-between w-full text-left">
                      <span class="font-medium">How to donate via M-Pesa</span>
                      <i class="fas" :class="showMpesaInstructions ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                    </button>
                    <div v-if="showMpesaInstructions" class="mt-3 space-y-2 text-sm">
                      <p>1. Go to M-Pesa on your phone</p>
                      <p>2. Select "Lipa Na M-Pesa"</p>
                      <p>3. Select "Pay Bill"</p>
                      <p>4. Enter business number: <span class="font-bold">0718826305</span></p>
                      <p>5. Enter account number: <span class="font-bold">DONATION</span></p>
                      <p>6. Enter amount: ${{ donationTotal }}</p>
                      <button @click="copyMpesaNumber" class="mt-2 text-yellow-400 flex items-center">
                        <i class="far fa-copy mr-1"></i> Copy M-Pesa Number
                      </button>
                    </div>
                  </div>

                  <!-- PayPal Instructions -->
                  <div v-if="selectedMethod === 'PayPal'" class="mt-4 bg-white/10 p-4 rounded-lg">
                    <button @click="showPaypalEmail = !showPaypalEmail"
                      class="flex items-center justify-between w-full text-left">
                      <span class="font-medium">PayPal Donation Instructions</span>
                      <i class="fas" :class="showPaypalEmail ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                    </button>
                    <div v-if="showPaypalEmail" class="mt-3 space-y-2 text-sm">
                      <p>1. Send your donation to:</p>
                      <p class="font-bold">unashamedcharity@gmail.com</p>
                      <p>2. Include "Donation" in the notes</p>
                      <button @click="copyPaypalEmail" class="mt-2 text-yellow-400 flex items-center">
                        <i class="far fa-copy mr-1"></i> Copy PayPal Email
                      </button>
                    </div>
                  </div>

                  <!-- Sendwave Instructions -->
                  <div v-if="selectedMethod === 'Sendwave'" class="mt-4 bg-white/10 p-4 rounded-lg">
                    <button @click="showSendwaveInfo = !showSendwaveInfo"
                      class="flex items-center justify-between w-full text-left">
                      <span class="font-medium">Sendwave Donation Instructions</span>
                      <i class="fas" :class="showSendwaveInfo ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                    </button>
                    <div v-if="showSendwaveInfo" class="mt-3 space-y-2 text-sm">
                      <p>1. Open the Sendwave app</p>
                      <p>2. Select "Send Money"</p>
                      <p>3. Enter recipient number: <span class="font-bold">0718826305</span></p>
                      <p>4. Enter amount: ${{ donationTotal }}</p>
                      <p>5. Include "Donation" in the notes</p>
                    </div>
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
                      class="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition-all" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Payment Summary -->
            <div class="md:w-1/2 bg-white p-8 md:p-10">
              <h3 class="text-xl font-bold text-gray-800 mb-6">Donation Summary</h3>
              <div class="space-y-6">
                <div class="bg-gray-50 p-4 rounded-lg">
                  <div class="flex justify-between mb-2">
                    <span class="text-gray-600">Amount:</span>
                    <span class="font-bold">Ksh{{ donationTotal }}</span>
                  </div>
                  <div class="flex justify-between mb-2">
                    <span class="text-gray-600">Frequency:</span>
                    <span class="font-bold">{{ selectedFrequency }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Payment Method:</span>
                    <span class="font-bold">{{ selectedMethod }}</span>
                  </div>
                </div>

                <div v-if="selectedMethod === 'Credit Card'" class="space-y-4">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all" />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all" />
                  </div>
                  <div>
                    <label for="card" class="block text-sm font-medium text-gray-700 mb-1">Card Details</label>
                    <div class="relative">
                      <input type="text" id="card" placeholder="1234 1234 1234 1234" required
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all" />
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
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all" />
                    </div>
                    <div>
                      <label for="cvc" class="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                      <input type="text" id="cvc" placeholder="CVC" required
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all" />
                    </div>
                  </div>
                </div>

                <button type="button"
                  class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <span v-if="selectedMethod === 'M-Pesa'">Complete via M-Pesa</span>
                  <span v-else-if="selectedMethod === 'PayPal'">Complete via PayPal</span>
                  <span v-else-if="selectedMethod === 'Sendwave'">Complete via Sendwave</span>
                  <span v-else>Donate ${{ donationTotal }}</span>
                  <i class="fas fa-arrow-right ml-2"></i>
                </button>

                <p class="text-xs text-gray-500 text-center">
                  <i class="fas fa-lock mr-1"></i> Your donation is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Footer -->
  <TheFooter />
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

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

/* Counter animation styles */
.counter {
  display: inline-block;
}
</style>
