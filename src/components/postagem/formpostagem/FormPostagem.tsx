import { type ChangeEvent, type FormEvent, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { AuthContext } from '../../../contexts/AuthContext'
import type Postagem from '../../../models/Postagem'
import type Tema from '../../../models/Tema'
import { atualizar, buscar, cadastrar } from '../../../services/Service'
import { ToastAlerta } from '../../../utils/ToastAlerta'

function FormPostagem() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [temas, setTemas] = useState<Tema[]>([])
  const [tema, setTema] = useState<Tema>({} as Tema)
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token
  const { id } = useParams<{ id: string }>()

  async function buscarPostagemPorId(id: string) {
    try {
      await buscar(`/postagens/${id}`, setPostagem, { headers: { Authorization: token } })
    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout()
      }
    }
  }

  async function buscarTemaPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, { headers: { Authorization: token } })
    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout()
      }
    }
  }

  async function buscarTemas() {
    try {
      await buscar('/temas', setTemas, { headers: { Authorization: token } })
    } catch (error: any) {
      if (error.toString().includes('401')) {
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      ToastAlerta('Você precisa estar logado!', 'info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    buscarTemas()
    if (id !== undefined) {
      buscarPostagemPorId(id)
    }
  }, [id])

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    })
  }, [tema])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
      usuario: usuario,
    })
  }

  function retornar() {
    navigate('/postagens')
  }

  async function gerarNovaPostagem(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar('/postagens', postagem, setPostagem, { headers: { Authorization: token } })
        ToastAlerta('Postagem atualizada com sucesso!', 'sucesso')
      } catch (error: any) {
        if (error.toString().includes('401')) {
          handleLogout()
        } else {
          ToastAlerta('Erro ao atualizar a postagem!', 'erro')
        }
      }
    } else {
      try {
        await cadastrar('/postagens', postagem, setPostagem, { headers: { Authorization: token } })
        ToastAlerta('Postagem cadastrada com sucesso!', 'sucesso')
      } catch (error: any) {
        if (error.toString().includes('401')) {
          handleLogout()
        } else {
          ToastAlerta('Erro ao cadastrar a postagem!', 'erro')
        }
      }
    }

    setIsLoading(false)
    retornar()
  }

  const carregandoTema = tema.descricao === undefined

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastrar Postagem' : 'Editar Postagem'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaPostagem}>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Título</label>
          <input
            type="text"
            placeholder="Título"
            name="titulo"
            className="border-2 border-slate-700 rounded p-2"
            value={postagem.titulo || ''}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="texto">Texto</label>
          <input
            type="text"
            placeholder="Texto"
            name="texto"
            className="border-2 border-slate-700 rounded p-2"
            value={postagem.texto || ''}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tema">Tema</label>
          <select
            name="tema"
            className="border-2 border-slate-700 rounded p-2"
            onChange={(e) => buscarTemaPorId(e.currentTarget.value)}
          >
            <option value="" disabled selected>Selecione um Tema</option>
            {temas.map((tema) => (
              <option key={tema.id} value={tema.id}>{tema.descricao}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={carregandoTema}
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 disabled:bg-slate-400 w-1/2 py-2 mx-auto flex justify-center"
        >
          {isLoading ? (
            <ClipLoader color="#fff" size={24} />
          ) : id === undefined ? (
            'Cadastrar'
          ) : (
            'Atualizar'
          )}
        </button>
      </form>
    </div>
  )
}

export default FormPostagem
