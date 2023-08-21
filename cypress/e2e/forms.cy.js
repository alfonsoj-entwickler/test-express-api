describe("Form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test suscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("suscribe-form").find("input").as("suscribe-input");
    cy.get("@suscribe-input").type("connecta.muller@gmail.com");
    cy.contains(/Successfully subbed: connecta.muller@gmail.com/i).should(
      "not.exist"
    );
    cy.getDataTest("suscribe-button").click();
    cy.contains(/Successfully subbed: connecta.muller@gmail.com/i).should(
      "exist"
    );
    cy.wait(3000);
    cy.contains(/Successfully subbed: connecta.muller@gmail.com/i).should(
      "not.exist"
    );

    cy.get("@suscribe-input").type("connecta.muller@gmail.io");
    cy.contains(/Invalid email: connecta.muller@gmail.io/i).should("not.exist");
    cy.getDataTest("suscribe-button").click();
    cy.contains(/Invalid email: connecta.muller@gmail.io/i).should("exist");
    cy.wait(3000);
    cy.contains(/Invalid email: connecta.muller@gmail.io/i).should("not.exist");

    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("suscribe-button").click();
    cy.contains(/fail!/i).should("exist");
  });
});
