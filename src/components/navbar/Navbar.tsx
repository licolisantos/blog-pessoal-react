import { Link } from 'react-router-dom'
import { House, Article, Tag, User, SignOut } from '@phosphor-icons/react'

function Navbar() {
  return (
    <nav className="w-full bg-indigo-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-8">
        <Link to="/home" className="text-2xl font-bold hover:text-pink-300 transition-colors">
          Blog Pessoal
        </Link>
        
        <div className="flex gap-6">
          <Link to="/home" className="flex items-center gap-2 hover:text-pink-300 transition-colors">
            <House size={20} weight="fill" /> Home
          </Link>
          <Link to="/postagens" className="flex items-center gap-2 hover:text-pink-300 transition-colors">
            <Article size={20} weight="fill" /> Postagens
          </Link>
          <Link to="/temas" className="flex items-center gap-2 hover:text-pink-300 transition-colors">
            <Tag size={20} weight="fill" /> Temas
          </Link>
          <Link to="/perfil" className="flex items-center gap-2 hover:text-pink-300 transition-colors">
            <User size={20} weight="fill" /> Perfil
          </Link>
          <Link to="/" className="flex items-center gap-2 hover:text-pink-300 transition-colors">
            <SignOut size={20} weight="fill" /> Sair
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
