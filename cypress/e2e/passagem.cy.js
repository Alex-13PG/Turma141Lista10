const { select } = require("async")

describe('comprar passagem', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Selecionar Cidade de partida', () => {
    cy.title()
        .should('eq', 'BlazeDemo')

          
    cy.get('select[name="fromPort"]')
        .select('São Paolo')

    cy.get('select[name="toPort"]')
        .select('Cairo')

    cy.get('input[type="submit"]')
        .click()

    cy.title()
        .should('eq', 'BlazeDemo - reserve')

    cy.get('input[type="submit"]')
        .eq(0)
        .click()

    cy.title('eq', 'Compra Bazedemo')

    cy.get('#inputName')
        .type('Alex Castro')

    cy.get('#address')
        .type('Airton 196')

    cy.get('#city')
        .type('galáctica')

    cy.get('#state')
        .type('Coruscant')

    cy.get('#zipCode')
        .type(327)

    cy.get('select[name="cardType"]')
        .select('amex')

    cy.get('#creditCardNumber')
        .type(1138327)

    cy.get('#creditCardMonth')
        .clear()
        .type(12)

    cy.get('#creditCardYear')
        .clear()
        .type(1995)

    cy.get('#nameOnCard')
        .type('Alex Castro')

    cy.get('#rememberMe')
        .click()

    cy.get('input[value="Purchase Flight"]')
        .click()

    cy.title('eq', 'Blazedemo Confirmation')
         
  })

})