# Assignment 04 – API Testing with Postman & JMeter

## Project Overview

This assignment focuses on API testing using **Postman** for functional API validation and **Apache JMeter** for basic performance testing.

The project uses **JSONPlaceholder**, a free public REST API commonly used for testing and learning API interactions.

The assignment demonstrates how to:

* Send API requests using different HTTP methods
* Validate API responses
* Verify HTTP status codes
* Create automated tests in Postman
* Validate response structure and fields
* Organize API requests using a Postman Collection
* Perform basic load testing using Apache JMeter
* Analyze response time, throughput, and error rate

---

## API Used

**JSONPlaceholder**

Base URL:

`https://jsonplaceholder.typicode.com`

Example endpoint:

`GET https://jsonplaceholder.typicode.com/posts/1`

---

## Tools & Technologies

* **Postman** – Functional API testing and automated API validation
* **Apache JMeter** – Basic performance/load testing
* **JSONPlaceholder** – Public REST API
* **Git & GitHub** – Version control and project submission

---

# Tasks Completed

## 1. Postman Workspace Setup

A Postman Collection was created to organize the API requests used during testing.

The requests were organized using meaningful names and different HTTP methods.

The Postman Environment was also exported as part of the assignment.

### Postman Collection

`JSONPlaceholder API Testing.postman_collection.json`

### Postman Environment

`JSONPlaceholder Environment.postman_environment.json`

---

## 2. GET API Testing

GET requests were used to retrieve data from the JSONPlaceholder API.

### Endpoint Tested

`GET https://jsonplaceholder.typicode.com/posts/1`

The response was validated for the following fields:

* `userId`
* `id`
* `title`
* `body`

The response status code, response time, response structure, and required fields were also validated.

---

## 3. POST API Testing

A POST request was created to simulate adding a new post.

The request body was provided in JSON format and the response was validated to ensure that the request was processed successfully.

---

## 4. PUT API Testing

A PUT request was created to simulate updating an existing post.

The request body and returned response were validated to verify that the update request was processed successfully.

---

## 5. DELETE API Testing

A DELETE request was created to simulate deleting an existing post.

The response status was validated to confirm that the delete request was processed successfully.

---

# 6. Automated Postman Tests

Automated test scripts were created in Postman to validate API responses.

The tests included validations for:

* HTTP status code
* Response time
* Response structure
* Required response fields
* Response field values
* Response data types

The Postman Collection was executed to verify the automated test results.

## Postman Test Run Results

The Postman test execution screenshots are included below.

### Test Run Result 1

![Postman API Test Run Results 1](Postman/Postman/screenshots/Api%20Testing%20Run%20Results-1.png)

### Test Run Result 2

![Postman API Test Run Results 2](Postman/Postman/screenshots/Api%20Testing%20Run%20Results-2.png)

> **Note:** These screenshots are currently stored in the `Postman/Postman/screenshots/` folder in the repository.

---

# 7. JMeter Performance Testing

Apache JMeter was used to perform basic load testing against the JSONPlaceholder API.

### Endpoint Tested

`GET https://jsonplaceholder.typicode.com/posts/1`

## Thread Group Configuration

| Setting                   |     Value |
| ------------------------- | --------: |
| Number of Threads (Users) |        10 |
| Ramp-Up Period            | 5 seconds |
| Loop Count                |         5 |

The configuration generated:

**10 users × 5 loops = 50 requests**

---

## JMeter Test Plan

The JMeter test plan contains:

* Test Plan
* Thread Group
* HTTP Request Sampler
* View Results Tree
* Summary Report

The HTTP Request Sampler was configured as follows:

| Setting  | Value                        |
| -------- | ---------------------------- |
| Protocol | HTTPS                        |
| Server   | jsonplaceholder.typicode.com |
| Method   | GET                          |
| Path     | `/posts/1`                   |

---

## JMeter Screenshots

### HTTP Request Configuration

![JMeter HTTP Request](JMeter/JMeterscreenshots/HTTP%20Request.png)

### Thread Group Configuration

![JMeter Thread Group Configuration](JMeter/JMeterscreenshots/Thread%20Group%20Configuration.png)

### View Results Tree

![JMeter View Results Tree](JMeter/JMeterscreenshots/View%20Results%20Tree.png)

### Summary Report

![JMeter Summary Report](JMeter/JMeterscreenshots/Summary%20report.png)

---

# JMeter Test Results

The load test generated **50 samples**.

The results were:

| Metric                |           Result |
| --------------------- | ---------------: |
| Total Samples         |               50 |
| Average Response Time |           222 ms |
| Minimum Response Time |           127 ms |
| Maximum Response Time |          1147 ms |
| Standard Deviation    |        181.45 ms |
| Error Rate            |            0.00% |
| Throughput            | 9.4 requests/sec |
| Received              |     13.85 KB/sec |
| Sent                  |      1.28 KB/sec |
| Average Bytes         |       1515 bytes |

---

# Performance Analysis

The JMeter test generated the expected **50 requests**, based on 10 virtual users with 5 loop iterations.

The test recorded an **average response time of 222 ms**. The minimum response time was **127 ms**, while the maximum response time was **1147 ms**.

The test achieved a throughput of approximately **9.4 requests per second**.

The error rate was **0.00%**, meaning that all 50 requests completed successfully during this test run.

The variation in response times indicates that individual requests did not all complete in exactly the same amount of time.

> **Note:** Performance results may vary depending on network conditions and the availability and response time of the public JSONPlaceholder service.

---

# Project Structure

```text
Assignment-04-API-Testing/
│
├── README.md
│
├── Postman/
│   ├── JSONPlaceholder API Testing.postman_collection.json
│   ├── JSONPlaceholder Environment.postman_environment.json
│   │
│   └── Postman/
│       └── screenshots/
│           ├── Api Testing Run Results-1.png
│           └── Api Testing Run Results-2.png
│
└── JMeter/
    ├── JSONPlaceholder_Load_Test.jmx
    │
    └── JMeterscreenshots/
        ├── HTTP Request.png
        ├── Summary report.png
        ├── Thread Group Configuration.png
        └── View Results Tree.png
```

---

# How to Run the Postman Tests

1. Install and open Postman.
2. Import `JSONPlaceholder API Testing.postman_collection.json`.
3. Import `JSONPlaceholder Environment.postman_environment.json`.
4. Select the imported environment in Postman.
5. Open the imported collection.
6. Run the individual requests or execute the complete collection.
7. Review the automated test results in the Postman test runner.

---

# How to Run the JMeter Test

1. Install Java.
2. Install Apache JMeter.
3. Open `JSONPlaceholder_Load_Test.jmx`.
4. Verify the Thread Group configuration:

   * Threads: 10
   * Ramp-Up Period: 5 seconds
   * Loop Count: 5
5. Start the test.
6. Review the results using:

   * View Results Tree
   * Summary Report

---

# Submission Contents

This repository contains the required assignment artifacts:

* Postman Collection
* Postman Environment
* Postman test execution screenshots
* JMeter Test Plan (`.jmx`)
* JMeter HTTP Request configuration screenshot
* JMeter Thread Group configuration screenshot
* JMeter View Results Tree screenshot
* JMeter Summary Report screenshot
* README documentation

---

# Conclusion

This assignment provided hands-on experience with both functional API testing and basic performance testing.

Postman was used to test **GET, POST, PUT, and DELETE** API requests and to create automated validations for API responses.

Apache JMeter was used to simulate multiple virtual users accessing the JSONPlaceholder API and to analyze response time, throughput, and error rate.

The JMeter test completed with **50 successful requests and a 0.00% error rate**, demonstrating successful execution of the configured basic load test.

