import { House, Article, Tag, User } from '@phosphor-icons/react'
import acollyImg from '../../assets/acolly-tech.png'
import Card from '../../components/card/Card'
import Contador from '../contador/Contador'

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 via-slate-800 to-indigo-900 text-white py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight drop-shadow-lg">
          Licóli Santos
        </h1>
        <p className="text-lg text-indigo-200">
          Full Stack Developer em transição de carreira
        </p>
      </header>

      {/* Nav */}
      <nav className="bg-indigo-800/90 backdrop-blur-sm py-4 shadow-lg sticky top-0 z-10">
        <div className="flex justify-center gap-6 md:gap-10">
          <a href="#" className="flex items-center gap-2 text-white font-medium hover:text-pink-300 transition-colors">
            <House size={20} weight="fill" /> Início
          </a>
          <a href="#" className="flex items-center gap-2 text-white font-medium hover:text-pink-300 transition-colors">
            <Article size={20} weight="fill" /> Postagens
          </a>
          <a href="#" className="flex items-center gap-2 text-white font-medium hover:text-pink-300 transition-colors">
            <Tag size={20} weight="fill" /> Temas
          </a>
          <a href="#" className="flex items-center gap-2 text-white font-medium hover:text-pink-300 transition-colors">
            <User size={20} weight="fill" /> Perfil
          </a>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1 max-w-5xl mx-auto w-full py-10 px-6">
        
        {/* Seção: Exemplo de Props */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Exemplo de Props</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card 
              titulo="Bem-vindo ao Blog!" 
              texto="Este card recebe dados via Props do componente pai."
            />
            <Card 
              titulo="Tecnologias" 
              texto="React, TypeScript, Tailwind CSS e Phosphor Icons."
            />
          </div>
        </section>

        {/* Seção: Exemplo de Hooks */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Exemplo de Hooks (useState + useEffect)</h2>
          <Contador />
        </section>

        {/* Seção: Tecnologias */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Tecnologias em estudo</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex flex-wrap gap-3">
                {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'NestJS', 'MySQL'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-xl hover:scale-110 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <img
                src={acollyImg}
                alt="Mascote Acolly"
                className="w-52 rounded-2xl border-4 border-amber-600 shadow-2xl hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 via-slate-800 to-indigo-900 text-white text-center py-6">
        <p className="text-indigo-200">
          © 2026 - <span className="font-semibold text-white">Licóli Santos</span> | Blog Pessoal
        </p>
      </footer>
    </div>
  )
}

export default Home
