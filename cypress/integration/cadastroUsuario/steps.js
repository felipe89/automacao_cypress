import Login from '../../support/pages/Elements'
import CreateUser from '../../support/pages/Elements'

Given(/^acesso a pagina do siste$/, () => {
    Login.acessaPage()
});

When(/^informo meu email de usuario no campo de criação de usuario$/, () => {
    CreateUser.cadastraUsuario(); 
    cy.get('h1[class="page-heading"]').should('contain', 'Create an account')
});

When(/^informo os dados cadastrais$/, () => {
	return true;
});

Then(/^meu cadastro deve ser efetuado com sucesso.$/, () => {
	return true;
});
