<template>
  <div class="p-2 w-screen h-screen flex flex-row">
    <Chat v-if="!!auth.user" />
    <LoginForm v-else />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useAuth } from './compositions/Auth'
import Chat from './components/chat/Chat.vue'
import LoginForm from './components/LoginForm.vue'

export default defineComponent({
  components: {
    Chat,
    LoginForm,
  },

  setup() {
    const auth = useAuth()

    return {
      auth,
    }
  },
})
</script>
