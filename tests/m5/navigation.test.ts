import { test, expect } from "@playwright/test";

const homeTitle = "Credit Association";
const savingsTitle = "Save with us";

test("Back, forward, reload (refresh) test", async ({ page }) => {
  await page.goto("/");

  await page.goto("/savings.html");
  await expect(page).toHaveTitle(savingsTitle);

  await page.goBack();
  await expect(page).toHaveTitle(homeTitle);

  await page.goForward();
  await expect(page).toHaveTitle(savingsTitle);

  await page.reload();
  await expect(page).toHaveTitle(savingsTitle);
});

test("Coding challenge", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Register" }).click();

  let feedback = page.locator(".invalid-feedback");
  for (const message of await feedback.all()) {
    expect(message).toBeVisible();
  }

  await page.reload();
  for (const message of await feedback.all()) {
    await expect(message).toBeHidden();
  }
});
test("Select test", async ({ page }) => {
  await page.goto("/savings.html");

  const deposit = page.getByTestId("deposit");
  const period = page.getByTestId("period");
  const result = page.getByTestId("result");

  await deposit.fill("100");

  await period.selectOption("6 Months");

  await expect(result).toContainText(
    "After 6 Months you will earn $2.00 on your deposit"
  );

  await period.selectOption({ label: "1 year" });
  await expect(result).toContainText(
    "After 1 Year you will earn $5.00 on your deposit"
  );
});
