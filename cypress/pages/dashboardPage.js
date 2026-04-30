class DashboardPage {
    selectorsList() {
        const selectors = {
            dashboardgrid: '.orangehrm-dashboard-grid',
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }

        return selectors;
    }

    checkdashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardgrid).should('be.visible')
        cy.get(this.selectorsList().myInfoButton).click()
    }
}

export default DashboardPage