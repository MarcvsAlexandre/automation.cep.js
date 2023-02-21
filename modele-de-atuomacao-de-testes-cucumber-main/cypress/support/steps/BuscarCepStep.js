/* global Given, Then, When */

import Auth from '../pages/BuscarCep'
import Home from '../pages/HomePage'
import user from '../../fixtures/user.json'



Given("que tenha acesso ao aplicativo", () => {
	cy.visit('/') 
    Auth.CampodeBusca()
});

Then("solicite busca por CEP 80700000", () => {
    Auth.digitarCEPInvalido()
});

Then("clique no botão do BUSCAR", () => {
	Auth.botaoDeBusca()
});

Then("receber mensagem do CEP não existe", () => {
	Auth.cepNaoEncontradoID()
});

Then("solicite busca por CEP 01013-001", () => {
	Auth.digitarCEPValido()
});

Then("clique no botão do BUSCAR", () => {
	Auth.botaoDeBusca()
});


Then("receber mensagem do receber mensagem do Resultado Rua Quinze de Novembro Lado impar", () => {
	Auth.cepEncontrado()
});

Then("solicite busca por CEP SS987654321BR", () => {
	Auth.digitarCEPInvalidoCodigo()
});

Then("clique no botão do BUSCAR", () => {
	Auth.botaoDeBusca()
});

Then("receber mensagem do CEP não existe", () => {
	Auth.cepNaoEncontradoXpath()
});
