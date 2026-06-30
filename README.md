## Practice Application
https://eventhub.rahulshettyacademy.com/


# Playwright Web UI Automation

End-to-end web UI automation project built using Playwright and JavaScript.

## Tech Stack
- Playwright
- JavaScript
- Node.js
- Git & GitHub
- GitHub Copilot

## Project Structure

```
tests/
├── login.spec.js
├── search-events.spec.js
├── book-event.spec.js
└── defects.spec.js

screenshots/
test-data/
pages/
utils/
```

## Automated Test Scenarios

### Login Functionality
- Valid Login
- Invalid Login
- Empty Login Validation

### Search Functionality
- Search events by name
- Verify filtered search results

### Event Booking Functionality
- Book available event successfully
- Verify SOLD OUT event cannot be booked

### Defect Reproduction Scenarios
1. SOLD OUT event card allows navigation to booking page.
2. Booking form fields are editable even though the event is SOLD OUT.

## Screenshots
Execution screenshots and defect evidence are available in the `screenshots` folder.

## Run Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run tests in UI mode:

```bash
npx playwright test --ui
```

Generate HTML report:

```bash
npx playwright show-report
```

## Author

Monali Kamble  
Senior QA Engineer | Manual Testing | API Testing | Playwright Automation