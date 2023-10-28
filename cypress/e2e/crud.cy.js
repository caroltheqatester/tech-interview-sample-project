describe('Notes', () => {
  beforeEach(() => {
    cy.login('username','password')
  })

  it('should be able to create, edit and delete a note', () =>{
    cy.create(),
    cy.edit(),
    cy.delete()
  })
})