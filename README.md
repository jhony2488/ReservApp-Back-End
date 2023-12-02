<h1 align="center" id="app-tarefas">
   App tarefas Back End
</h1>

<h2 id="tabela-de-conteudo">Tabela de conteúdos</h2>
<!--ts-->
   
- [Sobre](#---vuttr)

- [Tabela de Conteudo](#tabela-de-conteudo)

- [Status do projeto](#----vuttr--em-construção--)

- [Features](#----features)

- [Como usar](#como-usar)

  - [Pre Requisitos](#pré-requisitos)

  - [Instalação](#instalação)

  - [Rodando a API](#-rodando-a-api)

- [Testes](#-testes)

- [Documentação](#----documentatação-da-aplicação)

- [Tecnologias](#-tecnologias)

- [Autor](#autor)

- [Licença](#licença)
<!--te-->

<h2  id="features">  
  Features
</h2>

- [x] Desenvolver e realizar os testes
- [x] Cadastro de tarefa
- [x] Pegar dados de tarefas e de uma unica tarefa
- [x] Alterar dados de uma tarefa
- [x] Deletar uma tarefa

<h2>Como usar</h2>

<h3>Pré-requisitos</h3>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MySQL](https://www.mysql.com/),[Docker](https://hub.docker.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<h3 id="instalacao">Instalação</h3>

```bash
# Clone este repositório
$ git clone <https://github.com/jhony2488/desafio-app-tasks>
# Acesse a pasta do projeto no terminal/cmd
$ cd desafio-app-tasks
# Acesse a pasta do projeto no terminal/cmd
$ cd server
# Instale as dependências
$ npm install || yarn install
```

<h3 id="rodando-api">🎲 Rodando a API em modo de desenvolvimento com docker</h3>

#### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o Docker atravez do link abaixo caso ainda não o tenha instalado

- [https://hub.docker.com/](https://hub.docker.com/)

```bash
# Execute o mysql no seu terminal/CMD
$  docker-compose up -d

# O servidor inciará na porta:80 - acesse <http://localhost:80>
```

<h3 id="rodando-api">🎲 Rodando a API em modo de desenvolvimentor</h3>

#### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o MSQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.mysql.com/downloads/](https://www.mysql.com/downloads/)

```bash
# Execute o mysql no seu terminal/CMD
$  mysql -h localhost -u root -p

# Crie um banco de dados chamado vuttr_development no MySQL
$ CREATE DATABASE vuttr_development;

# Execute a aplicação em modo de desenvolvimento
$ npm run dev || yarn dev

# O servidor inciará na porta:80 - acesse <http://localhost:80>
```

<h3 id="rodando-api">🎲 Rodando a API em modo de produção </h3>

#### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

#### Instale o MySQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.mysql.com/downloads/](https://www.mysql.com/downloads/)

```bash
# Execute o mysql no seu terminal/CMD
$  mysql -h localhost -u root -p

# Crie um banco de dados chamado vuttr no MySQL
$ CREATE DATABASE vuttr;

# Execute o build aplicação
$ npm run build || yarn build

# Execute a aplicação em modo de desenvolvimento
$ npm run start || yarn start

# O servidor inciará na porta:80 - acesse <http://localhost:80>
```

<h2 id="tests">🛠 Testes</h2>

### Instale o Node.js atravez do link abaixo caso ainda não o tenha instalado

- [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Instale o MySQL atravez do link abaixo caso ainda não o tenha instalado

- [https://www.mysql.com/downloads/](https://www.mysql.com/downloads/)

```bash
# Execute o mysql no seu terminal/CMD
$  mysql -h localhost -u root -p

# Crie um banco de dados chamado vuttr_test no MySQL
$ CREATE DATABASE vuttr_test;

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
$ npm run documentation || yarn documentation

# O servidor inciará na porta:80 - acesse a documentação <http://localhost:80/documentation/>
```

### Acesse a documentação da localmente

- [http://localhost:80/documentation/](http://localhost:80/documentation/)

<h2 id="tecnologias">🛠 Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [Sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
- [Jest](https://jestjs.io/)
- [JWT](https://jwt.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [MySQL](https://www.mysql.com/)

