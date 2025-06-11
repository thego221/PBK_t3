<template>
  <div class="info-box">
    <h4>{{ title }}</h4>
    <slot name="content"></slot>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style scoped>
.info-box {
  background-color: #eaf2f8;
  border-left: 4px solid var(--accent);
  padding: 15px 20px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  margin-top: 10px;
}

h4 {
  margin-bottom: 10px;
  color: var(--primary);
}
</style>
