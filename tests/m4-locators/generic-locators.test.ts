import { test, expect } from "@playwright/test";

test("Generic locators examples", async ({ page }) => {
  await page.goto("");

  await page.locator('.needs-validation label[for="firstName"]').fill("Andrejs");
  await page.locator("//form//button[@id='register']").click();
  
  await expect(page.getByText("Valid last name is required")).toBeVisible();
});
