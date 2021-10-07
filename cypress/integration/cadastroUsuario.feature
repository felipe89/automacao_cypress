Feature: Cadastro de usuario pagina de compras
    Como usuario eu desejo criar uma cadastro na pagina de comprar
    Para que eu possa acessar as minhas comprar efetuadas

    Scenario: criar cadastro de usuário 
    Given acesso a pagina do siste
    When informo meu email de usuario no campo de criação de usuario
    And informo os dados cadastrais
    Then meu cadastro deve ser efetuado com sucesso.
