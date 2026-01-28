import { GithubLogo, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react'

function Footer() {
  const data = new Date().getFullYear()

  return (
    <footer className="w-full bg-indigo-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <p className="text-xl font-bold">Blog Pessoal | Licóli Santos</p>
        <p className="text-lg">© {data} - Todos os direitos reservados</p>
        
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/licoli-santos" target="_blank" className="hover:text-pink-300 transition-colors">
            <LinkedinLogo size={40} weight="bold" />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-pink-300 transition-colors">
            <InstagramLogo size={40} weight="bold" />
          </a>
          <a href="https://github.com/licolisantos" target="_blank" className="hover:text-pink-300 transition-colors">
            <GithubLogo size={40} weight="bold" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
