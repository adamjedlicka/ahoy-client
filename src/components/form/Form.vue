<template>
  <form class="flex flex-col" @submit.prevent="onSubmit">
    <slot />
  </form>
</template>

<script>
import { defineComponent, inject, provide, reactive } from 'vue'

const $Form = Symbol('$Form')

export const useForm = () => inject($Form)

export default defineComponent({
  emits: ['submit'],

  props: {
    title: String,
  },

  setup(props, { emit }) {
    const inputs = reactive({})

    const registerInput = (name, input) => {
      inputs[name] = input
    }

    const getData = () => {
      const data = {}

      for (const [name, input] of Object.entries(inputs)) {
        data[name] = input.state.value
      }

      return data
    }

    const onSubmit = () => {
      emit('submit', getData())
    }

    provide($Form, {
      registerInput,
    })

    return {
      onSubmit,
    }
  },
})
</script>
