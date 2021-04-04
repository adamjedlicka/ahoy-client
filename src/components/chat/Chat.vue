<template>
  <div class="flex flex-col w-full h-full justify-between">
    <div class="py-2 flex flex-col flex-grow justify-end overflow-y-hidden">
      <Group v-for="(group, i) in groups" :key="i" :group="group" />
    </div>

    <div>
      <div class="p-2 flex flex-row">
        <input
          v-model="input"
          class="p-4 bg-white shadow-lg rounded-l-2xl focus:outline-none w-full"
          placeholder="Napište něco..."
          @keypress.enter="onSend"
        />
        <button class="p-4 bg-white shadow-lg rounded-r-2xl focus:outline-none" @click="onSend">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-send"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#4B5563"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="10" y1="14" x2="21" y2="3" />
            <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { AHOY_URL } from '../../config'
import { useAuth } from '../../compositions/Auth'
import { useWs } from '../../compositions/Ws'
import Group from './Group.vue'

export default defineComponent({
  components: {
    Group,
  },

  setup: () => {
    const auth = useAuth()
    const ws = useWs()

    const groups = ref([])
    const input = ref('')

    const addMessage = (message) => {
      if (groups.value.length > 0 && groups.value[groups.value.length - 1].user.username === message.user.username) {
        groups.value[groups.value.length - 1].messages.push({
          text: message.text,
        })
      } else {
        groups.value.push({
          user: { ...message.user },
          messages: [{ text: message.text }],
        })
      }
    }

    const onSend = async () => {
      const response = await fetch(AHOY_URL + '/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.user.token}`,
        },
        body: JSON.stringify({
          text: input.value,
        }),
      })

      const json = await response.json()

      console.log(json)

      input.value = ''
    }

    onMounted(async () => {
      ws.on('message', addMessage)

      const response = await fetch(AHOY_URL + '/messages')

      const json = await response.json()

      for (const message of json.messages) {
        addMessage(message)
      }
    })

    return {
      groups,
      input,
      onSend,
    }
  },
})
</script>
