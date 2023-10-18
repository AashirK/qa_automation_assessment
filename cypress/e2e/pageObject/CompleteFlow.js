// Define a class called Checkout
class Checkout {
    // Define locators for various elements on the webpage
    checkoutLocators = {
        checkOutButton: '#top-cart-btn-checkout',
        checkOutPop: '[data-block="minicart"]',
        checkOutMiniCart: '#mini-cart',
        checkOutShipping: '.table-checkout-shipping-method tbody tr',
        checkOutPlaceOrder: '.payment-method-content > :nth-child(4) > div.primary > .action',
        logout: 'ul.header.links li.authorization-link a'
    }

    // Method to click on a button specified by the 'option'
    clickOnButton(option) {
        switch (option) {
            case 'popup':
                // Click the 'popup' button
                cy.get(this.checkoutLocators.checkOutPop).click();
                break;
        }
    }

    // Method to remove an item from the shopping cart
    removeCart() {
        cy.get(this.checkoutLocators.checkOutMiniCart)
            .find('li')
            .first()
            .find('div.secondary a')
            .click();
    }

    // Method to confirm the removal of an item from the shopping cart
    removeCartConfirmation() {
        cy.get('.action-primary').click();
    }

    // Method to proceed to the checkout process
    proceedToCheckOut() {
        cy.get(this.checkoutLocators.checkOutButton).should("be.visible").click();
    }

    // Method to select a shipping method
    shippingSelection() {
        cy.get('.table-checkout-shipping-method tbody tr.row')
            .first() // Select the first row
            .find('td.col-method input[type="radio"]')
            .click();
    }

    // Method to proceed to the next step in the shipping process
    shippingNext() {
        cy.get('.button').contains('Next').click();
    }

    // Method to place an order
    placeOrder() {
        cy.get(this.checkoutLocators.checkOutPlaceOrder).contains('Place Order').click();
    }

    // Method to log out from the website
    logout() {
        cy.get(this.checkoutLocators.logout)
            .click({ multiple: true, force: true });
    }
}

// Export the Checkout class as the default export
export default Checkout;
