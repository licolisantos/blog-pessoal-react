// Exemplo de Hooks - useState e useEffect

import { useState, useEffect } from 'react'
import { Plus, Minus } from '@phosphor-icons/react'

function Contador() {
  // Hook useState - gerencia o estado do contador
  const [valor, setValor] = useState(0)
  const [mensagem, setMensagem] = useState('')

  // Hook useEffect - executa quando o valor muda
  useEffect(() => {
    if (valor > 0) {
      setMensagem(`Você clicou ${valor} vez(es) no botão adicionar!`)
    } else if (valor < 0) {
      setMensagem(`Valor negativo: ${valor}`)
    } else {
      setMensagem('Clique nos botões para alterar o valor')
    }
  }, [valor])

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
      <h3 className="text-xl font-bold text-slate-800 mb-4">Contador com Hooks</h3>
      
      <p className="text-4xl font-bold text-center text-indigo-600 mb-4">{valor}</p>
      <p className="text-slate-600 text-center mb-4">{mensagem}</p>
      
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setValor(valor - 1)}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
        >
          <Minus size={20} weight="bold" /> Remover
        </button>
        <button
          onClick={() => setValor(valor + 1)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
        >
          <Plus size={20} weight="bold" /> Adicionar
        </button>
      </div>
    </div>
  )
}

export default Contador
