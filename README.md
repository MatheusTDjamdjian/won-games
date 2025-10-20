# <h1 align="center">🕹️ Won Games</h1>

<p align="center">Projeto de e-commerce de jogos (front + backend) utilizando Next.js / React / TypeScript no frontend e API para gestão dos dados.</p>

# <h2 align="center">Índice<h2>

🔍 Sobre o Projeto

🛠 Tecnologias Utilizadas

🔧 Instalação & Execução Local

🧩 Arquitetura & Funcionalidades

📄 Páginas Disponíveis / Rotas do Usuário

📄 Licença

# <h2 align="center">🔍 Sobre o Projeto</h2>

<p align="center">O Won Games é um projeto de e-commerce voltado para venda de jogos digitais. O frontend é feito com Next.js + React + TypeScript, consumindo uma API para fornecer dados de produtos, categorias, carrinho e cadastros de usuários.

Ele permite ao usuário navegar por categorias, ver detalhes de jogos,, gerenciar carrinho, realizar login/cadastro, além de outras páginas de interações típicas de um site de vendas de jogos.</p>

# <h2 align="center">🛠 Tecnologias Utilizadas</h2>

- Next.js ![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)

- React ![React](https://img.shields.io/badge/React-blue?logo=react&logoColor=white)

- TypeScript ![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)

- CSS / Styled Components / Tailwind

- Biblioteca(s) para filtros, roteamento, formulários

- API backend (separada) para lidar com produtos, usuários etc.

- Strapi / Graphql

# <h2 align="center">🔧 Instalação & Execução Local</h2>

# <h3>Clone este repositório</h3>
- git clone https://github.com/MatheusTDjamdjian/won-games.git
- cd won-games/client

# <h3>Instale as dependências</h3>
npm install
<h4>ou</h4>
yarn install

# <h3>Execute em modo de desenvolvimento</h3>
npm run dev
<h4>ou</h4>
yarn dev

# <h3>Acesse no navegador:</h3>
http://localhost:3000


# <h3>Variáveis de ambiente:</h3>
.env.example

# <h2 align="center">🧩 Arquitetura & Funcionalidades Principais</h2>

Aqui estão algumas das funcionalidades comuns do projeto :

Listagem de jogos / produtos	Página de catálogo com exibição de todos os jogos disponíveis.

Filtro por plataforma / categoria	Permite ver os jogos por plataforma (Windowns, Mac ou Linux) e categorias.

Página de detalhe de jogo	Mostra informações detalhadas: descrição, preço, imagens.

Usuário / autenticação	Registro, login, perfil do usuário.

Página de categorias	Listagem de categorias de jogos.

No frontend Next.js, haverá uma pasta pages/ com arquivos correspondentes às rotas (ex: pages/index.tsx, pages/game/[slug].tsx, pages/cart.tsx, pages/login.tsx, etc.).

# <h2 align="center">📄 Páginas / Rotas Acessíveis</h2>

Aqui estão algumas rotas que o usuário poderá acessar:

/ — página inicial / catálogo de jogos

/games — listagem de todos os jogos

/games/[slug] — página de detalhe de um jogo específico

/cart — carrinho de compras

/sign-in ou /sign-up — cadastro de usuário

# <h2 align="center">Estilos:</h2>
- /src/styles


<p align="center">MIT License</p>

<p align="center">Copyright (c) 2025 Matheus Tasso</p>