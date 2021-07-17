export default function api() {
    const options = (method, body) => ({
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT'

      },
      body: JSON.stringify(body),
    })

    const BASE_URL = process.env.REACT_APP_API_BASE_URL;

    return {
      post: async (path, body) => {
        const response = await fetch(BASE_URL + `api/${path}`, options('POST', body))
        return await response.json()
      },
      get: async (path) => {
        const response = await fetch(BASE_URL + `api/${path}`, options('GET'))
        return await response.json()
      },
  
      patch: async (path, body) => {
        const response = await fetch(BASE_URL + `api/${path}`, options('PATCH', body))
        return await response.json()
      },
      delete: async (path) => {
        const response = await fetch(BASE_URL + `api/${path}`, options('DELETE'))
        return await response.json()
      },
    }
  }