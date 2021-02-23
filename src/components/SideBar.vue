<template>
  <div class="p-2 h-full hidden lg:block relative w-64">
    <div class="bg-white dark:bg-gray-700 rounded-2xl shadow-lg h-full">
      <div class="flex items-center justify-center pt-6 text-2xl font-bold">Ahoy!</div>
      <nav class="mt-6">
        <a
          class="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
          href="javascript:void(0)"
        >
          <span class="text-sm font-bold">Oborníci</span>
        </a>
        <a
          class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
          href="javascript:void(0)"
        >
          <span class="text-sm font-normal">Pracanti</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
