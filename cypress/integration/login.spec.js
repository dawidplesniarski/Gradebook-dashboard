before(() => {
    cy.visit('http://localhost:3000');
    cy.waitForReact();
});

describe('Should login to application', () => {
    it('renders with initial data', () => {
        // cy.get('LoginBox','input[name="login"]').type('l')
        // cy.get('input[name="password"]').type('l')
        cy.react('TextInput', {props: {name: 'login'}}).type('l');
        cy.react('TextInput', {props: {name: 'password'}}).type('l');
        cy.react('Button').click()
    });
});