<template>
  <div class="slot-wrapper">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
.slot-wrapper {
  border: 2px dashed #bdc3c7;
  padding: 20px;
  border-radius: var(--radius);
  background-color: #ffffff;
  box-shadow: var(--shadow);
  margin-top: 20px;
}
</style>
