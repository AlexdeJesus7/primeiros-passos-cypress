class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input--active',
            genericCombobox: '.oxd-select-text--arrow',
            secondItemCombobox: ':nth-child(5) > span',
            thirdItemCombobox: ':nth-child(3) > span',
            dateField: '[placeholder="yyyy-mm-dd"]',
            dateCloseButton: '.--close',
            submitButton: '[type="submit"]'
        }
        return selectors;

    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }    

    fillEmployeeDetails(EmployeeId, OtherId, drivesLicenseDate, expireDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(EmployeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(drivesLicenseDate)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expireDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }    

    fillStatus() {
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get('.oxd-select-text-input').eq(0).should('contain', 'American')

        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().thirdItemCombobox).click()
        cy.get('.oxd-select-text-input').eq(1).should('contain', 'Married')
    
    }    

        
}

export default MyInfoPage