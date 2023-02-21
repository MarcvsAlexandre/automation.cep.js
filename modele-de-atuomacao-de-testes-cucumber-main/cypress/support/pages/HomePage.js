
const el =  require('../elements/MapElements').mapElements

class HomePage {
    validarMensagemBemVindo() {
        cy.get(el.HOME.TITLE_PAGE).should('contain', 'Olá, Seja bem vindo')
    }
}

export default new HomePage()