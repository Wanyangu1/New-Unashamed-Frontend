<script setup>
import { useEvents } from '@/composables/useEvent';
import { useContact } from '@/composables/useContact';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

const { recentHighlights } = useEvents();
const { name, email, message, formMessage, alertType, submitForm } = useContact();
</script>

<template>
  <TheNavbar />
  <div class="contact bg-gradient-to-b from-gray-50 to-white min-h-screen">
    <!-- Hero Section -->
    <div class="relative bg-green-700 text-white py-16 md:py-24">
      <div class="absolute inset-0 bg-black/30 z-0"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <div class="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p class="text-xl text-green-100 max-w-3xl mx-auto">
            We'd love to hear from you! Reach out to discuss partnerships, volunteer opportunities, or how you can
            support our mission.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 -mt-10 relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form Card -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-green-600 px-6 py-4">
            <h2 class="text-2xl font-bold text-white flex items-center">
              <i class="fas fa-envelope mr-3"></i> Send Us a Message
            </h2>
          </div>
          <div class="p-6 md:p-8">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div v-if="formMessage"
                :class="`p-4 rounded-lg shadow ${alertType === 'alert-success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'} flex items-start`"
                role="alert">
                <i
                  :class="`fas ${alertType === 'alert-success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-3 mt-1`"></i>
                <span>{{ formMessage }}</span>
              </div>

              <div class="space-y-6">
                <div class="relative">
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <div class="relative">
                    <i class="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <input type="text" id="name" v-model="name" placeholder="David Irihose" required
                      class="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all" />
                  </div>
                </div>

                <div class="relative">
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div class="relative">
                    <i class="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <input type="email" id="email" v-model="email" placeholder="your@email.com" required
                      class="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all" />
                  </div>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea id="message" v-model="message" rows="5" placeholder="How can we help you?" required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"></textarea>
                </div>

                <button type="submit"
                  class="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center">
                  <i class="fas fa-paper-plane mr-2"></i> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Contact Info & Highlights -->
        <div class="space-y-8">
          <!-- Contact Info Card -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="bg-green-600 px-6 py-4">
              <h2 class="text-2xl font-bold text-white flex items-center">
                <i class="fas fa-map-marker-alt mr-3"></i> Our Location
              </h2>
            </div>
            <div class="p-6">
              <div class="rounded-xl overflow-hidden shadow-md mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.8217088203!2d34.781737376012316!3d-0.6923034873102553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b3f6840164ff1%3A0x8040e0d2e546b570!2sKisii%20University%20Main%20Campus!5e0!3m2!1sen!2ske!4v1723017296428!5m2!1sen!2ske"
                  width="100%" height="250" style="border:0" allowfullscreen="" loading="lazy" class="w-full"></iframe>
              </div>

              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-green-100 p-3 rounded-lg text-green-600">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold text-gray-800">Address</h3>
                    <p class="text-gray-600">Kisii University Main Campus, Kisii, Kenya</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-green-100 p-3 rounded-lg text-green-600">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold text-gray-800">Phone</h3>
                    <p class="text-gray-600">+254 712 345 678</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex-shrink-0 bg-green-100 p-3 rounded-lg text-green-600">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="ml-4">
                    <h3 class="text-lg font-semibold text-gray-800">Email</h3>
                    <p class="text-gray-600">info@unashamedcharity.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Highlights Card -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="bg-green-600 px-6 py-4">
              <h2 class="text-2xl font-bold text-white flex items-center">
                <i class="fas fa-calendar-star mr-3"></i> Recent Highlights
              </h2>
            </div>
            <div class="p-6">
              <ul class="divide-y divide-gray-200">
                <li v-for="event in recentHighlights" :key="event.id" class="py-4">
                  <div class="flex items-start">
                    <div class="flex-shrink-0 bg-yellow-100 p-2 rounded-lg text-yellow-600">
                      <i class="fas fa-calendar-day"></i>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-green-600">
                        {{ new Date(event.date).toLocaleDateString('en-US', {
                          year: 'numeric', month: 'long', day:
                            'numeric'
                        }) }}
                      </div>
                      <h3 class="text-lg font-semibold text-gray-800 mt-1">{{ event.title }}</h3>
                      <p class="text-gray-600 mt-1">{{ event.description }}</p>
                    </div>
                  </div>
                </li>
              </ul>
              <a href="/events"
                class="mt-4 inline-flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors">
                View All Events <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <TheFooter class="mt-0" />
  </div>
</template>

<style>
.contact {
  background-image: url('@/assets/images/bg.jpg');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 40%;
}

@media (max-width: 768px) {
  .contact {
    background-size: 70%;
  }
}
</style>
