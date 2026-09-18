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
* Locate the search box.
* Search for a product or category.

### Main Methods

```javascript
navigate()
searchProduct(productName)
```

---

### 2. DarazSearchResultsPage

**File:**

```text
pages/DarazSearchResultsPage.js
```

This page object handles functionality available on the search results page.

### Responsibilities

* Apply the brand filter.
* Apply the price filter.
* Count displayed products.
* Open the first product from the search results.
* Validate the selected price filter.

### Main Methods

```javascript
applyBrandFilter()
applyPriceFilter(min, max)
getProductCount()
openFirstProduct()
```

---

### 3. DarazProductPage

**File:**

```text
pages/DarazProductPage.js
```

This page object handles functionality on the product details page.

### Responsibilities

* Check whether the Free Shipping indicator is available.
* Validate the visibility of the shipping information when available.

### Main Method

```javascript
isFreeShippingAvailable()
```

---

# Automated Test Scenarios

## 1. Navigate to Daraz Homepage

The test opens the Daraz.pk homepage and verifies:

* The URL contains `daraz.pk`.
* The search box is visible.

---

## 2. Search for Electronics

The test:

1. Opens Daraz.pk.
2. Enters `electronics` into the search box.
3. Submits the search.
4. Verifies that the resulting URL contains `electronics`.

---

## 3. Apply Brand Filter

The test:

1. Searches for `electronics`.
2. Selects the **Iqbal Electronics** brand filter.
3. Verifies that the selected brand remains visible.

---

## 4. Apply Price Filter

The test applies the following price range:

```text
Minimum: 500 PKR
Maximum: 5000 PKR
```

The test then verifies that the selected price range is displayed on the results page.

---

## 5. Validate Product Count

The test:

1. Searches for electronics.
2. Applies the `500–5000 PKR` price filter.
3. Counts the product links displayed on the results page.
4. Verifies that at least one product is available.

Example validation:

```javascript
expect(productCount).toBeGreaterThan(0);
```

---

## 6. Open Product Details Page

The test:

1. Searches for electronics.
2. Applies the price filter.
3. Selects the first available product.
4. Verifies that the browser navigates to a product URL.

---

## 7. Verify Free Shipping

The test:

1. Searches for electronics.
2. Applies the price filter.
3. Opens the first product.
4. Checks whether the **Free Shipping** indicator is available.
5. If available, verifies that it is visible.

The test also handles products where Free Shipping is not available without causing an unnecessary failure.

---

# Test Execution

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Google Chrome

Verify Node.js:

```bash
node --version
```

Verify npm:

```bash
npm --version
```

---

## Installation

Clone or download the project and navigate to the project directory.

Install the project dependencies:

```bash
npm install
```

If Playwright-managed browsers are required, install them with:

```bash
npx playwright install
```

> The project is configured to use the installed Google Chrome browser.

---

## Running the Tests

### Run all tests

```bash
npx playwright test
```

### Run the Daraz test file

```bash
npx playwright test tests/daraz.spec.js
```

### Run tests with the browser visible

```bash
npx playwright test tests/daraz.spec.js --headed
```

### Run a specific test

For example:

```bash
npx playwright test tests/daraz.spec.js -g "Search for Electronics"
```

---

# Test Results

The complete test suite contains **7 automated test cases**.

Latest execution:

```text
Running 7 tests using 1 worker

7 passed
```

All seven automated scenarios are passing successfully.

---

# Playwright Configuration

The project uses a Playwright configuration file:

```text
playwright.config.js
```

The configuration specifies:

* Test directory
* Chromium browser
* Google Chrome channel
* Headed browser execution

The project is designed to execute the automation against the live Daraz.pk website.

---

# Key Learning Outcomes

Through this project, I gained practical experience in:

* Playwright test automation.
* Browser and page automation.
* Locating web elements using Playwright locators.
* Writing UI assertions.
* Automating search functionality.
* Automating product filters.
* Validating dynamic search results.
* Navigating between web pages.
* Handling optional UI elements.
* Creating reusable page objects.
* Applying the Page Object Model.
* Structuring a maintainable automation project.

---

# Notes

* The tests interact with the live Daraz.pk website, so UI elements and page behavior may change over time.
* Product availability, pricing, filters, and shipping information may vary depending on the current website data and location.
* The Free Shipping test validates the indicator when it is available for the selected product.

---

## Assignment Submission

This repository contains:

* Automated Playwright test scripts
* Page Object Model implementation
* Playwright configuration
* Package/dependency files
* Project documentation

The project demonstrates the completion of the assigned Playwright automation tasks for Daraz.pk.
