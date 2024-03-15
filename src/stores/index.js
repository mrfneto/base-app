import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
  const user = ref(null)
  const isLoggedIn = computed(() => !!user.value)

  return { user, isLoggedIn }
})
