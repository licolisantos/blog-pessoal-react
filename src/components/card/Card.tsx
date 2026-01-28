// Exemplo de Props - Componente recebe dados do componente pai

interface CardProps {
  titulo: string
  texto: string
}

function Card(props: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
      <h3 className="text-xl font-bold text-slate-800 mb-2">{props.titulo}</h3>
      <p className="text-slate-600">{props.texto}</p>
    </div>
  )
}

export default Card
