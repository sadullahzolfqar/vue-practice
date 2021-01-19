<template>
  <div id="app">
    <vertical-card />
  </div>
</template>

<script>
import VerticalCard from './components/VerticalCard.vue'
export default {
  name: 'app',
  components: {
    VerticalCard
  }
}
</script>

<style>

body {
    background-color: #e7e7e7;
    font-family: 'Muli', sans-serif;
}
</style>
