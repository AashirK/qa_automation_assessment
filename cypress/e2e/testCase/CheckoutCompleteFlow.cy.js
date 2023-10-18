// Import page objects for the product, login, and checkout pages
import ProductPage from "../pageObject/productObject";
import LoginPage from "../pageObject/loginObject";
import CheckoutPage from "../pageObject/CompleteFlow";

// Create instances of the page objects
const loginObject = new LoginPage();
const productObject = new ProductPage();
const checkoutObject = new CheckoutPage();

// Test suite for product search
describe("Product Search", () => {
    // Before each test case, navigate to the website and log in
    beforeEach(() => {
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get('.panel > .header > .authorization-link > a').click();
        loginObject.enterData('userName', "arsalanaseem27@gmail.com");
        loginObject.enterData('password', "Boolhundred1.");
        loginObject.clickOnButton("submit");
    });

    // Test case: Complete End to End Flow
    it("Complete End to End Flow", () => {
        // Adding Product 1
        productObject.enterData("search", "Jacket for men{enter}");
        cy.get('li.item.product.product-item').then(($lis) => {
            const numItems = $lis.length;
            const randomIndex = Math.floor(Math.random() * numItems);
            const randomLi = $lis.eq(randomIndex);
            cy.wrap(randomLi).click();
        });
        cy.contains("XL").trigger('click');
        cy.get('[role="option"]').click({ multiple: true });
        cy.contains("Add to Cart").click();
        cy.wait(2000);

        // Adding Product 2 (similar to the previous steps)
        // ...

        // Remove Item from the cart
        checkoutObject.clickOnButton("popup");
        checkoutObject.removeCart();
        checkoutObject.removeCartConfirmation();

        checkoutObject.proceedToCheckOut();
        cy.wait(4000);
        checkoutObject.shippingSelection();
        checkoutObject.shippingNext();

        checkoutObject.placeOrder();

        checkoutObject.logout();
    });
});
