# Won Games
🕹️ Won Games

Projeto de e-commerce de jogos (front + backend) utilizando Next.js / React / TypeScript no frontend e API para gestão dos dados.

Índice

🔍 Sobre o Projeto

🛠 Tecnologias Utiladas

🔧 Instalação & Execução Local

🧩 Arquitetura & Funcionalidades

📄 Páginas Disponíveis / Rotas do Usuário

🧰 Bibliotecas / Funções Importantes

🚀 Contribuindo

📄 Licença

🔍 Sobre o Projeto

O Won Games é um projeto de e-commerce voltado para venda de jogos digitais. O frontend é feito com Next.js + React + TypeScript, consumindo uma API para fornecer dados de produtos, categorias, carrinho e cadastros de usuários.

Ele permite ao usuário navegar por categorias, ver detalhes de jogos,, gerenciar carrinho, realizar login/cadastro, além de outras páginas de interações típicas de um site de vendas de jogos.

🛠 Tecnologias Utilizadas

Next.js

React

TypeScript

CSS / Styled Components / Tailwind

Biblioteca(s) para filtros, roteamento, formulários

API backend (separada) para lidar com produtos, usuários etc.

Strapi / Graphql

🔧 Instalação & Execução Local

# Clone este repositório
git clone https://github.com/MatheusTDjamdjian/won-games.git
cd won-games

# client
cd client

# Instale as dependências
npm install
# ou
yarn install

# Execute em modo de desenvolvimento
npm run dev
# ou
yarn dev

# Acesse no navegador:
# normalmente http://localhost:3000


Variáveis de ambiente (ex: URL da API, chaves, ambiente de produção etc.):
# .env.example

🧩 Arquitetura & Funcionalidades Principais

Aqui estão algumas das funcionalidades comuns do projeto :

Funcionalidade	Descrição
Listagem de jogos / produtos	Página de catálogo com exibição de todos os jogos disponíveis
Filtro por plataforma / categoria	Permite ver os jogos por plataforma (Windowns, Mac ou Linux) e categorias
Página de detalhe de jogo	Mostra informações detalhadas: descrição, preço, imagens
Usuário / autenticação	Registro, login, perfil do usuário
Página de categorias	Listagem de categorias de jogos

# No frontend Next.js, haverá uma pasta pages/ com arquivos correspondentes às rotas (ex: pages/index.tsx, pages/game/[slug].tsx, pages/cart.tsx, pages/login.tsx, etc.).

Além disso, componentes reutilizáveis (cards de produto, filtros, cabeçalho, rodapé etc.) estarão em components/.

No gerenciamento de estado, o projeto pode usar Context API, Redux, Zustand ou React Query para cache de dados.

📄 Páginas / Rotas Acessíveis

Aqui estão algumas rotas que o usuário poderá acessar:

/ — página inicial / catálogo de jogos

/games — listagem de todos os jogos

/games/[slug] — página de detalhe de um jogo específico

/cart — carrinho de compras

/sign-in ou /sign-up — cadastro de usuário

No README inclua exemplos de uso dessas funções ou hooks em componentes.

# Estilos:
/src/styles



MIT License

Copyright (c) 2025 Nome do Autor

Permission is hereby granted, free of charge, ...