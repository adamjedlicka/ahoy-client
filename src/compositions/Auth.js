import { computed, reactive } from 'vue'

const state = reactive({
  token: sessionStorage.getItem('token'),
})

const login = async (email, password) => {
  const response = await fetch('http://localhost:3333/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  const json = await response.json()

  state.token = json.token
  sessionStorage.setItem('token', json.token)

  return json.token
}

export const useAuth = () =>
  reactive({
    login,
    token: computed(() => state.token),
    isLoggedIn: computed(() => !!state.token),
  })
