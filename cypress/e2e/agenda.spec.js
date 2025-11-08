describe('Agenda de contatos - exercícios Cypress', () => {
  const base = '/'

  beforeEach(() => {
    cy.visit(base)
  })

  it('inclusão de um contato', () => {
    cy.contains('Novo contato').click()
    cy.get('input[name="name"]').clear().type('Fulano de Tal')
    cy.get('input[name="phone"]').clear().type('11999999999')
    cy.get('input[name="email"]').clear().type('fulano@example.com')
    cy.contains('Salvar').click()
    cy.contains('Fulano de Tal').should('exist')
    cy.contains('fulano@example.com').should('exist')
  })

  it('alteração de um contato', () => {
    cy.contains('Fulano de Tal')
      .parents('li, tr, .contact-item')
      .within(() => {
        cy.contains('Editar').click()
      })
    cy.get('input[name="phone"]').clear().type('11988888888')
    cy.contains('Salvar').click()
    cy.contains('Fulano de Tal')
      .parents('li, tr, .contact-item')
      .should('contain', '11988888888')
  })

  it('remoção de um contato', () => {
    cy.contains('Fulano de Tal')
      .parents('li, tr, .contact-item')
      .within(() => {
        cy.contains('Remover').click()
      })
    cy.contains('Confirmar').click()
    cy.contains('Fulano de Tal').should('not.exist')
  })
})
