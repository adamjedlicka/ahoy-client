<template>
  <h1 class="mx-1 my-4 p-1 text-xl font-bold">Přihlášení</h1>
  <Form @submit="onSubmit">
    <Input name="email" label="Email" />
    <Input name="password" label="Heslo" />
    <button type="submit" class="m-1 p-1 bg-white shadow rounded">Login</button>
  </Form>
</template>

<script>
import { defineComponent } from 'vue'
import Form from './form/Form.vue'
import Input from './form/Input.vue'
import { useAuth } from '../compositions/Auth.js'

export default defineComponent({
  components: {
    Form,
    Input,
  },

  setup() {
    const auth = useAuth()

    const onSubmit = async ({ email, password }) => {
      await auth.login(email, password)
    }

    return {
      onSubmit,
    }
  },
})
</script>
