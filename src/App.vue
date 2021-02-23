<template>
  <div class="p-2 w-screen h-screen flex flex-row">
    <SideBar />
    <Chat />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useAuth } from './compositions/Auth'
import SideBar from './components/SideBar.vue'
import Chat from './components/Chat.vue'

export default defineComponent({
  components: {
    SideBar,
    Chat,
  },

  setup() {
    const auth = useAuth()

    return {
      auth,
    }
  },
})
</script>
