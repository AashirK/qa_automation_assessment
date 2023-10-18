// Import page objects for the product and login pages
import ProductPage from "../pageObject/productObject";
import LoginPage from "../pageObject/loginObject";

// Create instances of the page objects
const loginObject = new LoginPage();
const productObject = new ProductPage();

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

    // Test case: Adding a product (1)
    it("Adding product 1", () => {
        // Search for a product and select a random one
        productObject.enterData("search", "Jacket for men{enter}");
        cy.get('li.item.product.product-item').then(($lis) => {
            const numItems = $lis.length;
            const randomIndex = Math.floor(Math.random() * numItems);
            const randomLi = $lis.eq(randomIndex);
            cy.wrap(randomLi).click();
        });

        // Trigger a click event on an element and add to the cart
        cy.contains("XL").trigger('click');
        cy.get('[role="option"]').click({ multiple: true });
        cy.contains("Add to Cart").click();
        cy.wait(2000);
    });

    // Test case: Adding a product (2)
    it("Adding product 2", () => {
        // Search for a product and select a random one (similar to the first test case)
        productObject.enterData("search", "Jacket for men{enter}");
        cy.get('li.item.product.product-item').then(($lis) => {
            const numItems = $lis.length;
            const randomIndex = Math.floor(Math.random() * numItems);
            const randomLi = $lis.eq(randomIndex);
            cy.wrap(randomLi).click();
        });

        // Trigger a click event on an element and add to the cart (similar to the first test case)
        cy.contains("XL").trigger('click');
        cy.get('[role="option"]').click({ multiple: true });
        cy.contains("Add to Cart").click();
        cy.wait(2000);
    });
});
