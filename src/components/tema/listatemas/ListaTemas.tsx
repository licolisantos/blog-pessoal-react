import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import type Tema from '../../../models/Tema'
import { buscar } from '../../../services/Service'
import CardTema from '../cardtema/CardTema'

function ListaTemas() {
  const navigate = useNavigate()
  const [temas, setTemas] = useState<Tema[]>([])
  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado!')
      navigate('/login')
    }
  }, [token])

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
    buscarTemas()
  }, [temas.length])

  return (
    <>
      {temas.length === 0 && (
        <span className="text-3xl text-center my-8">Carregando Temas...</span>
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temas.map((tema) => (
              <CardTema key={tema.id} tema={tema} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaTemas
