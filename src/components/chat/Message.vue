<template>
  <hr v-if="!isFirst" />
  <div
    class="shadow-lg p-4"
    :class="[isCurrent ? 'bg-blue-200' : 'bg-white', { 'rounded-t-2xl': isFirst, 'rounded-b-2xl': isLast }]"
  >
    <p :class="{ 'text-right': isCurrent }">{{ message.text }}</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    message: Object,
    isFirst: Boolean,
    isLast: Boolean,
    isCurrent: Boolean,
  },
})
</script>
