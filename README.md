

Este é um projeto de backend desenvolvido com Node.js, Express e TypeScript. Utiliza o Prisma como ORM para interação com o banco de dados e outras bibliotecas úteis para construção de APIs robustas.

🔥 O Que Essa API Faz?
✅ Gerencia usuários com autenticação JWT.
✅ Permite cadastro, listagem, atualização e remoção de usuários.
✅ Gerencia vendas com registro de compras e vendas.
✅ Protege senhas usando bcrypt.
✅ Usa Prisma ORM para conectar com um banco PostgreSQL.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para construção de aplicações web e APIs.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Prisma**: ORM moderno e eficiente para Node.js e TypeScript.
- **bcrypt**: Biblioteca para hashing de senhas.
- **jsonwebtoken**: Para criação e verificação de tokens JWT.
- **zod**: Para validação e parsing de dados.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/backend2.git



## Como Executar
Para executar o projeto, siga os passos abaixo:

1. Instale as dependências:

yarn install

2. Crie um arquivo .env com as seguintes variáveis de ambiente:
DATABASE_URL="postgresql"
TOKEN_KEY=""

3 excute o comando abaixo:

yarn run dev

4 build: Compila o código TypeScript para JavaScript.


yarn run build

5 start: Inicia o servidor.
yarn run start