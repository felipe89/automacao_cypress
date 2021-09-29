
Given(/^acesse a pagina do site$/, () => {
	cy.visit('/');
});

When(/^informo a pesquisa de um determinado produto$/, () => {
    // cy.get("#h_search-input").clean();
	cy.get("#h_search-input").type("Jogos ps4")
});

When(/^clico no produto desejado$/, () => {
    cy.get('#h_search-btn').click();
});

Then(/^devo validar os resultados da pesquisa$/, () => {
	return true;
});


