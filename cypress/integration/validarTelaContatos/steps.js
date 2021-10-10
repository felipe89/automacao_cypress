import Login from '../../support/pages/Elements'
import Contact from '../../support/pages/Contact'

Given(/^eu acesse a pagina site$/, () => {
	Login.acessaPage()
});

When(/^acesso a aba contatos e informando meus dados e assunto que desejo informar$/, () => {
	Contact.telaContatos();
    Contact.informarDadosDeContato(); 
});

Then(/^envio uma mensagem para os responsaveis com sucesso.$/, () => {
    Contact.enviarMensagem(); 
    Contact.retornarHomePage(); 
});
