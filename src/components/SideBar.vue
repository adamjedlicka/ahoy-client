<template>
  <div class="bg-blue-400 shadow min-h-screen">
    <div class="p-4 bg-blue-600 text-white text-2xl font-bold font-mono shadow w-10">
      <div class="-my-4 transform -rotate-90">!</div>
      <div class="-my-3 transform -rotate-90">y</div>
      <div class="-my-3 transform -rotate-90">o</div>
      <div class="-my-3 transform -rotate-90">h</div>
      <div class="-my-3 transform -rotate-90">A</div>
    </div>

    <Rooms />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Rooms from './Rooms.vue'

export default defineComponent({
  components: {
    Rooms,
  },
})
</script>
