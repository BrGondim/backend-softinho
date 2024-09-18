# SoftinhoDB Backend API

Este projeto é uma API RESTful simples para gerenciar clientes e tickets, conectada a um banco de dados MSSQL.

## Sumário

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Rotas da API](#rotas-da-api)
  - [Clientes](#clientes)
  - [Tickets](#tickets)
- [Iniciando o servidor](#iniciando-o-servidor)
- [Licença](#licença)

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/en/download/) (versão 14 ou superior)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) instalado e configurado
- NPM (instalado automaticamente com o Node.js)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seuusuario/softinhodb-backend.git
   cd softinhodb-backend

2. Instale as dependências:

    npm install

3. Configuração:

    Configure o banco de dados MSSQL. Edite o arquivo /config/dbConfig.js e atualize as credenciais para conectar ao seu servidor MSSQL:

        const config = {
        user: 'seuUsuario',
        password: 'suaSenha',
        server: 'localhost',  // ou o IP do servidor
        database: 'SoftinhoDB',
        options: {
            encrypt: true, // use true para conexões seguras
            trustServerCertificate: true, // necessário para ambientes de desenvolvimento locais
             }
        };

    Certifique-se de que o banco de dados SoftinhoDB e as tabelas Clients e Tickets foram criados. Execute o SQL fornecido em sua instância MSSQL para configurar o banco.

    (Opcional) Crie um arquivo .env para armazenar variáveis de ambiente, como a porta do servidor ou credenciais.

4. Rotas da API:

A API fornece endpoints para gerenciar Clientes e Tickets.

    Clientes
    GET /api/clients: Retorna todos os clientes.
    GET /api/clients/
    : Retorna um cliente específico pelo ID.
    POST /api/clients: Cria um novo cliente.
    Exemplo de Payload para POST:

        {
        "company_name": "Farmacity",
        "document_type": "CPF",
        "document_number": "06014255532",
        "street": "Av Paulista",
        "street_number": "2309",
        "state_code": "SP",
        "phone": "(11) 9 9343-3409",
        "email_cadastrado": "contato@farmacity.com",
        "renewal_contract": "2024-12-31T12:00",
        "contract_type": "Mensal",
        "price": 5000
         }

5. Tickets:

    GET /api/tickets: Retorna todos os tickets.
    GET /api/tickets/
    : Retorna um ticket específico pelo ID.
    POST /api/tickets: Cria um novo ticket.

    Exemplo de Payload para POST:

    {
    "name": "John Doe",
    "document_number": "06014255532",
    "type_service_call": "Suporte Técnico",
    "description": "Problema com o sistema",
    "protocol": "1234567890",
    "opening_date": "2024-01-01T12:00",
    "closing_date": null,
    "status": "Aberto",
    "priority": "Alta",
    "solution": null
    }

6. Iniciando o servidor:

    Conecte-se ao banco de dados MSSQL.

    Execute o seguinte comando para iniciar o servidor:

    node app.js

    O servidor estará rodando em http://localhost:3000.

    Você pode testar os endpoints usando ferramentas como Postman ou Insomnia.

7. Estrutura de Arquivos:

/project-root
  /src                    # Código-fonte principal
    /controllers           # Lógica de controle da API
      clientController.js  # Controlador para os clientes
      ticketController.js  # Controlador para os tickets
    /models                # Modelos que representam as tabelas do banco de dados
      clientModel.js       # Modelo da tabela de clientes
      ticketModel.js       # Modelo da tabela de tickets
  /config                  # Configurações do banco de dados e ambiente
    database.js            # Arquivo de conexão com o banco de dados
  /db                      # Arquivos relacionados ao banco de dados
    schema.sql             # Script de criação do banco de dados e tabelas
  /node_modules            # Dependências do projeto instaladas via npm
  API.js                   # Arquivo principal da API (pode ter outro nome, como app.js ou index.js)
  package.json             # Arquivo de configuração do Node.js e dependências do projeto
  README.md                # Documentação do projeto


8. Licença
Este projeto é licenciado sob a MIT License.


9. Explicação:

Pré-requisitos: Lista o software necessário para rodar a aplicação.
Instalação: Fornece instruções sobre como clonar o repositório e instalar dependências.
Configuração: Explica como configurar o banco de dados MSSQL.
Rotas da API: Documenta os endpoints disponíveis, incluindo exemplos de requisições.
Iniciando o servidor: Guia para rodar o servidor localmente.
Estrutura de Arquivos: Mostra a organização do projeto.
Licença: Inclui uma referência à licença do projeto.

Este README.md deve fornecer uma boa base para entender e trabalhar com o projeto. Se houver outros detalhes específicos ou instruções que precisam ser incluídas, ajuste conforme necessário.
