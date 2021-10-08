import Login from '../../support/pages/Elements'
import Register from '../../support/pages/Register'

Given(/^acesso a pagina do siste$/, () => {
    Login.acessaPage()
});

When(/^informo meu email de usuario no campo de criação de usuario$/, () => {
    Register.createUser();     
});

When(/^informo os dados cadastrais$/, () => {
	return true;
});

Then(/^meu cadastro deve ser efetuado com sucesso.$/, () => {
	return true;
});
