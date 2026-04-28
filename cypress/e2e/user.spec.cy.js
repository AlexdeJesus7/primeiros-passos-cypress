import userData from '../fixtures/userData.json'
import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import myInfoPage from '../pages/myInfoPage.js'

const loginPage = new loginPage()
const dashboardPage = new dashboardPage()
const myInfoPage = new myInfoPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {

  }

  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.confirmDashboardAccess()

    myInfoPage.fillInfo()

  })
  it('login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert).contains('Invalid credentials')
})

})