Cypress.Commands.add('login', (
    username = Cypress.env('USER_EMAIL'), 
    password = Cypress.env('USER_PASSWORD')
) => {
    cy.visit('/login')

    cy.get('#email').type(username, {log: false})
    cy.get('#password').type(password, {log: false})
    cy.get('button[type="submit"]').click()
    cy.contains('h1', 'Your Notes').should('be.visible')
})

Cypress.Commands.add('create', () => {
	cy.contains('Create a new note').click()

    cy.get('#content').type('My note')
    cy.contains('Create').click()

    cy.get('.list-group').should('contain', 'My note')
})

Cypress.Commands.add('edit', () => {
    cy.get('.list-group').contains('My note').click()
    cy.get('#content').type(' updated')
    cy.contains('Save').click()

    cy.get('.list-group').should('contain', 'My note updated')
    cy.get('.list-group:contains(My note updated)').should('be.visible')
})

Cypress.Commands.add('delete', () => {
    cy.get('.list-group').contains('My note updated').click()
    cy.contains('Delete').click()

    cy.get('.list-group:contains(My note updated)').should('not.exist')
})