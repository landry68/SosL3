<template>
  <section class="min-h-screen w-full relative overflow-hidden">

    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/src/assets/Image/co2.jpg');"
    ></div>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Main Content -->
    <div class="relative z-10">

      <!-- Hero Section -->
      <div class="h-screen flex items-center justify-center text-center px-6">

        <div class="text-white">

          <h1 class="text-6xl md:text-7xl font-bold mb-6">
            About Rwanda
          </h1>

          <p class="max-w-3xl mx-auto text-lg md:text-2xl leading-8 mb-8">
            Discover the land of a thousand hills, breathtaking landscapes,
            wildlife adventures, rich culture, and modern cities.
          </p>

          <!-- Buttons -->
          <div class="flex justify-center gap-4 flex-wrap">

            <button
              class="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full text-white font-semibold transition duration-300"
            >
              Explore More
            </button>

            <button
              class="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition duration-300"
            >
              Visit Rwanda
            </button>

          </div>

        </div>

      </div>

      <!-- About Section -->
      <div class="py-20 px-6 bg-white/90 backdrop-blur-sm">

        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <!-- Image -->
          <div>
            <img
              src="../assets/Image/kgl.jpg"
              alt="Kigali"
              class="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
            />
          </div>

          <!-- Text -->
          <div>

            <h2 class="text-5xl font-bold text-green-700 mb-6">
              About Rwanda
            </h2>

            <p class="text-gray-700 leading-8 mb-4">
              Rwanda is one of Africa’s most beautiful and fastest-growing
              countries. Known for its cleanliness, safety, and hospitality,
              Rwanda attracts visitors from around the world.
            </p>

            <p class="text-gray-700 leading-8 mb-4">
              From the vibrant city of Kigali to Lake Kivu and the famous
              mountain gorillas, Rwanda offers unforgettable experiences.
            </p>

            <p class="text-gray-700 leading-8">
              The country is also leading in technology, environmental protection,
              and sustainable development.
            </p>

          </div>

        </div>

      </div>

      <!-- Cards Section -->
      <div class="py-20 px-6 bg-black/40">

        <div class="text-center mb-14">

          <h2 class="text-5xl font-bold text-white">
            Why Visit Rwanda?
          </h2>

        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <!-- Card 1 -->
          <div
            class="bg-white shadow-xl rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
          >

            <img
              src="../assets/Image/go.png"
              alt="Gorilla"
              class="w-full h-64 object-cover"
            />

            <div class="p-6">

              <h3 class="text-3xl font-bold text-green-700 mb-4">
                Wildlife
              </h3>

              <p class="text-gray-600 leading-7">
                Experience mountain gorillas, national parks,
                and incredible wildlife adventures.
              </p>

            </div>

          </div>

          <!-- Card 2 -->
          <div
            class="bg-white shadow-xl rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
          >

            <img
              src="../assets/Image/lake.png"
              alt="Lake Kivu"
              class="w-full h-64 object-cover"
            />

            <div class="p-6">

              <h3 class="text-3xl font-bold text-green-700 mb-4">
                Nature
              </h3>

              <p class="text-gray-600 leading-7">
                Enjoy beautiful hills, lakes, forests,
                and breathtaking natural landscapes.
              </p>

            </div>

          </div>

          <!-- Card 3 -->
          <div
            class="bg-white shadow-xl rounded-3xl overflow-hidden hover:scale-105 transition duration-300"
          >

            <img
              src="../assets/Image/kgl.jpg"
              alt="Kigali"
              class="w-full h-64 object-cover"
            />

            <div class="p-6">

              <h3 class="text-3xl font-bold text-green-700 mb-4">
                Modern City
              </h3>

              <p class="text-gray-600 leading-7">
                Kigali is one of Africa’s cleanest and most
                modern cities with amazing infrastructure.
              </p>

            </div>

          </div>

        </div>

      </div>

      <!-- Footer -->
      <footer class="bg-green-700 text-white py-8 text-center">

        <h2 class="text-3xl font-bold mb-3">
          Visit Rwanda
        </h2>

        <p class="text-lg">
          Experience beauty, culture, and adventure.
        </p>

      </footer>

    </div>

  </section>
</template>

<script setup>
</script>

<style scoped>
</style>