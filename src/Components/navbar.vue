<template>
  <nav class="bg-green-800 text-white flex px-8 py-4 items-center justify-between shadow-lg">
    
    <img src="../Assets/Image/logo.png" alt="" class="h-10 w-20">

    <ul class="flex gap-8 text-sm font-medium justify-end items-center">

      <!-- Home -->
      <li>
        <router-link to="/" class="hover:text-yellow-300">
          Home
        </router-link>
      </li>

      <!-- About -->
      <li>
        <router-link to="/about" class="hover:text-yellow-300">
          About us
        </router-link>
      </li>

      <!-- Services -->
      <li>
        <router-link to="/services" class="hover:text-yellow-300">
          Services
        </router-link>
      </li>

      <!-- Gallery Dropdown -->
      <li class="relative group">
        
        <a href="#" class="hover:text-yellow-300">
          Gallery <span>⩔</span>
        </a>

        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50 transition-all duration-300">
          
          <li class="px-4 py-2 hover:bg-green-200">
            <router-link to="/photos">
              Photos
            </router-link>
          </li>

          <li class="px-4 py-2 hover:bg-green-200">
            <router-link to="/videos">
              Videos
            </router-link>
          </li>

        </ul>
      </li>

      <!-- Destinations Dropdown -->
      <li class="relative group">
        
        <a href="#" class="hover:text-yellow-300">
          Destinations <span>⩔                                                                                                                                                        </span>
        </a>

        <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 mt-2 z-50 transition-all duration-300">

          <li class="px-4 py-2 hover:bg-green-200">
            <router-link to="/north">
              Northern Province
            </router-link>
          </li>

          <li class="px-4 py-2 hover:bg-green-200">
            <router-link to="/south">
              Southern Province
            </router-link>
          </li>

          <li class="px-4 py-2 hover:bg-green-200">
            <router-link to="/west">
              Western Province
            </router-link>
          </li>

          <li class="px-4 py-2 hover:bg-green-200">
            <router-link to="/east">
              Eastern Province
            </router-link>
          </li>

          <li class="px-4 py-2 hover:bg-green-200">
            <router-link to="/kigali">
              Kigali City
            </router-link>
          </li>

        </ul>
      </li>

      <!-- Contact -->
      <li>
        <router-link to="/contact" class="hover:text-yellow-300">
          Contact
        </router-link>
      </li>

    </ul>
  </nav>
</template>