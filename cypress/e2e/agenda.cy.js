describe('Agenda EBAC - CRUD', () => {

  const nome = 'João Teste Cypress'
  const email = 'joao.teste@cypress.com'
  const telefone = '11999999999'
  const novoTelefone = '11888888888'

  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('1. Inclusão de contato', () => {
    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Telefone"]').type(telefone)
    cy.get('button.adicionar').click()
    cy.contains(nome).should('exist')
  })

  it('2. Alteração de contato', () => {
    // Cria o contato primeiro
    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Telefone"]').type(telefone)
    cy.get('button.adicionar').click()

    // Localiza o contato e clica no botão Editar
    cy.contains(nome)
      .closest('.contato')
      .find('button.edit')
      .click()

    // Altera o telefone
    cy.get('input[placeholder="Telefone"]').clear().type(novoTelefone)

    // Clica no botão correto do formulário
    cy.get('button[type="submit"]').click()

    // Verifica a alteração
    cy.contains(novoTelefone).should('exist')
  })

it('3. Remoção de contato', () => {
    // Intercepta o DELETE
    cy.intercept('DELETE', '**/api/contatos**').as('deleteContato')

    // Cria o contato
    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Telefone"]').type(telefone)
    cy.get('button.adicionar').click()
    
    // Aguarda aparecer
    cy.contains(nome, { timeout: 10000 }).should('exist')

    // Salva o número atual de contatos
    cy.get('.contato').its('length').as('contatosCount')

    // Clica no delete
    cy.contains(nome)
        .parents('.contato') // Tenta parents em vez de closest
        .find('button.delete')
        .click()

    // Aguarda a requisição DELETE
    cy.wait('@deleteContato', { timeout: 10000 })

    // Recarrega a página
    cy.reload()
    
    // Verifica após recarregar
    cy.contains(nome, { timeout: 10000 }).should('not.exist')
})
})
