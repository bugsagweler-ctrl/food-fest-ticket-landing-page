<template>
  <div id="app">
    
    <AppHeader />
    <CourseList />
  </div>
  
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import CourseList from './components/CourseList.vue'
</script>

<style>
/* some global styles, optional */
body {
  font-family: sans-serif;
  background-image: url('/images/background.jpg');
   background-size: cover;        
  background-position: center;    
  background-repeat: no-repeat;   
  background-attachment: fixed; 
}
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
