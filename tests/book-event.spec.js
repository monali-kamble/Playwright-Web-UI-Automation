import { test, expect } from '@playwright/test';

test('End-to-end: Book "Dilli Diwali Mela" successfully', async ({ page }) => {

    // Navigate to Login Page
    await page.goto('https://eventhub.rahulshettyacademy.com/login');

    // Login
    await page.getByLabel('Email').fill('monali.kamble@gmail.com');
    await page.getByLabel('Password').fill('Mon@li2026');
    await page.getByRole('button', { name: 'Sign In ' }).click();

    // Assertion - landed on home
    await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/');

    // Open Browse Events
    await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
    await page.getByRole('link', { name: 'Browse Events →' }).click();

    // Ensure Upcoming Events page
    await expect(page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();

    // Locate the event card for Dilli Diwali Mela and verify it's visible
    const eventCard = page.locator('a, div').filter({ hasText: /Dilli Diwali Mela/i }).first();
    await expect(eventCard).toBeVisible();

    // Click the "Book now" control inside the event card (link or button)
    const bookLink = eventCard.getByRole('link', { name: /Book now/i }).first();
    if (await bookLink.count()) {
        await bookLink.click();
    } else {
        await eventCard.getByRole('button', { name: /Book now/i }).click();
    }

    // Verify event details page is displayed (title visible)
    await expect(page.getByRole('heading', { name: /Dilli Diwali Mela/i })).toBeVisible();

    // Fill booking details
    await page.getByLabel('Full Name').fill('Monali Kamble');
    await page.getByLabel('Email').fill('monali.kamble@gmail.com');
    await page.getByLabel('Phone Number').fill('9877654678');

    // Confirm booking
    const confirmBtn = page.getByRole('button', { name: /Confirm Booking|Confirm|Book/i }).first();
    await confirmBtn.click();

    // Verify confirmation message is displayed
    await expect(page.getByText('Booking Confirmed! 🎉')).toBeVisible();

    // Screenshot after successful booking
    await page.screenshot({
        path: 'screenshots/Booking-Successful.png',
        fullPage: true
    });

});

test('Verify "Dilli Diwali Mela" SOLD OUT event cannot be booked', async ({ page }) => {

    // Navigate to Login Page
    await page.goto('https://eventhub.rahulshettyacademy.com/login');

    // Login
    await page.getByLabel('Email').fill('monali.kamble@gmail.com');
    await page.getByLabel('Password').fill('Mon@li2026');
    await page.getByRole('button', { name: 'Sign In ' }).click();

    // Assertion - landed on home
    await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/');

    // Open Browse Events
    await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
    await page.getByRole('link', { name: 'Browse Events →' }).click();

    // Ensure Upcoming Events page
    await expect(page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();

    // Locate the event card for Dilli Diwali Mela and verify it's visible
    const eventCard = page.locator('a, div').filter({ hasText: /Dilli Diwali Mela/i }).first();
    await expect(eventCard).toBeVisible();

    // Verify SOLD OUT option is displayed on the card
    await expect(eventCard.getByText(/SOLD OUT/i).first()).toBeVisible();

    // Screenshot showing SOLD OUT badge on the event card
    await page.screenshot({
        path: 'screenshots/Dilli-Diwali-SOLD-OUT-Card.png',
        fullPage: true
    });

});

