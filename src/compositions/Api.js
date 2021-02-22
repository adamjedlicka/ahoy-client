import { useAuth } from './Auth.js'

const BASE_URL = 'http://localhost:3333'

export const useApi = () => {
  const auth = useAuth()

  const get = async (route) => {
    const token = auth.token

    const response = await fetch(BASE_URL + route, {
      method: 'GET',
      headers: {
        ...(token ?? { Authorization: `Bearer ${auth.token}` }),
      },
    })

    const json = await response.json()

    return json
  }

  const post = async (route, body) => {
    const response = await fetch(BASE_URL + route, {
      method: 'POst',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`,
      },
      body: JSON.stringify(body),
    })

    const json = await response.json()

    return json
  }

  return {
    get,
    post,
  }
}
