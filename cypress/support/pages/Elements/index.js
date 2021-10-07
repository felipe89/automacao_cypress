const el = require ('../Elements/elementsScreen').ELEMENTS
const url = Cypress.config('baseUrl')

class Login{
    acessaPage(){
        cy.visit(url)
    }
    efetuaLogin(){
        cy.get(el.emailUsuario).type('teste@teste1234.com.br')
        cy.get(el.senhaUruario).type('123456')
        cy.get(el.btnSingIn).click(); 
    }
    
    validaLoginPage(){
        cy.get(el.validaAcesso).should('contain', 'Teste Teste')
    }

    sair(){
        cy.get(el.logout).click(); 
    }
  //Mensagem Alert  
    validaMsg(){
        cy.get(el.msgAlerta).should('contain', 'Authentication failed.')
    }
    //Criação cadastro de usuario
    cadastraUsuario(){
        cy.get(el.createEmailUser).type('aei@test.com.br')
        cy.get(el.btnCreateUsuario).click()
    }
}

export default new Login();