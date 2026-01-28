# Blog Pessoal - Frontend React

## 📋 Passo a Passo para Criar o Projeto

### Pré-requisitos
- Node.js v20+ instalado
- NPM v10+ instalado
- Visual Studio Code

Verificar instalação:
```bash
node -v
npm -v
```

---

## 1. Criar o Projeto React com Vite

```bash
# Na pasta onde deseja criar o projeto
npm create vite@latest blogpessoal -- --template react-ts
```

Se perguntar sobre instalar `create-vite`, digite `y`.

Se pedir para escolher framework/template manualmente:
1. Selecione **React**
2. Selecione **TypeScript + SWC**

Quando perguntar sobre `rolldown-vite`, selecione **No**.

---

## 2. Instalar Dependências

```bash
cd blogpessoal
npm install
```

---

## 3. Executar o Projeto

```bash
npm run dev
```

Acesse: http://localhost:5173

**Atalhos do Vite:**
- `o + enter` → Abre no navegador
- `r + enter` → Reinicia
- `q + enter` → Finaliza
- `Ctrl + C` → Finaliza

---

## 4. Estrutura do Projeto

```
blogpessoal/
├── node_modules/       # Dependências (não editar)
├── public/             # Arquivos estáticos públicos
├── src/
│   ├── assets/         # Imagens, ícones, fontes
│   ├── pages/          # Componentes de páginas
│   │   └── home/
│   │       └── Home.tsx
│   ├── App.tsx         # Componente raiz
│   ├── App.css         # Estilos do App
│   ├── main.tsx        # Entrada da aplicação
│   └── index.css       # Estilos globais
├── index.html          # HTML principal
├── package.json        # Configurações e dependências
├── tsconfig.json       # Configuração TypeScript
└── vite.config.ts      # Configuração Vite
```

---

## 5. Criar o Componente Home

### 5.1 Criar estrutura de pastas

```
src/
└── pages/
    └── home/
        └── Home.tsx
```

### 5.2 Instalar extensão VS Code

Instale: **ES7+ React/Redux/React-Native Snippets**

### 5.3 Criar Home.tsx

No arquivo `src/pages/home/Home.tsx`, digite `rfce` e pressione Enter para gerar a estrutura básica.

```tsx
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
          {/* Texto */}
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

          {/* Imagem */}
          <img
            src="https://i.imgur.com/fyfri1v.png"
            alt="Imagem Home"
            style={{
              width: '30rem'
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Home
```

---

## 6. Atualizar App.tsx

```tsx
import Home from './pages/home/Home'

function App() {
  return (
    <Home />
  )
}

export default App
```

---

## 7. Limpar Estilos Padrão

Apague o conteúdo dos arquivos (mas não delete os arquivos):
- `src/App.css`
- `src/index.css`

---

## 8. Atualizar index.html

```html
<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="https://i.imgur.com/f4KMCRp.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Blog Pessoal</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 9. Testar

```bash
npm run dev
```

Acesse http://localhost:5173 e veja o componente Home renderizado.

---

## 📚 Conceitos Importantes

### Componentes
- Blocos reutilizáveis de código
- Funções que retornam JSX/TSX
- Nome sempre em PascalCase (ex: `Home`, `ListaPostagens`)

### JSX/TSX
- Sintaxe semelhante ao HTML dentro do JavaScript/TypeScript
- Use `className` em vez de `class`
- Variáveis dentro de `{ }`
- Comentários: `{/* comentário */}`

### Virtual DOM
- Representação em memória do DOM real
- React compara e atualiza apenas o necessário
- Melhora performance

### Ciclo de Vida
1. **Mount** - Componente criado
2. **Update** - State/Props mudam
3. **Unmount** - Componente removido

---

## 🔗 Links Úteis

- [React Docs](https://react.dev/)
- [Vite Docs](https://vite.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/)
- [Imagekit.io](https://imagekit.io/) - Hospedagem de imagens
