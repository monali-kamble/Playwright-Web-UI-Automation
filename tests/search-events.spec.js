import { test, expect } from '@playwright/test';

test('Verify that User is able to search event successfully', async ({ page }) => {

    //Navigate to Login Page
    await page.goto('https://eventhub.rahulshettyacademy.com/login');

    //Login
    await page.getByLabel('Email').fill('monali.kamble@gmail.com');
    await page.getByLabel('Password').fill('Mon@li2026');
    await page.getByRole('button', { name: 'Sign In ' }).click();

    //Assertion
    await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/');

    await expect(page.getByRole('link',
        { name: 'Browse Events →' })).toBeVisible();

    //Browse Events
    await page.getByRole('link', { name: 'Browse Events →' }).click();

    //Assertion
    await expect(page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();

    //Search Event
    const searchBox = page.getByPlaceholder('Search events, venues…');
    await searchBox.fill('Dilli');

    //Assertion
    await expect(page.getByText(/Dilli/i).first()).toBeVisible();


    await expect(page.locator('data-testid=event-card').first()).toContainText('Dilli');


    await page.screenshot({
        path: 'screenshots/Search-events.png',
        fullPage: true
    });
});
