// mainStore.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    message: 'Hello from store!',
    submittedData: [],
  }),
  actions: {
    setMessage(msg) {
      this.message = msg
    },
    addData(data) {
      this.submittedData.push(data)
    },
  },
})
