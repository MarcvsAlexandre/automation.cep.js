import user from '../../fixtures/user.json'
import util from '../utils'

const el =  require('../elements/MapElements').mapElements

class AuthPage {
    CampodeBusca() {

        cy.title().should('be.equal', 'Busca CEP')

        cy.get(el.buscarCep.campoEndereco).should('be.visible')
       
  
    }

    digitarCEPInvalido() {
        cy.get(el.buscarCep.campoEndereco).type('80700000')
    }

    digitarCEPValido() {
        cy.get(el.buscarCep.campoEndereco).type('01013-001')
    }

    digitarCEPInvalidoCodigo() {
        cy.get(el.buscarCep.campoEndereco).type('SS987654321BR')
    }



    botaoDeBusca()
    {
        cy.get(el.buscarCep.botaoBuscar).click()
    }

    cepNaoEncontradoID(){
        cy.get(el.resultado.dadoNaoEncontrdoID).should("have.text", "Dados não encontrado")
    }

    cepNaoEncontradoCSS(){

        cy.get(el.resultado.dadoNaoEncontrdoCSS).should("have.text", "Dados não encontrado")
   
    }

    cepNaoEncontradoXpath(){

        cy.get(el.resultado.dadoNaoEncontrdoID).should("have.text", "Dados não encontrado")
   
    }

    cepEncontrado(){

        cy.get(el.resultado.dadosEncontradosID).should("have.text", "Rua Quinze de Novembro - lado ímpar")

    }

}

export default new AuthPage()

