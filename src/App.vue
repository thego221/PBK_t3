<template>
  <div class="container">
    <h1>Tugas Nested Component & Slot</h1>
    <ParentComponent />
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import ParentComponent from './components/nested/ParentComponent.vue'

</script>

<style scoped>
h1 {
  text-align: center;
  color: var(--primary);
  margin-bottom: 30px;
}

button {
  margin-bottom: 20px;
}
</style>
