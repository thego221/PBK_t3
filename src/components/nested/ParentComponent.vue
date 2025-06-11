<template>
  <div>
    <h2>Parent Component</h2>
    <ChildComponent @send-data="handleData" />

    <p v-if="dataFromChild">Data dari child: {{ dataFromChild }}</p>

    <FormComponent @submitted="handleFormData" />

    <ListDisplay :items="store.submittedData">
      <template #header>
        <h3>List Data Terkirim:</h3>
      </template>
      <template #default="{ item }">
        <span>📄 {{ item }}</span>
      </template>
    </ListDisplay>

    <SlotComponent>
      <InfoBox title="Slot Komponen">
        <template #content>
          <p>Ini adalah data yang dikirim lewat slot ke komponen parent.</p>
        </template>
      </InfoBox>
    </SlotComponent>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMainStore } from '../../stores/mainStore'
import ChildComponent from './ChildComponent.vue'
import FormComponent from '../forms/FormComponent.vue'
import ListDisplay from '../slots/ListDisplay.vue'
import SlotComponent from '../slots/SlotComponent.vue'
import InfoBox from '../layout/InfoBox.vue'

const dataFromChild = ref('')
const store = useMainStore()

function handleData(payload) {
  dataFromChild.value = payload
}

function handleFormData(value) {
  store.addData(value)
}
</script>

<style scoped>
h2 {
  color: var(--primary);
  margin-bottom: 10px;
}
</style>
