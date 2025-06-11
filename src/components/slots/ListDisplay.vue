<template>
  <div>
    <slot name="header"></slot>
    <ul class="list">
      <li v-for="(item, index) in items" :key="index">
        <slot :item="item" />
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps(['items'])
</script>

<style scoped>
.list {
  list-style: none;
  padding-left: 0;
  margin-top: 10px;
}

li {
  padding: 8px 12px;
  margin-bottom: 5px;
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow);
}
</style>
