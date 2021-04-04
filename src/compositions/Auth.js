import { computed, reactive } from 'vue'
import { AHOY_URL } from '../config'

const state = reactive({
  user: JSON.parse(localStorage.getItem('user') || null),
})

export const useAuth = () =>
  reactive({
    user: computed(() => state.user),
    login: async (name) => {
      const username = generateId()
      const password = generateId()

      const responseRegister = await fetch(AHOY_URL + '/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          username,
          password,
          password_confirmation: password,
        }),
      })

      const jsonRegister = await responseRegister.json()

      console.log(jsonRegister)

      const responseLogin = await fetch(AHOY_URL + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })

      const jsonLogin = await responseLogin.json()

      console.log(jsonLogin)

      state.user = {
        name,
        username,
        token: jsonLogin.token,
      }

      localStorage.setItem('user', JSON.stringify({ ...state.user }))
    },
  })

const dec2hex = (dec) => {
  return dec.toString(16).padStart(2, '0')
}

const generateId = (len) => {
  var arr = new Uint8Array((len || 40) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
}
