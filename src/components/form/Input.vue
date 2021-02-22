<template>
  <div class="flex flex-row">
    <label class="m-1 p-1 self-center w-64" :for="name">{{ label }}</label>
    <input type="text" :id="name" class="m-1 p-1 shadow rounded w-full" v-model="state.value" />
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import { useForm } from './Form.vue'

export default defineComponent({
  props: {
    name: String,
    label: String,
  },

  setup(props) {
    const Form = useForm()

    const state = reactive({
      value: '',
    })

    Form.registerInput(props.name, { state })

    return {
      state,
    }
  },
})
</script>
