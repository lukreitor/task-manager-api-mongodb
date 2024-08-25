<p align="center">
	<a href="https://github.com/lukreitor"><img alt="Developer" src="https://img.shields.io/badge/Developer-Lucas%20Martins%20da%20Silva%20Sena-Success.svg?style=flat-square"/></a>
	<a href="https://github.com/lukreitor/task-manager-api/releases"><img alt="GitHub release" src="https://img.shields.io/github/release/lukreitor/task-manager-api.svg?style=flat-square"/></a>
	<a href="https://github.com/lukreitor/task-manager-api/releases"><img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/lukreitor/task-manager-api.svg?style=flat-square"/></a>
	<a href="https://github.com/lukreitor/task-manager-api/LICENSE"><img alt="License" src="https://img.shields.io/github/license/lukreitor/task-manager-api.svg?style=flat-square"/></a>
	<a href="https://github.com/lukreitor/task-manager-api/commits"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lukreitor/task-manager-api.svg?style=flat-square"/></a>
	<a href="https://lukreitor.github.io/task-manager-api"><img alt="Website Status" src="https://img.shields.io/website/http/lukreitor.github.io/task-manager-api.svg?down_message=Down&up_message=Online&style=flat-square"/></a>
	<a href="https://github.com/lukreitor/task-manager-api/stargazers"><img alt="stars-shield" src="https://img.shields.io/github/stars/lukreitor/task-manager-api.svg?style=flat-square"/></a>
	<a href="https://github.com/lukreitor/task-manager-api/network/members"><img alt="forks-shield" src="https://img.shields.io/github/forks/lukreitor/task-manager-api.svg?style=flat-square"/></a>
	<a href="https://github.com/lukreitor/task-manager-api/issues"><img alt="issues-shield" src="https://img.shields.io/github/issues/lukreitor/task-manager-api.svg?style=flat-square"/></a>
	<a href="https://github.com/lukreitor/task-manager-api/graphs/contributors"><img alt="contributors-shield" src="https://img.shields.io/github/contributors/lukreitor/task-manager-api.svg?style=flat-square"/></a>
	<a href="https://github.com/lukreitor/task-manager-api/graphs/traffic"><img alt="Total-Downloads" src="https://img.shields.io/github/downloads/lukreitor/task-manager-api/total.svg?style=flat-square"/></a>
</p>

### `task-manager-api`

### Descrição do Repositório
`API REST para controle de tarefas utilizando Node.js, TypeScript, Sequelize, PostgreSQL e Docker.`

### README.md

# Task Manager API

## Descrição
Esta é uma API REST para controle de tarefas, desenvolvida utilizando Node.js com TypeScript, Sequelize como ORM, PostgreSQL como banco de dados e Docker para containerização. A API permite a criação, exclusão e listagem de tarefas.

## Funcionalidades
- **Criação de uma tarefa**: Adiciona uma nova tarefa com nome e descrição.
- **Exclusão de uma tarefa**: Remove uma tarefa existente.
- **Listagem de todas as tarefas**: Retorna uma lista de todas as tarefas cadastradas.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução para JavaScript.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Sequelize**: ORM para Node.js que facilita a interação com o banco de dados.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em containers.

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/task-manager-api.git
   cd task-manager-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados no arquivo `.env`:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=seu-usuario
   DB_PASSWORD=sua-senha
   DB_NAME=task_manager
   ```

4. Execute as migrações do banco de dados:
   ```bash
   npx sequelize db:migrate
   ```

5. Inicie a aplicação:
   ```bash
   npm run dev
   ```
   docker-compose up --build


## Uso
### Criação de uma Tarefa
- **Rota**: `POST /tasks`
- **Corpo da Requisição**:
  ```json
  {
    "name": "Nome da Tarefa",
    "description": "Descrição da Tarefa"
  }
  ```

### Exclusão de uma Tarefa
- **Rota**: `DELETE /tasks/:id`

### Listagem de Todas as Tarefas
- **Rota**: `GET /tasks`

## Contribuição
1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-nova-feature`.
3. Faça suas alterações e commit: `git commit -m 'Adiciona nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-nova-feature`.
5. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a licença General Public Licence 3. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.




## Contributors ✨

<table>
	<tr>
		<th align="center">
				<a href="https://github.com/lukreitor">
					<sub><b>Lucas Martins da Silva Sena</b></sub>
				</a>
		</th>
  	</tr>
 	<tr>
		<td align="center">
			<a href="https://github.com/lukreitor">
				<img src="https://avatars.githubusercontent.com/lukreitor" width="100px" alt="Your Avatar"/>
			</a>
		</td>
	</tr>
</table>


**Please contact me using one of the following:**

[<img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" />](https://twitter.com/lukreitor) 
[<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/lucasmartins-2001-2018/) 
[<img src = "https://img.shields.io/badge/instagram-%23E4405F.svg?&style=for-the-badge&logo=instagram&logoColor=white">](https://www.instagram.com/lucas15_m.s/) 
[<img src = "https://img.shields.io/badge/telegram-%233498DB.svg?&style=for-the-badge&logo=telegram&logoColor=white">](https://t.me/lukreitor/) 
[<img src = "https://img.shields.io/badge/facebook-%231877F2.svg?&style=for-the-badge&logo=facebook&logoColor=white">](https://www.facebook.com/profile.php?id=100008448453915) 
[<img src="https://img.shields.io/badge/DEV.TO-%230A0A0A.svg?&style=for-the-badge&logo=dev-dot-to&logoColor=white" />](https://dev.to/username)  

<p align="center">  
<hr>Developed with ❤️ in Brazil 🇧🇷 
</p>

```