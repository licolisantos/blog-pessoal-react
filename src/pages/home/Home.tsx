import acollyImg from '../../assets/acolly-tech.png'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 bg-indigo-900 text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
          <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="bg-white text-indigo-900 font-bold py-2 px-4 rounded border-2 border-white hover:bg-indigo-900 hover:text-white transition-all">
              Nova Postagem
            </button>
            <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded border-2 border-pink-500 hover:bg-indigo-900 transition-all">
              Ver Postagens
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={acollyImg} alt="Imagem Home" className="w-2/3 rounded-xl" />
        </div>
      </div>
    </div>
  )
}

export default Home
