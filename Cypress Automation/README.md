# Cypress Automation Project

## Project Overview

This project demonstrates UI test automation for the [SauceDemo](https://www.saucedemo.com/) web application using the Cypress testing framework.

The project focuses on creating maintainable and reusable end-to-end tests by applying automation best practices such as:

* Page Object Model (POM)
* Reusable Cypress custom commands
* Structured test suites
* Positive and negative test scenarios
* UI validation and product navigation

---

## Learning Objectives

This project demonstrates the ability to:

* Understand Cypress automation fundamentals.
* Create and execute end-to-end UI tests.
* Automate positive and negative login scenarios.
* Validate homepage and product information.
* Create reusable Cypress custom commands.
* Implement Page Object Model for maintainable automation.
* Organize a Cypress project using a structured folder architecture.
* Improve test readability and maintainability.

---

## Application Under Test

**Application:** SauceDemo
**URL:** https://www.saucedemo.com/

SauceDemo is an e-commerce demo application used for practicing web UI automation and software testing.

---

## Tasks Completed

| Task | Description                                  | Status      |
| ---- | -------------------------------------------- | ----------- |
| 1    | Setup Cypress Project                        | ✅ Completed |
| 2    | Automate Login Failure Scenario              | ✅ Completed |
| 3    | Automate Login Success & Homepage Validation | ✅ Completed |
| 4    | Automate Product Navigation & Validation     | ✅ Completed |
| 5    | Create Cypress Custom Commands               | ✅ Completed |
| 6    | Apply Page Object Model (POM)                | ✅ Completed |

---

## Test Scenarios

### 1. Login Failure Scenario

Validates that the application displays an appropriate error message when invalid credentials are entered.

**Test Data:**

* Username: `wrong_user`
* Password: `wrong_password`

**Validation:**

* Error message is displayed.
* Error message indicates that the username and password do not match.

---

### 2. Successful Login & Homepage Validation

Validates successful login using valid SauceDemo credentials.

**Test Data:**

* Username: `standard_user`
* Password: `secret_sauce`

**Validations:**

* User is redirected to `/inventory.html`.
* Products page title is displayed.
* Product inventory list is visible.
* Shopping cart is visible.

---

### 3. Product Navigation & Validation

Validates navigation from the inventory page to a specific product details page.

**Product Tested:**

**Sauce Labs Backpack**

**Validations:**

* Product details page opens successfully.
* Correct product URL is displayed.
* Product name is visible.
* Product price is `$29.99`.
* Product description is visible.
* Add to Cart button is visible.

---

## Custom Commands

A reusable Cypress custom command was created for login functionality.

### `cy.login()`

The custom command allows tests to perform login without repeating the username, password, and login button selectors.

Example:

```javascript
cy.login('standard_user', 'secret_sauce')
```

This improves:

* Code reusability
* Test readability
* Maintainability
* Reduction of duplicate code

---

## Page Object Model

The project uses the Page Object Model to separate page-specific selectors and actions from test scripts.

### LoginPage.js

Responsible for:

* Opening the SauceDemo login page
* Entering username
* Entering password
* Clicking the login button
* Performing login
* Validating login error messages

### InventoryPage.js

Responsible for:

* Validating the inventory page
* Selecting products
* Validating product visibility
* Validating product prices

### ProductPage.js

Responsible for:

* Validating the product details page
* Validating product name
* Validating product price
* Validating the Add to Cart button

---

## Project Structure

```text
Cypress-Automation-Project/
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── product.cy.js
│   │
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── InventoryPage.js
│   │   └── ProductPage.js
│   │
│   ├── fixtures/
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Tools & Technologies

* **Cypress** — End-to-end UI automation
* **JavaScript** — Test scripting language
* **Node.js** — JavaScript runtime
* **Page Object Model (POM)** — Test architecture
* **Git & GitHub** — Version control and project submission

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the Project

```bash
cd Cypress-Automation-Project
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Open Cypress

```bash
npx cypress open
```

Select **E2E Testing** and choose the available browser.

---

## Running Tests

### Run All Tests

```bash
npx cypress run --e2e
```

### Run Login Tests

```bash
npx cypress run --e2e --spec "cypress/e2e/login.cy.js"
```

### Run Product Tests

```bash
npx cypress run --e2e --spec "cypress/e2e/product.cy.js"
```

---

## Test Results

All implemented Cypress test cases are passing successfully.

Current test suite:

```text
Login Tests
✓ Invalid login validation
✓ Successful login and homepage validation

Product Tests
✓ Product navigation and details validation
```

**Total: 3 tests passing**

---

## Key Skills Demonstrated

* UI Test Automation
* Cypress
* JavaScript
* End-to-End Testing
* Functional Testing
* Positive Testing
* Negative Testing
* Page Object Model
* Custom Commands
* Locator Strategy
* Assertions
* Test Organization
* Test Maintainability
* GitHub Project Management

---

## Conclusion

This project demonstrates the implementation of maintainable end-to-end UI automation using Cypress. It covers login validation, homepage verification, product navigation, reusable custom commands, and Page Object Model architecture.

The project provides practical experience in structuring an automation framework and writing reusable, readable, and maintainable UI test cases.
