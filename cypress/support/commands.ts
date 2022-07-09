///<reference types="cypress" />



declare global {
  namespace Cypress {
    interface Chainable {
      headingForm: typeof headingForm;
    }
  }
}

export const headingForm = (selector: string, value: string) => {
    cy.get(`#${selector}`).type(value);
};

export{}