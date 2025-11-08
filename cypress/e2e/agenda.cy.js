describe('Agenda EBAC', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('incluir contato', () => {
    cy.contains('Criar contato').click()
    cy.get('input[placeholder="Nome"]').type('João Teste')
    cy.get('input[placeholder="E-mail"]').type('joao@test.com')
    cy.get('input[placeholder="Telefone"]').type('11999999999')
    cy.contains('Salvar').click()
    cy.contains('João Teste').should('exist')
  })

  it('editar contato', () => {
    cy.contains('João Teste').parent().contains('Editar').click()
    cy.get('input[placeholder="Telefone"]').clear().type('11888888888')
    cy.contains('Salvar').click()
    cy.contains('11888888888').should('exist')
  })

  it('remover contato', () => {
    cy.contains('João Teste').parent().contains('Excluir').click()
    cy.contains('Confirmar').click() // se tiver modal
    cy.contains('João Teste').should('not.exist')
  })
})
