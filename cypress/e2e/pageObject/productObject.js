class product {
    productLocators ={
        searchBar : "#search"
    }

    enterData(type , data)
    {
        switch(type)
        {
            case 'search':  
                cy.get(this.productLocators.searchBar).clear().type(data) 
            break;
            
            case 'password' :
                cy.get(this.loginPageLocators.password).clear().type(data)
            break
            case 'fullName' :
                cy.xpath(this.loginPageLocators.fullName).clear().type(data)
            break
            case 'fotget password email' :
                cy.xpath(this.loginPageLocators.forgetPasswordEmail).clear().type(data)
        }
    }

}

export default product