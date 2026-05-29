<template>
  <section
    class="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
    style="background-image: url('/src/Assets/Image/4.png');"
  >
    
    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-4xl">

      <!-- Title -->
      <h1 class="text-white text-4xl font-bold mb-8">WELCOME TO RWANDA</h1>

      <!-- Subtitle -->
      <p class="text-xl md:text-2xl text-green-300 mb-8">
        The Land of a Thousand Hills
      </p>

      <!-- Description -->
      <p class="text-gray-200 text-lg leading-relaxed mb-10">
        Discover breathtaking landscapes, rich culture, mountain gorillas,
        beautiful lakes, and the vibrant spirit of Rwanda.
      </p>

      <!-- Buttons -->
      <div class="flex justify-center gap-4 flex-wrap">
        <button
          class="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition duration-300"
        >
          Explore More
        </button>

        <button
          class="bg-white px-6 py-3 rounded-full font-semibold transition duration-300"
        >
          Visit Rwanda
        </button>
      </div>
      <div class="text-white text-4xl">

      <h2 class="text-3xl font-bold hover:underline mt-16 mb-6">Top Attractions in Rwanda</h2>
      </div>

      <!-- Image Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

        <!-- Card 1 -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
          <img
            src="/src/assets/Image/go.png"
            alt="Gorilla"
            class="w-full h-52 object-cover"
          />
          <div class="p-4">
            <h3 class="text-white text-2xl font-bold mb-2">Mountain Gorillas</h3>
            <p class="text-gray-200 text-sm">
              Experience Rwanda’s famous gorilla trekking adventures.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
          <img
            src="/src/assets/Image/lake.png"
            alt="Lake Kivu"
            class="w-full h-52 object-cover"
          />
          <div class="p-4">
            <h3 class="text-white text-2xl font-bold mb-2">Lake Kivu</h3>
            <p class="text-gray-200 text-sm">
              Relax at one of Africa’s most beautiful freshwater lakes.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
          <img
            src="/src/assets/Image/kgl.jpg"
            alt="Kigali City"
            class="w-full h-52 object-cover"
          />
          <div class="p-4">
            <h3 class="text-white text-2xl font-bold mb-2">Kigali City</h3>
            <p class="text-gray-200 text-sm">
              Explore the clean and modern capital city of Rwanda.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>