# 🧪 Playwright UI Automation Framework (CI Enabled)

This repository contains a **Playwright-based UI automation framework** built to automate a **shopping web application**, following industry best practices and integrated with **Jenkins CI** for continuous testing.

---

## 🚀 Tech Stack

- **Playwright**
- **JavaScript**
- **Node.js**
- **Jenkins (CI)**
- **GitHub**

---

## 🌐 Application Under Test

- **Website:** https://www.saucedemo.com  
- **Type:** E-commerce / Shopping application

---

## 🧩 Framework Features

- ✅ Page Object Model (POM)
- ✅ Data-driven testing using JSON
- ✅ End-to-End (E2E) test scenarios
- ✅ Headless execution for CI environments
- ✅ Jenkins CI integration
- ✅ HTML test reports
- ✅ Screenshots & videos on test failure
- ✅ Retry mechanism for flaky tests

---

## 📁 Project Structure

```text
├── tests/              # Test cases
├── pages/              # Page Object classes
├── test-data/          # Test data (JSON)
├── playwright.config.js
├── Jenkinsfile         # Jenkins CI pipeline
├── package.json
└── README.md


## Run Tests

 npx playwright test

## View Report

npx playwright show-report
