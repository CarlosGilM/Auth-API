# 🔐 Auth API - NestJS
  Uma API de autenticação desenvolvida com <strong>NestJS</strong>, utilizando as melhores práticas de segurança, arquitetura modular e autenticação via Tokens.
---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

-   **[NestJS](https://nestjs.com/)** - Framework Node.js progressivo para back-end.
-   **[Prisma ORM](https://www.prisma.io/)** - ORM moderno para interagir com o banco de dados.
-   **[Supabase](https://supabase.com/)** - Plataforma Open Source que fornece o banco de dados **PostgreSQL**.
-   **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript com tipagem estática.
-   **[JWT](https://jwt.io/)** - Padrão (JSON Web Tokens) para autenticação segura e sem estado.
-   **[BCrypt](https://www.npmjs.com/package/bcrypt)** - Biblioteca para hash e segurança de senhas.
---

## ⚙️ Funcionalidades

-   [x] **Cadastro de Usuários (Sign Up):** Criação de conta com validação de dados e criptografia de senha (Hashing).
-   [x] **Autenticação (Sign In):** Login seguro com geração de **Token JWT** para acesso.
-   [x] **Proteção de Rotas:** Uso de *Guards* para proteger endpoints sensíveis (apenas usuários com Token válido).
-   [x] **Validação de Dados:** Uso de DTOs para garantir a integridade das informações recebidas.

---

## 🛠️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos

-   [Node.js](https://nodejs.org/)
-   [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
-   Uma instância do PostgreSQL

### 1. Clone o repositório

```bash
git clone https://github.com/CarlosGilM/Auth-API.git
cd auth-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e configure a conexão com o banco e o segredo do JWT:

```env
# Exemplo de URL de conexão do banco
DATABASE_URL="postgresql://postgres:[SUA-SENHA]@db.[SEU-ID-PROJETO].supabase.co:5432/postgres"

# Chave secreta para assinar os tokens
JWT_SECRET="sua_chave_secreta"
```

### 4. Execute as Migrations do Prisma

Isso criará as tabelas no seu banco de dados

```bash
npx prisma migrate dev
```

### 5. Inicie o Servidor

```bash
# Modo de desenvolvimento
npm run start:dev

# Modo de produção
npm run build
npm run start:prod
```

O servidor estará rodando em: `http://localhost:3000`

---

## 📚 Documentação da API

### Auth

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/auth/signup` | Registra um novo usuário. Requer `name`, `email` e `password`. |
| `POST` | `/auth/signin` | Autentica o usuário e retorna o **accessToken** (JWT). |
| `GET` | `/auth/me` | Retorna os dados do usuário atual (Requer cabeçalho `Authorization: Bearer <token>`). |

---

## 👨‍💻 Autor

Desenvolvido por **Carlos Gil Martins da Silva**.

Entre em contato!
<br />
<a href="https://www.linkedin.com/in/gilmartinss/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href="https://github.com/CarlosGilM" target="_blank"><img src="https://img.shields.io/badge/-GitHub-%23181717?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
