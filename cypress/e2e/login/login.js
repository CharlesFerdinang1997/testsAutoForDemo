import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('The user opens the website', () => {

  cy.visit('https://dbs-demoazuredevops.netlify.app/'); 

});

When('The user checks the presence of the Title of the page', () => {

 cy.title().should('eq','Site Vitrine - Demo')

});

And('The user checks the presence of the contacts menu', () => {

 cy.get('a[href*="#contact"]').should('be.visible');

});

Then('The user checks the presence of the button', () => {

 cy.get('button').should('be.visible');

});