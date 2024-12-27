<template>
  <div class="challenge-page container">
    <h1>{{ days }} Day {{ language }} Challenge</h1>
    <p>Your coding journey begins here!</p>
    <!-- Add challenge content here -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const days = route.params.days;
const language = route.params.language;
</script>

<style lang="scss" scoped>
.challenge-page {
  padding: 2rem 0;
  text-align: center;

  h1 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
}</style>