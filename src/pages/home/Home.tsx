import { House, Article, Tag, User, PencilSimple, Books } from '@phosphor-icons/react'
import acollyImg from '../../assets/acolly-tech.png'

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 via-slate-800 to-indigo-900 text-white py-16 px-6 text-center">
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
        {/* Card Boas-vindas */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-pink-500 hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Bem-vindo ao meu Blog Pessoal
          </h2>
          <p className="text-slate-600 mb-3 leading-relaxed">
            Este espaço foi criado para compartilhar minha trajetória profissional,
            meus aprendizados na área de tecnologia e minha transição de carreira
            para o desenvolvimento web.
          </p>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Atualmente, estou em formação Full Stack JavaScript pela Generation Brasil,
            além de cursar Tecnologia da Informação na Universidade Anhembi Morumbi.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 active:translate-y-0">
              <PencilSimple size={20} weight="bold" /> Nova Postagem
            </button>
            <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1 active:translate-y-0">
              <Books size={20} weight="bold" /> Ver Postagens
            </button>
          </div>
        </section>

        {/* Card Tecnologias */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-pink-500 hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Tecnologias em estudo
          </h2>
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
