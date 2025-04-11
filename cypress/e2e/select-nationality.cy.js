describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get("[name='username']").type('Admin');
    cy.get("[name='password']").type('admin123');
    cy.get("[type='submit']").click()
    cy.location('href').should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard');
    cy.get("[href='/web/index.php/pim/viewMyDetails']").should('have.attr', 'href', '/web/index.php/pim/viewMyDetails').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'PIM');
    cy.get('.oxd-select-text--arrow').eq(0).click();
    cy.get('.oxd-select-dropdown .oxd-select-option').should('be.visible').contains('Brazilian').click();
    cy.get('.oxd-select-text').eq(0).should('contain', 'Brazilian');
  })
})