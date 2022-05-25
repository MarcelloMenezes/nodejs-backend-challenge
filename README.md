# **TESTE UBISTART**

## Passo a passo para utilizar:

1. Baixar o repositório do GitHub [Link do repositório](https://github.com/MarcelloMenezes/nodejs-backend-challenge)
2. Abrir repositório no Visual Studio Code
3. Executar npm i ou yarn add no Git bash
4. Executar npm start ou yarn start no Git bash
5. Abrir o MySQL ou um gerenciador de banco de dados da sua preferência, logo em seguida, execute o seguinte código [Link do Schema](https://github.com/MarcelloMenezes/nodejs-backend-challenge/blob/main/src/database/schema.sql), com isso criará duas tabelas: usuários e tarefas
6. Adicionar as informações do database no arquivo .env, coloquei um demonstrativo no repositório, [Link do exemplo](https://github.com/MarcelloMenezes/nodejs-backend-challenge/blob/main/.env.example), neste arquivo já passei o email padrão do administrador
7. Abrir o Insomnia ou Postman e verificar as rotas [Link das rotas](https://github.com/MarcelloMenezes/nodejs-backend-challenge/blob/main/src/routes/routes.js), lembrando que o servidor está rodando na porta 8000

---

## Usuário

### O que o usuário pode fazer:

- Fazer login
- Fazer cadastro
- Cadastrar tarefa
- Atualizar tarefa
- Atualizar tarefa para concluída
- Listar tarefas

### O que o usuário não pode fazer:

- Não pode alterar tarefa concluída

---

## Administrador

### O que o administrador pode fazer:

- Listar todas as tarefas de todos os usuários
- Listar tarefas atrasadas de todos os usuários

## Endpoints / Usuário

### POST / Login

#### Dados enviados

```json=
{
	"email": "admin@ubistart.com",
	"password": "exemplo"
}
```

#### Dados recebidos
- Sucesso
```json=
{
	"user": {
		"id": 1,
		"email": "exemplo"
	},
	"token": "exemplo"
}
```

- Erros

```jsonld=
"O campo email é obrigatório"
```

```jsonld=
"O campo senha é obrigatório"
```

```jsonld=
"Email e senha não conferem"
```


### POST / Cadastro

#### Dados enviados

```json=
{
	"email": "admin@ubistart.com",
	"password": "example"
}
```

#### Dados recebidos
- Sucesso
```json=
"O usuário foi cadastrado"
```

- Erros

```jsonld=
"O campo email é obrigatório"
```

```jsonld=
"O campo senha é obrigatório"
```

```jsonld=
"O email já existe"
```

### POST / Cadastrar Tarefa 

#### Dados enviados

```json=
{
    "description": "Example",
    "deadline": "yyyy-mm-dd"
}
```

#### Dados recebidos
- Sucesso

```json=
"Tarefa cadastrada com sucesso"
```
- Erros

```jsonld=
"O campo descricao é obrigatório"
```
```jsonld=
"O campo prazo da tarefa é obrigatório"
```

### PUT / Atualizar Tarefa para concluída

#### Dados enviados

```json=
{
	"completed": true
}
```

#### Dados recebidos
- Sucesso
```json=
"A tarefa foi concluída com sucesso"
```
- Erro
```jsonld=
"Tarefa já foi concluída, não pode ser atualizada"
```

### PUT / Atualizar Tarefa

#### Dados enviados

```json=
{
    "description": "Example",
    "deadline": "yyyy-mm-dd"
}
```

#### Dados recebidos
- Sucesso
```json=
"A tarefa foi atualizada com sucesso"
```
- Erro
```jsonld=
"Tarefa já foi concluída, não pode ser atualizada"
```

### GET / Listar tarefas

Obs: somente do usuário logado

#### Dados recebidos
- Sucesso
```json=
[
	{
		"id": 1,
		"description": "Example",
		"deadline": "dd-MM-yyyy",
		"status": "TAREFA ATRASADA!"
	},
	{
		"id": 3,
		"description": "Example",
		"deadline": "dd-MM-yyyy",
		"status": "TAREFA ATRASADA!"
	},
	{
		"id": 2,
		"description": "Example",
		"deadline": "dd-MM-yyyy"
	}
]
```
- Erro
```jsonls=
"Não foi possível listar tarefas"
```

---

## Endpoints / Administrador

### GET / Listar tarefas

Obs: Todos os usuários com paginação

#### Dados recebidos
- Sucesso(Máximo de 5, pode alterar na URL)
```json=
[
	{
		"description": "Example",
		"deadline": "dd-MM-yyyy",
		"status": "TAREFA ATRASADA!"
	},
	{
		"description": "Example",
		"deadline": "dd-MM-yyyy",
		"status": "TAREFA ATRASADA!"
	},
	{
		"description": "Example",
		"deadline": "dd-MM-yyyy",
		"status": "TAREFA ATRASADA!"
	},
	{
		"email": "example@example.com",
		"description": "Example",
		"deadline": "dd-MM-yyyy"
	},
	{
		"email": "example@example.com",
		"description": "Example",
		"deadline": "dd-MM-yyyy"
	}
]
```
- Erro
```jsonls=
"Não foi possível listar tarefas"
```

### GET / Filtrar tarefas atrasadas

Obs: Lista de todos os usuários com paginação

#### Dados recebidos
- Sucesso (Máximo de 5, pode alterar na URL)
```json=
[
	{
		"description": "Example",
		"deadline": "dd-MM-yyyy",
		"status": "TAREFA ATRASADA!"
	},
	{
		"description": "Example",
		"deadline": "dd-MM-yyyy",
		"status": "TAREFA ATRASADA!"
	},
	{
		"description": "Example",
		"deadline": "dd-MM-yyyy",
		"status": "TAREFA ATRASADA!"
	},
	{
		"description": "Example",
		"deadline": "dd-MM-yyyy",
		"status": "TAREFA ATRASADA!"
	},
	{
		"description": "Example",
		"deadline": "dd-MM-yyyy",
		"status": "TAREFA ATRASADA!"
	}
]

```
- Erros

```jsonld=
"Apenas administrador pode visualizar"
```


```jsonls=
"Não foi possível listar tarefas atrasadas"
```

---

## Tecnologias utilizadas:
- Javascript
- Node
- MySQL
- Express
- JWT
- Bcrypt
- Dotenv
- Knex
- Yup / Yup-locales
- Nodemon
- Date-fns
- Visual Studio Code
- Insomnia
- Beekeeper
- Git
