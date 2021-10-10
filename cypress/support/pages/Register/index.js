 const el = require ('../Register/elementsScreen').ELEMENTS

class Register {
    createUser(){
        cy.get(el.createEmailUser).type('Test@h2O.com')
        cy.get(el.btnCreateUsuario).click()
        cy.get(el.vlMenssageCreate).should('contain', 'Create an account')
    }
    cadastraDadosUser(){
        cy.get(el.TipoSexo).click()
        cy.get(el.NomeUserInformation).type('Teste')
        cy.get(el.SobreNomeUserInformation).type('Automatizado')
        cy.get(el.emailUser).clear().type('Test@h2O.com')
        cy.get(el.senhaAcesso).click().type('123456')
        // cy.get(el.diaNasc).select('13')
        // cy.get(el.anoNasc).select('November')
        // cy.get(el.mesNasc).select('1989')
        //  cy.get(el.notificacaoEmail).click()
        cy.get(el.Endereco).type('Rua Dos Mundos')
        cy.get(el.Cidade).type('São Paulo')
        cy.get(el.Estado).select('Texas', 'to be visible')
        cy.get(el.CodigoPostar).click().type('75201')
        cy.get(el.Pais).should('contain', 'United States')
        cy.get(el.TelefoneUser).type('555-555')
        cy.get(el.EnredecoFuturo).clear().type ('USA')
        cy.get(el.btnRegister).click()
    }
    validaCadastroUsuarioEfetuado(){
        cy.get(el.validaAcesso).should('contain', 'Teste Automatizado')
    }
}

export default new Register(); 