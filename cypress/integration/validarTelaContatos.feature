Feature: Validar tela de contatos
        Como usuario gostaria de entrar em contato com os fornecedores

        Scenario: Validar tela de contatos
        Given eu acesse a pagina site 
        When acesso a aba contatos e informando meus dados e assunto que desejo informar
        Then envio uma mensagem para os responsaveis com sucesso. 
