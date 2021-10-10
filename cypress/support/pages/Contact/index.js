const el = require ('../Contact/elementsScreen').ELEMENTS

class Contact{
    telaContatos(){
        cy.get(el.btnContatoUs).click()
    }
    informarDadosDeContato(){
        cy.get(el.selecioneTituloAssunto).select('Webmaster')
        cy.get(el.enderecoEmail).type('teste@automatizado.com')
        cy.get(el.referenciaPedido).type('teste')
        cy.get(el.informaMensagemTexto).type('Esta tela esta sendo manipulado automaticamente ')        
    }
    enviarMensagem(){
        cy.get(el.btnSend).click()
        cy.get(el.mensagemEnviadaComSucesso).should('contain', 'Your message has been successfully sent to our team.')
    }
    retornarHomePage(){
        cy.get(el.btnHomePage).click()
    }

}
export default new Contact();