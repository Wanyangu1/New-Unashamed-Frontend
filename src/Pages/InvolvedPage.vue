<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div class="font-sans mx-auto">
    <TheNavbar />

    <!-- Hero Section -->
    <section class="hero-section relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white">
      <div class="hero-overlay absolute inset-0 bg-black h-[65vh] opacity-50"></div>
      <div class="relative z-10 text-left ml-4">
        <h2 class="text-4xl font-bold">GET INVOLVED</h2>
        <p class="text-lg mt-4">
          Join us in shaping a sustainable and prosperous future for Kenya. Whether you're an individual,
          organization, or business, there’s a place for you in our mission.
        </p>
      </div>
    </section>

    <!-- Involvement Options -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto text-left">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src="@/assets/images/usa.png" alt="Partner with Us" class="w-16 mb-4" />
            <h3 class="text-2xl font-bold mb-2">Partner with Us</h3>
            <p class="text-gray-600 mb-4">
              Collaborate on projects that align with your goals and our mission.
            </p>
            <a href="/contact" class="btn btn-outline-info text-blue-600 font-medium">Learn More</a>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src="@/assets/images/kenya.png" alt="Volunteer" class="w-16 mb-4" />
            <h3 class="text-2xl font-bold mb-2">Volunteer</h3>
            <p class="text-gray-600 mb-4">
              Contribute your time and skills to help us achieve our objectives.
            </p>
            <a href="/contact" class="btn btn-outline-info text-blue-600 font-medium">Sign Up</a>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src="@/assets/images/rwanda.png" alt="Donate" class="w-16 mb-4" />
            <h3 class="text-2xl font-bold mb-2">Donate</h3>
            <p class="text-gray-600 mb-4">
              Support our initiatives through financial contributions or in-kind donations.
            </p>
            <a href="/contact" class="btn btn-outline-info text-blue-600 font-medium">Contribute</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Workshops and Seminars Section -->
    <section class="py-16 ml-4">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 class="text-3xl font-bold">SJ Ministries:</h2>
          <div class="w-16 h-1 bg-yellow-500 my-4"></div>
          <h2 class="text-gray-600 mb-4">
            - Christ Mercies Church O.Rongai<br />
            - Assembly of Christ Church O.Rongai<br />
            - Deliverance Church Youths Kiserian<br />
            - Ghetto Youths Charity<br />
            - Wamumbi Foundation<br />
            - Charity Gang Kenya<br />
            - Phoenix Youths Charity
          </h2>
        </div>

        <img src="@/assets/images/background.jpg" alt="Workshops and Seminars" class="rounded-lg shadow-lg" />
      </div>
    </section>

    <!-- Community Engagement Programs Section -->
    <section class="py-16 bg-gray-50 ml-4">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img src="@/assets/images/background.jpg" alt="Community Engagement" class="rounded-lg shadow-lg" />
        <div>
          <h2 class="text-3xl font-bold">Official Events:</h2>
          <div class="w-16 h-1 bg-yellow-500 my-4"></div>
          <h3 class="text-gray-600 mb-4">
            - Unashamed Main Charity Event (April)<br />
            - Unashamed Color Festival (August)<br />
            - Unashamed Anniversary (December)<br />
            Additional events include door-to-door donations, street visits, home visits, and team-building activities.
          </h3>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-blue-300 text-white text-left">
      <div class="container ml-4">
        <h2 class="text-3xl font-bold">We’d Love to Hear from You</h2>
        <p class="mt-4 text-lg">
          Whether you have a question, want to collaborate, or are interested in learning more about our work, feel free
          to get in touch.
        </p>
        <a href="/contact"
          class="mt-6 inline-block px-6 py-3 bg-green-500 text-blue-600 font-medium rounded-lg shadow-lg hover:bg-yellow-400">Join
          Now</a>
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.hero-section {
  background-image: url('@/assets/images/bg.jpg');
  background-size: cover;
  background-position: center;
  min-height: 40vh;
  position: relative;
  font-family: 'Roboto', sans-serif;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.container {
  font-family: 'Roboto', sans-serif;
}

h2,
h3 {
  font-family: 'Roboto', sans-serif;
}
</style>
