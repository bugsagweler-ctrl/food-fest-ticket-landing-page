<template>
  <div class="course-list">
    <CourseCard
      v-for="course in coursesStore.courses"
      :key="course.id"
      :course="course"
    />
  </div>
</template>

<script setup>
import CourseCard from './CourseCard.vue'
import { useCoursesStore } from '@/stores/courses'

const coursesStore = useCoursesStore()
</script>

<style scoped>
.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
  width: 100%;
}
</style>
