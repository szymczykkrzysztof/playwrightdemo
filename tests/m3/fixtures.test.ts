import { test, chromium, webkit, firefox } from "@playwright/test";

test("Test with Page fixture", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  console.log("Text content:", await page.title());
});
test("Other fixtures", async ({ browserName, browser, context, page }) => {
    
});
