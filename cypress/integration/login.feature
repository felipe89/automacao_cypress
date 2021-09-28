
Feature: Efetuar login na pagina  de compras    

    Como usuário desejo efetuar login a minha conta de usuário
    Para ter acessar as minhas compras realizadas 

    Scenario: Logar a minha conta 
     Given acesse a pagina do site
      When informo usuário e senha de acesso
      And clico em login
      Then acesso a minha pagina de usuário.
     