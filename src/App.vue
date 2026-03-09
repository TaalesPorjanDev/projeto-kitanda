<template>
  <v-app>
    <NavBar />

    <v-main style="background-color: #FFB74D">
      <router-view></router-view>
    </v-main>

    <Footer />
  </v-app>
</template>

<script setup>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
</script>

<style>
* {
  font-family: 'Roboto', sans-serif;
}
</style>
