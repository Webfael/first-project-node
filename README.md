# First Project Node - Registro de Usuários

Este é o meu primeiro projeto desenvolvido com Node.js, que permite registrar usuários provenientes de um front-end. O projeto consiste em uma API simples para cadastrar e listar usuários.

## Pré-requisitos

Antes de executar o projeto localmente, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- Node.js
- npm (gerenciador de pacotes do Node.js)
- MongoDB (banco de dados)

## Instalação

Siga as etapas abaixo para configurar o projeto em sua máquina:

1. Clone o repositório:

```bash
git clone https://github.com/rafaelfaust/first-project-node.git
```

2. Navegue até o diretório do projeto:

```bash
cd first-project-node
```

3. Instale as dependências do projeto:

```bash
npm install
```

## Configuração

Antes de iniciar o projeto, você precisa configurar a conexão com o banco de dados MongoDB. Para isso, siga as etapas abaixo:

1. Abra o arquivo `config.js` localizado na raiz do projeto.
2. No arquivo `config.js`, substitua `<MONGO_URI>` pela URI de conexão do seu banco de dados MongoDB.

## Uso

Para utilizar a API de registro de usuários, siga as etapas abaixo:

1. Certifique-se de ter o MongoDB em execução em sua máquina.
2. Na raiz do projeto, execute o seguinte comando para iniciar o servidor:

```bash
npm start
```

3. O servidor será iniciado e estará pronto para receber solicitações.
4. Use um cliente de API (como o Postman) para fazer solicitações HTTP para a API.
5. Para cadastrar um novo usuário, faça uma solicitação POST para a rota `/users` com os dados do usuário no corpo da solicitação. Os campos necessários são `name`, `email` e `password`.
6. Para obter a lista de usuários cadastrados, faça uma solicitação GET para a rota `/users`.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua nova feature: `git checkout -b minha-nova-feature`.
3. Faça as alterações desejadas e salve os arquivos.
4. Faça o commit das suas alterações: `git commit -m 'Adicionando minha nova feature'`.
5. Faça o push para o branch: `git push origin minha-nova-feature`.
6. Envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

## Contato

Se você tiver alguma dúvida, sugestão ou quiser entrar em contato, você pode me encontrar no GitHub como [rafaelfaust](https://github.com/rafaelfaust).
