import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { cadastrarUsuario } from '../../services/Service'
import type Usuario from '../../models/Usuario'
import { ToastAlerta } from '../../utils/ToastAlerta'

function Cadastro() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar()
    }
  }, [usuario])

  function retornar() {
    navigate('/login')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true)
      try {
        await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuario)
        ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso')
      } catch (error) {
        ToastAlerta('Erro ao cadastrar usuário!', 'erro')
      }
    } else {
      ToastAlerta('Dados inconsistentes! Verifique as informações.', 'erro')
      setUsuario({ ...usuario, senha: '' })
      setConfirmarSenha('')
    }
    setIsLoading(false)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
      <div className="hidden lg:block w-full h-full bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] bg-cover bg-center"></div>
      
      <form className="flex flex-col w-2/3 gap-4" onSubmit={cadastrarNovoUsuario}>
        <h2 className="text-slate-900 text-5xl text-center">Cadastrar</h2>
        
        <div className="flex flex-col w-full">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.nome}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Usuário (e-mail)</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="usuario@email.com"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.usuario}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="foto">Foto (URL)</label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="https://link-da-foto.com"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.foto}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="senha">Senha (mín. 8 caracteres)</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.senha}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            className="border-2 border-slate-700 rounded p-2"
            value={confirmarSenha}
            onChange={handleConfirmarSenha}
          />
        </div>

        <div className="flex gap-8 justify-around">
          <button
            type="reset"
            className="rounded bg-red-400 hover:bg-red-700 text-white w-1/2 py-2"
            onClick={retornar}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center"
          >
            {isLoading ? <ClipLoader color="white" size={24} /> : 'Cadastrar'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Cadastro
