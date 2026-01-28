import { House, Article, Tag, User, PencilSimple, Books, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import acollyImg from '../../assets/acolly-tech.png'

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-slate-200">
      
      {/* Header - Estilizado com Tailwind */}
      <header className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white py-16 px-6 text-center shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-lg">
          Licóli Santos
        </h1>
        <p className="text-xl text-indigo-200 mb-6">
          Full Stack Developer em transição de carreira
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/licolisantos" target="_blank" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-all hover:scale-105">
            <GithubLogo size={20} weight="fill" /> GitHub
          </a>
          <a href="https://linkedin.com/in/licoli-santos" target="_blank" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-all hover:scale-105">
            <LinkedinLogo size={20} weight="fill" /> LinkedIn
          </a>
        </div>
      </header>

      {/* Navegação - Classes utilitárias do Tailwind */}
      <nav className="bg-indigo-700 py-4 shadow-lg sticky top-0 z-50">
        <div className="flex justify-center gap-8 flex-wrap">
          <a href="#" className="flex items-center gap-2 text-white font-medium hover:text-pink-300 transition-colors duration-300">
            <House size={20} weight="fill" /> Início
          </a>
          <a href="#" className="flex items-center gap-2 text-white font-medium hover:text-pink-300 transition-colors duration-300">
            <Article size={20} weight="fill" /> Postagens
          </a>
          <a href="#" className="flex items-center gap-2 text-white font-medium hover:text-pink-300 transition-colors duration-300">
            <Tag size={20} weight="fill" /> Temas
          </a>
          <a href="#" className="flex items-center gap-2 text-white font-medium hover:text-pink-300 transition-colors duration-300">
            <User size={20} weight="fill" /> Perfil
          </a>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        
        {/* Card de Boas-vindas */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-pink-500 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Bem-vindo ao meu Blog Pessoal
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed text-lg">
            Este espaço foi criado para compartilhar minha trajetória profissional,
            meus aprendizados na área de tecnologia e minha transição de carreira
            para o desenvolvimento web.
          </p>
          <p className="text-slate-600 mb-6 leading-relaxed text-lg">
            Atualmente, estou em formação Full Stack JavaScript pela 
            <span className="font-semibold text-green-600"> Generation Brasil</span>, 
            além de cursar Tecnologia da Informação na Universidade Anhembi Morumbi.
          </p>
          
          {/* Botões estilizados com Tailwind */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <PencilSimple size={22} weight="bold" /> Nova Postagem
            </button>
            <button className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Books size={22} weight="bold" /> Ver Postagens
            </button>
          </div>
        </section>

        {/* Card de Tecnologias */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Tecnologias em estudo
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Lista de tecnologias com Tailwind */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-3">
                {[
                  { nome: 'HTML5', cor: 'from-orange-500 to-orange-600' },
                  { nome: 'CSS3', cor: 'from-blue-500 to-blue-600' },
                  { nome: 'JavaScript', cor: 'from-yellow-500 to-yellow-600' },
                  { nome: 'TypeScript', cor: 'from-blue-600 to-blue-700' },
                  { nome: 'React', cor: 'from-cyan-500 to-cyan-600' },
                  { nome: 'Tailwind', cor: 'from-teal-500 to-teal-600' },
                  { nome: 'Node.js', cor: 'from-green-600 to-green-700' },
                  { nome: 'NestJS', cor: 'from-red-500 to-red-600' },
                  { nome: 'MySQL', cor: 'from-blue-700 to-blue-800' },
                ].map((tech) => (
                  <span
                    key={tech.nome}
                    className={`bg-gradient-to-r ${tech.cor} text-white px-5 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-default`}
                  >
                    {tech.nome}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Imagem com bordas e sombras do Tailwind */}
            <div className="flex-shrink-0">
              <img
                src={acollyImg}
                alt="Mascote Acolly"
                className="w-60 rounded-2xl border-4 border-amber-600 shadow-2xl hover:scale-105 hover:rotate-2 transition-all duration-300"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white text-center py-8">
        <p className="text-indigo-200 text-lg">
          © 2026 - <span className="font-bold text-white">Licóli Santos</span> | Blog Pessoal
        </p>
        <p className="text-indigo-300 text-sm mt-2">
          Desenvolvido com React + TypeScript + Tailwind CSS
        </p>
      </footer>
    </div>
  )
}

export default Home
