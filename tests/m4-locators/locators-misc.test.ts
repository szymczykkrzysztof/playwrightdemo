import { test, expect } from "@playwright/test";

test('Multiple matches tests', async({page})=>{
    await page.goto('/');
    await page.getByRole('button',{name:'Register'}).click();

    const feedback = page.locator('.invalid-feedback');

    await expect(feedback).toHaveCount(3);

    for (const message of await feedback.all()){
        console.log(`${await message.textContent()}`);
    }

});

