<h1 align="center">📚 Livraria API - Node + TypeScript + MongoDB</h1>

<p align="center">
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias-utilizadas">Tecnologias</a> •
  <a href="#-como-executar-o-projeto"> 
Como executar o projeto </a>
</p>

# ⚙️ Funcionalidades

- Cadastro, consulta, atualização e remoção de livros;
- Cadastro, consulta, atualização e remoção de autores;
- Consulta de livros por publicadora.

# 🛠️ Tecnologias utilizadas

As seguintes tecnologias foram utilizadas:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/pt-br)

# 🚀 Como executar o projeto
### Primeiro, clone o projeto:
```bash
$ git clone https://github.com/joaodslourenco/livraria-api.git
```

### Entre na pasta do projeto e, na raiz, rode o comando:
```bash
yarn 
```
OU
```bash
npm install
```

### Crie um arquivo .env na raiz do projeto, definindo as seguintes variáveis:

```bash
PORT=(chave secreta)
MONGO_URL=(chave secreta)
```
#### OBS: caso você não tenha as chaves das variáveis, o projeto ainda poderá ser executado utilizando porta e banco de dados local.

## Para rodar o projeto, basta executar os seguintes comandos

```bash
yarn dev
```
OU
```bash
npm run dev
```

### Uma vez que o servidor esteja rodando, já é possível testar os endpoints através do aplicativo Postman. Para isso, dentro do Postman, selecione a opção "Import" e selecione o arquivo "endpoints-postman.json", incluído na pasta raiz do projeto. Desta feita, todos os endpoints estarão disponíveis e com os bodies das requisições prontos.
