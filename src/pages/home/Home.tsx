function Home() {
  return (
    <>
      <div style={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b82f6'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '4rem',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '1rem'
          }}>
            <h2 style={{
              fontSize: '3rem',
              color: 'white',
              fontWeight: 'bold'
            }}>
              Seja Bem Vindo!
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'white'
            }}>
              Expresse aqui seus pensamentos e opiniões
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <button style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                backgroundColor: '#1e40af',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}>
                Nova Postagem
              </button>
              <button style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}>
                Ver Postagens
              </button>
            </div>
          </div>
          <img
            src="https://i.imgur.com/fyfri1v.png"
            alt="Imagem Home"
            style={{ width: '30rem' }}
          />
        </div>
      </div>
    </>
  )
}

export default Home
