import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000'
})

export const cadastrarUsuario = async <T>(url: string, dados: T, setDados: (dados: T) => void) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const login = async <T>(url: string, dados: T, setDados: (dados: T) => void) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export default api
