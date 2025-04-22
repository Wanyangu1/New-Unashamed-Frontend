<script setup>
import { useGallery } from '@/composables/useGallery';
import TheNavbar from '@/components/TheNavbar.vue';
import TheFooter from '@/components/TheFooter.vue';

const { images, selectedImage, openModal, closeModal, getRandomSpan } = useGallery();
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <TheNavbar />

    <!-- Hero Section -->
    <section
      class="relative h-64 md:h-80 bg-gradient-to-r from-green-800 to-blue-700 flex items-center justify-center text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="relative z-10 text-center px-6">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Our Gallery</h1>
        <p class="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in delay-100">
          Capturing moments of impact, compassion, and transformation
        </p>
      </div>

      <!-- Floating decorative elements -->
      <div class="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-yellow-400/20 animate-float1"></div>
      <div class="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-white/20 animate-float2"></div>
    </section>

    <!-- Gallery Section -->
    <section class="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Moments That Matter</h2>
        <div class="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p class="text-gray-600 max-w-3xl mx-auto text-lg">
          Explore our visual journey of community service, events, and life-changing moments
        </p>
      </div>

      <!-- Masonry Grid Gallery -->
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="image in images" :key="image.id" @click="openModal(image)"
          class="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group transition-all duration-500 hover:shadow-2xl"
          :class="`col-span-${getRandomSpan()}`">
          <img :src="image.image" :alt="image.title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

          <!-- Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            <div class="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
              <h3 class="text-xl font-bold text-white mb-2">{{ image.title }}</h3>
              <p class="text-gray-200 text-sm">{{ image.description }}</p>
              <div class="mt-4 flex justify-end">
                <button
                  class="text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center hover:bg-white/30 transition-all">
                  View
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div v-if="selectedImage"
      class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div class="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden">
        <!-- Modal Header -->
        <div class="flex justify-between items-center bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
          <h3 class="text-xl font-bold text-white">{{ selectedImage.title }}</h3>
          <button @click="closeModal"
            class="text-white hover:text-yellow-300 text-2xl font-semibold transition-colors duration-200">
            &times;
          </button>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <div class="relative overflow-hidden rounded-lg mb-6">
            <img :src="selectedImage.image" :alt="selectedImage.title"
              class="w-full h-auto max-h-[60vh] object-contain rounded-lg shadow-md" />
          </div>

          <div class="flex flex-col md:flex-row justify-between items-start gap-6">
            <div class="flex-1">
              <p class="text-gray-700 mb-4">{{ selectedImage.description }}</p>
              <div class="flex items-center text-gray-500 text-sm">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Event Date: {{ selectedImage.date || 'Not specified' }}</span>
              </div>
            </div>

            <div class="flex space-x-4">
              <button class="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </button>
              <button class="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="bg-gray-50 px-6 py-4 flex justify-between items-center">
          <div class="flex space-x-2">
            <button v-if="selectedImage.id > 1"
              class="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
              Previous
            </button>
            <button v-if="selectedImage.id < images.length"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Next
            </button>
          </div>
          <button @click="closeModal"
            class="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<style scoped>
/* Animations */
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
  animation: fadeIn 0.8s ease forwards;
}

.delay-100 {
  animation-delay: 0.1s;
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

/* Masonry grid columns */
.col-span-1 {
  grid-row-end: span 1;
}

.col-span-2 {
  grid-row-end: span 2;
}

.col-span-3 {
  grid-row-end: span 3;
}

/* Custom scrollbar for modal */
.modal-content::-webkit-scrollbar {
  width: 6px;
}

.modal-content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
