<script setup>
import { RouterView } from 'vue-router';

// import home from './Views/home.vue'
 import navbar from './Components/navbar.vue'
 import Footer from './Components/footer.vue';
</script>
<template>
  <navbar/>
  <router-view/>
<!-- <home/> -->
 <Footer/>
</template>