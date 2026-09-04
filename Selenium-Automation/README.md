# Selenium Automation Project

## Project Overview

This project focuses on building a UI test automation framework using **Java, Selenium WebDriver, TestNG, and Maven**.

The automation framework is designed to test the **SauceDemo** web application by simulating common user workflows such as login validation, successful login, navigation through the product pages, and validation of product information.

The project follows the **Page Object Model (POM)** design pattern and includes reusable utility methods to improve code reusability, maintainability, and test reliability.

---

## Learning Objectives

This project demonstrates the following skills:

* Understanding Selenium WebDriver for browser automation
* Using TestNG for test management and execution
* Creating automated test cases for common application workflows
* Implementing the Page Object Model (POM) design pattern
* Creating reusable utility methods for Selenium actions
* Using assertions to validate application behavior
* Organizing an automation project using a structured folder hierarchy
* Managing project dependencies using Maven

---

## Tasks Completed

### 1. Selenium Automation Framework Setup

Created a Selenium automation project using:

* Java
* Selenium WebDriver
* TestNG
* Maven
* IntelliJ IDEA

The framework includes a reusable WebDriver setup and a base test class for common test configuration.

### 2. Login Failure Scenario

Automated a negative login scenario using invalid credentials.

The test verifies that:

* The login page is accessible
* Invalid credentials can be entered
* The Login button can be clicked
* The appropriate error message is displayed

### 3. Successful Login and Homepage Validation

Automated the successful login flow using valid SauceDemo credentials.

The test verifies that:

* Valid credentials can be entered
* The user can successfully log in
* The Products page is displayed
* The shopping cart is visible

### 4. Product Navigation and Validation

Automated navigation to the **Sauce Labs Backpack** product page.

The test validates:

* Product name
* Product price
* Product description
* Add to Cart button visibility

### 5. Reusable Utility Methods

Created reusable utility methods to reduce code duplication and simplify Selenium operations.

The `ElementUtils` class contains reusable methods for actions such as:

* Clicking elements
* Entering text
* Retrieving element text
* Checking element visibility

Explicit waits are used where required to improve test stability.

### 6. Page Object Model (POM)

Implemented the Page Object Model design pattern by separating page-specific locators and actions from test classes.

The project includes page classes for:

* Login Page
* Inventory/Product Listing Page
* Product Details Page

This structure makes the framework easier to maintain and extend.

---

## Technologies Used

| Technology         | Purpose                           |
| ------------------ | --------------------------------- |
| Java 17            | Programming language              |
| Selenium WebDriver | Browser automation                |
| TestNG             | Test execution and assertions     |
| Maven              | Dependency and project management |
| IntelliJ IDEA      | Development environment           |

---

## Application Under Test

**SauceDemo**

The project automates selected login and product-related workflows of the SauceDemo web application.

---

## Project Structure

```text
SeleniumAutomation
│
├── .gitignore
├── pom.xml
├── testng.xml
├── README.md
│
└── src
    │
    ├── main
    │   └── java
    │       ├── pages
    │       │   ├── LoginPage.java
    │       │   ├── InventoryPage.java
    │       │   └── ProductPage.java
    │       │
    │       └── utils
    │           ├── DriverFactory.java
    │           └── ElementUtils.java
    │
    └── test
        └── java
            └── tests
                ├── BaseTest.java
                ├── LoginTest.java
                └── ProductTest.java
```

---

## Test Cases

The current automation suite contains the following tests:

### Invalid Login Test

Validates that the application displays an appropriate error message when invalid login credentials are provided.

### Valid Login Test

Validates successful login and verifies important elements on the Products page.

### Product Details Test

Navigates to the Sauce Labs Backpack product page and validates the product information and Add to Cart button.

---

## Test Execution

The tests can be executed using the TestNG suite:

```text
testng.xml
```

### Test Result

All currently implemented automated tests passed successfully.

**Tests Passed: 3/3**

---

## How to Run the Project

1. Clone or download the repository.
2. Open the project in IntelliJ IDEA.
3. Make sure Java 17 and Maven are installed.
4. Allow Maven to download the required dependencies.
5. Open `testng.xml`.
6. Run the TestNG suite.
7. Review the test execution results.

---

## Framework Highlights

The framework includes:

* Page Object Model (POM)
* Reusable Selenium utilities
* TestNG test execution
* Maven dependency management
* Base test configuration
* Explicit waits
* Assertions for UI validation
* Organized project structure
* Separate page and test classes

---

## Submission

**Submission Format:** GitHub Repository

This repository contains the complete Selenium automation framework, source code, configuration files, and project documentation required for the assignment.

---

## Author

**Muzna Hashmi**

Software Engineering Graduate | Junior QA Specialist
