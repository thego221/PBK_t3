<template>
  <form @submit.prevent="submit">
    <input v-model="inputValue" placeholder="Ketik sesuatu..." />
    <button type="submit">Kirim</button>
    <p v-if="error">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['submitted'])
const inputValue = ref('')
const error = ref('')

function submit() {
  if (!inputValue.value) {
    error.value = 'Input tidak boleh kosong'
    return
  }
  emit('submitted', inputValue.value)
  inputValue.value = ''
  error.value = ''
}
</script>

<style scoped>
input {
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: var(--radius);
  border: 1px solid #ccc;
}

p {
  color: red;
  font-size: 0.9rem;
}
</style>
