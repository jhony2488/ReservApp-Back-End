<h1 align="center" id="app-tarefas">
   App de Sistema de Reservas Online com Recomendação de Horários RESERV Back End
</h1>

<h2 align="left" id="app-tarefas">
  Descrição:
</h2>
<p>
Desenvolver um sistema de reservas online para um restaurante que não apenas permita aos usuários reservar uma mesa, mas também recomende horários alternativos se o horário desejado estiver indisponível. O sistema deve ser otimizado para garantir que o restaurante maximize a ocupação durante os horários de pico, sugerindo aos clientes os melhores horários alternativos.
</p>

<h2 id="tabela-de-conteudo">Tabela de conteúdos</h2>
<!--ts-->
   
- [Sobre](#---vuttr)

- [Tabela de Conteudo](#tabela-de-conteudo)

- [Como usar](#como-usar)

  - [Pre Requisitos](#pré-requisitos)

  - [Instalação](#instalação)

  - [Rodando a API](#-rodando-a-api)

- [Testes](#-testes)

- [Documentação](#----documentatação-da-aplicação)

- [Tecnologias](#-tecnologias)
<!--te-->


<h2>Como usar</h2>

<h3>Pré-requisitos</h3>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/),[Docker](https://hub.docker.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<h3 id="instalacao">Instalação e rodar com o app sem docker</h3>

```bash
# Clone este repositório
$ git clone <https://github.com/jhony2488/ReservApp-Back-End>

# Acesse a pasta do projeto no terminal/cmd
$ cd ReservApp-Back-End

# Instale as dependências
$ npm install || yarn install

# Baixar postgresql e rodar ele localmente
$ <https://www.postgresql.org/>

# rodar a aplicação em modo de desenvolvimento
$ npm run dev || yarn dev

# OU

# Gerar Build
$ npm run build || yarn build

# rodar a aplicação em modo de produção
$ npm run start || yarn start
```

<h3 id="rodando-api">🎲 Rodando a API em modo de desenvolvimento com docker</h3>

#### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o Docker atravez do link abaixo caso ainda não o tenha instalado

- [https://hub.docker.com/](https://hub.docker.com/)

```bash
# Execute o docker compose no seu terminal/CMD
$  docker-compose up -d || docker compose up -d

# Execute as migrations
$  npm run migration:run || npm run migration:run 

# O servidor inciará na porta:80 - acesse <http://localhost:80>
# O banco de dados postgres inciará na porta:5432 - acesse <http://localhost:5432>

# Obs: caso o container node não rode, deixe o servidor rodando e rode localmente o app.
```


<h2 id="tests">🛠 Testes</h2>

### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Instale o PostgresSQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.postgresql.org/](https://www.postgresql.org/)

```bash
# Executar os testes
$ npm run test || yarn test

# Executar testes de estresse na API
$ npm run test-stress || yarn test-stress

```

<h2 id="app-demo">  
  Documentação da aplicação
</h2>

```bash
#  Executar o build da documentação caso ja esteja com a aplicação rodando com o docker , basta apenas acessar a URL abaixo
$ npm run dev || yarn dev

# O servidor inciará na porta:80 - acesse a documentação <http://localhost:80/documentation/>
```

### Acesse a documentação da localmente

- [http://localhost:80/documentation/](http://localhost:80/documentation/)

<h2 id="tecnologias">🛠 Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/pt-br/)
- [Typeorm](https://typeorm.io/)
- [Jest](https://jestjs.io/)
- [JWT](https://jwt.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [PostgreSQL](https://www.postgresql.org/)

