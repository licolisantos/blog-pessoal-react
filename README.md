# Blog Pessoal - Frontend React

Frontend do Blog Pessoal desenvolvido com React + TypeScript + Vite, consumindo API REST NestJS.

## 🚀 Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router DOM
- Axios
- React Toastify (alertas personalizados)
- React Spinners (loaders)
- Reactjs Popup (modais)
- Phosphor Icons

## 📋 Funcionalidades

- ✅ Autenticação (Login/Cadastro)
- ✅ CRUD de Temas
- ✅ CRUD de Postagens
- ✅ Página de Perfil
- ✅ Alertas personalizados (Toast)
- ✅ Modal para nova postagem
- ✅ Proteção de rotas (JWT)

## 🛠️ Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── navbar/
│   ├── footer/
│   ├── tema/
│   │   ├── cardtema/
│   │   ├── listatemas/
│   │   ├── formtema/
│   │   └── deletartema/
│   └── postagem/
│       ├── cardpostagem/
│       ├── listapostagens/
│       ├── formpostagem/
│       ├── modalpostagem/
│       └── deletarpostagem/
├── contexts/
│   └── AuthContext.tsx
├── models/
│   ├── Usuario.ts
│   ├── UsuarioLogin.ts
│   ├── Tema.ts
│   └── Postagem.ts
├── pages/
│   ├── home/
│   ├── login/
│   ├── cadastro/
│   └── perfil/
├── services/
│   └── Service.ts
├── utils/
│   └── ToastAlerta.ts
├── App.tsx
└── main.tsx
```

## 🔗 Backend

Este frontend consome a API do [Blog Pessoal NestJS](https://github.com/licolisantos/blog-pessoal-nest).

## 👤 Autor

Licoli Santos - [@licolisantos](https://github.com/licolisantos)
