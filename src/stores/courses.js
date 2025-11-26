// src/stores/courses.js
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { courses as initialCourses } from '@/data/courses.js'

export const useCoursesStore = defineStore('courses', () => {
  // make a reactive deep copy
  const courses = reactive(
    initialCourses.map((c) => ({ ...c }))
  )

  function decrement(course) {
    const c = courses.find((x) => x.id === course.id)
    if (c && c.availableCount > 0) {
      c.availableCount -= 1
    }
  }

  return { courses, decrement }
})
