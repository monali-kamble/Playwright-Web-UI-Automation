import { test, expect } from '@playwright/test';

test('Verify that Login to EventHub is successful', async ({ page }) => {

    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByLabel('Email').fill('monali.kamble@gmail.com');
    await page.getByLabel('Password').fill('Mon@li2026');
    await page.getByRole('button', { name: 'Sign In ' }).click();
    await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/');

    await page.screenshot({
        path: 'screenshots/Login-Successful.png',
        fullPage: true
    });

});


test('Login fails with invalid Username', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByLabel('Email').fill('monalikamble@gmail.com');
    await page.getByLabel('Password').fill('Mon@li2026');
    await page.getByRole('button', { name: 'Sign In ' }).click();
    //assertion:
    await expect(page.getByText('Invalid email or password')).toBeVisible();

    await page.screenshot({
        path: 'screenshots/Invalid-Login1.png',
        fullPage: true
    });

});


test('Login fails with invalid password', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByLabel('Email').fill('monalikamble@gmail.com');
    await page.getByLabel('Password').fill('Monali2026');
    await page.getByRole('button', { name: 'Sign In ' }).click();
    //assertion:
    await expect(page.getByText('Invalid email or password')).toBeVisible();

    await page.screenshot({
        path: 'screenshots/Invalid-Login2.png',
        fullPage: true
    });
});



test('Login with empty credentials', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByRole('button', { name: 'Sign In ' }).click();

    //Assertion:
    await expect(page.getByText('Enter a valid email')).toBeVisible();
    await expect(page.getByText('Password must be at least 6 characters')).toBeVisible();

    await page.screenshot({
        path: 'screenshots/Empty-Login2.png',
        fullPage: true
    });
});
