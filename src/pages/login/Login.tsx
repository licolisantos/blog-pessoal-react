import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { login } from '../../services/Service'
import type UsuarioLogin from '../../models/UsuarioLogin'

function Login() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  })

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  async function logar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    try {
      await login('/usuarios/logar', usuarioLogin, setUsuarioLogin)
      alert('Usuário autenticado com sucesso!')
      navigate('/home')
    } catch (error) {
      alert('Usuário ou senha inválidos!')
    }

    setIsLoading(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
      <form className="flex flex-col w-1/2 gap-4" onSubmit={logar}>
        <h2 className="text-slate-900 text-5xl text-center">Entrar</h2>

        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Usuário</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="usuario@email.com"
            className="border-2 border-slate-700 rounded p-2"
            value={usuarioLogin.usuario}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-slate-700 rounded p-2"
            value={usuarioLogin.senha}
            onChange={atualizarEstado}
          />
        </div>

        <button
          type="submit"
          className="rounded bg-indigo-400 hover:bg-indigo-900 text-white w-full py-2 flex justify-center"
        >
          {isLoading ? <ClipLoader color="white" size={24} /> : 'Entrar'}
        </button>

        <hr className="border-slate-800 w-full" />

        <p className="text-center">
          Ainda não tem uma conta?{' '}
          <Link to="/cadastro" className="text-indigo-800 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </form>

      <div className="hidden lg:block w-full h-full bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] bg-cover bg-center"></div>
    </div>
  )
}

export default Login
