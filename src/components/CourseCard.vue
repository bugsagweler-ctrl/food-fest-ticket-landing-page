<template>
  <div :class="['course-card', { soldOut: course.availableCount === 0 }]">

    <img :src="course.image" alt="Course Image" class="course-img" />

    <h2>{{ course.title }}</h2>
    <p>Chef: {{ course.chef }}</p>
    <p>Level: {{ course.level }}</p>
    <p>Price: R{{ course.price }}</p>
    <p>{{ course.image }}</p>

    <p v-if="course.availableCount > 0" class="available-text">
      Seats left: {{ course.availableCount }}
    </p>
    <p v-else class="sold-out-text">Sold Out</p>

    <button
      @click="toggleSave"
      :disabled="course.availableCount === 0"
    >
      {{ isSaved ? 'Remove from Wishlist' : 'Save to Wishlist' }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useWishlistStore } from '@/stores/wishlist'
import { useCoursesStore } from '@/stores/courses'

const props = defineProps({
  course: Object
})

const wishlist = useWishlistStore()
const coursesStore = useCoursesStore()

const isSaved = computed(() => wishlist.isSaved(props.course))

function toggleSave() {
  wishlist.toggleSave(props.course)
}
</script>

<style scoped>
.course-card {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  color:aliceblue;
  background-color: #363622;
}

.course-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 0.75rem;
}

.soldOut {
  opacity: 0.6;
}

.sold-out-text {
  color: red;
  font-weight: bold;
}

.available-text {
  color: green;
  font-weight: bold;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
}
</style>
