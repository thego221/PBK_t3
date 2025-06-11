<template>
  <div>
    <h3>Child Component</h3>
    <button @click="sendToParent">Kirim Data ke Parent</button>
    <GrandChildComponent />
  </div>
</template>

<script setup>
import GrandChildComponent from './GrandChildComponent.vue'
const emit = defineEmits(['send-data'])

function sendToParent() {
  emit('send-data', 'Halo dari ChildComponent!')
}
</script>

<style scoped>
h3 {
  margin-bottom: 10px;
  color: var(--primary);
}

button {
  margin-bottom: 15px;
  padding: 10px 16px;
  border-radius: var(--radius);
  border: none;
  background-color: var(--accent);
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background-color: #2980b9;
}
</style>
