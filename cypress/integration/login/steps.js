import Login from '../../support/pages/Elements'

Given(/^acesse a pagina do site$/, () => {
	Login.acessaPage(); 
});

When(/^informo meu email de acesso e minha senha cadastrada$/, () => {
	Login.efetuaLogin();
});

Then(/^devo validar os resultados$/, () => {
	Login.validaLoginPage();
	Login.sair(); 
});
