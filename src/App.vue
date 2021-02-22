<template>
  <div class="flex flex-row">
    <SideBar />
    <div class="container mx-auto">
      <div class="flex flex-col">
        <LoginForm v-if="!auth.isLoggedIn" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useAuth } from './compositions/Auth'
import SideBar from './components/SideBar.vue'
import LoginForm from './components/LoginForm.vue'

export default defineComponent({
  components: {
    SideBar,
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
