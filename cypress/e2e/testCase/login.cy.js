// Import the page object for the login page
import LoginPage from "../pageObject/loginObject";

// Create an instance of the login page object
const loginObject = new LoginPage();

// Test suite for login
describe("Login", () => {
    // Test case: Testing with Wrong Email & Wrong Password
    it("Testing with Wrong Email & Wrong Password", () => {
        // Navigate to the website and click the login link
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get('.panel > .header > .authorization-link > a').click();

        // Enter an incorrect email and password, then attempt to log in
        loginObject.enterData('userName', "qwert");
        loginObject.enterData('password', "Admin@123");
        loginObject.clickOnButton("submit");

        // Validate that an error message for invalid email is displayed
        loginObject.validateResults("invalid email error");
    });

    // Test case: Testing with correct Email & Wrong Password
    it("Testing with correct Email & Wrong Password", () => {
        // Navigate to the website and click the login link
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get('.panel > .header > .authorization-link > a').click();

        // Enter a correct email and an incorrect password, then attempt to log in
        loginObject.enterData('userName', "arsalanaseem27@gmail.com");
        loginObject.enterData('password', "Admin@123");
        loginObject.clickOnButton("submit");

        // Validate that an error message for invalid password is displayed
        loginObject.validateResults("invalid Password");
    });

    // Test case: Testing with correct Email & Correct Password
    it("Testing with correct Email & Correct Password", () => {
        // Navigate to the website and click the login link
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get('.panel > .header > .authorization-link > a').click();

        // Enter a correct email and a correct password, then attempt to log in
        loginObject.enterData('userName', "arsalanaseem27@gmail.com");
        loginObject.enterData('password', "Boolhundred1.");
        loginObject.clickOnButton("submit");
    });
});
