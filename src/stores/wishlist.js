// src/stores/wishlist.js
import { defineStore } from 'pinia'
import { useCoursesStore } from '@/stores/courses'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: []
  }),
  actions: {
    toggleSave(course) {
      const exists = this.items.find((c) => c.id === course.id)
      const coursesStore = useCoursesStore()

      if (exists) {
        // Remove from wishlist — optionally increment availableCount back?
        this.items = this.items.filter((c) => c.id !== course.id)

        const c = coursesStore.courses.find((x) => x.id === course.id)
        if (c) {
          c.availableCount += 1
        }

      } else {
        // Save to wishlist (add)
        const c = coursesStore.courses.find((x) => x.id === course.id)
        if (c && c.availableCount > 0) {
          this.items.push(course)
          coursesStore.decrement(course)
        } else {
          // Optionally show alert
        }
      }
    }
  },
  getters: {
    count: (state) => state.items.length,

    isSaved: (state) => {
      return (course) => state.items.some((c) => c.id === course.id)
    },
    
    totalPrice: (state) => {
      return state.items.reduce((sum, item) => sum + item.price, 0)
    }
  }
})
