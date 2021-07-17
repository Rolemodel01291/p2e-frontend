export default function api() {
    const options = (method, body) => ({
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(body),
    })

    const BASE_URL = process.env.REACT_APP_API_BASE_URL;

    return {
      post: async (path, body) => {
        const response = await fetch(BASE_URL + `api/${path}`, options('POST', body), { mode: 'no-cors' })
        return await response.json()
      },
      get: async (path) => {
        const response = await fetch(BASE_URL + `api/${path}`, options('GET'), { mode: 'no-cors' })
        return await response.json()
      },
  
      patch: async (path, body) => {
        const response = await fetch(BASE_URL + `api/${path}`, options('PATCH', body), { mode: 'no-cors' })
        return await response.json()
      },
      delete: async (path) => {
        const response = await fetch(BASE_URL + `api/${path}`, options('DELETE'), { mode: 'no-cors' })
        return await response.json()
      },
    }
  }