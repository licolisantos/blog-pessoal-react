import { Link } from 'react-router-dom'
import type Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTema({ tema }: CardTemaProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden justify-between bg-white">
      <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
        Tema
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{tema.descricao}</p>
      <div className="flex">
        <Link to={`/editartema/${tema.id}`} className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2">
          Editar
        </Link>
        <Link to={`/deletartema/${tema.id}`} className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center">
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardTema
