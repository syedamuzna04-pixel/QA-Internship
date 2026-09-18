# Playwright Automation Project

## Project Overview

This project automates UI testing for the **Daraz.pk** e-commerce website using the **Playwright** testing framework.

The project focuses on automating common e-commerce workflows such as product search, filtering, product validation, navigation to the product details page, and shipping verification.

The automation framework follows the **Page Object Model (POM)** to separate page-specific locators and actions from test cases, making the test suite more organized, reusable, and maintainable.

---

## Objectives

The main objectives of this project are to:

* Learn and apply Playwright for UI automation.
* Automate real-world e-commerce user workflows.
* Implement reusable page objects using the Page Object Model.
* Write assertions to validate expected UI behavior.
* Automate product search and filtering.
* Validate the availability of products in search results.
* Navigate from search results to a product details page.
* Verify shipping information on the product page.
* Organize an automation project using a structured framework.

---

## Tasks Completed

| # | Task                              | Status      |
| - | --------------------------------- | ----------- |
| 1 | Navigate to Daraz homepage        | ✅ Completed |
| 2 | Search for Electronics            | ✅ Completed |
| 3 | Apply Brand Filter                | ✅ Completed |
| 4 | Apply Price Filter (500–5000 PKR) | ✅ Completed |
| 5 | Validate Product Count            | ✅ Completed |
| 6 | Open Product Details Page         | ✅ Completed |
| 7 | Verify Free Shipping              | ✅ Completed |
| 8 | Implement Page Object Model (POM) | ✅ Completed |

---

## Technologies Used

* **Playwright**
* **Node.js**
* **JavaScript**
* **Page Object Model (POM)**
* **Google Chrome**

---

## Project Structure

```text
Assignment-06-Playwright-Automation/
│
├── pages/
│   ├── DarazHomePage.js
│   ├── DarazSearchResultsPage.js
│   └── DarazProductPage.js
│
├── tests/
│   └── daraz.spec.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Page Object Model Implementation

The project uses the Page Object Model to keep page-specific locators and actions separate from the test cases.

### 1. DarazHomePage

**File:**

```text
pages/DarazHomePage.js
```

This page object contains functionality related to the Daraz homepage.

### Responsibilities

* Navigate to the Daraz homepage.
* Locate the s
