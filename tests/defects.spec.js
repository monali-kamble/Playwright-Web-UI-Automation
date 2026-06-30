import { test, expect } from '@playwright/test';

async function loginToEventHub(page) {
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByLabel('Email').fill('monali.kamble@gmail.com');
    await page.getByLabel('Password').fill('Mon@li2026');
    await page.getByRole('button', { name: 'Sign In ' }).click();
    await expect(page).toHaveURL('https://eventhub.rahulshettyacademy.com/');
}

test('Defect: SOLD OUT event card allows navigation to booking page', async ({ page }) => {

    // Reuse existing login flow
    await loginToEventHub(page);

    // Navigate to Browse Events page
    await page.getByRole('link', { name: 'Browse Events →' }).click();
    await expect(page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();

    // Locate the Dilli Diwali Mela card 
    const dilliCard = page.getByTestId('event-card').filter({ hasText: 'Dilli Diwali Mela' });
    await expect(dilliCard).toBeVisible();

    // Click on Dilli Diwali Mela link to navigate to the booking page
    const dilliLink = dilliCard.getByRole('link', { name: 'Dilli Diwali Mela' });
    await expect(dilliLink).toBeVisible();
    await dilliLink.click();

    // Verify User can navigate to the booking page
    await expect(page.getByRole('heading', { name: 'Dilli Diwali Mela' })).toBeVisible();

    await page.waitForLoadState('networkidle');

    //Verify that the URL contains the event ID (assuming the event ID is 3 for Dilli Diwali Mela)
    await expect(page).toHaveURL(/\/events\/3$/);

    // Verify the available field exists
    await expect(page.getByText('Available', { exact: true })).toBeVisible();

    //Verify the SOLD OUT field exists
    await expect(page.getByText('SOLD OUT', { exact: true })).toBeVisible();

    // Evidence screenshot for the defect
    await page.screenshot({
        path: `screenshots/Defect-SOLD-OUT-Booking-Page.png`,
        fullPage: true
    });

});

test('Booking form fields are editable even though event is SOLD OUT', async ({ page }) => {

    // Reuse existing login flow
    await loginToEventHub(page);

   // Navigate to Browse Events page
    await page.getByRole('link', { name: 'Browse Events →' }).click();
    await expect(page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();

    // Locate the Dilli Diwali Mela card 
    const dilliCard = page.getByTestId('event-card').filter({ hasText: 'Dilli Diwali Mela' });
    await expect(dilliCard).toBeVisible();

    // Click on Dilli Diwali Mela link to navigate to the booking page
    const dilliLink = dilliCard.getByRole('link', { name: 'Dilli Diwali Mela' });
    await expect(dilliLink).toBeVisible();
    await dilliLink.click();

    // Verify User can navigate to the booking page
    await expect(page.getByRole('heading', { name: 'Dilli Diwali Mela' })).toBeVisible();

    await page.waitForLoadState('networkidle');

    //Verify that the URL contains the event ID (assuming the event ID is 3 for Dilli Diwali Mela)
    await expect(page).toHaveURL(/\/events\/3$/);

    // Verify the available field exists
    await expect(page.getByText('Available', { exact: true })).toBeVisible();

    //Verify the SOLD OUT field exists
    await expect(page.getByText('SOLD OUT', { exact: true })).toBeVisible();

    // Defect: booking form fields are still editable even though the event is SOLD OUT
    const fullNameField = page.getByLabel('Full Name');
    const emailField = page.getByLabel('Email');
    const phoneField = page.getByLabel('Phone Number');

    await fullNameField.fill('Monali Kamble');
    await emailField.fill('monali.kamble@gmail.com');
    await phoneField.fill('9877654678');

    // Verify entered values are present
    await expect(fullNameField).toHaveValue('Monali Kamble');
    await expect(emailField).toHaveValue('monali.kamble@gmail.com');
    await expect(phoneField).toHaveValue('9877654678');

    // Screenshot evidence for editable SOLD OUT form fields
    await page.screenshot({
        path: `screenshots/Defect-SOLD-OUT-Fields-Editable.png`,
        fullPage: true
    });

});