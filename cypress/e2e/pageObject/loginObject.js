// Define a class called login
class Login {
    // Define locators for elements on the login page
    loginPageLocators = {
        userName: '#email',
        password: '#pass',
        invalidSyntaxEmailPasswordMsg: '#email-error',
        loginSubmitButton: '#send2',
    }

    // Method to enter data into input fields based on the 'type'
    enterData(type, data) {
        switch (type) {
            case 'userName':
                // Clear and type the provided 'data' into the username input field
                cy.get(this.loginPageLocators.userName).clear().type(data);
                break;

            case 'password':
                // Clear and type the provided 'data' into the password input field
                cy.get(this.loginPageLocators.password).clear().type(data);
                break;
        }
    }

    // Method to click on a button specified by the 'option'
    clickOnButton(option) {
        switch (option) {
            case 'submit':
                // Click the login submit button
                cy.get(this.loginPageLocators.loginSubmitButton).click();
                break;
        }
    }

    // Method to validate error messages based on 'errorType'
    validateResults(errorType) {
        switch (errorType) {
            case 'invalid email error':
                // Check for the visibility of the invalid email error message
                cy.get(this.loginPageLocators.invalidSyntaxEmailPasswordMsg).should('be.visible');
                // Check if the error message contains the expected text
                cy.get(this.loginPageLocators.invalidSyntaxEmailPasswordMsg).contains('Please enter a valid email address (Ex: johndoe@domain.com).');
                break;

            case 'invalid password':
                // Check for the visibility of the invalid password error message
                cy.get('.message-error > div').should('be.visible');
                // Check if the error message contains the expected text
                cy.get('.message-error > div').contains("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.");
                break;
        }
    }
}

// Export the Login class as the default export
export default Login;
