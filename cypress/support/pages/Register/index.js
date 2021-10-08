 const el = require ('../Register/elementsScreen').ELEMENTS

class Register {
    createUser(){
        cy.get(el.createEmailUser).type('testEND@teste.com')
        cy.get(el.btnCreateUsuario).click()
        cy.get(el.vlMenssageCreate).should('contain', 'Create an account')
    }
    cadastraDadosUser(){
        
    }
}

export default new Register(); 