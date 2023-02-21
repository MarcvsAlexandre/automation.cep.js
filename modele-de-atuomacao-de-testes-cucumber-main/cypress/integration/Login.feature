@login

Feature: Buscar CEP
    Background: Background Acesso a Aplicacao
        Given que tenha acesso ao aplicativo


    Scenario: buscar CEP invalido
        And solicite busca por CEP 80700000
        And clique no botão do BUSCAR
        Then receber mensagem do CEP não existe

    Scenario: buscar CEP valido
        And solicite busca por CEP 01013-001
        And clique no botão do BUSCAR
        Then receber mensagem do receber mensagem do Resultado Rua Quinze de Novembro Lado impar

    Scenario: Buscar CEP com codigo
        And solicite busca por CEP SS987654321BR
        And clique no botão do BUSCAR
        Then receber mensagem do CEP não existe