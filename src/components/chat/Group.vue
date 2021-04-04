<template>
  <div :class="{ 'flex justify-end': isCurrent }">
    <div class="pt-2 px-2 max-w-max">
      <p class="px-4 font-bold text-md text-gray-500" :class="{ 'text-right': isCurrent }">{{ group.user.name }}</p>
      <Message
        v-for="(message, i) in group.messages"
        :key="message.id"
        :message="message"
        :is-first="i === 0"
        :is-last="i === group.messages.length - 1"
        :is-current="isCurrent"
      />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useAuth } from '../../compositions/Auth'
import Message from './Message.vue'

export default defineComponent({
  props: {
    group: Object,
  },

  components: {
    Message,
  },

  setup: (props) => {
    const auth = useAuth()

    const isCurrent = computed(() => props.group.user.username === auth.user.username)

    return {
      isCurrent,
    }
  },
})
</script>
