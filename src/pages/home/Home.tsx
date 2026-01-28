import './Home.css'
import acollyImg from '../../assets/acolly-tech.png'

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Licóli Santos</h1>
        <p>Full Stack Developer em transição de carreira</p>
      </header>

      <nav className="home-nav">
        <a href="#">Início</a>
        <a href="#">Postagens</a>
        <a href="#">Temas</a>
        <a href="#">Sobre</a>
      </nav>

      <main className="home-main">
        <section className="home-card">
          <h2>Bem-vindo ao meu Blog Pessoal</h2>
          <p>
            Este espaço foi criado para compartilhar minha trajetória profissional,
            meus aprendizados na área de tecnologia e minha transição de carreira
            para o desenvolvimento web.
          </p>
          <p>
            Atualmente, estou em formação Full Stack JavaScript pela Generation Brasil,
            além de cursar Tecnologia da Informação na Universidade Anhembi Morumbi.
          </p>
          <div className="home-buttons">
            <button className="btn btn-primary">Nova Postagem</button>
            <button className="btn btn-secondary">Ver Postagens</button>
          </div>
        </section>

        <section className="home-card">
          <h2>Tecnologias em estudo</h2>
          <div className="tech-content">
            <div className="tech-list">
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>NestJS</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="tech-image">
              <img src={acollyImg} alt="Mascote Acolly" />
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>© 2026 - Licóli Santos | Blog Pessoal</p>
      </footer>
    </div>
  )
}

export default Home
