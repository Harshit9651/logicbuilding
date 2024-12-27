<template>
  <div class="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style lang="scss">
.app {
  min-height: 100vh;
  background-color: var(--bg-primary);
  display: flex;
  flex-direction: column;

  > *:not(nav) {
    flex: 1;
  }
}
</style>