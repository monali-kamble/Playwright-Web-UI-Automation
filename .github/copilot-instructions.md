# Playwright Automation Project Instructions

You are an expert in JavaScript and modern Playwright end-to-end testing.

## General Rules
- Write clean, readable and maintainable Playwright tests.
- Use async/await.
- Add meaningful comments for major test steps.
- Follow Arrange, Act, Assert pattern.

## Locator Strategy
Always prefer Playwright recommended locators in the following order:

1. page.getByRole()
2. page.getByLabel()
3. page.getByPlaceholder()
4. page.getByTestId()
5. locator().filter()

Avoid:
- XPath
- CSS selectors based on class names
- nth-child selectors
- locator('a, div').first()
- fragile selectors.

## Assertions
Always use web-first assertions:

```javascript
await expect(locator).toBeVisible();
await expect(locator).toHaveText();
await expect(locator).toHaveURL();
await expect(locator).toBeEnabled();
await expect(locator).toBeDisabled();
```

Avoid:

```javascript
page.waitForTimeout()
```

unless debugging temporarily.

## Test Design
- Keep one scenario per test.
- Add screenshots after successful flow or defect evidence.
- Use descriptive test names.
- Prefer reusable variables for locators.

## Defect Validation
When writing defect tests:
- Add comments explaining the defect.
- Add assertions proving the defect.
- Capture screenshots as evidence.

## Code Style
- Prefer const over let.
- Use regex only when necessary.
- Avoid hardcoded waits.
- Prefer stable locators using data-testid.

## Project Structure

tests/
pages/
test-data/
screenshots/
utils/

Create new test files inside the tests folder.

Follow the coding style already present in the project.