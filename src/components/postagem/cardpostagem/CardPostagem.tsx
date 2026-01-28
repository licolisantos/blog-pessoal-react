import { Link } from 'react-router-dom'
import type Postagem from '../../../models/Postagem'

interface CardPostagensProps {
  postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-md">
      <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
        <img src={postagem.usuario?.foto} className="h-12 w-12 rounded-full border-2 border-white" alt={postagem.usuario?.nome} />
        <h3 className="text-lg font-bold text-white">{postagem.usuario?.nome}</h3>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold">{postagem.titulo}</h4>
        <p>{postagem.texto}</p>
        <p className="text-sm">Tema: {postagem.tema?.descricao}</p>
        <p className="text-sm">
          Data: {new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'full',
            timeStyle: 'medium',
          }).format(new Date(postagem.data))}
        </p>
      </div>
      <div className="flex">
        <Link to={`/editarpostagem/${postagem.id}`} className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2">
          Editar
        </Link>
        <Link to={`/deletarpostagem/${postagem.id}`} className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center">
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem
