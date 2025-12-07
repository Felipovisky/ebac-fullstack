Cypress.Commands.add('criarContato', (nome, email, telefone) => {
  cy.get('button.adicionar').click()
  cy.get('#name').type(nome)
  cy.get('#email').type(email)
  cy.get('#phone').type(telefone)
  cy.get('button[type="submit"]').click()
})
