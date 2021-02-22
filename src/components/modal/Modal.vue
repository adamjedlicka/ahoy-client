<template>
  <Teleport to="body">
    <div class="absolute inset-0 flex min-h-screen items-center">
      <div class="container mx-auto z-30">
        <div class="px-4 sm:px-12 md:px-32 lg:px-64 xl:px-96">
          <div class="bg-gray-100 shadow-lg max-h-screen rounded p-4 overflow-y-auto">
            <slot />
          </div>
        </div>
      </div>

      <div class="absolute inset-0 bg-black opacity-50" @click="onBackgroundClick" />
    </div>
  </Teleport>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['bg-click'],

  setup(props, { emit }) {
    const onBackgroundClick = () => {
      emit('bg-click')
    }

    return {
      onBackgroundClick,
    }
  },
})
</script>
