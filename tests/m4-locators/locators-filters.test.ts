import { test, expect } from "@playwright/test";
import { log } from "console";
import { CLIENT_RENEG_WINDOW } from "tls";

test("Filtering demo", async ({ page }) => {
  await page.goto("/savings.html");

  const rows = page.getByRole("row");
  console.log(await rows.count());

  const row = page.getByRole("row").filter({ hasText: "Competition" });
  console.log(await row.textContent());

  const cell = page
    .getByRole("row")
    .filter({ hasText: "Competition" })
    .getByRole("cell")
    .nth(1);

  console.log(await cell.textContent());
  expect(await cell.textContent()).toBe('2%');
});
