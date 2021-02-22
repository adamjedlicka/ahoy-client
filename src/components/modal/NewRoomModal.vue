<template>
  <Modal v-if="state.isShown" @bg-click="state.isShown = false">
    <Form title="Nová místnost" @submit="onSubmit">
      <Input name="name" label="Název" />
      <Submit>Vytvořit</Submit>
    </Form>
  </Modal>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import Modal from './Modal.vue'
import Form from '../form/Form.vue'
import Input from '../form/Input.vue'
import Submit from '../form/Submit.vue'
import { useApi } from '../../compositions/Api'

export default defineComponent({
  components: {
    Modal,
    Form,
    Input,
    Submit,
  },

  setup() {
    const api = useApi()

    const state = reactive({
      isShown: false,
      resolve: null,
    })

    const show = () => {
      state.isShown = true

      return new Promise((resolve) => {
        state.resolve = resolve
      })
    }

    const onSubmit = async (data) => {
      const room = await api.post('/rooms', data)

      state.isShown = false
      state.resolve(room)
    }

    return {
      state,
      show,
      onSubmit,
    }
  },
})
</script>
